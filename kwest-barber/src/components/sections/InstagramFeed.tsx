import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";
import { gallery } from "@/data/gallery";

export function InstagramFeed() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section id="gallery" className="bg-ink">
      <div className="px-6 pt-24 pb-12 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <h2
                className="font-display uppercase leading-[0.95] text-bone"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                Gallery
              </h2>
              <InstagramIconLink
                size={32}
                className="text-smoke transition-colors hover:text-gold"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <RevealGroup
            className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
            stagger={0.08}
          >
            {gallery.map((photo) => (
              <RevealItem
                key={photo.src}
                className="group relative overflow-hidden bg-blade ring-1 ring-chrome/40"
              >
                <Image
                  src={`${basePath}${photo.src}`}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {photo.caption && (
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 px-4 py-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-bone">
                      {photo.caption}
                    </p>
                  </div>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
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
