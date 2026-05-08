# CLAUDE.md

Operating notes for AI-assisted development on this repo. Keep it current — if a convention or fact below stops being true, fix it here in the same change.

## What this is

Marketing site for **Kwest The Barber** (Boca Raton, FL). Single-page Next.js app (App Router, static export) that books through Squire and pulls Instagram via the Basic Display API at build time.

- Source: `kwest-barber/` (Next.js project root). Repo root has only `.github/`, `Images/`, `README.md`, `CLAUDE.md`.
- Deployed today: GitHub Pages at `https://init1s.github.io/Kwest/` via `.github/workflows/deploy.yml`.
- Migrating to: AWS Amplify on `kwestthebarber.com`. See `kwest-barber/docs/AWS-SETUP.md` and `kwest-barber/amplify.yml`.

## Quality bar (non-negotiable)

The user has set the standard: **best practices in AWS, coding, and security. No `as any`. No gaps. Don't ask between rigorous and pragmatic — pick rigorous and execute.**

Before any commit, **all of these must pass clean** from `kwest-barber/`:

```
npm run typecheck     # tsc --noEmit, strict mode
npm run lint          # eslint, Next core-web-vitals + typescript
npm run build         # next build, must succeed
npm run audit:security  # npm audit --omit=dev --audit-level=high
npm run test          # Playwright suite
```

`scripts/lighthouse-audit.js` is run with `npm run test:lighthouse` — exercise it before significant UI changes.

### Hard rules

- **No `as any`.** No `@ts-ignore`, `@ts-expect-error`, `@ts-nocheck`. Fix the type instead.
- **No hardcoded color literals** that already exist as CSS variables in `src/app/globals.css`. Use `bg-gold`, `text-lime`, etc., or `rgba(...)` only when the alpha channel is required and the variable doesn't expose one.
- **No new dependencies** without first confirming there's no smaller stdlib/existing-dep solution. If added, pin exact versions (e.g., `"next": "16.2.6"`, not `^16.2.6`) for reproducibility.
- **External links** use `target="_blank" rel="noopener noreferrer"`.
- **Images** always have non-empty `alt`. Use `next/image` with `fill` + `sizes` or explicit `width`/`height`.
- **`process.env.NEXT_PUBLIC_BASE_PATH`** prefixes every `/images/...` reference (because basePath is `/Kwest` in prod today).

### Accepted risks (revisit on every dependency bump)

- `npm audit` reports two moderate-severity advisories in `postcss` bundled inside `next`. Exposure is build-time only (malicious CSS authored into the repo would already require write access). The "fix" suggested by `npm audit fix --force` is a downgrade to `next@9.3.3`, which is not viable. We track this and re-evaluate on every Next.js minor bump.

## Architecture

### Sections (single-page, `src/app/page.tsx`)

```
Hero → TickerBand → Services → Transformations → About → InstagramFeed
     → Testimonials → Contact → Booking
```

Each section is a self-contained component under `src/components/sections/`. Add a new section by creating the file, importing into `page.tsx`, and registering its anchor (`#id`) in:

- `src/components/layout/Navbar.tsx` `navLinks`
- `src/components/layout/Footer.tsx` Connect column

### UI primitives (`src/components/ui/`)

- **`Reveal`** / **`RevealGroup`** / **`RevealItem`** — Framer-motion entrance animations. Wrap any new section content for consistent feel.
- **`MagneticButton`** — wraps CTAs with a magnetic hover effect. Reach for this instead of inventing new button hover states.
- **`TextScramble`**, **`ClipReveal`**, **`Intro`** — used by Hero/Intro splash. Don't duplicate; reuse.
- **`BeforeAfter`** — slider for transformation tiles. Photos must share the same aspect ratio (currently the after JPEG is padded to 3:5 in `scripts/process-transformations.py`; the before sits at native 2:3 and uses `object-bottom` for vertical alignment parity).

### Styling

Tailwind v4 with a custom theme in `src/app/globals.css`. Brand tokens:

- **Orange** (primary): `--color-gold` `#FF4D1A`, `--color-gold-light`, `--color-gold-dark`
- **Lime** (secondary): `--color-lime` `#BFE85A`, `--color-lime-light`, `--color-lime-dark`
- **Surfaces**: `--color-ink` `#0A0A0A`, `--color-blade` `#111111`, `--color-steel` `#1C1C1C`, `--color-chrome` `#2A2A2A`
- **Text**: `--color-bone` `#E8E2D9`, `--color-smoke` `#9A9A9A`, `--color-ash` `#6B6B6B`
- **Razor red** `#CC2200` is reserved for "danger / closed" semantic use only.

Variables named `gold-*` carry the orange palette for legacy reasons — renaming would touch ~100 sites. Don't introduce new aliases.

### Image pipeline

The `kwest-barber/scripts/` directory holds Python (Pillow) tools that pre-process raster assets:

- `logo-to-png.py` — JPEG → transparent PNG with soft luminance threshold (`28..80`) so JPEG noise around the black bg doesn't produce a halo. Run once when the brand logo source changes.
- `favicon.py` — generates `src/app/favicon.ico`, `icon.png`, `apple-icon.png` from `kwest-logo.png`. Re-run if the logo changes.
- `process-transformations.py` — bakes EXIF orientation and pads the after photo to a 3:5 aspect with `bg-blade` color. Re-run when transformation source photos change.

**These scripts are run manually**, not by CI. They write into `public/images/` and `src/app/`. Track the outputs in git; the source originals live in `Images/` at the repo root.

### Environment variables

Set at build time only (this is a static export):

| Name | Purpose | Where set |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Path prefix for assets when not on a custom domain. `/Kwest` on GH Pages, `""` on Amplify w/ custom domain. | `.github/workflows/deploy.yml` (GH); Amplify console (AWS) |
| `NEXT_PUBLIC_SQUIRE_BOOKING_URL` | Booking link target. Currently `https://getsquire.com/booking/book/a-barbershop-called-kwest-boca-raton/barber/luc-coriolan/services`. | Same |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used in `robots.ts`, `sitemap.ts`, OG metadata). `https://kwestthebarber.com`. | Same |
| `INSTAGRAM_ACCESS_TOKEN` | Long-lived IG Basic Display token for the gallery feed. Optional; without it the section shows a placeholder. | `.github/workflows/deploy.yml` (GH secret); SSM/Amplify env (AWS) |

## Security posture

- **`output: "export"`** means the `headers()` config in `next.config.ts` is **not applied** to the deployed site (Next.js prints a warning during build). Real security headers must be configured at the hosting layer:
  - GH Pages: not configurable. Limited mitigation via `<meta http-equiv>` is in `<head>` (CSP `frame-ancestors` cannot be set this way).
  - Amplify (target): set `customHeaders` in `amplify.yml`, or attach a CloudFront response-headers policy.
- All external links use `rel="noopener noreferrer"` (verified by Playwright `homepage.spec.ts`).
- No secrets in repo. The only "secret-shaped" thing is `INSTAGRAM_ACCESS_TOKEN`, which lives only in CI/Amplify env and is consumed at build time.
- `npm audit` clean except for the one accepted-risk noted above.

## Deployment

### Today: GitHub Pages

- `output: "export"` writes to `kwest-barber/out/`.
- `.github/workflows/deploy.yml` triggers on push to `main`, builds, uploads `out/` as the Pages artifact.
- `basePath: "/Kwest"` and `assetPrefix: "/Kwest/"` in `next.config.ts` because GH Pages serves the project at `/Kwest/`.

### Tomorrow: AWS Amplify on `kwestthebarber.com`

Migration checklist (do not skip):

1. **`amplify.yml`**: change `artifacts.baseDirectory` from `.next` to `out` — the current value is wrong for a static export and the build will publish nothing useful.
2. **`next.config.ts`**: set `basePath` and `assetPrefix` to `""` once a custom domain is in front of the deployment. Keep the prod toggle conditional on a clearer signal than `NODE_ENV`.
3. **`docs/AWS-SETUP.md`**: the Squire URL example is stale — replace with the current value above.
4. **DNS**: `kwestthebarber.com` is currently at GoDaddy Website Builder. Re-point to Amplify per Amplify's domain-management instructions, then remove any leftover GoDaddy site.
5. **Custom headers**: add a `customHeaders` block to `amplify.yml` (CSP, Strict-Transport-Security, X-Frame-Options, Permissions-Policy, etc.).
6. **Preview deploys**: enable in Amplify console so each PR gets a unique URL before merge.
7. **Branch protection on `main`** in GitHub: require typecheck + lint + build + tests to pass before merge.

## Conventions

- **Sections**: `<section id="..." className="bg-... px-6 py-24 md:py-32">`. The `id` is the nav anchor; padding is uniform across sections.
- **Section headers**: small mono "kicker" + `font-display` headline + lead paragraph. Mirrors the `About`/`Services`/`Contact` pattern.
- **Container**: `mx-auto max-w-7xl` with `px-6` (already on the section).
- **Animations**: prefer composing existing `Reveal*` / `Magnetic*` / `ClipReveal` over hand-rolling new motion. New motion utilities live in `src/components/ui/`.
- **State**: client-only interactive bits (`Navbar`, `BeforeAfter`, etc.) carry `"use client"` at the top. Server-only bits stay default.

## Commit hygiene

- Conventional commit shape isn't enforced but commit messages should explain *why* in the body. Subject ≤ 70 chars.
- Don't commit generated test artifacts (`playwright-report/`, `test-results/`) — `.gitignore` covers these.
- Don't commit `.claude/settings.local.json`, OS junk, or `Images/` (raw originals are intentionally kept local).
