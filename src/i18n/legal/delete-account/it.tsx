import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.it.mail;
const label = gameTextFor("it").labels;
const game = gemfire.name;

/**
 * Translation of delete-account/en.tsx. Button names are the game's own Italian labels, so
 * the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Eliminare l'account e i dati",
  description: `Come eliminare il tuo account di ${game} e i dati conservati con esso.`,
  intro:
    "Puoi far cancellare tutto ciò che conserviamo sul tuo regno. Ecco esattamente cosa succede.",
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Il modo più veloce è nel gioco: la scheda <strong>Profilo</strong>, poi il riquadro{" "}
          <strong>Account</strong>, poi <strong>{label.deleteAccount}</strong>. Ha effetto
          subito.
        </p>
        <p className="mb-2">
          Se non riesci più ad aprire il gioco, scrivi a{" "}
          <a href={mailto(mail.deleteAccount)}>{site.email}</a> e lo faremo noi per te entro 30
          giorni.
        </p>
        <p>
          Eliminare solo l&rsquo;app <strong>non</strong> cancella i dati sui nostri server.
          Toglie solo la copia su quel dispositivo.
        </p>
      </Summary>

      <h2 id="in-app">1. Eliminalo dall&rsquo;interno del gioco</h2>
      <p>
        Questa è la cancellazione vera, non una richiesta di cancellazione. Nessuno la legge,
        nessuno deve approvarla, e non aspetta 30 giorni.
      </p>
      <ol>
        <li>
          Apri {game} e vai alla scheda <strong>Profilo</strong>.
        </li>
        <li>
          Scorri fino al riquadro <strong>Account</strong>.
        </li>
        <li>
          Tocca <strong>{label.deleteAccount}</strong>, il pulsante rosso in fondo a quel
          riquadro.
        </li>
        <li>
          Leggi cosa elenca, poi tocca <strong>{label.deleteEverything}</strong> e conferma
          ancora una volta.
        </li>
      </ol>
      <p>
        Se hai collegato un accesso Apple o Google, ti verrà chiesto prima di accedere di nuovo,
        per essere sicuri che sia davvero tu. Ti serve una connessione a internet: se il gioco
        non riesce a raggiungere i nostri server ti dice che non è stato cancellato nulla,
        perché non diremo mai di aver fatto una cancellazione che non siamo riusciti a fare.
      </p>

      <h2 id="request">2. Oppure scrivici</h2>
      <p>
        Usa questa strada se hai già disinstallato il gioco, hai perso il dispositivo o non
        riesci a raggiungere il pulsante per qualsiasi altro motivo.
      </p>
      <p>
        Gli account sono anonimi, quindi non possiamo cercarti per nome o email a meno che tu
        non abbia collegato un accesso. Se riesci ancora ad aprire il gioco,
        l&rsquo;identificativo del tuo account compare nel riquadro <strong>Account</strong>{" "}
        della scheda <strong>Profilo</strong>. Copialo o fai uno screenshot. Se hai collegato un
        account Apple o Google, puoi saltare questo passaggio e scriverci semplicemente da
        quell&rsquo;indirizzo email.
      </p>
      <p>
        Scrivi a <a href={mailto(mail.deleteAccount)}>{site.email}</a> da qualsiasi indirizzo,
        con oggetto <strong>{mail.deleteAccount}</strong>, e indica l&rsquo;identificativo del
        tuo account o l&rsquo;indirizzo dell&rsquo;accesso collegato.
      </p>
      <p>
        Ti confermeremo la ricezione, verificheremo che l&rsquo;account sia tuo e completeremo
        la cancellazione entro <strong>30 giorni</strong>. Ti avviseremo quando sarà fatto.
      </p>

      <h2 id="what-goes">3. Cosa viene cancellato</h2>
      <ul>
        <li>
          Il tuo account anonimo e qualsiasi accesso Apple o Google collegato.
          L&rsquo;autorizzazione di Accedi con Apple viene revocata presso Apple.
        </li>
        <li>
          I tuoi progressi salvati: assedi completati e stelle, le tue ondate migliori, monete,
          gemme, cuori, indizi, torrette, lo zaino, compagni e tutto il tuo regno.
        </li>
        <li>La tua scheda pubblica del regno e ogni riga che occupavi in classifica.</li>
        <li>
          La prenotazione del tuo nome da custode, che torna libera per chiunque altro.
          L&rsquo;unica eccezione è un nome rifiutato dalla moderazione: quello resta bloccato
          perché nessuno possa riprenderlo.
        </li>
        <li>Le segnalazioni che altri giocatori hanno inviato sul tuo nome.</li>
      </ul>
      <p>È irreversibile. Non abbiamo modo di ripristinare un regno eliminato.</p>

      <h2 id="what-stays">4. Cosa dobbiamo conservare</h2>
      <p>
        Tre cose sopravvivono alla cancellazione, e preferiamo dirlo chiaramente piuttosto che
        sorprenderti dopo:
      </p>
      <ul>
        <li>
          <strong>Registri degli acquisti</strong>: l&rsquo;identificativo della transazione
          dello store e cosa ha acquistato, conservati per il tempo richiesto dalla normativa
          fiscale e contabile (in genere sette anni) e perché la stessa ricevuta non possa essere
          riscattata due volte. Non ci è permesso distruggerli su richiesta. Dopo la
          cancellazione non sono più collegati a nessun progresso di gioco.
        </li>
        <li>
          <strong>Segnalazioni che hai inviato</strong> sui nomi di altri giocatori, per poter
          dimostrare che quei nomi sono stati esaminati.
        </li>
        <li>
          <strong>La traccia della richiesta di cancellazione stessa</strong>, per poter
          dimostrare che le abbiamo dato seguito.
        </li>
      </ul>
      <p>
        Apple e Google conservano i propri registri dei tuoi acquisti, indipendentemente da noi.
        Se vuoi che vengano rimossi, dovrai chiederlo a loro.
      </p>

      <h2 id="less">Se vuoi meno di una cancellazione completa</h2>
      <p>
        Forse non serve cancellare tutto. Ognuna di queste opzioni ha effetto subito, e nessuna
        tocca il resto del tuo account:
      </p>
      <ul>
        <li>
          <strong>Uscire dalla classifica pubblica</strong>: la scheda <strong>Profilo</strong>,
          poi <strong>{label.hideFromBoards}</strong> nella sezione della classifica. La tua
          scheda pubblicata viene ritirata e il tuo nome da custode non è più visibile a
          nessuno. Progressi, acquisti e regno restano intatti.
        </li>
        <li>
          <strong>Revocare il consenso pubblicitario</strong>: <strong>Impostazioni</strong>{" "}
          (l&rsquo;icona dell&rsquo;ingranaggio), poi <strong>{label.privacyChoices}</strong>.
        </li>
        <li>
          <strong>Cambiare il tuo nome da custode</strong>: la scheda <strong>Profilo</strong>,
          poi tocca il tuo nome. Il vecchio nome torna libero e la classifica mostra quello
          nuovo.
        </li>
      </ul>
      <p>
        Se preferisci che facciamo noi una di queste cose per te, scrivi a{" "}
        <a href={mailto(mail.deleteSome)}>{site.email}</a> e dicci quale. Vedi
        l&rsquo;<Link href={localePath("it", "/privacy")}>informativa sulla privacy</Link> per
        sapere cosa riguarda ciascuna.
      </p>
    </>
  ),
};

export default doc;
