import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.es.mail;
const game = gemfire.name;

/** Translation of terms/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Términos del servicio",
  description: `Las reglas para jugar a ${game}.`,
  intro: `Estos son los términos que aceptas al jugar a ${game}.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Juega, no hagas trampas y no te hagas pasar por otra persona en la clasificación.
          Todo lo que compras es una licencia para usarlo dentro del juego. Las monedas y las
          gemas no son dinero y no se pueden canjear por dinero.
        </p>
        <p>
          Los reembolsos los gestionan Apple y Google, no nosotros. Si algo va mal, escríbenos
          antes de dejar una reseña de una estrella. Preferimos arreglarlo.
        </p>
      </Summary>

      <h2 id="agreement">1. El acuerdo</h2>
      <p>
        Estos términos son un acuerdo entre tú y {site.entity}, que opera como {site.company},
        con domicilio en {site.address} (&ldquo;nosotros&rdquo;). Al descargar o jugar a{" "}
        {game} los aceptas. Si no los aceptas, por favor no juegues.
      </p>
      <p>
        Tu tienda de apps también tiene sus propios términos, y cuando se aplican a una compra
        hecha en esa tienda, se aplican junto a estos.
      </p>
      <p>
        Estos términos se publican también en otros idiomas. Son traducciones del texto en
        inglés, y si alguna difiere de él, prevalece el texto en inglés.
      </p>

      <h2 id="licence">2. Tu licencia</h2>
      <p>
        Te concedemos una licencia personal, no exclusiva, intransferible y revocable para
        instalar y jugar a {game} en dispositivos que controles, para tu propio
        entretenimiento. Conservamos la propiedad del juego, sus ilustraciones, su música, sus
        niveles y su código. Algunas ilustraciones y sonidos tienen licencia de terceros, que
        conservan sus derechos sobre ellos.
      </p>
      <p>Te comprometes a no:</p>
      <ul>
        <li>
          modificar, aplicar ingeniería inversa o descompilar el juego, salvo cuando la ley lo
          permita expresamente;
        </li>
        <li>
          usar trampas, automatismos, clientes modificados o editores de memoria, ni
          interferir de otro modo en la economía del juego;
        </li>
        <li>
          vender, alquilar o transferir tu cuenta, ni la moneda y los objetos que contiene, a
          nadie;
        </li>
        <li>atacar, sobrecargar o sondear nuestros servidores.</li>
      </ul>

      <h2 id="account">3. Tu cuenta</h2>
      <p>
        En el primer inicio se crea una cuenta anónima para que tu progreso se pueda guardar.
        Puedes vincularla a una cuenta de Apple o Google para que sobreviva a la pérdida de tu
        dispositivo.
      </p>
      <p>
        Eres responsable de mantener seguro cualquier inicio de sesión vinculado. Si pierdes el
        acceso a una cuenta anónima sin vincular, por ejemplo al borrar la app sin haberla
        vinculado, puede que el progreso no se pueda recuperar y que no podamos identificarlo
        como tuyo.
      </p>
      <p>
        Un inicio de sesión que ya está asociado a otro reino no se puede fusionar con el tuyo,
        porque la moneda se ganó y se gastó por separado en cada uno. El juego te avisa antes
        de sustituir nada.
      </p>

      <h2 id="virtual-items">4. Monedas, gemas, corazones y objetos</h2>
      <p>
        Todo lo que reúnes o compras dentro del juego, incluidas monedas, gemas, corazones,
        pistas, torres y sus mejoras, la mochila, compañeros, piezas del reino, tierras y
        frascos de corazones más grandes, es una{" "}
        <strong>licencia limitada para usarlo dentro de {game}</strong>. No es dinero, ni un
        valor financiero, ni una propiedad. En concreto:
      </p>
      <ul>
        <li>no tiene valor fuera del juego y no se puede cambiar por dinero;</li>
        <li>no se puede transferir, vender ni regalar a otro jugador;</li>
        <li>
          puede reequilibrarse, ajustarse o retirarse a medida que se desarrolla el juego, y
          los precios y las recompensas pueden cambiar;
        </li>
        <li>
          no sobrevive al cierre de tu cuenta ni a la retirada del juego, salvo que la ley
          disponga otra cosa.
        </li>
      </ul>
      <p>
        Las recompensas de anuncios, cofres diarios, la ruleta y las rachas las conceden
        nuestros servidores. Cuando una recompensa no se puede verificar, por ejemplo porque se
        ha modificado una partida guardada, puede rechazarse o revertirse.
      </p>

      <h2 id="purchases">5. Compras y reembolsos</h2>
      <p>
        Las compras se hacen a través del App Store de Apple o de Google Play, y son esas
        tiendas las que cobran. Nunca vemos los datos de tu tarjeta. Los precios que aparecen
        en el juego los fija la tienda para tu país.
      </p>
      <p>
        <strong>Los reembolsos los gestiona la tienda</strong>, según su propia política. No
        podemos emitir un reembolso en su nombre. Si se te cobró una compra y no recibiste lo
        que pagaste, escríbenos primero. Normalmente es algo que podemos arreglar directamente,
        y más rápido.
      </p>
      <p>
        Si eres consumidor en la UE o el Reino Unido, normalmente tienes un derecho de
        desistimiento de 14 días en las compras digitales, pero ese derecho se pierde cuando
        la entrega empieza con tu consentimiento, que es lo que ocurre en el momento en que la
        moneda llega a tu saldo. Esto no afecta a tus derechos legales cuando un producto es
        defectuoso.
      </p>
      <p>
        Si una compra se reembolsa o se anula con un contracargo después de haberse concedido
        la moneda, podemos reducir tu saldo en la cantidad correspondiente, y un frasco de
        corazones reembolsado devuelve tu capacidad de corazones a lo que era.
      </p>

      <h2 id="boards">6. Nombres, la clasificación y las visitas</h2>
      <p>
        Si eliges un nombre de guardián y dejas activada la clasificación, ese nombre, tu
        avatar, tu nivel, la puntuación de tu reino y tu liga son visibles para otros
        jugadores, y otros jugadores pueden visitar tu reino para verlo. Elige en consecuencia.
      </p>
      <p>Podemos rechazar, cambiar o retirar un nombre que:</p>
      <ul>
        <li>suplante a otra persona, a una empresa o a nosotros;</li>
        <li>sea ofensivo o pueda interpretarse como acoso;</li>
        <li>contenga caracteres que estropeen cómo se muestran las entradas de otros jugadores.</li>
      </ul>
      <p>
        Un nombre rechazado no se te quita: lo conservas dentro de tu propio juego y en la
        clasificación apareces con un nombre generado. Otros jugadores pueden denunciar un
        nombre que crean que incumple estas normas, y revisamos todas las denuncias. Puedes
        salir por completo de la clasificación desde la pestaña Perfil.
      </p>

      <h2 id="availability">7. El juego puede cambiar</h2>
      <p>
        Añadimos capítulos, ajustamos la dificultad y las recompensas, corregimos fallos y de
        vez en cuando retiramos cosas que no funcionan. Podemos suspender el servicio por
        mantenimiento y, con el tiempo, podríamos retirar el juego, en cuyo caso avisaremos
        con una antelación razonable a través del juego o de esta web cuando sea posible.
      </p>
      <p>
        No prometemos que el juego funcione sin interrupciones ni errores, y algunas funciones,
        como la clasificación, la tienda y los vídeos con recompensa, necesitan conexión a
        internet.
      </p>

      <h2 id="suspension">8. Suspensión</h2>
      <p>
        Podemos suspender o cerrar una cuenta que incumpla estos términos, en particular una
        usada para hacer trampas, defraudar la economía o acosar a otros jugadores. Cuando sea
        proporcionado, avisaremos primero. Puedes dejar de jugar cuando quieras y borrar tus
        datos como se explica en la{" "}
        <Link href={localePath("es", "/delete-account")}>página de borrado</Link>.
      </p>

      <h2 id="liability">9. Exenciones y responsabilidad</h2>
      <p>
        El juego se ofrece &ldquo;tal cual&rdquo;. En la máxima medida que permita la ley,
        excluimos las garantías implícitas de comerciabilidad y de idoneidad para un fin
        concreto.
      </p>
      <p>
        Nada de lo aquí dispuesto limita la responsabilidad por muerte o lesiones causadas por
        negligencia, por fraude, ni por cualquier otra cosa que no pueda limitarse legalmente.
        Con esa salvedad, nuestra responsabilidad total frente a ti se limita a la mayor de
        estas cantidades: lo que nos hayas pagado en los doce meses anteriores a la
        reclamación, o 50 €.
      </p>
      <p>
        <strong>
          Si eres consumidor, nada de lo dispuesto en estos términos afecta a tus derechos
          legales.
        </strong>
      </p>

      <h2 id="law">10. Legislación aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Chipre. Si eres consumidor,
        conservas además la protección de las leyes imperativas del país en el que vives, y
        puedes iniciar acciones allí.
      </p>

      <h2 id="apple">11. Una nota exigida por Apple</h2>
      <p>
        Este acuerdo es entre tú y nosotros, no con Apple, y Apple no es responsable del juego
        ni de su contenido. Apple no tiene ninguna obligación de prestar asistencia sobre él.
        Si la app no cumple alguna garantía aplicable, puedes notificarlo a Apple y Apple te
        reembolsará el precio de compra; en la máxima medida permitida por la ley, Apple no
        tiene ninguna otra obligación de garantía. Apple y sus filiales son terceros
        beneficiarios de estos términos y pueden hacerlos valer frente a ti.
      </p>

      <h2 id="contact">12. Contacto</h2>
      <p>
        {site.entity}, que opera como {site.company}
        <br />
        {site.address}
        <br />
        <a href={mailto(mail.terms)}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
