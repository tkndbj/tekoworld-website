import { localePath } from "@/i18n/locales";
import { Sources, sections, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, site } from "@/lib/site";

const game = gemfire.name;

const used: Used = {
  craftpix:
    "Presque tout ce que tu vois : les gemmes, les pillards et leurs animations, les tourelles, les champs de bataille, le kit d'interface, les cartes et les ciels du monde, et les tilesets du village.",
  layerlab:
    "Les illustrations de pièces et de gemmes sur les étagères de la boutique, et les icônes en bas de l'écran.",
  envato: "Les coffres au trésor et leur façon de s'ouvrir, et l'une des trois armées de pillards.",
  kaykit:
    "Les modèles 3D à partir desquels sont rendus les bâtiments de ton royaume, et l'un de ses boss. Publiés sous CC0.",
  gameburp: "La plupart des effets sonores du jeu.",
  rpgmagic: "Les sorts : tout ce qui est lancé plutôt que frappé.",
  craftpixMusic: "La musique du menu et de la carte du monde.",
  titan:
    "Tous les mots du jeu sont écrits dans cette police. Publiée sous la SIL Open Font License ; la copie que nous livrons ajoute des lettres accentuées pour les noms turcs, polonais, tchèques et hongrois, et porte donc un autre nom.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Crédits",
  description: `L'art, le son et les logiciels dont ${game} est fait, et qui les a créés.`,
  intro: `${game} est fait par ${site.company}. Les illustrations et les sons sont sous licence des studios ci-dessous, à qui l'on doit des remerciements plus que des petites lignes.`,
  Body: () => (
    <>
      <p>
        Chacun de ces packs a été acheté ou publié dans le domaine public, et aucune des
        licences ne demande de mention. Nous les citons quand même, parce que quelqu&rsquo;un a
        dessiné tout ça.
      </p>

      <h2>Art</h2>
      <Sources ids={sections.art} used={used} />

      <h2>Son et musique</h2>
      <Sources ids={sections.sound} used={used} />

      <h2>Typographie</h2>
      <Sources ids={sections.type} used={used} />

      <h2>Logiciels</h2>
      <p>
        Conçu avec <strong>Unity</strong>, sur <strong>Google Firebase</strong>. Les publicités
        sont diffusées via <strong>Unity LevelPlay</strong> et <strong>Google AdMob</strong>, et
        le consentement est recueilli avec la plateforme de messages aux utilisateurs de Google.
        Ce que chacun reçoit, et à quoi cela sert, est expliqué dans la{" "}
        <a href={localePath("fr", "/privacy")}>politique de confidentialité</a>.
      </p>

      <h2>Il manque quelqu&rsquo;un ?</h2>
      <p>
        Si tu as créé quelque chose qu&rsquo;on voit dans {game} et que tu n&rsquo;es pas sur
        cette liste, écris à <a href={`mailto:${site.email}`}>{site.email}</a> et nous
        corrigerons ça.
      </p>
    </>
  ),
};

export default doc;
