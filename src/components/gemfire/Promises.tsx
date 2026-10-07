import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";

const PROMISES = [
  { id: "ads", color: "var(--ruby)" },
  { id: "offline", color: "var(--cyan)" },
  { id: "save", color: "var(--emerald)" },
  { id: "grind", color: "var(--gold)" },
  { id: "chat", color: "var(--violet)" },
  { id: "phone", color: "var(--ember)" },
] as const;

/**
 * Six promises a player can hold us to. Each is true of the build as it stands
 * and is repeated, in longer words, in the privacy policy and terms.
 */
export async function Promises() {
  const { locale, t } = await getText();
  const pr = t.gemfire.promises;

  return (
    <section id="promises" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">{pr.kicker}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            <Rich value={pr.title} locale={locale} hl="text-fire" />
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROMISES.map((p, i) => (
            <li
              key={p.id}
              className="reveal panel card p-6"
              style={{ "--delay": `${i * 60}ms`, "--glow": p.color } as React.CSSProperties}
            >
              <span
                className="block h-1 w-10"
                style={{ background: p.color, boxShadow: `0 0 16px ${p.color}` }}
              />
              <h3 className="mt-5 text-xl">{pr.list[p.id].title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                {pr.list[p.id].body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
