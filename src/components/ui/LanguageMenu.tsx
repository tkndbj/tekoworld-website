"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { basePath, localeInfo, localePath, locales, type Locale } from "@/i18n/locales";

/** sessionStorage key: the reader has chosen, or declined, a language in this tab. */
export const LANGUAGE_CHOSEN = "tekoworld.language-chosen";

/** A reader who picks a language has answered the suggestion; do not ask again in this tab. */
function rememberChoice() {
  try {
    sessionStorage.setItem(LANGUAGE_CHOSEN, "1");
  } catch {
    // Storage refused: the suggestion may come back, which is harmless.
  }
}

/** The address of the page being read, in another language, keeping its #section. */
export function useLocaleHref() {
  const pathname = usePathname();
  const { path } = basePath(pathname);
  const hash = useSyncExternalStore(onHashChange, readHash, noHash);

  return (locale: Locale) => `${localePath(locale, path)}${hash}`;
}

function onHashChange(changed: () => void) {
  window.addEventListener("hashchange", changed);
  return () => window.removeEventListener("hashchange", changed);
}

const readHash = () => window.location.hash;
const noHash = () => "";

/**
 * The language chooser: every language named in itself, so a reader finds theirs without
 * reading the one the page is in.
 *
 * Plain anchors rather than client-side links. Changing language changes `<html lang>`,
 * which is what CSS capitalisation (Turkish i to İ) and screen readers read, and a full
 * load is the one way that is guaranteed to be right.
 */
export function LanguageMenu({
  current,
  label,
  variant = "header",
}: {
  current: Locale;
  label: string;
  variant?: "header" | "list";
}) {
  const href = useLocaleHref();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "list") {
    return (
      <ul className="grid grid-cols-2 gap-1" aria-label={label}>
        {locales.map((l) => (
          <li key={l}>
            <a
              href={href(l)}
              hrefLang={localeInfo[l].tag}
              lang={localeInfo[l].tag}
              onClick={rememberChoice}
              aria-current={l === current ? "true" : undefined}
              className={`block px-4 py-2.5 text-base font-semibold transition-colors hover:bg-panel-2 hover:text-cyan ${
                l === current ? "text-cyan" : "text-ink-2"
              }`}
            >
              {localeInfo[l].name}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="btn btn-sm gap-2 px-3"
      >
        <Globe />
        <span className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.14em]">
          {current}
        </span>
        <span className="sr-only">{label}</span>
      </button>

      {open && (
        <div className="panel panel-glow absolute right-0 top-full z-[60] mt-2 w-52 bg-panel-solid p-2">
          <ul aria-label={label}>
            {locales.map((l) => (
              <li key={l}>
                <a
                  href={href(l)}
                  hrefLang={localeInfo[l].tag}
                  lang={localeInfo[l].tag}
                  onClick={rememberChoice}
                  aria-current={l === current ? "true" : undefined}
                  className={`flex items-center justify-between px-3 py-2 text-sm font-semibold transition-colors hover:bg-panel-2 hover:text-cyan ${
                    l === current ? "text-cyan" : "text-ink-2"
                  }`}
                >
                  {localeInfo[l].name}
                  <span className="font-display text-[0.7rem] uppercase tracking-[0.14em] text-ink-3">
                    {l}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Globe() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="8" cy="8" r="6.3" />
      <path d="M1.8 8h12.4M8 1.7c1.8 1.9 2.7 4 2.7 6.3S9.8 12.4 8 14.3C6.2 12.4 5.3 10.3 5.3 8S6.2 3.6 8 1.7Z" />
    </svg>
  );
}
