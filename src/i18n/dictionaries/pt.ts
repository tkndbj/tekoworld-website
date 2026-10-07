import { gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * Brazilian Portuguese (você), in the game's own vocabulary: torre, invasor, colina, onda,
 * corações, moedas, gemas, guardião, ranking, dica.
 */
const pt: Dictionary = {
  site: {
    tagline: "Jogos para celular com fogo por dentro.",
    description: `A ${site.company} é um estúdio independente de jogos para celular. A casa de ${gemfire.name}, o jogo de combinar três com defesa de torres em que cada combinação dispara uma torre.`,
    keywords: [
      "estúdio de jogos para celular",
      "jogo de combinar três",
      "defesa de torres",
      "jogos para celular",
      "estúdio indie",
    ],
    ogAlt: `${site.company}: torres na muralha de um castelo atirando numa horda de esqueletos acima de um tabuleiro de gemas.`,
    skip: "Pular para o conteúdo",
  },

  nav: {
    main: "Principal",
    home: `Início da ${site.company}`,
    games: "Jogos",
    studio: "Estúdio",
    support: "Suporte",
    privacy: "Privacidade",
    terms: "Termos",
    deleteData: "Excluir seus dados",
    credits: "Créditos",
    play: `Jogue ${gemfire.name}`,
    menu: "Menu",
    openMenu: "Abrir o menu",
    closeMenu: "Fechar o menu",
    language: "Idioma",
  },

  footer: {
    blurb:
      "Um estúdio independente de jogos para celular. Fazemos jogos pequenos e barulhentos, com mecânicas de verdade por baixo do brilho, e nós mesmos os publicamos.",
    studio: "Estúdio",
    smallPrint: "As letras miúdas",
    copyright: (year: number) =>
      `© ${year} ${site.entity}, operando como ${site.company}. ${gemfire.name} e suas artes são propriedade da ${site.company}.`,
  },

  suggest: {
    text: "Esta página também está disponível em português.",
    action: "Ler em português",
    dismiss: "Fechar",
  },

  legal: {
    lastUpdated: "Última atualização:",
    inShort: "Em resumo",
    translated:
      "Esta é uma tradução do original em inglês. Se em algum ponto os dois forem diferentes, vale o texto em inglês.",
    original: "Ler o original em inglês",
  },

  mail: {
    support: "Suporte",
    privacy: "Pedido de privacidade",
    child: "Privacidade de crianças",
    terms: "Dúvida sobre os termos",
    security: "Segurança",
    deleteAccount: "Excluir minha conta",
    deleteSome: "Excluir parte dos meus dados",
  },

  store: {
    comingSoon: "Em breve no Google Play e na App Store",
    googlePlay: "Disponível no Google Play",
    appStore: "Baixar na App Store",
  },

  notFound: {
    meta: "Página não encontrada",
    kicker: "Erro 404",
    title: "A muralha não tem portão aqui.",
    body: "Não há nada neste endereço. Os invasores já procuraram, e eles são muito caprichosos com esse tipo de coisa.",
    home: "Voltar ao estúdio",
    game: `Ver ${gemfire.name}`,
  },

  home: {
    hero: {
      chip: "Estúdio independente de jogos para celular",
      title: rich("Fazemos jogos", "\n", "com ", { hl: "fogo" }, " por dentro."),
      body: `A ${site.company} cria jogos pequenos, barulhentos e honestos na mecânica para o celular no seu bolso. O primeiro é ${gemfire.name}: um tabuleiro de combinar três parafusado na muralha de um castelo, onde cada combinação que você faz dispara uma torre.`,
      explore: `Conheça ${gemfire.name}`,
      about: "Sobre o estúdio",
      stats: ["jogo na forja", "plataformas no lançamento", "anúncios obrigatórios", "esqueletos para deter"],
    },
    ticker: [
      gemfire.name,
      "Combine três e defenda",
      "Android",
      "iOS",
      site.company,
      "Construa seu reino",
      "Melhore suas torres",
      "Defenda a muralha",
    ],
    games: {
      kicker: "Nossos jogos",
      title: rich("Um título. ", { hl: "Tudo nele." }),
      body: "Lançamos um jogo de cada vez e continuamos trabalhando nele depois do lançamento. Este é o que está na bigorna agora.",
      coverAlt: `Arte de ${gemfire.name}: quatro torres na muralha de um castelo atirando num exército de esqueletos acima de um tabuleiro de gemas.`,
      status: "Em desenvolvimento",
      view: "Ver o jogo",
      nextKicker: "Espaço 02",
      nextTitle: "O próximo",
      nextBody: `Tudo o que aprendemos com ${gemfire.name} vai para o que vier depois. Quando houver algo que valha a pena mostrar, vai aparecer aqui primeiro.`,
      sealed: "Lacrado",
    },
    studio: {
      kicker: "O estúdio",
      title: rich("Equipe pequena. ", { hl: "Explosões grandes." }),
      body: `A ${site.company} é um estúdio independente em ${placeName("pt-BR")}. Fazemos jogos para celular do jeito que gostaríamos que mais jogos fossem feitos: honestos na mecânica, generosos com quem joga e terminados.`,
      pillars: {
        mechanics: {
          title: "Mecânica em primeiro lugar",
          body: "Um jogo precisa ser interessante com as partículas desligadas. Testamos a regra antes de desenhar uma única gema, e se a regra não for divertida numa grade cinza, ela não sai.",
        },
        thumb: {
          title: "Respeito ao polegar",
          body: "Partidas curtas, botões grandes e nada importante escondido atrás de um cronômetro. Jogo de celular se joga no ônibus. E no ônibus ele tem que ser brilhante.",
        },
        phone: {
          title: "Roda no celular que você tem",
          body: "Desenvolvemos para aparelhos de vários anos atrás e testamos neles primeiro. Se uma fase roda mal no seu celular, o erro é nosso, não um requisito seu.",
        },
        self: {
          title: "Publicado e respondido por nós",
          body: "Nenhuma publicadora entre você e nós. As mesmas pessoas que fazem o jogo leem o e-mail de suporte, e um bug relatado por um jogador é corrigido por quem escreveu aquele código.",
        },
      },
    },
    contact: {
      kicker: "Contato",
      title: rich("Diga oi. ", { hl: "Lemos tudo." }),
      body: "Jogadores, imprensa, plataformas e parceiros chegam todos à mesma caixa de entrada. Dúvidas de suporte recebem resposta em um ou dois dias.",
      support: "Suporte ao jogador",
    },
  },

  gemfire: {
    genre: "Combinar três com defesa de torres",
    pitch: "Combine gemas. Dispare torres. Defenda a muralha.",
    description: `${gemfire.name} é um jogo de combinar três com defesa de torres. Cada combinação no tabuleiro dispara a torre da mesma cor contra a horda que marcha até o seu castelo. Vença ondas, melhore suas torres e construa seu reino.`,
    ogAlt: `${gemfire.name}: torres na muralha de um castelo atirando numa horda de esqueletos acima de um tabuleiro de gemas.`,
    hero: {
      body: "Um tabuleiro de combinar três parafusado na muralha de um castelo. Junte três gemas e a torre daquela cor abre fogo contra os invasores que descem a colina. Defenda a muralha, melhore seu arsenal e construa um reino atrás dela.",
      chips: ["Grátis", "Android 8.0+", "iOS 15+", "Joga offline", "Sem anúncios obrigatórios"],
      stats: ["batalhas feitas à mão", "torres para desbloquear", "companheiros para conhecer", "anúncios obrigatórios"],
      splashAlt: `Tela de título de ${gemfire.name}: três torres sobre pedestais de pedra atirando numa horda de criaturas sombrias sob uma chuva de gemas.`,
    },
    play: {
      kicker: "Como se joga",
      title: rich("Combine. Melhore. ", { hl: "Defenda." }),
      body: "Um tabuleiro, uma muralha e uma colina cheia de coisas querendo descer por ela. Cada combinação que você faz é um tiro.",
      steps: {
        match: {
          title: "Combine",
          body: "Arraste uma gema até a vizinha. Junte três da mesma cor e a torre daquela cor se enche de energia. Linhas maiores, mais energia. Combine a cor que está chegando.",
          alt: `A tela de batalha de ${gemfire.name}: quatro torres numa muralha acima de um tabuleiro de gemas, atirando em esqueletos e gosmas numa masmorra.`,
        },
        power: {
          title: "Melhore",
          body: "Gemas compram torres mais fortes, e a engrenagem que um invasor deixa cair melhora uma no meio da luta. Bombas de fogo, curas e cargas viram uma onda ruim, e uma torre cheia pode ser tocada para soltar tudo de uma vez.",
          alt: "Uma fileira de torres melhoradas brilhando na muralha, com uma corrente de gemas vermelhas de coração acendendo no tabuleiro abaixo.",
        },
        defend: {
          title: "Defenda",
          body: "Os invasores descem a colina em tempo real. Um tiro machuca mais quando acerta um invasor da mesma cor. Deixe-os passar e eles quebram sua muralha. Segure firme e o reino cresce.",
          alt: "Uma ilha isométrica crescendo de um terreno cercado até um castelo completo, com um companheiro sapo de coroa observando.",
        },
      },
    },
    arsenal: {
      kicker: "O arsenal",
      title: rich("Vinte torres. ", { hl: "Cinco estrelas cada." }),
      body: "Cada torre é comprada por cor e melhorada até cinco estrelas. As dez primeiras custam moedas. As dez seguintes custam gemas, e cada uma é a versão adulta de uma que você já conhece.",
      art: "Três torres, verde, vermelha e ciano, sobre pedestais cinza, cada uma disparando um raio de fogo.",
      tier1: "Nível I",
      tier1Sub: "compradas com moedas",
      tier2: "Nível II",
      tier2Sub: "compradas com gemas",
      kit: "A mochila",
      charms: "Amuletos no tabuleiro",
      charmNotes: {
        prism: "Uma gema arco-íris. Conta como a cor com que você a combinar.",
        lance: "Limpa a linha e a coluna inteiras de uma vez.",
        stormglass: "Toda a linha de torres atira em tudo o que está na colina.",
      },
    },
    campaign: {
      kicker: "A campanha",
      title: rich("Três frentes. ", { hl: "Depois, a longa noite." }),
      body: "Trinta cercos feitos à mão em três capítulos, cada um com seu próprio inimigo e seu próprio chefe no portão. Ao lado deles fica A Vigília Infinita: ondas sem fim e um lugar no ranking pelo tempo que você aguentou.",
      chapter: (n: number) => `Capítulo ${n}`,
      sieges: (n: number) => `${n} cercos`,
      taglines: {
        thornwatch: "Alimente as torres. Segure a linha.",
        broodmarch: "Algo está nascendo no lamaçal.",
        barrowfell: "Os mortos não param na muralha.",
      },
      atTheGate: "No portão",
      infinite: "Modo infinito",
      endlessPoints: [
        "A luta nunca para.",
        "Os inimigos ficam mais fortes a cada onda.",
        "Conquiste seu lugar no ranking.",
      ],
    },
    kingdom: {
      kicker: "Entre os cercos",
      title: rich("Construa seu ", { hl: "reino." }),
      body: "As moedas ganhas na muralha são gastas atrás dela. Compre terras, transforme um terreno cercado num castelo e distribua casas, salões, muros e jardins por um campo de quadrados do jeito que quiser. Cada peça gira para quatro lados. Não existem dois reinos iguais.",
      art: "Construa seu reino: uma ilha que cresce de um terreno cercado vazio para uma oficina, uma torre de menagem e um castelo completo com torres de telhado vermelho.",
      lands: "Nove terras",
      landList: [
        "O Lar",
        "Prado Leste",
        "Vale Oeste",
        "Margem Sul",
        "Confins do Norte",
        "Campo da Aurora",
        "Campo do Crepúsculo",
        "Praia Serena",
        "Terraço Distante",
      ],
      leagues: "Nove ligas",
      leagueList: [
        "Brotos",
        "Moitas",
        "Vales",
        "Prados",
        "Pomares",
        "Santuários",
        "Matas Selvagens",
        "Pantanais",
        "O Bosque Ancião",
      ],
      companions: "Companheiros",
      companionsTitle: "Trinta e um amigos, um de cada vez.",
      companionsBody:
        "Monarca está com você desde o primeiro cerco. Os outros você conhece conforme seu reino cresce, e o que você escolher representa você no ranking.",
    },
    promises: {
      kicker: "Jogo limpo",
      title: rich("Seis coisas que ", { hl: "não vamos fazer." }),
      list: {
        ads: {
          title: "Sem anúncios obrigatórios",
          body: "Não há anúncios entre as fases nem banners. Cada vídeo do jogo é um que você escolhe assistir tocando num botão, em troca de corações, moedas ou uma dica, e todos têm um limite diário.",
        },
        offline: {
          title: "Joga sem sinal",
          body: "Cada cerco roda no seu celular em modo avião. O ranking, a loja e os vídeos com recompensa precisam de conexão; o jogo não.",
        },
        save: {
          title: "Seu progresso nos nossos servidores",
          body: "O progresso é salvo na nuvem desde a primeira abertura, numa conta anônima. Entre com Google ou Apple e ele sobrevive a um celular perdido ou trocado.",
        },
        grind: {
          title: "Nada que force você a pagar",
          body: "Todas as fases podem ser terminadas sem gastar nada. Moedas e gemas são ganhas na muralha; comprá-las economiza tempo, não compra o final.",
        },
        chat: {
          title: "Sem chat, sem estranhos",
          body: "Não há mensagens nem forma de os jogadores entrarem em contato. A única coisa que os outros veem é o seu nome de guardião e a sua pontuação no ranking, e um toque esconde isso.",
        },
        phone: {
          title: "Roda no celular que você tem",
          body: "Android 8.0 ou iOS 15 em diante. Feito e testado primeiro em celulares de vários anos atrás, porque é isso que a maioria das pessoas tem.",
        },
      },
    },
    faq: {
      kicker: "Perguntas",
      title: rich("As respostas ", { hl: "curtas." }),
      body: rich(
        "As longas, e as sobre compras e contas, estão na ",
        { link: "página de suporte", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Custa alguma coisa?",
          a: `Não. ${gemfire.name} é grátis, e todas as fases podem ser terminadas sem gastar nada. Há compras opcionais de moedas, gemas e frascos de corações maiores para quem quer avançar mais rápido.`,
        },
        {
          q: "Tem anúncios?",
          a: "Só os que você escolhe. Não há anúncios entre as fases nem banners. Cada vídeo do jogo é um que você escolhe assistir tocando num botão, em troca de corações, moedas ou uma dica, e dá para terminar o jogo inteiro sem assistir a nenhum.",
        },
        {
          q: "Preciso de uma conta ou de conexão?",
          a: "De nenhuma das duas. Todas as fases rodam no seu celular sem sinal. Uma conta anônima guarda seu progresso; entre com Google ou Apple só se quiser que ele sobreviva à perda do celular.",
        },
        {
          q: "Vai rodar no meu celular?",
          a: "Precisa de Android 8.0 ou iOS 15 e pouco mais. Foi feito para celulares de vários anos atrás e testado neles primeiro.",
        },
        {
          q: "É seguro para crianças?",
          a: "Não há chat, nem mensagens, nem forma de os jogadores entrarem em contato. A única coisa que outro jogador pode ver é o nome e o companheiro que você escolheu e a pontuação do seu reino, e você pode esconder tudo isso com um toque.",
        },
      ],
    },
    getIt: {
      kicker: "Baixe o jogo",
      free: "Grátis para Android e iOS.",
    },
  },
};

export default pt;
