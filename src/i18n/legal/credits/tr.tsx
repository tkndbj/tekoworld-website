import { localePath } from "@/i18n/locales";
import { Sources, buddiesSections, sections, type BuddiesUsed, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, site } from "@/lib/site";

const game = gemfire.name;
const bb = balanceBuddies.name;

const used: Used = {
  craftpix:
    "Gördüğün şeylerin çoğu: mücevherler, akıncılar ve animasyonları, kuleler, savaş alanları, arayüz kiti, dünya haritaları ve gökyüzleri ve köyün karo setleri.",
  layerlab:
    "Mağaza raflarındaki altın ve mücevher görselleri ve ekranın altındaki simgeler.",
  envato: "Hazine sandıkları ve açılış animasyonları ile üç akıncı ordusundan biri.",
  kaykit:
    "Krallığındaki binaların oluşturulduğu 3D modeller ve boss'lardan biri. CC0 lisansıyla yayınlanmıştır.",
  gameburp: "Oyundaki ses efektlerinin çoğu.",
  rpgmagic: "Büyüler: vurulmak yerine yapılan her şey.",
  craftpixMusic: "Menüde ve dünya haritasında duyduğun müzik.",
  titan:
    "Oyundaki her kelime bu yazı tipiyle yazılır. SIL Open Font License ile yayınlanmıştır; bizim kullandığımız kopya Türkçe, Lehçe, Çekçe ve Macarca adlar için aksanlı harfler ekler ve bu yüzden farklı bir adla anılır.",
};

const buddiesUsed: BuddiesUsed = {
  craftpix: "Dostların kendileri, Onet oyun kitinden, ve çevrelerindeki düğmeler, paneller ve simgeler.",
  envato:
    "Bir fizik oyunu blok setinden taşlar, tahtalar, metal bloklar, toplar ve buz: dost olmayan ama yine de dengede durması gereken her şey.",
  gameburp: "Düğme tıklaması, balon patlaması ve yayın esnemesi.",
  lilita: "Oyundaki her kelime. SIL Open Font License ile yayınlanmıştır.",
};

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Emeği geçenler",
  description: `${game} ve ${bb}'in yapıldığı görseller, sesler ve yazılımlar, ve onları kimin yaptığı.`,
  intro: `${game} ve ${bb}, ${site.company} tarafından yapılır. İçlerindeki görseller ve sesler aşağıdaki stüdyolardan lisanslanmıştır; onlara küçük puntolu yazılardan çok teşekkür borçluyuz.`,
  Body: () => (
    <>
      <p>
        Buradaki her paket ya satın alındı ya da kamu malı olarak yayınlandı ve lisansların
        hiçbiri adının anılmasını istemiyor. Yine de anıyoruz, çünkü bunların hepsini birileri
        çizdi.
      </p>

      <h2 id="gemfire">{game}</h2>

      <h3>Görseller</h3>
      <Sources ids={sections.art} used={used} />

      <h3>Ses ve müzik</h3>
      <Sources ids={sections.sound} used={used} />

      <h3>Yazı tipi</h3>
      <Sources ids={sections.type} used={used} />

      <h3>Yazılım</h3>
      <p>
        <strong>Unity</strong> ile, <strong>Google Firebase</strong> üzerinde geliştirildi.
        Reklamlar <strong>Unity LevelPlay</strong> ve <strong>Google AdMob</strong> üzerinden
        sunulur; onay ise Google&rsquo;ın Kullanıcı Mesajlaşma Platformu ile alınır. Bunların her
        birinin ne aldığı ve ne için kullandığı{" "}
        <a href={localePath("tr", "/privacy")}>gizlilik politikasında</a> anlatılıyor.
      </p>

      <h2 id="balance-buddies">{bb}</h2>

      <h3>Görseller</h3>
      <Sources ids={buddiesSections.art} used={buddiesUsed} />
      <p>Gökyüzü, tepeler, su, düzenekler ve ana görsel oyun için yapıldı.</p>

      <h3>Ses ve müzik</h3>
      <Sources ids={buddiesSections.sound} used={buddiesUsed} />
      <p>
        Diğer sesler, tek bir tona akort edilmiş yumuşak çanlar ve müzik oyun için yapıldı ya
        da kaydedildi.
      </p>

      <h3>Yazı tipi</h3>
      <Sources ids={buddiesSections.type} used={buddiesUsed} />

      <h3>Yazılım</h3>
      <p>
        <strong>Unity</strong> ile, <strong>Google Firebase</strong> üzerinde yapıldı. Reklamları{" "}
        <strong>Google AdMob</strong> sağlar, onay Google&rsquo;ın User Messaging Platform&rsquo;u ile
        alınır.{" "}
        <a href={localePath("tr", "/privacy#balance-buddies")}>Gizlilik politikasına</a> bak.
      </p>

      <h2>Eksik biri mi var?</h2>
      <p>
        {game}&rsquo;da görülen bir şeyi sen yaptıysan ve bu listede yoksan,{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> adresine yaz; düzeltelim.
      </p>
    </>
  ),
};

export default doc;
