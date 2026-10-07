/**
 * Every fact that appears in more than one place on this site.
 *
 * The policies name the same entity, address and contact route a dozen times between them,
 * and a privacy policy whose contact address disagrees with its own deletion page is worse
 * than one that is merely terse. So the facts live here once and the pages read them.
 *
 * EDIT THESE BEFORE PUBLISHING. The values marked TODO are placeholders that cannot be
 * guessed and that a store review or a regulator will check.
 */

export const site = {
  /**
   * The studio. This is the company site: Tekoworld is the publisher, and the games are
   * its products. The name is set in capitals in the logo but written as a word in prose.
   */
  company: "Tekoworld",

  /**
   * The canonical origin, and it is the **www** host deliberately.
   *
   * Vercel serves www and 308-redirects the apex to it. Either could have been made primary;
   * what must not happen is this disagreeing with the deploy, because then every canonical
   * URL, the sitemap and the Open Graph tags all point at a URL that redirects. The same
   * host is what goes in both store listings' Developer website field, so that ad crawlers
   * fetch app-ads.txt directly rather than through the redirect, and it is the host the
   * game's own Privacy / Terms / Support links are built from (LegalLinks.cs).
   */
  url: "https://www.tekoworld.com",

  /**
   * TODO: the legal entity that publishes the games.
   *
   * This must match the Google Play developer account and the App Store Connect seller,
   * because the policies below claim to be issued by whoever this says. If the games are
   * published by a company, put the company here - not a person.
   */
  entity: "Tekin Dabaj",

  /**
   * TODO: the postal address for the entity above, as it appears on the store listings.
   * The policies print it as written here, in every language: it is an address, not prose.
   */
  address: "Famagusta, Cyprus",

  /** Where the studio is, for prose ("an independent studio in ..."); see `placeName`. */
  city: "Famagusta",
  country: "CY",

  /** Where privacy, deletion and support requests are received and answered. */
  email: "arcadetkn@gmail.com",

  /**
   * TODO: the jurisdiction whose law governs the Terms.
   *
   * Should follow the entity, not where the developer happens to sit. Worth confirming with
   * whoever incorporated the business. The translated terms (src/i18n/legal/terms/*.tsx) name
   * it in their own language, so changing it here means changing it there.
   */
  jurisdiction: "the Republic of Cyprus",

  /**
   * Shown on every policy, in every language. Bump when the text changes in a way that affects
   * a reader. ISO so each language can print it its own way (`formatDate`).
   */
  updated: "2026-10-07",
} as const;

/**
 * The flagship. There is one game today; when there is a second, this becomes a list and
 * the /gemfire route becomes /games/[slug].
 */
export const gemfire = {
  name: "Gemfire",
  slug: "gemfire",
  path: "/gemfire",

  /** A store left empty hides its button. Android waits for the Play listing to go public. */
  stores: {
    android: "",
    ios: "https://apps.apple.com/app/id6804516450",
  },

  /**
   * Store identifiers, used only for structured data and for the reader to match a listing
   * to this page. The package name is the bundle id, which can never move.
   */
  ids: {
    android: "com.tekoworld.glimmergroove",
    ios: "6804516450",
  },
} as const;

/**
 * The support address as a mailto link with a subject already filled in. The subject is the
 * reader's language (the `mail` block of the dictionary); the game's name in front of it is
 * what sorts the inbox.
 */
export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(`${gemfire.name} - ${subject}`)}`;
}

/** The studio's city and country, the country named in the reader's language. */
export function placeName(tag: string) {
  const country = new Intl.DisplayNames([tag], { type: "region" }).of(site.country);
  return `${site.city}, ${country}`;
}

/** A date from this file, written the way `tag` (a BCP 47 language tag) writes dates. */
export function formatDate(iso: string, tag: string) {
  return new Intl.DateTimeFormat(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
