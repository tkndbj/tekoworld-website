# Glimmer Groove — website

The public site for the game: a playable front page, the policies both app stores require, a
support page, and the `app-ads.txt` that programmatic ad buyers fetch.

Next.js 16 (App Router), React 19, Tailwind v4, TypeScript. Every route is statically
prerendered — there is no server, no database, no cookies and no analytics, which is what
lets the privacy policy say the site does not track you and be telling the truth.

```
npm run dev     # http://localhost:3000
npm run build   # production build; every route is prerendered
npm start       # serve the production build
```

## Before you publish — the edits that matter

Everything below lives in one file: **`src/lib/site.ts`**. Nothing else needs touching.

| Field | Why it matters |
|---|---|
| `url` | Canonical URLs, `sitemap.xml`, Open Graph. Must be the real domain. |
| `publisher` | The studio name players see — **Tekoworld**. Shown in the header, the footer and the social card, and named in the policies alongside `entity` so a reviewer can match the store listing to the legal entity. |
| `entity` | **Must match the Google Play developer account and the App Store Connect seller.** The policies claim to be issued by whoever this names; a mismatch is something a store review checks. |
| `address` | Appears in the privacy policy and terms as the controller's address. |
| `jurisdiction` | Governing law in the terms. Should follow the entity, not where you happen to sit. |
| `stores` | The two listing URLs. The home page hides the buttons and says "coming soon" until these are filled in, so it is never showing a dead download link. |
| `updated` | The revision date on every policy. Bump it when the text changes. |

`game` is set to **Glimmer Groove**, two o's, which is the published product name and matches
the Firebase project, the AdMob app entry and the domain. Some strings inside the game still
say "Grove" — those are the ones that need correcting, so that the store listing, the domain
and the app's own text all agree. AdMob matches the app name against the store listing during
review.

## How the front page is built

Everything on it is made from the game's own art, so the site and the game cannot drift
apart visually.

**The design system** lives at the top of `src/app/globals.css`. Two ideas carry it:

- *Tokens, light-first.* Colours are lifted from the tileset. Only the tokens that change are
  restated for dark, so a colour can never be defined solely inside a media query and go
  missing in the other mode. Dark is dusk in the same grove, not a grey inversion.
- *The slab.* Every raised surface — card, button, chip — is a flat top face over a solid
  slab of colour, with no blurred shadows anywhere. It is the isometric tile, flattened.
  It is called `slab` and not `block` because Tailwind owns `block` as a display utility.

Site classes sit in `@layer components` so a utility written at the call site still wins.
Unlayered CSS outranks every Tailwind layer, which is a very quiet way to break `lg:hidden`.

**The dioramas** (`src/lib/scenes.ts`, `src/components/iso/`) are lists of sprites placed on
the game's 2:1 isometric lattice. A scene is authored in pixels at a fixed size and rendered
in percentages, so it scales to any width with no script and no reflow. Keeping scenes as
data also means one can be composited offline and looked at as an image before it ships,
which is what `scripts/build-og.py` does to make the social card.

**The playable glade** (`src/lib/puzzle.ts`, `src/components/home/PuzzleDemo.tsx`) runs the
real rule, not a video of it. Levels are authored in their solved state and scrambled by a
recorded number of quarter-turns, so every one is solvable by construction. The board is
fully keyboard operable and announces its state.

## Regenerating the art

`public/art/` and `src/lib/art.ts` are generated. The source packs are not in this repository
— they are licensed art and they are large.

```
ART_VILLAGE=/path/to/village-assets ART_2D="/path/to/2D ASSETS" npm run art
npm run og      # rebuilds public/og.png from the hero scene
```

Flat tiles are written as lossless WebP; the companion sprite strips are lossy, because
quantising a smooth gradient bands it visibly. The whole art payload is about 1 MB, and the
sprite strips inside that are only fetched when a companion scrolls into view.

## Where each URL is needed

| URL | Needed by |
|---|---|
| `/privacy` | Play Console listing, App Store Connect, **and the AdMob GDPR consent message** |
| `/delete-account` | Google Play — a data deletion URL is mandatory for any app with accounts, and it must be reachable without installing the app or signing in |
| `/terms` | App Store Connect (or Apple's standard EULA), Play listing |
| `/support` | Both stores require a support URL |
| `/app-ads.txt` | Ad exchanges. Must be on the exact domain in the **Developer website** field of *both* store listings |

## app-ads.txt

`public/app-ads.txt` is served at the site root, which is where crawlers look. It is a copy
of the one in the game repository — **keep the two identical**, and change them in the same
commit as any change to the mediation waterfall.

Most lines are still placeholders. Each network prints its own required line in its
dashboard; they are not guessable, and a wrong publisher id authorises somebody else to sell
your inventory. Verify with Google's app-ads.txt checker in AdMob and with LevelPlay's own
checker after deploying, because a file that is present but unreadable fails silently — it
produces lower fill and lower prices, never an error.

## Deploying

Any static host works. The simplest that also gives you a domain:

- **Vercel** — import the repository, no configuration needed.
- **GitHub Pages / Cloudflare Pages** — add `output: "export"` to `next.config.ts` and publish
  the `out/` directory.

Whichever you choose, confirm afterwards that `https://<domain>/app-ads.txt` returns **200**
with `Content-Type: text/plain`, follows at most one redirect, and is not behind bot
protection. Cloudflare's bot rules blocking the crawler is the commonest reason a correctly
written file is never read.

## A caveat worth keeping

These documents were written against what the game actually does — the anonymous Firebase
account, the Firestore save, the published grove card, the store receipts, the mediation
SDKs — rather than from a template, so they are unusually specific and should stay that way.
They are still legal documents. Have someone qualified read the controller, retention and
liability sections before you rely on them, because those depend on your corporate structure
rather than on the code.
