import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { gallery } from "@/data/gallery";

const HANDLE = "@kwest_the_barber";
const INSTAGRAM_URL = "https://www.instagram.com/kwest_the_barber/";

export function InstagramFeed() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="gallery" className="relative overflow-hidden bg-blade">
      <div className="px-6 pt-24 pb-10 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
              <h2
                className="font-display uppercase leading-[0.95] text-bone"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                Gallery
              </h2>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:text-gold md:self-end"
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
                <span>{HANDLE}</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Horizontal scroll-snap row. Bleeds full-width on mobile so the
          first/last tiles align flush; left/right padding via spacer items
          keeps snap targets clean. */}
      <div className="pb-10 md:pb-14">
        <Reveal>
          <div
            className="gallery-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-6 md:gap-4 md:px-10"
            role="region"
            aria-label="Photo gallery — swipe to view more"
          >
            {gallery.map((photo) => (
              <a
                key={photo.src}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${photo.alt} — view on Instagram`}
                className="group relative block aspect-square w-[78vw] flex-shrink-0 snap-start touch-pan-x select-none overflow-hidden bg-ink ring-1 ring-chrome/30 sm:w-[60vw] md:w-[40vw] lg:w-[28vw] xl:w-[22vw]"
              >
                <Image
                  src={`${basePath}${photo.src}`}
                  alt={photo.alt}
                  fill
                  draggable={false}
                  className="pointer-events-none object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 78vw, (max-width: 768px) 60vw, (max-width: 1024px) 40vw, (max-width: 1280px) 28vw, 22vw"
                />
                {/* Hover overlay — dark veil + IG icon centered */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/60 group-hover:opacity-100">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-bone"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Swipe hint — visible on touch, fades on desktop */}
        <div className="mx-auto mt-4 max-w-7xl px-6">
          <p className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            Swipe &rarr;
          </p>
        </div>
      </div>

      <div className="px-6 pb-24 md:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-chrome/40 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            More on Instagram
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-widest text-ink transition-all hover:bg-gold-light"
          >
            Follow {HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
