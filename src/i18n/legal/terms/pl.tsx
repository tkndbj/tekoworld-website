import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.pl.mail;
const game = gemfire.name;

/**
 * Translation of terms/en.tsx. Where the two differ, the English text applies. The reader
 * is never addressed in the past tense, which Polish genders.
 */
const doc: LegalDoc = {
  title: "Regulamin",
  description: `Zasady gry w ${game}.`,
  intro: `Oto warunki, które akceptujesz, grając w ${game}.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Graj, nie oszukuj i nie podszywaj się w rankingu pod nikogo innego. Wszystko, co
          kupujesz, to licencja na używanie tego w grze. Monety i klejnoty nie są pieniędzmi i
          nie można ich wypłacić.
        </p>
        <p>
          Zwrotami zajmują się Apple i Google, a nie my. Jeśli coś pójdzie nie tak, napisz do
          nas, zanim wystawisz ocenę na jedną gwiazdkę. Wolimy to naprawić.
        </p>
      </Summary>

      <h2 id="agreement">1. Umowa</h2>
      <p>
        Ten regulamin to umowa między tobą a {site.entity} (nazwa handlowa:{" "}
        {site.company}), adres: {site.address} (&bdquo;my&rdquo;). Pobierając grę {game} lub grając
        w nią, akceptujesz go. Jeśli go nie akceptujesz, prosimy, nie graj.
      </p>
      <p>
        Twój sklep z aplikacjami ma też własne warunki i jeśli dotyczą one zakupu w tym sklepie,
        obowiązują razem z tym regulaminem.
      </p>
      <p>
        Ten regulamin jest publikowany także w innych językach. Są to tłumaczenia tego
        angielskiego tekstu, a jeśli któreś się od niego różni, obowiązuje tekst angielski.
      </p>

      <h2 id="licence">2. Twoja licencja</h2>
      <p>
        Udzielamy ci osobistej, niewyłącznej, niezbywalnej i odwołalnej licencji na instalowanie
        gry {game} i granie w nią na urządzeniach, którymi dysponujesz, dla własnej rozrywki.
        Gra, jej grafika, muzyka, poziomy i kod pozostają naszą własnością. Część grafiki i
        dźwięków pochodzi z licencji od podmiotów trzecich, które zachowują do nich prawa.
      </p>
      <p>Zobowiązujesz się nie:</p>
      <ul>
        <li>
          modyfikować gry, nie stosować wobec niej inżynierii wstecznej ani jej nie dekompilować,
          chyba że prawo wyraźnie na to pozwala;
        </li>
        <li>
          używać kodów, automatyzacji, zmodyfikowanych klientów ani edytorów pamięci, ani w inny
          sposób ingerować w ekonomię gry;
        </li>
        <li>
          sprzedawać, wynajmować ani przekazywać nikomu swojego konta ani znajdującej się na nim
          waluty i przedmiotów;
        </li>
        <li>atakować, przeciążać ani sondować naszych serwerów.</li>
      </ul>

      <h2 id="account">3. Twoje konto</h2>
      <p>
        Przy pierwszym uruchomieniu tworzymy dla ciebie anonimowe konto, żeby twój postęp można
        było zapisać. Możesz połączyć je z kontem Apple lub Google, żeby przetrwało utratę
        urządzenia.
      </p>
      <p>
        Odpowiadasz za bezpieczeństwo każdego połączonego logowania. Jeśli stracisz dostęp do
        niepołączonego anonimowego konta, na przykład usuwając aplikację bez połączenia konta,
        postępu może nie dać się odzyskać, a my możemy nie być w stanie ustalić, że należy do
        ciebie.
      </p>
      <p>
        Logowania, które jest już przypisane do innego królestwa, nie da się połączyć z twoim,
        bo waluta była zdobywana i wydawana w każdym z nich osobno. Gra ostrzega, zanim
        cokolwiek zostanie zastąpione.
      </p>

      <h2 id="virtual-items">4. Monety, klejnoty, serca i przedmioty</h2>
      <p>
        Wszystko, co zbierasz lub kupujesz w grze, w tym monety, klejnoty, serca, podpowiedzi,
        wieże i ich ulepszenia, plecak, towarzysze, elementy królestwa, ziemie i większe flakony
        serc, to <strong>ograniczona licencja na używanie tego w grze {game}</strong>. Nie są to
        pieniądze, papiery wartościowe ani własność. W szczególności:
      </p>
      <ul>
        <li>nie mają wartości poza grą i nie można ich wymienić na pieniądze;</li>
        <li>nie można ich przekazać, sprzedać ani dać innemu graczowi;</li>
        <li>
          mogą zostać przebalansowane, zmienione lub wycofane w miarę rozwoju gry, a ceny i
          nagrody mogą się zmieniać;
        </li>
        <li>
          nie przetrwają zamknięcia twojego konta ani zakończenia gry, chyba że prawo stanowi
          inaczej.
        </li>
      </ul>
      <p>
        Nagrody z reklam, codziennych skrzyń, koła i serii przyznają nasze serwery. Jeśli nagrody
        nie da się zweryfikować, na przykład z powodu zmodyfikowanego zapisu gry, może zostać
        odrzucona lub cofnięta.
      </p>

      <h2 id="purchases">5. Zakupy i zwroty</h2>
      <p>
        Zakupy odbywają się przez App Store firmy Apple lub Google Play i to te sklepy
        przyjmują płatność. Nigdy nie widzimy danych twojej karty. Ceny pokazywane w grze ustala
        sklep dla twojego kraju.
      </p>
      <p>
        <strong>Zwrotami zajmuje się sklep</strong>, według własnych zasad. Nie możemy zwrócić
        pieniędzy w jego imieniu. Jeśli za zakup pobrano opłatę, a to, za co płacisz, nie
        dotarło, napisz najpierw do nas. Zwykle możemy to naprawić bezpośrednio i szybciej.
      </p>
      <p>
        Jeśli jesteś konsumentem w UE lub Wielkiej Brytanii, przy zakupie cyfrowym zwykle
        przysługuje ci 14-dniowe prawo odstąpienia od umowy, ale wygasa ono z chwilą, gdy za
        twoją zgodą rozpoczyna się dostarczanie, czyli w momencie, gdy waluta trafia na twoje
        saldo. Nie wpływa to na twoje ustawowe prawa w przypadku wadliwego produktu.
      </p>
      <p>
        Jeśli zakup zostanie zwrócony lub obciążenie cofnięte po przyznaniu waluty, możemy
        zmniejszyć twoje saldo o odpowiednią kwotę, a zwrócony flakon serc przywraca
        poprzednią pojemność serc.
      </p>

      <h2 id="boards">6. Imiona, ranking i odwiedziny</h2>
      <p>
        Jeśli wybierzesz imię strażnika i zostawisz włączony ranking, to imię, twój awatar,
        poziom, wynik twojego królestwa i liga są widoczne dla innych graczy, a inni gracze
        mogą odwiedzić i obejrzeć twoje królestwo. Wybieraj z rozwagą.
      </p>
      <p>Możemy odrzucić, zmienić lub usunąć imię, które:</p>
      <ul>
        <li>podszywa się pod inną osobę, firmę lub pod nas;</li>
        <li>jest obraźliwe lub może zostać odebrane jako nękanie;</li>
        <li>zawiera znaki psujące wyświetlanie wpisów innych graczy.</li>
      </ul>
      <p>
        Odrzucone imię nie zostaje ci odebrane: zachowujesz je w swojej grze, a w rankingu
        pojawiasz się pod wygenerowanym imieniem. Inni gracze mogą zgłosić imię, które ich
        zdaniem łamie te zasady, a my sprawdzamy każde zgłoszenie. Z rankingu możesz całkowicie
        wyjść w zakładce Profil.
      </p>

      <h2 id="availability">7. Gra może się zmieniać</h2>
      <p>
        Dodajemy rozdziały, zmieniamy poziom trudności i nagrody, naprawiamy błędy i czasem
        usuwamy to, co nie działa. Możemy wstrzymać usługę na czas konserwacji, a kiedyś możemy
        zakończyć grę; wtedy, o ile to możliwe, uprzedzimy o tym z rozsądnym wyprzedzeniem w grze
        lub na tej stronie.
      </p>
      <p>
        Nie obiecujemy, że gra będzie działać bez przerw i błędów, a niektóre funkcje, w tym
        ranking, sklep i filmy z nagrodą, wymagają połączenia z internetem.
      </p>

      <h2 id="suspension">8. Zawieszenie</h2>
      <p>
        Możemy zawiesić lub zamknąć konto, które narusza ten regulamin, zwłaszcza konto używane
        do oszukiwania, wyłudzeń w ekonomii gry lub nękania innych graczy. Gdy to
        proporcjonalne, najpierw ostrzeżemy. W każdej chwili możesz przestać grać i usunąć swoje
        dane, jak opisano na{" "}
        <Link href={localePath("pl", "/delete-account")}>stronie usuwania danych</Link>.
      </p>

      <h2 id="liability">9. Wyłączenia i odpowiedzialność</h2>
      <p>
        Gra jest udostępniana w stanie &bdquo;takim, jaka jest&rdquo;. W najszerszym zakresie
        dozwolonym przez prawo wyłączamy dorozumiane gwarancje przydatności handlowej i
        przydatności do określonego celu.
      </p>
      <p>
        Nic tutaj nie ogranicza odpowiedzialności za śmierć lub uszczerbek na zdrowiu wskutek
        zaniedbania, za oszustwo ani za cokolwiek innego, czego nie można zgodnie z prawem
        ograniczyć. Z tym zastrzeżeniem nasza łączna odpowiedzialność wobec ciebie jest
        ograniczona do wyższej z dwóch kwot: tego, co zapłacono nam w ciągu dwunastu miesięcy
        przed roszczeniem, albo 50 €.
      </p>
      <p>
        <strong>
          Jeśli jesteś konsumentem, nic w tym regulaminie nie narusza twoich ustawowych praw.
        </strong>
      </p>

      <h2 id="law">10. Prawo właściwe</h2>
      <p>
        Ten regulamin podlega prawu Republiki Cypryjskiej. Jeśli jesteś konsumentem, zachowujesz
        też ochronę wynikającą z bezwzględnie obowiązujących przepisów kraju, w którym
        mieszkasz, i możesz wnieść sprawę do sądu tam.
      </p>

      <h2 id="apple">11. Informacja wymagana przez Apple</h2>
      <p>
        Ta umowa jest zawarta między tobą a nami, a nie z Apple, i Apple nie odpowiada za grę
        ani jej treść. Apple nie ma obowiązku zapewniania do niej wsparcia. Jeśli aplikacja nie
        spełnia obowiązującej gwarancji, możesz powiadomić Apple, a Apple zwróci cenę zakupu; w
        najszerszym zakresie dozwolonym przez prawo Apple nie ma żadnych innych zobowiązań
        gwarancyjnych. Apple i jego spółki zależne są osobami trzecimi uprawnionymi z tego
        regulaminu i mogą go wobec ciebie egzekwować.
      </p>

      <h2 id="contact">12. Kontakt</h2>
      <p>
        {site.entity} (nazwa handlowa: {site.company})
        <br />
        {site.address}
        <br />
        <a href={mailto(mail.terms)}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
