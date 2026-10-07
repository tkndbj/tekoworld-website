import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.pt.mail;
const label = gameTextFor("pt").labels;
const game = gemfire.name;

/**
 * Translation of delete-account/en.tsx. Button names are the game's own Portuguese labels,
 * so the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Excluir sua conta e seus dados",
  description: `Como excluir sua conta do ${game} e os dados guardados com ela.`,
  intro:
    "Você pode pedir que tudo o que temos sobre o seu reino seja apagado. Veja exatamente o que acontece.",
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          O jeito mais rápido é dentro do jogo: a aba <strong>Perfil</strong>, depois o cartão{" "}
          <strong>Conta</strong>, depois <strong>{label.deleteAccount}</strong>. Vale na hora.
        </p>
        <p className="mb-2">
          Se você não consegue mais abrir o jogo, escreva para{" "}
          <a href={mailto(mail.deleteAccount)}>{site.email}</a> e faremos isso por você em até
          30 dias.
        </p>
        <p>
          Apagar só o app <strong>não</strong> apaga os dados nos nossos servidores. Só remove
          a cópia daquele aparelho.
        </p>
      </Summary>

      <h2 id="in-app">1. Exclua de dentro do jogo</h2>
      <p>
        Esta é a exclusão de verdade, não um pedido de exclusão. Ninguém lê, ninguém precisa
        aprovar e não espera 30 dias.
      </p>
      <ol>
        <li>
          Abra o {game} e vá para a aba <strong>Perfil</strong>.
        </li>
        <li>
          Role até o cartão <strong>Conta</strong>.
        </li>
        <li>
          Toque em <strong>{label.deleteAccount}</strong>, o botão vermelho no fim desse cartão.
        </li>
        <li>
          Leia o que ele lista, toque em <strong>{label.deleteEverything}</strong> e confirme
          mais uma vez.
        </li>
      </ol>
      <p>
        Se você vinculou um login da Apple ou do Google, será preciso entrar mais uma vez antes,
        para sabermos que é mesmo você. Você precisa de conexão com a internet: se o jogo não
        conseguir chegar aos nossos servidores, ele avisa que nada foi excluído, porque não
        vamos dizer que fizemos uma exclusão que não conseguimos fazer.
      </p>

      <h2 id="request">2. Ou escreva para nós</h2>
      <p>
        Use este caminho se você já desinstalou o jogo, perdeu o aparelho ou não consegue chegar
        ao botão por qualquer outro motivo.
      </p>
      <p>
        As contas são anônimas, então não conseguimos encontrar você pelo nome ou e-mail, a
        menos que tenha vinculado um login. Se ainda consegue abrir o jogo, seu identificador de
        conta aparece no cartão <strong>Conta</strong> da aba <strong>Perfil</strong>. Copie-o
        ou tire um print. Se você vinculou uma conta da Apple ou do Google, pode pular isso e
        simplesmente escrever desse endereço de e-mail.
      </p>
      <p>
        Escreva para <a href={mailto(mail.deleteAccount)}>{site.email}</a> de qualquer
        endereço, com o assunto <strong>{mail.deleteAccount}</strong>, e inclua seu
        identificador de conta ou o endereço do login vinculado.
      </p>
      <p>
        Vamos confirmar o recebimento, verificar que a conta é sua e concluir a exclusão em até{" "}
        <strong>30 dias</strong>. Avisaremos quando estiver feito.
      </p>

      <h2 id="what-goes">3. O que é excluído</h2>
      <ul>
        <li>
          Sua conta anônima e qualquer login vinculado da Apple ou do Google. A autorização de
          Iniciar sessão com a Apple é revogada junto à Apple.
        </li>
        <li>
          Seu progresso salvo: cercos terminados e estrelas, suas melhores ondas, moedas, gemas,
          corações, dicas, torres, a mochila, companheiros e o seu reino inteiro.
        </li>
        <li>Seu cartão público do reino e todas as linhas que você ocupava no ranking.</li>
        <li>
          A reserva do seu nome de guardião, que fica livre para outra pessoa usar. A única
          exceção é um nome recusado pela moderação: esse continua bloqueado para que ninguém
          possa usá-lo de novo.
        </li>
        <li>Denúncias que outros jogadores fizeram sobre o seu nome.</li>
      </ul>
      <p>Isso é irreversível. Não temos como restaurar um reino excluído.</p>

      <h2 id="what-stays">4. O que precisamos manter</h2>
      <p>
        Três coisas sobrevivem à exclusão, e preferimos dizer isso claramente a surpreender
        você depois:
      </p>
      <ul>
        <li>
          <strong>Registros de compra</strong>: o identificador da transação na loja e o que foi
          comprado, mantidos pelo tempo que a legislação fiscal e contábil exigir (geralmente
          sete anos) e para que o mesmo recibo não seja resgatado duas vezes. Não temos
          permissão para destruí-los a pedido. Depois da exclusão, eles não ficam mais ligados a
          nenhum progresso de jogo.
        </li>
        <li>
          <strong>Denúncias que você fez</strong> sobre nomes de outros jogadores, para que se
          possa demonstrar que esses nomes foram analisados.
        </li>
        <li>
          <strong>Registros do próprio pedido de exclusão</strong>, para podermos demonstrar
          que o atendemos.
        </li>
      </ul>
      <p>
        A Apple e o Google mantêm seus próprios registros das suas compras, independentemente
        de nós. Se você quiser que sejam removidos, terá de pedir a eles.
      </p>

      <h2 id="less">Se você quer menos que a exclusão completa</h2>
      <p>
        Talvez você não precise apagar tudo. Cada uma destas opções vale na hora, e nenhuma
        mexe no resto da sua conta:
      </p>
      <ul>
        <li>
          <strong>Sair do ranking público</strong>: a aba <strong>Perfil</strong>, depois{" "}
          <strong>{label.hideFromBoards}</strong> na seção do ranking. Seu cartão publicado é
          retirado e seu nome de guardião deixa de ficar visível para qualquer pessoa. Seu
          progresso, suas compras e seu reino continuam intactos.
        </li>
        <li>
          <strong>Retirar o consentimento de publicidade</strong>:{" "}
          <strong>Configurações</strong> (o ícone de engrenagem), depois{" "}
          <strong>{label.privacyChoices}</strong>.
        </li>
        <li>
          <strong>Mudar seu nome de guardião</strong>: a aba <strong>Perfil</strong>, depois
          toque no seu nome. O nome antigo fica livre e o ranking mostra o novo.
        </li>
      </ul>
      <p>
        Se preferir que façamos uma dessas coisas por você, escreva para{" "}
        <a href={mailto(mail.deleteSome)}>{site.email}</a> e diga qual. Veja a{" "}
        <Link href={localePath("pt", "/privacy")}>política de privacidade</Link> para saber o
        que cada uma cobre.
      </p>
    </>
  ),
};

export default doc;
