import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Been going to Kwest for six years. Moved to Baltimore and I still drive down every two weeks. Nobody else touches my head.",
    name: "Marcus T.",
    since: "2020",
  },
  {
    quote:
      "First barber who actually listened to what I wanted instead of just doing whatever. The lineup is surgical. Every single time.",
    name: "Darius W.",
    since: "2019",
  },
  {
    quote:
      "Brought my son in for his first real cut. Kwest was patient, kept him calm, and the kid walked out feeling like a million bucks. We are regulars now.",
    name: "Tanya R.",
    since: "2022",
  },
  {
    quote:
      "I had a wedding on three days notice and Kwest fit me in same day. Full service, beard sculpt, everything. Looked the best I ever have. That is the standard.",
    name: "Jerome K.",
    since: "2018",
  },
];

export function Testimonials() {
  const [featured, ...supporting] = testimonials;

  return (
    <section className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            What They Say
          </span>
          <h2 className="mt-4 mb-16 font-display text-4xl font-extrabold uppercase tracking-tightest text-bone md:text-6xl">
            CLIENTS{" "}
            <span className="text-gold">DON&apos;T LIE.</span>
          </h2>
        </Reveal>

        {/* Featured testimonial */}
        <Reveal delay={0.1} className="mb-16">
          <blockquote className="max-w-4xl font-display text-2xl font-semibold text-bone leading-snug md:text-3xl lg:text-4xl">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-smoke">
              {featured.name} &mdash; Client since {featured.since}
            </p>
          </div>
        </Reveal>

        {/* Supporting testimonials */}
        <RevealGroup
          className="grid gap-8 border-t border-chrome pt-12 md:grid-cols-3"
          stagger={0.1}
        >
          {supporting.map((t) => (
            <RevealItem key={t.name} className="flex flex-col justify-between">
              <p className="font-body text-sm leading-relaxed text-ash">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-smoke">
                {t.name} &middot; Since {t.since}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
