import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.it.mail;
const label = gameTextFor("it").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/** Translation of support/en.tsx. Button names are the game's own Italian labels. */
const doc: LegalDoc = {
  title: "Assistenza",
  description: `Aiuto con ${game} e ${bb}: progressi persi, acquisti, suggerimenti, pubblicità e account.`,
  intro: `Qualcosa non funziona in ${game} o in ${bb}? Scrivici. Ti legge una persona vera.`,
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

      <h2 id="balance-buddies">{bb}: domande frequenti</h2>

      <div className="not-prose">
        <Question q="Ho perso i progressi dopo aver reinstallato.">
          <p>
            I tuoi progressi vengono salvati nel cloud dal primo puzzle, con un account anonimo
            su quel dispositivo. Reinstallando ne inizia uno nuovo. Per portarli tra
            installazioni o telefoni, apri <strong>Settings</strong> e accedi con Google o
            Apple. Accedi con lo stesso servizio sulla nuova installazione e i progressi
            tornano.
          </p>
          <p>Se non succede, scrivici dall&rsquo;indirizzo di quell&rsquo;accesso.</p>
        </Question>

        <Question q="Ho effettuato l'accesso e i miei progressi sono cambiati.">
          <p>
            Quell&rsquo;account aveva già progressi suoi. Il gioco chiede prima di sostituire
            quelli sul tuo dispositivo e cambia solo se confermi. Gli acquisti fatti sul
            dispositivo restano in ogni caso. Per tornare indietro, esci e accedi con
            l&rsquo;altro account.
          </p>
        </Question>

        <Question q="Come funzionano i suggerimenti?">
          <p>
            Parti con dieci. Sotto i dieci, uno torna da solo ogni quattro ore. Un suggerimento
            mostra un fantasma luminoso dove va il prossimo buddy; un passaggio pagato resta
            svelato gratis quando riprovi e sui tuoi altri dispositivi.
          </p>
          <p>
            Puoi anche guardare un breve video per averne altri due, o comprare un pacchetto nel
            negozio. Ogni puzzle si risolve anche senza.
          </p>
        </Question>

        <Question q="Perché vedo pubblicità tra i puzzle?">
          <p>
            Nei tuoi primi otto puzzle non ce n&rsquo;è nessuna, e mai a metà di un puzzle. Dopo,
            può comparire una breve pubblicità ogni due puzzle risolti; è così che il gioco
            resta gratuito. L&rsquo;abbonamento <strong>No Ads</strong> nel negozio, o i 30
            giorni senza pubblicità dello Starter Bundle, la disattivano.
          </p>
        </Question>

        <Question q="Come annullo l'abbonamento No Ads?">
          <p>
            Nel tuo store, non nel gioco: su Android, Google Play › Pagamenti e abbonamenti ›
            Abbonamenti; su iOS, Impostazioni › il tuo nome › Abbonamenti. Resta attivo fino
            alla fine del mese già pagato. Eliminare l&rsquo;app o l&rsquo;account non lo
            annulla.
          </p>
        </Question>

        <Question q="Ho pagato qualcosa e non l'ho ricevuto.">
          <p>
            Riapri il gioco con la connessione attiva: gli acquisti non completati e un
            abbonamento attivo vengono ripresi all&rsquo;avvio. Se ancora non è arrivato,
            scrivici con la ricevuta o il numero d&rsquo;ordine dello store e sistemiamo noi.
            I rimborsi li gestiscono Apple e Google secondo le loro regole.
          </p>
        </Question>

        <Question q="Come cambio la mia scelta sulla pubblicità?">
          <p>
            <strong>Settings</strong> › <strong>Ad privacy choices</strong>. Il pulsante compare
            ovunque la legge lo richieda, per esempio nell&rsquo;UE e nel Regno Unito.
          </p>
        </Question>

        <Question q="Come elimino il mio account?">
          <p>
            <strong>Settings</strong> › <strong>Delete account</strong> (visibile dopo
            l&rsquo;accesso). Tutti i dettagli in{" "}
            <Link href={localePath("it", "/delete-account#balance-buddies")}>
              eliminare account e dati
            </Link>
            .
          </p>
        </Question>

        <Question q="Il gioco funziona offline?">
          <p>
            Sì. Ogni puzzle gira sul tuo telefono senza connessione, e i progressi vengono
            caricati appena torni online. Pubblicità, negozio e accesso richiedono una
            connessione.
          </p>
        </Question>
      </div>

      <p className="mt-8">
        <a href={mailto(mail.support, bb)}>Scrivici per {bb}</a>
      </p>

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
