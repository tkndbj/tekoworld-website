import Image from "next/image";
import shot1 from "../../../public/gemfire/shot-1.webp";
import { Tilt } from "@/components/ui/Tilt";
import { companions, lands, leagues } from "@/lib/content";

/**
 * The meta-game: the kingdom you build between sieges, the land it grows
 * across, the companions who live in it and the leagues it climbs. The
 * companion roll is a ticker of names because thirty-one is too many for a
 * grid and exactly the right number to scroll.
 */
export function Kingdom() {
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
                alt="Build your kingdom: an island growing from an empty fenced plot, to a workshop, to a keep, to a full castle with red-roofed towers."
                sizes="(min-width: 1024px) 20rem, 80vw"
              />
            </div>
          </Tilt>

          <div className="lg:order-2">
            <p className="kicker reveal" style={{ color: "var(--emerald)" }}>
              Between the sieges
            </p>
            <h2
              className="reveal mt-4 text-4xl sm:text-5xl"
              style={{ "--delay": "60ms" } as React.CSSProperties}
            >
              Build your <span className="text-gem">kingdom.</span>
            </h2>
            <p
              className="reveal mt-5 max-w-xl text-lg leading-relaxed text-ink-2"
              style={{ "--delay": "120ms" } as React.CSSProperties}
            >
              Coins won on the wall are spent behind it. Buy land, raise a home
              from a fenced plot to a castle, and lay out homes, halls, walls
              and gardens across a field of tiles, any way you like. Every
              piece turns to face four ways. No two kingdoms come out the same.
            </p>

            <div
              className="reveal mt-8 grid gap-5 sm:grid-cols-2"
              style={{ "--delay": "180ms" } as React.CSSProperties}
            >
              <div className="panel panel-sm p-5">
                <p className="kicker" style={{ color: "var(--gold)" }}>
                  Nine lands
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-2">
                  {lands.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div className="panel panel-sm p-5">
                <p className="kicker" style={{ color: "var(--cyan)" }}>
                  Nine leagues
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-2">
                  {leagues.map((l) => (
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
                Companions
              </p>
              <h3 className="mt-3 text-3xl">Thirty-one friends, one at a time.</h3>
            </div>
            <p className="max-w-md text-ink-2">
              Monarch is with you from the first siege. The rest are met as
              your kingdom grows, and whichever you choose stands in for you on
              the boards.
            </p>
          </div>

          <div className="marquee mt-8" aria-hidden>
            <NameTrack />
            <NameTrack />
          </div>
        </div>
      </div>
    </section>
  );
}

function NameTrack() {
  return (
    <ul className="marquee-track">
      {companions.map((c, i) => (
        <li
          key={c}
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
