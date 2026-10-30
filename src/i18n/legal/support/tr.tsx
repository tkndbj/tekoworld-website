import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { balanceBuddies, gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.tr.mail;
const label = gameTextFor("tr").labels;
const game = gemfire.name;
const bb = balanceBuddies.name;

/** Translation of support/en.tsx. Button names are the game's own Turkish labels. */
const doc: LegalDoc = {
  title: "Destek",
  description: `${game} ve ${bb} için yardım: kaybolan ilerleme, satın almalar, ipuçları, reklamlar ve hesaplar.`,
  intro: `${game}'da ya da ${bb}'de bir şey çalışmıyor mu? Bize yaz. Yazdığını gerçek bir insan okur.`,
  Body: () => (
    <>
      <p className="not-prose mb-10">
        <a href={mailto(mail.support)} className="btn btn-fire">
          {site.email} adresine yaz
        </a>
      </p>

      <p>
        Genellikle bir iki gün içinde yanıt veririz. <strong>Hesap kimliğini</strong> (Profil
        sekmesi, Hesap kartı), cihaz modelini ve ne olmasını beklediğini yazarsan işimiz çok
        kolaylaşır.
      </p>

      <h2>Sık sorulan sorular</h2>

      <div className="not-prose">
        <Question q="Yeniden yükledikten sonra ilerlemem kayboldu.">
          <p>
            Hiç Apple ya da Google hesabı bağlamadıysan krallık o cihazdaki anonim bir hesaba
            bağlıydı ve yeniden yükleme onu geride bırakmış olabilir. <strong>Profil</strong>{" "}
            sekmesini aç ve Google ya da Apple ile giriş yap. İlerlemenin ileride kaybolan ya da
            sıfırlanan bir cihazdan sonra da korunmasını sağlayan budur.
          </p>
          <p>
            Bir hesap <em>bağladıysan</em>, aynı sağlayıcıyla giriş yap; krallığın geri gelmesi
            gerekir. Gelmezse giriş yaptığın e-posta adresiyle bize yaz.
          </p>
        </Question>

        <Question q="Bir şey için ödeme yaptım ama alamadım.">
          <p>
            Önce oyunu internete bağlıyken yeniden aç. Tamamlanmamış satın almalar açılışta
            otomatik olarak yeniden teslim edilir; çökme ya da bağlantı kopması yüzünden yarıda
            kalan bir satın alma genellikle böyle kendiliğinden çözülür. Mağazadaki{" "}
            <strong>{label.restorePurchases}</strong> düğmesi de istediğinde aynı şeyi yapar.
          </p>
          <p>
            Hâlâ gelmediyse mağaza makbuzu ya da sipariş numarasıyla bize yaz, doğrudan
            çözelim. Bu, iadeden daha hızlıdır.
          </p>
        </Question>

        <Question q="Nasıl iade alırım?">
          <p>
            İadeleri biz değil, Apple ve Google yapar. Onlar adına iade yapamayız. Satın alma
            geçmişinden mağazanın kendi iade sürecini kullan.
          </p>
          <p>
            Sorun fikrini değiştirmen değil de bir şeyin gelmemesiyse, lütfen önce bize yaz;
            bunu genellikle bir gün içinde çözebiliriz.
          </p>
        </Question>

        <Question q="Kalpler nasıl işler?">
          <p>
            Kaybedilen bir kuşatma bir kalbe mal olur ve kalpler zamanla kendiliğinden,
            şişenin sınırına kadar dolar. Her bölgenin ilk üç kuşatmasını, bölgeyi öğrenirken
            ücretsiz kaybedebilirsin; daha önce kazandığın bir kuşatmayı yeniden oynamak da her
            zaman ücretsizdir.
          </p>
          <p>
            Kalbin kalmadıysa bekleyebilir, iki kalp için bir video izleyebilir ya da mücevher
            harcayabilirsin. Daha büyük bir şişe almak sınırı kalıcı olarak yükseltir.
          </p>
        </Question>

        <Question q="Video izle düğmesi hiç video bulamıyor.">
          <p>
            Bu, o anda gösterilecek bir reklam olmadığı anlamına gelir. Reklam bulunabilirliği
            ülkeye, günün saatine ve bugün kaç tane izlediğine göre değişir. Oyun arka planda
            denemeye devam eder; bu yüzden genellikle kısa sürede kendiliğinden yeniden çalışır.
          </p>
          <p>
            Oyunu bitirmek için asla reklam izlemen gerekmez. Hepsi isteğe bağlıdır ve hiçbir
            şey reklamların arkasında kilitli değildir.
          </p>
        </Question>

        <Question q="Sıralamada görünmeyi nasıl durdururum?">
          <p>
            <strong>Profil</strong> sekmesini aç ve sıralama bölümündeki{" "}
            <strong>{label.hideFromBoards}</strong> seçeneğine dokun. Kartın kaldırılır ve bekçi
            adın diğer oyunculara görünmez olur. Adı kendi oyununda tutmaya devam edersin.
          </p>
        </Question>

        <Question q="Reklam tercihimi nasıl değiştiririm?">
          <p>
            <strong>Ayarlar</strong> (Ana ekrandaki ya da Profil ekranındaki dişli simgesi),
            ardından <strong>{label.privacyChoices}</strong>. iOS&rsquo;ta ayrı olan takip izni{" "}
            <strong>iOS Ayarlar › Gizlilik ve Güvenlik › Takip</strong> bölümündedir.
          </p>
        </Question>

        <Question q="Her şeyi nasıl silerim?">
          <p>
            <Link href={localePath("tr", "/delete-account")}>
              Hesabını ve verilerini silme
            </Link>{" "}
            sayfasına bak. Yalnızca uygulamayı silmenin sunucularımızdakileri silmediğini
            unutma.
          </p>
        </Question>

        <Question q="Bekçi adım reddedildi.">
          <p>
            Adlar benzersiz olmalıdır; ayrıca birini taklit eden, taciz olarak algılanabilecek
            ya da diğer oyuncuların sıralamadaki kayıtlarını bozan karakterler içeren adları
            filtreleriz.
          </p>
          <p>
            Reddedilen bir ad senden alınmaz. Onu kendi oyununda tutarsın ve sıralamada onun
            yerine otomatik oluşturulmuş bir adla görünürsün.
          </p>
        </Question>

        <Question q="Başka bir oyuncunun adı rahatsız edici.">
          <p>
            Sıralamadan o oyuncunun krallığını aç ve <strong>{label.report}</strong> seçeneğine
            dokun. Her bildirimi inceleriz; kurallara aykırı bir ad, otomatik oluşturulmuş bir
            adla değiştirilir. Kimin bildirdiği sana söylenmez, o oyuncuya da bildirenin sen
            olduğu söylenmez.
          </p>
        </Question>

        <Question q="Oyun çevrimdışı çalışır mı?">
          <p>
            Evet. Her kuşatma, bağlantı olmadan da telefonunda çalışır. Sıralama, başka
            krallıkları ziyaret etmek, mağaza, ödüllü videolar ve hesabına giriş yapmak ya da
            hesabını silmek bağlantı gerektirir; günlük bonusları açmak için de bir kez çevrimiçi
            olman gerekir.
          </p>
        </Question>
      </div>

      <h2 id="balance-buddies">{bb}: sık sorulan sorular</h2>

      <div className="not-prose">
        <Question q="Yeniden yükledikten sonra ilerlemem kayboldu.">
          <p>
            İlerlemen ilk bulmacadan itibaren o cihazdaki anonim bir hesapla buluta yedeklenir.
            Yeniden yükleme yeni bir hesap başlatır. İlerlemeni kurulumlar ya da telefonlar
            arasında taşımak için <strong>Settings</strong>&rsquo;i aç ve Google ya da Apple ile giriş
            yap. Yeni kurulumda aynı sağlayıcıyla giriş yaptığında ilerlemen geri gelir.
          </p>
          <p>Gelmezse, o girişin e-posta adresinden bize yaz.</p>
        </Question>

        <Question q="Giriş yaptım ve ilerlemem değişti.">
          <p>
            O girişin zaten kendi ilerlemesi vardı. Oyun, cihazındaki ilerlemeyi değiştirmeden
            önce sorar ve yalnızca onaylarsan geçer. Cihazda yapılan satın almalar her durumda
            korunur. Geri dönmek için çıkış yap ve diğer hesapla giriş yap.
          </p>
        </Question>

        <Question q="İpuçları nasıl çalışır?">
          <p>
            Onla başlarsın. Ondan azken her dört saatte bir tanesi kendiliğinden geri gelir.
            İpucu, sıradaki dostun gideceği yerde parlayan bir hayalet gösterir; parasını
            ödediğin bir adım, yeniden denediğinde ve diğer cihazlarında ücretsiz olarak açık
            kalır.
          </p>
          <p>
            İki tane daha için kısa bir video izleyebilir ya da mağazadan paket alabilirsin. Her
            bulmaca ipucusuz da çözülebilir.
          </p>
        </Question>

        <Question q="Neden bulmacalar arasında reklam görüyorum?">
          <p>
            İlk sekiz bulmacanda hiç yok ve hiçbir bulmacanın ortasında yok. Sonrasında çözdüğün
            her iki bulmacadan sonra kısa bir reklam çıkabilir; oyunun ücretsiz kalmasını
            sağlayan bu. Mağazadaki <strong>No Ads</strong> aboneliği ya da Starter Bundle&rsquo;ın 30
            reklamsız günü bunları kapatır.
          </p>
        </Question>

        <Question q="No Ads aboneliğini nasıl iptal ederim?">
          <p>
            Oyundan değil, mağazandan: Android&rsquo;de Google Play › Ödemeler ve abonelikler ›
            Abonelikler; iOS&rsquo;ta Ayarlar › adın › Abonelikler. Ödemesi yapılmış ayın sonuna kadar
            etkin kalır. Uygulamayı ya da hesabını silmek aboneliği iptal etmez.
          </p>
        </Question>

        <Question q="Bir şey için ödeme yaptım ama gelmedi.">
          <p>
            Oyunu internete bağlıyken yeniden aç: tamamlanmamış satın almalar ve etkin bir
            abonelik açılışta yeniden alınır. Hâlâ gelmediyse mağaza makbuzu ya da sipariş
            numarasıyla bize yaz, hallederiz. İadeler Apple ve Google tarafından kendi
            kurallarına göre yapılır.
          </p>
        </Question>

        <Question q="Reklam tercihimi nasıl değiştiririm?">
          <p>
            <strong>Settings</strong> › <strong>Ad privacy choices</strong>. Bu düğme AB ve
            Birleşik Krallık gibi yasanın gerektirdiği her yerde görünür.
          </p>
        </Question>

        <Question q="Hesabımı nasıl silerim?">
          <p>
            <strong>Settings</strong> › <strong>Delete account</strong> (giriş yaptıktan sonra
            görünür). Ayrıntılar için{" "}
            <Link href={localePath("tr", "/delete-account#balance-buddies")}>
              hesabını ve verilerini silme
            </Link>{" "}
            sayfasına bak.
          </p>
        </Question>

        <Question q="Oyun çevrimdışı çalışıyor mu?">
          <p>
            Evet. Her bulmaca bağlantı olmadan telefonunda çalışır ve ilerlemen yeniden
            çevrimiçi olduğunda yüklenir. Reklamlar, mağaza ve giriş yapmak bağlantı ister.
          </p>
        </Question>
      </div>

      <p className="mt-8">
        <a href={mailto(mail.support, bb)}>{bb} hakkında bize yaz</a>
      </p>

      <h2>Bir güvenlik sorununu bildirmek</h2>
      <p>
        Ekonomiyi bozmanın, başka bir oyuncunun kaydını okumanın ya da erişmemen gereken bir
        şeye ulaşmanın bir yolunu bulduysan, lütfen bunu başka birine anlatmadan önce{" "}
        <a href={mailto(mail.security)}>{site.email}</a> adresinden bize bildir. İyi niyetle
        bildirdiğin bir şey yüzünden sana karşı hiçbir işlem yapmayız.
      </p>
    </>
  ),
};

export default doc;
