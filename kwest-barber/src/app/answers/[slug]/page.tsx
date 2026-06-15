import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { answers, getAnswer } from "@/data/answers";
import { getService } from "@/data/services";
import {
  breadcrumbSchema,
  canonical,
  faqSchema,
  jsonLdScript,
  speakableSpec,
} from "@/lib/seo";

export const dynamic = "force-static";

export function generateStaticParams() {
  return answers.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const answer = getAnswer(slug);
  if (!answer) return {};

  const title = `${answer.question} · Kwest The Barber`;
  const description = answer.summary;
  const url = canonical(`/answers/${slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}

export default async function AnswerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const answer = getAnswer(slug);
  if (!answer) notFound();

  const otherAnswers = answers.filter((a) => a.slug !== slug).slice(0, 5);
  const relatedServices = answer.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "@id": canonical(`/answers/${slug}#qa`),
            mainEntity: {
              "@type": "Question",
              name: answer.question,
              text: answer.question,
              answerCount: 1,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer.summary,
                author: { "@id": `${canonical("")}#kwest` },
              },
            },
            speakable: speakableSpec(["h1", ".aeo-answer"]),
            inLanguage: "en-US",
          },
          faqSchema([{ q: answer.question, a: answer.summary }]),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Answers", href: "/answers" },
            { name: answer.question, href: `/answers/${slug}` },
          ]),
        ])}
      />

      <main id="main-content" className="bg-ink pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 font-mono text-[10px] uppercase tracking-ultra text-smoke"
          >
            <Link href="/" className="hover:text-bone">
              Home
            </Link>
            <span className="mx-2 text-ash">/</span>
            <span className="text-bone">Answers</span>
          </nav>

          <article>
            <header className="mb-10 border-b border-chrome/60 pb-10">
              <h1
                className="font-display uppercase leading-[1] text-bone"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                {answer.question}
              </h1>
            </header>

            {/* Direct answer — the AEO-quotable block. The `.aeo-answer`
                class is targeted by Speakable schema so voice assistants
                read this paragraph aloud. */}
            <section className="mb-10 border-l-2 border-gold pl-5">
              <p className="aeo-answer font-body text-base leading-relaxed text-bone md:text-lg">
                {answer.summary}
              </p>
            </section>

            {answer.body.map((paragraph, i) => (
              <p
                key={i}
                className="mb-5 font-body text-base leading-relaxed text-ash"
              >
                {paragraph}
              </p>
            ))}

            {relatedServices.length > 0 && (
              <section className="mt-12 border-t border-chrome/60 pt-10">
                <h2 className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
                  Related services
                </h2>
                <ul className="mt-4 grid gap-2 md:grid-cols-2">
                  {relatedServices.map((s) => (
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
            )}

            <section className="mt-12 border-t border-chrome/60 pt-10">
              <a
                href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-widest text-ink transition-all hover:bg-gold-light"
              >
                Book Through Squire
              </a>
            </section>
          </article>

          <aside className="mt-16 border-t border-chrome/60 pt-10">
            <h2 className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
              More answers
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {otherAnswers.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/answers/${a.slug}`}
                    className="group flex items-center justify-between gap-4 border-b border-chrome/40 py-3 transition-colors hover:border-gold"
                  >
                    <span className="font-body text-sm text-bone group-hover:text-gold">
                      {a.question}
                    </span>
                    <span className="font-mono text-xs text-smoke transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
}
