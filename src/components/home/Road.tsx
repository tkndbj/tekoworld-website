import { levels as levelArt } from "@/lib/art";
import { pct } from "@/components/iso/Iso";

/* eslint-disable @next/next/no-img-element */

/**
 * The road through the grove.
 *
 * Ten numbered tiles on a gentle wave, the first few lit and the rest still
 * locked, with a dashed track threaded behind them.
 *
 * A road is a wide thing, and squeezing ten tiles into a phone's width leaves
 * them the size of a full stop. So below its natural width the road scrolls
 * sideways inside its own frame rather than shrinking - the section keeps its
 * shape, and the page never scrolls sideways with it.
 */

const STAGE_W = 1240;
const STAGE_H = 380;
const TILE_W = 150;

const STOPS = [
  { n: 1, biome: "Meadow" },
  { n: 2, biome: "Meadow" },
  { n: 3, biome: "Old wood" },
  { n: 4, biome: "Old wood" },
  { n: 5, biome: "Marsh" },
  { n: 6, biome: "Marsh" },
  { n: 7, biome: "Quarry" },
  { n: 8, biome: "Quarry" },
  { n: 9, biome: "Frost" },
  { n: 10, biome: "Deep dark" },
] as const;

/** How far a new player gets before the glades stop being polite. */
const UNLOCKED = 4;

const BIOMES = STOPS.map((s) => s.biome).filter(
  (b, i, all) => all.indexOf(b) === i
);

function stopAt(i: number) {
  return {
    x: 86 + i * ((STAGE_W - 176) / (STOPS.length - 1)),
    y: 168 + Math.sin(i * 0.86 + 0.4) * 62,
  };
}

export function Road() {
  const art = levelArt["on-1"];
  const tileH = art.h * (TILE_W / art.w);

  const track = STOPS.map((_, i) => {
    const p = stopAt(i);
    return `${i === 0 ? "M" : "L"}${p.x.toFixed(1)} ${(p.y + 34).toFixed(1)}`;
  }).join(" ");

  return (
    <section className="reveal mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl">One road, {BIOMES.length} biomes</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">
          The glades run from an easy meadow out to the frost, and each biome
          brings a new thing that light has to get around. You will meet brittle
          stone long before you meet the cold.
        </p>
      </div>

      <div className="slab overflow-hidden p-4 sm:p-6">
        {/* A scroll container that only a mouse can reach is a trap for anyone
            navigating by keyboard, so it takes focus and can be panned with the
            arrow keys like any other scrollable region. */}
        <div
          tabIndex={0}
          role="group"
          aria-label="The road through the glades - scroll sideways to follow it"
          className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0"
        >
          <div className="min-w-[54rem]">
            <div
              className="iso-stage"
              style={{ aspectRatio: `${STAGE_W} / ${STAGE_H}` }}
              role="img"
              aria-label={`A road of ${STOPS.length} numbered glades winding through ${BIOMES.length} biomes: ${BIOMES.join(
                ", "
              )}. The first ${UNLOCKED} are unlocked.`}
            >
              <div className="iso-inner">
                <svg
                  viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <path
                    d={track}
                    fill="none"
                    stroke="var(--line-2)"
                    strokeWidth={9}
                    strokeLinecap="round"
                    strokeDasharray="1 24"
                  />
                </svg>

                {STOPS.map((stop, i) => {
                  const { x, y } = stopAt(i);
                  const open = stop.n <= UNLOCKED;
                  // Only the first glade of a run carries the biome's name;
                  // repeating it under every tile is just a wall of text.
                  const firstOfBiome =
                    i === 0 || STOPS[i - 1].biome !== stop.biome;
                  return (
                    <div
                      key={stop.n}
                      className="absolute"
                      style={{
                        left: pct(x - TILE_W / 2, STAGE_W),
                        top: pct(y - tileH / 2, STAGE_H),
                        width: pct(TILE_W, STAGE_W),
                        zIndex: i,
                      }}
                    >
                      <img
                        src={`/art/levels/${open ? "on" : "off"}-${stop.n}.webp`}
                        alt=""
                        width={art.w}
                        height={art.h}
                        loading="lazy"
                        decoding="async"
                        className={open ? "anim-bob w-full" : "w-full"}
                        style={{ animationDelay: `${(i % 4) * 0.45}s` }}
                      />
                      {firstOfBiome && (
                        <p className="iso-label mt-1 whitespace-nowrap text-center font-display font-extrabold text-ink-2">
                          {stop.biome}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-ink-3">
          Glades {UNLOCKED + 1} and on are still asleep. There are 120 of them in
          the finished game.
        </p>
      </div>
    </section>
  );
}
