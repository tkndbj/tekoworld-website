import Image from "next/image";
import shot1 from "../../../public/gemfire/shot-1.webp";
import shot2 from "../../../public/gemfire/shot-2.webp";
import shot3 from "../../../public/gemfire/shot-3.webp";

const STEPS = [
  {
    n: "01",
    title: "Match",
    body:
      "Drag a gem onto its neighbour. Line three of a colour up and the turret of that colour fills with fuel. Bigger lines, more fuel. Match the colour that is coming.",
    color: "var(--cyan)",
    image: shot2,
    alt: "The Gemfire battle screen: four turrets on a wall above a gem board, firing at skeletons and slimes in a dungeon.",
  },
  {
    n: "02",
    title: "Power up",
    body:
      "Gems buy stronger turrets; a cog dropped by a raider upgrades one mid-fight. Firepots, mendings and surges turn a bad wave around, and a full turret can be tapped to dump everything at once.",
    color: "var(--gold)",
    image: shot3,
    alt: "A row of upgraded turrets glowing on the wall, with a chain of red heart gems lighting up on the board below.",
  },
  {
    n: "03",
    title: "Defend",
    body:
      "Raiders walk down the hill in real time. A shot hurts most when it hits a raider of its own colour. Let them through and they break your wall. Hold it and the kingdom grows.",
    color: "var(--ruby)",
    image: shot1,
    alt: "An isometric island growing from a fenced plot to a full castle, with a crowned frog companion looking on.",
  },
];

/**
 * The loop, as three vertical beats each with its own screenshot in a phone.
 * Alternating sides keeps the eye moving down the page; on a phone they stack.
 */
export function HowItPlays() {
  return (
    <section id="play" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="kicker">How it plays</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Match. Power up. <span className="text-fire">Defend.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-2">
            One board, one wall, and a hill full of things that want to come
            down it. Every match you make is a shot fired.
          </p>
        </div>

        <ol className="mt-16 space-y-20 sm:space-y-28">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={`reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span
                  className="font-display text-7xl font-bold leading-none"
                  style={{ color: s.color, textShadow: `0 0 30px ${s.color}` }}
                >
                  {s.n}
                </span>
                <h3 className="mt-4 text-3xl sm:text-4xl">{s.title}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-2">
                  {s.body}
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-[19rem]">
                <div
                  aria-hidden
                  className="orb"
                  style={{ "--x": "50%", "--y": "50%", "--c": s.color, "--s": "34rem" } as React.CSSProperties}
                />
                <div className="phone relative" style={{ "--glow": s.color } as React.CSSProperties}>
                  <Image src={s.image} alt={s.alt} sizes="(min-width: 1024px) 19rem, 80vw" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
