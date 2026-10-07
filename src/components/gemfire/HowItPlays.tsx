import Image from "next/image";
import shot1 from "../../../public/gemfire/shot-1.webp";
import shot2 from "../../../public/gemfire/shot-2.webp";
import shot3 from "../../../public/gemfire/shot-3.webp";
import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";

const STEPS = [
  { id: "match", n: "01", color: "var(--cyan)", image: shot2 },
  { id: "power", n: "02", color: "var(--gold)", image: shot3 },
  { id: "defend", n: "03", color: "var(--ruby)", image: shot1 },
] as const;

/**
 * The loop, as three vertical beats each with its own screenshot in a phone.
 * Alternating sides keeps the eye moving down the page; on a phone they stack.
 */
export async function HowItPlays() {
  const { locale, t } = await getText();
  const p = t.gemfire.play;

  return (
    <section id="play" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">{p.kicker}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            <Rich value={p.title} locale={locale} hl="text-fire" />
          </h2>
          <p className="mt-5 text-lg text-ink-2">{p.body}</p>
        </div>

        <ol className="mt-16 space-y-20 sm:space-y-28">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={`reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span
                  className="font-display text-7xl font-bold leading-none"
                  style={{ color: s.color, textShadow: `0 0 30px ${s.color}` }}
                >
                  {s.n}
                </span>
                <h3 className="mt-4 text-3xl sm:text-4xl">{p.steps[s.id].title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-2">
                  {p.steps[s.id].body}
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-[19rem]">
                <div
                  aria-hidden
                  className="orb"
                  style={{ "--x": "50%", "--y": "50%", "--c": s.color, "--s": "34rem" } as React.CSSProperties}
                />
                <div className="phone relative" style={{ "--glow": s.color } as React.CSSProperties}>
                  <Image
                    src={s.image}
                    alt={p.steps[s.id].alt}
                    sizes="(min-width: 1024px) 19rem, 80vw"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
