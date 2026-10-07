import { gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * Spanish, neutral (tú, never vosotros), in the game's own vocabulary: torre, invasor,
 * colina, oleada, corazones, monedas, gemas, guardián, clasificación, pista.
 */
const es: Dictionary = {
  site: {
    tagline: "Juegos para móvil con fuego dentro.",
    description: `${site.company} es un estudio independiente de juegos para móvil. La casa de ${gemfire.name}, el juego de tres en raya y defensa de torres en el que cada combinación dispara una torre.`,
    keywords: [
      "estudio de juegos para móvil",
      "juego de combinar tres",
      "defensa de torres",
      "juegos para móvil",
      "estudio indie",
    ],
    ogAlt: `${site.company}: torres sobre la muralla de un castillo disparando a una horda de esqueletos por encima de un tablero de gemas.`,
    skip: "Saltar al contenido",
  },

  nav: {
    main: "Principal",
    home: `Inicio de ${site.company}`,
    games: "Juegos",
    studio: "Estudio",
    support: "Ayuda",
    privacy: "Privacidad",
    terms: "Términos",
    deleteData: "Borrar tus datos",
    credits: "Créditos",
    play: `Juega a ${gemfire.name}`,
    menu: "Menú",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    language: "Idioma",
  },

  footer: {
    blurb:
      "Un estudio independiente de juegos para móvil. Hacemos juegos pequeños y ruidosos, con mecánicas de verdad bajo el brillo, y los publicamos nosotros mismos.",
    studio: "Estudio",
    smallPrint: "La letra pequeña",
    copyright: (year: number) =>
      `© ${year} ${site.entity}, que opera como ${site.company}. ${gemfire.name} y sus ilustraciones son propiedad de ${site.company}.`,
  },

  suggest: {
    text: "Esta página también está disponible en español.",
    action: "Leer en español",
    dismiss: "Cerrar",
  },

  legal: {
    lastUpdated: "Última actualización:",
    inShort: "En resumen",
    translated:
      "Esta es una traducción del original en inglés. Si alguna vez no coinciden, prevalece el texto en inglés.",
    original: "Leer el original en inglés",
  },

  mail: {
    support: "Ayuda",
    privacy: "Solicitud de privacidad",
    child: "Privacidad de menores",
    terms: "Consulta sobre los términos",
    security: "Seguridad",
    deleteAccount: "Borrar mi cuenta",
    deleteSome: "Borrar parte de mis datos",
  },

  store: {
    comingSoon: "Muy pronto en Google Play y en el App Store",
    googlePlay: "Disponible en Google Play",
    appStore: "Descárgalo en el App Store",
  },

  notFound: {
    meta: "Página no encontrada",
    kicker: "Error 404",
    title: "La muralla no tiene puerta aquí.",
    body: "No hay nada en esta dirección. Los invasores ya han mirado, y en estas cosas son muy minuciosos.",
    home: "Volver al estudio",
    game: `Ver ${gemfire.name}`,
  },

  home: {
    hero: {
      chip: "Estudio independiente de juegos para móvil",
      title: rich("Hacemos juegos", "\n", "con ", { hl: "fuego" }, " dentro."),
      body: `${site.company} crea juegos pequeños, ruidosos y honestos en lo mecánico para el móvil que llevas en el bolsillo. El primero es ${gemfire.name}: un tablero de combinar tres atornillado a la muralla de un castillo, donde cada combinación que haces dispara una torre.`,
      explore: `Descubre ${gemfire.name}`,
      about: "Sobre el estudio",
      stats: ["juego en la forja", "plataformas de salida", "anuncios obligatorios", "esqueletos que frenar"],
    },
    ticker: [
      gemfire.name,
      "Combina tres y defiende",
      "Android",
      "iOS",
      site.company,
      "Construye tu reino",
      "Mejora tus torres",
      "Defiende la muralla",
    ],
    games: {
      kicker: "Nuestros juegos",
      title: rich("Un solo título. ", { hl: "Todo dentro." }),
      body: "Sacamos un juego cada vez y seguimos trabajando en él después del lanzamiento. Este es el que está ahora en el yunque.",
      coverAlt: `Ilustración de ${gemfire.name}: cuatro torres sobre la muralla de un castillo disparando a un ejército de esqueletos por encima de un tablero de gemas.`,
      status: "En desarrollo",
      view: "Ver el juego",
      nextKicker: "Hueco 02",
      nextTitle: "El siguiente",
      nextBody: `Todo lo que aprendemos con ${gemfire.name} va a parar a lo que venga después. Cuando haya algo que merezca la pena enseñar, aparecerá aquí primero.`,
      sealed: "Sellado",
    },
    studio: {
      kicker: "El estudio",
      title: rich("Equipo pequeño. ", { hl: "Explosiones grandes." }),
      body: `${site.company} es un estudio independiente de ${placeName("es")}. Hacemos juegos para móvil como nos gustaría que se hicieran más a menudo: honestos en lo mecánico, generosos con quien juega y terminados.`,
      pillars: {
        mechanics: {
          title: "Primero, las mecánicas",
          body: "Un juego tiene que ser interesante con las partículas apagadas. Probamos la regla antes de dibujar una sola gema, y si la regla no divierte en una cuadrícula gris, no sale.",
        },
        thumb: {
          title: "Respeto por el pulgar",
          body: "Partidas cortas, botones grandes y nada importante escondido tras un temporizador. Un juego de móvil se juega en el autobús, y en el autobús tiene que ser brillante.",
        },
        phone: {
          title: "Funciona en el móvil que ya tienes",
          body: "Desarrollamos para dispositivos de hace varios años y los probamos en ellos primero. Si un nivel va mal en tu móvil, es un error nuestro, no un requisito tuyo.",
        },
        self: {
          title: "Lo publicamos y lo respondemos nosotros",
          body: "No hay ninguna editorial entre tú y nosotros. Las mismas personas que hacen el juego leen el correo de ayuda, y un fallo que nos cuenta un jugador lo arregla quien escribió ese código.",
        },
      },
    },
    contact: {
      kicker: "Contacto",
      title: rich("Escríbenos. ", { hl: "Lo leemos todo." }),
      body: "Jugadores, prensa, plataformas y socios llegan todos al mismo buzón. Las consultas de ayuda reciben respuesta en un par de días.",
      support: "Ayuda para jugadores",
    },
  },

  gemfire: {
    genre: "Combina tres y defensa de torres",
    pitch: "Combina gemas. Dispara torres. Defiende la muralla.",
    description: `${gemfire.name} es un juego de combinar tres y defensa de torres. Cada combinación en el tablero dispara la torre del mismo color contra la horda que marcha hacia tu castillo. Supera oleadas, mejora tus torres y construye tu reino.`,
    ogAlt: `${gemfire.name}: torres sobre la muralla de un castillo disparando a una horda de esqueletos por encima de un tablero de gemas.`,
    hero: {
      body: "Un tablero de combinar tres atornillado a la muralla de un castillo. Junta tres gemas y la torre de ese color abre fuego contra los invasores que bajan por la colina. Defiende la muralla, mejora tu arsenal y construye un reino detrás de ella.",
      chips: ["Gratis", "Android 8.0+", "iOS 15+", "Se juega sin conexión", "Sin anuncios obligatorios"],
      stats: ["batallas hechas a mano", "torres por desbloquear", "compañeros por conocer", "anuncios obligatorios"],
      splashAlt: `Pantalla de título de ${gemfire.name}: tres torres sobre pedestales de piedra disparando a una horda de criaturas de sombra bajo una lluvia de gemas.`,
    },
    play: {
      kicker: "Cómo se juega",
      title: rich("Combina. Mejora. ", { hl: "Defiende." }),
      body: "Un tablero, una muralla y una colina llena de cosas que quieren bajar por ella. Cada combinación que haces es un disparo.",
      steps: {
        match: {
          title: "Combina",
          body: "Arrastra una gema hasta su vecina. Junta tres del mismo color y la torre de ese color se llena de energía. Cuanto más larga la línea, más energía. Combina el color que se acerca.",
          alt: `La pantalla de batalla de ${gemfire.name}: cuatro torres sobre una muralla encima de un tablero de gemas, disparando a esqueletos y babosas en una mazmorra.`,
        },
        power: {
          title: "Mejora",
          body: "Las gemas compran torres más fuertes, y el engranaje que suelta un invasor mejora una en plena batalla. Las bombas de fuego, las curas y las cargas le dan la vuelta a una mala oleada, y una torre llena se puede tocar para soltarlo todo de golpe.",
          alt: "Una fila de torres mejoradas brillando en la muralla, con una cadena de gemas rojas de corazón iluminándose en el tablero de abajo.",
        },
        defend: {
          title: "Defiende",
          body: "Los invasores bajan por la colina en tiempo real. Un disparo hace más daño cuando alcanza a un invasor de su mismo color. Déjalos pasar y romperán tu muralla. Aguanta y el reino crecerá.",
          alt: "Una isla isométrica que crece desde una parcela vallada hasta un castillo completo, con un compañero rana coronado mirando.",
        },
      },
    },
    arsenal: {
      kicker: "El arsenal",
      title: rich("Veinte torres. ", { hl: "Cinco estrellas cada una." }),
      body: "Cada torre se compra por color y se mejora hasta las cinco estrellas. Las diez primeras cuestan monedas. Las diez siguientes cuestan gemas, y cada una es la versión adulta de alguna que ya conoces.",
      art: "Tres torres, verde, roja y cian, sobre pedestales grises, cada una disparando un rayo de fuego.",
      tier1: "Nivel I",
      tier1Sub: "se compran con monedas",
      tier2: "Nivel II",
      tier2Sub: "se compran con gemas",
      kit: "La mochila",
      charms: "Amuletos del tablero",
      charmNotes: {
        prism: "Una gema arcoíris. Cuenta como el color con el que la combines.",
        lance: "Despeja toda su fila y su columna de un solo golpe.",
        stormglass: "Toda la línea de torres dispara a todo lo que hay en la colina.",
      },
    },
    campaign: {
      kicker: "La campaña",
      title: rich("Tres frentes. ", { hl: "Y luego, la larga noche." }),
      body: "Treinta asedios hechos a mano en tres capítulos, cada uno con su propio enemigo y su propio jefe a las puertas. A su lado está la Guardia Infinita: oleadas sin fin y un puesto en la clasificación según cuánto aguantes.",
      chapter: (n: number) => `Capítulo ${n}`,
      sieges: (n: number) => `${n} asedios`,
      taglines: {
        thornwatch: "Alimenta las torres. Aguanta la línea.",
        broodmarch: "Algo está naciendo en la ciénaga.",
        barrowfell: "Los muertos no se detienen ante la muralla.",
      },
      atTheGate: "A las puertas",
      infinite: "Modo infinito",
      endlessPoints: [
        "La lucha nunca para.",
        "Los enemigos son más duros en cada oleada.",
        "Gánate tu puesto en la clasificación.",
      ],
    },
    kingdom: {
      kicker: "Entre asedios",
      title: rich("Construye tu ", { hl: "reino." }),
      body: "Las monedas que ganas en la muralla se gastan detrás de ella. Compra tierras, convierte una parcela vallada en un castillo y reparte casas, salones, murallas y jardines por un campo de casillas como más te guste. Cada pieza se puede girar hacia cuatro lados. No hay dos reinos iguales.",
      art: "Construye tu reino: una isla que crece desde una parcela vallada vacía hasta un taller, una torre del homenaje y un castillo completo con torres de tejado rojo.",
      lands: "Nueve tierras",
      landList: [
        "El Hogar",
        "Prado del Este",
        "Hondonada del Oeste",
        "Ribera Sur",
        "Confín del Norte",
        "Campo del Alba",
        "Campo del Ocaso",
        "Orilla Quieta",
        "Terraza Lejana",
      ],
      leagues: "Nueve ligas",
      leagueList: [
        "Brotes",
        "Matorrales",
        "Hondonadas",
        "Prados",
        "Huertos",
        "Santuarios",
        "Bosques salvajes",
        "Marismas",
        "El Bosque Antiguo",
      ],
      companions: "Compañeros",
      companionsTitle: "Treinta y un amigos, de uno en uno.",
      companionsBody:
        "Monarca te acompaña desde el primer asedio. Al resto los conoces a medida que crece tu reino, y el que elijas te representa en la clasificación.",
    },
    promises: {
      kicker: "Juego limpio",
      title: rich("Seis cosas que ", { hl: "no haremos." }),
      list: {
        ads: {
          title: "Sin anuncios obligatorios",
          body: "No hay anuncios entre niveles ni banners. Cada vídeo del juego es uno que tú decides ver tocando un botón, a cambio de corazones, monedas o una pista, y todos tienen un límite diario.",
        },
        offline: {
          title: "Se juega sin cobertura",
          body: "Cada asedio funciona en tu móvil en modo avión. La clasificación, la tienda y los vídeos con recompensa necesitan conexión; el juego no.",
        },
        save: {
          title: "Tu partida, en nuestros servidores",
          body: "El progreso se guarda en la nube desde el primer inicio con una cuenta anónima. Inicia sesión con Google o Apple y sobrevivirá a un móvil perdido o cambiado.",
        },
        grind: {
          title: "Nada que te obligue a pagar",
          body: "Todos los niveles se pueden terminar sin gastar nada. Las monedas y las gemas se ganan en la muralla; comprarlas te ahorra tiempo, no te compra el final.",
        },
        chat: {
          title: "Sin chat ni desconocidos",
          body: "No hay mensajes ni forma de que los jugadores se pongan en contacto. Lo único que ven los demás es tu nombre de guardián y tu puntuación en la clasificación, y un toque basta para ocultarlo.",
        },
        phone: {
          title: "Funciona en el móvil que ya tienes",
          body: "Android 8.0 o iOS 15 en adelante. Hecho y probado primero en móviles de hace varios años, porque son los que tiene la mayoría de la gente.",
        },
      },
    },
    faq: {
      kicker: "Preguntas",
      title: rich("Las respuestas ", { hl: "cortas." }),
      body: rich(
        "Las largas, y las que tratan de compras y cuentas, están en la ",
        { link: "página de ayuda", href: "/support" },
        "."
      ),
      items: [
        {
          q: "¿Cuesta algo?",
          a: `No. ${gemfire.name} es gratis, y todos sus niveles se pueden terminar sin gastar nada. Hay compras opcionales de monedas, gemas y frascos de corazones más grandes para quien quiera avanzar más rápido.`,
        },
        {
          q: "¿Tiene anuncios?",
          a: "Solo los que tú eliges. No hay anuncios entre niveles ni banners. Cada vídeo del juego es uno que decides ver tocando un botón, a cambio de corazones, monedas o una pista, y puedes terminar el juego entero sin ver ni uno.",
        },
        {
          q: "¿Necesito una cuenta o conexión?",
          a: "Ninguna de las dos. Cada nivel funciona en tu móvil sin cobertura. Una cuenta anónima guarda tu partida; inicia sesión con Google o Apple solo si quieres que sobreviva a la pérdida del móvil.",
        },
        {
          q: "¿Funcionará en mi móvil?",
          a: "Necesita Android 8.0 o iOS 15 y poco más. Está hecho para móviles de hace varios años y se prueba en ellos primero.",
        },
        {
          q: "¿Es seguro para niños?",
          a: "No hay chat, ni mensajes, ni forma de que los jugadores se pongan en contacto. Lo único que otro jugador puede ver es el nombre y el compañero que elegiste y la puntuación de tu reino, y puedes ocultarlo todo con un toque.",
        },
      ],
    },
    getIt: {
      kicker: "Consigue el juego",
      free: "Gratis en Android e iOS.",
    },
  },
};

export default es;
