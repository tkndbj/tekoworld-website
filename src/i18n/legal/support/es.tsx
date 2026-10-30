import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.es.mail;
const label = gameTextFor("es").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/**
 * Translation of support/en.tsx. Gemfire button names are the game's own Spanish labels;
 * Balance Buddies is English-only, so its button names stay in English.
 */
const doc: LegalDoc = {
  title: "Ayuda",
  description: `Ayuda con ${game} y ${bb}: progreso perdido, compras, pistas, anuncios y cuentas.`,
  intro: `¿Algo no funciona en ${game} o en ${bb}? Escríbenos. Lo lee una persona de verdad.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          Escribe a {site.email}
        </a>
      </p>

      <p>
        Solemos responder en un par de días. Ayuda muchísimo que nos digas de qué juego se
        trata y que incluyas el modelo de tu dispositivo y lo que esperabas que ocurriera. Para{" "}
        {game}, añade tu <strong>identificador de cuenta</strong> (pestaña Perfil, tarjeta
        Cuenta); para {bb}, escríbenos desde la dirección con la que inicias sesión en Google o
        Apple, si la tienes.
      </p>

      <h2 id="gemfire">{game}: preguntas frecuentes</h2>

      <div className="not-prose">
        <Question q="He perdido mi progreso al reinstalar.">
          <p>
            Si nunca vinculaste una cuenta de Apple o Google, el reino estaba ligado a una
            cuenta anónima en ese dispositivo, y al reinstalar puede quedarse atrás. Abre la
            pestaña <strong>Perfil</strong> e inicia sesión con Google o Apple. Eso es lo que
            hace que el progreso sobreviva en el futuro a un dispositivo perdido o borrado.
          </p>
          <p>
            Si <em>sí</em> vinculaste una, inicia sesión con el mismo proveedor y tu reino
            debería volver. Si no vuelve, escríbenos indicando la dirección con la que inicias
            sesión.
          </p>
        </Question>

        <Question q="He pagado algo y no lo he recibido.">
          <p>
            Primero, vuelve a abrir el juego con conexión. Las compras sin terminar se entregan
            de nuevo automáticamente al iniciar, y una compra interrumpida por un cierre o una
            caída de la conexión suele resolverse así sola. El botón{" "}
            <strong>{label.restorePurchases}</strong> de la tienda hace lo mismo cuando lo
            pidas.
          </p>
          <p>
            Si aun así no ha llegado, escríbenos con el recibo de la tienda o el número de
            pedido y lo solucionaremos directamente. Es más rápido que un reembolso.
          </p>
        </Question>

        <Question q="¿Cómo consigo un reembolso?">
          <p>
            Los reembolsos los gestionan Apple y Google, no nosotros. No podemos emitirlos en
            su nombre. Usa el proceso de reembolso de la propia tienda desde tu historial de
            compras.
          </p>
          <p>
            Si el problema es que algo no llegó, y no que hayas cambiado de opinión,
            escríbenos primero; normalmente podemos arreglarlo en un día.
          </p>
        </Question>

        <Question q="¿Cómo funcionan los corazones?">
          <p>
            Perder un asedio cuesta un corazón, y los corazones se recuperan solos con el
            tiempo, hasta el límite de tu frasco. Los tres primeros asedios de cada capítulo se
            pueden perder gratis mientras lo aprendes, y repetir un asedio que ya has ganado
            siempre es gratis.
          </p>
          <p>
            Si te quedas sin corazones, puedes esperar, ver un vídeo para conseguir dos o
            gastar gemas. Comprar un frasco más grande sube el límite para siempre.
          </p>
        </Question>

        <Question q="El botón de ver un vídeo nunca encuentra ninguno.">
          <p>
            Eso significa que en ese momento no había ningún anuncio disponible. La
            disponibilidad varía según el país, la hora del día y cuántos hayas visto ya hoy.
            El juego sigue intentándolo en segundo plano, así que normalmente vuelve a
            funcionar solo.
          </p>
          <p>
            Nunca necesitas ver un anuncio para terminar el juego. Todos son opcionales y no
            hay nada bloqueado tras ellos.
          </p>
        </Question>

        <Question q="¿Cómo dejo de aparecer en la clasificación?">
          <p>
            Abre la pestaña <strong>Perfil</strong> y toca{" "}
            <strong>{label.hideFromBoards}</strong> en la sección de la clasificación. Tu
            tarjeta se retira y tu nombre de guardián deja de ser visible para otros jugadores.
            El nombre lo conservas dentro de tu propio juego.
          </p>
        </Question>

        <Question q="¿Cómo cambio mi elección sobre publicidad?">
          <p>
            <strong>Ajustes</strong> (el icono del engranaje en la pantalla de Inicio o de
            Perfil) y después <strong>{label.privacyChoices}</strong>. En iOS, el permiso de
            rastreo, que es aparte, está en{" "}
            <strong>Ajustes de iOS › Privacidad y seguridad › Rastreo</strong>.
          </p>
        </Question>

        <Question q="¿Cómo lo borro todo?">
          <p>
            Consulta{" "}
            <Link href={localePath("es", "/delete-account")}>
              cómo borrar tu cuenta y tus datos
            </Link>
            . Ten en cuenta que borrar solo la app no borra lo que hay en nuestros servidores.
          </p>
        </Question>

        <Question q="Han rechazado mi nombre de guardián.">
          <p>
            Los nombres tienen que ser únicos, y filtramos los que suplantan a alguien, se
            pueden interpretar como acoso o contienen caracteres que estropean las entradas de
            otros jugadores en la clasificación.
          </p>
          <p>
            Un nombre rechazado no se te quita. Lo conservas dentro de tu propio juego y en la
            clasificación apareces con un nombre generado.
          </p>
        </Question>

        <Question q="El nombre de otro jugador es ofensivo.">
          <p>
            Abre su reino desde la clasificación y toca <strong>{label.report}</strong>.
            Revisamos todas las denuncias, y un nombre que incumple las normas se sustituye por
            uno generado. No se te dirá quién lo denunció, y a esa persona tampoco se le dirá
            que fuiste tú.
          </p>
        </Question>

        <Question q="¿El juego funciona sin conexión?">
          <p>
            Sí. Cada asedio funciona en tu móvil sin conexión. La clasificación, visitar otros
            reinos, la tienda, los vídeos con recompensa y el inicio de sesión o el borrado de
            la cuenta necesitan conexión, y los bonus diarios necesitan que te conectes una vez
            para desbloquearlos.
          </p>
        </Question>
      </div>

      <h2 id="balance-buddies">{bb}: preguntas frecuentes</h2>

      <div className="not-prose">
        <Question q="He perdido mi progreso al reinstalar.">
          <p>
            Tu progreso se guarda en la nube desde el primer puzle, con una cuenta anónima en
            ese dispositivo. Al reinstalar se empieza una nueva, así que para llevarte el
            progreso entre instalaciones o móviles, abre <strong>Settings</strong> (Ajustes) e
            inicia sesión con Google o Apple. Inicia sesión con el mismo proveedor en la nueva
            instalación y tu progreso volverá.
          </p>
          <p>
            Si no vuelve, escríbenos desde la dirección con la que iniciaste sesión.
          </p>
        </Question>

        <Question q="He iniciado sesión y mi progreso ha cambiado.">
          <p>
            Esa cuenta ya tenía su propio progreso. El juego te pregunta antes de sustituir el
            progreso de tu dispositivo y solo cambia si lo confirmas. Las compras hechas en el
            dispositivo se conservan en cualquier caso. Para volver atrás, cierra sesión e
            inicia sesión con la otra cuenta.
          </p>
        </Question>

        <Question q="¿Cómo funcionan las pistas?">
          <p>
            Empiezas con diez. Por debajo de diez, una vuelve sola cada cuatro horas. Una
            pista muestra un fantasma brillante donde va el siguiente amiguito; un paso por el
            que ya has pagado sigue revelado gratis al reintentar y en tus otros dispositivos.
          </p>
          <p>
            También puedes ver un vídeo corto para conseguir dos más o comprar un paquete en la
            tienda. Todos los puzles se pueden resolver sin ellas.
          </p>
        </Question>

        <Question q="¿Por qué veo anuncios entre puzles?">
          <p>
            No hay ninguno en tus primeros ocho puzles y nunca durante un puzle. Después, puede
            salir un anuncio corto cada dos puzles que resuelvas; así es como el juego sigue
            siendo gratis. La suscripción <strong>No Ads</strong> de la tienda, o los 30 días
            sin anuncios del Starter Bundle, los quitan.
          </p>
        </Question>

        <Question q="¿Cómo cancelo la suscripción No Ads?">
          <p>
            Desde tu tienda, no desde el juego: en Android, Google Play › Pagos y
            suscripciones › Suscripciones; en iOS, Ajustes › tu nombre › Suscripciones. Sigue
            activa hasta el final del mes ya pagado. Borrar la app o tu cuenta no la cancela.
          </p>
        </Question>

        <Question q="He pagado algo y no lo he recibido.">
          <p>
            Vuelve a abrir el juego con conexión: las compras sin terminar y una suscripción
            activa se recuperan al iniciar. Si aun así no ha llegado, escríbenos con el recibo
            de la tienda o el número de pedido y lo solucionaremos. Los reembolsos los
            gestionan Apple y Google según sus propias políticas.
          </p>
        </Question>

        <Question q="¿Cómo cambio mi elección sobre publicidad?">
          <p>
            <strong>Settings</strong> (Ajustes) y después{" "}
            <strong>Ad privacy choices</strong> (opciones de privacidad de anuncios). El botón
            aparece allí donde la ley lo exige, como en la UE y el Reino Unido.
          </p>
        </Question>

        <Question q="¿Cómo borro mi cuenta?">
          <p>
            <strong>Settings</strong> y después <strong>Delete account</strong> (Borrar
            cuenta), que aparece una vez que has iniciado sesión. Consulta{" "}
            <Link href={localePath("es", "/delete-account#balance-buddies")}>
              cómo borrar tu cuenta y tus datos
            </Link>{" "}
            para más detalles.
          </p>
        </Question>

        <Question q="¿El juego funciona sin conexión?">
          <p>
            Sí. Cada puzle funciona en tu móvil sin conexión, y tu progreso se sube cuando
            vuelves a estar en línea. Los anuncios, la tienda y el inicio de sesión necesitan
            conexión.
          </p>
        </Question>
      </div>

      <p className="mt-8">
        <a href={mailto(mail.support, bb)}>Escríbenos sobre {bb}</a>
      </p>

      <h2>Informar de un problema de seguridad</h2>
      <p>
        Si has encontrado una forma de romper la economía de cualquiera de los dos juegos, leer la partida de otro jugador o
        acceder de cualquier otro modo a algo a lo que no deberías, cuéntanoslo en{" "}
        <a href={mailto(mail.security)}>{site.email}</a> antes de contárselo a nadie más. No
        tomaremos medidas contra ti por informar de algo de buena fe.
      </p>
    </>
  ),
};

export default doc;
