import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
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
 * Translation of delete-account/en.tsx. Button names are the game's own Spanish labels, so
 * the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Borrar tu cuenta y tus datos",
  description: `Cómo borrar tu cuenta de ${game} o de ${bb} y los datos guardados con ella.`,
  intro:
    "Puedes hacer que se borre todo lo que tenemos sobre ti en cualquiera de nuestros juegos. Esto es exactamente lo que ocurre.",
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
        <p className="mt-2">
          En {bb}: <strong>Settings</strong> › <strong>Delete account</strong>. Consulta la{" "}
          <a href="#balance-buddies">sección 5</a>.
        </p>

      </Summary>
      <p>
        Los dos juegos son apps independientes con cuentas independientes: borrar una no
        afecta a la otra. Las secciones 1 a 4 tratan de {game}; la{" "}
        <a href="#balance-buddies">sección 5</a> trata de {bb}.
      </p>

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

      <h2 id="balance-buddies">5. {bb}</h2>
      <h3>Bórrala desde el juego</h3>
      <ol>
        <li>
          Abre {bb} y toca <strong>Settings</strong> (Ajustes) en el menú principal.
        </li>
        <li>
          Si no has iniciado sesión, inicia sesión primero con Google o Apple. Así tu progreso
          queda vinculado a ese inicio de sesión y el botón tiene una cuenta que borrar.
        </li>
        <li>
          Toca <strong>Delete account</strong> (borrar cuenta), lee el aviso y confirma.
        </li>
      </ol>
      <p>
        Puede que te pidamos iniciar sesión otra vez, para saber que eres tú, y necesitas
        conexión a internet. Si el borrado no se puede completar, el juego te lo dice y no se
        borra nada.
      </p>
      <p>
        Si ya no puedes abrir el juego, escribe a{" "}
        <a href={mailto(mail.deleteAccount, bb)}>{site.email}</a> desde el correo de tu inicio
        de sesión de Google o Apple, con el asunto <strong>{mail.deleteAccount}</strong>, y la
        borraremos en un plazo de <strong>30 días</strong>. Si nunca iniciaste sesión, tu
        progreso pertenece a una cuenta anónima que no podemos relacionar contigo solo con un
        correo. Sigue los pasos de arriba si aún tienes el juego; si no, escríbenos igualmente
        con el modelo del dispositivo y cuándo jugaste por última vez, más o menos, y haremos
        lo posible por encontrarla.
      </p>
      <h3>Qué se borra</h3>
      <ul>
        <li>
          Tu cuenta y cualquier inicio de sesión de Google o Apple conectado. La autorización de
          &laquo;Iniciar sesión con Apple&raquo; se revoca ante Apple.
        </li>
        <li>
          Tu progreso guardado en nuestros servidores: puzles resueltos, mejores movimientos y
          estrellas, tus pistas, los pasos de pista revelados y el tiempo sin anuncios.
        </li>
        <li>El progreso guardado en el dispositivo desde el que la borras.</li>
      </ul>
      <p>
        Es irreversible. Como en {game}, los <strong>registros de compra</strong> se conservan
        el tiempo que exige la normativa fiscal y contable, y Apple y Google guardan los suyos.
        Borrar tu cuenta <strong>no</strong> cancela una suscripción No Ads: cancélala en los
        ajustes de suscripciones de App Store o Google Play.
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
        <li>
          <strong>Retirar el consentimiento publicitario en {bb}</strong>:{" "}
          <strong>Settings</strong> › <strong>Ad privacy choices</strong>.
        </li>
        <li>
          <strong>Dejar de guardar {bb} en la nube</strong>: <strong>Settings</strong> ›{" "}
          <strong>Sign out</strong> (cerrar sesión). El dispositivo sigue como un invitado
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
