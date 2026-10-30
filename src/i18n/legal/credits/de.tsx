import { localePath } from "@/i18n/locales";
import { Sources, buddiesSections, sections, type BuddiesUsed, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, site } from "@/lib/site";

const game = gemfire.name;
const bb = balanceBuddies.name;

const used: Used = {
  craftpix:
    "Das meiste, was du siehst: die Juwelen, die Plünderer und ihre Animationen, die Türme, die Schlachtfelder, das Oberflächen-Kit, die Weltkarten und Himmel und die Tilesets des Dorfs.",
  layerlab:
    "Die Münz- und Juwelengrafiken in den Regalen des Shops und die Symbole am unteren Bildschirmrand.",
  envato: "Die Schatztruhen und wie sie sich öffnen, und eine der drei Plündererarmeen.",
  kaykit:
    "Die 3D-Modelle, aus denen die Gebäude deines Königreichs gerendert werden, und einer seiner Bosse. Veröffentlicht unter CC0.",
  gameburp: "Die meisten Soundeffekte des Spiels.",
  rpgmagic: "Die Zauber: alles, was gewirkt statt geschlagen wird.",
  craftpixMusic: "Die Musik im Menü und auf der Weltkarte.",
  titan:
    "Jedes Wort im Spiel ist darin gesetzt. Veröffentlicht unter der SIL Open Font License; unsere Version ergänzt Buchstaben mit Akzenten für türkische, polnische, tschechische und ungarische Namen und trägt deshalb einen anderen Namen.",
};

const buddiesUsed: BuddiesUsed = {
  craftpix: "Die Buddies selbst, aus dem Onet-Spielkit, und die Knöpfe, Fenster und Symbole um sie herum.",
  envato:
    "Die Steine, Bretter, Metallblöcke, Kugeln und das Eis aus einem Physik-Blockset: alles, was kein Buddy ist und trotzdem ausbalanciert werden muss.",
  gameburp: "Das Klicken der Knöpfe, das Platzen der Ballons und das Schwingen der Feder.",
  lilita: "Jedes Wort im Spiel. Veröffentlicht unter der SIL Open Font License.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Credits",
  description: `Die Grafiken, Klänge und Software, aus denen ${game} und ${bb} gemacht sind, und wer sie gemacht hat.`,
  intro: `${game} und ${bb} werden von ${site.company} gemacht. Grafik und Ton darin sind von den Studios unten lizenziert, denen eher der Dank als das Kleingedruckte gebührt.`,
  Body: () => (
    <>
      <p>
        Jedes dieser Pakete wurde gekauft oder gemeinfrei veröffentlicht, und keine der
        Lizenzen verlangt eine Nennung. Wir nennen sie trotzdem, weil jemand das alles
        gezeichnet hat.
      </p>

      <h2 id="gemfire">{game}</h2>

      <h3>Grafik</h3>
      <Sources ids={sections.art} used={used} />

      <h3>Sound und Musik</h3>
      <Sources ids={sections.sound} used={used} />

      <h3>Schrift</h3>
      <Sources ids={sections.type} used={used} />

      <h3>Software</h3>
      <p>
        Gebaut mit <strong>Unity</strong>, auf <strong>Google Firebase</strong>. Werbung wird
        über <strong>Unity LevelPlay</strong> und <strong>Google AdMob</strong> ausgeliefert, und
        die Einwilligung wird über Googles User Messaging Platform eingeholt. Was jeder davon
        erhält und wofür, steht in der{" "}
        <a href={localePath("de", "/privacy")}>Datenschutzerklärung</a>.
      </p>

      <h2 id="balance-buddies">{bb}</h2>

      <h3>Grafik</h3>
      <Sources ids={buddiesSections.art} used={buddiesUsed} />
      <p>Himmel, Hügel, Wasser, Mechanismen und das Titelbild wurden für das Spiel gemacht.</p>

      <h3>Sound und Musik</h3>
      <Sources ids={buddiesSections.sound} used={buddiesUsed} />
      <p>
        Die übrigen Klänge, die sanften, auf eine Tonart gestimmten Glockentöne und die Musik
        wurden für das Spiel gemacht oder aufgenommen.
      </p>

      <h3>Schrift</h3>
      <Sources ids={buddiesSections.type} used={buddiesUsed} />

      <h3>Software</h3>
      <p>
        Gebaut mit <strong>Unity</strong>, auf <strong>Google Firebase</strong>. Werbung liefert{" "}
        <strong>Google AdMob</strong>, die Einwilligung wird über Googles User Messaging
        Platform eingeholt. Siehe die{" "}
        <a href={localePath("de", "/privacy#balance-buddies")}>Datenschutzerklärung</a>.
      </p>

      <h2>Fehlt jemand?</h2>
      <p>
        Wenn du etwas gemacht hast, das in {game} zu sehen ist, und nicht auf dieser Liste
        stehst, schreib an <a href={`mailto:${site.email}`}>{site.email}</a>, und wir bringen
        das in Ordnung.
      </p>
    </>
  ),
};

export default doc;
