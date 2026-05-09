import type { MetadataRoute } from "next";

// Required for Next.js `output: "export"` so the metadata route is
// emitted as a static file rather than a runtime handler.
export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kwestthebarber.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
