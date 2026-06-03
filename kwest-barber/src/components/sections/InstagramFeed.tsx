import { getInstagramPosts } from "@/lib/instagram";
import { InstagramFeedClient } from "./InstagramFeedClient";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";

export async function InstagramFeed() {
  const posts = await getInstagramPosts(16);

  return (
    <section id="gallery" className="bg-ink">
      {/* Header */}
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

      {/* Gallery */}
      {posts.length > 0 ? (
        <InstagramFeedClient posts={posts} />
      ) : (
        <div className="px-6 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-center border border-chrome bg-blade p-16">
              <p className="font-mono text-xs uppercase tracking-widest text-smoke">
                Connect Instagram in .env.local
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
