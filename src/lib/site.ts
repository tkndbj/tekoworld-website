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
   * The product name as players see it, which is what store listings must match.
   *
   * Double "o", deliberately: the game ships as Glimmer Groove, matching the Firebase project
   * and the AdMob app entry. The in-game strings still say "Grove" in places and are the ones
   * that need correcting, not this.
   */
  game: "Glimmer Groove",

  /** TODO: the domain this is published on, no trailing slash. Used for canonical URLs. */
  url: "https://glimmergroove.app",

  /**
   * TODO: the legal entity that publishes the game.
   *
   * This must match the Google Play developer account and the App Store Connect seller,
   * because the policies below claim to be issued by whoever this says. If the game is
   * published by a company, put the company here — not a person.
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
  updated: "21 August 2026",

  /** TODO: fill in once the listings exist; the buttons hide themselves until then. */
  stores: {
    android: "",
    ios: "",
  },
} as const;

/** The support address as a mailto link with a subject already filled in. */
export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(`${site.game} — ${subject}`)}`;
}
