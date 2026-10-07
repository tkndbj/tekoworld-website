import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";

const PILLARS = [
  { id: "mechanics", color: "var(--cyan)", icon: <IconGrid /> },
  { id: "thumb", color: "var(--emerald)", icon: <IconHand /> },
  { id: "phone", color: "var(--gold)", icon: <IconBolt /> },
  { id: "self", color: "var(--violet)", icon: <IconShield /> },
] as const;

/**
 * Who the studio is, in four beliefs rather than a biography. Each card is a
 * glass panel with its own glow colour, so the row reads like a loadout.
 */
export async function Studio() {
  const { locale, t } = await getText();
  const s = t.home.studio;

  return (
    <section id="studio" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="grid-floor opacity-40" />
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "0%", "--y": "30%", "--c": "var(--magenta)", "--s": "46rem" } as React.CSSProperties}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">{s.kicker}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            <Rich value={s.title} locale={locale} hl="text-fire" />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">{s.body}</p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((p, i) => (
            <li
              key={p.id}
              className="reveal panel card flex flex-col p-6"
              style={{ "--delay": `${i * 80}ms`, "--glow": p.color } as React.CSSProperties}
            >
              <span className="tile" style={{ "--glow": p.color } as React.CSSProperties}>
                {p.icon}
              </span>
              <h3 className="mt-6 text-xl">{s.pillars[p.id].title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                {s.pillars[p.id].body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconGrid() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="12" y="3" width="7" height="7" />
      <rect x="3" y="12" width="7" height="7" />
      <rect x="12" y="12" width="7" height="7" />
    </svg>
  );
}

function IconHand() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 11V4.5a1.5 1.5 0 0 1 3 0V10m0-2.5a1.5 1.5 0 0 1 3 0V10m0-1a1.5 1.5 0 0 1 3 0v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3.6 14A1.6 1.6 0 0 1 6 12l2 2" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden fill="currentColor">
      <path d="M12.5 2 4 12.5h6L9.5 20 18 9.5h-6L12.5 2Z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M11 2.5 4 5v6c0 4 3 7 7 8.5 4-1.5 7-4.5 7-8.5V5l-7-2.5Z" />
      <path d="m8 11 2 2 4-4" strokeLinecap="round" />
    </svg>
  );
}
