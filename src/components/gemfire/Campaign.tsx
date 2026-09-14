import { chapters, endless } from "@/lib/content";

/**
 * The campaign: three chapters of ten and the endless mode. Each chapter card
 * lists its ten level names - the names are the best copy in the game and
 * cost nothing to show.
 */
export function Campaign() {
  return (
    <section id="campaign" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="grid-floor opacity-50" />
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "0%", "--y": "60%", "--c": "var(--ruby)", "--s": "50rem" } as React.CSSProperties}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">The campaign</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Three fronts. <span className="text-fire">Then the long night.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-2">
            Thirty hand-built sieges across three chapters, each with its own
            enemy and its own boss at the gate. Beside them stands the Endless
            Watch: waves without end, and a place on the boards for how long you
            held.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {chapters.map((c, i) => (
            <li
              key={c.id}
              className="reveal panel card flex flex-col p-6"
              style={{ "--delay": `${i * 90}ms`, "--glow": c.color } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="kicker" style={{ color: c.color }}>
                  Chapter {i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">
                  {c.levels.length} sieges
                </span>
              </div>
              <h3 className="mt-4 text-3xl">{c.name}</h3>
              <p className="mt-2 italic text-ink-2">{c.tagline}</p>

              <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ink-2">
                {c.levels.map((l, n) => (
                  <li key={l} className="flex gap-2">
                    <span className="font-display w-5 shrink-0 text-xs text-ink-3" aria-hidden>
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <span className={n === c.levels.length - 1 ? "font-semibold text-ink" : ""}>
                      {l}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-auto pt-6">
                <div className="rule" />
                <p className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-ink-3">At the gate</span>
                  <span
                    className="font-display font-semibold uppercase tracking-[0.14em]"
                    style={{ color: c.color, textShadow: `0 0 16px ${c.color}` }}
                  >
                    {c.boss}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div
          className="reveal panel panel-glow relative mt-6 overflow-hidden p-6 sm:p-8"
          style={{ "--delay": "280ms" } as React.CSSProperties}
        >
          <div
            aria-hidden
            className="orb"
            style={{ "--x": "90%", "--y": "50%", "--c": endless.color, "--s": "36rem" } as React.CSSProperties}
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="kicker" style={{ color: endless.color }}>
                Infinite track
              </span>
              <h3 className="mt-3 text-3xl">{endless.name}</h3>
              <p className="mt-2 max-w-lg text-ink-2">{endless.tagline}</p>
            </div>
            <ul className="grid shrink-0 gap-2 text-sm text-ink-2 sm:text-right">
              <li>The fight never stops.</li>
              <li>Enemies get harder every wave.</li>
              <li>Earn your spot on the boards.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
