"use client";

import { useEffect, useState } from "react";
import { TextScramble } from "@/components/ui/TextScramble";
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
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink px-6 pt-28 pb-8 md:px-12 lg:px-16">
      {/* Background — subtle gold glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 45%, rgba(201, 168, 76, 0.06) 0%, transparent 55%)",
        }}
      />

      {/* Background — oversized watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <span
          className="font-display font-extrabold uppercase text-bone leading-none"
          style={{ fontSize: "25vw", opacity: 0.015 }}
        >
          KWEST
        </span>
      </div>

      {/* Diagonal accent line */}
      <div
        className="pointer-events-none absolute top-0 bottom-0"
        style={{
          left: "58%",
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent 10%, rgba(201, 168, 76, 0.12) 35%, rgba(201, 168, 76, 0.12) 65%, transparent 90%)",
          transform: "skewX(-3deg)",
        }}
      />

      {/* Top bar */}
      <div
        className="animate-fade-up relative flex items-start justify-between"
        style={{ animationDelay: `${d + 0.2}s` }}
      >
        <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
          Est. Boca Raton, FL
        </span>
        <div className="text-right">
          <span className="font-display text-4xl font-extrabold text-bone md:text-5xl">
            {count.toLocaleString()}+
          </span>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-ultra text-smoke">
            Cuts &amp; Counting
          </p>
        </div>
      </div>

      {/* Main headline — staircase with text scramble */}
      <div className="relative mt-auto mb-10">
        <h1
          className="font-display font-extrabold uppercase leading-[0.9] tracking-tightest"
          style={{ fontSize: "clamp(3rem, 11vw, 9rem)" }}
        >
          <TextScramble
            text="SHARP."
            delay={d + 0.3}
            duration={0.6}
            className="block text-bone"
          />
          <TextScramble
            text="CLEAN."
            delay={d + 0.55}
            duration={0.6}
            className="block text-gold ml-[10vw]"
          />
          <TextScramble
            text="PRECISE."
            delay={d + 0.8}
            duration={0.6}
            className="block text-bone ml-[20vw]"
          />
        </h1>
      </div>

      {/* Horizontal rule */}
      <div
        className="h-px w-full origin-left animate-line-grow"
        style={{
          background:
            "linear-gradient(90deg, #C9A84C 0%, rgba(201, 168, 76, 0.35) 50%, transparent 100%)",
          animationDelay: `${d + 1.1}s`,
        }}
      />

      {/* Bottom bar — CTA + metrics */}
      <div
        className="animate-fade-up mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        style={{ animationDelay: `${d + 1.2}s` }}
      >
        <div className="flex items-center gap-6">
          <MagneticButton>
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold font-display text-sm font-bold uppercase tracking-widest text-ink px-7 py-3.5 transition-all hover:bg-gold-light"
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

        <div className="flex gap-10">
          <div>
            <span className="font-display text-xl font-extrabold text-bone">
              10+
            </span>
            <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
              Years
            </p>
          </div>
          <div>
            <span className="font-display text-xl font-extrabold text-bone">
              5.0
            </span>
            <p className="font-mono text-[8px] uppercase tracking-ultra text-smoke">
              Rating
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-up absolute bottom-6 left-6 hidden flex-col items-center gap-2 lg:flex"
        style={{ animationDelay: `${d + 1.5}s` }}
      >
        <span className="font-mono text-[8px] uppercase tracking-ultra text-smoke [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
