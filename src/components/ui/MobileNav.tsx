"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageMenu } from "@/components/ui/LanguageMenu";
import type { Locale } from "@/i18n/locales";

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
  current,
  words,
}: {
  items: readonly { href: string; label: string }[];
  current: Locale;
  words: { menu: string; open: string; close: string; language: string };
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Close on a real navigation. Adjusting state during render rather than in an
  // effect: the menu must be gone in the same commit that paints the new page,
  // and an effect would let the old panel show over it for a frame. The links
  // close it themselves too - this is what catches the back button.
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
        <span className="sr-only">{words.open}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
          <g fill="currentColor">
            <rect x="2" y="4" width="16" height="2" />
            <rect x="2" y="9" width="16" height="2" />
            <rect x="2" y="14" width="16" height="2" />
          </g>
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label={words.close}
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-bg/80 backdrop-blur-sm"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={words.menu}
            className="panel panel-glow absolute inset-x-3 top-3 max-h-[calc(100svh-1.5rem)] overflow-y-auto bg-panel-solid p-3"
          >
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="kicker">{words.menu}</span>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                className="btn btn-sm px-3"
              >
                <span className="sr-only">{words.close}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="2"
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
                    className="font-display block px-4 py-3 text-lg font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-panel-2 hover:text-cyan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-line px-0 pt-3">
              <p className="kicker px-4 pb-1 text-ink-3">{words.language}</p>
              <LanguageMenu current={current} label={words.language} variant="list" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
