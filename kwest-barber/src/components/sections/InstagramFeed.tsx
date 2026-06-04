import Script from "next/script";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";
import { instagramPosts } from "@/data/instagram-posts";

export function InstagramFeed() {
  const posts = instagramPosts;

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

      <div className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {posts.length === 0 ? (
            <Reveal delay={0.1}>
              <FollowCTA />
            </Reveal>
          ) : (
            <Reveal delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((url) => (
                  <blockquote
                    key={url}
                    className="instagram-media bg-blade"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                      background: "#111111",
                      border: 0,
                      margin: 0,
                      maxWidth: "100%",
                      minWidth: 0,
                      padding: 0,
                      width: "100%",
                    }}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 text-center font-mono text-xs uppercase tracking-widest text-smoke"
                    >
                      View on Instagram
                    </a>
                  </blockquote>
                ))}
              </div>
              <Script
                src="https://www.instagram.com/embed.js"
                strategy="afterInteractive"
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function FollowCTA() {
  return (
    <div className="flex flex-col items-center gap-6 border border-chrome/40 bg-blade px-6 py-16 text-center md:py-20">
      <InstagramIconLink
        size={56}
        className="text-bone transition-colors hover:text-gold"
      />
      <div className="max-w-md">
        <p className="font-display text-xl uppercase leading-[1.1] text-bone md:text-2xl">
          See every cut on Instagram.
        </p>
        <p className="mt-3 font-body text-sm text-ash">
          Fresh work posted from the chair — fades, beard sculpts, walk-out
          shots. Follow for the latest.
        </p>
      </div>
      <a
        href="https://www.instagram.com/kwest_the_barber/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gold px-7 py-3.5 font-display text-sm uppercase tracking-widest text-ink transition-all hover:bg-gold-light"
      >
        Follow @kwest_the_barber
      </a>
    </div>
  );
}
