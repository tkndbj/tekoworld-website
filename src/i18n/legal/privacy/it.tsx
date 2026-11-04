import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.it.mail;
const label = gameTextFor("it").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/** Translation of privacy/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Informativa sulla privacy",
  description: `Come ${site.company}, ${game} e ${bb} trattano i tuoi dati, in parole semplici.`,
  intro: `Qui spieghiamo cosa raccolgono su di te i nostri giochi, ${game} e ${bb}, e questo sito, perché, e cosa puoi fare al riguardo.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Puoi giocare a tutto {game} senza darci il tuo nome, il tuo indirizzo email o
          qualsiasi altra informazione su di te. Viene creato un account anonimo perché i tuoi
          progressi si possano salvare e ripristinare. Identifica un salvataggio, non una
          persona.
        </p>
        <p className="mb-2">
          Mostriamo pubblicità solo quando scegli di guardarne una, e la forniscono terze parti
          che possono usare un identificativo pubblicitario. Nell&rsquo;UE e nel Regno Unito ti
          viene chiesto prima, e puoi cambiare la tua risposta in qualsiasi momento dalla
          schermata delle impostazioni.
        </p>
        <p>
          Non vendiamo i tuoi dati. Non ci interessa chi sei, solo che il gioco funzioni.
        </p>
        <p className="mt-2">
          Lo stesso vale per {bb}: nessun nome, nessun indirizzo email, solo un account anonimo
          per i tuoi salvataggi. {bb} mostra anche pubblicità tra un puzzle e l&rsquo;altro.
        </p>

      </Summary>

      <h2 id="who-we-are">Chi siamo</h2>
      <p>
        {game} è pubblicato da {site.entity}, che opera come {site.company}, con sede a{" "}
        {site.address}, lo stesso editore indicato nella scheda dello store. Ai fini del
        Regolamento generale sulla protezione dei dati dell&rsquo;UE e del Regno Unito, siamo
        il titolare del trattamento delle informazioni descritte qui. Puoi scriverci a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Questa informativa riguarda {game} e {bb} su Android e iOS, e questo sito. Entrambi i
        giochi sono pubblicati da {site.entity}, con il nome {site.company}. Sono app separate,
        con account e salvataggi separati: tra loro non viene condiviso nulla. Ciò che ogni
        gioco raccoglie è nella sua tabella, prima {game} e poi{" "}
        <a href="#balance-buddies">{bb}</a>; tutto il resto di questa informativa vale per
        entrambi.
      </p>

      <h2 id="what-we-collect">Cosa raccogliamo, e perché</h2>
      <p>
        Abbiamo cercato di essere precisi invece di sembrare esaustivi. Se qualcosa non è in
        questa tabella, il gioco non lo raccoglie.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cosa</th>
              <th>Perché</th>
              <th>Quando</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Un identificativo di account anonimo</strong>, generato da Firebase
                Authentication
              </td>
              <td>
                Perché i tuoi progressi si salvino sui nostri server e si ripristinino su un
                nuovo dispositivo. È una stringa casuale. Non è collegata al tuo nome, alla tua
                email o al tuo numero di telefono, a meno che tu non scelga di collegare un
                account di accesso.
              </td>
              <td>Primo avvio</td>
            </tr>
            <tr>
              <td>
                <strong>I tuoi progressi di gioco</strong>: quali assedi hai completato e con
                quante stelle, la tua ondata migliore nella Veglia Infinita, le tue monete,
                gemme, cuori e indizi, le torrette, lo zaino e i compagni che possiedi, la
                disposizione del tuo regno e le terre su cui sorge, la tua serie giornaliera e le
                tue impostazioni
              </td>
              <td>
                Perché il gioco riprenda da dove avevi lasciato e gli stessi progressi compaiano
                sugli altri tuoi dispositivi.
              </td>
              <td>Mentre giochi</td>
            </tr>
            <tr>
              <td>
                <strong>Una scheda pubblica del regno</strong>: il nome da custode che hai
                scelto, il compagno che usi come avatar, il tuo livello da custode, il punteggio
                e le stelle del tuo regno e la tua lega
              </td>
              <td>
                Perché gli altri giocatori ti vedano in classifica e visitino il tuo regno. È
                l&rsquo;unica informazione che gli altri giocatori possono vedere. Puoi
                disattivarla in qualsiasi momento dalla scheda Profilo, e la tua scheda viene
                ritirata.
              </td>
              <td>Finché la classifica è attiva</td>
            </tr>
            <tr>
              <td>
                <strong>Il nome da custode che scegli</strong>, conservato come prenotazione
                perché due giocatori non possano prendere lo stesso
              </td>
              <td>
                Per mantenere i nomi unici. Il nome lo scegli tu; non usare il tuo vero nome se
                preferisci che non sia pubblico.
              </td>
              <td>Se imposti un nome</td>
            </tr>
            <tr>
              <td>
                <strong>Un accesso collegato</strong>: un identificativo di Apple o Google, e
                quello che quel fornitore ci trasmette, che può includere il tuo indirizzo email
              </td>
              <td>
                Solo se scegli di collegare un account perché i tuoi progressi sopravvivano alla
                perdita del dispositivo. Non riceviamo mai la tua password.
              </td>
              <td>Solo se colleghi un account</td>
            </tr>
            <tr>
              <td>
                <strong>Registri degli acquisti</strong>: l&rsquo;identificativo della
                transazione dello store e cosa è stato acquistato
              </td>
              <td>
                Per confermare un acquisto con Apple o Google e darti quello che hai pagato, una
                volta sola. <strong>Non vediamo mai i dati della tua carta</strong>. Il
                pagamento avviene nello store, non nel gioco.
              </td>
              <td>Se acquisti qualcosa</td>
            </tr>
            <tr>
              <td>
                <strong>Identificativi pubblicitari e dati collegati</strong>, gestiti dai nostri
                partner pubblicitari
              </td>
              <td>
                Per mostrare le pubblicità che scegli di guardare, e per pagare il fatto che il
                gioco sia gratis. Vedi <a href="#advertising">Pubblicità</a> più sotto.
              </td>
              <td>Quando guardi una pubblicità</td>
            </tr>
            <tr>
              <td>
                <strong>Statistiche di gioco</strong>: eventi come un assedio iniziato, vinto o
                perso, una torretta comprata, un forziere aperto o un acquisto completato, con un
                identificativo del dispositivo
              </td>
              <td>
                Per vedere dove i giocatori si bloccano e quali parti del gioco non funzionano.
                Gestite da Google Analytics per Firebase. Vedi{" "}
                <a href="#analytics">Statistiche e attribuzione</a> più sotto.
              </td>
              <td>Mentre giochi, con il tuo consenso quando richiesto</td>
            </tr>
            <tr>
              <td>
                <strong>Attribuzione dell&rsquo;installazione</strong>: quale pubblicità o link,
                se c&rsquo;è stato, ti ha portato a installare il gioco, e la conferma degli
                acquisti che fai
              </td>
              <td>
                Per sapere quale nostra pubblicità vale la pena pagare. Gestita da AppsFlyer.
              </td>
              <td>Una volta, dopo che la scelta sul consenso è nota</td>
            </tr>
            <tr>
              <td>
                <strong>Una segnalazione che invii</strong> sul nome da custode di un altro
                giocatore
              </td>
              <td>
                Per poter esaminare il nome e, se serve, sostituirlo. La segnalazione registra
                quale account l&rsquo;ha inviata, perché non si possano falsificare.
              </td>
              <td>Solo se segnali un nome</td>
            </tr>
            <tr>
              <td>
                <strong>Informazioni tecniche di base</strong>: modello del dispositivo,
                versione del sistema operativo, lingua e diagnostica degli errori
              </td>
              <td>
                Per capire perché qualcosa si è bloccato o una schermata è stata disegnata male
                su un dispositivo che non abbiamo.
              </td>
              <td>Quando serve</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="balance-buddies">Cosa raccoglie {bb}, e perché</h2>
      <p>
        {bb} è costruito allo stesso modo, con meno cose dentro: niente classifiche pubbliche,
        niente nomi dei giocatori, niente visite e niente messaggi. I suoi dati sono in un
        progetto Firebase a parte, separato da quello di {game}, anch&rsquo;esso
        nell&rsquo;Unione europea. Se qualcosa non è in questa tabella, {bb} non lo raccoglie.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cosa</th>
              <th>Perché</th>
              <th>Quando</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Un identificativo di account anonimo</strong>, generato da Firebase
                Authentication
              </td>
              <td>
                Per salvare i tuoi progressi dal primo puzzle e ripristinarli su un nuovo
                dispositivo. È una stringa casuale, collegata a te solo se colleghi un accesso.
              </td>
              <td>La prima volta che il gioco è online</td>
            </tr>
            <tr>
              <td>
                <strong>I tuoi progressi</strong>: i puzzle risolti, le mosse e le stelle
                migliori, il saldo dei suggerimenti e i passaggi svelati, il tempo senza
                pubblicità, da dove riprendere, le impostazioni e un identificativo casuale per
                ogni dispositivo su cui giochi
              </td>
              <td>
                Perché il gioco riprenda da dove avevi lasciato, e per unire i progressi di più
                dispositivi senza perderne nessuno.
              </td>
              <td>Mentre giochi</td>
            </tr>
            <tr>
              <td>
                <strong>Un accesso collegato</strong>: un identificativo di Google o Apple e ciò
                che quel servizio ci trasmette, che può includere il tuo nome e il tuo indirizzo
                email
              </td>
              <td>
                Solo se scegli di accedere, così i progressi ti seguono su un altro dispositivo.
                Non riceviamo mai la tua password.
              </td>
              <td>Solo se accedi</td>
            </tr>
            <tr>
              <td>
                <strong>Le ricevute d&rsquo;acquisto</strong>: l&rsquo;identificativo della
                transazione dello store e cosa è stato acquistato (un pacchetto di
                suggerimenti, lo Starter Bundle o l&rsquo;abbonamento No Ads)
              </td>
              <td>
                Per darti una sola volta ciò che hai pagato, e sapere se un abbonamento è
                attivo. <strong>Non vediamo mai i dati della tua carta</strong>.
              </td>
              <td>Se acquisti qualcosa</td>
            </tr>
            <tr>
              <td>
                <strong>Identificativi pubblicitari e dati collegati</strong>, gestiti da Google
                AdMob
              </td>
              <td>
                Per mostrare la pubblicità tra i puzzle e i video che scegli di guardare per i
                suggerimenti. Vedi <a href="#advertising">Pubblicità</a> più sotto.
              </td>
              <td>Quando viene richiesta una pubblicità</td>
            </tr>
            <tr>
              <td>
                <strong>Statistiche di gioco</strong>: eventi come un puzzle iniziato, risolto
                o ricominciato, con mosse, stelle e tempo impiegato, un suggerimento usato,
                l&rsquo;accesso e l&rsquo;uscita, con un identificativo del dispositivo e il tuo
                identificativo di account
              </td>
              <td>
                Per capire quali puzzle sono troppo difficili e cosa non funziona. Gestite da
                Google Analytics for Firebase, con le funzioni pubblicitarie disattivate.
              </td>
              <td>Mentre giochi</td>
            </tr>
            <tr>
              <td>
                <strong>Rapporti sugli arresti anomali</strong>: modello del dispositivo,
                versione del sistema, lo stato dell&rsquo;app al momento del crash e il tuo
                identificativo di account
              </td>
              <td>Per trovare e correggere i crash. Gestiti da Firebase Crashlytics.</td>
              <td>Se il gioco va in crash</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        {bb} non usa l&rsquo;attribuzione delle installazioni, non chiede a iOS il permesso
        di tracciarti e non raccoglie nulla di quanto elencato più sotto in &laquo;cosa non
        raccogliamo di proposito&raquo;.
      </p>

      <h3>Cosa non raccogliamo, di proposito</h3>
      <ul>
        <li>Il tuo nome, a meno che tu non lo scriva come nome da custode.</li>
        <li>Il tuo indirizzo email, a meno che tu non ci scriva o colleghi un account di accesso.</li>
        <li>I tuoi contatti, foto, microfono, fotocamera o posizione precisa.</li>
        <li>I dati della tua carta di pagamento. Non arrivano mai a noi.</li>
        <li>Messaggi. Non c&rsquo;è chat, né alcun modo per i giocatori di contattarsi.</li>
      </ul>

      <h2 id="legal-bases">Le nostre basi giuridiche (Regno Unito e UE)</h2>
      <ul>
        <li>
          <strong>Esecuzione di un contratto</strong>: salvare e ripristinare i tuoi progressi e
          onorare un acquisto. Senza questo il gioco non funziona.
        </li>
        <li>
          <strong>Consenso</strong>: pubblicità personalizzata, statistiche di gioco e
          attribuzione delle installazioni quando la legge richiede il consenso, e la presenza
          nella classifica pubblica. Tutto questo è facoltativo e tutto si può revocare.
        </li>
        <li>
          <strong>Legittimo interesse</strong>: far funzionare il gioco, diagnosticare i
          blocchi, esaminare i nomi segnalati, e prevenire frodi e abusi dell&rsquo;economia di
          gioco.
        </li>
        <li>
          <strong>Obbligo legale</strong>: conservare i registri degli acquisti per fini fiscali
          e contabili.
        </li>
      </ul>

      <h2 id="advertising">Pubblicità</h2>
      <p>
        Il gioco è gratis, e la pubblicità è ciò che lo paga. La pubblicità è facoltativa nel
        senso che conta: niente pubblicità tra i livelli e niente banner. Ogni pubblicità in{" "}
        {game} è una che scegli di guardare in cambio di cuori, monete o un indizio, e ogni tipo
        ha un limite giornaliero.
      </p>
      <p>
        La pubblicità è fornita da <strong>Unity LevelPlay</strong> (ironSource) come
        piattaforma di mediazione e dalle reti pubblicitarie con cui lavora, che attualmente
        includono <strong>Unity Ads</strong> e <strong>Google AdMob</strong>. Questi partner
        sono titolari autonomi dei dati che raccolgono e hanno le proprie informative:
      </p>
      <ul>
        <li>
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">
            Unity: informativa sulla privacy per giocatori e utenti delle app
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            Google: come Google utilizza le informazioni di siti o app che utilizzano i suoi
            servizi
          </a>
        </li>
      </ul>

      <h3>In {bb}</h3>
      <p>
        Nessuna pubblicità nei tuoi primi otto puzzle, mai a metà di un puzzle e niente
        banner. Dopo, uscendo dalla schermata di vittoria, può comparire una pubblicità a
        schermo intero ogni due puzzle risolti. I video che ti danno due suggerimenti sono
        sempre una tua scelta. L&rsquo;abbonamento No Ads, e i giorni senza pubblicità dello
        Starter Bundle, disattivano la pubblicità tra i puzzle.
      </p>
      <p>
        La pubblicità di {bb} è fornita solo da <strong>Google AdMob</strong>, titolare
        autonomo dei dati che raccoglie (vedi l&rsquo;informativa di Google qui sopra). Su
        Android, AdMob può usare l&rsquo;ID pubblicità del dispositivo, che puoi reimpostare o
        eliminare nelle impostazioni di Android. {bb} non chiede a iOS il permesso di
        tracciamento, quindi su iOS l&rsquo;identificativo pubblicitario non gli è disponibile.
      </p>
      <p>
        Nello SEE e nel Regno Unito anche {bb} ti chiede prima il consenso, con un modulo
        certificato da Google. Puoi cambiare la tua risposta in qualsiasi momento da{" "}
        <strong>Settings</strong> (Impostazioni) › <strong>Ad privacy choices</strong>; il
        pulsante compare ovunque la legge lo richieda.
      </p>

      <h3>La tua scelta, e come cambiarla</h3>
      <p>
        Se ti trovi nello Spazio economico europeo o nel Regno Unito, ti viene chiesto prima di
        qualsiasi pubblicità personalizzata, con un modulo di consenso certificato da Google. Se
        rifiuti, vedrai comunque pubblicità e riceverai comunque le ricompense per averle
        guardate. Semplicemente non si baseranno su un tuo profilo.
      </p>
      <p>
        Puoi cambiare la tua risposta in qualsiasi momento: apri le{" "}
        <strong>Impostazioni</strong> (l&rsquo;icona dell&rsquo;ingranaggio nella schermata
        Home o Profilo) e scegli <strong>{label.privacyChoices}</strong>.
      </p>
      <p>
        Su iOS, ti viene chiesto a parte se l&rsquo;app può usare l&rsquo;identificativo
        pubblicitario del dispositivo. Quella risposta appartiene al sistema operativo e si può
        cambiare in <strong>Impostazioni di iOS › Privacy e sicurezza › Tracciamento</strong>.
      </p>

      <h2 id="analytics">Statistiche e attribuzione</h2>
      <p>
        Usiamo <strong>Google Analytics per Firebase</strong> per registrare eventi di gioco,
        come un assedio iniziato o un forziere aperto, così da vedere dove i giocatori fanno
        fatica e cosa non funziona. Quando è richiesto il consenso, questi eventi vengono
        registrati solo dopo che l&rsquo;hai dato.
      </p>
      <p>
        Usiamo <strong>AppsFlyer</strong> per sapere quale pubblicità o link, se c&rsquo;è
        stato, ha portato a un&rsquo;installazione, e per confermare gli acquisti. AppsFlyer
        viene avviato solo dopo che la tua scelta sul consenso è nota, e se non hai accettato la
        personalizzazione funziona in modalità anonimizzata. La sua informativa è su{" "}
        <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">
          appsflyer.com
        </a>
        .
      </p>

      <p>
        In {bb}, Google Analytics for Firebase non usa mai l&rsquo;archiviazione né la
        personalizzazione pubblicitarie: questi segnali sono disattivati nel gioco, e gli
        eventi servono solo a misurare. {bb} usa anche <strong>Firebase Crashlytics</strong>{" "}
        per ricevere un rapporto quando il gioco va in crash, così possiamo correggerlo.
        AppsFlyer è usato solo in {game}.
      </p>

      <h2 id="sharing">Con chi condividiamo i tuoi dati</h2>
      <p>Ci affidiamo a pochi fornitori, ognuno per un compito:</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> (Authentication, Cloud Firestore, Cloud Functions,
          Analytics): l&rsquo;account anonimo, i progressi salvati e la classifica. I dati sono
          conservati nell&rsquo;Unione europea.
        </li>
        <li>
          <strong>Apple e Google</strong>: distribuzione dell&rsquo;app, accesso se lo scegli,
          pagamenti e verifica degli acquisti.
        </li>
        <li>
          <strong>Unity LevelPlay e le sue reti pubblicitarie</strong>: pubblicità, come
          descritto sopra.
        </li>
        <li>
          <strong>AppsFlyer</strong>: attribuzione delle installazioni, come descritto sopra.
        </li>
        <li>
          <strong>Google AdMob</strong>: la pubblicità in {bb}, come descritto sopra.
        </li>
        <li>
          <strong>Cloudflare</strong>: distribuisce i livelli che scarichi in {bb}. Come
          ogni server, vede il tuo indirizzo IP per inviarti i file; non riceve il tuo
          account né i tuoi salvataggi.
        </li>
        <li>
          <strong>Firebase Crashlytics</strong>: i rapporti sui crash di {bb}. I salvataggi di{" "}
          {bb} sono in un progetto Firebase separato, anch&rsquo;esso nell&rsquo;UE.
        </li>
      </ul>
      <p>
        Non vendiamo informazioni personali e non le condividiamo per pubblicità
        comportamentale tra contesti diversi, oltre a quello che fanno con il tuo consenso i
        partner pubblicitari indicati sopra.
      </p>

      <h2 id="transfers">Trasferimenti internazionali</h2>
      <p>
        I salvataggi sono conservati nell&rsquo;Unione europea. Alcuni dei nostri fornitori
        hanno sede negli Stati Uniti e possono trattare dati lì, sulla base delle clausole
        contrattuali tipo della Commissione europea, del quadro UE-USA per la protezione dei
        dati o di una garanzia equivalente.
      </p>

      <h2 id="retention">Per quanto tempo li conserviamo</h2>
      <ul>
        <li>
          <strong>Progressi salvati</strong>: finché l&rsquo;account è in uso, e fino a 24 mesi
          dopo che diventa inattivo, dopodiché possono essere cancellati.
        </li>
        <li>
          <strong>La tua scheda pubblica del regno</strong>: finché non la nascondi o cancelli i
          tuoi dati, a seconda di cosa avviene prima. Le classifiche vengono ricostruite ogni
          notte, quindi una scheda nascosta ne esce entro un giorno.
        </li>
        <li>
          <strong>Registri degli acquisti</strong>: per il tempo richiesto dalla normativa
          fiscale e contabile, in genere sette anni, e per il tempo necessario a impedire che una
          ricevuta venga riscattata due volte. Sopravvivono alla cancellazione dei tuoi dati di
          gioco, perché non ci è permesso distruggerli.
        </li>
        <li>
          <strong>Segnalazioni che invii</strong> sui nomi di altri giocatori: finché esiste
          l&rsquo;account segnalato, per poter dimostrare che l&rsquo;esame è avvenuto.
        </li>
        <li>
          <strong>Rapporti sui crash</strong> ({bb}): 90 giorni.
        </li>
      </ul>

      <h2 id="rights">I tuoi diritti</h2>
      <p>
        Se ti si applica il GDPR dell&rsquo;UE o del Regno Unito, hai il diritto di chiedere una
        copia dei tuoi dati, di farli correggere, di farli cancellare, di limitarne o opporti al
        loro uso e di revocare il consenso dato. Diritti simili esistono in base al California
        Consumer Privacy Act e ad altre leggi.
      </p>
      <p>
        Le strade più rapide sono nel gioco stesso: l&rsquo;uscita dalla classifica è nella
        scheda Profilo, la scelta sulla pubblicità nelle Impostazioni e la cancellazione
        dell&rsquo;account nella scheda Profilo. Per qualsiasi altra cosa, o per cancellare
        tutto, vedi{" "}
        <Link href={localePath("it", "/delete-account")}>come eliminare i tuoi dati</Link> o
        scrivi a <a href={mailto(mail.privacy)}>{site.email}</a>. Rispondiamo entro 30 giorni.
      </p>
      <p>
        Poiché gli account sono anonimi per impostazione predefinita, potremmo chiederti di
        dimostrare quale account è tuo prima di dare seguito a una richiesta, di solito
        inviandola dall&rsquo;indirizzo di un accesso collegato o comunicandoci
        l&rsquo;identificativo dell&rsquo;account mostrato nel gioco.
      </p>
      <p>
        Se pensi che abbiamo trattato male i tuoi dati, puoi presentare reclamo
        all&rsquo;autorità per la protezione dei dati del tuo paese.
      </p>

      <p>
        In {bb}, la scelta sulla pubblicità (<strong>Ad privacy choices</strong>) e{" "}
        <strong>Delete account</strong> (elimina account) sono entrambi in{" "}
        <strong>Settings</strong>.
      </p>

      <h2 id="children">Minori</h2>
      <p>
        {game} è un gioco per tutti. Non è rivolto ai minori di 13 anni e non è registrato come
        app per bambini presso i nostri partner pubblicitari. Non raccogliamo consapevolmente
        informazioni personali di minori di 13 anni. Se ritieni che un minore ci abbia dato
        informazioni, scrivi a <a href={mailto(mail.child)}>{site.email}</a> e le
        cancelleremo.
      </p>

      <p>
        Lo stesso vale per {bb}: un gioco per tutti, non rivolto ai minori di 13 anni e non
        registrato come app per bambini presso i nostri partner pubblicitari.
      </p>

      <h2 id="this-website">Questo sito</h2>
      <p>
        Questo sito è statico. Non imposta cookie, non usa strumenti di statistica e non ti
        traccia. L&rsquo;unica cosa che sa di te è quello che il tuo browser comunica al nostro
        hosting per inviarti la pagina. Se scegli una lingua, o chiudi il suggerimento di una
        lingua, il tuo browser lo ricorda finché la scheda resta aperta; resta sul tuo
        dispositivo e non ci viene mai inviato.
      </p>

      <h2 id="changes">Modifiche</h2>
      <p>
        Se modifichiamo questa informativa aggiorneremo la data in alto, e per qualsiasi cambio
        importante lo diremo nel gioco prima che entri in vigore.
      </p>
      <p>
        Questa informativa è pubblicata anche in altre lingue. Sono traduzioni di questo testo
        inglese, e se una differisce da esso, vale il testo inglese.
      </p>

      <h2 id="contact">Contatti</h2>
      <p>
        {site.entity}, che opera come {site.company}
        <br />
        {site.address}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
