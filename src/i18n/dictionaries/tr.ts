import { gemfire, placeName, site } from "@/lib/site";
import { rich } from "@/i18n/rich-text";
import type { Dictionary } from "./en";

/**
 * Turkish (sen, as in the game), in the game's own vocabulary: kule, akıncı, tepe, aşama
 * (a wave), kalp, altın (coins), mücevher, bekçi, sıralama, ipucu, bölüm (a level), bölge
 * (a chapter). Capitals are left to CSS, which reads `<html lang="tr">` and writes i as İ.
 */
const tr: Dictionary = {
  site: {
    tagline: "İçinde ateş olan mobil oyunlar.",
    description: `${site.company}, bağımsız bir mobil oyun stüdyosu. Her eşleştirmenin bir kuleyi ateşlediği üçlü eşleştirme ve kule savunması oyunu ${gemfire.name}'ın evi.`,
    keywords: [
      "mobil oyun stüdyosu",
      "üçlü eşleştirme",
      "kule savunması",
      "mobil oyunlar",
      "bağımsız oyun stüdyosu",
    ],
    ogAlt: `${site.company}: bir kale surundaki kuleler, mücevher tahtasının üzerinden bir iskelet ordusuna ateş ediyor.`,
    skip: "İçeriğe geç",
  },

  nav: {
    main: "Ana menü",
    home: `${site.company} ana sayfa`,
    games: "Oyunlar",
    studio: "Stüdyo",
    support: "Destek",
    privacy: "Gizlilik",
    terms: "Koşullar",
    deleteData: "Verilerini sil",
    credits: "Emeği geçenler",
    play: `${gemfire.name} oyna`,
    menu: "Menü",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    language: "Dil",
  },

  footer: {
    blurb:
      "Bağımsız bir mobil oyun stüdyosu. Parıltının altında gerçek mekanikler olan küçük, gürültülü oyunlar yapıyor ve onları kendimiz yayınlıyoruz.",
    studio: "Stüdyo",
    smallPrint: "Yasal metinler",
    copyright: (year: number) =>
      `© ${year} ${site.entity}, ${site.company} adıyla faaliyet göstermektedir. ${gemfire.name} ve görselleri ${site.company}'ün mülküdür.`,
  },

  suggest: {
    text: "Bu sayfanın Türkçesi de var.",
    action: "Türkçe oku",
    dismiss: "Kapat",
  },

  legal: {
    lastUpdated: "Son güncelleme:",
    inShort: "Kısaca",
    translated:
      "Bu metin, İngilizce aslının çevirisidir. İkisi arasında bir fark olursa İngilizce metin geçerlidir.",
    original: "İngilizce aslını oku",
  },

  mail: {
    support: "Destek",
    privacy: "Gizlilik talebi",
    child: "Çocukların gizliliği",
    terms: "Koşullarla ilgili soru",
    security: "Güvenlik",
    deleteAccount: "Hesabımı sil",
    deleteSome: "Verilerimin bir kısmını sil",
  },

  store: {
    comingSoon: "Yakında Google Play ve App Store'da",
    googlePlay: "Google Play'den edinin",
    appStore: "App Store'dan indirin",
  },

  notFound: {
    meta: "Sayfa bulunamadı",
    kicker: "Hata 404",
    title: "Surun burada kapısı yok.",
    body: "Bu adreste hiçbir şey yok. Akıncılar baktı; bu konularda çok titizdirler.",
    home: "Stüdyoya dön",
    game: `${gemfire.name}'a göz at`,
  },

  home: {
    hero: {
      chip: "Bağımsız mobil oyun stüdyosu",
      title: rich("İçinde ", { hl: "ateş" }, " olan", "\n", "oyunlar yapıyoruz."),
      body: `${site.company}, cebindeki telefon için küçük, gürültülü ve mekaniği dürüst oyunlar yapıyor. İlki ${gemfire.name}: bir kale suruna vidalanmış üçlü eşleştirme tahtası; yaptığın her eşleştirme bir kuleyi ateşliyor.`,
      explore: `${gemfire.name}'ı keşfet`,
      about: "Stüdyo hakkında",
      stats: ["ocakta oyun", "çıkışta platform", "zorunlu reklam", "durdurulacak iskelet"],
    },
    ticker: [
      gemfire.name,
      "Üçlü eşleştirme ve kule savunması",
      "Android",
      "iOS",
      site.company,
      "Krallığını kur",
      "Kulelerini geliştir",
      "Suru tut",
    ],
    games: {
      kicker: "Oyunlarımız",
      title: rich("Tek bir oyun. ", { hl: "Bütün emeğimiz." }),
      body: "Her seferinde tek bir oyun çıkarıyor ve çıktıktan sonra da üzerinde çalışmaya devam ediyoruz. Şu an örste olan bu.",
      coverAlt: `${gemfire.name} görseli: bir kale surundaki dört kule, mücevher tahtasının üzerinden bir iskelet ordusuna ateş ediyor.`,
      status: "Geliştiriliyor",
      view: "Oyunu gör",
      nextKicker: "Yuva 02",
      nextTitle: "Sıradaki",
      nextBody: `${gemfire.name}'dan öğrendiğimiz her şey bir sonrakine aktarılıyor. Göstermeye değer bir şey olduğunda ilk burada görünecek.`,
      sealed: "Mühürlü",
    },
    studio: {
      kicker: "Stüdyo",
      title: rich("Küçük ekip. ", { hl: "Büyük patlamalar." }),
      body: `${site.company}, ${placeName("tr")} merkezli bağımsız bir stüdyo. Mobil oyunları, keşke daha çok böyle yapılsa dediğimiz şekilde yapıyoruz: mekaniği dürüst, oyuncuya cömert ve tamamlanmış.`,
      pillars: {
        mechanics: {
          title: "Önce mekanik",
          body: "Bir oyun, parçacık efektleri kapalıyken de ilgi çekici olmalı. Tek bir mücevher çizmeden önce kuralı deniyoruz; kural gri bir ızgarada eğlenceli değilse, oyuna girmiyor.",
        },
        thumb: {
          title: "Başparmağa saygı",
          body: "Oyunlar kısa, düğmeler büyük ve önemli hiçbir şey bir sayacın arkasına saklanmıyor. Mobil oyun otobüste oynanır. Otobüste harika olmalı.",
        },
        phone: {
          title: "Elindeki telefonda çalışır",
          body: "Birkaç yıllık cihazlar için geliştiriyor ve önce onlarda test ediyoruz. Bir bölüm telefonunda kötü çalışıyorsa bu bizim hatamızdır, senin telefonunun eksiği değil.",
        },
        self: {
          title: "Kendimiz yayınlıyor, kendimiz yanıtlıyoruz",
          body: "Seninle aramızda bir yayıncı yok. Oyunu yapan kişiler destek e-postalarını da okuyor; bir oyuncunun bildirdiği hatayı, o kodu yazan kişi düzeltiyor.",
        },
      },
    },
    contact: {
      kicker: "İletişim",
      title: rich("Merhaba de. ", { hl: "Hepsini okuyoruz." }),
      body: "Oyuncular, basın, platformlar ve iş ortakları aynı gelen kutusuna ulaşır. Destek sorularına bir iki gün içinde yanıt veriyoruz.",
      support: "Oyuncu desteği",
    },
  },

  gemfire: {
    genre: "Üçlü eşleştirme ve kule savunması",
    pitch: "Mücevherleri eşleştir. Kuleleri ateşle. Suru tut.",
    description: `${gemfire.name}, bir üçlü eşleştirme ve kule savunması oyunu. Tahtadaki her eşleştirme, aynı renkteki kuleyi kalene yürüyen orduya ateşletir. Aşamaları geç, kulelerini geliştir ve krallığını kur.`,
    ogAlt: `${gemfire.name}: bir kale surundaki kuleler, mücevher tahtasının üzerinden bir iskelet ordusuna ateş ediyor.`,
    hero: {
      body: "Bir kale suruna vidalanmış üçlü eşleştirme tahtası. Üç mücevheri yan yana getir, o renkteki kule tepeden inen akıncılara ateş açsın. Suru tut, cephaneliğini geliştir ve arkasında bir krallık kur.",
      chips: ["Ücretsiz", "Android 8.0+", "iOS 15+", "Çevrimdışı oynanır", "Zorunlu reklam yok"],
      stats: ["elle tasarlanmış savaş", "açılacak kule", "tanışılacak yoldaş", "zorunlu reklam"],
      splashAlt: `${gemfire.name} açılış ekranı: taş kaideler üzerindeki üç kule, mücevher yağmuru altında bir gölge yaratıkları sürüsüne ateş ediyor.`,
    },
    play: {
      kicker: "Nasıl oynanır",
      title: rich("Eşleştir. Güçlen. ", { hl: "Savun." }),
      body: "Bir tahta, bir sur ve aşağı inmek isteyen şeylerle dolu bir tepe. Yaptığın her eşleştirme, atılmış bir atış.",
      steps: {
        match: {
          title: "Eşleştir",
          body: "Bir mücevheri yanındakinin üzerine kaydır. Aynı renkten üçünü yan yana getir, o renkteki kule enerjiyle dolsun. Sıra ne kadar uzunsa enerji o kadar çok. Gelen rengi eşleştir.",
          alt: `${gemfire.name} savaş ekranı: bir mücevher tahtasının üstündeki surda dört kule, bir zindandaki iskeletlere ve balçıklara ateş ediyor.`,
        },
        power: {
          title: "Güçlen",
          body: "Mücevherle daha güçlü kuleler alınır; bir akıncının düşürdüğü dişli, savaşın ortasında bir kuleyi geliştirir. Ateş çömlekleri, şifalar ve güç yüklemeleri kötü giden bir aşamayı çevirir; dolu bir kuleye dokunarak her şeyi tek seferde boşaltabilirsin.",
          alt: "Surda parlayan bir sıra gelişmiş kule; aşağıdaki tahtada kırmızı kalp mücevherlerinden bir zincir yanıyor.",
        },
        defend: {
          title: "Savun",
          body: "Akıncılar tepeden gerçek zamanlı olarak iner. Bir atış, kendi rengindeki akıncıya isabet ettiğinde en çok acıtır. Geçmelerine izin verirsen surunu yıkarlar. Tutarsan krallık büyür.",
          alt: "Çitle çevrili bir arsadan koca bir kaleye büyüyen izometrik bir ada; taçlı bir kurbağa yoldaş da izliyor.",
        },
      },
    },
    arsenal: {
      kicker: "Cephanelik",
      title: rich("Yirmi kule. ", { hl: "Her biri beş yıldız." }),
      body: "Her kule renk renk alınır ve beş yıldıza kadar geliştirilir. İlk onu altınla alınır. Sonraki onu mücevherle alınır ve her biri, zaten tanıdığın bir kulenin büyümüş hâlidir.",
      art: "Gri kaideler üzerinde yeşil, kırmızı ve camgöbeği üç kule; her biri bir alev oku fırlatıyor.",
      tier1: "Kademe I",
      tier1Sub: "altınla alınır",
      tier2: "Kademe II",
      tier2Sub: "mücevherle alınır",
      kit: "Çanta",
      charms: "Tahtadaki tılsımlar",
      charmNotes: {
        prism: "Gökkuşağı renkli bir mücevher. Hangi renkle eşleştirirsen o renk sayılır.",
        lance: "Bulunduğu satırı ve sütunu tek vuruşta temizler.",
        stormglass: "Bütün kule hattı tepedeki her şeye ateş eder.",
      },
    },
    campaign: {
      kicker: "Sefer",
      title: rich("Üç cephe. ", { hl: "Sonra uzun gece." }),
      body: "Üç bölgeye yayılmış, elle tasarlanmış otuz kuşatma; her birinin kendi düşmanı ve kapıda bekleyen kendi boss'u var. Yanlarında Sonsuz Nöbet duruyor: bitmeyen aşamalar ve ne kadar dayandığına göre sıralamada bir yer.",
      chapter: (n: number) => `${n}. bölge`,
      sieges: (n: number) => `${n} kuşatma`,
      taglines: {
        thornwatch: "Kuleleri besle. Hattı tut.",
        broodmarch: "Bataklıkta bir şey yumurtadan çıkıyor.",
        barrowfell: "Ölüler surda durmaz.",
      },
      atTheGate: "Kapıda",
      infinite: "Sonsuz mod",
      endlessPoints: [
        "Savaş hiç bitmez.",
        "Düşmanlar her aşamada güçlenir.",
        "Sıralamadaki yerini kazan.",
      ],
    },
    kingdom: {
      kicker: "Kuşatmaların arasında",
      title: rich("Krallığını ", { hl: "kur." }),
      body: "Surda kazanılan altın, surun arkasında harcanır. Toprak satın al, çitle çevrili bir arsayı kaleye dönüştür; evleri, salonları, duvarları ve bahçeleri karelerden oluşan bir alana istediğin gibi yerleştir. Her parça dört yöne döndürülebilir. Hiçbir krallık bir diğerine benzemez.",
      art: "Krallığını kur: boş, çitle çevrili bir arsadan bir atölyeye, bir burca ve kırmızı çatılı kuleleriyle koca bir kaleye büyüyen bir ada.",
      lands: "Dokuz toprak",
      landList: [
        "Ocakbaşı",
        "Doğu Çayırı",
        "Batı Çukuru",
        "Güney Kıyısı",
        "Kuzey Ucu",
        "Şafak Tarlası",
        "Alacakaranlık Tarlası",
        "Durgun Kıyı",
        "Uzak Teras",
      ],
      leagues: "Dokuz lig",
      leagueList: [
        "Fidanlar",
        "Çalılıklar",
        "Çukurlar",
        "Çayırlar",
        "Meyve Bahçeleri",
        "Tapınaklar",
        "Yaban Ormanları",
        "Sazlıklar",
        "Kadim Orman",
      ],
      companions: "Yoldaşlar",
      companionsTitle: "Otuz bir dost, teker teker.",
      companionsBody:
        "Hükümdar ilk kuşatmadan itibaren yanında. Diğerleriyle krallığın büyüdükçe tanışırsın; hangisini seçersen sıralamada seni o temsil eder.",
    },
    promises: {
      kicker: "Adil oyun",
      title: rich("Asla ", { hl: "yapmayacağımız" }, " altı şey."),
      list: {
        ads: {
          title: "Zorunlu reklam yok",
          body: "Bölümler arasında reklam ve banner yok. Oyundaki her video, kalp, altın ya da ipucu karşılığında izlemek için senin dokunduğun bir videodur ve hepsinin günlük bir sınırı vardır.",
        },
        offline: {
          title: "Çekmeyen yerde de oynanır",
          body: "Her kuşatma, uçak modundayken de telefonunda çalışır. Sıralama, mağaza ve ödüllü videolar bağlantı ister; oyun istemez.",
        },
        save: {
          title: "İlerlemen sunucularımızda",
          body: "İlerlemen, ilk açılıştan itibaren anonim bir hesapla buluta kaydedilir. Google ya da Apple ile giriş yaparsan telefonunu kaybetsen veya değiştirsen de korunur.",
        },
        grind: {
          title: "Para ödemeye zorlayan bir şey yok",
          body: "Her bölüm hiç para harcamadan bitirilebilir. Altın ve mücevher surda kazanılır; satın almak sana zaman kazandırır, oyunun sonunu değil.",
        },
        chat: {
          title: "Sohbet yok, yabancı yok",
          body: "Mesajlaşma yok ve oyuncuların birbirine ulaşmasının hiçbir yolu yok. Başkalarının gördüğü tek şey sıralamadaki bekçi adın ve puanındır; tek dokunuşla gizlenir.",
        },
        phone: {
          title: "Elindeki telefonda çalışır",
          body: "Android 8.0 veya iOS 15 ve üzeri. Önce birkaç yıllık telefonlarda yapılıp test edildi, çünkü çoğu insanın elinde olan bu.",
        },
      },
    },
    faq: {
      kicker: "Sorular",
      title: rich("Kısa ", { hl: "yanıtlar." }),
      body: rich(
        "Uzun olanlar, satın alma ve hesaplarla ilgili olanlar ",
        { link: "destek sayfasında", href: "/support" },
        "."
      ),
      items: [
        {
          q: "Ücretli mi?",
          a: `Hayır. ${gemfire.name} ücretsiz ve her bölümü hiç para harcamadan bitirilebilir. Daha hızlı ilerlemek isteyenler için isteğe bağlı altın, mücevher ve daha büyük kalp şişeleri satın alınabilir.`,
        },
        {
          q: "Reklam var mı?",
          a: "Yalnızca senin seçtiklerin. Bölümler arasında reklam ve banner yok. Oyundaki her video, kalp, altın ya da ipucu karşılığında izlemek için senin dokunduğun bir videodur ve oyunun tamamını tek bir video izlemeden bitirebilirsin.",
        },
        {
          q: "Hesap ya da internet bağlantısı gerekiyor mu?",
          a: "İkisi de gerekmiyor. Her bölüm, telefon çekmese de telefonunda çalışır. İlerlemeni anonim bir hesap saklar; Google ya da Apple ile giriş yapman yalnızca telefonunu kaybettiğinde ilerlemenin korunmasını istiyorsan gerekir.",
        },
        {
          q: "Benim telefonumda çalışır mı?",
          a: "Android 8.0 veya iOS 15 yeterli, fazlası gerekmez. Birkaç yıllık telefonlar için yapıldı ve önce onlarda test edildi.",
        },
        {
          q: "Çocuklar için güvenli mi?",
          a: "Sohbet yok, mesajlaşma yok ve oyuncuların birbirine ulaşmasının hiçbir yolu yok. Başka bir oyuncunun görebileceği tek şey, seçtiğin ad ve yoldaş ile krallığının puanıdır; hepsini tek dokunuşla gizleyebilirsin.",
        },
      ],
    },
    getIt: {
      kicker: "Oyunu edin",
      free: "Android ve iOS'ta ücretsiz.",
    },
  },
};

export default tr;
