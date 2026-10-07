import { gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * French (tu, as in the game), in the game's own vocabulary: tourelle, pillard, colline,
 * vague, cœurs, pièces, gemmes, gardien, classement, indice.
 */
const fr: Dictionary = {
  site: {
    tagline: "Des jeux mobiles avec du feu dedans.",
    description: `${site.company} est un studio indépendant de jeux mobiles. La maison de ${gemfire.name}, le jeu de match-3 et de tower defense où chaque alignement fait tirer une tourelle.`,
    keywords: [
      "studio de jeux mobiles",
      "jeu de match-3",
      "tower defense",
      "jeux mobiles",
      "studio indépendant",
    ],
    ogAlt: `${site.company} : des tourelles sur le rempart d'un château tirent sur une horde de squelettes au-dessus d'un plateau de gemmes.`,
    skip: "Aller au contenu",
  },

  nav: {
    main: "Principal",
    home: `Accueil ${site.company}`,
    games: "Jeux",
    studio: "Studio",
    support: "Aide",
    privacy: "Confidentialité",
    terms: "Conditions",
    deleteData: "Supprimer tes données",
    credits: "Crédits",
    play: `Jouer à ${gemfire.name}`,
    menu: "Menu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },

  footer: {
    blurb:
      "Un studio indépendant de jeux mobiles. Nous faisons de petits jeux bruyants, avec de vraies mécaniques sous les paillettes, et nous les publions nous-mêmes.",
    studio: "Studio",
    smallPrint: "Les petites lignes",
    copyright: (year: number) =>
      `© ${year} ${site.entity}, sous le nom commercial ${site.company}. ${gemfire.name} et ses illustrations sont la propriété de ${site.company}.`,
  },

  suggest: {
    text: "Cette page existe aussi en français.",
    action: "Lire en français",
    dismiss: "Fermer",
  },

  legal: {
    lastUpdated: "Dernière mise à jour :",
    inShort: "En bref",
    translated:
      "Ceci est une traduction de l'original anglais. En cas de différence entre les deux, c'est le texte anglais qui s'applique.",
    original: "Lire l'original en anglais",
  },

  mail: {
    support: "Aide",
    privacy: "Demande de confidentialité",
    child: "Confidentialité des enfants",
    terms: "Question sur les conditions",
    security: "Sécurité",
    deleteAccount: "Supprimer mon compte",
    deleteSome: "Supprimer une partie de mes données",
  },

  store: {
    comingSoon: "Bientôt sur Google Play et l'App Store",
    googlePlay: "Disponible sur Google Play",
    appStore: "Télécharger dans l'App Store",
  },

  notFound: {
    meta: "Page introuvable",
    kicker: "Erreur 404",
    title: "Le rempart n'a pas de porte ici.",
    body: "Il n'y a rien à cette adresse. Les pillards ont regardé, et ils sont très minutieux pour ce genre de choses.",
    home: "Retour au studio",
    game: `Voir ${gemfire.name}`,
  },

  home: {
    hero: {
      chip: "Studio indépendant de jeux mobiles",
      title: rich("Nous faisons des jeux", "\n", "avec du ", { hl: "feu" }, " dedans."),
      body: `${site.company} crée de petits jeux bruyants et mécaniquement honnêtes pour le téléphone que tu as en poche. Le premier, c'est ${gemfire.name} : un plateau de match-3 boulonné au rempart d'un château, où chaque alignement fait tirer une tourelle.`,
      explore: `Découvrir ${gemfire.name}`,
      about: "À propos du studio",
      stats: ["jeu à la forge", "plateformes au lancement", "pubs imposées", "squelettes à arrêter"],
    },
    ticker: [
      gemfire.name,
      "Match-3 et tower defense",
      "Android",
      "iOS",
      site.company,
      "Bâtis ton royaume",
      "Améliore tes tourelles",
      "Tiens le rempart",
    ],
    games: {
      kicker: "Nos jeux",
      title: rich("Un seul titre. ", { hl: "Tout dedans." }),
      body: "Nous sortons un jeu à la fois et continuons à y travailler après sa sortie. Voici celui qui est sur l'enclume en ce moment.",
      coverAlt: `Illustration de ${gemfire.name} : quatre tourelles sur le rempart d'un château tirent sur une armée de squelettes au-dessus d'un plateau de gemmes.`,
      status: "En développement",
      view: "Voir le jeu",
      nextKicker: "Emplacement 02",
      nextTitle: "Le prochain",
      nextBody: `Tout ce que nous apprenons avec ${gemfire.name} servira au jeu suivant. Quand il y aura quelque chose qui vaut la peine d'être montré, il apparaîtra ici en premier.`,
      sealed: "Scellé",
    },
    studio: {
      kicker: "Le studio",
      title: rich("Petite équipe. ", { hl: "Grosses explosions." }),
      body: `${site.company} est un studio indépendant basé à ${placeName("fr")}. Nous faisons des jeux mobiles comme nous aimerions qu'on en fasse plus souvent : mécaniquement honnêtes, généreux envers les joueurs, et finis.`,
      pillars: {
        mechanics: {
          title: "La mécanique d'abord",
          body: "Un jeu doit être intéressant avec les effets de particules coupés. Nous testons la règle avant de dessiner la moindre gemme, et si la règle n'est pas amusante sur une grille grise, elle ne sort pas.",
        },
        thumb: {
          title: "Le respect du pouce",
          body: "Des parties courtes, de grands boutons, et rien d'important caché derrière un minuteur. Un jeu mobile se joue dans le bus. Il doit être génial dans le bus.",
        },
        phone: {
          title: "Tourne sur ton téléphone actuel",
          body: "Nous développons pour des appareils de plusieurs années et nous les testons en premier. Si un niveau tourne mal sur ton téléphone, c'est un bug de notre côté, pas une exigence du tien.",
        },
        self: {
          title: "Publié par nous, répondu par nous",
          body: "Aucun éditeur entre toi et nous. Les personnes qui font le jeu lisent aussi la boîte d'aide, et un bug signalé par un joueur est corrigé par la personne qui a écrit le code.",
        },
      },
    },
    contact: {
      kicker: "Contact",
      title: rich("Dis bonjour. ", { hl: "Nous lisons tout." }),
      body: "Joueurs, presse, plateformes et partenaires écrivent tous à la même adresse. Les questions d'aide reçoivent une réponse en un ou deux jours.",
      support: "Aide aux joueurs",
    },
  },

  gemfire: {
    genre: "Match-3 et tower defense",
    pitch: "Aligne des gemmes. Fais tirer les tourelles. Tiens le rempart.",
    description: `${gemfire.name} est un jeu de match-3 et de tower defense. Chaque alignement sur le plateau fait tirer la tourelle de la même couleur sur la horde qui marche vers ton château. Repousse les vagues, améliore tes tourelles et bâtis ton royaume.`,
    ogAlt: `${gemfire.name} : des tourelles sur le rempart d'un château tirent sur une horde de squelettes au-dessus d'un plateau de gemmes.`,
    hero: {
      body: "Un plateau de match-3 boulonné au rempart d'un château. Aligne trois gemmes et la tourelle de cette couleur ouvre le feu sur les pillards qui descendent la colline. Tiens le rempart, améliore ton arsenal et bâtis un royaume derrière.",
      chips: ["Gratuit", "Android 8.0+", "iOS 15+", "Jouable hors ligne", "Aucune pub imposée"],
      stats: ["batailles faites main", "tourelles à débloquer", "compagnons à rencontrer", "pubs imposées"],
      splashAlt: `L'écran titre de ${gemfire.name} : trois tourelles sur des socles de pierre tirent sur une horde de créatures d'ombre sous une pluie de gemmes.`,
    },
    play: {
      kicker: "Comment on joue",
      title: rich("Aligne. Renforce. ", { hl: "Défends." }),
      body: "Un plateau, un rempart, et une colline pleine de choses qui veulent la descendre. Chaque alignement est un tir.",
      steps: {
        match: {
          title: "Aligne",
          body: "Fais glisser une gemme sur sa voisine. Aligne-en trois de la même couleur et la tourelle de cette couleur se remplit d'énergie. Plus la ligne est longue, plus il y a d'énergie. Aligne la couleur qui arrive.",
          alt: `L'écran de combat de ${gemfire.name} : quatre tourelles sur un rempart au-dessus d'un plateau de gemmes, tirant sur des squelettes et des gelées dans un donjon.`,
        },
        power: {
          title: "Renforce",
          body: "Les gemmes achètent des tourelles plus fortes, et le rouage lâché par un pillard en améliore une en plein combat. Les pots de feu, les soins et les recharges retournent une mauvaise vague, et on peut toucher une tourelle pleine pour tout lâcher d'un coup.",
          alt: "Une rangée de tourelles améliorées qui brillent sur le rempart, avec une chaîne de gemmes cœur rouges qui s'allume sur le plateau en dessous.",
        },
        defend: {
          title: "Défends",
          body: "Les pillards descendent la colline en temps réel. Un tir fait plus mal quand il touche un pillard de sa propre couleur. Laisse-les passer et ils briseront ton rempart. Tiens bon et le royaume grandit.",
          alt: "Une île isométrique qui passe d'un terrain clôturé à un château complet, sous le regard d'un compagnon grenouille couronné.",
        },
      },
    },
    arsenal: {
      kicker: "L'arsenal",
      title: rich("Vingt tourelles. ", { hl: "Cinq étoiles chacune." }),
      body: "Chaque tourelle s'achète par couleur et s'améliore jusqu'à cinq étoiles. Les dix premières coûtent des pièces. Les dix suivantes coûtent des gemmes, et chacune est la version adulte d'une tourelle que tu connais déjà.",
      art: "Trois tourelles, verte, rouge et cyan, sur des socles gris, chacune tirant un trait de flamme.",
      tier1: "Rang I",
      tier1Sub: "achetées avec des pièces",
      tier2: "Rang II",
      tier2Sub: "achetées avec des gemmes",
      kit: "Le sac",
      charms: "Talismans du plateau",
      charmNotes: {
        prism: "Une gemme arc-en-ciel. Elle compte comme la couleur avec laquelle tu l'alignes.",
        lance: "Vide toute sa ligne et toute sa colonne d'un seul coup.",
        stormglass: "Toute la ligne de tourelles tire sur tout ce qui est sur la colline.",
      },
    },
    campaign: {
      kicker: "La campagne",
      title: rich("Trois fronts. ", { hl: "Puis la longue nuit." }),
      body: "Trente sièges faits main répartis en trois chapitres, chacun avec son propre ennemi et son propre boss à la porte. À côté se tient La Garde Sans Fin : des vagues sans fin, et une place au classement selon le temps que tu tiens.",
      chapter: (n: number) => `Chapitre ${n}`,
      sieges: (n: number) => `${n} sièges`,
      taglines: {
        thornwatch: "Nourris les tourelles. Tiens la ligne.",
        broodmarch: "Quelque chose éclot dans le bourbier.",
        barrowfell: "Les morts ne s'arrêtent pas au rempart.",
      },
      atTheGate: "À la porte",
      infinite: "Mode infini",
      endlessPoints: [
        "Le combat ne s'arrête jamais.",
        "Les ennemis sont plus coriaces à chaque vague.",
        "Gagne ta place au classement.",
      ],
    },
    kingdom: {
      kicker: "Entre les sièges",
      title: rich("Bâtis ton ", { hl: "royaume." }),
      body: "Les pièces gagnées sur le rempart se dépensent derrière. Achète des terres, fais passer une demeure d'un terrain clôturé à un château, et dispose maisons, halls, murs et jardins sur un champ de cases comme tu veux. Chaque pièce peut s'orienter dans quatre directions. Il n'y a pas deux royaumes pareils.",
      art: "Bâtis ton royaume : une île qui passe d'un terrain clôturé vide à un atelier, puis à un donjon, puis à un château complet aux tours à toit rouge.",
      lands: "Neuf terres",
      landList: [
        "Le Foyer",
        "Pré de l'Est",
        "Creux de l'Ouest",
        "Rive Sud",
        "Confins du Nord",
        "Champ de l'Aube",
        "Champ du Crépuscule",
        "Rivage Calme",
        "Terrasse Lointaine",
      ],
      leagues: "Neuf ligues",
      leagueList: [
        "Jeunes Pousses",
        "Fourrés",
        "Vallons",
        "Prairies",
        "Vergers",
        "Sanctuaires",
        "Bois Sauvages",
        "Marais",
        "La Forêt Ancienne",
      ],
      companions: "Compagnons",
      companionsTitle: "Trente et un amis, un à la fois.",
      companionsBody:
        "Monarque est avec toi dès le premier siège. Tu rencontres les autres à mesure que ton royaume grandit, et celui que tu choisis te représente au classement.",
    },
    promises: {
      kicker: "Fair-play",
      title: rich("Six choses que ", { hl: "nous ne ferons pas." }),
      list: {
        ads: {
          title: "Aucune pub imposée",
          body: "Pas de pub entre les niveaux, pas de bannières. Chaque vidéo du jeu est une vidéo que tu choisis de regarder en touchant un bouton, contre des cœurs, des pièces ou un indice, et chacune a une limite quotidienne.",
        },
        offline: {
          title: "Jouable sans réseau",
          body: "Chaque siège tourne sur ton téléphone en mode avion. Le classement, la boutique et les vidéos récompensées ont besoin d'une connexion ; le jeu, non.",
        },
        save: {
          title: "Ta sauvegarde sur nos serveurs",
          body: "La progression est sauvegardée dans le cloud dès le premier lancement, sous un compte anonyme. Connecte-toi avec Google ou Apple et elle survit à un téléphone perdu ou remplacé.",
        },
        grind: {
          title: "Rien qui force à payer",
          body: "Chaque niveau peut être terminé sans rien dépenser. Les pièces et les gemmes se gagnent sur le rempart ; les acheter fait gagner du temps, pas la fin du jeu.",
        },
        chat: {
          title: "Pas de chat, pas d'inconnus",
          body: "Pas de messagerie, et aucun moyen pour les joueurs de se contacter. La seule chose que les autres voient, c'est ton nom de gardien et ton score au classement, et un seul geste suffit à les cacher.",
        },
        phone: {
          title: "Tourne sur ton téléphone actuel",
          body: "Android 8.0 ou iOS 15 et plus. Conçu et testé d'abord sur des téléphones de plusieurs années, parce que c'est ce que la plupart des gens ont.",
        },
      },
    },
    faq: {
      kicker: "Questions",
      title: rich("Les réponses ", { hl: "courtes." }),
      body: rich(
        "Les longues, et celles sur les achats et les comptes, sont sur la ",
        { link: "page d'aide", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Est-ce que c'est payant ?",
          a: `Non. ${gemfire.name} est gratuit, et chaque niveau peut être terminé sans rien dépenser. Il existe des achats facultatifs de pièces, de gemmes et de plus grandes fioles de cœurs pour ceux qui veulent avancer plus vite.`,
        },
        {
          q: "Y a-t-il des pubs ?",
          a: "Seulement celles que tu choisis. Pas de pub entre les niveaux, pas de bannières. Chaque vidéo du jeu est une vidéo que tu choisis de regarder contre des cœurs, des pièces ou un indice, et tu peux finir le jeu entier sans en regarder une seule.",
        },
        {
          q: "Faut-il un compte ou une connexion ?",
          a: "Ni l'un ni l'autre. Chaque niveau tourne sur ton téléphone sans réseau. Un compte anonyme garde ta sauvegarde ; connecte-toi avec Google ou Apple seulement si tu veux qu'elle survive à la perte de ton téléphone.",
        },
        {
          q: "Est-ce que ça tournera sur mon téléphone ?",
          a: "Il faut Android 8.0 ou iOS 15, et pas grand-chose d'autre. Le jeu est conçu pour des téléphones de plusieurs années et testé d'abord sur eux.",
        },
        {
          q: "Est-ce adapté aux enfants ?",
          a: "Il n'y a ni chat, ni messagerie, ni moyen pour les joueurs de se contacter. Les seules choses qu'un autre joueur peut voir sont le nom et le compagnon que tu as choisis et le score de ton royaume, et tu peux tout cacher d'un seul geste.",
        },
      ],
    },
    getIt: {
      kicker: "Obtenir le jeu",
      free: "Gratuit sur Android et iOS.",
    },
  },
};

export default fr;
