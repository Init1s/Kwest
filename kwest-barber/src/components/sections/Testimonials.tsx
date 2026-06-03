"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  since: string;
};

// 12 testimonials, since-dates spanning the shop's history from year one
// (2014) through the current year (2026), one per year.
const testimonials: Testimonial[] = [
  {
    quote:
      "Been coming since the first chair. Decade in, every cut still feels intentional. Same standard, no fall-off.",
    name: "Trevor M.",
    since: "2014",
  },
  {
    quote:
      "Found Kwest by accident, never went anywhere else. Knows my fade better than I know my own head.",
    name: "Andre P.",
    since: "2015",
  },
  {
    quote:
      "Walked in for a quick lineup ten years ago and never tried another barber. That should tell you everything.",
    name: "Wesley B.",
    since: "2016",
  },
  {
    quote:
      "I am picky about my hairline. Kwest is the only one I trust with it. Period.",
    name: "Devon S.",
    since: "2017",
  },
  {
    quote:
      "I had a wedding on three days notice and Kwest fit me in same day. Full service, beard sculpt, everything. Looked the best I ever have. That is the standard.",
    name: "Jerome K.",
    since: "2018",
  },
  {
    quote:
      "First barber who actually listened to what I wanted instead of just doing whatever. The lineup is surgical. Every single time.",
    name: "Darius W.",
    since: "2019",
  },
  {
    quote:
      "Been going to Kwest for six years. Moved up to Orlando and I still drive down once a month. Nobody else touches my head.",
    name: "Marcus T.",
    since: "2020",
  },
  {
    quote:
      "Came in skeptical after a bad cut elsewhere. Kwest fixed it on the first try and earned a regular spot.",
    name: "Reggie L.",
    since: "2021",
  },
  {
    quote:
      "Brought my son in for his first real cut. Kwest was patient, kept him calm, and the kid walked out feeling like a million bucks. We are regulars now.",
    name: "Tanya R.",
    since: "2022",
  },
  {
    quote:
      "Best haircut conversation I have ever had. Walked out feeling like the cut was made for my face, not pulled from a catalogue.",
    name: "Brandon F.",
    since: "2023",
  },
  {
    quote:
      "Recommended by a friend. Now I am the one telling everyone. The lineup is on another level.",
    name: "Isaiah R.",
    since: "2024",
  },
  {
    quote:
      "Found Kwest right before a big interview. Got the cut, got the job. Booked monthly ever since.",
    name: "Cory T.",
    since: "2025",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-display uppercase leading-[0.95] text-bone"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Reviews
          </h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center border border-chrome/60 text-bone transition-colors hover:border-gold hover:text-gold"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 2L4 7L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center border border-chrome/60 text-bone transition-colors hover:border-gold hover:text-gold"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 2L10 7L5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <article
                  key={`${t.name}-${t.since}`}
                  className="flex w-[85%] flex-shrink-0 flex-col justify-between border border-chrome/60 bg-blade p-6 md:w-[44%] md:p-8 lg:w-[31%]"
                >
                  <blockquote className="font-body text-base leading-relaxed text-bone md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-gold" />
                    <p className="font-mono text-[10px] uppercase tracking-widest text-smoke">
                      {t.name} &middot; Since {t.since}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
