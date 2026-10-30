import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.pt.mail;
const label = gameTextFor("pt").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/** Translation of support/en.tsx. Button names are the game's own Portuguese labels. */
const doc: LegalDoc = {
  title: "Suporte",
  description: `Ajuda com ${game} e ${bb}: progresso perdido, compras, dicas, anúncios e contas.`,
  intro: `Algo não está funcionando no ${game} ou no ${bb}? Escreva para nós. Uma pessoa de verdade lê.`,
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

      <h2 id="balance-buddies">{bb}: perguntas frequentes</h2>

      <div className="not-prose">
        <Question q="Perdi meu progresso depois de reinstalar.">
          <p>
            Seu progresso é salvo na nuvem desde o primeiro quebra-cabeça, em uma conta anônima
            daquele aparelho. Reinstalar começa uma nova. Para levar o progresso entre
            instalações ou celulares, abra <strong>Settings</strong> e entre com o Google ou a
            Apple. Entre com o mesmo serviço na nova instalação e seu progresso volta.
          </p>
          <p>Se não voltar, escreva para nós a partir do e-mail desse login.</p>
        </Question>

        <Question q="Entrei em uma conta e meu progresso mudou.">
          <p>
            Esse login já tinha progresso próprio. O jogo pergunta antes de substituir o
            progresso do seu aparelho e só muda se você confirmar. As compras feitas no
            aparelho são mantidas de qualquer forma. Para voltar, saia e entre com a outra
            conta.
          </p>
        </Question>

        <Question q="Como funcionam as dicas?">
          <p>
            Você começa com dez. Abaixo de dez, uma volta sozinha a cada quatro horas. Uma dica
            mostra um fantasma brilhante onde vai o próximo buddy; uma etapa paga continua
            revelada de graça quando você tenta de novo e nos seus outros aparelhos.
          </p>
          <p>
            Você também pode ver um vídeo curto para ganhar mais duas ou comprar um pacote na
            loja. Todo quebra-cabeça pode ser resolvido sem elas.
          </p>
        </Question>

        <Question q="Por que vejo anúncios entre os quebra-cabeças?">
          <p>
            Não há nenhum nos seus primeiros oito quebra-cabeças, e nunca no meio de um. Depois
            disso, um anúncio curto pode aparecer a cada dois quebra-cabeças resolvidos; é
            assim que o jogo continua gratuito. A assinatura <strong>No Ads</strong> da loja, ou
            os 30 dias sem anúncios do Starter Bundle, desligam esses anúncios.
          </p>
        </Question>

        <Question q="Como cancelo a assinatura No Ads?">
          <p>
            Na sua loja, não no jogo: no Android, Google Play › Pagamentos e assinaturas ›
            Assinaturas; no iOS, Ajustes › seu nome › Assinaturas. Ela continua ativa até o fim
            do mês já pago. Excluir o app ou a sua conta não cancela a assinatura.
          </p>
        </Question>

        <Question q="Paguei por algo e não recebi.">
          <p>
            Abra o jogo de novo com internet: compras não concluídas e uma assinatura ativa são
            recuperadas ao iniciar. Se ainda não chegou, escreva para nós com o recibo ou o
            número do pedido da loja e resolvemos. Reembolsos são feitos pela Apple e pelo
            Google, conforme as regras deles.
          </p>
        </Question>

        <Question q="Como mudo minha escolha de publicidade?">
          <p>
            <strong>Settings</strong> › <strong>Ad privacy choices</strong>. O botão aparece
            onde a lei exige, como na UE e no Reino Unido.
          </p>
        </Question>

        <Question q="Como excluo minha conta?">
          <p>
            <strong>Settings</strong> › <strong>Delete account</strong> (aparece depois que
            você entra em uma conta). Os detalhes estão em{" "}
            <Link href={localePath("pt", "/delete-account#balance-buddies")}>
              excluir sua conta e seus dados
            </Link>
            .
          </p>
        </Question>

        <Question q="O jogo funciona offline?">
          <p>
            Sim. Todo quebra-cabeça roda no seu celular sem conexão, e seu progresso é enviado
            quando você volta a ficar online. Anúncios, a loja e o login precisam de conexão.
          </p>
        </Question>
      </div>

      <p className="mt-8">
        <a href={mailto(mail.support, bb)}>Escreva para nós sobre o {bb}</a>
      </p>

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
