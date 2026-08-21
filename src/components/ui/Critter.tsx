"use client";

import { useEffect, useRef, useState } from "react";
import type { Critter } from "@/lib/content";

/**
 * A companion, idling.
 *
 * Each one ships as a single horizontal strip of frames, stepped through by
 * CSS so playback costs no JavaScript once it starts.
 *
 * The strip is moved with `translateX`, not with `background-position`. A
 * percentage background position does not offset by that percentage - it aligns
 * the image's N% point with the container's N% point, so on an eighteen-frame
 * strip a step of -100% lands seventeen frames along and the next one is off the
 * end of the image entirely. A transform percentage is plain proportional
 * movement: the strip is N frames wide, `translateX(-100%)` is exactly N frames,
 * and `steps(N)` therefore lands on frame boundaries and nowhere else.
 *
 * The strips are also the heaviest art on the site, so the still frame - a
 * twentieth of the size - is what loads first, and the strip is only fetched
 * once the sprite is near the viewport. Below the fold nothing is downloaded and
 * nothing animates.
 */
export function CritterSprite({
  critter,
  height,
  play,
  className = "",
  style,
}: {
  critter: Pick<Critter, "id" | "frames" | "w" | "h">;
  /** Any CSS length; the width follows from the frame's aspect ratio. */
  height: string;
  /**
   * Drive playback directly instead of leaving it to the viewport observer.
   * The puzzle uses this: its sleeper wakes when the light reaches it, not when
   * it happens to be scrolled into view.
   */
  play?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const driven = play !== undefined;
  const playing = driven ? play : inView;

  useEffect(() => {
    if (driven) return;
    const el = ref.current;
    if (!el) return;
    // No observer, no animation: the sprite keeps its still frame, which is the
    // right thing to show anyway and saves the download.
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [driven]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`critter ${className}`}
      style={{ height, aspectRatio: `${critter.w} / ${critter.h}`, ...style }}
    >
      <span
        className={playing ? "critter-strip" : "critter-still"}
        style={{
          backgroundImage: `url(/art/critters/${critter.id}${playing ? "" : "-still"}.webp)`,
          ["--frames" as string]: critter.frames,
        }}
      />
    </span>
  );
}
