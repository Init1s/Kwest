import { Reveal } from "@/components/ui/Reveal";
import { ClipReveal } from "@/components/ui/ClipReveal";

export function About() {
  return (
    <section id="about" className="bg-blade py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Editorial header */}
        <Reveal className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            The Barber
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase text-bone leading-[0.95] md:text-6xl lg:text-7xl">
            BOCA IS FULL
            <br />
            OF BARBERS.
          </h2>
          <p className="mt-5 font-display text-xl font-bold uppercase text-gold md:text-2xl md:ml-[15%]">
            KWEST IS THE ONE YOUR BARBER GOES TO.
          </p>
        </Reveal>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Image */}
          <div className="relative lg:col-span-2">
            <ClipReveal type="diagonal" delay={0.1}>
              <div
                className="aspect-[3/4] bg-steel"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)",
                }}
              >
                {/* TODO: Replace with <Image> using Kwest's actual photo. File: /public/images/kwest-portrait.jpg */}
              </div>
            </ClipReveal>

            {/* Floating badge */}
            <Reveal delay={0.4} className="absolute -bottom-4 right-6">
              <div className="flex items-center gap-3 border border-gold/20 bg-ink px-5 py-3 animate-glow-pulse">
                <span className="font-display text-3xl font-extrabold text-gold">
                  10
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
                    Years
                  </span>
                  <span className="font-display text-xs font-bold uppercase text-bone">
                    Sharp
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text */}
          <Reveal
            direction="right"
            delay={0.15}
            className="flex flex-col justify-center lg:col-span-3"
          >
            <div className="flex flex-col gap-5 font-body text-sm leading-relaxed text-ash">
              <p>
                Started cutting in a one-chair spot in Boca Raton with nothing
                but a pair of Wahl Seniors and word of mouth. Over a decade
                later, the reputation speaks for itself: sharp fades, clean
                lines, and a chair that stays booked.
              </p>
              <p>
                Every cut is a conversation. Head shape, hair texture, how you
                carry yourself. The blade work comes second. Understanding the
                client comes first. That approach built a roster of over 2,400
                regulars who don&apos;t go anywhere else.
              </p>
            </div>

            {/* Info items */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
              {[
                { label: "Location", value: "Boca Raton, FL" },
                { label: "Walk-Ins", value: "When the chair is open" },
                { label: "Instagram", value: "@kwest_the_barber" },
                { label: "Booking", value: "Via Squire" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                    {item.label}
                  </span>
                  <p className="mt-1 font-display text-sm font-semibold uppercase text-bone">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
