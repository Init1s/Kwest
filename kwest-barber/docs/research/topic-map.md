# Topic Map — Kwest Barbershop

> ~745 unique-intent URLs across nine clusters. Curated for Google Search Console indexation, not for raw count. Doorway / thin / cannibalized candidates are flagged in `indexation-risk-report.md` and excluded from this map.

## Reading the table

| Column | Meaning |
|---|---|
| URL | Final route slug, relative to `https://kwestthebarber.com` |
| Primary KW | Single keyword the page is built for. Must be unique across the map. |
| Secondary KWs | 2–4 supporting variants the page is allowed to target naturally |
| Intent | The job the searcher is trying to do |
| Audience | Who the searcher most likely is |
| Hub | The Family 1 hub page this spoke supports (every spoke has one) |
| Related | 3–5 sibling pages the spoke should link to |
| Diff | Difficulty: E (easy / long-tail) / M (medium) / H (hard / head term) |
| Pri | Priority: P0 (launch wave) / P1 (next 90 days) / P2 (long tail) |

URL convention:

```
/services/<slug>             — Family 1 service hubs
/styles/<slug>               — Family 2 style pages
/compare/<a>-vs-<b>          — Family 3 comparisons
/for/<audience-slug>         — Family 4 demographic pages
/best-for/<problem-slug>     — Family 5 problem pages
/beard/<slug>                — Family 6 beard pages
/waves/<slug>                — Family 7 waves & textured pages
/near/<landmark-slug>        — Family 8 hyperlocal landmark pages
/guide/<slug>                — Family 9 seasonal + trend pages
/answers/<slug>              — Existing AEO cluster (extended below)
```

---

## Family 1 — Service Hubs

22 money pages. The 8 existing services stay; new hubs cover commercial intents currently bundled inside the existing services (fade, taper, line-up, beard sculpt, etc.). Each hub gets its own `Service` JSON-LD with `Offer.price` pointing at the parent bookable service.

| URL | Primary KW | Secondary KWs | Intent | Audience | Hub | Related | Diff | Pri |
|---|---|---|---|---|---|---|---|---|
| /services/haircut | mens haircut boca raton | barber boca raton, mens cut boca | Find a regular cut | Regulars / first-timers | — | LUX, Haircut+Beard, Fade hub | H | P0 |
| /services/haircut-and-beard | haircut and beard boca raton | cut and beard combo, beard trim haircut | Combo maintenance | Beard-maintaining regulars | — | LUX, Haircut, Beard sculpt hub | M | P0 |
| /services/the-lux-special | luxury haircut boca raton | full service barber boca raton, premium haircut | Premium experience | Special occasions | — | Haircut, Hot Towel, Wedding hub | M | P0 |
| /services/hot-towel-shave-and-haircut | hot towel shave boca raton | traditional shave boca raton, straight razor shave | Old-school shave + cut | Ritual-curious clients | — | LUX, Haircut, Shave styles | M | P0 |
| /services/scissor-cut | scissor cut boca raton | no clipper haircut boca, all scissor haircut | Scissor-only / textured | Curly / longer hair | — | Curly hair hub, LUX, Haircut | M | P0 |
| /services/house-call-vip | house call barber boca raton | mobile barber boca, on location barber | On-location service | Weddings / executives | — | Wedding hub, LUX, After Hours | M | P0 |
| /services/after-hours-haircut | after hours barber boca raton | late night barber boca, private haircut appointment | Off-hours private chair | Shift workers / travelers | — | Haircut, LUX, House Call | E | P0 |
| /services/kids-haircut | kids haircut boca raton | childrens haircut boca, boys haircut barber | Family / kids tier | Parents | — | Teens hub, Haircut, First-visit | M | P0 |
| /services/fades | fade haircut boca raton | fade barber boca raton, mens fade | Fade-specific hub | Fade buyers | — | Skin fade, Mid fade, Low fade | H | P0 |
| /services/skin-fade | skin fade boca raton | bald fade boca raton, zero fade | Tightest fade variant | Tight-fade clients | Fades | Fade hub, Low fade, Burst fade | M | P0 |
| /services/taper-fade | taper fade boca raton | classic taper boca, neck taper haircut | Conservative fade | Office / conservative clients | Fades | Fade hub, Low fade, Mid fade | M | P0 |
| /services/line-up | line up boca raton | edge up boca raton, hairline cleanup | Hairline-only maintenance | Between-cut touch-ups | Haircut | Shape-up, Beard line-up, Haircut | M | P1 |
| /services/shape-up | shape up boca raton | hairline shape up, edge up barber | Sharper hairline + sides | Tight-line clients | Haircut | Line-up, Skin fade, Waves | M | P1 |
| /services/beard-sculpt | beard sculpt boca raton | beard shaping boca, beard tailoring | Standalone beard work | Beard-first clients | Haircut+Beard | Beard line-up, Hot Towel, Beard hub | M | P0 |
| /services/beard-line-up | beard line up boca raton | beard edge up boca, beard cheek line | Beard hairline detail | Beard maintainers | Haircut+Beard | Beard sculpt, Line-up, Beard hub | M | P1 |
| /services/straight-razor-shave | straight razor shave boca raton | barber straight razor boca, traditional shave | Razor-only ritual | Old-school shave | Hot Towel | LUX, Hot Towel, Wedding hub | M | P1 |
| /services/wedding-grooming | wedding barber boca raton | grooms day of barber, wedding party haircut | Wedding-day grooming | Grooms + parties | House Call | House Call, LUX, Hot Towel | M | P0 |
| /services/groomsmen-party | groomsmen haircuts boca raton | wedding party barber group booking | Group / party booking | Wedding parties | House Call | Wedding hub, House Call, LUX | M | P1 |
| /services/teen-haircut | teen haircut boca raton | high school boy haircut, teenage boy haircut | Teen audience | Teens 15–18 | Kids | Kids, Haircut, FAU students | M | P1 |
| /services/first-time-haircut | first visit barber boca raton | new client barber boca, first haircut barber | First-time barbershop | New clients | Haircut | LUX, Haircut, How-to-prep answer | M | P1 |
| /services/private-appointment | private barber appointment boca raton | exclusive barber boca, one chair barbershop | Private booking framing | Privacy-seeking | After Hours | After Hours, House Call, LUX | M | P1 |
| /services/grooming-package | grooming package boca raton | mens grooming package boca, full grooming barber | Service-stack framing | Gift-buyers / premium | LUX | LUX, Hot Towel, Wedding | M | P2 |

---

## Family 2 — Style Pages

135 style-specific pages. Each focuses on one named style, photographed and described concretely. URLs sit under `/styles/`. Hub depends on the cut's natural service mapping.

### 2a. Fade variants (28)

| URL | Primary KW | Secondary KWs | Intent | Audience | Hub | Related | Diff | Pri |
|---|---|---|---|---|---|---|---|---|
| /styles/low-fade | low fade haircut | low fade men, low fade barber | See / learn low fade | Conservative fade buyers | Fades | Mid fade, Taper fade, Low taper | M | P0 |
| /styles/mid-fade | mid fade haircut | mid fade men, mid fade barber | See / learn mid fade | Mid-fade buyers | Fades | Low fade, High fade, Burst fade | M | P0 |
| /styles/high-fade | high fade haircut | high fade men, high fade barber | See / learn high fade | High-fade buyers | Fades | Mid fade, Skin fade, Bald fade | M | P0 |
| /styles/skin-fade | skin fade haircut | bald fade haircut, zero fade haircut | Tightest fade visual | Skin-fade buyers | Skin Fade | High fade, Mid skin, Bald fade | M | P0 |
| /styles/taper-fade | taper fade haircut | classic taper fade, conservative taper | Taper fade visual | Office taper buyers | Taper Fade | Low fade, Neck taper, Drop taper | M | P0 |
| /styles/burst-fade | burst fade haircut | burst fade mohawk, burst fade men | Burst fade visual | Mohawk-adjacent | Fades | Drop fade, Temple fade, Mohawk fade | M | P0 |
| /styles/drop-fade | drop fade haircut | drop fade men, curved fade | Drop fade visual | Curved-fade buyers | Fades | Burst fade, Mid fade, Skin fade | M | P0 |
| /styles/temple-fade | temple fade haircut | temple taper men, brooklyn fade | Temple fade visual | Hairline-focused | Fades | Low fade, Taper, Line-up | E | P1 |
| /styles/bald-fade | bald fade haircut | bald fade men, skin bald fade | Bald fade visual | Tightest-look buyers | Skin Fade | Skin fade, High fade, Razor fade | M | P0 |
| /styles/razor-fade | razor fade haircut | razor finish fade, shaved fade | Razor-finish fade | Razor-finish buyers | Skin Fade | Bald fade, Hot towel, Skin fade | E | P1 |
| /styles/low-skin-fade | low skin fade | low bald fade, subtle skin fade | Low + skin combo | Skin-fade-conservative | Skin Fade | Skin fade, Low fade, Taper | E | P1 |
| /styles/mid-skin-fade | mid skin fade | mid bald fade, mid zero fade | Mid + skin combo | Skin-fade-balanced | Skin Fade | Skin fade, Mid fade, Burst | E | P1 |
| /styles/high-skin-fade | high skin fade | high bald fade, high zero fade | High + skin combo | Skin-fade-bold | Skin Fade | Skin fade, High fade, Bald | E | P1 |
| /styles/low-taper-fade | low taper fade | low taper men, neck taper fade | Low + taper combo | Conservative buyers | Taper Fade | Taper, Low fade, Line-up | E | P1 |
| /styles/mid-taper-fade | mid taper fade | mid taper men, balanced taper | Mid + taper combo | Balanced buyers | Taper Fade | Taper, Mid fade, Drop | E | P1 |
| /styles/high-taper-fade | high taper fade | high taper men, dramatic taper | High + taper combo | Bold-taper buyers | Taper Fade | Taper, High fade, Burst | E | P2 |
| /styles/neck-taper | neck taper haircut | clean neck taper, taper neck only | Hairline-only taper | Line-only buyers | Line-up | Line-up, Taper, Shape-up | E | P1 |
| /styles/v-cut-nape | v-cut nape | v shape nape, v neck haircut | Nape-shape detail | Detail-focused | Line-up | Line-up, Shape-up, Square nape | E | P2 |
| /styles/square-nape | square nape haircut | block nape, straight neck haircut | Nape-shape detail | Detail-focused | Line-up | Line-up, Round nape, V nape | E | P2 |
| /styles/round-nape | round nape haircut | natural nape, blended nape | Nape-shape detail | Soft-look buyers | Line-up | Line-up, Square nape, Taper | E | P2 |
| /styles/blowout-fade | blowout fade | brooklyn blowout, blowout taper | Blowout style | Trend-led buyers | Fades | Burst, Drop, Mohawk fade | E | P2 |
| /styles/mohawk-fade | mohawk fade | mohawk haircut men, faux hawk fade | Mohawk visual | Bold buyers | Fades | Burst, Drop, Faux hawk | M | P1 |
| /styles/faux-hawk | faux hawk | faux mohawk men, soft mohawk | Soft mohawk | Conservative trend | Haircut | Mohawk fade, Pomp, Textured | E | P1 |
| /styles/edgar-fade | edgar haircut fade | takuache edgar, edgar cut | Trend cut | Younger / Latino | Fades | Caesar, Burst, Mid fade | M | P1 |
| /styles/temple-fade-curly | temple fade curly hair | curly temple fade | Temple + curls | Curly buyers | Fades | Curly hair hub, Temple, Drop | E | P1 |
| /styles/drop-fade-curly | drop fade curly hair | curly drop fade men | Drop + curls | Curly buyers | Fades | Curly hub, Drop, Burst | E | P1 |
| /styles/burst-fade-curly | burst fade curly hair | curly burst fade men | Burst + curls | Curly buyers | Fades | Curly hub, Burst, Mohawk | E | P1 |
| /styles/low-fade-curly | low fade curly hair | curly low fade men | Low + curls | Curly buyers | Fades | Curly hub, Low fade, Mid | E | P1 |

### 2b. Classic men's cuts (32)

| URL | Primary KW | Secondary KWs | Intent | Audience | Hub | Related | Diff | Pri |
|---|---|---|---|---|---|---|---|---|
| /styles/buzz-cut | buzz cut | mens buzz cut, induction cut | Buzz visual | Low-maintenance | Haircut | Crew, Caesar, Skin fade | M | P0 |
| /styles/crew-cut | crew cut | mens crew cut, military crew cut | Crew visual | Conservative | Haircut | Buzz, Ivy League, Side part | M | P0 |
| /styles/caesar-cut | caesar haircut | caesar cut men, modern caesar | Caesar visual | Round-face buyers | Haircut | Textured crop, Edgar, French crop | M | P0 |
| /styles/french-crop | french crop | textured french crop, fringe crop | French crop visual | Crop buyers | Haircut | Textured crop, Caesar, Edgar | M | P1 |
| /styles/textured-crop | textured crop | mens textured crop, modern crop | Textured visual | Modern buyers | Scissor Cut | French crop, Caesar, Pomp | M | P0 |
| /styles/ivy-league | ivy league haircut | mens preppy haircut, harvard cut | Ivy visual | Preppy / pro | Haircut | Side part, Crew, Slick back | M | P1 |
| /styles/side-part | side part haircut | classic side part, executive side part | Side part visual | Professional | Haircut | Ivy, Slick back, Comb over | M | P0 |
| /styles/comb-over | comb over haircut | mens comb over, modern comb over | Comb over visual | Pro / formal | Haircut | Side part, Slick back, Pomp | M | P1 |
| /styles/slick-back | slick back haircut | slicked back men, executive slick back | Slick back visual | Pro / formal | Haircut | Pomp, Comb over, Side part | M | P0 |
| /styles/pompadour | pompadour haircut | modern pompadour men, classic pomp | Pomp visual | Volume buyers | Haircut | Slick back, Quiff, Comb over | M | P0 |
| /styles/quiff | quiff haircut | mens modern quiff, textured quiff | Quiff visual | Volume / trend | Haircut | Pomp, Faux hawk, Textured crop | M | P1 |
| /styles/undercut | undercut haircut | disconnected undercut, hard undercut | Undercut visual | Bold / hard line | Haircut | Pomp, Slick back, Quiff | M | P0 |
| /styles/disconnected-undercut | disconnected undercut | hard part undercut | Disconnected visual | Bold buyers | Haircut | Undercut, Pomp, Hard part | E | P1 |
| /styles/hard-part | hard part haircut | razor part haircut | Razor-part detail | Detail buyers | Haircut | Disconnected, Side part, Pomp | E | P1 |
| /styles/two-block-haircut | two block haircut | k-pop haircut men, korean haircut | K-style trend | Trend / Asian | Haircut | Undercut, Pomp, Textured crop | M | P1 |
| /styles/mens-mid-length | mens mid length haircut | mid length men hair, medium men cut | Length-only intent | Growing-out | Haircut | Scissor cut, Surfer, Curly | E | P1 |
| /styles/mens-long-hair | mens long hair haircut | long hair men cut, longer cut barber | Long hair intent | Long-hair clients | Scissor Cut | Mid length, Surfer, Curly | M | P1 |
| /styles/mens-surfer-hair | mens surfer haircut | surfer hair men, beach hair men | Surfer visual | Beach / casual | Scissor Cut | Mid length, Long, Textured | E | P1 |
| /styles/textured-fringe | textured fringe haircut | mens fringe haircut, modern fringe | Fringe visual | Trend buyers | Haircut | French crop, Caesar, Quiff | M | P1 |
| /styles/curtain-haircut | curtain haircut men | curtain bangs men, middle part men | Curtains visual | Trend / 90s | Haircut | Mid length, Surfer, Textured fringe | M | P1 |
| /styles/messy-haircut | messy mens haircut | textured messy men, bedhead men | Messy visual | Low-maintenance | Haircut | Textured crop, Surfer, Quiff | E | P1 |
| /styles/business-haircut | business haircut men | corporate haircut men, executive haircut | Pro visual | Pro audience | Haircut | Side part, Ivy, Slick back | M | P0 |
| /styles/executive-haircut | executive haircut men | ceo haircut men, c-suite haircut | Pro visual / status | Senior pro | Haircut | Business, Side part, LUX | M | P1 |
| /styles/wedding-haircut | wedding haircut men | grooms haircut, wedding day haircut | Wedding visual | Grooms | Wedding | LUX, Slick back, Pomp | M | P0 |
| /styles/interview-haircut | interview haircut men | job interview haircut, professional haircut | Interview visual | Pro / job-seekers | Haircut | Business, Side part, Ivy | E | P0 |
| /styles/photoshoot-haircut | photoshoot haircut men | mens photoshoot styling, headshot haircut | Photoshoot visual | Models / pro | Haircut | LUX, Business, Wedding | M | P1 |
| /styles/military-haircut | military haircut | high and tight haircut, regulation haircut | Military visual | Military / vets | Haircut | Buzz, Crew, High fade | M | P0 |
| /styles/high-and-tight | high and tight | military high and tight | High and tight visual | Military / preppy | Fades | Military, Buzz, Skin fade | M | P0 |
| /styles/butch-cut | butch cut | mens butch cut, short crop butch | Short crop visual | Low-maintenance | Haircut | Buzz, Crew, Caesar | E | P2 |
| /styles/recon-haircut | recon haircut | recon high and tight | Military variant | Military | Fades | High and tight, Butch, Buzz | E | P2 |
| /styles/horseshoe-flattop | horseshoe flattop | mens flattop haircut, horseshoe cut | Flattop visual | Old-school / military | Haircut | High and tight, Butch, Crew | E | P2 |
| /styles/flattop-fade | flattop fade | flat top haircut, hi top fade | Flattop variant | Bold / retro | Fades | Horseshoe flattop, High fade, Hi-top | E | P2 |

### 2c. Texture / curl style pages (24)

(Curly + textured style cluster — Family 7 expands further. These rows sit in /styles/ for cross-cluster pairing.)

| URL | Primary KW | Secondary KWs | Intent | Audience | Hub | Related | Diff | Pri |
|---|---|---|---|---|---|---|---|---|
| /styles/curly-fade | curly fade haircut men | curly hair fade, fade curls | Curly + fade | Curly buyers | Scissor Cut | Drop curly, Burst curly, Curly hub | M | P0 |
| /styles/curly-taper | curly taper haircut men | curly taper, taper curly | Curly + taper | Curly buyers | Scissor Cut | Curly fade, Taper, Mid taper | E | P1 |
| /styles/curly-top-skin-fade | curly top skin fade | curly top fade, long top skin fade curly | Length + skin fade | Curly buyers | Skin Fade | Curly fade, Skin fade, Drop curly | M | P0 |
| /styles/curly-undercut | curly undercut haircut | undercut curly hair | Curly + undercut | Bold curly | Haircut | Undercut, Curly fade, Drop | E | P1 |
| /styles/short-curly-haircut | short curly haircut men | short curls men, low maintenance curls | Short curly | Low-maintenance curly | Scissor Cut | Curly fade, Caesar, Crop | M | P1 |
| /styles/medium-curly-haircut | medium curly haircut men | mid length curly men | Medium curly | Curly growing-out | Scissor Cut | Long curly, Curly top, Scissor | M | P1 |
| /styles/long-curly-haircut | long curly haircut men | long curly hair barber | Long curly | Long curly clients | Scissor Cut | Medium curly, Long hair, Texture | M | P2 |
| /styles/curly-mohawk | curly mohawk haircut | curly faux hawk, mohawk curls | Curly mohawk | Bold curly | Haircut | Mohawk fade, Faux hawk, Curly hub | E | P2 |
| /styles/curly-quiff | curly quiff haircut | quiff curls, curls up quiff | Curly + quiff | Trend curly | Haircut | Quiff, Pomp, Curly hub | E | P2 |
| /styles/curly-fringe | curly fringe haircut | curly bangs men, curls forward | Curls forward | Curly buyers | Scissor Cut | Textured fringe, Curly top, Caesar | E | P2 |
| /styles/curly-side-part | curly side part haircut | curly side parted hair men | Curly + side part | Pro curly | Haircut | Side part, Ivy, Curly hub | E | P2 |
| /styles/curly-pompadour | curly pompadour haircut | pomp curls men | Curly + pomp | Bold curly | Haircut | Pomp, Quiff, Curly hub | E | P2 |
| /styles/coily-haircut | coily hair haircut men | 4c haircut men, coily mens cut | Coily / 4-type | Black hair | Scissor Cut | Curly, Textured, Waves hub | M | P0 |
| /styles/afro-haircut | afro haircut men | mens afro haircut, modern afro | Afro visual | Afro clients | Scissor Cut | Curly, Coily, Twist | M | P1 |
| /styles/twist-out | twist out haircut men | mens twist out, twist out cut | Twist out | Black hair | Scissor Cut | Afro, Coily, Waves hub | M | P1 |
| /styles/sponge-twist | sponge twist haircut | mens sponge twist, sponge curls | Sponge twists | Black hair | Scissor Cut | Twist out, Afro, Coily | E | P2 |
| /styles/finger-waves | finger waves men | mens finger waves haircut | Finger wave style | Black hair | Scissor Cut | Waves hub, 360 waves, Mr. Wave | E | P2 |
| /styles/dread-fade | dread fade haircut | dreads fade, loc fade men | Dread + fade | Loc clients | Fades | Coily, Twist, Drop fade | M | P1 |
| /styles/dread-taper | dread taper haircut | dread taper men, loc taper men | Dread + taper | Loc clients | Fades | Dread fade, Coily, Taper | E | P2 |
| /styles/braids-fade | braids and fade men | braided fade men | Braids + fade | Braided clients | Fades | Dread fade, Cornrow, Drop | M | P1 |
| /styles/cornrow-fade | cornrow fade men | cornrows fade haircut | Cornrows + fade | Cornrow clients | Fades | Braids, Dread fade, Coily | M | P1 |
| /styles/wolf-cut-men | wolf cut men | mens wolf cut, shaggy wolf | Wolf cut visual | Trend / younger | Scissor Cut | Mullet modern, Shag, Surfer | M | P2 |
| /styles/modern-mullet | modern mullet men | mens mullet 2026, neo mullet | Modern mullet | Trend buyers | Haircut | Wolf cut, Edgar, Burst fade | M | P1 |
| /styles/shag-haircut-men | shag haircut men | mens shag haircut, layered shag men | Shag visual | Trend / longer | Scissor Cut | Wolf, Modern mullet, Mid length | E | P2 |

### 2d. Cultural / regional / trend-named cuts (25)

| URL | Primary KW | Secondary KWs | Intent | Audience | Hub | Related | Diff | Pri |
|---|---|---|---|---|---|---|---|---|
| /styles/peaky-blinders-haircut | peaky blinders haircut | tommy shelby haircut, undercut peaky | TV trend | Trend audience | Haircut | Disconnected, Undercut, Slick | M | P1 |
| /styles/yacht-club-haircut | yacht club haircut | brooks brothers haircut, prep haircut | Preppy trend | Pro / preppy | Haircut | Ivy League, Side part, Comb over | E | P2 |
| /styles/k-pop-haircut | k-pop haircut men | korean haircut men, k-pop idol haircut | K-pop trend | Trend / younger | Haircut | Two block, Mid length, Textured | M | P1 |
| /styles/japanese-haircut | japanese haircut men | tokyo haircut, japan barber haircut | Japan-style trend | Trend audience | Haircut | K-pop, Textured crop, Two block | E | P2 |
| /styles/latino-fade | latino fade haircut | mexican fade haircut, hispanic fade | Cultural trend | Latino clients | Fades | Edgar, Burst, Mid fade | M | P0 |
| /styles/edgar-cut | edgar cut | takuache edgar, edgar haircut latino | Edgar trend | Latino / younger | Haircut | Edgar fade, Caesar, Burst | M | P1 |
| /styles/messi-haircut | messi haircut | lionel messi haircut, footballer haircut | Athlete trend | Soccer fans | Haircut | Footballer, Athlete, Slick back | E | P1 |
| /styles/ronaldo-haircut | ronaldo haircut | cristiano ronaldo haircut, footballer haircut | Athlete trend | Soccer fans | Haircut | Messi, Footballer cuts, Pomp | E | P1 |
| /styles/footballer-haircut | footballer haircut | mens soccer haircut, world cup haircut | Athlete trend | Soccer fans | Haircut | Messi, Ronaldo, Athlete cuts | E | P1 |
| /styles/nba-haircut | nba haircut | basketball player haircut, mens athletic fade | Athlete trend | NBA fans | Fades | Athlete cuts, Burst, Skin fade | M | P1 |
| /styles/influencer-haircut | influencer haircut men | tiktok haircut men, instagram haircut men | Trend audience | Trend buyers | Haircut | K-pop, Modern mullet, Edgar | E | P2 |
| /styles/podcast-haircut | podcast haircut men | clean cut for video, on camera mens haircut | Content creators | Creators | Haircut | Photoshoot, Executive, Side part | E | P2 |
| /styles/army-haircut | army haircut | regulation army haircut, mens army cut | Military variant | Army / vets | Haircut | Military, High and tight, Buzz | M | P1 |
| /styles/marines-haircut | marines haircut | usmc haircut, marines high and tight | Military variant | Marines / vets | Haircut | Military, High and tight, Buzz | E | P1 |
| /styles/navy-haircut | navy haircut | us navy haircut, sailor haircut | Military variant | Navy / vets | Haircut | Military, Crew, High and tight | E | P1 |
| /styles/firefighter-haircut | firefighter haircut | fire department haircut, fireman haircut | Service variant | Firefighters | Haircut | Military, Crew, Side part | E | P2 |
| /styles/police-haircut | police haircut | mens police haircut, law enforcement haircut | Service variant | Police | Haircut | Military, Crew, Side part | E | P2 |
| /styles/lawyer-haircut | lawyer haircut | mens lawyer haircut, attorney haircut | Pro variant | Attorneys | Haircut | Executive, Side part, Ivy | E | P0 |
| /styles/realtor-haircut | realtor haircut men | real estate agent haircut, broker haircut | Pro variant | Realtors | Haircut | Executive, Photoshoot, Side part | E | P0 |
| /styles/finance-haircut | finance bro haircut | wall street haircut, finance haircut men | Pro variant | Finance | Haircut | Executive, Slick back, Side part | E | P1 |
| /styles/tech-bro-haircut | tech haircut men | startup haircut men, tech bro haircut | Pro variant | Tech | Haircut | Executive, Textured, Buzz | E | P2 |
| /styles/sales-haircut | sales rep haircut | mens sales haircut, on the road haircut | Pro variant | Sales | Haircut | Executive, Business, Side part | E | P2 |
| /styles/creative-haircut | creative director haircut | mens creative haircut, agency haircut | Pro variant | Creatives | Haircut | Modern mullet, Quiff, Textured | E | P2 |
| /styles/teacher-haircut | teacher haircut men | educator haircut men, professor haircut | Pro variant | Educators | Haircut | Side part, Ivy, Crew | E | P2 |
| /styles/doctor-haircut | doctor haircut men | physician haircut, mens medical haircut | Pro variant | Doctors | Haircut | Executive, Ivy, Side part | E | P2 |

### 2e. Receding hairline / thinning / bald-friendly styles (12)

| URL | Primary KW | Secondary KWs | Intent | Audience | Hub | Related | Diff | Pri |
|---|---|---|---|---|---|---|---|---|
| /styles/buzz-cut-receding-hairline | buzz cut receding hairline | buzz cut thinning hair | Receding strategy | Receding buyers | Haircut | Thin hair best-for, Caesar, Crew | M | P0 |
| /styles/caesar-cut-receding | caesar cut receding hairline | caesar thinning hair | Receding strategy | Receding buyers | Haircut | Buzz receding, Crop receding, Thin hair best-for | E | P0 |
| /styles/french-crop-receding | french crop receding hairline | french crop thinning hair | Receding strategy | Receding buyers | Haircut | Caesar receding, Buzz, Crop | E | P0 |
| /styles/textured-crop-receding | textured crop receding hairline | textured crop thin hair | Receding strategy | Receding buyers | Haircut | French crop receding, Buzz, Best-for thin | E | P0 |
| /styles/short-side-part-receding | short side part receding | side part thinning | Receding strategy | Receding buyers | Haircut | Caesar, Buzz, Best-for receding | E | P1 |
| /styles/clean-shaved-head | clean shaved head haircut | bald head shaving boca | Shaved-head ritual | Bald clients | Hot Towel | Hot towel, Skin fade, Straight razor | M | P0 |
| /styles/shaved-head-beard | shaved head with beard | bald with beard | Bald + beard combo | Bald + beard | Hot Towel | Shaved head, Beard hub, Bald beard styles | M | P0 |
| /styles/buzz-cut-with-beard | buzz cut with beard men | buzz beard combo | Buzz + beard | Beard + buzz | Haircut | Buzz, Beard sculpt, Bald beard | M | P0 |
| /styles/thinning-crown-haircut | thinning crown haircut men | crown thinning haircut | Crown thinning | Crown-thin buyers | Haircut | Receding, Caesar, French crop | E | P1 |
| /styles/widows-peak-haircut | widows peak haircut men | widow peak haircut | Widows peak | Widows-peak buyers | Haircut | Caesar, Side part, French crop | E | P1 |
| /styles/cowlick-haircut | cowlick haircut men | cowlick fix haircut | Cowlick management | Cowlick buyers | Haircut | Textured crop, Quiff, French crop | E | P2 |
| /styles/double-crown-haircut | double crown haircut men | two crowns haircut | Double crown | Double-crown buyers | Haircut | Cowlick, Textured, Buzz | E | P2 |

### 2f. Face-shape-driven cuts (14)

| URL | Primary KW | Secondary KWs | Intent | Audience | Hub | Related | Diff | Pri |
|---|---|---|---|---|---|---|---|---|
| /styles/round-face-haircut | round face haircut men | best haircut round face men | Round face | Round face | Haircut | Best-for round face, Pomp, Quiff | M | P0 |
| /styles/oval-face-haircut | oval face haircut men | best haircut oval face men | Oval face | Oval face | Haircut | Best-for oval face, Crew, Caesar | E | P0 |
| /styles/square-face-haircut | square face haircut men | best haircut square face men | Square face | Square face | Haircut | Best-for square face, Slick, Side part | M | P0 |
| /styles/heart-face-haircut | heart face haircut men | best haircut heart face men | Heart face | Heart face | Haircut | Best-for heart face, Mid length, Quiff | E | P1 |
| /styles/long-face-haircut | long face haircut men | best haircut long face men | Long face | Long face | Haircut | Best-for long face, Caesar, Crop | E | P1 |
| /styles/diamond-face-haircut | diamond face haircut men | best haircut diamond face men | Diamond face | Diamond face | Haircut | Best-for diamond, Pomp, Slick | E | P2 |
| /styles/triangle-face-haircut | triangle face haircut men | best haircut triangle face men | Triangle face | Triangle face | Haircut | Best-for triangle, Quiff, Buzz | E | P2 |
| /styles/big-forehead-haircut | big forehead haircut men | mens haircut for big forehead | Big forehead | Big forehead | Haircut | French crop, Caesar, Textured fringe | M | P0 |
| /styles/small-forehead-haircut | small forehead haircut men | low hairline haircut men | Small forehead | Small forehead | Haircut | Pomp, Slick back, Side part | E | P1 |
| /styles/big-ears-haircut | big ears haircut men | mens haircut for big ears | Big ears | Big ears | Haircut | Side part, Mid length, Caesar | E | P1 |
| /styles/sticking-out-ears-haircut | sticking out ears haircut men | mens haircut for prominent ears | Prominent ears | Prominent ears | Haircut | Big ears, Side, Mid length | E | P2 |
| /styles/long-neck-haircut | long neck haircut men | mens haircut for long neck | Long neck | Long neck | Haircut | Mid length, Caesar, French crop | E | P2 |
| /styles/short-neck-haircut | short neck haircut men | mens haircut for short neck | Short neck | Short neck | Haircut | Buzz, Crew, High fade | E | P2 |
| /styles/glasses-haircut | mens haircut with glasses | best haircut for guys with glasses | Glasses + hair | Glasses-wearers | Haircut | Round face, Side part, Slick | E | P1 |

---

## Family 3 — Comparison Pages

115 head-to-head guides. The format consistently outranks single-style content for buyer-research queries. Slugs always alphabetize (e.g. `low-fade-vs-mid-fade`, not `mid-vs-low`).

### 3a. Fade-vs-fade (24)

| URL | Primary KW | Hub | Diff | Pri |
|---|---|---|---|---|
| /compare/low-fade-vs-mid-fade | low fade vs mid fade | Fades | M | P0 |
| /compare/mid-fade-vs-high-fade | mid fade vs high fade | Fades | M | P0 |
| /compare/low-fade-vs-high-fade | low fade vs high fade | Fades | M | P0 |
| /compare/skin-fade-vs-bald-fade | skin fade vs bald fade | Skin Fade | M | P0 |
| /compare/skin-fade-vs-taper-fade | skin fade vs taper fade | Skin Fade | M | P0 |
| /compare/taper-fade-vs-low-fade | taper fade vs low fade | Taper Fade | E | P0 |
| /compare/taper-fade-vs-regular-taper | taper fade vs taper | Taper Fade | E | P1 |
| /compare/burst-fade-vs-drop-fade | burst fade vs drop fade | Fades | M | P0 |
| /compare/burst-fade-vs-mid-fade | burst fade vs mid fade | Fades | E | P1 |
| /compare/drop-fade-vs-low-fade | drop fade vs low fade | Fades | E | P1 |
| /compare/temple-fade-vs-taper-fade | temple fade vs taper fade | Fades | E | P1 |
| /compare/high-fade-vs-high-and-tight | high fade vs high and tight | Fades | E | P1 |
| /compare/skin-fade-vs-zero-fade | skin fade vs zero fade | Skin Fade | E | P1 |
| /compare/low-skin-fade-vs-mid-skin-fade | low skin fade vs mid skin fade | Skin Fade | E | P1 |
| /compare/mid-skin-fade-vs-high-skin-fade | mid skin fade vs high skin fade | Skin Fade | E | P1 |
| /compare/razor-fade-vs-skin-fade | razor fade vs skin fade | Skin Fade | E | P1 |
| /compare/edgar-vs-caesar | edgar vs caesar haircut | Haircut | M | P0 |
| /compare/edgar-vs-mid-fade | edgar vs mid fade | Fades | E | P1 |
| /compare/mohawk-fade-vs-faux-hawk | mohawk fade vs faux hawk | Fades | E | P1 |
| /compare/mohawk-fade-vs-burst-fade | mohawk fade vs burst fade | Fades | E | P2 |
| /compare/flattop-vs-high-and-tight | flattop vs high and tight | Fades | E | P2 |
| /compare/v-cut-nape-vs-square-nape | v cut nape vs square nape | Line-up | E | P2 |
| /compare/round-nape-vs-square-nape | round nape vs square nape | Line-up | E | P2 |
| /compare/neck-taper-vs-low-taper | neck taper vs low taper | Taper Fade | E | P2 |

### 3b. Classic-cut comparisons (28)

| URL | Primary KW | Hub | Diff | Pri |
|---|---|---|---|---|
| /compare/buzz-cut-vs-crew-cut | buzz cut vs crew cut | Haircut | M | P0 |
| /compare/buzz-cut-vs-caesar-cut | buzz cut vs caesar cut | Haircut | E | P0 |
| /compare/crew-cut-vs-caesar-cut | crew cut vs caesar cut | Haircut | E | P0 |
| /compare/crew-cut-vs-ivy-league | crew cut vs ivy league | Haircut | E | P1 |
| /compare/caesar-cut-vs-french-crop | caesar vs french crop | Haircut | M | P0 |
| /compare/french-crop-vs-textured-crop | french crop vs textured crop | Haircut | E | P0 |
| /compare/textured-crop-vs-caesar | textured crop vs caesar | Haircut | E | P0 |
| /compare/ivy-league-vs-side-part | ivy league vs side part | Haircut | E | P1 |
| /compare/side-part-vs-comb-over | side part vs comb over | Haircut | E | P0 |
| /compare/comb-over-vs-slick-back | comb over vs slick back | Haircut | E | P1 |
| /compare/slick-back-vs-pompadour | slick back vs pompadour | Haircut | M | P0 |
| /compare/pompadour-vs-quiff | pompadour vs quiff | Haircut | M | P0 |
| /compare/quiff-vs-faux-hawk | quiff vs faux hawk | Haircut | E | P1 |
| /compare/undercut-vs-disconnected-undercut | undercut vs disconnected undercut | Haircut | E | P0 |
| /compare/undercut-vs-fade | undercut vs fade | Fades | M | P0 |
| /compare/undercut-vs-pompadour | undercut vs pompadour | Haircut | E | P1 |
| /compare/hard-part-vs-side-part | hard part vs side part | Haircut | E | P1 |
| /compare/two-block-vs-undercut | two block vs undercut | Haircut | E | P2 |
| /compare/two-block-vs-k-pop | two block vs k-pop haircut | Haircut | E | P2 |
| /compare/mid-length-vs-long-hair-men | mid length vs long hair men | Haircut | E | P1 |
| /compare/surfer-hair-vs-mid-length | surfer hair vs mid length men | Haircut | E | P2 |
| /compare/wolf-cut-vs-modern-mullet | wolf cut vs modern mullet | Haircut | M | P1 |
| /compare/wolf-cut-vs-shag-haircut | wolf cut vs shag haircut | Haircut | E | P2 |
| /compare/modern-mullet-vs-classic-mullet | modern mullet vs classic mullet | Haircut | E | P1 |
| /compare/textured-crop-vs-french-crop | textured crop vs french crop | Haircut | E | P0 |
| /compare/crew-cut-vs-buzz-cut-vs-caesar | crew vs buzz vs caesar | Haircut | M | P2 |
| /compare/business-vs-executive-haircut | business haircut vs executive haircut | Haircut | E | P1 |
| /compare/interview-vs-business-haircut | interview haircut vs business haircut | Haircut | E | P1 |

### 3c. Service-vs-service (18)

| URL | Primary KW | Hub | Diff | Pri |
|---|---|---|---|---|
| /compare/scissor-cut-vs-clipper-cut | scissor cut vs clipper cut | Scissor Cut | M | P0 |
| /compare/scissor-cut-vs-fade | scissor cut vs fade | Scissor Cut | E | P1 |
| /compare/haircut-vs-haircut-and-beard | haircut vs haircut and beard | Haircut+Beard | E | P0 |
| /compare/haircut-vs-lux-special | regular haircut vs lux haircut | LUX | E | P0 |
| /compare/lux-special-vs-hot-towel-shave | lux special vs hot towel shave | LUX | E | P1 |
| /compare/hot-towel-shave-vs-straight-razor-shave | hot towel shave vs straight razor shave | Hot Towel | E | P0 |
| /compare/walk-in-vs-appointment-barber | walk in vs appointment barber | Haircut | E | P0 |
| /compare/barbershop-vs-salon | barbershop vs salon | Haircut | M | P0 |
| /compare/chain-barbershop-vs-private-barber | chain barbershop vs private barber | Haircut | M | P0 |
| /compare/private-appointment-vs-walk-in | private appointment vs walk in | Private | E | P1 |
| /compare/house-call-vs-in-shop | house call vs in shop barber | House Call | E | P1 |
| /compare/after-hours-vs-regular-appointment | after hours vs regular appointment | After Hours | E | P1 |
| /compare/beard-trim-vs-beard-sculpt | beard trim vs beard sculpt | Beard sculpt | E | P0 |
| /compare/beard-line-up-vs-beard-shape-up | beard line up vs beard shape up | Beard line-up | E | P0 |
| /compare/line-up-vs-shape-up | line up vs shape up | Line-up | E | P0 |
| /compare/line-up-vs-edge-up | line up vs edge up | Line-up | E | P0 |
| /compare/wedding-haircut-vs-photoshoot-haircut | wedding haircut vs photoshoot haircut | Wedding | E | P2 |
| /compare/groomsmen-vs-grooms-haircut | groomsmen vs grooms haircut | Wedding | E | P2 |

### 3d. Tooling / technique / product comparisons (15)

| URL | Primary KW | Hub | Diff | Pri |
|---|---|---|---|---|
| /compare/jrl-vs-wahl-clippers | jrl vs wahl clippers | Haircut | M | P1 |
| /compare/jrl-vs-andis-clippers | jrl vs andis clippers | Haircut | E | P2 |
| /compare/wahl-magic-clip-vs-wahl-senior | wahl magic clip vs wahl senior | Haircut | E | P2 |
| /compare/straight-razor-vs-safety-razor | straight razor vs safety razor | Hot Towel | E | P1 |
| /compare/cordless-vs-corded-clippers | cordless vs corded clippers barber | Haircut | E | P2 |
| /compare/hot-towel-vs-cold-towel-shave | hot towel shave vs cold towel | Hot Towel | E | P2 |
| /compare/pomade-vs-pomade-clay | pomade vs clay men hair | Haircut | E | P1 |
| /compare/pomade-vs-wax-men | hair pomade vs wax men | Haircut | E | P1 |
| /compare/clay-vs-paste-men-hair | clay vs paste men hair | Haircut | E | P2 |
| /compare/water-based-pomade-vs-oil-based | water based vs oil based pomade | Haircut | E | P2 |
| /compare/blow-dry-vs-air-dry-men | blow dry vs air dry men hair | Haircut | E | P2 |
| /compare/mens-shampoo-vs-conditioner | mens shampoo vs conditioner barber | Haircut | E | P2 |
| /compare/beard-oil-vs-beard-balm | beard oil vs beard balm | Beard hub | E | P0 |
| /compare/beard-balm-vs-beard-butter | beard balm vs beard butter | Beard hub | E | P1 |
| /compare/beard-trimmer-vs-clippers | beard trimmer vs clippers | Beard hub | E | P1 |

### 3e. Cost / frequency / lifestyle (12)

| URL | Primary KW | Hub | Diff | Pri |
|---|---|---|---|---|
| /compare/cheap-barber-vs-premium-barber-boca | cheap barber vs premium barber boca raton | Haircut | M | P0 |
| /compare/cost-of-haircut-vs-cost-of-lux | cost of regular haircut vs lux | Haircut | E | P1 |
| /compare/monthly-haircut-vs-biweekly | monthly haircut vs biweekly men | Haircut | E | P0 |
| /compare/two-week-haircut-vs-three-week | two week vs three week haircut rotation | Haircut | E | P1 |
| /compare/buzz-cut-vs-bald | buzz cut vs shaved head men | Haircut | E | P0 |
| /compare/shave-at-home-vs-barber-shave | shave at home vs barber shave | Hot Towel | E | P0 |
| /compare/trim-at-home-vs-barber-beard | beard trim at home vs barber | Beard hub | E | P0 |
| /compare/diy-haircut-vs-barber | diy haircut vs barber | Haircut | M | P0 |
| /compare/franchise-cut-vs-independent-barber | franchise haircut vs independent barber | Haircut | E | P1 |
| /compare/groupon-haircut-vs-private-barber | groupon haircut vs private barber | Haircut | E | P1 |
| /compare/mens-salon-vs-mens-barbershop | mens salon vs mens barbershop | Haircut | E | P1 |
| /compare/barber-cost-boca-vs-delray | barber cost boca raton vs delray | Haircut | E | P2 |

### 3f. Hair-type / texture (18)

| URL | Primary KW | Hub | Diff | Pri |
|---|---|---|---|---|
| /compare/curly-hair-vs-wavy-hair-haircut | curly vs wavy hair haircut men | Scissor Cut | E | P0 |
| /compare/curly-vs-coily-hair-haircut | curly vs coily men haircut | Scissor Cut | E | P0 |
| /compare/wavy-vs-straight-hair-haircut | wavy vs straight hair men haircut | Scissor Cut | E | P1 |
| /compare/fine-vs-thick-hair-haircut | fine vs thick hair men haircut | Haircut | E | P1 |
| /compare/thin-hair-vs-thick-hair-haircut | thin vs thick hair men haircut | Haircut | E | P0 |
| /compare/short-hair-vs-buzz-cut-men | short hair vs buzz cut men | Haircut | E | P1 |
| /compare/short-vs-medium-mens-haircut | short vs medium length mens haircut | Haircut | E | P1 |
| /compare/medium-vs-long-mens-haircut | medium vs long mens haircut | Haircut | E | P2 |
| /compare/coarse-vs-fine-mens-hair | coarse vs fine mens hair haircut | Haircut | E | P2 |
| /compare/oily-vs-dry-scalp-men-haircut | oily vs dry scalp men haircut | Haircut | E | P2 |
| /compare/2a-vs-2c-hair-men | 2a vs 2c hair type men | Scissor Cut | E | P2 |
| /compare/3a-vs-3c-hair-men | 3a vs 3c hair type men | Scissor Cut | E | P2 |
| /compare/4a-vs-4c-hair-men | 4a vs 4c hair type men | Scissor Cut | E | P2 |
| /compare/twist-out-vs-braid-out | twist out vs braid out men | Scissor Cut | E | P2 |
| /compare/360-waves-vs-coily-style | 360 waves vs coily style | Waves hub | E | P1 |
| /compare/dreads-vs-twists | dreads vs twists men | Scissor Cut | E | P1 |
| /compare/cornrows-vs-braids-men | cornrows vs braids men | Scissor Cut | E | P1 |
| /compare/locs-vs-twists | locs vs twists men | Scissor Cut | E | P2 |

---

## Family 4 — Demographic Pages

155 audience-specific pages under `/for/<audience-slug>`. Each combines an audience with a service or style they specifically need. Pages aren't allowed to be "haircuts for X" alone — they must answer a real-world job-to-be-done.

### 4a. FAU + university audience (18)

(FAU is ~3 minutes from the shop. Highest-volume student demographic.)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/fau-students | barber for fau students | FAU | Haircut | E | P0 |
| /for/fau-game-day-haircut | game day haircut fau boca | FAU | Haircut | E | P1 |
| /for/fau-graduation-haircut | fau graduation haircut | FAU | LUX | E | P0 |
| /for/fau-internship-interview-haircut | interview haircut for fau students | FAU | Haircut | E | P0 |
| /for/fau-business-students | haircut for fau business students | FAU | Haircut | E | P1 |
| /for/fau-athletes | haircut for fau athletes | FAU athletes | Haircut | E | P1 |
| /for/fau-football | haircut for fau football players | FAU | Haircut | E | P2 |
| /for/fau-basketball | haircut for fau basketball | FAU | Haircut | E | P2 |
| /for/fau-soccer | haircut for fau soccer | FAU | Haircut | E | P2 |
| /for/fau-greek-life | greek life haircut fau | FAU greek | Haircut | E | P2 |
| /for/fau-frat-haircut | fraternity haircut fau boca | FAU greek | Haircut | E | P2 |
| /for/fau-late-night-haircut | late night haircut fau | FAU | After Hours | E | P1 |
| /for/fau-walk-in-haircut | walk in haircut near fau | FAU | Haircut | E | P0 |
| /for/lynn-university-students | barber for lynn university students | Lynn | Haircut | E | P1 |
| /for/lynn-university-athletes | haircut for lynn university athletes | Lynn | Haircut | E | P2 |
| /for/palm-beach-state-students | barber for palm beach state college students | PBSC | Haircut | E | P2 |
| /for/spanish-river-high-school | haircut for spanish river high school | Teens | Teen | E | P1 |
| /for/boca-high-school | haircut for boca raton high school students | Teens | Teen | E | P1 |

### 4b. Professional / occupation audience (32)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/realtors | barber for realtors boca raton | Realtors | Haircut | E | P0 |
| /for/realtor-headshot-haircut | realtor headshot haircut boca | Realtors | LUX | E | P0 |
| /for/attorneys | barber for attorneys boca raton | Attorneys | Haircut | E | P0 |
| /for/court-appearance-haircut | court appearance haircut boca | Attorneys | Haircut | E | P0 |
| /for/financial-advisors | barber for financial advisors boca | Finance | Haircut | E | P1 |
| /for/wealth-managers | barber for wealth managers boca raton | Finance | LUX | E | P1 |
| /for/private-bankers | barber for private bankers boca | Finance | LUX | E | P2 |
| /for/insurance-agents | barber for insurance agents boca | Insurance | Haircut | E | P2 |
| /for/medical-sales | barber for medical sales reps boca raton | Sales | Haircut | E | P2 |
| /for/pharmaceutical-sales | barber for pharma sales reps boca | Sales | Haircut | E | P2 |
| /for/tech-sales | barber for tech sales reps boca | Sales | Haircut | E | P2 |
| /for/agency-creatives | barber for agency creatives boca | Creatives | Haircut | E | P2 |
| /for/architects | barber for architects boca raton | Architects | Haircut | E | P2 |
| /for/dentists | barber for dentists boca raton | Dentists | Haircut | E | P2 |
| /for/physicians | barber for physicians boca raton | Doctors | Haircut | E | P1 |
| /for/surgeons | barber for surgeons boca raton | Doctors | Haircut | E | P2 |
| /for/pilots | barber for pilots boca raton | Pilots | Haircut | E | P2 |
| /for/flight-attendants-male | barber for male flight attendants boca | Pilots | Haircut | E | P2 |
| /for/firefighters | barber for firefighters boca raton | Firefighters | Haircut | E | P2 |
| /for/police-officers | barber for police officers boca raton | Police | Haircut | E | P2 |
| /for/military-active | barber for active military boca raton | Military | Haircut | E | P1 |
| /for/military-veterans | barber for veterans boca raton | Veterans | Haircut | E | P1 |
| /for/executives | barber for executives boca raton | Executives | LUX | M | P0 |
| /for/c-suite | barber for ceos boca raton | C-suite | LUX | E | P1 |
| /for/board-members | barber for board members boca raton | Executives | LUX | E | P2 |
| /for/podcast-hosts | barber for podcast hosts boca raton | Creators | Haircut | E | P2 |
| /for/youtubers | barber for youtubers boca raton | Creators | Haircut | E | P2 |
| /for/tiktok-creators | barber for tiktok creators boca | Creators | Haircut | E | P2 |
| /for/actors | barber for actors boca raton | Actors | LUX | E | P2 |
| /for/musicians | barber for musicians boca raton | Musicians | Haircut | E | P2 |
| /for/restaurant-owners | barber for restaurant owners boca | Hospitality | Haircut | E | P2 |
| /for/contractors | barber for contractors boca raton | Trades | Haircut | E | P2 |

### 4c. Athlete audience (15)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/golfers | barber for golfers boca raton | Golf | Haircut | E | P0 |
| /for/golf-club-members | haircut for golf club members boca raton | Golf | Haircut | E | P1 |
| /for/pickleball-players | barber for pickleball players boca raton | Pickleball | Haircut | E | P1 |
| /for/tennis-players | barber for tennis players boca raton | Tennis | Haircut | E | P1 |
| /for/triathletes | barber for triathletes boca raton | Triathlon | Haircut | E | P2 |
| /for/marathoners | barber for marathon runners boca raton | Running | Haircut | E | P2 |
| /for/cyclists | barber for cyclists boca raton | Cycling | Haircut | E | P2 |
| /for/crossfitters | barber for crossfit athletes boca | Crossfit | Haircut | E | P2 |
| /for/bodybuilders | barber for bodybuilders boca raton | Lifting | Haircut | E | P2 |
| /for/boxers | barber for boxers boca raton | Combat sports | Haircut | E | P2 |
| /for/jiu-jitsu | barber for jiu jitsu athletes boca | Combat sports | Haircut | E | P2 |
| /for/mma | barber for mma fighters boca raton | Combat sports | Haircut | E | P2 |
| /for/swimmers | barber for swimmers boca raton | Swimming | Haircut | E | P2 |
| /for/surfers | barber for surfers boca raton | Surfing | Scissor Cut | E | P1 |
| /for/sailors | barber for sailors boca raton | Sailing | Haircut | E | P2 |

### 4d. Life-stage / occasion audience (28)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/grooms | barber for grooms boca raton | Grooms | Wedding | E | P0 |
| /for/groomsmen | barber for groomsmen boca raton | Wedding | Wedding | E | P0 |
| /for/best-man | best man haircut boca raton | Wedding | Wedding | E | P1 |
| /for/wedding-day | day of wedding barber boca raton | Wedding | House Call | E | P0 |
| /for/wedding-rehearsal | rehearsal dinner haircut boca raton | Wedding | LUX | E | P1 |
| /for/engagement-photos | engagement photo haircut boca | Couples | LUX | E | P1 |
| /for/first-date | first date haircut boca raton | Dating | Haircut | E | P1 |
| /for/anniversary | anniversary haircut boca raton | Couples | LUX | E | P2 |
| /for/job-interview | job interview haircut boca raton | Job seekers | Haircut | E | P0 |
| /for/promotion | new role haircut boca raton | Career change | Haircut | E | P2 |
| /for/court-date | court date haircut boca raton | Court | Haircut | E | P2 |
| /for/funeral | funeral haircut boca raton | Mourners | Haircut | E | P2 |
| /for/college-tour | college visit haircut for teens boca | Teens | Teen | E | P2 |
| /for/college-orientation | college orientation haircut boca | Teens | Teen | E | P2 |
| /for/graduation | graduation haircut boca raton | Grads | LUX | E | P0 |
| /for/prom | prom haircut boca raton | Teens | Teen | E | P0 |
| /for/homecoming | homecoming haircut boca raton | Teens | Teen | E | P1 |
| /for/senior-photos | senior photo haircut boca raton | Teens | Teen | E | P0 |
| /for/back-to-school | back to school haircut boca raton | Teens / parents | Kids | E | P0 |
| /for/military-deployment | pre deployment haircut boca raton | Military | Haircut | E | P2 |
| /for/military-leave | leave haircut for military boca | Military | Haircut | E | P2 |
| /for/new-baby | dad haircut before new baby boca | New dads | Haircut | E | P2 |
| /for/baptism | baptism haircut boca raton | Family | LUX | E | P2 |
| /for/bar-mitzvah | bar mitzvah haircut boca raton | Family | Teen | E | P2 |
| /for/quinceanera | quinceanera haircut for boys boca | Family | Teen | E | P2 |
| /for/sweet-sixteen | sweet sixteen haircut boys boca | Teens | Teen | E | P2 |
| /for/family-photo-day | family photo haircut boca raton | Families | Haircut | E | P1 |
| /for/holiday-card-photo | holiday card haircut boca raton | Families | Haircut | E | P1 |

### 4e. Family / kids / teens audience (16)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/dads-and-sons | father son haircut boca raton | Families | Kids | E | P0 |
| /for/first-haircut | first haircut for kids boca raton | Parents | Kids | E | P0 |
| /for/toddlers | toddler haircut boca raton | Parents | Kids | E | P0 |
| /for/preschoolers | preschooler haircut boca raton | Parents | Kids | E | P1 |
| /for/elementary-school-boys | elementary school boys haircut boca | Parents | Kids | E | P1 |
| /for/middle-school-boys | middle school boys haircut boca | Parents | Kids | E | P1 |
| /for/teens | teen boy haircut boca raton | Teens | Teen | E | P0 |
| /for/picky-kids | barber for picky kids boca raton | Parents | Kids | E | P1 |
| /for/anxious-kids | barber for anxious kids boca raton | Parents | Kids | E | P2 |
| /for/autism-friendly-haircut | autism friendly haircut boca raton | Parents | Kids | M | P0 |
| /for/sensory-friendly-haircut | sensory friendly haircut boca raton | Parents | Kids | M | P0 |
| /for/kids-with-curly-hair | curly kids haircut boca raton | Parents | Kids | E | P1 |
| /for/kids-with-thick-hair | thick hair kids haircut boca | Parents | Kids | E | P2 |
| /for/private-school-haircut | private school haircut for boys boca | Parents | Teen | E | P1 |
| /for/saint-andrews | haircut for saint andrews school students | Teens | Teen | E | P2 |
| /for/pine-crest | haircut for pine crest school students | Teens | Teen | E | P2 |

### 4f. Lifestyle / community audience (16)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/snowbirds | barber for snowbirds boca raton | Snowbirds | Haircut | E | P0 |
| /for/seasonal-residents | seasonal resident barber boca | Snowbirds | Haircut | E | P1 |
| /for/retirees | barber for retirees boca raton | Retirees | Haircut | E | P1 |
| /for/55-plus-communities | barber for 55 plus communities boca | Retirees | House Call | E | P2 |
| /for/yacht-owners | barber for yacht owners boca raton | Yacht | House Call | E | P1 |
| /for/marina-residents | barber for marina residents boca | Yacht | Haircut | E | P2 |
| /for/golf-community-residents | barber for boca west residents | Boca West | Haircut | E | P0 |
| /for/st-andrews-country-club | barber for st andrews country club boca | Country club | Haircut | E | P2 |
| /for/boca-west-residents | barber for boca west residents | Boca West | Haircut | E | P0 |
| /for/woodfield-residents | barber for woodfield country club residents | Country club | Haircut | E | P2 |
| /for/seven-bridges-residents | barber for seven bridges residents boca | Gated community | Haircut | E | P2 |
| /for/boca-isles-residents | barber for boca isles residents | Gated community | Haircut | E | P2 |
| /for/parkland-isles-residents | barber for parkland isles residents | Parkland | Haircut | E | P2 |
| /for/lgbtq-mens | lgbtq friendly barber boca raton | LGBTQ | Haircut | E | P1 |
| /for/non-binary-mens-cut | gender neutral barber boca raton | LGBTQ | Scissor Cut | M | P1 |
| /for/international-residents | barber for international residents boca | International | Haircut | E | P2 |

### 4g. Niche / wellness / private-need audience (10)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/cancer-patients | barber for cancer patients boca raton | Wellness | Hot Towel | M | P1 |
| /for/chemo-haircuts | head shave before chemo boca raton | Wellness | Hot Towel | E | P0 |
| /for/post-surgery | post surgery haircut boca raton | Wellness | House Call | E | P2 |
| /for/wheelchair-accessible | wheelchair accessible barber boca raton | Accessibility | Haircut | E | P1 |
| /for/home-bound | barber for home bound clients boca | Accessibility | House Call | E | P0 |
| /for/elderly-housecall | elderly home haircut boca raton | Accessibility | House Call | E | P0 |
| /for/dementia-friendly | dementia friendly barber boca raton | Wellness | House Call | M | P1 |
| /for/post-divorce | new look haircut after divorce boca | Life-change | LUX | E | P2 |
| /for/turning-50-haircut | new look haircut turning 50 boca | Life-change | LUX | E | P2 |
| /for/turning-60-haircut | new look haircut turning 60 boca | Life-change | LUX | E | P2 |

### 4h. Stylistic-identity audience (20)

| URL | Primary KW | Audience | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /for/preppy | preppy haircut boca raton | Preppy | Haircut | E | P1 |
| /for/yacht-club | yacht club haircut boca raton | Yacht | Haircut | E | P2 |
| /for/old-money | old money haircut boca raton | Preppy | Haircut | E | P2 |
| /for/streetwear | streetwear haircut boca raton | Streetwear | Haircut | E | P2 |
| /for/skater | skater haircut boca raton | Skater | Haircut | E | P2 |
| /for/biker | biker haircut boca raton | Biker | Haircut | E | P2 |
| /for/motorcycle-club | motorcycle club haircut boca | Biker | Haircut | E | P2 |
| /for/rocker | rocker haircut boca raton | Rocker | Haircut | E | P2 |
| /for/hip-hop | hip hop haircut boca raton | Hip-hop | Haircut | E | P2 |
| /for/latin-music-artists | latin music barber boca raton | Latin music | Haircut | E | P2 |
| /for/eras-tour | eras tour haircut boca raton | Concert-goers | Haircut | E | P2 |
| /for/concert-night | concert haircut boca raton | Concert-goers | Haircut | E | P2 |
| /for/gallery-opening | gallery opening haircut boca raton | Creatives | LUX | E | P2 |
| /for/art-basel | art basel haircut boca raton | Art Basel | LUX | M | P1 |
| /for/miami-grand-prix | miami grand prix haircut boca | Event | LUX | E | P2 |
| /for/super-bowl-weekend | super bowl weekend haircut boca | Event | Haircut | E | P2 |
| /for/spring-training | spring training haircut boca raton | Baseball fans | Haircut | E | P2 |
| /for/cruise-trip | pre cruise haircut boca raton | Cruise | Haircut | E | P1 |
| /for/europe-trip | pre vacation haircut boca raton | Travelers | Haircut | E | P2 |
| /for/business-trip | business trip haircut boca raton | Travelers | Haircut | E | P2 |

---

## Family 5 — Hair Problem Pages

120 problem-solving pages under `/best-for/<problem-slug>`. Each targets a constraint-based search (face shape, scalp condition, hair type, life stage) and answers "what cut works for me." The deliverable copy lists 3 recommended cuts + 1 to avoid, anchored to Kwest's bookable services.

### 5a. Face / head shape (16)

| URL | Primary KW | Recommended cut family | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /best-for/round-face | best haircuts round face men | Pomp, Side part, Quiff | Haircut | M | P0 |
| /best-for/oval-face | best haircuts oval face men | Caesar, Crew, Side part | Haircut | E | P0 |
| /best-for/square-face | best haircuts square face men | Slick back, Side part, Crop | Haircut | M | P0 |
| /best-for/heart-face | best haircuts heart face men | Mid length, Quiff, French crop | Haircut | E | P1 |
| /best-for/long-face | best haircuts long face men | Caesar, French crop, Textured fringe | Haircut | E | P1 |
| /best-for/rectangular-face | best haircuts rectangular face men | Caesar, French crop, Side part | Haircut | E | P1 |
| /best-for/diamond-face | best haircuts diamond face men | Pomp, Slick back, Crew | Haircut | E | P2 |
| /best-for/triangle-face | best haircuts triangle face men | Quiff, Buzz, Side part | Haircut | E | P2 |
| /best-for/big-forehead | best haircuts big forehead men | French crop, Textured fringe, Caesar | Haircut | M | P0 |
| /best-for/small-forehead | best haircuts small forehead men | Pomp, Slick back, Side part | Haircut | E | P1 |
| /best-for/big-ears | best haircuts big ears men | Side part, Mid length, Caesar | Haircut | E | P1 |
| /best-for/long-jawline | best haircuts strong jawline men | Slick back, Side part, Skin fade | Haircut | E | P1 |
| /best-for/round-head | best haircuts round head shape men | Caesar, Crew, Buzz | Haircut | E | P2 |
| /best-for/flat-head | best haircuts flat head men | Pomp, Quiff, Textured | Haircut | E | P2 |
| /best-for/pointed-chin | best haircuts pointed chin men | Mid length, Quiff, Side part | Haircut | E | P2 |
| /best-for/double-chin | best haircuts to hide double chin men | Mid length, Crew, Side part | Haircut | E | P2 |

### 5b. Hairline / scalp / thinning (16)

| URL | Primary KW | Recommended cut family | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /best-for/receding-hairline | best haircuts receding hairline men | Buzz, Caesar, Crop, Crew | Haircut | M | P0 |
| /best-for/receding-hairline-young-men | best haircuts receding hairline young men | Buzz, Caesar, Skin fade | Haircut | M | P0 |
| /best-for/widows-peak | best haircuts widows peak men | Caesar, Side part, French crop | Haircut | E | P1 |
| /best-for/balding-crown | best haircuts thinning crown men | Caesar, French crop, Buzz | Haircut | E | P0 |
| /best-for/balding-men | best haircuts balding men | Buzz, Skin fade, Caesar, Shaved | Haircut | M | P0 |
| /best-for/bald-with-beard | best look bald with beard | Hot towel shaved head, beard sculpt | Hot Towel | M | P0 |
| /best-for/horseshoe-pattern-balding | best haircuts horseshoe balding men | Shaved head, Hot towel | Hot Towel | E | P1 |
| /best-for/early-stage-thinning | best haircuts early thinning hair men | Caesar, Buzz, Textured crop | Haircut | E | P0 |
| /best-for/thinning-temples | best haircuts thinning temples men | Buzz, Caesar, Skin fade | Haircut | E | P1 |
| /best-for/thinning-overall | best haircuts thinning hair all over men | Buzz, Caesar, Crew | Haircut | E | P1 |
| /best-for/post-finasteride | best haircuts post finasteride users | Caesar, Buzz, Crop | Haircut | E | P2 |
| /best-for/post-minoxidil | best haircuts post minoxidil users | Caesar, Buzz, Crop | Haircut | E | P2 |
| /best-for/scalp-psoriasis | barber for scalp psoriasis boca raton | Gentle clipper, Hot towel | Haircut | E | P1 |
| /best-for/dandruff-prone | barber for dandruff prone scalp boca | Gentle clipper, Hot towel | Haircut | E | P2 |
| /best-for/sensitive-scalp | barber for sensitive scalp boca raton | Scissor cut, Hot towel | Scissor Cut | E | P2 |
| /best-for/eczema-scalp | barber for eczema scalp boca raton | Scissor cut, Hot towel | Scissor Cut | E | P2 |

### 5c. Hair texture / characteristics (24)

| URL | Primary KW | Recommended cut family | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /best-for/thin-hair | best haircuts thin hair men | Caesar, Buzz, Textured crop | Haircut | M | P0 |
| /best-for/fine-hair | best haircuts fine hair men | Textured crop, Quiff, Pomp | Haircut | M | P0 |
| /best-for/thick-hair | best haircuts thick hair men | Crew, Pomp, Mid length | Haircut | M | P0 |
| /best-for/coarse-hair | best haircuts coarse hair men | Crew, Buzz, Caesar | Haircut | E | P1 |
| /best-for/wavy-hair | best haircuts wavy hair men | Mid length, Quiff, Surfer | Scissor Cut | E | P0 |
| /best-for/curly-hair | best haircuts curly hair men | Drop fade curly, Curly top skin, Scissor | Scissor Cut | M | P0 |
| /best-for/very-curly-hair | best haircuts very curly hair men | Scissor only, Long curly | Scissor Cut | M | P0 |
| /best-for/coily-hair | best haircuts coily hair men | Scissor, Twist out, Coily | Scissor Cut | M | P1 |
| /best-for/4c-hair | best haircuts 4c hair men | Scissor, Twist out, Afro | Scissor Cut | M | P0 |
| /best-for/3c-hair | best haircuts 3c hair men | Scissor, Drop fade, Twist out | Scissor Cut | E | P1 |
| /best-for/3a-hair | best haircuts 3a hair men | Scissor, Mid length curly | Scissor Cut | E | P1 |
| /best-for/2c-hair | best haircuts 2c hair men | Mid length, Surfer, Quiff | Scissor Cut | E | P2 |
| /best-for/straight-hair | best haircuts straight hair men | Crew, Side part, Pomp | Haircut | M | P1 |
| /best-for/dry-hair | best haircuts dry hair men | Textured crop, Buzz, Caesar | Haircut | E | P2 |
| /best-for/oily-hair | best haircuts oily hair men | Short cuts, Crew, Buzz | Haircut | E | P2 |
| /best-for/frizzy-hair | best haircuts frizzy hair men | Scissor, Mid length, Textured | Scissor Cut | E | P1 |
| /best-for/cowlicks | best haircuts cowlicks men | Textured crop, Quiff, French crop | Haircut | E | P1 |
| /best-for/double-crown | best haircuts double crown men | Textured crop, Buzz, Caesar | Haircut | E | P2 |
| /best-for/flat-hair | best haircuts flat hair men | Quiff, Pomp, Textured | Haircut | E | P2 |
| /best-for/oily-scalp | best haircuts oily scalp men | Short cuts, Crew, Buzz | Haircut | E | P2 |
| /best-for/dandruff | best haircuts dandruff men | Short cuts, Hot towel | Haircut | E | P2 |
| /best-for/postpartum-hair-loss-male | best haircuts male postpartum hair loss | Caesar, Buzz, Crop | Haircut | E | P2 |
| /best-for/post-covid-hair-loss | best haircuts post covid hair loss men | Caesar, Buzz, Crop | Haircut | E | P2 |
| /best-for/grey-hair | best haircuts grey hair men | Mid length, Slick back, Side part | Haircut | E | P1 |

### 5d. Lifestyle / maintenance constraints (20)

| URL | Primary KW | Recommended | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /best-for/low-maintenance | best low maintenance haircuts men | Buzz, Crew, Caesar | Haircut | M | P0 |
| /best-for/high-maintenance | best high maintenance haircut men | Skin fade, Pomp, Slick back | Haircut | E | P1 |
| /best-for/once-a-month-cut | haircuts you can stretch to monthly men | Mid length, Caesar, Crew | Haircut | E | P0 |
| /best-for/twice-a-month-cut | haircuts that need biweekly men | Skin fade, High fade, Burst | Fades | E | P0 |
| /best-for/work-from-home | best haircuts work from home men | Buzz, Mid length, Casual | Haircut | E | P1 |
| /best-for/zoom-calls | best haircuts for video calls men | Side part, Slick back, Crew | Haircut | E | P1 |
| /best-for/on-camera | best haircuts on camera men | Executive, Photoshoot, LUX | LUX | E | P1 |
| /best-for/sweaty-jobs | best haircuts sweaty jobs men | Buzz, Crew, Skin fade | Haircut | E | P2 |
| /best-for/construction-work | best haircuts construction workers | Buzz, Crew, Caesar | Haircut | E | P2 |
| /best-for/landscapers | best haircuts landscapers men | Buzz, Crew, Skin fade | Haircut | E | P2 |
| /best-for/outdoor-jobs | best haircuts outdoor workers men | Buzz, Crew, Skin fade | Haircut | E | P2 |
| /best-for/hat-wearers | best haircuts hat wearers men | Short cuts, Buzz, Caesar | Haircut | E | P1 |
| /best-for/cap-wearers | best haircuts baseball cap men | Short cuts, Buzz, Caesar | Haircut | E | P2 |
| /best-for/helmet-wearers | best haircuts helmet wearers men | Buzz, Caesar, Crew | Haircut | E | P2 |
| /best-for/swimmers | best haircuts swimmers men | Buzz, Crew, Caesar | Haircut | E | P2 |
| /best-for/runners | best haircuts runners men | Buzz, Crew, Caesar | Haircut | E | P2 |
| /best-for/triathletes-style | best haircuts triathletes men | Buzz, Crew, Caesar | Haircut | E | P2 |
| /best-for/lazy-mens | best low effort haircuts men | Buzz, Crew, Mid length | Haircut | E | P1 |
| /best-for/picky-mens | best haircuts for guys who care about details | LUX, Executive, Photoshoot | LUX | E | P2 |
| /best-for/growing-out | best haircuts to grow your hair out men | Mid length, Surfer, Long | Scissor Cut | M | P0 |

### 5e. Age-bracket lifestyle (16)

| URL | Primary KW | Recommended | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /best-for/teens | best haircuts teen boys boca raton | Trend, Edgar, K-pop | Teen | E | P0 |
| /best-for/20s | best haircuts men in 20s | Modern fade, Quiff, Textured | Haircut | E | P0 |
| /best-for/30s | best haircuts men in 30s | Side part, Executive, Skin fade | Haircut | E | P0 |
| /best-for/40s | best haircuts men in 40s | Side part, Caesar, Crew | Haircut | E | P0 |
| /best-for/50s | best haircuts men in 50s | Side part, Caesar, Crew, Slick | Haircut | E | P1 |
| /best-for/60s | best haircuts men in 60s | Crew, Caesar, Mid length | Haircut | E | P1 |
| /best-for/70s | best haircuts men in 70s | Crew, Caesar, Slick | Haircut | E | P2 |
| /best-for/silver-foxes | best haircuts silver fox men | Slick back, Side part, Mid length | Haircut | E | P1 |
| /best-for/looking-younger | best haircuts to look younger men | Textured crop, Crew, French crop | Haircut | E | P0 |
| /best-for/looking-older | best haircuts to look older men 20s | Side part, Slick, Beard | Haircut | E | P2 |
| /best-for/college-men | best haircuts college men | Edgar, Drop fade, Textured | Haircut | E | P0 |
| /best-for/freshman-year | best haircuts freshman year college | Edgar, Drop fade, Mid fade | Haircut | E | P2 |
| /best-for/dads | best haircuts dads boca raton | Crew, Caesar, Side part | Haircut | E | P0 |
| /best-for/new-dads | best haircuts new dads boca | Buzz, Crew, Caesar | Haircut | E | P1 |
| /best-for/grandads | best haircuts grandads boca raton | Crew, Caesar, Slick | Haircut | E | P2 |
| /best-for/retirees | best haircuts retirees boca raton | Crew, Caesar, Slick | Haircut | E | P1 |

### 5f. Weather / climate (8)

(South Florida humidity is the specific local angle. Avoid generic "summer / winter" without a Boca anchor.)

| URL | Primary KW | Recommended | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /best-for/south-florida-humidity | best haircuts south florida humidity | Skin fade, Buzz, Short crop | Haircut | M | P0 |
| /best-for/beach-humidity | best haircuts beach humidity men | Skin fade, Buzz, Short crop | Haircut | E | P1 |
| /best-for/saltwater-swimmers | best haircuts saltwater swimmers men | Buzz, Crew, Caesar | Haircut | E | P2 |
| /best-for/pool-swimmers | best haircuts pool swimmers men | Buzz, Crew, Caesar | Haircut | E | P2 |
| /best-for/sun-exposure | best haircuts sun exposure boca raton | Mid length, Caesar, Hat-friendly | Haircut | E | P2 |
| /best-for/heat-rash-prone | haircuts to avoid heat rash men | Skin fade, Buzz, Crew | Haircut | E | P2 |
| /best-for/dry-winters-up-north | snowbird haircuts for winters up north | Mid length, Crew, Conditioner | Haircut | E | P2 |
| /best-for/hurricane-season | hurricane season haircut boca raton | Short cuts, Buzz, Skin fade | Haircut | E | P2 |

### 5g. Cultural / heritage hair (20)

| URL | Primary KW | Recommended | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /best-for/black-mens-hair | best haircuts black men boca raton | Drop fade, Skin fade, Coily | Scissor Cut | M | P0 |
| /best-for/latino-mens-hair | best haircuts latino men boca raton | Edgar, Mid fade, Burst | Haircut | M | P0 |
| /best-for/mexican-mens-hair | best haircuts mexican men boca raton | Edgar, Mid fade, Burst | Haircut | E | P1 |
| /best-for/cuban-mens-hair | best haircuts cuban men boca raton | Side part, Slick back, Skin fade | Haircut | E | P1 |
| /best-for/colombian-mens-hair | best haircuts colombian men boca | Side part, Slick back, Skin fade | Haircut | E | P2 |
| /best-for/brazilian-mens-hair | best haircuts brazilian men boca raton | Mid length, Surfer, Wavy | Scissor Cut | E | P2 |
| /best-for/asian-mens-hair | best haircuts asian men boca raton | Two block, K-pop, Textured | Haircut | E | P1 |
| /best-for/chinese-mens-hair | best haircuts chinese men boca raton | Side part, K-pop, Crew | Haircut | E | P2 |
| /best-for/japanese-mens-hair | best haircuts japanese men boca raton | Two block, Textured crop, K-pop | Haircut | E | P2 |
| /best-for/korean-mens-hair | best haircuts korean men boca raton | K-pop, Two block, Quiff | Haircut | E | P1 |
| /best-for/filipino-mens-hair | best haircuts filipino men boca raton | Two block, Quiff, Textured | Haircut | E | P2 |
| /best-for/indian-mens-hair | best haircuts indian men boca raton | Side part, Slick back, Mid fade | Haircut | E | P1 |
| /best-for/middle-eastern-mens-hair | best haircuts middle eastern men boca | Side part, Slick back, Pomp | Haircut | E | P1 |
| /best-for/jewish-mens-hair | best haircuts jewish men boca raton | Side part, Slick back, Mid length | Haircut | E | P1 |
| /best-for/orthodox-jewish-men | barber for orthodox jewish men boca | Beard, Side part, Modest cut | Haircut | E | P2 |
| /best-for/european-mens-hair | best haircuts european men boca raton | Side part, Slick back, Mid length | Haircut | E | P2 |
| /best-for/italian-mens-hair | best haircuts italian men boca raton | Slick back, Pomp, Side part | Haircut | E | P2 |
| /best-for/irish-mens-hair | best haircuts irish men boca raton | Side part, Crew, Caesar | Haircut | E | P2 |
| /best-for/caribbean-mens-hair | best haircuts caribbean men boca raton | Drop fade, Coily, Twist out | Scissor Cut | E | P2 |
| /best-for/haitian-mens-hair | best haircuts haitian men boca raton | Drop fade, Coily, Twist out | Scissor Cut | E | P2 |

---

## Family 6 — Beard Pages

65 beard pages under `/beard/`. The site currently buries beard work inside `haircut-and-beard`; this cluster surfaces every distinct beard intent.

| URL | Primary KW | Intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /beard/full-beard | full beard styles men | Style guide | Beard sculpt | M | P0 |
| /beard/short-boxed-beard | short boxed beard | Style guide | Beard sculpt | E | P0 |
| /beard/long-beard | long beard styles men | Style guide | Beard sculpt | M | P0 |
| /beard/medium-beard | medium length beard styles men | Style guide | Beard sculpt | E | P0 |
| /beard/circle-beard | circle beard | Style guide | Beard sculpt | E | P1 |
| /beard/goatee | goatee styles men | Style guide | Beard sculpt | M | P0 |
| /beard/van-dyke | van dyke beard | Style guide | Beard sculpt | E | P1 |
| /beard/balbo | balbo beard | Style guide | Beard sculpt | E | P1 |
| /beard/anchor-beard | anchor beard | Style guide | Beard sculpt | E | P2 |
| /beard/imperial | imperial beard | Style guide | Beard sculpt | E | P2 |
| /beard/ducktail | ducktail beard | Style guide | Beard sculpt | E | P1 |
| /beard/extended-goatee | extended goatee | Style guide | Beard sculpt | E | P1 |
| /beard/mutton-chops | mutton chops beard | Style guide | Beard sculpt | E | P2 |
| /beard/friendly-mutton-chops | friendly mutton chops | Style guide | Beard sculpt | E | P2 |
| /beard/chinstrap | chinstrap beard | Style guide | Beard sculpt | E | P1 |
| /beard/soul-patch | soul patch beard | Style guide | Beard sculpt | E | P2 |
| /beard/stubble-beard | stubble beard | Style guide | Beard sculpt | E | P1 |
| /beard/5-oclock-shadow | 5 oclock shadow beard maintenance | Maintenance | Beard sculpt | E | P1 |
| /beard/3-day-stubble | 3 day stubble look men | Maintenance | Beard sculpt | E | P1 |
| /beard/short-stubble | short stubble beard | Maintenance | Beard sculpt | E | P2 |
| /beard/heavy-stubble | heavy stubble beard | Maintenance | Beard sculpt | E | P2 |
| /beard/corporate-beard | corporate beard style | Pro look | Beard sculpt | E | P0 |
| /beard/executive-beard | executive beard styles | Pro look | Beard sculpt | E | P1 |
| /beard/professional-beard | professional beard styles | Pro look | Beard sculpt | E | P1 |
| /beard/wedding-beard | wedding beard styles | Occasion | Beard sculpt | E | P0 |
| /beard/interview-beard | interview beard styles | Occasion | Beard sculpt | E | P0 |
| /beard/hipster-beard | hipster beard styles men | Style | Beard sculpt | E | P2 |
| /beard/lumberjack-beard | lumberjack beard styles men | Style | Beard sculpt | E | P2 |
| /beard/viking-beard | viking beard styles | Style | Beard sculpt | E | P2 |
| /beard/yeard | yeard guide men | Long-term grow | Beard sculpt | E | P2 |
| /beard/beard-fade | beard fade guide | Technique | Beard sculpt | M | P0 |
| /beard/beard-blend-into-sideburns | how to blend beard into sideburns | Technique | Beard sculpt | E | P0 |
| /beard/beard-line-up | beard line up guide | Technique | Beard line-up | E | P0 |
| /beard/beard-cheek-line | beard cheek line guide men | Technique | Beard line-up | E | P0 |
| /beard/beard-neck-line | beard neck line guide men | Technique | Beard line-up | E | P0 |
| /beard/beard-shape-by-face | beard style by face shape men | Guide | Beard sculpt | M | P0 |
| /beard/beard-round-face | best beard round face men | Face-specific | Beard sculpt | E | P0 |
| /beard/beard-oval-face | best beard oval face men | Face-specific | Beard sculpt | E | P0 |
| /beard/beard-square-face | best beard square face men | Face-specific | Beard sculpt | E | P0 |
| /beard/beard-long-face | best beard long face men | Face-specific | Beard sculpt | E | P1 |
| /beard/beard-heart-face | best beard heart face men | Face-specific | Beard sculpt | E | P1 |
| /beard/beard-thin-face | best beard thin face men | Face-specific | Beard sculpt | E | P1 |
| /beard/beard-double-chin | best beard double chin men | Face-specific | Beard sculpt | E | P0 |
| /beard/beard-weak-jaw | best beard weak jaw men | Face-specific | Beard sculpt | E | P0 |
| /beard/beard-strong-jaw | best beard strong jaw men | Face-specific | Beard sculpt | E | P1 |
| /beard/beard-balding-men | best beard balding men | Combo | Beard sculpt | E | P0 |
| /beard/beard-shaved-head | best beard shaved head men | Combo | Beard sculpt | E | P0 |
| /beard/beard-buzz-cut | best beard buzz cut men | Combo | Beard sculpt | E | P0 |
| /beard/beard-skin-fade | best beard skin fade men | Combo | Beard sculpt | E | P0 |
| /beard/beard-crew-cut | best beard crew cut men | Combo | Beard sculpt | E | P1 |
| /beard/beard-curly-hair | best beard curly hair men | Combo | Beard sculpt | E | P1 |
| /beard/beard-grey | beard grey hair styles | Combo | Beard sculpt | E | P1 |
| /beard/beard-salt-pepper | salt and pepper beard styles | Combo | Beard sculpt | E | P0 |
| /beard/patchy-beard-fix | patchy beard fix guide | Problem | Beard sculpt | M | P0 |
| /beard/sparse-beard-styling | sparse beard styling men | Problem | Beard sculpt | E | P0 |
| /beard/beard-fill-in | how to fill in patchy beard | Problem | Beard sculpt | E | P0 |
| /beard/beard-itch-relief | beard itch relief barber | Problem | Beard sculpt | E | P1 |
| /beard/beardruff | beardruff prevention guide men | Problem | Beard sculpt | E | P2 |
| /beard/beard-dandruff | beard dandruff fix men | Problem | Beard sculpt | E | P2 |
| /beard/grow-thicker-beard | how to grow thicker beard men | How-to | Beard sculpt | M | P0 |
| /beard/grow-longer-beard | how to grow longer beard men | How-to | Beard sculpt | E | P1 |
| /beard/beard-care-routine | beard care routine men | How-to | Beard sculpt | E | P0 |
| /beard/beard-products-essentials | beard products essentials men | Product | Beard sculpt | E | P0 |
| /beard/best-beard-oils | best beard oils men | Product | Beard sculpt | M | P1 |
| /beard/best-beard-balms | best beard balms men | Product | Beard sculpt | E | P1 |

---

## Family 7 — Wave & Black Hair Pages

60 pages under `/waves/` (and a few overflow under `/styles/`). High-value cluster Kwest currently doesn't address. The shop's Scissor Cut and skin-fade specialties are the service anchors.

| URL | Primary KW | Intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /waves/360-waves-guide | 360 waves guide | Definitional | Scissor Cut | H | P0 |
| /waves/start-360-waves | how to start 360 waves | How-to | Scissor Cut | M | P0 |
| /waves/get-deep-waves | how to get deep waves | How-to | Scissor Cut | M | P0 |
| /waves/wolfing-waves | wolfing for waves guide | How-to | Scissor Cut | M | P0 |
| /waves/connect-waves | how to connect waves on top | How-to | Scissor Cut | E | P0 |
| /waves/brushing-waves | how to brush waves | How-to | Scissor Cut | M | P0 |
| /waves/wave-brush-guide | best wave brush for men | Product | Scissor Cut | M | P1 |
| /waves/durag-guide | durag guide for waves | Product | Scissor Cut | E | P0 |
| /waves/best-durag-for-waves | best durag for waves men | Product | Scissor Cut | E | P0 |
| /waves/wave-pomade-guide | wave pomade guide | Product | Scissor Cut | E | P1 |
| /waves/wave-cream-guide | wave cream guide | Product | Scissor Cut | E | P1 |
| /waves/wave-shampoo-routine | wave shampoo routine | Routine | Scissor Cut | E | P1 |
| /waves/wash-day-waves | wash day routine waves | Routine | Scissor Cut | E | P1 |
| /waves/moisturize-waves | how to moisturize waves | Routine | Scissor Cut | E | P1 |
| /waves/wave-haircut-cycles | wave haircut cycles | Guide | Scissor Cut | E | P1 |
| /waves/first-wave-haircut | first wave haircut guide | Guide | Scissor Cut | E | P1 |
| /waves/wave-fade | wave fade haircut | Style | Skin Fade | M | P0 |
| /waves/wave-skin-fade | wave skin fade haircut | Style | Skin Fade | M | P0 |
| /waves/wave-drop-fade | wave drop fade haircut | Style | Fades | E | P1 |
| /waves/wave-burst-fade | wave burst fade haircut | Style | Fades | E | P1 |
| /waves/wave-line-up | line up for waves | Style | Line-up | E | P0 |
| /waves/wave-shape-up | shape up for waves | Style | Shape-up | E | P0 |
| /waves/wave-temple-fade | wave temple fade | Style | Fades | E | P1 |
| /waves/wave-mid-fade | wave mid fade haircut | Style | Fades | E | P0 |
| /waves/wave-low-fade | wave low fade haircut | Style | Fades | E | P0 |
| /waves/wave-bald-fade | wave bald fade haircut | Style | Skin Fade | E | P1 |
| /waves/360-vs-540-waves | 360 vs 540 waves | Comparison | Scissor Cut | M | P0 |
| /waves/540-vs-720-waves | 540 vs 720 waves | Comparison | Scissor Cut | E | P1 |
| /waves/720-waves-guide | 720 waves guide | Definitional | Scissor Cut | E | P1 |
| /waves/360-waves-coarse-hair | 360 waves for coarse hair | Texture-specific | Scissor Cut | E | P1 |
| /waves/360-waves-soft-hair | 360 waves for soft hair | Texture-specific | Scissor Cut | E | P2 |
| /waves/360-waves-curly-hair | 360 waves for curly hair | Texture-specific | Scissor Cut | E | P1 |
| /waves/360-waves-mixed-hair | 360 waves for mixed hair | Texture-specific | Scissor Cut | E | P2 |
| /waves/360-waves-with-beard | 360 waves with beard | Combo | Scissor Cut | E | P1 |
| /waves/360-waves-with-shape-up | 360 waves with shape up | Combo | Shape-up | E | P1 |
| /waves/360-waves-with-line-up | 360 waves with line up | Combo | Line-up | E | P1 |
| /waves/best-cut-for-starting-waves | best haircut to start waves | Guide | Scissor Cut | E | P0 |
| /waves/keep-waves-summer-humidity | keep waves in south florida humidity | Local | Scissor Cut | M | P0 |
| /waves/waves-after-pool | waves after pool day | Local | Scissor Cut | E | P1 |
| /waves/waves-after-beach | waves after beach day | Local | Scissor Cut | E | P1 |
| /waves/wave-haircut-boca-raton | wave haircut boca raton | Local commercial | Scissor Cut | M | P0 |
| /waves/wave-barber-boca-raton | wave barber boca raton | Local commercial | Scissor Cut | M | P0 |
| /waves/wave-barber-near-fau | wave barber near fau | Local commercial | Scissor Cut | E | P0 |
| /waves/wave-haircut-delray-beach | wave haircut delray beach | Local commercial | Scissor Cut | E | P1 |
| /waves/wave-haircut-deerfield-beach | wave haircut deerfield beach | Local commercial | Scissor Cut | E | P2 |
| /waves/cornrows-care | cornrow care for men | Black hair care | Scissor Cut | M | P1 |
| /waves/cornrow-styles | cornrow styles men | Black hair style | Scissor Cut | M | P1 |
| /waves/braids-care-men | braids care for men | Black hair care | Scissor Cut | M | P1 |
| /waves/twist-care-men | twist care for men | Black hair care | Scissor Cut | E | P1 |
| /waves/loc-care-men | loc care for men | Black hair care | Scissor Cut | M | P1 |
| /waves/twa-haircut | twa haircut men | Black hair style | Scissor Cut | E | P1 |
| /waves/twa-fade | twa fade haircut | Black hair style | Fades | E | P1 |
| /waves/transitioning-natural-hair-men | transitioning natural hair men | Black hair guide | Scissor Cut | M | P1 |
| /waves/big-chop-men | big chop guide men | Black hair guide | Scissor Cut | M | P1 |
| /waves/edge-control-men | edge control for men | Black hair product | Scissor Cut | E | P2 |
| /waves/silk-press-men | silk press men hair | Black hair style | Scissor Cut | E | P2 |
| /waves/sponge-twist-guide | sponge twist guide men | Black hair guide | Scissor Cut | E | P1 |
| /waves/wave-grease-guide | wave grease guide men | Product | Scissor Cut | E | P2 |
| /waves/wave-stocking-cap | wave stocking cap vs durag | Product comparison | Scissor Cut | E | P2 |
| /waves/wave-bonnet | wave bonnet vs durag | Product comparison | Scissor Cut | E | P2 |

---

## Family 8 — Hyperlocal Landmark Pages

35 pages under `/near/<landmark>`. **Strict rule:** these are NOT city-swap pages. Each landmark sits within ~10–25 min of 2100 N Federal Hwy #24 and gives the page a unique local intent (commuter pattern, daypart, lunch-break window, parking, etc.). Landmark pages REPLACE most of the existing area pages in the index priority — see `indexation-risk-report.md`.

| URL | Primary KW | Local intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /near/fau | barber near fau boca raton | Student walk-up + lunch | Haircut | M | P0 |
| /near/fau-stadium | barber near fau stadium | Game day | Haircut | E | P0 |
| /near/lynn-university | barber near lynn university boca | Student | Haircut | E | P1 |
| /near/mizner-park | barber near mizner park boca raton | Lunch-break pro | Haircut | M | P0 |
| /near/mizner-park-amphitheater | barber near mizner park amphitheater | Pre-event | LUX | E | P1 |
| /near/town-center-mall | barber near town center mall boca raton | Errand-stack | Haircut | M | P0 |
| /near/boca-raton-airport | barber near boca raton airport | Pilots / travelers | Haircut | E | P1 |
| /near/glades-road | barber near glades road boca raton | Commuter corridor | Haircut | M | P0 |
| /near/federal-highway | barber on federal highway boca raton | Address-anchored | Haircut | E | P0 |
| /near/yamato-road | barber near yamato road boca raton | Office park | Haircut | E | P0 |
| /near/palmetto-park-road | barber near palmetto park road boca | Beach / dining | Haircut | E | P1 |
| /near/spanish-river-blvd | barber near spanish river boulevard | Office / school | Haircut | E | P1 |
| /near/old-dixie-highway | barber near old dixie highway boca | Address-anchored | Haircut | E | P2 |
| /near/clint-moore-road | barber near clint moore road boca | Residential corridor | Haircut | E | P2 |
| /near/military-trail-boca | barber near military trail boca raton | Office corridor | Haircut | E | P1 |
| /near/i95-exit-50 | barber near i95 exit 50 boca raton | Highway-driver | Haircut | E | P1 |
| /near/i95-exit-48 | barber near i95 exit 48 boca raton | Highway-driver | Haircut | E | P2 |
| /near/turnpike-exit-75 | barber near florida turnpike exit 75 | Highway-driver | Haircut | E | P2 |
| /near/boca-raton-hospital | barber near boca raton regional hospital | Healthcare workers | After Hours | E | P1 |
| /near/west-boca-medical | barber near west boca medical center | Healthcare workers | After Hours | E | P2 |
| /near/sandalfoot-cove | barber near sandalfoot cove boca | Residential | Haircut | E | P2 |
| /near/east-boca | barber in east boca raton | Sub-area | Haircut | M | P0 |
| /near/west-boca | barber in west boca raton | Sub-area | Haircut | M | P0 |
| /near/downtown-boca | barber in downtown boca raton | Sub-area | Haircut | M | P0 |
| /near/north-boca | barber in north boca raton | Sub-area | Haircut | E | P1 |
| /near/south-boca | barber in south boca raton | Sub-area | Haircut | E | P1 |
| /near/boca-beach | barber near boca beach | Beach-goer | Haircut | E | P1 |
| /near/red-reef-park | barber near red reef park boca | Beach-goer | Haircut | E | P2 |
| /near/spanish-river-park | barber near spanish river park | Beach-goer | Haircut | E | P2 |
| /near/the-shops-at-boca-center | barber near the shops at boca center | Errand-stack | Haircut | E | P2 |
| /near/uptown-boca | barber near uptown boca | Newer development | Haircut | E | P2 |
| /near/whole-foods-boca | barber near whole foods boca raton | Errand-stack | Haircut | E | P2 |
| /near/trader-joes-boca | barber near trader joes boca raton | Errand-stack | Haircut | E | P2 |
| /near/boca-marriott | barber near boca raton marriott | Hotel guests | Hot Towel | E | P1 |
| /near/boca-resort | barber near the boca raton resort | Hotel guests | LUX | M | P1 |

---

## Family 9 — Seasonal & Trend Pages

55 pages under `/guide/<slug>`. Trend pages refresh yearly (rolling 12 months). Seasonal pages refresh 4× a year. All anchored to South Florida weather, not generic US.

### 9a. Yearly trend (12)

| URL | Primary KW | Intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /guide/best-mens-haircuts-2026 | best mens haircuts 2026 | Annual trend roundup | Haircut | H | P0 |
| /guide/best-fade-haircuts-2026 | best fade haircuts 2026 | Fade trend roundup | Fades | M | P0 |
| /guide/trending-beard-styles-2026 | trending beard styles 2026 | Beard trend roundup | Beard sculpt | M | P0 |
| /guide/most-popular-haircuts-boca-raton-2026 | most popular haircuts boca raton 2026 | Local trend | Haircut | M | P0 |
| /guide/celebrity-haircuts-2026 | celebrity mens haircuts 2026 | Celebrity-driven | Haircut | M | P1 |
| /guide/influencer-haircuts-2026 | influencer mens haircuts 2026 | Influencer-driven | Haircut | M | P1 |
| /guide/k-pop-haircuts-2026 | k pop haircuts 2026 | Niche trend | Haircut | E | P1 |
| /guide/latino-haircuts-2026 | latino mens haircuts 2026 | Niche trend | Haircut | E | P1 |
| /guide/college-haircuts-2026 | college mens haircuts 2026 | Niche trend | Haircut | E | P1 |
| /guide/professional-haircuts-2026 | professional mens haircuts 2026 | Niche trend | Haircut | E | P1 |
| /guide/short-haircuts-2026 | short mens haircuts 2026 | Length trend | Haircut | E | P1 |
| /guide/long-haircuts-2026 | long mens haircuts 2026 | Length trend | Haircut | E | P2 |

### 9b. Seasonal (16)

| URL | Primary KW | Intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /guide/summer-haircuts-south-florida | summer haircuts south florida men | Seasonal local | Haircut | M | P0 |
| /guide/winter-haircuts-south-florida | winter haircuts south florida men | Seasonal local | Haircut | E | P1 |
| /guide/spring-haircuts-boca-raton | spring haircuts boca raton men | Seasonal local | Haircut | E | P1 |
| /guide/fall-haircuts-boca-raton | fall haircuts boca raton men | Seasonal local | Haircut | E | P2 |
| /guide/back-to-school-haircuts | back to school haircuts boca raton | Annual peak | Kids / Teen | E | P0 |
| /guide/spring-break-haircuts | spring break haircuts boca raton | Annual peak | Haircut | E | P0 |
| /guide/summer-vacation-haircuts | summer vacation haircuts men | Annual peak | Haircut | E | P1 |
| /guide/holiday-season-haircuts | holiday season haircuts boca raton | Annual peak | LUX | E | P0 |
| /guide/new-years-eve-haircut | new years eve haircut boca raton | Annual peak | LUX | E | P0 |
| /guide/thanksgiving-haircut | thanksgiving haircut boca raton | Annual peak | LUX | E | P1 |
| /guide/christmas-haircut | christmas haircut boca raton | Annual peak | LUX | E | P1 |
| /guide/valentines-day-haircut | valentines day haircut boca raton | Annual peak | Haircut | E | P1 |
| /guide/fathers-day-haircut | fathers day haircut boca raton | Annual peak | Haircut | E | P1 |
| /guide/memorial-day-haircut | memorial day haircut boca raton | Annual peak | Haircut | E | P2 |
| /guide/labor-day-haircut | labor day haircut boca raton | Annual peak | Haircut | E | P2 |
| /guide/fourth-of-july-haircut | fourth of july haircut boca raton | Annual peak | Haircut | E | P2 |

### 9c. Booking patterns / cadence (10)

| URL | Primary KW | Intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /guide/how-often-haircut | how often should men get a haircut | Evergreen / AEO | Haircut | M | P0 |
| /guide/2-week-haircut-rotation | 2 week haircut rotation men | Cadence | Haircut | E | P0 |
| /guide/3-week-haircut-rotation | 3 week haircut rotation men | Cadence | Haircut | E | P0 |
| /guide/4-week-haircut-rotation | 4 week haircut rotation men | Cadence | Haircut | E | P0 |
| /guide/monthly-haircut-rotation | monthly haircut rotation men | Cadence | Haircut | E | P1 |
| /guide/how-often-beard-trim | how often should men trim their beard | Cadence | Beard sculpt | E | P0 |
| /guide/how-often-line-up | how often line up haircut | Cadence | Line-up | E | P1 |
| /guide/how-often-skin-fade-touch-up | how often skin fade touch up | Cadence | Skin Fade | E | P1 |
| /guide/maintenance-between-cuts | mens hair maintenance between cuts | Cadence | Haircut | E | P1 |
| /guide/booking-cadence-boca-barber | how often boca raton men get a haircut | Local cadence | Haircut | E | P2 |

### 9d. Pricing / costs (7)

| URL | Primary KW | Intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /guide/haircut-cost-boca-raton-2026 | mens haircut cost boca raton 2026 | Local pricing | Haircut | M | P0 |
| /guide/lux-haircut-cost-boca-raton | luxury haircut cost boca raton | Premium pricing | LUX | E | P0 |
| /guide/beard-trim-cost-boca-raton | beard trim cost boca raton | Service pricing | Beard sculpt | E | P0 |
| /guide/hot-towel-shave-cost-boca-raton | hot towel shave cost boca raton | Service pricing | Hot Towel | E | P0 |
| /guide/kids-haircut-cost-boca-raton | kids haircut cost boca raton | Family pricing | Kids | E | P1 |
| /guide/wedding-haircut-cost-boca-raton | wedding haircut cost boca raton | Occasion pricing | Wedding | E | P0 |
| /guide/house-call-haircut-cost-boca-raton | house call haircut cost boca raton | Service pricing | House Call | E | P0 |

### 9e. Booking / etiquette (10)

| URL | Primary KW | Intent | Hub | Diff | Pri |
|---|---|---|---|---|---|
| /guide/barber-tipping-guide | how much to tip barber | Etiquette | Haircut | M | P0 |
| /guide/barber-consultation-questions | what to ask barber at consultation | Pre-visit | Haircut | E | P0 |
| /guide/photos-to-bring-barber | reference photos to bring to barber | Pre-visit | Haircut | E | P0 |
| /guide/what-to-say-barber | what to say at the barber | Etiquette | Haircut | E | P0 |
| /guide/haircut-name-guide | haircut names guide for men | Pre-visit | Haircut | E | P0 |
| /guide/clipper-guard-numbers | clipper guard numbers explained | Pre-visit | Haircut | E | P0 |
| /guide/haircut-vocabulary | haircut vocabulary for men | Pre-visit | Haircut | E | P1 |
| /guide/squire-booking-guide | how to book on squire | Brand-specific | Haircut | E | P0 |
| /guide/walk-in-haircut-etiquette | walk in haircut etiquette | Etiquette | Haircut | E | P1 |
| /guide/private-appointment-etiquette | private barber appointment etiquette | Etiquette | Private | E | P2 |

---

## Extending the existing `/answers/` cluster

The existing 6 answer pages keep their slugs. New AEO questions feed the same hub at `/answers/`. Below are 20 high-extraction-value Q&A additions that don't duplicate any of the 6 current answers:

| URL | Primary KW (= question) | Speakable lede angle | Diff | Pri |
|---|---|---|---|---|
| /answers/how-much-to-tip-a-barber | how much should you tip a barber | 18–20% standard; tip on bill, not on service | E | P0 |
| /answers/can-you-fix-a-bad-haircut | can a barber fix a bad haircut | Yes — same-day or 2-week mark | E | P0 |
| /answers/walk-in-or-appointment-boca | should i walk in or book an appointment in boca raton | Appointment for premium services | E | P1 |
| /answers/how-long-does-a-haircut-take | how long does a mens haircut take | 30–60 min standard | E | P0 |
| /answers/what-is-a-line-up | what is a line up haircut | Hairline detail with a straight razor | E | P0 |
| /answers/what-is-a-shape-up | what is a shape up haircut | Line-up plus sides | E | P0 |
| /answers/can-a-barber-do-curly-hair | can a barber cut curly hair | Yes if portfolio shows curly | E | P0 |
| /answers/what-is-a-burst-fade | what is a burst fade | Curved fade behind the ear | E | P0 |
| /answers/what-is-a-drop-fade | what is a drop fade | Fade arcs down behind ear | E | P0 |
| /answers/skin-fade-vs-bald-fade | skin fade vs bald fade | Same idea, regional names | E | P0 |
| /answers/best-mens-haircut-thin-hair | best haircut for thin hair men | Caesar, Buzz, French crop | E | P0 |
| /answers/best-mens-haircut-thick-hair | best haircut for thick hair men | Crew, Pomp, Mid length | E | P0 |
| /answers/best-haircut-receding-hairline | best haircut for receding hairline | Buzz, Caesar, French crop | M | P0 |
| /answers/how-to-style-mens-hair-after-cut | how to style mens hair after a haircut | Towel dry, product, comb | E | P1 |
| /answers/best-pomade-for-mens-hair | best pomade for mens hair | Water-based for shine + restyling | E | P1 |
| /answers/how-to-wash-mens-hair | how often should men wash their hair | Every 1–3 days based on scalp | E | P1 |
| /answers/best-beard-oil-for-thin-beard | best beard oil for thin beard | Jojoba + argan base | E | P2 |
| /answers/wedding-haircut-when-to-book | when to book a wedding haircut | 3–5 days before the wedding | E | P0 |
| /answers/can-barber-come-to-you | can a barber come to your house | Yes — house call service | E | P0 |
| /answers/best-barber-for-fade-boca-raton | best barber for fade boca raton | Brand-anchor answer to Kwest | M | P0 |

---

## Totals & launch sequencing

| Family | Pages | P0 launch wave | P1 next 90d | P2 long tail |
|---|---|---|---|---|
| 1 Service hubs | 22 | 14 | 7 | 1 |
| 2 Style pages | 135 | 28 | 60 | 47 |
| 3 Comparison pages | 115 | 36 | 38 | 41 |
| 4 Demographic pages | 155 | 28 | 38 | 89 |
| 5 Problem pages | 120 | 36 | 32 | 52 |
| 6 Beard pages | 65 | 22 | 21 | 22 |
| 7 Wave & Black hair pages | 60 | 16 | 22 | 22 |
| 8 Hyperlocal landmarks | 35 | 13 | 12 | 10 |
| 9 Seasonal + trend pages | 55 | 17 | 19 | 19 |
| Extended `/answers/` | 20 | 14 | 4 | 2 |
| **Total** | **782** | **224** | **253** | **305** |

**Launch wave (P0): 224 pages.** Indexable in ~3 weeks if templated against the existing `/services/[slug]` and `/answers/[slug]` patterns, with new `[slug]` routes added for `/styles`, `/compare`, `/for`, `/best-for`, `/beard`, `/waves`, `/near`, `/guide`. The data shape for each family is in `internal-linking.md`.

Total target: **782 unique-intent URLs**. Sits comfortably inside the 500–1,500 band — the deliberate choice is "fewer pages with higher indexation probability" over "more pages with cannibalization risk." Pages that didn't make the cut are documented in `indexation-risk-report.md`.
