/**
 * Dumps the diorama data as JSON so the social-card builder can composite the
 * hero scene offline with exactly the placements the page renders.
 *
 * Run through `node --experimental-strip-types`; `npm run og` does that for you.
 */
import { heroScene, heroAnchors } from "../src/lib/scenes.ts";

console.log(JSON.stringify({ heroScene, heroAnchors }));
