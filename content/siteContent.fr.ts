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
  privateInfoTitle: "Enregistrer ce guide",
  privateInfoText:
    "Ajoutez Casa Sole à l’écran d’accueil de votre téléphone pour y accéder rapidement pendant votre séjour, sans rechercher de nouveau le lien.",

  quickActions: [
    {
      icon: "🛬",
      label: "Arrivée",
      detail: "Aéroport, taxi et accès au resort",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Check-in",
      detail: "Réception, clés et enregistrement",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Explorer",
      detail: "Activités, restauration et transport",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Assistance séjour et réservations",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Appartement géré, pas un service hôtelier",
      text: "Le ménage quotidien, les recharges et les consommables ne sont pas inclus sauf accord séparé.",
    },
    {
      title: "Conçu pour Sharm Hills",
      text: "Casa Sole est notre marque d’appartements de vacances gérés. Sharm Hills est le resort où se trouve votre appartement ; Casa Sole assure l’assistance de séjour, tandis que Sharm Hills fournit le cadre du resort et les installations communes.",
    },
    {
      title: "Les détails privés restent hors ligne",
      text: "Les informations Wi-Fi et les détails propres à l’appartement sont imprimés dans l’appartement, pas publiés en ligne.",
    },
  ],

  checkInPreview: [
    "Rendez-vous à Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
    "À l’entrée, demandez à la sécurité le hall de réception, puis demandez notre équipe à la réception.",
    "Notre équipe sur place vous aide avec les clés, la carte d’accès à la plage, les informations Wi-Fi et l’enregistrement.",
  ],

  supportPreview:
    "Pour l’assistance pendant le séjour, contactez notre équipe sur place. Pour prolongations, modifications de réservation ou transferts, contactez le Bureau des réservations.",

  contactPreview:
    "Notre équipe sur place vous assiste pendant le séjour. Le Bureau des réservations gère les prolongations, Booking.com et les autres plateformes.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Arrivée",
    stage: "Avant d’arriver au resort",
    summary: "Emplacement de Sharm Hills, conseils taxi aéroport et étapes d’arrivée à l’entrée.",
    guestNote: {
      title: "Bienvenue chez Casa Sole",
      text: "Nous avons hâte de vous accueillir à Casa Sole Sharm Hills. Utilisez cette page avant de voyager ou à votre arrivée à Sharm El Sheikh International Airport.",
    },
    details: [
      {
        label: "Emplacement du resort",
        text: "Casa Sole se trouve à l’intérieur de Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
      },
      {
        label: "Depuis l’aéroport",
        text: "Sharm El Sheikh International Airport se trouve à environ 5 minutes en voiture de Sharm Hills Resort.",
      },
      {
        label: "Taxi de l’aéroport",
        text: "Les taxis de l’aéroport peuvent coûter plus cher, surtout tard le soir. Convenez du prix avec le chauffeur avant de monter.",
      },
      {
        label: "À dire au chauffeur",
        text: "Dites clairement au chauffeur : Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "À l’entrée principale",
        text: "Dites à la sécurité que vous avez une réservation avec Mr. Magdy. Demandez qu’on vous indique le hall de réception.",
      },
      {
        label: "Hall de réception",
        text: "Entrez dans le resort, allez au hall de réception et demandez Mr. Magdy au comptoir.",
      },
      {
        label: "Transfert aéroport",
        text: "Casa Sole peut aider à coordonner un prise en charge ou un dépose à l’aéroport pour USD 15 avec une voiture normale, jusqu’à 4 personnes maximum. Les personnes supplémentaires, les grands groupes ou les bagages supplémentaires doivent être coordonnés à l’avance et peuvent entraîner des frais supplémentaires. Merci de l’organiser à l’avance avec le Bureau des réservations.",
      },
    ],
    actions: [
      {
        label: "Ouvrir la carte du resort",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "Contacter notre équipe sur place par WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "check-in",
    title: "Check-in",
    stage: "Entrée et installation",
    summary: "Heure de check-in, assistance du représentant, clés, carte plage et enregistrement.",
    guestNote: {
      title: "Heure de check-in",
      text: "Le check-in est disponible de 14h00 à 23h00. Toute arrivée après 23h00 doit être coordonnée avec Casa Sole avant l’arrivée.",
    },
    details: [
      {
        label: "Check-in anticipé",
        text: "Le check-in anticipé peut être possible selon disponibilité. Il doit être coordonné à l’avance, pas sur place.",
      },
      {
        label: "Rencontrer notre équipe",
        text: "Une fois dans le hall de réception, demandez notre équipe. Elle vous aidera pour le check-in.",
      },
      {
        label: "Ce que notre équipe fournit",
        text: "Notre équipe fournira les clés de l’appartement, la carte d’accès à la plage et les informations Wi-Fi.",
      },
      {
        label: "Enregistrement des passeports",
        text: "Conformément aux exigences de sécurité locales, une copie du passeport original est requise pour chaque invité. Les passeports peuvent être collectés brièvement pendant environ 10 minutes puis rendus immédiatement.",
      },
      {
        label: "Check-in autonome de secours",
        text: "Si notre représentant n’est pas joignable immédiatement ou si le check-in est retardé, envoyez un message à Casa Sole et nous activerons le processus alternatif de self check-in.",
      },
    ],
    actions: [
      {
        label: "Contacter notre équipe sur place par WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Guide de l’appartement",
    stage: "Dans l’appartement",
    summary: "Wi-Fi, climatisation, articles de cuisine, serviettes, appareils, machine à laver, déchets et services.",
    guestNote: {
      title: "Important : appartement géré",
      text: "Casa Sole est un appartement de vacances géré, pas un service hôtelier. Le ménage quotidien, les recharges, le détergent et le remplacement des consommables ne sont pas inclus pendant le séjour sauf arrangement séparé avec frais supplémentaires.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "Les détails Wi-Fi sont imprimés derrière la porte principale de l’appartement. La connexion convient à la navigation et à un usage basique, mais n’est pas garantie pour le streaming intensif.",
      },
      {
        label: "Option routeur 5G",
        text: "Si vous avez besoin d’un internet plus puissant, Casa Sole peut fournir un routeur 5G avec quota mesuré moyennant supplément, selon disponibilité. Demandez à notre équipe.",
      },
      {
        label: "Utilisation de la climatisation",
        text: "Veuillez fermer les portes du balcon ou de la terrasse lorsque la climatisation est allumée, et éteindre la climatisation et les lumières en quittant l’appartement.",
      },
      {
        label: "Serviettes",
        text: "L’appartement comprend des serviettes de douche, des serviettes de visage et des serviettes de plage. Les serviettes de salle de bain sont réservées à la salle de bain. Ne les utilisez pas pour les pieds, les sols, la plage ou l’extérieur.",
      },
      {
        label: "Cuisine",
        text: "La cuisine comprend assiettes, tasses, bouilloire, micro-ondes, plaque de cuisson et réfrigérateur. Il n’y a pas de four. Merci de garder la cuisine propre pendant le séjour.",
      },
      {
        label: "Équipements de l’appartement",
        text: "L’appartement comprend un fer à repasser, sèche-cheveux, étendoir, bouilloire, serviettes de plage, serviettes de visage et serviettes de douche.",
      },
      {
        label: "Machine à laver",
        text: "Une machine à laver est disponible dans l’appartement. La lessive n’est pas fournie.",
      },
      {
        label: "Déchets",
        text: "La poubelle est sous l’évier. Lorsqu’elle est pleine, veuillez déposer les déchets dans le bac principal le plus proche dans l’espace paysager.",
      },
      {
        label: "Coupure d’eau ou d’électricité",
        text: "L’eau et l’électricité sont des services facturables dans la zone. Dans de rares cas, une courte coupure peut arriver. C’est normal. Envoyez un message à notre équipe et le service est généralement rétabli en environ 5 minutes.",
      },
      {
        label: "Problème dans l’appartement",
        text: "Pour la maintenance ou tout problème dans l’appartement, contactez notre équipe.",
      },
    ],
    actions: [
      {
        label: "Contacter notre équipe sur place par WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "Règles de la maison",
    stage: "Pendant le séjour",
    summary: "Heures calmes, visiteurs, tabac, animaux, dégâts et soin de l’appartement.",
    guestNote: {
      title: "Merci de respecter l’appartement",
      text: "L’appartement est géré de manière privée. Merci d’en prendre soin et de respecter les voisins, les clients du resort et les espaces partagés.",
    },
    details: [
      {
        label: "Heures calmes",
        text: "Les heures calmes sont de 22h00 à 8h00. Merci de limiter le bruit pendant cette période.",
      },
      {
        label: "Visiteurs",
        text: "Les visiteurs sont autorisés uniquement après enregistrement à l’entrée/sécurité du resort. Les visiteurs non enregistrés ne doivent pas entrer dans le resort ou l’appartement.",
      },
      {
        label: "Tabac",
        text: "Il est interdit de fumer dans l’appartement. Il est permis de fumer uniquement à l’extérieur, sur le balcon ou la terrasse.",
      },
      {
        label: "Animaux domestiques",
        text: "Les animaux doivent être coordonnés avec le Bureau des réservations avant l’arrivée. Les animaux ne sont pas autorisés dans la piscine et doivent rester en laisse pendant le séjour.",
      },
      {
        label: "Enfants",
        text: "Les enfants doivent être surveillés à tout moment. Les parents ou tuteurs sont entièrement responsables de leur sécurité.",
      },
      {
        label: "Mobilier",
        text: "Veuillez ne pas sortir le mobilier intérieur sur le balcon, la terrasse, le jardin, la piscine ou la plage.",
      },
      {
        label: "Dégât ou casse",
        text: "Les accidents peuvent arriver. Merci de signaler immédiatement tout dégât ou casse à notre équipe.",
      },
      {
        label: "Clé ou carte perdue",
        text: "Le coût de remplacement d’une clé perdue ou d’une carte plage perdue est de USD 100, payé directement à notre équipe.",
      },
      {
        label: "Note moustiques pour le rez-de-chaussée",
        text: "Si vous séjournez au rez-de-chaussée, gardez la porte moustiquaire fermée pour éviter les moustiques.",
      },
    ],
    actions: [
      {
        label: "Contacter notre équipe sur place par WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Guide du resort",
    stage: "Profiter de Sharm Hills",
    summary: "Piscines, parking, installations du resort, livraison du supermarché et espaces communs.",
    guestNote: {
      title: "Conseils pour Sharm Hills",
      text: "Cette page présente les informations communes du resort pour les clients Casa Sole séjournant à Sharm Hills.",
    },
    details: [
      {
        label: "Piscine",
        text: "La piscine du resort est ouverte du lever au coucher du soleil. Les enfants doivent être surveillés à tout moment.",
      },
      {
        label: "Piscine enfants et toboggans aquatiques",
        text: "Sharm Hills dispose d’une piscine pour enfants et d’un petit aqua park pour enfants avec toboggans. Les enfants doivent être surveillés à tout moment par un parent ou tuteur ; Casa Sole et le resort ne remplacent pas la supervision parentale.",
      },
      {
        label: "Parking",
        text: "Le parking est gratuit à l’intérieur de Sharm Hills.",
      },
      {
        label: "Espaces communs",
        text: "Merci de respecter l’espace personnel et la liberté des autres clients dans toutes les zones communes du resort.",
      },
      {
        label: "Restaurant et café",
        text: "Il y a un restaurant/café à l’intérieur de Sharm Hills.",
      },
      {
        label: "Livraison du supermarché",
        text: "Il y a un supermarché/boutique avec livraison. Lors de la commande, indiquez le numéro d’appartement et le numéro de bâtiment figurant sur les informations imprimées derrière la porte principale.",
      },
      {
        label: "Animaux dans le resort",
        text: "Les animaux doivent rester en laisse pendant le séjour et ne sont pas autorisés dans la piscine.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Guide de la plage",
    stage: "Journées plage",
    summary: "Accès gratuit à Sinbad Beach, règles de carte, installations, transport et paiements sur la plage.",
    guestNote: {
      title: "Accès gratuit à la plage",
      text: "Les clients Casa Sole bénéficient d’un accès gratuit à Sinbad Beach avec la carte plage fournie pour l’appartement. Apportez la carte et montrez-la à l’arrivée.",
    },
    details: [
      {
        label: "Se rendre à la plage",
        text: "Sinbad Beach est à environ 20 minutes à pied de Sharm Hills, ou environ 5 minutes en voiture. Vous pouvez utiliser la carte ou nous demander d’aider à coordonner un trajet payant.",
      },
      {
        label: "Accès plage",
        text: "L’accès à la plage est gratuit pour les invités couverts par la carte plage de votre appartement. À l’arrivée, montrez la carte et dites que vous êtes résident de Sharm Hills.",
      },
      {
        label: "Installations de plage",
        text: "Sinbad Beach dispose de toilettes, café, douche, centre de plongée, marina de snorkeling et restaurant.",
      },
      {
        label: "Couverture de la carte",
        text: "La couverture gratuite de plage dépend de la taille de l’appartement. Les unités d’une chambre incluent généralement une carte pour 2 invités. Les unités de deux chambres incluent généralement deux cartes pour 4 invités.",
      },
      {
        label: "Transats et serviettes",
        text: "Les transats sont gratuits pour les invités couverts. Les serviettes de plage sont fournies dans l’appartement. Tout article supplémentaire ou invité supplémentaire doit être géré par le client.",
      },
      {
        label: "Nourriture et boissons",
        text: "Toute commande au restaurant de plage est payée directement par le client sur place.",
      },
      {
        label: "Comment s’y rendre",
        text: "Vous pouvez marcher jusqu’à la plage avec la carte ou nous demander un dépose et prise en charge payants.",
      },
      {
        label: "Carte perdue",
        text: "Le coût de remplacement d’une carte plage perdue est de USD 100, payé directement à notre équipe.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Photo de Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Photo de Sinbad Beach",
      },
    ],
    actions: [
      {
        label: "Ouvrir la carte de Sinbad Beach",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Demander un trajet",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Explorer Sharm",
    stage: "Activités et attractions",
    summary: "Les meilleures choses à faire à Sharm El Sheikh, des sorties en mer à la vie nocturne.",
    guestNote: {
      title: "Explorer Sharm avec Casa Sole",
      text: "Sharm El Sheikh est connue pour le snorkeling, la plongée, les clubs de plage, les excursions dans le désert, Old Market, SOHO Square et une vie nocturne détendue. Casa Sole n’organise pas de tours directement, mais nous pouvons vous aider à comprendre les options et à organiser le transport si nécessaire.",
    },
    details: [
      {
        label: "Comment utiliser ce guide",
        text: "Utilisez les cartes ci-dessous pour comparer distance, durée prévue et adéquation avant de choisir où aller.",
      },
      {
        label: "Réserver des activités",
        text: "Casa Sole n’organise pas de tours directement. Pour les sorties ou activités, confirmez clairement l’heure de prise en charge, ce qui est inclus et le prix avant de réserver.",
      },
      {
        label: "Besoin d’aide pour choisir ?",
        text: "Si vous n’êtes pas sûr de ce qui convient à votre groupe, demandez-nous et nous vous aiderons à décider.",
      },
      {
        label: "Conseil nourriture et eau",
        text: "Ne buvez pas l’eau du robinet. Pour les fruits ou aliments rincés à l’eau du robinet, utilisez si possible de l’eau en bouteille pour un rinçage supplémentaire.",
      },
      {
        label: "Protection solaire",
        text: "Le soleil de la mer Rouge est fort. Apportez crème solaire, lunettes de soleil et chapeau, surtout pour les journées plage, bateau et désert.",
      },
      {
        label: "Pourboires et prix",
        text: "Les pourboires sont courants dans les zones touristiques. Dans les marchés et boutiques de souvenirs, n’hésitez pas à négocier poliment ; le marchandage fait partie de l’expérience.",
      },
      {
        label: "Visites désert et mosquée",
        text: "Portez un pantalon long pour monter à dos de chameau. Les femmes peuvent apporter un foulard pour couvrir les cheveux dans le désert et lors des visites de mosquées.",
      },
      {
        label: "Plans de plongée",
        text: "Planifiez la plongée à l’avance, surtout si vous avez besoin d’un centre agréé, d’équipement, d’instruction débutant ou d’exigences de certification.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Soirée", "Famille", "Restaurants"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 8-10 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–3 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Culture", "Shopping", "Soirée"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 25-30 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–3 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option concernant Al Sahaba Mosque peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Culture", "Monument", "Photos"],
        description:
          "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 25-30 minutes en voiture depuis Sharm Hills",
        visitTime: "30–60 minutes",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Vie nocturne", "Cafés", "Promenade"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 18-22 minutes en voiture depuis Sharm Hills",
        visitTime: "2–4 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Vie nocturne", "Café", "Coucher de soleil"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 30-35 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–3 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Mer et plage", "Nature", "Excursion journée"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 45-60 minutes en voiture depuis Sharm Hills",
        visitTime: "6–8 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Mer et plage", "Sortie bateau", "Snorkeling"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Le point de prise en charge varie selon l’opérateur",
        visitTime: "6–8 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Mer et plage", "Aventure", "Plongée"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Le prise en charge varie selon le centre de plongée ou la plage",
        visitTime: "3–7 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Aventure", "Désert", "Famille"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Le prise en charge varie selon l’opérateur",
        visitTime: "3–5 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Culture", "Intérieur", "Famille"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 15-20 minutes en voiture depuis Sharm Hills",
        visitTime: "1–2 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Culture", "Monument", "Calme"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 20-25 minutes en voiture depuis Sharm Hills",
        visitTime: "30–60 minutes",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Mer et plage", "Snorkeling", "Beach clubs"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 10-30 minutes en voiture selon l’endroit",
        visitTime: "3–5 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Excursion journée", "Aventure", "Mer et plage"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 1.5-2 heures en voiture depuis Sharm Hills",
        visitTime: "Journée complète",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Excursion journée", "Culture", "Aventure"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 3+ heures en voiture depuis Sharm Hills",
        visitTime: "Avec nuit ou journée complète",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Soirée", "Famille", "Photos"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 15-20 minutes en voiture depuis Sharm Hills",
        visitTime: "1–2 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Mer et plage", "Snorkeling", "Plongée"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 45-60 minutes en voiture, généralement visité en bateau ou avec une excursion organisée à Ras Mohammed",
        visitTime: "Journée complète avec bateau ou opérateur de plongée",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Ouvrir la carte de Sharm",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Demander à Casa Sole",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    stage: "Manger dehors",
    summary: "Sélections nourriture Casa Sole autour de Sharm, des fruits de mer et burgers à l’italien, grills égyptiens et boulangeries.",
    guestNote: {
      title: "Guide nourriture des clients",
      text: "Casa Sole ne fournit pas nourriture, courses ou service de livraison. Ces lieux sont suggérés pour aider les clients à choisir ; contactez les restaurants directement pour réservations, livraison, horaires et paiement.",
    },
    details: [
      {
        label: "Avant de partir",
        text: "Les horaires, menus, prix et disponibilités de livraison peuvent changer. Vérifiez directement avant de vous déplacer ou commander.",
      },
      {
        label: "Transport",
        text: "Les clients organisent leur propre taxi ou trajet. Casa Sole peut aider avec des conseils généraux, mais l’addition du restaurant, les frais de livraison et le transport sont payés directement par le client.",
      },
      {
        label: "Sécurité alimentaire",
        text: "Pour les fruits de mer, aliments crus ou allergies, demandez clairement au restaurant avant de commander. Les familles avec enfants devraient choisir des plats simples en cas de doute.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Fruits de mer", "Old Market", "Famille"],
        description:
          "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 25-30 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–2.5 heures",
        bestFor: "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option concernant Al Sahaba Mosque peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "Américain", "Famille"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 12-18 minutes en voiture depuis Sharm Hills",
        visitTime: "1–2 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["Italien", "Pizza", "Décontracté"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 15-25 minutes en voiture depuis Sharm Hills, selon le trafic",
        visitTime: "1–2 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Fruits de mer", "Steak", "Premium"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 12-18 minutes en voiture depuis Sharm Hills",
        visitTime: "2–3 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Indien", "Asiatique", "Premium"],
        description:
          "Cette option concernant Naama Bay peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 18-22 minutes en voiture depuis Sharm Hills",
        visitTime: "2–3 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Égyptien", "Grill", "Famille"],
        description:
          "Cette option concernant Naama Bay peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 18-22 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–2.5 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Fruits de mer", "Steak", "Naama Bay"],
        description:
          "Cette option concernant Naama Bay peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 18-22 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–2.5 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["Italien", "Pizza", "Naama Bay"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 18-22 minutes en voiture depuis Sharm Hills",
        visitTime: "1–2 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["International", "Rooftop", "Vie nocturne"],
        description:
          "Cette option concernant Naama Bay peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 18-22 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–3 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Libanais", "Moyen-Orient", "Naama Bay"],
        description:
          "Cette option concernant Naama Bay peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 18-22 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–2.5 heures",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Égyptien", "Grill", "Old Market"],
        description:
          "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 25-30 minutes en voiture depuis Sharm Hills",
        visitTime: "1.5–2 heures",
        bestFor: "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option concernant Old Market peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Boulangerie", "Café", "Petit-déjeuner"],
        description:
          "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        distance: "Environ 20-30 minutes en voiture depuis Sharm Hills",
        visitTime: "30–90 minutes",
        bestFor: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        tip: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Services autour de vous",
    stage: "Besoins quotidiens à proximité",
    summary: "Marché, pharmacie, blanchisserie, ATM, salle de sport, bazar et services utiles à proximité.",
    guestNote: {
      title: "Payer les prestataires directement",
      text: "Casa Sole ne fournit pas courses, nourriture, blanchisserie ou service de livraison. Contactez chaque prestataire directement et payez-le directement.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Courses et besoins quotidiens. Téléphone : +20 120 025 2250. Certains lieux peuvent offrir une livraison gratuite ; demandez directement lors de l’appel.",
        mapLabel: "Ouvrir Safeway Market carte",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Téléphone : +20 107 095 3116.",
        mapLabel: "Ouvrir pharmacy carte",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Blanchisserie et nettoyage à sec. Téléphone : +20 128 732 4868.",
        mapLabel: "Ouvrir City Dry Clean carte",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "Un ATM est disponible au supermarché.",
        mapLabel: "Ouvrir ATM area carte",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Boutique de jus et fruits. Téléphone : +20 100 938 3801.",
        mapLabel: "Ouvrir Mango Juice carte",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Salle de sport à proximité. Téléphone : +20 104 041 2617.",
        mapLabel: "Ouvrir Primal Fit Gym carte",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Bazar et shopping. Téléphone : +20 127 755 5334.",
        mapLabel: "Ouvrir Delilah Bazar carte",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Marché et centre commercial. Téléphone : +20 100 048 9214.",
        mapLabel: "Ouvrir Mango Market carte",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transport",
    stage: "Se déplacer",
    summary: "Transfert aéroport, taxis, transport public et trajets locaux payants.",
    guestNote: {
      title: "Planifier avant de partir",
      text: "Le prise en charge ou dépose aéroport peut être coordonné avec Casa Sole pour USD 15 avec une voiture normale, jusqu’à 4 invités maximum. Les invités supplémentaires, grands groupes ou bagages extra nécessitent une coordination préalable et peuvent entraîner des frais supplémentaires. Organisez cela à l’avance avec le Bureau des réservations.",
    },
    details: [
      {
        label: "De l’aéroport à Sharm Hills",
        text: "Le trajet de Sharm El Sheikh International Airport à Sharm Hills Resort dure environ 5 minutes en voiture.",
      },
      {
        label: "Taxi de l’aéroport",
        text: "Le prix du taxi aéroport peut varier et être plus élevé tard le soir. Convenez toujours du prix avant de monter.",
      },
      {
        label: "Transfert Casa Sole",
        text: "Casa Sole peut aider à coordonner prise en charge ou dépose aéroport pour USD 15 avec voiture normale, jusqu’à 4 invités maximum, sous réserve de coordination préalable. Les invités supplémentaires, grands groupes ou bagages extra nécessitent une coordination séparée et peuvent entraîner des frais supplémentaires.",
      },
      {
        label: "Transport en ville",
        text: "Vous pouvez coordonner le transport en ville avec Casa Sole moyennant des frais supplémentaires.",
      },
      {
        label: "Taxi public",
        text: "Des taxis publics sont disponibles, mais les tarifs peuvent être plus élevés.",
      },
      {
        label: "Transport public",
        text: "Le transport public est disponible à distance de marche de l’entrée du resort.",
      },
    ],
    actions: [
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    stage: "Questions fréquentes",
    summary: "Réponses rapides pour Wi-Fi, ménage, visiteurs, checkout, carte plage et assistance.",
    guestNote: {
      title: "Réponses rapides",
      text: "Voici les questions les plus fréquentes des clients Casa Sole. Pour toute urgence pendant le séjour, envoyez un message à notre équipe.",
    },
    details: [
      {
        label: "Où est le Wi-Fi ?",
        text: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
      },
      {
        label: "Puis-je utiliser le Wi-Fi pour le streaming ?",
        text: "Le Wi-Fi convient à la navigation et à un usage basique. Le streaming intensif n’est pas garanti. Un routeur 5G avec quota mesuré peut être disponible moyennant supplément via notre équipe.",
      },
      {
        label: "Le ménage est-il inclus ?",
        text: "Le ménage quotidien n’est pas inclus. La propreté de l’appartement pendant le séjour relève de la responsabilité du client. Le ménage peut être organisé moyennant supplément, selon disponibilité.",
      },
      {
        label: "Les recharges sont-elles fournies ?",
        text: "Non. Les recharges et consommables ne sont pas fournis pendant le séjour.",
      },
      {
        label: "Puis-je prolonger mon séjour ?",
        text: "Veuillez contacter le Bureau des réservations pour prolongations, modifications de réservation, check-in anticipé ou checkout tardif.",
      },
      {
        label: "Puis-je recevoir des visiteurs ?",
        text: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
      },
      {
        label: "Que se passe-t-il si je perds la clé ou la carte plage ?",
        text: "Cette option peut être utile pendant votre séjour. Vérifiez les horaires, le prix et la disponibilité avant d’y aller.",
      },
      {
        label: "Que faire en cas de coupure d’eau ou d’électricité ?",
        text: "Cela peut arriver rarement car l’eau et l’électricité sont des services facturables dans la zone. Envoyez un message à notre équipe et le service est généralement rétabli en environ 5 minutes.",
      },
      {
        label: "Qui dois-je contacter ?",
        text: "Contactez notre équipe pour l’assistance pendant le séjour. Contactez le Bureau des réservations pour réservation, prolongation, transfert aéroport ou questions Booking.com.",
      },
    ],
    actions: [
      {
        label: "Contacter notre équipe sur place par WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "checkout",
    title: "Checkout",
    stage: "Quitter l’appartement",
    summary: "Heure de checkout, checklist appartement, clés, carte plage, inspection et avis.",
    guestNote: {
      title: "Checkout time",
      text: "L’heure officielle de checkout est 12h00 maximum. Un checkout tardif peut être possible selon disponibilité et doit être coordonné à l’avance.",
    },
    details: [
      {
        label: "Avant de partir",
        text: "Veuillez retirer les déchets, laver la vaisselle utilisée ou laisser la cuisine propre, éteindre la climatisation et les lumières, fermer fenêtres et portes du balcon ou de la terrasse, et vérifier qu’aucun objet personnel n’est oublié.",
      },
      {
        label: "Clés et carte plage",
        text: "Rendez les clés et la carte d’accès plage au même endroit ou à la même personne qui vous les a remises, en coordination avec l’équipe Casa Sole.",
      },
      {
        label: "Message avant de partir",
        text: "Veuillez envoyer un message à notre équipe avant de quitter l’appartement.",
      },
      {
        label: "Inspection",
        text: "Notre équipe inspectera l’appartement au checkout. Si quelque chose est endommagé ou cassé, veuillez le signaler avant le départ.",
      },
      {
        label: "Demande d’avis",
        text: "Si vous avez apprécié votre séjour, nous apprécierions vraiment votre avis sur la plateforme utilisée pour réserver. Cela aide les futurs clients et soutient Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Contacter notre équipe sur place par WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Départ aéroport",
    stage: "Quitter Sharm",
    summary: "Timing aéroport, coordination dépose, notes bagages et derniers conseils de voyage.",
    guestNote: {
      title: "Timing recommandé",
      text: "Pour les vols, nous recommandons de quitter Sharm Hills 2,5 à 3 heures avant l’heure du vol. C’est l’option la plus sûre pour les procédures aéroport, le trafic et le check-in.",
    },
    details: [
      {
        label: "Dépose aéroport",
        text: "Casa Sole peut aider à coordonner le dépose à l’aéroport pour USD 15 avec une voiture normale, jusqu’à 4 clients maximum, sous réserve de coordination à l’avance. Les clients supplémentaires, grands groupes ou bagages extra nécessitent une coordination séparée et peuvent entraîner des frais supplémentaires.",
      },
      {
        label: "Avant de partir",
        text: "Assurez-vous que le checkout est terminé, que les clés et la carte plage sont rendues, et qu’aucun objet personnel n’est oublié.",
      },
      {
        label: "Passeports et bagages",
        text: "Avant de quitter l’appartement, vérifiez passeports, téléphones, chargeurs, bagages et documents personnels.",
      },
      {
        label: "Carte aéroport",
        text: "Utilisez le bouton carte aéroport si vous conduisez ou prenez un taxi.",
      },
      {
        label: "Statut de vol en direct",
        text: "Vérifiez le statut live de votre départ à Sharm El Sheikh International Airport avant de quitter l’appartement. Les horaires, retards et annulations peuvent changer ; confirmez toujours avec votre compagnie aérienne.",
        linkLabel: "Départs SSH en direct",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Ouvrir la carte aéroport",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Demander un trajet",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Club clients fidèles",
    stage: "Après le séjour",
    summary: "Avantages clients fidèles, inscription à la carte de réduction, commentaires, réclamations et demande d’avis.",
    guestNote: {
      title: "S’inscrire, commenter ou réclamer",
      text: "Remplissez le formulaire Returning Guest Club pour recevoir votre carte de réduction spéciale. Vous pouvez aussi utiliser le formulaire pour envoyer un commentaire ou une réclamation après votre séjour afin que notre équipe fasse le suivi correctement.",
    },
    details: [
      {
        label: "Réduction client fidèle",
        text: "Les clients fidèles peuvent recevoir 15% de réduction en réservant avec Casa Sole.",
      },
      {
        label: "Options de réservation",
        text: "Les clients peuvent toujours réserver via Booking.com ou une autre plateforme s’ils le préfèrent. Les avantages Returning Guest Club sont gérés par le Reservation Office.",
      },
      {
        label: "Comment s’inscrire",
        text: "Ouvrez le formulaire d’inscription, ajoutez votre nom, pays, numéro WhatsApp, email et tout commentaire ou réclamation si nécessaire. Notre équipe conservera vos coordonnées pour les offres clients fidèles et fera le suivi si nécessaire.",
      },
      {
        label: "Commentaires ou réclamations",
        text: "Le même formulaire peut aussi être utilisé pour les commentaires ou réclamations. Écrivez clairement le problème afin que notre équipe puisse l’examiner et répondre par le bon canal.",
      },
      {
        label: "Demande d’avis",
        text: "Si vous avez apprécié votre séjour, veuillez laisser un avis sur la plateforme utilisée pour réserver. Cela aide les futurs clients et soutient Casa Sole.",
      },
    ],
    actions: [
      {
        label: "S’inscrire, commenter ou obtenir la carte de réduction",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Découvrir nos unités",
    stage: "Appartements Casa Sole",
    summary: "Ouvrez les annonces Casa Sole Sharm Hills, vérifiez les photos, disponibilités et tarifs.",
    guestNote: {
      title: "Vérifier les annonces en ligne",
      text: "Utilisez cette page pour ouvrir les annonces Casa Sole, voir les photos, comparer la taille des appartements et vérifier les disponibilités ou tarifs en direct sur Booking.com.",
    },
    details: [
      {
        label: "Unité une chambre : Casa Sole Sharm Hills Apt 1",
        text: "Convient aux clients recherchant un appartement Casa Sole d’une chambre à Sharm Hills.",
        linkLabel: "Ouvrir sur Booking.com",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "Unité une chambre : Casa Sole Sharm Hills Apt 2",
        text: "Convient aux clients recherchant un appartement Casa Sole d’une chambre à Sharm Hills.",
        linkLabel: "Ouvrir sur Booking.com",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "Unité une chambre : Casa Sole Sharm Hills Apt 3",
        text: "Convient aux clients recherchant un appartement Casa Sole d’une chambre à Sharm Hills.",
        linkLabel: "Ouvrir sur Booking.com",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "Unité une chambre : Casa Sole Sharm Hills Apt 4",
        text: "Convient aux clients recherchant un appartement Casa Sole d’une chambre à Sharm Hills.",
        linkLabel: "Ouvrir sur Booking.com",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "Unité deux chambres : Casa Sole Sharm Hills Apt 5",
        text: "Convient aux familles ou groupes préférant un appartement Casa Sole de deux chambres à Sharm Hills.",
        linkLabel: "Ouvrir sur Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Unité trois chambres : Casa Sole Sharm Hills Apt 6",
        text: "Convient aux grandes familles ou groupes préférant un appartement Casa Sole de trois chambres à Sharm Hills.",
        linkLabel: "Ouvrir sur Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Contactez-nous",
    stage: "Assistance",
    summary: "Mr. Magdy pour l’assistance pendant le séjour, Reservation Office pour les questions de réservation.",
    guestNote: {
      title: "Qui contacter",
      text: "Veuillez contacter la bonne équipe afin que nous puissions vous aider plus vite.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "Pour le check-in, l’assistance pendant le séjour, l’aide locale, les problèmes d’appartement, la maintenance, les clés, la carte plage, les demandes de routeur 5G et l’assistance urgente. Téléphone / WhatsApp : +20 100 130 8835.",
      },
      {
        label: "Bureau des réservations",
        text: "Pour les modifications de réservation, prolongations, check-in anticipé, checkout tardif, coordination de transfert aéroport, Returning Guest Club, Booking.com et autres plateformes. Téléphone / WhatsApp : +20 111 416 1141.",
      },
      {
        label: "À la sécurité",
        text: "À votre arrivée à Sharm Hills, dites que vous avez une réservation avec Mr. Magdy, puis demandez à la sécurité la hall de réception.",
      },
    ],
    actions: [
      {
        label: "Contacter notre équipe sur place par WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Bureau des réservations",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
