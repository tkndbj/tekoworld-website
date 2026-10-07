import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.tr.mail;
const label = gameTextFor("tr").labels;
const game = gemfire.name;

/**
 * Translation of delete-account/en.tsx. Button names are the game's own Turkish labels, so
 * the steps can be followed on the screen they describe.
 */
const doc: LegalDoc = {
  title: "Hesabını ve verilerini sil",
  description: `${game} hesabını ve onunla birlikte tutulan verileri nasıl silersin.`,
  intro:
    "Krallığın hakkında tuttuğumuz her şeyi sildirebilirsin. Tam olarak ne olduğu aşağıda.",
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          En hızlı yol oyunun içinde: <strong>Profil</strong> sekmesi, ardından{" "}
          <strong>Hesap</strong> kartı, ardından <strong>{label.deleteAccount}</strong>. Hemen
          geçerli olur.
        </p>
        <p className="mb-2">
          Oyunu artık açamıyorsan bunun yerine{" "}
          <a href={mailto(mail.deleteAccount)}>{site.email}</a> adresine yaz; 30 gün içinde
          senin yerine biz yaparız.
        </p>
        <p>
          Yalnızca uygulamayı silmek sunucularımızdaki verileri <strong>silmez</strong>. Sadece
          o cihazdaki kopyayı kaldırır.
        </p>
      </Summary>

      <h2 id="in-app">1. Oyunun içinden sil</h2>
      <p>
        Bu, silme talebi değil, gerçek silme işlemidir. Kimse okumaz, kimsenin onaylaması
        gerekmez ve 30 gün beklemez.
      </p>
      <ol>
        <li>
          {game}&rsquo;ı aç ve <strong>Profil</strong> sekmesine git.
        </li>
        <li>
          <strong>Hesap</strong> kartına kadar kaydır.
        </li>
        <li>
          O kartın altındaki kırmızı düğmeye, <strong>{label.deleteAccount}</strong>{" "}
          düğmesine dokun.
        </li>
        <li>
          Listelenenleri oku, ardından <strong>{label.deleteEverything}</strong> düğmesine dokun
          ve bir kez daha onayla.
        </li>
      </ol>
      <p>
        Bir Apple ya da Google girişi bağladıysan, gerçekten sen olduğunu bilebilmemiz için önce
        bir kez daha giriş yapman istenir. İnternet bağlantısı gerekir: oyun sunucularımıza
        ulaşamazsa hiçbir şeyin silinmediğini söyler, çünkü yapamadığımız bir silme işlemini
        yapmış gibi davranmayız.
      </p>

      <h2 id="request">2. Ya da bize yaz</h2>
      <p>
        Oyunu zaten kaldırdıysan, cihazını kaybettiysen ya da başka bir nedenle düğmeye
        ulaşamıyorsan bu yolu kullan.
      </p>
      <p>
        Hesaplar anonim olduğu için, bir giriş hesabı bağlamadıysan seni adınla ya da
        e-postanla bulamayız. Oyunu hâlâ açabiliyorsan hesap kimliğin <strong>Profil</strong>{" "}
        sekmesindeki <strong>Hesap</strong> kartında görünür. Kopyala ya da ekran görüntüsünü
        al. Bir Apple ya da Google hesabı bağladıysan bu adımı atlayıp doğrudan o e-posta
        adresinden yazabilirsin.
      </p>
      <p>
        Herhangi bir adresten, konu satırına <strong>{mail.deleteAccount}</strong> yazarak{" "}
        <a href={mailto(mail.deleteAccount)}>{site.email}</a> adresine yaz ve hesap kimliğini
        ya da bağlı giriş hesabının adresini ekle.
      </p>
      <p>
        Aldığımızı teyit eder, hesabın sana ait olduğunu doğrular ve silme işlemini{" "}
        <strong>30 gün</strong> içinde tamamlarız. Bittiğinde sana haber veririz.
      </p>

      <h2 id="what-goes">3. Neler silinir</h2>
      <ul>
        <li>
          Anonim hesabın ve bağlı tüm Apple ya da Google girişleri. Apple ile Giriş Yap izni
          Apple nezdinde iptal edilir.
        </li>
        <li>
          Kayıtlı ilerlemen: bitirdiğin kuşatmalar ve yıldızlar, en iyi aşamaların, altınlar,
          mücevherler, kalpler, ipuçları, kuleler, çanta, yoldaşlar ve krallığının tamamı.
        </li>
        <li>Herkese açık krallık kartın ve sıralamada sahip olduğun her satır.</li>
        <li>
          Bekçi adı rezervasyonun; bu ad başkalarının alabilmesi için serbest bırakılır. Tek
          istisna, moderasyon tarafından reddedilmiş bir addır: o ad, kimse yeniden alamasın diye
          engelli kalır.
        </li>
        <li>Diğer oyuncuların senin adın hakkında yaptığı bildirimler.</li>
      </ul>
      <p>Bu işlem geri alınamaz. Silinen bir krallığı geri getirmemizin hiçbir yolu yok.</p>

      <h2 id="what-stays">4. Saklamak zorunda olduklarımız</h2>
      <p>
        Silme işleminden sonra üç şey kalır; bunu seni sonradan şaşırtmak yerine açıkça
        söylemeyi tercih ederiz:
      </p>
      <ul>
        <li>
          <strong>Satın alma kayıtları</strong>: mağazadaki işlem kimliği ve neyin satın
          alındığı; vergi ve muhasebe mevzuatının gerektirdiği süre boyunca (genellikle yedi yıl)
          ve aynı makbuz iki kez kullanılamasın diye saklanır. Bunları talep üzerine yok etmemize
          izin verilmez. Silme işleminden sonra hiçbir oyun verisiyle bağlantıları kalmaz.
        </li>
        <li>
          Diğer oyuncuların adları hakkında <strong>yaptığın bildirimler</strong>; bu adların
          incelendiği gösterilebilsin diye.
        </li>
        <li>
          <strong>Silme talebinin kendi kayıtları</strong>; talebi yerine getirdiğimizi
          gösterebilmek için.
        </li>
      </ul>
      <p>
        Apple ve Google, satın almalarının kayıtlarını bizden bağımsız olarak tutar. Bunların
        kaldırılmasını istiyorsan onlardan istemen gerekir.
      </p>

      <h2 id="less">Tamamen silmek yerine daha azını istiyorsan</h2>
      <p>
        Her şeyi silmen gerekmeyebilir. Bunların her biri hemen geçerli olur ve hiçbiri hesabının
        geri kalanına dokunmaz:
      </p>
      <ul>
        <li>
          <strong>Herkese açık sıralamadan çık</strong>: <strong>Profil</strong> sekmesi,
          ardından sıralama bölümündeki <strong>{label.hideFromBoards}</strong>. Yayınlanan
          kartın kaldırılır ve bekçi adın artık kimseye görünmez. İlerlemen, satın almaların ve
          krallığın olduğu gibi kalır.
        </li>
        <li>
          <strong>Reklam onayını geri çek</strong>: <strong>Ayarlar</strong> (dişli simgesi),
          ardından <strong>{label.privacyChoices}</strong>.
        </li>
        <li>
          <strong>Bekçi adını değiştir</strong>: <strong>Profil</strong> sekmesi, ardından
          adına dokun. Eski ad serbest bırakılır ve sıralamada yenisi görünür.
        </li>
      </ul>
      <p>
        Bunlardan birini senin yerine bizim yapmamızı istersen{" "}
        <a href={mailto(mail.deleteSome)}>{site.email}</a> adresine yaz ve hangisi olduğunu
        söyle. Her birinin neyi kapsadığını görmek için{" "}
        <Link href={localePath("tr", "/privacy")}>gizlilik politikasına</Link> bak.
      </p>
    </>
  ),
};

export default doc;
