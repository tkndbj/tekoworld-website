import type { Metadata } from "next";
import { LegalPage } from "@/components/SiteChrome";
import { gemfire, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Credits",
  description: `The art, sound and software ${gemfire.name} is built from, and who made it.`,
  // Deliberately kept out of the search index and out of the sitemap. None of these
  // licences requires this page to exist - it is a courtesy, and a courtesy that ranks
  // above the game itself would be a strange thing to have published.
  robots: { index: false, follow: true },
};

/**
 * One supplier: who they are, what of theirs is in the game, and where to find them.
 *
 * A row rather than a paragraph because this is a list that grows every time a pack is
 * bought, and a list somebody has to re-write in prose is a list that goes stale. That is
 * not hypothetical - this page exists because the line it replaces, frozen inside the
 * game's own settings panel, went on naming a supplier for five days after the last of
 * their artwork had been cut out of the build, and named none of the four suppliers whose
 * work had replaced it. Here it is one commit and no app update.
 */
function Source({
  name,
  href,
  used,
}: {
  name: string;
  href?: string;
  used: string;
}) {
  return (
    <li className="border-b border-line py-4 last:border-b-0">
      <p className="font-display text-base font-semibold text-ink">
        {href ? (
          <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors hover:text-cyan"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink-2">{used}</p>
    </li>
  );
}

export default function Credits() {
  const game = gemfire.name;

  return (
    <LegalPage
      title="Credits"
      intro={`${game} is made by ${site.company}. The artwork and sound in it are licensed from the studios below, who are owed the thanks rather than the fine print.`}
    >
      <p>
        Every pack here was bought outright or released into the public domain, and none of
        the licences asks to be credited. We name them anyway, because somebody drew all of
        it.
      </p>

      <h2>Art</h2>
      <ul className="not-prose">
        <Source
          name="CraftPix"
          href="https://craftpix.net/"
          used="Most of what you look at: the gems, the raiders and their animations, the turrets, the battlefields, the interface kit, the world maps and skies, and the village tilesets."
        />
        <Source
          name="Layer Lab"
          href="https://assetstore.unity.com/publishers/38912"
          used="The coin and gem artwork on the shop's shelves, and the icons along the bottom of the screen."
        />
        <Source
          name="Envato — GraphicRiver"
          href="https://graphicriver.net/"
          used="The treasure chests and the way they open, and one of the three raider armies."
        />
        <Source
          name="KayKit, by Kay Lousberg"
          href="https://kaylousberg.itch.io/"
          used="The 3D models your kingdom's buildings are rendered from, and one of its bosses. Released under CC0."
        />
      </ul>

      <h2>Sound and music</h2>
      <ul className="not-prose">
        <Source
          name="GameBurp — 2000 Game Sound FX Collection"
          used="Most of the game's sound effects."
        />
        <Source
          name="RPG Magic Sound Effects Pack"
          used="The spells: anything that is cast rather than struck."
        />
        <Source
          name="CraftPix"
          href="https://craftpix.net/"
          used="The music you hear on the menu and over the world map."
        />
      </ul>

      <h2>Type</h2>
      <ul className="not-prose">
        <Source
          name="Titan One, by Rodrigo Fuenzalida"
          href="https://fonts.google.com/specimen/Titan+One"
          used="Every word in the game is set in it. Released under the SIL Open Font License; the copy we ship adds accented letters for Turkish, Polish, Czech and Hungarian names, and is renamed accordingly."
        />
      </ul>

      <h2>Software</h2>
      <p>
        Built with <strong>Unity</strong>, on <strong>Google Firebase</strong>. Adverts are
        served through <strong>Unity LevelPlay</strong> and <strong>Google AdMob</strong>, and
        consent is collected through Google&rsquo;s User Messaging Platform. What each of those
        receives, and what it is used for, is set out in the{" "}
        <a href="/privacy">privacy policy</a>.
      </p>

      <h2>Something missing?</h2>
      <p>
        If you made something you can see in {game} and you are not on this list, write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will put it right.
      </p>
    </LegalPage>
  );
}
