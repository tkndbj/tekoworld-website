import { gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";

/**
 * The site's own words in English, and the shape every other language must match.
 *
 * `Dictionary` is the type of this object, and every other dictionary is declared as a
 * `Dictionary`, so a key added here and forgotten in one language fails the build rather than
 * shipping a blank. Names that belong to the game (turrets, chapters, levels, kit, companions,
 * in-game button labels) are not here: they come from the game's own tables, through
 * `game-text.ts`.
 */
const en = {
  site: {
    tagline: "Mobile games with fire in them.",
    description: `${site.company} is an independent mobile game studio. Home of ${gemfire.name}, the match-3 tower-defence game where every match fires a turret.`,
    keywords: ["mobile game studio", "match-3 tower defence", "mobile games", "indie game studio"],
    ogAlt: `${site.company}: turrets on a castle wall firing at a skeleton horde over a gem board.`,
    skip: "Skip to content",
  },

  nav: {
    main: "Main",
    home: `${site.company} home`,
    games: "Games",
    studio: "Studio",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    deleteData: "Delete your data",
    credits: "Credits",
    play: `Play ${gemfire.name}`,
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  footer: {
    blurb:
      "An independent mobile game studio. We make small, loud games with real mechanics under the sparkle, and we publish them ourselves.",
    studio: "Studio",
    smallPrint: "The small print",
    copyright: (year: number) =>
      `© ${year} ${site.entity}, trading as ${site.company}. ${gemfire.name} and its artwork are the property of ${site.company}.`,
  },

  /** Offered on a page in another language when the browser prefers this one. Written in this language. */
  suggest: {
    text: "This page is also available in English.",
    action: "Read it in English",
    dismiss: "Dismiss",
  },

  legal: {
    lastUpdated: "Last updated",
    inShort: "In short",
    /** Shown on a translated policy. English has none: it is the original. */
    translated: "",
    original: "Read the English original",
  },

  /** Email subjects. The game's name is put in front of each. */
  mail: {
    support: "Support",
    privacy: "Privacy request",
    child: "Child privacy",
    terms: "Terms question",
    security: "Security",
    deleteAccount: "Delete my account",
    deleteSome: "Delete some of my data",
  },

  store: {
    comingSoon: "Coming soon to Google Play and the App Store",
    googlePlay: "Get it on Google Play",
    appStore: "Download on the App Store",
  },

  notFound: {
    meta: "Page not found",
    kicker: "Error 404",
    title: "The wall has no gate here.",
    body: "There is nothing at that address. The raiders looked, and they are very thorough about this sort of thing.",
    home: "Back to the studio",
    game: `See ${gemfire.name}`,
  },

  home: {
    hero: {
      chip: "Independent mobile game studio",
      title: rich("We make games", "\n", "with ", { hl: "fire" }, " in them."),
      body: `${site.company} builds small, loud, mechanically honest games for the phone in your pocket. Our first is ${gemfire.name}: a match-3 board bolted to a castle wall, where every match you make fires a turret.`,
      explore: `Explore ${gemfire.name}`,
      about: "About the studio",
      stats: ["game in the forge", "platforms at launch", "forced adverts", "skeletons to stop"],
    },
    ticker: [
      gemfire.name,
      "Match-3 tower defence",
      "Android",
      "iOS",
      site.company,
      "Build your kingdom",
      "Upgrade your turrets",
      "Hold the wall",
    ],
    games: {
      kicker: "Our games",
      title: rich("One title. ", { hl: "All in." }),
      body: "We ship one game at a time and keep working on it after launch. Here is the one on the anvil now.",
      coverAlt: `${gemfire.name} key art: four turrets on a castle wall firing at a skeleton army over a gem board.`,
      status: "In development",
      view: "View game",
      nextKicker: "Slot 02",
      nextTitle: "The next one",
      nextBody: `Everything we learn from ${gemfire.name} goes into what comes after it. When there is something worth showing, it will show up here first.`,
      sealed: "Sealed",
    },
    studio: {
      kicker: "The studio",
      title: rich("Small team. ", { hl: "Big explosions." }),
      body: `${site.company} is an independent studio in ${placeName("en-GB")}. We make mobile games the way we wish more of them were made: mechanically honest, generous with the player, and finished.`,
      pillars: {
        mechanics: {
          title: "Mechanics first",
          body: "A game has to be interesting with the particles switched off. We prototype the rule before we draw a single gem, and if the rule is not fun on a grey grid, it does not ship.",
        },
        thumb: {
          title: "Respect the thumb",
          body: "Sessions are short, inputs are big, and nothing important is hidden behind a timer. A phone game is played on a bus. It should be brilliant on a bus.",
        },
        phone: {
          title: "Runs on the phone you have",
          body: "We build for devices several years old and test on them first. If a level runs badly on your phone, that is a bug on our side, not a spec on yours.",
        },
        self: {
          title: "Self-published, self-answered",
          body: "No publisher between you and us. The same people who build the game read the support inbox, and a bug report from a player gets fixed by the person who wrote it.",
        },
      },
    },
    contact: {
      kicker: "Contact",
      title: rich("Say hello. ", { hl: "We read everything." }),
      body: "Players, press, platforms and partners all reach the same inbox. Support questions get an answer within a couple of days.",
      support: "Player support",
    },
  },

  gemfire: {
    genre: "Match-3 tower defence",
    pitch: "Match gems. Fire turrets. Hold the wall.",
    description: `${gemfire.name} is a match-3 tower-defence game. Every match on the board fires the turret of the same colour at the horde marching on your castle. Clear waves, upgrade your turrets, and build your kingdom.`,
    ogAlt: `${gemfire.name}: turrets on a castle wall firing at a skeleton horde over a gem board.`,
    hero: {
      body: "A match-3 board bolted to a castle wall. Line up three gems and the turret of that colour opens fire on the raiders coming down the hill. Hold the wall, upgrade your arsenal, and build a kingdom behind it.",
      chips: ["Free to play", "Android 8.0+", "iOS 15+", "Plays offline", "No forced adverts"],
      stats: ["hand-built battles", "turrets to unlock", "companions to meet", "forced adverts"],
      splashAlt: `The ${gemfire.name} title screen: three turrets on stone plinths firing into a horde of shadow creatures under a rain of gems.`,
    },
    play: {
      kicker: "How it plays",
      title: rich("Match. Power up. ", { hl: "Defend." }),
      body: "One board, one wall, and a hill full of things that want to come down it. Every match you make is a shot fired.",
      steps: {
        match: {
          title: "Match",
          body: "Drag a gem onto its neighbour. Line three of a colour up and the turret of that colour fills with fuel. Bigger lines, more fuel. Match the colour that is coming.",
          alt: `The ${gemfire.name} battle screen: four turrets on a wall above a gem board, firing at skeletons and slimes in a dungeon.`,
        },
        power: {
          title: "Power up",
          body: "Gems buy stronger turrets; a cog dropped by a raider upgrades one mid-fight. Firepots, mendings and surges turn a bad wave around, and a full turret can be tapped to dump everything at once.",
          alt: "A row of upgraded turrets glowing on the wall, with a chain of red heart gems lighting up on the board below.",
        },
        defend: {
          title: "Defend",
          body: "Raiders walk down the hill in real time. A shot hurts most when it hits a raider of its own colour. Let them through and they break your wall. Hold it and the kingdom grows.",
          alt: "An isometric island growing from a fenced plot to a full castle, with a crowned frog companion looking on.",
        },
      },
    },
    arsenal: {
      kicker: "The arsenal",
      title: rich("Twenty turrets. ", { hl: "Five stars each." }),
      body: "Every turret is bought per colour and upgraded to five stars. The first ten cost coins. The second ten cost gems, and each is the grown-up version of one you already know.",
      art: "Three turrets, green, red and cyan, on grey plinths, each firing a bolt of flame.",
      tier1: "Tier I",
      tier1Sub: "bought with coins",
      tier2: "Tier II",
      tier2Sub: "bought with gems",
      kit: "The kit",
      charms: "Charms on the board",
      /** What each charm does. Their names are the game's (game-text.ts). */
      charmNotes: {
        prism: "A rainbow gem. It counts as any colour you match it with.",
        lance: "Clears its whole row and column in one strike.",
        stormglass: "The entire turret line fires at everything on the hill.",
      },
    },
    campaign: {
      kicker: "The campaign",
      title: rich("Three fronts. ", { hl: "Then the long night." }),
      body: "Thirty hand-built sieges across three chapters, each with its own enemy and its own boss at the gate. Beside them stands the Endless Watch: waves without end, and a place on the boards for how long you held.",
      chapter: (n: number) => `Chapter ${n}`,
      sieges: (n: number) => `${n} sieges`,
      taglines: {
        thornwatch: "Feed the wards. Hold the line.",
        broodmarch: "Something is hatching in the mire.",
        barrowfell: "The dead do not stop at the wall.",
      },
      atTheGate: "At the gate",
      infinite: "Infinite track",
      endlessPoints: [
        "The fight never stops.",
        "Enemies get harder every wave.",
        "Earn your spot on the boards.",
      ],
    },
    kingdom: {
      kicker: "Between the sieges",
      title: rich("Build your ", { hl: "kingdom." }),
      body: "Coins won on the wall are spent behind it. Buy land, raise a home from a fenced plot to a castle, and lay out homes, halls, walls and gardens across a field of tiles, any way you like. Every piece turns to face four ways. No two kingdoms come out the same.",
      art: "Build your kingdom: an island growing from an empty fenced plot, to a workshop, to a keep, to a full castle with red-roofed towers.",
      lands: "Nine lands",
      landList: [
        "Hearthstead",
        "East Meadow",
        "West Hollow",
        "South Bank",
        "North Reach",
        "Sunrise Field",
        "Dusk Field",
        "Still Shore",
        "Far Terrace",
      ],
      leagues: "Nine leagues",
      leagueList: [
        "Saplings",
        "Thickets",
        "Hollows",
        "Meadows",
        "Orchards",
        "Sanctums",
        "Wildwoods",
        "Everglades",
        "The Elderwood",
      ],
      companions: "Companions",
      companionsTitle: "Thirty-one friends, one at a time.",
      companionsBody:
        "Monarch is with you from the first siege. The rest are met as your kingdom grows, and whichever you choose stands in for you on the boards.",
    },
    promises: {
      kicker: "Fair play",
      title: rich("Six things we ", { hl: "will not do." }),
      list: {
        ads: {
          title: "No forced adverts",
          body: "There are no adverts between levels and no banners. Every video in the game is one you tap to watch, in exchange for hearts, coins or a hint, and there is a daily cap on all of them.",
        },
        offline: {
          title: "Plays without a signal",
          body: "Every siege runs on your phone with aeroplane mode on. The boards, the shop and rewarded videos need a connection; the game does not.",
        },
        save: {
          title: "Your save, on our servers",
          body: "Progress is saved to the cloud from the first launch under an anonymous account. Sign in with Google or Apple and it survives a lost or replaced phone.",
        },
        grind: {
          title: "Nothing to grind past",
          body: "Every level can be finished without spending anything. Coins and gems are earned on the wall; buying them buys time, not the ending.",
        },
        chat: {
          title: "No chat, no strangers",
          body: "There is no messaging and no way for players to contact each other. The only thing anyone else sees is your keeper name and score on the boards, and one tap hides it.",
        },
        phone: {
          title: "Runs on the phone you have",
          body: "Android 8.0 or iOS 15 and up. Built and tested on phones several years old first, because that is what most people have.",
        },
      },
    },
    faq: {
      kicker: "Questions",
      title: rich("The short ", { hl: "answers." }),
      body: rich(
        "The longer ones, and the ones about purchases and accounts, are on the ",
        { link: "support page", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Does it cost anything?",
          a: `No. ${gemfire.name} is free, and every level in it can be finished without spending anything. There are optional purchases of coins, gems and bigger heart flasks for people who want to build faster.`,
        },
        {
          q: "Are there adverts?",
          a: "Only ones you choose. There are no adverts between levels and no banners. Every video in the game is one you tap to watch in exchange for hearts, coins or a hint, and you can finish the whole game without watching a single one.",
        },
        {
          q: "Do I need an account or a connection?",
          a: "Neither. Every level runs on your phone with no signal. An anonymous account keeps your save; sign in with Google or Apple only if you want it to survive a lost phone.",
        },
        {
          q: "Will it run on my phone?",
          a: "It needs Android 8.0 or iOS 15 and not much else. It is built for phones several years old and tested on them first.",
        },
        {
          q: "Is it safe for children?",
          a: "There is no chat, no messaging and no way for players to contact each other. The only things another player can ever see are the name and companion you chose and your kingdom's score, and you can hide all of that with one tap.",
        },
      ],
    },
    getIt: {
      kicker: "Get the game",
      free: "Free on Android and iOS.",
    },
  },
};

export type Dictionary = typeof en;

export default en satisfies Dictionary;
