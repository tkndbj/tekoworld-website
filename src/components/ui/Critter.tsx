"use client";

import { useEffect, useRef, useState } from "react";
import type { Critter } from "@/lib/content";

/**
 * A companion, idling.
 *
 * Each one ships as a single horizontal strip of frames that CSS steps through,
 * so playback costs no JavaScript once it starts. The strips are the heaviest
 * art on the site though, so the still frame — a twentieth of the size — is
 * what loads first, and the strip is only fetched when the sprite is actually
 * near the viewport. Below the fold, nothing is downloaded and nothing animates.
 */
export function CritterSprite({
  critter,
  height,
  className = "",
  style,
}: {
  critter: Pick<Critter, "id" | "frames" | "w" | "h">;
  /** Any CSS length; the width follows from the frame's aspect ratio. */
  height: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // No observer, no animation: the sprite keeps its still frame, which is the
    // right thing to show anyway and saves the download. Not worth a fallback
    // that would have to set state synchronously on mount to serve the handful
    // of browsers that have lacked this since 2019.
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAwake(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`${awake ? "critter-sprite " : ""}block ${className}`}
      style={{
        height,
        aspectRatio: `${critter.w} / ${critter.h}`,
        backgroundImage: `url(/art/critters/${critter.id}${awake ? "" : "-still"}.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: awake ? undefined : "100% 100%",
        ["--frames" as string]: critter.frames,
        ...style,
      }}
    />
  );
}
