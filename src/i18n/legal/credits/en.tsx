import { localePath } from "@/i18n/locales";
import { Sources, sections, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, site } from "@/lib/site";

const game = gemfire.name;

const used: Used = {
  craftpix:
    "Most of what you look at: the gems, the raiders and their animations, the turrets, the battlefields, the interface kit, the world maps and skies, and the village tilesets.",
  layerlab:
    "The coin and gem artwork on the shop's shelves, and the icons along the bottom of the screen.",
  envato: "The treasure chests and the way they open, and one of the three raider armies.",
  kaykit:
    "The 3D models your kingdom's buildings are rendered from, and one of its bosses. Released under CC0.",
  gameburp: "Most of the game's sound effects.",
  rpgmagic: "The spells: anything that is cast rather than struck.",
  craftpixMusic: "The music you hear on the menu and over the world map.",
  titan:
    "Every word in the game is set in it. Released under the SIL Open Font License; the copy we ship adds accented letters for Turkish, Polish, Czech and Hungarian names, and is renamed accordingly.",
};

const doc: LegalDoc = {
  title: "Credits",
  description: `The art, sound and software ${game} is built from, and who made it.`,
  intro: `${game} is made by ${site.company}. The artwork and sound in it are licensed from the studios below, who are owed the thanks rather than the fine print.`,
  Body: () => (
    <>
      <p>
        Every pack here was bought outright or released into the public domain, and none of
        the licences asks to be credited. We name them anyway, because somebody drew all of
        it.
      </p>

      <h2>Art</h2>
      <Sources ids={sections.art} used={used} />

      <h2>Sound and music</h2>
      <Sources ids={sections.sound} used={used} />

      <h2>Type</h2>
      <Sources ids={sections.type} used={used} />

      <h2>Software</h2>
      <p>
        Built with <strong>Unity</strong>, on <strong>Google Firebase</strong>. Adverts are
        served through <strong>Unity LevelPlay</strong> and <strong>Google AdMob</strong>, and
        consent is collected through Google&rsquo;s User Messaging Platform. What each of those
        receives, and what it is used for, is set out in the{" "}
        <a href={localePath("en", "/privacy")}>privacy policy</a>.
      </p>

      <h2>Something missing?</h2>
      <p>
        If you made something you can see in {game} and you are not on this list, write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will put it right.
      </p>
    </>
  ),
};

export default doc;
