import { getInstagramPosts } from "@/lib/instagram";
import { InstagramFeedClient } from "./InstagramFeedClient";

export async function InstagramFeed() {
  const posts = await getInstagramPosts(16);

  return (
    <section id="gallery" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
              @kwestthebarber
            </span>
            <h2 className="mt-2 font-display text-5xl font-black uppercase tracking-tightest text-bone md:text-7xl">
              THE WORK
            </h2>
          </div>
          <a
            href="https://instagram.com/kwestthebarber"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-smoke transition-colors hover:text-gold"
          >
            Follow on Instagram
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        {posts.length > 0 ? (
          <InstagramFeedClient posts={posts} />
        ) : (
          <div className="flex items-center justify-center rounded border border-chrome bg-blade p-16">
            <p className="font-mono text-xs uppercase tracking-widest text-smoke">
              Connect Instagram in .env.local
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
