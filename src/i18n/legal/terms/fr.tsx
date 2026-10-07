import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.fr.mail;
const game = gemfire.name;

/** Translation of terms/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Conditions d'utilisation",
  description: `Les règles pour jouer à ${game}.`,
  intro: `Voici les conditions que tu acceptes en jouant à ${game}.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Joue, ne triche pas, et ne te fais pas passer pour quelqu&rsquo;un d&rsquo;autre au
          classement. Tout ce que tu achètes est une licence d&rsquo;utilisation dans le jeu.
          Les pièces et les gemmes ne sont pas de l&rsquo;argent et ne peuvent pas être
          converties en argent.
        </p>
        <p>
          Les remboursements sont gérés par Apple et Google, pas par nous. Si quelque chose ne
          va pas, écris-nous avant de laisser un avis à une étoile. Nous préférons régler le
          problème.
        </p>
      </Summary>

      <h2 id="agreement">1. L&rsquo;accord</h2>
      <p>
        Ces conditions forment un accord entre toi et {site.entity}, sous le nom commercial{" "}
        {site.company}, {site.address} (&laquo;&nbsp;nous&nbsp;&raquo;). En téléchargeant ou en
        jouant à {game}, tu les acceptes. Si tu ne les acceptes pas, merci de ne pas jouer.
      </p>
      <p>
        Ton store d&rsquo;applications a aussi ses propres conditions, et lorsqu&rsquo;elles
        s&rsquo;appliquent à un achat fait sur ce store, elles s&rsquo;appliquent en plus de
        celles-ci.
      </p>
      <p>
        Ces conditions sont aussi publiées dans d&rsquo;autres langues. Ce sont des traductions
        de ce texte anglais, et si l&rsquo;une d&rsquo;elles en diffère, c&rsquo;est le texte
        anglais qui s&rsquo;applique.
      </p>

      <h2 id="licence">2. Ta licence</h2>
      <p>
        Nous t&rsquo;accordons une licence personnelle, non exclusive, non transférable et
        révocable pour installer et jouer à {game} sur des appareils que tu contrôles, pour
        ton propre divertissement. Nous restons propriétaires du jeu, de ses illustrations, de
        sa musique, de ses niveaux et de son code. Certaines illustrations et certains sons
        sont sous licence de tiers, qui conservent leurs droits dessus.
      </p>
      <p>Tu t&rsquo;engages à ne pas :</p>
      <ul>
        <li>
          modifier, rétro-concevoir ou décompiler le jeu, sauf lorsque la loi
          l&rsquo;autorise expressément ;
        </li>
        <li>
          utiliser de triches, d&rsquo;automatisations, de clients modifiés ou
          d&rsquo;éditeurs de mémoire, ni perturber d&rsquo;une autre façon l&rsquo;économie
          du jeu ;
        </li>
        <li>
          vendre, louer ou transférer ton compte, ni la monnaie et les objets qu&rsquo;il
          contient, à qui que ce soit ;
        </li>
        <li>attaquer, surcharger ou sonder nos serveurs.</li>
      </ul>

      <h2 id="account">3. Ton compte</h2>
      <p>
        Un compte anonyme est créé pour toi au premier lancement afin que ta progression puisse
        être sauvegardée. Tu peux l&rsquo;associer à un compte Apple ou Google pour qu&rsquo;il
        survive à la perte de ton appareil.
      </p>
      <p>
        Tu es responsable de la sécurité de toute connexion associée. Si tu perds l&rsquo;accès
        à un compte anonyme non associé, en supprimant l&rsquo;app sans l&rsquo;avoir associé
        par exemple, la progression peut être irrécupérable, et nous pourrions ne pas pouvoir
        l&rsquo;identifier comme la tienne.
      </p>
      <p>
        Une connexion déjà liée à un autre royaume ne peut pas être fusionnée avec le tien, car
        la monnaie a été gagnée et dépensée séparément dans chacun. Le jeu te prévient avant de
        remplacer quoi que ce soit.
      </p>

      <h2 id="virtual-items">4. Pièces, gemmes, cœurs et objets</h2>
      <p>
        Tout ce que tu récupères ou achètes dans le jeu, y compris les pièces, gemmes, cœurs,
        indices, tourelles et leurs améliorations, le sac, les compagnons, les éléments du
        royaume, les terres et les grandes fioles de cœurs, est une{" "}
        <strong>licence limitée d&rsquo;utilisation dans {game}</strong>. Ce n&rsquo;est ni de
        l&rsquo;argent, ni un titre financier, ni un bien. Plus précisément :
      </p>
      <ul>
        <li>cela n&rsquo;a aucune valeur hors du jeu et ne peut pas être échangé contre de l&rsquo;argent ;</li>
        <li>cela ne peut pas être transféré, vendu ou donné à un autre joueur ;</li>
        <li>
          cela peut être rééquilibré, réajusté ou retiré au fil du développement du jeu, et les
          prix et récompenses peuvent changer ;
        </li>
        <li>
          cela ne survit pas à la fermeture de ton compte ni à l&rsquo;arrêt du jeu, sauf
          disposition légale contraire.
        </li>
      </ul>
      <p>
        Les récompenses des publicités, des coffres quotidiens, de la roue et des séries sont
        accordées par nos serveurs. Lorsqu&rsquo;une récompense ne peut pas être vérifiée, par
        exemple parce qu&rsquo;une sauvegarde a été modifiée, elle peut être refusée ou
        annulée.
      </p>

      <h2 id="purchases">5. Achats et remboursements</h2>
      <p>
        Les achats se font via l&rsquo;App Store d&rsquo;Apple ou Google Play, et ce sont ces
        stores qui encaissent le paiement. Nous ne voyons jamais les données de ta carte. Les
        prix affichés dans le jeu sont fixés par le store pour ton pays.
      </p>
      <p>
        <strong>Les remboursements sont gérés par le store</strong>, selon sa propre politique.
        Nous ne pouvons pas rembourser à sa place. Si un achat a été débité et que tu n&rsquo;as
        pas reçu ce que tu as payé, écris-nous d&rsquo;abord. C&rsquo;est en général quelque
        chose que nous pouvons régler directement, et plus vite.
      </p>
      <p>
        Si tu es un consommateur dans l&rsquo;UE ou au Royaume-Uni, tu disposes normalement
        d&rsquo;un droit de rétractation de 14 jours pour un achat numérique, mais ce droit est
        perdu dès que la fourniture commence avec ton accord, ce qui est le cas au moment où la
        monnaie arrive sur ton solde. Cela n&rsquo;affecte pas tes droits légaux lorsqu&rsquo;un
        produit est défectueux.
      </p>
      <p>
        Si un achat est remboursé ou fait l&rsquo;objet d&rsquo;une rétrofacturation après
        l&rsquo;octroi de la monnaie, nous pouvons réduire ton solde du montant correspondant,
        et une fiole de cœurs remboursée ramène ta capacité de cœurs à ce qu&rsquo;elle était.
      </p>

      <h2 id="boards">6. Les noms, le classement et les visites</h2>
      <p>
        Si tu choisis un nom de gardien et laisses le classement activé, ce nom, ton avatar, ton
        niveau, le score de ton royaume et ta ligue sont visibles par les autres joueurs, et
        d&rsquo;autres joueurs peuvent visiter ton royaume pour le voir. Choisis en
        conséquence.
      </p>
      <p>Nous pouvons refuser, modifier ou retirer un nom qui :</p>
      <ul>
        <li>usurpe l&rsquo;identité d&rsquo;une autre personne, d&rsquo;une entreprise ou la nôtre ;</li>
        <li>est offensant, ou risque d&rsquo;être perçu comme du harcèlement ;</li>
        <li>contient des caractères qui cassent l&rsquo;affichage des entrées des autres joueurs.</li>
      </ul>
      <p>
        Un nom refusé ne t&rsquo;est pas retiré : tu le gardes dans ton propre jeu et tu
        apparais au classement sous un nom généré. Les autres joueurs peuvent signaler un nom
        qu&rsquo;ils estiment contraire à ces règles, et nous examinons chaque signalement. Tu
        peux quitter entièrement le classement depuis l&rsquo;onglet Profil.
      </p>

      <h2 id="availability">7. Le jeu peut changer</h2>
      <p>
        Nous ajoutons des chapitres, réajustons la difficulté et les récompenses, corrigeons des
        défauts et retirons parfois ce qui ne fonctionne pas. Nous pouvons suspendre le service
        pour maintenance, et nous pourrions un jour arrêter le jeu ; dans ce cas, nous
        préviendrons dans un délai raisonnable via le jeu ou ce site lorsque c&rsquo;est
        possible.
      </p>
      <p>
        Nous ne promettons pas que le jeu sera ininterrompu ou sans erreur, et certaines
        fonctions, dont le classement, la boutique et les vidéos récompensées, ont besoin
        d&rsquo;une connexion internet.
      </p>

      <h2 id="suspension">8. Suspension</h2>
      <p>
        Nous pouvons suspendre ou fermer un compte qui enfreint ces conditions, en particulier
        un compte utilisé pour tricher, frauder l&rsquo;économie ou harceler d&rsquo;autres
        joueurs. Lorsque c&rsquo;est proportionné, nous préviendrons d&rsquo;abord. Tu peux
        arrêter de jouer à tout moment et supprimer tes données comme expliqué sur la{" "}
        <Link href={localePath("fr", "/delete-account")}>page de suppression</Link>.
      </p>

      <h2 id="liability">9. Exclusions et responsabilité</h2>
      <p>
        Le jeu est fourni &laquo;&nbsp;en l&rsquo;état&nbsp;&raquo;. Dans toute la mesure
        permise par la loi, nous excluons les garanties implicites de qualité marchande et
        d&rsquo;adéquation à un usage particulier.
      </p>
      <p>
        Rien ici ne limite la responsabilité en cas de décès ou de dommage corporel causé par
        une négligence, en cas de fraude, ni pour tout ce qui ne peut légalement être limité.
        Sous cette réserve, notre responsabilité totale envers toi est limitée au plus élevé de
        ces deux montants : ce que tu nous as payé au cours des douze mois précédant la
        réclamation, ou 50 €.
      </p>
      <p>
        <strong>
          Si tu es un consommateur, rien dans ces conditions n&rsquo;affecte tes droits
          légaux.
        </strong>
      </p>

      <h2 id="law">10. Droit applicable</h2>
      <p>
        Ces conditions sont régies par le droit de la République de Chypre. Si tu es un
        consommateur, tu conserves aussi la protection des lois impératives du pays où tu vis,
        et tu peux y engager une action.
      </p>

      <h2 id="apple">11. Une mention exigée par Apple</h2>
      <p>
        Cet accord est conclu entre toi et nous, pas avec Apple, et Apple n&rsquo;est pas
        responsable du jeu ni de son contenu. Apple n&rsquo;a aucune obligation d&rsquo;en
        assurer l&rsquo;assistance. Si l&rsquo;app n&rsquo;est pas conforme à une garantie
        applicable, tu peux en informer Apple, et Apple remboursera le prix d&rsquo;achat ;
        dans toute la mesure permise par la loi, Apple n&rsquo;a aucune autre obligation de
        garantie. Apple et ses filiales sont des tiers bénéficiaires de ces conditions et
        peuvent les faire valoir contre toi.
      </p>

      <h2 id="contact">12. Contact</h2>
      <p>
        {site.entity}, sous le nom commercial {site.company}
        <br />
        {site.address}
        <br />
        <a href={mailto(mail.terms)}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
