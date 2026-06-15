# Barbershop Baseline — Kwest Barbershop

> Discovery audit. Step 1 of the local SEO topic-map work in `docs/research/`.

## Business overview

| Field | Value |
|---|---|
| Legal name | Kwest Barbershop |
| Public brand | Kwest The Barber |
| Street address | 2100 N Federal Hwy #24 |
| City / State / Zip | Boca Raton, FL 33431 |
| Country | United States |
| Position | North Federal Highway corridor, just north of Glades Rd, ~3 min from FAU |
| Phone | (not currently listed in seo.ts; placeholder for GBP sync) |
| Booking platform | Squire — `getsquire.com/booking/book/a-barbershop-called-kwest-boca-raton/barber/luc-coriolan/services` |
| Operator | Kwest (Luc Coriolan) — 18+ years in the chair, 2,400+ regulars |
| Hours | Tue–Fri 10–7, Sat 9–5, Sun 11–4, Mon closed |
| Instagram | `@kwest_the_barber` |
| Tools (current) | JRL clippers |
| Tools (historical) | Wahl Seniors — origin-story reference in About copy |
| Specialty signal | Textured / curly hair, scissor work, one-chair private experience |
| Service mode | In-shop appointment + walk-in + private after-hours + house call |
| Domain | `kwestthebarber.com` (target — currently on GoDaddy Website Builder, migrating to AWS Amplify) |
| Current hosting | GitHub Pages at `init1s.github.io/Kwest/` |

## Services inventory

Source of truth: `src/data/services.ts`. Eight services, four price tiers, four distinct intent buckets (maintenance / signature experience / private booking / specialty).

| Slug | Name | Price | Duration | Intent bucket |
|---|---|---|---|---|
| `haircut` | Haircut | $45 | 1 hr | Maintenance entry tier |
| `haircut-and-beard` | Haircut and Beard | $60 | 1 hr | Maintenance combo |
| `scissor-cut` | Scissor Cut | $60 | 1 hr 30 min | Specialty / textured-hair |
| `hot-towel-shave-and-haircut` | Hot Towel Shave & Haircut | $85 | 1 hr 15 min | Ritual / experience tier |
| `the-lux-special` | The LUX Special | $130 | 1 hr 30 min | Signature flagship |
| `house-call-vip` | House Call VIP | $150 | 2 hr 30 min | On-location private |
| `after-hours-haircut` | After Hours Haircut | $100 | 1 hr 30 min | Off-hours private |
| `kids-haircut` | Kids Haircut | $35 | 45 min | Family tier (≤14) |

Implicit catalog (not separately bookable but performed inside the listed services): fades (skin, low, mid, high, taper, drop, burst, temple), line-ups, shape-ups, beard sculpts, beard line-ups, straight-razor finishes, hot-towel shaves.

## Existing URL footprint

Routes from `src/app/`:

```
/
/services/[slug]                 (8 pages — one per service)
/areas/[slug]                    (11 pages — one per city served)
/answers/[slug]                  (6 pages — AEO question / answer)
/robots.txt
/sitemap.xml
```

### Service pages (8)

`/services/{the-lux-special, house-call-vip, after-hours-haircut, hot-towel-shave-and-haircut, scissor-cut, haircut-and-beard, haircut, kids-haircut}`

### Area pages (11)

`/areas/{boca-raton, highland-beach, delray-beach, boynton-beach, deerfield-beach, lighthouse-point, pompano-beach, coral-springs, coconut-creek, parkland, margate}`

### Answer pages (6)

`/answers/{how-often-should-you-get-a-fade, what-is-a-mid-fade-vs-low-fade, how-much-does-a-mens-haircut-cost-in-boca-raton, best-barber-for-textured-and-curly-hair-in-south-florida, walk-in-vs-appointment-barber, how-to-prep-for-your-first-barbershop-visit}`

### Total today

**26 indexable pages** (1 home + 8 services + 11 areas + 6 answers). Sitemap covers all of them; FAQPage / BarberShop / Service / Person / WebSite JSON-LD landed in the prior optimization pass.

## Existing keyword footprint

Pulled from page titles, H1s, metadata, and structured data:

**Brand / entity**
- `kwest the barber`, `kwest the barber boca raton`, `kwest barbershop`, `@kwest_the_barber`

**Service / money**
- `mens haircut boca raton`, `fade haircut boca raton`, `hot towel shave boca raton`, `beard trim boca raton`, `kids haircut boca raton`, `house call barber boca raton`, `after hours barber boca raton`, `scissor cut boca raton`, `lux haircut boca raton`

**Geographic (area pages)**
- `barber in {city}` × 11 cities — these are the highest-cannibalization-risk pages in the current footprint (see indexation-risk-report.md)

**AEO / question**
- `how often should you get a fade`, `mid fade vs low fade`, `mens haircut cost boca raton`, `best barber for curly hair south florida`, `walk in vs appointment barber`, `barbershop first visit prep`

**Implicit (in body copy, not in titles)**
- `fau barber`, `barber near fau`, `barber near mizner park`, `boca raton barber 18 years`, `wahl seniors`, `jrl clippers`, `2400 regulars`

## Existing content clusters

Three loose clusters live in the codebase today:

1. **Service cluster** — 8 service hubs, well-differentiated by price/duration/intent. Each has its own JSON-LD `Service` with `Offer.price`.
2. **Geographic cluster** — 11 area pages, currently template-driven (`Barber in {City}`). This is the weakest cluster and the one most likely to be flagged by Google as near-duplicate / doorway — see `indexation-risk-report.md`.
3. **AEO cluster** — 6 question pages with `FAQPage` + `QAPage` + Speakable schema and a dedicated lede paragraph (`.aeo-answer`). Strong cluster; the model the rest of the topic map should emulate.

## Strengths to preserve

- Tight schema graph (`@id` cross-linking between BarberShop / Person / Service / FAQ / Breadcrumb).
- Real-world differentiators in copy: 18+ years, 2,400+ regulars, one-chair shop, scissor-only specialty, JRL tooling. These are entity-cite-able by AI overviews.
- `.aeo-answer` block + Speakable schema on `/answers/[slug]` is voice-assistant-ready.
- Booking is a real platform (Squire) with `Offer.url` pointing at the live booking flow — strong commercial signal.

## Gaps the topic-map work fills

1. **No style-specific pages** — site never names "skin fade," "burst fade," "drop fade," "Caesar cut," "textured crop," etc. Each is a distinct search intent (style-aware buyers and image-search traffic) and currently invisible.
2. **No comparison pages** — `mid fade vs low fade` is the only one. "Burst vs drop," "skin vs taper," "scissor vs clipper," "buzz vs crew" are extremely high-CTR formats with low difficulty.
3. **No audience pages** — no content speaks to FAU students, Mizner Park professionals, attorneys, realtors, athletes, executives, teens. Each is a unique commercial intent.
4. **No problem pages** — no content for "thin hair," "thick hair," "curly hair," "receding hairline," "round face," "oval face." These are exactly the queries new clients run before booking.
5. **No beard depth** — beard work is implicit inside `haircut-and-beard` but there's no standalone content for beard styles, beard fades, beard grooming, beard products.
6. **No waves / 360-waves cluster** — South Florida demographics make this a significant missed cluster. Currently zero content.
7. **No hyperlocal landmark pages** — area pages all swap city names (high cannibalization risk). The replacement is landmark-anchored pages: "Barber near FAU," "Barber near Mizner Park," "Barber near Town Center Mall" — these have unique local intent the city pages can't carry.
8. **No seasonal / trend content** — no "best haircuts 2026," "back-to-school cuts," "summer cuts South Florida humidity." Trend pages refresh annually and capture a steady stream of new queries.

## Topic-map scoping inputs (carried into `topic-map.md`)

- **Total target:** ~745 unique-intent URLs across nine families (well inside the user's 500–1,500 band, weighted toward indexation quality).
- **Anchor address:** 2100 N Federal Hwy #24, Boca Raton 33431 → constrains "near {landmark}" pages to landmarks within ~10-minute drive.
- **Service vocabulary:** the eight services above are the only commercial endpoints — every spoke page links to one or more of them.
- **Audience vocabulary** (used in Family 4 demographic and Family 8 hyperlocal pages):
  - FAU students, FAU faculty, Lynn University students, Boca West professionals, Mizner Park professionals, Town Center retail / shoppers, Boca real estate agents, Boca attorneys, Boca financial services, Boca tech / startup, athletes (triathlon / golf / tennis / pickleball — Boca skews these), grooms / wedding parties, fathers + sons, teens (Spanish River HS, Boca High, Pine Crest, St. Andrew's, Saint Joan of Arc).
- **Hair vocabulary** (used in Families 2, 5, 7):
  - Fade types (skin, low, mid, high, taper, drop, burst, temple, mohawk fade), classic cuts (Caesar, crew, buzz, ivy league, side part, pompadour, undercut, slick back, textured crop, French crop), curly / coily / textured cuts, 360 waves, beard styles (full / short box / goatee / van dyke / ducktail / extended goatee / corporate / circle / Balbo / mutton chops).
- **Constraint vocabulary** (Families 4 + 5):
  - Hair characteristics (thin / thick / fine / coarse / curly / wavy / straight / coily), scalp / hairline (receding / widow's peak / cowlick / thinning crown), face shape (round / oval / square / heart / diamond / long), and life situation (first-time client, growing out, transitioning).

## What this baseline is NOT

- Not a content plan. Topics map to URLs; copy lives elsewhere.
- Not a launch sequence. Priority and phase-in is in `topic-map.md`.
- Not exhaustive. The vocabularies above are deliberately scoped to what Kwest can legitimately serve — no "men's perm in Boca Raton" or "color services" because Kwest doesn't do those.
