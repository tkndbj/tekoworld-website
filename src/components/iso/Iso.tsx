import { tiles, type TileArt } from "@/lib/art";

/* eslint-disable @next/next/no-img-element */
/*
 * A diorama is fifty transparent sprites already exported at the exact size
 * they are drawn, laid out to the pixel and then scaled as one unit. Routing
 * them through next/image would add fifty optimiser requests and a srcset per
 * sprite to arrive at the same bytes, so these are plain <img> on purpose.
 */

/*
 * Isometric geometry
 * ------------------
 * The tileset is drawn on a 2:1 lattice: a ground tile is 270px wide and its
 * top face is exactly half that tall. Every sprite is trimmed to its own
 * bounding box, so the one landmark they all share is the top vertex of the
 * tile at y = 0 - which puts the centre of a top face at a quarter of the tile
 * width below it. All placement is measured from there.
 */
export const TILE_W = 270;
const QUARTER = TILE_W / 4;

/** Centre of the top face of the tile at grid position (r, c), in stage pixels. */
export function isoCenter(r: number, c: number) {
  return { x: (c - r) * (TILE_W / 2), y: (c + r) * QUARTER };
}

/**
 * Painter's order. Tiles further from the viewer must be drawn first, and on
 * this lattice "further" is simply a smaller r + c. The multiplier leaves room
 * for props to stack above the tile they stand on without overlapping the row
 * in front.
 */
export function isoDepth(r: number, c: number, layer = 0) {
  return Math.round((r + c) * 10 + layer);
}

/** The pixel size a scene was authored at. Every position is a fraction of it. */
export type Stage = { w: number; h: number };

/*
 * Scenes are composed in pixels and rendered as percentages.
 *
 * The obvious approach - lay a scene out at its natural size and shrink it with
 * `transform: scale()` - cannot be driven by the container's own width in plain
 * CSS, because `scale()` takes a number and a container width is a length.
 * Percentages need no such trick: the stage holds its aspect ratio, so a sprite
 * at 42% across and 18% wide lands in the same place at any size, in any
 * browser, with no script, no resize observer and no reflow.
 */
export function pct(value: number, total: number) {
  return `${(value / total) * 100}%`;
}

/** Grid (0,0) sits at the stage's own origin unless a piece says otherwise. */
const ORIGIN = { x: 0, y: 0 };

export function IsoStage({
  w,
  h,
  children,
  className = "",
}: {
  w: number;
  h: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`iso-stage ${className}`}
      style={{ aspectRatio: `${w} / ${h}` }}
    >
      <div className="iso-inner">{children}</div>
    </div>
  );
}

type PieceProps = {
  art: TileArt;
  /** The size the scene was authored at, which the percentages are taken from. */
  stage: Stage;
  /** Grid position. */
  r: number;
  c: number;
  /** Stage-pixel offset applied after the grid position. */
  dx?: number;
  dy?: number;
  /** Tie-break within a cell: props sit above the ground they stand on. */
  layer?: number;
  /** Scale the sprite about its anchor. */
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
  alt?: string;
  origin?: { x: number; y: number };
  /** Above the fold: load immediately instead of waiting for the viewport. */
  eager?: boolean;
};

/**
 * A ground tile: its top face is centred on the lattice point, so tiles laid on
 * neighbouring (r, c) interlock exactly the way they do in the game.
 */
export function IsoTile({
  art,
  stage,
  r,
  c,
  dx = 0,
  dy = 0,
  layer = 0,
  scale = 1,
  className = "",
  style,
  origin = ORIGIN,
  alt = "",
  eager = false,
}: PieceProps) {
  const { w, h } = tiles[art];
  const { x, y } = isoCenter(r, c);
  const sw = w * scale;
  const sh = h * scale;
  return (
    <img
      src={`/art/tiles/${art}.webp`}
      alt={alt}
      width={w}
      height={h}
      draggable={false}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`iso-piece ${className}`}
      style={{
        // Scaling keeps the centre of the top face pinned to the lattice point,
        // so a shrunken tile reads as a distant island rather than a slipped one.
        left: pct(origin.x + x - sw / 2 + dx, stage.w),
        top: pct(origin.y + y - QUARTER * scale + dy, stage.h),
        width: pct(sw, stage.w),
        height: pct(sh, stage.h),
        zIndex: isoDepth(r, c, layer),
        ...style,
      }}
    />
  );
}

/**
 * Anything standing on a tile - a tree, a tent, a chest. Anchored by the middle
 * of its base to the centre of the top face, which is how these sprites are
 * drawn, so a tree planted on (2,3) looks planted rather than pasted.
 */
export function IsoProp({
  art,
  stage,
  r,
  c,
  dx = 0,
  dy = 0,
  layer = 1,
  scale = 1,
  className = "",
  style,
  flip = false,
  origin = ORIGIN,
  alt = "",
  eager = false,
}: PieceProps) {
  const { w, h } = tiles[art];
  const { x, y } = isoCenter(r, c);
  const sw = w * scale;
  const sh = h * scale;
  return (
    <img
      src={`/art/tiles/${art}.webp`}
      alt={alt}
      width={w}
      height={h}
      draggable={false}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`iso-piece ${className}`}
      style={{
        left: pct(origin.x + x - sw / 2 + dx, stage.w),
        top: pct(origin.y + y - sh + dy, stage.h),
        width: pct(sw, stage.w),
        height: pct(sh, stage.h),
        transform: flip ? "scaleX(-1)" : undefined,
        zIndex: isoDepth(r, c, layer),
        ...style,
      }}
    />
  );
}

/**
 * A sprite that is not on the lattice at all - placed in stage pixels, with its
 * stacking order given outright rather than derived from a grid position.
 */
export function IsoFloat({
  art,
  stage,
  x,
  y,
  scale = 1,
  z = 0,
  className = "",
}: {
  art: TileArt;
  stage: Stage;
  x: number;
  y: number;
  scale?: number;
  z?: number;
  className?: string;
}) {
  const { w, h } = tiles[art];
  return (
    <img
      src={`/art/tiles/${art}.webp`}
      alt=""
      width={w}
      height={h}
      draggable={false}
      loading="lazy"
      decoding="async"
      className={`iso-piece ${className}`}
      style={{
        left: pct(x, stage.w),
        top: pct(y, stage.h),
        width: pct(w * scale, stage.w),
        height: pct(h * scale, stage.h),
        zIndex: z,
      }}
    />
  );
}
