"use client";

import { useEffect } from "react";

/**
 * Fades each section up as it arrives.
 *
 * One observer for the whole document rather than a wrapper component per
 * section, so a section only has to add the `reveal` class to opt in. Sections
 * already on screen at load are revealed immediately, and if this never runs —
 * JavaScript off, or an old browser — the `no-js` rule in the stylesheet leaves
 * everything visible rather than blank.
 */
export function Reveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!targets.length) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
