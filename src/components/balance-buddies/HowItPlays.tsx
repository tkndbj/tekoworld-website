import Image from "next/image";
import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";
import { steps } from "@/lib/balance-buddies";

/** The loop in three beats, each with its screenshot in a phone; alternating sides, stacked on a phone. */
export async function HowItPlays() {
  const { locale, t } = await getText();
  const p = t.balanceBuddies.play;

  return (
    <section id="play" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">{p.kicker}</p>
          <h2 className="font-buddies mt-4 text-4xl sm:text-5xl">
            <Rich value={p.title} locale={locale} hl="text-buddies" />
          </h2>
          <p className="mt-5 text-lg text-ink-2">{p.body}</p>
        </div>

        <ol className="mt-16 space-y-20 sm:space-y-28">
          {steps.map((s, i) => (
            <li
              key={s.id}
              className={`reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span
                  className="font-buddies text-7xl leading-none"
                  style={{ color: s.color, textShadow: `0 0 30px ${s.color}` }}
                >
                  {s.n}
                </span>
                <h3 className="font-buddies mt-4 text-3xl sm:text-4xl">{p.steps[s.id].title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-2">{p.steps[s.id].body}</p>
              </div>
              <div className="relative mx-auto w-full max-w-[17rem]">
                <div
                  aria-hidden
                  className="orb"
                  style={{ "--x": "50%", "--y": "50%", "--c": s.color, "--s": "34rem" } as React.CSSProperties}
                />
                <div className="phone phone-tall relative" style={{ "--glow": s.color } as React.CSSProperties}>
                  <Image src={s.image} alt={p.steps[s.id].alt} sizes="(min-width: 1024px) 17rem, 80vw" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
