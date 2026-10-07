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

/** Translation of privacy/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Política de Privacidade",
  description: `Como a ${site.company} e o ${game} tratam seus dados, em palavras simples.`,
  intro: `Aqui explicamos o que o ${game} e este site coletam sobre você, por quê, e o que você pode fazer a respeito.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Você pode jogar o {game} inteiro sem nos dar seu nome, seu e-mail ou qualquer outra
          informação sobre você. Uma conta anônima é criada para que seu progresso possa ser
          salvo e restaurado. Ela identifica um arquivo de jogo salvo, não uma pessoa.
        </p>
        <p className="mb-2">
          Só mostramos anúncios quando você escolhe assistir a um, e eles são fornecidos por
          terceiros que podem usar um identificador de publicidade. Na UE e no Reino Unido você
          é consultado antes, e pode mudar sua resposta a qualquer momento na tela de
          configurações.
        </p>
        <p>
          Não vendemos seus dados. Não temos interesse em saber quem você é, só em saber se o
          jogo funciona.
        </p>
      </Summary>

      <h2 id="who-we-are">Quem somos</h2>
      <p>
        O {game} é publicado por {site.entity}, operando como {site.company}, com endereço em{" "}
        {site.address}, o mesmo editor indicado na página da loja. Para os fins do Regulamento
        Geral sobre a Proteção de Dados da UE e do Reino Unido, somos o controlador das
        informações descritas aqui. Você pode falar conosco em{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Esta política cobre o {game} no Android e no iOS e este site. Se publicarmos outro
        jogo, ele terá sua própria seção aqui.
      </p>

      <h2 id="what-we-collect">O que coletamos e por quê</h2>
      <p>
        Tentamos ser específicos em vez de parecer exaustivos. Se algo não está nesta tabela, o
        jogo não coleta.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>O quê</th>
              <th>Por quê</th>
              <th>Quando</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Um identificador de conta anônimo</strong>, gerado pelo Firebase
                Authentication
              </td>
              <td>
                Para que seu progresso seja salvo nos nossos servidores e restaurado num
                aparelho novo. É uma sequência aleatória. Não está ligado ao seu nome, e-mail ou
                número de telefone, a menos que você escolha vincular uma conta de login.
              </td>
              <td>Primeira abertura</td>
            </tr>
            <tr>
              <td>
                <strong>Seu progresso no jogo</strong>: quais cercos você terminou e com quantas
                estrelas, sua melhor onda na Vigília Infinita, suas moedas, gemas, corações e
                dicas, as torres, a mochila e os companheiros que você tem, o layout do seu reino
                e as terras em que ele está, sua sequência diária e suas configurações
              </td>
              <td>
                Para que o jogo continue de onde você parou e o mesmo progresso apareça nos seus
                outros aparelhos.
              </td>
              <td>Enquanto você joga</td>
            </tr>
            <tr>
              <td>
                <strong>Um cartão público do reino</strong>: o nome de guardião que você
                escolheu, o companheiro que você usa como avatar, seu nível de guardião, a
                pontuação e as estrelas do seu reino e a sua liga
              </td>
              <td>
                Para que outros jogadores vejam você no ranking e visitem seu reino. É a única
                informação que outros jogadores podem ver. Você pode desativá-lo a qualquer
                momento na aba Perfil, o que retira seu cartão.
              </td>
              <td>Enquanto o ranking estiver ativado</td>
            </tr>
            <tr>
              <td>
                <strong>O nome de guardião que você escolher</strong>, guardado como reserva para
                que dois jogadores não fiquem com o mesmo
              </td>
              <td>
                Para manter os nomes únicos. Você escolhe este nome; não use seu nome verdadeiro
                se preferir que ele não seja público.
              </td>
              <td>Se você definir um nome</td>
            </tr>
            <tr>
              <td>
                <strong>Um login vinculado</strong>: um identificador da Apple ou do Google, e o
                que esse provedor nos repassar, o que pode incluir seu e-mail
              </td>
              <td>
                Só se você escolher vincular uma conta para que seu progresso sobreviva à perda
                do aparelho. Nunca recebemos sua senha.
              </td>
              <td>Só se você vincular</td>
            </tr>
            <tr>
              <td>
                <strong>Registros de compra</strong>: o identificador da transação na loja e o
                que foi comprado
              </td>
              <td>
                Para confirmar uma compra com a Apple ou o Google e entregar o que você pagou,
                uma única vez. <strong>Nunca vemos os dados do seu cartão</strong>. O pagamento
                acontece dentro da loja, não dentro do jogo.
              </td>
              <td>Se você comprar algo</td>
            </tr>
            <tr>
              <td>
                <strong>Identificadores de publicidade e dados relacionados</strong>, tratados
                pelos nossos parceiros de publicidade
              </td>
              <td>
                Para mostrar os anúncios que você escolhe assistir e para pagar pelo jogo ser
                grátis. Veja <a href="#advertising">Publicidade</a> abaixo.
              </td>
              <td>Quando você assiste a um anúncio</td>
            </tr>
            <tr>
              <td>
                <strong>Análise de jogo</strong>: eventos como um cerco começado, vencido ou
                perdido, uma torre comprada, um baú aberto ou uma compra concluída, com um
                identificador do aparelho
              </td>
              <td>
                Para ver onde os jogadores travam e quais partes do jogo não estão funcionando.
                Feito pelo Google Analytics para Firebase. Veja{" "}
                <a href="#analytics">Análise e atribuição</a> abaixo.
              </td>
              <td>Enquanto você joga, com seu consentimento quando exigido</td>
            </tr>
            <tr>
              <td>
                <strong>Atribuição de instalação</strong>: qual anúncio ou link, se houver,
                levou você a instalar o jogo, e a confirmação das compras que você faz
              </td>
              <td>
                Para saber em qual publicidade nossa vale a pena investir. Feito pela AppsFlyer.
              </td>
              <td>Uma vez, depois que o consentimento é definido</td>
            </tr>
            <tr>
              <td>
                <strong>Uma denúncia que você fizer</strong> sobre o nome de guardião de outro
                jogador
              </td>
              <td>
                Para podermos analisar o nome e, se necessário, substituí-lo. A denúncia registra
                qual conta a fez, para que denúncias não possam ser forjadas.
              </td>
              <td>Só se você denunciar um nome</td>
            </tr>
            <tr>
              <td>
                <strong>Informações técnicas básicas</strong>: modelo do aparelho, versão do
                sistema operacional, idioma e diagnósticos de erro
              </td>
              <td>
                Para descobrir por que algo travou ou uma tela foi desenhada errado num aparelho
                que não temos.
              </td>
              <td>Quando necessário</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>O que deliberadamente não coletamos</h3>
      <ul>
        <li>Seu nome, a menos que você o digite como nome de guardião.</li>
        <li>Seu e-mail, a menos que você nos escreva ou vincule uma conta de login.</li>
        <li>Seus contatos, fotos, microfone, câmera ou localização precisa.</li>
        <li>Os dados do seu cartão de pagamento. Eles nunca chegam até nós.</li>
        <li>Mensagens. Não há chat nem forma de os jogadores entrarem em contato.</li>
      </ul>

      <h2 id="legal-bases">Nossas bases legais (Reino Unido e UE)</h2>
      <ul>
        <li>
          <strong>Execução de contrato</strong>: salvar e restaurar seu progresso e entregar
          uma compra. Sem isso o jogo não funciona.
        </li>
        <li>
          <strong>Consentimento</strong>: publicidade personalizada, análise de jogo e
          atribuição de instalação quando a lei exige consentimento, e aparecer no ranking
          público. Tudo isso é opcional e pode ser retirado.
        </li>
        <li>
          <strong>Interesse legítimo</strong>: manter o jogo funcionando, diagnosticar
          travamentos, analisar nomes denunciados e prevenir fraudes e abusos da economia do
          jogo.
        </li>
        <li>
          <strong>Obrigação legal</strong>: manter registros de compras para fins fiscais e
          contábeis.
        </li>
      </ul>

      <h2 id="advertising">Publicidade</h2>
      <p>
        O jogo é grátis, e os anúncios são o que paga por ele. Os anúncios são opcionais no
        sentido que importa: não há anúncios entre as fases nem banners. Cada anúncio do{" "}
        {game} é um que você escolhe assistir em troca de corações, moedas ou uma dica, e cada
        tipo tem um limite diário.
      </p>
      <p>
        Os anúncios são entregues pelo <strong>Unity LevelPlay</strong> (ironSource) como
        plataforma de mediação, e pelas redes de publicidade com que ele trabalha, que hoje
        incluem <strong>Unity Ads</strong> e <strong>Google AdMob</strong>. Esses parceiros são
        controladores independentes dos dados que coletam e têm suas próprias políticas:
      </p>
      <ul>
        <li>
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">
            Unity: política de privacidade para jogadores e usuários de apps
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            Google: como o Google usa informações de sites ou apps que usam nossos serviços
          </a>
        </li>
      </ul>

      <h3>Sua escolha, e como mudá-la</h3>
      <p>
        Se você está no Espaço Econômico Europeu ou no Reino Unido, é consultado antes de
        qualquer publicidade personalizada, por meio de um formulário de consentimento
        certificado pelo Google. Se recusar, você continua vendo anúncios e recebendo as
        recompensas por assisti-los. Eles só não serão baseados num perfil seu.
      </p>
      <p>
        Você pode mudar sua resposta a qualquer momento: abra <strong>Configurações</strong> (o
        ícone de engrenagem na tela Início ou Perfil) e escolha{" "}
        <strong>{label.privacyChoices}</strong>.
      </p>
      <p>
        No iOS, você é consultado separadamente sobre se o app pode usar o identificador de
        publicidade do aparelho. Essa resposta pertence ao sistema operacional e pode ser mudada
        em <strong>Ajustes do iOS › Privacidade e Segurança › Rastreamento</strong>.
      </p>

      <h2 id="analytics">Análise e atribuição</h2>
      <p>
        Usamos o <strong>Google Analytics para Firebase</strong> para registrar eventos de jogo,
        como um cerco começado ou um baú aberto, para vermos onde os jogadores têm dificuldade e
        o que não está funcionando. Quando o consentimento é exigido, esses eventos só são
        registrados depois que você o der.
      </p>
      <p>
        Usamos a <strong>AppsFlyer</strong> para saber qual anúncio ou link, se houver, levou a
        uma instalação, e para confirmar compras. A AppsFlyer só é iniciada depois que sua
        escolha de consentimento é conhecida, e se você não concordou com a personalização ela
        funciona em modo anonimizado. A política dela está em{" "}
        <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">
          appsflyer.com
        </a>
        .
      </p>

      <h2 id="sharing">Com quem seus dados são compartilhados</h2>
      <p>Usamos poucos fornecedores, cada um para uma tarefa:</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> (Authentication, Cloud Firestore, Cloud Functions,
          Analytics): a conta anônima, o progresso salvo e o ranking. Os dados são armazenados
          na União Europeia.
        </li>
        <li>
          <strong>Apple e Google</strong>: distribuição do app, login se você escolher,
          pagamentos e verificação de compras.
        </li>
        <li>
          <strong>Unity LevelPlay e suas redes de publicidade</strong>: publicidade, como
          descrito acima.
        </li>
        <li>
          <strong>AppsFlyer</strong>: atribuição de instalação, como descrito acima.
        </li>
      </ul>
      <p>
        Não vendemos informações pessoais nem as compartilhamos para publicidade comportamental
        entre contextos além do que os parceiros de publicidade acima fazem com o seu
        consentimento.
      </p>

      <h2 id="transfers">Transferências internacionais</h2>
      <p>
        Os dados de jogo salvos ficam na União Europeia. Alguns dos nossos fornecedores têm sede
        nos Estados Unidos e podem tratar dados lá, com base nas cláusulas contratuais padrão da
        Comissão Europeia, no Quadro de Privacidade de Dados UE-EUA ou em garantia equivalente.
      </p>

      <h2 id="retention">Por quanto tempo guardamos</h2>
      <ul>
        <li>
          <strong>Progresso salvo</strong>: enquanto a conta estiver em uso, e por até 24 meses
          depois que ela ficar inativa, após o que pode ser excluído.
        </li>
        <li>
          <strong>Seu cartão público do reino</strong>: até você escondê-lo ou excluir seus
          dados, o que acontecer primeiro. O ranking é refeito toda noite, então um cartão
          escondido sai dele em até um dia.
        </li>
        <li>
          <strong>Registros de compra</strong>: pelo tempo que a legislação fiscal e contábil
          exigir, geralmente sete anos, e pelo tempo necessário para impedir que um recibo seja
          resgatado duas vezes. Eles sobrevivem à exclusão dos seus dados de jogo, porque não
          temos permissão para destruí-los.
        </li>
        <li>
          <strong>Denúncias que você fizer</strong> sobre nomes de outros jogadores: enquanto a
          conta denunciada existir, para que se possa demonstrar que a análise aconteceu.
        </li>
      </ul>

      <h2 id="rights">Seus direitos</h2>
      <p>
        Se o RGPD da UE ou do Reino Unido se aplica a você, você tem direito de pedir uma cópia
        dos seus dados, de corrigi-los, de excluí-los, de restringir ou se opor ao modo como os
        usamos e de retirar um consentimento dado. Direitos parecidos existem na Lei de
        Privacidade do Consumidor da Califórnia e em outras leis.
      </p>
      <p>
        Os caminhos mais rápidos estão no próprio jogo: a opção de sair do ranking fica na aba
        Perfil, a escolha de publicidade nas Configurações e a exclusão da conta na aba Perfil.
        Para qualquer outra coisa, ou para excluir tudo, veja{" "}
        <Link href={localePath("pt", "/delete-account")}>como excluir seus dados</Link> ou
        escreva para <a href={mailto(mail.privacy)}>{site.email}</a>. Respondemos em até 30
        dias.
      </p>
      <p>
        Como as contas são anônimas por padrão, podemos precisar que você prove qual conta é a
        sua antes de atender um pedido, geralmente enviando o pedido a partir do e-mail de um
        login vinculado ou informando o identificador de conta mostrado no jogo.
      </p>
      <p>
        Se você acha que tratamos mal seus dados, pode reclamar à autoridade de proteção de
        dados do seu país.
      </p>

      <h2 id="children">Crianças</h2>
      <p>
        O {game} é um jogo para o público em geral. Não é direcionado a menores de 13 anos e
        não está registrado como app direcionado a crianças junto aos nossos parceiros de
        publicidade. Não coletamos intencionalmente informações pessoais de menores de 13 anos.
        Se você acredita que uma criança nos deu informações, escreva para{" "}
        <a href={mailto(mail.child)}>{site.email}</a> e vamos excluí-las.
      </p>

      <h2 id="this-website">Este site</h2>
      <p>
        Este site é estático. Ele não define cookies, não usa análise e não rastreia você. A
        única coisa que ele sabe sobre você é o que seu navegador informa ao nosso provedor de
        hospedagem para enviar a página. Se você escolher um idioma, ou fechar a sugestão de um,
        seu navegador se lembra disso enquanto a aba estiver aberta; fica no seu aparelho e
        nunca é enviado para nós.
      </p>

      <h2 id="changes">Alterações</h2>
      <p>
        Se mudarmos esta política, atualizaremos a data no topo, e em mudanças importantes
        avisaremos no jogo antes que entrem em vigor.
      </p>
      <p>
        Esta política também é publicada em outros idiomas. São traduções deste texto em inglês,
        e se alguma for diferente dele, vale o texto em inglês.
      </p>

      <h2 id="contact">Contato</h2>
      <p>
        {site.entity}, operando como {site.company}
        <br />
        {site.address}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
