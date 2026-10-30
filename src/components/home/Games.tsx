import Image from "next/image";
import Link from "next/link";
import cover from "../../../public/gemfire/cover.webp";
import banner from "../../../public/balance-buddies/banner.webp";
import { Tilt } from "@/components/ui/Tilt";
import { Arrow } from "@/components/home/Hero";
import { localePath } from "@/i18n/locales";
import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";
import { balanceBuddies, gemfire } from "@/lib/site";

/**
 * The catalogue: one key-art card per game, side by side and leaning toward the pointer,
 * and under them a sealed slot for the next project - honest about being empty, and a
 * promise that the list grows.
 */
export async function Games() {
  const { locale, t } = await getText();
  const g = t.home.games;

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
            <p className="kicker">{g.kicker}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              <Rich value={g.title} locale={locale} hl="text-gem" />
            </h2>
          </div>
          <p className="max-w-md text-ink-2">{g.body}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Gemfire */}
          <Tilt className="reveal" style={{ "--delay": "80ms" } as React.CSSProperties}>
            <Link
              href={localePath(locale, gemfire.path)}
              className="panel panel-glow card group flex h-full flex-col overflow-hidden"
              style={{ "--glow": "var(--ember)" } as React.CSSProperties}
            >
              <span className="tilt-light" />
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={cover}
                  alt={g.gemfire.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 40%, rgba(6,7,13,0.9) 100%)" }}
                />
                <Chips status={g.gemfire.status} genre={t.gemfire.genre} />
              </div>

              <div className="relative flex flex-1 flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-[0.06em] sm:text-4xl">
                    <span className="text-gem">Gem</span>
                    <span className="text-fire">fire</span>
                  </h3>
                  <p className="mt-2 max-w-md text-ink-2">{t.gemfire.pitch}</p>
                </div>
                <span className="btn btn-fire shrink-0">
                  {g.view}
                  <Arrow />
                </span>
              </div>
            </Link>
          </Tilt>

          {/* Balance Buddies */}
          <Tilt className="reveal" style={{ "--delay": "160ms" } as React.CSSProperties}>
            <Link
              href={localePath(locale, balanceBuddies.path)}
              className="panel panel-glow card group flex h-full flex-col overflow-hidden"
              style={{ "--glow": "var(--bb-sky)" } as React.CSSProperties}
            >
              <span className="tilt-light" />
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#4fb4ff]">
                <Image
                  src={banner}
                  alt={g.balanceBuddies.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 55%, rgba(6,7,13,0.85) 100%)" }}
                />
                <Chips status={g.balanceBuddies.status} genre={t.balanceBuddies.genre} />
              </div>

              <div className="relative flex flex-1 flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                <div>
                  <h3 className="font-buddies text-buddies text-3xl sm:text-4xl">{balanceBuddies.name}</h3>
                  <p className="mt-2 max-w-md text-ink-2">{t.balanceBuddies.pitch}</p>
                </div>
                <span className="btn btn-gem shrink-0">
                  {g.view}
                  <Arrow />
                </span>
              </div>
            </Link>
          </Tilt>
        </div>

        {/* Next slot */}
        <div
          className="reveal panel card mt-6 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          style={{ "--delay": "240ms", "--glow": "var(--violet)" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="kicker" style={{ color: "var(--violet)" }}>
              {g.nextKicker}
            </p>
            <h3 className="mt-3 text-2xl">{g.nextTitle}</h3>
            <p className="mt-2 text-ink-2">{g.nextBody}</p>
          </div>
          <span className="chip w-fit shrink-0 bg-bg/70 text-ink">
            <Lock />
            {g.sealed}
          </span>
        </div>
      </div>
    </section>
  );
}

function Chips({ status, genre }: { status: string; genre: string }) {
  return (
    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
      <span className="chip bg-bg/60">
        <span className="chip-dot" />
        {status}
      </span>
      <span className="chip bg-bg/60">{genre}</span>
    </div>
  );
}

function Lock() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden fill="currentColor">
      <path d="M3 6V4a3 3 0 0 1 6 0v2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1Zm1.5 0h3V4a1.5 1.5 0 0 0-3 0v2Z" />
    </svg>
  );
}
