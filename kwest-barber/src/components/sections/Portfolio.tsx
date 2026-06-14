"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/ui/Reveal";
import { gallery } from "@/data/gallery";

export function Portfolio() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      // snap to slide boundaries (not free scroll) so the carousel
      // always shows full cards — no partial-card peek
      dragFree: false,
      containScroll: "keepSnaps",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4500,
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

      <div className="px-6 pb-24 md:px-12 md:pb-32">
        <Reveal delay={0.1}>
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden" ref={emblaRef}>
              {/* Slides are sized via flex-basis so they snap to clean
                  breakpoints: 1 card on mobile, 2 on tablet, 3 on
                  desktop. No partial-card peek at any size. */}
              <div className="-ml-3 flex sm:-ml-4 md:-ml-6">
                {gallery.map((photo) => (
                  <div
                    key={photo.src}
                    className="min-w-0 flex-shrink-0 basis-1/2 pl-3 sm:basis-1/2 sm:pl-4 md:basis-1/3 md:pl-6 lg:basis-1/4"
                  >
                    <figure className="group relative aspect-[4/5] overflow-hidden bg-blade ring-1 ring-chrome/40">
                      <Image
                        src={`${basePath}${photo.src}`}
                        alt={photo.alt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
