import { site } from "@/lib/site";
import { stats, critters } from "@/lib/content";
import { heroAnchors, heroScene } from "@/lib/scenes";
import { Scene } from "@/components/iso/Scene";
import { isoCenter, isoDepth, pct } from "@/components/iso/Iso";
import { Fireflies } from "@/components/ui/Fireflies";
import { CritterSprite } from "@/components/ui/Critter";
import { StoreButtons } from "@/components/ui/StoreButtons";

const moss = critters.find((c) => c.id === "moss")!;

export function Hero() {
  const { origin, w: SW, h: SH } = heroScene;
  const critterAt = isoCenter(heroAnchors.critter.r, heroAnchors.critter.c);
  const glowAt = isoCenter(heroAnchors.glow.r, heroAnchors.glow.c);

  // The companion is drawn at this many stage pixels tall; its width follows
  // from the frame's aspect ratio, so the sprite is never squashed.
  const critterH = 150;
  const critterW = critterH * (moss.w / moss.h);
  const glowSize = 380;

  return (
    <section className="relative overflow-hidden">
      {/* Sky. Sits behind everything and fades into the paper the rest of the
          page is printed on, so the hero ends without a seam. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--sky-1) 0%, var(--sky-2) 72%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[70%]"
        style={{
          background:
            "radial-gradient(60% 55% at 72% 18%, var(--glow) 0%, transparent 70%)",
        }}
      />
      <Fireflies className="-z-10" />

      <div className="mx-auto grid max-w-6xl items-center gap-4 px-5 pb-8 pt-12 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.22fr)] lg:gap-10 lg:pb-20 lg:pt-20">
        <div className="relative z-10 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-panel px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-ink-2">
            <span className="h-2 w-2 rotate-45 rounded-[2px] bg-glimmer" />
            {site.publisher} presents
          </p>

          <h1 className="mt-5 text-[clamp(2.75rem,9vw,4.75rem)] leading-[0.95]">
            <span className="block">Glimmer</span>
            <span className="relative inline-block text-leaf">
              Groove
              <svg
                aria-hidden
                viewBox="0 0 240 16"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-glimmer"
              >
                <path
                  d="M3 11C58 4 140 3 237 8"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl lg:mx-0">
            Turn the conduits until the light reaches every sleeping critter.
            Wake the grove, gather its companions, and build them a home — one
            tile at a time.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#play" className="btn btn-glimmer">
              Play a glade now
            </a>
            <a href="#get" className="btn">
              Where to get it
            </a>
          </div>

          <StoreButtons className="mt-5 flex justify-center lg:justify-start" />

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border-2 border-line bg-panel/80 px-3 py-3 text-center shadow-[0_4px_0_var(--line)] backdrop-blur-sm"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-leaf">
                    {s.value}
                  </span>
                  <span className="mt-0.5 block text-xs font-bold leading-tight text-ink-3">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The glade itself. Decorative — everything it says is said in words
            above it — so it is hidden from assistive technology wholesale. */}
        <div aria-hidden className="relative -mx-2 lg:mx-0">
          <Scene
            scene={heroScene}
            className="mx-auto max-w-[34rem] lg:max-w-none"
            eager
          >
            <div
              className="iso-piece anim-glow"
              style={{
                left: pct(
                  origin.x + glowAt.x - glowSize / 2 + heroAnchors.glow.dx,
                  SW
                ),
                top: pct(
                  origin.y + glowAt.y - glowSize / 2 + heroAnchors.glow.dy,
                  SH
                ),
                width: pct(glowSize, SW),
                height: pct(glowSize, SH),
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, var(--glow) 0%, transparent 68%)",
                zIndex: isoDepth(heroAnchors.glow.r, heroAnchors.glow.c, 1),
              }}
            />
            {/* Two elements, not one: the outer span centres the sprite over
                its tile with a transform, and the bob animation needs a
                transform of its own to play with. */}
            <span
              className="iso-piece"
              style={{
                left: pct(
                  origin.x + critterAt.x - critterW / 2 + heroAnchors.critter.dx,
                  SW
                ),
                top: pct(
                  origin.y + critterAt.y - critterH + heroAnchors.critter.dy,
                  SH
                ),
                width: pct(critterW, SW),
                height: pct(critterH, SH),
                zIndex: isoDepth(heroAnchors.critter.r, heroAnchors.critter.c, 5),
              }}
            >
              <span className="anim-bob block h-full w-full">
                <CritterSprite critter={moss} height="100%" />
              </span>
            </span>
          </Scene>
        </div>
      </div>
    </section>
  );
}
