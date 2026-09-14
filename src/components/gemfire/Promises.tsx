const PROMISES = [
  {
    title: "No forced adverts",
    body:
      "There are no adverts between levels and no banners. Every video in the game is one you tap to watch, in exchange for hearts, coins or a hint, and there is a daily cap on all of them.",
    color: "var(--ruby)",
  },
  {
    title: "Plays without a signal",
    body:
      "Every siege runs on your phone with aeroplane mode on. The boards, the shop and rewarded videos need a connection; the game does not.",
    color: "var(--cyan)",
  },
  {
    title: "Your save, on our servers",
    body:
      "Progress is saved to the cloud from the first launch under an anonymous account. Sign in with Google or Apple and it survives a lost or replaced phone.",
    color: "var(--emerald)",
  },
  {
    title: "Nothing to grind past",
    body:
      "Every level can be finished without spending anything. Coins and gems are earned on the wall; buying them buys time, not the ending.",
    color: "var(--gold)",
  },
  {
    title: "No chat, no strangers",
    body:
      "There is no messaging and no way for players to contact each other. The only thing anyone else sees is your keeper name and score on the boards, and one tap hides it.",
    color: "var(--violet)",
  },
  {
    title: "Runs on the phone you have",
    body:
      "Android 8.0 or iOS 15 and up. Built and tested on phones several years old first, because that is what most people have.",
    color: "var(--ember)",
  },
];

/**
 * Six promises a player can hold us to. Each is true of the build as it stands
 * and is repeated, in longer words, in the privacy policy and terms.
 */
export function Promises() {
  return (
    <section id="promises" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">Fair play</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Six things we <span className="text-fire">will not do.</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROMISES.map((p, i) => (
            <li
              key={p.title}
              className="reveal panel card p-6"
              style={{ "--delay": `${i * 60}ms`, "--glow": p.color } as React.CSSProperties}
            >
              <span
                className="block h-1 w-10"
                style={{ background: p.color, boxShadow: `0 0 16px ${p.color}` }}
              />
              <h3 className="mt-5 text-xl">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
