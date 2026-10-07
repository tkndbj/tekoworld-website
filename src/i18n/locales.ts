/**
 * The languages the site is published in, and how a page's address is spelled in each.
 *
 * The list is the game's own (`Loc.Languages` in the game repository): a player who reads
 * the game in Polish should be able to read its privacy policy in Polish. Adding a language
 * here is the whole of the routing change; TypeScript then refuses to build until every
 * dictionary and every legal document has that language too.
 *
 * Safe to import from client components: nothing here touches the server.
 */

export const locales = ["en", "es", "pt", "fr", "de", "it", "tr", "pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeInfo: Record<
  Locale,
  {
    /** The language's name in itself, which is the only spelling a reader is sure to recognise. */
    name: string;
    /** BCP 47 tag for `<html lang>` and `hreflang`. Also what CSS `text-transform` reads. */
    tag: string;
    /** Open Graph locale. */
    og: string;
  }
> = {
  en: { name: "English", tag: "en-GB", og: "en_GB" },
  es: { name: "Español", tag: "es", og: "es_ES" },
  pt: { name: "Português", tag: "pt-BR", og: "pt_BR" },
  fr: { name: "Français", tag: "fr", og: "fr_FR" },
  de: { name: "Deutsch", tag: "de", og: "de_DE" },
  it: { name: "Italiano", tag: "it", og: "it_IT" },
  tr: { name: "Türkçe", tag: "tr", og: "tr_TR" },
  pl: { name: "Polski", tag: "pl", og: "pl_PL" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * The public address of `path` in `locale`.
 *
 * English is deliberately unprefixed: `/privacy`, `/delete-account`, `/support` and `/terms`
 * are written into both store listings, the AdMob consent message and the game binary
 * (`LegalLinks.Site`), and a policy URL that started redirecting would be a silent failure in
 * every one of them. `next.config.ts` rewrites those addresses onto the `[lang]` tree.
 *
 * `path` starts with "/" and may carry a hash ("/#games", "/gemfire#get").
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/**
 * The locale-free path of a browser address: "/es/privacy" and "/privacy" both give
 * "/privacy". Accepts the internal "/en/..." spelling too, whichever one the router reports.
 */
export function basePath(pathname: string): { locale: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (isLocale(first)) {
    return { locale: first, path: `/${rest.join("/")}` };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/**
 * `hreflang` alternates for a page, for metadata and the sitemap. `x-default` is English,
 * which is what a reader whose language the site does not have is shown.
 */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const locale of locales) out[localeInfo[locale].tag] = localePath(locale, path);
  out["x-default"] = localePath(defaultLocale, path);
  return out;
}
