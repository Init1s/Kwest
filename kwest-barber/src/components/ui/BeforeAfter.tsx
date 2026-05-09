"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

const MIN_POSITION = 2;
const MAX_POSITION = 98;
const ARROW_STEP = 2;
const PAGE_STEP = 10;

const clamp = (n: number) =>
  Math.max(MIN_POSITION, Math.min(MAX_POSITION, n));

type BeforeAfterProps = {
  before?: string;
  after?: string;
  beforeAlt?: string;
  afterAlt?: string;
  ariaLabel?: string;
};

export function BeforeAfter({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  ariaLabel = "Before and after comparison slider",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(clamp((x / rect.width) * 100));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let next: number | null = null;
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        next = position - ARROW_STEP;
        break;
      case "ArrowRight":
      case "ArrowUp":
        next = position + ARROW_STEP;
        break;
      case "PageDown":
        next = position - PAGE_STEP;
        break;
      case "PageUp":
        next = position + PAGE_STEP;
        break;
      case "Home":
        next = MIN_POSITION;
        break;
      case "End":
        next = MAX_POSITION;
        break;
      default:
        return;
    }
    e.preventDefault();
    setPosition(clamp(next));
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={MIN_POSITION}
      aria-valuemax={MAX_POSITION}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% before, ${Math.round(
        100 - position,
      )}% after`}
      aria-orientation="horizontal"
      className={`relative ${
        before && after ? "aspect-[3/5]" : "aspect-[4/3]"
      } cursor-col-resize overflow-hidden select-none touch-none bg-blade outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      {/* After (background) — orange duotone */}
      <div className="duotone-orange absolute inset-0">
        {after ? (
          <Image
            src={`${basePath}${after}`}
            alt={afterAlt}
            fill
            className="object-contain object-bottom pointer-events-none"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-chrome via-steel to-chrome" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-3xl font-extrabold uppercase text-bone/[0.08] md:text-4xl">
                AFTER
              </span>
            </div>
          </>
        )}
      </div>

      {/* Before (clipped) — lime duotone */}
      <div
        className="duotone-lime absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {before ? (
          <Image
            src={`${basePath}${before}`}
            alt={beforeAlt}
            fill
            className="object-contain object-bottom pointer-events-none bg-blade"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-blade to-ink" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-3xl font-extrabold uppercase text-bone/[0.08] md:text-4xl">
                BEFORE
              </span>
            </div>
          </>
        )}
      </div>

      {/* Corner labels (only when images present) */}
      {before && after && (
        <>
          <span className="pointer-events-none absolute top-3 left-3 z-10 bg-ink/70 px-2 py-1 font-mono text-[9px] uppercase tracking-ultra text-bone backdrop-blur-sm">
            Before
          </span>
          <span className="pointer-events-none absolute top-3 right-3 z-10 bg-ink/70 px-2 py-1 font-mono text-[9px] uppercase tracking-ultra text-bone backdrop-blur-sm">
            After
          </span>
        </>
      )}

      {/* Slider handle (visual only — keyboard control lives on the container) */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-px bg-gold" />
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ink/90 backdrop-blur-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-gold"
            aria-hidden="true"
          >
            <path
              d="M5 3L2 8L5 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 3L14 8L11 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
