"use client";

import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { INTRO_DURATION } from "@/components/ui/Intro";

export function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const target = 2400;
      const duration = 2000;
      const startTime = performance.now();

      function animate(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, (INTRO_DURATION + 0.3) * 1000);

    return () => clearTimeout(timeout);
  }, []);

  const d = INTRO_DURATION;

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink pt-32 pb-12 md:pt-40">
      {/* Soft radial glow — replaces the stripe field for depth without busy-ness */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 40%, rgba(255, 77, 26, 0.08) 0%, transparent 55%)",
        }}
      />

      {/* Vinyl record — fills the upper-left without duplicating the navbar
          logo. The wreath lives on the navbar; the record is a new symbolic
          object (catalog plate, grooves, label) that anchors the album-cover
          read of the page. */}
      <div
        aria-hidden="true"
        className="animate-fade-up pointer-events-none absolute top-24 -left-12 z-0 hidden md:block lg:top-28 lg:-left-16"
        style={{ animationDelay: `${d + 0.4}s` }}
      >
        <div
          className="relative h-[340px] w-[340px] rounded-full lg:h-[420px] lg:w-[420px]"
          style={{
            background: `
              radial-gradient(circle at center, transparent 0 22%, rgba(255, 77, 26, 0.12) 22% 23%, transparent 23% 100%),
              repeating-radial-gradient(circle at center,
                #050505 0px, #050505 1px,
                #1a1a1a 1px, #1a1a1a 2px,
                #050505 2px, #050505 3px),
              radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05), transparent 50%),
              #000
            `,
            boxShadow:
              "inset 0 0 80px rgba(0, 0, 0, 0.9), 0 30px 60px rgba(0, 0, 0, 0.6)",
            animation: "vinyl-spin 22s linear infinite",
          }}
        >
          {/* Center label */}
          <div
            className="absolute top-1/2 left-1/2 flex h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-gold/30 text-center"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #FF7A40 0%, #FF4D1A 55%, #CC3300 100%)",
            }}
          >
            <span className="font-mono text-[8px] uppercase tracking-ultra text-ink/80">
              Cat. KWST&minus;001
            </span>
            <span className="font-script text-3xl leading-none text-ink lg:text-4xl">
              Kwest
            </span>
            <span className="mt-1 font-mono text-[7px] uppercase tracking-ultra text-ink/80">
              Side&nbsp;A &middot; 33&frac13;&nbsp;RPM
            </span>
            {/* Spindle */}
            <span className="mt-1 block h-2 w-2 rounded-full bg-ink" />
          </div>
        </div>
      </div>

      {/* Headline column */}
      <div className="relative z-10 ml-auto flex min-h-[60vh] flex-col justify-end px-6 md:max-w-[68%] md:pr-12 lg:pr-16">
        <div
          className="animate-fade-up mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-ultra text-smoke"
          style={{ animationDelay: `${d + 0.2}s` }}
        >
          <span className="h-px w-6 bg-gold" />
          A&nbsp;Barber&nbsp;Called&nbsp;Kwest
          <span className="h-px w-6 bg-lime" />
        </div>

        {/* Hand-painted "Kwest" wordmark — the dripping album-title moment */}
        <h1
          className="animate-fade-up font-script leading-[0.85] text-gold drop-shadow-[0_4px_0_rgba(0,0,0,0.35)]"
          style={{
            animationDelay: `${d + 0.35}s`,
            fontSize: "clamp(5rem, 16vw, 14rem)",
          }}
        >
          Kwest
        </h1>

        {/* Brush-headline triplet, slightly painted-misregistered */}
        <div
          className="animate-fade-up mt-4 font-display uppercase leading-[0.92] text-bone"
          style={{
            animationDelay: `${d + 0.55}s`,
            fontSize: "clamp(2rem, 6.5vw, 5rem)",
          }}
        >
          <span
            className="painted-mis block"
            data-text="Sharp."
          >
            Sharp.
          </span>
          <span
            className="painted-mis block text-lime ml-[6vw]"
            data-text="Clean."
          >
            Clean.
          </span>
          <span
            className="painted-mis block ml-[12vw]"
            data-text="Precise."
          >
            Precise.
          </span>
        </div>

        {/* Painted hairline */}
        <div
          className="mt-8 h-px w-full origin-left animate-line-grow"
          style={{
            background:
              "linear-gradient(90deg, #FF4D1A 0%, rgba(191, 232, 90, 0.6) 50%, transparent 100%)",
            animationDelay: `${d + 0.9}s`,
          }}
        />

        {/* CTA + metrics row */}
        <div
          className="animate-fade-up mt-6 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-8"
          style={{ animationDelay: `${d + 1.05}s` }}
        >
          <div className="flex items-center gap-5">
            <MagneticButton>
              <a
                href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold px-7 py-3.5 font-display text-sm tracking-widest text-ink transition-all hover:bg-gold-light"
              >
                Book Your Cut
              </a>
            </MagneticButton>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-smoke transition-colors hover:text-bone"
            >
              Services
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>

          <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
            <div>
              <span className="font-display text-2xl text-bone md:text-3xl">
                {count.toLocaleString()}+
              </span>
              <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
                Cuts &amp; Counting
              </p>
            </div>
            <div>
              <span className="font-display text-2xl text-bone md:text-3xl">
                10+
              </span>
              <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
                Years
              </p>
            </div>
            <div>
              <span className="font-display text-2xl text-bone md:text-3xl">
                5.0
              </span>
              <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
                Rating
              </p>
            </div>
          </div>
        </div>

        {/* Parental-Advisory pastiche (#7) */}
        <div
          className="animate-fade-up mt-10 inline-flex w-fit items-center gap-3 border-2 border-bone bg-ink px-4 py-2"
          style={{ animationDelay: `${d + 1.25}s` }}
        >
          <span className="font-display text-xs leading-none text-bone">
            EXPLICIT
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-mono text-[8px] uppercase tracking-ultra text-bone">
              Sharp · Clean · Precise
            </span>
            <span className="font-mono text-[7px] uppercase tracking-ultra text-smoke">
              Strictly Hands-On Barbering
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        className="animate-fade-up absolute bottom-8 left-6 hidden flex-col items-center gap-2 lg:flex"
        style={{ animationDelay: `${d + 1.5}s` }}
      >
        <span className="font-mono text-[8px] uppercase tracking-ultra text-bone [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-bone to-transparent" />
      </div>
    </section>
  );
}
