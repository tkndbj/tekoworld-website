import Image from "next/image";
import Link from "next/link";
import cover from "../../../public/gemfire/cover.webp";
import turrets from "../../../public/gemfire/turrets.webp";
import { Tilt } from "@/components/ui/Tilt";
import { Arrow } from "@/components/home/Hero";
import { gemfire } from "@/lib/site";

/**
 * The catalogue. One title today, so it gets the whole stage: a large key-art
 * card that leans toward the pointer, and beside it a sealed slot for the next
 * project - honest about being empty, and a promise that the list grows.
 */
export function Games() {
  return (
    <section id="games" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "50%", "--y": "40%", "--c": "var(--sky)", "--s": "70rem" } as React.CSSProperties}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">Our games</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              One title. <span className="text-gem">All in.</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-2">
            We ship one game at a time and keep working on it after launch. Here
            is the one on the anvil now.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Gemfire */}
          <Tilt
            className="reveal"
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            <Link
              href={gemfire.path}
              className="panel panel-glow card group block overflow-hidden"
              style={{ "--glow": "var(--ember)" } as React.CSSProperties}
            >
              <span className="tilt-light" />
              <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1]">
                <Image
                  src={cover}
                  alt={`${gemfire.name} key art: four turrets on a castle wall firing at a skeleton army over a gem board.`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(6,7,13,0.9) 100%)",
                  }}
                />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <span className="chip bg-bg/60">
                    <span className="chip-dot" />
                    In development
                  </span>
                  <span className="chip bg-bg/60">{gemfire.genre}</span>
                </div>
              </div>

              <div className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-[0.06em] sm:text-4xl">
                    <span className="text-gem">Gem</span>
                    <span className="text-fire">fire</span>
                  </h3>
                  <p className="mt-2 max-w-md text-ink-2">{gemfire.pitch}</p>
                </div>
                <span className="btn btn-fire shrink-0">
                  View game
                  <Arrow />
                </span>
              </div>
            </Link>
          </Tilt>

          {/* Next slot */}
          <div
            className="reveal panel card flex flex-col justify-between p-6 sm:p-8"
            style={{ "--delay": "160ms", "--glow": "var(--violet)" } as React.CSSProperties}
          >
            <div>
              <p className="kicker" style={{ color: "var(--violet)" }}>
                Slot 02
              </p>
              <h3 className="mt-4 text-2xl">The next one</h3>
              <p className="mt-3 text-ink-2">
                Everything we learn from {gemfire.name} goes into what comes
                after it. When there is something worth showing, it will show up
                here first.
              </p>
            </div>

            <div className="relative mt-10 aspect-square w-full overflow-hidden opacity-80">
              <Image
                src={turrets}
                alt=""
                aria-hidden
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="anim-float-slow object-contain saturate-0 contrast-125 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_30%,transparent_75%)]"
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="chip bg-bg/70 text-ink">
                  <Lock />
                  Sealed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lock() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden fill="currentColor">
      <path d="M3 6V4a3 3 0 0 1 6 0v2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1Zm1.5 0h3V4a1.5 1.5 0 0 0-3 0v2Z" />
    </svg>
  );
}
