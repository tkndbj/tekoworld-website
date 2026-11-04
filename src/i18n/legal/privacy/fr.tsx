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

/** Translation of privacy/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Politique de confidentialité",
  description: `Comment ${site.company}, ${game} et ${bb} traitent tes données, en mots simples.`,
  intro: `Cette page explique ce que nos jeux, ${game} et ${bb}, et ce site collectent sur toi, pourquoi, et ce que tu peux y faire.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Tu peux jouer à tout {game} sans nous donner ton nom, ton adresse e-mail ni quoi que
          ce soit d&rsquo;autre sur toi. Un compte anonyme est créé pour que ta progression
          puisse être sauvegardée et restaurée. Il identifie une sauvegarde, pas une personne.
        </p>
        <p className="mb-2">
          Nous affichons des publicités seulement quand tu choisis d&rsquo;en regarder une, et
          elles sont fournies par des tiers qui peuvent utiliser un identifiant publicitaire.
          Dans l&rsquo;UE et au Royaume-Uni, on te demande d&rsquo;abord ton accord, et tu
          peux changer ta réponse à tout moment depuis l&rsquo;écran des réglages.
        </p>
        <p>
          Nous ne vendons pas tes données. Qui tu es ne nous intéresse pas, seulement que le
          jeu fonctionne.
        </p>
        <p className="mt-2">
          C&rsquo;est pareil pour {bb} : pas de nom, pas d&rsquo;adresse e-mail, seulement un
          compte anonyme pour ta sauvegarde. {bb} affiche aussi des publicités entre les
          énigmes.
        </p>

      </Summary>

      <h2 id="who-we-are">Qui sommes-nous</h2>
      <p>
        {game} est publié par {site.entity}, sous le nom commercial {site.company} (
        {site.address}), l&rsquo;éditeur indiqué sur la fiche du store. Au sens du Règlement
        général sur la protection des données de l&rsquo;UE et du Royaume-Uni, nous sommes le
        responsable du traitement des informations décrites ici. Tu peux nous écrire à{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Cette politique couvre {game} et {bb} sur Android et iOS, ainsi que ce site. Les deux
        jeux sont publiés par {site.entity}, sous le nom {site.company}. Ce sont deux applis
        séparées, avec des comptes et des sauvegardes séparés : rien n&rsquo;est partagé entre
        elles. Ce que chaque jeu collecte figure dans son propre tableau, {game} d&rsquo;abord,
        puis <a href="#balance-buddies">{bb}</a> ; tout le reste de cette politique
        s&rsquo;applique aux deux.
      </p>

      <h2 id="what-we-collect">Ce que nous collectons, et pourquoi</h2>
      <p>
        Nous avons voulu être précis plutôt que d&rsquo;avoir l&rsquo;air exhaustifs. Si
        quelque chose ne figure pas dans ce tableau, le jeu ne le collecte pas.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Quoi</th>
              <th>Pourquoi</th>
              <th>Quand</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Un identifiant de compte anonyme</strong>, généré par Firebase
                Authentication
              </td>
              <td>
                Pour que ta progression soit sauvegardée sur nos serveurs et restaurée sur un
                nouvel appareil. C&rsquo;est une chaîne aléatoire. Elle n&rsquo;est pas liée à
                ton nom, à ton e-mail ni à ton numéro de téléphone, sauf si tu choisis
                d&rsquo;associer un compte de connexion.
              </td>
              <td>Premier lancement</td>
            </tr>
            <tr>
              <td>
                <strong>Ta progression</strong> : les sièges terminés et avec combien
                d&rsquo;étoiles, ta meilleure vague dans La Garde Sans Fin, tes pièces, gemmes,
                cœurs et indices, les tourelles, le sac et les compagnons que tu possèdes,
                l&rsquo;agencement de ton royaume et les terres sur lesquelles il se trouve, ta
                série quotidienne et tes réglages
              </td>
              <td>
                Pour que le jeu reprenne là où tu l&rsquo;as laissé, et que la même progression
                apparaisse sur tes autres appareils.
              </td>
              <td>Pendant que tu joues</td>
            </tr>
            <tr>
              <td>
                <strong>Une carte publique du royaume</strong> : le nom de gardien que tu as
                choisi, le compagnon qui te sert d&rsquo;avatar, ton niveau de gardien, le score
                et le nombre d&rsquo;étoiles de ton royaume, et ta ligue
              </td>
              <td>
                Pour que les autres joueurs te voient au classement et visitent ton royaume.
                C&rsquo;est la seule information que les autres joueurs peuvent voir. Tu peux la
                désactiver à tout moment depuis l&rsquo;onglet Profil, ce qui retire ta carte.
              </td>
              <td>Tant que le classement est activé</td>
            </tr>
            <tr>
              <td>
                <strong>Le nom de gardien que tu choisis</strong>, conservé sous forme de
                réservation pour que deux joueurs ne puissent pas prendre le même
              </td>
              <td>
                Pour que les noms restent uniques. C&rsquo;est toi qui choisis ce nom ;
                n&rsquo;utilise pas ton vrai nom si tu préfères qu&rsquo;il ne soit pas public.
              </td>
              <td>Si tu choisis un nom</td>
            </tr>
            <tr>
              <td>
                <strong>Une connexion associée</strong> : un identifiant Apple ou Google, et ce
                que ce fournisseur nous transmet, ce qui peut inclure ton adresse e-mail
              </td>
              <td>
                Seulement si tu choisis d&rsquo;associer un compte pour que ta progression
                survive à la perte de ton appareil. Nous ne recevons jamais ton mot de passe.
              </td>
              <td>Seulement si tu associes un compte</td>
            </tr>
            <tr>
              <td>
                <strong>Les enregistrements d&rsquo;achat</strong> : l&rsquo;identifiant de la
                transaction sur le store et ce qui a été acheté
              </td>
              <td>
                Pour confirmer un achat auprès d&rsquo;Apple ou de Google et te donner ce que tu
                as payé, une seule fois. <strong>Nous ne voyons jamais les données de ta carte</strong>.
                Le paiement a lieu dans le store, pas dans le jeu.
              </td>
              <td>Si tu achètes quelque chose</td>
            </tr>
            <tr>
              <td>
                <strong>Les identifiants publicitaires et données associées</strong>, gérés par
                nos partenaires publicitaires
              </td>
              <td>
                Pour afficher les publicités que tu choisis de regarder, et pour financer la
                gratuité du jeu. Voir <a href="#advertising">Publicité</a> plus bas.
              </td>
              <td>Quand tu regardes une publicité</td>
            </tr>
            <tr>
              <td>
                <strong>Les statistiques de jeu</strong> : des événements comme un siège
                commencé, gagné ou perdu, une tourelle achetée, un coffre ouvert ou un achat
                effectué, avec un identifiant de l&rsquo;appareil
              </td>
              <td>
                Pour voir où les joueurs bloquent et quelles parties du jeu ne fonctionnent pas.
                Géré par Google Analytics pour Firebase. Voir{" "}
                <a href="#analytics">Statistiques et attribution</a> plus bas.
              </td>
              <td>Pendant que tu joues, avec ton consentement quand il est requis</td>
            </tr>
            <tr>
              <td>
                <strong>L&rsquo;attribution d&rsquo;installation</strong> : quelle publicité ou
                quel lien, le cas échéant, t&rsquo;a mené à installer le jeu, et la confirmation
                des achats que tu fais
              </td>
              <td>
                Pour savoir quelles publicités valent la peine d&rsquo;être payées. Géré par
                AppsFlyer.
              </td>
              <td>Une fois, après que ton choix de consentement est connu</td>
            </tr>
            <tr>
              <td>
                <strong>Un signalement que tu fais</strong> sur le nom de gardien d&rsquo;un
                autre joueur
              </td>
              <td>
                Pour que nous puissions examiner le nom et, si besoin, le remplacer. Le
                signalement enregistre le compte qui l&rsquo;a fait, pour qu&rsquo;on ne puisse
                pas en falsifier.
              </td>
              <td>Seulement si tu signales un nom</td>
            </tr>
            <tr>
              <td>
                <strong>Des informations techniques de base</strong> : modèle de
                l&rsquo;appareil, version du système, langue et diagnostics d&rsquo;erreur
              </td>
              <td>
                Pour comprendre pourquoi quelque chose a planté ou pourquoi un écran
                s&rsquo;est mal affiché sur un appareil que nous n&rsquo;avons pas.
              </td>
              <td>Si nécessaire</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="balance-buddies">Ce que {bb} collecte, et pourquoi</h2>
      <p>
        {bb} est construit de la même façon, en plus simple : pas de classements publics, pas
        de noms de joueurs, pas de visites et pas de messagerie. Ses données sont conservées
        dans son propre projet Firebase, séparé de celui de {game}, et elles aussi dans
        l&rsquo;Union européenne. Si quelque chose ne figure pas dans ce tableau, {bb} ne le
        collecte pas.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Quoi</th>
              <th>Pourquoi</th>
              <th>Quand</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Un identifiant de compte anonyme</strong>, généré par Firebase
                Authentication
              </td>
              <td>
                Pour sauvegarder ta progression dès la première énigme et la restaurer sur un
                nouvel appareil. C&rsquo;est une suite aléatoire, liée à toi seulement si tu
                associes une connexion.
              </td>
              <td>La première fois que le jeu est en ligne</td>
            </tr>
            <tr>
              <td>
                <strong>Ta progression</strong> : les énigmes résolues, tes meilleurs coups et
                étoiles, ton solde d&rsquo;indices et les étapes d&rsquo;indice révélées, ton
                temps sans publicité, où reprendre, tes réglages, et un identifiant aléatoire
                pour chaque appareil sur lequel tu joues
              </td>
              <td>
                Pour que le jeu reprenne là où tu t&rsquo;étais arrêté, et pour fusionner la
                progression de plusieurs appareils sans rien perdre.
              </td>
              <td>Pendant que tu joues</td>
            </tr>
            <tr>
              <td>
                <strong>Une connexion associée</strong> : un identifiant de Google ou
                d&rsquo;Apple, et ce que ce fournisseur nous transmet, qui peut inclure ton nom
                et ton adresse e-mail
              </td>
              <td>
                Seulement si tu choisis de te connecter, pour que ta progression te suive sur un
                autre appareil. Nous ne recevons jamais ton mot de passe.
              </td>
              <td>Seulement si tu te connectes</td>
            </tr>
            <tr>
              <td>
                <strong>Les preuves d&rsquo;achat</strong> : l&rsquo;identifiant de transaction
                du store et ce qui a été acheté (un pack d&rsquo;indices, le Starter Bundle ou
                l&rsquo;abonnement No Ads)
              </td>
              <td>
                Pour te donner une seule fois ce que tu as payé, et savoir si un abonnement est
                actif. <strong>Nous ne voyons jamais ta carte bancaire</strong>.
              </td>
              <td>Si tu achètes quelque chose</td>
            </tr>
            <tr>
              <td>
                <strong>Identifiants publicitaires et données associées</strong>, traités par
                Google AdMob
              </td>
              <td>
                Pour afficher les publicités entre les énigmes et les vidéos que tu choisis de
                regarder pour des indices. Voir <a href="#advertising">Publicité</a> plus bas.
              </td>
              <td>Quand une publicité est demandée</td>
            </tr>
            <tr>
              <td>
                <strong>Statistiques de jeu</strong> : des événements comme une énigme
                commencée, résolue ou recommencée, avec les coups, les étoiles et le temps mis,
                un indice utilisé, une connexion ou déconnexion, avec un identifiant
                d&rsquo;appareil et ton identifiant de compte
              </td>
              <td>
                Pour voir quelles énigmes sont trop dures et ce qui ne marche pas. Traité par
                Google Analytics for Firebase, avec ses fonctions publicitaires désactivées.
              </td>
              <td>Pendant que tu joues</td>
            </tr>
            <tr>
              <td>
                <strong>Rapports de plantage</strong> : modèle d&rsquo;appareil, version du
                système, état de l&rsquo;appli au moment du plantage, et ton identifiant de
                compte
              </td>
              <td>Pour trouver et corriger les plantages. Traité par Firebase Crashlytics.</td>
              <td>Si le jeu plante</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        {bb} n&rsquo;utilise pas d&rsquo;attribution d&rsquo;installation, ne demande pas à
        iOS l&rsquo;autorisation de te suivre, et ne collecte rien de ce qui figure plus bas
        sous &laquo;&nbsp;ce que nous ne collectons volontairement pas&nbsp;&raquo;.
      </p>

      <h3>Ce que nous ne collectons volontairement pas</h3>
      <ul>
        <li>Ton nom, sauf si tu le tapes comme nom de gardien.</li>
        <li>Ton adresse e-mail, sauf si tu nous écris ou associes un compte de connexion.</li>
        <li>Tes contacts, photos, micro, caméra ou position précise.</li>
        <li>Les données de ta carte de paiement. Elles ne nous parviennent jamais.</li>
        <li>Des messages. Il n&rsquo;y a pas de chat, ni aucun moyen pour les joueurs de se contacter.</li>
      </ul>

      <h2 id="legal-bases">Nos bases légales (Royaume-Uni et UE)</h2>
      <ul>
        <li>
          <strong>Exécution d&rsquo;un contrat</strong> : sauvegarder et restaurer ta
          progression, et honorer un achat. Sans cela, le jeu ne fonctionne pas.
        </li>
        <li>
          <strong>Consentement</strong> : la publicité personnalisée, les statistiques de jeu
          et l&rsquo;attribution d&rsquo;installation lorsque la loi exige un consentement, et
          l&rsquo;apparition au classement public. Tout cela est facultatif et peut être
          retiré.
        </li>
        <li>
          <strong>Intérêts légitimes</strong> : faire fonctionner le jeu, diagnostiquer les
          plantages, examiner les noms signalés, et prévenir la fraude et les abus de
          l&rsquo;économie du jeu.
        </li>
        <li>
          <strong>Obligation légale</strong> : conserver les enregistrements d&rsquo;achat pour
          la fiscalité et la comptabilité.
        </li>
      </ul>

      <h2 id="advertising">Publicité</h2>
      <p>
        Le jeu est gratuit, et ce sont les publicités qui le financent. Les publicités sont
        facultatives dans le sens qui compte : pas de publicité entre les niveaux, pas de
        bannières. Chaque publicité dans {game} est une publicité que tu choisis de regarder
        contre des cœurs, des pièces ou un indice, et chaque type a une limite quotidienne.
      </p>
      <p>
        Les publicités sont diffusées par <strong>Unity LevelPlay</strong> (ironSource) comme
        plateforme de médiation, et par les régies avec lesquelles elle travaille, qui
        comprennent actuellement <strong>Unity Ads</strong> et <strong>Google AdMob</strong>.
        Ces partenaires sont des responsables de traitement indépendants pour les données
        qu&rsquo;ils collectent et ont leurs propres politiques :
      </p>
      <ul>
        <li>
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">
            Unity : politique de confidentialité pour les joueurs et utilisateurs d&rsquo;apps
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            Google : comment Google utilise les informations des sites et applications qui
            utilisent ses services
          </a>
        </li>
      </ul>

      <h3>Dans {bb}</h3>
      <p>
        Pas de publicité pendant tes huit premières énigmes, jamais au milieu d&rsquo;une
        énigme, et pas de bannières. Ensuite, une publicité plein écran peut s&rsquo;afficher en
        quittant l&rsquo;écran de victoire, toutes les deux énigmes résolues. Les vidéos qui
        te donnent deux indices sont toujours ton choix. L&rsquo;abonnement No Ads, et les
        jours sans publicité du Starter Bundle, coupent les publicités entre les énigmes.
      </p>
      <p>
        Les publicités de {bb} sont fournies uniquement par <strong>Google AdMob</strong>,
        responsable indépendant des données qu&rsquo;il collecte (voir la politique de Google
        ci-dessus). Sur Android, AdMob peut utiliser l&rsquo;identifiant publicitaire de
        l&rsquo;appareil, que tu peux réinitialiser ou supprimer dans les réglages
        d&rsquo;Android. {bb} ne demande pas à iOS l&rsquo;autorisation de suivi, donc
        l&rsquo;identifiant publicitaire ne lui est pas accessible sur iOS.
      </p>
      <p>
        Dans l&rsquo;EEE et au Royaume-Uni, {bb} te demande aussi ton avis avant, via un
        formulaire de consentement certifié par Google. Tu peux changer ta réponse à tout
        moment dans <strong>Settings</strong> (Réglages) ›{" "}
        <strong>Ad privacy choices</strong> ; le bouton apparaît partout où la loi
        l&rsquo;exige.
      </p>

      <h3>Ton choix, et comment le changer</h3>
      <p>
        Si tu te trouves dans l&rsquo;Espace économique européen ou au Royaume-Uni, on te
        demande ton accord avant toute publicité personnalisée, au moyen d&rsquo;un formulaire
        de consentement certifié par Google. Si tu refuses, tu verras quand même des publicités
        et tu recevras toujours les récompenses pour les avoir regardées. Elles ne seront
        simplement pas basées sur un profil de toi.
      </p>
      <p>
        Tu peux changer ta réponse à tout moment : ouvre les <strong>Réglages</strong>{" "}
        (l&rsquo;icône en forme d&rsquo;engrenage sur l&rsquo;écran d&rsquo;accueil ou de
        profil) et choisis <strong>{label.privacyChoices}</strong>.
      </p>
      <p>
        Sur iOS, on te demande séparément si l&rsquo;app peut utiliser l&rsquo;identifiant
        publicitaire de l&rsquo;appareil. Cette réponse relève du système et se modifie dans{" "}
        <strong>Réglages iOS › Confidentialité et sécurité › Suivi</strong>.
      </p>

      <h2 id="analytics">Statistiques et attribution</h2>
      <p>
        Nous utilisons <strong>Google Analytics pour Firebase</strong> pour enregistrer des
        événements de jeu, comme un siège commencé ou un coffre ouvert, afin de voir où les
        joueurs ont du mal et ce qui ne fonctionne pas. Lorsque le consentement est requis, ces
        événements ne sont enregistrés qu&rsquo;après que tu l&rsquo;as donné.
      </p>
      <p>
        Nous utilisons <strong>AppsFlyer</strong> pour savoir quelle publicité ou quel lien, le
        cas échéant, a mené à une installation, et pour confirmer les achats. AppsFlyer ne
        démarre qu&rsquo;une fois ton choix de consentement connu, et si tu n&rsquo;as pas
        accepté la personnalisation, il fonctionne en mode anonymisé. Sa politique se trouve
        sur{" "}
        <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">
          appsflyer.com
        </a>
        .
      </p>

      <p>
        Dans {bb}, Google Analytics for Firebase n&rsquo;utilise jamais de stockage ni de
        personnalisation publicitaires : ces signaux sont désactivés dans le jeu, les
        événements servent uniquement à la mesure. {bb} utilise aussi{" "}
        <strong>Firebase Crashlytics</strong> pour recevoir un rapport quand le jeu plante,
        afin que nous puissions corriger le problème. AppsFlyer n&rsquo;est utilisé que dans{" "}
        {game}.
      </p>

      <h2 id="sharing">Avec qui tes données sont partagées</h2>
      <p>Nous faisons appel à un petit nombre de prestataires, chacun pour une tâche :</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> (Authentication, Cloud Firestore, Cloud Functions,
          Analytics) : le compte anonyme, la progression sauvegardée et le classement. Les
          données sont stockées dans l&rsquo;Union européenne.
        </li>
        <li>
          <strong>Apple et Google</strong> : distribution de l&rsquo;app, connexion si tu le
          choisis, paiements et vérification des achats.
        </li>
        <li>
          <strong>Unity LevelPlay et ses régies publicitaires</strong> : la publicité, comme
          décrit plus haut.
        </li>
        <li>
          <strong>AppsFlyer</strong> : l&rsquo;attribution d&rsquo;installation, comme décrit
          plus haut.
        </li>
        <li>
          <strong>Google AdMob</strong> : la publicité dans {bb}, comme décrit plus haut.
        </li>
        <li>
          <strong>Cloudflare</strong> : livre les niveaux que tu télécharges dans {bb}.
          Comme tout serveur, il voit ton adresse IP pour t&rsquo;envoyer les fichiers ; il
          ne reçoit ni ton compte ni ta sauvegarde.
        </li>
        <li>
          <strong>Firebase Crashlytics</strong> : les rapports de plantage de {bb}. Les
          sauvegardes de {bb} sont dans un projet Firebase séparé, elles aussi dans l&rsquo;UE.
        </li>
      </ul>
      <p>
        Nous ne vendons pas d&rsquo;informations personnelles, et nous ne les partageons pas
        pour de la publicité comportementale entre contextes au-delà de ce que font les
        partenaires publicitaires ci-dessus avec ton consentement.
      </p>

      <h2 id="transfers">Transferts internationaux</h2>
      <p>
        Les données de sauvegarde sont conservées dans l&rsquo;Union européenne. Certains de nos
        prestataires sont établis aux États-Unis et peuvent y traiter des données, en
        s&rsquo;appuyant sur les clauses contractuelles types de la Commission européenne, le
        cadre de protection des données UE-États-Unis ou une garantie équivalente.
      </p>

      <h2 id="retention">Combien de temps nous les gardons</h2>
      <ul>
        <li>
          <strong>Progression sauvegardée</strong> : tant que le compte est utilisé, et
          jusqu&rsquo;à 24 mois après qu&rsquo;il est devenu inactif, après quoi elle peut être
          supprimée.
        </li>
        <li>
          <strong>Ta carte publique du royaume</strong> : jusqu&rsquo;à ce que tu la caches ou
          que tu supprimes tes données, selon ce qui arrive en premier. Le classement est
          reconstruit chaque nuit, donc une carte cachée en disparaît en moins d&rsquo;un jour.
        </li>
        <li>
          <strong>Enregistrements d&rsquo;achat</strong> : aussi longtemps que l&rsquo;exige le
          droit fiscal et comptable, en général sept ans, et aussi longtemps que nécessaire pour
          empêcher qu&rsquo;un reçu soit utilisé deux fois. Ils survivent à la suppression de
          tes données de jeu, car nous n&rsquo;avons pas le droit de les détruire.
        </li>
        <li>
          <strong>Les signalements que tu fais</strong> sur les noms d&rsquo;autres joueurs :
          tant que le compte signalé existe, pour pouvoir montrer que l&rsquo;examen a eu lieu.
        </li>
        <li>
          <strong>Rapports de plantage</strong> ({bb}) : 90 jours.
        </li>
      </ul>

      <h2 id="rights">Tes droits</h2>
      <p>
        Si le RGPD de l&rsquo;UE ou du Royaume-Uni s&rsquo;applique à toi, tu as le droit de
        demander une copie de tes données, de les faire corriger, de les faire supprimer, de
        limiter ou de t&rsquo;opposer à la façon dont nous les utilisons, et de retirer un
        consentement donné. Des droits similaires existent au titre du California Consumer
        Privacy Act et d&rsquo;autres lois.
      </p>
      <p>
        Les voies les plus rapides sont dans le jeu lui-même : la sortie du classement est dans
        l&rsquo;onglet Profil, le choix publicitaire dans les Réglages, et la suppression du
        compte dans l&rsquo;onglet Profil. Pour toute autre demande, ou pour tout supprimer,
        consulte{" "}
        <Link href={localePath("fr", "/delete-account")}>la suppression de tes données</Link>{" "}
        ou écris à <a href={mailto(mail.privacy)}>{site.email}</a>. Nous répondons sous 30
        jours.
      </p>
      <p>
        Comme les comptes sont anonymes par défaut, nous pouvons avoir besoin que tu prouves
        quel compte est le tien avant de traiter une demande, en général en l&rsquo;envoyant
        depuis l&rsquo;adresse d&rsquo;une connexion associée, ou en nous donnant
        l&rsquo;identifiant de compte affiché dans le jeu.
      </p>
      <p>
        Si tu penses que nous avons mal traité tes données, tu peux déposer une plainte auprès
        de l&rsquo;autorité de protection des données de ton pays.
      </p>

      <p>
        Dans {bb}, le choix publicitaire (<strong>Ad privacy choices</strong>) et{" "}
        <strong>Delete account</strong> (supprimer le compte) se trouvent tous les deux dans{" "}
        <strong>Settings</strong>.
      </p>

      <h2 id="children">Enfants</h2>
      <p>
        {game} est un jeu tout public. Il ne s&rsquo;adresse pas aux enfants de moins de 13 ans
        et n&rsquo;est pas déclaré comme app destinée aux enfants auprès de nos partenaires
        publicitaires. Nous ne collectons pas sciemment d&rsquo;informations personnelles
        d&rsquo;enfants de moins de 13 ans. Si tu penses qu&rsquo;un enfant nous a donné des
        informations, écris à <a href={mailto(mail.child)}>{site.email}</a> et nous les
        supprimerons.
      </p>

      <p>
        Il en va de même pour {bb} : un jeu tout public, qui ne s&rsquo;adresse pas aux enfants
        de moins de 13 ans et n&rsquo;est pas déclaré comme destiné aux enfants auprès de nos
        partenaires publicitaires.
      </p>

      <h2 id="this-website">Ce site</h2>
      <p>
        Ce site est statique. Il ne dépose aucun cookie, n&rsquo;utilise aucun outil de
        statistiques et ne te suit pas. La seule chose qu&rsquo;il sait de toi, c&rsquo;est ce
        que ton navigateur dit à notre hébergeur pour t&rsquo;envoyer la page. Si tu choisis une
        langue, ou fermes la suggestion d&rsquo;une langue, ton navigateur s&rsquo;en souvient
        tant que l&rsquo;onglet reste ouvert ; c&rsquo;est conservé sur ton appareil et ne nous
        est jamais envoyé.
      </p>

      <h2 id="changes">Modifications</h2>
      <p>
        Si nous modifions cette politique, nous mettrons à jour la date en haut de page, et pour
        tout changement important, nous le signalerons dans le jeu avant qu&rsquo;il
        n&rsquo;entre en vigueur.
      </p>
      <p>
        Cette politique est aussi publiée dans d&rsquo;autres langues. Ce sont des traductions
        de ce texte anglais, et si l&rsquo;une d&rsquo;elles en diffère, c&rsquo;est le texte
        anglais qui s&rsquo;applique.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        {site.entity}, sous le nom commercial {site.company}
        <br />
        {site.address}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
