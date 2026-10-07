import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.it.mail;
const game = gemfire.name;

/** Translation of terms/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Termini di servizio",
  description: `Le regole per giocare a ${game}.`,
  intro: `Questi sono i termini che accetti giocando a ${game}.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Gioca, non barare e non fingerti qualcun altro in classifica. Tutto ciò che compri è
          una licenza per usarlo nel gioco. Monete e gemme non sono denaro e non si possono
          convertire in denaro.
        </p>
        <p>
          I rimborsi li gestiscono Apple e Google, non noi. Se qualcosa va storto, scrivici
          prima di lasciare una recensione a una stella. Preferiamo sistemarlo.
        </p>
      </Summary>

      <h2 id="agreement">1. L&rsquo;accordo</h2>
      <p>
        Questi termini sono un accordo tra te e {site.entity}, che opera come {site.company},
        con sede a {site.address} (&laquo;noi&raquo;). Scaricando o giocando a {game} li
        accetti. Se non li accetti, per favore non giocare.
      </p>
      <p>
        Anche il tuo store di app ha i propri termini, e quando si applicano a un acquisto fatto
        in quello store, valgono insieme a questi.
      </p>
      <p>
        Questi termini sono pubblicati anche in altre lingue. Sono traduzioni di questo testo
        inglese, e se una differisce da esso, vale il testo inglese.
      </p>

      <h2 id="licence">2. La tua licenza</h2>
      <p>
        Ti concediamo una licenza personale, non esclusiva, non trasferibile e revocabile per
        installare e giocare a {game} su dispositivi che controlli, per il tuo divertimento.
        Restiamo proprietari del gioco, delle sue illustrazioni, della sua musica, dei suoi
        livelli e del suo codice. Alcune illustrazioni e alcuni audio sono concessi in licenza da
        terzi, che mantengono i loro diritti.
      </p>
      <p>Ti impegni a non:</p>
      <ul>
        <li>
          modificare, decodificare o decompilare il gioco, salvo dove la legge lo consenta
          espressamente;
        </li>
        <li>
          usare trucchi, automatismi, client modificati o editor di memoria, né interferire in
          altro modo con l&rsquo;economia di gioco;
        </li>
        <li>
          vendere, affittare o trasferire il tuo account, o la valuta e gli oggetti che contiene,
          a nessun altro;
        </li>
        <li>attaccare, sovraccaricare o sondare i nostri server.</li>
      </ul>

      <h2 id="account">3. Il tuo account</h2>
      <p>
        Al primo avvio viene creato per te un account anonimo, perché i tuoi progressi si
        possano salvare. Puoi collegarlo a un account Apple o Google perché sopravviva alla
        perdita del dispositivo.
      </p>
      <p>
        Sei responsabile della sicurezza di qualsiasi accesso collegato. Se perdi l&rsquo;accesso
        a un account anonimo non collegato, per esempio eliminando l&rsquo;app senza averlo
        collegato, i progressi potrebbero non essere recuperabili, e potremmo non riuscire a
        identificarli come tuoi.
      </p>
      <p>
        Un accesso già associato a un altro regno non si può unire al tuo, perché la valuta è
        stata guadagnata e spesa separatamente in ciascuno. Il gioco ti avvisa prima di
        sostituire qualsiasi cosa.
      </p>

      <h2 id="virtual-items">4. Monete, gemme, cuori e oggetti</h2>
      <p>
        Tutto ciò che raccogli o compri nel gioco, comprese monete, gemme, cuori, indizi,
        torrette e i loro potenziamenti, lo zaino, compagni, elementi del regno, terre e
        fiaschette di cuori più grandi, è una{" "}
        <strong>licenza limitata per usarlo all&rsquo;interno di {game}</strong>. Non è denaro,
        né uno strumento finanziario, né una proprietà. In particolare:
      </p>
      <ul>
        <li>non ha valore fuori dal gioco e non si può scambiare con denaro;</li>
        <li>non si può trasferire, vendere o regalare a un altro giocatore;</li>
        <li>
          può essere ribilanciato, modificato o ritirato durante lo sviluppo del gioco, e prezzi
          e ricompense possono cambiare;
        </li>
        <li>
          non sopravvive alla chiusura del tuo account né alla cessazione del gioco, salvo
          diversa disposizione di legge.
        </li>
      </ul>
      <p>
        Le ricompense di pubblicità, forzieri giornalieri, ruota e serie sono assegnate dai
        nostri server. Quando una ricompensa non può essere verificata, per esempio perché un
        salvataggio è stato modificato, può essere rifiutata o annullata.
      </p>

      <h2 id="purchases">5. Acquisti e rimborsi</h2>
      <p>
        Gli acquisti si fanno tramite l&rsquo;App Store di Apple o Google Play, e sono quegli
        store a incassare il pagamento. Non vediamo mai i dati della tua carta. I prezzi
        mostrati nel gioco li stabilisce lo store per il tuo paese.
      </p>
      <p>
        <strong>I rimborsi li gestisce lo store</strong>, secondo la sua politica. Non possiamo
        emettere un rimborso al suo posto. Se ti è stato addebitato un acquisto e non hai
        ricevuto ciò che hai pagato, scrivici prima. Di solito è qualcosa che possiamo sistemare
        direttamente, e più in fretta.
      </p>
      <p>
        Se sei un consumatore nell&rsquo;UE o nel Regno Unito, normalmente hai un diritto di
        recesso di 14 giorni sugli acquisti digitali, ma quel diritto si perde quando la
        fornitura inizia con il tuo consenso, cioè nel momento in cui la valuta arriva nel tuo
        saldo. Questo non pregiudica i tuoi diritti di legge quando un prodotto è difettoso.
      </p>
      <p>
        Se un acquisto viene rimborsato o stornato dopo che la valuta è stata assegnata, possiamo
        ridurre il tuo saldo dell&rsquo;importo corrispondente, e una fiaschetta di cuori
        rimborsata riporta la tua capacità di cuori a quella di prima.
      </p>

      <h2 id="boards">6. Nomi, classifica e visite</h2>
      <p>
        Se scegli un nome da custode e lasci attiva la classifica, quel nome, il tuo avatar, il
        tuo livello, il punteggio del tuo regno e la tua lega sono visibili agli altri
        giocatori, e altri giocatori possono visitare il tuo regno per vederlo. Scegli di
        conseguenza.
      </p>
      <p>Possiamo rifiutare, cambiare o rimuovere un nome che:</p>
      <ul>
        <li>si spacci per un&rsquo;altra persona, un&rsquo;azienda o per noi;</li>
        <li>sia offensivo o possa essere letto come molestia;</li>
        <li>contenga caratteri che rompono la visualizzazione delle voci degli altri giocatori.</li>
      </ul>
      <p>
        Un nome rifiutato non ti viene tolto: lo conservi nel tuo gioco e in classifica appari
        con un nome generato. Gli altri giocatori possono segnalare un nome che ritengono
        contrario a queste regole, e noi esaminiamo ogni segnalazione. Puoi uscire del tutto
        dalla classifica dalla scheda Profilo.
      </p>

      <h2 id="availability">7. Il gioco può cambiare</h2>
      <p>
        Aggiungiamo capitoli, regoliamo difficoltà e ricompense, correggiamo difetti e a volte
        togliamo cose che non funzionano. Possiamo sospendere il servizio per manutenzione e,
        prima o poi, potremmo cessare il gioco; in quel caso daremo un preavviso ragionevole nel
        gioco o su questo sito, quando possibile.
      </p>
      <p>
        Non promettiamo che il gioco funzioni senza interruzioni o errori, e alcune funzioni,
        tra cui la classifica, il negozio e i video con premio, richiedono una connessione a
        internet.
      </p>

      <h2 id="suspension">8. Sospensione</h2>
      <p>
        Possiamo sospendere o chiudere un account che viola questi termini, in particolare uno
        usato per barare, per frodare l&rsquo;economia o per molestare altri giocatori. Quando
        è proporzionato, avvisiamo prima. Puoi smettere di giocare in qualsiasi momento ed
        eliminare i tuoi dati come descritto nella{" "}
        <Link href={localePath("it", "/delete-account")}>pagina di eliminazione</Link>.
      </p>

      <h2 id="liability">9. Esclusioni e responsabilità</h2>
      <p>
        Il gioco è fornito &laquo;così com&rsquo;è&raquo;. Nella misura massima consentita dalla
        legge, escludiamo le garanzie implicite di commerciabilità e di idoneità a uno scopo
        particolare.
      </p>
      <p>
        Nulla di quanto qui previsto limita la responsabilità per morte o lesioni personali
        causate da negligenza, per frode o per qualsiasi altra cosa che non possa essere
        limitata per legge. Fatto salvo questo, la nostra responsabilità complessiva nei tuoi
        confronti è limitata al maggiore tra l&rsquo;importo che ci hai pagato nei dodici mesi
        precedenti la richiesta e 50 €.
      </p>
      <p>
        <strong>
          Se sei un consumatore, nulla in questi termini pregiudica i tuoi diritti di legge.
        </strong>
      </p>

      <h2 id="law">10. Legge applicabile</h2>
      <p>
        Questi termini sono regolati dalle leggi della Repubblica di Cipro. Se sei un
        consumatore, mantieni anche la tutela delle norme inderogabili del paese in cui vivi, e
        puoi agire in giudizio lì.
      </p>

      <h2 id="apple">11. Una nota richiesta da Apple</h2>
      <p>
        Questo accordo è tra te e noi, non con Apple, e Apple non è responsabile del gioco né
        dei suoi contenuti. Apple non ha alcun obbligo di fornire assistenza per esso. Se
        l&rsquo;app non è conforme a una garanzia applicabile, puoi informarne Apple, e Apple
        rimborserà il prezzo d&rsquo;acquisto; nella misura massima consentita dalla legge,
        Apple non ha altri obblighi di garanzia. Apple e le sue controllate sono terzi
        beneficiari di questi termini e possono farli valere nei tuoi confronti.
      </p>

      <h2 id="contact">12. Contatti</h2>
      <p>
        {site.entity}, che opera come {site.company}
        <br />
        {site.address}
        <br />
        <a href={mailto(mail.terms)}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
