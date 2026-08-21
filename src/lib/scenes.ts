import type { TileArt } from "@/lib/art";

/**
 * The dioramas, as data.
 *
 * Every scene on the site is a list of sprites placed on the game's own
 * isometric lattice. Keeping them as plain data rather than as JSX means a
 * scene can be composited offline and looked at as an image before it ships —
 * arranging forty overlapping sprites by guesswork and a dev server reload is
 * not a good use of anybody's afternoon.
 *
 * `r`/`c` are lattice coordinates; `dx`/`dy` nudge in stage pixels afterwards.
 */

export type Piece = {
  /**
   * A tile is centred on its lattice point, a prop stands on top of one, and a
   * float ignores the lattice entirely — it is a distant glade drifting past,
   * positioned by eye in stage pixels because it belongs to no grid.
   */
  kind: "tile" | "prop" | "float";
  art: TileArt;
  r: number;
  c: number;
  /** Stage-pixel top-left, for floats only. */
  x?: number;
  y?: number;
  dx?: number;
  dy?: number;
  scale?: number;
  /** Ordering within a single cell. */
  layer?: number;
  flip?: boolean;
  className?: string;
};

export type Scene = {
  w: number;
  h: number;
  origin: { x: number; y: number };
  pieces: Piece[];
};

const t = (art: TileArt, r: number, c: number, rest: Partial<Piece> = {}): Piece => ({
  kind: "tile",
  art,
  r,
  c,
  ...rest,
});

const p = (art: TileArt, r: number, c: number, rest: Partial<Piece> = {}): Piece => ({
  kind: "prop",
  art,
  r,
  c,
  layer: 2,
  ...rest,
});

/** A glade adrift, placed in stage pixels. `z` is the raw stacking order. */
const f = (
  art: TileArt,
  x: number,
  y: number,
  scale: number,
  z: number
): Piece => ({
  kind: "float",
  art,
  r: 0,
  c: 0,
  x,
  y,
  scale,
  layer: z,
  className: "anim-bob",
});

/* -------------------------------------------------------------------------
   Hero — a single glade adrift, with somewhere to sleep and something to find.
   ------------------------------------------------------------------------- */

export const heroScene: Scene = {
  w: 1120,
  h: 1000,
  origin: { x: 560, y: 372 },
  pieces: [
    // ground, back to front
    t("grass-a", 0, 0),
    t("grass-b", 0, 1),
    t("grass-e", 0, 2),
    t("grass-a", 0, 3),

    t("grass-e", 1, 0),
    t("grass-a", 1, 1),
    t("pond", 1, 2),
    t("grass-b", 1, 3),

    t("grass-b", 2, 0),
    t("grass-e", 2, 1),
    t("grass-a", 2, 2),
    t("grass-e", 2, 3),

    t("grass-a", 3, 0),
    t("grass-b", 3, 1),
    t("grass-e", 3, 2),
    t("grass-b", 3, 3),

    // the treeline sits at the back so nothing important hides behind it
    p("pine-a", 0, 0, { scale: 0.95, dx: -8, className: "anim-sway" }),
    p("tree", 0, 1, { scale: 0.85, dx: 14, className: "anim-sway" }),
    p("pine-b", 0, 3, { scale: 0.9, dx: 10, className: "anim-sway" }),
    p("pine-b", 1, 0, { scale: 0.8, dx: -30, dy: 6 }),

    // camp
    p("tent", 2, 0, { scale: 0.72, dx: -6 }),
    p("logs", 3, 0, { scale: 0.5, dx: 24, dy: -4 }),

    // pond edge
    p("stones", 1, 1, { scale: 0.9, dx: 46, dy: -6 }),
    p("bush", 0, 2, { scale: 0.8, dx: 44, dy: -2 }),

    // the far corner: something worth walking to
    p("chest", 2, 3, { scale: 0.78, dx: 34, dy: 2 }),
    p("bush-dry", 1, 3, { scale: 0.9, dx: 44, dy: 6 }),

    // near edge, small stuff at the player's feet
    p("sign-right", 3, 2, { scale: 0.72, dx: 52, dy: 4 }),
    p("flower-pink", 3, 1, { scale: 0.85, dx: -34, dy: -2 }),
    p("flower-white", 3, 1, { scale: 0.75, dx: 8, dy: 6 }),
    p("sprout", 3, 2, { scale: 0.9, dx: -48, dy: 6 }),
    p("duskcap", 2, 1, { scale: 0.85, dx: 46, dy: 16 }),
    p("pebble", 3, 3, { scale: 1, dx: -30, dy: 4 }),
    p("bloom", 3, 3, { scale: 0.8, dx: 36, dy: -2 }),
    p("stump", 2, 1, { scale: 0.9, dx: -52, dy: 8 }),
    p("post", 3, 0, { scale: 1, dx: 56, dy: 6 }),

    // Distant glades adrift in the corners the island itself cannot reach.
    // Small and high sits far away and draws behind; large and low drifts past
    // in front, which is the only depth cue a flat scene like this gets.
    f("grass-a", 34, 150, 0.26, -5),
    f("grass-a", 1012, 128, 0.22, -5),
    f("grass-a", 42, 812, 0.44, 900),
    f("grass-a", 962, 858, 0.32, 900),
  ],
};

/** Where the hero's companion stands, and where the coins hang over the pond. */
export const heroAnchors = {
  critter: { r: 2, c: 2, dx: 4, dy: -2 },
  coins: { r: 1, c: 2, dx: 0, dy: -96 },
  glow: { r: 2, c: 2, dx: 4, dy: -70 },
};

/* -------------------------------------------------------------------------
   The grove — the village the player lays out for themselves.
   ------------------------------------------------------------------------- */

export const groveScene: Scene = {
  w: 1360,
  h: 1000,
  origin: { x: 620, y: 330 },
  pieces: [
    t("grass-a", 0, 0),
    t("grass-b", 0, 1),
    t("grass-e", 0, 2),
    t("grass-a", 0, 3),
    t("grass-b", 0, 4),

    t("grass-e", 1, 0),
    t("grass-a", 1, 1),
    t("grass-a", 1, 2),
    t("grass-e", 1, 3),
    t("water-a", 1, 4),

    t("grass-b", 2, 0),
    t("soil", 2, 1),
    t("grass-e", 2, 2),
    t("water-a", 2, 3),
    t("water-a", 2, 4),

    t("grass-a", 3, 0),
    t("soil", 3, 1),
    t("grass-b", 3, 2),
    t("grass-e", 3, 3),
    t("grass-a", 3, 4),

    // treeline along the back edge
    p("pine-a", 0, 0, { scale: 0.9, dx: -10, className: "anim-sway" }),
    p("pine-b", 0, 2, { scale: 0.85, dx: 18 }),
    p("tree", 0, 4, { scale: 0.9, dx: 14, className: "anim-sway" }),
    p("pine-b", 1, 0, { scale: 0.72, dx: -36, dy: 8 }),
    p("monolith", 0, 3, { scale: 0.9, dx: 44, dy: -2 }),

    // home
    p("tent", 1, 2, { scale: 0.66, dx: -28, dy: -4 }),
    p("flag", 1, 2, { scale: 0.58, dx: 62, dy: -8 }),

    // the stores, kept next to the house
    p("chest", 1, 1, { scale: 0.68, dx: -6, dy: 4 }),
    p("coin-bag", 1, 1, { scale: 0.58, dx: -74, dy: 16 }),

    // two worked plots: one planted, one in flower
    p("sprout", 2, 1, { scale: 1, dx: -34, dy: -12 }),
    p("sprout", 2, 1, { scale: 0.9, dx: 32, dy: 4 }),
    p("flower-pink", 2, 1, { scale: 0.68, dx: 2, dy: -6 }),
    p("flower-white", 3, 1, { scale: 0.8, dx: -34, dy: -4 }),
    p("flower-pink", 3, 1, { scale: 0.72, dx: 30, dy: 4 }),
    p("bloom", 3, 1, { scale: 0.7, dx: -2, dy: 10 }),

    // the lake shore
    p("stones", 2, 3, { scale: 0.9, dx: -62, dy: -2 }),
    p("bush", 3, 3, { scale: 0.8, dx: 34, dy: -2 }),
    p("bush-dry", 3, 4, { scale: 0.9, dx: -18, dy: 2 }),
    p("duskcap", 3, 3, { scale: 0.8, dx: -44, dy: 6 }),

    // paths
    p("sign-up", 3, 0, { scale: 0.68, dx: 40, dy: 2 }),
    p("sign-left", 1, 3, { scale: 0.66, dx: 46, dy: 4 }),
    p("logs", 2, 0, { scale: 0.55, dx: 14, dy: 2 }),
    p("stump", 3, 0, { scale: 0.85, dx: -40, dy: 8 }),
    p("post", 3, 2, { scale: 1, dx: -54, dy: 4 }),
    p("pebble", 3, 3, { scale: 1, dx: -76, dy: 12 }),

    // outlying land, still to be bought
    f("grass-a", 44, 176, 0.26, -5),
    f("grass-a", 1226, 146, 0.22, -5),
    f("grass-a", 66, 836, 0.4, 900),
    f("grass-a", 1188, 806, 0.34, 900),
  ],
};

/** Companions dotted around the grove, keyed to the roster in content.ts. */
export const groveCritters = [
  { id: "moss", r: 2, c: 2, dx: -10, dy: -4, scale: 0.62 },
  { id: "pip", r: 3, c: 2, dx: 54, dy: -2, scale: 0.55 },
  { id: "tuffle", r: 1, c: 3, dx: -22, dy: -6, scale: 0.5 },
] as const;
