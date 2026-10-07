import { localePath } from "@/i18n/locales";
import { Sources, sections, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, site } from "@/lib/site";

const game = gemfire.name;

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

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Créditos",
  description: `A arte, o som e o software com que o ${game} é feito, e quem os criou.`,
  intro: `O ${game} é feito pela ${site.company}. As artes e os sons são licenciados dos estúdios abaixo, que merecem o agradecimento mais do que as letras miúdas.`,
  Body: () => (
    <>
      <p>
        Todos estes pacotes foram comprados ou lançados em domínio público, e nenhuma das
        licenças pede crédito. Citamos mesmo assim, porque alguém desenhou tudo isso.
      </p>

      <h2>Arte</h2>
      <Sources ids={sections.art} used={used} />

      <h2>Som e música</h2>
      <Sources ids={sections.sound} used={used} />

      <h2>Tipografia</h2>
      <Sources ids={sections.type} used={used} />

      <h2>Software</h2>
      <p>
        Feito com <strong>Unity</strong>, sobre o <strong>Google Firebase</strong>. Os anúncios
        são servidos pelo <strong>Unity LevelPlay</strong> e pelo <strong>Google AdMob</strong>,
        e o consentimento é coletado pela Plataforma de Mensagens ao Usuário do Google. O que
        cada um recebe, e para que é usado, está explicado na{" "}
        <a href={localePath("pt", "/privacy")}>política de privacidade</a>.
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
