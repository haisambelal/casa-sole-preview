export type JourneyAction = {
  label: string;
  type: "map" | "whatsapp" | "link" | "review";
  href: string;
};

export type JourneyNote = {
  title: string;
  text: string;
};

export type JourneyDetail = {
  label: string;
  text: string;
  mapHref?: string;
  mapLabel?: string;
  linkHref?: string;
  linkLabel?: string;
};

export type JourneyPhoto = {
  src: string;
  alt: string;
};

export type ExploreItem = {
  title: string;
  image: string;
  categories: string[];
  description: string;
  distance: string;
  visitTime: string;
  bestFor: string;
  tip: string;
  mapUrl: string;
};

export type JourneyItem = {
  slug: string;
  title: string;
  stage: string;
  summary: string;
  guestNote: JourneyNote;
  details: JourneyDetail[];
  photos?: JourneyPhoto[];
  exploreItems?: ExploreItem[];
  actions?: JourneyAction[];
};

const magdyWhatsapp = "https://wa.me/201001308835";
const reservationWhatsapp = "https://wa.me/201114161141";

export const appContent = {
  privateInfoTitle: "Bu rehberi kaydedin",
  privateInfoText:
    "Konaklamanız sırasında hızlı erişim için Casa Sole rehberini telefonunuzun ana ekranına ekleyin; bağlantıyı tekrar aramanıza gerek kalmaz.",

  quickActions: [
    {
      icon: "🛬",
      label: "Varış",
      detail: "Havaalanı, taksi ve tesis girişi",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Giriş",
      detail: "Resepsiyon, anahtarlar ve kayıt",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Keşfet",
      detail: "Aktiviteler, yemek ve ulaşım",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Konaklama desteği ve rezervasyonlar",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Yönetilen daire, otel hizmeti değildir",
      text: "Günlük temizlik, yenilemeler ve sarf malzemeleri ayrıca ayarlanmadıkça dahil değildir.",
    },
    {
      title: "Sharm Hills için hazırlandı",
      text: "Casa Sole, yönetilen tatil dairesi markamızdır. Sharm Hills dairenizin bulunduğu tesistir; Casa Sole konaklama desteğini sağlar, Sharm Hills ise ortak tesis ortamını ve ortak olanakları sunar.",
    },
    {
      title: "Özel bilgiler çevrimdışı kalır",
      text: "Wi-Fi ve daireye özel bilgiler dairenin içinde basılıdır, çevrim içi yayınlanmaz.",
    },
  ],

  checkInPreview: [
    "Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh adresine gidin.",
    "Kapıda güvenlikten resepsiyon salonunu sorun, ardından resepsiyonda ekibimizi sorun.",
    "Sahadaki ekibimiz anahtarlar, plaj giriş kartı, Wi-Fi bilgileri ve kayıt konusunda yardımcı olacaktır.",
  ],

  supportPreview:
    "Konaklama desteği için sahadaki ekibimizle iletişime geçin. Uzatma, rezervasyon değişikliği veya transfer için Rezervasyon Ofisi ile iletişime geçin.",

  contactPreview:
    "Sahadaki ekibimiz konaklamanızı destekler. Rezervasyon Ofisi uzatmalar, Booking.com ve diğer platform konularıyla ilgilenir.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Varış",
    stage: "Tesise ulaşmadan önce",
    summary: "Sharm Hills konumu, havaalanı taksi rehberi ve kapı giriş adımları.",
    guestNote: {
      title: "Casa Sole’ye hoş geldiniz",
      text: "Sizi Casa Sole Sharm Hills’te ağırlamayı dört gözle bekliyoruz. Bu sayfayı seyahatten önce veya Sharm El Sheikh International Airport’a vardığınızda kullanın.",
    },
    details: [
      {
        label: "Tesis konumu",
        text: "Casa Sole, Sharm Hills Resort içinde, Al Muntaza Gate 2, Sharm El Sheikh adresindedir.",
      },
      {
        label: "Havaalanından",
        text: "Sharm El Sheikh International Airport, Sharm Hills Resort’a arabayla yaklaşık 5 dakika uzaklıktadır.",
      },
      {
        label: "Havaalanı taksisi",
        text: "Havaalanı taksileri özellikle geç saatlerde daha pahalı olabilir. Arabaya binmeden önce şoförle fiyatı netleştirin.",
      },
      {
        label: "Şoföre söyleyin",
        text: "Şoföre net şekilde söyleyin: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "Ana kapıda",
        text: "Güvenliğe Mr. Magdy ile rezervasyonunuz olduğunu söyleyin. Resepsiyon salonuna yönlendirmelerini isteyin.",
      },
      {
        label: "Resepsiyon salonu",
        text: "Tesise girin, resepsiyon salonuna gidin ve resepsiyonda Mr. Magdy’yi sorun.",
      },
      {
        label: "Havaalanı transferi",
        text: "Casa Sole, normal bir araçla en fazla 4 misafire kadar USD 15 karşılığında havaalanı alma veya bırakma organizasyonuna yardımcı olabilir. Ek misafirler, daha büyük gruplar veya ekstra bagaj önceden koordinasyon gerektirir ve ek ücret uygulanabilir. Lütfen bunu Rezervasyon Ofisi ile önceden ayarlayın.",
      },
    ],
    actions: [
      {
        label: "Tesis haritasını aç",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "Sahadaki ekibimize WhatsApp mesajı gönderin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "giriş",
    title: "Giriş",
    stage: "Giriş ve yerleşme",
    summary: "Giriş saati, temsilci desteği, anahtarlar, plaj kartı ve kayıt.",
    guestNote: {
      title: "Giriş saati",
      text: "Giriş 14:00 ile 23:00 arasında yapılabilir. 23:00 sonrası varış, gelmeden önce Casa Sole ile koordine edilmelidir.",
    },
    details: [
      {
        label: "Erken giriş",
        text: "Erken giriş müsaitliğe bağlı olarak mümkün olabilir. Yerinde değil, önceden koordine edilmelidir.",
      },
      {
        label: "Ekibimizle görüşün",
        text: "Resepsiyon salonuna ulaştığınızda ekibimizi sorun. Giriş işlemlerinde yardımcı olacaklar.",
      },
      {
        label: "Ekibimizin sağlayacağı şeyler",
        text: "Ekibimiz daire anahtarlarını, plaj giriş kartını ve Wi-Fi bilgilerini sağlayacaktır.",
      },
      {
        label: "Pasaport kaydı",
        text: "Yerel resmi güvenlik gereklilikleri gereğince her misafir için orijinal pasaport kopyası gerekir. Pasaportlar yaklaşık 10 dakika kısa süreliğine alınabilir ve hemen ardından iade edilir.",
      },
      {
        label: "Yedek kendi kendine giriş",
        text: "Temsilcimize hemen ulaşılamazsa veya giriş gecikirse lütfen Casa Sole’ye mesaj gönderin; alternatif kendi kendine giriş sürecini başlatacağız.",
      },
    ],
    actions: [
      {
        label: "Sahadaki ekibimize WhatsApp mesajı gönderin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Daire rehberi",
    stage: "Dairenin içinde",
    summary: "Wi-Fi, klima, mutfak eşyaları, havlular, cihazlar, çamaşır makinesi, çöp ve hizmetler.",
    guestNote: {
      title: "Önemli: yönetilen daire",
      text: "Casa Sole yönetilen bir tatil dairesidir, otel hizmeti değildir. Günlük temizlik, yenilemeler, deterjan ve sarf malzemesi değişimleri konaklama süresince dahil değildir; ayrı ve ek ücretle ayarlanmadıkça sağlanmaz.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "Wi-Fi bilgileri dairenin ana kapısının arkasında basılıdır. Bağlantı gezinme ve temel kullanım için uygundur, ancak yoğun yayın için garanti edilmez.",
      },
      {
        label: "5G router seçeneği",
        text: "Daha güçlü internete ihtiyacınız varsa, Casa Sole müsaitliğe bağlı olarak ek ücretle kotası ölçülü bir 5G router sağlayabilir. Lütfen ekibimize sorun.",
      },
      {
        label: "Klima kullanımı",
        text: "Klima açıkken balkon veya teras kapılarını kapatın; daireden çıkarken klimayı ve ışıkları kapatın.",
      },
      {
        label: "Havlular",
        text: "Dairede duş havluları, yüz havluları ve plaj havluları bulunur. Banyo havluları sadece banyo kullanımı içindir. Lütfen ayak, zemin, plaj veya dış alanlar için kullanmayın.",
      },
      {
        label: "Mutfak",
        text: "Mutfakta tabaklar, bardaklar, sıcak su ısıtıcısı, mikrodalga, ocak ve buzdolabı bulunur. Fırın yoktur. Lütfen konaklama boyunca mutfağı temiz tutun.",
      },
      {
        label: "Daire eşyaları",
        text: "Dairede ütü, saç kurutma makinesi, çamaşır kurutma askısı, sıcak su ısıtıcısı, plaj havluları, yüz havluları ve duş havluları bulunur.",
      },
      {
        label: "Çamaşır makinesi",
        text: "Dairede çamaşır makinesi vardır. Deterjan sağlanmaz.",
      },
      {
        label: "Çöp",
        text: "Çöp kutusu lavabonun altındadır. Dolduğunda lütfen çöpleri peyzaj alanındaki en yakın ana toplama kutusuna götürün.",
      },
      {
        label: "Elektrik veya su kesintisi",
        text: "Bölgede su ve elektrik ücretli hizmetlerdir. Nadiren kısa bir kesinti olabilir. Bu normaldir. Ekibimize mesaj gönderin; hizmet genellikle yaklaşık 5 dakika içinde geri gelir.",
      },
      {
        label: "Daire sorunu",
        text: "Bakım veya herhangi bir daire sorunu için lütfen ekibimizle iletişime geçin.",
      },
    ],
    actions: [
      {
        label: "Sahadaki ekibimize WhatsApp mesajı gönderin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "Ev kuralları",
    stage: "Konaklama sırasında",
    summary: "Sessiz saatler, ziyaretçiler, sigara, evcil hayvanlar, hasar ve daire bakımı.",
    guestNote: {
      title: "Lütfen daireye özen gösterin",
      text: "Daire özel olarak yönetilmektedir. Lütfen dikkatli kullanın; komşulara, tesis misafirlerine ve ortak alanlara saygı gösterin.",
    },
    details: [
      {
        label: "Sessiz saatler",
        text: "Sessiz saatler 22:00 ile 08:00 arasındadır. Lütfen bu saatlerde gürültüyü düşük tutun.",
      },
      {
        label: "Ziyaretçiler",
        text: "Ziyaretçiler yalnızca tesis kapısı/güvenlik kaydından sonra kabul edilir. Kayıtsız ziyaretçiler tesise veya daireye girmemelidir.",
      },
      {
        label: "Sigara",
        text: "Daire içinde sigara içmek yasaktır. Sigara sadece dışarıda, balkon veya terasta içilebilir.",
      },
      {
        label: "Evcil hayvanlar",
        text: "Evcil hayvanlar varıştan önce Rezervasyon Ofisi ile koordine edilmelidir. Hayvanlar havuza giremez ve konaklama süresince tasmalı olmalıdır.",
      },
      {
        label: "Çocuklar",
        text: "Çocuklar her zaman gözetim altında olmalıdır. Ebeveynler veya vasiler çocukların güvenliğinden tamamen sorumludur.",
      },
      {
        label: "Mobilyalar",
        text: "Lütfen iç mekân mobilyalarını balkona, terasa, bahçeye, havuza veya plaja çıkarmayın.",
      },
      {
        label: "Hasar veya kırılma",
        text: "Kazalar olabilir. Lütfen herhangi bir hasar veya kırılmayı ekibimize hemen bildirin.",
      },
      {
        label: "Kayıp anahtar veya kart",
        text: "Kayıp anahtar veya kayıp plaj giriş kartı değiştirme ücreti USD 100 olup doğrudan ekibimize ödenir.",
      },
      {
        label: "Zemin kat sivrisinek notu",
        text: "Zemin katta kalıyorsanız, sivrisinekleri önlemeye yardımcı olmak için sineklik kapısını kapalı tutun.",
      },
    ],
    actions: [
      {
        label: "Sahadaki ekibimize WhatsApp mesajı gönderin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Tesis rehberi",
    stage: "Sharm Hills keyfi",
    summary: "Havuzlar, otopark, tesis olanakları, market teslimatı ve ortak alanlar.",
    guestNote: {
      title: "Sharm Hills rehberi",
      text: "Bu sayfa Sharm Hills içinde kalan Casa Sole misafirleri için ortak tesis bilgilerini içerir.",
    },
    details: [
      {
        label: "Havuz",
        text: "Tesis havuzu gün doğumundan gün batımına kadar açıktır. Çocuklar her zaman gözetim altında olmalıdır.",
      },
      {
        label: "Çocuk havuzu ve su kaydırakları",
        text: "Sharm Hills’te çocuk havuzu ve kaydıraklı küçük bir çocuk aqua parkı vardır. Çocuklar her zaman ebeveynleri veya vasileri tarafından izlenmelidir; Casa Sole ve tesis ebeveyn gözetiminin yerine geçmez.",
      },
      {
        label: "Otopark",
        text: "Sharm Hills içinde otopark ücretsizdir.",
      },
      {
        label: "Ortak alanlar",
        text: "Lütfen tesisin tüm ortak alanlarında diğer misafirlerin kişisel alanına ve özgürlüğüne saygı gösterin.",
      },
      {
        label: "Restoran ve kafe",
        text: "Sharm Hills içinde restoran/kafe bulunmaktadır.",
      },
      {
        label: "Market teslimatı",
        text: "Teslimat yapan bir market/dükkan vardır. Sipariş verirken ana kapının arkasındaki basılı bilgide yer alan daire numaranızı ve bina numaranızı belirtin.",
      },
      {
        label: "Tesis içinde evcil hayvanlar",
        text: "Hayvanlar konaklama süresince tasmalı olmalı ve havuza girmemelidir.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Plaj rehberi",
    stage: "Plaj günleri",
    summary: "Ücretsiz Sinbad Beach erişimi, kart kuralları, olanaklar, ulaşım ve plaj ödemeleri.",
    guestNote: {
      title: "Ücretsiz plaj erişimi",
      text: "Casa Sole misafirleri, daire için verilen plaj kartı ile Sinbad Beach’e ücretsiz giriş alır. Lütfen kartı yanınızda getirin ve varışta gösterin.",
    },
    details: [
      {
        label: "Plaja ulaşım",
        text: "Sinbad Beach, Sharm Hills’ten yürüyerek yaklaşık 20 dakika veya arabayla yaklaşık 5 dakikadır. Haritayı kullanabilir veya ücretli bir araç ayarlamamız için bize sorabilirsiniz.",
      },
      {
        label: "Plaj erişimi",
        text: "Plaj erişimi, dairenizin plaj kartı kapsamındaki misafirler için ücretsizdir. Varışta plaj kartını gösterin ve Sharm Hills sakini olduğunuzu söyleyin.",
      },
      {
        label: "Plaj olanakları",
        text: "Sinbad Beach’te tuvaletler, kahve dükkanı, duş, dalış merkezi, şnorkel marinası ve restoran vardır.",
      },
      {
        label: "Kart hakkı",
        text: "Ücretsiz plaj hakkı daire büyüklüğüne bağlıdır. Tek yatak odalı ünitelerde genellikle 2 misafir için bir kart bulunur. İki yatak odalı ünitelerde genellikle 4 misafir için iki kart bulunur.",
      },
      {
        label: "Şezlonglar ve havlular",
        text: "Kapsamdaki misafirler için şezlonglar ücretsizdir. Plaj havluları dairenin içinde sağlanır. Ekstra ürünler veya ek misafirler misafir tarafından yönetilmelidir.",
      },
      {
        label: "Yiyecek ve içecekler",
        text: "Plaj restoranından yapılan tüm siparişler misafir tarafından yerinde doğrudan ödenir.",
      },
      {
        label: "Ulaşım",
        text: "Haritayı kullanarak plaja yürüyebilir veya ücretli bırakma ve alma için bize sorabilirsiniz.",
      },
      {
        label: "Kayıp kart",
        text: "Kayıp plaj giriş kartı değiştirme ücreti USD 100 olup doğrudan ekibimize ödenir.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Sinbad Beach fotoğrafı",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Sinbad Beach fotoğrafı",
      },
    ],
    actions: [
      {
        label: "Sinbad Beach haritasını aç",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Bizden araç isteyin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Sharm’ı keşfet",
    stage: "Aktiviteler ve gezilecek yerler",
    summary: "Sharm El Sheikh’te yapılacak en iyi şeyler: deniz turlarından gece hayatına kadar.",
    guestNote: {
      title: "Casa Sole ile Sharm’ı keşfedin",
      text: "Sharm El Sheikh; şnorkel, dalış, plaj kulüpleri, çöl turları, Old Market, SOHO Square ve rahat gece hayatıyla bilinir. Casa Sole doğrudan tur düzenlemez, ancak seçenekleri anlamanıza ve gerektiğinde ulaşım ayarlamanıza yardımcı olabilir.",
    },
    details: [
      {
        label: "Bu rehber nasıl kullanılır",
        text: "Nereye gideceğinizi seçmeden önce aşağıdaki kartlardan mesafe, beklenen ziyaret süresi ve uygunluğu karşılaştırın.",
      },
      {
        label: "Aktivite rezervasyonu",
        text: "Casa Sole doğrudan tur düzenlemez. Geziler veya aktiviteler için rezervasyondan önce alış saatini, dahil olanları ve fiyatı netleştirin.",
      },
      {
        label: "Seçim için yardıma mı ihtiyacınız var?",
        text: "Grubunuza neyin uygun olduğundan emin değilseniz bize sorun, karar vermenize yardımcı oluruz.",
      },
      {
        label: "Yiyecek ve su ipucu",
        text: "Musluk suyu içmeyin. Musluk suyuyla yıkanmış meyve veya yiyecek için mümkünse şişe suyla ekstra durulama yapın.",
      },
      {
        label: "Güneşten korunma",
        text: "Kızıldeniz güneşi güçlüdür. Özellikle plaj, tekne ve çöl günleri için güneş kremi, güneş gözlüğü ve şapka getirin.",
      },
      {
        label: "Bahşiş ve fiyatlar",
        text: "Turistik bölgelerde bahşiş yaygındır. Pazarlar ve hediyelik alışverişlerinde kibarca pazarlık etmekten çekinmeyin; pazarlık deneyimin bir parçasıdır.",
      },
      {
        label: "Çöl ve cami ziyaretleri",
        text: "Deve binmek için uzun pantolon giyin. Kadınlar çölde ve cami ziyaretlerinde saçlarını örtmek için eşarp getirmek isteyebilir.",
      },
      {
        label: "Dalış planları",
        text: "Dalışı önceden planlayın; özellikle lisanslı merkez, ekipman, başlangıç eğitimi veya sertifika gereksinimleri gerekiyorsa.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Akşam", "Aile", "Restoranlar"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 8-10 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–3 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Kültür", "Alışveriş", "Akşam"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 25-30 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–3 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Al Sahaba Mosque ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Kültür", "Simgesel yer", "Fotoğraflar"],
        description:
          "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 25-30 dakika arabayla itibaren Sharm Hills",
        visitTime: "30–60 dakika",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Gece hayatı", "Kafeler", "Yürüyüş"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 18-22 dakika arabayla itibaren Sharm Hills",
        visitTime: "2–4 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Gece hayatı", "Kafe", "Gün batımı"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 30-35 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–3 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Deniz ve plaj", "Doğa", "Günübirlik gezi"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 45-60 dakika arabayla itibaren Sharm Hills",
        visitTime: "6–8 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Deniz ve plaj", "Tekne turu", "Şnorkel"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Alış noktası tur operatörüne göre değişir",
        visitTime: "6–8 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Deniz ve plaj", "Macera", "Dalış"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Alış dalış merkezi veya plaj konumuna göre değişir",
        visitTime: "3–7 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Macera", "Çöl", "Aile"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Alış tur operatörüne göre değişir",
        visitTime: "3–5 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Kültür", "Kapalı alan", "Aile"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 15-20 dakika arabayla itibaren Sharm Hills",
        visitTime: "1–2 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Kültür", "Simgesel yer", "Sakin"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 20-25 dakika arabayla itibaren Sharm Hills",
        visitTime: "30–60 dakika",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Deniz ve plaj", "Şnorkel", "Plaj kulüpleri"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 10-30 dakika arabayla noktaya bağlı olarak",
        visitTime: "3–5 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Günübirlik gezi", "Macera", "Deniz ve plaj"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 1.5-2 saat arabayla itibaren Sharm Hills",
        visitTime: "Tam gün",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Günübirlik gezi", "Kültür", "Macera"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 3+ saat arabayla itibaren Sharm Hills",
        visitTime: "Gece dahil veya tam gün",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Akşam", "Aile", "Fotoğraflar"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 15-20 dakika arabayla itibaren Sharm Hills",
        visitTime: "1–2 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Deniz ve plaj", "Şnorkel", "Dalış"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 45-60 dakika arabayla, genellikle tekneyle veya organize Ras Mohammed turuyla ziyaret edilir",
        visitTime: "Tekne veya dalış operatörüyle tam gün",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Sharm haritasını aç",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Casa Sole’ye sorun",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Restoranlar",
    stage: "Dışarıda yemek",
    summary: "Sharm çevresinde Casa Sole yemek önerileri: deniz ürünleri, burger, İtalyan, Mısır ızgaraları ve fırınlar.",
    guestNote: {
      title: "Misafir yemek rehberi",
      text: "Casa Sole yemek, market alışverişi veya teslimat hizmeti sağlamaz. Bunlar misafirlerin seçim yapmasına yardımcı önerilen yerlerdir; rezervasyon, teslimat, çalışma saatleri ve ödeme için restoranlarla doğrudan iletişim kurun.",
    },
    details: [
      {
        label: "Gitmeden önce",
        text: "Restoran çalışma saatleri, menüler, fiyatlar ve teslimat durumu değişebilir. Gitmeden veya sipariş vermeden önce doğrudan kontrol edin.",
      },
      {
        label: "Ulaşım",
        text: "Misafirler kendi taksilerini veya araçlarını ayarlar. Casa Sole genel yönlendirme sağlayabilir, ancak restoran hesabı, teslimat ücreti ve ulaşım misafir tarafından doğrudan ödenir.",
      },
      {
        label: "Gıda güvenliği",
        text: "Deniz ürünleri, çiğ yiyecek veya alerjiler için siparişten önce restorana net şekilde sorun. Çocuklu aileler emin olmadıklarında sade yemekler seçmelidir.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Deniz ürünleri", "Old Market", "Aile"],
        description:
          "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 25-30 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–2.5 saat",
        bestFor: "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Al Sahaba Mosque ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "Amerikan", "Aile"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 12-18 dakika arabayla itibaren Sharm Hills",
        visitTime: "1–2 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["İtalyan", "Pizza", "Rahat"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 15-25 dakika arabayla itibaren Sharm Hills, trafiğe bağlı olarak",
        visitTime: "1–2 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Deniz ürünleri", "Steak", "Premium"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 12-18 dakika arabayla itibaren Sharm Hills",
        visitTime: "2–3 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Hint", "Asya", "Premium"],
        description:
          "Naama Bay ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 18-22 dakika arabayla itibaren Sharm Hills",
        visitTime: "2–3 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Mısır", "Izgara", "Aile"],
        description:
          "Naama Bay ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 18-22 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–2.5 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Deniz ürünleri", "Steak", "Naama Bay"],
        description:
          "Naama Bay ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 18-22 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–2.5 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["İtalyan", "Pizza", "Naama Bay"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 18-22 dakika arabayla itibaren Sharm Hills",
        visitTime: "1–2 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["Uluslararası", "Çatı terası", "Gece hayatı"],
        description:
          "Naama Bay ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 18-22 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–3 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Lübnan", "Orta Doğu", "Naama Bay"],
        description:
          "Naama Bay ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 18-22 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–2.5 saat",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Mısır", "Izgara", "Old Market"],
        description:
          "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 25-30 dakika arabayla itibaren Sharm Hills",
        visitTime: "1.5–2 saat",
        bestFor: "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Old Market ile ilgili bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Fırın", "Kafe", "Kahvaltı"],
        description:
          "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        distance: "Yaklaşık 20-30 dakika arabayla itibaren Sharm Hills",
        visitTime: "30–90 dakika",
        bestFor: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        tip: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Yakındaki olanaklar",
    stage: "Yakındaki günlük ihtiyaçlar",
    summary: "Yakında market, eczane, çamaşırhane, ATM, spor salonu, bazar ve faydalı hizmetler.",
    guestNote: {
      title: "Sağlayıcılara doğrudan ödeme yapın",
      text: "Casa Sole market alışverişi, yemek, çamaşırhane veya teslimat hizmeti sağlamaz. Lütfen her sağlayıcıyla doğrudan iletişime geçin ve doğrudan ödeme yapın.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Market ve günlük ihtiyaçlar. Telefon: +20 120 025 2250. Bazı yerler ücretsiz teslimat sunabilir; lütfen aramada doğrudan sorun.",
        mapLabel: "Aç Safeway Market haritası",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Telefon: +20 107 095 3116.",
        mapLabel: "Aç pharmacy haritası",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Çamaşırhane ve kuru temizleme. Telefon: +20 128 732 4868.",
        mapLabel: "Aç City Dry Clean haritası",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "ATM markette mevcuttur.",
        mapLabel: "Aç ATM area haritası",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Meyve suyu ve meyve dükkanı. Telefon: +20 100 938 3801.",
        mapLabel: "Aç Mango Juice haritası",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Yakında spor salonu. Telefon: +20 104 041 2617.",
        mapLabel: "Aç Primal Fit Gym haritası",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Bazar ve alışveriş. Telefon: +20 127 755 5334.",
        mapLabel: "Aç Delilah Bazar haritası",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Market ve alışveriş merkezi. Telefon: +20 100 048 9214.",
        mapLabel: "Aç Mango Market haritası",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Ulaşım",
    stage: "Ulaşım",
    summary: "Havaalanı transferi, taksiler, toplu taşıma ve ücretli yerel araçlar.",
    guestNote: {
      title: "Yolculuktan önce planlayın",
      text: "Havaalanı alma veya bırakma, normal araçla en fazla 4 misafire kadar USD 15 karşılığında Casa Sole ile koordine edilebilir. Ek misafirler, büyük gruplar veya ekstra bagaj önceden koordinasyon gerektirir ve ek ücret olabilir. Lütfen Rezervasyon Ofisi ile önceden ayarlayın.",
    },
    details: [
      {
        label: "Havaalanından Sharm Hills’e",
        text: "Sharm El Sheikh International Airport’tan Sharm Hills Resort’a yolculuk arabayla yaklaşık 5 dakikadır.",
      },
      {
        label: "Havaalanı taksisi",
        text: "Havaalanı taksi ücreti değişebilir ve geç saatlerde daha yüksek olabilir. Arabaya binmeden önce mutlaka fiyatı netleştirin.",
      },
      {
        label: "Casa Sole transferi",
        text: "Casa Sole, önceden koordinasyon şartıyla normal araçla en fazla 4 misafire kadar USD 15 karşılığında havaalanı alma veya bırakma organizasyonuna yardımcı olabilir. Ek misafirler, büyük gruplar veya ekstra bagaj ayrı koordinasyon gerektirir ve ek ücret olabilir.",
      },
      {
        label: "Şehir içi ulaşım",
        text: "Şehir içi ulaşımı ek ücret karşılığında Casa Sole ile koordine edebilirsiniz.",
      },
      {
        label: "Halk taksisi",
        text: "Halk taksileri mevcuttur, ancak ücretler daha yüksek olabilir.",
      },
      {
        label: "Toplu taşıma",
        text: "Toplu taşıma tesis kapısından yürüyüş mesafesinde mevcuttur.",
      },
    ],
    actions: [
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "Sık sorulan sorular",
    stage: "Yaygın sorular",
    summary: "Wi-Fi, temizlik, ziyaretçiler, çıkış, plaj kartı ve destek için hızlı cevaplar.",
    guestNote: {
      title: "Hızlı cevaplar",
      text: "Bunlar Casa Sole misafirlerinin en sık sorduğu sorulardır. Konaklama sırasında acil bir durum için ekibimize mesaj gönderin.",
    },
    details: [
      {
        label: "Wi-Fi nerede?",
        text: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
      },
      {
        label: "Wi-Fi yayın için kullanılabilir mi?",
        text: "Wi-Fi gezinme ve temel kullanım için uygundur. Yoğun yayın garanti edilmez. 5G router, ek ücretle ve ölçülü kota ile ekibimiz üzerinden mevcut olabilir.",
      },
      {
        label: "Temizlik dahil mi?",
        text: "Günlük temizlik dahil değildir. Konaklama sırasında dairenin temizliği misafirin sorumluluğundadır. Temizlik ek ücretle ve müsaitliğe bağlı olarak ayarlanabilir.",
      },
      {
        label: "Yenileme sağlanıyor mu?",
        text: "Hayır. Konaklama sırasında yenilemeler ve sarf malzemeleri sağlanmaz.",
      },
      {
        label: "Konaklamamı uzatabilir miyim?",
        text: "Uzatma, rezervasyon değişikliği, erken giriş veya geç çıkış için lütfen Rezervasyon Ofisi ile iletişime geçin.",
      },
      {
        label: "Ziyaretçi getirebilir miyim?",
        text: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
      },
      {
        label: "Anahtarı veya plaj kartını kaybedersem ne olur?",
        text: "Bu seçenek konaklamanız sırasında faydalı olabilir. Gitmeden önce zamanı, fiyatı ve uygunluğu kontrol edin.",
      },
      {
        label: "Su veya elektrik kesilirse ne olur?",
        text: "Bu nadiren olabilir çünkü bölgede su ve elektrik ücretli hizmetlerdir. Ekibimize mesaj gönderin; hizmet genellikle yaklaşık 5 dakika içinde geri gelir.",
      },
      {
        label: "Kiminle iletişime geçmeliyim?",
        text: "Konaklama desteği için ekibimizle iletişime geçin. Rezervasyon, uzatma, havaalanı transferi veya Booking.com konuları için Rezervasyon Ofisi ile iletişime geçin.",
      },
    ],
    actions: [
      {
        label: "Sahadaki ekibimize WhatsApp mesajı gönderin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "çıkış",
    title: "Çıkış",
    stage: "Daireden ayrılma",
    summary: "Çıkış saati, daire kontrol listesi, anahtarlar, plaj kartı, kontrol ve yorum.",
    guestNote: {
      title: "Checkout time",
      text: "Resmi çıkış saati en geç 12:00’dir. Geç çıkış müsaitliğe bağlı olabilir ve önceden koordine edilmelidir.",
    },
    details: [
      {
        label: "Ayrılmadan önce",
        text: "Lütfen çöpleri çıkarın, kullanılan bulaşıkları yıkayın veya mutfağı temiz bırakın, klimayı ve ışıkları kapatın, pencereleri ve balkon/teras kapılarını kapatın, kişisel eşya kalmadığını kontrol edin.",
      },
      {
        label: "Anahtarlar ve plaj kartı",
        text: "Anahtarları ve plaj giriş kartını aldığınız aynı yere veya kişiye, Casa Sole ekibiyle koordine ederek iade edin.",
      },
      {
        label: "Ayrılmadan önce mesaj",
        text: "Daireden ayrılmadan önce lütfen ekibimize mesaj gönderin.",
      },
      {
        label: "Kontrol",
        text: "Ekibimiz çıkışta daireyi kontrol edecektir. Bir şey hasar gördüyse veya kırıldıysa lütfen ayrılmadan önce bildirin.",
      },
      {
        label: "Yorum talebi",
        text: "Konaklamanızdan memnun kaldıysanız, rezervasyon yaptığınız platformda yorumunuzu gerçekten takdir ederiz. Bu gelecekteki misafirlere yardımcı olur ve Casa Sole’yi destekler.",
      },
    ],
    actions: [
      {
        label: "Sahadaki ekibimize WhatsApp mesajı gönderin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Havaalanı ayrılışı",
    stage: "Sharm’dan ayrılma",
    summary: "Havaalanı zamanı, bırakma koordinasyonu, bagaj notları ve son seyahat ipuçları.",
    guestNote: {
      title: "Önerilen zamanlama",
      text: "Uçuşlar için Sharm Hills’ten uçuş saatinden 2,5-3 saat önce ayrılmanızı öneririz. Havaalanı işlemleri, trafik ve giriş için en güvenli seçenektir.",
    },
    details: [
      {
        label: "Havaalanı bırakma",
        text: "Casa Sole, önceden koordinasyonla normal bir araç için en fazla 4 misafire kadar USD 15 karşılığında havaalanı bırakma ayarlamaya yardımcı olabilir. Ek misafirler, büyük gruplar veya ekstra bagaj ayrı koordinasyon gerektirir ve ek ücret doğurabilir.",
      },
      {
        label: "Ayrılmadan önce",
        text: "Çıkışın tamamlandığından, anahtarların ve plaj kartının iade edildiğinden ve kişisel eşya kalmadığından emin olun.",
      },
      {
        label: "Pasaport ve bagaj",
        text: "Daireden ayrılmadan önce pasaportları, telefonları, şarj cihazlarını, bagajları ve kişisel belgeleri kontrol edin.",
      },
      {
        label: "Havaalanı haritası",
        text: "Araba kullanıyorsanız veya taksi kullanıyorsanız havaalanı haritası düğmesini kullanın.",
      },
      {
        label: "Canlı uçuş durumu",
        text: "Daireden ayrılmadan önce Sharm El Sheikh International Airport canlı kalkış durumunuzu kontrol edin. Uçuş saatleri, gecikmeler ve iptaller değişebilir; bu nedenle her zaman havayolunuzla teyit edin.",
        linkLabel: "Canlı SSH kalkışları",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Havaalanı haritasını aç",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Araç iste",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Tekrar Gelen Misafir Kulübü",
    stage: "Konaklamadan sonra",
    summary: "Tekrar gelen misafir avantajları, indirim kartı kaydı, yorumlar, şikayetler ve değerlendirme talebi.",
    guestNote: {
      title: "Kaydol, yorum yap veya şikayet gönder",
      text: "Özel indirim kartınızı almak için Returning Guest Club formunu doldurun. Konaklamanızdan sonra yorum veya şikayet göndermek için de aynı formu kullanabilirsiniz; böylece ekibimiz doğru şekilde takip edebilir.",
    },
    details: [
      {
        label: "Tekrar gelen misafir indirimi",
        text: "Tekrar gelen misafirler Casa Sole ile rezervasyon yaptığında %15 indirim alabilir.",
      },
      {
        label: "Rezervasyon seçenekleri",
        text: "Misafirler isterlerse Booking.com veya başka bir platform üzerinden rezervasyon yapabilir. Returning Guest Club avantajları Reservation Office tarafından yürütülür.",
      },
      {
        label: "Nasıl katılırım",
        text: "Kayıt formunu açın; adınızı, ülkenizi, WhatsApp numaranızı, e-posta adresinizi ve gerekiyorsa yorum veya şikayetinizi ekleyin. Ekibimiz bilgilerinizi tekrar gelen misafir teklifleri için saklar ve gerektiğinde takip eder.",
      },
      {
        label: "Yorumlar veya şikayetler",
        text: "Aynı form yorumlar veya şikayetler için de kullanılabilir. Lütfen konuyu net yazın, böylece ekibimiz inceleyip doğru kanaldan yanıt verebilir.",
      },
      {
        label: "Yorum talebi",
        text: "Konaklamanızdan memnun kaldıysanız, lütfen rezervasyon yaptığınız platformda yorum bırakın. Bu gelecekteki misafirlere yardımcı olur ve Casa Sole’yi destekler.",
      },
    ],
    actions: [
      {
        label: "Kaydol, yorum yap veya indirim kartını al",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Dairelerimizi keşfedin",
    stage: "Casa Sole daireleri",
    summary: "Casa Sole Sharm Hills ilanlarını açın, fotoğrafları, uygunluğu ve fiyatları kontrol edin.",
    guestNote: {
      title: "İlanları çevrimiçi kontrol et",
      text: "Bu sayfayı Casa Sole daire ilanlarını açmak, fotoğrafları görmek, daire büyüklüğünü karşılaştırmak ve Booking.com üzerinde canlı uygunluk veya fiyatları kontrol etmek için kullanın.",
    },
    details: [
      {
        label: "Tek yatak odalı daire: Casa Sole Sharm Hills Apt 1",
        text: "Sharm Hills’te tek yatak odalı Casa Sole dairesi arayan misafirler için uygundur.",
        linkLabel: "Booking.com’da aç",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "Tek yatak odalı daire: Casa Sole Sharm Hills Apt 2",
        text: "Sharm Hills’te tek yatak odalı Casa Sole dairesi arayan misafirler için uygundur.",
        linkLabel: "Booking.com’da aç",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "Tek yatak odalı daire: Casa Sole Sharm Hills Apt 3",
        text: "Sharm Hills’te tek yatak odalı Casa Sole dairesi arayan misafirler için uygundur.",
        linkLabel: "Booking.com’da aç",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "Tek yatak odalı daire: Casa Sole Sharm Hills Apt 4",
        text: "Sharm Hills’te tek yatak odalı Casa Sole dairesi arayan misafirler için uygundur.",
        linkLabel: "Booking.com’da aç",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "İki yatak odalı daire: Casa Sole Sharm Hills Apt 5",
        text: "Sharm Hills’te iki yatak odalı Casa Sole dairesi tercih eden aileler veya gruplar için uygundur.",
        linkLabel: "Booking.com’da aç",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Üç yatak odalı daire: Casa Sole Sharm Hills Apt 6",
        text: "Sharm Hills’te üç yatak odalı Casa Sole dairesi tercih eden büyük aileler veya gruplar için uygundur.",
        linkLabel: "Booking.com’da aç",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Bize Ulaşın",
    stage: "Destek",
    summary: "Konaklama desteği için Mr. Magdy, rezervasyon konuları için Reservation Office.",
    guestNote: {
      title: "Kiminle iletişime geçmeli",
      text: "Daha hızlı yardımcı olabilmemiz için lütfen doğru ekiple iletişime geçin.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "Giriş, konaklama desteği, yerel yardım, daire sorunları, bakım, anahtarlar, plaj kartı, 5G router talepleri ve acil daire desteği için. Telefon / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "Rezervasyon Ofisi",
        text: "Rezervasyon değişiklikleri, uzatmalar, erken giriş, geç çıkış, havaalanı transfer koordinasyonu, Returning Guest Club, Booking.com ve diğer platform konuları için. Telefon / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "Güvenlikte",
        text: "Sharm Hills’e vardığınızda Mr. Magdy ile rezervasyonunuz olduğunu söyleyin, ardından güvenlikten resepsiyon salonu yönlendirmesi isteyin.",
      },
    ],
    actions: [
      {
        label: "Sahadaki ekibimize WhatsApp mesajı gönderin",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Rezervasyon Ofisi",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
