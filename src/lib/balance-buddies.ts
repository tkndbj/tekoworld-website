/**
 * The shape of the Balance Buddies page: which screenshots, contraptions and promises it
 * shows, in what order and in what colour. No words live here; they are in the
 * dictionaries under `balanceBuddies`, keyed by the ids below, so an id added here and
 * missing from a language fails the build.
 *
 * Every number is the game's own (LevelCatalog, HintEconomy, MonetizationConfig in the
 * game repository). Change them together with the game.
 */
import shot1 from "../../public/balance-buddies/shot-1.webp";
import shot2 from "../../public/balance-buddies/shot-2.webp";
import shot3 from "../../public/balance-buddies/shot-3.webp";
import shot4 from "../../public/balance-buddies/shot-4.webp";
import shot5 from "../../public/balance-buddies/shot-5.webp";
import shot6 from "../../public/balance-buddies/shot-6.webp";
import shot7 from "../../public/balance-buddies/shot-7.webp";

/** The store screenshots, in listing order (shot-N.webp, built by scripts/build-bb-images.py). */
export const shots = {
  firstSwing: shot1,
  littleBuilder: shot2,
  ferrisWheel: shot3,
  lazyRaft: shot4,
  springy: shot5,
  heavyMetal: shot6,
  upAndAway: shot7,
} as const;

/** Levels in the catalogue at launch. */
export const levelCount = 43;

/** The hero's stats strip; labels are `balanceBuddies.hero.stats`, in this order. */
export const stats = [
  { value: String(levelCount), color: "var(--bb-sun)" },
  { value: "6", color: "var(--bb-sky)" },
  { value: "10", color: "var(--bb-mint)" },
  { value: "0", color: "var(--bb-pink)" },
] as const;

export const steps = [
  { id: "drag", n: "01", color: "var(--bb-sun)", image: shots.littleBuilder },
  { id: "balance", n: "02", color: "var(--bb-sky)", image: shots.firstSwing },
  { id: "settle", n: "03", color: "var(--bb-mint)", image: shots.springy },
] as const;

export const contraptions = [
  { id: "mobile", color: "var(--bb-sun)", image: shots.firstSwing },
  { id: "seesaw", color: "var(--bb-pink)", image: shots.heavyMetal },
  { id: "wheel", color: "var(--violet)", image: shots.ferrisWheel },
  { id: "spring", color: "var(--bb-mint)", image: shots.springy },
  { id: "raft", color: "var(--bb-sky)", image: shots.lazyRaft },
  { id: "balloon", color: "var(--cyan)", image: shots.upAndAway },
] as const;

export const promises = [
  { id: "timers", color: "var(--bb-mint)" },
  { id: "real", color: "var(--bb-sky)" },
  { id: "ads", color: "var(--bb-pink)" },
  { id: "offline", color: "var(--cyan)" },
  { id: "save", color: "var(--bb-sun)" },
  { id: "sound", color: "var(--violet)" },
] as const;
