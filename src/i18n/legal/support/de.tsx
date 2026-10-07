import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.de.mail;
const label = gameTextFor("de").labels;
const game = gemfire.name;

/** Translation of support/en.tsx. Button names are the game's own German labels. */
const doc: LegalDoc = {
  title: "Hilfe",
  description: `Hilfe zu ${game}: verlorener Fortschritt, Käufe, Herzen, Werbung und Konten.`,
  intro: `Funktioniert etwas in ${game} nicht? Schreib uns. Ein echter Mensch liest es.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          E-Mail an {site.email}
        </a>
      </p>

      <p>
        Wir antworten meist innerhalb von ein, zwei Tagen. Es hilft enorm, wenn du deine{" "}
        <strong>Konto-ID</strong> (Profil-Tab, Konto-Karte), dein Gerätemodell und das, was du
        erwartet hast, mitschickst.
      </p>

      <h2>Häufige Fragen</h2>

      <div className="not-prose">
        <Question q="Mein Fortschritt ist nach der Neuinstallation weg.">
          <p>
            Wenn du nie ein Apple- oder Google-Konto verknüpft hast, hing das Königreich an
            einem anonymen Konto auf diesem Gerät, und eine Neuinstallation kann es
            zurücklassen. Öffne den Tab <strong>Profil</strong> und melde dich mit Google oder
            Apple an. Genau das sorgt dafür, dass dein Fortschritt künftig ein verlorenes oder
            zurückgesetztes Gerät übersteht.
          </p>
          <p>
            Wenn du eines <em>verknüpft</em> hast, melde dich beim selben Anbieter an, dann
            sollte dein Königreich zurückkommen. Falls nicht, schreib uns mit der Adresse, mit
            der du dich anmeldest.
          </p>
        </Question>

        <Question q="Ich habe etwas bezahlt und es nicht erhalten.">
          <p>
            Öffne das Spiel zuerst noch einmal mit Internetverbindung. Unvollständige Käufe
            werden beim Start automatisch erneut ausgeliefert, und ein Kauf, der durch einen
            Absturz oder einen Verbindungsabbruch unterbrochen wurde, erledigt sich so meist von
            selbst. Die Schaltfläche <strong>{label.restorePurchases}</strong> im Shop macht
            dasselbe auf Wunsch.
          </p>
          <p>
            Wenn es immer noch nicht angekommen ist, schreib uns mit dem Store-Beleg oder der
            Bestellnummer, und wir klären es direkt. Das geht schneller als eine Erstattung.
          </p>
        </Question>

        <Question q="Wie bekomme ich eine Erstattung?">
          <p>
            Erstattungen laufen über Apple und Google, nicht über uns. Wir können keine in ihrem
            Namen veranlassen. Nutze das Erstattungsverfahren des Stores über deinen
            Kaufverlauf.
          </p>
          <p>
            Wenn das Problem ist, dass etwas nicht angekommen ist, und nicht, dass du es dir
            anders überlegt hast, schreib uns bitte zuerst; das können wir meist innerhalb eines
            Tages beheben.
          </p>
        </Question>

        <Question q="Wie funktionieren Herzen?">
          <p>
            Eine verlorene Belagerung kostet ein Herz, und Herzen füllen sich mit der Zeit von
            selbst wieder auf, bis zur Grenze deiner Flasche. Die ersten drei Belagerungen jedes
            Kapitels darfst du kostenlos verlieren, während du es lernst, und eine schon
            gewonnene Belagerung zu wiederholen ist immer kostenlos.
          </p>
          <p>
            Wenn du keine mehr hast, kannst du warten, ein Video für zwei Herzen ansehen oder
            Juwelen ausgeben. Eine größere Flasche zu kaufen hebt die Grenze dauerhaft an.
          </p>
        </Question>

        <Question q="Die Video-Schaltfläche findet nie ein Video.">
          <p>
            Das heißt, dass in dem Moment keine Werbung verfügbar war. Das Angebot schwankt je
            nach Land, Tageszeit und danach, wie viele du heute schon gesehen hast. Das Spiel
            versucht es im Hintergrund weiter, meist funktioniert es also bald wieder von
            selbst.
          </p>
          <p>
            Um das Spiel durchzuspielen, musst du nie Werbung ansehen. Jedes Video ist
            freiwillig, und nichts ist dahinter gesperrt.
          </p>
        </Question>

        <Question q="Wie erscheine ich nicht mehr in der Rangliste?">
          <p>
            Öffne den Tab <strong>Profil</strong> und tippe im Ranglistenbereich auf{" "}
            <strong>{label.hideFromBoards}</strong>. Deine Karte wird zurückgezogen, und dein
            Hütername ist für andere nicht mehr sichtbar. In deinem eigenen Spiel behältst du
            den Namen.
          </p>
        </Question>

        <Question q="Wie ändere ich meine Werbeeinstellung?">
          <p>
            <strong>Einstellungen</strong> (das Zahnradsymbol auf dem Start- oder
            Profilbildschirm), dann <strong>{label.privacyChoices}</strong>. Unter iOS findest
            du die separate Tracking-Erlaubnis unter{" "}
            <strong>iOS-Einstellungen › Datenschutz &amp; Sicherheit › Tracking</strong>.
          </p>
        </Question>

        <Question q="Wie lösche ich alles?">
          <p>
            Siehe{" "}
            <Link href={localePath("de", "/delete-account")}>
              dein Konto und deine Daten löschen
            </Link>
            . Beachte, dass das Löschen der App allein nichts auf unseren Servern löscht.
          </p>
        </Question>

        <Question q="Mein Hütername wurde abgelehnt.">
          <p>
            Namen müssen eindeutig sein, und wir filtern solche, die sich als jemand anderes
            ausgeben, als Belästigung verstanden werden können oder Zeichen enthalten, die die
            Einträge anderer in der Rangliste stören.
          </p>
          <p>
            Ein abgelehnter Name wird dir nicht weggenommen. Du behältst ihn in deinem eigenen
            Spiel und erscheinst in der Rangliste stattdessen unter einem erzeugten Namen.
          </p>
        </Question>

        <Question q="Der Name eines anderen Spielers ist beleidigend.">
          <p>
            Öffne sein Königreich aus der Rangliste und tippe auf{" "}
            <strong>{label.report}</strong>. Wir prüfen jede Meldung, und ein Name, der gegen
            die Regeln verstößt, wird durch einen erzeugten ersetzt. Dir wird nicht gesagt, wer
            ihn gemeldet hat, und der anderen Person wird nicht gesagt, dass du es warst.
          </p>
        </Question>

        <Question q="Funktioniert das Spiel offline?">
          <p>
            Ja. Jede Belagerung läuft ohne Verbindung auf deinem Handy. Die Rangliste, Besuche
            in anderen Königreichen, der Shop, Belohnungsvideos sowie das Anmelden oder Löschen
            deines Kontos brauchen eine Verbindung, und für die täglichen Boni musst du einmal
            online gehen, um sie freizuschalten.
          </p>
        </Question>
      </div>

      <h2>Ein Sicherheitsproblem melden</h2>
      <p>
        Wenn du einen Weg gefunden hast, die Spielökonomie auszuhebeln, den Spielstand eines
        anderen zu lesen oder sonst an etwas zu kommen, an das du nicht kommen solltest, sag es
        uns bitte unter <a href={mailto(mail.security)}>{site.email}</a>, bevor du es jemand
        anderem erzählst. Wir gehen nicht gegen dich vor, wenn du etwas in gutem Glauben
        meldest.
      </p>
    </>
  ),
};

export default doc;
