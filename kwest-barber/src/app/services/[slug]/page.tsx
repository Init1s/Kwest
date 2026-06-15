import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/data/services";
import {
  breadcrumbSchema,
  canonical,
  faqSchema,
  jsonLdScript,
  serviceSchema,
} from "@/lib/seo";

export const dynamic = "force-static";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.name} — ${service.price} · Kwest The Barber, Boca Raton`;
  const description = `${service.description.slice(0, 155)}`;
  const url = canonical(`/services/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = canonical(`/services/${slug}`);
  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          serviceSchema({
            name: service.name,
            description: service.description,
            url,
            priceNumeric: service.priceNumeric,
          }),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: service.name, href: `/services/${slug}` },
          ]),
        ])}
      />

      <main id="main-content" className="bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-4xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 font-mono text-[10px] uppercase tracking-ultra text-smoke"
          >
            <Link href="/" className="hover:text-bone">
              Home
            </Link>
            <span className="mx-2 text-ash">/</span>
            <Link href="/#services" className="hover:text-bone">
              Services
            </Link>
            <span className="mx-2 text-ash">/</span>
            <span className="text-bone">{service.name}</span>
          </nav>

          <header className="mb-12 border-b border-chrome/60 pb-10">
            <h1
              className="font-display uppercase leading-[0.95] text-bone"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              {service.name}
            </h1>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest">
              <span className="text-gold font-display text-3xl">
                {service.price}
              </span>
              <span className="text-smoke">{service.duration}</span>
              <span className="text-smoke">Boca Raton, FL</span>
            </div>
          </header>

          <p className="mb-12 max-w-2xl font-body text-base leading-relaxed text-bone">
            {service.description}
          </p>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <section>
              <h2 className="font-display text-xl uppercase text-bone">
                What&apos;s included
              </h2>
              <ul className="mt-4 flex flex-col gap-2 font-body text-sm leading-relaxed text-ash">
                {service.process.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-gold" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl uppercase text-bone">
                Best for
              </h2>
              <ul className="mt-4 flex flex-col gap-2 font-body text-sm leading-relaxed text-ash">
                {service.bestFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {service.faqs.length > 0 && (
            <section className="mt-16 border-t border-chrome/60 pt-12">
              <h2 className="font-display text-xl uppercase text-bone">
                FAQ
              </h2>
              <dl className="mt-6 flex flex-col gap-6">
                {service.faqs.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-display text-base uppercase text-bone">
                      {faq.q}
                    </dt>
                    <dd className="mt-2 font-body text-sm leading-relaxed text-ash">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="mt-16 border-t border-chrome/60 pt-12">
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-widest text-ink transition-all hover:bg-gold-light"
            >
              Book {service.shortName} on Squire
            </a>
          </section>

          <section className="mt-16 border-t border-chrome/60 pt-12">
            <h2 className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
              Other services
            </h2>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {others.map((s) => (
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
        </div>
      </main>
    </>
  );
}
