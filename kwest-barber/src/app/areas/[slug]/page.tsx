import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { areas, getArea } from "@/data/areas";
import { services } from "@/data/services";
import {
  breadcrumbSchema,
  canonical,
  jsonLdScript,
  localBusinessSchema,
} from "@/lib/seo";

export const dynamic = "force-static";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  const title = `Barber in ${area.name} — Kwest The Barber, Boca Raton`;
  const description =
    `${area.pitch} Booking through Squire. ${area.driveMinutes > 0 ? `Approx. ${area.driveMinutes}-minute drive to the chair.` : ""}`.trim();
  const url = canonical(`/areas/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const otherAreas = areas.filter((a) => a.slug !== slug).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Areas", href: "/#areas" },
            { name: area.name, href: `/areas/${slug}` },
          ]),
        ])}
      />

      <main className="bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 font-mono text-[10px] uppercase tracking-ultra text-smoke"
          >
            <Link href="/" className="hover:text-bone">
              Home
            </Link>
            <span className="mx-2 text-ash">/</span>
            <span className="text-bone">{area.name}</span>
          </nav>

          <header className="mb-10 border-b border-chrome/60 pb-10">
            <h1
              className="font-display uppercase leading-[0.95] text-bone"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Barber in {area.name}
            </h1>
            {area.driveMinutes > 0 && (
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-smoke">
                Approx. {area.driveMinutes}-minute drive from{" "}
                <Link
                  href="/areas/boca-raton"
                  className="text-bone hover:text-gold"
                >
                  Boca Raton
                </Link>
              </p>
            )}
          </header>

          <section className="mb-10 max-w-2xl font-body text-base leading-relaxed text-bone">
            <p>{area.intro}</p>
            <p className="mt-5 text-ash">{area.pitch}</p>
          </section>

          <section className="mb-12 border-t border-chrome/60 pt-10">
            <h2 className="font-display text-xl uppercase text-bone">
              Services available
            </h2>
            <ul className="mt-6 grid gap-2 md:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-b border-chrome/40 py-3 transition-colors hover:border-gold"
                  >
                    <span className="font-display text-base uppercase text-bone group-hover:text-gold">
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-gold">
                      {s.price}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-t border-chrome/60 pt-10">
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-widest text-ink transition-all hover:bg-gold-light"
            >
              Book on Squire
            </a>
          </section>

          <section className="mt-16 border-t border-chrome/60 pt-10">
            <h2 className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
              Other areas Kwest serves
            </h2>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {otherAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="group flex items-baseline justify-between gap-4 border-b border-chrome/40 py-3 transition-colors hover:border-gold"
                  >
                    <span className="font-display text-base uppercase text-bone group-hover:text-gold">
                      {a.name}
                    </span>
                    {a.driveMinutes > 0 && (
                      <span className="font-mono text-xs text-smoke group-hover:text-gold">
                        {a.driveMinutes} min
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
