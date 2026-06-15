import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";

export function About() {
  return (
    <section id="about" className="relative bg-blade py-24 md:py-32 overflow-hidden">
      {/* Editorial vertical type accent down the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-center font-mono text-[10px] uppercase tracking-ultra text-smoke/40 md:block lg:left-6 lg:text-xs"
      >
        About — Kwest the Barber — Boca Raton, FL
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 md:mb-20">
          <h2
            className="font-display uppercase leading-[0.85] text-bone"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
          >
            About
            <br />
            <span className="ml-[20%] block text-gold">Kwest.</span>
          </h2>
        </Reveal>

        {/* Asymmetric content grid — portrait breaks out of the left
            column on lg+ and extends down past the section's natural
            bottom; body copy wraps unevenly on the right. */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Portrait column — extends visually with negative bottom
              margin so the frame lives "past" the section grid */}
          <div className="relative lg:col-span-2 lg:-mb-16 lg:translate-y-6">
            <ClipReveal type="diagonal" delay={0.1}>
              <div className="relative p-3 md:p-4">
                {/* The frame — sits behind the image, offset out by the
                    container padding so it reads as a deliberate matte. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 border-2 border-gold"
                />
                <div className="duotone-orange relative w-full shadow-2xl shadow-ink/80">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-portrait.jpg`}
                    alt="Kwest The Barber"
                    width={1127}
                    height={1396}
                    className="block h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                {/* Corner ticks — bold gold L-shapes at each corner */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1.5 -top-1.5 h-8 w-8 border-l-[3px] border-t-[3px] border-gold"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1.5 -top-1.5 h-8 w-8 border-r-[3px] border-t-[3px] border-gold"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1.5 -bottom-1.5 h-8 w-8 border-b-[3px] border-l-[3px] border-gold"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1.5 -bottom-1.5 h-8 w-8 border-b-[3px] border-r-[3px] border-gold"
                />
              </div>
            </ClipReveal>

            {/* Floating badge */}
            <Reveal delay={0.4} className="absolute -bottom-4 right-6">
              <div className="flex items-center gap-3 rounded-lg border border-gold/30 bg-ink px-5 py-3 animate-glow-pulse">
                <span className="font-display text-3xl text-gold">18+</span>
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

          {/* Body copy column */}
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

            {/* Info block */}
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-chrome/60 pt-8 md:grid-cols-3">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                  Barber
                </span>
                <p className="mt-1 font-display text-sm uppercase text-bone">
                  Kwest the Barber
                </p>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                  Location
                </span>
                <p className="mt-1 font-display text-sm uppercase text-bone">
                  Boca Raton near FAU
                </p>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                  Tools
                </span>
                <p className="mt-1 font-display text-sm uppercase text-bone">
                  JRL
                </p>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                  Booking
                </span>
                <p className="mt-1 font-display text-sm uppercase">
                  <a
                    href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone transition-colors hover:text-gold"
                  >
                    Squire &rarr;
                  </a>
                </p>
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                  Instagram
                </span>
                <div className="mt-2">
                  <InstagramIconLink
                    size={24}
                    className="text-bone transition-colors hover:text-gold"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
