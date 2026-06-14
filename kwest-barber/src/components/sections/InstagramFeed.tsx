"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/ui/Reveal";
import { gallery } from "@/data/gallery";

export function InstagramFeed() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, containScroll: "trimSnaps" },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="bg-ink">
      <div className="px-6 pt-24 pb-12 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <h2
                className="font-display uppercase leading-[0.95] text-bone"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                Gallery
              </h2>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous photo"
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
                  aria-label="Next photo"
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
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pb-12 md:pb-16">
        <Reveal delay={0.1}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-6 pr-[20vw] md:gap-6 md:pl-12">
              {gallery.map((photo) => (
                <figure
                  key={photo.src}
                  className="group relative aspect-[4/5] flex-shrink-0 overflow-hidden bg-blade ring-1 ring-chrome/40"
                  style={{ width: "clamp(260px, 30vw, 420px)" }}
                >
                  <Image
                    src={`${basePath}${photo.src}`}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 30vw, 420px"
                  />
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="px-6 pb-24 md:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-chrome/40 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            More work on Instagram
          </p>
          <a
            href="https://www.instagram.com/kwest_the_barber/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:text-gold"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
            </svg>
            <span>Follow @kwest_the_barber</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
