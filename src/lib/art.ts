/**
 * Intrinsic size of every piece of artwork in `public/art`.
 *
 * GENERATED - do not edit by hand. Rebuild with `npm run art`.
 *
 * The isometric scenes position pieces to the pixel, so they need each sprite's
 * real dimensions at module scope rather than after an image has loaded. Baking
 * them into the bundle also means every `<img>` can carry width and height and
 * reserve its own space, so a diorama never reflows as its tiles arrive.
 */

export const tiles = {
  "bloom": { w: 59, h: 58 },
  "bridge-a": { w: 339, h: 242 },
  "bridge-b": { w: 294, h: 309 },
  "bush-dry": { w: 66, h: 52 },
  "bush": { w: 99, h: 73 },
  "chest": { w: 146, h: 100 },
  "coin-bag": { w: 139, h: 108 },
  "coins": { w: 161, h: 158 },
  "duskcap": { w: 77, h: 68 },
  "flag": { w: 160, h: 129 },
  "flower-pink": { w: 63, h: 71 },
  "flower-white": { w: 62, h: 70 },
  "grass-a": { w: 270, h: 243 },
  "grass-b": { w: 270, h: 242 },
  "grass-c": { w: 269, h: 201 },
  "grass-d": { w: 270, h: 202 },
  "grass-e": { w: 270, h: 243 },
  "ladder": { w: 83, h: 384 },
  "logs": { w: 258, h: 163 },
  "monolith": { w: 55, h: 97 },
  "pebble": { w: 50, h: 30 },
  "pin-heart": { w: 89, h: 110 },
  "pine-a": { w: 195, h: 313 },
  "pine-b": { w: 157, h: 253 },
  "pond-deep": { w: 270, h: 202 },
  "pond": { w: 270, h: 202 },
  "post": { w: 43, h: 88 },
  "sign-left": { w: 87, h: 161 },
  "sign-right": { w: 87, h: 161 },
  "sign-skull": { w: 87, h: 162 },
  "sign-up": { w: 87, h: 162 },
  "soil": { w: 270, h: 202 },
  "sprout": { w: 79, h: 34 },
  "stone": { w: 68, h: 40 },
  "stones": { w: 82, h: 41 },
  "stump": { w: 42, h: 69 },
  "tent": { w: 321, h: 309 },
  "tree": { w: 115, h: 201 },
  "water-a": { w: 270, h: 242 },
  "water-b": { w: 270, h: 202 },
  "water-flat": { w: 270, h: 242 },
  "water-rock": { w: 270, h: 202 },
  "water-stone": { w: 270, h: 202 },
} as const;

export type TileArt = keyof typeof tiles;

export const icons = {
  "aura": { w: 128, h: 128 },
  "chest": { w: 128, h: 113 },
  "coin": { w: 119, h: 128 },
  "gem": { w: 128, h: 116 },
  "gold-bag": { w: 108, h: 128 },
  "heart": { w: 128, h: 121 },
  "leaf": { w: 114, h: 128 },
  "magic": { w: 101, h: 128 },
  "potion": { w: 100, h: 128 },
  "shield": { w: 123, h: 128 },
  "star-gem": { w: 115, h: 128 },
  "water-gem": { w: 115, h: 128 },
} as const;

export type IconArt = keyof typeof icons;

export const levels = {
  "off-1": { w: 188, h: 141 },
  "off-10": { w: 188, h: 141 },
  "off-2": { w: 188, h: 141 },
  "off-3": { w: 188, h: 141 },
  "off-4": { w: 188, h: 141 },
  "off-5": { w: 188, h: 141 },
  "off-6": { w: 188, h: 141 },
  "off-7": { w: 188, h: 141 },
  "off-8": { w: 188, h: 141 },
  "off-9": { w: 188, h: 141 },
  "on-1": { w: 188, h: 141 },
  "on-10": { w: 188, h: 141 },
  "on-2": { w: 188, h: 141 },
  "on-3": { w: 188, h: 141 },
  "on-4": { w: 188, h: 141 },
  "on-5": { w: 188, h: 141 },
  "on-6": { w: 188, h: 141 },
  "on-7": { w: 188, h: 141 },
  "on-8": { w: 188, h: 141 },
  "on-9": { w: 188, h: 141 },
} as const;

export type LevelArt = keyof typeof levels;

/** Path to a piece of tile artwork. */
export function tileSrc(name: TileArt) {
  return `/art/tiles/${name}.webp`;
}
