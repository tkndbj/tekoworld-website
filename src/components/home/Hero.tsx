import Image from "next/image";
import Link from "next/link";
import cover from "../../../public/gemfire/cover.webp";
import { gemfire, site } from "@/lib/site";

/**
 * The studio hero. The Gemfire key art is the whole backdrop, pushed back into
 * the void by two gradient masks so the headline reads over it, and a
 * perspective grid rises out of the floor to say "this is a games company"
 * without a single word of copy having to.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* backdrop */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src={cover}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[50%_35%] opacity-60 saturate-[1.15]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,13,0.55) 0%, rgba(6,7,13,0.35) 35%, rgba(6,7,13,0.92) 72%, var(--bg) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,7,13,0.85) 0%, rgba(6,7,13,0.45) 45%, rgba(6,7,13,0.15) 100%)",
          }}
        />
      </div>
      <div aria-hidden className="grid-floor -z-10" />
      <div
        aria-hidden
        className="orb -z-10"
        style={{ "--x": "15%", "--y": "70%", "--c": "var(--ember)", "--s": "50rem" } as React.CSSProperties}
      />
      <div
        aria-hidden
        className="orb -z-10"
        style={{ "--x": "85%", "--y": "20%", "--c": "var(--violet)", "--s": "46rem" } as React.CSSProperties}
      />

      <div className="mx-auto flex min-h-[min(calc(100svh-4rem),52rem)] max-w-7xl flex-col justify-center px-5 pb-20 pt-24 sm:px-6 lg:pt-28">
        <p className="chip reveal w-fit">
          <span className="chip-dot" />
          Independent mobile game studio
        </p>

        <h1
          className="reveal mt-7 max-w-4xl text-[2.9rem] leading-[0.98] sm:text-6xl lg:text-[5.25rem]"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          We make games
          <br />
          with <span className="text-fire glow-fire">fire</span> in them.
        </h1>

        <p
          className="reveal mt-7 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl"
          style={{ "--delay": "160ms" } as React.CSSProperties}
        >
          {site.company} builds small, loud, mechanically honest games for the
          phone in your pocket. Our first is {gemfire.name}: a match-3 board
          bolted to a castle wall, where every match you make fires a turret.
        </p>

        <div
          className="reveal mt-10 flex flex-wrap items-center gap-3"
          style={{ "--delay": "240ms" } as React.CSSProperties}
        >
          <Link href={gemfire.path} className="btn btn-fire btn-lg shine">
            Explore {gemfire.name}
            <Arrow />
          </Link>
          <Link href="/#studio" className="btn btn-lg">
            About the studio
          </Link>
        </div>

        <dl
          className="reveal mt-16 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          style={{ "--delay": "320ms" } as React.CSSProperties}
        >
          <Stat value="01" label="game in the forge" color="var(--ember)" />
          <Stat value="2" label="platforms at launch" color="var(--cyan)" />
          <Stat value="0" label="forced adverts" color="var(--emerald)" />
          <Stat value="∞" label="skeletons to stop" color="var(--violet)" />
        </dl>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="border-l-2 pl-4" style={{ borderColor: color }}>
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">
        {label}
      </dt>
      <dd className="font-display mt-1 text-3xl font-bold" style={{ color }}>
        {value}
      </dd>
    </div>
  );
}

export function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path
        d="M3 9h11M10 4l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
