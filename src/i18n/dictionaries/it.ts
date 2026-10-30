import { balanceBuddies, gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * Italian (tu, as in the game), in the game's own vocabulary: torretta, predone, collina,
 * ondata, cuori, monete, gemme, custode, classifica, indizio.
 */
const it: Dictionary = {
  site: {
    tagline: "Giochi per smartphone con il fuoco dentro.",
    description: `${site.company} è uno studio indipendente di giochi per smartphone. La casa di ${gemfire.name}, il gioco match-3 e tower defense in cui ogni abbinamento fa sparare una torretta, e di ${balanceBuddies.name}, il rilassante puzzle di equilibrio.`,
    keywords: [
      "studio di giochi per smartphone",
      "gioco match-3",
      "tower defense",
      "puzzle di equilibrio",
      "giochi per smartphone",
      "studio indipendente",
    ],
    ogAlt: `${site.company}: torrette sulle mura di un castello sparano a un'orda di scheletri sopra una griglia di gemme.`,
    skip: "Vai al contenuto",
  },

  nav: {
    main: "Principale",
    home: `Home di ${site.company}`,
    games: "Giochi",
    studio: "Studio",
    support: "Assistenza",
    privacy: "Privacy",
    terms: "Termini",
    deleteData: "Elimina i tuoi dati",
    credits: "Crediti",
    play: "I nostri giochi",
    menu: "Menu",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    language: "Lingua",
  },

  footer: {
    blurb:
      "Uno studio indipendente di giochi per smartphone. Facciamo giochi piccoli e rumorosi, con meccaniche vere sotto i brillantini, e li pubblichiamo da soli.",
    studio: "Studio",
    smallPrint: "Le note legali",
    copyright: (year: number) =>
      `© ${year} ${site.entity}, che opera come ${site.company}. ${gemfire.name}, ${balanceBuddies.name} e le loro illustrazioni sono di proprietà di ${site.company}.`,
  },

  suggest: {
    text: "Questa pagina è disponibile anche in italiano.",
    action: "Leggi in italiano",
    dismiss: "Chiudi",
  },

  legal: {
    lastUpdated: "Ultimo aggiornamento:",
    inShort: "In breve",
    translated:
      "Questa è una traduzione dell'originale in inglese. Se i due testi dovessero differire, vale quello inglese.",
    original: "Leggi l'originale in inglese",
  },

  mail: {
    support: "Assistenza",
    privacy: "Richiesta sulla privacy",
    child: "Privacy dei minori",
    terms: "Domanda sui termini",
    security: "Sicurezza",
    deleteAccount: "Elimina il mio account",
    deleteSome: "Elimina parte dei miei dati",
  },

  store: {
    comingSoon: "Presto su Google Play e sull'App Store",
    googlePlay: "Disponibile su Google Play",
    appStore: "Scarica dall'App Store",
  },

  notFound: {
    meta: "Pagina non trovata",
    kicker: "Errore 404",
    title: "Qui le mura non hanno porte.",
    body: "A questo indirizzo non c'è niente. I predoni hanno già controllato, e su queste cose sono molto scrupolosi.",
    home: "Torna allo studio",
    game: `Scopri ${gemfire.name}`,
  },

  home: {
    hero: {
      chip: "Studio indipendente di giochi per smartphone",
      title: rich("Facciamo giochi", "\n", "con il ", { hl: "fuoco" }, " dentro."),
      body: `${site.company} crea giochi piccoli e onesti nelle meccaniche per lo smartphone che hai in tasca. ${gemfire.name} è una griglia match-3 imbullonata alle mura di un castello, dove ogni abbinamento fa sparare una torretta. ${balanceBuddies.name} è quello tranquillo: lascia cadere gli amichetti finché tutto non resta in equilibrio.`,
      explore: "Scopri i nostri giochi",
      about: "Lo studio",
      stats: ["giochi nella fucina", "piattaforme", "puzzle da equilibrare", "scheletri da fermare"],
    },
    ticker: [
      gemfire.name,
      "Match-3 e tower defense",
      balanceBuddies.name,
      "Puzzle di equilibrio rilassanti",
      "Android",
      "iOS",
      site.company,
      "Difendi le mura",
      "Trova l'equilibrio",
    ],
    games: {
      kicker: "I nostri giochi",
      title: rich("Due giochi. ", { hl: "Tutto dentro." }),
      body: "Facciamo uscire un gioco alla volta e continuiamo a lavorare su ognuno dopo il lancio. Uno è rumoroso, l'altro è calmo, ed entrambi poggiano su regole vere.",
      view: "Vedi il gioco",
      gemfire: {
        alt: `Illustrazione di ${gemfire.name}: quattro torrette sulle mura di un castello sparano a un esercito di scheletri sopra una griglia di gemme.`,
        status: "Già disponibile su iOS",
      },
      balanceBuddies: {
        alt: `Illustrazione di ${balanceBuddies.name}: una torre traballante di amichetti, mostriciattoli colorati, contro un cielo azzurro.`,
        status: "Prossimamente",
      },
      nextKicker: "Slot 03",
      nextTitle: "Il prossimo",
      nextBody: `Tutto ciò che impariamo con ${gemfire.name} e ${balanceBuddies.name} finisce in quello che verrà dopo. Quando ci sarà qualcosa che vale la pena mostrare, comparirà prima qui.`,
      sealed: "Sigillato",
    },
    studio: {
      kicker: "Lo studio",
      title: rich("Squadra piccola. ", { hl: "Esplosioni grandi." }),
      body: `${site.company} è uno studio indipendente con sede a ${placeName("it")}. Facciamo giochi per smartphone come vorremmo che se ne facessero di più: onesti nelle meccaniche, generosi con chi gioca, e finiti.`,
      pillars: {
        mechanics: {
          title: "Prima le meccaniche",
          body: "Un gioco deve essere interessante anche con gli effetti spenti. Proviamo la regola prima di disegnare una sola gemma, e se la regola non diverte su una griglia grigia, non esce.",
        },
        thumb: {
          title: "Rispetto per il pollice",
          body: "Partite brevi, pulsanti grandi e niente di importante nascosto dietro un timer. Un gioco per smartphone si gioca sull'autobus. Sull'autobus deve essere fantastico.",
        },
        phone: {
          title: "Gira sul telefono che hai",
          body: "Sviluppiamo per dispositivi di qualche anno fa e li proviamo per primi. Se un livello gira male sul tuo telefono, è un nostro errore, non un tuo requisito.",
        },
        self: {
          title: "Pubblicato e seguito da noi",
          body: "Nessun editore tra te e noi. Le stesse persone che fanno il gioco leggono la posta dell'assistenza, e un bug segnalato da un giocatore lo corregge chi ha scritto quel codice.",
        },
      },
    },
    contact: {
      kicker: "Contatti",
      title: rich("Scrivici. ", { hl: "Leggiamo tutto." }),
      body: "Giocatori, stampa, piattaforme e partner scrivono tutti alla stessa casella. Le richieste di assistenza ricevono risposta in un paio di giorni.",
      support: "Assistenza giocatori",
    },
  },

  gemfire: {
    genre: "Match-3 e tower defense",
    pitch: "Abbina gemme. Spara con le torrette. Difendi le mura.",
    description: `${gemfire.name} è un gioco match-3 e tower defense. Ogni abbinamento sulla griglia fa sparare la torretta dello stesso colore contro l'orda che marcia verso il tuo castello. Supera le ondate, potenzia le torrette e costruisci il tuo regno.`,
    ogAlt: `${gemfire.name}: torrette sulle mura di un castello sparano a un'orda di scheletri sopra una griglia di gemme.`,
    hero: {
      body: "Una griglia match-3 imbullonata alle mura di un castello. Allinea tre gemme e la torretta di quel colore apre il fuoco sui predoni che scendono dalla collina. Difendi le mura, potenzia il tuo arsenale e costruisci un regno alle loro spalle.",
      chips: ["Gratis", "Android 8.0+", "iOS 15+", "Si gioca offline", "Nessuna pubblicità obbligatoria"],
      stats: ["battaglie fatte a mano", "torrette da sbloccare", "compagni da conoscere", "pubblicità obbligatorie"],
      splashAlt: `La schermata iniziale di ${gemfire.name}: tre torrette su piedistalli di pietra sparano a un'orda di creature d'ombra sotto una pioggia di gemme.`,
    },
    play: {
      kicker: "Come si gioca",
      title: rich("Abbina. Potenzia. ", { hl: "Difendi." }),
      body: "Una griglia, delle mura e una collina piena di cose che vogliono scendere. Ogni abbinamento è un colpo sparato.",
      steps: {
        match: {
          title: "Abbina",
          body: "Trascina una gemma sulla vicina. Allineane tre dello stesso colore e la torretta di quel colore si riempie di energia. Più lunga la fila, più energia. Abbina il colore che sta arrivando.",
          alt: `La schermata di battaglia di ${gemfire.name}: quattro torrette su un muro sopra una griglia di gemme sparano a scheletri e melme in un sotterraneo.`,
        },
        power: {
          title: "Potenzia",
          body: "Le gemme comprano torrette più forti, e un ingranaggio lasciato cadere da un predone ne potenzia una a metà battaglia. Vasi di fuoco, cure e cariche ribaltano un'ondata storta, e una torretta piena si può toccare per scaricare tutto in un colpo.",
          alt: "Una fila di torrette potenziate che brillano sulle mura, con una catena di gemme cuore rosse che si accende sulla griglia sotto.",
        },
        defend: {
          title: "Difendi",
          body: "I predoni scendono dalla collina in tempo reale. Un colpo fa più male quando colpisce un predone del suo stesso colore. Lasciali passare e romperanno le tue mura. Tieni duro e il regno cresce.",
          alt: "Un'isola isometrica che cresce da un terreno recintato fino a un castello completo, sotto lo sguardo di un compagno rana con la corona.",
        },
      },
    },
    arsenal: {
      kicker: "L'arsenale",
      title: rich("Venti torrette. ", { hl: "Cinque stelle ciascuna." }),
      body: "Ogni torretta si compra per colore e si potenzia fino a cinque stelle. Le prime dieci costano monete. Le altre dieci costano gemme, e ognuna è la versione adulta di una che conosci già.",
      art: "Tre torrette, verde, rossa e ciano, su piedistalli grigi, ognuna spara un dardo di fuoco.",
      tier1: "Grado I",
      tier1Sub: "si comprano con le monete",
      tier2: "Grado II",
      tier2Sub: "si comprano con le gemme",
      kit: "Lo zaino",
      charms: "Amuleti sulla griglia",
      charmNotes: {
        prism: "Una gemma arcobaleno. Vale come il colore con cui la abbini.",
        lance: "Libera tutta la sua riga e la sua colonna in un colpo solo.",
        stormglass: "Tutta la fila di torrette spara a tutto ciò che è sulla collina.",
      },
    },
    campaign: {
      kicker: "La campagna",
      title: rich("Tre fronti. ", { hl: "Poi la lunga notte." }),
      body: "Trenta assedi fatti a mano in tre capitoli, ognuno con il suo nemico e il suo boss alle porte. Accanto c'è La Veglia Infinita: ondate senza fine e un posto in classifica per quanto hai resistito.",
      chapter: (n: number) => `Capitolo ${n}`,
      sieges: (n: number) => `${n} assedi`,
      taglines: {
        thornwatch: "Nutri le torrette. Tieni la linea.",
        broodmarch: "Qualcosa sta nascendo nel pantano.",
        barrowfell: "I morti non si fermano alle mura.",
      },
      atTheGate: "Alle porte",
      infinite: "Modalità infinita",
      endlessPoints: [
        "La battaglia non finisce mai.",
        "I nemici diventano più forti a ogni ondata.",
        "Guadagnati il tuo posto in classifica.",
      ],
    },
    kingdom: {
      kicker: "Tra un assedio e l'altro",
      title: rich("Costruisci il tuo ", { hl: "regno." }),
      body: "Le monete vinte sulle mura si spendono dietro di esse. Compra terre, trasforma un terreno recintato in un castello e disponi case, sale, mura e giardini su un campo di caselle come preferisci. Ogni pezzo si gira in quattro direzioni. Non ci sono due regni uguali.",
      art: "Costruisci il tuo regno: un'isola che cresce da un terreno recintato vuoto a un laboratorio, poi a un mastio, poi a un castello completo con torri dal tetto rosso.",
      lands: "Nove terre",
      landList: [
        "Il Focolare",
        "Prato Est",
        "Conca Ovest",
        "Riva Sud",
        "Confini del Nord",
        "Campo dell'Alba",
        "Campo del Tramonto",
        "Riva Quieta",
        "Terrazza Lontana",
      ],
      leagues: "Nove leghe",
      leagueList: [
        "Germogli",
        "Macchie",
        "Conche",
        "Prati",
        "Frutteti",
        "Santuari",
        "Boschi Selvaggi",
        "Paludi",
        "Il Bosco Antico",
      ],
      companions: "Compagni",
      companionsTitle: "Trentuno amici, uno alla volta.",
      companionsBody:
        "Monarca è con te dal primo assedio. Gli altri li incontri man mano che il tuo regno cresce, e quello che scegli ti rappresenta in classifica.",
    },
    promises: {
      kicker: "Gioco leale",
      title: rich("Sei cose che ", { hl: "non faremo." }),
      list: {
        ads: {
          title: "Nessuna pubblicità obbligatoria",
          body: "Niente pubblicità tra i livelli e niente banner. Ogni video del gioco lo guardi solo se tocchi tu il pulsante, in cambio di cuori, monete o un indizio, e c'è un limite giornaliero per tutti.",
        },
        offline: {
          title: "Si gioca senza campo",
          body: "Ogni assedio gira sul tuo telefono anche in modalità aereo. La classifica, il negozio e i video con premio hanno bisogno di connessione; il gioco no.",
        },
        save: {
          title: "I tuoi progressi sui nostri server",
          body: "I progressi si salvano nel cloud fin dal primo avvio, con un account anonimo. Accedi con Google o Apple e sopravvivono a un telefono perso o cambiato.",
        },
        grind: {
          title: "Niente che costringa a pagare",
          body: "Ogni livello si può finire senza spendere nulla. Monete e gemme si guadagnano sulle mura; comprarle fa risparmiare tempo, non compra il finale.",
        },
        chat: {
          title: "Niente chat, niente sconosciuti",
          body: "Non ci sono messaggi né modi per i giocatori di contattarsi. Gli altri vedono solo il tuo nome da custode e il tuo punteggio in classifica, e basta un tocco per nasconderli.",
        },
        phone: {
          title: "Gira sul telefono che hai",
          body: "Da Android 8.0 o iOS 15 in su. Creato e provato prima su telefoni di qualche anno fa, perché sono quelli che ha la maggior parte delle persone.",
        },
      },
    },
    faq: {
      kicker: "Domande",
      title: rich("Le risposte ", { hl: "brevi." }),
      body: rich(
        "Quelle lunghe, e quelle su acquisti e account, sono nella ",
        { link: "pagina di assistenza", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Costa qualcosa?",
          a: `No. ${gemfire.name} è gratis, e ogni livello si può finire senza spendere nulla. Ci sono acquisti facoltativi di monete, gemme e fiaschette di cuori più grandi per chi vuole costruire più in fretta.`,
        },
        {
          q: "Ci sono pubblicità?",
          a: "Solo quelle che scegli tu. Niente pubblicità tra i livelli e niente banner. Ogni video del gioco lo guardi solo se tocchi tu il pulsante, in cambio di cuori, monete o un indizio, e puoi finire tutto il gioco senza guardarne nemmeno uno.",
        },
        {
          q: "Mi servono un account o una connessione?",
          a: "Né l'uno né l'altra. Ogni livello gira sul tuo telefono senza campo. Un account anonimo conserva i tuoi progressi; accedi con Google o Apple solo se vuoi che sopravvivano alla perdita del telefono.",
        },
        {
          q: "Funzionerà sul mio telefono?",
          a: "Servono Android 8.0 o iOS 15 e poco altro. È fatto per telefoni di qualche anno fa e viene provato prima su quelli.",
        },
        {
          q: "È sicuro per i bambini?",
          a: "Non ci sono chat, messaggi o modi per i giocatori di contattarsi. Le uniche cose che un altro giocatore può vedere sono il nome e il compagno che hai scelto e il punteggio del tuo regno, e puoi nascondere tutto con un tocco.",
        },
      ],
    },
    getIt: {
      kicker: "Scarica il gioco",
      free: "Gratis su Android e iOS.",
    },
  },

  balanceBuddies: {
    genre: "Puzzle di equilibrio rilassante",
    pitch: "Lascia cadere gli amichetti. Trova l'equilibrio. Respira.",
    description: `${balanceBuddies.name} è un gioco di puzzle di equilibrio, calmo e rilassante. Trascina gli amichetti dal vassoio su mobile appesi, altalene, ruote panoramiche, molle e zattere finché tutto non resta in equilibrio e fermo. Matematica vera, fisica vera, niente timer e nessun modo di perdere.`,
    ogAlt: `${balanceBuddies.name}: una torre allegra di amichetti, mostriciattoli colorati, contro un cielo azzurro.`,
    hero: {
      body: "Ogni puzzle è un marchingegno che non vuole stare fermo: un mobile appeso, un'altalena, una ruota panoramica, una barra su due molle, una zattera sull'acqua. Trascina gli amichetti su dal vassoio e lascia cadere ciascuno dove trova l'equilibrio. Niente orologio, niente game over, solo quel momento tranquillo in cui tutto torna in piano.",
      chips: ["Gratis", "Android 8.0+", "iOS 15+", "Niente timer", "Non si perde mai", "Si gioca offline"],
      stats: ["puzzle di equilibrio", "tipi di marchingegno", "indizi per iniziare", "timer"],
      shotAlt: `${balanceBuddies.name}, First Swing: tre amichetti appesi a un mobile a due piani al tramonto.`,
      bannerAlt: `Illustrazione di ${balanceBuddies.name}: una torre traballante di amichetti, mostriciattoli colorati, accanto al logo del gioco, in un cielo azzurro pieno di nuvole.`,
    },
    play: {
      kicker: "Come si gioca",
      title: rich("Trascina. Lascia. ", { hl: "Equilibra." }),
      body: "Un vassoio di amichetti, un marchingegno e una sola risposta giusta, che la fisica ti conferma nel momento esatto in cui la trovi.",
      steps: {
        drag: {
          title: "Scegli un amichetto",
          body: "Ogni puzzle inizia con un vassoio di amichetti in fondo allo schermo, ognuno con il suo peso scritto sopra. Trascinane uno in alto e lascialo cadere dove pensi che debba stare.",
          alt: "Little Builder: blocchi numerati e una casetta su una trave di legno in equilibrio su una roccia.",
        },
        balance: {
          title: "Trova l'equilibrio",
          body: "Appendilo a un gancio, mettilo su un piolo, fallo galleggiare su una zattera. Ogni marchingegno segue la regola vera: su un mobile, peso per distanza deve tornare uguale dai due lati. L'indicatore in alto ti dice quanto sei vicino.",
          alt: "First Swing: un mobile appeso con tre amichetti su ganci numerati e un indicatore di equilibrio in alto.",
        },
        settle: {
          title: "Lascia che si fermi",
          body: "Quando tutto è in piano e resta fermo per un momento, il puzzle è risolto. Meno mosse fai, più stelle guadagni, e qualsiasi cosa cada scivola semplicemente di nuovo nel vassoio.",
          alt: "Springy: amichetti su una barra appesa a due molle che si allungano in modo diverso.",
        },
      },
    },
    contraptions: {
      kicker: "I marchingegni",
      title: rich("Sei modi per ", { hl: "far pendere la bilancia." }),
      body: "Ognuno è una piccola lezione di fisica vera, e i puzzle più avanzati li mescolano: casse misteriose, vento, ghiaccio, spine e nastri trasportatori.",
      items: {
        mobile: {
          title: "Mobile",
          body: "Barre appese ad altre barre. Peso per distanza deve annullarsi su ognuna di esse.",
          alt: "Un mobile a due piani con amichetti appesi a ganci numerati.",
        },
        seesaw: {
          title: "Altalene",
          body: "Blocchi di pietra, legno e metallo su un'asse che si inclina davvero. Il metallo pesa più di quanto sembri.",
          alt: "Heavy Metal: un'altalena di legno su un supporto con un blocco di metallo a un'estremità.",
        },
        wheel: {
          title: "Ruote panoramiche",
          body: "Passeggeri su una ruota che gira. Si ferma in piano solo quando i loro pesi si annullano attorno al mozzo.",
          alt: "Ferris Wheel: due amichetti su una ruota che si è inclinata.",
        },
        spring: {
          title: "Molle",
          body: "Una barra su due molle di rigidità diversa. Caricala finché entrambe non si allungano esattamente della stessa misura.",
          alt: "Springy: amichetti su una barra appesa a due molle a spirale.",
        },
        raft: {
          title: "Zattere",
          body: "Casse su una zattera che galleggia davvero. Caricala in modo che resti in piano sull'acqua.",
          alt: "Lazy Raft: casse di pietra e di legno ammucchiate su una zattera che galleggia su acque calme.",
        },
        balloon: {
          title: "Palloncini",
          body: "I palloncini tirano verso l'alto invece che verso il basso. Contano contro il peso, e sono il trucco di più di un puzzle.",
          alt: "Up and Away: due palloncini e un amichetto appesi a una barra inclinata.",
        },
      },
    },
    hints: {
      kicker: "Bloccato?",
      title: rich("Un indizio, ", { hl: "mai un muro." }),
      body: "Un indizio mostra un fantasma luminoso proprio dove va il prossimo amichetto. Un passo che hai svelato resta svelato, anche quando riprovi e sull'altro tuo telefono.",
      points: [
        "Dieci indizi per iniziare, e ne torna uno ogni quattro ore.",
        "Guarda un breve video per averne altri due, quando vuoi.",
        "Oppure compra un pacchetto. Ogni puzzle si può risolvere senza.",
      ],
      hintAlt: "Una lente d'ingrandimento con un pulsante play: guarda un video per avere indizi.",
      noAdsAlt: "Un cuscino morbido con un cartello AD barrato: l'abbonamento No Ads.",
      noAds: "No Ads, mensile",
      noAdsBody: "Toglie le pubblicità tra un puzzle e l'altro. Puoi annullarlo quando vuoi dal tuo account dello store.",
    },
    promises: {
      kicker: "Gioco leale",
      title: rich("Calmo, ", { hl: "di proposito." }),
      list: {
        timers: {
          title: "Niente timer, niente game over",
          body: "Non c'è nessun conto alla rovescia e non si può perdere nulla. Qualsiasi cosa cada scivola di nuovo nel vassoio, così puoi riprovare subito.",
        },
        real: {
          title: "Matematica vera, fisica vera",
          body: "Ogni puzzle si risolve con la regola vera, la legge della leva, la legge di Hooke o il galleggiamento, non indovinando cosa aveva in mente chi l'ha progettato.",
        },
        ads: {
          title: "Pubblicità che non danno fastidio",
          body: "Nessuna nei primi otto puzzle, mai nel mezzo di uno, e niente banner. Dopo, tra un puzzle e l'altro può partire una breve pubblicità, e un abbonamento No Ads le spegne.",
        },
        offline: {
          title: "Si gioca senza campo",
          body: "Ogni puzzle gira sul tuo telefono. Le pubblicità, il negozio e il salvataggio nel cloud hanno bisogno di connessione; i puzzle no.",
        },
        save: {
          title: "I tuoi progressi, al sicuro",
          body: "I progressi si salvano fin dal primo puzzle con un account anonimo. Accedi con Google o Apple per portarli su un altro telefono.",
        },
        sound: {
          title: "Dolce per le orecchie",
          body: "Suoni delicati accordati sulla stessa tonalità, e musica tranquilla, fatti per il divano alla fine di una lunga giornata.",
        },
      },
    },
    faq: {
      kicker: "Domande",
      title: rich("Le risposte ", { hl: "brevi." }),
      body: rich(
        "Quelle lunghe, e quelle su acquisti e account, sono nella ",
        { link: "pagina di assistenza", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Costa qualcosa?",
          a: `No. ${balanceBuddies.name} è gratis, e ogni puzzle si può risolvere senza spendere nulla. Puoi comprare indizi in più, o un abbonamento che spegne le pubblicità.`,
        },
        {
          q: "Ci sono pubblicità?",
          a: "Sì, con discrezione. Non ce ne sono nei primi otto puzzle e mai durante un puzzle. Dopo, può partire una breve pubblicità ogni due puzzle completati. I video per avere indizi in più sono sempre una tua scelta, e l'abbonamento No Ads, o i 30 giorni senza pubblicità dello Starter Bundle, spengono il resto.",
        },
        {
          q: "E se resto bloccato?",
          a: "Usa un indizio. Mostra un fantasma luminoso dove va il prossimo amichetto. Ne hai dieci all'inizio, ne torna uno ogni quattro ore, e un breve video te ne dà altri due.",
        },
        {
          q: "Mi servono un account o una connessione?",
          a: "Né l'uno né l'altra. Ogni puzzle gira sul tuo telefono senza campo. Un account anonimo conserva i tuoi progressi; accedi con Google o Apple solo se vuoi giocare su un altro dispositivo.",
        },
        {
          q: "Funzionerà sul mio telefono?",
          a: "Servono Android 8.0 o iOS 15 e poco altro.",
        },
        {
          q: "È adatto ai bambini?",
          a: "È fatto per tutti. Non ci sono chat né messaggi, e nessun altro giocatore può vedere niente di te.",
        },
      ],
    },
    getIt: {
      kicker: "Scarica il gioco",
      free: "Gratis su Android e iOS.",
    },
  },
};

export default it;
