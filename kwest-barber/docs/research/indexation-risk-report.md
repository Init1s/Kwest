# Indexation Risk Report — Kwest Barbershop

> The pruning pass. For every URL in `topic-map.md`, score the likelihood Google Search Console actually indexes it. Anything scoring "high risk" was already cut from the topic map; this doc shows what was cut, why, and what to monitor in GSC after launch.

## Scoring rubric

Each candidate URL is scored 1–5 on five axes; sum is the indexation likelihood.

| Axis | 1 — fail | 5 — pass |
|---|---|---|
| **Uniqueness** | Same topic as another page with only a swapped word | Distinct topic; no near-duplicate exists in the map |
| **Search intent** | Speculative ("would anyone search this?") | Demonstrable demand (modifiers + commercial pull) |
| **Local relevance** | Generic — could be from anywhere | Tied to Boca Raton, the shop's address, a named local landmark, or audience |
| **Expertise (E-E-A-T)** | We can't legitimately speak to this | Kwest can speak from 18+ years in the chair / 2,400+ regulars |
| **Likelihood of indexing** | Thin / templated / risk of "Crawled, currently not indexed" | Substantive content with named claims, named entities, named services |

Total possible: 25.

| Score | Verdict |
|---|---|
| 22–25 | Ship — high indexation probability |
| 18–21 | Ship — medium probability; monitor |
| 14–17 | Ship cautiously — needs unique-angle reinforcement in copy |
| 10–13 | **Hold** — rewrite intent or merge into another page |
| ≤ 9 | **Cut** — flagged below |

The 782 URLs in `topic-map.md` all scored ≥ 14. The pages listed in §2 below were considered and **cut**.

## §1 — Risk categories Google penalizes

| Risk | What it looks like | How the topic map avoided it |
|---|---|---|
| **Doorway pages** | Identical content, only city name swapped | No `/services/{city}` or `/styles/{city}` pages. Local intent lives in Family 8 hyperlocal landmarks anchored to real venues, daypart patterns, and commuter intent — not city-only. |
| **Thin content** | <300 words, no unique value | Spoke template (in `internal-linking.md`) forces structured sections — intro / when-to-choose / variations / related / CTA. Minimum word count enforced at build time would catch outliers. |
| **Keyword cannibalization** | Two pages competing for the same primary KW | Every primary KW in the topic map is unique. Secondary KWs can overlap; primary cannot. |
| **Duplicate intent** | Distinct URLs solving identical jobs | Each cluster page is intent-tested in the rubric. "Mid fade vs low fade" and "mid fade haircut" are NOT duplicates — one is buyer research, one is style explanation. They cross-link. |
| **Near-duplicate city pages** | `/areas/{city}` × 11 with templated content | Discussed in §3 — strongest risk in the existing footprint. Most current `/areas/` pages will be deprioritized in the sitemap; `/near/<landmark>` replaces them as the primary local-intent surface. |
| **Index bloat** | Auto-generated pages with no commercial pull | Capped at 782. The 1,500 ceiling was deliberately undershot. |

## §2 — Pages considered and cut (don't build these)

These were on the working list and got pulled before `topic-map.md` was finalized. Documented so they don't reappear in a future expansion pass.

### Cut: City-swap variants without unique intent

| Pattern | Why cut |
|---|---|
| `/services/fades-{boca,delray,deerfield,…}` × 11 cities × 8 services = 88 doorway pages | Pure city swap. Google will collapse to one URL or drop all. |
| `/styles/low-fade-{boca,delray,…}` × 11 cities × 28 fade variants | Doorway. No unique intent beyond the city. |
| `/styles/buzz-cut-{boca,delray,deerfield,…}` | Same. |
| `/best-for/curly-hair-{boca,delray,…}` | Same. |

**Cut total in this bucket: ~660 candidate URLs.** Replaced by 35 hyperlocal landmark pages (`/near/...`) and the home-shop emphasis in copy.

### Cut: Speculative or unsubstantiated comparison pages

| URL | Why cut |
|---|---|
| `/compare/kwest-vs-floyds-99` | Comparing to a competitor by name reads as adversarial and invites a takedown / removal. |
| `/compare/kwest-vs-great-clips` | Same. |
| `/compare/kwest-vs-supercuts` | Same. |
| `/compare/kwest-vs-sport-clips` | Same. |
| `/compare/kwest-vs-{local-shop-name}` × any local competitor | Same — never name a competitor unless reviewing them with attribution. |
| `/compare/$45-haircut-vs-$25-haircut` | Generic price comparison without a named brand reads as thin. |
| `/compare/cheap-fade-vs-expensive-fade` | Vague intent; can't substantiate without naming shops. |

### Cut: Off-brand / out-of-scope services

| URL | Why cut |
|---|---|
| `/services/mens-color` | Kwest does not do color. Indexing for a service you don't provide is a trust-and-reviews liability. |
| `/services/mens-perm` | Same. |
| `/services/mens-relaxer` | Same. |
| `/services/mens-keratin-treatment` | Same. |
| `/services/mens-hair-tattoo` | Specialty Kwest doesn't offer; would attract bad-fit traffic. |
| `/services/mens-hair-extensions` | Same. |
| `/services/mens-toupee` / `/styles/...toupee...` | Same. |
| `/services/mens-makeup` | Out of scope. |
| `/services/eyebrow-threading-men` | Out of scope. |
| `/services/eyebrow-waxing-men` | Out of scope. |
| `/services/ear-waxing-men` | Out of scope (Kwest performs ear-trim within haircut, but doesn't standalone-bookable wax). |
| `/services/nose-wax-men` | Same. |

### Cut: Cannibals of existing pages

| URL | Cannibalizes |
|---|---|
| `/services/mens-haircut-boca-raton` | `/services/haircut` already targets `mens haircut boca raton` as primary KW. |
| `/styles/mens-fade-haircut` | `/services/fades` already owns the head term. |
| `/styles/mens-skin-fade-haircut` | `/services/skin-fade` already owns it. |
| `/answers/best-mens-haircut-boca-raton` | Cannibalizes `/answers/best-barber-for-fade-boca-raton` and `/services/haircut`. |
| `/guide/best-barber-boca-raton-2026` | Brand-anchor page would compete with home page. |
| `/guide/best-fade-barber-boca-raton` | Cannibalizes `/answers/best-barber-for-fade-boca-raton`. |
| `/for/men-in-boca-raton` | Too generic; cannibalizes home page. |
| `/styles/mens-haircut` | The literal head term Kwest's home page already targets. |

### Cut: Geo modifiers below threshold

| URL | Why cut |
|---|---|
| `/areas/west-palm-beach` | 40+ minute drive — outside legitimate service area. |
| `/areas/fort-lauderdale` | 45 min — too far. |
| `/areas/miami` | 70 min — well outside service area. |
| `/areas/jupiter` | 30 min — borderline; deferred until Boca proper is saturated. |
| `/near/aventura` | Not a local landmark to Boca residents. |
| `/near/wynwood` | Not local. |
| `/near/key-biscayne` | Not local. |
| `/near/coral-gables` | Not local. |

### Cut: Trend pages without longevity

| URL | Why cut |
|---|---|
| `/styles/tiktok-trend-{X}-haircut` for any specific viral trend by name | Trend pages with a person's or video's name in the URL age out and rot. Use general `/styles/influencer-haircut` and refresh yearly. |
| `/guide/{specific-event}-haircut` for non-recurring events | One-off events have no compounding search volume. Recurring (e.g. NYE, Fathers Day, FAU graduation) stay. |
| `/styles/haircut-from-{movie}` | Movie/TV-character haircut pages age fast unless the show endures. Peaky Blinders kept because the franchise is 10+ years old. |

### Cut: Cluster bloat from over-templating

| Pattern | Why cut |
|---|---|
| `/best-for/men-in-{20s,21,22,23,24,25,26,27,28,29}` × every age | Granular age pages are thin. Decade buckets only. |
| `/best-for/men-{6,5,5-10,5-11,6-0,6-1,6-2,…}-feet-tall` | Height-by-inch is thin and not a real query. |
| `/beard/styles-week-{1,2,3,4,5,6,7,8,...}` for week-by-week growth | One "grow your beard" guide covers the whole arc; week-pages thin. |
| `/waves/day-{1,2,3,...,90}-waves-progress` | Same. |
| `/for/{exact-employer-name}` (e.g. `/for/florida-power-and-light-employees`) | Employer-by-name pages are thin and feel weird; broader "trades / sales / corporate" pages cover. |

### Cut: Audience pages with no commercial pull

| URL | Why cut |
|---|---|
| `/for/babies-under-1` | Kids tier already covers; under-1 isn't a barbershop demographic. |
| `/for/men-who-love-{niche-hobby}` × any hobby | "Men who love kayaking" doesn't search for a barber that way. Audience pages must have a real grooming trigger (camera, court, wedding, FAU). |
| `/for/single-men-in-boca` | Indistinguishable from home page intent. |
| `/for/married-men-in-boca` | Same. |
| `/for/men-with-kids` | Cannibalizes "dads" page. |

## §3 — The `/areas/` cluster problem

The existing 11 `/areas/<city>` pages are the **biggest indexation risk** in the current footprint. They use a templated `Barber in <City>` H1 with the city's `intro` + `pitch` strings.

**Risk:** Google's "Crawled, currently not indexed" verdict frequently applies to city-swap templates without unique entities, prices, photos, or quotes from local clients.

### Decision

1. **Keep `/areas/boca-raton` as the home-anchor page** — highest priority area, the actual shop city. Strengthen with the new street address, real walk-up directions from Glades / Federal, lunch-break commuter notes, and named neighborhoods (East Boca / West Boca / Mizner Park / Old Floresta).
2. **Demote `/areas/delray-beach`, `/areas/deerfield-beach`, `/areas/highland-beach`** to medium-priority and add real unique content per page (commute time, specific corridor, daypart pattern). These three have legitimate audience signal because real Kwest clients live in those cities.
3. **Reduce sitemap priority on `/areas/{boynton-beach,lighthouse-point,pompano-beach,coral-springs,coconut-creek,parkland,margate}` from 0.7 to 0.4** until they're rewritten with local landmark anchors. Or: noindex these for the first 90 days until the `/near/` cluster ranks, then reassess.
4. **Leave the data file in place** — `src/data/areas.ts` is still the right structure; the FIX is in the content per row, not the cluster.
5. **The replacement** is Family 8 — `/near/<landmark>` — which carries unique local intent in 35 well-differentiated URLs without city-swap.

## §4 — Per-family indexation outlook

| Family | Pages | Expected indexation rate | Notes |
|---|---|---|---|
| 1 Service hubs | 22 | 100% | Every hub has commercial intent + Service schema. |
| 2 Style pages | 135 | 85–95% | High value; fade variants and classic cuts well-targeted. Watch for thin pages in 2e (face shape) — copy must reference specific cuts, not just face-shape platitudes. |
| 3 Comparison pages | 115 | 90–95% | "A vs B" format indexes well — Google rewards decisive comparison content. |
| 4 Demographic pages | 155 | 70–85% | Audience pages with a real grooming trigger (FAU, attorneys, grooms) will index strongly. Some niche audiences (e.g. specific country club residents) may sit at the bottom of the index. |
| 5 Problem pages | 120 | 90–100% | Highest expected indexation rate. "Best haircut for X" is exactly what Google rewards. |
| 6 Beard pages | 65 | 85–95% | Strong cluster, low competition in Boca specifically. |
| 7 Wave + Black hair pages | 60 | 80–95% | High demand cluster, modest competition; the local commercial pages (`/waves/wave-barber-boca-raton`) will index quickly. |
| 8 Hyperlocal landmarks | 35 | 90–95% | These replace city-swap risk. Strong local schema + named landmarks = excellent index probability. |
| 9 Seasonal + trend | 55 | 70–90% | Yearly trend pages will index but lose freshness after ~10 months; refresh schedule baked into `internal-linking.md`. |
| `/answers/` extended | 20 | 95–100% | Existing 6 are indexed; the pattern is proven. |

**Aggregate expected indexation: ~85% of 782 = ~665 pages indexed within 6 months** given a clean build, the linking architecture in `internal-linking.md`, and the existing JSON-LD graph.

## §5 — Post-launch GSC monitoring plan

After the launch wave (224 P0 pages) goes live, watch GSC for:

1. **"Crawled — currently not indexed"** rising on any single family → audit copy depth on a sample, expand to 800+ words if needed.
2. **"Duplicate without user-selected canonical"** → indicates two pages competing. Cross-check primary KW uniqueness; merge or canonical one to the other.
3. **"Discovered — not crawled"** spike on Day 1 is normal; if still spiking at Week 4, request indexing manually on the 50 highest-value URLs.
4. **`/areas/` regression** → if these drop out of the index after the new `/near/` pages launch, that's expected; do not re-submit unless they were ranking for real queries.
5. **Long-tail traffic vs head-term traffic ratio** → at 6 months, long-tail (Family 4 / 5 / 6 / 7) should be > 50% of organic clicks. If not, audit which pages are indexed but not ranking, and rewrite the lede + add internal links from a higher-authority page.
6. **Manual actions / spam alerts** → site:'kwestthebarber.com' check should show every indexed URL with descriptive titles, not cookie-cutter ones. Doorway risk is real on any auto-generated cluster.

## §6 — Hardening already in place

The prior optimization pass (`209ca92`) already addressed several indexation pre-requisites:

- `metadataBase`, canonical, robots directives on root
- BarberShop + Person + WebSite + FAQPage JSON-LD on home
- BreadcrumbList JSON-LD on every long-tail page
- Speakable + QAPage on `/answers/[slug]`
- Hero "2,400+" pre-rendered in SSG HTML (was animating from 0)
- Sitemap covers all current 26 pages and is set up to add new ones from data files

What still needs to happen before launching the 782-page expansion:

- Add `streetAddress: "2100 N Federal Hwy #24"` and `postalCode: "33431"` to `src/lib/seo.ts` `SITE` block and `localBusinessSchema()`.
- Replace the placeholder geo (`{26.371, -80.103}`) with the address's actual coords once verified on Maps.
- Add telephone to `SITE` once the public number is confirmed.
- Set up a Google Business Profile at the verified address — local pack rankings will not move without this.
- Confirm `INSTAGRAM_ACCESS_TOKEN` for live IG sync, or accept the static-gallery fallback (current state is static; per CLAUDE.md this is an accepted operating mode).

## Final deliverable summary

- **Topic map:** 782 unique-intent URLs, all scoring ≥ 14/25 on the rubric, organized across 9 families + extended `/answers/`.
- **Cut list:** ~700+ candidate URLs documented above as doorway / cannibalizing / off-brand / thin.
- **Linking architecture:** Hub-and-spoke per cluster, breadcrumbs on every spoke, 5-link sibling block forced into the template, mega-menu under Services, footer megamenu surfacing every index.
- **Design constraint:** Every new page renders through the existing site's design tokens, type stack, motion system, and section pattern. No off-brand templates.
- **Indexation outlook:** ~85% of the 782 expected to index within 6 months given the linking + content + schema discipline above.

Optimize for indexation, topical authority, and local search dominance — not page count.
