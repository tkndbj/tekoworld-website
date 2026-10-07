import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { dictionaries, type Dictionary } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { isLocale, type Locale } from "@/i18n/locales";

/**
 * The locale of the page being rendered, read from the `[lang]` root segment.
 *
 * Server components call this rather than having `lang` passed down through every layer;
 * `next/root-params` already fails the build if a client component tries.
 */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** The site's own words in the current locale, and the game's words beside them. */
export async function getText(): Promise<{
  locale: Locale;
  t: Dictionary;
  game: ReturnType<typeof gameTextFor>;
}> {
  const locale = await getLocale();
  return { locale, t: dictionaries[locale], game: gameTextFor(locale) };
}
