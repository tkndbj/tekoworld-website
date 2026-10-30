import { localePath } from "@/i18n/locales";
import {
  Sources,
  buddiesSections,
  sections,
  type BuddiesUsed,
  type Used,
} from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, site } from "@/lib/site";

const game = gemfire.name;
const bb = balanceBuddies.name;

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

const buddiesUsed: BuddiesUsed = {
  craftpix: "The buddies themselves, from the Onet game kit, and the buttons, panels and icons around them.",
  envato:
    "The stones, planks, metal blocks, balls and ice from a physics game block set: everything that is not a buddy and still has to balance.",
  gameburp: "The button click, the balloon pop and the spring's twang.",
  lilita: "Every word in the game. Released under the SIL Open Font License.",
};

const doc: LegalDoc = {
  title: "Credits",
  description: `The art, sound and software ${game} and ${bb} are built from, and who made it.`,
  intro: `${game} and ${bb} are made by ${site.company}. The artwork and sound in them are licensed from the studios below, who are owed the thanks rather than the fine print.`,
  Body: () => (
    <>
      <p>
        Every pack here was bought outright or released into the public domain, and none of
        the licences asks to be credited. We name them anyway, because somebody drew all of
        it.
      </p>

      <h2 id="gemfire">{game}</h2>

      <h3>Art</h3>
      <Sources ids={sections.art} used={used} />

      <h3>Sound and music</h3>
      <Sources ids={sections.sound} used={used} />

      <h3>Type</h3>
      <Sources ids={sections.type} used={used} />

      <h3>Software</h3>
      <p>
        Built with <strong>Unity</strong>, on <strong>Google Firebase</strong>. Adverts are
        served through <strong>Unity LevelPlay</strong> and <strong>Google AdMob</strong>, and
        consent is collected through Google&rsquo;s User Messaging Platform. What each of those
        receives, and what it is used for, is set out in the{" "}
        <a href={localePath("en", "/privacy")}>privacy policy</a>.
      </p>

      <h2 id="balance-buddies">{bb}</h2>

      <h3>Art</h3>
      <Sources ids={buddiesSections.art} used={buddiesUsed} />
      <p>
        The skies, hills, water, mechanisms and the key art were made for the game.
      </p>

      <h3>Sound and music</h3>
      <Sources ids={buddiesSections.sound} used={buddiesUsed} />
      <p>
        The other sounds, the soft chimes tuned to one musical key, and the music were made
        or recorded for the game.
      </p>

      <h3>Type</h3>
      <Sources ids={buddiesSections.type} used={buddiesUsed} />

      <h3>Software</h3>
      <p>
        Built with <strong>Unity</strong>, on <strong>Google Firebase</strong>. Adverts are
        served by <strong>Google AdMob</strong>, and consent is collected through
        Google&rsquo;s User Messaging Platform. See the{" "}
        <a href={localePath("en", "/privacy#balance-buddies")}>privacy policy</a>.
      </p>

      <h2>Something missing?</h2>
      <p>
        If you made something you can see in {game} or {bb} and you are not on this list,
        write to <a href={`mailto:${site.email}`}>{site.email}</a> and we will put it right.
      </p>
    </>
  ),
};

export default doc;
