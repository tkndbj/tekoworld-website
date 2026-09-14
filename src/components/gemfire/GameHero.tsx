import Image from "next/image";
import splash from "../../../public/gemfire/splash.webp";
import cover from "../../../public/gemfire/cover.webp";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { Tilt } from "@/components/ui/Tilt";
import { stats } from "@/lib/content";
import { gemfire } from "@/lib/site";

/**
 * The Gemfire hero: the logo set in the two halves of the palette, the pitch,
 * the store buttons, and the splash art standing in a phone that leans toward
 * the pointer. The key art sits far behind everything as a colour wash.
 */
export function GameHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src={cover}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 blur-sm saturate-150"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,13,0.6) 0%, rgba(6,7,13,0.8) 60%, var(--bg) 100%)",
          }}
        />
      </div>
      <div aria-hidden className="grid-floor -z-10" />
      <div
        aria-hidden
        className="orb -z-10"
        style={{ "--x": "70%", "--y": "45%", "--c": "var(--ember)", "--s": "56rem" } as React.CSSProperties}
      />
      <div
        aria-hidden
        className="orb -z-10"
        style={{ "--x": "10%", "--y": "30%", "--c": "var(--cyan)", "--s": "46rem" } as React.CSSProperties}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
        <div>
          <p className="chip reveal">
            <span className="chip-dot" />
            {gemfire.genre}
          </p>

          <h1
            className="reveal font-display mt-7 text-[4.2rem] font-bold uppercase leading-[0.9] tracking-[0.04em] sm:text-8xl lg:text-[7.5rem]"
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            <span className="text-gem glow-cyan">Gem</span>
            <span className="text-fire glow-fire">fire</span>
          </h1>

          <p
            className="reveal mt-5 max-w-lg text-2xl font-medium leading-snug text-ink sm:text-3xl"
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            {gemfire.pitch}
          </p>
          <p
            className="reveal mt-5 max-w-xl text-lg leading-relaxed text-ink-2"
            style={{ "--delay": "220ms" } as React.CSSProperties}
          >
            A match-3 board bolted to a castle wall. Line up three gems and the
            turret of that colour opens fire on the raiders coming down the
            hill. Hold the wall, upgrade your arsenal, and build a kingdom
            behind it.
          </p>

          <div
            className="reveal mt-9"
            style={{ "--delay": "280ms" } as React.CSSProperties}
          >
            <StoreButtons size="btn-lg" />
          </div>

          <ul
            className="reveal mt-8 flex flex-wrap gap-2"
            style={{ "--delay": "340ms" } as React.CSSProperties}
          >
            {["Free to play", "Android 8.0+", "iOS 15+", "Plays offline", "No forced adverts"].map(
              (t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              )
            )}
          </ul>

          <dl
            className="reveal mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4"
            style={{ "--delay": "400ms" } as React.CSSProperties}
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 pl-4" style={{ borderColor: s.color }}>
                <dd className="font-display text-3xl font-bold" style={{ color: s.color }}>
                  {s.value}
                </dd>
                <dt className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <Tilt
          className="reveal mx-auto w-full max-w-[22rem]"
          max={10}
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          <div className="phone anim-float" style={{ "--glow": "var(--ember)" } as React.CSSProperties}>
            <Image
              src={splash}
              alt="The Gemfire title screen: three turrets on stone plinths firing into a horde of shadow creatures under a rain of gems."
              sizes="(min-width: 1024px) 22rem, 80vw"
              preload
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
}
