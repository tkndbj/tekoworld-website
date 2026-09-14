/**
 * A slow ticker between the hero and the games. Decorative, so hidden from
 * assistive tech: the same words appear in real headings further down.
 */
const WORDS = [
  "Gemfire",
  "Match-3 tower defence",
  "Android",
  "iOS",
  "Tekoworld",
  "Build your kingdom",
  "Upgrade your turrets",
  "Hold the wall",
];

export function Ticker() {
  const track = (
    <ul className="marquee-track" aria-hidden>
      {WORDS.map((w, i) => (
        <li
          key={w}
          className="font-display flex items-center gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.3em] text-ink-3"
        >
          <span className={i % 2 ? "text-ink-2" : "text-cyan"}>{w}</span>
          <span className="h-1.5 w-1.5 rotate-45 bg-ember shadow-[0_0_10px_var(--ember)]" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative border-y border-line bg-bg-2/60 py-4">
      <div className="marquee">
        {track}
        {track}
      </div>
    </div>
  );
}
