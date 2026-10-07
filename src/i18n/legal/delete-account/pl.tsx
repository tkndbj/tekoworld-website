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
 * Translation of delete-account/en.tsx. Button names are the game's own Polish labels, so
 * the steps can be followed on the screen they describe. The reader is never addressed in
 * the past tense, which Polish genders.
 */
const doc: LegalDoc = {
  title: "Usuwanie konta i danych",
  description: `Jak usunąć konto w grze ${game} i przechowywane z nim dane.`,
  intro:
    "Możesz zlecić usunięcie wszystkiego, co przechowujemy o twoim królestwie. Oto dokładnie, co się wtedy dzieje.",
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Najszybciej w grze: zakładka <strong>Profil</strong>, potem karta{" "}
          <strong>Konto</strong>, potem <strong>{label.deleteAccount}</strong>. Działa od razu.
        </p>
        <p className="mb-2">
          Jeśli nie możesz już otworzyć gry, napisz na{" "}
          <a href={mailto(mail.deleteAccount)}>{site.email}</a>, a zrobimy to za ciebie w ciągu
          30 dni.
        </p>
        <p>
          Samo usunięcie aplikacji <strong>nie</strong> usuwa danych z naszych serwerów. Usuwa
          tylko kopię na tym urządzeniu.
        </p>
      </Summary>

      <h2 id="in-app">1. Usuń je w grze</h2>
      <p>
        To prawdziwe usunięcie, a nie prośba o nie. Nikt go nie czyta, nikt nie musi go
        zatwierdzać i nie czeka ono 30 dni.
      </p>
      <ol>
        <li>
          Otwórz {game} i przejdź do zakładki <strong>Profil</strong>.
        </li>
        <li>
          Przewiń do karty <strong>Konto</strong>.
        </li>
        <li>
          Dotknij <strong>{label.deleteAccount}</strong>, czerwonego przycisku na dole tej
          karty.
        </li>
        <li>
          Przeczytaj, co jest wymienione, potem dotknij <strong>{label.deleteEverything}</strong>{" "}
          i potwierdź jeszcze raz.
        </li>
      </ol>
      <p>
        Jeśli konto Apple lub Google jest połączone, najpierw pojawi się prośba o ponowne
        zalogowanie, żebyśmy wiedzieli, że to naprawdę ty. Potrzebne jest połączenie z
        internetem: jeśli gra nie może połączyć się z naszymi serwerami, informuje, że nic nie
        zostało usunięte, bo nie będziemy twierdzić, że usunęliśmy coś, czego usunąć się nie
        udało.
      </p>

      <h2 id="request">2. Albo napisz do nas</h2>
      <p>
        Skorzystaj z tej drogi, jeśli gry nie ma już na urządzeniu, urządzenie zginęło albo z
        innego powodu nie możesz dotrzeć do przycisku.
      </p>
      <p>
        Konta są anonimowe, więc nie znajdziemy cię po imieniu ani adresie e-mail, chyba że
        logowanie jest połączone. Jeśli nadal możesz otworzyć grę, identyfikator konta jest
        widoczny na karcie <strong>Konto</strong> w zakładce <strong>Profil</strong>. Skopiuj
        go albo zrób zrzut ekranu. Jeśli konto Apple lub Google jest połączone, możesz to
        pominąć i po prostu napisać z tego adresu e-mail.
      </p>
      <p>
        Napisz na <a href={mailto(mail.deleteAccount)}>{site.email}</a> z dowolnego adresu, z
        tematem <strong>{mail.deleteAccount}</strong>, i podaj identyfikator konta lub adres
        połączonego logowania.
      </p>
      <p>
        Potwierdzimy otrzymanie wiadomości, sprawdzimy, czy konto należy do ciebie, i zakończymy
        usuwanie w ciągu <strong>30 dni</strong>. Damy znać, gdy będzie gotowe.
      </p>

      <h2 id="what-goes">3. Co zostaje usunięte</h2>
      <ul>
        <li>
          Twoje anonimowe konto i każde połączone logowanie Apple lub Google. Uprawnienie
          Zaloguj się przez Apple zostaje cofnięte w Apple.
        </li>
        <li>
          Twój zapisany postęp: ukończone oblężenia i gwiazdki, najlepsze fale, monety,
          klejnoty, serca, podpowiedzi, wieże, plecak, towarzysze i całe twoje królestwo.
        </li>
        <li>Twoja publiczna karta królestwa i każdy twój wiersz w rankingu.</li>
        <li>
          Rezerwacja twojego imienia strażnika, które staje się wolne dla innych. Jedynym
          wyjątkiem jest imię odrzucone przez moderację: pozostaje zablokowane, żeby nikt nie
          mógł go ponownie zająć.
        </li>
        <li>Zgłoszenia innych graczy dotyczące twojego imienia.</li>
      </ul>
      <p>Tego nie da się cofnąć. Nie mamy możliwości przywrócenia usuniętego królestwa.</p>

      <h2 id="what-stays">4. Co musimy zachować</h2>
      <p>
        Trzy rzeczy pozostają po usunięciu i wolimy powiedzieć to wprost, niż zaskoczyć cię
        później:
      </p>
      <ul>
        <li>
          <strong>Dane zakupów</strong>: identyfikator transakcji w sklepie i to, co kupiono,
          przechowywane tak długo, jak wymagają tego przepisy podatkowe i księgowe (zwykle
          siedem lat), oraz po to, by ten sam paragon nie został wykorzystany dwa razy. Nie wolno
          nam niszczyć ich na żądanie. Po usunięciu nie są już powiązane z żadną rozgrywką.
        </li>
        <li>
          <strong>Twoje zgłoszenia</strong> dotyczące imion innych graczy, żeby dało się wykazać,
          że te imiona zostały sprawdzone.
        </li>
        <li>
          <strong>Ślad samego wniosku o usunięcie</strong>, żebyśmy mogli wykazać, że go
          zrealizowaliśmy.
        </li>
      </ul>
      <p>
        Apple i Google prowadzą własną, niezależną od nas ewidencję twoich zakupów. Jeśli
        chcesz ją usunąć, trzeba zwrócić się do nich.
      </p>

      <h2 id="less">Jeśli chcesz mniej niż pełne usunięcie</h2>
      <p>
        Być może nie trzeba usuwać wszystkiego. Każda z tych opcji działa od razu i żadna nie
        dotyka reszty konta:
      </p>
      <ul>
        <li>
          <strong>Wyjście z publicznego rankingu</strong>: zakładka <strong>Profil</strong>,
          potem <strong>{label.hideFromBoards}</strong> w sekcji rankingu. Twoja opublikowana
          karta zostaje zdjęta, a imię strażnika przestaje być dla kogokolwiek widoczne. Postęp,
          zakupy i królestwo pozostają nietknięte.
        </li>
        <li>
          <strong>Wycofanie zgody na reklamy</strong>: <strong>Ustawienia</strong> (ikona koła
          zębatego), potem <strong>{label.privacyChoices}</strong>.
        </li>
        <li>
          <strong>Zmiana imienia strażnika</strong>: zakładka <strong>Profil</strong>, potem
          dotknij swojego imienia. Stare imię staje się wolne, a ranking pokazuje nowe.
        </li>
      </ul>
      <p>
        Jeśli wolisz, żebyśmy zrobili coś z tego za ciebie, napisz na{" "}
        <a href={mailto(mail.deleteSome)}>{site.email}</a> i napisz, co. W{" "}
        <Link href={localePath("pl", "/privacy")}>polityce prywatności</Link> opisujemy, czego
        dotyczy każda z tych opcji.
      </p>
    </>
  ),
};

export default doc;
