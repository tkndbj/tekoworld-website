import { localePath } from "@/i18n/locales";
import {
  Sources,
  buddiesSections,
  sections,
  type BuddiesUsed,
  type Used,
} from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, site } from "@/lib/site";

const game = gemfire.name;
const bb = balanceBuddies.name;

const used: Used = {
  craftpix:
    "Casi todo lo que ves: las gemas, los invasores y sus animaciones, las torres, los campos de batalla, el kit de interfaz, los mapas y cielos del mundo y los tilesets de la aldea.",
  layerlab:
    "Las ilustraciones de monedas y gemas de los estantes de la tienda, y los iconos de la parte inferior de la pantalla.",
  envato: "Los cofres del tesoro y cómo se abren, y uno de los tres ejércitos de invasores.",
  kaykit:
    "Los modelos 3D con los que se renderizan los edificios de tu reino, y uno de sus jefes. Publicados bajo CC0.",
  gameburp: "La mayoría de los efectos de sonido del juego.",
  rpgmagic: "Los hechizos: todo lo que se lanza en lugar de golpear.",
  craftpixMusic: "La música que suena en el menú y sobre el mapa del mundo.",
  titan:
    "Todas las palabras del juego están escritas con ella. Publicada bajo la SIL Open Font License; la copia que incluimos añade letras acentuadas para nombres turcos, polacos, checos y húngaros, y lleva otro nombre por ello.",
};

const buddiesUsed: BuddiesUsed = {
  craftpix: "Los propios amiguitos, del kit de juego Onet, y los botones, paneles e iconos que los rodean.",
  envato:
    "Las piedras, tablones, bloques de metal, bolas y hielo de un set de bloques para juegos de física: todo lo que no es un amiguito y aun así tiene que equilibrarse.",
  gameburp: "El clic de los botones, el estallido de los globos y el tañido del muelle.",
  lilita: "Todas las palabras del juego. Publicada bajo la SIL Open Font License.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Créditos",
  description: `El arte, el sonido y el software con los que están hechos ${game} y ${bb}, y quién los creó.`,
  intro: `${game} y ${bb} los hace ${site.company}. Las ilustraciones y los sonidos tienen licencia de los estudios de abajo, a quienes se debe el agradecimiento más que la letra pequeña.`,
  Body: () => (
    <>
      <p>
        Todos estos paquetes se compraron o se publicaron en dominio público, y ninguna de las
        licencias pide que se les dé crédito. Los nombramos igualmente, porque alguien dibujó
        todo esto.
      </p>

      <h2 id="gemfire">{game}</h2>

      <h3>Arte</h3>
      <Sources ids={sections.art} used={used} />

      <h3>Sonido y música</h3>
      <Sources ids={sections.sound} used={used} />

      <h3>Tipografía</h3>
      <Sources ids={sections.type} used={used} />

      <h3>Software</h3>
      <p>
        Hecho con <strong>Unity</strong>, sobre <strong>Google Firebase</strong>. Los anuncios
        se sirven a través de <strong>Unity LevelPlay</strong> y <strong>Google AdMob</strong>,
        y el consentimiento se recoge con la Plataforma de Mensajes para Usuarios de Google. Qué
        recibe cada uno y para qué se usa se explica en la{" "}
        <a href={localePath("es", "/privacy")}>política de privacidad</a>.
      </p>

      <h2 id="balance-buddies">{bb}</h2>

      <h3>Arte</h3>
      <Sources ids={buddiesSections.art} used={buddiesUsed} />
      <p>
        Los cielos, las colinas, el agua, los mecanismos y la ilustración principal se hicieron
        para el juego.
      </p>

      <h3>Sonido y música</h3>
      <Sources ids={buddiesSections.sound} used={buddiesUsed} />
      <p>
        El resto de los sonidos, las campanillas suaves afinadas en una misma tonalidad y la
        música se crearon o grabaron para el juego.
      </p>

      <h3>Tipografía</h3>
      <Sources ids={buddiesSections.type} used={buddiesUsed} />

      <h3>Software</h3>
      <p>
        Hecho con <strong>Unity</strong>, sobre <strong>Google Firebase</strong>. Los anuncios
        los sirve <strong>Google AdMob</strong>, y el consentimiento se recoge con la Plataforma
        de Mensajes para Usuarios de Google. Consulta la{" "}
        <a href={localePath("es", "/privacy#balance-buddies")}>política de privacidad</a>.
      </p>

      <h2>¿Falta alguien?</h2>
      <p>
        Si hiciste algo que se ve en {game} o en {bb} y no estás en esta lista, escribe a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> y lo corregiremos.
      </p>
    </>
  ),
};

export default doc;
