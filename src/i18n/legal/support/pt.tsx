import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.pt.mail;
const label = gameTextFor("pt").labels;
const game = gemfire.name;

/** Translation of support/en.tsx. Button names are the game's own Portuguese labels. */
const doc: LegalDoc = {
  title: "Suporte",
  description: `Ajuda com ${game}: progresso perdido, compras, corações, anúncios e contas.`,
  intro: `Algo não está funcionando no ${game}? Escreva para nós. Uma pessoa de verdade lê.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          Escreva para {site.email}
        </a>
      </p>

      <p>
        Costumamos responder em um ou dois dias. Ajuda muito se você incluir seu{" "}
        <strong>identificador de conta</strong> (aba Perfil, cartão Conta), o modelo do seu
        aparelho e o que você esperava que acontecesse.
      </p>

      <h2>Perguntas frequentes</h2>

      <div className="not-prose">
        <Question q="Perdi meu progresso depois de reinstalar.">
          <p>
            Se você nunca vinculou uma conta da Apple ou do Google, o reino estava ligado a uma
            conta anônima naquele aparelho, e reinstalar pode deixá-lo para trás. Abra a aba{" "}
            <strong>Perfil</strong> e entre com Google ou Apple. É isso que faz o progresso
            sobreviver a um aparelho perdido ou apagado no futuro.
          </p>
          <p>
            Se você <em>vinculou</em>, entre com o mesmo provedor e seu reino deve voltar. Se
            não voltar, envie um e-mail com o endereço do login.
          </p>
        </Question>

        <Question q="Paguei por algo e não recebi.">
          <p>
            Primeiro, abra o jogo de novo com internet. Compras não concluídas são entregues de
            novo automaticamente ao abrir, e uma compra interrompida por um travamento ou queda
            de conexão costuma se resolver assim. O botão{" "}
            <strong>{label.restorePurchases}</strong> na loja faz o mesmo quando você quiser.
          </p>
          <p>
            Se ainda não chegou, envie um e-mail com o recibo da loja ou o número do pedido e
            resolveremos diretamente. É mais rápido que um reembolso.
          </p>
        </Question>

        <Question q="Como peço um reembolso?">
          <p>
            Reembolsos são feitos pela Apple e pelo Google, não por nós. Não podemos emitir um
            em nome deles. Use o processo de reembolso da própria loja, a partir do seu
            histórico de compras.
          </p>
          <p>
            Se o problema é que algo não chegou, e não que você mudou de ideia, escreva para nós
            primeiro; normalmente resolvemos isso em um dia.
          </p>
        </Question>

        <Question q="Como funcionam os corações?">
          <p>
            Perder um cerco custa um coração, e os corações voltam sozinhos com o tempo, até o
            limite do seu frasco. Os três primeiros cercos de cada capítulo podem ser perdidos
            de graça enquanto você aprende, e jogar de novo um cerco que você já venceu é sempre
            grátis.
          </p>
          <p>
            Se acabarem, você pode esperar, assistir a um vídeo para ganhar dois ou gastar
            gemas. Comprar um frasco maior aumenta o limite para sempre.
          </p>
        </Question>

        <Question q="O botão de assistir vídeo nunca encontra um vídeo.">
          <p>
            Isso significa que não havia anúncio disponível naquele momento. A disponibilidade
            varia por país, horário e quantos você já viu hoje. O jogo continua tentando em
            segundo plano, então normalmente volta a funcionar sozinho.
          </p>
          <p>
            Você nunca precisa assistir a um anúncio para terminar o jogo. Todos são opcionais e
            nada fica bloqueado atrás deles.
          </p>
        </Question>

        <Question q="Como paro de aparecer no ranking?">
          <p>
            Abra a aba <strong>Perfil</strong> e toque em{" "}
            <strong>{label.hideFromBoards}</strong> na seção do ranking. Seu cartão é retirado e
            seu nome de guardião deixa de ficar visível para outros jogadores. Você mantém o
            nome dentro do seu próprio jogo.
          </p>
        </Question>

        <Question q="Como mudo minha escolha de publicidade?">
          <p>
            <strong>Configurações</strong> (o ícone de engrenagem na tela Início ou Perfil),
            depois <strong>{label.privacyChoices}</strong>. No iOS, a permissão de rastreamento,
            que é separada, fica em{" "}
            <strong>Ajustes do iOS › Privacidade e Segurança › Rastreamento</strong>.
          </p>
        </Question>

        <Question q="Como apago tudo?">
          <p>
            Veja{" "}
            <Link href={localePath("pt", "/delete-account")}>
              como excluir sua conta e seus dados
            </Link>
            . Lembre que apagar só o app não apaga o que está nos nossos servidores.
          </p>
        </Question>

        <Question q="Meu nome de guardião foi recusado.">
          <p>
            Os nomes precisam ser únicos, e filtramos os que se passam por alguém, podem ser
            entendidos como assédio ou contêm caracteres que estragam as entradas de outros
            jogadores no ranking.
          </p>
          <p>
            Um nome recusado não é tirado de você. Você o mantém dentro do seu próprio jogo e
            aparece no ranking com um nome gerado.
          </p>
        </Question>

        <Question q="O nome de outro jogador é ofensivo.">
          <p>
            Abra o reino dessa pessoa pelo ranking e toque em <strong>{label.report}</strong>.
            Analisamos todas as denúncias, e um nome que viola as regras é substituído por um
            nome gerado. Você não vai saber quem denunciou, e a pessoa não vai saber que foi
            você.
          </p>
        </Question>

        <Question q="O jogo funciona offline?">
          <p>
            Sim. Todos os cercos rodam no seu celular sem conexão. O ranking, visitar outros
            reinos, a loja, os vídeos com recompensa e entrar ou excluir sua conta precisam de
            conexão, e os bônus diários precisam que você fique online uma vez para
            desbloqueá-los.
          </p>
        </Question>
      </div>

      <h2>Como relatar um problema de segurança</h2>
      <p>
        Se você encontrou um jeito de quebrar a economia, ler o progresso salvo de outro jogador
        ou acessar de alguma outra forma algo que não deveria, conte para nós em{" "}
        <a href={mailto(mail.security)}>{site.email}</a> antes de contar para qualquer outra
        pessoa. Não tomaremos nenhuma medida contra você por relatar algo de boa-fé.
      </p>
    </>
  ),
};

export default doc;
