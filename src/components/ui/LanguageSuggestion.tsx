"use client";

import { useState, useSyncExternalStore } from "react";
import { LANGUAGE_CHOSEN, useLocaleHref } from "@/components/ui/LanguageMenu";
import { isLocale, localeInfo, type Locale } from "@/i18n/locales";

type Offer = { text: string; action: string; dismiss: string };

/**
 * Offers the page in the reader's own language when the browser asks for one the site has
 * and the page is in another, worded in the language it offers.
 *
 * An offer and never a redirect. The English addresses are written into store listings, the
 * AdMob consent message and the game itself, and a crawler or a store reviewer sent somewhere
 * other than the page it asked for is the failure this site exists to avoid. It also needs no
 * server, which keeps every page static.
 *
 * Choosing a language, here or in the menu, answers it. The answer lasts for the browser tab
 * (sessionStorage) and stays on the device. Nothing is sent anywhere, so the privacy policy's
 * "sets no cookies, does not track you" stays true.
 */
export function LanguageSuggestion({
  current,
  offers,
}: {
  current: Locale;
  offers: Record<Locale, Offer>;
}) {
  const href = useLocaleHref();
  // Read from the browser, never from the server render: the prerendered page is the same
  // for everyone, and the offer appears only once the reader's own languages are known.
  const preferred = useSyncExternalStore(onLanguageChange, preferredLocale, () => null);
  const [dismissed, setDismissed] = useState(false);

  const offer = !dismissed && preferred && preferred !== current ? preferred : null;
  if (!offer) return null;

  const words = offers[offer];
  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(LANGUAGE_CHOSEN, "1");
    } catch {
      // Nothing to remember it in; it closes for this page.
    }
  };

  return (
    <div
      role="region"
      aria-label={localeInfo[offer].name}
      lang={localeInfo[offer].tag}
      className="panel panel-glow fixed inset-x-3 bottom-3 z-[65] flex flex-wrap items-center gap-3 bg-panel-solid px-4 py-3 sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md"
    >
      <p className="min-w-0 flex-1 text-sm text-ink-2">{words.text}</p>
      <div className="flex shrink-0 items-center gap-2">
        <a href={href(offer)} hrefLang={localeInfo[offer].tag} onClick={dismiss} className="btn btn-fire btn-sm">
          {words.action}
        </a>
        <button type="button" onClick={dismiss} className="btn btn-sm px-3">
          <span className="sr-only">{words.dismiss}</span>
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function onLanguageChange(changed: () => void) {
  window.addEventListener("languagechange", changed);
  return () => window.removeEventListener("languagechange", changed);
}

/** The first of the browser's languages the site has, unless the reader has already chosen. */
function preferredLocale(): Locale | null {
  try {
    if (sessionStorage.getItem(LANGUAGE_CHOSEN)) return null;
  } catch {
    // Storage refused (private mode, blocked site data): offer anyway.
  }
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  return tags.map((tag) => tag.toLowerCase().split("-")[0]).find(isLocale) ?? null;
}
