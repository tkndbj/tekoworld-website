import { localePath } from "@/i18n/locales";
import { Sources, buddiesSections, sections, type BuddiesUsed, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, site } from "@/lib/site";

const game = gemfire.name;
const bb = balanceBuddies.name;

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

const buddiesUsed: BuddiesUsed = {
  craftpix: "I buddy stessi, dal kit di gioco Onet, e i pulsanti, i pannelli e le icone intorno a loro.",
  envato:
    "Le pietre, le assi, i blocchi di metallo, le palle e il ghiaccio di un set di blocchi per giochi fisici: tutto ciò che non è un buddy e deve comunque stare in equilibrio.",
  gameburp: "Il clic dei pulsanti, lo scoppio dei palloncini e il rimbalzo della molla.",
  lilita: "Ogni parola del gioco. Pubblicato con la SIL Open Font License.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Crediti",
  description: `La grafica, i suoni e il software con cui sono fatti ${game} e ${bb}, e chi li ha creati.`,
  intro: `${game} e ${bb} sono fatti da ${site.company}. La grafica e i suoni al loro interno sono concessi in licenza dagli studi qui sotto, a cui si devono più ringraziamenti che caratteri piccoli.`,
  Body: () => (
    <>
      <p>
        Ognuno di questi pacchetti è stato acquistato o pubblicato nel pubblico dominio, e
        nessuna delle licenze chiede di essere citata. Li citiamo comunque, perché qualcuno ha
        disegnato tutto questo.
      </p>

      <h2 id="gemfire">{game}</h2>

      <h3>Grafica</h3>
      <Sources ids={sections.art} used={used} />

      <h3>Suoni e musica</h3>
      <Sources ids={sections.sound} used={used} />

      <h3>Carattere</h3>
      <Sources ids={sections.type} used={used} />

      <h3>Software</h3>
      <p>
        Realizzato con <strong>Unity</strong>, su <strong>Google Firebase</strong>. La
        pubblicità è servita tramite <strong>Unity LevelPlay</strong> e{" "}
        <strong>Google AdMob</strong>, e il consenso è raccolto con la User Messaging Platform di
        Google. Cosa riceve ciascuno, e a cosa serve, è spiegato nell&rsquo;
        <a href={localePath("it", "/privacy")}>informativa sulla privacy</a>.
      </p>

      <h2 id="balance-buddies">{bb}</h2>

      <h3>Grafica</h3>
      <Sources ids={buddiesSections.art} used={buddiesUsed} />
      <p>Cieli, colline, acqua, meccanismi e l&rsquo;illustrazione principale sono stati creati per il gioco.</p>

      <h3>Suoni e musica</h3>
      <Sources ids={buddiesSections.sound} used={buddiesUsed} />
      <p>
        Gli altri suoni, i morbidi rintocchi accordati su una sola tonalità e la musica sono
        stati creati o registrati per il gioco.
      </p>

      <h3>Carattere</h3>
      <Sources ids={buddiesSections.type} used={buddiesUsed} />

      <h3>Software</h3>
      <p>
        Realizzato con <strong>Unity</strong>, su <strong>Google Firebase</strong>. La
        pubblicità è fornita da <strong>Google AdMob</strong> e il consenso è raccolto con la
        User Messaging Platform di Google. Vedi l&rsquo;
        <a href={localePath("it", "/privacy#balance-buddies")}>informativa sulla privacy</a>.
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
