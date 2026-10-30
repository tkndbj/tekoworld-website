import Image from "next/image";
import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";
import { contraptions } from "@/lib/balance-buddies";

/**
 * The six kinds of puzzle, each a card cropped from a real level's screenshot to the part
 * where the contraption hangs (the top bar and the tray are the same on every level).
 */
export async function Contraptions() {
  const { locale, t } = await getText();
  const c = t.balanceBuddies.contraptions;

  return (
    <section id="contraptions" className="relative scroll-mt-20 py-24 sm:py-32">
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "30%", "--y": "40%", "--c": "var(--bb-sky)", "--s": "60rem" } as React.CSSProperties}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">{c.kicker}</p>
          <h2 className="font-buddies mt-4 text-4xl sm:text-5xl">
            <Rich value={c.title} locale={locale} hl="text-buddies" />
          </h2>
          <p className="mt-5 text-lg text-ink-2">{c.body}</p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contraptions.map((item, i) => (
            <li
              key={item.id}
              className="reveal panel card overflow-hidden"
              style={{ "--delay": `${i * 60}ms`, "--glow": item.color } as React.CSSProperties}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={c.items[item.id].alt}
                  fill
                  sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-[50%_38%] transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
              <div className="p-6">
                <span
                  className="block h-1 w-10 rounded-full"
                  style={{ background: item.color, boxShadow: `0 0 16px ${item.color}` }}
                />
                <h3 className="font-buddies mt-4 text-2xl">{c.items[item.id].title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{c.items[item.id].body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
