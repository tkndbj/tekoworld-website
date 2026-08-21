/**
 * The words and the cast.
 *
 * Marketing copy has a way of drifting apart from the game it describes once it
 * is scattered across six components, so all of it lives here — one list per
 * section, each entry naming the artwork it is drawn with.
 */

/** Every companion ships as one horizontal strip of idle frames. */
export type Critter = {
  id: string;
  name: string;
  title: string;
  blurb: string;
  /** Frames in the strip — drives the `steps()` timing function. */
  frames: number;
  /** Size of a single frame, which is also the element's intrinsic size. */
  w: number;
  h: number;
  tint: string;
};

export const critters: Critter[] = [
  {
    id: "moss",
    name: "Moss",
    title: "the first to wake",
    blurb:
      "Sleeps in the shallow end of every starting glade. Wakes on the second puzzle you finish and never quite leaves again.",
    frames: 18,
    w: 121,
    h: 150,
    tint: "var(--grass)",
  },
  {
    id: "pip",
    name: "Pip",
    title: "keeper of small change",
    blurb:
      "Turns up whenever a chest does. Insists on carrying the coins home himself, which is slower, but he is very proud of it.",
    frames: 18,
    w: 120,
    h: 150,
    tint: "var(--glimmer)",
  },
  {
    id: "blink",
    name: "Blink",
    title: "sees in the dark",
    blurb:
      "Found in glades where the light has to cross itself to get anywhere. Blinks once per solution, which is how you know you were close.",
    frames: 18,
    w: 106,
    h: 150,
    tint: "var(--berry)",
  },
  {
    id: "cap",
    name: "Cap",
    title: "grew where it was damp",
    blurb:
      "A duskcap that woke up and decided it would rather walk. Prefers the swamp glades and will lead you to the brittle stone.",
    frames: 18,
    w: 141,
    h: 150,
    tint: "var(--plum)",
  },
  {
    id: "tuffle",
    name: "Tuffle",
    title: "very loud, very small",
    blurb:
      "Answers to nobody. Sits on the tallest tile in your grove and shouts at the weather until somebody brings him a meal.",
    frames: 18,
    w: 164,
    h: 150,
    tint: "var(--water)",
  },
  {
    id: "yolk",
    name: "Yolk",
    title: "the late riser",
    blurb:
      "Sleeps through the first forty glades. Wakes for the winter ones, then complains about the cold for the rest of the run.",
    frames: 20,
    w: 198,
    h: 150,
    tint: "var(--glimmer)",
  },
];

export type Feature = {
  icon: string;
  title: string;
  body: string;
  accent: string;
};

export const features: Feature[] = [
  {
    icon: "gem",
    title: "One verb, a hundred questions",
    body:
      "Every glade asks the same thing — turn a piece, carry the light — and no two ask it the same way. Brittle stone, bound roots, sleeping duskcaps, and crossings that thread two flows through a single tile.",
    accent: "var(--plum)",
  },
  {
    icon: "leaf",
    title: "Not one forced advert",
    body:
      "Never an advert between levels. Every video in the game is one you chose to watch in exchange for something, and the whole thing can be finished start to end without seeing a single one.",
    accent: "var(--grass)",
  },
  {
    icon: "chest",
    title: "A grove of your own",
    body:
      "Earn companions, buy land, and arrange a village across a field of tiles. It is the one part of the game two players at identical progress will never share.",
    accent: "var(--wood)",
  },
  {
    icon: "water-gem",
    title: "Works with no signal",
    body:
      "Every puzzle runs on your device with the aeroplane mode on. Sign in only if you want your grove to survive a lost phone.",
    accent: "var(--water)",
  },
];

/** Short, concrete answers. The full set lives on /support. */
export const faq: { q: string; a: string }[] = [
  {
    q: "Does it cost anything?",
    a: "No. Glimmer Groove is free, and every glade in it can be reached without spending a penny. There are optional purchases for people who want to decorate faster.",
  },
  {
    q: "Do I need an account?",
    a: "Only if you want to. Puzzles, progress and your grove all work signed out. Signing in exists so that a lost or replaced phone does not cost you the grove you built.",
  },
  {
    q: "Will it run on my phone?",
    a: "It is built for phones several years old and does not need a connection to play. If a glade ever runs badly on your device, tell us which one — that is a bug, not a spec.",
  },
  {
    q: "Is it safe for children?",
    a: "There is no chat, no player-to-player contact and no user content of any kind. Adverts are opt-in only and can be switched off entirely by anyone who prefers that.",
  },
];

/**
 * The stats strip under the hero. Deliberately verifiable claims — a number a
 * player can check for themselves is worth more than an adjective.
 */
export const stats: { value: string; label: string }[] = [
  { value: "120+", label: "hand-built glades" },
  { value: "6", label: "biomes to wake" },
  { value: "0", label: "forced adverts" },
  { value: "∞", label: "ways to lay out a grove" },
];
