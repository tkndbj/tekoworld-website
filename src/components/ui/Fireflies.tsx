/**
 * Motes of glimmer drifting up through a scene.
 *
 * Positions come from a fixed table rather than Math.random, because a server
 * render and the client's first render have to agree - a random layout here
 * would be a hydration mismatch dressed up as atmosphere.
 */
const MOTES = [
  { left: "8%", top: "62%", size: 7, delay: 0, dur: 9, dx: 34 },
  { left: "17%", top: "38%", size: 5, delay: 2.6, dur: 11, dx: -22 },
  { left: "29%", top: "74%", size: 9, delay: 1.1, dur: 8.5, dx: 18 },
  { left: "41%", top: "26%", size: 6, delay: 4.2, dur: 12, dx: 40 },
  { left: "53%", top: "68%", size: 8, delay: 0.7, dur: 10, dx: -30 },
  { left: "64%", top: "44%", size: 5, delay: 3.4, dur: 9.5, dx: 26 },
  { left: "73%", top: "78%", size: 7, delay: 5.1, dur: 11.5, dx: -16 },
  { left: "84%", top: "34%", size: 6, delay: 1.9, dur: 10.5, dx: 30 },
  { left: "92%", top: "58%", size: 8, delay: 3.9, dur: 8.8, dx: -24 },
  { left: "36%", top: "88%", size: 6, delay: 6.2, dur: 12.5, dx: 22 },
];

export function Fireflies({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            background: "var(--glimmer)",
            boxShadow: "0 0 14px 2px var(--glimmer)",
            opacity: 0,
            ["--dx" as string]: `${m.dx}px`,
            animation: `drift ${m.dur}s ease-in-out ${m.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
