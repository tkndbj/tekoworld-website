"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * The small-screen menu.
 *
 * A dialog rather than a slide-down panel, because it covers the page and
 * should behave like it: Escape closes it, the background does not scroll under
 * it, and focus cannot wander out into the page behind. Navigating closes it,
 * which matters here because most of the links are anchors on the page you are
 * already looking at.
 */
export function MobileNav({
  items,
}: {
  items: readonly { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Close on a real navigation. Adjusting state during render rather than in an
  // effect: the menu must be gone in the same commit that paints the new page,
  // and an effect would let the old panel show over it for a frame. The links
  // close it themselves too — this is what catches the back button.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="btn btn-sm px-3 lg:hidden"
      >
        <span className="sr-only">Open menu</span>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
          <g fill="currentColor">
            <rect x="2" y="4" width="16" height="2.6" rx="1.3" />
            <rect x="2" y="8.7" width="16" height="2.6" rx="1.3" />
            <rect x="2" y="13.4" width="16" height="2.6" rx="1.3" />
          </g>
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-[color-mix(in_srgb,var(--ink)_55%,transparent)]"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-x-3 top-3 rounded-3xl border-2 border-line bg-panel p-3 shadow-[0_6px_0_var(--line)]"
          >
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="font-display text-sm font-extrabold uppercase tracking-wide text-ink-3">
                Menu
              </span>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                className="btn btn-sm px-3"
              >
                <span className="sr-only">Close menu</span>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-display text-lg font-extrabold text-ink hover:bg-panel-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
