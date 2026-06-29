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
  privateInfoTitle: "Save this guide",
  privateInfoText:
    "Add Casa Sole to your phone home screen for quick access during your stay, without searching for the link again.",

  quickActions: [
    {
      icon: "🛬",
      label: "Arrival",
      detail: "Airport, taxi, and resort access",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Check-in",
      detail: "Reception, keys, and registration",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Explore",
      detail: "Activities, food, and transport",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Stay support and reservations",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Managed apartment, not hotel service",
      text: "Daily housekeeping, refills, and consumables are not included unless arranged separately.",
    },
    {
      title: "Built for Sharm Hills",
      text: "Casa Sole is our managed holiday-apartment brand. Sharm Hills is the resort where your apartment is located, so Casa Sole handles your stay support while Sharm Hills provides the shared resort setting and common facilities.",
    },
    {
      title: "Private details stay offline",
      text: "Wi-Fi and apartment-specific details are printed inside the apartment, not published online.",
    },
  ],

  checkInPreview: [
    "Go to Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
    "At the gate, ask security for the reception hall, then ask reception for our team.",
    "Our onsite team will assist with keys, beach access card, Wi-Fi information, and registration.",
  ],

  supportPreview:
    "For stay support, contact our onsite team. For extensions, booking changes, or transfers, contact the Reservation Office.",

  contactPreview:
    "Our onsite team supports your stay. The Reservation Office handles extensions, Booking.com, and other platform matters.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Arrival",
    stage: "Before you reach the resort",
    summary: "Sharm Hills location, airport taxi guidance, and gate arrival steps.",
    guestNote: {
      title: "Welcome to Casa Sole",
      text: "We are looking forward to welcoming you to Casa Sole Sharm Hills. Use this page before travelling or when you arrive at Sharm El Sheikh International Airport.",
    },
    details: [
      {
        label: "Resort location",
        text: "Casa Sole is located inside Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
      },
      {
        label: "From the airport",
        text: "Sharm El Sheikh International Airport is approximately 5 minutes by car from Sharm Hills Resort.",
      },
      {
        label: "Airport taxi",
        text: "Airport taxis may cost more, especially during late hours. Please agree on the price with the driver before getting into the car.",
      },
      {
        label: "Tell the driver",
        text: "Tell the driver clearly: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "At the main gate",
        text: "Tell security you have a reservation with Mr. Magdy. Ask security to direct you to the reception hall.",
      },
      {
        label: "Reception hall",
        text: "Enter the resort, go to the reception hall, and ask the reception desk for Mr. Magdy.",
      },
      {
        label: "Airport transfer",
        text: "Casa Sole can help coordinate airport pickup or drop-off for USD 15 for a normal car, up to 4 guests maximum. Additional guests, larger groups, or extra luggage need advance coordination and may require additional fees. Please arrange this in advance with the Reservation Office.",
      },
    ],
    actions: [
      {
        label: "Open resort map",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "WhatsApp our onsite team",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "check-in",
    title: "Check-in",
    stage: "Entering and settling in",
    summary: "Check-in time, representative support, keys, beach card, and registration.",
    guestNote: {
      title: "Check-in time",
      text: "Check-in is available from 2:00 PM to 11:00 PM. Arrival after 11:00 PM must be coordinated with Casa Sole before arrival.",
    },
    details: [
      {
        label: "Early check-in",
        text: "Early check-in may be possible subject to availability. It must be coordinated in advance, not on the spot.",
      },
      {
        label: "Meet our team",
        text: "Once you reach the reception hall, ask for our team. They will assist with the check-in process.",
      },
      {
        label: "What our team provides",
        text: "Our team will provide the apartment keys, beach access card, and Wi-Fi information.",
      },
      {
        label: "Passport registration",
        text: "In accordance with local government security requirements, an original passport copy is required for each guest. Passports may be collected briefly for approximately 10 minutes and returned immediately afterward.",
      },
      {
        label: "Backup self check-in",
        text: "If our representative cannot be reached immediately or check-in is delayed, please message Casa Sole and we will activate the alternative self check-in process.",
      },
    ],
    actions: [
      {
        label: "WhatsApp our onsite team",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Apartment Guide",
    stage: "Inside the apartment",
    summary: "Wi-Fi, AC, kitchen items, towels, appliances, washing machine, trash, and utilities.",
    guestNote: {
      title: "Important: managed apartment",
      text: "Casa Sole is a managed holiday apartment, not a hotel service. Daily housekeeping, refills, detergent, and consumable replacements are not included during the stay unless arranged separately for an extra fee.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "Wi-Fi details are printed behind the main apartment door. The connection is suitable for browsing and basic use, but not guaranteed for heavy streaming.",
      },
      {
        label: "5G router option",
        text: "If you need stronger internet, Casa Sole may provide a 5G router with metered quota for an extra fee, subject to availability. Please ask our team.",
      },
      {
        label: "AC use",
        text: "Please close balcony or terrace doors while the AC is on, and turn off AC and lights when leaving the apartment.",
      },
      {
        label: "Towels",
        text: "The apartment includes shower towels, face towels, and beach towels. Bathroom towels are for bathroom use only. Please do not use them for feet, floors, beach, or outdoor areas.",
      },
      {
        label: "Kitchen",
        text: "The kitchen includes plates, cups, a hot water kettle, microwave, stove, and fridge. There is no oven. Please keep the kitchen clean during your stay.",
      },
      {
        label: "Apartment items",
        text: "The apartment includes an iron, hair dryer, clothes drying rack, hot water kettle, beach towels, face towels, and shower towels.",
      },
      {
        label: "Washing machine",
        text: "A washing machine is available in the apartment. Detergent is not provided.",
      },
      {
        label: "Trash",
        text: "The trash bin is under the sink. When full, please take trash to the nearest main collection box in the landscape area.",
      },
      {
        label: "Electricity or water cut",
        text: "Water and electricity are chargeable services in the area. In rare cases, a short cut may happen. This is normal. Message our team and service is usually restored within around 5 minutes.",
      },
      {
        label: "Apartment issue",
        text: "For maintenance or any apartment issue, please contact our team.",
      },
    ],
    actions: [
      {
        label: "WhatsApp our onsite team",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "House Rules",
    stage: "During the stay",
    summary: "Quiet hours, visitors, smoking, pets, damage, and apartment care.",
    guestNote: {
      title: "Please respect the apartment",
      text: "The apartment is privately managed. Please treat it carefully and respect neighbors, resort guests, and shared spaces.",
    },
    details: [
      {
        label: "Quiet hours",
        text: "Quiet hours are from 10:00 PM to 8:00 AM. Please keep noise low during this time.",
      },
      {
        label: "Visitors",
        text: "Visitors are allowed only after registration at the resort gate/security. Unregistered visitors should not enter the resort or apartment.",
      },
      {
        label: "Smoking",
        text: "Smoking is not allowed inside the apartment. Smoking is allowed only outside on the balcony or terrace.",
      },
      {
        label: "Pets",
        text: "Pets must be coordinated with the Reservation Office before arrival. Animals are not allowed inside the pool and must remain leashed during the stay.",
      },
      {
        label: "Children",
        text: "Children must be supervised at all times. Parents or guardians are fully responsible for children safety.",
      },
      {
        label: "Furniture",
        text: "Please do not take indoor furniture outside to the balcony, terrace, garden, pool, or beach.",
      },
      {
        label: "Damage or breakage",
        text: "Accidents can happen. Please report any damage or breakage to our team immediately.",
      },
      {
        label: "Lost key or card",
        text: "Lost key or lost beach access card replacement cost is USD 100, paid directly to our team.",
      },
      {
        label: "Ground floor mosquito note",
        text: "If you are staying on the ground floor, please keep the net door closed to help avoid mosquitoes.",
      },
    ],
    actions: [
      {
        label: "WhatsApp our onsite team",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Resort Guide",
    stage: "Enjoying Sharm Hills",
    summary: "Pools, parking, resort facilities, supermarket delivery, and common areas.",
    guestNote: {
      title: "Sharm Hills guidance",
      text: "This page covers shared resort information for Casa Sole guests staying inside Sharm Hills.",
    },
    details: [
      {
        label: "Pool",
        text: "The resort pool is open from sunrise to sunset. Children must be supervised at all times.",
      },
      {
        label: "Kids pool and aqua slides",
        text: "Sharm Hills has a kids swimming pool and a small kids aqua park with slides. Children must be watched by their parent or guardian at all times; Casa Sole and the resort do not replace parent supervision.",
      },
      {
        label: "Parking",
        text: "Parking is free inside Sharm Hills.",
      },
      {
        label: "Common areas",
        text: "Please respect other guests personal space and freedom in all shared resort areas.",
      },
      {
        label: "Restaurant and cafe",
        text: "There is a restaurant/cafe inside Sharm Hills.",
      },
      {
        label: "Supermarket delivery",
        text: "There is a supermarket/shop with delivery. When ordering, mention your apartment number and building number from the printed information behind the main door.",
      },
      {
        label: "Pets around resort",
        text: "Animals must remain leashed during the stay and are not allowed inside the pool.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Beach Guide",
    stage: "Beach days",
    summary: "Free Sinbad Beach access, card rules, facilities, transport, and beach payments.",
    guestNote: {
      title: "Free beach access",
      text: "Casa Sole guests receive free access to Sinbad Beach with the beach card provided for the apartment. Please bring the card and show it on arrival.",
    },
    details: [
      {
        label: "Reaching the beach",
        text: "Sinbad Beach is around 20 minutes walking from Sharm Hills, or around 5 minutes by car. You can use the map or ask us to help coordinate a paid ride.",
      },
      {
        label: "Beach access",
        text: "Beach access is free for the guests covered by your apartment beach card. On arrival, show the beach card and say you are a Sharm Hills resident.",
      },
      {
        label: "Beach facilities",
        text: "Sinbad Beach has toilets, coffee shop, shower, diving center, snorkeling marina, and restaurant.",
      },
      {
        label: "Card allowance",
        text: "The free beach allowance depends on apartment size. One-bedroom units usually include one card for 2 guests. Two-bedroom units usually include two cards for 4 guests.",
      },
      {
        label: "Sunbeds and towels",
        text: "Sunbeds are free for covered guests. Beach towels are provided inside the apartment. Any extra items or additional guests must be managed by the guest.",
      },
      {
        label: "Food and drinks",
        text: "Any orders from the beach restaurant are paid directly by the guest on the spot.",
      },
      {
        label: "Getting there",
        text: "You can walk to the beach using the map, or ask us for paid drop-off and pickup.",
      },
      {
        label: "Lost card",
        text: "Lost beach access card replacement cost is USD 100, paid directly to our team.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Sinbad Beach covered seating area",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Sinbad Beach shoreline",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Clear water and beach jetty at Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Sinbad Beach entrance",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Sinbad Beach restaurant seating",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Sinbad Beach sunbeds and umbrellas",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Beach drink with sea view",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Sinbad Beach shaded lounge area",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Sinbad Beach cafe with sea view",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Sinbad Beach umbrellas and palm trees",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Sinbad Beach sunset shoreline",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Sinbad Beach sunbeds under shade",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Sinbad Beach sea view",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Sinbad Beach lounge and sea view",
      },
    ],
    actions: [
      {
        label: "Open Sinbad Beach map",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Ask us for a ride",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Explore Sharm",
    stage: "Activities and attractions",
    summary: "Best things to do in Sharm El Sheikh, from sea trips to nightlife.",
    guestNote: {
      title: "Explore Sharm with Casa Sole",
      text: "Sharm El Sheikh is known for snorkeling, diving, beach clubs, desert trips, Old Market, SOHO Square, and relaxed nightlife. Casa Sole does not operate tours directly, but we can help you understand the options and arrange transport when needed.",
    },
    details: [
      {
        label: "How to use this guide",
        text: "Use the cards below to compare distance, expected visit time, and suitability before choosing where to go.",
      },
      {
        label: "Booking activities",
        text: "Casa Sole does not operate tours directly. For trips or activities, confirm pickup time, included items, and price clearly before booking.",
      },
      {
        label: "Need help choosing?",
        text: "If you are not sure what suits your group, ask us and we will help you decide.",
      },
      {
        label: "Food and water tip",
        text: "Do not drink tap water. For fruit or food rinsed with tap water, use bottled water for an extra rinse when possible.",
      },
      {
        label: "Sun protection",
        text: "The Red Sea sun is strong. Bring sunscreen, sunglasses, and a hat, especially for beach, boat, and desert days.",
      },
      {
        label: "Tipping and prices",
        text: "Tipping is common in tourism areas. For markets and souvenir shopping, do not be shy to bargain politely; haggling is part of the experience.",
      },
      {
        label: "Desert and mosque visits",
        text: "Wear long pants for camel riding. Women may want to bring a scarf to cover hair in the desert and when visiting mosques.",
      },
      {
        label: "Diving plans",
        text: "Plan diving ahead of time, especially if you need a licensed center, equipment, beginner instruction, or certification requirements.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Evening", "Family", "Restaurants"],
        description:
          "A polished evening area with restaurants, cafes, shops, entertainment, lights, and the dancing fountain.",
        distance: "Approx. 8-10 minutes by car from Sharm Hills",
        visitTime: "1.5 to 3 hours",
        bestFor: "Families, couples, and easy evening walks",
        tip: "Best visited after sunset when the lights and fountain are active.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Culture", "Shopping", "Evening"],
        description:
          "A classic Sharm experience with souvenirs, local shops, cafes, spices, and Egyptian atmosphere.",
        distance: "Approx. 25-30 minutes by car from Sharm Hills",
        visitTime: "1.5 to 3 hours",
        bestFor: "Families, shopping, local atmosphere, and evening walks",
        tip: "Good to combine with Al Sahaba Mosque in the same visit.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Culture", "Landmark", "Photos"],
        description:
          "A beautiful landmark beside Old Market, known for its architecture and evening atmosphere.",
        distance: "Approx. 25-30 minutes by car from Sharm Hills",
        visitTime: "30 to 60 minutes",
        bestFor: "Culture, photos, and a calm sightseeing stop",
        tip: "Please respect local customs, especially around prayer times.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Nightlife", "Cafes", "Walking"],
        description:
          "One of Sharm's main evening areas, with restaurants, cafes, shops, bars, and a lively promenade.",
        distance: "Approx. 18-22 minutes by car from Sharm Hills",
        visitTime: "2 to 4 hours",
        bestFor: "Nightlife, cafes, shopping, and active evenings",
        tip: "Best for guests who want a more lively night out.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Nightlife", "Cafe", "Sunset"],
        description:
          "A famous cliffside cafe with sea views and a distinctive oriental atmosphere.",
        distance: "Approx. 30-35 minutes by car from Sharm Hills",
        visitTime: "1.5 to 3 hours",
        bestFor: "Couples, adults, sunset, and evening atmosphere",
        tip: "It can be very busy. Sunset and evening are the most popular times.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Sea & Beach", "Nature", "Day Trip"],
        description:
          "One of the best-known nature and snorkeling areas near Sharm, with clear water and reef scenery.",
        distance: "Approx. 45-60 minutes by car from Sharm Hills",
        visitTime: "6 to 8 hours",
        bestFor: "Snorkeling, nature, sea trips, and full-day plans",
        tip: "Best planned as a full-day trip with clear pickup and return times.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Sea & Beach", "Boat Trip", "Snorkeling"],
        description:
          "A popular Red Sea boat trip, usually combined with snorkeling stops and a full sea day.",
        distance: "Pickup point varies by tour operator",
        visitTime: "6 to 8 hours",
        bestFor: "Sea day, snorkeling, couples, friends, and families",
        tip: "Confirm what is included: lunch, snorkeling equipment, pickup, and marine fees.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Sea & Beach", "Adventure", "Diving"],
        description:
          "Sharm is one of the strongest Red Sea destinations for snorkeling, intro dives, and certified diving.",
        distance: "Pickup varies by dive center or beach location",
        visitTime: "3 to 7 hours",
        bestFor: "Adventure, sea lovers, beginners, and certified divers",
        tip: "Use licensed dive centers and confirm medical/safety requirements before booking.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Adventure", "Desert", "Family"],
        description:
          "Quad biking, camel rides, Bedouin tea, Echo Mountain, and sunset desert experiences are popular.",
        distance: "Pickup varies by tour operator",
        visitTime: "3 to 5 hours",
        bestFor: "Adventure, families, groups, and sunset plans",
        tip: "Bring sunglasses, closed shoes, and check if dinner or show is included.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Culture", "Indoor", "Family"],
        description:
          "A calm indoor cultural option with Egyptian antiquities, Sinai heritage displays, and an air-conditioned museum setting.",
        distance: "Approx. 15-20 minutes by car from Sharm Hills",
        visitTime: "1 to 2 hours",
        bestFor: "Families, culture, indoor plans, and hot afternoons",
        tip: "A useful option when you want a break from sun and beach activities.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Culture", "Landmark", "Quiet"],
        description:
          "A well-known cultural and religious landmark with detailed interior artwork.",
        distance: "Approx. 20-25 minutes by car from Sharm Hills",
        visitTime: "30 to 60 minutes",
        bestFor: "Culture, architecture, quiet sightseeing, and photos",
        tip: "Best combined with Old Market or another short cultural stop.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Sea & Beach", "Snorkeling", "Beach Clubs"],
        description:
          "Good coastal areas for sea views, snorkeling, beach clubs, and relaxed seaside time.",
        distance: "Approx. 10-30 minutes by car depending on the spot",
        visitTime: "3 to 5 hours",
        bestFor: "Beach time, snorkeling, couples, and relaxed afternoons",
        tip: "Choose the exact beach or club before going, as access rules can vary.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Day Trip", "Adventure", "Sea & Beach"],
        description:
          "A longer day trip outside Sharm, often including Blue Hole, canyon/desert stops, snorkeling, and shopping.",
        distance: "Approx. 1.5-2 hours by car from Sharm Hills",
        visitTime: "Full day",
        bestFor: "Adventure, day trips, snorkeling, and guests who want to explore outside Sharm",
        tip: "Start early and confirm the itinerary before booking.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Day Trip", "Culture", "Adventure"],
        description:
          "A famous long trip for history, religion, hiking, and sunrise views.",
        distance: "Approx. 3+ hours by car from Sharm Hills",
        visitTime: "Overnight or full day",
        bestFor: "Hiking, history, culture, and sunrise experiences",
        tip: "This is a long trip. Confirm timing, weather, clothing, and pickup details carefully.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Evening", "Family", "Photos"],
        description:
          "An evening entertainment and photo-stop area with lights, sculptures, cafes, and a relaxed tourist atmosphere.",
        distance: "Approx. 15-20 minutes by car from Sharm Hills",
        visitTime: "1 to 2 hours",
        bestFor: "Families, kids, photos, and a simple evening walk",
        tip: "Best after sunset. Check current activity before going because entertainment areas can change by season.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Sea & Beach", "Snorkeling", "Diving"],
        description:
          "A Ras Mohammed area dive and snorkel site known for reef scenery, drift dives, and colourful marine life.",
        distance: "Approx. 45-60 minutes by car, usually visited by boat or organised Ras Mohammed trip",
        visitTime: "Full day with a boat or diving operator",
        bestFor: "Divers, snorkelers, confident swimmers, and Red Sea reef lovers",
        tip: "Use a licensed operator and tell them your swimming or diving level before booking.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Open Sharm map",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Ask Casa Sole",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    stage: "Eating out",
    summary: "Casa Sole food picks around Sharm, from seafood and burgers to Italian, Egyptian grills, and bakeries.",
    guestNote: {
      title: "Guest food guide",
      text: "Casa Sole does not provide food, groceries, or delivery service. These are suggested places to help guests choose; please contact restaurants directly for reservations, delivery, opening times, and payment.",
    },
    details: [
      {
        label: "Before you go",
        text: "Restaurant opening times, menus, prices, and delivery availability can change. Please check directly before travelling or ordering.",
      },
      {
        label: "Transport",
        text: "Guests arrange their own taxi or ride. Casa Sole can help with general guidance, but the restaurant bill, delivery fee, and transport are paid directly by the guest.",
      },
      {
        label: "Food safety",
        text: "For seafood, raw food, or allergies, ask the restaurant clearly before ordering. Families with children should choose simple dishes when unsure.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Seafood", "Old Market", "Family"],
        description:
          "A well-known Sharm seafood choice in Old Market, popular for fish, shrimp, seafood soup, and Egyptian-style seafood meals.",
        distance: "Approx. 25-30 minutes by car from Sharm Hills",
        visitTime: "1.5 to 2.5 hours",
        bestFor: "Seafood lovers, families, and Old Market evenings",
        tip: "Good to combine with Old Market and Al Sahaba Mosque. Ask clearly about fish weight, price, and cooking style before ordering.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "American", "Family"],
        description:
          "A casual American and Tex-Mex style restaurant on El Salam Road, known for burgers, steaks, tacos, and a lively themed atmosphere.",
        distance: "Approx. 12-18 minutes by car from Sharm Hills",
        visitTime: "1 to 2 hours",
        bestFor: "Burgers, kids, groups, and easy casual dinners",
        tip: "A strong option when guests want something familiar and simple after beach or travel days.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["Italian", "Pizza", "Casual"],
        description:
          "A casual Italian option for pizza, pasta, and comfort food when guests want an easy meal outside the resort.",
        distance: "Approx. 15-25 minutes by car from Sharm Hills, depending on traffic",
        visitTime: "1 to 2 hours",
        bestFor: "Pizza, pasta, couples, families, and casual dinners",
        tip: "Check the exact branch/location on Google Maps before leaving, especially if using a taxi.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Seafood", "Steak", "Premium"],
        description:
          "A premium dinner option at Sultan Gardens Resort, known for sea views, seafood, steaks, and a more polished evening setting.",
        distance: "Approx. 12-18 minutes by car from Sharm Hills",
        visitTime: "2 to 3 hours",
        bestFor: "Couples, special dinners, seafood, and steak",
        tip: "Best for a planned dinner rather than a quick meal. Contact ahead because resort restaurant access can vary.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Indian", "Asian", "Premium"],
        description:
          "A well-rated Indian restaurant in Naama Bay, known for tandoor dishes, curries, naan, and a more refined dinner atmosphere.",
        distance: "Approx. 18-22 minutes by car from Sharm Hills",
        visitTime: "2 to 3 hours",
        bestFor: "Indian food, couples, adults, and special dinners",
        tip: "Reserve ahead if you are planning a specific dinner time. Ask about spice level before ordering.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Egyptian", "Grill", "Family"],
        description:
          "An Egyptian restaurant in Naama Bay with grills, traditional dishes, fresh bread, and a warm local-style dining atmosphere.",
        distance: "Approx. 18-22 minutes by car from Sharm Hills",
        visitTime: "1.5 to 2.5 hours",
        bestFor: "Egyptian food, families, mixed grills, and first-time visitors",
        tip: "A good choice when guests want Egyptian flavours without going all the way to Old Market.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Seafood", "Steak", "Naama Bay"],
        description:
          "A Naama Bay seafood and steak restaurant with a broad menu, generous portions, and a central evening location.",
        distance: "Approx. 18-22 minutes by car from Sharm Hills",
        visitTime: "1.5 to 2.5 hours",
        bestFor: "Seafood, steak, couples, and families",
        tip: "Useful if some guests want seafood and others prefer steak or grilled dishes.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["Italian", "Pizza", "Naama Bay"],
        description:
          "A popular Italian and pizza restaurant in Sharm, suitable for pasta, pizza, and a familiar casual dinner.",
        distance: "Approx. 18-22 minutes by car from Sharm Hills",
        visitTime: "1 to 2 hours",
        bestFor: "Italian food, pizza, families, and casual dinners",
        tip: "A safe option when the group wants familiar food and easy choices.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["International", "Rooftop", "Nightlife"],
        description:
          "A Naama Bay rooftop spot for international food, drinks, views, and a relaxed evening atmosphere.",
        distance: "Approx. 18-22 minutes by car from Sharm Hills",
        visitTime: "1.5 to 3 hours",
        bestFor: "Adults, couples, friends, sunset, and late evenings",
        tip: "Better for atmosphere and views than a fast family meal. Check if your group wants a rooftop/bar setting.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Lebanese", "Middle Eastern", "Naama Bay"],
        description:
          "A Lebanese and Middle Eastern restaurant in Naama Center with grills, mezze, and a central Naama Bay location.",
        distance: "Approx. 18-22 minutes by car from Sharm Hills",
        visitTime: "1.5 to 2.5 hours",
        bestFor: "Lebanese food, mezze, grills, couples, and families",
        tip: "Good for sharing plates. Ask about set menus or mixed grill options if visiting as a group.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Egyptian", "Grill", "Old Market"],
        description:
          "An Old Market grill restaurant for Egyptian barbecue, kofta, kebab, and local-style meals.",
        distance: "Approx. 25-30 minutes by car from Sharm Hills",
        visitTime: "1.5 to 2 hours",
        bestFor: "Grills, local food, families, and Old Market visits",
        tip: "Best combined with Old Market. Expect a more local, busy atmosphere than resort restaurants.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Bakery", "Cafe", "Breakfast"],
        description:
          "A bakery and cafe option for pastries, cakes, coffee, sandwiches, and a simple breakfast or takeaway stop.",
        distance: "Approx. 20-30 minutes by car from Sharm Hills",
        visitTime: "30 to 90 minutes",
        bestFor: "Breakfast, coffee, pastries, takeaway, and light meals",
        tip: "Useful before a long trip or airport day. Check location and current reviews before going.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Facilities Around You",
    stage: "Daily needs nearby",
    summary: "Nearby market, pharmacy, laundry, ATM, gym, bazar, and useful services.",
    guestNote: {
      title: "Pay providers directly",
      text: "Casa Sole does not provide groceries, food, laundry, or delivery service. Please contact each provider directly and pay them directly.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Groceries and daily needs. Phone: +20 120 025 2250. Some places may offer free delivery; please ask directly during your call.",
        mapLabel: "Open Safeway Market map",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Phone: +20 107 095 3116.",
        mapLabel: "Open pharmacy map",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Laundry and dry cleaning. Phone: +20 128 732 4868.",
        mapLabel: "Open City Dry Clean map",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "ATM is available at the supermarket.",
        mapLabel: "Open ATM area map",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Juice and fruit shop. Phone: +20 100 938 3801.",
        mapLabel: "Open Mango Juice map",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Gym nearby. Phone: +20 104 041 2617.",
        mapLabel: "Open Primal Fit Gym map",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Bazar and shopping. Phone: +20 127 755 5334.",
        mapLabel: "Open Delilah Bazar map",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Market and shopping mall. Phone: +20 100 048 9214.",
        mapLabel: "Open Mango Market map",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    stage: "Moving around",
    summary: "Airport transfer, taxis, public transport, and paid local rides.",
    guestNote: {
      title: "Plan before travelling",
      text: "Airport pickup or drop-off can be coordinated with Casa Sole for USD 15 for a normal car, up to 4 guests maximum. Additional guests, larger groups, or extra luggage need advance coordination and may require additional fees. Please arrange this in advance with the Reservation Office.",
    },
    details: [
      {
        label: "Airport to Sharm Hills",
        text: "The drive from Sharm El Sheikh International Airport to Sharm Hills Resort is approximately 5 minutes.",
      },
      {
        label: "Airport taxi",
        text: "Airport taxi cost can vary and may be higher during late hours. Always agree on the price before getting into the car.",
      },
      {
        label: "Casa Sole transfer",
        text: "Casa Sole can help coordinate airport pickup or drop-off for USD 15 for a normal car, up to 4 guests maximum, subject to advance coordination. Additional guests, larger groups, or extra luggage need separate coordination and may require additional fees.",
      },
      {
        label: "City transportation",
        text: "You can coordinate city transportation with Casa Sole for an additional fee.",
      },
      {
        label: "Public taxi",
        text: "Public taxis are available, but rates may be higher.",
      },
      {
        label: "Public transport",
        text: "Public transportation is available within walking distance from the resort gate.",
      },
    ],
    actions: [
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    stage: "Common questions",
    summary: "Fast answers for Wi-Fi, housekeeping, visitors, checkout, beach card, and support.",
    guestNote: {
      title: "Quick answers",
      text: "These are the most common Casa Sole guest questions. For anything urgent during your stay, message our team.",
    },
    details: [
      {
        label: "Where is the Wi-Fi?",
        text: "Wi-Fi details are printed behind the main apartment door.",
      },
      {
        label: "Can I use Wi-Fi for streaming?",
        text: "Wi-Fi is suitable for browsing and basic use. Heavy streaming is not guaranteed. A 5G router with metered quota may be available for an extra fee through our team.",
      },
      {
        label: "Is housekeeping included?",
        text: "Daily housekeeping is not included. Apartment cleanliness during the stay is the guest responsibility. Housekeeping may be arranged for an additional fee, subject to availability.",
      },
      {
        label: "Are refills provided?",
        text: "No. Refills and consumables are not provided during the stay.",
      },
      {
        label: "Can I extend my stay?",
        text: "Please contact the Reservation Office for extensions, booking changes, early check-in, or late checkout.",
      },
      {
        label: "Can I bring visitors?",
        text: "Visitors are allowed only after registration at the resort gate/security.",
      },
      {
        label: "What if I lose the key or beach card?",
        text: "Lost key or beach access card replacement cost is USD 100, paid directly to our team.",
      },
      {
        label: "What if water or electricity cuts?",
        text: "This may rarely happen because water and electricity are chargeable services in the area. Message our team and service is usually restored within around 5 minutes.",
      },
      {
        label: "Who do I contact?",
        text: "Contact our team for stay support. Contact the Reservation Office for booking, extension, airport transfer, or Booking.com matters.",
      },
    ],
    actions: [
      {
        label: "WhatsApp our onsite team",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "checkout",
    title: "Checkout",
    stage: "Leaving the apartment",
    summary: "Checkout time, apartment checklist, keys, beach card, inspection, and review.",
    guestNote: {
      title: "Checkout time",
      text: "Official checkout time is 12:00 PM maximum. Late checkout may be available subject to availability and must be coordinated in advance.",
    },
    details: [
      {
        label: "Before leaving",
        text: "Please remove trash, wash used dishes or leave the kitchen clean, turn off AC and lights, close windows and balcony or terrace doors, and check that no personal items are left behind.",
      },
      {
        label: "Keys and beach card",
        text: "Return keys and beach access card to the same place or person you received them from, coordinated with the Casa Sole team.",
      },
      {
        label: "Message before leaving",
        text: "Please message our team before leaving the apartment.",
      },
      {
        label: "Inspection",
        text: "Our team will inspect the apartment at checkout. If anything was damaged or broken, please report it before departure.",
      },
      {
        label: "Review request",
        text: "If you enjoyed your stay, we would truly appreciate your review on the platform you booked through. It helps future guests and supports Casa Sole.",
      },
    ],
    actions: [
      {
        label: "WhatsApp our onsite team",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Airport Departure",
    stage: "Leaving Sharm",
    summary: "Airport timing, drop-off coordination, luggage notes, and final travel tips.",
    guestNote: {
      title: "Recommended timing",
      text: "For flights, we recommend leaving Sharm Hills 2.5 to 3 hours before flight time. This is the safest option for airport procedures, traffic, and check-in.",
    },
    details: [
      {
        label: "Airport drop-off",
        text: "Casa Sole can help coordinate airport drop-off for USD 15 for a normal car, up to 4 guests maximum, subject to advance coordination. Additional guests, larger groups, or extra luggage need separate coordination and may require additional fees.",
      },
      {
        label: "Before you leave",
        text: "Make sure checkout is complete, keys and beach card are returned, and no personal items are left behind.",
      },
      {
        label: "Passport and luggage",
        text: "Before leaving the apartment, check passports, phones, chargers, luggage, and personal documents.",
      },
      {
        label: "Airport map",
        text: "Use the airport map button if you are driving or using a taxi.",
      },
      {
        label: "Live flight status",
        text: "Check your live Sharm El Sheikh International Airport departure status before leaving the apartment. Flight times, delays, and cancellations can change, so always confirm with your airline.",
        linkLabel: "Live SSH departures",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Open airport map",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Ask for a ride",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Returning Guest Club",
    stage: "After the stay",
    summary: "Return guest benefits, discount-card registration, comments, complaints, and review request.",
    guestNote: {
      title: "Register, comment, or complain",
      text: "Fill the Returning Guest Club form to receive your special discount card. You can also use the form to send a comment or complaint after your stay so our team can follow up properly.",
    },
    details: [
      {
        label: "Return guest discount",
        text: "Returning guests can receive 15% off when reserving with Casa Sole.",
      },
      {
        label: "Booking options",
        text: "Guests may still book through Booking.com or another platform if they prefer. Returning Guest Club benefits are handled by the Reservation Office.",
      },
      {
        label: "How to join",
        text: "Open the registration form, add your name, country, WhatsApp number, email, and any comment or complaint if needed. Our team will keep your details for returning guest offers and follow up where necessary.",
      },
      {
        label: "Comments or complaints",
        text: "The same form can also be used for comments or complaints. Please write the issue clearly so our team can review it and respond in the correct channel.",
      },
      {
        label: "Review request",
        text: "If you enjoyed your stay, please leave a review on the platform you booked through. It helps future guests and supports Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Register, comment, or get your discount card",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Discover Our Units",
    stage: "Casa Sole apartments",
    summary: "Open Casa Sole Sharm Hills listings, check photos, availability, and rates.",
    guestNote: {
      title: "Check listings online",
      text: "Use this page to open Casa Sole unit listings, view photos, compare apartment size, and check live availability or rates on Booking.com.",
    },
    details: [
      {
        label: "One-bedroom unit: Casa Sole Sharm Hills Apt 1",
        text: "Suitable for guests looking for a one-bedroom Casa Sole apartment at Sharm Hills.",
        linkLabel: "Open on Booking.com",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "One-bedroom unit: Casa Sole Sharm Hills Apt 2",
        text: "Suitable for guests looking for a one-bedroom Casa Sole apartment at Sharm Hills.",
        linkLabel: "Open on Booking.com",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "One-bedroom unit: Casa Sole Sharm Hills Apt 3",
        text: "Suitable for guests looking for a one-bedroom Casa Sole apartment at Sharm Hills.",
        linkLabel: "Open on Booking.com",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "One-bedroom unit: Casa Sole Sharm Hills Apt 4",
        text: "Suitable for guests looking for a one-bedroom Casa Sole apartment at Sharm Hills.",
        linkLabel: "Open on Booking.com",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "Two-bedroom unit: Casa Sole Sharm Hills Apt 5",
        text: "Suitable for families or groups who prefer a two-bedroom Casa Sole apartment at Sharm Hills.",
        linkLabel: "Open on Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Three-bedroom unit: Casa Sole Sharm Hills Apt 6",
        text: "Suitable for larger families or groups who prefer a three-bedroom Casa Sole apartment at Sharm Hills.",
        linkLabel: "Open on Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact Us",
    stage: "Support",
    summary: "Mr. Magdy for stay support, Reservation Office for booking matters.",
    guestNote: {
      title: "Who to contact",
      text: "Please contact the right team so we can help you faster.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "For check-in, stay support, local help, apartment issues, maintenance, keys, beach card, 5G router requests, and urgent apartment support. Phone / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "Reservation Office",
        text: "For booking changes, extensions, early check-in, late checkout, airport transfer coordination, Returning Guest Club, Booking.com, and other platform matters. Phone / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "At security",
        text: "When arriving at Sharm Hills, mention that you have a reservation with Mr. Magdy, then ask security for the reception hall.",
      },
    ],
    actions: [
      {
        label: "WhatsApp our onsite team",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Reservation Office",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
