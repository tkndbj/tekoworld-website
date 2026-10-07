import { localePath } from "@/i18n/locales";
import { Sources, sections, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, site } from "@/lib/site";

const game = gemfire.name;

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

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Credits",
  description: `Die Grafik, der Sound und die Software, aus denen ${game} besteht, und wer sie gemacht hat.`,
  intro: `${game} wird von ${site.company} gemacht. Grafik und Sound sind von den Studios unten lizenziert, denen eher ein Dank gebührt als das Kleingedruckte.`,
  Body: () => (
    <>
      <p>
        Jedes dieser Pakete wurde gekauft oder gemeinfrei veröffentlicht, und keine der
        Lizenzen verlangt eine Nennung. Wir nennen sie trotzdem, weil jemand das alles
        gezeichnet hat.
      </p>

      <h2>Grafik</h2>
      <Sources ids={sections.art} used={used} />

      <h2>Sound und Musik</h2>
      <Sources ids={sections.sound} used={used} />

      <h2>Schrift</h2>
      <Sources ids={sections.type} used={used} />

      <h2>Software</h2>
      <p>
        Gebaut mit <strong>Unity</strong>, auf <strong>Google Firebase</strong>. Werbung wird
        über <strong>Unity LevelPlay</strong> und <strong>Google AdMob</strong> ausgeliefert, und
        die Einwilligung wird über Googles User Messaging Platform eingeholt. Was jeder davon
        erhält und wofür, steht in der{" "}
        <a href={localePath("de", "/privacy")}>Datenschutzerklärung</a>.
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
