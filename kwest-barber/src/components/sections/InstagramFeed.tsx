"use client";

import { useCallback } from "react";
import Image from "next/image";
import Script from "next/script";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";
import { gallery } from "@/data/gallery";

// LightWidget HTTPS widget — served from cdn.lightwidget.com so the
// embed loads on the production HTTPS site without mixed-content
// blocking. To swap the widget, regenerate it in your LightWidget
// dashboard and drop the new ID here.
const LIGHTWIDGET_ID = "a57db604428f59f18ee0c80735196a7a";

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
                <InstagramIconLink
                  size={32}
                  className="ml-2 text-smoke transition-colors hover:text-gold"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Curated portfolio carousel */}
      <div className="pb-16 md:pb-20">
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

      {/* Live Instagram feed via LightWidget */}
      <div className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.15} className="mb-6 border-t border-chrome/40 pt-10">
            <p className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
              Latest from Instagram
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            {/* LightWidget renders the live IG feed inside this iframe.
                Its bootstrap script resizes the iframe at runtime;
                min-height keeps the embed visible if the script is
                slow, blocked, or fails. */}
            <iframe
              src={`https://cdn.lightwidget.com/widgets/${LIGHTWIDGET_ID}.html`}
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-popups allow-same-origin"
              className="lightwidget-widget block w-full overflow-hidden border-0 bg-transparent"
              style={{ minHeight: 600 }}
              title="Instagram feed by @kwest_the_barber"
            />
            <noscript>
              <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-smoke">
                JavaScript is required for the Instagram feed.{" "}
                <a
                  href="https://www.instagram.com/kwest_the_barber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone hover:text-gold"
                >
                  View on Instagram instead.
                </a>
              </p>
            </noscript>
          </Reveal>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-chrome/40 pt-8 md:flex-row">
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
      </div>

      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
