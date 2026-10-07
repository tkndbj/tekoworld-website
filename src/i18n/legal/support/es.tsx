import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.es.mail;
const label = gameTextFor("es").labels;
const game = gemfire.name;

/** Translation of support/en.tsx. Button names are the game's own Spanish labels. */
const doc: LegalDoc = {
  title: "Ayuda",
  description: `Ayuda con ${game}: progreso perdido, compras, corazones, anuncios y cuentas.`,
  intro: `¿Algo no funciona en ${game}? Escríbenos. Lo lee una persona de verdad.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          Escribe a {site.email}
        </a>
      </p>

      <p>
        Solemos responder en un par de días. Ayuda muchísimo que incluyas tu{" "}
        <strong>identificador de cuenta</strong> (pestaña Perfil, tarjeta Cuenta), el modelo
        de tu dispositivo y lo que esperabas que ocurriera.
      </p>

      <h2>Preguntas frecuentes</h2>

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

      <h2>Informar de un problema de seguridad</h2>
      <p>
        Si has encontrado una forma de romper la economía, leer la partida de otro jugador o
        acceder de cualquier otro modo a algo a lo que no deberías, cuéntanoslo en{" "}
        <a href={mailto(mail.security)}>{site.email}</a> antes de contárselo a nadie más. No
        tomaremos medidas contra ti por informar de algo de buena fe.
      </p>
    </>
  ),
};

export default doc;
