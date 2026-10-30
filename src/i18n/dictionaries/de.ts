import { balanceBuddies, gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * German (du, as in the game), in the game's own vocabulary: Turm, Plünderer, Hügel, Welle,
 * Herzen, Münzen, Juwelen, Hüter, Rangliste, Hinweis (never "Tipp", which means a tap).
 */
const de: Dictionary = {
  site: {
    tagline: "Handyspiele mit Feuer drin.",
    description: `${site.company} ist ein unabhängiges Studio für Handyspiele. Die Heimat von ${gemfire.name}, dem Match-3-Tower-Defense-Spiel, in dem jede Kombination einen Turm feuern lässt, und von ${balanceBuddies.name}, dem entspannten Balance-Puzzle.`,
    keywords: ["Handyspiele-Studio", "Match-3", "Tower Defense", "Balance-Puzzle", "Handyspiele", "Indie-Studio"],
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
    play: "Unsere Spiele",
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
      `© ${year} ${site.entity}, handelnd als ${site.company}. ${gemfire.name}, ${balanceBuddies.name} und ihre Grafiken sind Eigentum von ${site.company}.`,
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
      body: `${site.company} baut kleine, mechanisch ehrliche Spiele für das Handy in deiner Tasche. ${gemfire.name} ist ein Match-3-Brett, an eine Burgmauer geschraubt, auf der jede Kombination einen Turm feuern lässt. ${balanceBuddies.name} ist das ruhige: Setz die Buddies ab, bis alles im Gleichgewicht hängt.`,
      explore: "Unsere Spiele ansehen",
      about: "Über das Studio",
      stats: ["Spiele in der Schmiede", "Plattformen", "Puzzles zum Ausbalancieren", "Skelette aufzuhalten"],
    },
    ticker: [
      gemfire.name,
      "Match-3 trifft Tower Defense",
      balanceBuddies.name,
      "Entspannte Balance-Puzzles",
      "Android",
      "iOS",
      site.company,
      "Halte die Mauer",
      "Finde das Gleichgewicht",
    ],
    games: {
      kicker: "Unsere Spiele",
      title: rich("Zwei Spiele. ", { hl: "Alles drin." }),
      body: "Wir bringen ein Spiel nach dem anderen heraus und arbeiten auch nach dem Start an jedem weiter. Eins ist laut, eins ist ruhig, und beide stehen auf echten Regeln.",
      view: "Zum Spiel",
      gemfire: {
        alt: `${gemfire.name}-Titelbild: vier Türme auf einer Burgmauer feuern über einem Juwelenbrett auf eine Skelettarmee.`,
        status: "Jetzt für Android und iOS",
      },
      balanceBuddies: {
        alt: `${balanceBuddies.name}-Titelbild: ein wackliger Turm aus bunten Monster-Buddies vor blauem Himmel.`,
        status: "Demnächst",
      },
      nextKicker: "Platz 03",
      nextTitle: "Das nächste",
      nextBody: `Alles, was wir bei ${gemfire.name} und ${balanceBuddies.name} lernen, fließt in das, was danach kommt. Sobald es etwas Sehenswertes gibt, taucht es zuerst hier auf.`,
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
  balanceBuddies: {
    genre: "Entspanntes Balance-Puzzle",
    pitch: "Buddies ablegen. Gleichgewicht finden. Durchatmen.",
    description: `${balanceBuddies.name} ist ein ruhiges Balance-Puzzlespiel. Zieh die Buddies aus der Ablage auf Mobiles, Wippen, Riesenräder, Federn und Flöße, bis alles waagerecht hängt und stillhält. Echte Mathematik, echte Physik, kein Zeitdruck und kein Verlieren.`,
    ogAlt: `${balanceBuddies.name}: ein fröhlicher Turm aus bunten Monster-Buddies vor blauem Himmel.`,
    hero: {
      body: "Jedes Rätsel ist eine Konstruktion, die nicht stillhalten will: ein hängendes Mobile, eine Wippe, ein Riesenrad, eine Stange an zwei Federn, ein Floß auf dem Wasser. Zieh die Buddies aus der Ablage nach oben und leg jeden dort ab, wo er ausbalanciert. Keine Uhr, kein Game Over, nur der stille Moment, in dem alles ins Gleichgewicht kommt.",
      chips: ["Kostenlos spielbar", "Android 8.0+", "iOS 15+", "Kein Zeitdruck", "Kein Verlieren", "Spielt offline"],
      stats: ["Balance-Rätsel", "Arten von Konstruktion", "Tipps zum Start", "Timer"],
      shotAlt: `${balanceBuddies.name}, First Swing: drei Buddies hängen bei Sonnenuntergang an einem zweistöckigen Mobile.`,
      bannerAlt: `${balanceBuddies.name}-Artwork: ein wackliger Turm aus bunten Monster-Buddies neben dem Logo des Spiels, an einem blauen Himmel voller Wolken.`,
    },
    play: {
      kicker: "So wird gespielt",
      title: rich("Ziehen. Ablegen. ", { hl: "Ausbalancieren." }),
      body: "Eine Ablage voller Buddies, eine Konstruktion und eine richtige Lösung, die dir die Physik in dem Moment verrät, in dem du sie findest.",
      steps: {
        drag: {
          title: "Nimm einen Buddy",
          body: "Jedes Rätsel beginnt mit einer Ablage voller Buddies am unteren Bildschirmrand, auf jedem steht sein Gewicht. Zieh einen nach oben und leg ihn dort ab, wo du ihn hinhaben willst.",
          alt: "Little Builder: Zahlenblöcke und ein kleines Haus auf einem Holzbalken, der auf einem Felsen balanciert.",
        },
        balance: {
          title: "Finde das Gleichgewicht",
          body: "Häng ihn an einen Haken, setz ihn auf einen Stift, lass ihn auf einem Floß treiben. Jede Konstruktion folgt der echten Regel: Beim Mobile muss Gewicht mal Abstand auf beiden Seiten gleich sein. Die Anzeige oben zeigt dir, wie nah du dran bist.",
          alt: "First Swing: ein hängendes Mobile mit drei Buddies an nummerierten Haken und einer Balance-Anzeige oben.",
        },
        settle: {
          title: "Lass es zur Ruhe kommen",
          body: "Wenn alles waagerecht ist und einen Moment stillhält, ist das Rätsel gelöst. Weniger Züge bringen mehr Sterne, und was herunterfällt, gleitet einfach zurück in die Ablage.",
          alt: "Springy: Buddies auf einer Stange, die an zwei unterschiedlich weit gedehnten Federn hängt.",
        },
      },
    },
    contraptions: {
      kicker: "Die Konstruktionen",
      title: rich("Sechs Wege, ", { hl: "die Waage zu kippen." }),
      body: "Jede ist eine kleine Lektion in echter Physik, und die späteren Rätsel mischen sie: geheimnisvolle Kisten, Wind, Eis, Dornen und Förderbänder.",
      items: {
        mobile: {
          title: "Mobiles",
          body: "Stangen, die an Stangen hängen. Gewicht mal Abstand muss sich an jeder einzelnen aufheben.",
          alt: "Ein zweistöckiges Mobile mit Buddies an nummerierten Haken.",
        },
        seesaw: {
          title: "Wippen",
          body: "Blöcke aus Stein, Holz und Metall auf einem Brett, das wirklich kippt. Metall ist schwerer, als es aussieht.",
          alt: "Heavy Metal: eine Holzwippe auf einem Ständer mit einem Metallblock an einem Ende.",
        },
        wheel: {
          title: "Riesenräder",
          body: "Fahrgäste auf einem drehenden Rad. Es kommt nur waagerecht zur Ruhe, wenn sich ihre Gewichte um die Nabe aufheben.",
          alt: "Ferris Wheel: zwei Buddies auf einem Rad, das aus dem Gleichgewicht geschwungen ist.",
        },
        spring: {
          title: "Federn",
          body: "Eine Stange an zwei unterschiedlich starken Federn. Belade sie, bis sich beide genau gleich weit dehnen.",
          alt: "Springy: Buddies auf einer Stange, die an zwei Spiralfedern hängt.",
        },
        raft: {
          title: "Flöße",
          body: "Kisten auf einem Floß, das wirklich schwimmt. Belade es so, dass es waagerecht auf dem Wasser liegt.",
          alt: "Lazy Raft: Kisten aus Stein und Holz auf einem Floß auf ruhigem Wasser.",
        },
        balloon: {
          title: "Ballons",
          body: "Ballons ziehen nach oben statt nach unten. Sie zählen gegen das Gewicht und sind in mehr als einem Rätsel der Trick.",
          alt: "Up and Away: zwei Ballons und ein Buddy an einer schrägen Stange.",
        },
      },
    },
    hints: {
      kicker: "Festgefahren?",
      title: rich("Ein Tipp, ", { hl: "niemals eine Mauer." }),
      body: "Ein Tipp zeigt einen leuchtenden Geist genau dort, wo der nächste Buddy hingehört. Ein aufgedeckter Schritt bleibt aufgedeckt, beim nächsten Versuch und auf deinem anderen Handy.",
      points: [
        "Zehn Tipps zum Start, und alle vier Stunden kommt einer zurück.",
        "Schau dir ein kurzes Video an, um zwei weitere zu bekommen, wann immer du willst.",
        "Oder kauf ein Paket. Jedes Rätsel ist auch ohne lösbar.",
      ],
      hintAlt: "Eine Lupe mit Play-Taste: Video ansehen für Tipps.",
      noAdsAlt: "Ein weiches Kissen mit durchgestrichenem AD-Schild: das No Ads-Abo.",
      noAds: "No Ads, monatlich",
      noAdsBody: "Schaltet die Werbung zwischen den Rätseln ab. Jederzeit über dein Store-Konto kündbar.",
    },
    promises: {
      kicker: "Fair Play",
      title: rich("Ruhig, ", { hl: "mit Absicht." }),
      list: {
        timers: {
          title: "Kein Timer, kein Game Over",
          body: "Nichts zählt herunter und nichts kann verloren gehen. Was herunterfällt, gleitet zurück in die Ablage, du kannst sofort weitermachen.",
        },
        real: {
          title: "Echte Mathematik, echte Physik",
          body: "Jedes Rätsel wird mit der echten Regel gelöst, dem Hebelgesetz, dem Hookeschen Gesetz oder dem Auftrieb, nicht durch Raten, was sich das Design gedacht hat.",
        },
        ads: {
          title: "Werbung, die nicht im Weg steht",
          body: "Keine in deinen ersten acht Rätseln, nie mitten in einem und keine Banner. Danach kann zwischen den Rätseln eine kurze Werbung laufen, und ein No Ads-Abo schaltet sie ab.",
        },
        offline: {
          title: "Spielt ohne Empfang",
          body: "Jedes Rätsel läuft auf deinem Handy. Werbung, der Shop und das Speichern in der Cloud brauchen eine Verbindung, die Rätsel nicht.",
        },
        save: {
          title: "Dein Fortschritt, sicher aufgehoben",
          body: "Dein Fortschritt wird ab dem ersten Rätsel unter einem anonymen Konto gesichert. Melde dich mit Google oder Apple an, um ihn auf ein anderes Handy mitzunehmen.",
        },
        sound: {
          title: "Sanft für die Ohren",
          body: "Leise Klänge in derselben Tonart und ruhige Musik, gemacht fürs Sofa am Ende eines langen Tages.",
        },
      },
    },
    faq: {
      kicker: "Fragen",
      title: rich("Die kurzen ", { hl: "Antworten." }),
      body: rich(
        "Die längeren, und die zu Käufen und Konten, stehen auf der ",
        { link: "Support-Seite", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Kostet es etwas?",
          a: `Nein. ${balanceBuddies.name} ist kostenlos, und jedes Rätsel lässt sich lösen, ohne etwas auszugeben. Du kannst zusätzliche Tipps kaufen oder ein Abo, das die Werbung abschaltet.`,
        },
        {
          q: "Gibt es Werbung?",
          a: "Ja, aber dezent. In deinen ersten acht Rätseln gibt es keine und nie während eines Rätsels. Danach kann nach jedem zweiten gelösten Rätsel eine kurze Werbung laufen. Videos für zusätzliche Tipps sind immer deine Entscheidung, und das No Ads-Abo oder die 30 werbefreien Tage des Starter Bundle schalten den Rest ab.",
        },
        {
          q: "Was, wenn ich nicht weiterkomme?",
          a: "Nimm einen Tipp. Er zeigt einen leuchtenden Geist dort, wo der nächste Buddy hingehört. Du startest mit zehn, alle vier Stunden kommt einer zurück, und ein kurzes Video bringt dir zwei weitere.",
        },
        {
          q: "Brauche ich ein Konto oder eine Verbindung?",
          a: "Weder noch. Jedes Rätsel läuft ohne Empfang auf deinem Handy. Ein anonymes Konto sichert deinen Fortschritt; melde dich nur mit Google oder Apple an, wenn du auf einem anderen Gerät weiterspielen willst.",
        },
        {
          q: "Läuft es auf meinem Handy?",
          a: "Es braucht Android 8.0 oder iOS 15 und sonst nicht viel.",
        },
        {
          q: "Ist es für Kinder geeignet?",
          a: "Es ist für alle gemacht. Es gibt keinen Chat, keine Nachrichten und nichts über dich, das andere Spielende sehen können.",
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
