import Link from "next/link";
import { Summary } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/locales";
import type { LegalDoc } from "@/i18n/legal/types";
import { gemfire, mailto, site } from "@/lib/site";

const mail = dictionaries.tr.mail;
const game = gemfire.name;

/** Translation of terms/en.tsx. Where the two differ, the English text applies. */
const doc: LegalDoc = {
  title: "Hizmet Koşulları",
  description: `${game} oynamanın kuralları.`,
  intro: `${game} oynayarak kabul ettiğin koşullar bunlardır.`,
  Body: () => (
    <>
      <Summary>
        <p className="mb-2">
          Oyunu oyna, hile yapma ve sıralamada başka biriymiş gibi davranma. Satın aldığın her
          şey, onu oyunun içinde kullanma lisansıdır. Altın ve mücevher para değildir ve paraya
          çevrilemez.
        </p>
        <p>
          İadeleri biz değil, Apple ve Google yapar. Bir şeyler ters giderse tek yıldızlı yorum
          bırakmadan önce bize yaz. Sorunu çözmeyi tercih ederiz.
        </p>
      </Summary>

      <h2 id="agreement">1. Sözleşme</h2>
      <p>
        Bu koşullar seninle, {site.company} adıyla faaliyet gösteren {site.entity} ({site.address})
        (&ldquo;biz&rdquo;) arasındadır. {game}&rsquo;ı indirerek ya da oynayarak bu koşulları
        kabul etmiş olursun. Kabul etmiyorsan lütfen oynama.
      </p>
      <p>
        Uygulama mağazanın da kendi koşulları vardır; o mağazadan yaptığın bir satın almaya
        uygulandıkları durumlarda bu koşullarla birlikte geçerlidirler.
      </p>
      <p>
        Bu koşullar başka dillerde de yayınlanır. Bunlar bu İngilizce metnin çevirileridir;
        biri İngilizce metinden farklıysa İngilizce metin geçerlidir.
      </p>

      <h2 id="licence">2. Lisansın</h2>
      <p>
        Sana, {game}&rsquo;ı kontrolündeki cihazlara yükleyip kendi eğlencen için oynaman için
        kişisel, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz. Oyunun,
        görsellerinin, müziğinin, bölümlerinin ve kodunun sahibi biz olmaya devam ederiz. Bazı
        görsel ve ses öğeleri üçüncü taraflardan lisanslanmıştır; bunlar üzerindeki haklar o
        taraflarda kalır.
      </p>
      <p>Şunları yapmamayı kabul edersin:</p>
      <ul>
        <li>
          yasanın açıkça izin verdiği durumlar dışında oyunu değiştirmek, tersine mühendislik
          uygulamak ya da kaynak koduna dönüştürmek;
        </li>
        <li>
          hile, otomasyon, değiştirilmiş istemci ya da bellek düzenleyici kullanmak veya oyun
          ekonomisine başka bir şekilde müdahale etmek;
        </li>
        <li>
          hesabını ya da içindeki para birimini ve eşyaları başkasına satmak, kiralamak veya
          devretmek;
        </li>
        <li>sunucularımıza saldırmak, onları aşırı yüklemek ya da yoklamak.</li>
      </ul>

      <h2 id="account">3. Hesabın</h2>
      <p>
        İlerlemen kaydedilebilsin diye ilk açılışta senin için anonim bir hesap oluşturulur. Bu
        hesabı bir Apple ya da Google hesabına bağlayarak cihazını kaybetsen de korunmasını
        sağlayabilirsin.
      </p>
      <p>
        Bağladığın giriş hesabının güvenliğinden sen sorumlusun. Bağlanmamış bir anonim hesaba
        erişimini kaybedersen, örneğin uygulamayı hesabını bağlamadan silersen, ilerleme geri
        getirilemeyebilir ve onun sana ait olduğunu belirleyemeyebiliriz.
      </p>
      <p>
        Zaten başka bir krallığa bağlı olan bir giriş hesabı seninkiyle birleştirilemez, çünkü
        para birimi her birinde ayrı ayrı kazanılıp harcanmıştır. Oyun, bir şey değiştirilmeden
        önce seni uyarır.
      </p>

      <h2 id="virtual-items">4. Altın, mücevher, kalp ve eşyalar</h2>
      <p>
        Oyunda topladığın ya da satın aldığın her şey, yani altınlar, mücevherler, kalpler,
        ipuçları, kuleler ve geliştirmeleri, çanta, yoldaşlar, krallık parçaları, topraklar ve
        daha büyük kalp şişeleri, <strong>{game} içinde kullanmak için sınırlı bir lisanstır</strong>.
        Para, menkul kıymet ya da mülk değildir. Özellikle:
      </p>
      <ul>
        <li>oyunun dışında değeri yoktur ve paraya çevrilemez;</li>
        <li>başka bir oyuncuya devredilemez, satılamaz ya da verilemez;</li>
        <li>
          oyun geliştikçe yeniden dengelenebilir, ayarlanabilir ya da kaldırılabilir; fiyatlar
          ve ödüller değişebilir;
        </li>
        <li>
          yasanın aksini öngördüğü durumlar dışında, hesabının kapanması ya da oyunun
          sonlandırılmasıyla birlikte sona erer.
        </li>
      </ul>
      <p>
        Reklamlardan, günlük sandıklardan, çarktan ve serilerden gelen ödülleri sunucularımız
        verir. Bir ödül doğrulanamazsa, örneğin bir kayıt dosyası değiştirildiği için,
        reddedilebilir ya da geri alınabilir.
      </p>

      <h2 id="purchases">5. Satın almalar ve iadeler</h2>
      <p>
        Satın almalar Apple&rsquo;ın App Store&rsquo;u ya da Google Play üzerinden yapılır ve
        ödemeyi bu mağazalar alır. Kart bilgilerini asla görmeyiz. Oyunda gösterilen fiyatları
        mağaza, ülkene göre belirler.
      </p>
      <p>
        <strong>İadeleri mağaza yapar</strong>, kendi politikasına göre. Mağaza adına iade
        yapamayız. Bir satın almanın ücreti alındıysa ve parasını ödediğin şey sana ulaşmadıysa
        önce bize yaz. Bu genellikle doğrudan ve daha hızlı çözebileceğimiz bir şeydir.
      </p>
      <p>
        AB&rsquo;de ya da Birleşik Krallık&rsquo;ta tüketiciysen, dijital bir satın almadan
        normalde 14 gün içinde cayma hakkın vardır; ancak bu hak, teslimat senin onayınla
        başladığında, yani para birimi bakiyene geçtiği anda sona erer. Bu durum, ayıplı bir
        üründe yasal haklarını etkilemez.
      </p>
      <p>
        Para birimi verildikten sonra bir satın alma iade edilir ya da ters ibraz edilirse,
        bakiyeni ilgili miktar kadar azaltabiliriz; iade edilen bir kalp şişesi de kalp
        kapasiteni eski hâline döndürür.
      </p>

      <h2 id="boards">6. Adlar, sıralama ve ziyaretler</h2>
      <p>
        Bir bekçi adı seçer ve sıralamayı açık bırakırsan; bu ad, avatarın, seviyen,
        krallığının puanı ve ligin diğer oyunculara görünür ve diğer oyuncular krallığını
        ziyaret edip görebilir. Seçimini buna göre yap.
      </p>
      <p>Şu tür bir adı reddedebilir, değiştirebilir ya da kaldırabiliriz:</p>
      <ul>
        <li>başka bir kişiyi, bir şirketi ya da bizi taklit eden;</li>
        <li>saldırgan olan ya da taciz olarak algılanması muhtemel olan;</li>
        <li>diğer oyuncuların kayıtlarının görüntüsünü bozan karakterler içeren.</li>
      </ul>
      <p>
        Reddedilen bir ad senden alınmaz: onu kendi oyununda tutarsın ve sıralamada onun yerine
        otomatik oluşturulmuş bir adla görünürsün. Diğer oyuncular bu kuralları çiğnediğini
        düşündükleri bir adı bildirebilir ve biz her bildirimi inceleriz. Profil sekmesinden
        sıralamadan tamamen çıkabilirsin.
      </p>

      <h2 id="availability">7. Oyun değişebilir</h2>
      <p>
        Bölgeler ekler, zorluğu ve ödülleri yeniden ayarlar, hataları düzeltir ve zaman zaman
        işe yaramayan şeyleri kaldırırız. Bakım için hizmete ara verebilir ve bir gün oyunu
        sonlandırabiliriz; bu durumda, mümkün olduğunca oyun ya da bu site üzerinden makul bir
        süre önceden haber veririz.
      </p>
      <p>
        Oyunun kesintisiz ya da hatasız olacağını vaat etmiyoruz; sıralama, mağaza ve ödüllü
        videolar dahil bazı özellikler çalışan bir internet bağlantısı gerektirir.
      </p>

      <h2 id="suspension">8. Askıya alma</h2>
      <p>
        Bu koşulları çiğneyen bir hesabı, özellikle hile yapmak, ekonomiyi dolandırmak ya da
        diğer oyuncuları taciz etmek için kullanılan bir hesabı askıya alabilir ya da
        kapatabiliriz. Orantılı olduğu durumlarda önce uyarırız. İstediğin zaman oynamayı
        bırakabilir ve verilerini{" "}
        <Link href={localePath("tr", "/delete-account")}>silme sayfasında</Link> anlatıldığı
        gibi silebilirsin.
      </p>

      <h2 id="liability">9. Sorumluluk reddi ve sorumluluk</h2>
      <p>
        Oyun &ldquo;olduğu gibi&rdquo; sunulur. Yasanın izin verdiği en geniş ölçüde,
        satılabilirlik ve belirli bir amaca uygunluk konusundaki zımni garantileri hariç
        tutarız.
      </p>
      <p>
        Buradaki hiçbir şey, ihmalden kaynaklanan ölüm ya da yaralanma, dolandırıcılık veya
        yasal olarak sınırlandırılamayan başka herhangi bir şey için sorumluluğu sınırlamaz.
        Bu saklı kalmak kaydıyla, sana karşı toplam sorumluluğumuz, talepten önceki on iki ayda
        bize ödediğin tutar ile 50 € arasından hangisi daha yüksekse onunla sınırlıdır.
      </p>
      <p>
        <strong>Tüketiciysen, bu koşullardaki hiçbir şey yasal haklarını etkilemez.</strong>
      </p>

      <h2 id="law">10. Uygulanacak hukuk</h2>
      <p>
        Bu koşullar Kıbrıs Cumhuriyeti hukukuna tabidir. Tüketiciysen, yaşadığın ülkenin
        emredici yasalarının korumasından da yararlanmaya devam edersin ve orada dava
        açabilirsin.
      </p>

      <h2 id="apple">11. Apple&rsquo;ın istediği bir not</h2>
      <p>
        Bu sözleşme Apple ile değil, seninle bizim aramızdadır ve Apple oyundan ya da
        içeriğinden sorumlu değildir. Apple&rsquo;ın oyun için destek sağlama yükümlülüğü yoktur.
        Uygulama geçerli bir garantiye uymazsa Apple&rsquo;a bildirebilirsin ve Apple satın alma
        bedelini iade eder; yasanın izin verdiği en geniş ölçüde Apple&rsquo;ın başka hiçbir
        garanti yükümlülüğü yoktur. Apple ve bağlı şirketleri bu koşulların üçüncü taraf
        lehtarlarıdır ve bu koşulları sana karşı uygulayabilirler.
      </p>

      <h2 id="contact">12. İletişim</h2>
      <p>
        {site.entity}, {site.company} adıyla faaliyet göstermektedir
        <br />
        {site.address}
        <br />
        <a href={mailto(mail.terms)}>{site.email}</a>
      </p>
    </>
  ),
};

export default doc;
