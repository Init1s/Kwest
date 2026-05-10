import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ClipReveal } from "@/components/ui/ClipReveal";

const credits = [
  { label: "Produced by", value: "Kwest" },
  { label: "Recorded in", value: "Boca Raton, FL" },
  { label: "Engineered on", value: "Wahl Seniors" },
  { label: "Booked through", value: "Squire" },
  { label: "Catalog", value: "KWST-001" },
  { label: "Instagram", value: "@kwest_the_barber" },
];

export function About() {
  return (
    <section id="about" className="bg-blade py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Liner-notes header */}
        <Reveal className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            Meet Kwest
          </span>
          <h2
            className="painted-mis mt-4 font-display uppercase leading-[0.92] text-bone"
            data-text="TEN YEARS DEEP IN BOCA."
            style={{ fontSize: "clamp(2.25rem, 6.2vw, 5.25rem)" }}
          >
            TEN YEARS DEEP
            <br />
            IN BOCA.
          </h2>
          <p className="mt-5 font-script text-2xl text-lime md:ml-[15%] md:text-3xl">
            Your barber&apos;s barber.
          </p>
        </Reveal>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Duotoned portrait */}
          <div className="relative lg:col-span-2">
            <ClipReveal type="diagonal" delay={0.1}>
              <div
                className="duotone-orange relative aspect-[3/4] overflow-hidden bg-ink"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)",
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-portrait.jpg`}
                  alt="Kwest The Barber"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </ClipReveal>

            {/* Floating badge */}
            <Reveal delay={0.4} className="absolute -bottom-4 right-6">
              <div className="flex items-center gap-3 border border-gold/30 bg-ink px-5 py-3 animate-glow-pulse">
                <span className="font-display text-3xl text-gold">10</span>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
                    Years
                  </span>
                  <span className="font-display text-xs uppercase text-bone">
                    Sharp
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Liner notes column */}
          <Reveal
            direction="right"
            delay={0.15}
            className="flex flex-col justify-center lg:col-span-3"
          >
            <div className="font-body text-sm leading-relaxed text-ash">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-none first-letter:text-gold md:first-letter:text-8xl">
                Started cutting in a one-chair spot in Boca Raton with nothing
                but a pair of Wahl Seniors and word of mouth. Over a decade
                later, the reputation speaks for itself: sharp fades, clean
                lines, and a chair that stays booked.
              </p>
              <p className="mt-5">
                Every cut is a conversation. Head shape, hair texture, how you
                carry yourself. The blade work comes second. Understanding the
                client comes first. That approach built a roster of over 2,400
                regulars who don&apos;t go anywhere else.
              </p>
            </div>

            {/* Credits block — like the back of an album */}
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-chrome/60 pt-8 md:grid-cols-3">
              {credits.map((c) => (
                <div key={c.label}>
                  <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                    {c.label}
                  </span>
                  <p className="mt-1 font-display text-sm uppercase text-bone">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Shout-out one-liner */}
            <p className="mt-10 font-mono text-[10px] uppercase tracking-ultra text-smoke">
              Big up to every head in the chair for ten years. No compromises.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
