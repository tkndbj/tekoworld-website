import { localePath } from "@/i18n/locales";
import { Sources, buddiesSections, sections, type BuddiesUsed, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, site } from "@/lib/site";

const game = gemfire.name;
const bb = balanceBuddies.name;

const used: Used = {
  craftpix:
    "Quase tudo o que você vê: as gemas, os invasores e suas animações, as torres, os campos de batalha, o kit de interface, os mapas e céus do mundo e os tilesets da vila.",
  layerlab:
    "As artes de moedas e gemas nas prateleiras da loja, e os ícones na parte de baixo da tela.",
  envato: "Os baús de tesouro e o jeito como abrem, e um dos três exércitos de invasores.",
  kaykit:
    "Os modelos 3D a partir dos quais os prédios do seu reino são renderizados, e um dos chefes. Publicados sob CC0.",
  gameburp: "A maioria dos efeitos sonoros do jogo.",
  rpgmagic: "Os feitiços: tudo o que é lançado em vez de golpeado.",
  craftpixMusic: "A música que toca no menu e sobre o mapa do mundo.",
  titan:
    "Todas as palavras do jogo usam esta fonte. Publicada sob a SIL Open Font License; a cópia que distribuímos acrescenta letras acentuadas para nomes turcos, poloneses, tchecos e húngaros, e por isso tem outro nome.",
};

const buddiesUsed: BuddiesUsed = {
  craftpix: "Os próprios buddies, do kit de jogo Onet, e os botões, painéis e ícones ao redor deles.",
  envato:
    "As pedras, tábuas, blocos de metal, bolas e gelo de um conjunto de blocos para jogos de física: tudo o que não é buddy e mesmo assim precisa ficar em equilíbrio.",
  gameburp: "O clique dos botões, o estouro dos balões e o balanço da mola.",
  lilita: "Cada palavra do jogo. Publicada sob a SIL Open Font License.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Créditos",
  description: `A arte, os sons e o software de que o ${game} e o ${bb} são feitos, e quem os fez.`,
  intro: `O ${game} e o ${bb} são feitos pela ${site.company}. A arte e os sons deles são licenciados dos estúdios abaixo, a quem devemos mais agradecimentos do que letras miúdas.`,
  Body: () => (
    <>
      <p>
        Todos estes pacotes foram comprados ou lançados em domínio público, e nenhuma das
        licenças pede crédito. Citamos mesmo assim, porque alguém desenhou tudo isso.
      </p>

      <h2 id="gemfire">{game}</h2>

      <h3>Arte</h3>
      <Sources ids={sections.art} used={used} />

      <h3>Som e música</h3>
      <Sources ids={sections.sound} used={used} />

      <h3>Tipografia</h3>
      <Sources ids={sections.type} used={used} />

      <h3>Software</h3>
      <p>
        Feito com <strong>Unity</strong>, sobre o <strong>Google Firebase</strong>. Os anúncios
        são servidos pelo <strong>Unity LevelPlay</strong> e pelo <strong>Google AdMob</strong>,
        e o consentimento é coletado pela Plataforma de Mensagens ao Usuário do Google. O que
        cada um recebe, e para que é usado, está explicado na{" "}
        <a href={localePath("pt", "/privacy")}>política de privacidade</a>.
      </p>

      <h2 id="balance-buddies">{bb}</h2>

      <h3>Arte</h3>
      <Sources ids={buddiesSections.art} used={buddiesUsed} />
      <p>Céus, colinas, água, mecanismos e a arte principal foram feitos para o jogo.</p>

      <h3>Som e música</h3>
      <Sources ids={buddiesSections.sound} used={buddiesUsed} />
      <p>
        Os outros sons, os sinos suaves afinados em um único tom e a música foram criados ou
        gravados para o jogo.
      </p>

      <h3>Tipografia</h3>
      <Sources ids={buddiesSections.type} used={buddiesUsed} />

      <h3>Software</h3>
      <p>
        Feito com <strong>Unity</strong>, sobre o <strong>Google Firebase</strong>. Os anúncios
        vêm do <strong>Google AdMob</strong>, e o consentimento é coletado pela User Messaging
        Platform do Google. Veja a{" "}
        <a href={localePath("pt", "/privacy#balance-buddies")}>política de privacidade</a>.
      </p>

      <h2>Faltou alguém?</h2>
      <p>
        Se você fez algo que aparece no {game} e não está nesta lista, escreva para{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> e vamos corrigir.
      </p>
    </>
  ),
};

export default doc;
