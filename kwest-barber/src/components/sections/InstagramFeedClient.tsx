"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import type { InstagramPost } from "@/lib/instagram";

interface Props {
  posts: InstagramPost[];
}

export function InstagramFeedClient({ posts }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3200, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container gap-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="embla__slide group relative"
              style={{ width: "clamp(240px, 28vw, 340px)" }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={
                    post.media_type === "VIDEO" && post.thumbnail_url
                      ? post.thumbnail_url
                      : post.media_url
                  }
                  alt={post.caption?.slice(0, 100) || "Instagram post by Kwest The Barber"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 240px, 340px"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Caption overlay */}
                {post.caption && (
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/70 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <p className="line-clamp-2 font-body text-xs text-bone">
                      {post.caption}
                    </p>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center gap-6">
        <button
          onClick={scrollPrev}
          className="font-display text-xs font-semibold uppercase tracking-widest text-smoke transition-colors hover:text-gold"
        >
          Prev
        </button>
        <div className="h-[1px] flex-1 bg-chrome" />
        <button
          onClick={scrollNext}
          className="font-display text-xs font-semibold uppercase tracking-widest text-smoke transition-colors hover:text-gold"
        >
          Next
        </button>
      </div>
    </div>
  );
}
