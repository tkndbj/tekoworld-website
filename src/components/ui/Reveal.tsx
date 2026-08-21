"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades each section up as it arrives.
 *
 * One observer for the whole document rather than a wrapper component per
 * section, so a section only has to add the `reveal` class to opt in. If this
 * never runs — JavaScript off, or an old browser — the stylesheet leaves
 * everything visible rather than blank.
 *
 * Re-runs on every navigation. This component lives in the root layout, which
 * survives client-side routing, so a one-shot effect would only ever observe
 * the sections present on the first page loaded. Navigating to /support and
 * back replaces the home page's sections with fresh elements that nothing is
 * watching, and they stay at opacity 0 for good.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)")
    );
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
  }, [pathname]);

  return null;
}
