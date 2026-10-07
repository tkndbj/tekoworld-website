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

/** Translation of privacy/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Gizlilik Politikası",
  description: `${site.company} ve ${game} verilerini nasıl işliyor, sade bir dille.`,
  intro: `${game}'ın ve bu web sitesinin senin hakkında neler topladığını, neden topladığını ve bu konuda neler yapabileceğini burada anlatıyoruz.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          {game}&rsquo;ın tamamını bize adını, e-posta adresini ya da kendinle ilgili başka
          hiçbir bilgiyi vermeden oynayabilirsin. İlerlemen kaydedilip geri yüklenebilsin diye
          anonim bir hesap oluşturulur. Bu hesap bir kişiyi değil, bir kayıt dosyasını tanımlar.
        </p>
        <p className="mb-2">
          Reklamı yalnızca sen izlemeyi seçtiğinde gösteririz; reklamlar, reklam kimliği
          kullanabilen üçüncü taraflarca sağlanır. AB&rsquo;de ve Birleşik Krallık&rsquo;ta önce
          sana sorulur ve cevabını istediğin zaman ayarlar ekranından değiştirebilirsin.
        </p>
        <p>
          Verilerini satmayız. Kim olduğunla ilgilenmiyoruz; tek derdimiz oyunun çalışması.
        </p>
      </Summary>

      <h2 id="who-we-are">Biz kimiz</h2>
      <p>
        {game}, {site.company} adıyla faaliyet gösteren {site.entity} ({site.address})
        tarafından yayınlanır; mağaza sayfasında adı geçen yayıncı da budur. AB ve Birleşik
        Krallık Genel Veri Koruma Tüzüğü (GDPR) bakımından, burada anlatılan bilgilerin veri
        sorumlusu biziz. Bize{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> adresinden ulaşabilirsin.
      </p>
      <p>
        Bu politika, Android ve iOS&rsquo;taki {game}&rsquo;ı ve bu web sitesini kapsar. Başka
        bir oyun yayınlarsak, onun da burada kendi sayfası olacak.
      </p>

      <h2 id="what-we-collect">Neleri topluyoruz ve neden</h2>
      <p>
        Her şeyi kapsıyormuş gibi görünmek yerine somut olmaya çalıştık. Bir şey bu tabloda
        yoksa, oyun onu toplamıyor demektir.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ne</th>
              <th>Neden</th>
              <th>Ne zaman</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Anonim bir hesap kimliği</strong>, Firebase Authentication tarafından
                oluşturulur
              </td>
              <td>
                İlerlemen sunucularımıza kaydedilsin ve yeni bir cihazda geri yüklenebilsin
                diye. Rastgele bir karakter dizisidir. Bir giriş hesabı bağlamayı seçmedikçe
                adınla, e-postanla ya da telefon numaranla ilişkilendirilmez.
              </td>
              <td>İlk açılışta</td>
            </tr>
            <tr>
              <td>
                <strong>Oyundaki ilerlemen</strong>: hangi kuşatmaları kaç yıldızla
                bitirdiğin, Sonsuz Nöbet&rsquo;teki en iyi aşaman, altınların, mücevherlerin,
                kalplerin ve ipuçların, sahip olduğun kuleler, çanta ve yoldaşlar, krallığının
                yerleşimi ve üzerinde durduğu topraklar, günlük serin ve ayarların
              </td>
              <td>
                Oyun kaldığın yerden devam etsin ve aynı ilerleme diğer cihazlarında da
                görünsün diye.
              </td>
              <td>Oynadıkça</td>
            </tr>
            <tr>
              <td>
                <strong>Herkese açık bir krallık kartı</strong>: seçtiğin bekçi adı, avatar
                olarak kullandığın yoldaş, bekçi seviyen, krallığının puanı ve yıldız sayısı ve
                ligin
              </td>
              <td>
                Diğer oyuncular seni sıralamada görebilsin ve krallığını ziyaret edebilsin diye.
                Diğer oyuncuların görebildiği tek bilgi budur. Profil sekmesinden istediğin zaman
                kapatabilirsin; kartın kaldırılır.
              </td>
              <td>Sıralama açık olduğu sürece</td>
            </tr>
            <tr>
              <td>
                <strong>Seçtiğin bekçi adı</strong>, iki oyuncu aynı adı alamasın diye
                rezervasyon olarak tutulur
              </td>
              <td>
                Adlar benzersiz kalsın diye. Bu adı sen seçersin; herkese açık olmasını
                istemiyorsan gerçek adını kullanma.
              </td>
              <td>Bir ad belirlersen</td>
            </tr>
            <tr>
              <td>
                <strong>Bağlı bir giriş hesabı</strong>: Apple&rsquo;dan ya da Google&rsquo;dan
                bir kimlik ve o sağlayıcının bize ilettiği bilgiler; buna e-posta adresin de
                dahil olabilir
              </td>
              <td>
                Yalnızca, cihazını kaybetsen de ilerlemen korunsun diye bir hesap bağlamayı
                seçersen. Şifren hiçbir zaman bize gelmez.
              </td>
              <td>Yalnızca bağlarsan</td>
            </tr>
            <tr>
              <td>
                <strong>Satın alma kayıtları</strong>: mağazadaki işlem kimliği ve neyin satın
                alındığı
              </td>
              <td>
                Bir satın almayı Apple ya da Google ile doğrulamak ve parasını ödediğin şeyi
                sana bir kez vermek için. <strong>Kart bilgilerini asla görmeyiz</strong>. Ödeme
                oyunun içinde değil, mağazanın içinde yapılır.
              </td>
              <td>Bir şey satın alırsan</td>
            </tr>
            <tr>
              <td>
                <strong>Reklam kimlikleri ve ilgili veriler</strong>, reklam ortaklarımız
                tarafından işlenir
              </td>
              <td>
                İzlemeyi seçtiğin reklamları göstermek ve oyunun ücretsiz olmasının bedelini
                karşılamak için. Aşağıdaki <a href="#advertising">Reklam</a> bölümüne bak.
              </td>
              <td>Bir reklam izlediğinde</td>
            </tr>
            <tr>
              <td>
                <strong>Oyun analitiği</strong>: bir kuşatmanın başlaması, kazanılması ya da
                kaybedilmesi, bir kule alınması, bir sandık açılması veya bir satın almanın
                tamamlanması gibi olaylar, cihaz düzeyinde bir kimlikle
              </td>
              <td>
                Oyuncuların nerede takıldığını ve oyunun hangi kısımlarının çalışmadığını görmek
                için. Google Analytics for Firebase tarafından işlenir. Aşağıdaki{" "}
                <a href="#analytics">Analitik ve atıf</a> bölümüne bak.
              </td>
              <td>Oynadıkça, gerektiği yerde onayınla</td>
            </tr>
            <tr>
              <td>
                <strong>Yükleme atfı</strong>: varsa seni oyunu yüklemeye hangi reklamın ya da
                bağlantının götürdüğü ve yaptığın satın almaların doğrulanması
              </td>
              <td>
                Reklamlarımızdan hangisinin parasına değdiğini bilmek için. AppsFlyer tarafından
                işlenir.
              </td>
              <td>Bir kez, onay tercihin netleştikten sonra</td>
            </tr>
            <tr>
              <td>
                Başka bir oyuncunun bekçi adı hakkında <strong>yaptığın bir bildirim</strong>
              </td>
              <td>
                Adı inceleyebilmek ve gerekirse değiştirebilmek için. Bildirimler sahte
                yapılamasın diye, bildirimi hangi hesabın yaptığı kaydedilir.
              </td>
              <td>Yalnızca bir adı bildirirsen</td>
            </tr>
            <tr>
              <td>
                <strong>Temel teknik bilgiler</strong>: cihaz modeli, işletim sistemi sürümü,
                dil ve hata tanılamaları
              </td>
              <td>
                Elimizde olmayan bir cihazda bir şeyin neden çöktüğünü ya da bir ekranın neden
                yanlış çizildiğini bulmak için.
              </td>
              <td>Gerektiğinde</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Bilerek toplamadıklarımız</h3>
      <ul>
        <li>Bekçi adı olarak yazmadıkça adın.</li>
        <li>Bize e-posta göndermedikçe ya da bir giriş hesabı bağlamadıkça e-posta adresin.</li>
        <li>Kişilerin, fotoğrafların, mikrofonun, kameran ya da tam konumun.</li>
        <li>Ödeme kartı bilgilerin. Bunlar bize hiç ulaşmaz.</li>
        <li>Mesajlar. Sohbet yok ve oyuncuların birbirine ulaşmasının hiçbir yolu yok.</li>
      </ul>

      <h2 id="legal-bases">Hukuki dayanaklarımız (Birleşik Krallık ve AB)</h2>
      <ul>
        <li>
          <strong>Sözleşmenin ifası</strong>: ilerlemeni kaydetmek ve geri yüklemek, bir satın
          almayı yerine getirmek. Bunlar olmadan oyun çalışmaz.
        </li>
        <li>
          <strong>Açık rıza</strong>: yasanın onay istediği durumlarda kişiselleştirilmiş
          reklam, oyun analitiği ve yükleme atfı ile herkese açık sıralamada yer almak. Bunların
          hepsi isteğe bağlıdır ve hepsinden vazgeçilebilir.
        </li>
        <li>
          <strong>Meşru menfaat</strong>: oyunu çalışır tutmak, çökmeleri incelemek, bildirilen
          adları incelemek ve oyun ekonomisinde dolandırıcılığı ve kötüye kullanımı önlemek.
        </li>
        <li>
          <strong>Yasal yükümlülük</strong>: vergi ve muhasebe için satın alma kayıtlarını
          saklamak.
        </li>
      </ul>

      <h2 id="advertising">Reklam</h2>
      <p>
        Oyun ücretsiz ve masrafını reklamlar karşılıyor. Reklamlar önemli olan anlamda isteğe
        bağlı: bölümler arasında reklam ve banner yok. {game}&rsquo;daki her reklam, kalp,
        altın ya da ipucu karşılığında izlemeyi senin seçtiğin bir reklamdır ve her türün
        günlük bir sınırı vardır.
      </p>
      <p>
        Reklamlar, aracılık platformu olarak <strong>Unity LevelPlay</strong> (ironSource) ve
        onun birlikte çalıştığı reklam ağları tarafından sunulur; bunlar şu anda{" "}
        <strong>Unity Ads</strong> ve <strong>Google AdMob</strong>&rsquo;u içerir. Bu
        ortaklar, topladıkları verilerin bağımsız sorumlularıdır ve kendi politikaları vardır:
      </p>
      <ul>
        <li>
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">
            Unity: oyuncu ve uygulama kullanıcısı gizlilik politikası
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites" rel="noopener noreferrer" target="_blank">
            Google: Google, hizmetlerini kullanan site ve uygulamalardan gelen bilgileri nasıl
            kullanır
          </a>
        </li>
      </ul>

      <h3>Tercihin ve nasıl değiştireceğin</h3>
      <p>
        Avrupa Ekonomik Alanı&rsquo;nda ya da Birleşik Krallık&rsquo;taysan, herhangi bir
        kişiselleştirilmiş reklam gösterilmeden önce Google sertifikalı bir onay formuyla sana
        sorulur. Reddedersen yine reklam görürsün ve izlediğin reklamların ödüllerini yine
        alırsın. Yalnızca reklamlar senin hakkındaki bir profile dayanmaz.
      </p>
      <p>
        Cevabını istediğin zaman değiştirebilirsin: <strong>Ayarlar</strong>&rsquo;ı (Ana
        ekrandaki ya da Profil ekranındaki dişli simgesi) aç ve{" "}
        <strong>{label.privacyChoices}</strong> seçeneğine dokun.
      </p>
      <p>
        iOS&rsquo;ta ayrıca uygulamanın cihazın reklam kimliğini kullanıp kullanamayacağı
        sorulur. Bu cevap işletim sistemine aittir ve{" "}
        <strong>iOS Ayarlar › Gizlilik ve Güvenlik › Takip</strong> bölümünden değiştirilebilir.
      </p>

      <h2 id="analytics">Analitik ve atıf</h2>
      <p>
        Oyuncuların nerede zorlandığını ve neyin çalışmadığını görebilmek için bir kuşatmanın
        başlaması ya da bir sandığın açılması gibi oyun olaylarını{" "}
        <strong>Google Analytics for Firebase</strong> ile kaydediyoruz. Onayın gerektiği
        yerlerde bu olaylar yalnızca sen onay verdikten sonra kaydedilir.
      </p>
      <p>
        Varsa hangi reklamın ya da bağlantının bir yüklemeye yol açtığını öğrenmek ve satın
        almaları doğrulamak için <strong>AppsFlyer</strong> kullanıyoruz. AppsFlyer yalnızca onay
        tercihin belli olduktan sonra başlatılır; kişiselleştirmeyi kabul etmediysen anonim
        modda çalışır. Politikası{" "}
        <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">
          appsflyer.com
        </a>{" "}
        adresindedir.
      </p>

      <h2 id="sharing">Verilerin kimlerle paylaşılıyor</h2>
      <p>Her biri tek bir iş için az sayıda hizmet sağlayıcı kullanıyoruz:</p>
      <ul>
        <li>
          <strong>Google Firebase</strong> (Authentication, Cloud Firestore, Cloud Functions,
          Analytics): anonim hesap, kayıtlı ilerleme ve sıralama. Veriler Avrupa Birliği&rsquo;nde
          saklanır.
        </li>
        <li>
          <strong>Apple ve Google</strong>: uygulamanın dağıtımı, seçersen giriş, ödemeler ve
          satın alma doğrulaması.
        </li>
        <li>
          <strong>Unity LevelPlay ve reklam ağları</strong>: yukarıda anlatıldığı gibi reklam.
        </li>
        <li>
          <strong>AppsFlyer</strong>: yukarıda anlatıldığı gibi yükleme atfı.
        </li>
      </ul>
      <p>
        Kişisel bilgileri satmayız ve yukarıdaki reklam ortaklarının senin onayınla yaptıklarının
        ötesinde, bağlamlar arası davranışsal reklamcılık için paylaşmayız.
      </p>

      <h2 id="transfers">Yurt dışına aktarım</h2>
      <p>
        Kayıt verilerimiz Avrupa Birliği&rsquo;nde tutulur. Hizmet sağlayıcılarımızdan bazıları
        Amerika Birleşik Devletleri&rsquo;nde yerleşiktir ve verileri orada işleyebilir; bunu
        Avrupa Komisyonu&rsquo;nun standart sözleşme maddelerine, AB-ABD Veri Gizliliği
        Çerçevesi&rsquo;ne ya da eşdeğer bir güvenceye dayanarak yaparlar.
      </p>

      <h2 id="retention">Ne kadar süre saklıyoruz</h2>
      <ul>
        <li>
          <strong>Kayıtlı ilerleme</strong>: hesap kullanıldığı sürece ve kullanılmaz hâle
          geldikten sonra 24 aya kadar; bu sürenin sonunda silinebilir.
        </li>
        <li>
          <strong>Herkese açık krallık kartın</strong>: gizleyene ya da verilerini silene kadar,
          hangisi önce olursa. Sıralamalar her gece yeniden oluşturulur; gizlenen bir kart bir gün
          içinde sıralamadan çıkar.
        </li>
        <li>
          <strong>Satın alma kayıtları</strong>: vergi ve muhasebe mevzuatının gerektirdiği süre
          boyunca, genellikle yedi yıl, ve bir makbuzun iki kez kullanılmasını önlemek için
          gereken süre boyunca. Bunları yok etmemize izin verilmediği için oyun verilerin
          silindiğinde de saklanırlar.
        </li>
        <li>
          Diğer oyuncuların adları hakkında <strong>yaptığın bildirimler</strong>: bildirilen
          hesap var olduğu sürece; incelemenin yapıldığı gösterilebilsin diye.
        </li>
      </ul>

      <h2 id="rights">Hakların</h2>
      <p>
        AB ya da Birleşik Krallık GDPR&rsquo;ı senin için geçerliyse, verilerinin bir kopyasını
        isteme, düzeltilmesini isteme, silinmesini isteme, kullanımını kısıtlama ya da itiraz
        etme ve verdiğin onayı geri çekme hakların vardır. Kaliforniya Tüketici Gizliliği Yasası
        ve başka yasalar kapsamında da benzer haklar bulunur.
      </p>
      <p>
        En hızlı yollar oyunun içinde: sıralamadan çıkma seçeneği Profil sekmesinde, reklam
        tercihi Ayarlar&rsquo;da, hesap silme de Profil sekmesinde. Başka her şey için ya da her
        şeyi silmek için{" "}
        <Link href={localePath("tr", "/delete-account")}>verilerini silme</Link> sayfasına bak
        veya <a href={mailto(mail.privacy)}>{site.email}</a> adresine yaz. 30 gün içinde yanıt
        veririz.
      </p>
      <p>
        Hesaplar varsayılan olarak anonim olduğundan, bir talebi yerine getirmeden önce hangi
        hesabın sana ait olduğunu kanıtlamanı isteyebiliriz; bu genellikle talebi bağlı bir giriş
        hesabının e-posta adresinden göndererek ya da oyunda gösterilen hesap kimliğini bize
        ileterek yapılır.
      </p>
      <p>
        Verilerini kötü işlediğimizi düşünüyorsan, ülkendeki veri koruma otoritesine şikâyette
        bulunabilirsin.
      </p>

      <h2 id="children">Çocuklar</h2>
      <p>
        {game} genel kitleye yönelik bir oyundur. 13 yaşından küçük çocuklara yönelik değildir
        ve reklam ortaklarımız nezdinde çocuklara yönelik uygulama olarak kayıtlı değildir. 13
        yaşından küçük çocuklardan bilerek kişisel bilgi toplamayız. Bir çocuğun bize bilgi
        verdiğini düşünüyorsan <a href={mailto(mail.child)}>{site.email}</a> adresine yaz;
        bilgileri sileriz.
      </p>

      <h2 id="this-website">Bu web sitesi</h2>
      <p>
        Bu site statiktir. Çerez kullanmaz, analitik çalıştırmaz ve seni takip etmez. Senin
        hakkında bildiği tek şey, sayfayı sana gönderebilmesi için tarayıcının barındırma
        sağlayıcımıza ilettikleridir. Bir dil seçersen ya da dil önerisini kapatırsan, tarayıcın
        bunu sekme açık kaldığı sürece hatırlar; bu bilgi cihazında kalır ve bize hiçbir zaman
        gönderilmez.
      </p>

      <h2 id="changes">Değişiklikler</h2>
      <p>
        Bu politikayı değiştirirsek en üstteki tarihi güncelleriz; önemli bir değişiklik olursa,
        yürürlüğe girmeden önce oyunda duyururuz.
      </p>
      <p>
        Bu politika başka dillerde de yayınlanır. Bunlar bu İngilizce metnin çevirileridir;
        biri İngilizce metinden farklıysa İngilizce metin geçerlidir.
      </p>

      <h2 id="contact">İletişim</h2>
      <p>
        {site.entity}, {site.company} adıyla faaliyet göstermektedir
        <br />
        {site.address}
        <br />
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
