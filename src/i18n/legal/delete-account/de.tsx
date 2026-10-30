import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.de.mail;
const label = gameTextFor("de").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/**
 * Translation of delete-account/en.tsx. Button names are the game's own German labels, so
 * the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Dein Konto und deine Daten löschen",
  description: `So löschst du dein ${game}- oder ${bb}-Konto und die damit gespeicherten Daten.`,
  intro:
    "Du kannst alles löschen lassen, was wir in einem unserer Spiele über dich gespeichert haben. Hier steht genau, was dabei passiert.",
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Am schnellsten geht es im Spiel: Tab <strong>Profil</strong>, dann die Karte{" "}
          <strong>Konto</strong>, dann <strong>{label.deleteAccount}</strong>. Das wirkt sofort.
        </p>
        <p className="mb-2">
          Wenn du das Spiel nicht mehr öffnen kannst, schreib stattdessen an{" "}
          <a href={mailto(mail.deleteAccount)}>{site.email}</a>, und wir erledigen es innerhalb
          von 30 Tagen für dich.
        </p>
        <p>
          Die App allein zu löschen, löscht die Daten auf unseren Servern <strong>nicht</strong>.
          Es entfernt nur die Kopie auf diesem Gerät.
        </p>
        <p className="mt-2">
          In {bb}: <strong>Settings</strong> › <strong>Delete account</strong>. Siehe{" "}
          <a href="#balance-buddies">Abschnitt 5</a>.
        </p>

      </Summary>
      <p>
        Die beiden Spiele sind getrennte Apps mit getrennten Konten: Löschst du eines, bleibt
        das andere unberührt. Die Abschnitte 1 bis 4 betreffen {game},{" "}
        <a href="#balance-buddies">Abschnitt 5</a> betrifft {bb}.
      </p>

      <h2 id="in-app">1. Im Spiel löschen</h2>
      <p>
        Das ist die echte Löschung, kein Antrag darauf. Niemand liest ihn, niemand muss ihn
        genehmigen, und er wartet nicht 30 Tage.
      </p>
      <ol>
        <li>
          Öffne {game} und geh zum Tab <strong>Profil</strong>.
        </li>
        <li>
          Scroll zur Karte <strong>Konto</strong>.
        </li>
        <li>
          Tippe auf <strong>{label.deleteAccount}</strong>, die rote Schaltfläche unten auf
          dieser Karte.
        </li>
        <li>
          Lies, was aufgelistet ist, tippe dann auf <strong>{label.deleteEverything}</strong>{" "}
          und bestätige noch einmal.
        </li>
      </ol>
      <p>
        Wenn du eine Apple- oder Google-Anmeldung verknüpft hast, wirst du vorher gebeten, dich
        noch einmal anzumelden, damit wir wissen, dass wirklich du es bist. Du brauchst eine
        Internetverbindung: Wenn das Spiel unsere Server nicht erreicht, sagt es dir, dass
        nichts gelöscht wurde, denn eine Löschung, die wir nicht durchführen konnten, behaupten
        wir nicht durchgeführt zu haben.
      </p>

      <h2 id="request">2. Oder schreib uns</h2>
      <p>
        Nutze diesen Weg, wenn du das Spiel schon deinstalliert hast, das Gerät verloren hast
        oder die Schaltfläche aus einem anderen Grund nicht erreichst.
      </p>
      <p>
        Konten sind anonym, deshalb können wir dich nicht über Namen oder E-Mail finden, außer
        du hast eine Anmeldung verknüpft. Wenn du das Spiel noch öffnen kannst, steht deine
        Konto-ID auf der Karte <strong>Konto</strong> im Tab <strong>Profil</strong>. Kopiere
        sie oder mach einen Screenshot. Wenn du ein Apple- oder Google-Konto verknüpft hast,
        kannst du das überspringen und einfach von dieser E-Mail-Adresse schreiben.
      </p>
      <p>
        Schreib von einer beliebigen Adresse an{" "}
        <a href={mailto(mail.deleteAccount)}>{site.email}</a> mit dem Betreff{" "}
        <strong>{mail.deleteAccount}</strong> und gib deine Konto-ID oder die Adresse der
        verknüpften Anmeldung an.
      </p>
      <p>
        Wir bestätigen den Eingang, prüfen, dass das Konto dir gehört, und schließen die
        Löschung innerhalb von <strong>30 Tagen</strong> ab. Wir sagen dir Bescheid, wenn sie
        erledigt ist.
      </p>

      <h2 id="what-goes">3. Was gelöscht wird</h2>
      <ul>
        <li>
          Dein anonymes Konto und jede verknüpfte Apple- oder Google-Anmeldung. Eine Freigabe
          für &bdquo;Mit Apple anmelden&ldquo; wird bei Apple widerrufen.
        </li>
        <li>
          Dein gespeicherter Fortschritt: geschaffte Belagerungen und Sterne, deine besten
          Wellen, Münzen, Juwelen, Herzen, Hinweise, Türme, Ausrüstung, Gefährten und dein
          ganzes Königreich.
        </li>
        <li>Deine öffentliche Königreichskarte und jede Zeile, die du in der Rangliste hattest.</li>
        <li>
          Die Reservierung deines Hüternamens, der danach für andere frei wird. Die einzige
          Ausnahme ist ein Name, den die Moderation abgelehnt hat: Der bleibt gesperrt, damit
          ihn niemand erneut nehmen kann.
        </li>
        <li>Meldungen, die andere Spielende zu deinem Namen abgegeben haben.</li>
      </ul>
      <p>Das ist endgültig. Wir können ein gelöschtes Königreich nicht wiederherstellen.</p>

      <h2 id="what-stays">4. Was wir behalten müssen</h2>
      <p>
        Drei Dinge bleiben nach der Löschung erhalten, und wir sagen das lieber offen, als dich
        später zu überraschen:
      </p>
      <ul>
        <li>
          <strong>Kaufbelege</strong>: die Transaktions-ID des Stores und was damit gekauft
          wurde, aufbewahrt so lange, wie Steuer- und Buchhaltungsrecht es verlangen (in der
          Regel sieben Jahre), und damit derselbe Beleg nicht zweimal eingelöst werden kann. Wir
          dürfen sie auf Anfrage nicht vernichten. Nach der Löschung sind sie mit keinem
          Spielstand mehr verbunden.
        </li>
        <li>
          <strong>Meldungen, die du abgegeben hast</strong>, zu Namen anderer, damit
          nachweisbar ist, dass diese Namen geprüft wurden.
        </li>
        <li>
          <strong>Aufzeichnungen über den Löschantrag selbst</strong>, damit wir zeigen können,
          dass wir ihn bearbeitet haben.
        </li>
      </ul>
      <p>
        Apple und Google führen unabhängig von uns eigene Aufzeichnungen über deine Käufe. Wenn
        du sie entfernen lassen möchtest, musst du dich an sie wenden.
      </p>

      <h2 id="balance-buddies">5. {bb}</h2>
      <h3>Im Spiel löschen</h3>
      <ol>
        <li>
          Öffne {bb} und tippe im Hauptmenü auf <strong>Settings</strong> (Einstellungen).
        </li>
        <li>
          Wenn du nicht angemeldet bist, melde dich zuerst mit Google oder Apple an. Dadurch
          wird dein Fortschritt mit dieser Anmeldung verbunden, sodass es ein Konto gibt, das
          der Knopf löschen kann.
        </li>
        <li>
          Tippe auf <strong>Delete account</strong> (Konto löschen), lies die Warnung und
          bestätige.
        </li>
      </ol>
      <p>
        Eventuell musst du dich noch einmal anmelden, damit wir wissen, dass du es wirklich
        bist, und du brauchst eine Internetverbindung. Kann die Löschung nicht abgeschlossen
        werden, sagt das Spiel es dir, und es wird nichts gelöscht.
      </p>
      <p>
        Kannst du das Spiel nicht mehr öffnen, schreib an{" "}
        <a href={mailto(mail.deleteAccount, bb)}>{site.email}</a> von der E-Mail-Adresse deiner
        Google- oder Apple-Anmeldung, mit dem Betreff <strong>{mail.deleteAccount}</strong>, und
        wir löschen es innerhalb von <strong>30 Tagen</strong>. Hast du dich nie angemeldet,
        gehört dein Fortschritt zu einem anonymen Konto, das wir nicht allein anhand einer
        E-Mail zuordnen können. Nutze die Schritte oben, wenn du das Spiel noch hast; wenn
        nicht, schreib uns trotzdem mit Gerätemodell und ungefährem Datum deines letzten
        Spiels, und wir tun, was wir können, um es zu finden.
      </p>
      <h3>Was gelöscht wird</h3>
      <ul>
        <li>
          Dein Konto und jede verbundene Google- oder Apple-Anmeldung. Eine Freigabe für
          &bdquo;Mit Apple anmelden&ldquo; wird bei Apple widerrufen.
        </li>
        <li>
          Dein gespeicherter Fortschritt auf unseren Servern: gelöste Rätsel, beste Züge und
          Sterne, deine Tipps, aufgedeckte Tipp-Schritte und werbefreie Zeit.
        </li>
        <li>Der auf dem Gerät gespeicherte Fortschritt, von dem aus du löschst.</li>
      </ul>
      <p>
        Das ist unwiderruflich. Wie bei {game} werden <strong>Kaufbelege</strong> so lange
        aufbewahrt, wie es Steuer- und Buchhaltungsrecht verlangt, und Apple und Google führen
        ihre eigenen. Das Löschen deines Kontos kündigt ein No Ads-Abo{" "}
        <strong>nicht</strong>: Kündige es in den Abo-Einstellungen von App Store oder Google
        Play.
      </p>

      <h2 id="less">Wenn du weniger als eine vollständige Löschung willst</h2>
      <p>
        Vielleicht musst du gar nicht alles löschen. Jede dieser Möglichkeiten wirkt sofort, und
        keine berührt den Rest deines Kontos:
      </p>
      <ul>
        <li>
          <strong>Die öffentliche Rangliste verlassen</strong>: Tab <strong>Profil</strong>,
          dann <strong>{label.hideFromBoards}</strong> im Ranglistenbereich. Deine
          veröffentlichte Karte wird entfernt, und dein Hütername ist für niemanden mehr
          sichtbar. Fortschritt, Käufe und Königreich bleiben unberührt.
        </li>
        <li>
          <strong>Die Werbeeinwilligung widerrufen</strong>: <strong>Einstellungen</strong>{" "}
          (das Zahnradsymbol), dann <strong>{label.privacyChoices}</strong>.
        </li>
        <li>
          <strong>Deinen Hüternamen ändern</strong>: Tab <strong>Profil</strong>, dann auf
          deinen Namen tippen. Der alte Name wird frei, und die Rangliste zeigt den neuen.
        </li>
        <li>
          <strong>Werbeeinwilligung in {bb} widerrufen</strong>: <strong>Settings</strong> ›{" "}
          <strong>Ad privacy choices</strong>.
        </li>
        <li>
          <strong>{bb} nicht mehr in der Cloud sichern</strong>: <strong>Settings</strong> ›{" "}
          <strong>Sign out</strong> (Abmelden). Das Gerät spielt als neuer Gast weiter.
        </li>
      </ul>
      <p>
        Wenn wir eines davon für dich erledigen sollen, schreib an{" "}
        <a href={mailto(mail.deleteSome)}>{site.email}</a> und sag, was. In der{" "}
        <Link href={localePath("de", "/privacy")}>Datenschutzerklärung</Link> steht, was jeweils
        davon betroffen ist.
      </p>
    </>
  ),
};

export default doc;
