import Image from "next/image";
import buddy from "../../../public/balance-buddies/buddy.webp";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { Tilt } from "@/components/ui/Tilt";
import { getText } from "@/i18n/server";
import { shots, stats } from "@/lib/balance-buddies";
import { balanceBuddies } from "@/lib/site";

/**
 * The Balance Buddies hero: the name in the game's own face and colours, the pitch, the
 * store buttons, and the first puzzle standing in a phone. Daylight glows (sky, sun) instead
 * of Gemfire's fire, so the two pages are told apart at a glance.
 */
export async function BuddiesHero() {
  const { t } = await getText();
  const b = t.balanceBuddies;

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="grid-floor -z-10" />
      <div
        aria-hidden
        className="orb -z-10"
        style={{ "--x": "72%", "--y": "40%", "--c": "var(--bb-sky)", "--s": "60rem" } as React.CSSProperties}
      />
      <div
        aria-hidden
        className="orb -z-10"
        style={{ "--x": "8%", "--y": "25%", "--c": "var(--bb-sun)", "--s": "42rem" } as React.CSSProperties}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
        <div>
          <p className="chip reveal">
            <Image src={buddy} alt="" aria-hidden className="h-5 w-5 rounded-md" />
            {b.genre}
          </p>

          <h1
            className="reveal font-buddies text-buddies mt-7 text-[3.6rem] leading-[0.95] sm:text-8xl lg:text-[6.5rem]"
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            {balanceBuddies.name}
          </h1>

          <p
            className="reveal mt-6 max-w-lg text-2xl font-medium leading-snug text-ink sm:text-3xl"
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            {b.pitch}
          </p>
          <p
            className="reveal mt-5 max-w-xl text-lg leading-relaxed text-ink-2"
            style={{ "--delay": "220ms" } as React.CSSProperties}
          >
            {b.hero.body}
          </p>

          <div className="reveal mt-9" style={{ "--delay": "280ms" } as React.CSSProperties}>
            <StoreButtons game={balanceBuddies} size="btn-lg" />
          </div>

          <ul
            className="reveal mt-8 flex flex-wrap gap-2"
            style={{ "--delay": "340ms" } as React.CSSProperties}
          >
            {b.hero.chips.map((chip) => (
              <li key={chip} className="chip">
                {chip}
              </li>
            ))}
          </ul>

          <dl
            className="reveal mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4"
            style={{ "--delay": "400ms" } as React.CSSProperties}
          >
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 pl-4" style={{ borderColor: s.color }}>
                <dd className="font-buddies text-4xl" style={{ color: s.color }}>
                  {s.value}
                </dd>
                <dt className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">
                  {b.hero.stats[i]}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <Tilt
          className="reveal mx-auto w-full max-w-[19rem]"
          max={10}
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          <div className="phone phone-tall anim-float" style={{ "--glow": "var(--bb-sky)" } as React.CSSProperties}>
            <Image src={shots.firstSwing} alt={b.hero.shotAlt} sizes="(min-width: 1024px) 19rem, 80vw" preload />
          </div>
        </Tilt>
      </div>
    </section>
  );
}
