import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.it.mail;
const label = gameTextFor("it").labels;
const game = gemfire.name;

/** Translation of support/en.tsx. Button names are the game's own Italian labels. */
const doc: LegalDoc = {
  title: "Assistenza",
  description: `Aiuto con ${game}: progressi persi, acquisti, cuori, pubblicità e account.`,
  intro: `Qualcosa non funziona in ${game}? Scrivici. Ti legge una persona vera.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          Scrivi a {site.email}
        </a>
      </p>

      <p>
        Di solito rispondiamo in un paio di giorni. Aiuta moltissimo se indichi il tuo{" "}
        <strong>identificativo dell&rsquo;account</strong> (scheda Profilo, riquadro Account),
        il modello del tuo dispositivo e cosa ti aspettavi che succedesse.
      </p>

      <h2>Domande frequenti</h2>

      <div className="not-prose">
        <Question q="Ho perso i progressi dopo aver reinstallato.">
          <p>
            Se non hai mai collegato un account Apple o Google, il regno era legato a un account
            anonimo su quel dispositivo, e reinstallando può rimanere indietro. Apri la scheda{" "}
            <strong>Profilo</strong> e accedi con Google o Apple. È questo che fa sopravvivere i
            progressi, in futuro, a un dispositivo perso o azzerato.
          </p>
          <p>
            Se <em>l&rsquo;hai</em> collegato, accedi con lo stesso fornitore e il tuo regno
            dovrebbe tornare. Se non torna, scrivici indicando l&rsquo;indirizzo con cui accedi.
          </p>
        </Question>

        <Question q="Ho pagato qualcosa e non l'ho ricevuto.">
          <p>
            Prima di tutto, riapri il gioco con la connessione attiva. Gli acquisti non
            completati vengono riconsegnati automaticamente all&rsquo;avvio, e un acquisto
            interrotto da un blocco o da una caduta di connessione di solito si risolve così. Il
            pulsante <strong>{label.restorePurchases}</strong> nel negozio fa la stessa cosa su
            richiesta.
          </p>
          <p>
            Se ancora non è arrivato, scrivici con la ricevuta dello store o il numero
            dell&rsquo;ordine e lo sistemeremo direttamente. È più veloce di un rimborso.
          </p>
        </Question>

        <Question q="Come ottengo un rimborso?">
          <p>
            I rimborsi li gestiscono Apple e Google, non noi. Non possiamo emetterne uno al loro
            posto. Usa la procedura di rimborso dello store dalla tua cronologia acquisti.
          </p>
          <p>
            Se il problema è che qualcosa non è arrivato, e non che hai cambiato idea,
            scrivici prima; di solito lo sistemiamo in un giorno.
          </p>
        </Question>

        <Question q="Come funzionano i cuori?">
          <p>
            Un assedio perso costa un cuore, e i cuori tornano da soli col tempo, fino al limite
            della tua fiaschetta. I primi tre assedi di ogni capitolo si possono perdere gratis
            mentre lo impari, e rigiocare un assedio già vinto è sempre gratis.
          </p>
          <p>
            Se li hai finiti, puoi aspettare, guardare un video per averne due o spendere gemme.
            Comprare una fiaschetta più grande alza il limite per sempre.
          </p>
        </Question>

        <Question q="Il pulsante per guardare un video non trova mai un video.">
          <p>
            Significa che in quel momento non c&rsquo;era nessuna pubblicità disponibile. La
            disponibilità varia in base al paese, all&rsquo;ora del giorno e a quanti ne hai già
            visti oggi. Il gioco continua a provare in background, quindi di solito torna a
            funzionare da solo.
          </p>
          <p>
            Non serve mai guardare una pubblicità per finire il gioco. Sono tutte facoltative, e
            niente è bloccato dietro di esse.
          </p>
        </Question>

        <Question q="Come smetto di comparire in classifica?">
          <p>
            Apri la scheda <strong>Profilo</strong> e tocca{" "}
            <strong>{label.hideFromBoards}</strong> nella sezione della classifica. La tua
            scheda viene ritirata e il tuo nome da custode non è più visibile agli altri
            giocatori. Il nome lo conservi nel tuo gioco.
          </p>
        </Question>

        <Question q="Come cambio la mia scelta sulla pubblicità?">
          <p>
            <strong>Impostazioni</strong> (l&rsquo;icona dell&rsquo;ingranaggio nella schermata
            Home o Profilo), poi <strong>{label.privacyChoices}</strong>. Su iOS, il permesso di
            tracciamento, che è separato, si trova in{" "}
            <strong>Impostazioni di iOS › Privacy e sicurezza › Tracciamento</strong>.
          </p>
        </Question>

        <Question q="Come cancello tutto?">
          <p>
            Vedi{" "}
            <Link href={localePath("it", "/delete-account")}>
              come eliminare il tuo account e i tuoi dati
            </Link>
            . Ricorda che eliminare solo l&rsquo;app non cancella ciò che è sui nostri server.
          </p>
        </Question>

        <Question q="Il mio nome da custode è stato rifiutato.">
          <p>
            I nomi devono essere unici, e filtriamo quelli che si spacciano per qualcuno,
            possono essere letti come molestia o contengono caratteri che rompono le voci degli
            altri giocatori in classifica.
          </p>
          <p>
            Un nome rifiutato non ti viene tolto. Lo conservi nel tuo gioco e in classifica
            appari con un nome generato.
          </p>
        </Question>

        <Question q="Il nome di un altro giocatore è offensivo.">
          <p>
            Apri il suo regno dalla classifica e tocca <strong>{label.report}</strong>.
            Esaminiamo ogni segnalazione, e un nome che viola le regole viene sostituito con un
            nome generato. Non ti diremo chi l&rsquo;ha segnalato, e a quella persona non diremo
            che la segnalazione è partita da te.
          </p>
        </Question>

        <Question q="Il gioco funziona offline?">
          <p>
            Sì. Ogni assedio gira sul tuo telefono senza connessione. La classifica, le visite
            ad altri regni, il negozio, i video con premio e l&rsquo;accesso o
            l&rsquo;eliminazione dell&rsquo;account hanno bisogno della connessione, e i bonus
            giornalieri richiedono di andare online una volta per sbloccarli.
          </p>
        </Question>
      </div>

      <h2>Segnalare un problema di sicurezza</h2>
      <p>
        Se hai trovato un modo per rompere l&rsquo;economia, leggere il salvataggio di un altro
        giocatore o arrivare in altro modo a qualcosa a cui non dovresti, diccelo a{" "}
        <a href={mailto(mail.security)}>{site.email}</a> prima di dirlo a chiunque altro. Non
        prenderemo provvedimenti contro di te per una segnalazione fatta in buona fede.
      </p>
    </>
  ),
};

export default doc;
