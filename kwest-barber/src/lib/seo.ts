// Shared SEO + structured-data helpers used by every long-tail page.

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kwestthebarber.com";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE = {
  url: SITE_URL,
  name: "Kwest The Barber",
  legalName: "Kwest Barbershop",
  streetAddress: "2100 N Federal Hwy #24",
  city: "Boca Raton",
  region: "FL",
  postalCode: "33431",
  country: "US",
  neighborhood: "near FAU",
  // 2100 N Federal Hwy #24 — N Federal Hwy corridor in Boca Raton,
  // just north of Glades Rd, ~3 min from FAU. Matches the Google
  // Business Profile location.
  geo: { lat: 26.3679, lng: -80.0921 },
  telephone: undefined as string | undefined,
};

export function canonical(path: string) {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${cleaned}`;
}

export function asset(path: string) {
  const cleaned = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${cleaned}`;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `${SITE.url}/#barbershop`,
    name: SITE.name,
    description:
      "Precision cuts, clean fades, and hot-towel shaves in Boca Raton, FL — near FAU. 18+ years in the chair.",
    url: SITE.url,
    image: `${SITE.url}/icon.png`,
    logo: `${SITE.url}/icon.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${SITE.streetAddress}, ${SITE.city}, ${SITE.region} ${SITE.postalCode}`,
    )}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Boca Raton, FL" },
      { "@type": "City", name: "Delray Beach, FL" },
      { "@type": "City", name: "Highland Beach, FL" },
      { "@type": "City", name: "Deerfield Beach, FL" },
    ],
    employee: { "@id": `${SITE.url}/#kwest` },
    founder: { "@id": `${SITE.url}/#kwest` },
    sameAs: ["https://www.instagram.com/kwest_the_barber/"],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "USD",
    knowsAbout: [
      "Men's haircut",
      "Fade haircut",
      "Beard sculpt",
      "Hot towel shave",
      "Lineup",
      "Scissor cut",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#kwest`,
    name: "Kwest the Barber",
    alternateName: "Kwest",
    jobTitle: "Barber",
    description:
      "Boca Raton barber with 18+ years in the chair. Started with a pair of Wahl Seniors, now runs a one-chair shop near FAU with 2,400+ regulars.",
    image: `${SITE.url}/images/kwest-portrait.jpg`,
    url: SITE.url,
    worksFor: { "@id": `${SITE.url}/#barbershop` },
    knowsAbout: [
      "Men's haircut",
      "Fade haircut",
      "Beard sculpt",
      "Hot towel shave",
      "Lineup",
      "Scissor cut",
    ],
    sameAs: ["https://www.instagram.com/kwest_the_barber/"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#barbershop` },
    inLanguage: "en-US",
  };
}

// Hero claims, formed as quotable Q/A for AI answer extraction.
export function homepageFaqSchema() {
  return faqSchema([
    {
      q: "Where is Kwest the Barber located?",
      a: `Kwest the Barber is at ${SITE.streetAddress}, ${SITE.city}, ${SITE.region} ${SITE.postalCode} — on the N Federal Hwy corridor, about three minutes from FAU. Appointments are handled through Squire.`,
    },
    {
      q: "How long has Kwest been cutting hair?",
      a: "Kwest has been a barber for 18+ years and has cut over 2,400 regulars.",
    },
    {
      q: "What services does Kwest the Barber offer?",
      a: "Precision haircuts, skin and skin-fade work, scissor cuts, beard sculpts, hot-towel straight-razor shaves, kids' cuts (14 and under), and house-call VIP service. Booking is through Squire.",
    },
    {
      q: "How do I book an appointment with Kwest the Barber?",
      a: "Booking is handled through Squire. Use the Book on Squire button on kwestthebarber.com or message @kwest_the_barber on Instagram for questions.",
    },
  ]);
}

// schema.org/SpeakableSpecification — flags content blocks that voice
// assistants (Google Assistant, etc.) should prefer when reading the page
// aloud. Apply on /answers/[slug] where the lede paragraph is a clean,
// quotable answer.
export function speakableSpec(cssSelectors: string[]) {
  return {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
  priceNumeric: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: args.url,
    provider: { "@id": `${SITE.url}/#barbershop` },
    areaServed: { "@type": "City", name: `${SITE.city}, ${SITE.region}` },
    offers: {
      "@type": "Offer",
      price: args.priceNumeric,
      priceCurrency: "USD",
      url: process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL,
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: canonical(crumb.href),
    })),
  };
}

// Embeds a JSON-LD object into a <script type="application/ld+json"> tag.
// Escapes `<` to its Unicode form so a stray "</script>" substring inside
// any field can't close the script tag and inject markup. This is the
// canonical hardening for dangerouslySetInnerHTML carrying JSON-LD.
export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
