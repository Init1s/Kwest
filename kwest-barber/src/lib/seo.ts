// Shared SEO + structured-data helpers used by every long-tail page.

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kwestthebarber.com";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE = {
  url: SITE_URL,
  name: "Kwest The Barber",
  legalName: "Kwest The Barber",
  city: "Boca Raton",
  region: "FL",
  country: "US",
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
    url: SITE.url,
    image: `${SITE.url}/icon.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    sameAs: ["https://www.instagram.com/kwest_the_barber/"],
    priceRange: "$$",
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
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "16:00",
      },
    ],
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
