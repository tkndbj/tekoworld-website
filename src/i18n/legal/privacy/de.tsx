import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.de.mail;
const label = gameTextFor("de").labels;
const game = gemfire.name;

/** Translation of privacy/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Datenschutzerklärung",
  description: `Wie ${site.company} und ${game} mit deinen Daten umgehen, in einfachen Worten.`,
  intro: `Hier steht, was ${game} und diese Website über dich erfassen, warum, und was du dagegen tun kannst.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Du kannst {game} komplett spielen, ohne uns deinen Namen, deine E-Mail-Adresse oder
          sonst etwas über dich zu geben. Es wird ein anonymes Konto angelegt, damit dein
          Fortschritt gespeichert und wiederhergestellt werden kann. Es kennzeichnet einen
          Spielstand, keine Person.
        </p>
        <p className="mb-2">
          Werbung zeigen wir nur, wenn du selbst ein Video ansehen möchtest, und sie wird von
          Dritten geliefert, die eine Werbe-ID verwenden können. In der EU und im Vereinigten
          Königreich wirst du vorher gefragt, und du kannst deine Antwort jederzeit in den
          Einstellungen ändern.
        </p>
        <p>
          Wir verkaufen deine Daten nicht. Wer du bist, interessiert uns nicht, nur ob das
          Spiel funktioniert.
        </p>
      </Summary>

      <h2 id="who-we-are">Wer wir sind</h2>
      <p>
        {game} wird von {site.entity}, handelnd als {site.company}, {site.address},
        veröffentlicht, demselben Anbieter, der im Store-Eintrag genannt ist. Im Sinne der
        Datenschutz-Grundverordnung der EU und des Vereinigten Königreichs sind wir der
        Verantwortliche für die hier beschriebenen Daten. Du erreichst uns unter{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Diese Erklärung gilt für {game} unter Android und iOS sowie für diese Website. Wenn wir
        ein weiteres Spiel veröffentlichen, bekommt es hier einen eigenen Eintrag.
      </p>

      <h2 id="what-we-collect">Was wir erfassen und warum</h2>
      <p>
        Wir wollten konkret sein, statt nur umfassend zu klingen. Was nicht in dieser Tabelle
        steht, erfasst das Spiel nicht.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Was</th>
              <th>Warum</th>
              <th>Wann</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Eine anonyme Konto-ID</strong>, erzeugt von Firebase Authentication
              </td>
              <td>
                Damit dein Fortschritt auf unseren Servern gespeichert und auf einem neuen Gerät
                wiederhergestellt werden kann. Sie ist eine zufällige Zeichenfolge. Sie ist nicht
                mit deinem Namen, deiner E-Mail oder Telefonnummer verknüpft, außer du
                verknüpfst selbst ein Anmeldekonto.
              </td>
              <td>Erster Start</td>
            </tr>
            <tr>
              <td>
                <strong>Dein Spielfortschritt</strong>: welche Belagerungen du mit wie vielen
                Sternen geschafft hast, deine beste Welle in Der Endlosen Wacht, deine Münzen,
                Juwelen, Herzen und Hinweise, deine Türme, deine Ausrüstung und Gefährten, der
                Aufbau deines Königreichs und das Land, auf dem es steht, deine tägliche Serie
                und deine Einstellungen
              </td>
              <td>
                Damit das Spiel dort weitergeht, wo du aufgehört hast, und derselbe Fortschritt
                auf deinen anderen Geräten erscheint.
              </td>
              <td>Während du spielst</td>
            </tr>
            <tr>
              <td>
                <strong>Eine öffentliche Königreichskarte</strong>: der Hütername, den du
                gewählt hast, der Gefährte, den du als Avatar nutzt, deine Hüterstufe, Punkte
                und Sterne deines Königreichs und deine Liga
              </td>
              <td>
                Damit andere Spielende dich in der Rangliste sehen und dein Königreich besuchen
                können. Das sind die einzigen Angaben, die andere sehen können. Du kannst das
                jederzeit im Profil-Tab ausschalten, dann wird deine Karte entfernt.
              </td>
              <td>Solange die Rangliste aktiviert ist</td>
            </tr>
            <tr>
              <td>
                <strong>Dein gewählter Hütername</strong>, als Reservierung gespeichert, damit
                nicht zwei Spielende denselben bekommen
              </td>
              <td>
                Damit Namen eindeutig bleiben. Den Namen wählst du selbst; nimm bitte nicht
                deinen echten Namen, wenn er nicht öffentlich sein soll.
              </td>
              <td>Wenn du einen Namen festlegst</td>
            </tr>
            <tr>
              <td>
                <strong>Eine verknüpfte Anmeldung</strong>: eine Kennung von Apple oder Google
                und das, was dieser Anbieter an uns weitergibt, möglicherweise auch deine
                E-Mail-Adresse
              </td>
              <td>
                Nur wenn du ein Konto verknüpfst, damit dein Fortschritt den Verlust deines
                Geräts übersteht. Dein Passwort erhalten wir nie.
              </td>
              <td>Nur wenn du verknüpfst</td>
            </tr>
            <tr>
              <td>
                <strong>Kaufbelege</strong>: die Transaktions-ID des Stores und was gekauft
                wurde
              </td>
              <td>
                Um einen Kauf bei Apple oder Google zu bestätigen und dir genau einmal zu geben,
                wofür du bezahlt hast. <strong>Deine Kartendaten sehen wir nie</strong>. Die
                Zahlung findet im Store statt, nicht im Spiel.
              </td>
              <td>Wenn du etwas kaufst</td>
            </tr>
            <tr>
              <td>
                <strong>Werbe-IDs und zugehörige Daten</strong>, verarbeitet von unseren
                Werbepartnern
              </td>
              <td>
                Um die Werbung zu zeigen, die du dir ansehen möchtest, und um das kostenlose
                Spiel zu finanzieren. Siehe <a href="#advertising">Werbung</a> weiter unten.
              </td>
              <td>Wenn du dir Werbung ansiehst</td>
            </tr>
            <tr>
              <td>
                <strong>Spielanalysen</strong>: Ereignisse wie eine begonnene, gewonnene oder
                verlorene Belagerung, ein gekaufter Turm, eine geöffnete Truhe oder ein
                abgeschlossener Kauf, mit einer gerätebezogenen Kennung
              </td>
              <td>
                Um zu sehen, wo Spielende hängen bleiben und welche Teile des Spiels nicht
                funktionieren. Verarbeitet von Google Analytics für Firebase. Siehe{" "}
                <a href="#analytics">Analysen und Attribution</a> weiter unten.
              </td>
              <td>Während du spielst, mit deiner Einwilligung, wo sie nötig ist</td>
            </tr>
            <tr>
              <td>
                <strong>Installations-Attribution</strong>: welche Anzeige oder welcher Link dich
                gegebenenfalls zur Installation gebracht hat, und die Bestätigung deiner Käufe
              </td>
              <td>
                Um zu wissen, welche unserer Werbung ihr Geld wert ist. Verarbeitet von
                AppsFlyer.
              </td>
              <td>Einmal, nachdem deine Einwilligungsentscheidung feststeht</td>
            </tr>
            <tr>
              <td>
                <strong>Eine Meldung, die du abgibst</strong>, zum Hüternamen eines anderen
                Spielenden
              </td>
              <td>
                Damit wir den Namen prüfen und bei Bedarf ersetzen können. Die Meldung hält fest,
                welches Konto sie abgegeben hat, damit Meldungen nicht gefälscht werden können.
              </td>
              <td>Nur wenn du einen Namen meldest</td>
            </tr>
            <tr>
              <td>
                <strong>Grundlegende technische Angaben</strong>: Gerätemodell,
                Betriebssystemversion, Sprache und Fehlerdiagnosen
              </td>
              <td>
                Um herauszufinden, warum etwas abgestürzt ist oder ein Bildschirm auf einem
                Gerät, das wir nicht besitzen, falsch dargestellt wurde.
              </td>
              <td>Bei Bedarf</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Was wir bewusst nicht erfassen</h3>
      <ul>
        <li>Deinen Namen, außer du gibst ihn als Hüternamen ein.</li>
        <li>Deine E-Mail-Adresse, außer du schreibst uns oder verknüpfst ein Anmeldekonto.</li>
        <li>Deine Kontakte, Fotos, dein Mikrofon, deine Kamera oder deinen genauen Standort.</li>
        <li>Deine Zahlungskartendaten. Die erreichen uns nie.</li>
        <li>Nachrichten. Es gibt keinen Chat und keinen Weg, wie Spielende sich gegenseitig kontaktieren können.</li>
      </ul>

      <h2 id="legal-bases">Unsere Rechtsgrundlagen (Vereinigtes Königreich und EU)</h2>
      <ul>
        <li>
          <strong>Vertragserfüllung</strong>: deinen Fortschritt speichern und
          wiederherstellen und einen Kauf erfüllen. Ohne das funktioniert das Spiel nicht.
        </li>
        <li>
          <strong>Einwilligung</strong>: personalisierte Werbung, Spielanalysen und
          Installations-Attribution, wo das Gesetz eine Einwilligung verlangt, sowie das
          Erscheinen in der öffentlichen Rangliste. All das ist freiwillig und jederzeit
          widerrufbar.
        </li>
        <li>
          <strong>Berechtigte Interessen</strong>: das Spiel am Laufen halten, Abstürze
          analysieren, gemeldete Namen prüfen und Betrug und Missbrauch der Spielökonomie
          verhindern.
        </li>
        <li>
          <strong>Rechtliche Verpflichtung</strong>: Kaufbelege für Steuer und Buchhaltung
          aufbewahren.
        </li>
      </ul>

      <h2 id="advertising">Werbung</h2>
      <p>
        Das Spiel ist kostenlos, und Werbung finanziert es. Werbung ist in dem Sinne freiwillig,
        auf den es ankommt: keine Werbung zwischen den Levels und keine Banner. Jede Werbung in{" "}
        {game} siehst du nur, wenn du dich dafür entscheidest, im Tausch gegen Herzen, Münzen
        oder einen Hinweis, und für jede Art gibt es ein Tageslimit.
      </p>
      <p>
        Die Werbung wird über <strong>Unity LevelPlay</strong> (ironSource) als
        Mediationsplattform ausgeliefert, zusammen mit den Werbenetzwerken, mit denen es
        zusammenarbeitet, derzeit unter anderem <strong>Unity Ads</strong> und{" "}
        <strong>Google AdMob</strong>. Diese Partner sind für die Daten, die sie erfassen,
        eigenständig verantwortlich und haben eigene Datenschutzerklärungen:
      </p>
      <ul>
        <li>
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">
            Unity: Datenschutzerklärung für Spielende und App-Nutzer
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            Google: Wie Google Informationen von Websites oder Apps verwendet, die Google-Dienste
            nutzen
          </a>
        </li>
      </ul>

      <h3>Deine Wahl, und wie du sie änderst</h3>
      <p>
        Wenn du dich im Europäischen Wirtschaftsraum oder im Vereinigten Königreich befindest,
        wirst du vor jeder personalisierten Werbung über ein von Google zertifiziertes
        Einwilligungsformular gefragt. Lehnst du ab, siehst du trotzdem Werbung und bekommst
        weiterhin die Belohnungen dafür. Sie beruht dann nur nicht auf einem Profil von dir.
      </p>
      <p>
        Du kannst deine Antwort jederzeit ändern: Öffne die <strong>Einstellungen</strong> (das
        Zahnradsymbol auf dem Start- oder Profilbildschirm) und wähle{" "}
        <strong>{label.privacyChoices}</strong>.
      </p>
      <p>
        Unter iOS wirst du zusätzlich gefragt, ob die App die Werbe-ID des Geräts verwenden
        darf. Diese Antwort gehört zum Betriebssystem und lässt sich unter{" "}
        <strong>iOS-Einstellungen › Datenschutz &amp; Sicherheit › Tracking</strong> ändern.
      </p>

      <h2 id="analytics">Analysen und Attribution</h2>
      <p>
        Wir verwenden <strong>Google Analytics für Firebase</strong>, um Spielereignisse
        festzuhalten, etwa eine begonnene Belagerung oder eine geöffnete Truhe, damit wir sehen,
        wo Spielende Schwierigkeiten haben und was nicht funktioniert. Wo eine Einwilligung nötig
        ist, werden diese Ereignisse erst erfasst, nachdem du sie gegeben hast.
      </p>
      <p>
        Wir verwenden <strong>AppsFlyer</strong>, um zu erfahren, welche Anzeige oder welcher
        Link gegebenenfalls zu einer Installation geführt hat, und um Käufe zu bestätigen.
        AppsFlyer wird erst gestartet, wenn deine Einwilligungsentscheidung feststeht, und wenn
        du der Personalisierung nicht zugestimmt hast, läuft es in einem anonymisierten Modus.
        Die Datenschutzerklärung findest du unter{" "}
        <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">
          appsflyer.com
        </a>
        .
      </p>

      <h2 id="sharing">Mit wem deine Daten geteilt werden</h2>
      <p>Wir nutzen nur wenige Dienstleister, jeden für genau eine Aufgabe:</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> (Authentication, Cloud Firestore, Cloud Functions,
          Analytics): das anonyme Konto, der gespeicherte Fortschritt und die Rangliste. Die
          Daten werden in der Europäischen Union gespeichert.
        </li>
        <li>
          <strong>Apple und Google</strong>: Vertrieb der App, Anmeldung, wenn du sie wählst,
          Zahlungen und Kaufprüfung.
        </li>
        <li>
          <strong>Unity LevelPlay und seine Werbenetzwerke</strong>: Werbung, wie oben
          beschrieben.
        </li>
        <li>
          <strong>AppsFlyer</strong>: Installations-Attribution, wie oben beschrieben.
        </li>
      </ul>
      <p>
        Wir verkaufen keine personenbezogenen Daten und geben sie nicht für kontextübergreifende
        verhaltensbasierte Werbung weiter, über das hinaus, was die oben genannten Werbepartner
        mit deiner Einwilligung tun.
      </p>

      <h2 id="transfers">Internationale Übermittlungen</h2>
      <p>
        Unsere Spielstände liegen in der Europäischen Union. Einige unserer Dienstleister haben
        ihren Sitz in den USA und können Daten dort verarbeiten, gestützt auf die
        Standardvertragsklauseln der Europäischen Kommission, das EU-US-Datenschutzrahmenwerk
        oder eine gleichwertige Garantie.
      </p>

      <h2 id="retention">Wie lange wir Daten aufbewahren</h2>
      <ul>
        <li>
          <strong>Gespeicherter Fortschritt</strong>: solange das Konto genutzt wird, und bis zu
          24 Monate, nachdem es inaktiv geworden ist; danach kann er gelöscht werden.
        </li>
        <li>
          <strong>Deine öffentliche Königreichskarte</strong>: bis du sie ausblendest oder deine
          Daten löschst, je nachdem, was zuerst eintritt. Die Ranglisten werden jede Nacht neu
          aufgebaut, eine ausgeblendete Karte verschwindet also innerhalb eines Tages daraus.
        </li>
        <li>
          <strong>Kaufbelege</strong>: so lange, wie Steuer- und Buchhaltungsrecht es verlangen,
          in der Regel sieben Jahre, und so lange, wie nötig ist, damit ein Beleg nicht zweimal
          eingelöst wird. Sie bleiben auch nach dem Löschen deiner Spieldaten erhalten, weil wir
          sie nicht vernichten dürfen.
        </li>
        <li>
          <strong>Meldungen, die du abgibst</strong>, zu Namen anderer Spielender: solange das
          gemeldete Konto existiert, damit nachweisbar ist, dass die Prüfung stattgefunden hat.
        </li>
      </ul>

      <h2 id="rights">Deine Rechte</h2>
      <p>
        Wenn für dich die DSGVO der EU oder des Vereinigten Königreichs gilt, hast du das Recht,
        eine Kopie deiner Daten zu verlangen, sie berichtigen oder löschen zu lassen, ihre
        Verarbeitung einzuschränken oder ihr zu widersprechen und eine erteilte Einwilligung zu
        widerrufen. Ähnliche Rechte gibt es nach dem California Consumer Privacy Act und anderen
        Gesetzen.
      </p>
      <p>
        Am schnellsten geht es im Spiel selbst: Das Ausblenden aus der Rangliste findest du im
        Profil-Tab, die Werbeeinstellung in den Einstellungen und das Löschen des Kontos im
        Profil-Tab. Für alles andere, oder um alles zu löschen, siehe{" "}
        <Link href={localePath("de", "/delete-account")}>deine Daten löschen</Link> oder schreib
        an <a href={mailto(mail.privacy)}>{site.email}</a>. Wir antworten innerhalb von 30
        Tagen.
      </p>
      <p>
        Da Konten standardmäßig anonym sind, müssen wir dich eventuell bitten nachzuweisen,
        welches Konto dir gehört, bevor wir eine Anfrage bearbeiten, meist indem du sie von der
        Adresse einer verknüpften Anmeldung schickst oder uns die im Spiel angezeigte Konto-ID
        nennst.
      </p>
      <p>
        Wenn du meinst, dass wir mit deinen Daten schlecht umgegangen sind, kannst du dich bei
        der Datenschutzaufsichtsbehörde deines Landes beschweren.
      </p>

      <h2 id="children">Kinder</h2>
      <p>
        {game} ist ein Spiel für alle Altersgruppen. Es richtet sich nicht an Kinder unter 13
        Jahren und ist bei unseren Werbepartnern nicht als App für Kinder registriert. Wir
        erfassen nicht wissentlich personenbezogene Daten von Kindern unter 13 Jahren. Wenn du
        glaubst, dass ein Kind uns Daten gegeben hat, schreib an{" "}
        <a href={mailto(mail.child)}>{site.email}</a>, und wir löschen sie.
      </p>

      <h2 id="this-website">Diese Website</h2>
      <p>
        Diese Website ist statisch. Sie setzt keine Cookies, nutzt keine Analysewerkzeuge und
        verfolgt dich nicht. Das Einzige, was sie über dich weiß, ist das, was dein Browser
        unserem Hoster mitteilt, um dir die Seite zu schicken. Wenn du eine Sprache wählst oder
        den Sprachvorschlag schließt, merkt sich dein Browser das, solange der Tab offen ist; es
        bleibt auf deinem Gerät und wird nie an uns gesendet.
      </p>

      <h2 id="changes">Änderungen</h2>
      <p>
        Wenn wir diese Erklärung ändern, aktualisieren wir das Datum oben, und bei wichtigen
        Änderungen weisen wir im Spiel darauf hin, bevor sie wirksam werden.
      </p>
      <p>
        Diese Erklärung erscheint auch in anderen Sprachen. Das sind Übersetzungen dieses
        englischen Textes, und wo eine davon abweicht, gilt der englische Text.
      </p>

      <h2 id="contact">Kontakt</h2>
      <p>
        {site.entity}, handelnd als {site.company}
        <br />
        {site.address}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
