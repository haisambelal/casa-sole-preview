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
  privateInfoTitle: "Mentse el ezt az útmutatót",
  privateInfoText:
    "Adja hozzá a Casa Sole-t a telefon kezdőképernyőjéhez, hogy tartózkodása alatt gyorsan elérje, a link újbóli keresése nélkül.",

  quickActions: [
    {
      icon: "🛬",
      label: "Érkezés",
      detail: "Repülőtér, taxi és resort belépés",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Bejelentkezés",
      detail: "Recepció, kulcsok és regisztráció",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Felfedezés",
      detail: "Programok, étkezés és közlekedés",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Tartózkodási segítség és foglalások",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Kezelt apartman, nem hotelszolgáltatás",
      text: "A napi takarítás, feltöltések és fogyóeszközök nem tartoznak bele, kivéve ha külön egyeztetik.",
    },
    {
      title: "Sharm Hills-hez készült",
      text: "A Casa Sole a kezelt nyaralóapartman márkánk. A Sharm Hills az a resort, ahol az apartman található; a Casa Sole segít a tartózkodásban, míg a Sharm Hills a közös resort környezetet és létesítményeket biztosítja.",
    },
    {
      title: "A privát adatok offline maradnak",
      text: "A Wi-Fi és az apartmanra vonatkozó adatok az apartmanban vannak kinyomtatva, nem online kerülnek közzétételre.",
    },
  ],

  checkInPreview: [
    "Menjen a Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh címre.",
    "A kapunál kérje a biztonságiaktól a recepciós csarnokot, majd a recepción kérje a csapatunkat.",
    "Helyszíni csapatunk segít a kulcsokkal, a strandbelépő kártyával, a Wi-Fi információkkal és a regisztrációval.",
  ],

  supportPreview:
    "Tartózkodási segítségért forduljon a helyszíni csapatunkhoz. Hosszabbítás, foglalásmódosítás vagy transzfer esetén a Foglalási irodát keresse.",

  contactPreview:
    "Helyszíni csapatunk támogatja a tartózkodását. A Foglalási iroda kezeli a hosszabbításokat, a Booking.com és más platformok ügyeit.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Érkezés",
    stage: "Mielőtt megérkezik a resortba",
    summary: "Sharm Hills helye, repülőtéri taxi útmutató és kapunál történő érkezési lépések.",
    guestNote: {
      title: "Üdvözöljük a Casa Sole-ban",
      text: "Szeretettel várjuk Önt a Casa Sole Sharm Hills-ban. Használja ezt az oldalt utazás előtt vagy amikor megérkezik a Sharm El Sheikh International Airport-ra.",
    },
    details: [
      {
        label: "A resort helye",
        text: "A Casa Sole a Sharm Hills Resort területén található, Al Muntaza Gate 2, Sharm El Sheikh.",
      },
      {
        label: "A repülőtérről",
        text: "A Sharm El Sheikh International Airport körülbelül 5 percre van autóval a Sharm Hills Resort-tól.",
      },
      {
        label: "Repülőtéri taxi",
        text: "A repülőtéri taxik drágábbak lehetnek, különösen késői órákban. Beszállás előtt egyezzen meg az árban a sofőrrel.",
      },
      {
        label: "Mondja a sofőrnek",
        text: "Mondja egyértelműen a sofőrnek: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "A főkapunál",
        text: "Mondja a biztonságiaknak, hogy foglalása van Mr. Magdy nevével. Kérje, hogy irányítsák a recepciós csarnokhoz.",
      },
      {
        label: "Recepciós csarnok",
        text: "Lépjen be a resortba, menjen a recepciós csarnokba, és kérje Mr. Magdy-t a recepción.",
      },
      {
        label: "Repülőtéri transzfer",
        text: "A Casa Sole segíthet a repülőtéri felvétel vagy leadás megszervezésében USD 15 díjért normál autóval, legfeljebb 4 vendégig. További vendégek, nagyobb csoportok vagy extra csomagok előzetes egyeztetést igényelnek, és további díjakkal járhatnak. Kérjük, ezt előre egyeztesse a Foglalási irodával.",
      },
    ],
    actions: [
      {
        label: "Resort térkép megnyitása",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "WhatsApp üzenet a helyszíni csapatnak",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "bejelentkezés",
    title: "Bejelentkezés",
    stage: "Belépés és berendezkedés",
    summary: "Bejelentkezési idő, képviselői segítség, kulcsok, strandkártya és regisztráció.",
    guestNote: {
      title: "Bejelentkezési idő",
      text: "A bejelentkezés 14:00 és 23:00 között lehetséges. A 23:00 utáni érkezést előre egyeztetni kell a Casa Sole-lal.",
    },
    details: [
      {
        label: "Korai bejelentkezés",
        text: "Korai bejelentkezés elérhetőség függvényében lehetséges. Ezt előre kell egyeztetni, nem a helyszínen.",
      },
      {
        label: "Találkozás a csapattal",
        text: "Amikor eléri a recepciós csarnokot, kérje a csapatunkat. Segítenek a bejelentkezési folyamatban.",
      },
      {
        label: "Amit a csapatunk biztosít",
        text: "Csapatunk biztosítja az apartman kulcsait, a strandbelépő kártyát és a Wi-Fi információkat.",
      },
      {
        label: "Útlevél-regisztráció",
        text: "A helyi biztonsági előírásoknak megfelelően minden vendég eredeti útlevelének másolata szükséges. Az útleveleket rövid időre, körülbelül 10 percre elkérhetik, majd azonnal visszaadják.",
      },
      {
        label: "Tartalék önálló bejelentkezés",
        text: "Ha képviselőnk nem érhető el azonnal, vagy a bejelentkezés késik, kérjük, írjon a Casa Sole-nak, és aktiváljuk az alternatív önálló bejelentkezést.",
      },
    ],
    actions: [
      {
        label: "WhatsApp üzenet a helyszíni csapatnak",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Apartman útmutató",
    stage: "Az apartmanban",
    summary: "Wi-Fi, légkondicionáló, konyhai eszközök, törölközők, készülékek, mosógép, szemét és közművek.",
    guestNote: {
      title: "Fontos: kezelt apartman",
      text: "A Casa Sole kezelt nyaralóapartman, nem hotelszolgáltatás. A napi takarítás, feltöltés, mosószer és fogyóeszközök pótlása nem tartozik bele a tartózkodásba, kivéve ha külön, extra díj ellenében egyeztetik.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "A Wi-Fi adatok az apartman fő ajtaja mögött vannak kinyomtatva. A kapcsolat böngészésre és alap használatra alkalmas, de erős streaminghez nem garantált.",
      },
      {
        label: "5G router lehetőség",
        text: "Ha erősebb internetre van szüksége, a Casa Sole elérhetőség esetén extra díjért, mért adatkerettel rendelkező 5G routert biztosíthat. Kérdezze csapatunkat.",
      },
      {
        label: "Légkondicionáló használata",
        text: "Kérjük, zárja be az erkély- vagy teraszajtókat, amíg a légkondicionáló működik, és távozáskor kapcsolja ki a légkondicionálót és a világítást.",
      },
      {
        label: "Törölközők",
        text: "Az apartmanban zuhanytörölközők, arctörölközők és strandtörölközők találhatók. A fürdőszobai törölközők csak fürdőszobai használatra valók. Ne használja őket lábra, padlóra, strandra vagy kültéri területekre.",
      },
      {
        label: "Konyha",
        text: "A konyhában tányérok, poharak, vízforraló, mikrohullámú sütő, főzőlap és hűtő található. Sütő nincs. Kérjük, tartsa tisztán a konyhát.",
      },
      {
        label: "Apartman felszerelései",
        text: "Az apartmanban vasaló, hajszárító, ruhaszárító állvány, vízforraló, strandtörölközők, arctörölközők és zuhanytörölközők találhatók.",
      },
      {
        label: "Mosógép",
        text: "Mosógép elérhető az apartmanban. Mosószer nem biztosított.",
      },
      {
        label: "Szemét",
        text: "A szemetes a mosogató alatt található. Ha megtelt, kérjük, vigye a szemetet a legközelebbi fő gyűjtőedényhez a parkosított területen.",
      },
      {
        label: "Áram- vagy vízszünet",
        text: "A víz és az áram a térségben díjköteles szolgáltatások. Ritkán rövid kimaradás előfordulhat. Ez normális. Írjon csapatunknak, és a szolgáltatás általában körülbelül 5 percen belül helyreáll.",
      },
      {
        label: "Apartmanprobléma",
        text: "Karbantartás vagy bármilyen apartmanprobléma esetén forduljon csapatunkhoz.",
      },
    ],
    actions: [
      {
        label: "WhatsApp üzenet a helyszíni csapatnak",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "Házirend",
    stage: "A tartózkodás alatt",
    summary: "Csendes órák, látogatók, dohányzás, háziállatok, károk és az apartman gondozása.",
    guestNote: {
      title: "Kérjük, vigyázzon az apartmanra",
      text: "Az apartman magánkezelésben van. Kérjük, bánjon vele gondosan, és tartsa tiszteletben a szomszédokat, a resort vendégeit és a közös tereket.",
    },
    details: [
      {
        label: "Csendes órák",
        text: "A csendes órák 22:00 és 8:00 között vannak. Kérjük, ebben az időben tartsa alacsonyan a zajt.",
      },
      {
        label: "Látogatók",
        text: "Látogatók csak a resort kapujánál/biztonságnál történő regisztráció után engedélyezettek. Nem regisztrált látogatók nem léphetnek be a resortba vagy az apartmanba.",
      },
      {
        label: "Dohányzás",
        text: "A dohányzás az apartmanban nem megengedett. Dohányozni csak kint, az erkélyen vagy teraszon lehet.",
      },
      {
        label: "Háziállatok",
        text: "A háziállatokat érkezés előtt egyeztetni kell a Foglalási irodával. Állatok nem mehetnek a medencébe, és a tartózkodás alatt pórázon kell maradniuk.",
      },
      {
        label: "Gyermekek",
        text: "A gyermekeket mindig felügyelni kell. A szülők vagy gondviselők teljes mértékben felelősek a gyermekek biztonságáért.",
      },
      {
        label: "Bútorok",
        text: "Kérjük, ne vigye ki a beltéri bútorokat az erkélyre, teraszra, kertbe, medencéhez vagy strandra.",
      },
      {
        label: "Kár vagy törés",
        text: "Balesetek előfordulhatnak. Kérjük, azonnal jelezzen minden kárt vagy törést csapatunknak.",
      },
      {
        label: "Elveszett kulcs vagy kártya",
        text: "Elveszett kulcs vagy strandbelépő kártya pótlási díja USD 100, közvetlenül csapatunknak fizetve.",
      },
      {
        label: "Szúnyog megjegyzés földszinten",
        text: "Ha a földszinten tartózkodik, kérjük, tartsa zárva a szúnyoghálós ajtót a szúnyogok elkerülése érdekében.",
      },
    ],
    actions: [
      {
        label: "WhatsApp üzenet a helyszíni csapatnak",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Resort útmutató",
    stage: "Sharm Hills élvezete",
    summary: "Medencék, parkolás, resort szolgáltatások, szupermarket kiszállítás és közös területek.",
    guestNote: {
      title: "Sharm Hills útmutató",
      text: "Ez az oldal a Sharm Hills területén tartózkodó Casa Sole vendégek közös resort információit tartalmazza.",
    },
    details: [
      {
        label: "Medence",
        text: "A resort medencéje napkeltétől napnyugtáig tart nyitva. A gyermekeket mindig felügyelni kell.",
      },
      {
        label: "Gyermekmedence és vízi csúszdák",
        text: "A Sharm Hills területén gyermekmedence és kis gyermek aqua park található csúszdákkal. A gyermekeket mindig szülőnek vagy gondviselőnek kell felügyelnie; a Casa Sole és a resort nem helyettesíti a szülői felügyeletet.",
      },
      {
        label: "Parkolás",
        text: "A parkolás ingyenes a Sharm Hills területén.",
      },
      {
        label: "Közös területek",
        text: "Kérjük, tartsa tiszteletben más vendégek személyes terét és szabadságát minden közös resort területen.",
      },
      {
        label: "Étterem és kávézó",
        text: "A Sharm Hills területén étterem/kávézó található.",
      },
      {
        label: "Szupermarket kiszállítás",
        text: "Van szupermarket/bolt kiszállítással. Rendeléskor adja meg az apartmanszámot és az épületszámot, amelyek a fő ajtó mögött található nyomtatott információban szerepelnek.",
      },
      {
        label: "Háziállatok a resortban",
        text: "Az állatoknak a tartózkodás alatt pórázon kell maradniuk, és nem mehetnek a medencébe.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Strand útmutató",
    stage: "Strandnapok",
    summary: "Ingyenes Sinbad Beach belépés, kártyaszabályok, szolgáltatások, közlekedés és strandi fizetések.",
    guestNote: {
      title: "Ingyenes strandbelépés",
      text: "A Casa Sole vendégek az apartmanhoz biztosított strandkártyával ingyenesen használhatják a Sinbad Beach-et. Kérjük, hozza magával és mutassa be érkezéskor.",
    },
    details: [
      {
        label: "A strand megközelítése",
        text: "A Sinbad Beach körülbelül 20 perc gyalog a Sharm Hills-től, vagy körülbelül 5 perc autóval. Használhatja a térképet, vagy kérhet tőlünk segítséget fizetős fuvar egyeztetéséhez.",
      },
      {
        label: "Strandbelépés",
        text: "A strandbelépés ingyenes azoknak a vendégeknek, akiket az apartman strandkártyája fedez. Érkezéskor mutassa be a kártyát, és mondja, hogy Sharm Hills lakó.",
      },
      {
        label: "Strandi szolgáltatások",
        text: "A Sinbad Beach-en mosdók, kávézó, zuhanyzó, búvárközpont, snorkeling marina és étterem található.",
      },
      {
        label: "Kártya jogosultság",
        text: "Az ingyenes strandjogosultság az apartman méretétől függ. Az egy hálószobás egységek általában egy kártyát tartalmaznak 2 vendégre. A két hálószobás egységek általában két kártyát tartalmaznak 4 vendégre.",
      },
      {
        label: "Napágyak és törölközők",
        text: "A napágyak ingyenesek a jogosult vendégeknek. Strandtörölközők az apartmanban találhatók. Minden extra tételt vagy további vendéget a vendégnek kell intéznie.",
      },
      {
        label: "Ételek és italok",
        text: "A strandi étteremből rendelt ételeket a vendég közvetlenül a helyszínen fizeti.",
      },
      {
        label: "Odajutás",
        text: "A térkép alapján gyalog is elmehet a strandra, vagy kérhet tőlünk fizetős oda- és visszautat.",
      },
      {
        label: "Elveszett kártya",
        text: "Az elveszett strandbelépő kártya pótlási díja USD 100, közvetlenül csapatunknak fizetve.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Sinbad Beach fotó",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Sinbad Beach fotó",
      },
    ],
    actions: [
      {
        label: "Sinbad Beach térkép megnyitása",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Kérjen tőlünk fuvart",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Sharm felfedezése",
    stage: "Programok és látnivalók",
    summary: "A legjobb programok Sharm El Sheikh-ben, tengeri kirándulásoktól az éjszakai életig.",
    guestNote: {
      title: "Fedezze fel Sharm-ot a Casa Sole-lal",
      text: "Sharm El Sheikh híres a snorkelingről, búvárkodásról, strandklubokról, sivatagi kirándulásokról, Old Market-ről, SOHO Square-ről és nyugodt éjszakai életről. A Casa Sole nem működtet túrákat közvetlenül, de segítünk megérteni a lehetőségeket és szükség esetén közlekedést szervezni.",
    },
    details: [
      {
        label: "Az útmutató használata",
        text: "Az alábbi kártyákkal hasonlítsa össze a távolságot, várható látogatási időt és megfelelőséget, mielőtt dönt.",
      },
      {
        label: "Programok foglalása",
        text: "A Casa Sole nem szervez közvetlenül túrákat. Kirándulások vagy programok esetén foglalás előtt egyértelműen erősítse meg a felvétel időt, a tartalmazott elemeket és az árat.",
      },
      {
        label: "Segítség kell a választáshoz?",
        text: "Ha nem biztos benne, mi illik a csoportjához, kérdezzen minket, és segítünk dönteni.",
      },
      {
        label: "Étel- és víztipp",
        text: "Ne igyon csapvizet. Ha gyümölcsöt vagy ételt csapvízzel öblítettek, lehetőség szerint használjon palackozott vizet egy extra öblítéshez.",
      },
      {
        label: "Napvédelem",
        text: "A Vörös-tenger napsütése erős. Hozzon naptejet, napszemüveget és kalapot, különösen strandi, hajós és sivatagi napokra.",
      },
      {
        label: "Borravaló és árak",
        text: "A borravaló gyakori a turisztikai területeken. Piacokon és szuvenírvásárláskor ne féljen udvariasan alkudni; az alkudozás az élmény része.",
      },
      {
        label: "Sivatagi és mecsetlátogatások",
        text: "Tevelovagláshoz viseljen hosszú nadrágot. Nőknek érdemes kendőt hozniuk a haj takarására a sivatagban és mecsetlátogatáskor.",
      },
      {
        label: "Búvártervek",
        text: "Tervezze meg előre a búvárkodást, különösen ha engedélyezett központra, felszerelésre, kezdő oktatásra vagy minősítési feltételekre van szüksége.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Este", "Család", "Éttermek"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 8-10 perc autóval innen: Sharm Hills",
        visitTime: "1.5–3 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Kultúra", "Vásárlás", "Este"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 25-30 perc autóval innen: Sharm Hills",
        visitTime: "1.5–3 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a(z) Al Sahaba Mosque lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Kultúra", "Látnivaló", "Fotók"],
        description:
          "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 25-30 perc autóval innen: Sharm Hills",
        visitTime: "30–60 perc",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Éjszakai élet", "Kávézók", "Séta"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 18-22 perc autóval innen: Sharm Hills",
        visitTime: "2–4 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Éjszakai élet", "Kávézó", "Naplemente"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 30-35 perc autóval innen: Sharm Hills",
        visitTime: "1.5–3 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Tenger és strand", "Természet", "Egynapos kirándulás"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 45-60 perc autóval innen: Sharm Hills",
        visitTime: "6–8 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Tenger és strand", "Hajókirándulás", "Sznorkelezés"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "A felvétel pont a túraszervezőtől függ",
        visitTime: "6–8 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Tenger és strand", "Kaland", "Búvárkodás"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "A felvétel a búvárközponttól vagy strandhelytől függ",
        visitTime: "3–7 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Kaland", "Sivatag", "Család"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "A felvétel a túraszervezőtől függ",
        visitTime: "3–5 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Kultúra", "Beltéri", "Család"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 15-20 perc autóval innen: Sharm Hills",
        visitTime: "1–2 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Kultúra", "Látnivaló", "Csendes"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 20-25 perc autóval innen: Sharm Hills",
        visitTime: "30–60 perc",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Tenger és strand", "Sznorkelezés", "Strandklubok"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 10-30 perc autóval helytől függően",
        visitTime: "3–5 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Egynapos kirándulás", "Kaland", "Tenger és strand"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 1.5-2 óra autóval innen: Sharm Hills",
        visitTime: "Egész nap",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Egynapos kirándulás", "Kultúra", "Kaland"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 3+ óra autóval innen: Sharm Hills",
        visitTime: "Éjszakával vagy egész nap",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Este", "Család", "Fotók"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 15-20 perc autóval innen: Sharm Hills",
        visitTime: "1–2 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Tenger és strand", "Sznorkelezés", "Búvárkodás"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 45-60 perc autóval, általában hajóval vagy szervezett Ras Mohammed kirándulással látogatják",
        visitTime: "Egész nap hajós vagy búvárszolgáltatóval",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Sharm térkép megnyitása",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Kérdezze Casa Sole-t",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Éttermek",
    stage: "Étkezés kint",
    summary: "Casa Sole ételajánlók Sharm környékén: tenger gyümölcsei, burgerek, olasz ételek, egyiptomi grillek és pékségek.",
    guestNote: {
      title: "Vendég ételútmutató",
      text: "A Casa Sole nem biztosít ételt, élelmiszert vagy kiszállítást. Ezek ajánlott helyek a választáshoz; foglalás, kiszállítás, nyitvatartás és fizetés ügyében közvetlenül az éttermeket keresse.",
    },
    details: [
      {
        label: "Indulás előtt",
        text: "Az éttermek nyitvatartása, menüi, árai és kiszállítási lehetőségei változhatnak. Indulás vagy rendelés előtt ellenőrizze közvetlenül.",
      },
      {
        label: "Közlekedés",
        text: "A vendégek saját taxit vagy fuvart intéznek. A Casa Sole általános útmutatással segíthet, de az éttermi számlát, kiszállítási díjat és közlekedést a vendég közvetlenül fizeti.",
      },
      {
        label: "Élelmiszer-biztonság",
        text: "Tenger gyümölcsei, nyers ételek vagy allergia esetén rendelés előtt kérdezze meg egyértelműen az éttermet. Gyermekes családok bizonytalanság esetén válasszanak egyszerű ételeket.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Tenger gyümölcsei", "Old Market", "Család"],
        description:
          "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 25-30 perc autóval innen: Sharm Hills",
        visitTime: "1.5–2.5 óra",
        bestFor: "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a(z) Al Sahaba Mosque lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "Amerikai", "Család"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 12-18 perc autóval innen: Sharm Hills",
        visitTime: "1–2 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["Olasz", "Pizza", "Laza"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 15-25 perc autóval innen: Sharm Hills, forgalomtól függően",
        visitTime: "1–2 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Tenger gyümölcsei", "Steak", "Prémium"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 12-18 perc autóval innen: Sharm Hills",
        visitTime: "2–3 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Indiai", "Ázsiai", "Prémium"],
        description:
          "Ez a(z) Naama Bay lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 18-22 perc autóval innen: Sharm Hills",
        visitTime: "2–3 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Egyiptomi", "Grill", "Család"],
        description:
          "Ez a(z) Naama Bay lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 18-22 perc autóval innen: Sharm Hills",
        visitTime: "1.5–2.5 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Tenger gyümölcsei", "Steak", "Naama Bay"],
        description:
          "Ez a(z) Naama Bay lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 18-22 perc autóval innen: Sharm Hills",
        visitTime: "1.5–2.5 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["Olasz", "Pizza", "Naama Bay"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 18-22 perc autóval innen: Sharm Hills",
        visitTime: "1–2 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["Nemzetközi", "Tetőterasz", "Éjszakai élet"],
        description:
          "Ez a(z) Naama Bay lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 18-22 perc autóval innen: Sharm Hills",
        visitTime: "1.5–3 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Libanoni", "Közel-keleti", "Naama Bay"],
        description:
          "Ez a(z) Naama Bay lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 18-22 perc autóval innen: Sharm Hills",
        visitTime: "1.5–2.5 óra",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Egyiptomi", "Grill", "Old Market"],
        description:
          "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 25-30 perc autóval innen: Sharm Hills",
        visitTime: "1.5–2 óra",
        bestFor: "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a(z) Old Market lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Pékség", "Kávézó", "Reggeli"],
        description:
          "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        distance: "Kb. 20-30 perc autóval innen: Sharm Hills",
        visitTime: "30–90 perc",
        bestFor: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        tip: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Közeli szolgáltatások",
    stage: "Napi szükségletek a közelben",
    summary: "Közeli piac, gyógyszertár, mosoda, ATM, edzőterem, bazár és hasznos szolgáltatások.",
    guestNote: {
      title: "Fizessen közvetlenül a szolgáltatóknak",
      text: "A Casa Sole nem biztosít élelmiszert, ételt, mosodát vagy kiszállítást. Kérjük, minden szolgáltatóval közvetlenül lépjen kapcsolatba, és közvetlenül fizessen.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Élelmiszer és napi szükségletek. Telefon: +20 120 025 2250. Egyes helyek ingyenes kiszállítást kínálhatnak; kérdezze meg közvetlenül telefonon.",
        mapLabel: "Megnyitás Safeway Market térkép",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Telefon: +20 107 095 3116.",
        mapLabel: "Megnyitás pharmacy térkép",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Mosoda és vegytisztítás. Telefon: +20 128 732 4868.",
        mapLabel: "Megnyitás City Dry Clean térkép",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "ATM elérhető a szupermarketnél.",
        mapLabel: "Megnyitás ATM area térkép",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Gyümölcslé- és gyümölcsbolt. Telefon: +20 100 938 3801.",
        mapLabel: "Megnyitás Mango Juice térkép",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Edzőterem a közelben. Telefon: +20 104 041 2617.",
        mapLabel: "Megnyitás Primal Fit Gym térkép",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Bazár és vásárlás. Telefon: +20 127 755 5334.",
        mapLabel: "Megnyitás Delilah Bazar térkép",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Market és bevásárlóközpont. Telefon: +20 100 048 9214.",
        mapLabel: "Megnyitás Mango Market térkép",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Közlekedés",
    stage: "Közlekedés a környéken",
    summary: "Repülőtéri transzfer, taxik, tömegközlekedés és fizetős helyi utak.",
    guestNote: {
      title: "Tervezzen utazás előtt",
      text: "A repülőtéri felvétel vagy leadás egyeztethető a Casa Sole-lal USD 15 díjért normál autóval, legfeljebb 4 vendégig. További vendégek, nagyobb csoportok vagy extra csomag előzetes egyeztetést igényel, és további díjjal járhat. Kérjük, előre intézze a Foglalási irodával.",
    },
    details: [
      {
        label: "A repülőtérről Sharm Hills-be",
        text: "Az út a Sharm El Sheikh International Airport és a Sharm Hills Resort között körülbelül 5 perc autóval.",
      },
      {
        label: "Repülőtéri taxi",
        text: "A repülőtéri taxi díja változhat, és késői órákban magasabb lehet. Mindig egyezzen meg az árban beszállás előtt.",
      },
      {
        label: "Casa Sole transzfer",
        text: "A Casa Sole segíthet repülőtéri felvétel vagy leadás egyeztetésében USD 15 díjért normál autóval, legfeljebb 4 vendégig, előzetes egyeztetés mellett. További vendégek, nagyobb csoportok vagy extra csomag külön egyeztetést és esetleg további díjat igényelnek.",
      },
      {
        label: "Városi közlekedés",
        text: "Városi közlekedést külön díj ellenében egyeztethet a Casa Sole-lal.",
      },
      {
        label: "Nyilvános taxi",
        text: "Nyilvános taxik elérhetők, de a díjak magasabbak lehetnek.",
      },
      {
        label: "Tömegközlekedés",
        text: "Tömegközlekedés gyalogos távolságon belül elérhető a resort kapujától.",
      },
    ],
    actions: [
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "GYIK",
    stage: "Gyakori kérdések",
    summary: "Gyors válaszok Wi-Fi, takarítás, látogatók, checkout, strandkártya és támogatás témában.",
    guestNote: {
      title: "Gyors válaszok",
      text: "Ezek a Casa Sole vendégek leggyakoribb kérdései. Sürgős ügyben a tartózkodás alatt írjon csapatunknak.",
    },
    details: [
      {
        label: "Hol található a Wi-Fi?",
        text: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
      },
      {
        label: "Használhatom a Wi-Fi-t streaminghez?",
        text: "A Wi-Fi böngészésre és alap használatra alkalmas. Erős streaming nem garantált. 5G router mért adatkerettel extra díjért elérhető lehet csapatunkon keresztül.",
      },
      {
        label: "A takarítás benne van?",
        text: "A napi takarítás nem tartozik bele. Az apartman tisztasága a tartózkodás alatt a vendég felelőssége. Takarítás extra díjért, elérhetőség függvényében szervezhető.",
      },
      {
        label: "Vannak feltöltések?",
        text: "Nem. Feltöltések és fogyóeszközök a tartózkodás alatt nem biztosítottak.",
      },
      {
        label: "Meghosszabbíthatom a tartózkodást?",
        text: "Hosszabbítás, foglalásmódosítás, korai bejelentkezés vagy késői kijelentkezés ügyében keresse a Foglalási irodát.",
      },
      {
        label: "Hozhatok látogatókat?",
        text: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
      },
      {
        label: "Mi történik, ha elveszítem a kulcsot vagy strandkártyát?",
        text: "Ez a lehetőség hasznos lehet a tartózkodás alatt. Indulás előtt ellenőrizze az időpontot, árat és elérhetőséget.",
      },
      {
        label: "Mi van, ha elmegy a víz vagy az áram?",
        text: "Ez ritkán előfordulhat, mert a víz és az áram díjköteles szolgáltatás a területen. Írjon csapatunknak, és a szolgáltatás általában körülbelül 5 perc alatt visszaáll.",
      },
      {
        label: "Kit keressek?",
        text: "Tartózkodási segítségért keresse csapatunkat. Foglalás, hosszabbítás, repülőtéri transzfer vagy Booking.com ügyek esetén a Foglalási irodát keresse.",
      },
    ],
    actions: [
      {
        label: "WhatsApp üzenet a helyszíni csapatnak",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "kijelentkezés",
    title: "Checkout",
    stage: "Az apartman elhagyása",
    summary: "Checkout idő, apartman ellenőrzőlista, kulcsok, strandkártya, ellenőrzés és értékelés.",
    guestNote: {
      title: "Checkout time",
      text: "A hivatalos kijelentkezés idő legkésőbb 12:00. Késői kijelentkezés elérhetőség függvényében lehetséges, és előre kell egyeztetni.",
    },
    details: [
      {
        label: "Indulás előtt",
        text: "Kérjük, vigye ki a szemetet, mossa el a használt edényeket vagy hagyja tisztán a konyhát, kapcsolja ki a légkondicionálót és a lámpákat, zárja be az ablakokat és az erkély- vagy teraszajtókat, és ellenőrizze, hogy nem maradt személyes tárgy.",
      },
      {
        label: "Kulcsok és strandkártya",
        text: "A kulcsokat és a strandbelépő kártyát ugyanarra a helyre vagy személynek adja vissza, ahonnan kapta, a Casa Sole csapattal egyeztetve.",
      },
      {
        label: "Üzenet távozás előtt",
        text: "Kérjük, írjon csapatunknak, mielőtt elhagyja az apartmant.",
      },
      {
        label: "Ellenőrzés",
        text: "Csapatunk kijelentkezéskor ellenőrzi az apartmant. Ha bármi megsérült vagy eltört, kérjük, jelentse indulás előtt.",
      },
      {
        label: "Értékelés kérése",
        text: "Ha élvezte a tartózkodást, nagyon értékelnénk az értékelését azon a platformon, ahol foglalt. Ez segít a jövőbeli vendégeknek és támogatja a Casa Sole-t.",
      },
    ],
    actions: [
      {
        label: "WhatsApp üzenet a helyszíni csapatnak",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Repülőtéri indulás",
    stage: "Sharm elhagyása",
    summary: "Repülőtéri időzítés, leadás egyeztetés, poggyász megjegyzések és utolsó utazási tippek.",
    guestNote: {
      title: "Ajánlott időzítés",
      text: "Repülőjáratokhoz javasoljuk, hogy Sharm Hills-ből 2,5–3 órával a járat ideje előtt induljon. Ez a legbiztonságosabb a repülőtéri eljárások, forgalom és bejelentkezés miatt.",
    },
    details: [
      {
        label: "Repülőtéri leadás",
        text: "A Casa Sole segíthet megszervezni a repülőtéri leadás szolgáltatást USD 15 díjért normál autóval, legfeljebb 4 vendégig, előzetes egyeztetéssel. További vendégek, nagyobb csoportok vagy extra poggyász külön egyeztetést és további díjat igényelhetnek.",
      },
      {
        label: "Indulás előtt",
        text: "Győződjön meg róla, hogy a kijelentkezés befejeződött, a kulcsokat és strandkártyát visszaadta, és nem maradt személyes tárgy.",
      },
      {
        label: "Útlevelek és poggyász",
        text: "Az apartman elhagyása előtt ellenőrizze az útleveleket, telefonokat, töltőket, poggyászt és személyes iratokat.",
      },
      {
        label: "Repülőtér térkép",
        text: "Használja a repülőtér térkép gombot, ha vezet vagy taxit használ.",
      },
      {
        label: "Élő járatállapot",
        text: "Ellenőrizze a Sharm El Sheikh International Airport élő indulási állapotát, mielőtt elhagyja az apartmant. A járatidők, késések és törlések változhatnak, ezért mindig erősítse meg a légitársaságnál.",
        linkLabel: "Élő SSH indulások",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Repülőtér térkép megnyitása",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Fuvar kérése",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Visszatérő vendégek klubja",
    stage: "A tartózkodás után",
    summary: "Visszatérő vendég előnyök, kedvezménykártya-regisztráció, megjegyzések, panaszok és értékeléskérés.",
    guestNote: {
      title: "Regisztráció, megjegyzés vagy panasz",
      text: "Töltse ki a Returning Guest Club űrlapot a különleges kedvezménykártya megszerzéséhez. Ugyanezen az űrlapon megjegyzést vagy panaszt is küldhet a tartózkodás után, hogy csapatunk megfelelően követhesse az ügyet.",
    },
    details: [
      {
        label: "Visszatérő vendég kedvezmény",
        text: "A visszatérő vendégek 15% kedvezményt kaphatnak, ha a Casa Sole-nál foglalnak.",
      },
      {
        label: "Foglalási lehetőségek",
        text: "A vendégek továbbra is foglalhatnak Booking.com-on vagy más platformon, ha ezt részesítik előnyben. A Returning Guest Club előnyeit a Reservation Office kezeli.",
      },
      {
        label: "Csatlakozás módja",
        text: "Nyissa meg a regisztrációs űrlapot, adja meg nevét, országát, WhatsApp-számát, email-címét, valamint szükség esetén megjegyzést vagy panaszt. Csapatunk megőrzi az adatokat a visszatérő vendég ajánlatokhoz, és szükség esetén utánkövetést végez.",
      },
      {
        label: "Megjegyzések vagy panaszok",
        text: "Ugyanezt az űrlapot megjegyzésekhez vagy panaszokhoz is használhatja. Kérjük, írja le egyértelműen az ügyet, hogy csapatunk megvizsgálhassa és a megfelelő csatornán válaszolhasson.",
      },
      {
        label: "Értékelés kérése",
        text: "Ha élvezte a tartózkodást, kérjük, hagyjon értékelést azon a platformon, ahol foglalt. Ez segít a jövőbeli vendégeknek és támogatja a Casa Sole-t.",
      },
    ],
    actions: [
      {
        label: "Regisztráció, megjegyzés vagy kedvezménykártya",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Fedezze fel egységeinket",
    stage: "Casa Sole apartmanok",
    summary: "Nyissa meg a Casa Sole Sharm Hills hirdetéseket, ellenőrizze a fotókat, elérhetőséget és árakat.",
    guestNote: {
      title: "Listák ellenőrzése online",
      text: "Ezen az oldalon megnyithatja a Casa Sole egységek listáit, megnézheti a fotókat, összehasonlíthatja az apartmanméretet, és ellenőrizheti az aktuális elérhetőséget vagy árakat a Booking.com-on.",
    },
    details: [
      {
        label: "Egy hálószobás egység: Casa Sole Sharm Hills Apt 1",
        text: "Azoknak a vendégeknek megfelelő, akik egy hálószobás Casa Sole apartmant keresnek Sharm Hills-ben.",
        linkLabel: "Megnyitás Booking.com-on",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "Egy hálószobás egység: Casa Sole Sharm Hills Apt 2",
        text: "Azoknak a vendégeknek megfelelő, akik egy hálószobás Casa Sole apartmant keresnek Sharm Hills-ben.",
        linkLabel: "Megnyitás Booking.com-on",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "Egy hálószobás egység: Casa Sole Sharm Hills Apt 3",
        text: "Azoknak a vendégeknek megfelelő, akik egy hálószobás Casa Sole apartmant keresnek Sharm Hills-ben.",
        linkLabel: "Megnyitás Booking.com-on",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "Egy hálószobás egység: Casa Sole Sharm Hills Apt 4",
        text: "Azoknak a vendégeknek megfelelő, akik egy hálószobás Casa Sole apartmant keresnek Sharm Hills-ben.",
        linkLabel: "Megnyitás Booking.com-on",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "Két hálószobás egység: Casa Sole Sharm Hills Apt 5",
        text: "Családoknak vagy csoportoknak megfelelő, akik két hálószobás Casa Sole apartmant szeretnének Sharm Hills-ben.",
        linkLabel: "Megnyitás Booking.com-on",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Három hálószobás egység: Casa Sole Sharm Hills Apt 6",
        text: "Nagyobb családoknak vagy csoportoknak megfelelő, akik három hálószobás Casa Sole apartmant szeretnének Sharm Hills-ben.",
        linkLabel: "Megnyitás Booking.com-on",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Kapcsolat",
    stage: "Támogatás",
    summary: "Mr. Magdy a tartózkodási támogatáshoz, Reservation Office a foglalási ügyekhez.",
    guestNote: {
      title: "Kit keressen",
      text: "Kérjük, a megfelelő csapatot keresse, hogy gyorsabban segíthessünk.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "Bejelentkezéshez, tartózkodási támogatáshoz, helyi segítséghez, apartmanproblémákhoz, karbantartáshoz, kulcsokhoz, strandkártyához, 5G router kérésekhez és sürgős apartmantámogatáshoz. Telefon / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "Foglalási iroda",
        text: "Foglalásmódosításokhoz, hosszabbításhoz, korai bejelentkezéshez, késői kijelentkezéshez, repülőtéri transzfer egyeztetéshez, Returning Guest Clubhoz, Booking.com és egyéb platformügyekhez. Telefon / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "A biztonságnál",
        text: "Amikor megérkezik Sharm Hills-be, mondja, hogy Mr. Magdy-val van foglalása, majd kérje a biztonsági szolgálat-t, hogy irányítsák a recepciós hallhoz.",
      },
    ],
    actions: [
      {
        label: "WhatsApp üzenet a helyszíni csapatnak",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Foglalási iroda",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
