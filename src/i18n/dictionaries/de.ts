import { gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * German (du, as in the game), in the game's own vocabulary: Turm, Plünderer, Hügel, Welle,
 * Herzen, Münzen, Juwelen, Hüter, Rangliste, Hinweis (never "Tipp", which means a tap).
 */
const de: Dictionary = {
  site: {
    tagline: "Handyspiele mit Feuer drin.",
    description: `${site.company} ist ein unabhängiges Studio für Handyspiele. Die Heimat von ${gemfire.name}, dem Match-3-Tower-Defense-Spiel, in dem jede Kombination einen Turm feuern lässt.`,
    keywords: ["Handyspiele-Studio", "Match-3", "Tower Defense", "Handyspiele", "Indie-Studio"],
    ogAlt: `${site.company}: Türme auf einer Burgmauer feuern über einem Juwelenbrett auf eine Skeletthorde.`,
    skip: "Zum Inhalt springen",
  },

  nav: {
    main: "Hauptmenü",
    home: `${site.company} Startseite`,
    games: "Spiele",
    studio: "Studio",
    support: "Hilfe",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    deleteData: "Deine Daten löschen",
    credits: "Credits",
    play: `${gemfire.name} spielen`,
    menu: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
  },

  footer: {
    blurb:
      "Ein unabhängiges Studio für Handyspiele. Wir machen kleine, laute Spiele mit echten Mechaniken unter dem Glitzer und veröffentlichen sie selbst.",
    studio: "Studio",
    smallPrint: "Das Kleingedruckte",
    copyright: (year: number) =>
      `© ${year} ${site.entity}, handelnd als ${site.company}. ${gemfire.name} und seine Grafiken sind Eigentum von ${site.company}.`,
  },

  suggest: {
    text: "Diese Seite gibt es auch auf Deutsch.",
    action: "Auf Deutsch lesen",
    dismiss: "Schließen",
  },

  legal: {
    lastUpdated: "Zuletzt aktualisiert:",
    inShort: "Kurz gesagt",
    translated:
      "Dies ist eine Übersetzung des englischen Originals. Wo die beiden voneinander abweichen, gilt der englische Text.",
    original: "Englisches Original lesen",
  },

  mail: {
    support: "Hilfe",
    privacy: "Datenschutzanfrage",
    child: "Datenschutz für Kinder",
    terms: "Frage zu den Nutzungsbedingungen",
    security: "Sicherheit",
    deleteAccount: "Mein Konto löschen",
    deleteSome: "Einen Teil meiner Daten löschen",
  },

  store: {
    comingSoon: "Bald bei Google Play und im App Store",
    googlePlay: "Jetzt bei Google Play",
    appStore: "Laden im App Store",
  },

  notFound: {
    meta: "Seite nicht gefunden",
    kicker: "Fehler 404",
    title: "Hier hat die Mauer kein Tor.",
    body: "Unter dieser Adresse gibt es nichts. Die Plünderer haben nachgesehen, und bei so etwas sind sie sehr gründlich.",
    home: "Zurück zum Studio",
    game: `${gemfire.name} ansehen`,
  },

  home: {
    hero: {
      chip: "Unabhängiges Studio für Handyspiele",
      title: rich("Wir machen Spiele", "\n", "mit ", { hl: "Feuer" }, " drin."),
      body: `${site.company} baut kleine, laute, mechanisch ehrliche Spiele für das Handy in deiner Tasche. Unser erstes ist ${gemfire.name}: ein Match-3-Brett, an eine Burgmauer geschraubt, auf der jede Kombination einen Turm feuern lässt.`,
      explore: `${gemfire.name} entdecken`,
      about: "Über das Studio",
      stats: ["Spiel in der Schmiede", "Plattformen zum Start", "Zwangswerbung", "Skelette aufzuhalten"],
    },
    ticker: [
      gemfire.name,
      "Match-3 trifft Tower Defense",
      "Android",
      "iOS",
      site.company,
      "Bau dein Königreich",
      "Verbessere deine Türme",
      "Halte die Mauer",
    ],
    games: {
      kicker: "Unsere Spiele",
      title: rich("Ein Titel. ", { hl: "Alles drin." }),
      body: "Wir bringen ein Spiel nach dem anderen heraus und arbeiten auch nach dem Start weiter daran. Das hier liegt gerade auf dem Amboss.",
      coverAlt: `${gemfire.name}-Titelbild: vier Türme auf einer Burgmauer feuern über einem Juwelenbrett auf eine Skelettarmee.`,
      status: "In Entwicklung",
      view: "Zum Spiel",
      nextKicker: "Platz 02",
      nextTitle: "Das nächste",
      nextBody: `Alles, was wir bei ${gemfire.name} lernen, fließt in das, was danach kommt. Sobald es etwas Sehenswertes gibt, taucht es zuerst hier auf.`,
      sealed: "Versiegelt",
    },
    studio: {
      kicker: "Das Studio",
      title: rich("Kleines Team. ", { hl: "Große Explosionen." }),
      body: `${site.company} ist ein unabhängiges Studio mit Sitz in ${placeName("de")}. Wir machen Handyspiele so, wie wir sie uns öfter wünschen würden: mechanisch ehrlich, großzügig zu den Spielenden und fertig.`,
      pillars: {
        mechanics: {
          title: "Mechanik zuerst",
          body: "Ein Spiel muss auch ohne Partikeleffekte spannend sein. Wir testen die Regel, bevor wir auch nur ein Juwel zeichnen, und wenn die Regel auf einem grauen Raster keinen Spaß macht, erscheint sie nicht.",
        },
        thumb: {
          title: "Respekt vor dem Daumen",
          body: "Kurze Runden, große Schaltflächen, und nichts Wichtiges versteckt sich hinter einem Timer. Ein Handyspiel wird im Bus gespielt. Im Bus muss es großartig sein.",
        },
        phone: {
          title: "Läuft auf deinem Handy",
          body: "Wir entwickeln für Geräte, die schon ein paar Jahre alt sind, und testen zuerst auf ihnen. Läuft ein Level auf deinem Handy schlecht, ist das ein Fehler bei uns, keine Anforderung an dich.",
        },
        self: {
          title: "Selbst veröffentlicht, selbst beantwortet",
          body: "Kein Publisher zwischen dir und uns. Dieselben Leute, die das Spiel bauen, lesen auch die Hilfe-Mails, und einen Fehler, den ein Spieler meldet, behebt die Person, die den Code geschrieben hat.",
        },
      },
    },
    contact: {
      kicker: "Kontakt",
      title: rich("Sag hallo. ", { hl: "Wir lesen alles." }),
      body: "Spielende, Presse, Plattformen und Partner landen alle im selben Postfach. Hilfeanfragen beantworten wir innerhalb von ein, zwei Tagen.",
      support: "Hilfe für Spielende",
    },
  },

  gemfire: {
    genre: "Match-3 trifft Tower Defense",
    pitch: "Juwelen kombinieren. Türme feuern. Die Mauer halten.",
    description: `${gemfire.name} ist ein Match-3-Tower-Defense-Spiel. Jede Kombination auf dem Brett lässt den Turm derselben Farbe auf die Horde feuern, die auf deine Burg zumarschiert. Überstehe Wellen, verbessere deine Türme und bau dein Königreich.`,
    ogAlt: `${gemfire.name}: Türme auf einer Burgmauer feuern über einem Juwelenbrett auf eine Skeletthorde.`,
    hero: {
      body: "Ein Match-3-Brett, an eine Burgmauer geschraubt. Bring drei Juwelen in eine Reihe, und der Turm dieser Farbe eröffnet das Feuer auf die Plünderer, die den Hügel herunterkommen. Halte die Mauer, verbessere dein Arsenal und bau dahinter ein Königreich.",
      chips: ["Kostenlos", "Android 8.0+", "iOS 15+", "Offline spielbar", "Keine Zwangswerbung"],
      stats: ["handgebaute Schlachten", "Türme zum Freischalten", "Gefährten zum Kennenlernen", "Zwangswerbung"],
      splashAlt: `Der Titelbildschirm von ${gemfire.name}: drei Türme auf Steinsockeln feuern unter einem Juwelenregen in eine Horde von Schattenwesen.`,
    },
    play: {
      kicker: "So wird gespielt",
      title: rich("Kombinieren. Aufrüsten. ", { hl: "Verteidigen." }),
      body: "Ein Brett, eine Mauer und ein Hügel voller Dinge, die herunterwollen. Jede Kombination ist ein abgefeuerter Schuss.",
      steps: {
        match: {
          title: "Kombinieren",
          body: "Zieh ein Juwel auf sein Nachbarfeld. Bring drei einer Farbe in eine Reihe, und der Turm dieser Farbe füllt sich mit Energie. Längere Reihen, mehr Energie. Kombiniere die Farbe, die gerade anrückt.",
          alt: `Der Kampfbildschirm von ${gemfire.name}: vier Türme auf einer Mauer über einem Juwelenbrett feuern in einem Verlies auf Skelette und Schleime.`,
        },
        power: {
          title: "Aufrüsten",
          body: "Juwelen kaufen stärkere Türme, und ein Zahnrad, das ein Plünderer fallen lässt, verbessert mitten im Kampf einen davon. Feuertöpfe, Heilungen und Schübe drehen eine schlechte Welle, und einen vollen Turm kannst du antippen, um alles auf einmal abzufeuern.",
          alt: "Eine Reihe verbesserter Türme leuchtet auf der Mauer, darunter leuchtet auf dem Brett eine Kette roter Herzjuwelen auf.",
        },
        defend: {
          title: "Verteidigen",
          body: "Die Plünderer laufen in Echtzeit den Hügel herunter. Ein Schuss trifft am härtesten, wenn er einen Plünderer seiner eigenen Farbe erwischt. Lass sie durch, und sie brechen deine Mauer. Halte sie, und das Königreich wächst.",
          alt: "Eine isometrische Insel wächst von einem umzäunten Grundstück zu einer ganzen Burg, und ein gekrönter Froschgefährte schaut zu.",
        },
      },
    },
    arsenal: {
      kicker: "Das Arsenal",
      title: rich("Zwanzig Türme. ", { hl: "Je fünf Sterne." }),
      body: "Jeder Turm wird pro Farbe gekauft und bis zu fünf Sterne verbessert. Die ersten zehn kosten Münzen. Die zweiten zehn kosten Juwelen, und jeder davon ist die erwachsene Version eines Turms, den du schon kennst.",
      art: "Drei Türme, grün, rot und cyan, auf grauen Sockeln, jeder feuert einen Flammenstrahl.",
      tier1: "Stufe I",
      tier1Sub: "mit Münzen gekauft",
      tier2: "Stufe II",
      tier2Sub: "mit Juwelen gekauft",
      kit: "Die Ausrüstung",
      charms: "Talismane auf dem Brett",
      charmNotes: {
        prism: "Ein Regenbogenjuwel. Es zählt als die Farbe, mit der du es kombinierst.",
        lance: "Räumt seine ganze Reihe und Spalte mit einem Schlag ab.",
        stormglass: "Die ganze Turmreihe feuert auf alles auf dem Hügel.",
      },
    },
    campaign: {
      kicker: "Die Kampagne",
      title: rich("Drei Fronten. ", { hl: "Dann die lange Nacht." }),
      body: "Dreißig handgebaute Belagerungen in drei Kapiteln, jedes mit eigenem Feind und eigenem Boss am Tor. Daneben steht Die Endlose Wacht: Wellen ohne Ende und ein Platz in der Rangliste dafür, wie lange du durchgehalten hast.",
      chapter: (n: number) => `Kapitel ${n}`,
      sieges: (n: number) => `${n} Belagerungen`,
      taglines: {
        thornwatch: "Füttere die Türme. Halte die Linie.",
        broodmarch: "Im Sumpf schlüpft etwas.",
        barrowfell: "Die Toten machen an der Mauer nicht halt.",
      },
      atTheGate: "Am Tor",
      infinite: "Endlosmodus",
      endlessPoints: [
        "Der Kampf hört nie auf.",
        "Die Gegner werden mit jeder Welle härter.",
        "Verdiene dir deinen Platz in der Rangliste.",
      ],
    },
    kingdom: {
      kicker: "Zwischen den Belagerungen",
      title: rich("Bau dein ", { hl: "Königreich." }),
      body: "Die Münzen, die du auf der Mauer gewinnst, gibst du dahinter aus. Kauf Land, mach aus einem umzäunten Grundstück eine Burg und verteile Häuser, Hallen, Mauern und Gärten auf einem Feld aus Kacheln, ganz wie du willst. Jedes Teil lässt sich in vier Richtungen drehen. Kein Königreich gleicht dem anderen.",
      art: "Bau dein Königreich: Eine Insel wächst von einem leeren, umzäunten Grundstück zu einer Werkstatt, einem Bergfried und einer ganzen Burg mit rot gedeckten Türmen.",
      lands: "Neun Länder",
      landList: [
        "Herdstatt",
        "Ostwiese",
        "Westsenke",
        "Südufer",
        "Nordmark",
        "Morgenfeld",
        "Abendfeld",
        "Stilles Ufer",
        "Ferne Terrasse",
      ],
      leagues: "Neun Ligen",
      leagueList: [
        "Setzlinge",
        "Dickichte",
        "Senken",
        "Wiesen",
        "Obstgärten",
        "Heiligtümer",
        "Wildwälder",
        "Sumpfland",
        "Der Altwald",
      ],
      companions: "Gefährten",
      companionsTitle: "Einunddreißig Freunde, einer nach dem anderen.",
      companionsBody:
        "Monarch ist ab der ersten Belagerung bei dir. Die anderen triffst du, während dein Königreich wächst, und wen du auswählst, der vertritt dich in der Rangliste.",
    },
    promises: {
      kicker: "Fair Play",
      title: rich("Sechs Dinge, die wir ", { hl: "nicht tun." }),
      list: {
        ads: {
          title: "Keine Zwangswerbung",
          body: "Keine Werbung zwischen den Levels und keine Banner. Jedes Video im Spiel schaust du nur, wenn du selbst darauf tippst, für Herzen, Münzen oder einen Hinweis, und für alle gibt es ein Tageslimit.",
        },
        offline: {
          title: "Spielbar ohne Netz",
          body: "Jede Belagerung läuft auf deinem Handy auch im Flugmodus. Die Rangliste, der Shop und Belohnungsvideos brauchen eine Verbindung, das Spiel nicht.",
        },
        save: {
          title: "Dein Spielstand auf unseren Servern",
          body: "Dein Fortschritt wird ab dem ersten Start in einem anonymen Konto in der Cloud gespeichert. Melde dich mit Google oder Apple an, dann übersteht er auch ein verlorenes oder neues Handy.",
        },
        grind: {
          title: "Kein Zwang zum Bezahlen",
          body: "Jedes Level lässt sich ohne Geld schaffen. Münzen und Juwelen verdienst du auf der Mauer; wer sie kauft, kauft Zeit, nicht das Ende.",
        },
        chat: {
          title: "Kein Chat, keine Fremden",
          body: "Es gibt keine Nachrichten und keinen Weg, wie Spielende sich gegenseitig kontaktieren können. Andere sehen nur deinen Hüternamen und deine Punkte in der Rangliste, und ein Tippen blendet sie aus.",
        },
        phone: {
          title: "Läuft auf deinem Handy",
          body: "Ab Android 8.0 oder iOS 15. Zuerst auf Handys gebaut und getestet, die schon ein paar Jahre alt sind, denn die haben die meisten Leute.",
        },
      },
    },
    faq: {
      kicker: "Fragen",
      title: rich("Die kurzen ", { hl: "Antworten." }),
      body: rich(
        "Die längeren, und die zu Käufen und Konten, stehen auf der ",
        { link: "Hilfeseite", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Kostet es etwas?",
          a: `Nein. ${gemfire.name} ist kostenlos, und jedes Level lässt sich ohne Geld schaffen. Es gibt optionale Käufe von Münzen, Juwelen und größeren Herzflaschen für alle, die schneller bauen wollen.`,
        },
        {
          q: "Gibt es Werbung?",
          a: "Nur die, die du selbst wählst. Keine Werbung zwischen den Levels und keine Banner. Jedes Video im Spiel schaust du nur, wenn du darauf tippst, für Herzen, Münzen oder einen Hinweis, und du kannst das ganze Spiel durchspielen, ohne ein einziges anzusehen.",
        },
        {
          q: "Brauche ich ein Konto oder eine Verbindung?",
          a: "Weder noch. Jedes Level läuft auf deinem Handy ohne Netz. Ein anonymes Konto sichert deinen Spielstand; melde dich nur mit Google oder Apple an, wenn er ein verlorenes Handy überstehen soll.",
        },
        {
          q: "Läuft es auf meinem Handy?",
          a: "Es braucht Android 8.0 oder iOS 15 und nicht viel mehr. Es ist für Handys gebaut, die schon ein paar Jahre alt sind, und wird zuerst auf ihnen getestet.",
        },
        {
          q: "Ist es für Kinder geeignet?",
          a: "Es gibt keinen Chat, keine Nachrichten und keinen Weg, wie Spielende sich gegenseitig kontaktieren können. Andere sehen höchstens den Namen und den Gefährten, die du gewählt hast, und die Punkte deines Königreichs, und das alles kannst du mit einem Tippen ausblenden.",
        },
      ],
    },
    getIt: {
      kicker: "Hol dir das Spiel",
      free: "Kostenlos für Android und iOS.",
    },
  },
};

export default de;
