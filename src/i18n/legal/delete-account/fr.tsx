import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.fr.mail;
const label = gameTextFor("fr").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/**
 * Translation of delete-account/en.tsx. Button names are the game's own French labels, so
 * the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Supprimer ton compte et tes données",
  description: `Comment supprimer ton compte ${game} ou ${bb} et les données qui y sont liées.`,
  intro:
    "Tu peux faire effacer tout ce que nous détenons sur toi dans l'un ou l'autre de nos jeux. Voici exactement ce qui se passe.",
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Le plus rapide, c&rsquo;est dans le jeu : l&rsquo;onglet <strong>Profil</strong>, puis
          la carte <strong>Compte</strong>, puis <strong>{label.deleteAccount}</strong>. C&rsquo;est
          immédiat.
        </p>
        <p className="mb-2">
          Si tu ne peux plus ouvrir le jeu, écris à{" "}
          <a href={mailto(mail.deleteAccount)}>{site.email}</a> et nous le ferons pour toi sous
          30 jours.
        </p>
        <p>
          Supprimer l&rsquo;app seule <strong>n&rsquo;efface pas</strong> les données sur nos
          serveurs. Cela retire seulement la copie de cet appareil.
        </p>
        <p className="mt-2">
          Dans {bb} : <strong>Settings</strong> › <strong>Delete account</strong>. Voir la{" "}
          <a href="#balance-buddies">section 5</a>.
        </p>

      </Summary>
      <p>
        Les deux jeux sont des applis séparées avec des comptes séparés : supprimer l&rsquo;un
        ne touche pas à l&rsquo;autre. Les sections 1 à 4 concernent {game} ; la{" "}
        <a href="#balance-buddies">section 5</a> concerne {bb}.
      </p>

      <h2 id="in-app">1. Supprime-le depuis le jeu</h2>
      <p>
        C&rsquo;est la vraie suppression, pas une demande de suppression. Personne ne la lit,
        personne n&rsquo;a à l&rsquo;approuver, et elle n&rsquo;attend pas 30 jours.
      </p>
      <ol>
        <li>
          Ouvre {game} et va dans l&rsquo;onglet <strong>Profil</strong>.
        </li>
        <li>
          Fais défiler jusqu&rsquo;à la carte <strong>Compte</strong>.
        </li>
        <li>
          Touche <strong>{label.deleteAccount}</strong>, le bouton rouge en bas de cette carte.
        </li>
        <li>
          Lis ce qui est listé, puis touche <strong>{label.deleteEverything}</strong> et
          confirme une dernière fois.
        </li>
      </ol>
      <p>
        Si tu as associé une connexion Apple ou Google, on te demandera d&rsquo;abord de te
        reconnecter, pour s&rsquo;assurer que c&rsquo;est bien toi. Il te faut une connexion
        internet : si le jeu ne peut pas joindre nos serveurs, il te dit que rien n&rsquo;a été
        supprimé, car nous ne prétendrons jamais avoir fait une suppression que nous
        n&rsquo;avons pas pu faire.
      </p>

      <h2 id="request">2. Ou écris-nous</h2>
      <p>
        Utilise cette voie si tu as déjà désinstallé le jeu, perdu l&rsquo;appareil ou si tu ne
        peux pas atteindre le bouton pour une autre raison.
      </p>
      <p>
        Les comptes sont anonymes, donc nous ne pouvons pas te retrouver par ton nom ou ton
        e-mail, sauf si tu as associé une connexion. Si tu peux encore ouvrir le jeu, ton
        identifiant de compte s&rsquo;affiche dans la carte <strong>Compte</strong> de
        l&rsquo;onglet <strong>Profil</strong>. Copie-le ou fais une capture d&rsquo;écran. Si
        tu as associé un compte Apple ou Google, tu peux t&rsquo;en passer et simplement nous
        écrire depuis cette adresse e-mail.
      </p>
      <p>
        Écris à <a href={mailto(mail.deleteAccount)}>{site.email}</a> depuis n&rsquo;importe
        quelle adresse, avec l&rsquo;objet <strong>{mail.deleteAccount}</strong>, en indiquant
        ton identifiant de compte ou l&rsquo;adresse de la connexion associée.
      </p>
      <p>
        Nous accuserons réception, vérifierons que le compte est bien le tien et terminerons la
        suppression sous <strong>30 jours</strong>. Nous te préviendrons quand ce sera fait.
      </p>

      <h2 id="what-goes">3. Ce qui est supprimé</h2>
      <ul>
        <li>
          Ton compte anonyme et toute connexion Apple ou Google associée. L&rsquo;autorisation
          Se connecter avec Apple est révoquée auprès d&rsquo;Apple.
        </li>
        <li>
          Ta progression sauvegardée : sièges terminés et étoiles, tes meilleures vagues,
          pièces, gemmes, cœurs, indices, tourelles, le sac, les compagnons et tout ton royaume.
        </li>
        <li>Ta carte publique du royaume et toutes les lignes que tu occupais au classement.</li>
        <li>
          La réservation de ton nom de gardien, qui redevient libre pour quelqu&rsquo;un
          d&rsquo;autre. La seule exception est un nom refusé par la modération : celui-là reste
          bloqué pour que personne ne puisse le reprendre.
        </li>
        <li>Les signalements que d&rsquo;autres joueurs ont faits sur ton nom.</li>
      </ul>
      <p>C&rsquo;est irréversible. Nous n&rsquo;avons aucun moyen de restaurer un royaume supprimé.</p>

      <h2 id="what-stays">4. Ce que nous devons conserver</h2>
      <p>
        Trois choses survivent à la suppression, et nous préférons le dire clairement plutôt
        que de te surprendre plus tard :
      </p>
      <ul>
        <li>
          <strong>Les enregistrements d&rsquo;achat</strong> : l&rsquo;identifiant de la
          transaction sur le store et ce qu&rsquo;elle a acheté, conservés aussi longtemps que
          l&rsquo;exige le droit fiscal et comptable (en général sept ans) et pour qu&rsquo;un
          même reçu ne puisse pas être utilisé deux fois. Nous n&rsquo;avons pas le droit de
          les détruire sur demande. Après la suppression, ils ne sont plus liés à aucune
          partie.
        </li>
        <li>
          <strong>Les signalements que tu as faits</strong> sur les noms d&rsquo;autres
          joueurs, pour pouvoir montrer que ces noms ont été examinés.
        </li>
        <li>
          <strong>La trace de la demande de suppression elle-même</strong>, pour pouvoir
          montrer que nous y avons donné suite.
        </li>
      </ul>
      <p>
        Apple et Google conservent leurs propres enregistrements de tes achats, indépendamment
        de nous. Si tu veux qu&rsquo;ils soient supprimés, il faudra le leur demander.
      </p>

      <h2 id="balance-buddies">5. {bb}</h2>
      <h3>Le supprimer depuis le jeu</h3>
      <ol>
        <li>
          Ouvre {bb} et touche <strong>Settings</strong> (Réglages) dans le menu principal.
        </li>
        <li>
          Si tu n&rsquo;es pas connecté, connecte-toi d&rsquo;abord avec Google ou Apple. Ta
          progression est alors rattachée à cette connexion, ce qui donne au bouton un compte à
          supprimer.
        </li>
        <li>
          Touche <strong>Delete account</strong> (supprimer le compte), lis
          l&rsquo;avertissement et confirme.
        </li>
      </ol>
      <p>
        Il se peut qu&rsquo;on te demande de te reconnecter, pour être sûrs que c&rsquo;est
        bien toi, et il faut une connexion internet. Si la suppression ne peut pas aboutir, le
        jeu te le dit et rien n&rsquo;est supprimé.
      </p>
      <p>
        Si tu ne peux plus ouvrir le jeu, écris à{" "}
        <a href={mailto(mail.deleteAccount, bb)}>{site.email}</a> depuis l&rsquo;adresse de ta
        connexion Google ou Apple, avec l&rsquo;objet <strong>{mail.deleteAccount}</strong>, et
        nous le supprimerons sous <strong>30 jours</strong>. Si tu ne t&rsquo;es jamais
        connecté, ta progression appartient à un compte anonyme que nous ne pouvons pas
        retrouver à partir d&rsquo;un simple e-mail. Suis les étapes ci-dessus si tu as encore
        le jeu ; sinon, écris-nous quand même avec le modèle de ton appareil et la date
        approximative de ta dernière partie, et nous ferons notre possible pour le retrouver.
      </p>
      <h3>Ce qui est supprimé</h3>
      <ul>
        <li>
          Ton compte et toute connexion Google ou Apple associée. L&rsquo;autorisation
          &laquo;&nbsp;Se connecter avec Apple&nbsp;&raquo; est révoquée auprès d&rsquo;Apple.
        </li>
        <li>
          Ta progression sauvegardée sur nos serveurs : énigmes résolues, meilleurs coups et
          étoiles, tes indices, les étapes d&rsquo;indice révélées et ton temps sans publicité.
        </li>
        <li>La progression enregistrée sur l&rsquo;appareil depuis lequel tu supprimes.</li>
      </ul>
      <p>
        C&rsquo;est irréversible. Comme pour {game}, les <strong>preuves d&rsquo;achat</strong>{" "}
        sont conservées aussi longtemps que le droit fiscal et comptable l&rsquo;exige, et
        Apple et Google gardent les leurs. Supprimer ton compte ne résilie{" "}
        <strong>pas</strong> un abonnement No Ads : résilie-le dans les réglages
        d&rsquo;abonnement de l&rsquo;App Store ou de Google Play.
      </p>

      <h2 id="less">Si tu veux moins qu&rsquo;une suppression complète</h2>
      <p>
        Tu n&rsquo;as peut-être pas besoin de tout supprimer. Chacune de ces options prend effet
        immédiatement, et aucune ne touche au reste de ton compte :
      </p>
      <ul>
        <li>
          <strong>Quitter le classement public</strong> : l&rsquo;onglet{" "}
          <strong>Profil</strong>, puis <strong>{label.hideFromBoards}</strong> dans la section
          du classement. Ta carte publiée est retirée et ton nom de gardien n&rsquo;est plus
          visible par personne. Ta progression, tes achats et ton royaume ne sont pas touchés.
        </li>
        <li>
          <strong>Retirer ton consentement publicitaire</strong> : <strong>Réglages</strong>{" "}
          (l&rsquo;icône en forme d&rsquo;engrenage), puis{" "}
          <strong>{label.privacyChoices}</strong>.
        </li>
        <li>
          <strong>Changer ton nom de gardien</strong> : l&rsquo;onglet <strong>Profil</strong>,
          puis touche ton nom. L&rsquo;ancien nom est libéré et le classement affiche le
          nouveau.
        </li>
        <li>
          <strong>Retirer ton consentement publicitaire dans {bb}</strong> :{" "}
          <strong>Settings</strong> › <strong>Ad privacy choices</strong>.
        </li>
        <li>
          <strong>Arrêter la sauvegarde de {bb} dans le cloud</strong> :{" "}
          <strong>Settings</strong> › <strong>Sign out</strong> (se déconnecter).
          L&rsquo;appareil continue comme un nouvel invité.
        </li>
      </ul>
      <p>
        Si tu préfères que nous fassions l&rsquo;une de ces choses pour toi, écris à{" "}
        <a href={mailto(mail.deleteSome)}>{site.email}</a> en précisant laquelle. Consulte la{" "}
        <Link href={localePath("fr", "/privacy")}>politique de confidentialité</Link> pour
        savoir ce que couvre chacune.
      </p>
    </>
  ),
};

export default doc;
