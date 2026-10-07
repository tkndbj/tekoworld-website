import type { Metadata } from "next";
import { languageAlternates, localeInfo, localePath, type Locale } from "@/i18n/locales";

/**
 * The canonical address of a page in one language, with every other language listed beside
 * it. Every page sets this itself: a page that inherited the layout's would declare the home
 * page its canonical, and a search engine would believe it.
 */
export function pageAlternates(locale: Locale, path: string): Metadata["alternates"] {
  return { canonical: localePath(locale, path), languages: languageAlternates(path) };
}

/** Open Graph fields that change with the language. */
export function pageOpenGraph(locale: Locale, path: string) {
  return { url: localePath(locale, path), locale: localeInfo[locale].og };
}
