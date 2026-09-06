"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/lib/products/types";

/**
 * Drag distance (px) required to advance one frame. Lower = more sensitive.
 */
const PIXELS_PER_FRAME = 10;

function normalizeIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export interface FrameViewerProps {
  frames: ProductImage[];
  /** Used only for the accessible label, e.g. "HASNET BSD4BLT". */
  productLabel: string;
  className?: string;
}

/**
 * A drag/swipe multi-angle image-sequence viewer. This is NOT a 3D model
 * and does not use WebGL/Three.js — it swaps between pre-captured photo
 * frames as the user drags, wrapping smoothly from the last frame back to
 * the first. Per the 3d-web-experiences skill: this technique is honest for
 * what we actually have (an ordered photo sequence), and nothing here
 * should be presented as true 3D.
 *
 * Progressive enhancement: the visible <img> for the current frame is
 * ordinary server-rendered markup, so if JavaScript fails to run, the
 * static first frame still renders — only the drag/keyboard interaction
 * requires JS.
 */
export function FrameViewer({ frames, productLabel, className }: FrameViewerProps) {
  const ordered = React.useMemo(
    () => [...frames].sort((a, b) => a.order - b.order),
    [frames],
  );

  const [index, setIndex] = React.useState(0);
  const dragState = React.useRef<{ startX: number; startIndex: number } | null>(null);

  // Preload every frame once on mount so dragging never waits on a network
  // request mid-gesture — the total set is small (a few hundred KB), so
  // warming the whole sequence up front is simpler and safer than a
  // nearby-frame-only strategy.
  React.useEffect(() => {
    if (ordered.length <= 1) return;
    ordered.forEach((frame) => {
      const img = new window.Image();
      img.src = frame.src;
    });
  }, [ordered]);

  const step = React.useCallback(
    (delta: number) => {
      if (ordered.length === 0) return;
      setIndex((current) => normalizeIndex(current + delta, ordered.length));
    },
    [ordered.length],
  );

  if (ordered.length === 0) {
    return (
      <div
        className={cn(
          "flex aspect-[16/9] w-full items-center justify-center rounded-md border border-ink-700 bg-ink-900 px-6 text-center text-ink-400",
          className,
        )}
      >
        لا تتوفر صور لهذا المنتج حالياً
      </div>
    );
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (ordered.length <= 1) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = { startX: event.clientX, startIndex: index };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current) return;
    const deltaX = event.clientX - dragState.current.startX;
    const framesMoved = Math.trunc(deltaX / PIXELS_PER_FRAME);
    setIndex(normalizeIndex(dragState.current.startIndex - framesMoved, ordered.length));
  };

  const endDrag = () => {
    dragState.current = null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  };

  const current = ordered[index];

  return (
    <div
      role="group"
      aria-label={`عارض ${productLabel} متعدد الزوايا`}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={handleKeyDown}
      className={cn(
        "relative aspect-[16/9] w-full touch-pan-y select-none overflow-hidden rounded-md border border-ink-700 bg-ink-900 outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
        ordered.length > 1 && "cursor-grab active:cursor-grabbing",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- deliberate:
          this is a rapidly-swapped frame sequence with manual cache
          warm-up (see the preload effect above); next/image's responsive
          loader/lazy-loading would fight that, not help it. */}
      <img
        src={current.src}
        alt={current.alt.ar}
        draggable={false}
        loading="eager"
        decoding="async"
        className="pointer-events-none h-full w-full object-contain"
      />
      {ordered.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <span className="rounded-full bg-ink-950/70 px-4 py-1.5 font-mono text-xs tracking-wide text-gold-300 motion-safe:animate-pulse">
            اسحب لتدوير المنتج · {index + 1}/{ordered.length}
          </span>
        </div>
      )}
    </div>
  );
}
