import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.pl.mail;
const label = gameTextFor("pl").labels;
const game = gemfire.name;

/**
 * Translation of privacy/en.tsx. Where the two differ, the English text applies. The reader
 * is never addressed in the past tense, which Polish genders.
 */
const doc: LegalDoc = {
  title: "Polityka prywatności",
  description: `Jak ${site.company} i ${game} obchodzą się z twoimi danymi, prostymi słowami.`,
  intro: `Tu wyjaśniamy, co ${game} i ta strona zbierają o tobie, dlaczego i co możesz z tym zrobić.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          W całą grę {game} możesz grać bez podawania nam imienia i nazwiska, adresu e-mail
          ani czegokolwiek innego o sobie. Tworzymy anonimowe konto, żeby twój postęp można było
          zapisać i przywrócić. Wskazuje ono zapis gry, a nie osobę.
        </p>
        <p className="mb-2">
          Reklamy pokazujemy tylko wtedy, gdy zdecydujesz się którąś obejrzeć, a dostarczają je
          podmioty trzecie, które mogą używać identyfikatora reklamowego. W UE i Wielkiej Brytanii
          najpierw prosimy o zgodę, a odpowiedź możesz zmienić w każdej chwili na ekranie
          ustawień.
        </p>
        <p>
          Nie sprzedajemy twoich danych. Nie interesuje nas, kim jesteś, tylko to, czy gra
          działa.
        </p>
      </Summary>

      <h2 id="who-we-are">Kim jesteśmy</h2>
      <p>
        Wydawcą gry {game} jest {site.entity} (nazwa handlowa: {site.company}), adres:{" "}
        {site.address}, ten sam wydawca, który widnieje na stronie w sklepie. W rozumieniu
        ogólnego rozporządzenia o ochronie danych (RODO) obowiązującego w UE i Wielkiej Brytanii
        jesteśmy administratorem opisanych tu danych. Możesz pisać do nas na adres{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Ta polityka dotyczy gry {game} na Androida i iOS oraz tej strony. Jeśli wydamy kolejną grę,
        będzie miała tu własny wpis.
      </p>

      <h2 id="what-we-collect">Co zbieramy i dlaczego</h2>
      <p>
        Staraliśmy się pisać konkretnie, a nie tak, żeby wszystko brzmiało wyczerpująco. Jeśli
        czegoś nie ma w tej tabeli, gra tego nie zbiera.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Co</th>
              <th>Dlaczego</th>
              <th>Kiedy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Anonimowy identyfikator konta</strong>, tworzony przez Firebase
                Authentication
              </td>
              <td>
                Żeby twój postęp mógł zostać zapisany na naszych serwerach i przywrócony na
                nowym urządzeniu. To losowy ciąg znaków. Nie jest powiązany z twoim imieniem,
                adresem e-mail ani numerem telefonu, chyba że zdecydujesz się połączyć konto
                logowania.
              </td>
              <td>Pierwsze uruchomienie</td>
            </tr>
            <tr>
              <td>
                <strong>Twój postęp w grze</strong>: które oblężenia są ukończone i z iloma
                gwiazdkami, najlepsza fala w Nieskończonej Warcie, monety, klejnoty, serca i
                podpowiedzi, posiadane wieże, plecak i towarzysze, układ twojego królestwa i
                ziemie, na których stoi, dzienna seria oraz ustawienia
              </td>
              <td>
                Żeby gra toczyła się dalej od miejsca, w którym ją zostawiasz, a ten sam postęp
                był widoczny na innych twoich urządzeniach.
              </td>
              <td>Podczas gry</td>
            </tr>
            <tr>
              <td>
                <strong>Publiczna karta królestwa</strong>: wybrane przez ciebie imię strażnika,
                towarzysz używany jako awatar, twój poziom strażnika, wynik i liczba gwiazdek
                twojego królestwa oraz twoja liga
              </td>
              <td>
                Żeby inni gracze widzieli cię w rankingu i mogli odwiedzić twoje królestwo. To
                jedyne informacje, jakie widzą inni gracze. W każdej chwili możesz to wyłączyć w
                zakładce Profil, a twoja karta zostanie zdjęta.
              </td>
              <td>Dopóki ranking jest włączony</td>
            </tr>
            <tr>
              <td>
                <strong>Wybrane przez ciebie imię strażnika</strong>, przechowywane jako
                rezerwacja, żeby dwóch graczy nie mogło mieć tego samego
              </td>
              <td>
                Żeby imiona były niepowtarzalne. To imię wybierasz ty; nie używaj prawdziwego
                imienia i nazwiska, jeśli wolisz, by nie były publiczne.
              </td>
              <td>Jeśli ustawisz imię</td>
            </tr>
            <tr>
              <td>
                <strong>Połączone logowanie</strong>: identyfikator od Apple lub Google oraz
                to, co ten dostawca nam przekaże, w tym być może twój adres e-mail
              </td>
              <td>
                Tylko jeśli zdecydujesz się połączyć konto, żeby twój postęp przetrwał utratę
                urządzenia. Nigdy nie otrzymujemy twojego hasła.
              </td>
              <td>Tylko po połączeniu konta</td>
            </tr>
            <tr>
              <td>
                <strong>Dane zakupów</strong>: identyfikator transakcji w sklepie i to, co
                zostało kupione
              </td>
              <td>
                Żeby potwierdzić zakup w Apple lub Google i dać ci to, za co płacisz, dokładnie
                raz. <strong>Nigdy nie widzimy danych twojej karty</strong>. Płatność odbywa się
                w sklepie, a nie w grze.
              </td>
              <td>Jeśli coś kupujesz</td>
            </tr>
            <tr>
              <td>
                <strong>Identyfikatory reklamowe i powiązane dane</strong>, przetwarzane przez
                naszych partnerów reklamowych
              </td>
              <td>
                Żeby pokazać reklamy, które zdecydujesz się obejrzeć, i żeby gra mogła być darmowa.
                Zobacz sekcję <a href="#advertising">Reklamy</a> poniżej.
              </td>
              <td>Gdy oglądasz reklamę</td>
            </tr>
            <tr>
              <td>
                <strong>Analityka rozgrywki</strong>: zdarzenia takie jak rozpoczęcie, wygranie
                lub przegranie oblężenia, kupno wieży, otwarcie skrzyni czy dokonanie zakupu, wraz
                z identyfikatorem urządzenia
              </td>
              <td>
                Żeby widzieć, gdzie gracze się zacinają i które części gry nie działają.
                Obsługuje to Google Analytics dla Firebase. Zobacz sekcję{" "}
                <a href="#analytics">Analityka i atrybucja</a> poniżej.
              </td>
              <td>Podczas gry, za twoją zgodą tam, gdzie jest wymagana</td>
            </tr>
            <tr>
              <td>
                <strong>Atrybucja instalacji</strong>: która reklama lub który link, jeśli w
                ogóle, doprowadził do instalacji gry, oraz potwierdzenie twoich zakupów
              </td>
              <td>
                Żeby wiedzieć, za które nasze reklamy warto płacić. Obsługuje to AppsFlyer.
              </td>
              <td>Raz, gdy decyzja o zgodzie jest już znana</td>
            </tr>
            <tr>
              <td>
                <strong>Twoje zgłoszenie</strong> dotyczące imienia strażnika innego gracza
              </td>
              <td>
                Żebyśmy mogli sprawdzić imię i w razie potrzeby je zastąpić. Zgłoszenie zapisuje,
                z którego konta je wysłano, żeby nie dało się go sfałszować.
              </td>
              <td>Tylko jeśli zgłaszasz imię</td>
            </tr>
            <tr>
              <td>
                <strong>Podstawowe informacje techniczne</strong>: model urządzenia, wersja
                systemu, język i diagnostyka błędów
              </td>
              <td>
                Żeby ustalić, dlaczego coś się zawiesiło albo ekran wyświetlił się źle na
                urządzeniu, którego nie mamy.
              </td>
              <td>W razie potrzeby</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Czego celowo nie zbieramy</h3>
      <ul>
        <li>Twojego imienia i nazwiska, chyba że wpiszesz je jako imię strażnika.</li>
        <li>Twojego adresu e-mail, chyba że do nas napiszesz albo połączysz konto logowania.</li>
        <li>Twoich kontaktów, zdjęć, mikrofonu, aparatu ani dokładnej lokalizacji.</li>
        <li>Danych twojej karty płatniczej. Nigdy do nas nie trafiają.</li>
        <li>Wiadomości. Nie ma czatu ani sposobu, by gracze kontaktowali się ze sobą.</li>
      </ul>

      <h2 id="legal-bases">Nasze podstawy prawne (Wielka Brytania i UE)</h2>
      <ul>
        <li>
          <strong>Wykonanie umowy</strong>: zapisywanie i przywracanie twojego postępu oraz
          realizacja zakupu. Bez tego gra nie działa.
        </li>
        <li>
          <strong>Zgoda</strong>: spersonalizowane reklamy, analityka rozgrywki i atrybucja
          instalacji tam, gdzie prawo wymaga zgody, oraz obecność w publicznym rankingu. Wszystko
          to jest dobrowolne i każdą zgodę można wycofać.
        </li>
        <li>
          <strong>Prawnie uzasadniony interes</strong>: utrzymanie działania gry,
          diagnozowanie awarii, sprawdzanie zgłoszonych imion oraz zapobieganie oszustwom i
          nadużyciom w ekonomii gry.
        </li>
        <li>
          <strong>Obowiązek prawny</strong>: przechowywanie danych zakupów do celów podatkowych
          i księgowych.
        </li>
      </ul>

      <h2 id="advertising">Reklamy</h2>
      <p>
        Gra jest darmowa, a utrzymują ją reklamy. Reklamy są dobrowolne w tym sensie, który ma
        znaczenie: nie ma reklam między poziomami ani banerów. Każdą reklamę w grze {game} oglądasz
        z własnego wyboru, w zamian za serca, monety albo podpowiedź, a każdy rodzaj ma dzienny
        limit.
      </p>
      <p>
        Reklamy dostarcza <strong>Unity LevelPlay</strong> (ironSource) jako platforma
        mediacyjna oraz sieci reklamowe, z którymi współpracuje, obecnie m.in.{" "}
        <strong>Unity Ads</strong> i <strong>Google AdMob</strong>. Ci partnerzy są niezależnymi
        administratorami zbieranych przez siebie danych i mają własne polityki:
      </p>
      <ul>
        <li>
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">
            Unity: polityka prywatności dla graczy i użytkowników aplikacji
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            Google: jak Google wykorzystuje informacje z witryn i aplikacji, które korzystają z
            usług Google
          </a>
        </li>
      </ul>

      <h3>Twój wybór i jak go zmienić</h3>
      <p>
        Jeśli jesteś w Europejskim Obszarze Gospodarczym lub w Wielkiej Brytanii, przed
        jakąkolwiek spersonalizowaną reklamą prosimy o zgodę za pomocą formularza
        certyfikowanego przez Google. Jeśli odmówisz, nadal zobaczysz reklamy i nadal dostaniesz
        nagrody za ich obejrzenie. Po prostu nie będą oparte na twoim profilu.
      </p>
      <p>
        Odpowiedź możesz zmienić w każdej chwili: otwórz <strong>Ustawienia</strong> (ikona
        koła zębatego na ekranie głównym lub ekranie profilu) i wybierz{" "}
        <strong>{label.privacyChoices}</strong>.
      </p>
      <p>
        Na iOS osobno pojawia się pytanie, czy aplikacja może używać identyfikatora reklamowego
        urządzenia. Ta odpowiedź należy do systemu i można ją zmienić w{" "}
        <strong>Ustawieniach iOS › Prywatność i ochrona › Śledzenie</strong>.
      </p>

      <h2 id="analytics">Analityka i atrybucja</h2>
      <p>
        Używamy <strong>Google Analytics dla Firebase</strong> do zapisywania zdarzeń z gry,
        takich jak rozpoczęcie oblężenia czy otwarcie skrzyni, żeby widzieć, gdzie gracze mają
        trudności i co nie działa. Tam, gdzie wymagana jest zgoda, zdarzenia te są zapisywane
        dopiero po jej udzieleniu.
      </p>
      <p>
        Używamy <strong>AppsFlyer</strong>, żeby wiedzieć, która reklama lub który link, jeśli w
        ogóle, doprowadził do instalacji, oraz żeby potwierdzać zakupy. AppsFlyer uruchamia się
        dopiero wtedy, gdy twoja decyzja o zgodzie jest znana, a jeśli nie zgadzasz się na
        personalizację, działa w trybie zanonimizowanym. Jego polityka jest dostępna na{" "}
        <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">
          appsflyer.com
        </a>
        .
      </p>

      <h2 id="sharing">Komu udostępniamy twoje dane</h2>
      <p>Korzystamy z kilku dostawców, każdego do jednego zadania:</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> (Authentication, Cloud Firestore, Cloud Functions,
          Analytics): anonimowe konto, zapisany postęp i ranking. Dane są przechowywane w Unii
          Europejskiej.
        </li>
        <li>
          <strong>Apple i Google</strong>: dystrybucja aplikacji, logowanie, jeśli je wybierzesz,
          płatności i weryfikacja zakupów.
        </li>
        <li>
          <strong>Unity LevelPlay i jego sieci reklamowe</strong>: reklamy, jak opisano wyżej.
        </li>
        <li>
          <strong>AppsFlyer</strong>: atrybucja instalacji, jak opisano wyżej.
        </li>
      </ul>
      <p>
        Nie sprzedajemy danych osobowych i nie udostępniamy ich do reklamy behawioralnej między
        różnymi kontekstami poza tym, co za twoją zgodą robią wymienieni wyżej partnerzy
        reklamowi.
      </p>

      <h2 id="transfers">Przekazywanie danych za granicę</h2>
      <p>
        Zapisy gry przechowujemy w Unii Europejskiej. Niektórzy nasi dostawcy mają siedzibę w
        Stanach Zjednoczonych i mogą tam przetwarzać dane na podstawie standardowych klauzul
        umownych Komisji Europejskiej, ramowych zasad ochrony danych UE-USA lub równoważnego
        zabezpieczenia.
      </p>

      <h2 id="retention">Jak długo przechowujemy dane</h2>
      <ul>
        <li>
          <strong>Zapisany postęp</strong>: dopóki konto jest używane, i do 24 miesięcy po tym,
          jak przestanie być używane; potem może zostać usunięty.
        </li>
        <li>
          <strong>Twoja publiczna karta królestwa</strong>: dopóki jej nie ukryjesz albo nie
          usuniesz swoich danych, zależnie od tego, co nastąpi wcześniej. Ranking jest
          przebudowywany co noc, więc ukryta karta znika z niego w ciągu doby.
        </li>
        <li>
          <strong>Dane zakupów</strong>: tak długo, jak wymagają tego przepisy podatkowe i
          księgowe, zwykle siedem lat, oraz tak długo, jak trzeba, żeby ten sam paragon nie
          został wykorzystany dwa razy. Pozostają po usunięciu twoich danych z gry, bo nie wolno
          nam ich niszczyć.
        </li>
        <li>
          <strong>Twoje zgłoszenia</strong> dotyczące imion innych graczy: dopóki istnieje
          zgłoszone konto, żeby dało się wykazać, że sprawdzenie się odbyło.
        </li>
      </ul>

      <h2 id="rights">Twoje prawa</h2>
      <p>
        Jeśli dotyczy cię RODO w UE lub w Wielkiej Brytanii, masz prawo żądać kopii swoich
        danych, ich sprostowania, usunięcia, ograniczenia przetwarzania lub sprzeciwu wobec
        niego, a także wycofać udzieloną zgodę. Podobne prawa przewiduje kalifornijska ustawa o
        ochronie prywatności konsumentów (CCPA) i inne przepisy.
      </p>
      <p>
        Najszybsze drogi są w samej grze: wyjście z rankingu jest w zakładce Profil, wybór
        dotyczący reklam w Ustawieniach, a usunięcie konta w zakładce Profil. W każdej innej
        sprawie albo żeby usunąć wszystko, zobacz{" "}
        <Link href={localePath("pl", "/delete-account")}>usuwanie danych</Link> lub napisz na{" "}
        <a href={mailto(mail.privacy)}>{site.email}</a>. Odpowiadamy w ciągu 30 dni.
      </p>
      <p>
        Ponieważ konta są domyślnie anonimowe, przed realizacją wniosku możemy poprosić o
        wykazanie, które konto należy do ciebie, zwykle przez wysłanie wniosku z adresu
        połączonego logowania lub podanie identyfikatora konta widocznego w grze.
      </p>
      <p>
        Jeśli uważasz, że źle obchodzimy się z twoimi danymi, możesz złożyć skargę do organu
        ochrony danych w swoim kraju.
      </p>

      <h2 id="children">Dzieci</h2>
      <p>
        {game} to gra dla wszystkich. Nie jest skierowana do dzieci poniżej 13 lat i nie jest
        zarejestrowana u naszych partnerów reklamowych jako aplikacja dla dzieci. Nie zbieramy
        świadomie danych osobowych dzieci poniżej 13 lat. Jeśli uważasz, że dziecko przekazało
        nam jakieś dane, napisz na <a href={mailto(mail.child)}>{site.email}</a>, a usuniemy je.
      </p>

      <h2 id="this-website">Ta strona</h2>
      <p>
        Ta strona jest statyczna. Nie zapisuje plików cookie, nie korzysta z analityki i cię
        nie śledzi. Wie o tobie tylko to, co twoja przeglądarka przekazuje naszemu dostawcy
        hostingu, żeby wysłać ci stronę. Jeśli wybierzesz język albo zamkniesz propozycję
        języka, przeglądarka zapamięta to do zamknięcia karty; informacja zostaje na twoim
        urządzeniu i nigdy nie jest do nas wysyłana.
      </p>

      <h2 id="changes">Zmiany</h2>
      <p>
        Jeśli zmienimy tę politykę, zaktualizujemy datę na górze, a o każdej istotnej zmianie
        poinformujemy w grze, zanim wejdzie w życie.
      </p>
      <p>
        Ta polityka jest publikowana także w innych językach. Są to tłumaczenia tego
        angielskiego tekstu, a jeśli któreś się od niego różni, obowiązuje tekst angielski.
      </p>

      <h2 id="contact">Kontakt</h2>
      <p>
        {site.entity} (nazwa handlowa: {site.company})
        <br />
        {site.address}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
