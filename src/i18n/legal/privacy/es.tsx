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

/** Translation of privacy/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Política de privacidad",
  description: `Cómo tratan tus datos ${site.company} y ${game}, en palabras sencillas.`,
  intro: `Aquí se explica qué recogen sobre ti ${game} y esta web, por qué, y qué puedes hacer al respecto.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Puedes jugar a todo {game} sin darnos tu nombre, tu correo electrónico ni ningún
          otro dato sobre ti. Se crea una cuenta anónima para que tu progreso se pueda guardar y
          recuperar. Identifica una partida guardada, no a una persona.
        </p>
        <p className="mb-2">
          Solo mostramos anuncios cuando eliges ver uno, y los proporcionan terceros que pueden
          usar un identificador publicitario. En la UE y el Reino Unido se te pregunta antes, y
          puedes cambiar tu respuesta cuando quieras desde la pantalla de ajustes.
        </p>
        <p>
          No vendemos tus datos. No nos interesa quién eres, solo si el juego funciona.
        </p>
      </Summary>

      <h2 id="who-we-are">Quiénes somos</h2>
      <p>
        {game} lo publica {site.entity}, que opera como {site.company}, con domicilio en{" "}
        {site.address}, el mismo editor que figura en la ficha de la tienda. A efectos del
        Reglamento General de Protección de Datos de la UE y del Reino Unido, somos el
        responsable del tratamiento de la información descrita aquí. Puedes escribirnos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        Esta política cubre {game} en Android e iOS y esta web. Si publicamos otro juego, tendrá
        su propia entrada aquí.
      </p>

      <h2 id="what-we-collect">Qué recogemos y por qué</h2>
      <p>
        Hemos intentado que esto sea concreto en lugar de sonar exhaustivo. Si algo no está en
        esta tabla, el juego no lo recoge.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Qué</th>
              <th>Por qué</th>
              <th>Cuándo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Un identificador de cuenta anónimo</strong>, generado por Firebase
                Authentication
              </td>
              <td>
                Para que tu progreso se guarde en nuestros servidores y se recupere en un
                dispositivo nuevo. Es una cadena aleatoria. No está vinculado a tu nombre, correo
                ni número de teléfono salvo que decidas vincular una cuenta de inicio de sesión.
              </td>
              <td>Primer inicio</td>
            </tr>
            <tr>
              <td>
                <strong>Tu progreso en el juego</strong>: qué asedios has terminado y con cuántas
                estrellas, tu mejor oleada en la Guardia Infinita, tus monedas, gemas, corazones y
                pistas, las torres, la mochila y los compañeros que tienes, la distribución de tu
                reino y las tierras sobre las que se levanta, tu racha diaria y tus ajustes
              </td>
              <td>
                Para que el juego continúe donde lo dejaste y el mismo progreso aparezca en tus
                otros dispositivos.
              </td>
              <td>Mientras juegas</td>
            </tr>
            <tr>
              <td>
                <strong>Una tarjeta pública del reino</strong>: el nombre de guardián que
                elegiste, el compañero que usas como avatar, tu nivel de guardián, la puntuación
                y las estrellas de tu reino, y tu liga
              </td>
              <td>
                Para que otros jugadores te vean en la clasificación y visiten tu reino. Es la
                única información que pueden ver otros jugadores. Puedes desactivarla en
                cualquier momento desde la pestaña Perfil, lo que retira tu tarjeta.
              </td>
              <td>Mientras la clasificación esté activada</td>
            </tr>
            <tr>
              <td>
                <strong>El nombre de guardián que elijas</strong>, guardado como reserva para que
                dos jugadores no puedan quedarse con el mismo
              </td>
              <td>
                Para que los nombres sean únicos. Este nombre lo eliges tú; no uses tu nombre
                real si prefieres que no sea público.
              </td>
              <td>Si eliges un nombre</td>
            </tr>
            <tr>
              <td>
                <strong>Un inicio de sesión vinculado</strong>: un identificador de Apple o
                Google, y lo que ese proveedor nos envíe, que puede incluir tu correo electrónico
              </td>
              <td>
                Solo si decides vincular una cuenta para que tu progreso sobreviva a la pérdida
                de tu dispositivo. Nunca recibimos tu contraseña.
              </td>
              <td>Solo si la vinculas</td>
            </tr>
            <tr>
              <td>
                <strong>Registros de compra</strong>: el identificador de la transacción en la
                tienda y lo que se compró
              </td>
              <td>
                Para confirmar una compra con Apple o Google y darte lo que pagaste, una sola
                vez. <strong>Nunca vemos los datos de tu tarjeta</strong>. El pago se hace dentro
                de la tienda, no dentro del juego.
              </td>
              <td>Si compras algo</td>
            </tr>
            <tr>
              <td>
                <strong>Identificadores publicitarios y datos relacionados</strong>, gestionados
                por nuestros socios publicitarios
              </td>
              <td>
                Para mostrar los anuncios que eliges ver y para pagar que el juego sea gratis.
                Consulta <a href="#advertising">Publicidad</a> más abajo.
              </td>
              <td>Cuando ves un anuncio</td>
            </tr>
            <tr>
              <td>
                <strong>Analítica de juego</strong>: eventos como empezar, ganar o perder un
                asedio, comprar una torre, abrir un cofre o completar una compra, con un
                identificador del dispositivo
              </td>
              <td>
                Para ver dónde se atascan los jugadores y qué partes del juego no funcionan. Lo
                gestiona Google Analytics para Firebase. Consulta{" "}
                <a href="#analytics">Analítica y atribución</a> más abajo.
              </td>
              <td>Mientras juegas, con tu consentimiento cuando se requiera</td>
            </tr>
            <tr>
              <td>
                <strong>Atribución de la instalación</strong>: qué anuncio o enlace, si lo hubo,
                te llevó a instalar el juego, y la confirmación de las compras que haces
              </td>
              <td>
                Para saber qué publicidad nuestra merece la pena pagar. Lo gestiona AppsFlyer.
              </td>
              <td>Una vez, cuando se ha resuelto el consentimiento</td>
            </tr>
            <tr>
              <td>
                <strong>Una denuncia que presentes</strong> sobre el nombre de guardián de otro
                jugador
              </td>
              <td>
                Para poder revisar el nombre y, si hace falta, sustituirlo. La denuncia registra
                qué cuenta la presentó, para que no se puedan falsificar.
              </td>
              <td>Solo si denuncias un nombre</td>
            </tr>
            <tr>
              <td>
                <strong>Información técnica básica</strong>: modelo del dispositivo, versión del
                sistema operativo, idioma y diagnósticos de errores
              </td>
              <td>
                Para averiguar por qué algo se ha cerrado o una pantalla se ha dibujado mal en un
                dispositivo que no tenemos.
              </td>
              <td>Cuando hace falta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Lo que deliberadamente no recogemos</h3>
      <ul>
        <li>Tu nombre, salvo que lo escribas como nombre de guardián.</li>
        <li>Tu correo electrónico, salvo que nos escribas o vincules una cuenta.</li>
        <li>Tus contactos, fotos, micrófono, cámara o ubicación precisa.</li>
        <li>Los datos de tu tarjeta de pago. Nunca nos llegan.</li>
        <li>Mensajes. No hay chat ni forma de que los jugadores se pongan en contacto.</li>
      </ul>

      <h2 id="legal-bases">Nuestras bases legales (Reino Unido y UE)</h2>
      <ul>
        <li>
          <strong>Ejecución de un contrato</strong>: guardar y recuperar tu progreso, y
          cumplir una compra. Sin esto el juego no funciona.
        </li>
        <li>
          <strong>Consentimiento</strong>: publicidad personalizada, analítica de juego y
          atribución de instalaciones cuando la ley exige consentimiento, y aparecer en la
          clasificación pública. Todo esto es opcional y todo se puede retirar.
        </li>
        <li>
          <strong>Interés legítimo</strong>: mantener el juego funcionando, diagnosticar
          cierres, revisar nombres denunciados y prevenir el fraude y el abuso de la economía
          del juego.
        </li>
        <li>
          <strong>Obligación legal</strong>: conservar registros de compras para fines
          fiscales y contables.
        </li>
      </ul>

      <h2 id="advertising">Publicidad</h2>
      <p>
        El juego es gratis, y los anuncios son lo que lo paga. Los anuncios son opcionales en
        el sentido que importa: no hay anuncios entre niveles ni banners. Cada anuncio de{" "}
        {game} es uno que eliges ver a cambio de corazones, monedas o una pista, y cada tipo
        tiene un límite diario.
      </p>
      <p>
        Los anuncios los sirve <strong>Unity LevelPlay</strong> (ironSource) como plataforma de
        mediación, junto con las redes publicitarias con las que trabaja, que actualmente
        incluyen <strong>Unity Ads</strong> y <strong>Google AdMob</strong>. Estos socios son
        responsables independientes de los datos que recogen y tienen sus propias políticas:
      </p>
      <ul>
        <li>
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">
            Unity: política de privacidad para jugadores y usuarios de apps
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            Google: cómo usa Google la información de los sitios o apps que usan sus servicios
          </a>
        </li>
      </ul>

      <h3>Tu elección, y cómo cambiarla</h3>
      <p>
        Si estás en el Espacio Económico Europeo o en el Reino Unido, se te pregunta antes de
        mostrar cualquier publicidad personalizada, mediante un formulario de consentimiento
        certificado por Google. Si lo rechazas, seguirás viendo anuncios y recibiendo las
        recompensas por verlos. Simplemente no se basarán en un perfil tuyo.
      </p>
      <p>
        Puedes cambiar tu respuesta en cualquier momento: abre <strong>Ajustes</strong> (el
        icono del engranaje en la pantalla de Inicio o de Perfil) y elige{" "}
        <strong>{label.privacyChoices}</strong>.
      </p>
      <p>
        En iOS, se te pregunta aparte si la app puede usar el identificador publicitario del
        dispositivo. Esa respuesta pertenece al sistema operativo y se puede cambiar en{" "}
        <strong>Ajustes de iOS › Privacidad y seguridad › Rastreo</strong>.
      </p>

      <h2 id="analytics">Analítica y atribución</h2>
      <p>
        Usamos <strong>Google Analytics para Firebase</strong> para registrar eventos de juego,
        como empezar un asedio o abrir un cofre, y así ver dónde tienen problemas los jugadores
        y qué no funciona. Cuando se requiere consentimiento, estos eventos solo se registran
        después de que lo hayas dado.
      </p>
      <p>
        Usamos <strong>AppsFlyer</strong> para saber qué anuncio o enlace, si lo hubo, llevó a
        una instalación, y para confirmar compras. AppsFlyer solo se inicia cuando ya se conoce
        tu elección de consentimiento, y si no has aceptado la personalización funciona en un
        modo anonimizado. Su política está en{" "}
        <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">
          appsflyer.com
        </a>
        .
      </p>

      <h2 id="sharing">Con quién se comparten tus datos</h2>
      <p>Usamos unos pocos proveedores, cada uno para una tarea:</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> (Authentication, Cloud Firestore, Cloud Functions,
          Analytics): la cuenta anónima, el progreso guardado y la clasificación. Los datos se
          almacenan en la Unión Europea.
        </li>
        <li>
          <strong>Apple y Google</strong>: distribución de la app, inicio de sesión si lo
          eliges, pagos y verificación de compras.
        </li>
        <li>
          <strong>Unity LevelPlay y sus redes publicitarias</strong>: publicidad, como se
          describe arriba.
        </li>
        <li>
          <strong>AppsFlyer</strong>: atribución de instalaciones, como se describe arriba.
        </li>
      </ul>
      <p>
        No vendemos información personal ni la compartimos para publicidad comportamental entre
        contextos más allá de lo que hacen, con tu consentimiento, los socios publicitarios
        indicados arriba.
      </p>

      <h2 id="transfers">Transferencias internacionales</h2>
      <p>
        Los datos de las partidas se guardan en la Unión Europea. Algunos de nuestros
        proveedores tienen su sede en Estados Unidos y pueden tratar datos allí, amparados en
        las cláusulas contractuales tipo de la Comisión Europea, el Marco de Privacidad de
        Datos UE-EE. UU. o una garantía equivalente.
      </p>

      <h2 id="retention">Cuánto tiempo los conservamos</h2>
      <ul>
        <li>
          <strong>Progreso guardado</strong>: mientras la cuenta esté en uso, y hasta 24 meses
          después de que deje de usarse, tras lo cual puede eliminarse.
        </li>
        <li>
          <strong>Tu tarjeta pública del reino</strong>: hasta que la ocultes o borres tus
          datos, lo que ocurra primero. La clasificación se reconstruye cada noche, así que una
          tarjeta oculta desaparece de ella en menos de un día.
        </li>
        <li>
          <strong>Registros de compra</strong>: durante el tiempo que exija la normativa fiscal
          y contable, que suele ser de siete años, y el necesario para impedir que un recibo se
          canjee dos veces. Sobreviven al borrado de tus datos del juego, porque no se nos
          permite destruirlos.
        </li>
        <li>
          <strong>Denuncias que presentes</strong> sobre nombres de otros jugadores: mientras
          exista la cuenta denunciada, para poder demostrar que la revisión se hizo.
        </li>
      </ul>

      <h2 id="rights">Tus derechos</h2>
      <p>
        Si te aplica el RGPD de la UE o del Reino Unido, tienes derecho a pedir una copia de
        tus datos, a que se corrijan, a que se eliminen, a limitar u oponerte a cómo los
        usamos y a retirar el consentimiento que hayas dado. Existen derechos similares en la
        Ley de Privacidad del Consumidor de California y otras leyes.
      </p>
      <p>
        Las vías más rápidas están en el propio juego: la opción de salir de la clasificación
        está en la pestaña Perfil, la elección sobre publicidad en Ajustes, y el borrado de la
        cuenta en la pestaña Perfil. Para cualquier otra cosa, o para borrarlo todo, consulta{" "}
        <Link href={localePath("es", "/delete-account")}>cómo borrar tus datos</Link> o escribe
        a <a href={mailto(mail.privacy)}>{site.email}</a>. Respondemos en un plazo de 30 días.
      </p>
      <p>
        Como las cuentas son anónimas por defecto, puede que tengamos que pedirte que
        demuestres qué cuenta es la tuya antes de atender una solicitud, normalmente enviándola
        desde la dirección de un inicio de sesión vinculado o dándonos el identificador de
        cuenta que aparece en el juego.
      </p>
      <p>
        Si crees que hemos tratado mal tus datos, puedes presentar una reclamación ante la
        autoridad de protección de datos de tu país.
      </p>

      <h2 id="children">Menores</h2>
      <p>
        {game} es un juego para todos los públicos. No está dirigido a menores de 13 años ni
        está registrado como app dirigida a niños ante nuestros socios publicitarios. No
        recogemos a sabiendas información personal de menores de 13 años. Si crees que un
        menor nos ha dado información, escribe a{" "}
        <a href={mailto(mail.child)}>{site.email}</a> y la eliminaremos.
      </p>

      <h2 id="this-website">Esta web</h2>
      <p>
        Esta web es estática. No instala cookies, no usa analítica y no te rastrea. Lo único
        que sabe de ti es lo que tu navegador le dice a nuestro proveedor de alojamiento para
        poder enviarte la página. Si eliges un idioma, o cierras la sugerencia de uno, tu
        navegador lo recuerda mientras la pestaña esté abierta; se guarda en tu dispositivo y
        nunca se nos envía.
      </p>

      <h2 id="changes">Cambios</h2>
      <p>
        Si cambiamos esta política, actualizaremos la fecha de arriba, y si el cambio es
        importante lo avisaremos en el juego antes de que entre en vigor.
      </p>
      <p>
        Esta política se publica también en otros idiomas. Son traducciones del texto en
        inglés, y si alguna difiere de él, prevalece el texto en inglés.
      </p>

      <h2 id="contact">Contacto</h2>
      <p>
        {site.entity}, que opera como {site.company}
        <br />
        {site.address}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
