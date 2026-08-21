/**
 * The conduit puzzle, which is the game's one verb.
 *
 * A glade is a small grid. Light leaves the lantern and can only cross between
 * two neighbouring tiles when both of them have an opening facing the other. A
 * tile is turned a quarter at a time; nothing is ever added or removed. When
 * every sleeping companion on the board is reached, the glade is awake.
 *
 * Levels are authored in their *solved* state and then scrambled by a recorded
 * number of quarter-turns, which is what makes them solvable by construction —
 * there is no generator here that can emit a board with no way out.
 */

export const N = 1;
export const E = 2;
export const S = 4;
export const W = 8;

/** Row/column steps for N, E, S, W, and the opening a neighbour needs to face back. */
const STEP: ReadonlyArray<readonly [number, number, number, number]> = [
  [-1, 0, N, S],
  [0, 1, E, W],
  [1, 0, S, N],
  [0, -1, W, E],
];

/** One quarter-turn clockwise: N→E→S→W→N. */
export function rotate(mask: number, quarters = 1) {
  const q = ((quarters % 4) + 4) % 4;
  let m = mask & 15;
  for (let i = 0; i < q; i++) m = ((m << 1) | (m >> 3)) & 15;
  return m;
}

export type CellKind = "empty" | "source" | "pipe" | "target";

export type Cell = {
  kind: CellKind;
  /** Openings in the solved state. */
  solved: number;
  /** Quarter-turns the tile starts away from solved. */
  spin: number;
  /** Lanterns and sleeping companions are anchored; only conduits turn. */
  fixed: boolean;
};

export type Level = {
  id: string;
  name: string;
  hint: string;
  rows: number;
  cols: number;
  cells: Cell[][];
};

/* -------------------------------------------------------------------------
   Authoring
   -------------------------------------------------------------------------
   A level is written as a grid of short strings so the shape of the glade is
   legible in the source:

     "."      nothing — open grass
     "-NE"    a conduit opening north and east
     "S:E"    the lantern, shining east
     "T:W"    a sleeping companion, reached from the west

   A digit suffix is the scramble, in quarter-turns: "-NE/2".
   ------------------------------------------------------------------------- */

const BIT: Record<string, number> = { N, E, S, W };

function parseCell(token: string): Cell {
  if (token === ".") return { kind: "empty", solved: 0, spin: 0, fixed: true };

  const [body, spinPart] = token.split("/");
  const spin = spinPart ? Number(spinPart) : 0;

  let kind: CellKind = "pipe";
  let dirs = body;
  if (body.startsWith("S:")) {
    kind = "source";
    dirs = body.slice(2);
  } else if (body.startsWith("T:")) {
    kind = "target";
    dirs = body.slice(2);
  } else if (body.startsWith("-")) {
    dirs = body.slice(1);
  }

  let solved = 0;
  for (const ch of dirs) {
    const bit = BIT[ch];
    if (!bit) throw new Error(`Unknown direction "${ch}" in cell "${token}"`);
    solved |= bit;
  }

  // A cross is the same tile in all four orientations, so turning it would be a
  // move that visibly does nothing. It stays put and the player looks elsewhere.
  const fixed = kind !== "pipe" || solved === 15;
  return { kind, solved, spin: fixed ? 0 : spin, fixed };
}

function level(
  id: string,
  name: string,
  hint: string,
  grid: string[][]
): Level {
  const cells = grid.map((row) => row.map(parseCell));
  return { id, name, hint, rows: cells.length, cols: cells[0].length, cells };
}

export const levels: Level[] = [
  level("first-light", "First Light", "Turn each conduit until the light reaches Moss.", [
    ["S:E", "-EW/1", "-SW/1", "."],
    [".", ".", "-NS/1", "."],
    [".", "-EW/1", "-NE/2", "T:W"],
  ]),
  level("two-ways", "Two Ways", "One lantern, two sleepers. The junction feeds both.", [
    [".", ".", "T:S", ".", "."],
    [".", "-NE/3", "-NS/1", ".", "."],
    ["S:E", "-EW/1", "-NEW/2", "-EW/1", "T:W"],
  ]),
  level("crossing", "Crossing", "The centre tile carries every flow at once. Work outward from it.", [
    [".", ".", "T:S", ".", "."],
    [".", "-SE/1", "-NS/1", ".", "."],
    ["S:E", "-EW/1", "-NESW", "-EW/3", "T:W"],
    [".", ".", "-NS/1", "-EW/2", "."],
    [".", ".", "-NE/1", "-EW/1", "T:W"],
  ]),
];

/** Current openings of a tile, given how far the player has turned it. */
export function openings(cell: Cell, turns: number) {
  return rotate(cell.solved, cell.spin + turns);
}

/**
 * Flood the light outward from every lantern.
 *
 * Returns the set of lit cells as a flat `row * cols + col` lookup, which is
 * what the board needs to paint itself, plus whether every sleeper was reached.
 */
export function solveLight(level: Level, turns: number[][]) {
  const { rows, cols, cells } = level;
  const lit = new Set<number>();
  const key = (r: number, c: number) => r * cols + c;

  const queue: [number, number][] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (cells[r][c].kind === "source") {
        lit.add(key(r, c));
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    const [r, c] = queue.pop()!;
    const here = openings(cells[r][c], turns[r][c]);
    for (const [dr, dc, out, back] of STEP) {
      if (!(here & out)) continue;
      const nr = r + dr;
      const nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
      const neighbour = cells[nr][nc];
      if (neighbour.kind === "empty") continue;
      if (!(openings(neighbour, turns[nr][nc]) & back)) continue;
      const k = key(nr, nc);
      if (lit.has(k)) continue;
      lit.add(k);
      queue.push([nr, nc]);
    }
  }

  let targets = 0;
  let woken = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (cells[r][c].kind !== "target") continue;
      targets++;
      if (lit.has(key(r, c))) woken++;
    }
  }

  return { lit, targets, woken, complete: targets > 0 && woken === targets };
}

/** A fresh turn-count grid: every tile as the level author scrambled it. */
export function freshTurns(level: Level) {
  return level.cells.map((row) => row.map(() => 0));
}
