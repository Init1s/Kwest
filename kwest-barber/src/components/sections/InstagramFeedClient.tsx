"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { InstagramPost } from "@/lib/instagram";

interface Props {
  posts: InstagramPost[];
}

export function InstagramFeedClient({ posts }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const visiblePosts = posts.slice(0, 10);

  useEffect(() => {
    const calculate = () => {
      if (innerRef.current) {
        setScrollRange(
          innerRef.current.scrollWidth - window.innerWidth + 48
        );
      }
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [visiblePosts]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div ref={containerRef} style={{ height: "280vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={innerRef}
          style={{ x }}
          className="flex gap-5 pl-6 pr-[40vw]"
        >
          {visiblePosts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0"
              style={{ width: "clamp(280px, 30vw, 450px)" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={
                    post.media_type === "VIDEO" && post.thumbnail_url
                      ? post.thumbnail_url
                      : post.media_url
                  }
                  alt={
                    post.caption?.slice(0, 100) ||
                    "Work by Kwest The Barber"
                  }
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 450px"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Caption */}
                {post.caption && (
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/80 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <p className="line-clamp-2 font-body text-xs text-bone">
                      {post.caption}
                    </p>
                  </div>
                )}
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
