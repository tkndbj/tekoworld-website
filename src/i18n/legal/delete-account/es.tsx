import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.es.mail;
const label = gameTextFor("es").labels;
const game = gemfire.name;

/**
 * Translation of delete-account/en.tsx. Button names are the game's own Spanish labels, so
 * the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Borrar tu cuenta y tus datos",
  description: `Cómo borrar tu cuenta de ${game} y los datos guardados con ella.`,
  intro:
    "Puedes hacer que se borre todo lo que tenemos sobre tu reino. Esto es exactamente lo que ocurre.",
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          La forma más rápida es dentro del juego: la pestaña <strong>Perfil</strong>, después
          la tarjeta <strong>Cuenta</strong> y después <strong>{label.deleteAccount}</strong>.
          Surte efecto al instante.
        </p>
        <p className="mb-2">
          Si ya no puedes abrir el juego, escribe a{" "}
          <a href={mailto(mail.deleteAccount)}>{site.email}</a> y lo haremos por ti en un plazo
          de 30 días.
        </p>
        <p>
          Borrar la app por sí sola <strong>no</strong> borra los datos de nuestros servidores.
          Solo elimina la copia de ese dispositivo.
        </p>
      </Summary>

      <h2 id="in-app">1. Bórrala desde dentro del juego</h2>
      <p>
        Este es el borrado real, no una solicitud de borrado. Nadie la lee, nadie tiene que
        aprobarla y no espera 30 días.
      </p>
      <ol>
        <li>
          Abre {game} y ve a la pestaña <strong>Perfil</strong>.
        </li>
        <li>
          Desplázate hasta la tarjeta <strong>Cuenta</strong>.
        </li>
        <li>
          Toca <strong>{label.deleteAccount}</strong>, el botón rojo al final de esa tarjeta.
        </li>
        <li>
          Lee lo que enumera, toca <strong>{label.deleteEverything}</strong> y confirma una vez
          más.
        </li>
      </ol>
      <p>
        Si has vinculado un inicio de sesión de Apple o Google, primero se te pedirá que vuelvas
        a iniciar sesión, para saber que de verdad eres tú. Necesitas conexión a internet: si
        el juego no puede llegar a nuestros servidores, te dirá que no se ha borrado nada,
        porque no vamos a decir que hemos hecho un borrado que no hemos podido hacer.
      </p>

      <h2 id="request">2. O escríbenos</h2>
      <p>
        Usa esta vía si ya has desinstalado el juego, has perdido el dispositivo o no puedes
        llegar al botón por cualquier otro motivo.
      </p>
      <p>
        Las cuentas son anónimas, así que no podemos buscarte por nombre ni por correo salvo
        que hayas vinculado un inicio de sesión. Si aún puedes abrir el juego, tu identificador
        de cuenta aparece en la tarjeta <strong>Cuenta</strong> de la pestaña{" "}
        <strong>Perfil</strong>. Cópialo o haz una captura de pantalla. Si has vinculado una
        cuenta de Apple o Google, puedes saltarte eso y escribirnos simplemente desde esa
        dirección de correo.
      </p>
      <p>
        Escribe a <a href={mailto(mail.deleteAccount)}>{site.email}</a> desde cualquier
        dirección, con el asunto <strong>{mail.deleteAccount}</strong>, e incluye tu
        identificador de cuenta o la dirección del inicio de sesión vinculado.
      </p>
      <p>
        Te confirmaremos la recepción, verificaremos que la cuenta es tuya y completaremos el
        borrado en un plazo de <strong>30 días</strong>. Te avisaremos cuando esté hecho.
      </p>

      <h2 id="what-goes">3. Qué se borra</h2>
      <ul>
        <li>
          Tu cuenta anónima y cualquier inicio de sesión vinculado de Apple o Google. El
          permiso de Iniciar sesión con Apple se revoca ante Apple.
        </li>
        <li>
          Tu progreso guardado: asedios terminados y estrellas, tus mejores oleadas, monedas,
          gemas, corazones, pistas, torres, la mochila, compañeros y todo tu reino.
        </li>
        <li>Tu tarjeta pública del reino y todas las filas que ocupabas en la clasificación.</li>
        <li>
          La reserva de tu nombre de guardián, que queda libre para que otra persona lo use.
          La única excepción es un nombre rechazado por moderación: ese sigue bloqueado para
          que nadie pueda volver a usarlo.
        </li>
        <li>Las denuncias que otros jugadores presentaron sobre tu nombre.</li>
      </ul>
      <p>Es irreversible. No tenemos forma de recuperar un reino borrado.</p>

      <h2 id="what-stays">4. Qué tenemos que conservar</h2>
      <p>
        Tres cosas sobreviven al borrado, y preferimos decirlo claramente a sorprenderte
        después:
      </p>
      <ul>
        <li>
          <strong>Registros de compra</strong>: el identificador de la transacción en la tienda
          y lo que se compró, que se conservan durante el tiempo que exija la normativa fiscal
          y contable (normalmente siete años) y para que el mismo recibo no se canjee dos
          veces. No se nos permite destruirlos a petición. Tras el borrado ya no están
          vinculados a ninguna partida.
        </li>
        <li>
          <strong>Denuncias que presentaste</strong> sobre nombres de otros jugadores, para
          poder demostrar que esos nombres se revisaron.
        </li>
        <li>
          <strong>Registros de la propia solicitud de borrado</strong>, para poder demostrar que
          la atendimos.
        </li>
      </ul>
      <p>
        Apple y Google guardan sus propios registros de tus compras, al margen de nosotros. Si
        quieres que los eliminen, tendrás que pedírselo a ellos.
      </p>

      <h2 id="less">Si quieres algo menos que un borrado completo</h2>
      <p>
        Puede que no necesites borrarlo todo. Cada una de estas opciones surte efecto al
        instante y ninguna toca el resto de tu cuenta:
      </p>
      <ul>
        <li>
          <strong>Salir de la clasificación pública</strong>: la pestaña{" "}
          <strong>Perfil</strong> y después <strong>{label.hideFromBoards}</strong> en la
          sección de la clasificación. Tu tarjeta publicada se retira y tu nombre de guardián
          deja de ser visible para nadie. Tu progreso, tus compras y tu reino no se tocan.
        </li>
        <li>
          <strong>Retirar el consentimiento publicitario</strong>: <strong>Ajustes</strong>{" "}
          (el icono del engranaje) y después <strong>{label.privacyChoices}</strong>.
        </li>
        <li>
          <strong>Cambiar tu nombre de guardián</strong>: la pestaña <strong>Perfil</strong> y
          después toca tu nombre. El nombre anterior queda libre y la clasificación muestra el
          nuevo.
        </li>
      </ul>
      <p>
        Si prefieres que hagamos alguna de estas cosas por ti, escribe a{" "}
        <a href={mailto(mail.deleteSome)}>{site.email}</a> y dinos cuál. Consulta la{" "}
        <Link href={localePath("es", "/privacy")}>política de privacidad</Link> para ver qué
        abarca cada una.
      </p>
    </>
  ),
};

export default doc;
