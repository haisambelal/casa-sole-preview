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
  privateInfoTitle: "Diesen Guide speichern",
  privateInfoText:
    "Fügen Sie Casa Sole zum Startbildschirm Ihres Telefons hinzu, damit Sie während Ihres Aufenthalts schnell darauf zugreifen können, ohne den Link erneut zu suchen.",

  quickActions: [
    {
      icon: "🛬",
      label: "Ankunft",
      detail: "Flughafen, Taxi und Resort-Zugang",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Check-in",
      detail: "Rezeption, Schlüssel und Registrierung",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Entdecken",
      detail: "Aktivitäten, Essen und Transport",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Aufenthaltshilfe und Reservierungen",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Verwaltetes Apartment, kein Hotelservice",
      text: "Tägliche Reinigung, Nachfüllungen und Verbrauchsmaterialien sind nicht enthalten, sofern sie nicht separat vereinbart wurden.",
    },
    {
      title: "Für Sharm Hills erstellt",
      text: "Casa Sole ist unsere Marke für verwaltete Ferienapartments. Sharm Hills ist das Resort, in dem sich Ihr Apartment befindet; Casa Sole betreut Ihren Aufenthalt, während Sharm Hills die gemeinsame Resort-Umgebung und die Einrichtungen bereitstellt.",
    },
    {
      title: "Private Details bleiben offline",
      text: "Wi-Fi-Daten und apartmentspezifische Informationen sind im Apartment ausgedruckt und werden nicht online veröffentlicht.",
    },
  ],

  checkInPreview: [
    "Fahren Sie zum Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
    "Bitten Sie am Tor die Sicherheit um den Weg zur Rezeption, und fragen Sie dort nach unserem Team.",
    "Unser Team vor Ort hilft mit Schlüsseln, Strandzugangskarte, Wi-Fi-Informationen und Registrierung.",
  ],

  supportPreview:
    "Für Unterstützung während des Aufenthalts kontaktieren Sie unser Team vor Ort. Für Verlängerungen, Buchungsänderungen oder Transfers kontaktieren Sie das Reservierungsbüro.",

  contactPreview:
    "Unser Team vor Ort betreut Ihren Aufenthalt. Das Reservierungsbüro bearbeitet Verlängerungen, Booking.com und andere Plattformthemen.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Ankunft",
    stage: "Bevor Sie das Resort erreichen",
    summary: "Lage von Sharm Hills, Hinweise zum Flughafentaxi und Schritte bei der Ankunft am Tor.",
    guestNote: {
      title: "Willkommen bei Casa Sole",
      text: "Wir freuen uns, Sie bei Casa Sole Sharm Hills begrüßen zu dürfen. Nutzen Sie diese Seite vor der Reise oder bei Ihrer Ankunft am Sharm El Sheikh International Airport.",
    },
    details: [
      {
        label: "Lage des Resorts",
        text: "Casa Sole befindet sich im Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
      },
      {
        label: "Vom Flughafen",
        text: "Der Sharm El Sheikh International Airport ist etwa 5 Autominuten vom Sharm Hills Resort entfernt.",
      },
      {
        label: "Flughafentaxi",
        text: "Flughafentaxis können mehr kosten, besonders spät abends. Vereinbaren Sie den Preis mit dem Fahrer, bevor Sie einsteigen.",
      },
      {
        label: "Sagen Sie dem Fahrer",
        text: "Sagen Sie dem Fahrer deutlich: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "Am Haupttor",
        text: "Sagen Sie der Sicherheit, dass Sie eine Reservierung bei Mr. Magdy haben. Bitten Sie um den Weg zur Rezeption.",
      },
      {
        label: "Rezeptionshalle",
        text: "Betreten Sie das Resort, gehen Sie zur Rezeption und fragen Sie am Empfang nach Mr. Magdy.",
      },
      {
        label: "Flughafentransfer",
        text: "Casa Sole kann die Abholung oder den Absetzen am Flughafen für USD 15 mit einem normalen Auto für maximal 4 Gäste koordinieren. Zusätzliche Gäste, größere Gruppen oder extra Gepäck benötigen vorherige Abstimmung und können zusätzliche Gebühren verursachen. Bitte arrangieren Sie dies im Voraus mit dem Reservierungsbüro.",
      },
    ],
    actions: [
      {
        label: "Resort-Karte öffnen",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "Unser Team vor Ort per WhatsApp kontaktieren",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "check-in",
    title: "Check-in",
    stage: "Ankommen und einrichten",
    summary: "Check-in-Zeit, Unterstützung durch Vertreter, Schlüssel, Strandkarte und Registrierung.",
    guestNote: {
      title: "Check-in-Zeit",
      text: "Check-in ist von 14:00 bis 23:00 möglich. Ankunft nach 23:00 muss vorab mit Casa Sole abgestimmt werden.",
    },
    details: [
      {
        label: "Früher Check-in",
        text: "Früher Check-in kann je nach Verfügbarkeit möglich sein. Er muss im Voraus abgestimmt werden, nicht vor Ort.",
      },
      {
        label: "Unser Team treffen",
        text: "Wenn Sie die Rezeption erreichen, fragen Sie nach unserem Team. Es unterstützt Sie beim Check-in.",
      },
      {
        label: "Was unser Team bereitstellt",
        text: "Unser Team stellt die Apartmentschlüssel, die Strandzugangskarte und die Wi-Fi-Informationen bereit.",
      },
      {
        label: "Passregistrierung",
        text: "Gemäß den lokalen Sicherheitsanforderungen ist für jeden Gast eine Kopie des Originalpasses erforderlich. Pässe können kurz für etwa 10 Minuten entgegengenommen und sofort danach zurückgegeben werden.",
      },
      {
        label: "Alternativer Self-Check-in",
        text: "Wenn unser Vertreter nicht sofort erreichbar ist oder sich der Check-in verzögert, schreiben Sie bitte Casa Sole, und wir aktivieren den alternativen Self-Check-in.",
      },
    ],
    actions: [
      {
        label: "Unser Team vor Ort per WhatsApp kontaktieren",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Apartment-Guide",
    stage: "Im Apartment",
    summary: "Wi-Fi, Klimaanlage, Küchenartikel, Handtücher, Geräte, Waschmaschine, Müll und Versorgungsleistungen.",
    guestNote: {
      title: "Wichtig: verwaltetes Apartment",
      text: "Casa Sole ist ein verwaltetes Ferienapartment, kein Hotelservice. Tägliche Reinigung, Nachfüllungen, Waschmittel und Ersatz von Verbrauchsmaterialien sind während des Aufenthalts nicht enthalten, sofern sie nicht separat gegen Aufpreis arrangiert werden.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "Die Wi-Fi-Daten sind hinter der Haupteingangstür des Apartments ausgedruckt. Die Verbindung ist für Browsing und einfache Nutzung geeignet, aber nicht für intensives Streaming garantiert.",
      },
      {
        label: "5G-Router-Option",
        text: "Wenn Sie stärkeres Internet benötigen, kann Casa Sole je nach Verfügbarkeit gegen Aufpreis einen 5G-Router mit begrenztem Datenvolumen bereitstellen. Bitte fragen Sie unser Team.",
      },
      {
        label: "Nutzung der Klimaanlage",
        text: "Bitte schließen Sie Balkon- oder Terrassentüren, wenn die Klimaanlage eingeschaltet ist, und schalten Sie Klimaanlage und Licht aus, wenn Sie das Apartment verlassen.",
      },
      {
        label: "Handtücher",
        text: "Das Apartment enthält Duschtücher, Gesichtstücher und Strandtücher. Badetücher sind nur für das Badezimmer bestimmt. Bitte nicht für Füße, Böden, Strand oder Außenbereiche verwenden.",
      },
      {
        label: "Küche",
        text: "Die Küche enthält Teller, Tassen, Wasserkocher, Mikrowelle, Herd und Kühlschrank. Es gibt keinen Backofen. Bitte halten Sie die Küche während Ihres Aufenthalts sauber.",
      },
      {
        label: "Apartment-Ausstattung",
        text: "Das Apartment enthält Bügeleisen, Haartrockner, Wäscheständer, Wasserkocher, Strandtücher, Gesichtstücher und Duschtücher.",
      },
      {
        label: "Waschmaschine",
        text: "Im Apartment ist eine Waschmaschine vorhanden. Waschmittel wird nicht bereitgestellt.",
      },
      {
        label: "Müll",
        text: "Der Mülleimer befindet sich unter der Spüle. Wenn er voll ist, bringen Sie den Müll bitte zur nächsten Hauptsammelbox im Außenbereich.",
      },
      {
        label: "Strom- oder Wasserausfall",
        text: "Wasser und Strom sind in der Region kostenpflichtige Dienste. In seltenen Fällen kann es zu einer kurzen Unterbrechung kommen. Das ist normal. Schreiben Sie unserem Team; der Service wird normalerweise innerhalb von etwa 5 Minuten wiederhergestellt.",
      },
      {
        label: "Problem im Apartment",
        text: "Bei Wartung oder Problemen im Apartment kontaktieren Sie bitte unser Team.",
      },
    ],
    actions: [
      {
        label: "Unser Team vor Ort per WhatsApp kontaktieren",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "Hausregeln",
    stage: "Während des Aufenthalts",
    summary: "Ruhezeiten, Besucher, Rauchen, Haustiere, Schäden und Apartmentpflege.",
    guestNote: {
      title: "Bitte behandeln Sie das Apartment respektvoll",
      text: "Das Apartment wird privat verwaltet. Bitte behandeln Sie es sorgfältig und respektieren Sie Nachbarn, Resortgäste und Gemeinschaftsbereiche.",
    },
    details: [
      {
        label: "Ruhezeiten",
        text: "Ruhezeiten sind von 22:00 bis 8:00. Bitte halten Sie den Geräuschpegel in dieser Zeit niedrig.",
      },
      {
        label: "Besucher",
        text: "Besucher sind nur nach Registrierung am Resorttor/bei der Sicherheit erlaubt. Nicht registrierte Besucher dürfen das Resort oder Apartment nicht betreten.",
      },
      {
        label: "Rauchen",
        text: "Rauchen ist im Apartment nicht erlaubt. Rauchen ist nur draußen auf dem Balkon oder der Terrasse erlaubt.",
      },
      {
        label: "Haustiere",
        text: "Haustiere müssen vor der Ankunft mit dem Reservierungsbüro abgestimmt werden. Tiere sind im Pool nicht erlaubt und müssen während des Aufenthalts angeleint bleiben.",
      },
      {
        label: "Kinder",
        text: "Kinder müssen jederzeit beaufsichtigt werden. Eltern oder Erziehungsberechtigte sind vollständig für die Sicherheit der Kinder verantwortlich.",
      },
      {
        label: "Möbel",
        text: "Bitte bringen Sie keine Innenmöbel auf Balkon, Terrasse, Garten, Pool oder Strand.",
      },
      {
        label: "Schäden oder Bruch",
        text: "Unfälle können passieren. Bitte melden Sie Schäden oder Bruch sofort unserem Team.",
      },
      {
        label: "Verlorener Schlüssel oder Karte",
        text: "Die Ersatzkosten für verlorenen Schlüssel oder verlorene Strandzugangskarte betragen USD 100 und werden direkt an unser Team gezahlt.",
      },
      {
        label: "Mückenhinweis für Erdgeschoss",
        text: "Wenn Sie im Erdgeschoss wohnen, halten Sie bitte die Netztür geschlossen, um Mücken zu vermeiden.",
      },
    ],
    actions: [
      {
        label: "Unser Team vor Ort per WhatsApp kontaktieren",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Resort-Guide",
    stage: "Sharm Hills genießen",
    summary: "Pools, Parken, Resort-Einrichtungen, Supermarkt-Lieferung und Gemeinschaftsbereiche.",
    guestNote: {
      title: "Hinweise zu Sharm Hills",
      text: "Diese Seite enthält gemeinsame Resort-Informationen für Casa Sole Gäste im Sharm Hills.",
    },
    details: [
      {
        label: "Pool",
        text: "Der Resortpool ist von Sonnenaufgang bis Sonnenuntergang geöffnet. Kinder müssen jederzeit beaufsichtigt werden.",
      },
      {
        label: "Kinderpool und Wasserrutschen",
        text: "Sharm Hills verfügt über einen Kinderpool und einen kleinen Kinder-Aquapark mit Rutschen. Kinder müssen jederzeit von Eltern oder Erziehungsberechtigten beaufsichtigt werden; Casa Sole und das Resort ersetzen keine elterliche Aufsicht.",
      },
      {
        label: "Parken",
        text: "Parken ist innerhalb von Sharm Hills kostenlos.",
      },
      {
        label: "Gemeinschaftsbereiche",
        text: "Bitte respektieren Sie den persönlichen Raum und die Freiheit anderer Gäste in allen gemeinsamen Resortbereichen.",
      },
      {
        label: "Restaurant und Café",
        text: "Im Sharm Hills gibt es ein Restaurant/Café.",
      },
      {
        label: "Supermarkt-Lieferung",
        text: "Es gibt einen Supermarkt/Shop mit Lieferung. Nennen Sie bei der Bestellung Ihre Apartmentnummer und Gebäudenummer aus den ausgedruckten Informationen hinter der Haupteingangstür.",
      },
      {
        label: "Haustiere im Resort",
        text: "Tiere müssen während des Aufenthalts angeleint bleiben und dürfen nicht in den Pool.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Strand-Guide",
    stage: "Strandtage",
    summary: "Kostenloser Zugang zu Sinbad Beach, Kartenregeln, Einrichtungen, Transport und Zahlungen am Strand.",
    guestNote: {
      title: "Kostenloser Strandzugang",
      text: "Casa Sole Gäste erhalten mit der für das Apartment bereitgestellten Strandkarte kostenlosen Zugang zu Sinbad Beach. Bitte bringen Sie die Karte mit und zeigen Sie sie bei Ankunft vor.",
    },
    details: [
      {
        label: "Zum Strand gelangen",
        text: "Sinbad Beach ist etwa 20 Minuten zu Fuß von Sharm Hills entfernt oder etwa 5 Minuten mit dem Auto. Sie können die Karte nutzen oder uns bitten, eine kostenpflichtige Fahrt zu koordinieren.",
      },
      {
        label: "Strandzugang",
        text: "Der Strandzugang ist für die Gäste kostenlos, die durch die Strandkarte Ihres Apartments abgedeckt sind. Zeigen Sie bei Ankunft die Karte und sagen Sie, dass Sie Sharm Hills resident sind.",
      },
      {
        label: "Strandeinrichtungen",
        text: "Sinbad Beach hat Toiletten, Coffeeshop, Dusche, Tauchzentrum, Schnorchel-Marina und Restaurant.",
      },
      {
        label: "Kartenkontingent",
        text: "Das kostenlose Strandkontingent hängt von der Apartmentgröße ab. Ein-Schlafzimmer-Einheiten enthalten normalerweise eine Karte für 2 Gäste. Zwei-Schlafzimmer-Einheiten enthalten normalerweise zwei Karten für 4 Gäste.",
      },
      {
        label: "Liegen und Handtücher",
        text: "Liegen sind für abgedeckte Gäste kostenlos. Strandtücher befinden sich im Apartment. Zusätzliche Artikel oder weitere Gäste müssen vom Gast selbst geregelt werden.",
      },
      {
        label: "Essen und Getränke",
        text: "Bestellungen im Strandrestaurant werden vom Gast direkt vor Ort bezahlt.",
      },
      {
        label: "Anreise",
        text: "Sie können mit der Karte zum Strand laufen oder uns um kostenpflichtigen Absetzen und Abholung bitten.",
      },
      {
        label: "Verlorene Karte",
        text: "Die Ersatzkosten für eine verlorene Strandzugangskarte betragen USD 100 und werden direkt an unser Team gezahlt.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Foto von Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Foto von Sinbad Beach",
      },
    ],
    actions: [
      {
        label: "Sinbad Beach-Karte öffnen",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Fahrt bei uns anfragen",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Sharm entdecken",
    stage: "Aktivitäten und Sehenswürdigkeiten",
    summary: "Die besten Aktivitäten in Sharm El Sheikh, von Meerestouren bis Nachtleben.",
    guestNote: {
      title: "Sharm mit Casa Sole entdecken",
      text: "Sharm El Sheikh ist bekannt für Schnorcheln, Tauchen, Beach Clubs, Wüstenausflüge, Old Market, SOHO Square und entspanntes Nachtleben. Casa Sole betreibt keine Touren direkt, hilft aber beim Verständnis der Optionen und bei Bedarf bei der Organisation von Transport.",
    },
    details: [
      {
        label: "So nutzen Sie diesen Guide",
        text: "Nutzen Sie die Karten unten, um Entfernung, erwartete Besuchszeit und Eignung zu vergleichen, bevor Sie wählen.",
      },
      {
        label: "Aktivitäten buchen",
        text: "Casa Sole betreibt keine Touren direkt. Bestätigen Sie bei Ausflügen oder Aktivitäten vor der Buchung Abholzeit, enthaltene Leistungen und Preis klar.",
      },
      {
        label: "Brauchen Sie Hilfe bei der Auswahl?",
        text: "Wenn Sie nicht sicher sind, was zu Ihrer Gruppe passt, fragen Sie uns, und wir helfen bei der Entscheidung.",
      },
      {
        label: "Tipp zu Essen und Wasser",
        text: "Trinken Sie kein Leitungswasser. Bei Obst oder Lebensmitteln, die mit Leitungswasser abgespült wurden, verwenden Sie nach Möglichkeit Flaschenwasser für ein zusätzliches Abspülen.",
      },
      {
        label: "Sonnenschutz",
        text: "Die Sonne am Roten Meer ist stark. Bringen Sie Sonnencreme, Sonnenbrille und Hut mit, besonders für Strand-, Boots- und Wüstentage.",
      },
      {
        label: "Trinkgeld und Preise",
        text: "Trinkgeld ist in touristischen Gebieten üblich. Auf Märkten und beim Souvenirkauf handeln Sie ruhig höflich; Feilschen gehört zur Erfahrung.",
      },
      {
        label: "Wüsten- und Moscheebesuche",
        text: "Tragen Sie zum Kamelreiten lange Hosen. Frauen können ein Tuch mitbringen, um in der Wüste und beim Besuch von Moscheen die Haare zu bedecken.",
      },
      {
        label: "Tauchplanung",
        text: "Planen Sie Tauchen im Voraus, besonders wenn Sie ein lizenziertes Zentrum, Ausrüstung, Anfängeranweisung oder Zertifizierungsanforderungen benötigen.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Abend", "Familie", "Restaurants"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 8-10 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–3 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Kultur", "Shopping", "Abend"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 25-30 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–3 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option zu Al Sahaba Mosque kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Kultur", "Sehenswürdigkeit", "Fotos"],
        description:
          "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 25-30 Minuten mit dem Auto von Sharm Hills",
        visitTime: "30–60 Minuten",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Nachtleben", "Cafés", "Spaziergang"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 18-22 Minuten mit dem Auto von Sharm Hills",
        visitTime: "2–4 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Nachtleben", "Café", "Sonnenuntergang"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 30-35 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–3 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Meer und Strand", "Natur", "Tagesausflug"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 45-60 Minuten mit dem Auto von Sharm Hills",
        visitTime: "6–8 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Meer und Strand", "Bootsausflug", "Schnorcheln"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Der Abholung-Punkt hängt vom Touranbieter ab",
        visitTime: "6–8 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Meer und Strand", "Abenteuer", "Tauchen"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Abholung hängt vom Tauchzentrum oder Strandort ab",
        visitTime: "3–7 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Abenteuer", "Wüste", "Familie"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Abholung hängt vom Touranbieter ab",
        visitTime: "3–5 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Kultur", "Innenbereich", "Familie"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 15-20 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1–2 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Kultur", "Sehenswürdigkeit", "Ruhig"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 20-25 Minuten mit dem Auto von Sharm Hills",
        visitTime: "30–60 Minuten",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Meer und Strand", "Schnorcheln", "Beach Clubs"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 10-30 Minuten mit dem Auto je nach Ort",
        visitTime: "3–5 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Tagesausflug", "Abenteuer", "Meer und Strand"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 1.5-2 Stunden mit dem Auto von Sharm Hills",
        visitTime: "Ganzer Tag",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Tagesausflug", "Kultur", "Abenteuer"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 3+ Stunden mit dem Auto von Sharm Hills",
        visitTime: "Über Nacht oder ganzer Tag",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Abend", "Familie", "Fotos"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 15-20 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1–2 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Meer und Strand", "Schnorcheln", "Tauchen"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 45-60 Minuten mit dem Auto, normalerweise per Boot oder organisierter Ras Mohammed Tour besucht",
        visitTime: "Ganzer Tag mit Boots- oder Tauchanbieter",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Sharm-Karte öffnen",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Casa Sole fragen",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    stage: "Auswärts essen",
    summary: "Casa Sole Essensempfehlungen rund um Sharm, von Meeresfrüchte und Burgern bis zu italienischen Gerichten, ägyptischem Grill und Bäckereien.",
    guestNote: {
      title: "Essensguide für Gäste",
      text: "Casa Sole bietet keine Speisen, Lebensmittel oder Lieferdienste an. Dies sind empfohlene Orte zur Orientierung; kontaktieren Sie Restaurants direkt für Reservierungen, Lieferung, Öffnungszeiten und Zahlung.",
    },
    details: [
      {
        label: "Bevor Sie gehen",
        text: "Öffnungszeiten, Menüs, Preise und Lieferverfügbarkeit von Restaurants können sich ändern. Bitte prüfen Sie direkt, bevor Sie fahren oder bestellen.",
      },
      {
        label: "Transport",
        text: "Gäste organisieren ihr Taxi oder ihre Fahrt selbst. Casa Sole kann allgemeine Hinweise geben, aber Restaurantrechnung, Liefergebühr und Transport werden direkt vom Gast bezahlt.",
      },
      {
        label: "Lebensmittelsicherheit",
        text: "Bei Meeresfrüchte, rohen Speisen oder Allergien fragen Sie das Restaurant vor der Bestellung klar. Familien mit Kindern sollten bei Unsicherheit einfache Gerichte wählen.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Meeresfrüchte", "Old Market", "Familie"],
        description:
          "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 25-30 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–2.5 Stunden",
        bestFor: "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option zu Al Sahaba Mosque kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "Amerikanisch", "Familie"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 12-18 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1–2 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["Italienisch", "Pizza", "Locker"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 15-25 Minuten mit dem Auto von Sharm Hills, je nach Verkehr",
        visitTime: "1–2 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Meeresfrüchte", "Steak", "Premium"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 12-18 Minuten mit dem Auto von Sharm Hills",
        visitTime: "2–3 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Indisch", "Asiatisch", "Premium"],
        description:
          "Diese Option zu Naama Bay kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 18-22 Minuten mit dem Auto von Sharm Hills",
        visitTime: "2–3 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Ägyptisch", "Grill", "Familie"],
        description:
          "Diese Option zu Naama Bay kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 18-22 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–2.5 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Meeresfrüchte", "Steak", "Naama Bay"],
        description:
          "Diese Option zu Naama Bay kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 18-22 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–2.5 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["Italienisch", "Pizza", "Naama Bay"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 18-22 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1–2 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["International", "Dachterrasse", "Nachtleben"],
        description:
          "Diese Option zu Naama Bay kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 18-22 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–3 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Libanesisch", "Nahöstlich", "Naama Bay"],
        description:
          "Diese Option zu Naama Bay kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 18-22 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–2.5 Stunden",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Ägyptisch", "Grill", "Old Market"],
        description:
          "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 25-30 Minuten mit dem Auto von Sharm Hills",
        visitTime: "1.5–2 Stunden",
        bestFor: "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option zu Old Market kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Bäckerei", "Café", "Frühstück"],
        description:
          "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        distance: "Ca. 20-30 Minuten mit dem Auto von Sharm Hills",
        visitTime: "30–90 Minuten",
        bestFor: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        tip: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Einrichtungen in der Nähe",
    stage: "Täglicher Bedarf in der Nähe",
    summary: "Markt, Apotheke, Wäscherei, ATM, Fitnessstudio, Basar und nützliche Dienste in der Nähe.",
    guestNote: {
      title: "Anbieter direkt bezahlen",
      text: "Casa Sole bietet keine Lebensmittel, Speisen, Wäscherei oder Lieferdienste. Bitte kontaktieren und bezahlen Sie jeden Anbieter direkt.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Lebensmittel und täglicher Bedarf. Telefon: +20 120 025 2250. Einige Anbieter bieten möglicherweise kostenlose Lieferung; bitte fragen Sie direkt beim Anruf.",
        mapLabel: "Öffnen Safeway Market Karte",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Telefon: +20 107 095 3116.",
        mapLabel: "Öffnen pharmacy Karte",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Wäscherei und Reinigung. Telefon: +20 128 732 4868.",
        mapLabel: "Öffnen City Dry Clean Karte",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "Ein ATM ist im Supermarkt verfügbar.",
        mapLabel: "Öffnen ATM area Karte",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Saft- und Obstgeschäft. Telefon: +20 100 938 3801.",
        mapLabel: "Öffnen Mango Juice Karte",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Fitnessstudio in der Nähe. Telefon: +20 104 041 2617.",
        mapLabel: "Öffnen Primal Fit Gym Karte",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Basar und Shopping. Telefon: +20 127 755 5334.",
        mapLabel: "Öffnen Delilah Bazar Karte",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Markt und Einkaufszentrum. Telefon: +20 100 048 9214.",
        mapLabel: "Öffnen Mango Market Karte",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transport",
    stage: "Fortbewegung",
    summary: "Flughafentransfer, Taxis, öffentliche Verkehrsmittel und kostenpflichtige lokale Fahrten.",
    guestNote: {
      title: "Vor der Fahrt planen",
      text: "Airport Abholung oder Absetzen kann mit Casa Sole für USD 15 mit normalem Auto für maximal 4 Gäste koordiniert werden. Zusätzliche Gäste, größere Gruppen oder extra Gepäck erfordern vorherige Abstimmung und können zusätzliche Gebühren verursachen. Bitte im Voraus mit dem Reservierungsbüro arrangieren.",
    },
    details: [
      {
        label: "Vom Flughafen nach Sharm Hills",
        text: "Die Fahrt vom Sharm El Sheikh International Airport zum Sharm Hills Resort dauert etwa 5 Minuten.",
      },
      {
        label: "Flughafentaxi",
        text: "Die Kosten für ein Flughafentaxi können variieren und spät abends höher sein. Vereinbaren Sie immer den Preis vor dem Einsteigen.",
      },
      {
        label: "Casa Sole Transfer",
        text: "Casa Sole kann bei vorheriger Abstimmung Airport Abholung oder Absetzen für USD 15 mit normalem Auto für maximal 4 Gäste koordinieren. Zusätzliche Gäste, größere Gruppen oder extra Gepäck benötigen separate Abstimmung und können zusätzliche Gebühren verursachen.",
      },
      {
        label: "Stadttransport",
        text: "Sie können Stadttransport gegen Aufpreis mit Casa Sole koordinieren.",
      },
      {
        label: "Öffentliches Taxi",
        text: "Öffentliche Taxis sind verfügbar, aber die Preise können höher sein.",
      },
      {
        label: "Öffentliche Verkehrsmittel",
        text: "Öffentliche Verkehrsmittel sind zu Fuß vom Resorttor erreichbar.",
      },
    ],
    actions: [
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    stage: "Häufige Fragen",
    summary: "Schnelle Antworten zu Wi-Fi, Reinigung, Besuchern, Checkout, Strandkarte und Support.",
    guestNote: {
      title: "Schnelle Antworten",
      text: "Dies sind die häufigsten Fragen von Casa Sole Gästen. Bei dringenden Anliegen während des Aufenthalts schreiben Sie unserem Team.",
    },
    details: [
      {
        label: "Wo ist das Wi-Fi?",
        text: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
      },
      {
        label: "Kann ich Wi-Fi für Streaming nutzen?",
        text: "Wi-Fi ist für Browsing und einfache Nutzung geeignet. Starkes Streaming wird nicht garantiert. Ein 5G-Router mit begrenztem Datenvolumen kann gegen Aufpreis über unser Team verfügbar sein.",
      },
      {
        label: "Ist Reinigung enthalten?",
        text: "Tägliche Reinigung ist nicht enthalten. Die Sauberkeit des Apartments während des Aufenthalts liegt in der Verantwortung des Gastes. Reinigung kann gegen Aufpreis je nach Verfügbarkeit arrangiert werden.",
      },
      {
        label: "Werden Nachfüllungen bereitgestellt?",
        text: "Nein. Nachfüllungen und Verbrauchsmaterialien werden während des Aufenthalts nicht bereitgestellt.",
      },
      {
        label: "Kann ich meinen Aufenthalt verlängern?",
        text: "Für Verlängerungen, Buchungsänderungen, frühen Check-in oder späten Checkout kontaktieren Sie bitte das Reservierungsbüro.",
      },
      {
        label: "Kann ich Besucher mitbringen?",
        text: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
      },
      {
        label: "Was passiert, wenn ich Schlüssel oder Strandkarte verliere?",
        text: "Diese Option kann während Ihres Aufenthalts hilfreich sein. Prüfen Sie Zeiten, Preis und Verfügbarkeit vor dem Besuch.",
      },
      {
        label: "Was, wenn Wasser oder Strom ausfällt?",
        text: "Dies kann selten passieren, da Wasser und Strom in der Gegend kostenpflichtige Dienste sind. Schreiben Sie unserem Team; der Service wird normalerweise innerhalb von etwa 5 Minuten wiederhergestellt.",
      },
      {
        label: "Wen kontaktiere ich?",
        text: "Kontaktieren Sie unser Team für Unterstützung während des Aufenthalts. Für Buchung, Verlängerung, Flughafentransfer oder Booking.com Themen kontaktieren Sie das Reservierungsbüro.",
      },
    ],
    actions: [
      {
        label: "Unser Team vor Ort per WhatsApp kontaktieren",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "checkout",
    title: "Checkout",
    stage: "Das Apartment verlassen",
    summary: "Checkout-Zeit, Apartment-Checkliste, Schlüssel, Strandkarte, Inspektion und Bewertung.",
    guestNote: {
      title: "Checkout time",
      text: "Offizielle Checkout-Zeit ist spätestens 12:00 Uhr. Später Checkout kann je nach Verfügbarkeit möglich sein und muss im Voraus abgestimmt werden.",
    },
    details: [
      {
        label: "Vor dem Verlassen",
        text: "Bitte entfernen Sie Müll, spülen Sie benutztes Geschirr oder hinterlassen Sie die Küche sauber, schalten Sie Klimaanlage und Licht aus, schließen Sie Fenster und Balkon- oder Terrassentüren und prüfen Sie, dass keine persönlichen Gegenstände zurückbleiben.",
      },
      {
        label: "Schlüssel und Strandkarte",
        text: "Geben Sie Schlüssel und Strandzugangskarte an denselben Ort oder dieselbe Person zurück, von der Sie sie erhalten haben, in Abstimmung mit dem Casa Sole Team.",
      },
      {
        label: "Nachricht vor dem Verlassen",
        text: "Bitte schreiben Sie unserem Team, bevor Sie das Apartment verlassen.",
      },
      {
        label: "Inspektion",
        text: "Unser Team prüft das Apartment beim Checkout. Wenn etwas beschädigt oder kaputt ist, melden Sie es bitte vor der Abreise.",
      },
      {
        label: "Bitte um Bewertung",
        text: "Wenn Ihnen der Aufenthalt gefallen hat, freuen wir uns sehr über Ihre Bewertung auf der Plattform, über die Sie gebucht haben. Das hilft zukünftigen Gästen und unterstützt Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Unser Team vor Ort per WhatsApp kontaktieren",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Abflug vom Flughafen",
    stage: "Sharm verlassen",
    summary: "Flughafenzeit, Absetzen-Koordination, Gepäckhinweise und letzte Reisetipps.",
    guestNote: {
      title: "Empfohlene Zeitplanung",
      text: "Für Flüge empfehlen wir, Sharm Hills 2,5 bis 3 Stunden vor Flugzeit zu verlassen. Dies ist die sicherste Option für Flughafenabläufe, Verkehr und Check-in.",
    },
    details: [
      {
        label: "Airport Absetzen",
        text: "Casa Sole kann den Airport Absetzen für USD 15 mit einem normalen Auto für maximal 4 Gäste koordinieren, sofern dies im Voraus abgestimmt wird. Zusätzliche Gäste, größere Gruppen oder extra Gepäck benötigen separate Abstimmung und können zusätzliche Gebühren verursachen.",
      },
      {
        label: "Bevor Sie gehen",
        text: "Stellen Sie sicher, dass der Checkout abgeschlossen ist, Schlüssel und Strandkarte zurückgegeben sind und keine persönlichen Gegenstände zurückbleiben.",
      },
      {
        label: "Pässe und Gepäck",
        text: "Prüfen Sie vor dem Verlassen des Apartments Pässe, Telefone, Ladegeräte, Gepäck und persönliche Dokumente.",
      },
      {
        label: "Flughafenkarte",
        text: "Nutzen Sie die Flughafenkarte, wenn Sie fahren oder ein Taxi nutzen.",
      },
      {
        label: "Live-Flugstatus",
        text: "Prüfen Sie vor dem Verlassen des Apartments den Live-Abflugstatus am Sharm El Sheikh International Airport. Flugzeiten, Verspätungen und Stornierungen können sich ändern; bestätigen Sie immer bei Ihrer Airline.",
        linkLabel: "Live-Abflüge SSH",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Flughafenkarte öffnen",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Fahrt anfragen",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Returning Guest Club",
    stage: "Nach dem Aufenthalt",
    summary: "Vorteile für wiederkehrende Gäste, Registrierung für die Rabattkarte, Kommentare, Beschwerden und Bewertungsanfrage.",
    guestNote: {
      title: "Registrieren, kommentieren oder beschweren",
      text: "Füllen Sie das Returning Guest Club Formular aus, um Ihre spezielle Rabattkarte zu erhalten. Sie können dasselbe Formular auch für Kommentare oder Beschwerden nach Ihrem Aufenthalt nutzen, damit unser Team korrekt nachfassen kann.",
    },
    details: [
      {
        label: "Rabatt für wiederkehrende Gäste",
        text: "Wiederkehrende Gäste können bei einer Reservierung mit Casa Sole 15% Rabatt erhalten.",
      },
      {
        label: "Buchungsoptionen",
        text: "Gäste können weiterhin über Booking.com oder eine andere Plattform buchen, wenn sie dies bevorzugen. Vorteile des Returning Guest Club werden vom Reservation Office bearbeitet.",
      },
      {
        label: "So nehmen Sie teil",
        text: "Öffnen Sie das Registrierungsformular und geben Sie Name, Land, WhatsApp-Nummer, E-Mail sowie bei Bedarf Kommentar oder Beschwerde ein. Unser Team speichert Ihre Angaben für Angebote an wiederkehrende Gäste und meldet sich bei Bedarf.",
      },
      {
        label: "Kommentare oder Beschwerden",
        text: "Dasselbe Formular kann auch für Kommentare oder Beschwerden genutzt werden. Bitte beschreiben Sie das Anliegen klar, damit unser Team es prüfen und über den richtigen Kanal antworten kann.",
      },
      {
        label: "Bitte um Bewertung",
        text: "Wenn Ihnen der Aufenthalt gefallen hat, hinterlassen Sie bitte eine Bewertung auf der Plattform, über die Sie gebucht haben. Das hilft zukünftigen Gästen und unterstützt Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Registrieren, kommentieren oder Rabattkarte erhalten",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Unsere Apartments entdecken",
    stage: "Casa Sole Apartments",
    summary: "Öffnen Sie die Casa Sole Sharm Hills Inserate und prüfen Sie Fotos, Verfügbarkeit und Preise.",
    guestNote: {
      title: "Inserate online prüfen",
      text: "Nutzen Sie diese Seite, um Casa Sole Inserate zu öffnen, Fotos anzusehen, Apartmentgrößen zu vergleichen und Live-Verfügbarkeit oder Preise auf Booking.com zu prüfen.",
    },
    details: [
      {
        label: "Ein-Schlafzimmer-Apartment: Casa Sole Sharm Hills Apt 1",
        text: "Geeignet für Gäste, die ein Casa Sole Apartment mit einem Schlafzimmer in Sharm Hills suchen.",
        linkLabel: "Auf Booking.com öffnen",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "Ein-Schlafzimmer-Apartment: Casa Sole Sharm Hills Apt 2",
        text: "Geeignet für Gäste, die ein Casa Sole Apartment mit einem Schlafzimmer in Sharm Hills suchen.",
        linkLabel: "Auf Booking.com öffnen",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "Ein-Schlafzimmer-Apartment: Casa Sole Sharm Hills Apt 3",
        text: "Geeignet für Gäste, die ein Casa Sole Apartment mit einem Schlafzimmer in Sharm Hills suchen.",
        linkLabel: "Auf Booking.com öffnen",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "Ein-Schlafzimmer-Apartment: Casa Sole Sharm Hills Apt 4",
        text: "Geeignet für Gäste, die ein Casa Sole Apartment mit einem Schlafzimmer in Sharm Hills suchen.",
        linkLabel: "Auf Booking.com öffnen",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "Zwei-Schlafzimmer-Apartment: Casa Sole Sharm Hills Apt 5",
        text: "Geeignet für Familien oder Gruppen, die ein Casa Sole Apartment mit zwei Schlafzimmern in Sharm Hills bevorzugen.",
        linkLabel: "Auf Booking.com öffnen",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Drei-Schlafzimmer-Apartment: Casa Sole Sharm Hills Apt 6",
        text: "Geeignet für größere Familien oder Gruppen, die ein Casa Sole Apartment mit drei Schlafzimmern in Sharm Hills bevorzugen.",
        linkLabel: "Auf Booking.com öffnen",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Kontakt",
    stage: "Support",
    summary: "Mr. Magdy für Unterstützung während des Aufenthalts, Reservation Office für Buchungsfragen.",
    guestNote: {
      title: "Wen kontaktieren",
      text: "Bitte kontaktieren Sie das richtige Team, damit wir schneller helfen können.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "Für Check-in, Unterstützung während des Aufenthalts, lokale Hilfe, Apartmentprobleme, Wartung, Schlüssel, Strandkarte, 5G-Router-Anfragen und dringende Apartmenthilfe. Telefon / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "Reservierungsbüro",
        text: "Für Buchungsänderungen, Verlängerungen, frühen Check-in, späten Checkout, Flughafentransfer-Koordination, Returning Guest Club, Booking.com und andere Plattformthemen. Telefon / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "Bei der Security",
        text: "Bei Ankunft in Sharm Hills sagen Sie, dass Sie eine Reservierung mit Mr. Magdy haben, und bitten Sie die Security um den Weg zur Rezeptionshalle.",
      },
    ],
    actions: [
      {
        label: "Unser Team vor Ort per WhatsApp kontaktieren",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservierungsbüro",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
