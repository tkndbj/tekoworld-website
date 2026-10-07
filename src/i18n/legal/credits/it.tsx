import { localePath } from "@/i18n/locales";
import { Sources, sections, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, site } from "@/lib/site";

const game = gemfire.name;

const used: Used = {
  craftpix:
    "Quasi tutto quello che vedi: le gemme, i predoni e le loro animazioni, le torrette, i campi di battaglia, il kit dell'interfaccia, le mappe e i cieli del mondo e i tileset del villaggio.",
  layerlab:
    "Le illustrazioni di monete e gemme sugli scaffali del negozio, e le icone in fondo allo schermo.",
  envato: "I forzieri del tesoro e il modo in cui si aprono, e uno dei tre eserciti di predoni.",
  kaykit:
    "I modelli 3D da cui vengono renderizzati gli edifici del tuo regno, e uno dei suoi boss. Pubblicati con licenza CC0.",
  gameburp: "La maggior parte degli effetti sonori del gioco.",
  rpgmagic: "Gli incantesimi: tutto ciò che viene lanciato invece che colpito.",
  craftpixMusic: "La musica del menu e della mappa del mondo.",
  titan:
    "Ogni parola del gioco è scritta con questo carattere. Pubblicato con la SIL Open Font License; la copia che distribuiamo aggiunge lettere accentate per nomi turchi, polacchi, cechi e ungheresi, e per questo ha un altro nome.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Crediti",
  description: `L'arte, il suono e il software di cui è fatto ${game}, e chi li ha creati.`,
  intro: `${game} è fatto da ${site.company}. Illustrazioni e suoni sono concessi in licenza dagli studi qui sotto, a cui si devono i ringraziamenti più che le note legali.`,
  Body: () => (
    <>
      <p>
        Ognuno di questi pacchetti è stato acquistato o pubblicato nel pubblico dominio, e
        nessuna delle licenze chiede di essere citata. Li citiamo comunque, perché qualcuno ha
        disegnato tutto questo.
      </p>

      <h2>Grafica</h2>
      <Sources ids={sections.art} used={used} />

      <h2>Suoni e musica</h2>
      <Sources ids={sections.sound} used={used} />

      <h2>Carattere</h2>
      <Sources ids={sections.type} used={used} />

      <h2>Software</h2>
      <p>
        Realizzato con <strong>Unity</strong>, su <strong>Google Firebase</strong>. La
        pubblicità è servita tramite <strong>Unity LevelPlay</strong> e{" "}
        <strong>Google AdMob</strong>, e il consenso è raccolto con la User Messaging Platform di
        Google. Cosa riceve ciascuno, e a cosa serve, è spiegato nell&rsquo;
        <a href={localePath("it", "/privacy")}>informativa sulla privacy</a>.
      </p>

      <h2>Manca qualcuno?</h2>
      <p>
        Se hai realizzato qualcosa che si vede in {game} e non sei in questo elenco, scrivi a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> e rimedieremo.
      </p>
    </>
  ),
};

export default doc;
