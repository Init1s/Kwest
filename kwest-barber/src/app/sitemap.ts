import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { answers } from "@/data/answers";

// Required for Next.js `output: "export"` so the metadata route is
// emitted as a static file rather than a runtime handler.
export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kwestthebarber.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${SITE_URL}/areas/${a.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: a.slug === "boca-raton" ? 0.9 : 0.7,
  }));

  const answerPages: MetadataRoute.Sitemap = answers.map((a) => ({
    url: `${SITE_URL}/answers/${a.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...home, ...servicePages, ...areaPages, ...answerPages];
}
