import Image from "next/image";
import turretsArt from "../../../public/gemfire/turrets.webp";
import { charms, kit, turrets } from "@/lib/content";

/**
 * The arsenal: twenty turrets as a wall of chips, the four kit items as cards,
 * and the three charms. It is a lot of nouns on purpose - a loadout screen is
 * the most convincing thing a strategy game can show a player.
 */
export function Arsenal() {
  const tier1 = turrets.filter((t) => t.tier === 1);
  const tier2 = turrets.filter((t) => t.tier === 2);

  return (
    <section id="arsenal" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "100%", "--y": "20%", "--c": "var(--gold)", "--s": "50rem" } as React.CSSProperties}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="reveal">
            <p className="kicker">The arsenal</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Twenty turrets. <span className="text-gem">Five stars each.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink-2">
              Every turret is bought per colour and upgraded to five stars. The
              first ten cost coins. The second ten cost gems, and each is the
              grown-up version of one you already know.
            </p>
          </div>
          <div
            className="reveal relative mx-auto aspect-square w-full max-w-md"
            style={{ "--delay": "120ms" } as React.CSSProperties}
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--ruby), var(--gold), var(--emerald), var(--cyan), var(--violet), var(--ruby))",
                filter: "blur(40px)",
                opacity: 0.35,
              }}
            />
            <Image
              src={turretsArt}
              alt="Three turrets, green, red and cyan, on grey plinths, each firing a bolt of flame."
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="anim-float relative rounded-[2rem] [mask-image:radial-gradient(70%_70%_at_50%_50%,#000_55%,transparent_100%)]"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <TurretTier title="Tier I" sub="bought with coins" list={tier1} color="var(--gold)" delay={0} />
          <TurretTier title="Tier II" sub="bought with gems" list={tier2} color="var(--cyan)" delay={100} />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="kicker reveal" style={{ color: "var(--ember)" }}>
              The kit
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {kit.map((k, i) => (
                <li
                  key={k.name}
                  className="reveal panel panel-sm card p-5"
                  style={{ "--delay": `${i * 70}ms`, "--glow": k.color } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rotate-45"
                      style={{ background: k.color, boxShadow: `0 0 14px ${k.color}` }}
                    />
                    <h3 className="text-xl">{k.name}</h3>
                  </div>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{k.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker reveal" style={{ color: "var(--violet)" }}>
              Charms on the board
            </p>
            <ul className="mt-6 space-y-3">
              {charms.map((c, i) => (
                <li
                  key={c.name}
                  className="reveal flex gap-4 border-l-2 border-violet/60 pl-4"
                  style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
                >
                  <div>
                    <h3 className="font-display text-base font-semibold uppercase tracking-[0.12em] text-violet">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[0.95rem] text-ink-2">{c.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TurretTier({
  title,
  sub,
  list,
  color,
  delay,
}: {
  title: string;
  sub: string;
  list: { name: string; note: string }[];
  color: string;
  delay: number;
}) {
  return (
    <div
      className="reveal panel p-6 sm:p-8"
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-bold uppercase tracking-[0.1em]" style={{ color }}>
          {title}
        </h3>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-3">{sub}</span>
      </div>
      <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {list.map((t, i) => (
          <li key={t.name} className="flex items-start gap-3">
            <span
              className="font-display mt-1 w-6 shrink-0 text-xs font-semibold text-ink-3"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="font-display text-base font-semibold uppercase tracking-[0.1em] text-ink">
                {t.name}
              </span>
              <p className="text-sm text-ink-2">{t.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
