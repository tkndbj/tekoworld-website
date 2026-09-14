import { site } from "@/lib/site";

type Pillar = {
  title: string;
  body: string;
  color: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: "Mechanics first",
    body:
      "A game has to be interesting with the particles switched off. We prototype the rule before we draw a single gem, and if the rule is not fun on a grey grid, it does not ship.",
    color: "var(--cyan)",
    icon: <IconGrid />,
  },
  {
    title: "Respect the thumb",
    body:
      "Sessions are short, inputs are big, and nothing important is hidden behind a timer. A phone game is played on a bus. It should be brilliant on a bus.",
    color: "var(--emerald)",
    icon: <IconHand />,
  },
  {
    title: "Runs on the phone you have",
    body:
      "We build for devices several years old and test on them first. If a level runs badly on your phone, that is a bug on our side, not a spec on yours.",
    color: "var(--gold)",
    icon: <IconBolt />,
  },
  {
    title: "Self-published, self-answered",
    body:
      "No publisher between you and us. The same people who build the game read the support inbox, and a bug report from a player gets fixed by the person who wrote it.",
    color: "var(--violet)",
    icon: <IconShield />,
  },
];

/**
 * Who the studio is, in four beliefs rather than a biography. Each card is a
 * glass panel with its own glow colour, so the row reads like a loadout.
 */
export function Studio() {
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
          <p className="kicker">The studio</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Small team. <span className="text-fire">Big explosions.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">
            {site.company} is an independent studio in {site.address}. We make
            mobile games the way we wish more of them were made: mechanically
            honest, generous with the player, and finished.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((p, i) => (
            <li
              key={p.title}
              className="reveal panel card flex flex-col p-6"
              style={{ "--delay": `${i * 80}ms`, "--glow": p.color } as React.CSSProperties}
            >
              <span className="tile" style={{ "--glow": p.color } as React.CSSProperties}>
                {p.icon}
              </span>
              <h3 className="mt-6 text-xl">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                {p.body}
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
