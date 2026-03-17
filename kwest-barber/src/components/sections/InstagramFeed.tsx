import { getInstagramPosts } from "@/lib/instagram";
import { InstagramFeedClient } from "./InstagramFeedClient";
import { Reveal } from "@/components/ui/Reveal";

export async function InstagramFeed() {
  const posts = await getInstagramPosts(16);

  return (
    <section id="gallery" className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="mb-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
                @kwest_the_barber
              </span>
              <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tightest text-bone md:text-6xl">
                THE WORK
              </h2>
            </div>
            <a
              href="https://www.instagram.com/kwest_the_barber/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-smoke transition-colors hover:text-gold"
            >
              Follow on Instagram
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {posts.length > 0 ? (
            <InstagramFeedClient posts={posts} />
          ) : (
            <div className="flex items-center justify-center border border-chrome bg-blade p-16">
              <p className="font-mono text-xs uppercase tracking-widest text-smoke">
                Connect Instagram in .env.local
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
