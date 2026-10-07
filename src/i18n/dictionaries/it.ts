import { gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * Italian (tu, as in the game), in the game's own vocabulary: torretta, predone, collina,
 * ondata, cuori, monete, gemme, custode, classifica, indizio.
 */
const it: Dictionary = {
  site: {
    tagline: "Giochi per smartphone con il fuoco dentro.",
    description: `${site.company} è uno studio indipendente di giochi per smartphone. La casa di ${gemfire.name}, il gioco match-3 e tower defense in cui ogni abbinamento fa sparare una torretta.`,
    keywords: [
      "studio di giochi per smartphone",
      "gioco match-3",
      "tower defense",
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
    play: `Gioca a ${gemfire.name}`,
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
      `© ${year} ${site.entity}, che opera come ${site.company}. ${gemfire.name} e le sue illustrazioni sono di proprietà di ${site.company}.`,
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
      body: `${site.company} crea giochi piccoli, rumorosi e onesti nelle meccaniche per lo smartphone che hai in tasca. Il primo è ${gemfire.name}: una griglia match-3 imbullonata alle mura di un castello, dove ogni abbinamento fa sparare una torretta.`,
      explore: `Scopri ${gemfire.name}`,
      about: "Lo studio",
      stats: ["gioco nella fucina", "piattaforme al lancio", "pubblicità obbligatorie", "scheletri da fermare"],
    },
    ticker: [
      gemfire.name,
      "Match-3 e tower defense",
      "Android",
      "iOS",
      site.company,
      "Costruisci il tuo regno",
      "Potenzia le torrette",
      "Difendi le mura",
    ],
    games: {
      kicker: "I nostri giochi",
      title: rich("Un solo titolo. ", { hl: "Tutto dentro." }),
      body: "Facciamo uscire un gioco alla volta e continuiamo a lavorarci dopo il lancio. Ecco quello che è sull'incudine adesso.",
      coverAlt: `Illustrazione di ${gemfire.name}: quattro torrette sulle mura di un castello sparano a un esercito di scheletri sopra una griglia di gemme.`,
      status: "In sviluppo",
      view: "Vedi il gioco",
      nextKicker: "Slot 02",
      nextTitle: "Il prossimo",
      nextBody: `Tutto ciò che impariamo con ${gemfire.name} finisce in quello che verrà dopo. Quando ci sarà qualcosa che vale la pena mostrare, comparirà prima qui.`,
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
};

export default it;
