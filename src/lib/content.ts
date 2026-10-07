/**
 * The shape of the Gemfire page: which chapters, turrets, kit and companions it shows, in
 * what order and in what colour. No words live here.
 *
 * The names are the game's own, in the game's own translation, generated into
 * `src/i18n/game-text.ts` by `scripts/sync-game-text.py`; the site's descriptions of them are
 * in the dictionaries. The ids below are the keys of both, so a turret added here and missing
 * from either fails the build.
 */

export const chapters = [
  { id: "thornwatch", color: "var(--emerald)" },
  { id: "broodmarch", color: "var(--violet)" },
  { id: "barrowfell", color: "var(--ruby)" },
] as const;

export type ChapterId = (typeof chapters)[number]["id"];

export const endlessColor = "var(--cyan)";

/** The twenty turrets, in unlock order. Tier I is bought with coins, tier II with gems. */
export const turrets = [
  { id: "bolt", tier: 1 },
  { id: "siphon", tier: 1 },
  { id: "beacon", tier: 1 },
  { id: "ember", tier: 1 },
  { id: "rime", tier: 1 },
  { id: "cleaver", tier: 1 },
  { id: "prism", tier: 1 },
  { id: "lance", tier: 1 },
  { id: "mortar", tier: 1 },
  { id: "spark", tier: 1 },
  { id: "leech", tier: 2 },
  { id: "lighthouse", tier: 2 },
  { id: "pyre", tier: 2 },
  { id: "glacier", tier: 2 },
  { id: "breaker", tier: 2 },
  { id: "spectrum", tier: 2 },
  { id: "harpoon", tier: 2 },
  { id: "howitzer", tier: 2 },
  { id: "arcstorm", tier: 2 },
  { id: "apex", tier: 2 },
] as const;

/** The consumables - what the game calls the Kit. */
export const kit = [
  { id: "firepot", color: "var(--ember)" },
  { id: "mending", color: "var(--emerald)" },
  { id: "surge", color: "var(--cyan)" },
  { id: "stormcall", color: "var(--violet)" },
] as const;

/** Special gems that appear on the board. */
export const charms = ["prism", "lance", "stormglass"] as const;

/** The stats strip. Deliberately verifiable: every number is in the game's content files. */
export const stats = [
  { value: "31", color: "var(--gold)" },
  { value: "20", color: "var(--cyan)" },
  { value: "31", color: "var(--emerald)" },
  { value: "0", color: "var(--ruby)" },
] as const;
