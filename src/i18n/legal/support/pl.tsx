import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.pl.mail;
const label = gameTextFor("pl").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/**
 * Translation of support/en.tsx. Button names are the game's own Polish labels. Questions
 * are asked impersonally where English uses "I did", which Polish would gender.
 */
const doc: LegalDoc = {
  title: "Pomoc",
  description: `Pomoc w grach ${game} i ${bb}: utracony postęp, zakupy, podpowiedzi, reklamy i konta.`,
  intro: `Coś nie działa w grze ${game} albo ${bb}? Napisz do nas. Czyta to prawdziwy człowiek.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          Napisz na {site.email}
        </a>
      </p>

      <p>
        Zwykle odpowiadamy w ciągu dnia lub dwóch. Bardzo pomaga, jeśli podasz swój{" "}
        <strong>identyfikator konta</strong> (zakładka Profil, karta Konto), model urządzenia
        i to, czego się spodziewasz.
      </p>

      <h2>Częste pytania</h2>

      <div className="not-prose">
        <Question q="Postęp zniknął po ponownej instalacji.">
          <p>
            Jeśli konto Apple lub Google nie zostało nigdy połączone, królestwo było związane z
            anonimowym kontem na tamtym urządzeniu i ponowna instalacja mogła je zostawić za
            sobą. Otwórz zakładkę <strong>Profil</strong> i zaloguj się przez Google lub Apple.
            Właśnie to sprawia, że postęp przetrwa w przyszłości utratę lub wyczyszczenie
            urządzenia.
          </p>
          <p>
            Jeśli konto <em>jest</em> połączone, zaloguj się przez tego samego dostawcę, a twoje
            królestwo powinno wrócić. Jeśli nie wraca, napisz do nas i podaj adres, którym się
            logujesz.
          </p>
        </Question>

        <Question q="Za zakup pobrano opłatę, ale nic nie dotarło.">
          <p>
            Najpierw otwórz grę ponownie z dostępem do internetu. Niedokończone zakupy są
            automatycznie dostarczane ponownie przy uruchomieniu, a zakup przerwany przez awarię
            lub utratę połączenia zwykle sam się tak rozwiązuje. Przycisk{" "}
            <strong>{label.restorePurchases}</strong> w sklepie robi to samo na żądanie.
          </p>
          <p>
            Jeśli nadal nic nie dotarło, napisz do nas z paragonem ze sklepu lub numerem
            zamówienia, a załatwimy to bezpośrednio. To szybsze niż zwrot.
          </p>
        </Question>

        <Question q="Jak uzyskać zwrot pieniędzy?">
          <p>
            Zwrotami zajmują się Apple i Google, a nie my. Nie możemy zwrócić pieniędzy w ich
            imieniu. Skorzystaj z procedury zwrotu w sklepie, w historii zakupów.
          </p>
          <p>
            Jeśli problem polega na tym, że coś nie dotarło, a nie na zmianie zdania, napisz
            najpierw do nas; zwykle naprawiamy to w ciągu dnia.
          </p>
        </Question>

        <Question q="Jak działają serca?">
          <p>
            Przegrane oblężenie kosztuje jedno serce, a serca odnawiają się same z czasem, do
            limitu twojego flakonu. Pierwsze trzy oblężenia każdego rozdziału można przegrać za
            darmo, ucząc się go, a powtórka już wygranego oblężenia jest zawsze darmowa.
          </p>
          <p>
            Gdy serc brakuje, możesz poczekać, obejrzeć film za dwa serca albo wydać klejnoty.
            Większy flakon na stałe podnosi limit.
          </p>
        </Question>

        <Question q="Przycisk filmu nigdy nie znajduje filmu.">
          <p>
            To znaczy, że w tej chwili nie było dostępnej reklamy. Dostępność zależy od kraju,
            pory dnia i tego, ile filmów już dziś obejrzano. Gra próbuje dalej w tle, więc zwykle
            wkrótce znów działa sama.
          </p>
          <p>
            Żeby ukończyć grę, nigdy nie trzeba oglądać reklam. Każda jest dobrowolna i nic nie
            jest za nimi zablokowane.
          </p>
        </Question>

        <Question q="Jak przestać pojawiać się w rankingu?">
          <p>
            Otwórz zakładkę <strong>Profil</strong> i dotknij{" "}
            <strong>{label.hideFromBoards}</strong> w sekcji rankingu. Twoja karta zostaje
            wycofana, a twoje imię strażnika przestaje być widoczne dla innych graczy. W swojej
            grze zachowujesz to imię.
          </p>
        </Question>

        <Question q="Jak zmienić wybór dotyczący reklam?">
          <p>
            <strong>Ustawienia</strong> (ikona koła zębatego na ekranie głównym lub ekranie
            profilu), potem <strong>{label.privacyChoices}</strong>. Na iOS osobne pozwolenie na
            śledzenie jest w{" "}
            <strong>Ustawieniach iOS › Prywatność i ochrona › Śledzenie</strong>.
          </p>
        </Question>

        <Question q="Jak usunąć wszystko?">
          <p>
            Zobacz{" "}
            <Link href={localePath("pl", "/delete-account")}>
              usuwanie konta i danych
            </Link>
            . Pamiętaj, że samo usunięcie aplikacji nie usuwa tego, co jest na naszych
            serwerach.
          </p>
        </Question>

        <Question q="Imię strażnika zostało odrzucone.">
          <p>
            Imiona muszą być niepowtarzalne, a my odfiltrowujemy te, które podszywają się pod
            kogoś, mogą zostać odebrane jako nękanie albo zawierają znaki psujące wpisy innych
            graczy w rankingu.
          </p>
          <p>
            Odrzucone imię nie zostaje ci odebrane. Zachowujesz je w swojej grze, a w rankingu
            pojawiasz się pod wygenerowanym imieniem.
          </p>
        </Question>

        <Question q="Imię innego gracza jest obraźliwe.">
          <p>
            Otwórz jego królestwo z rankingu i dotknij <strong>{label.report}</strong>.
            Sprawdzamy każde zgłoszenie, a imię łamiące zasady zastępujemy wygenerowanym. Nie
            powiemy ci, kto je zgłosił, a tamtej osobie nie powiemy, że zgłoszenie pochodzi od
            ciebie.
          </p>
        </Question>

        <Question q="Czy gra działa offline?">
          <p>
            Tak. Każde oblężenie działa na twoim telefonie bez połączenia. Ranking, odwiedzanie
            innych królestw, sklep, filmy z nagrodą oraz logowanie i usuwanie konta wymagają
            połączenia, a codzienne bonusy odblokowuje się po jednorazowym połączeniu z
            internetem.
          </p>
        </Question>
      </div>

      <h2 id="balance-buddies">{bb}: częste pytania</h2>

      <div className="not-prose">
        <Question q="Po ponownej instalacji straciłem postępy.">
          <p>
            Twoje postępy są zapisywane w chmurze od pierwszej zagadki, na anonimowym koncie
            tego urządzenia. Ponowna instalacja zaczyna nowe. Żeby przenosić postępy między
            instalacjami lub telefonami, otwórz <strong>Settings</strong> i zaloguj się przez
            Google lub Apple. Zaloguj się tym samym dostawcą w nowej instalacji, a postępy
            wrócą.
          </p>
          <p>Jeśli nie wrócą, napisz do nas z adresu tego logowania.</p>
        </Question>

        <Question q="Zalogowałem się i moje postępy się zmieniły.">
          <p>
            To logowanie miało już własne postępy. Gra pyta, zanim zastąpi postępy na twoim
            urządzeniu, i przełącza się tylko po twoim potwierdzeniu. Zakupy zrobione na
            urządzeniu zostają w każdym przypadku. Żeby wrócić, wyloguj się i zaloguj drugim
            kontem.
          </p>
        </Question>

        <Question q="Jak działają podpowiedzi?">
          <p>
            Zaczynasz z dziesięcioma. Gdy masz mniej niż dziesięć, co cztery godziny jedna
            wraca sama. Podpowiedź pokazuje świecącego ducha tam, gdzie powinien trafić
            następny kumpel; opłacony krok zostaje odkryty za darmo przy kolejnej próbie i na
            innych urządzeniach.
          </p>
          <p>
            Możesz też obejrzeć krótki film, by dostać dwie kolejne, albo kupić pakiet w
            sklepie. Każdą zagadkę da się rozwiązać bez nich.
          </p>
        </Question>

        <Question q="Dlaczego widzę reklamy między zagadkami?">
          <p>
            W pierwszych ośmiu zagadkach nie ma żadnych i nigdy w trakcie zagadki. Potem po co
            drugiej rozwiązanej zagadce może się pojawić krótka reklama; dzięki temu gra jest
            darmowa. Subskrypcja <strong>No Ads</strong> w sklepie albo 30 dni bez reklam ze
            Starter Bundle je wyłączają.
          </p>
        </Question>

        <Question q="Jak anulować subskrypcję No Ads?">
          <p>
            W sklepie, nie w grze: na Androidzie Google Play › Płatności i subskrypcje ›
            Subskrypcje, na iOS Ustawienia › twoje imię › Subskrypcje. Pozostaje aktywna do
            końca opłaconego miesiąca. Usunięcie aplikacji ani konta jej nie anuluje.
          </p>
        </Question>

        <Question q="Zapłaciłem za coś i tego nie dostałem.">
          <p>
            Otwórz grę ponownie z dostępem do internetu: niedokończone zakupy i aktywna
            subskrypcja są odbierane przy uruchomieniu. Jeśli nadal nic nie dotarło, napisz do
            nas z potwierdzeniem lub numerem zamówienia ze sklepu, a załatwimy to. Zwrotami
            zajmują się Apple i Google według własnych zasad.
          </p>
        </Question>

        <Question q="Jak zmienić wybór dotyczący reklam?">
          <p>
            <strong>Settings</strong> › <strong>Ad privacy choices</strong>. Przycisk pojawia
            się wszędzie tam, gdzie wymaga tego prawo, na przykład w UE i Wielkiej Brytanii.
          </p>
        </Question>

        <Question q="Jak usunąć konto?">
          <p>
            <strong>Settings</strong> › <strong>Delete account</strong> (widoczne po
            zalogowaniu). Szczegóły znajdziesz w{" "}
            <Link href={localePath("pl", "/delete-account#balance-buddies")}>
              usuwaniu konta i danych
            </Link>
            .
          </p>
        </Question>

        <Question q="Czy gra działa offline?">
          <p>
            Tak. Każda zagadka działa na telefonie bez połączenia, a postępy są wysyłane, gdy
            znów będziesz online. Reklamy, sklep i logowanie wymagają połączenia.
          </p>
        </Question>
      </div>

      <p className="mt-8">
        <a href={mailto(mail.support, bb)}>Napisz do nas w sprawie {bb}</a>
      </p>

      <h2>Zgłaszanie problemu z bezpieczeństwem</h2>
      <p>
        Jeśli znasz sposób na złamanie ekonomii gry, odczytanie zapisu innego gracza albo
        dostanie się w inny sposób do czegoś, do czego nie powinno być dostępu, napisz do nas na{" "}
        <a href={mailto(mail.security)}>{site.email}</a>, zanim powiesz o tym komukolwiek
        innemu. Nie podejmiemy żadnych kroków przeciwko osobie, która zgłasza coś w dobrej
        wierze.
      </p>
    </>
  ),
};

export default doc;
