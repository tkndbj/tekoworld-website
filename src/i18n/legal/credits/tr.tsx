import { localePath } from "@/i18n/locales";
import { Sources, sections, type Used } from "@/i18n/legal/credits/sources";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, site } from "@/lib/site";

const game = gemfire.name;

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

/** Translation of credits/en.tsx. */
const doc: LegalDoc = {
  title: "Emeği geçenler",
  description: `${game}'ın yapıldığı görseller, sesler ve yazılımlar, ve onları kimin yaptığı.`,
  intro: `${game}, ${site.company} tarafından yapılır. İçindeki görseller ve sesler aşağıdaki stüdyolardan lisanslanmıştır; onlara küçük puntolu yazılardan çok teşekkür borçluyuz.`,
  Body: () => (
    <>
      <p>
        Buradaki her paket ya satın alındı ya da kamu malı olarak yayınlandı ve lisansların
        hiçbiri adının anılmasını istemiyor. Yine de anıyoruz, çünkü bunların hepsini birileri
        çizdi.
      </p>

      <h2>Görseller</h2>
      <Sources ids={sections.art} used={used} />

      <h2>Ses ve müzik</h2>
      <Sources ids={sections.sound} used={used} />

      <h2>Yazı tipi</h2>
      <Sources ids={sections.type} used={used} />

      <h2>Yazılım</h2>
      <p>
        <strong>Unity</strong> ile, <strong>Google Firebase</strong> üzerinde geliştirildi.
        Reklamlar <strong>Unity LevelPlay</strong> ve <strong>Google AdMob</strong> üzerinden
        sunulur; onay ise Google&rsquo;ın Kullanıcı Mesajlaşma Platformu ile alınır. Bunların her
        birinin ne aldığı ve ne için kullandığı{" "}
        <a href={localePath("tr", "/privacy")}>gizlilik politikasında</a> anlatılıyor.
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
