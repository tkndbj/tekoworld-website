import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";
import { promises } from "@/lib/balance-buddies";

/** Six promises, each true of the build and repeated in longer words in the policies. */
export async function Promises() {
  const { locale, t } = await getText();
  const pr = t.balanceBuddies.promises;

  return (
    <section id="promises" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">{pr.kicker}</p>
          <h2 className="font-buddies mt-4 text-4xl sm:text-5xl">
            <Rich value={pr.title} locale={locale} hl="text-buddies" />
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {promises.map((p, i) => (
            <li
              key={p.id}
              className="reveal panel card p-6"
              style={{ "--delay": `${i * 60}ms`, "--glow": p.color } as React.CSSProperties}
            >
              <span
                className="block h-1 w-10 rounded-full"
                style={{ background: p.color, boxShadow: `0 0 16px ${p.color}` }}
              />
              <h3 className="font-buddies mt-5 text-2xl">{pr.list[p.id].title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{pr.list[p.id].body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
