import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.de.mail;
const game = gemfire.name;

/** Translation of terms/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Nutzungsbedingungen",
  description: `Die Regeln für ${game}.`,
  intro: `Diesen Bedingungen stimmst du zu, wenn du ${game} spielst.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Spiel das Spiel, betrüg es nicht und gib dich in der Rangliste nicht als jemand anderes
          aus. Alles, was du kaufst, ist eine Lizenz zur Nutzung im Spiel. Münzen und Juwelen
          sind kein Geld und können nicht ausgezahlt werden.
        </p>
        <p>
          Erstattungen laufen über Apple und Google, nicht über uns. Wenn etwas schiefgeht,
          schreib uns, bevor du eine Ein-Stern-Bewertung abgibst. Wir beheben es lieber.
        </p>
      </Summary>

      <h2 id="agreement">1. Die Vereinbarung</h2>
      <p>
        Diese Bedingungen gelten zwischen dir und {site.entity}, handelnd als {site.company},{" "}
        {site.address} (&bdquo;wir&ldquo;, &bdquo;uns&ldquo;). Indem du {game}{" "}
        herunterlädst oder spielst, akzeptierst du sie. Wenn du sie nicht akzeptierst, spiel
        bitte nicht.
      </p>
      <p>
        Dein App-Store hat außerdem eigene Bedingungen, und soweit sie für deinen Kauf in diesem
        Store gelten, gelten sie zusätzlich zu diesen.
      </p>
      <p>
        Diese Bedingungen erscheinen auch in anderen Sprachen. Das sind Übersetzungen dieses
        englischen Textes, und wo eine davon abweicht, gilt der englische Text.
      </p>

      <h2 id="licence">2. Deine Lizenz</h2>
      <p>
        Wir gewähren dir eine persönliche, nicht ausschließliche, nicht übertragbare und
        widerrufliche Lizenz, {game} auf Geräten, über die du verfügst, zu deiner eigenen
        Unterhaltung zu installieren und zu spielen. Das Spiel, seine Grafiken, seine Musik,
        seine Levels und sein Code bleiben unser Eigentum. Einige Grafiken und Audiodateien sind
        von Dritten lizenziert, die ihre Rechte daran behalten.
      </p>
      <p>Du verpflichtest dich,</p>
      <ul>
        <li>
          das Spiel nicht zu verändern, zurückzuentwickeln oder zu dekompilieren, außer wo das
          Gesetz es ausdrücklich erlaubt;
        </li>
        <li>
          keine Cheats, Automatisierungen, veränderten Clients oder Speicher-Editoren zu nutzen
          und die Spielökonomie auch nicht auf andere Weise zu stören;
        </li>
        <li>
          dein Konto oder die Währung und Gegenstände darin nicht an andere zu verkaufen, zu
          vermieten oder zu übertragen;
        </li>
        <li>unsere Server nicht anzugreifen, zu überlasten oder auszuspähen.</li>
      </ul>

      <h2 id="account">3. Dein Konto</h2>
      <p>
        Beim ersten Start wird für dich ein anonymes Konto angelegt, damit dein Fortschritt
        gespeichert werden kann. Du kannst es mit einem Apple- oder Google-Konto verknüpfen,
        damit es den Verlust deines Geräts übersteht.
      </p>
      <p>
        Du bist dafür verantwortlich, eine verknüpfte Anmeldung sicher zu halten. Verlierst du
        den Zugang zu einem nicht verknüpften anonymen Konto, zum Beispiel weil du die App ohne
        Verknüpfung löschst, lässt sich der Fortschritt möglicherweise nicht wiederherstellen,
        und wir können ihn eventuell nicht als deinen erkennen.
      </p>
      <p>
        Eine Anmeldung, die bereits zu einem anderen Königreich gehört, kann nicht mit deinem
        zusammengeführt werden, weil die Währung in beiden getrennt verdient und ausgegeben
        wurde. Das Spiel warnt dich, bevor irgendetwas ersetzt wird.
      </p>

      <h2 id="virtual-items">4. Münzen, Juwelen, Herzen und Gegenstände</h2>
      <p>
        Alles, was du im Spiel sammelst oder kaufst, darunter Münzen, Juwelen, Herzen, Hinweise,
        Türme und ihre Verbesserungen, Ausrüstung, Gefährten, Königreichsteile, Land und größere
        Herzflaschen, ist eine{" "}
        <strong>beschränkte Lizenz zur Nutzung innerhalb von {game}</strong>. Es ist kein Geld,
        kein Wertpapier und kein Eigentum. Insbesondere:
      </p>
      <ul>
        <li>es hat außerhalb des Spiels keinen Wert und kann nicht gegen Geld getauscht werden;</li>
        <li>es kann nicht an andere Spielende übertragen, verkauft oder verschenkt werden;</li>
        <li>
          es kann im Laufe der Entwicklung neu ausbalanciert, angepasst oder eingestellt werden,
          und Preise und Belohnungen können sich ändern;
        </li>
        <li>
          es übersteht weder die Schließung deines Kontos noch die Einstellung des Spiels,
          soweit das Gesetz nichts anderes bestimmt.
        </li>
      </ul>
      <p>
        Belohnungen aus Werbung, täglichen Truhen, dem Glücksrad und Serien werden von unseren
        Servern vergeben. Lässt sich eine Belohnung nicht überprüfen, etwa weil ein Spielstand
        verändert wurde, kann sie verweigert oder rückgängig gemacht werden.
      </p>

      <h2 id="purchases">5. Käufe und Erstattungen</h2>
      <p>
        Käufe laufen über den App Store von Apple oder Google Play, und diese Stores wickeln die
        Zahlung ab. Deine Kartendaten sehen wir nie. Die im Spiel angezeigten Preise legt der
        Store für dein Land fest.
      </p>
      <p>
        <strong>Erstattungen laufen über den Store</strong>, nach dessen eigenen Regeln. Wir
        können keine Erstattung in seinem Namen veranlassen. Wenn dir ein Kauf berechnet wurde
        und du nicht bekommen hast, wofür du bezahlt hast, schreib uns zuerst. Das können wir
        meist direkt beheben, und schneller.
      </p>
      <p>
        Wenn du Verbraucher in der EU oder im Vereinigten Königreich bist, hast du bei einem
        digitalen Kauf normalerweise ein 14-tägiges Widerrufsrecht. Dieses Recht erlischt
        jedoch, sobald die Lieferung mit deiner Zustimmung beginnt, und das ist der Moment, in
        dem die Währung deinem Guthaben gutgeschrieben wird. Deine gesetzlichen Rechte bei einem
        mangelhaften Produkt bleiben davon unberührt.
      </p>
      <p>
        Wird ein Kauf erstattet oder zurückgebucht, nachdem die Währung gutgeschrieben wurde,
        können wir dein Guthaben um den entsprechenden Betrag verringern, und eine erstattete
        Herzflasche setzt deine Herzkapazität auf den vorherigen Stand zurück.
      </p>

      <h2 id="boards">6. Namen, Rangliste und Besuche</h2>
      <p>
        Wenn du einen Hüternamen wählst und die Rangliste aktiviert lässt, sind dieser Name, dein
        Avatar, deine Stufe, die Punkte deines Königreichs und deine Liga für andere Spielende
        sichtbar, und andere können dein Königreich besuchen und ansehen. Wähle entsprechend.
      </p>
      <p>Wir können einen Namen ablehnen, ändern oder entfernen, der</p>
      <ul>
        <li>sich als eine andere Person, ein Unternehmen oder als wir ausgibt;</li>
        <li>beleidigend ist oder wahrscheinlich als Belästigung verstanden wird;</li>
        <li>Zeichen enthält, die die Anzeige der Einträge anderer Spielender stören.</li>
      </ul>
      <p>
        Ein abgelehnter Name wird dir nicht weggenommen: Du behältst ihn in deinem eigenen Spiel
        und erscheinst in der Rangliste stattdessen unter einem erzeugten Namen. Andere
        Spielende können einen Namen melden, der ihrer Meinung nach gegen diese Regeln verstößt,
        und wir prüfen jede Meldung. Du kannst die Rangliste über den Profil-Tab ganz
        verlassen.
      </p>

      <h2 id="availability">7. Das Spiel kann sich ändern</h2>
      <p>
        Wir fügen Kapitel hinzu, passen Schwierigkeit und Belohnungen an, beheben Fehler und
        entfernen gelegentlich Dinge, die nicht funktionieren. Wir können den Dienst für
        Wartungsarbeiten unterbrechen und das Spiel irgendwann einstellen; in diesem Fall
        kündigen wir das, wo möglich, mit angemessener Frist im Spiel oder auf dieser Website
        an.
      </p>
      <p>
        Wir versprechen nicht, dass das Spiel unterbrechungs- oder fehlerfrei läuft, und einige
        Funktionen, darunter die Rangliste, der Shop und Belohnungsvideos, brauchen eine
        Internetverbindung.
      </p>

      <h2 id="suspension">8. Sperrung</h2>
      <p>
        Wir können ein Konto sperren oder schließen, das gegen diese Bedingungen verstößt,
        insbesondere eines, das zum Schummeln, zum Betrug an der Spielökonomie oder zur
        Belästigung anderer genutzt wird. Wo es verhältnismäßig ist, warnen wir vorher. Du
        kannst jederzeit aufhören zu spielen und deine Daten löschen, wie auf der{" "}
        <Link href={localePath("de", "/delete-account")}>Löschseite</Link> beschrieben.
      </p>

      <h2 id="liability">9. Gewährleistung und Haftung</h2>
      <p>
        Das Spiel wird &bdquo;wie besehen&ldquo; bereitgestellt. Soweit gesetzlich zulässig,
        schließen wir stillschweigende Gewährleistungen der Marktgängigkeit und der Eignung für
        einen bestimmten Zweck aus.
      </p>
      <p>
        Nichts hierin beschränkt die Haftung für Tod oder Körperverletzung durch
        Fahrlässigkeit, für Betrug oder für alles andere, was rechtlich nicht beschränkt werden
        kann. Vorbehaltlich dessen ist unsere Gesamthaftung dir gegenüber auf den höheren der
        folgenden Beträge begrenzt: den Betrag, den du uns in den zwölf Monaten vor dem Anspruch
        gezahlt hast, oder 50 €.
      </p>
      <p>
        <strong>
          Wenn du Verbraucher bist, bleiben deine gesetzlichen Rechte von diesen Bedingungen
          unberührt.
        </strong>
      </p>

      <h2 id="law">10. Anwendbares Recht</h2>
      <p>
        Für diese Bedingungen gilt das Recht der Republik Zypern. Wenn du Verbraucher bist,
        behältst du außerdem den Schutz der zwingenden Gesetze des Landes, in dem du lebst, und
        kannst dort Klage erheben.
      </p>

      <h2 id="apple">11. Ein Hinweis, den Apple verlangt</h2>
      <p>
        Diese Vereinbarung besteht zwischen dir und uns, nicht mit Apple, und Apple ist für das
        Spiel und seine Inhalte nicht verantwortlich. Apple ist nicht verpflichtet, Support
        dafür zu leisten. Wenn die App einer geltenden Gewährleistung nicht entspricht, kannst
        du Apple benachrichtigen, und Apple erstattet den Kaufpreis; soweit gesetzlich zulässig,
        hat Apple keine weitere Gewährleistungspflicht. Apple und seine Tochtergesellschaften
        sind begünstigte Dritte dieser Bedingungen und können sie dir gegenüber durchsetzen.
      </p>

      <h2 id="contact">12. Kontakt</h2>
      <p>
        {site.entity}, handelnd als {site.company}
        <br />
        {site.address}
        <br />
        <a href={mailto(mail.terms)}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
