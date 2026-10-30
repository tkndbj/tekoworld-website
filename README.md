# Tekoworld - studio website

The public site for the studio and its games: a company front page, a product page for
each game (**Gemfire** and **Balance Buddies**), the policies both app stores require, a support page, and the `app-ads.txt`
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
| `site.jurisdiction` | Governing law in the terms. Should follow the entity, not where you happen to sit. The translated terms (`src/i18n/legal/terms/*.tsx`) name it in their own words, so a change here is a change there too. |
| `site.updated` | The revision date on every policy, ISO (`2026-10-07`), printed in each language's own format. Bump it when the text changes. |
| `gemfire.stores`, `balanceBuddies.stores` | Each game's two listing URLs. A store button hides itself, and the page says "coming soon" while both are empty, so the site never shows a dead download link. **Balance Buddies' are still empty**: fill them in when its listings go public. |

### The domain

The site lives at **`https://www.tekoworld.com`**, the www host, with the bare domain 308-redirecting to it.
Three places have to agree on that spelling, and all three do today:

- `site.url` in `src/lib/site.ts` - canonical URLs, `sitemap.xml`, Open Graph.
- `LegalLinks.Site` in the Gemfire repository (`Assets/Game/Scripts/Domain/Privacy/LegalLinks.cs`) and
  `AppServices.asset` in the Balance Buddies repository (`privacyPolicyUrl` / `termsUrl` / `supportUrl`) -
  the Privacy / Terms / Support links on each game's settings screen.
- The **Developer website** field of both store listings - where ad crawlers look for
  `app-ads.txt`.

If Vercel is ever switched to make the bare domain primary, change all three in the same
change; a canonical URL that redirects is the one failure here that is silent.

### Vocabulary

The store listing, this site and the splash screen say **Gemfire**. The policies and support
page quote in-game button labels (*Delete account*, *Hide me from the boards*, *Privacy & ad
choices*, ...) and those are not typed here: they are read from the game's own loc tables (see
**Languages** below), so the button a page names is the button on the player's screen, in the
player's language.

## Languages

The site is published in the game's eight languages: English, Spanish, Portuguese (Brazil),
French, German, Italian, Turkish and Polish. `src/i18n/locales.ts` is the list.

**Addresses.** English is unprefixed (`/privacy`, `/gemfire`), exactly as before, because those
URLs are written into both store listings, the AdMob consent message and the game binary. The
other languages live under a prefix (`/es/privacy`, `/tr/gemfire`). Every page is in
`src/app/[lang]/`; `next.config.ts` rewrites the unprefixed English addresses onto `/en/...`
internally (no redirect), and `/en/...` itself 308s back to the unprefixed spelling. Every page
declares its canonical address and `hreflang` alternates, and the sitemap lists every language.

**No redirect by browser language.** A reader whose browser prefers another language the site
has is *offered* it in a small panel (`LanguageSuggestion`), never sent there: a store reviewer or
crawler must get the page it asked for. Choosing a language is remembered for the tab in
`sessionStorage` only, which the privacy policy's "This website" section says.

**Where the words are.**

| What | Where |
|---|---|
| Site copy (header, footer, home, the Gemfire page, 404) | `src/i18n/dictionaries/{lang}.ts`. `en.ts` defines the shape; every other file is typed against it, so a missing key fails the build. |
| Policies, support, deletion, credits | `src/i18n/legal/{page}/{lang}.tsx`, one whole document per language. English is the original; each translation says so and links to it. |
| Names from the game (turrets, kit, chapters, levels, bosses, charms, companions, button labels) | `src/i18n/game-text.ts`, **generated**: `python scripts/sync-game-text.py "<game>/Assets/StreamingAssets/Content/loc"`. Re-run when the game's loc tables change; `--check` fails if the file is stale. |

**Adding a language:** add it to `locales.ts`, add it to the game-text script's list, write
`dictionaries/{lang}.ts` and the five legal documents. The build refuses until all exist.

**Fonts** load the `latin-ext` subset as well as `latin`; Turkish and Polish letters need it.
Capitals come from CSS `text-transform`, which reads `<html lang>`, so Turkish i correctly
becomes İ.

The translations were drafted by Claude, like the game's, and have not been reviewed by native
speakers yet.

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

`public/balance-buddies/` and `public/og-balance-buddies.jpg` come from the Balance Buddies
key art, store screenshots and shop icons through `scripts/build-bb-images.py` (the script
names the files it expects):

```
python scripts/build-bb-images.py "C:/Users/Digikey/Downloads"
```

The renders are 2 MB PNGs; the site serves lossy WebP at the widths the layout uses, about
1 MB in total, through `next/image` with static imports so every image has its intrinsic
size and never shifts the layout.

**The Gemfire page's shape** (which chapters, turrets, kit and charms, in what order and
colour) is in `src/lib/content.ts`; their names and in-game notes come from the game through
`src/i18n/game-text.ts`, and the site's own descriptions from the dictionaries.

**The Balance Buddies page's shape** (screenshots, contraptions, promises, and the numbers
quoted from the game: level count, starter hints) is in `src/lib/balance-buddies.ts`; its
words are the `balanceBuddies` block of each dictionary. It has its own daylight accent
(sky, sun) and face (Lilita One, the game's UI font), scoped to `.font-buddies` /
`.text-buddies` / `.sky-panel` at the end of `globals.css`. The game itself is English-only,
so the policies quote its button names (*Settings*, *Delete account*, *Ad privacy choices*)
in English in every language.

**The policies cover both games.** Each game has its own data table in the privacy policy
(`#balance-buddies` for the second), its own section on the deletion page and its own
support questions; everything else is shared. A new game adds the same three things.

## Where each URL is needed

| URL | Needed by |
|---|---|
| `/gemfire` | Gemfire's product page - link it from both its store listings' marketing URL field |
| `/balance-buddies` | Balance Buddies' product page - the same, for its listings |
| `/privacy` | Play Console listing, App Store Connect, **and the AdMob GDPR consent message** |
| `/delete-account` | Google Play - a data deletion URL is mandatory for any app with accounts, and it must be reachable without installing the app or signing in |
| `/terms` | App Store Connect (or Apple's standard EULA), Play listing |
| `/support` | Both stores require a support URL; Apple Guideline 1.2 requires published contact information for an app with user-generated content, which the public keeper names are |
| `/app-ads.txt` | Ad exchanges. Must be on the exact domain in the **Developer website** field of *both* store listings |
| `/credits` | Nobody - and that is the point. None of the game's art or sound licences requires attribution (CraftPix says so in as many words; Envato, the Unity Asset Store and CC0 say nothing about credit at all), so this is a courtesy list. It is `noindex`, absent from the sitemap and linked only from the footer's small print, because a credits page that outranks the games would be a strange thing to have published. **It lives here rather than in the game because a list frozen into a binary goes stale**: the line it replaced named Freepik for five days after the last Freepik sprite was cut out of the build, and named none of the four suppliers whose work had replaced it. One caveat to keep: if a pack whose licence *does* require attribution is ever used, Freepik's rule is the shape to expect - the credit must be in the app or the store description, and this page would not discharge it. |

## app-ads.txt

`public/app-ads.txt` is served at the site root, which is where crawlers look. Both games
use the same AdMob publisher (`pub-4604184534032643`), so its one `google.com` DIRECT line
authorises Balance Buddies too; Balance Buddies' store listings must name the same developer
website. The file is a copy of the one in the Gemfire repository - **keep the two identical**, and change them in the same
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

The policies were written against what the games actually do - for Gemfire the anonymous
Firebase account, the Firestore save in the EU, the public kingdom card and the boards, the
store receipts, the LevelPlay mediation, Firebase Analytics and AppsFlyer attribution; for
Balance Buddies the anonymous account with optional Google / Apple sign-in, the Firestore save
in the EU (`europe-west1`), hint packs and the No Ads subscription, AdMob with Google's
consent form, Firebase Analytics (ad signals off) and Crashlytics - rather than from a template, so they are unusually specific and should stay that way. They are
still legal documents. Have someone qualified read the controller, retention and liability
sections before you rely on them, because those depend on your corporate structure rather
than on the code.
