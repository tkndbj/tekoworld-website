"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  E,
  N,
  S,
  W,
  freshTurns,
  levels,
  openings,
  rotate,
  solveLight,
  type Cell,
} from "@/lib/puzzle";
import { critters } from "@/lib/content";
import { CritterSprite } from "@/components/ui/Critter";

/*
 * The playable glade.
 *
 * This is the actual rule the game is built on rather than a video of it: turn
 * the conduits until the light reaches every sleeper. Three glades, the same
 * light solver the level data was verified against, and a board that can be
 * finished with the keyboard alone.
 */

/** Which companion sleeps in which glade, so the same face is not used twice. */
const SLEEPERS = ["moss", "pip", "blink"] as const;

function critterOf(levelIndex: number) {
  const id = SLEEPERS[levelIndex % SLEEPERS.length];
  return critters.find((c) => c.id === id) ?? critters[0];
}

const DIR_LABEL: [number, string][] = [
  [N, "north"],
  [E, "east"],
  [S, "south"],
  [W, "west"],
];

function describe(mask: number) {
  const parts = DIR_LABEL.filter(([bit]) => mask & bit).map(([, name]) => name);
  if (parts.length === 0) return "no openings";
  if (parts.length === 1) return `opening ${parts[0]}`;
  return `openings ${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

/**
 * The conduit itself: a dark casing with a bright core threaded through it.
 * Drawn in the orientation the tile *starts* in, then turned by CSS — so the
 * quarter-turn is a real animation rather than a redraw.
 */
function Conduit({ mask, lit }: { mask: number; lit: boolean }) {
  const arms: string[] = [];
  if (mask & N) arms.push("M50 50 L50 2");
  if (mask & E) arms.push("M50 50 L98 50");
  if (mask & S) arms.push("M50 50 L50 98");
  if (mask & W) arms.push("M50 50 L2 50");

  return (
    <>
      <g
        stroke="var(--pz-casing)"
        strokeWidth={30}
        strokeLinecap="round"
        fill="none"
      >
        {arms.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g
        stroke={lit ? "var(--pz-core-lit)" : "var(--pz-core)"}
        strokeWidth={13}
        strokeLinecap="round"
        fill="none"
      >
        {arms.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <circle
        cx={50}
        cy={50}
        r={11}
        fill={lit ? "var(--pz-core-lit)" : "var(--pz-core)"}
      />
    </>
  );
}

/** The lantern. It is always lit — it is where the light comes from. */
function Lantern() {
  return (
    <g>
      <circle cx={50} cy={50} r={26} fill="var(--glimmer-d)" />
      <circle cx={50} cy={50} r={19} fill="var(--glimmer)" />
      <circle cx={44} cy={44} r={6} fill="#fff8e2" opacity={0.9} />
    </g>
  );
}

type Status = "playing" | "complete";

export default function PuzzleDemo() {
  const [index, setIndex] = useState(0);
  const level = levels[index];
  const [turns, setTurns] = useState(() => freshTurns(level));
  const [moves, setMoves] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  // Autofocus only after the player has already acted, so arriving at the page
  // or scrolling past the section never yanks focus into the board.
  const engaged = useRef(false);

  const light = useMemo(() => solveLight(level, turns), [level, turns]);
  const status: Status = light.complete ? "complete" : "playing";
  const sleeper = critterOf(index);

  const load = useCallback((next: number) => {
    setIndex(next);
    setTurns(freshTurns(levels[next]));
    setMoves(0);
  }, []);

  const reset = useCallback(() => {
    setTurns(freshTurns(level));
    setMoves(0);
  }, [level]);

  const turn = useCallback(
    (r: number, c: number) => {
      engaged.current = true;
      setTurns((prev) => {
        const next = prev.map((row) => row.slice());
        next[r][c] += 1;
        return next;
      });
      setMoves((m) => m + 1);
    },
    []
  );

  /* Arrow keys walk the grid, which is far less tedious than tabbing across a
     row of five tiles to reach the one that is wrong. */
  const onKeyDown = (e: React.KeyboardEvent, r: number, c: number) => {
    const moveTo: Record<string, [number, number]> = {
      ArrowUp: [r - 1, c],
      ArrowDown: [r + 1, c],
      ArrowLeft: [r, c - 1],
      ArrowRight: [r, c + 1],
    };
    const target = moveTo[e.key];
    if (!target) return;
    e.preventDefault();
    const [nr, nc] = target;
    const el = boardRef.current?.querySelector<HTMLButtonElement>(
      `[data-cell="${nr}-${nc}"]`
    );
    el?.focus();
  };

  // Keep focus useful across a level change: the board is rebuilt, so a focused
  // tile that no longer exists would drop focus to the document body.
  useEffect(() => {
    if (!engaged.current) return;
    const first = boardRef.current?.querySelector<HTMLButtonElement>(
      "[data-cell]"
    );
    first?.focus();
  }, [index]);

  const cellState = (r: number, c: number, cell: Cell) => {
    const lit = light.lit.has(r * level.cols + c);
    const now = openings(cell, turns[r][c]);
    // Drawn in the start orientation and turned by CSS.
    const drawn = rotate(cell.solved, cell.spin);
    return { lit, now, drawn };
  };

  return (
    <section
      id="play"
      className="reveal relative mx-auto w-full max-w-6xl px-5 py-16 sm:py-24"
    >
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-line bg-panel px-4 py-1.5 text-sm font-bold text-ink-2">
          <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-glimmer" />
          Try it right here
        </p>
        <h2 className="text-3xl sm:text-4xl">Turn the light around a corner</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">
          This is the whole game. Tap a conduit to turn it a quarter, and keep
          turning until the light finds everyone asleep in the glade.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {/* ---------------- board ---------------- */}
        <div className="slab overflow-hidden p-0">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-line bg-panel-2 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span className="font-display text-lg font-extrabold">
                {level.name}
              </span>
              <span className="rounded-full bg-panel px-2.5 py-0.5 text-xs font-bold text-ink-3">
                Glade {index + 1} of {levels.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-ink-3">
                {light.woken}/{light.targets} awake
              </span>
              <button onClick={reset} className="btn btn-sm" type="button">
                Reset
              </button>
            </div>
          </header>

          <div className="relative bg-paper-2 p-4 sm:p-7">
            <div
              ref={boardRef}
              className="mx-auto grid w-full max-w-[30rem] gap-2 sm:gap-2.5"
              style={{
                gridTemplateColumns: `repeat(${level.cols}, minmax(0, 1fr))`,
              }}
              role="group"
              aria-label={`${level.name}. ${level.hint}`}
            >
              {level.cells.map((row, r) =>
                row.map((cell, c) => {
                  const { lit, now, drawn } = cellState(r, c, cell);
                  const key = `${r}-${c}`;

                  if (cell.kind === "empty") {
                    return <div key={key} className="pz-cell pz-empty" />;
                  }

                  const rotation = { transform: `rotate(${turns[r][c] * 90}deg)` };

                  const inner = (
                    <>
                      <svg
                        viewBox="0 0 100 100"
                        className="pz-art"
                        style={rotation}
                        aria-hidden
                      >
                        <Conduit mask={drawn} lit={lit} />
                        {cell.kind === "source" && <Lantern />}
                      </svg>
                      {cell.kind === "target" && (
                        <span className="pz-sleeper" aria-hidden>
                          {/* Woken by the light reaching it, not by scrolling. */}
                          <CritterSprite
                            critter={sleeper}
                            height="62%"
                            play={lit}
                            className="pz-critter"
                          />
                          {!lit && <span className="pz-zzz">z</span>}
                        </span>
                      )}
                    </>
                  );

                  if (cell.fixed) {
                    const label =
                      cell.kind === "source"
                        ? `Lantern at row ${r + 1}, column ${c + 1}, ${describe(now)}.`
                        : cell.kind === "target"
                          ? `${sleeper.name} at row ${r + 1}, column ${c + 1}. ${
                              lit ? "Awake." : "Still asleep."
                            }`
                          : `Crossing at row ${r + 1}, column ${c + 1}. ${describe(now)}.`;
                    return (
                      <div
                        key={key}
                        className={`pz-cell pz-fixed ${lit ? "is-lit" : ""}`}
                        role="img"
                        aria-label={label}
                      >
                        {inner}
                      </div>
                    );
                  }

                  return (
                    <button
                      key={key}
                      type="button"
                      data-cell={key}
                      onClick={() => turn(r, c)}
                      onKeyDown={(e) => onKeyDown(e, r, c)}
                      className={`pz-cell pz-turn ${lit ? "is-lit" : ""}`}
                      aria-label={`Conduit at row ${r + 1}, column ${c + 1}, ${describe(
                        now
                      )}. ${lit ? "Carrying light." : "Dark."} Activate to turn a quarter.`}
                    >
                      {inner}
                    </button>
                  );
                })
              )}
            </div>

            {status === "complete" && <Sparkles />}
          </div>

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-line bg-panel-2 px-5 py-3.5">
            <p className="text-sm text-ink-2">{level.hint}</p>
            <span className="text-sm font-bold text-ink-3">
              {moves} {moves === 1 ? "turn" : "turns"}
            </span>
          </footer>
        </div>

        {/* ---------------- side panel ---------------- */}
        <aside className="slab p-6">
          <div aria-live="polite" className="sr-only">
            {status === "complete"
              ? `Glade complete. ${sleeper.name} is awake after ${moves} turns.`
              : `${light.woken} of ${light.targets} companions awake.`}
          </div>

          {status === "complete" ? (
            <div style={{ animation: "pop 420ms cubic-bezier(.2,.8,.3,1.3) both" }}>
              <div className="mb-4 flex items-center gap-3">
                <CritterSprite
                  critter={sleeper}
                  height="4rem"
                  play
                  className="shrink-0"
                />
                <div>
                  <p className="font-display text-xl font-extrabold text-leaf">
                    Glade awake
                  </p>
                  <p className="text-sm text-ink-2">
                    {sleeper.name} stretched, blinked, and decided to follow you.
                  </p>
                </div>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-ink-2">
                You solved it in {moves} {moves === 1 ? "turn" : "turns"}. There
                are another hundred-odd of these in the game, and they stop being
                this polite quite quickly.
              </p>
              {index + 1 < levels.length ? (
                <button
                  onClick={() => load(index + 1)}
                  className="btn btn-primary w-full"
                  type="button"
                >
                  Next glade →
                </button>
              ) : (
                <a href="#get" className="btn btn-primary w-full">
                  Get the whole grove →
                </a>
              )}
            </div>
          ) : (
            <>
              <p className="font-display text-xl font-extrabold">How it works</p>
              <ul className="mt-4 space-y-3.5 text-sm leading-relaxed text-ink-2">
                <li className="flex gap-3">
                  <Step n={1} />
                  <span>
                    Light leaves the lantern and travels through whatever is
                    pointing at it.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Step n={2} />
                  <span>
                    Two neighbours only connect when{" "}
                    <strong className="text-ink">both</strong> have an opening
                    facing the other.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Step n={3} />
                  <span>
                    Nothing is ever added or removed. Every glade is solvable
                    from where it starts.
                  </span>
                </li>
              </ul>
            </>
          )}

          <div className="mt-6 flex items-center gap-2 border-t-2 border-line pt-5">
            <span className="mr-1 text-xs font-bold uppercase tracking-wide text-ink-3">
              Glade
            </span>
            {levels.map((lv, i) => (
              <button
                key={lv.id}
                type="button"
                onClick={() => load(i)}
                aria-label={`Load glade ${i + 1}: ${lv.name}`}
                aria-current={i === index ? "true" : undefined}
                className={`h-8 w-8 rounded-lg border-2 font-display text-sm font-extrabold transition-colors ${
                  i === index
                    ? "border-grass-d bg-grass text-[#17300b]"
                    : "border-line bg-panel-2 text-ink-3 hover:border-line-2"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function Step({ n }: { n: number }) {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 border-line bg-panel-2 font-display text-xs font-extrabold text-ink-2">
      {n}
    </span>
  );
}

/** A short burst of glimmer when a glade wakes. Purely decorative. */
function Sparkles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: `${8 + ((i * 37) % 84)}%`,
        top: `${15 + ((i * 53) % 70)}%`,
        delay: `${(i % 7) * 90}ms`,
        dx: `${((i % 5) - 2) * 18}px`,
        size: 6 + (i % 3) * 4,
      })),
    []
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: "var(--glimmer)",
            boxShadow: "0 0 12px var(--glimmer)",
            ["--dx" as string]: d.dx,
            animation: `drift 1.6s ease-out ${d.delay} both`,
          }}
        />
      ))}
    </div>
  );
}
