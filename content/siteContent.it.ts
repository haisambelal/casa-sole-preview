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
  privateInfoTitle: "Salva questa guida",
  privateInfoText:
    "Aggiungi Casa Sole alla schermata principale del telefono per accedere rapidamente durante il soggiorno, senza cercare di nuovo il link.",

  quickActions: [
    {
      icon: "🛬",
      label: "Arrivo",
      detail: "Aeroporto, taxi e accesso al resort",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Check-in",
      detail: "Reception, chiavi e registrazione",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Esplora",
      detail: "Attività, cibo e trasporti",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Supporto soggiorno e prenotazioni",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Appartamento gestito, non servizio hotel",
      text: "Pulizia giornaliera, rifornimenti e consumabili non sono inclusi salvo accordo separato.",
    },
    {
      title: "Creato per Sharm Hills",
      text: "Casa Sole è il nostro marchio di appartamenti vacanza gestiti. Sharm Hills è il resort in cui si trova il tuo appartamento; Casa Sole gestisce il supporto del soggiorno, mentre Sharm Hills offre l’ambiente del resort e le strutture comuni.",
    },
    {
      title: "I dettagli privati restano offline",
      text: "I dettagli Wi-Fi e le informazioni specifiche dell’appartamento sono stampati dentro l’appartamento, non pubblicati online.",
    },
  ],

  checkInPreview: [
    "Vai a Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
    "Al cancello, chiedi alla sicurezza dove si trova la hall della reception, poi chiedi alla reception del nostro team.",
    "Il nostro team in loco ti assisterà con le chiavi, la carta di accesso alla spiaggia, le informazioni Wi-Fi e la registrazione.",
  ],

  supportPreview:
    "Per supporto durante il soggiorno, contatta il nostro team in loco. Per estensioni, modifiche di prenotazione o trasferimenti, contatta l’Ufficio prenotazioni.",

  contactPreview:
    "Il nostro team in loco supporta il tuo soggiorno. L’Ufficio prenotazioni gestisce estensioni, Booking.com e altre piattaforme.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Arrivo",
    stage: "Prima di arrivare al resort",
    summary: "Posizione di Sharm Hills, consigli sui taxi dall’aeroporto e passaggi di arrivo al cancello.",
    guestNote: {
      title: "Benvenuti a Casa Sole",
      text: "Non vediamo l’ora di darti il benvenuto a Casa Sole Sharm Hills. Usa questa pagina prima del viaggio o quando arrivi a Sharm El Sheikh International Airport.",
    },
    details: [
      {
        label: "Posizione del resort",
        text: "Casa Sole si trova all’interno di Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
      },
      {
        label: "Dall’aeroporto",
        text: "Sharm El Sheikh International Airport dista circa 5 minuti in auto da Sharm Hills Resort.",
      },
      {
        label: "Taxi dall’aeroporto",
        text: "I taxi dell’aeroporto possono costare di più, soprattutto nelle ore tarde. Concorda il prezzo con l’autista prima di salire in auto.",
      },
      {
        label: "Cosa dire all’autista",
        text: "Dì chiaramente all’autista: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "Al cancello principale",
        text: "Comunica alla sicurezza che hai una prenotazione con Mr. Magdy. Chiedi alla sicurezza di indicarti la hall della reception.",
      },
      {
        label: "Hall della reception",
        text: "Entra nel resort, vai alla hall della reception e chiedi al banco reception di Mr. Magdy.",
      },
      {
        label: "Transfer aeroportuale",
        text: "Casa Sole può aiutare a coordinare il ritiro o il accompagnamento aeroportuale per USD 15 con un’auto normale, fino a un massimo di 4 ospiti. Ospiti aggiuntivi, gruppi più grandi o bagagli extra richiedono coordinamento anticipato e possono comportare costi aggiuntivi. Organizza tutto in anticipo con l’Ufficio prenotazioni.",
      },
    ],
    actions: [
      {
        label: "Apri mappa del resort",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "Scrivi su WhatsApp al nostro team in loco",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "check-in",
    title: "Check-in",
    stage: "Entrare e sistemarsi",
    summary: "Orario di check-in, supporto del rappresentante, chiavi, carta spiaggia e registrazione.",
    guestNote: {
      title: "Orario di check-in",
      text: "Il check-in è disponibile dalle 14:00 alle 23:00. L’arrivo dopo le 23:00 deve essere coordinato con Casa Sole prima dell’arrivo.",
    },
    details: [
      {
        label: "Check-in anticipato",
        text: "Il check-in anticipato può essere possibile in base alla disponibilità. Deve essere coordinato in anticipo, non sul posto.",
      },
      {
        label: "Incontra il nostro team",
        text: "Quando arrivi alla hall della reception, chiedi del nostro team. Ti assisteranno nel processo di check-in.",
      },
      {
        label: "Cosa fornisce il nostro team",
        text: "Il nostro team fornirà le chiavi dell’appartamento, la carta di accesso alla spiaggia e le informazioni Wi-Fi.",
      },
      {
        label: "Registrazione passaporti",
        text: "In conformità ai requisiti di sicurezza delle autorità locali, è richiesta una copia del passaporto originale per ogni ospite. I passaporti possono essere ritirati brevemente per circa 10 minuti e restituiti subito dopo.",
      },
      {
        label: "Check-in autonomo alternativo",
        text: "Se il nostro rappresentante non è raggiungibile immediatamente o il check-in è in ritardo, invia un messaggio a Casa Sole e attiveremo la procedura alternativa di self check-in.",
      },
    ],
    actions: [
      {
        label: "Scrivi su WhatsApp al nostro team in loco",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Guida dell’appartamento",
    stage: "Dentro l’appartamento",
    summary: "Wi-Fi, aria condizionata, cucina, asciugamani, elettrodomestici, lavatrice, rifiuti e utenze.",
    guestNote: {
      title: "Importante: appartamento gestito",
      text: "Casa Sole è un appartamento vacanza gestito, non un servizio hotel. Pulizia giornaliera, rifornimenti, detersivo e sostituzione dei consumabili non sono inclusi durante il soggiorno salvo accordo separato con costo extra.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "I dettagli Wi-Fi sono stampati dietro la porta principale dell’appartamento. La connessione è adatta alla navigazione e all’uso base, ma non è garantita per lo streaming intenso.",
      },
      {
        label: "Opzione router 5G",
        text: "Se hai bisogno di internet più forte, Casa Sole può fornire un router 5G con quota misurata a costo extra, in base alla disponibilità. Chiedi al nostro team.",
      },
      {
        label: "Uso dell’aria condizionata",
        text: "Chiudi le porte del balcone o della terrazza mentre l’aria condizionata è accesa e spegni aria condizionata e luci quando lasci l’appartamento.",
      },
      {
        label: "Asciugamani",
        text: "L’appartamento include asciugamani da doccia, asciugamani viso e teli mare. Gli asciugamani da bagno sono solo per il bagno. Non usarli per piedi, pavimenti, spiaggia o aree esterne.",
      },
      {
        label: "Cucina",
        text: "La cucina include piatti, tazze, bollitore per acqua calda, microonde, fornello e frigorifero. Non c’è forno. Mantieni la cucina pulita durante il soggiorno.",
      },
      {
        label: "Dotazioni dell’appartamento",
        text: "L’appartamento include ferro da stiro, asciugacapelli, stendibiancheria, bollitore per acqua calda, teli mare, asciugamani viso e asciugamani da doccia.",
      },
      {
        label: "Lavatrice",
        text: "Nell’appartamento è disponibile una lavatrice. Il detersivo non è fornito.",
      },
      {
        label: "Rifiuti",
        text: "Il cestino è sotto il lavello. Quando è pieno, porta i rifiuti al contenitore principale più vicino nell’area verde.",
      },
      {
        label: "Interruzione di acqua o elettricità",
        text: "Acqua ed elettricità sono servizi a pagamento nella zona. In rari casi può verificarsi una breve interruzione. È normale. Invia un messaggio al nostro team e il servizio di solito viene ripristinato in circa 5 minuti.",
      },
      {
        label: "Problema nell’appartamento",
        text: "Per manutenzione o qualsiasi problema nell’appartamento, contatta il nostro team.",
      },
    ],
    actions: [
      {
        label: "Scrivi su WhatsApp al nostro team in loco",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "Regole della casa",
    stage: "Durante il soggiorno",
    summary: "Orari di silenzio, visitatori, fumo, animali, danni e cura dell’appartamento.",
    guestNote: {
      title: "Ti preghiamo di rispettare l’appartamento",
      text: "L’appartamento è gestito privatamente. Trattalo con cura e rispetta vicini, ospiti del resort e spazi condivisi.",
    },
    details: [
      {
        label: "Orari di silenzio",
        text: "Gli orari di silenzio sono dalle 22:00 alle 8:00. Mantieni basso il rumore durante questo periodo.",
      },
      {
        label: "Visitatori",
        text: "I visitatori sono ammessi solo dopo la registrazione al cancello/sicurezza del resort. Visitatori non registrati non devono entrare nel resort o nell’appartamento.",
      },
      {
        label: "Fumo",
        text: "Non è consentito fumare dentro l’appartamento. È consentito fumare solo all’esterno sul balcone o sulla terrazza.",
      },
      {
        label: "Animali domestici",
        text: "Gli animali devono essere coordinati con l’Ufficio prenotazioni prima dell’arrivo. Gli animali non sono ammessi in piscina e devono restare al guinzaglio durante il soggiorno.",
      },
      {
        label: "Bambini",
        text: "I bambini devono essere sorvegliati in ogni momento. Genitori o tutori sono pienamente responsabili della sicurezza dei bambini.",
      },
      {
        label: "Mobili",
        text: "Non portare i mobili interni all’esterno su balcone, terrazza, giardino, piscina o spiaggia.",
      },
      {
        label: "Danni o rotture",
        text: "Gli incidenti possono capitare. Segnala immediatamente al nostro team qualsiasi danno o rottura.",
      },
      {
        label: "Chiave o carta smarrita",
        text: "Il costo di sostituzione per chiave smarrita o carta spiaggia smarrita è USD 100, da pagare direttamente al nostro team.",
      },
      {
        label: "Nota zanzare per il piano terra",
        text: "Se soggiorni al piano terra, tieni chiusa la zanzariera per aiutare a evitare le zanzare.",
      },
    ],
    actions: [
      {
        label: "Scrivi su WhatsApp al nostro team in loco",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Guida del resort",
    stage: "Godersi Sharm Hills",
    summary: "Piscine, parcheggio, servizi del resort, consegna dal supermercato e aree comuni.",
    guestNote: {
      title: "Indicazioni su Sharm Hills",
      text: "Questa pagina contiene informazioni sulle aree condivise del resort per gli ospiti Casa Sole che soggiornano dentro Sharm Hills.",
    },
    details: [
      {
        label: "Piscina",
        text: "La piscina del resort è aperta dall’alba al tramonto. I bambini devono essere sorvegliati in ogni momento.",
      },
      {
        label: "Piscina bambini e scivoli acquatici",
        text: "Sharm Hills dispone di una piscina per bambini e di un piccolo aqua park per bambini con scivoli. I bambini devono essere sorvegliati sempre da un genitore o tutore; Casa Sole e il resort non sostituiscono la supervisione dei genitori.",
      },
      {
        label: "Parcheggio",
        text: "Il parcheggio è gratuito dentro Sharm Hills.",
      },
      {
        label: "Aree comuni",
        text: "Rispetta lo spazio personale e la libertà degli altri ospiti in tutte le aree condivise del resort.",
      },
      {
        label: "Ristorante e caffè",
        text: "C’è un ristorante/caffè dentro Sharm Hills.",
      },
      {
        label: "Consegna dal supermercato",
        text: "C’è un supermercato/negozio con consegna. Quando ordini, comunica il numero dell’appartamento e dell’edificio indicati nelle informazioni stampate dietro la porta principale.",
      },
      {
        label: "Animali nel resort",
        text: "Gli animali devono restare al guinzaglio durante il soggiorno e non sono ammessi in piscina.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Guida alla spiaggia",
    stage: "Giornate in spiaggia",
    summary: "Accesso gratuito a Sinbad Beach, regole della carta, servizi, trasporto e pagamenti in spiaggia.",
    guestNote: {
      title: "Accesso gratuito alla spiaggia",
      text: "Gli ospiti Casa Sole ricevono accesso gratuito a Sinbad Beach con la carta spiaggia fornita per l’appartamento. Porta la carta e mostrala all’arrivo.",
    },
    details: [
      {
        label: "Come raggiungere la spiaggia",
        text: "Sinbad Beach dista circa 20 minuti a piedi da Sharm Hills, o circa 5 minuti in auto. Puoi usare la mappa o chiederci di aiutarti a coordinare un passaggio a pagamento.",
      },
      {
        label: "Accesso alla spiaggia",
        text: "L’accesso alla spiaggia è gratuito per gli ospiti coperti dalla carta spiaggia dell’appartamento. All’arrivo mostra la carta e dì che sei residente a Sharm Hills.",
      },
      {
        label: "Servizi in spiaggia",
        text: "Sinbad Beach dispone di servizi igienici, caffetteria, doccia, centro diving, marina per snorkeling e ristorante.",
      },
      {
        label: "Copertura della carta",
        text: "La copertura gratuita della spiaggia dipende dalla dimensione dell’appartamento. Le unità con una camera di solito includono una carta per 2 ospiti. Le unità con due camere di solito includono due carte per 4 ospiti.",
      },
      {
        label: "Lettini e asciugamani",
        text: "I lettini sono gratuiti per gli ospiti coperti. I teli mare sono forniti dentro l’appartamento. Qualsiasi elemento extra o ospite aggiuntivo deve essere gestito dall’ospite.",
      },
      {
        label: "Cibo e bevande",
        text: "Qualsiasi ordine dal ristorante della spiaggia viene pagato direttamente dall’ospite sul posto.",
      },
      {
        label: "Come arrivarci",
        text: "Puoi andare a piedi alla spiaggia usando la mappa, oppure chiederci un accompagnamento e ritiro a pagamento.",
      },
      {
        label: "Carta smarrita",
        text: "Il costo di sostituzione della carta spiaggia smarrita è USD 100, da pagare direttamente al nostro team.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Foto di Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Foto di Sinbad Beach",
      },
    ],
    actions: [
      {
        label: "Apri mappa di Sinbad Beach",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Chiedici un passaggio",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Esplora Sharm",
    stage: "Attività e attrazioni",
    summary: "Le migliori cose da fare a Sharm El Sheikh, dalle gite in mare alla vita notturna.",
    guestNote: {
      title: "Esplora Sharm con Casa Sole",
      text: "Sharm El Sheikh è famosa per snorkeling, diving, club sulla spiaggia, escursioni nel deserto, Old Market, SOHO Square e una vita notturna rilassata. Casa Sole non gestisce tour direttamente, ma possiamo aiutarti a capire le opzioni e organizzare il trasporto quando necessario.",
    },
    details: [
      {
        label: "Come usare questa guida",
        text: "Usa le schede qui sotto per confrontare distanza, durata prevista e idoneità prima di scegliere dove andare.",
      },
      {
        label: "Prenotare attività",
        text: "Casa Sole non gestisce tour direttamente. Per gite o attività, conferma chiaramente orario di ritiro, elementi inclusi e prezzo prima di prenotare.",
      },
      {
        label: "Hai bisogno di aiuto per scegliere?",
        text: "Se non sei sicuro di cosa sia adatto al tuo gruppo, chiedici e ti aiuteremo a decidere.",
      },
      {
        label: "Consiglio su cibo e acqua",
        text: "Non bere acqua del rubinetto. Per frutta o cibo sciacquati con acqua del rubinetto, usa acqua in bottiglia per un risciacquo extra quando possibile.",
      },
      {
        label: "Protezione dal sole",
        text: "Il sole del Mar Rosso è forte. Porta crema solare, occhiali da sole e cappello, soprattutto per giornate in spiaggia, barca e deserto.",
      },
      {
        label: "Mance e prezzi",
        text: "Le mance sono comuni nelle zone turistiche. Nei mercati e per souvenir, non essere timido nel contrattare educatamente; la trattativa fa parte dell’esperienza.",
      },
      {
        label: "Visite nel deserto e in moschea",
        text: "Indossa pantaloni lunghi per cavalcare i cammelli. Le donne possono portare una sciarpa per coprire i capelli nel deserto e durante la visita alle moschee.",
      },
      {
        label: "Pianificazione immersioni",
        text: "Pianifica le immersioni in anticipo, soprattutto se hai bisogno di centro autorizzato, attrezzatura, istruzioni per principianti o requisiti di certificazione.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Sera", "Famiglie", "Ristoranti"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 8-10 minuti in auto da Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Cultura", "Shopping", "Sera"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 25-30 minuti in auto da Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione relativa a Al Sahaba Mosque può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Cultura", "Punto di riferimento", "Foto"],
        description:
          "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 25-30 minuti in auto da Sharm Hills",
        visitTime: "30–60 minuti",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Vita notturna", "Caffè", "Passeggiata"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 18-22 minuti in auto da Sharm Hills",
        visitTime: "2–4 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Vita notturna", "Caffè", "Tramonto"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 30-35 minuti in auto da Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Mare e spiaggia", "Natura", "Gita di un giorno"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 45-60 minuti in auto da Sharm Hills",
        visitTime: "6–8 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Mare e spiaggia", "Gita in barca", "Snorkeling"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Il punto di ritiro varia secondo l’operatore del tour",
        visitTime: "6–8 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Mare e spiaggia", "Avventura", "Diving"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Il ritiro varia secondo il centro diving o la posizione della spiaggia",
        visitTime: "3–7 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Avventura", "Deserto", "Famiglie"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Il ritiro varia secondo l’operatore del tour",
        visitTime: "3–5 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Cultura", "Al coperto", "Famiglie"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 15-20 minuti in auto da Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Cultura", "Punto di riferimento", "Tranquillo"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 20-25 minuti in auto da Sharm Hills",
        visitTime: "30–60 minuti",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Mare e spiaggia", "Snorkeling", "Beach club"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 10-30 minuti in auto a seconda del luogo",
        visitTime: "3–5 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Gita di un giorno", "Avventura", "Mare e spiaggia"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 1.5-2 ore in auto da Sharm Hills",
        visitTime: "Giornata intera",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Gita di un giorno", "Cultura", "Avventura"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 3+ ore in auto da Sharm Hills",
        visitTime: "Notte inclusa o giornata intera",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Sera", "Famiglie", "Foto"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 15-20 minuti in auto da Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Mare e spiaggia", "Snorkeling", "Diving"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 45-60 minuti in auto, di solito visitato in barca o con un’escursione organizzata a Ras Mohammed",
        visitTime: "Giornata intera con operatore barca o diving",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Apri mappa di Sharm",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Chiedi a Casa Sole",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Ristoranti",
    stage: "Mangiare fuori",
    summary: "Scelte cibo Casa Sole a Sharm, dal pesce e burger all’italiano, grigliate egiziane e panetteria.",
    guestNote: {
      title: "Guida cibo per ospiti",
      text: "Casa Sole non fornisce cibo, spesa o servizio consegna. Questi sono luoghi suggeriti per aiutare gli ospiti a scegliere; contatta direttamente i ristoranti per prenotazioni, consegna, orari e pagamento.",
    },
    details: [
      {
        label: "Prima di andare",
        text: "Orari, menu, prezzi e disponibilità consegna dei ristoranti possono cambiare. Verifica direttamente prima di andare o ordinare.",
      },
      {
        label: "Trasporto",
        text: "Gli ospiti organizzano il proprio taxi o passaggio. Casa Sole può aiutare con indicazioni generali, ma conto del ristorante, costo consegna e trasporto sono pagati direttamente dall’ospite.",
      },
      {
        label: "Sicurezza alimentare",
        text: "Per pesce, cibo crudo o allergie, chiedi chiaramente al ristorante prima di ordinare. Le famiglie con bambini dovrebbero scegliere piatti semplici in caso di dubbi.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Pesce", "Old Market", "Famiglie"],
        description:
          "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 25-30 minuti in auto da Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione relativa a Al Sahaba Mosque può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "Americano", "Famiglie"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 12-18 minuti in auto da Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["Italiano", "Pizza", "Casual"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 15-25 minuti in auto da Sharm Hills, a seconda del traffico",
        visitTime: "1–2 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Pesce", "Steak", "Premium"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 12-18 minuti in auto da Sharm Hills",
        visitTime: "2–3 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Indiano", "Asiatico", "Premium"],
        description:
          "Questa opzione relativa a Naama Bay può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 18-22 minuti in auto da Sharm Hills",
        visitTime: "2–3 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Egiziano", "Grill", "Famiglie"],
        description:
          "Questa opzione relativa a Naama Bay può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 18-22 minuti in auto da Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Pesce", "Steak", "Naama Bay"],
        description:
          "Questa opzione relativa a Naama Bay può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 18-22 minuti in auto da Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["Italiano", "Pizza", "Naama Bay"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 18-22 minuti in auto da Sharm Hills",
        visitTime: "1–2 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["Internazionale", "Rooftop", "Vita notturna"],
        description:
          "Questa opzione relativa a Naama Bay può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 18-22 minuti in auto da Sharm Hills",
        visitTime: "1.5–3 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Libanese", "Mediorientale", "Naama Bay"],
        description:
          "Questa opzione relativa a Naama Bay può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 18-22 minuti in auto da Sharm Hills",
        visitTime: "1.5–2.5 ore",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Egiziano", "Grill", "Old Market"],
        description:
          "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 25-30 minuti in auto da Sharm Hills",
        visitTime: "1.5–2 ore",
        bestFor: "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione relativa a Old Market può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Panetteria",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Panetteria", "Caffè", "Colazione"],
        description:
          "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        distance: "Circa 20-30 minuti in auto da Sharm Hills",
        visitTime: "30–90 minuti",
        bestFor: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        tip: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Servizi vicino a te",
    stage: "Necessità quotidiane vicine",
    summary: "Market, farmacia, lavanderia, ATM, palestra, bazar e servizi utili nelle vicinanze.",
    guestNote: {
      title: "Paga direttamente i fornitori",
      text: "Casa Sole non fornisce spesa, cibo, lavanderia o servizio consegna. Contatta ogni fornitore direttamente e paga direttamente.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Spesa e necessità quotidiane. Telefono: +20 120 025 2250. Alcuni posti possono offrire consegna gratuita; chiedi direttamente durante la chiamata.",
        mapLabel: "Apri Safeway Market mappa",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Telefono: +20 107 095 3116.",
        mapLabel: "Apri pharmacy mappa",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Lavanderia e lavaggio a secco. Telefono: +20 128 732 4868.",
        mapLabel: "Apri City Dry Clean mappa",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "Un ATM è disponibile presso il supermercato.",
        mapLabel: "Apri ATM area mappa",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Negozio di succhi e frutta. Telefono: +20 100 938 3801.",
        mapLabel: "Apri Mango Juice mappa",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Palestra nelle vicinanze. Telefono: +20 104 041 2617.",
        mapLabel: "Apri Primal Fit Gym mappa",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Bazar e shopping. Telefono: +20 127 755 5334.",
        mapLabel: "Apri Delilah Bazar mappa",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Market e centro commerciale. Telefono: +20 100 048 9214.",
        mapLabel: "Apri Mango Market mappa",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Trasporti",
    stage: "Spostarsi",
    summary: "Transfer aeroportuali, taxi, trasporto pubblico e passaggi locali a pagamento.",
    guestNote: {
      title: "Pianifica prima di spostarti",
      text: "Il ritiro o accompagnamento aeroportuale può essere coordinato con Casa Sole per USD 15 con auto normale, fino a un massimo di 4 ospiti. Ospiti aggiuntivi, gruppi più grandi o bagagli extra richiedono coordinamento anticipato e possono comportare costi aggiuntivi. Organizza in anticipo con l’Ufficio prenotazioni.",
    },
    details: [
      {
        label: "Dall’aeroporto a Sharm Hills",
        text: "Il tragitto in auto da Sharm El Sheikh International Airport a Sharm Hills Resort dura circa 5 minuti.",
      },
      {
        label: "Taxi dall’aeroporto",
        text: "Il costo del taxi aeroportuale può variare ed essere più alto nelle ore tarde. Concorda sempre il prezzo prima di salire in auto.",
      },
      {
        label: "Transfer Casa Sole",
        text: "Casa Sole può aiutare a coordinare ritiro o accompagnamento aeroportuale per USD 15 con auto normale, fino a massimo 4 ospiti, previa coordinazione anticipata. Ospiti aggiuntivi, gruppi più grandi o bagagli extra richiedono coordinamento separato e possono comportare costi aggiuntivi.",
      },
      {
        label: "Trasporto in città",
        text: "Puoi coordinare il trasporto in città con Casa Sole a costo aggiuntivo.",
      },
      {
        label: "Taxi pubblico",
        text: "I taxi pubblici sono disponibili, ma le tariffe possono essere più alte.",
      },
      {
        label: "Trasporto pubblico",
        text: "Il trasporto pubblico è disponibile a distanza percorribile a piedi dal cancello del resort.",
      },
    ],
    actions: [
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "Domande frequenti",
    stage: "Domande comuni",
    summary: "Risposte rapide su Wi-Fi, pulizie, visitatori, checkout, carta spiaggia e supporto.",
    guestNote: {
      title: "Risposte rapide",
      text: "Queste sono le domande più comuni degli ospiti Casa Sole. Per qualsiasi urgenza durante il soggiorno, scrivi al nostro team.",
    },
    details: [
      {
        label: "Dove trovo il Wi-Fi?",
        text: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
      },
      {
        label: "Posso usare il Wi-Fi per lo streaming?",
        text: "Il Wi-Fi è adatto a navigazione e uso base. Lo streaming intenso non è garantito. Un router 5G con quota misurata può essere disponibile a costo extra tramite il nostro team.",
      },
      {
        label: "Le pulizie sono incluse?",
        text: "La pulizia giornaliera non è inclusa. La pulizia dell’appartamento durante il soggiorno è responsabilità dell’ospite. Le pulizie possono essere organizzate a costo aggiuntivo, in base alla disponibilità.",
      },
      {
        label: "Sono forniti rifornimenti?",
        text: "No. Rifornimenti e consumabili non sono forniti durante il soggiorno.",
      },
      {
        label: "Posso prolungare il soggiorno?",
        text: "Contatta l’Ufficio prenotazioni per estensioni, modifiche di prenotazione, check-in anticipato o checkout posticipato.",
      },
      {
        label: "Posso portare visitatori?",
        text: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
      },
      {
        label: "Cosa succede se perdo la chiave o la carta spiaggia?",
        text: "Questa opzione può essere utile durante il soggiorno. Controlla orari, prezzo e disponibilità prima di andare.",
      },
      {
        label: "Cosa succede se si interrompe acqua o elettricità?",
        text: "Può succedere raramente perché acqua ed elettricità sono servizi a pagamento nella zona. Scrivi al nostro team e il servizio di solito viene ripristinato in circa 5 minuti.",
      },
      {
        label: "Chi devo contattare?",
        text: "Contatta il nostro team per supporto durante il soggiorno. Contatta l’Ufficio prenotazioni per prenotazioni, estensioni, transfer aeroportuale o questioni Booking.com.",
      },
    ],
    actions: [
      {
        label: "Scrivi su WhatsApp al nostro team in loco",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "checkout",
    title: "Checkout",
    stage: "Lasciare l’appartamento",
    summary: "Orario di checkout, checklist appartamento, chiavi, carta spiaggia, ispezione e recensione.",
    guestNote: {
      title: "Checkout time",
      text: "L’orario ufficiale di checkout è massimo alle 12:00. Il checkout posticipato può essere disponibile in base alla disponibilità e deve essere coordinato in anticipo.",
    },
    details: [
      {
        label: "Prima di partire",
        text: "Rimuovi i rifiuti, lava i piatti usati o lascia la cucina pulita, spegni aria condizionata e luci, chiudi finestre e porte di balcone o terrazza e controlla di non lasciare oggetti personali.",
      },
      {
        label: "Chiavi e carta spiaggia",
        text: "Restituisci chiavi e carta di accesso alla spiaggia nello stesso luogo o alla stessa persona da cui li hai ricevuti, coordinandoti con il team Casa Sole.",
      },
      {
        label: "Messaggio prima di partire",
        text: "Invia un messaggio al nostro team prima di lasciare l’appartamento.",
      },
      {
        label: "Ispezione",
        text: "Il nostro team ispezionerà l’appartamento al checkout. Se qualcosa è danneggiato o rotto, segnalalo prima della partenza.",
      },
      {
        label: "Richiesta recensione",
        text: "Se hai apprezzato il soggiorno, apprezzeremmo molto una recensione sulla piattaforma con cui hai prenotato. Aiuta i futuri ospiti e supporta Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Scrivi su WhatsApp al nostro team in loco",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Partenza dall’aeroporto",
    stage: "Lasciare Sharm",
    summary: "Tempi per l’aeroporto, coordinamento accompagnamento, note bagagli e consigli finali di viaggio.",
    guestNote: {
      title: "Tempistica consigliata",
      text: "Per i voli, consigliamo di lasciare Sharm Hills 2,5-3 ore prima dell’orario del volo. È l’opzione più sicura per procedure aeroportuali, traffico e check-in.",
    },
    details: [
      {
        label: "Accompagnamento aeroporto",
        text: "Casa Sole può aiutare a coordinare il accompagnamento in aeroporto per USD 15 per un’auto normale, fino a massimo 4 ospiti, previa coordinazione anticipata. Ospiti aggiuntivi, gruppi più grandi o bagagli extra richiedono coordinamento separato e possono comportare costi aggiuntivi.",
      },
      {
        label: "Prima di partire",
        text: "Assicurati che il checkout sia completato, chiavi e carta spiaggia siano restituite e che non siano rimasti oggetti personali.",
      },
      {
        label: "Passaporti e bagagli",
        text: "Prima di lasciare l’appartamento, controlla passaporti, telefoni, caricabatterie, bagagli e documenti personali.",
      },
      {
        label: "Mappa aeroporto",
        text: "Usa il pulsante mappa aeroporto se guidi o usi un taxi.",
      },
      {
        label: "Stato voli live",
        text: "Controlla lo stato live delle partenze da Sharm El Sheikh International Airport prima di lasciare l’appartamento. Orari, ritardi e cancellazioni possono cambiare, quindi conferma sempre con la compagnia aerea.",
        linkLabel: "Partenze SSH live",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Apri mappa aeroporto",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Chiedi un passaggio",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Club ospiti di ritorno",
    stage: "Dopo il soggiorno",
    summary: "Vantaggi per ospiti di ritorno, registrazione della carta sconto, commenti, reclami e richiesta recensione.",
    guestNote: {
      title: "Registrati, commenta o invia un reclamo",
      text: "Compila il modulo Returning Guest Club per ricevere la tua carta sconto speciale. Puoi usare lo stesso modulo anche per inviare un commento o un reclamo dopo il soggiorno, così il nostro team potrà fare il follow-up correttamente.",
    },
    details: [
      {
        label: "Sconto ospiti di ritorno",
        text: "Gli ospiti di ritorno possono ricevere il 15% di sconto quando prenotano con Casa Sole.",
      },
      {
        label: "Opzioni di prenotazione",
        text: "Gli ospiti possono comunque prenotare tramite Booking.com o un’altra piattaforma se preferiscono. I vantaggi Returning Guest Club sono gestiti dal Reservation Office.",
      },
      {
        label: "Come aderire",
        text: "Apri il modulo di registrazione e inserisci nome, paese, numero WhatsApp, email e qualsiasi commento o reclamo se necessario. Il nostro team conserverà i dati per offerte agli ospiti di ritorno e farà follow-up dove necessario.",
      },
      {
        label: "Commenti o reclami",
        text: "Lo stesso modulo può essere usato anche per commenti o reclami. Scrivi il problema chiaramente così il nostro team potrà esaminarlo e rispondere sul canale corretto.",
      },
      {
        label: "Richiesta recensione",
        text: "Se hai apprezzato il soggiorno, lascia una recensione sulla piattaforma con cui hai prenotato. Aiuta i futuri ospiti e supporta Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Registrati, commenta o ricevi la carta sconto",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Scopri le nostre unità",
    stage: "Appartamenti Casa Sole",
    summary: "Apri gli annunci Casa Sole Sharm Hills, controlla foto, disponibilità e tariffe.",
    guestNote: {
      title: "Controlla gli annunci online",
      text: "Usa questa pagina per aprire gli annunci delle unità Casa Sole, vedere le foto, confrontare le dimensioni degli appartamenti e controllare disponibilità o tariffe live su Booking.com.",
    },
    details: [
      {
        label: "Unità con una camera: Casa Sole Sharm Hills Apt 1",
        text: "Adatto agli ospiti che cercano un appartamento Casa Sole con una camera a Sharm Hills.",
        linkLabel: "Apri su Booking.com",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "Unità con una camera: Casa Sole Sharm Hills Apt 2",
        text: "Adatto agli ospiti che cercano un appartamento Casa Sole con una camera a Sharm Hills.",
        linkLabel: "Apri su Booking.com",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "Unità con una camera: Casa Sole Sharm Hills Apt 3",
        text: "Adatto agli ospiti che cercano un appartamento Casa Sole con una camera a Sharm Hills.",
        linkLabel: "Apri su Booking.com",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "Unità con una camera: Casa Sole Sharm Hills Apt 4",
        text: "Adatto agli ospiti che cercano un appartamento Casa Sole con una camera a Sharm Hills.",
        linkLabel: "Apri su Booking.com",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "Unità con due camere: Casa Sole Sharm Hills Apt 5",
        text: "Adatto a famiglie o gruppi che preferiscono un appartamento Casa Sole con due camere a Sharm Hills.",
        linkLabel: "Apri su Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Unità con tre camere: Casa Sole Sharm Hills Apt 6",
        text: "Adatto a famiglie più grandi o gruppi che preferiscono un appartamento Casa Sole con tre camere a Sharm Hills.",
        linkLabel: "Apri su Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Contattaci",
    stage: "Supporto",
    summary: "Mr. Magdy per il supporto durante il soggiorno, Reservation Office per le questioni di prenotazione.",
    guestNote: {
      title: "Chi contattare",
      text: "Contatta il team corretto così possiamo aiutarti più rapidamente.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "Per check-in, supporto durante il soggiorno, aiuto locale, problemi dell’appartamento, manutenzione, chiavi, carta spiaggia, richieste router 5G e supporto urgente dell’appartamento. Telefono / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "Ufficio prenotazioni",
        text: "Per modifiche di prenotazione, estensioni, check-in anticipato, checkout posticipato, coordinamento trasferimento aeroporto, Returning Guest Club, Booking.com e altri temi di piattaforma. Telefono / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "Alla sicurezza",
        text: "Quando arrivi a Sharm Hills, dì che hai una prenotazione con Mr. Magdy, poi chiedi alla sicurezza la sala reception.",
      },
    ],
    actions: [
      {
        label: "Scrivi su WhatsApp al nostro team in loco",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Ufficio prenotazioni",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
