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

  /** The one-line description of what the studio is. */
  tagline: "Mobile games with fire in them.",

  /**
   * The canonical origin: the bare domain, deliberately.
   *
   * Vercel serves the apex and 308-redirects www to it. Either could have been made primary;
   * what must not happen is this disagreeing with the deploy, because then every canonical
   * URL, the sitemap and the Open Graph tags all point at a URL that redirects. The same
   * host is what goes in both store listings' Developer website field, so that ad crawlers
   * fetch app-ads.txt directly rather than through the redirect, and it is the host the
   * game's own Privacy / Terms / Support links are built from (LegalLinks.cs).
   */
  url: "https://tekoworld.com",

  /**
   * TODO: the legal entity that publishes the games.
   *
   * This must match the Google Play developer account and the App Store Connect seller,
   * because the policies below claim to be issued by whoever this says. If the games are
   * published by a company, put the company here - not a person.
   */
  entity: "Tekin Dabaj",

  /** TODO: the postal address for the entity above, as it appears on the store listings. */
  address: "Famagusta, Cyprus",

  /** Where privacy, deletion and support requests are received and answered. */
  email: "arcadetkn@gmail.com",

  /**
   * TODO: the jurisdiction whose law governs the Terms.
   *
   * Should follow the entity, not where the developer happens to sit. Worth confirming with
   * whoever incorporated the business.
   */
  jurisdiction: "the Republic of Cyprus",

  /** Shown on every policy. Bump when the text changes in a way that affects a reader. */
  updated: "14 September 2026",
} as const;

/**
 * The flagship. There is one game today; when there is a second, this becomes a list and
 * the /gemfire route becomes /games/[slug].
 */
export const gemfire = {
  name: "Gemfire",
  slug: "gemfire",
  path: "/gemfire",
  genre: "Match-3 tower defence",
  pitch: "Match gems. Fire turrets. Hold the wall.",
  description:
    "Gemfire is a match-3 tower-defence game. Every match on the board fires the turret of the same colour at the horde marching on your castle. Clear waves, upgrade your turrets, and build your kingdom.",

  /** TODO: fill in once the listings exist; the buttons hide themselves until then. */
  stores: {
    android: "",
    ios: "",
  },

  /**
   * Store identifiers, used only for structured data and for the reader to match a listing
   * to this page. TODO: confirm once both listings exist.
   */
  ids: {
    android: "com.tekoworld.gemfire",
    ios: "",
  },
} as const;

/** The support address as a mailto link with a subject already filled in. */
export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(`${gemfire.name} - ${subject}`)}`;
}
