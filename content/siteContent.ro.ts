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
  privateInfoTitle: "Salvează acest ghid",
  privateInfoText:
    "Adăugați Casa Sole pe ecranul principal al telefonului pentru acces rapid în timpul șederii, fără să căutați din nou linkul.",

  quickActions: [
    {
      icon: "🛬",
      label: "Sosire",
      detail: "Aeroport, taxi și acces în resort",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Check-in",
      detail: "Recepție, chei și înregistrare",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Explorează",
      detail: "Activități, mâncare și transport",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Suport pentru ședere și rezervări",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Apartament administrat, nu serviciu hotelier",
      text: "Curățenia zilnică, reumplerile și consumabilele nu sunt incluse decât dacă sunt aranjate separat.",
    },
    {
      title: "Creat pentru Sharm Hills",
      text: "Casa Sole este brandul nostru de apartamente de vacanță administrate. Sharm Hills este resortul unde se află apartamentul; Casa Sole se ocupă de suportul șederii, iar Sharm Hills oferă cadrul comun și facilitățile resortului.",
    },
    {
      title: "Detaliile private rămân offline",
      text: "Detaliile Wi-Fi și informațiile specifice apartamentului sunt tipărite în apartament, nu publicate online.",
    },
  ],

  checkInPreview: [
    "Mergeți la Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
    "La poartă, întrebați securitatea de holul recepției, apoi întrebați la recepție de echipa noastră.",
    "Echipa noastră de la fața locului vă ajută cu cheile, cardul de acces la plajă, informațiile Wi-Fi și înregistrarea.",
  ],

  supportPreview:
    "Pentru suport în timpul șederii, contactați echipa noastră de la fața locului. Pentru prelungiri, modificări de rezervare sau transferuri, contactați Biroul de rezervări.",

  contactPreview:
    "Echipa noastră de la fața locului vă sprijină șederea. Biroul de rezervări gestionează prelungirile, Booking.com și alte platforme.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Sosire",
    stage: "Înainte să ajungeți la resort",
    summary: "Locația Sharm Hills, ghid pentru taxiul de la aeroport și pașii de sosire la poartă.",
    guestNote: {
      title: "Bine ați venit la Casa Sole",
      text: "Așteptăm cu drag să vă primim la Casa Sole Sharm Hills. Folosiți această pagină înainte de călătorie sau când ajungeți la Sharm El Sheikh International Airport.",
    },
    details: [
      {
        label: "Locația resortului",
        text: "Casa Sole se află în Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
      },
      {
        label: "De la aeroport",
        text: "Sharm El Sheikh International Airport este la aproximativ 5 minute cu mașina de Sharm Hills Resort.",
      },
      {
        label: "Taxi de la aeroport",
        text: "Taxiurile de la aeroport pot costa mai mult, mai ales la ore târzii. Stabiliți prețul cu șoferul înainte de a urca în mașină.",
      },
      {
        label: "Spuneți șoferului",
        text: "Spuneți clar șoferului: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "La poarta principală",
        text: "Spuneți securității că aveți o rezervare cu Mr. Magdy. Cereți să vă îndrume către holul recepției.",
      },
      {
        label: "Holul recepției",
        text: "Intrați în resort, mergeți la holul recepției și întrebați la recepție de Mr. Magdy.",
      },
      {
        label: "Transfer aeroport",
        text: "Casa Sole poate ajuta la coordonarea preluare-ului sau lăsare-ului de la aeroport pentru USD 15 cu o mașină normală, maximum 4 oaspeți. Oaspeții suplimentari, grupurile mai mari sau bagajele extra necesită coordonare în avans și pot implica taxe suplimentare. Vă rugăm să aranjați în avans cu Biroul de rezervări.",
      },
    ],
    actions: [
      {
        label: "Deschide harta resortului",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "Scrie pe WhatsApp echipei de la fața locului",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "check-in",
    title: "Check-in",
    stage: "Intrare și instalare",
    summary: "Ora de check-in, suport reprezentant, chei, card de plajă și înregistrare.",
    guestNote: {
      title: "Ora de check-in",
      text: "Check-in-ul este disponibil între 14:00 și 23:00. Sosirea după 23:00 trebuie coordonată cu Casa Sole înainte de sosire.",
    },
    details: [
      {
        label: "Check-in devreme",
        text: "Check-in-ul devreme poate fi posibil în funcție de disponibilitate. Trebuie coordonat în avans, nu pe loc.",
      },
      {
        label: "Întâlniți echipa noastră",
        text: "Când ajungeți în holul recepției, întrebați de echipa noastră. Ei vă vor ajuta cu procesul de check-in.",
      },
      {
        label: "Ce oferă echipa noastră",
        text: "Echipa noastră va furniza cheile apartamentului, cardul de acces la plajă și informațiile Wi-Fi.",
      },
      {
        label: "Înregistrarea pașapoartelor",
        text: "Conform cerințelor locale de securitate, este necesară o copie a pașaportului original pentru fiecare oaspete. Pașapoartele pot fi colectate pentru aproximativ 10 minute și returnate imediat după.",
      },
      {
        label: "Check-in self-service de rezervă",
        text: "Dacă reprezentantul nostru nu poate fi contactat imediat sau check-in-ul întârzie, vă rugăm să trimiteți mesaj către Casa Sole și vom activa procesul alternativ de self check-in.",
      },
    ],
    actions: [
      {
        label: "Scrie pe WhatsApp echipei de la fața locului",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Ghidul apartamentului",
    stage: "În apartament",
    summary: "Wi-Fi, aer condiționat, articole de bucătărie, prosoape, electrocasnice, mașină de spălat, gunoi și utilități.",
    guestNote: {
      title: "Important: apartament administrat",
      text: "Casa Sole este un apartament de vacanță administrat, nu un serviciu hotelier. Curățenia zilnică, reumplerile, detergentul și înlocuirea consumabilelor nu sunt incluse în timpul șederii decât dacă sunt aranjate separat contra cost.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "Detaliile Wi-Fi sunt tipărite în spatele ușii principale a apartamentului. Conexiunea este potrivită pentru navigare și utilizare de bază, dar nu este garantată pentru streaming intens.",
      },
      {
        label: "Opțiune router 5G",
        text: "Dacă aveți nevoie de internet mai puternic, Casa Sole poate furniza un router 5G cu cotă măsurată contra cost, în funcție de disponibilitate. Vă rugăm să întrebați echipa noastră.",
      },
      {
        label: "Utilizarea aerului condiționat",
        text: "Vă rugăm să închideți ușile balconului sau terasei când aerul condiționat este pornit și să opriți aerul condiționat și luminile când părăsiți apartamentul.",
      },
      {
        label: "Prosoape",
        text: "Apartamentul include prosoape de duș, prosoape de față și prosoape de plajă. Prosoapele de baie sunt doar pentru baie. Vă rugăm să nu le folosiți pentru picioare, podele, plajă sau zone exterioare.",
      },
      {
        label: "Bucătărie",
        text: "Bucătăria include farfurii, căni, fierbător pentru apă caldă, cuptor cu microunde, plită și frigider. Nu există cuptor. Vă rugăm să păstrați bucătăria curată în timpul șederii.",
      },
      {
        label: "Dotări ale apartamentului",
        text: "Apartamentul include fier de călcat, uscător de păr, suport de uscat haine, fierbător, prosoape de plajă, prosoape de față și prosoape de duș.",
      },
      {
        label: "Mașină de spălat",
        text: "În apartament este disponibilă o mașină de spălat. Detergentul nu este furnizat.",
      },
      {
        label: "Gunoi",
        text: "Coșul de gunoi este sub chiuvetă. Când este plin, duceți gunoiul la cea mai apropiată cutie principală de colectare din zona amenajată.",
      },
      {
        label: "Întrerupere de apă sau curent",
        text: "Apa și electricitatea sunt servicii taxabile în zonă. În cazuri rare poate apărea o scurtă întrerupere. Este normal. Trimiteți mesaj echipei noastre și serviciul este de obicei restabilit în aproximativ 5 minute.",
      },
      {
        label: "Problemă în apartament",
        text: "Pentru mentenanță sau orice problemă în apartament, vă rugăm să contactați echipa noastră.",
      },
    ],
    actions: [
      {
        label: "Scrie pe WhatsApp echipei de la fața locului",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "Regulile casei",
    stage: "În timpul șederii",
    summary: "Ore de liniște, vizitatori, fumat, animale, daune și îngrijirea apartamentului.",
    guestNote: {
      title: "Vă rugăm să respectați apartamentul",
      text: "Apartamentul este administrat privat. Vă rugăm să îl tratați cu grijă și să respectați vecinii, oaspeții resortului și spațiile comune.",
    },
    details: [
      {
        label: "Ore de liniște",
        text: "Orele de liniște sunt între 22:00 și 8:00. Vă rugăm să mențineți zgomotul redus în acest interval.",
      },
      {
        label: "Vizitatori",
        text: "Vizitatorii sunt permiși doar după înregistrarea la poarta/securitatea resortului. Vizitatorii neînregistrați nu trebuie să intre în resort sau apartament.",
      },
      {
        label: "Fumat",
        text: "Fumatul nu este permis în apartament. Fumatul este permis doar afară, pe balcon sau terasă.",
      },
      {
        label: "Animale de companie",
        text: "Animalele de companie trebuie coordonate cu Biroul de rezervări înainte de sosire. Animalele nu sunt permise în piscină și trebuie să rămână în lesă în timpul șederii.",
      },
      {
        label: "Copii",
        text: "Copiii trebuie supravegheați permanent. Părinții sau tutorii sunt pe deplin responsabili pentru siguranța copiilor.",
      },
      {
        label: "Mobilier",
        text: "Vă rugăm să nu scoateți mobilierul interior pe balcon, terasă, grădină, piscină sau plajă.",
      },
      {
        label: "Daune sau spargeri",
        text: "Accidentele se pot întâmpla. Vă rugăm să raportați imediat echipei noastre orice daună sau spargere.",
      },
      {
        label: "Cheie sau card pierdut",
        text: "Costul de înlocuire pentru cheia pierdută sau cardul de plajă pierdut este USD 100, plătit direct echipei noastre.",
      },
      {
        label: "Notă despre țânțari la parter",
        text: "Dacă stați la parter, vă rugăm să țineți ușa cu plasă închisă pentru a evita țânțarii.",
      },
    ],
    actions: [
      {
        label: "Scrie pe WhatsApp echipei de la fața locului",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Ghidul resortului",
    stage: "Bucurați-vă de Sharm Hills",
    summary: "Piscine, parcare, facilități ale resortului, livrare de la supermarket și zone comune.",
    guestNote: {
      title: "Ghid pentru Sharm Hills",
      text: "Această pagină acoperă informațiile comune ale resortului pentru oaspeții Casa Sole cazați în Sharm Hills.",
    },
    details: [
      {
        label: "Piscină",
        text: "Piscina resortului este deschisă de la răsărit până la apus. Copiii trebuie supravegheați permanent.",
      },
      {
        label: "Piscină pentru copii și tobogane acvatice",
        text: "Sharm Hills are piscină pentru copii și un mic aqua park pentru copii cu tobogane. Copiii trebuie supravegheați permanent de părinte sau tutore; Casa Sole și resortul nu înlocuiesc supravegherea părinților.",
      },
      {
        label: "Parcare",
        text: "Parcarea este gratuită în Sharm Hills.",
      },
      {
        label: "Zone comune",
        text: "Vă rugăm să respectați spațiul personal și libertatea celorlalți oaspeți în toate zonele comune ale resortului.",
      },
      {
        label: "Restaurant și cafenea",
        text: "Există un restaurant/cafenea în Sharm Hills.",
      },
      {
        label: "Livrare de la supermarket",
        text: "Există un supermarket/magazin cu livrare. Când comandați, menționați numărul apartamentului și numărul clădirii din informațiile tipărite în spatele ușii principale.",
      },
      {
        label: "Animale în resort",
        text: "Animalele trebuie să rămână în lesă în timpul șederii și nu sunt permise în piscină.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Ghidul plajei",
    stage: "Zile de plajă",
    summary: "Acces gratuit la Sinbad Beach, reguli de card, facilități, transport și plăți pe plajă.",
    guestNote: {
      title: "Acces gratuit la plajă",
      text: "Oaspeții Casa Sole primesc acces gratuit la Sinbad Beach cu cardul de plajă furnizat pentru apartament. Vă rugăm să aduceți cardul și să îl arătați la sosire.",
    },
    details: [
      {
        label: "Cum ajungeți la plajă",
        text: "Sinbad Beach este la aproximativ 20 de minute de mers pe jos de Sharm Hills sau aproximativ 5 minute cu mașina. Puteți folosi harta sau ne puteți cere să coordonăm o cursă contra cost.",
      },
      {
        label: "Acces la plajă",
        text: "Accesul la plajă este gratuit pentru oaspeții acoperiți de cardul de plajă al apartamentului. La sosire, arătați cardul și spuneți că sunteți rezident Sharm Hills.",
      },
      {
        label: "Facilități pe plajă",
        text: "Sinbad Beach are toalete, cafenea, duș, centru de scufundări, marină de snorkeling și restaurant.",
      },
      {
        label: "Acoperirea cardului",
        text: "Accesul gratuit la plajă depinde de dimensiunea apartamentului. Unitățile cu un dormitor includ de obicei un card pentru 2 oaspeți. Unitățile cu două dormitoare includ de obicei două carduri pentru 4 oaspeți.",
      },
      {
        label: "Șezlonguri și prosoape",
        text: "Șezlongurile sunt gratuite pentru oaspeții acoperiți. Prosoapele de plajă sunt furnizate în apartament. Orice articole extra sau oaspeți suplimentari trebuie gestionați de oaspete.",
      },
      {
        label: "Mâncare și băuturi",
        text: "Orice comandă de la restaurantul de pe plajă este plătită direct de oaspete la fața locului.",
      },
      {
        label: "Cum ajungeți acolo",
        text: "Puteți merge pe jos la plajă folosind harta sau ne puteți cere lăsare și preluare contra cost.",
      },
      {
        label: "Card pierdut",
        text: "Costul de înlocuire pentru cardul de plajă pierdut este USD 100, plătit direct echipei noastre.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Fotografie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Fotografie Sinbad Beach",
      },
    ],
    actions: [
      {
        label: "Deschide harta Sinbad Beach",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Cereți-ne o cursă",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Explorează Sharm",
    stage: "Activități și atracții",
    summary: "Cele mai bune lucruri de făcut în Sharm El Sheikh, de la excursii pe mare la viață de noapte.",
    guestNote: {
      title: "Explorează Sharm cu Casa Sole",
      text: "Sharm El Sheikh este cunoscut pentru snorkeling, scufundări, club de plajăuri, excursii în deșert, Old Market, SOHO Square și viață de noapte relaxată. Casa Sole nu operează tururi direct, dar vă putem ajuta să înțelegeți opțiunile și să aranjați transport când este necesar.",
    },
    details: [
      {
        label: "Cum folosiți acest ghid",
        text: "Folosiți cardurile de mai jos pentru a compara distanța, timpul estimat de vizită și potrivirea înainte de a alege unde mergeți.",
      },
      {
        label: "Rezervarea activităților",
        text: "Casa Sole nu operează tururi direct. Pentru excursii sau activități, confirmați clar ora de preluare, ce este inclus și prețul înainte de rezervare.",
      },
      {
        label: "Aveți nevoie de ajutor pentru alegere?",
        text: "Dacă nu sunteți sigur ce se potrivește grupului, întrebați-ne și vă vom ajuta să decideți.",
      },
      {
        label: "Sfat pentru mâncare și apă",
        text: "Nu beți apă de la robinet. Pentru fructe sau alimente clătite cu apă de la robinet, folosiți apă îmbuteliată pentru o clătire suplimentară când este posibil.",
      },
      {
        label: "Protecție solară",
        text: "Soarele Mării Roșii este puternic. Aduceți cremă de protecție, ochelari de soare și pălărie, mai ales pentru zile de plajă, barcă și deșert.",
      },
      {
        label: "Bacșiș și prețuri",
        text: "Bacșișul este obișnuit în zonele turistice. În piețe și la suveniruri, nu ezitați să negociați politicos; negocierea face parte din experiență.",
      },
      {
        label: "Vizite în deșert și la moschee",
        text: "Purtați pantaloni lungi pentru plimbarea cu cămila. Femeile pot aduce o eșarfă pentru a acoperi părul în deșert și la vizitarea moscheilor.",
      },
      {
        label: "Planuri de scufundări",
        text: "Planificați scufundările din timp, mai ales dacă aveți nevoie de centru autorizat, echipament, instruire pentru începători sau cerințe de certificare.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Seară", "Familie", "Restaurante"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 8-10 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Cultură", "Shopping", "Seară"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 25-30 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune despre Al Sahaba Mosque poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Cultură", "Obiectiv", "Fotografii"],
        description:
          "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 25-30 minute cu mașina de la Sharm Hills",
        visitTime: "30–60 minute",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Viață de noapte", "Cafenele", "Plimbare"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 18-22 minute cu mașina de la Sharm Hills",
        visitTime: "2–4 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Viață de noapte", "Cafenea", "Apus"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 30-35 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Mare și plajă", "Natură", "Excursie de o zi"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 45-60 minute cu mașina de la Sharm Hills",
        visitTime: "6–8 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Mare și plajă", "Excursie cu barca", "Snorkeling"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Punctul de preluare variază după operator",
        visitTime: "6–8 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Mare și plajă", "Aventură", "Scufundări"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Preluare-ul variază după centrul de scufundări sau locația plajei",
        visitTime: "3–7 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Aventură", "Deșert", "Familie"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Preluare-ul variază după operator",
        visitTime: "3–5 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Cultură", "Interior", "Familie"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 15-20 minute cu mașina de la Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Cultură", "Obiectiv", "Liniștit"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 20-25 minute cu mașina de la Sharm Hills",
        visitTime: "30–60 minute",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Mare și plajă", "Snorkeling", "Cluburi de plajă"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 10-30 minute cu mașina în funcție de loc",
        visitTime: "3–5 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Excursie de o zi", "Aventură", "Mare și plajă"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 1.5-2 ore cu mașina de la Sharm Hills",
        visitTime: "Zi întreagă",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Excursie de o zi", "Cultură", "Aventură"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 3+ ore cu mașina de la Sharm Hills",
        visitTime: "Peste noapte sau zi întreagă",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Seară", "Familie", "Fotografii"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 15-20 minute cu mașina de la Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Mare și plajă", "Snorkeling", "Scufundări"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 45-60 minute cu mașina, de obicei vizitat cu barca sau prin excursie organizată la Ras Mohammed",
        visitTime: "Zi întreagă cu operator de barcă sau scufundări",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Deschide harta Sharm",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Întreabă Casa Sole",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Restaurante",
    stage: "Masa în oraș",
    summary: "Recomandări Casa Sole pentru mâncare în Sharm, de la fructe de mare și burgeri la italian, grătare egiptene și brutării.",
    guestNote: {
      title: "Ghid alimentar pentru oaspeți",
      text: "Casa Sole nu oferă mâncare, cumpărături sau serviciu de livrare. Acestea sunt locuri sugerate pentru a ajuta oaspeții să aleagă; contactați direct restaurantele pentru rezervări, livrare, program și plată.",
    },
    details: [
      {
        label: "Înainte să mergeți",
        text: "Programul restaurantelor, meniurile, prețurile și disponibilitatea livrării se pot schimba. Verificați direct înainte de a merge sau comanda.",
      },
      {
        label: "Transport",
        text: "Oaspeții își organizează singuri taxiul sau cursa. Casa Sole poate ajuta cu îndrumări generale, dar nota de plată, taxa de livrare și transportul sunt plătite direct de oaspete.",
      },
      {
        label: "Siguranța alimentară",
        text: "Pentru fructe de mare, mâncare crudă sau alergii, întrebați clar restaurantul înainte de comandă. Familiile cu copii ar trebui să aleagă feluri simple când nu sunt sigure.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Fructe de mare", "Old Market", "Familie"],
        description:
          "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 25-30 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune despre Al Sahaba Mosque poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "American", "Familie"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 12-18 minute cu mașina de la Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["Italian", "Pizza", "Casual"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 15-25 minute cu mașina de la Sharm Hills, în funcție de trafic",
        visitTime: "1–2 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Fructe de mare", "Steak", "Premium"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 12-18 minute cu mașina de la Sharm Hills",
        visitTime: "2–3 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Indian", "Asiatic", "Premium"],
        description:
          "Această opțiune despre Naama Bay poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 18-22 minute cu mașina de la Sharm Hills",
        visitTime: "2–3 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Egiptean", "Grătar", "Familie"],
        description:
          "Această opțiune despre Naama Bay poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 18-22 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Fructe de mare", "Steak", "Naama Bay"],
        description:
          "Această opțiune despre Naama Bay poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 18-22 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["Italian", "Pizza", "Naama Bay"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 18-22 minute cu mașina de la Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["Internațional", "Rooftop", "Viață de noapte"],
        description:
          "Această opțiune despre Naama Bay poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 18-22 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Libanez", "Orientul Mijlociu", "Naama Bay"],
        description:
          "Această opțiune despre Naama Bay poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 18-22 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Egiptean", "Grătar", "Old Market"],
        description:
          "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 25-30 minute cu mașina de la Sharm Hills",
        visitTime: "1.5–2 ore",
        bestFor: "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune despre Old Market poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Brutărie", "Cafenea", "Mic dejun"],
        description:
          "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        distance: "Aprox. 20-30 minute cu mașina de la Sharm Hills",
        visitTime: "30–90 minute",
        bestFor: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        tip: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Facilități în jur",
    stage: "Nevoi zilnice în apropiere",
    summary: "Market, farmacie, spălătorie, ATM, sală de sport, bazar și servicii utile în apropiere.",
    guestNote: {
      title: "Plătiți furnizorii direct",
      text: "Casa Sole nu oferă cumpărături, mâncare, spălătorie sau livrare. Contactați fiecare furnizor direct și plătiți direct.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Cumpărături și nevoi zilnice. Telefon: +20 120 025 2250. Unele locuri pot oferi livrare gratuită; întrebați direct în timpul apelului.",
        mapLabel: "Deschide Safeway Market harta",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Telefon: +20 107 095 3116.",
        mapLabel: "Deschide pharmacy harta",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Spălătorie și curățătorie. Telefon: +20 128 732 4868.",
        mapLabel: "Deschide City Dry Clean harta",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "ATM este disponibil la supermarket.",
        mapLabel: "Deschide ATM area harta",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Magazin de sucuri și fructe. Telefon: +20 100 938 3801.",
        mapLabel: "Deschide Mango Juice harta",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Sală de sport în apropiere. Telefon: +20 104 041 2617.",
        mapLabel: "Deschide Primal Fit Gym harta",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Bazar și cumpărături. Telefon: +20 127 755 5334.",
        mapLabel: "Deschide Delilah Bazar harta",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Market și centru comercial. Telefon: +20 100 048 9214.",
        mapLabel: "Deschide Mango Market harta",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transport",
    stage: "Deplasare",
    summary: "Transfer aeroport, taxiuri, transport public și curse locale contra cost.",
    guestNote: {
      title: "Planificați înainte de călătorie",
      text: "Preluare-ul sau lăsare-ul de la aeroport poate fi coordonat cu Casa Sole pentru USD 15 cu mașină normală, maximum 4 oaspeți. Oaspeții suplimentari, grupurile mari sau bagajele extra necesită coordonare în avans și pot implica taxe suplimentare. Vă rugăm să aranjați în avans cu Biroul de rezervări.",
    },
    details: [
      {
        label: "De la aeroport la Sharm Hills",
        text: "Drumul de la Sharm El Sheikh International Airport la Sharm Hills Resort durează aproximativ 5 minute cu mașina.",
      },
      {
        label: "Taxi de la aeroport",
        text: "Costul taxiului de la aeroport poate varia și poate fi mai mare la ore târzii. Stabiliți întotdeauna prețul înainte de a urca.",
      },
      {
        label: "Transfer Casa Sole",
        text: "Casa Sole poate ajuta la coordonarea preluare-ului sau lăsare-ului de la aeroport pentru USD 15 cu mașină normală, maximum 4 oaspeți, cu coordonare în avans. Oaspeții suplimentari, grupurile mai mari sau bagajele extra necesită coordonare separată și pot implica taxe suplimentare.",
      },
      {
        label: "Transport în oraș",
        text: "Puteți coordona transportul în oraș cu Casa Sole contra cost.",
      },
      {
        label: "Taxi public",
        text: "Taxiurile publice sunt disponibile, dar tarifele pot fi mai mari.",
      },
      {
        label: "Transport public",
        text: "Transportul public este disponibil la distanță de mers pe jos de poarta resortului.",
      },
    ],
    actions: [
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "Întrebări frecvente",
    stage: "Întrebări comune",
    summary: "Răspunsuri rapide pentru Wi-Fi, curățenie, vizitatori, checkout, card de plajă și suport.",
    guestNote: {
      title: "Răspunsuri rapide",
      text: "Acestea sunt cele mai comune întrebări ale oaspeților Casa Sole. Pentru orice urgență în timpul șederii, trimiteți mesaj echipei noastre.",
    },
    details: [
      {
        label: "Unde este Wi-Fi?",
        text: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
      },
      {
        label: "Pot folosi Wi-Fi pentru streaming?",
        text: "Wi-Fi este potrivit pentru navigare și utilizare de bază. Streamingul intens nu este garantat. Un router 5G cu cotă măsurată poate fi disponibil contra cost prin echipa noastră.",
      },
      {
        label: "Curățenia este inclusă?",
        text: "Curățenia zilnică nu este inclusă. Curățenia apartamentului în timpul șederii este responsabilitatea oaspetelui. Curățenia poate fi aranjată contra cost, în funcție de disponibilitate.",
      },
      {
        label: "Sunt furnizate reumpleri?",
        text: "Nu. Reumplerile și consumabilele nu sunt furnizate în timpul șederii.",
      },
      {
        label: "Pot prelungi șederea?",
        text: "Contactați Biroul de rezervări pentru prelungiri, modificări de rezervare, check-in devreme sau checkout târziu.",
      },
      {
        label: "Pot aduce vizitatori?",
        text: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
      },
      {
        label: "Ce se întâmplă dacă pierd cheia sau cardul de plajă?",
        text: "Această opțiune poate fi utilă în timpul șederii. Verificați ora, prețul și disponibilitatea înainte de a merge.",
      },
      {
        label: "Ce se întâmplă dacă se întrerupe apa sau curentul?",
        text: "Acest lucru se poate întâmpla rar deoarece apa și electricitatea sunt servicii taxabile în zonă. Trimiteți mesaj echipei noastre și serviciul este de obicei restabilit în aproximativ 5 minute.",
      },
      {
        label: "Pe cine contactez?",
        text: "Contactați echipa noastră pentru suport în timpul șederii. Contactați Biroul de rezervări pentru rezervare, prelungire, transfer aeroport sau aspecte Booking.com.",
      },
    ],
    actions: [
      {
        label: "Scrie pe WhatsApp echipei de la fața locului",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "checkout",
    title: "Checkout",
    stage: "Părăsirea apartamentului",
    summary: "Ora de checkout, listă apartament, chei, card de plajă, inspecție și recenzie.",
    guestNote: {
      title: "Checkout time",
      text: "Ora oficială de checkout este maximum 12:00. Checkout-ul târziu poate fi disponibil în funcție de disponibilitate și trebuie coordonat în avans.",
    },
    details: [
      {
        label: "Înainte de plecare",
        text: "Vă rugăm să scoateți gunoiul, să spălați vasele folosite sau să lăsați bucătăria curată, să opriți aerul condiționat și luminile, să închideți ferestrele și ușile balconului sau terasei și să verificați să nu rămână obiecte personale.",
      },
      {
        label: "Chei și card de plajă",
        text: "Returnați cheile și cardul de acces la plajă în același loc sau persoanei de la care le-ați primit, coordonat cu echipa Casa Sole.",
      },
      {
        label: "Mesaj înainte de plecare",
        text: "Vă rugăm să trimiteți mesaj echipei noastre înainte de a părăsi apartamentul.",
      },
      {
        label: "Inspecție",
        text: "Echipa noastră va inspecta apartamentul la checkout. Dacă ceva a fost deteriorat sau spart, raportați înainte de plecare.",
      },
      {
        label: "Cerere de recenzie",
        text: "Dacă v-a plăcut șederea, am aprecia mult recenzia dvs. pe platforma prin care ați rezervat. Ajută viitorii oaspeți și susține Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Scrie pe WhatsApp echipei de la fața locului",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Plecare aeroport",
    stage: "Plecarea din Sharm",
    summary: "Timp aeroport, coordonare lăsare, note despre bagaje și sfaturi finale de călătorie.",
    guestNote: {
      title: "Timp recomandat",
      text: "Pentru zboruri, recomandăm să plecați din Sharm Hills cu 2,5-3 ore înainte de ora zborului. Este cea mai sigură opțiune pentru proceduri aeroportuare, trafic și check-in.",
    },
    details: [
      {
        label: "Lăsare aeroport",
        text: "Casa Sole poate ajuta la coordonarea lăsare-ului la aeroport pentru USD 15 cu o mașină normală, maximum 4 oaspeți, cu coordonare în avans. Oaspeții suplimentari, grupurile mai mari sau bagajele extra necesită coordonare separată și pot implica taxe suplimentare.",
      },
      {
        label: "Înainte să plecați",
        text: "Asigurați-vă că checkout-ul este complet, cheile și cardul de plajă sunt returnate și nu au rămas obiecte personale.",
      },
      {
        label: "Pașapoarte și bagaje",
        text: "Înainte de a părăsi apartamentul, verificați pașapoartele, telefoanele, încărcătoarele, bagajele și documentele personale.",
      },
      {
        label: "Hartă aeroport",
        text: "Folosiți butonul hărții aeroportului dacă conduceți sau folosiți taxi.",
      },
      {
        label: "Status zbor live",
        text: "Verificați statusul live al plecării de la Sharm El Sheikh International Airport înainte de a părăsi apartamentul. Orele de zbor, întârzierile și anulările se pot schimba, confirmați întotdeauna cu compania aeriană.",
        linkLabel: "Plecări SSH live",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Deschide harta aeroportului",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Cere o cursă",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Clubul oaspeților reveniți",
    stage: "După ședere",
    summary: "Beneficii pentru oaspeții care revin, înregistrare card de reducere, comentarii, reclamații și cerere de recenzie.",
    guestNote: {
      title: "Înregistrează-te, comentează sau reclamă",
      text: "Completați formularul Returning Guest Club pentru a primi cardul special de reducere. Puteți folosi același formular și pentru comentarii sau reclamații după ședere, pentru ca echipa noastră să poată reveni corect.",
    },
    details: [
      {
        label: "Reducere pentru oaspeții care revin",
        text: "Oaspeții care revin pot primi 15% reducere când rezervă cu Casa Sole.",
      },
      {
        label: "Opțiuni de rezervare",
        text: "Oaspeții pot rezerva în continuare prin Booking.com sau altă platformă dacă preferă. Beneficiile Returning Guest Club sunt gestionate de Reservation Office.",
      },
      {
        label: "Cum vă înscrieți",
        text: "Deschideți formularul de înregistrare, adăugați numele, țara, numărul WhatsApp, emailul și orice comentariu sau reclamație dacă este necesar. Echipa noastră va păstra datele pentru oferte către oaspeții care revin și va reveni unde este necesar.",
      },
      {
        label: "Comentarii sau reclamații",
        text: "Același formular poate fi folosit și pentru comentarii sau reclamații. Vă rugăm să descrieți clar problema pentru ca echipa noastră să o poată analiza și răspunde pe canalul potrivit.",
      },
      {
        label: "Cerere de recenzie",
        text: "Dacă v-a plăcut șederea, vă rugăm să lăsați o recenzie pe platforma prin care ați rezervat. Ajută viitorii oaspeți și susține Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Înregistrează-te, comentează sau primește cardul de reducere",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Descoperă unitățile noastre",
    stage: "Apartamente Casa Sole",
    summary: "Deschideți listările Casa Sole Sharm Hills, verificați fotografiile, disponibilitatea și tarifele.",
    guestNote: {
      title: "Verifică listările online",
      text: "Folosiți această pagină pentru a deschide listările Casa Sole, a vedea fotografii, a compara dimensiunea apartamentelor și a verifica disponibilitatea sau tarifele live pe Booking.com.",
    },
    details: [
      {
        label: "Unitate cu un dormitor: Casa Sole Sharm Hills Apt 1",
        text: "Potrivit pentru oaspeții care caută un apartament Casa Sole cu un dormitor la Sharm Hills.",
        linkLabel: "Deschide pe Booking.com",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "Unitate cu un dormitor: Casa Sole Sharm Hills Apt 2",
        text: "Potrivit pentru oaspeții care caută un apartament Casa Sole cu un dormitor la Sharm Hills.",
        linkLabel: "Deschide pe Booking.com",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "Unitate cu un dormitor: Casa Sole Sharm Hills Apt 3",
        text: "Potrivit pentru oaspeții care caută un apartament Casa Sole cu un dormitor la Sharm Hills.",
        linkLabel: "Deschide pe Booking.com",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "Unitate cu un dormitor: Casa Sole Sharm Hills Apt 4",
        text: "Potrivit pentru oaspeții care caută un apartament Casa Sole cu un dormitor la Sharm Hills.",
        linkLabel: "Deschide pe Booking.com",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "Unitate cu două dormitoare: Casa Sole Sharm Hills Apt 5",
        text: "Potrivit pentru familii sau grupuri care preferă un apartament Casa Sole cu două dormitoare la Sharm Hills.",
        linkLabel: "Deschide pe Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Unitate cu trei dormitoare: Casa Sole Sharm Hills Apt 6",
        text: "Potrivit pentru familii mai mari sau grupuri care preferă un apartament Casa Sole cu trei dormitoare la Sharm Hills.",
        linkLabel: "Deschide pe Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Contactați-ne",
    stage: "Suport",
    summary: "Mr. Magdy pentru suport în timpul șederii, Reservation Office pentru chestiuni de rezervare.",
    guestNote: {
      title: "Pe cine contactați",
      text: "Vă rugăm să contactați echipa potrivită pentru a vă ajuta mai repede.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "Pentru check-in, suport în timpul șederii, ajutor local, probleme ale apartamentului, mentenanță, chei, card de plajă, cereri router 5G și suport urgent. Telefon / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "Biroul de rezervări",
        text: "Pentru modificări de rezervare, prelungiri, check-in devreme, checkout târziu, coordonare transfer aeroport, Returning Guest Club, Booking.com și alte platforme. Telefon / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "La securitate",
        text: "La sosirea la Sharm Hills, menționați că aveți o rezervare cu Mr. Magdy, apoi cereți securității recepția.",
      },
    ],
    actions: [
      {
        label: "Scrie pe WhatsApp echipei de la fața locului",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biroul de rezervări",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
