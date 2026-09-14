# Tekoworld - studio website

The public site for the studio and its games: a company front page, a product page for
**Gemfire**, the policies both app stores require, a support page, and the `app-ads.txt`
that programmatic ad buyers fetch.

Next.js 16 (App Router), React 19, Tailwind v4, TypeScript. Every route is statically
prerendered - there is no server, no database, no cookies and no analytics, which is what
lets the privacy policy say the site does not track you and be telling the truth.

```
npm run dev     # http://localhost:3000
npm run build   # production build; every route is prerendered
npm start       # serve the production build
```

## Before you publish - the edits that matter

Everything below lives in one file: **`src/lib/site.ts`**. Nothing else needs touching.

| Field | Why it matters |
|---|---|
| `site.url` | Canonical URLs, `sitemap.xml`, Open Graph. **Must be the real domain.** See the domain note below. |
| `site.company` | The studio name players see - **Tekoworld**. Shown in the header, the footer and the social card, and named in the policies alongside `entity`. |
| `site.entity` | **Must match the Google Play developer account and the App Store Connect seller.** The policies claim to be issued by whoever this names; a mismatch is something a store review checks. |
| `site.address` | Appears in the privacy policy and terms as the controller's address. |
| `site.jurisdiction` | Governing law in the terms. Should follow the entity, not where you happen to sit. |
| `site.updated` | The revision date on every policy. Bump it when the text changes. |
| `gemfire.stores` | The two listing URLs. Every store button hides itself and says "coming soon" until these are filled in, so the site never shows a dead download link. |

### The domain

The site lives at **`https://www.tekoworld.com`**, the www host, with the bare domain 308-redirecting to it.
Three places have to agree on that spelling, and all three do today:

- `site.url` in `src/lib/site.ts` - canonical URLs, `sitemap.xml`, Open Graph.
- `LegalLinks.Site` in the game repository (`Assets/Game/Scripts/Domain/Privacy/LegalLinks.cs`) -
  the Privacy / Terms / Support links on the game's settings screen.
- The **Developer website** field of both store listings - where ad crawlers look for
  `app-ads.txt`.

If Vercel is ever switched to make the bare domain primary, change all three in the same
change; a canonical URL that redirects is the one failure here that is silent.

### Vocabulary

The store listing, this site and the splash screen say **Gemfire**. Inside the game the
village you build is still called your "groove" (the button on the Profile tab reads
*Hide my groove*, the delete overlay reads *Keep my grove*). The policies and support page
quote the in-game button labels exactly, because a reader has to be able to find them, and
call the village "your kingdom" everywhere else, matching the store screenshots. If the
in-game vocabulary is renamed, update `src/app/delete-account/page.tsx` and
`src/app/support/page.tsx` in the same change.

## How the site is built

**The design system** lives at the top of `src/app/globals.css`. One committed dark look:
a near-black void with the game's own colours in it - the four turret colours (ruby,
emerald, cyan, gold), the ember of the logo and the violet of the enemy side. Depth comes
from light rather than shadow: a surface is a hairline gradient edge over a slightly
lighter glass, and the important thing on a page is the coloured one. Site classes sit in
`@layer components` so a utility written at the call site still wins.

**Artwork** in `public/gemfire/` is generated from the store renders by
`scripts/build-images.py`, which also builds the two social cards and the touch icon:

```
python scripts/build-images.py "C:/path/to/GEMFIRE-STORE"
```

The renders are 2 MB PNGs; the site serves lossy WebP at the widths the layout uses, about
1 MB in total, through `next/image` with static imports so every image has its intrinsic
size and never shifts the layout.

**Copy** for the Gemfire page lives in `src/lib/content.ts` and is lifted from the game's
own content files (`Assets/StreamingAssets/Content/loc/en.json`, `manifest.json`,
`progression.json`): chapter and level names, the twenty turrets and their in-game notes,
the kit, the companions, the lands and the leagues. If a name changes in the game it should
change there in the same commit.

## Where each URL is needed

| URL | Needed by |
|---|---|
| `/gemfire` | The product page - link it from both store listings' marketing URL field |
| `/privacy` | Play Console listing, App Store Connect, **and the AdMob GDPR consent message** |
| `/delete-account` | Google Play - a data deletion URL is mandatory for any app with accounts, and it must be reachable without installing the app or signing in |
| `/terms` | App Store Connect (or Apple's standard EULA), Play listing |
| `/support` | Both stores require a support URL; Apple Guideline 1.2 requires published contact information for an app with user-generated content, which the public keeper names are |
| `/app-ads.txt` | Ad exchanges. Must be on the exact domain in the **Developer website** field of *both* store listings |

## app-ads.txt

`public/app-ads.txt` is served at the site root, which is where crawlers look. It is a copy
of the one in the game repository - **keep the two identical**, and change them in the same
commit as any change to the mediation waterfall.

Only the AdMob line is live. The ironSource / Unity Ads lines are still placeholders: each
network prints its own required line in its dashboard, they are not guessable, and a wrong
publisher id authorises somebody else to sell your inventory. Verify with Google's
app-ads.txt checker in AdMob and with LevelPlay's own checker after deploying, because a
file that is present but unreadable fails silently - lower fill and lower prices, never an
error.

## Deploying

Any static host works. The simplest that also gives you a domain:

- **Vercel** - import the repository, no configuration needed. `www.tekoworld.com` is the
  primary domain and `tekoworld.com` redirects to it.
- **GitHub Pages / Cloudflare Pages** - add `output: "export"` to `next.config.ts`, set
  `images.unoptimized: true`, and publish the `out/` directory.

Whichever you choose, confirm afterwards that `https://<domain>/app-ads.txt` returns **200**
with `Content-Type: text/plain`, follows at most one redirect, and is not behind bot
protection. Cloudflare's bot rules blocking the crawler is the commonest reason a correctly
written file is never read.

## A caveat worth keeping

The policies were written against what the game actually does - the anonymous Firebase
account, the Firestore save in the EU, the public kingdom card and the boards, the store
receipts, the LevelPlay mediation, Firebase Analytics and AppsFlyer attribution - rather
than from a template, so they are unusually specific and should stay that way. They are
still legal documents. Have someone qualified read the controller, retention and liability
sections before you rely on them, because those depend on your corporate structure rather
than on the code.
