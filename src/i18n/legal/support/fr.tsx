import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.fr.mail;
const label = gameTextFor("fr").labels;
const game = gemfire.name;

/** Translation of support/en.tsx. Button names are the game's own French labels. */
const doc: LegalDoc = {
  title: "Aide",
  description: `De l'aide pour ${game} : progression perdue, achats, cœurs, publicités et comptes.`,
  intro: `Quelque chose ne marche pas dans ${game} ? Écris-nous. Une vraie personne te lit.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          Écrire à {site.email}
        </a>
      </p>

      <p>
        Nous répondons en général en un ou deux jours. Ça aide énormément si tu indiques ton{" "}
        <strong>identifiant de compte</strong> (onglet Profil, carte Compte), le modèle de ton
        appareil, et ce que tu t&rsquo;attendais à voir se passer.
      </p>

      <h2>Questions fréquentes</h2>

      <div className="not-prose">
        <Question q="J'ai perdu ma progression après une réinstallation.">
          <p>
            Si tu n&rsquo;as jamais associé de compte Apple ou Google, le royaume était lié à
            un compte anonyme sur cet appareil, et une réinstallation peut le laisser derrière.
            Ouvre l&rsquo;onglet <strong>Profil</strong> et connecte-toi avec Google ou Apple.
            C&rsquo;est ce qui permet à ta progression de survivre à l&rsquo;avenir à un
            appareil perdu ou effacé.
          </p>
          <p>
            Si tu <em>en as</em> associé un, connecte-toi avec le même fournisseur et ton
            royaume devrait revenir. Sinon, écris-nous en indiquant l&rsquo;adresse de
            connexion.
          </p>
        </Question>

        <Question q="J'ai payé quelque chose et je ne l'ai pas reçu.">
          <p>
            D&rsquo;abord, rouvre le jeu avec une connexion. Les achats inachevés sont livrés à
            nouveau automatiquement au lancement, et un achat interrompu par un plantage ou une
            coupure se règle généralement ainsi. Le bouton{" "}
            <strong>{label.restorePurchases}</strong> de la boutique fait la même chose à la
            demande.
          </p>
          <p>
            Si ce n&rsquo;est toujours pas arrivé, écris-nous avec le reçu du store ou le numéro
            de commande et nous réglerons ça directement. C&rsquo;est plus rapide qu&rsquo;un
            remboursement.
          </p>
        </Question>

        <Question q="Comment obtenir un remboursement ?">
          <p>
            Les remboursements sont gérés par Apple et Google, pas par nous. Nous ne pouvons pas
            en accorder à leur place. Utilise la procédure de remboursement du store depuis ton
            historique d&rsquo;achats.
          </p>
          <p>
            Si le problème est que quelque chose n&rsquo;est pas arrivé, et non que tu as changé
            d&rsquo;avis, écris-nous d&rsquo;abord ; nous pouvons en général régler ça en une
            journée.
          </p>
        </Question>

        <Question q="Comment fonctionnent les cœurs ?">
          <p>
            Un siège perdu coûte un cœur, et les cœurs reviennent tout seuls avec le temps,
            jusqu&rsquo;à la limite de ta fiole. Les trois premiers sièges de chaque chapitre
            peuvent être perdus gratuitement le temps de l&rsquo;apprendre, et rejouer un siège
            déjà gagné est toujours gratuit.
          </p>
          <p>
            Si tu n&rsquo;en as plus, tu peux attendre, regarder une vidéo pour en gagner deux,
            ou dépenser des gemmes. Acheter une fiole plus grande augmente la limite pour
            toujours.
          </p>
        </Question>

        <Question q="Le bouton pour regarder une vidéo n'en trouve jamais.">
          <p>
            Cela veut dire qu&rsquo;aucune publicité n&rsquo;était disponible à ce moment-là. La
            disponibilité varie selon le pays, l&rsquo;heure et le nombre de vidéos déjà vues
            aujourd&rsquo;hui. Le jeu continue d&rsquo;essayer en arrière-plan, donc ça remarche
            en général tout seul.
          </p>
          <p>
            Tu n&rsquo;as jamais besoin de regarder une publicité pour finir le jeu. Toutes sont
            facultatives, et rien n&rsquo;est bloqué derrière.
          </p>
        </Question>

        <Question q="Comment ne plus apparaître au classement ?">
          <p>
            Ouvre l&rsquo;onglet <strong>Profil</strong> et touche{" "}
            <strong>{label.hideFromBoards}</strong> dans la section du classement. Ta carte est
            retirée et ton nom de gardien n&rsquo;est plus visible des autres joueurs. Tu gardes
            le nom dans ton propre jeu.
          </p>
        </Question>

        <Question q="Comment changer mon choix publicitaire ?">
          <p>
            <strong>Réglages</strong> (l&rsquo;icône en forme d&rsquo;engrenage sur
            l&rsquo;écran d&rsquo;accueil ou de profil), puis{" "}
            <strong>{label.privacyChoices}</strong>. Sur iOS, l&rsquo;autorisation de suivi,
            séparée, se trouve dans{" "}
            <strong>Réglages iOS › Confidentialité et sécurité › Suivi</strong>.
          </p>
        </Question>

        <Question q="Comment tout supprimer ?">
          <p>
            Consulte la page{" "}
            <Link href={localePath("fr", "/delete-account")}>
              supprimer ton compte et tes données
            </Link>
            . Note que supprimer seulement l&rsquo;app n&rsquo;efface pas ce qui se trouve sur
            nos serveurs.
          </p>
        </Question>

        <Question q="Mon nom de gardien a été refusé.">
          <p>
            Les noms doivent être uniques, et nous filtrons ceux qui usurpent l&rsquo;identité
            de quelqu&rsquo;un, qui peuvent être perçus comme du harcèlement ou qui contiennent
            des caractères cassant l&rsquo;affichage des autres joueurs au classement.
          </p>
          <p>
            Un nom refusé ne t&rsquo;est pas retiré. Tu le gardes dans ton propre jeu et tu
            apparais au classement sous un nom généré.
          </p>
        </Question>

        <Question q="Le nom d'un autre joueur est offensant.">
          <p>
            Ouvre son royaume depuis le classement et touche <strong>{label.report}</strong>.
            Nous examinons chaque signalement, et un nom qui enfreint les règles est remplacé
            par un nom généré. On ne te dira pas qui l&rsquo;a signalé, et on ne lui dira pas
            que c&rsquo;était toi.
          </p>
        </Question>

        <Question q="Le jeu fonctionne-t-il hors ligne ?">
          <p>
            Oui. Chaque siège tourne sur ton téléphone sans connexion. Le classement, les
            visites d&rsquo;autres royaumes, la boutique, les vidéos récompensées, la connexion
            et la suppression du compte ont besoin d&rsquo;une connexion, et les bonus
            quotidiens demandent de te connecter une fois pour les débloquer.
          </p>
        </Question>
      </div>

      <h2>Signaler un problème de sécurité</h2>
      <p>
        Si tu as trouvé un moyen de casser l&rsquo;économie, de lire la sauvegarde d&rsquo;un
        autre joueur ou d&rsquo;accéder d&rsquo;une autre façon à quelque chose qui ne devrait
        pas t&rsquo;être accessible, préviens-nous à{" "}
        <a href={mailto(mail.security)}>{site.email}</a> avant d&rsquo;en parler à qui que ce
        soit. Nous ne prendrons aucune mesure contre toi pour un signalement fait de bonne foi.
      </p>
    </>
  ),
};

export default doc;
