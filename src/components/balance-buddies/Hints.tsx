import Image from "next/image";
import hintIcon from "../../../public/balance-buddies/icon-hint.webp";
import noAdsIcon from "../../../public/balance-buddies/icon-no-ads.webp";
import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";

/** How hints work, and the two shop items a player meets first, with the game's own shop icons. */
export async function Hints() {
  const { locale, t } = await getText();
  const h = t.balanceBuddies.hints;

  return (
    <section id="hints" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="kicker">{h.kicker}</p>
          <h2 className="font-buddies mt-4 text-4xl sm:text-5xl">
            <Rich value={h.title} locale={locale} hl="text-buddies" />
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2">{h.body}</p>
          <ul className="mt-8 space-y-3">
            {h.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ background: "var(--bb-sun)", boxShadow: "0 0 12px var(--bb-sun)" }}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal grid gap-5 sm:grid-cols-2" style={{ "--delay": "120ms" } as React.CSSProperties}>
          <div className="panel panel-glow flex flex-col items-center p-6 text-center" style={{ "--glow": "var(--bb-sky)" } as React.CSSProperties}>
            <Image src={hintIcon} alt={h.hintAlt} sizes="10rem" className="anim-float-slow w-40" />
            <p className="font-buddies mt-4 text-2xl text-sky">+2</p>
            <p className="mt-1 text-sm text-ink-2">{h.points[1]}</p>
          </div>
          <div className="panel panel-glow flex flex-col items-center p-6 text-center" style={{ "--glow": "var(--bb-pink)" } as React.CSSProperties}>
            <Image src={noAdsIcon} alt={h.noAdsAlt} sizes="10rem" className="anim-float-slow w-40" />
            <p className="font-buddies mt-4 text-2xl" style={{ color: "var(--bb-pink)" }}>
              {h.noAds}
            </p>
            <p className="mt-1 text-sm text-ink-2">{h.noAdsBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
