import { critters } from "@/lib/content";
import { CritterSprite } from "@/components/ui/Critter";

export function Companions() {
  return (
    <section
      id="companions"
      className="reveal relative overflow-hidden border-y-2 border-line bg-panel-2 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-line bg-panel px-4 py-1.5 text-sm font-bold text-ink-2">
            <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-berry" />
            The ones you wake
          </p>
          <h2 className="text-3xl sm:text-4xl">Six of them, so far</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            Every glade has somebody asleep in it. Finish the puzzle and they
            follow you home, where they will make themselves comfortable and
            offer no help whatsoever.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {critters.map((c) => (
            <li
              key={c.id}
              className="slab slab-lift flex flex-col items-center p-6 text-center"
            >
              <div
                className="mb-1 flex h-[8.5rem] w-full items-end justify-center rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 86%, color-mix(in srgb, ${c.tint} 26%, transparent) 0%, transparent 68%)`,
                }}
              >
                <span className="anim-bob block">
                  <CritterSprite critter={c} height="7.5rem" />
                </span>
              </div>
              <h3 className="text-xl">{c.name}</h3>
              <p className="mt-0.5 text-sm font-bold uppercase tracking-wide text-ink-3">
                {c.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{c.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
