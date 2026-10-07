import Image from "next/image";
import shot1 from "../../../public/gemfire/shot-1.webp";
import { Tilt } from "@/components/ui/Tilt";
import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";

/**
 * The meta-game: the kingdom you build between sieges, the land it grows
 * across, the companions who live in it and the leagues it climbs. The
 * companion roll is a ticker of names because thirty-one is too many for a
 * grid and exactly the right number to scroll.
 */
export async function Kingdom() {
  const { locale, t, game } = await getText();
  const k = t.gemfire.kingdom;

  return (
    <section id="kingdom" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "80%", "--y": "30%", "--c": "var(--emerald)", "--s": "56rem" } as React.CSSProperties}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Tilt className="reveal mx-auto w-full max-w-[20rem] lg:order-1" max={9}>
            <div className="phone anim-float-slow" style={{ "--glow": "var(--emerald)" } as React.CSSProperties}>
              <Image
                src={shot1}
                alt={k.art}
                sizes="(min-width: 1024px) 20rem, 80vw"
              />
            </div>
          </Tilt>

          <div className="lg:order-2">
            <p className="kicker reveal" style={{ color: "var(--emerald)" }}>
              {k.kicker}
            </p>
            <h2
              className="reveal mt-4 text-4xl sm:text-5xl"
              style={{ "--delay": "60ms" } as React.CSSProperties}
            >
              <Rich value={k.title} locale={locale} hl="text-gem" />
            </h2>
            <p
              className="reveal mt-5 max-w-xl text-lg leading-relaxed text-ink-2"
              style={{ "--delay": "120ms" } as React.CSSProperties}
            >
              {k.body}
            </p>

            <div
              className="reveal mt-8 grid gap-5 sm:grid-cols-2"
              style={{ "--delay": "180ms" } as React.CSSProperties}
            >
              <div className="panel panel-sm p-5">
                <p className="kicker" style={{ color: "var(--gold)" }}>
                  {k.lands}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-2">
                  {k.landList.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div className="panel panel-sm p-5">
                <p className="kicker" style={{ color: "var(--cyan)" }}>
                  {k.leagues}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-2">
                  {k.leagueList.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="reveal mt-20"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker" style={{ color: "var(--magenta)" }}>
                {k.companions}
              </p>
              <h3 className="mt-3 text-3xl">{k.companionsTitle}</h3>
            </div>
            <p className="max-w-md text-ink-2">{k.companionsBody}</p>
          </div>

          <div className="marquee mt-8" aria-hidden>
            <NameTrack names={game.companions} />
            <NameTrack names={game.companions} />
          </div>
        </div>
      </div>
    </section>
  );
}

function NameTrack({ names }: { names: readonly string[] }) {
  return (
    <ul className="marquee-track">
      {names.map((c, i) => (
        <li
          key={i}
          className="font-display flex items-center gap-12 whitespace-nowrap text-2xl font-semibold uppercase tracking-[0.18em]"
          style={{
            color: ["var(--cyan)", "var(--gold)", "var(--emerald)", "var(--violet)", "var(--ruby)"][i % 5],
          }}
        >
          {c}
          <span className="h-1.5 w-1.5 rotate-45 bg-ink-3" />
        </li>
      ))}
    </ul>
  );
}
