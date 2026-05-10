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
      {/* Soft radial glow — depth without busy-ness */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 40%, rgba(255, 77, 26, 0.08) 0%, transparent 55%)",
        }}
      />

      {/* Stats column — pulled out of the bottom-right cluster and stacked
          left as oversized editorial numbers. Same data, more presence. */}
      <div
        className="animate-fade-up absolute top-36 left-6 z-10 hidden flex-col gap-7 md:flex lg:top-44 lg:left-12 lg:gap-9"
        style={{ animationDelay: `${d + 0.4}s` }}
      >
        <div>
          <span
            className="block font-display text-5xl leading-none text-bone tabular-nums lg:text-6xl"
            aria-live="polite"
          >
            {count.toLocaleString()}+
          </span>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-ultra text-smoke">
            Cuts &amp; Counting
          </p>
          <span className="mt-3 block h-px w-12 bg-gold" />
        </div>
        <div>
          <span className="block font-display text-5xl leading-none text-bone lg:text-6xl">
            10+
          </span>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-ultra text-smoke">
            Years In The Chair
          </p>
          <span className="mt-3 block h-px w-12 bg-lime" />
        </div>
        <div>
          <span className="block font-display text-5xl leading-none text-bone lg:text-6xl">
            5.0
          </span>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-ultra text-smoke">
            Client Rating
          </p>
          <span className="mt-3 block h-px w-12 bg-gold" />
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

        {/* Hand-painted "Kwest" wordmark */}
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
          <span className="painted-mis block" data-text="Sharp.">
            Sharp.
          </span>
          <span
            className="painted-mis block text-lime ml-[6vw]"
            data-text="Clean."
          >
            Clean.
          </span>
          <span className="painted-mis block ml-[12vw]" data-text="Precise.">
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

        {/* CTA row (stats moved out to the left column) */}
        <div
          className="animate-fade-up mt-6 flex flex-wrap items-center gap-5"
          style={{ animationDelay: `${d + 1.05}s` }}
        >
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

        {/* Parental-Advisory pastiche */}
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

        {/* Mobile-only stat strip — desktop reads them in the left column */}
        <div
          className="animate-fade-up mt-8 flex flex-wrap items-end gap-x-6 gap-y-3 md:hidden"
          style={{ animationDelay: `${d + 1.4}s` }}
        >
          <div>
            <span className="font-display text-2xl text-bone tabular-nums">
              {count.toLocaleString()}+
            </span>
            <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
              Cuts &amp; Counting
            </p>
          </div>
          <div>
            <span className="font-display text-2xl text-bone">10+</span>
            <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
              Years
            </p>
          </div>
          <div>
            <span className="font-display text-2xl text-bone">5.0</span>
            <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
              Rating
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only, bottom-right so it doesn't fight
          the stat column on the left */}
      <div
        className="animate-fade-up absolute bottom-8 right-6 hidden flex-col items-center gap-2 lg:flex"
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
