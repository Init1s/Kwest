"use client";

import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink px-6 pt-32 pb-12">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(201, 168, 76, 0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #0A0A0A 0%, transparent 40%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 bottom-0"
        style={{
          left: "62%",
          width: "1px",
          background:
            "linear-gradient(to bottom, transparent, rgba(201, 168, 76, 0.15) 30%, rgba(201, 168, 76, 0.15) 70%, transparent)",
          transform: "skewX(-2deg)",
        }}
      />

      {/* Counter - top right */}
      <div
        className="animate-fade-up relative ml-auto text-right"
        style={{ animationDelay: "0.1s" }}
      >
        <span
          ref={countRef}
          className="font-display text-5xl font-black text-bone md:text-7xl"
        >
          {count.toLocaleString()}+
        </span>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-ultra text-smoke">
          Clients Served
        </p>
      </div>

      {/* Main headline */}
      <div className="relative mt-auto">
        <h1
          className="animate-fade-up font-display font-black uppercase leading-[0.85] tracking-tightest"
          style={{
            fontSize: "clamp(3.5rem, 12vw, 10rem)",
            animationDelay: "0.25s",
          }}
        >
          <span className="block text-bone">SHARP</span>
          <span className="text-gold-gradient block">CLEAN.</span>
          <span className="block text-bone">PRECISE.</span>
        </h1>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-8 flex items-center gap-6"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient font-display text-sm font-bold uppercase tracking-widest text-ink px-7 py-3.5 transition-all hover:opacity-90"
          >
            Book Your Cut
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-smoke transition-colors hover:text-bone"
          >
            View Services
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Bottom metrics */}
      <div
        className="animate-fade-up mt-12 grid grid-cols-3 border-t border-gold/15 pt-6"
        style={{ animationDelay: "0.7s" }}
      >
        {[
          { value: "10+", label: "Years Sharp" },
          { value: "12", label: "Services" },
          { value: "5.0", label: "Star Rating" },
        ].map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="font-display text-2xl font-black text-bone md:text-3xl">
              {metric.value}
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-ultra text-smoke">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-up absolute bottom-8 left-6 flex flex-col items-center gap-3"
        style={{ animationDelay: "0.9s" }}
      >
        <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
