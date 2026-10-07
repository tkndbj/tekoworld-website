import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.pt.mail;
const game = gemfire.name;

/** Translation of terms/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Termos de Serviço",
  description: `As regras para jogar ${game}.`,
  intro: `Estes são os termos que você aceita ao jogar ${game}.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Jogue, não trapaceie e não finja ser outra pessoa no ranking. Tudo o que você compra
          é uma licença para usar dentro do jogo. Moedas e gemas não são dinheiro e não podem
          ser trocadas por dinheiro.
        </p>
        <p>
          Reembolsos são feitos pela Apple e pelo Google, não por nós. Se algo der errado,
          escreva para nós antes de deixar uma avaliação de uma estrela. Preferimos resolver.
        </p>
      </Summary>

      <h2 id="agreement">1. O acordo</h2>
      <p>
        Estes termos são entre você e {site.entity}, operando como {site.company}, com
        endereço em {site.address} (&ldquo;nós&rdquo;). Ao baixar ou jogar {game}, você os
        aceita. Se não os aceitar, por favor não jogue.
      </p>
      <p>
        Sua loja de apps também tem termos próprios, e quando eles se aplicam à sua compra
        naquela loja, valem junto com estes.
      </p>
      <p>
        Estes termos também são publicados em outros idiomas. São traduções deste texto em
        inglês, e se alguma for diferente dele, vale o texto em inglês.
      </p>

      <h2 id="licence">2. Sua licença</h2>
      <p>
        Concedemos a você uma licença pessoal, não exclusiva, intransferível e revogável para
        instalar e jogar {game} em aparelhos que você controla, para seu próprio
        entretenimento. Continuamos donos do jogo, de suas artes, de sua música, de suas fases
        e de seu código. Algumas artes e áudios são licenciados de terceiros, que mantêm seus
        direitos sobre eles.
      </p>
      <p>Você concorda em não:</p>
      <ul>
        <li>
          modificar, fazer engenharia reversa ou descompilar o jogo, exceto quando a lei
          permitir expressamente;
        </li>
        <li>
          usar trapaças, automação, clientes modificados ou editores de memória, nem
          interferir de outra forma na economia do jogo;
        </li>
        <li>
          vender, alugar ou transferir sua conta, ou a moeda e os itens nela, para outra pessoa;
        </li>
        <li>atacar, sobrecarregar ou sondar nossos servidores.</li>
      </ul>

      <h2 id="account">3. Sua conta</h2>
      <p>
        Uma conta anônima é criada para você na primeira abertura, para que seu progresso possa
        ser salvo. Você pode vinculá-la a uma conta da Apple ou do Google para que ela
        sobreviva à perda do seu aparelho.
      </p>
      <p>
        Você é responsável por manter seguro qualquer login vinculado. Se você perder o acesso
        a uma conta anônima não vinculada, por exemplo ao apagar o app sem vincular, o progresso
        pode não ser recuperável, e talvez não consigamos identificá-lo como seu.
      </p>
      <p>
        Um login que já está ligado a outro reino não pode ser fundido com o seu, porque a
        moeda foi ganha e gasta separadamente em cada um. O jogo avisa você antes de substituir
        qualquer coisa.
      </p>

      <h2 id="virtual-items">4. Moedas, gemas, corações e itens</h2>
      <p>
        Tudo o que você coleta ou compra dentro do jogo, incluindo moedas, gemas, corações,
        dicas, torres e suas melhorias, a mochila, companheiros, peças do reino, terras e
        frascos de corações maiores, é uma{" "}
        <strong>licença limitada para usar dentro do {game}</strong>. Não é dinheiro, nem
        título financeiro, nem propriedade. Especificamente:
      </p>
      <ul>
        <li>não tem valor fora do jogo e não pode ser trocado por dinheiro;</li>
        <li>não pode ser transferido, vendido ou dado a outro jogador;</li>
        <li>
          pode ser rebalanceado, reajustado ou descontinuado conforme o jogo é desenvolvido, e
          preços e recompensas podem mudar;
        </li>
        <li>
          não sobrevive ao encerramento da sua conta nem à descontinuação do jogo, exceto
          quando a lei disser o contrário.
        </li>
      </ul>
      <p>
        Recompensas de anúncios, baús diários, da roleta e de sequências são concedidas pelos
        nossos servidores. Quando uma recompensa não puder ser verificada, por exemplo porque um
        arquivo salvo foi modificado, ela pode ser recusada ou revertida.
      </p>

      <h2 id="purchases">5. Compras e reembolsos</h2>
      <p>
        As compras são feitas pela App Store da Apple ou pelo Google Play, e são essas lojas
        que recebem o pagamento. Nunca vemos os dados do seu cartão. Os preços mostrados no jogo
        são definidos pela loja para o seu país.
      </p>
      <p>
        <strong>Reembolsos são feitos pela loja</strong>, segundo a política dela. Não podemos
        emitir um reembolso em nome dela. Se uma compra foi cobrada e você não recebeu o que
        pagou, escreva para nós primeiro. Normalmente é algo que conseguimos resolver
        diretamente, e mais rápido.
      </p>
      <p>
        Se você é consumidor na UE ou no Reino Unido, normalmente tem direito de desistir de
        uma compra digital em 14 dias, mas esse direito se perde quando a entrega começa com
        seu consentimento, o que acontece no momento em que a moeda chega ao seu saldo. Isso
        não afeta seus direitos legais quando um produto apresenta defeito.
      </p>
      <p>
        Se uma compra for reembolsada ou estornada depois que a moeda foi concedida, podemos
        reduzir seu saldo no valor correspondente, e um frasco de corações reembolsado faz sua
        capacidade de corações voltar ao que era.
      </p>

      <h2 id="boards">6. Nomes, o ranking e visitas</h2>
      <p>
        Se você escolher um nome de guardião e deixar o ranking ativado, esse nome, seu avatar,
        seu nível, a pontuação do seu reino e sua liga ficam visíveis para outros jogadores, e
        outros jogadores podem visitar seu reino para vê-lo. Escolha pensando nisso.
      </p>
      <p>Podemos recusar, alterar ou remover um nome que:</p>
      <ul>
        <li>se passe por outra pessoa, por uma empresa ou por nós;</li>
        <li>seja ofensivo ou possa ser entendido como assédio;</li>
        <li>contenha caracteres que estraguem a exibição das entradas de outros jogadores.</li>
      </ul>
      <p>
        Um nome recusado não é tirado de você: você o mantém dentro do seu próprio jogo e
        aparece no ranking com um nome gerado. Outros jogadores podem denunciar um nome que
        acreditem violar estas regras, e analisamos todas as denúncias. Você pode sair
        totalmente do ranking pela aba Perfil.
      </p>

      <h2 id="availability">7. O jogo pode mudar</h2>
      <p>
        Adicionamos capítulos, reajustamos dificuldade e recompensas, corrigimos defeitos e às
        vezes removemos coisas que não estão funcionando. Podemos suspender o serviço para
        manutenção e, um dia, podemos descontinuar o jogo; nesse caso avisaremos com
        antecedência razoável pelo jogo ou por este site, sempre que possível.
      </p>
      <p>
        Não prometemos que o jogo funcione sem interrupções ou erros, e alguns recursos, como o
        ranking, a loja e os vídeos com recompensa, precisam de conexão com a internet.
      </p>

      <h2 id="suspension">8. Suspensão</h2>
      <p>
        Podemos suspender ou encerrar uma conta que viole estes termos, em especial uma usada
        para trapacear, fraudar a economia ou assediar outros jogadores. Quando for
        proporcional, avisaremos antes. Você pode parar de jogar a qualquer momento e excluir
        seus dados como descrito na{" "}
        <Link href={localePath("pt", "/delete-account")}>página de exclusão</Link>.
      </p>

      <h2 id="liability">9. Isenções e responsabilidade</h2>
      <p>
        O jogo é fornecido &ldquo;no estado em que se encontra&rdquo;. Na máxima medida
        permitida por lei, excluímos garantias implícitas de comercialização e de adequação a
        uma finalidade específica.
      </p>
      <p>
        Nada aqui limita a responsabilidade por morte ou lesão causada por negligência, por
        fraude ou por qualquer outra coisa que não possa ser limitada por lei. Ressalvado isso,
        nossa responsabilidade total perante você fica limitada ao maior destes valores: o que
        você nos pagou nos doze meses anteriores à reclamação, ou 50 €.
      </p>
      <p>
        <strong>
          Se você é consumidor, nada nestes termos afeta seus direitos legais.
        </strong>
      </p>

      <h2 id="law">10. Lei aplicável</h2>
      <p>
        Estes termos são regidos pelas leis da República de Chipre. Se você é consumidor,
        também mantém a proteção das leis obrigatórias do país onde mora, e pode entrar com
        ações lá.
      </p>

      <h2 id="apple">11. Uma nota exigida pela Apple</h2>
      <p>
        Este acordo é entre você e nós, não com a Apple, e a Apple não é responsável pelo jogo
        nem pelo seu conteúdo. A Apple não tem obrigação de prestar suporte a ele. Se o app não
        cumprir alguma garantia aplicável, você pode notificar a Apple, e a Apple reembolsará o
        preço de compra; na máxima medida permitida por lei, a Apple não tem nenhuma outra
        obrigação de garantia. A Apple e suas subsidiárias são terceiras beneficiárias destes
        termos e podem fazê-los valer contra você.
      </p>

      <h2 id="contact">12. Contato</h2>
      <p>
        {site.entity}, operando como {site.company}
        <br />
        {site.address}
        <br />
        <a href={mailto(mail.terms)}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
