import Link from "next/link";
import { Question } from "@/components/Question";
import { dictionaries } from "@/i18n/dictionaries";
import { gameTextFor } from "@/i18n/game-text";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.tr.mail;
const label = gameTextFor("tr").labels;
const game = gemfire.name;

/** Translation of support/en.tsx. Button names are the game's own Turkish labels. */
const doc: LegalDoc = {
  title: "Destek",
  description: `${game} için yardım: kaybolan ilerleme, satın almalar, kalpler, reklamlar ve hesaplar.`,
  intro: `${game}'da bir şey çalışmıyor mu? Bize yaz. Yazdığını gerçek bir insan okur.`,
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
