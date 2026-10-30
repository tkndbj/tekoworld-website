import { balanceBuddies, gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * Polish (ty, as in the game), in the game's own vocabulary: wieża, najeźdźca, wzgórze, fala,
 * serca, monety, klejnoty, strażnik, ranking, podpowiedź, poziom, rozdział.
 *
 * Two rules the game learned the hard way: the player is never addressed in the past tense
 * (wygrałeś / wygrałaś is gendered), and a count takes one of three noun forms, which
 * `plural` picks rather than assuming English's two.
 */
const plural = (n: number, one: string, few: string, many: string) => {
  const form = new Intl.PluralRules("pl").select(n);
  return `${n} ${form === "one" ? one : form === "few" ? few : many}`;
};

const pl: Dictionary = {
  site: {
    tagline: "Gry mobilne z ogniem w środku.",
    description: `${site.company} to niezależne studio gier mobilnych. Dom gry ${gemfire.name}, łączącej układanie trójek z obroną wież, w której każde dopasowanie odpala wieżę, oraz ${balanceBuddies.name}, spokojnej gry logicznej o równowadze.`,
    keywords: ["studio gier mobilnych", "gra match-3", "tower defense", "gra o równowadze", "gry mobilne", "niezależne studio"],
    ogAlt: `${site.company}: wieże na murach zamku strzelają do hordy szkieletów ponad planszą z klejnotami.`,
    skip: "Przejdź do treści",
  },

  nav: {
    main: "Menu główne",
    home: `${site.company}, strona główna`,
    games: "Gry",
    studio: "Studio",
    support: "Pomoc",
    privacy: "Prywatność",
    terms: "Regulamin",
    deleteData: "Usuń swoje dane",
    credits: "Twórcy",
    play: "Nasze gry",
    menu: "Menu",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    language: "Język",
  },

  footer: {
    blurb:
      "Niezależne studio gier mobilnych. Robimy małe, głośne gry z prawdziwą mechaniką pod błyskotkami i sami je wydajemy.",
    studio: "Studio",
    smallPrint: "Drobny druk",
    copyright: (year: number) =>
      `© ${year} ${site.entity} (nazwa handlowa: ${site.company}). ${gemfire.name}, ${balanceBuddies.name} i grafiki z tych gier są własnością ${site.company}.`,
  },

  suggest: {
    text: "Ta strona jest dostępna także po polsku.",
    action: "Czytaj po polsku",
    dismiss: "Zamknij",
  },

  legal: {
    lastUpdated: "Ostatnia aktualizacja:",
    inShort: "W skrócie",
    translated:
      "To jest tłumaczenie angielskiego oryginału. Jeśli oba teksty się różnią, obowiązuje tekst angielski.",
    original: "Czytaj angielski oryginał",
  },

  mail: {
    support: "Pomoc",
    privacy: "Wniosek dotyczący prywatności",
    child: "Prywatność dzieci",
    terms: "Pytanie o regulamin",
    security: "Bezpieczeństwo",
    deleteAccount: "Usuń moje konto",
    deleteSome: "Usuń część moich danych",
  },

  store: {
    comingSoon: "Wkrótce w Google Play i App Store",
    googlePlay: "Pobierz z Google Play",
    appStore: "Pobierz w App Store",
  },

  notFound: {
    meta: "Nie znaleziono strony",
    kicker: "Błąd 404",
    title: "W tym miejscu mur nie ma bramy.",
    body: "Pod tym adresem nic nie ma. Najeźdźcy już sprawdzili, a w takich sprawach są bardzo dokładni.",
    home: "Wróć do studia",
    game: `Zobacz ${gemfire.name}`,
  },

  home: {
    hero: {
      chip: "Niezależne studio gier mobilnych",
      title: rich("Robimy gry", "\n", "z ", { hl: "ogniem" }, " w środku."),
      body: `${site.company} tworzy małe, uczciwe w mechanice gry na telefon, który nosisz w kieszeni. ${gemfire.name} to plansza do układania trójek przykręcona do murów zamku, na której każde dopasowanie odpala wieżę. ${balanceBuddies.name} to ta spokojna: układasz kumpli, aż wszystko zawiśnie równo.`,
      explore: "Zobacz nasze gry",
      about: "O studiu",
      stats: ["gry w kuźni", "platformy", "zagadek do zrównoważenia", "szkieletów do zatrzymania"],
    },
    ticker: [
      gemfire.name,
      "Trójki i obrona wież",
      balanceBuddies.name,
      "Spokojne zagadki o równowadze",
      "Android",
      "iOS",
      site.company,
      "Utrzymaj mur",
      "Znajdź równowagę",
    ],
    games: {
      kicker: "Nasze gry",
      title: rich("Dwie gry. ", { hl: "Wszystko w nich." }),
      body: "Wydajemy jedną grę naraz i pracujemy nad każdą także po premierze. Jedna jest głośna, druga spokojna, a obie stoją na prawdziwych zasadach.",
      view: "Zobacz grę",
      gemfire: {
        alt: `Grafika z gry ${gemfire.name}: cztery wieże na murach zamku strzelają do armii szkieletów ponad planszą z klejnotami.`,
        status: "Już na iOS",
      },
      balanceBuddies: {
        alt: `Grafika z gry ${balanceBuddies.name}: chwiejna wieża z kolorowych potworków-kumpli na tle błękitnego nieba.`,
        status: "Wkrótce",
      },
      nextKicker: "Miejsce 03",
      nextTitle: "Następna",
      nextBody: `Wszystko, czego uczymy się przy grach ${gemfire.name} i ${balanceBuddies.name}, trafi do tego, co powstanie potem. Gdy będzie coś wartego pokazania, pojawi się najpierw tutaj.`,
      sealed: "Zapieczętowane",
    },
    studio: {
      kicker: "Studio",
      title: rich("Mały zespół. ", { hl: "Wielkie wybuchy." }),
      body: `${site.company} to niezależne studio. Siedziba: ${placeName("pl")}. Robimy gry mobilne tak, jak chcielibyśmy, żeby robiono ich więcej: uczciwe w mechanice, hojne dla grających i skończone.`,
      pillars: {
        mechanics: {
          title: "Najpierw mechanika",
          body: "Gra musi być ciekawa nawet z wyłączonymi efektami. Sprawdzamy zasadę, zanim narysujemy choć jeden klejnot, a jeśli zasada nie bawi na szarej siatce, nie trafia do gry.",
        },
        thumb: {
          title: "Szacunek dla kciuka",
          body: "Krótkie rozgrywki, duże przyciski i nic ważnego schowanego za licznikiem czasu. W gry na telefon gra się w autobusie. W autobusie gra ma być świetna.",
        },
        phone: {
          title: "Działa na twoim telefonie",
          body: "Tworzymy z myślą o urządzeniach sprzed kilku lat i to na nich testujemy najpierw. Jeśli poziom działa źle na twoim telefonie, to nasz błąd, a nie twój problem ze sprzętem.",
        },
        self: {
          title: "Sami wydajemy, sami odpowiadamy",
          body: "Między tobą a nami nie ma wydawcy. Te same osoby, które robią grę, czytają skrzynkę pomocy, a błąd zgłoszony przez gracza poprawia ten, kto napisał dany kod.",
        },
      },
    },
    contact: {
      kicker: "Kontakt",
      title: rich("Napisz do nas. ", { hl: "Czytamy wszystko." }),
      body: "Gracze, prasa, platformy i partnerzy trafiają do tej samej skrzynki. Na pytania o pomoc odpowiadamy w ciągu dnia lub dwóch.",
      support: "Pomoc dla graczy",
    },
  },

  gemfire: {
    genre: "Trójki i obrona wież",
    pitch: "Dopasuj klejnoty. Odpal wieże. Utrzymaj mur.",
    description: `${gemfire.name} to gra łącząca układanie trójek z obroną wież. Każde dopasowanie na planszy odpala wieżę tego samego koloru w hordę maszerującą na twój zamek. Przetrwaj fale, ulepszaj wieże i zbuduj królestwo.`,
    ogAlt: `${gemfire.name}: wieże na murach zamku strzelają do hordy szkieletów ponad planszą z klejnotami.`,
    hero: {
      body: "Plansza do układania trójek przykręcona do murów zamku. Ułóż trzy klejnoty, a wieża tego koloru otworzy ogień do najeźdźców schodzących ze wzgórza. Utrzymaj mur, ulepsz arsenał i zbuduj za nim królestwo.",
      chips: ["Za darmo", "Android 8.0+", "iOS 15+", "Działa offline", "Bez wymuszonych reklam"],
      stats: ["ręcznie budowanych bitew", "wież do odblokowania", "towarzyszy do poznania", "wymuszonych reklam"],
      splashAlt: `Ekran tytułowy gry ${gemfire.name}: trzy wieże na kamiennych cokołach strzelają do hordy cienistych stworów w deszczu klejnotów.`,
    },
    play: {
      kicker: "Jak się gra",
      title: rich("Dopasuj. Wzmocnij. ", { hl: "Obroń." }),
      body: "Jedna plansza, jeden mur i wzgórze pełne stworów, które chcą z niego zejść. Każde dopasowanie to oddany strzał.",
      steps: {
        match: {
          title: "Dopasuj",
          body: "Przeciągnij klejnot na sąsiednie pole. Ułóż trzy w jednym kolorze, a wieża tego koloru napełni się energią. Dłuższy rząd, więcej energii. Dopasowuj kolor, który nadciąga.",
          alt: `Ekran bitwy w grze ${gemfire.name}: cztery wieże na murze nad planszą z klejnotami strzelają do szkieletów i szlamów w lochu.`,
        },
        power: {
          title: "Wzmocnij",
          body: "Za klejnoty kupisz mocniejsze wieże, a zębatka upuszczona przez najeźdźcę ulepszy jedną w trakcie walki. Garnki ognia, leczenie i doładowania odwracają złą falę, a pełną wieżę można dotknąć, by wystrzelić wszystko naraz.",
          alt: "Rząd ulepszonych wież świeci na murze, a niżej na planszy rozbłyska łańcuch czerwonych klejnotów-serc.",
        },
        defend: {
          title: "Obroń",
          body: "Najeźdźcy schodzą ze wzgórza w czasie rzeczywistym. Strzał boli najbardziej, gdy trafi najeźdźcę we własnym kolorze. Przepuść ich, a rozbiją mur. Utrzymaj go, a królestwo urośnie.",
          alt: "Izometryczna wyspa rośnie od ogrodzonej działki do pełnego zamku, a przygląda się temu żabi towarzysz w koronie.",
        },
      },
    },
    arsenal: {
      kicker: "Arsenał",
      title: rich("Dwadzieścia wież. ", { hl: "Każda po pięć gwiazdek." }),
      body: "Każdą wieżę kupuje się dla danego koloru i ulepsza do pięciu gwiazdek. Pierwsze dziesięć kosztuje monety. Kolejne dziesięć kosztuje klejnoty, a każda z nich to dorosła wersja wieży, którą już znasz.",
      art: "Trzy wieże, zielona, czerwona i cyjanowa, na szarych cokołach, każda strzela płomiennym pociskiem.",
      tier1: "Poziom I",
      tier1Sub: "za monety",
      tier2: "Poziom II",
      tier2Sub: "za klejnoty",
      kit: "Plecak",
      charms: "Amulety na planszy",
      charmNotes: {
        prism: "Tęczowy klejnot. Liczy się jako kolor, z którym go dopasujesz.",
        lance: "Czyści cały swój rząd i kolumnę jednym uderzeniem.",
        stormglass: "Cała linia wież strzela do wszystkiego na wzgórzu.",
      },
    },
    campaign: {
      kicker: "Kampania",
      title: rich("Trzy fronty. ", { hl: "Potem długa noc." }),
      body: "Trzydzieści ręcznie budowanych oblężeń w trzech rozdziałach, każdy z własnym wrogiem i własnym bossem u bram. Obok nich stoi Nieskończona Warta: fale bez końca i miejsce w rankingu za to, jak długo wytrwasz.",
      chapter: (n: number) => `Rozdział ${n}`,
      sieges: (n: number) => plural(n, "oblężenie", "oblężenia", "oblężeń"),
      taglines: {
        thornwatch: "Karm wieże. Utrzymaj linię.",
        broodmarch: "Coś wykluwa się na bagnach.",
        barrowfell: "Umarli nie zatrzymują się pod murem.",
      },
      atTheGate: "U bram",
      infinite: "Tryb nieskończony",
      endlessPoints: [
        "Walka nigdy się nie kończy.",
        "Z każdą falą wrogowie są silniejsi.",
        "Wywalcz swoje miejsce w rankingu.",
      ],
    },
    kingdom: {
      kicker: "Między oblężeniami",
      title: rich("Zbuduj ", { hl: "królestwo." }),
      body: "Monety zdobyte na murach wydaje się za nimi. Kup ziemię, zamień ogrodzoną działkę w zamek i rozstaw domy, sale, mury i ogrody na polu kafelków, jak tylko chcesz. Każdy element można obrócić w cztery strony. Nie ma dwóch takich samych królestw.",
      art: "Zbuduj królestwo: wyspa rośnie od pustej, ogrodzonej działki przez warsztat i wieżę obronną aż do pełnego zamku z wieżami krytymi czerwoną dachówką.",
      lands: "Dziewięć krain",
      landList: [
        "Ognisko",
        "Wschodnia Łąka",
        "Zachodnia Kotlina",
        "Południowy Brzeg",
        "Północne Rubieże",
        "Pole Świtu",
        "Pole Zmierzchu",
        "Cichy Brzeg",
        "Daleki Taras",
      ],
      leagues: "Dziewięć lig",
      leagueList: [
        "Sadzonki",
        "Zarośla",
        "Kotliny",
        "Łąki",
        "Sady",
        "Sanktuaria",
        "Dzikie Bory",
        "Mokradła",
        "Prastary Las",
      ],
      companions: "Towarzysze",
      companionsTitle: "Trzydziestu jeden przyjaciół, po jednym naraz.",
      companionsBody:
        "Monarcha jest z tobą od pierwszego oblężenia. Resztę poznajesz, gdy twoje królestwo rośnie, a ten, którego wybierzesz, reprezentuje cię w rankingu.",
    },
    promises: {
      kicker: "Uczciwa gra",
      title: rich("Sześć rzeczy, których ", { hl: "nie zrobimy." }),
      list: {
        ads: {
          title: "Bez wymuszonych reklam",
          body: "Nie ma reklam między poziomami ani banerów. Każdy film w grze oglądasz tylko wtedy, gdy go włączysz, w zamian za serca, monety albo podpowiedź, a każdy ma dzienny limit.",
        },
        offline: {
          title: "Działa bez zasięgu",
          body: "Każde oblężenie działa na twoim telefonie w trybie samolotowym. Ranking, sklep i filmy z nagrodą wymagają połączenia; sama gra nie.",
        },
        save: {
          title: "Twój zapis na naszych serwerach",
          body: "Postęp zapisuje się w chmurze od pierwszego uruchomienia, na anonimowym koncie. Zaloguj się przez Google lub Apple, a przetrwa zgubienie albo wymianę telefonu.",
        },
        grind: {
          title: "Nic nie zmusza do płacenia",
          body: "Każdy poziom da się ukończyć bez wydawania pieniędzy. Monety i klejnoty zdobywa się na murach; kupując je, kupujesz czas, a nie zakończenie.",
        },
        chat: {
          title: "Bez czatu, bez obcych",
          body: "Nie ma wiadomości ani sposobu, by gracze się ze sobą kontaktowali. Inni widzą tylko twoje imię strażnika i wynik w rankingu, a jedno dotknięcie je ukrywa.",
        },
        phone: {
          title: "Działa na twoim telefonie",
          body: "Android 8.0 lub iOS 15 i nowsze. Tworzone i testowane najpierw na telefonach sprzed kilku lat, bo takie ma większość ludzi.",
        },
      },
    },
    faq: {
      kicker: "Pytania",
      title: rich("Krótkie ", { hl: "odpowiedzi." }),
      body: rich(
        "Dłuższe, a także te o zakupach i kontach, są na ",
        { link: "stronie pomocy", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Czy to coś kosztuje?",
          a: `Nie. ${gemfire.name} jest za darmo, a każdy poziom da się ukończyć bez wydawania pieniędzy. Są opcjonalne zakupy monet, klejnotów i większych flakonów serc dla tych, którzy chcą budować szybciej.`,
        },
        {
          q: "Czy są reklamy?",
          a: "Tylko te, które wybierzesz. Nie ma reklam między poziomami ani banerów. Każdy film w grze oglądasz tylko wtedy, gdy go włączysz, w zamian za serca, monety albo podpowiedź, a całą grę da się ukończyć bez obejrzenia ani jednego.",
        },
        {
          q: "Czy potrzebuję konta albo internetu?",
          a: "Ani jednego, ani drugiego. Każdy poziom działa na twoim telefonie bez zasięgu. Anonimowe konto przechowuje twój zapis; zaloguj się przez Google lub Apple tylko wtedy, gdy chcesz, by przetrwał zgubienie telefonu.",
        },
        {
          q: "Czy zadziała na moim telefonie?",
          a: "Wystarczy Android 8.0 lub iOS 15. Gra powstała z myślą o telefonach sprzed kilku lat i najpierw na nich jest testowana.",
        },
        {
          q: "Czy gra jest bezpieczna dla dzieci?",
          a: "Nie ma czatu, wiadomości ani sposobu, by gracze się ze sobą kontaktowali. Inny gracz może zobaczyć tylko wybrane przez ciebie imię i towarzysza oraz wynik twojego królestwa, a wszystko to ukryjesz jednym dotknięciem.",
        },
      ],
    },
    getIt: {
      kicker: "Pobierz grę",
      free: "Za darmo na Androida i iOS.",
    },
  },
  balanceBuddies: {
    genre: "Spokojna gra o równowadze",
    pitch: "Upuść kumpli. Znajdź równowagę. Odetchnij.",
    description: `${balanceBuddies.name} to spokojna gra logiczna o równowadze. Przeciągaj kumpli z tacy na mobile, huśtawki, diabelskie młyny, sprężyny i tratwy, aż wszystko zawiśnie równo i znieruchomieje. Prawdziwa matematyka, prawdziwa fizyka, bez limitu czasu i bez przegranej.`,
    ogAlt: `${balanceBuddies.name}: radosna wieża z kolorowych potworków-kumpli na tle błękitnego nieba.`,
    hero: {
      body: "Każda zagadka to konstrukcja, która nie chce stać spokojnie: wiszący mobil, huśtawka, diabelski młyn, drążek na dwóch sprężynach, tratwa na wodzie. Przeciągnij kumpli z tacy i upuść każdego tam, gdzie zachowa równowagę. Bez zegara, bez końca gry, tylko ta cicha chwila, gdy wszystko się wyrównuje.",
      chips: ["Darmowa", "Android 8.0+", "iOS 15+", "Bez limitu czasu", "Bez przegranej", "Działa offline"],
      stats: ["zagadek o równowadze", "rodzajów konstrukcji", "podpowiedzi na start", "zegarów"],
      shotAlt: `${balanceBuddies.name}, First Swing: trzech kumpli wisi o zachodzie słońca na dwupiętrowym mobilu.`,
      bannerAlt: `Grafika z gry ${balanceBuddies.name}: chwiejna wieża z kolorowych potworków-kumpli obok logo gry, na błękitnym niebie pełnym chmur.`,
    },
    play: {
      kicker: "Jak się gra",
      title: rich("Przeciągnij. Upuść. ", { hl: "Wyważ." }),
      body: "Taca kumpli, jedna konstrukcja i jedna dobra odpowiedź, o której fizyka powie ci w chwili, gdy ją znajdziesz.",
      steps: {
        drag: {
          title: "Wybierz kumpla",
          body: "Każda zagadka zaczyna się od tacy kumpli na dole ekranu, a na każdym wypisana jest jego waga. Przeciągnij jednego w górę i upuść tam, gdzie twoim zdaniem pasuje.",
          alt: "Little Builder: klocki z cyframi i mały domek na drewnianej belce wyważonej na skale.",
        },
        balance: {
          title: "Znajdź równowagę",
          body: "Zawieś go na haczyku, posadź na kołku, połóż na tratwie. Każda konstrukcja działa według prawdziwej zasady: na mobilu waga razy odległość musi być równa po obu stronach. Wskaźnik na górze mówi, jak blisko jesteś.",
          alt: "First Swing: wiszący mobil z trzema kumplami na ponumerowanych haczykach i wskaźnikiem równowagi na górze.",
        },
        settle: {
          title: "Poczekaj, aż się uspokoi",
          body: "Gdy wszystko jest równo i przez chwilę się nie rusza, zagadka jest rozwiązana. Mniej ruchów to więcej gwiazdek, a to, co spadnie, po prostu wraca na tacę.",
          alt: "Springy: kumple na drążku zawieszonym na dwóch sprężynach rozciągniętych na różną długość.",
        },
      },
    },
    contraptions: {
      kicker: "Konstrukcje",
      title: rich("Sześć sposobów, ", { hl: "by przechylić szalę." }),
      body: "Każda to mała lekcja prawdziwej fizyki, a późniejsze zagadki je łączą: tajemnicze skrzynki, wiatr, lód, ciernie i taśmociągi.",
      items: {
        mobile: {
          title: "Mobile",
          body: "Drążki wiszące na drążkach. Waga razy odległość musi się zerować na każdym z nich.",
          alt: "Dwupiętrowy mobil z kumplami na ponumerowanych haczykach.",
        },
        seesaw: {
          title: "Huśtawki",
          body: "Kamienne, drewniane i metalowe klocki na desce, która naprawdę się przechyla. Metal jest cięższy, niż wygląda.",
          alt: "Heavy Metal: drewniana huśtawka na stojaku z metalowym klockiem na jednym końcu.",
        },
        wheel: {
          title: "Diabelskie młyny",
          body: "Pasażerowie na obracającym się kole. Zatrzymuje się równo tylko wtedy, gdy ich wagi równoważą się wokół osi.",
          alt: "Ferris Wheel: dwóch kumpli na kole, które wychyliło się z poziomu.",
        },
        spring: {
          title: "Sprężyny",
          body: "Drążek na dwóch sprężynach o różnej sztywności. Obciąż go tak, by obie rozciągnęły się dokładnie tak samo.",
          alt: "Springy: kumple na drążku zawieszonym na dwóch sprężynach.",
        },
        raft: {
          title: "Tratwy",
          body: "Skrzynki na tratwie, która naprawdę pływa. Załaduj ją tak, by płynęła równo po wodzie.",
          alt: "Lazy Raft: kamienne i drewniane skrzynki na tratwie unoszącej się na spokojnej wodzie.",
        },
        balloon: {
          title: "Balony",
          body: "Balony ciągną w górę, a nie w dół. Odejmują się od wagi i są sztuczką w niejednej zagadce.",
          alt: "Up and Away: dwa balony i kumpel zawieszeni na przechylonym drążku.",
        },
      },
    },
    hints: {
      kicker: "Utknąłeś?",
      title: rich("Podpowiedź, ", { hl: "nigdy ściana." }),
      body: "Podpowiedź pokazuje świecącego ducha dokładnie tam, gdzie powinien trafić następny kumpel. Odkryty krok zostaje odkryty, przy kolejnej próbie i na twoim drugim telefonie.",
      points: [
        "Dziesięć podpowiedzi na start, a co cztery godziny wraca jedna.",
        "Obejrzyj krótki film, by dostać dwie kolejne, kiedy tylko chcesz.",
        "Albo kup pakiet. Każdą zagadkę da się rozwiązać bez nich.",
      ],
      hintAlt: "Lupa z przyciskiem odtwarzania: obejrzyj film, by dostać podpowiedzi.",
      noAdsAlt: "Miękka poduszka z przekreślonym napisem AD: subskrypcja No Ads.",
      noAds: "No Ads, co miesiąc",
      noAdsBody: "Wyłącza reklamy między zagadkami. Możesz ją anulować w każdej chwili na koncie w sklepie.",
    },
    promises: {
      kicker: "Uczciwa gra",
      title: rich("Spokojnie, ", { hl: "celowo." }),
      list: {
        timers: {
          title: "Bez zegara, bez końca gry",
          body: "Nic nie odlicza czasu i niczego nie można stracić. To, co spadnie, wraca na tacę, więc od razu możesz spróbować jeszcze raz.",
        },
        real: {
          title: "Prawdziwa matematyka, prawdziwa fizyka",
          body: "Każdą zagadkę rozwiązuje prawdziwa zasada, prawo dźwigni, prawo Hooke'a albo wyporność, a nie zgadywanie, co miał na myśli projektant.",
        },
        ads: {
          title: "Reklamy, które nie przeszkadzają",
          body: "Żadnych w pierwszych ośmiu zagadkach, nigdy w trakcie zagadki i bez banerów. Potem między zagadkami może pojawić się krótka reklama, a subskrypcja No Ads je wyłącza.",
        },
        offline: {
          title: "Działa bez zasięgu",
          body: "Każda zagadka działa na twoim telefonie. Reklamy, sklep i zapis w chmurze potrzebują połączenia, zagadki nie.",
        },
        save: {
          title: "Twoje postępy są bezpieczne",
          body: "Postępy są zapisywane od pierwszej zagadki na anonimowym koncie. Zaloguj się przez Google lub Apple, by przenieść je na inny telefon.",
        },
        sound: {
          title: "Łagodne dla uszu",
          body: "Delikatne dźwięki nastrojone w jednej tonacji i spokojna muzyka, stworzone na kanapę pod koniec długiego dnia.",
        },
      },
    },
    faq: {
      kicker: "Pytania",
      title: rich("Krótkie ", { hl: "odpowiedzi." }),
      body: rich(
        "Dłuższe, a także te o zakupach i kontach, znajdziesz na ",
        { link: "stronie pomocy", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Czy to coś kosztuje?",
          a: `Nie. ${balanceBuddies.name} jest darmowa i każdą zagadkę da się rozwiązać bez wydawania pieniędzy. Możesz kupić dodatkowe podpowiedzi albo subskrypcję, która wyłącza reklamy.`,
        },
        {
          q: "Czy są reklamy?",
          a: "Tak, ale delikatne. W pierwszych ośmiu zagadkach nie ma żadnych i nigdy nie pojawiają się w trakcie zagadki. Potem po co drugiej rozwiązanej zagadce może się pojawić krótka reklama. Filmy za dodatkowe podpowiedzi są zawsze twoim wyborem, a subskrypcja No Ads lub 30 dni bez reklam ze Starter Bundle wyłączają resztę.",
        },
        {
          q: "Co, jeśli utknę?",
          a: "Użyj podpowiedzi. Pokazuje świecącego ducha tam, gdzie powinien trafić następny kumpel. Zaczynasz z dziesięcioma, co cztery godziny wraca jedna, a krótki film daje dwie kolejne.",
        },
        {
          q: "Czy potrzebuję konta albo internetu?",
          a: "Ani jednego, ani drugiego. Każda zagadka działa na telefonie bez zasięgu. Anonimowe konto zapisuje twoje postępy; logowanie przez Google lub Apple jest potrzebne tylko, jeśli chcesz grać na innym urządzeniu.",
        },
        {
          q: "Czy zadziała na moim telefonie?",
          a: "Potrzebuje Androida 8.0 lub iOS 15 i niewiele więcej.",
        },
        {
          q: "Czy nadaje się dla dzieci?",
          a: "Jest dla wszystkich. Nie ma czatu, wiadomości ani niczego o tobie, co mogliby zobaczyć inni gracze.",
        },
      ],
    },
    getIt: {
      kicker: "Pobierz grę",
      free: "Za darmo na Androida i iOS.",
    },
  },
};

export default pl;
