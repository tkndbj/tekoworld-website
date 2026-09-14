/**
 * The words for the Gemfire page.
 *
 * Everything here is taken from the game's own content files - the chapter and
 * level names, the turret roster, the kit, the companions - so that the site
 * describes the game that ships rather than the one that was pitched. If a name
 * changes in the game it should change here in the same commit.
 */

export type Chapter = {
  id: string;
  name: string;
  tagline: string;
  boss: string;
  levels: string[];
  color: string;
  enemy: string;
};

export const chapters: Chapter[] = [
  {
    id: "thornwatch",
    name: "Thornwatch",
    tagline: "Feed the wards. Hold the line.",
    boss: "The Warlord",
    enemy: "the swarm",
    color: "var(--emerald)",
    levels: [
      "First Watch",
      "The Ironward",
      "Stonewatch",
      "Thornhollow",
      "The Warlord's Gate",
      "Bramble Run",
      "Ashenfield",
      "Black March",
      "The Long Siege",
      "Last Light",
    ],
  },
  {
    id: "broodmarch",
    name: "Broodmarch",
    tagline: "Something is hatching in the mire.",
    boss: "The Blightcaller",
    enemy: "the brood",
    color: "var(--violet)",
    levels: [
      "First Brood",
      "Hollowshell",
      "Mirewalk",
      "Spinecrest",
      "Blightfen",
      "Stillmire",
      "Thornbrood",
      "Gloamfield",
      "Deepmire",
      "Broodheart",
    ],
  },
  {
    id: "barrowfell",
    name: "Barrowfell",
    tagline: "The dead do not stop at the wall.",
    boss: "The Gravemaw",
    enemy: "the risen",
    color: "var(--ruby)",
    levels: [
      "First Bone",
      "Pale Row",
      "Shieldwall",
      "Scytheway",
      "Hollow Grave",
      "Boneyard",
      "Dead March",
      "Lichgate",
      "Long Barrow",
      "Barrowheart",
    ],
  },
];

export const endless = {
  name: "The Endless Watch",
  tagline: "The waves never stop. Hold as long as you can.",
  color: "var(--cyan)",
};

/** The twenty turrets, in unlock order. Tier I is bought with coins, tier II with gems. */
export const turrets: { name: string; tier: 1 | 2; note: string }[] = [
  { name: "Bolt", tier: 1, note: "No extra effect. A solid, steady shot." },
  { name: "Siphon", tier: 1, note: "Gets fuel back on every kill." },
  { name: "Beacon", tier: 1, note: "Stores 50% more fuel." },
  { name: "Ember", tier: 1, note: "Sets the target on fire for 3s." },
  { name: "Rime", tier: 1, note: "Slows the target by 40% for 1.5s." },
  { name: "Cleaver", tier: 1, note: "Ignores armour. +50% damage to armoured raiders." },
  { name: "Prism", tier: 1, note: "Stuns the target for 0.5s." },
  { name: "Lance", tier: 1, note: "Every 5th shot hits the whole lane." },
  { name: "Mortar", tier: 1, note: "Hits everything next to the target." },
  { name: "Spark", tier: 1, note: "Stores double fuel." },
  { name: "Leech", tier: 2, note: "Gets double fuel back on every kill." },
  { name: "Lighthouse", tier: 2, note: "Hits 2 more raiders." },
  { name: "Pyre", tier: 2, note: "Sets the target on fire for 4s. Burns twice as hot." },
  { name: "Glacier", tier: 2, note: "Slows the target by 60% for 2.5s." },
  { name: "Breaker", tier: 2, note: "Ignores armour. Double damage to armoured raiders." },
  { name: "Spectrum", tier: 2, note: "Stuns the target for 1s." },
  { name: "Harpoon", tier: 2, note: "Every 4th shot hits the whole lane, at full power." },
  { name: "Howitzer", tier: 2, note: "Hits everything next to the target, harder." },
  { name: "Arcstorm", tier: 2, note: "Hits 3 more raiders, harder." },
  { name: "Apex", tier: 2, note: "Hits 3 more raiders at full power." },
];

/** The consumables - what the game calls the Kit. Notes are the in-game text. */
export const kit: { name: string; note: string; color: string }[] = [
  {
    name: "Firepot",
    note: "Bursts on the hill, burning every raider close to where it lands.",
    color: "var(--ember)",
  },
  {
    name: "Mending",
    note: "Pours into one ward and puts its stones back. It cannot raise a fallen one.",
    color: "var(--emerald)",
  },
  {
    name: "Surge",
    note: "Fills one ward with fuel, so it opens fire whatever colour you have matched.",
    color: "var(--cyan)",
  },
  {
    name: "Stormcall",
    note: "Lightning strikes every raider on the hill. It will not fell a boss.",
    color: "var(--violet)",
  },
];

/** Special gems that appear on the board. */
export const charms: { name: string; note: string }[] = [
  { name: "The Prism", note: "A rainbow gem. It counts as any colour you match it with." },
  { name: "The Lance", note: "Clears its whole row and column in one strike." },
  { name: "The Stormglass", note: "The entire turret line fires at everything on the hill." },
];

/** The nine regions of land a kingdom can grow across. */
export const lands = [
  "Hearthstead",
  "East Meadow",
  "West Hollow",
  "South Bank",
  "North Reach",
  "Sunrise Field",
  "Dusk Field",
  "Still Shore",
  "Far Terrace",
];

/** Thirty-one companions; Monarch is the one you start with. */
export const companions = [
  "Monarch",
  "Cinder",
  "Timber",
  "Sorrel",
  "Sprocket",
  "Peep",
  "Thistle",
  "Gourd",
  "Puff",
  "Clementine",
  "Plum",
  "Frond",
  "Button",
  "Shell",
  "Dewdrop",
  "Flit",
  "Toadstool",
  "Quill",
  "Olive",
  "Indigo",
  "Tadpole",
  "Pebble",
  "Saffron",
  "Coral",
  "Rust",
  "Fizz",
  "Marrow",
  "Bramble",
  "Wisp",
  "Boulder",
  "Thorn",
];

/** The league ladder on the public boards, lowest first. */
export const leagues = [
  "Saplings",
  "Thickets",
  "Hollows",
  "Meadows",
  "Orchards",
  "Sanctums",
  "Wildwoods",
  "Everglades",
  "The Elderwood",
];

/** Short, concrete answers. The full set lives on /support. */
export const faq: { q: string; a: string }[] = [
  {
    q: "Does it cost anything?",
    a: "No. Gemfire is free, and every level in it can be finished without spending anything. There are optional purchases of coins, gems and bigger heart flasks for people who want to build faster.",
  },
  {
    q: "Are there adverts?",
    a: "Only ones you choose. There are no adverts between levels and no banners. Every video in the game is one you tap to watch in exchange for hearts, coins or a hint, and you can finish the whole game without watching a single one.",
  },
  {
    q: "Do I need an account or a connection?",
    a: "Neither. Every level runs on your phone with no signal. An anonymous account keeps your save; sign in with Google or Apple only if you want it to survive a lost phone.",
  },
  {
    q: "Will it run on my phone?",
    a: "It needs Android 8.0 or iOS 15 and not much else. It is built for phones several years old and tested on them first.",
  },
  {
    q: "Is it safe for children?",
    a: "There is no chat, no messaging and no way for players to contact each other. The only things another player can ever see are the name and companion you chose and your kingdom's score, and you can hide all of that with one tap.",
  },
];

/** The stats strip. Deliberately verifiable: every number is in the game's content files. */
export const stats: { value: string; label: string; color: string }[] = [
  { value: "31", label: "hand-built battles", color: "var(--gold)" },
  { value: "20", label: "turrets to unlock", color: "var(--cyan)" },
  { value: "31", label: "companions to meet", color: "var(--emerald)" },
  { value: "0", label: "forced adverts", color: "var(--ruby)" },
];
