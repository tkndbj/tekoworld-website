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

/**
 * Translation of delete-account/en.tsx. Button names are the game's own German labels, so
 * the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Dein Konto und deine Daten löschen",
  description: `So löschst du dein ${game}-Konto und die damit gespeicherten Daten.`,
  intro:
    "Du kannst alles löschen lassen, was wir über dein Königreich gespeichert haben. Hier steht genau, was dabei passiert.",
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
      </Summary>

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
