import { critters } from "@/lib/content";
import { groveCritters, groveScene } from "@/lib/scenes";
import { Scene } from "@/components/iso/Scene";
import { isoCenter, isoDepth, pct } from "@/components/iso/Iso";
import { Fireflies } from "@/components/ui/Fireflies";
import { CritterSprite } from "@/components/ui/Critter";

const byId = new Map(critters.map((c) => [c.id, c]));

const POINTS = [
  {
    title: "Buy the land",
    body: "Coins from finished glades buy tiles. Tiles are the only thing that is ever really scarce, so where you spend them is the first real decision the game asks you to make.",
  },
  {
    title: "Put things where you want them",
    body: "Nothing snaps to a plan. Tents, plots, lanterns and paths go wherever you drop them, and can be picked up again for nothing.",
  },
  {
    title: "Let them move in",
    body: "Companions you wake wander the grove on their own. They have opinions about where they like to stand, and they are not shy about it.",
  },
];

export function Grove() {
  const { origin, w: SW, h: SH } = groveScene;

  return (
    <section id="grove" className="reveal relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 40%, color-mix(in srgb, var(--grass) 12%, transparent) 0%, transparent 72%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-line bg-panel px-4 py-1.5 text-sm font-bold text-ink-2">
              <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-grass" />
              Between the puzzles
            </p>
            <h2 className="text-3xl sm:text-4xl">A grove of your own</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-2">
              The puzzles are the same for everyone. The grove is not. It is the
              one part of the game two players at identical progress will never
              share.
            </p>

            <ol className="mt-8 space-y-5">
              {POINTS.map((point, i) => (
                <li key={point.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 border-grass-d bg-grass font-display text-sm font-extrabold text-[#17300b]">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div aria-hidden className="relative -mx-3 sm:mx-0">
            <Fireflies />
            <Scene scene={groveScene}>
              {groveCritters.map((g) => {
                const critter = byId.get(g.id);
                if (!critter) return null;
                const at = isoCenter(g.r, g.c);
                const h = 150 * g.scale;
                const w = h * (critter.w / critter.h);
                return (
                  <span
                    key={g.id}
                    className="iso-piece"
                    style={{
                      left: pct(origin.x + at.x - w / 2 + g.dx, SW),
                      top: pct(origin.y + at.y - h + g.dy, SH),
                      width: pct(w, SW),
                      height: pct(h, SH),
                      zIndex: isoDepth(g.r, g.c, 5),
                    }}
                  >
                    <span className="anim-bob block h-full w-full">
                      <CritterSprite critter={critter} height="100%" />
                    </span>
                  </span>
                );
              })}
            </Scene>
          </div>
        </div>
      </div>
    </section>
  );
}
