import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";
import { chapters, endlessColor } from "@/lib/content";

/**
 * The campaign: three chapters of ten and the endless mode. Each chapter card
 * lists its ten level names - the names are the best copy in the game and
 * cost nothing to show.
 */
export async function Campaign() {
  const { locale, t, game } = await getText();
  const c = t.gemfire.campaign;
  const endless = { ...game.endless, color: endlessColor };

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
          <p className="kicker">{c.kicker}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            <Rich value={c.title} locale={locale} hl="text-fire" />
          </h2>
          <p className="mt-5 text-lg text-ink-2">{c.body}</p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {chapters.map((ch, i) => {
            const named = game.chapters[ch.id];
            return (
              <li
                key={ch.id}
                className="reveal panel card flex flex-col p-6"
                style={{ "--delay": `${i * 90}ms`, "--glow": ch.color } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className="kicker" style={{ color: ch.color }}>
                    {c.chapter(i + 1)}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">
                    {c.sieges(named.levels.length)}
                  </span>
                </div>
                <h3 className="mt-4 text-3xl">{named.name}</h3>
                <p className="mt-2 italic text-ink-2">{c.taglines[ch.id]}</p>

                <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ink-2">
                  {named.levels.map((l, n) => (
                    <li key={n} className="flex gap-2">
                      <span className="font-display w-5 shrink-0 text-xs text-ink-3" aria-hidden>
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <span className={n === named.levels.length - 1 ? "font-semibold text-ink" : ""}>
                        {l}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-auto pt-6">
                  <div className="rule" />
                  <p className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <span className="text-ink-3">{c.atTheGate}</span>
                    <span
                      className="font-display text-right font-semibold uppercase tracking-[0.14em]"
                      style={{ color: ch.color, textShadow: `0 0 16px ${ch.color}` }}
                    >
                      {named.boss}
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
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
                {c.infinite}
              </span>
              <h3 className="mt-3 text-3xl">{endless.name}</h3>
              <p className="mt-2 max-w-lg text-ink-2">{endless.tagline}</p>
            </div>
            <ul className="grid shrink-0 gap-2 text-sm text-ink-2 sm:text-right">
              {c.endlessPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
