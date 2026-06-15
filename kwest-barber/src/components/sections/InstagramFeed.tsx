import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
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

      {/* IG-profile-style tight 3-col grid. All 10 photos, square tiles,
          minimal gap. Reads as an Instagram feed grid, not a styled
          carousel. */}
      <div className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <RevealGroup
            className="grid grid-cols-3 gap-1 md:gap-1.5"
            stagger={0.04}
          >
            {gallery.slice(0, 6).map((photo) => (
              <RevealItem key={photo.src}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${photo.alt} — view on Instagram`}
                  className="group relative block aspect-square select-none overflow-hidden bg-ink"
                >
                  <Image
                    src={`${basePath}${photo.src}`}
                    alt={photo.alt}
                    fill
                    draggable={false}
                    className="pointer-events-none object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 33vw, 22vw"
                  />
                  {/* Hover overlay — dark veil + IG icon centered */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/60 group-hover:opacity-100">
                    <svg
                      width="28"
                      height="28"
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
              </RevealItem>
            ))}
          </RevealGroup>
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
