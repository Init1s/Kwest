# Internal Linking Architecture — Kwest Barbershop

> How the 782 URLs in `topic-map.md` link to each other. No page may exist without a hub and at least three siblings — that's the no-orphan rule. Anchor text must vary; never link an entire cluster with the same string.

## Sitemap shape

```
/
├── /services/                       Service hub index (NEW)
│   ├── /services/haircut
│   ├── /services/the-lux-special
│   ├── /services/scissor-cut
│   ├── /services/fades                          [hub]
│   ├── /services/skin-fade                      [hub]
│   ├── /services/taper-fade                     [hub]
│   ├── /services/line-up                        [hub]
│   ├── /services/shape-up                       [hub]
│   ├── /services/beard-sculpt                   [hub]
│   ├── /services/beard-line-up
│   ├── /services/straight-razor-shave
│   ├── /services/wedding-grooming               [hub]
│   ├── /services/groomsmen-party
│   ├── /services/teen-haircut
│   ├── /services/first-time-haircut
│   ├── /services/private-appointment
│   └── /services/grooming-package
│
├── /styles/                         Style index (NEW)
│   ├── /styles/low-fade, /mid-fade, /high-fade, …  ← Family 2 (135)
│
├── /compare/                        Comparison index (NEW)
│   └── /compare/<a>-vs-<b>                          ← Family 3 (115)
│
├── /for/                            Audience index (NEW)
│   └── /for/<audience>                              ← Family 4 (155)
│
├── /best-for/                       Problem index (NEW)
│   └── /best-for/<problem>                          ← Family 5 (120)
│
├── /beard/                          Beard hub index (NEW)
│   └── /beard/<topic>                               ← Family 6 (65)
│
├── /waves/                          Waves hub index (NEW)
│   └── /waves/<topic>                               ← Family 7 (60)
│
├── /near/                           Hyperlocal index (NEW)
│   └── /near/<landmark>                             ← Family 8 (35)
│
├── /guide/                          Trend / cadence index (NEW)
│   └── /guide/<topic>                               ← Family 9 (55)
│
├── /answers/                        AEO index (extended)
│   └── /answers/<question>                          ← +20 new
│
└── /areas/                          Geo (retained; pruned in indexation-risk-report.md)
```

Each Index page (`/styles/`, `/compare/`, etc.) is itself a real, ranking page. It lists every URL in the family with primary KW + a 1-line teaser. Internal links go in two directions: index → spoke, spoke → index. No "see all" page is allowed to be a thin dump.

## Hub → spoke map

| Hub | Spokes pulled from |
|---|---|
| **Haircut** (`/services/haircut`) | Most of Family 2 (classic + cultural cuts), majority of Family 5, audience pages in Family 4 not tied to LUX/Wedding/House Call/Hot Towel |
| **The LUX Special** (`/services/the-lux-special`) | Executive / wedding / photoshoot / "occasion" pages from Family 2 and 4; high-end audience pages |
| **Haircut + Beard** (`/services/haircut-and-beard`) | Style + Beard combo pages |
| **Hot Towel Shave** (`/services/hot-towel-shave-and-haircut`) | `/styles/clean-shaved-head`, `/styles/shaved-head-beard`, `/answers/...shave...`, all Family 6 razor-finish entries |
| **Scissor Cut** (`/services/scissor-cut`) | Family 2 curly / textured / coily cluster, Family 7 waves cluster (paired hub) |
| **House Call VIP** (`/services/house-call-vip`) | `/services/wedding-grooming`, `/for/home-bound`, `/for/elderly-housecall`, `/for/dementia-friendly`, `/for/yacht-owners`, `/for/55-plus-communities` |
| **After Hours** (`/services/after-hours-haircut`) | `/for/fau-late-night-haircut`, `/for/military-active`, `/for/pilots`, `/services/private-appointment`, hospital-worker `/near/...-hospital` pages |
| **Kids** (`/services/kids-haircut`) | All Family 4f (family / kids / teens) audience pages, `/for/back-to-school`, `/for/autism-friendly-haircut` |
| **Fades** (`/services/fades`) | All Family 2a fade variants, comparison Family 3a |
| **Skin Fade** (`/services/skin-fade`) | Skin / bald / zero fade variants, `/waves/wave-skin-fade`, etc. |
| **Taper Fade** (`/services/taper-fade`) | Taper-family entries in Family 2a |
| **Line-up / Shape-up** (`/services/line-up`, `/services/shape-up`) | Nape pages, waves shape-up entries, beard line-up entries |
| **Beard sculpt** (`/services/beard-sculpt`) | All of Family 6 |
| **Wedding** (`/services/wedding-grooming`) | `/for/grooms`, `/for/groomsmen`, `/for/best-man`, `/for/wedding-day`, `/styles/wedding-haircut` |

## Spoke linking pattern (the no-orphan rule)

Every spoke page must contain, in this order:

1. **Breadcrumb** → `Home / <Cluster index> / <Hub> / <This page>` — both crumbs are real links. Emit as `BreadcrumbList` JSON-LD (already in `src/lib/seo.ts`).
2. **Inline hub link** in the first paragraph: anchor text contains the hub's primary keyword (`"the LUX Special"` not `"book here"`).
3. **Sibling block of 3–5 links** to other spokes in the same hub. Anchor text is each sibling's primary KW. This block sits under an `<h2>Related</h2>` after the main content.
4. **Cross-cluster link** to one Family 3 (comparison) page or one Family 5 (problem) page that touches the same intent. Example: `/styles/low-fade` links to `/compare/low-fade-vs-mid-fade` and `/best-for/receding-hairline`.
5. **Booking CTA** — points at the relevant service's Squire URL. Service-specific deep links if Squire supports them; otherwise the global booking URL.

### Worked example — `/styles/low-fade`

```
Home / Styles / Fades / Low Fade

Breadcrumb (4 crumbs, all links except current)

H1: Low Fade Haircut
H2: What a low fade looks like                ← visual + description
H2: When to choose a low fade                 ← audience, face-shape notes
H2: How to maintain a low fade                 ← cadence link → /guide/3-week-haircut-rotation
H2: Variations                                ← links to /styles/low-skin-fade, /styles/low-taper-fade
H2: Related
   - /compare/low-fade-vs-mid-fade
   - /styles/mid-fade
   - /styles/taper-fade
   - /styles/burst-fade
   - /best-for/receding-hairline
CTA: Book a Low Fade →  (Haircut on Squire)
```

Five outbound internal links, one cross-cluster, one CTA. That's the minimum.

## Sibling clustering rules

To avoid every spoke linking to the same five spokes (which Google reads as templated), siblings are chosen by a deterministic algorithm:

1. **Most-related** — closest by named attribute (low fade → mid fade, not low fade → flattop).
2. **One up-tier** — link to one hub-adjacent page (e.g. low fade → /services/fades hub).
3. **One cross-cluster** — pick from Family 3 first, fall back to Family 5.
4. **One demographic anchor** — if the spoke names an audience naturally, link to that `/for/<audience>` page.
5. **One trend or cadence** — link to a Family 9 page (often `/guide/3-week-haircut-rotation` or `/guide/best-mens-haircuts-2026`).

The result: each spoke's sibling block is unique because the cross-cluster + demographic + trend slots vary per page.

## Breadcrumb scheme

Two-level for service hubs and indexes; three-level for spokes; four-level for sub-spokes (mostly Family 2a fade variants under Family 2 + Fades hub).

| Page | Breadcrumb |
|---|---|
| `/services/haircut` | Home / Services / Haircut |
| `/services/skin-fade` | Home / Services / Fades / Skin Fade |
| `/styles/low-fade` | Home / Styles / Fades / Low Fade |
| `/styles/low-skin-fade` | Home / Styles / Fades / Skin Fade / Low Skin Fade |
| `/compare/low-fade-vs-mid-fade` | Home / Compare / Low Fade vs Mid Fade |
| `/for/fau-students` | Home / Audiences / FAU Students |
| `/best-for/receding-hairline` | Home / Best For / Receding Hairline |
| `/beard/circle-beard` | Home / Beard / Circle Beard |
| `/waves/360-waves-guide` | Home / Waves / 360 Waves Guide |
| `/near/fau` | Home / Near / FAU |
| `/guide/best-mens-haircuts-2026` | Home / Guides / Best Men's Haircuts 2026 |
| `/answers/how-much-to-tip-a-barber` | Home / Answers / How Much to Tip a Barber |

`BreadcrumbList` JSON-LD emitted on every spoke, matching visible crumbs verbatim.

## Global navigation hierarchy

The existing top-nav (`Services / Gallery / About / Contact`) is too narrow for an 800-page site. Recommended evolution:

- **Top nav (visible)** — same four labels, unchanged. Mobile parity stays.
- **Mega-menu under "Services"** — opens on hover/tap with three columns:
  - **Cuts** → links to Family 1 hubs + the `/styles/` index
  - **Beard & Shave** → links to Hot Towel, Beard sculpt, Straight Razor, `/beard/` index
  - **Special** → House Call VIP, After Hours, LUX Special, Wedding, Private appointment
- **Footer megamenu** — three columns mirroring the mega-menu, plus a fourth column with `/answers/`, `/guide/`, `/best-for/`, `/near/` index links. Keeps every cluster index 1 click from any page.
- **In-page sidebars** are NOT introduced; current single-column reading flow is preserved. Cross-linking happens via the related block at the bottom and inline contextual links.

## Anchor-text policy

- Never link the same destination with the same anchor text twice on one page.
- Hub-page anchor variants per page (for `/services/haircut`):
  - `the standard Haircut`, `book a Haircut`, `the maintenance Haircut`, `a regular cut at the chair`.
- Booking CTA anchor variants:
  - `Book on Squire`, `Lock in a slot on Squire`, `Book a {service.shortName}`, `Reserve the chair`.
- Avoid generic "click here" / "read more" / "learn more" across the entire map — exact-match keyword variations only.

## Design system & page templates

> **User directive (2026-06-15):** every page in this map must inherit the existing site's design language. No off-brand templates. This section is binding for the implementation phase.

### Tokens to use (from `src/app/globals.css`)

| Surface | Use |
|---|---|
| `bg-ink` (#0A0A0A) | Default page background, hero |
| `bg-blade` (#111) | Alt section background, cards |
| `bg-steel`, `bg-chrome` | Borders, panel dividers |
| `text-bone` (#E8E2D9) | Headlines, primary copy |
| `text-smoke` (#9A9A9A) | Captions, mono kickers |
| `text-ash` (#8C8C8C) | Secondary body copy |
| `text-gold` (#FF4D1A) | Brand accent, hover, primary CTA bg |
| `text-lime` (#BFE85A) | Secondary accent (sparingly), success states |
| `text-razor` (#CC2200) | "Closed / Danger" only — not for links |

### Type stack

| Token | Role |
|---|---|
| `font-display` (Knewave) | H1, H2 hero, section titles |
| `font-script` (Permanent Marker) | "Kwest" wordmark only (do not reuse for body H1s on long-tail pages) |
| `font-body` (Outfit) | All paragraph copy |
| `font-mono` (Azeret Mono) | Kickers, breadcrumbs, captions, prices |

### Page template (reusable)

Every spoke renders via a shared layout based on the existing service-page pattern at `src/app/services/[slug]/page.tsx`:

```
<main className="bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
  <div className="mx-auto max-w-4xl px-6">

    <nav aria-label="Breadcrumb" …>                      ← uppercase mono trail
    <header className="mb-12 border-b border-chrome/60 pb-10">
      <h1 font-display uppercase clamp(2.25rem, 6vw, 4.5rem) text-bone>
      <p font-mono text-xs uppercase tracking-widest text-smoke>
    </header>

    <p font-body text-base leading-relaxed text-bone mb-12>
      Lede / direct-answer paragraph
    </p>

    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
      <section> H2 font-display uppercase + bullet list w/ gold-tick rule </section>
      <section> H2 font-display uppercase + bullet list w/ lime-tick rule </section>
    </div>

    {has comparison or FAQ block} <section className="mt-16 border-t border-chrome/60 pt-12"> … </section>

    <section className="mt-16 border-t border-chrome/60 pt-12">
      <a href={squireUrl} className="inline-block bg-gold px-7 py-3.5 font-display
                                     text-sm uppercase tracking-widest text-ink
                                     transition-all hover:bg-gold-light">
        Book {service.shortName} on Squire
      </a>
    </section>

    <section className="mt-16 border-t border-chrome/60 pt-12">  ← Related
      <h2 font-mono text-[10px] uppercase tracking-ultra text-smoke>Related</h2>
      <ul grid gap-2 md:grid-cols-2> 5 sibling links </ul>
    </section>

  </div>
</main>
```

This is the exact pattern already on `/services/[slug]`, `/areas/[slug]`, `/answers/[slug]`. The new clusters (`/styles`, `/compare`, `/for`, `/best-for`, `/beard`, `/waves`, `/near`, `/guide`) reuse it 1:1 — only the inner two-column block content varies by family.

### Components to reuse (`src/components/`)

- `Reveal` / `RevealGroup` / `RevealItem` for entrance animations. Already respect `prefers-reduced-motion` — every new spoke wraps its content in `Reveal` for consistent feel.
- `MagneticButton` for primary "Book" CTAs.
- `Navbar` + `Footer` are the global chrome — no per-cluster nav.
- `InstagramIconLink` for IG handoffs.
- The breadcrumb pattern from `src/app/services/[slug]/page.tsx` (lines 74–87) is the source of truth. New routes copy it.

### Motion & accessibility constraints (already shipped)

- Animations honor `useReducedMotion()` — no opt-out per page.
- Skip-link → `#main-content` — every new `<main>` must carry `id="main-content"`.
- Focus-visible gold ring is global; no per-page override.
- `text-ash` (#8C8C8C) clears 4.5:1 on `bg-ink` and `bg-blade` — use for all secondary body copy; do not introduce darker greys.

### Structured data per family

| Family | Schema |
|---|---|
| 1 Service hubs | `Service` + `Offer` + `BreadcrumbList`; `provider` and `employee` linked to existing `BarberShop` + `Person` @ids |
| 2 Style pages | `Article` (subtype `HowTo` where steps exist) + `BreadcrumbList`; `mentions` array names the cut + related cuts |
| 3 Comparison pages | `Article` + `BreadcrumbList`; pair as `about` array with two `Thing` entries |
| 4 Demographic pages | `Article` + `BreadcrumbList`; `audience` field set to the demographic |
| 5 Problem pages | `Article` + `BreadcrumbList` + small `FAQPage` for the "what if I have X" Q/A pair |
| 6 Beard pages | `Article`; `Service` reference where the page maps to a bookable Beard sculpt / line-up |
| 7 Waves pages | `Article` + `HowTo` for the technique guides; `Service` reference to Scissor Cut + Skin Fade |
| 8 Hyperlocal | Reuse existing `BarberShop` schema + add `geo` from the landmark; `BreadcrumbList`; no new `LocalBusiness` per landmark (avoids spam signal) |
| 9 Guide pages | `Article` + `BreadcrumbList`; `datePublished` + `dateModified` so seasonal refreshes signal freshness |
| Answers (extended) | Same QAPage + FAQPage + Speakable pattern as the existing 6 |

Every new spoke emits JSON-LD via `jsonLdScript(...)` from `src/lib/seo.ts` — no per-page hand-rolled schema.

### Image strategy

- Hero portrait on style pages: pull from the curated B&W gallery (`src/data/gallery.ts`). Reuse photos that demonstrate the named cut.
- Comparison pages: side-by-side B&W portraits, same gallery source, matched tone (the existing autocontrast pipeline applies).
- Demographic / problem pages: text-only is acceptable — the existing brand poster aesthetic doesn't require a photo on every page.
- All `next/image` with `fill` + `sizes`, non-empty `alt`, `draggable={false}` per the gallery scroll-fix pattern.

## What stays orphan-prone (and how to fix)

If a Family 4 demographic page like `/for/colombian-mens-hair` ships without any incoming links, it's orphan-prone. The mitigation:

- Every Family 5g cultural / heritage problem page links to the matching Family 4 audience page (already in the sibling rule).
- Each `/near/<landmark>` page links to 2–3 Family 4 audience pages logical to that landmark (e.g. `/near/fau` links to `/for/fau-students`, `/for/fau-internship-interview-haircut`).
- The `/for/` index page lists all audience pages — that's one canonical incoming link per audience.

No spoke ships without at least three incoming links from other pages (one from its hub, one from a sibling, one from its index).
