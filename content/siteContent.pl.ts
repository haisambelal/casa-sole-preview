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
  privateInfoTitle: "Zapisz ten przewodnik",
  privateInfoText:
    "Dodaj Casa Sole do ekranu głównego telefonu, aby mieć szybki dostęp podczas pobytu, bez ponownego szukania linku.",

  quickActions: [
    {
      icon: "🛬",
      label: "Przyjazd",
      detail: "Lotnisko, taksówka i dostęp do resortu",
      href: "/sharmhills/arrival",
    },
    {
      icon: "🔑",
      label: "Zameldowanie",
      detail: "Recepcja, klucze i rejestracja",
      href: "/sharmhills/check-in",
    },
    {
      icon: "🧭",
      label: "Odkrywaj",
      detail: "Atrakcje, jedzenie i transport",
      href: "/sharmhills/explore-sharm",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      detail: "Wsparcie pobytu i rezerwacje",
      href: "/sharmhills/contact",
    },
  ],

  highlights: [
    {
      title: "Apartament zarządzany, nie usługa hotelowa",
      text: "Codzienne sprzątanie, uzupełnienia i materiały eksploatacyjne nie są wliczone, chyba że uzgodniono je oddzielnie.",
    },
    {
      title: "Stworzone dla Sharm Hills",
      text: "Casa Sole to nasza marka zarządzanych apartamentów wakacyjnych. Sharm Hills to resort, w którym znajduje się apartament; Casa Sole obsługuje wsparcie pobytu, a Sharm Hills zapewnia wspólne otoczenie i udogodnienia resortu.",
    },
    {
      title: "Dane prywatne pozostają offline",
      text: "Dane Wi-Fi i informacje dotyczące apartamentu są wydrukowane w apartamencie, a nie publikowane online.",
    },
  ],

  checkInPreview: [
    "Udaj się do Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
    "Przy bramie zapytaj ochronę o hol recepcyjny, a następnie w recepcji poproś o nasz zespół.",
    "Nasz zespół na miejscu pomoże z kluczami, kartą dostępu na plażę, informacjami Wi-Fi i rejestracją.",
  ],

  supportPreview:
    "W sprawach pobytu skontaktuj się z naszym zespołem na miejscu. W sprawach przedłużeń, zmian rezerwacji lub transferów skontaktuj się z Biurem rezerwacji.",

  contactPreview:
    "Nasz zespół na miejscu wspiera Twój pobyt. Biuro rezerwacji obsługuje przedłużenia, Booking.com i inne platformy.",
};

export const journeyItems: JourneyItem[] = [
  {
    slug: "arrival",
    title: "Przyjazd",
    stage: "Przed dotarciem do resortu",
    summary: "Lokalizacja Sharm Hills, wskazówki dotyczące taksówki z lotniska i kroki przy bramie.",
    guestNote: {
      title: "Witamy w Casa Sole",
      text: "Cieszymy się, że powitamy Cię w Casa Sole Sharm Hills. Skorzystaj z tej strony przed podróżą lub po przylocie na Sharm El Sheikh International Airport.",
    },
    details: [
      {
        label: "Lokalizacja resortu",
        text: "Casa Sole znajduje się w Sharm Hills Resort, Al Muntaza Gate 2, Sharm El Sheikh.",
      },
      {
        label: "Z lotniska",
        text: "Sharm El Sheikh International Airport znajduje się około 5 minut samochodem od Sharm Hills Resort.",
      },
      {
        label: "Taksówka z lotniska",
        text: "Taksówki z lotniska mogą kosztować więcej, zwłaszcza późno. Ustal cenę z kierowcą przed wejściem do auta.",
      },
      {
        label: "Powiedz kierowcy",
        text: "Powiedz kierowcy wyraźnie: Sharm Hills Resort, Al Muntaza Gate 2.",
      },
      {
        label: "Przy głównej bramie",
        text: "Powiedz ochronie, że masz rezerwację u Mr. Magdy. Poproś o skierowanie do holu recepcyjnego.",
      },
      {
        label: "Hol recepcyjny",
        text: "Wejdź do resortu, idź do holu recepcyjnego i zapytaj w recepcji o Mr. Magdy.",
      },
      {
        label: "Transfer lotniskowy",
        text: "Casa Sole może pomóc zorganizować odbiór lub odwiezienie na lotnisko za USD 15 zwykłym samochodem, maksymalnie dla 4 gości. Dodatkowi goście, większe grupy lub dodatkowy bagaż wymagają wcześniejszej koordynacji i mogą wiązać się z dodatkowymi opłatami. Ustal to wcześniej z Biurem rezerwacji.",
      },
    ],
    actions: [
      {
        label: "Otwórz mapę resortu",
        type: "map",
        href: "https://maps.app.goo.gl/QsU7oSwkE5BiwzbR8",
      },
      {
        label: "Napisz do naszego zespołu na miejscu przez WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "zameldowanie",
    title: "Zameldowanie",
    stage: "Wejście i rozlokowanie",
    summary: "Godzina zameldowania, wsparcie przedstawiciela, klucze, karta plażowa i rejestracja.",
    guestNote: {
      title: "Godzina zameldowania",
      text: "Zameldowanie jest dostępne od 14:00 do 23:00. Przyjazd po 23:00 musi być wcześniej uzgodniony z Casa Sole.",
    },
    details: [
      {
        label: "Wczesne zameldowanie",
        text: "Wczesne zameldowanie może być możliwe w zależności od dostępności. Musi być uzgodnione wcześniej, nie na miejscu.",
      },
      {
        label: "Spotkanie z naszym zespołem",
        text: "Po dotarciu do holu recepcyjnego poproś o nasz zespół. Pomogą w procesie zameldowania.",
      },
      {
        label: "Co zapewnia nasz zespół",
        text: "Nasz zespół przekaże klucze do apartamentu, kartę dostępu na plażę i informacje Wi-Fi.",
      },
      {
        label: "Rejestracja paszportów",
        text: "Zgodnie z lokalnymi wymogami bezpieczeństwa wymagana jest kopia oryginalnego paszportu każdego gościa. Paszporty mogą zostać zabrane na około 10 minut i natychmiast zwrócone.",
      },
      {
        label: "Awaryjne samodzielne zameldowanie",
        text: "Jeśli nasz przedstawiciel nie jest od razu dostępny lub zameldowanie się opóźnia, napisz do Casa Sole, a uruchomimy alternatywny proces samodzielnego zameldowania.",
      },
    ],
    actions: [
      {
        label: "Napisz do naszego zespołu na miejscu przez WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "apartment-guide",
    title: "Przewodnik po apartamencie",
    stage: "W apartamencie",
    summary: "Wi-Fi, klimatyzacja, wyposażenie kuchni, ręczniki, sprzęty, pralka, śmieci i media.",
    guestNote: {
      title: "Ważne: apartament zarządzany",
      text: "Casa Sole to zarządzany apartament wakacyjny, a nie usługa hotelowa. Codzienne sprzątanie, uzupełnienia, detergent i wymiana materiałów eksploatacyjnych nie są wliczone podczas pobytu, chyba że zostaną uzgodnione oddzielnie za dodatkową opłatą.",
    },
    details: [
      {
        label: "Wi-Fi",
        text: "Dane Wi-Fi są wydrukowane za głównymi drzwiami apartamentu. Połączenie nadaje się do przeglądania i podstawowego użycia, ale nie jest gwarantowane do intensywnego streamingu.",
      },
      {
        label: "Opcja routera 5G",
        text: "Jeśli potrzebujesz mocniejszego internetu, Casa Sole może zapewnić router 5G z limitowanym pakietem za dodatkową opłatą, w zależności od dostępności. Zapytaj nasz zespół.",
      },
      {
        label: "Korzystanie z klimatyzacji",
        text: "Zamykaj drzwi balkonowe lub tarasowe, gdy klimatyzacja jest włączona, oraz wyłączaj klimatyzację i światła przy wyjściu z apartamentu.",
      },
      {
        label: "Ręczniki",
        text: "Apartament zawiera ręczniki pod prysznic, ręczniki do twarzy i ręczniki plażowe. Ręczniki łazienkowe są tylko do użytku w łazience. Nie używaj ich do stóp, podłóg, plaży ani na zewnątrz.",
      },
      {
        label: "Kuchnia",
        text: "Kuchnia zawiera talerze, kubki, czajnik, mikrofalę, kuchenkę i lodówkę. Nie ma piekarnika. Prosimy utrzymywać kuchnię w czystości podczas pobytu.",
      },
      {
        label: "Wyposażenie apartamentu",
        text: "Apartament zawiera żelazko, suszarkę do włosów, suszarkę na ubrania, czajnik, ręczniki plażowe, ręczniki do twarzy i ręczniki pod prysznic.",
      },
      {
        label: "Pralka",
        text: "W apartamencie dostępna jest pralka. Detergent nie jest zapewniony.",
      },
      {
        label: "Śmieci",
        text: "Kosz na śmieci znajduje się pod zlewem. Gdy jest pełny, wynieś śmieci do najbliższego głównego pojemnika w części zielonej.",
      },
      {
        label: "Przerwa w dostawie wody lub prądu",
        text: "Woda i prąd są w tej okolicy usługami płatnymi. W rzadkich przypadkach może wystąpić krótka przerwa. To normalne. Napisz do naszego zespołu, a usługa zwykle wraca w około 5 minut.",
      },
      {
        label: "Problem w apartamencie",
        text: "W sprawach konserwacji lub jakichkolwiek problemów w apartamencie skontaktuj się z naszym zespołem.",
      },
    ],
    actions: [
      {
        label: "Napisz do naszego zespołu na miejscu przez WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "house-rules",
    title: "Zasady domu",
    stage: "Podczas pobytu",
    summary: "Cisza nocna, goście, palenie, zwierzęta, szkody i dbanie o apartament.",
    guestNote: {
      title: "Prosimy szanować apartament",
      text: "Apartament jest zarządzany prywatnie. Prosimy obchodzić się z nim ostrożnie i szanować sąsiadów, gości resortu oraz części wspólne.",
    },
    details: [
      {
        label: "Cisza nocna",
        text: "Cisza nocna obowiązuje od 22:00 do 8:00. Prosimy ograniczać hałas w tym czasie.",
      },
      {
        label: "Goście odwiedzający",
        text: "Odwiedzający są dozwoleni tylko po rejestracji przy bramie/ochronie resortu. Niezarejestrowani goście nie powinni wchodzić do resortu ani apartamentu.",
      },
      {
        label: "Palenie",
        text: "Palenie w apartamencie jest zabronione. Palić można tylko na zewnątrz, na balkonie lub tarasie.",
      },
      {
        label: "Zwierzęta",
        text: "Zwierzęta muszą być uzgodnione z Biurem rezerwacji przed przyjazdem. Zwierzęta nie są dozwolone w basenie i muszą pozostawać na smyczy podczas pobytu.",
      },
      {
        label: "Dzieci",
        text: "Dzieci muszą być cały czas nadzorowane. Rodzice lub opiekunowie są w pełni odpowiedzialni za bezpieczeństwo dzieci.",
      },
      {
        label: "Meble",
        text: "Nie wynoś mebli wewnętrznych na balkon, taras, do ogrodu, na basen ani na plażę.",
      },
      {
        label: "Uszkodzenia lub stłuczenia",
        text: "Wypadki mogą się zdarzyć. Prosimy natychmiast zgłaszać naszemu zespołowi wszelkie uszkodzenia lub stłuczenia.",
      },
      {
        label: "Zgubiony klucz lub karta",
        text: "Koszt wymiany zgubionego klucza lub zgubionej karty plażowej wynosi USD 100, płatne bezpośrednio naszemu zespołowi.",
      },
      {
        label: "Uwaga o komarach na parterze",
        text: "Jeśli mieszkasz na parterze, trzymaj drzwi z siatką zamknięte, aby uniknąć komarów.",
      },
    ],
    actions: [
      {
        label: "Napisz do naszego zespołu na miejscu przez WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "resort-guide",
    title: "Przewodnik po resorcie",
    stage: "Korzystanie z Sharm Hills",
    summary: "Baseny, parking, udogodnienia resortu, dostawa z supermarketu i części wspólne.",
    guestNote: {
      title: "Wskazówki dotyczące Sharm Hills",
      text: "Ta strona zawiera informacje o wspólnych częściach resortu dla gości Casa Sole przebywających w Sharm Hills.",
    },
    details: [
      {
        label: "Basen",
        text: "Basen resortu jest otwarty od wschodu do zachodu słońca. Dzieci muszą być zawsze nadzorowane.",
      },
      {
        label: "Basen dla dzieci i zjeżdżalnie wodne",
        text: "Sharm Hills ma basen dla dzieci i mały aquapark dla dzieci ze zjeżdżalniami. Dzieci muszą być cały czas pilnowane przez rodzica lub opiekuna; Casa Sole i resort nie zastępują nadzoru rodziców.",
      },
      {
        label: "Parking",
        text: "Parking w Sharm Hills jest bezpłatny.",
      },
      {
        label: "Części wspólne",
        text: "Prosimy szanować przestrzeń osobistą i swobodę innych gości we wszystkich wspólnych częściach resortu.",
      },
      {
        label: "Restauracja i kawiarnia",
        text: "W Sharm Hills znajduje się restauracja/kawiarnia.",
      },
      {
        label: "Dostawa z supermarketu",
        text: "Jest supermarket/sklep z dostawą. Przy zamawianiu podaj numer apartamentu i budynku z informacji wydrukowanych za głównymi drzwiami.",
      },
      {
        label: "Zwierzęta na terenie resortu",
        text: "Zwierzęta muszą pozostawać na smyczy podczas pobytu i nie są dozwolone w basenie.",
      },
    ],
  },
  {
    slug: "beach-guide",
    title: "Przewodnik po plaży",
    stage: "Dni na plaży",
    summary: "Bezpłatny dostęp do Sinbad Beach, zasady karty, udogodnienia, transport i płatności na plaży.",
    guestNote: {
      title: "Bezpłatny dostęp do plaży",
      text: "Goście Casa Sole mają bezpłatny dostęp do Sinbad Beach dzięki karcie plażowej zapewnionej dla apartamentu. Zabierz kartę i pokaż ją przy wejściu.",
    },
    details: [
      {
        label: "Dojazd na plażę",
        text: "Sinbad Beach jest około 20 minut pieszo od Sharm Hills lub około 5 minut samochodem. Możesz użyć mapy albo poprosić nas o pomoc w zorganizowaniu płatnego przejazdu.",
      },
      {
        label: "Dostęp do plaży",
        text: "Dostęp do plaży jest bezpłatny dla gości objętych kartą plażową apartamentu. Przy wejściu pokaż kartę i powiedz, że jesteś rezydentem Sharm Hills.",
      },
      {
        label: "Udogodnienia na plaży",
        text: "Sinbad Beach ma toalety, kawiarnię, prysznic, centrum nurkowe, marinę snorkelingową i restaurację.",
      },
      {
        label: "Zakres karty",
        text: "Bezpłatny limit plażowy zależy od wielkości apartamentu. Apartamenty z jedną sypialnią zwykle mają jedną kartę dla 2 gości. Apartamenty z dwiema sypialniami zwykle mają dwie karty dla 4 gości.",
      },
      {
        label: "Leżaki i ręczniki",
        text: "Leżaki są bezpłatne dla objętych gości. Ręczniki plażowe są dostępne w apartamencie. Dodatkowe rzeczy lub dodatkowi goście są po stronie gościa.",
      },
      {
        label: "Jedzenie i napoje",
        text: "Wszelkie zamówienia z restauracji plażowej są płacone bezpośrednio przez gościa na miejscu.",
      },
      {
        label: "Jak dotrzeć",
        text: "Możesz dojść na plażę z mapą albo poprosić nas o płatny transport tam i z powrotem.",
      },
      {
        label: "Zgubiona karta",
        text: "Koszt wymiany zgubionej karty plażowej wynosi USD 100, płatne bezpośrednio naszemu zespołowi.",
      },
    ],
    photos: [
      {
        src: "/photos/beach/sinbad-beach-01.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-02.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-03.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-04.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-05.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-06.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-07.png",
        alt: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
      },
      {
        src: "/photos/beach/sinbad-beach-08.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-09.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-10.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-11.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-12.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-13.png",
        alt: "Zdjęcie Sinbad Beach",
      },
      {
        src: "/photos/beach/sinbad-beach-14.png",
        alt: "Zdjęcie Sinbad Beach",
      },
    ],
    actions: [
      {
        label: "Otwórz mapę Sinbad Beach",
        type: "map",
        href: "https://maps.app.goo.gl/rJGiKZrHu55RTSN18",
      },
      {
        label: "Poproś nas o przejazd",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
    ],
  },
  {
    slug: "explore-sharm",
    title: "Odkrywaj Sharm",
    stage: "Atrakcje i aktywności",
    summary: "Najlepsze rzeczy do zrobienia w Sharm El Sheikh, od wycieczek morskich po życie nocne.",
    guestNote: {
      title: "Odkrywaj Sharm z Casa Sole",
      text: "Sharm El Sheikh słynie ze snorkelingu, nurkowania, klubów plażowych, wycieczek pustynnych, Old Market, SOHO Square i spokojnego życia nocnego. Casa Sole nie prowadzi wycieczek bezpośrednio, ale możemy pomóc zrozumieć opcje i zorganizować transport w razie potrzeby.",
    },
    details: [
      {
        label: "Jak korzystać z tego przewodnika",
        text: "Użyj poniższych kart, aby porównać odległość, przewidywany czas wizyty i dopasowanie przed wyborem miejsca.",
      },
      {
        label: "Rezerwacja atrakcji",
        text: "Casa Sole nie prowadzi wycieczek bezpośrednio. Przy wycieczkach lub aktywnościach potwierdź przed rezerwacją godzinę odbiór, zawartość i cenę.",
      },
      {
        label: "Potrzebujesz pomocy w wyborze?",
        text: "Jeśli nie wiesz, co pasuje do Twojej grupy, zapytaj nas, a pomożemy zdecydować.",
      },
      {
        label: "Wskazówka o jedzeniu i wodzie",
        text: "Nie pij wody z kranu. Owoce lub jedzenie płukane wodą z kranu opłucz dodatkowo wodą butelkowaną, jeśli to możliwe.",
      },
      {
        label: "Ochrona przed słońcem",
        text: "Słońce nad Morzem Czerwonym jest mocne. Zabierz krem z filtrem, okulary przeciwsłoneczne i kapelusz, szczególnie na plażę, łódź i pustynię.",
      },
      {
        label: "Napiwki i ceny",
        text: "Napiwki są powszechne w miejscach turystycznych. Na targach i przy pamiątkach nie bój się grzecznie targować; negocjowanie jest częścią doświadczenia.",
      },
      {
        label: "Wizyty na pustyni i w meczecie",
        text: "Załóż długie spodnie na przejażdżkę wielbłądem. Kobiety mogą zabrać chustę do zakrycia włosów na pustyni i podczas wizyt w meczetach.",
      },
      {
        label: "Plany nurkowe",
        text: "Zaplanuj nurkowanie z wyprzedzeniem, szczególnie jeśli potrzebujesz licencjonowanego centrum, sprzętu, instruktażu dla początkujących lub wymogów certyfikacyjnych.",
      },
    ],
    exploreItems: [
      {
        title: "SOHO Square",
        image: "/photos/explore/soho-square.jpg",
        categories: ["Wieczór", "Rodzina", "Restauracje"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 8-10 minut samochodem od Sharm Hills",
        visitTime: "1.5–3 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=SOHO%20Square%20Sharm%20El%20Sheikh",
      },
      {
        title: "Old Market",
        image: "/photos/explore/old-market.jpg",
        categories: ["Kultura", "Zakupy", "Wieczór"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 25-30 minut samochodem od Sharm Hills",
        visitTime: "1.5–3 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja dotycząca Al Sahaba Mosque może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Al Sahaba Mosque",
        image: "/photos/explore/al-sahaba-mosque.jpg",
        categories: ["Kultura", "Atrakcja", "Zdjęcia"],
        description:
          "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 25-30 minut samochodem od Sharm Hills",
        visitTime: "30–60 minut",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Al%20Sahaba%20Mosque%20Sharm%20El%20Sheikh",
      },
      {
        title: "Naama Bay",
        image: "/photos/explore/naama-bay.jpg",
        categories: ["Życie nocne", "Kawiarnie", "Spacer"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 18-22 minut samochodem od Sharm Hills",
        visitTime: "2–4 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Naama%20Bay%20Sharm%20El%20Sheikh",
      },
      {
        title: "Farsha Cafe",
        image: "/photos/explore/farsha-cafe.jpg",
        categories: ["Życie nocne", "Kawiarnia", "Zachód słońca"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 30-35 minut samochodem od Sharm Hills",
        visitTime: "1.5–3 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Farsha%20Cafe%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Mohammed National Park",
        image: "/photos/explore/ras-mohammed.jpg",
        categories: ["Morze i plaża", "Natura", "Wycieczka jednodniowa"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 45-60 minut samochodem od Sharm Hills",
        visitTime: "6–8 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Mohammed%20National%20Park%20Sharm%20El%20Sheikh",
      },
      {
        title: "White Island Boat Trip",
        image: "/photos/explore/white-island.jpg",
        categories: ["Morze i plaża", "Rejs", "Snorkeling"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Miejsce odbiór zależy od organizatora",
        visitTime: "6–8 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=White%20Island%20Sharm%20El%20Sheikh",
      },
      {
        title: "Diving and Snorkeling",
        image: "/photos/explore/diving-snorkeling.jpg",
        categories: ["Morze i plaża", "Przygoda", "Nurkowanie"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Odbiór zależy od centrum nurkowego lub lokalizacji plaży",
        visitTime: "3–7 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=diving%20center%20Sharm%20El%20Sheikh",
      },
      {
        title: "Desert Safari",
        image: "/photos/explore/desert-safari.jpg",
        categories: ["Przygoda", "Pustynia", "Rodzina"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Odbiór zależy od organizatora",
        visitTime: "3–5 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=desert%20safari%20Sharm%20El%20Sheikh",
      },
      {
        title: "Sharm El Sheikh Museum",
        image: "/photos/explore/sharm-museum.jpg",
        categories: ["Kultura", "Wewnątrz", "Rodzina"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 15-20 minut samochodem od Sharm Hills",
        visitTime: "1–2 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20Museum",
      },
      {
        title: "Heavenly Cathedral",
        image: "/photos/explore/heavenly-cathedral.jpg",
        categories: ["Kultura", "Atrakcja", "Spokojnie"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 20-25 minut samochodem od Sharm Hills",
        visitTime: "30–60 minut",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Heavenly%20Cathedral%20Sharm%20El%20Sheikh",
      },
      {
        title: "Shark's Bay / Ras Um Sid",
        image: "/photos/explore/sharks-bay-ras-um-sid.jpg",
        categories: ["Morze i plaża", "Snorkeling", "Kluby plażowe"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 10-30 minut samochodem w zależności od miejsca",
        visitTime: "3–5 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Um%20Sid%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dahab / Blue Hole",
        image: "/photos/explore/dahab-blue-hole.jpg",
        categories: ["Wycieczka jednodniowa", "Przygoda", "Morze i plaża"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 1.5-2 godzin samochodem od Sharm Hills",
        visitTime: "Cały dzień",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue%20Hole%20Dahab",
      },
      {
        title: "Mount Sinai / St Catherine",
        image: "/photos/explore/mount-sinai.jpg",
        categories: ["Wycieczka jednodniowa", "Kultura", "Przygoda"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 3+ godzin samochodem od Sharm Hills",
        visitTime: "Z noclegiem lub cały dzień",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mount%20Sinai%20Saint%20Catherine%20Egypt",
      },
      {
        title: "Hollywood Sharm",
        image: "/photos/explore/hollywood-sharm.jpg",
        categories: ["Wieczór", "Rodzina", "Zdjęcia"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 15-20 minut samochodem od Sharm Hills",
        visitTime: "1–2 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Hollywood%20Sharm%20El%20Sheikh",
      },
      {
        title: "Ras Ghozlani",
        image: "/photos/explore/ras-ghozlani.jpg",
        categories: ["Morze i plaża", "Snorkeling", "Nurkowanie"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 45-60 minut samochodem, zwykle odwiedzane łodzią lub zorganizowaną wycieczką do Ras Mohammed",
        visitTime: "Cały dzień z operatorem łodzi lub nurkowania",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ras%20Ghozlani%20Sharm%20El%20Sheikh",
      },
    ],
    actions: [
      {
        label: "Otwórz mapę Sharm",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=things%20to%20do%20in%20Sharm%20El%20Sheikh",
      },
      {
        label: "Zapytaj Casa Sole",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "restaurants",
    title: "Restauracje",
    stage: "Jedzenie poza domem",
    summary: "Polecane przez Casa Sole miejsca z jedzeniem w Sharm: owoce morza, burgery, włoskie, egipski grill i piekarnie.",
    guestNote: {
      title: "Przewodnik kulinarny dla gości",
      text: "Casa Sole nie zapewnia jedzenia, zakupów ani dostawy. To sugerowane miejsca, które pomagają gościom wybrać; kontaktuj się bezpośrednio z restauracjami w sprawie rezerwacji, dostawy, godzin i płatności.",
    },
    details: [
      {
        label: "Przed wyjściem",
        text: "Godziny otwarcia, menu, ceny i dostępność dostawy mogą się zmieniać. Sprawdź bezpośrednio przed wyjazdem lub zamówieniem.",
      },
      {
        label: "Transport",
        text: "Goście organizują własną taksówkę lub przejazd. Casa Sole może pomóc ogólnymi wskazówkami, ale rachunek w restauracji, dostawa i transport są płacone bezpośrednio przez gościa.",
      },
      {
        label: "Bezpieczeństwo jedzenia",
        text: "W przypadku owoców morza, surowych potraw lub alergii zapytaj restaurację jasno przed zamówieniem. Rodziny z dziećmi powinny wybierać proste dania, gdy nie są pewne.",
      },
    ],
    exploreItems: [
      {
        title: "Fares Seafood - Old Market",
        image: "/photos/restaurants/fares-seafood-old-market.jpg",
        categories: ["Owoce morza", "Old Market", "Rodzina"],
        description:
          "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 25-30 minut samochodem od Sharm Hills",
        visitTime: "1.5–2.5 godzin",
        bestFor: "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja dotycząca Al Sahaba Mosque może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fares%20Seafood%20Old%20Market%20Sharm%20El%20Sheikh",
      },
      {
        title: "Wild West Sharm El Sheikh",
        image: "/photos/restaurants/wild-west-sharm.jpg",
        categories: ["Burger", "Amerykańskie", "Rodzina"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 12-18 minut samochodem od Sharm Hills",
        visitTime: "1–2 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wild%20West%20Sharm%20El%20Sheikh%20El%20Salam%20Road",
      },
      {
        title: "Impasto Sharm el-Sheikh",
        image: "/photos/restaurants/impasto-sharm.jpg",
        categories: ["Włoskie", "Pizza", "Swobodnie"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 15-25 minut samochodem od Sharm Hills, w zależności od ruchu",
        visitTime: "1–2 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Impasto%20Sharm%20el-Sheikh",
      },
      {
        title: "Fleur De Lis",
        image: "/photos/restaurants/fleur-de-lis.jpg",
        categories: ["Owoce morza", "Steak", "Premium"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 12-18 minut samochodem od Sharm Hills",
        visitTime: "2–3 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fleur%20De%20Lis%20Sultan%20Gardens%20Sharm%20El%20Sheikh",
      },
      {
        title: "Rangoli",
        image: "/photos/restaurants/rangoli.jpg",
        categories: ["Indyjskie", "Azjatyckie", "Premium"],
        description:
          "Ta opcja dotycząca Naama Bay może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 18-22 minut samochodem od Sharm Hills",
        visitTime: "2–3 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Rangoli%20Sharm%20El%20Sheikh",
      },
      {
        title: "Boharat Restaurant",
        image: "/photos/restaurants/boharat-restaurant.jpg",
        categories: ["Egipskie", "Grill", "Rodzina"],
        description:
          "Ta opcja dotycząca Naama Bay może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 18-22 minut samochodem od Sharm Hills",
        visitTime: "1.5–2.5 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Boharat%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "Dananeer Seafood & Steak House",
        image: "/photos/restaurants/dananeer-seafood-steak.jpg",
        categories: ["Owoce morza", "Steak", "Naama Bay"],
        description:
          "Ta opcja dotycząca Naama Bay może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 18-22 minut samochodem od Sharm Hills",
        visitTime: "1.5–2.5 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dananeer%20Seafood%20Steak%20House%20Sharm%20El%20Sheikh",
      },
      {
        title: "Pomodoro",
        image: "/photos/restaurants/pomodoro.jpg",
        categories: ["Włoskie", "Pizza", "Naama Bay"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 18-22 minut samochodem od Sharm Hills",
        visitTime: "1–2 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pomodoro%20Sharm%20El%20Sheikh",
      },
      {
        title: "Camel Rooftop",
        image: "/photos/restaurants/camel-rooftop.jpg",
        categories: ["Międzynarodowe", "Rooftop", "Życie nocne"],
        description:
          "Ta opcja dotycząca Naama Bay może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 18-22 minut samochodem od Sharm Hills",
        visitTime: "1.5–3 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Camel%20Rooftop%20Sharm%20El%20Sheikh",
      },
      {
        title: "Fairuz Finest Lebanese Cuisine",
        image: "/photos/restaurants/fairuz-lebanese.jpg",
        categories: ["Libańskie", "Bliskowschodnie", "Naama Bay"],
        description:
          "Ta opcja dotycząca Naama Bay może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 18-22 minut samochodem od Sharm Hills",
        visitTime: "1.5–2.5 godzin",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Fairuz%20Finest%20Lebanese%20Cuisine%20Sharm%20El%20Sheikh",
      },
      {
        title: "El Masrien Grill Restaurant",
        image: "/photos/restaurants/el-masrien-grill.jpg",
        categories: ["Egipskie", "Grill", "Old Market"],
        description:
          "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 25-30 minut samochodem od Sharm Hills",
        visitTime: "1.5–2 godzin",
        bestFor: "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja dotycząca Old Market może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El%20Masrien%20Grill%20Restaurant%20Sharm%20El%20Sheikh",
      },
      {
        title: "German Bakery",
        image: "/photos/restaurants/german-bakery.jpg",
        categories: ["Piekarnia", "Kawiarnia", "Śniadanie"],
        description:
          "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        distance: "Około 20-30 minut samochodem od Sharm Hills",
        visitTime: "30–90 minut",
        bestFor: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        tip: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=German%20Bakery%20Sharm%20El%20Sheikh",
      },
    ],
  },
  {
    slug: "facilities-around-you",
    title: "Udogodnienia w pobliżu",
    stage: "Codzienne potrzeby w pobliżu",
    summary: "Pobliskie sklepy, apteka, pralnia, ATM, siłownia, bazar i przydatne usługi.",
    guestNote: {
      title: "Płać usługodawcom bezpośrednio",
      text: "Casa Sole nie zapewnia zakupów, jedzenia, pralni ani dostawy. Skontaktuj się z każdym dostawcą bezpośrednio i zapłać bezpośrednio.",
    },
    details: [
      {
        label: "Safeway Market",
        text: "Zakupy i codzienne potrzeby. Telefon: +20 120 025 2250. Niektóre miejsca mogą oferować darmową dostawę; zapytaj bezpośrednio podczas rozmowy.",
        mapLabel: "Otwórz mapę Safeway Market",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Russian Pharmacy",
        text: "Русская Аптека. Telefon: +20 107 095 3116.",
        mapLabel: "Otwórz mapę pharmacy",
        mapHref: "https://maps.app.goo.gl/L7kekyuAMFZjAVk59",
      },
      {
        label: "City Dry Clean",
        text: "Pralnia i czyszczenie chemiczne. Telefon: +20 128 732 4868.",
        mapLabel: "Otwórz mapę City Dry Clean",
        mapHref: "https://maps.app.goo.gl/bMjrN98QLJwTKtW17",
      },
      {
        label: "ATM",
        text: "ATM jest dostępny przy supermarkecie.",
        mapLabel: "Otwórz mapę ATM area",
        mapHref: "https://maps.app.goo.gl/dfVC5Y6fNarrfijv8",
      },
      {
        label: "Mango Juice & Fruits",
        text: "Sklep z sokami i owocami. Telefon: +20 100 938 3801.",
        mapLabel: "Otwórz mapę Mango Juice",
        mapHref: "https://maps.app.goo.gl/pX4THBR8j7AGLarn8",
      },
      {
        label: "Primal Fit Gym",
        text: "Siłownia w pobliżu. Telefon: +20 104 041 2617.",
        mapLabel: "Otwórz mapę Primal Fit Gym",
        mapHref: "https://maps.app.goo.gl/4xWStgnJTjkrf3pq8",
      },
      {
        label: "Delilah Bazar",
        text: "Bazar i zakupy. Telefon: +20 127 755 5334.",
        mapLabel: "Otwórz mapę Delilah Bazar",
        mapHref: "https://maps.app.goo.gl/ZecMDzmkJDtgqQbh6",
      },
      {
        label: "Mango Market & Shopping Mall",
        text: "Market i centrum handlowe. Telefon: +20 100 048 9214.",
        mapLabel: "Otwórz mapę Mango Market",
        mapHref: "https://maps.app.goo.gl/TNcwZZwJ6amKfxFG7",
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transport",
    stage: "Poruszanie się",
    summary: "Transfer lotniskowy, taksówki, transport publiczny i płatne lokalne przejazdy.",
    guestNote: {
      title: "Zaplanuj przed podróżą",
      text: "Odbiór lub odwiezienie na lotnisko można uzgodnić z Casa Sole za USD 15 zwykłym samochodem, maksymalnie dla 4 gości. Dodatkowi goście, większe grupy lub dodatkowy bagaż wymagają wcześniejszej koordynacji i mogą oznaczać dodatkowe opłaty. Ustal to wcześniej z Biurem rezerwacji.",
    },
    details: [
      {
        label: "Z lotniska do Sharm Hills",
        text: "Przejazd z Sharm El Sheikh International Airport do Sharm Hills Resort zajmuje około 5 minut.",
      },
      {
        label: "Taksówka z lotniska",
        text: "Koszt taksówki z lotniska może się różnić i być wyższy późno. Zawsze ustal cenę przed wejściem do auta.",
      },
      {
        label: "Transfer Casa Sole",
        text: "Casa Sole może pomóc w koordynacji odbioru lub odwiezienia na lotnisko za USD 15 zwykłym samochodem, maksymalnie dla 4 gości, po wcześniejszym uzgodnieniu. Dodatkowi goście, większe grupy lub dodatkowy bagaż wymagają osobnej koordynacji i mogą wiązać się z dodatkowymi opłatami.",
      },
      {
        label: "Transport miejski",
        text: "Możesz uzgodnić transport miejski z Casa Sole za dodatkową opłatą.",
      },
      {
        label: "Publiczna taksówka",
        text: "Publiczne taksówki są dostępne, ale stawki mogą być wyższe.",
      },
      {
        label: "Transport publiczny",
        text: "Transport publiczny jest dostępny w odległości spaceru od bramy resortu.",
      },
    ],
    actions: [
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    stage: "Najczęstsze pytania",
    summary: "Szybkie odpowiedzi o Wi-Fi, sprzątaniu, odwiedzających, checkout, karcie plażowej i wsparciu.",
    guestNote: {
      title: "Szybkie odpowiedzi",
      text: "To najczęstsze pytania gości Casa Sole. W pilnych sprawach podczas pobytu napisz do naszego zespołu.",
    },
    details: [
      {
        label: "Gdzie jest Wi-Fi?",
        text: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
      },
      {
        label: "Czy mogę używać Wi-Fi do streamingu?",
        text: "Wi-Fi nadaje się do przeglądania i podstawowego użycia. Intensywny streaming nie jest gwarantowany. Router 5G z limitem może być dostępny za dodatkową opłatą przez nasz zespół.",
      },
      {
        label: "Czy sprzątanie jest wliczone?",
        text: "Codzienne sprzątanie nie jest wliczone. Czystość apartamentu podczas pobytu jest odpowiedzialnością gościa. Sprzątanie można zorganizować za dodatkową opłatą, w zależności od dostępności.",
      },
      {
        label: "Czy uzupełnienia są zapewnione?",
        text: "Nie. Uzupełnienia i materiały eksploatacyjne nie są zapewniane podczas pobytu.",
      },
      {
        label: "Czy mogę przedłużyć pobyt?",
        text: "W sprawie przedłużeń, zmian rezerwacji, wcześniejszego zameldowania lub późnego wymeldowanie skontaktuj się z Biurem rezerwacji.",
      },
      {
        label: "Czy mogę przyjmować odwiedzających?",
        text: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
      },
      {
        label: "Co jeśli zgubię klucz lub kartę plażową?",
        text: "Ta opcja może być przydatna podczas pobytu. Sprawdź godziny, cenę i dostępność przed wyjazdem.",
      },
      {
        label: "Co jeśli zabraknie wody lub prądu?",
        text: "Może to rzadko się zdarzyć, ponieważ woda i prąd są w okolicy usługami płatnymi. Napisz do naszego zespołu, a usługa zwykle wraca w około 5 minut.",
      },
      {
        label: "Z kim mam się skontaktować?",
        text: "W sprawach pobytu skontaktuj się z naszym zespołem. W sprawach rezerwacji, przedłużenia, transferu lotniskowego lub Booking.com skontaktuj się z Biurem rezerwacji.",
      },
    ],
    actions: [
      {
        label: "Napisz do naszego zespołu na miejscu przez WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "wymeldowanie",
    title: "Checkout",
    stage: "Opuszczenie apartamentu",
    summary: "Godzina wymeldowanie, lista apartamentu, klucze, karta plażowa, kontrola i opinia.",
    guestNote: {
      title: "Checkout time",
      text: "Oficjalna godzina wymeldowanie to maksymalnie 12:00. Późny wymeldowanie może być dostępny w zależności od dostępności i musi być uzgodniony wcześniej.",
    },
    details: [
      {
        label: "Przed wyjściem",
        text: "Prosimy wynieść śmieci, umyć użyte naczynia lub zostawić kuchnię czystą, wyłączyć klimatyzację i światła, zamknąć okna oraz drzwi balkonu lub tarasu i sprawdzić, czy nie zostały rzeczy osobiste.",
      },
      {
        label: "Klucze i karta plażowa",
        text: "Zwróć klucze i kartę dostępu na plażę w to samo miejsce lub tej samej osobie, od której je otrzymałeś, w koordynacji z zespołem Casa Sole.",
      },
      {
        label: "Wiadomość przed wyjściem",
        text: "Napisz do naszego zespołu przed opuszczeniem apartamentu.",
      },
      {
        label: "Kontrola",
        text: "Nasz zespół sprawdzi apartament przy wymeldowanie. Jeśli coś zostało uszkodzone lub rozbite, zgłoś to przed wyjazdem.",
      },
      {
        label: "Prośba o opinię",
        text: "Jeśli pobyt Ci się podobał, będziemy wdzięczni za opinię na platformie, przez którą dokonano rezerwacji. Pomaga to przyszłym gościom i wspiera Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Napisz do naszego zespołu na miejscu przez WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "airport-departure",
    title: "Wyjazd na lotnisko",
    stage: "Wyjazd z Sharm",
    summary: "Czas na lotnisko, koordynacja odwiezienie, informacje o bagażu i końcowe wskazówki.",
    guestNote: {
      title: "Zalecany czas",
      text: "Na loty zalecamy wyjazd z Sharm Hills 2,5–3 godziny przed godziną lotu. To najbezpieczniejsza opcja dla procedur lotniskowych, ruchu i zameldowanie.",
    },
    details: [
      {
        label: "Odwiezienie na lotnisko",
        text: "Casa Sole może pomóc zorganizować odwiezienie na lotnisko za USD 15 zwykłym samochodem, maksymalnie dla 4 gości, po wcześniejszym ustaleniu. Dodatkowi goście, większe grupy lub dodatkowy bagaż wymagają osobnej koordynacji i mogą oznaczać dodatkowe opłaty.",
      },
      {
        label: "Przed wyjazdem",
        text: "Upewnij się, że wymeldowanie jest zakończony, klucze i karta plażowa zwrócone, a rzeczy osobiste nie zostały.",
      },
      {
        label: "Paszporty i bagaż",
        text: "Przed opuszczeniem apartamentu sprawdź paszporty, telefony, ładowarki, bagaż i dokumenty osobiste.",
      },
      {
        label: "Mapa lotniska",
        text: "Użyj przycisku mapy lotniska, jeśli prowadzisz lub jedziesz taksówką.",
      },
      {
        label: "Status lotu na żywo",
        text: "Sprawdź status odlotu na żywo z Sharm El Sheikh International Airport przed wyjściem z apartamentu. Godziny lotów, opóźnienia i odwołania mogą się zmieniać, więc zawsze potwierdź u linii lotniczej.",
        linkLabel: "Odloty SSH na żywo",
        linkHref: "https://www.flightradar24.com/data/airports/ssh/departures",
      },
    ],
    actions: [
      {
        label: "Otwórz mapę lotniska",
        type: "map",
        href: "https://www.google.com/maps/search/?api=1&query=Sharm%20El%20Sheikh%20International%20Airport",
      },
      {
        label: "Poproś o przejazd",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "returning-guest-club",
    title: "Klub powracających gości",
    stage: "Po pobycie",
    summary: "Korzyści dla powracających gości, rejestracja karty rabatowej, komentarze, reklamacje i prośba o opinię.",
    guestNote: {
      title: "Zarejestruj się, skomentuj lub złóż skargę",
      text: "Wypełnij formularz Returning Guest Club, aby otrzymać specjalną kartę rabatową. Możesz też użyć formularza do komentarza lub reklamacji po pobycie, aby nasz zespół mógł właściwie zareagować.",
    },
    details: [
      {
        label: "Rabat dla powracających gości",
        text: "Powracający goście mogą otrzymać 15% zniżki przy rezerwacji z Casa Sole.",
      },
      {
        label: "Opcje rezerwacji",
        text: "Goście nadal mogą rezerwować przez Booking.com lub inną platformę, jeśli wolą. Korzyści Returning Guest Club obsługuje Reservation Office.",
      },
      {
        label: "Jak dołączyć",
        text: "Otwórz formularz rejestracyjny, wpisz imię i nazwisko, kraj, numer WhatsApp, email oraz komentarz lub reklamację, jeśli trzeba. Nasz zespół zachowa dane do ofert dla powracających gości i skontaktuje się w razie potrzeby.",
      },
      {
        label: "Komentarze lub reklamacje",
        text: "Tego samego formularza można użyć do komentarzy lub reklamacji. Opisz sprawę jasno, aby nasz zespół mógł ją sprawdzić i odpowiedzieć właściwym kanałem.",
      },
      {
        label: "Prośba o opinię",
        text: "Jeśli pobyt Ci się podobał, zostaw opinię na platformie, przez którą dokonano rezerwacji. Pomaga to przyszłym gościom i wspiera Casa Sole.",
      },
    ],
    actions: [
      {
        label: "Zarejestruj się, skomentuj lub odbierz kartę rabatową",
        type: "link",
        href: "https://forms.gle/J1S4TvptoHkyUvcM6",
      },
    ],
  },
  {
    slug: "discover-our-units",
    title: "Zobacz nasze apartamenty",
    stage: "Apartamenty Casa Sole",
    summary: "Otwórz oferty Casa Sole Sharm Hills, sprawdź zdjęcia, dostępność i ceny.",
    guestNote: {
      title: "Sprawdź oferty online",
      text: "Użyj tej strony, aby otworzyć oferty Casa Sole, obejrzeć zdjęcia, porównać wielkość apartamentów i sprawdzić dostępność lub ceny na żywo na Booking.com.",
    },
    details: [
      {
        label: "Apartament z jedną sypialnią: Casa Sole Sharm Hills Apt 1",
        text: "Odpowiednie dla gości szukających apartamentu Casa Sole z jedną sypialnią w Sharm Hills.",
        linkLabel: "Otwórz na Booking.com",
        linkHref: "https://www.booking.com/Share-iaytxwS",
      },
      {
        label: "Apartament z jedną sypialnią: Casa Sole Sharm Hills Apt 2",
        text: "Odpowiednie dla gości szukających apartamentu Casa Sole z jedną sypialnią w Sharm Hills.",
        linkLabel: "Otwórz na Booking.com",
        linkHref: "https://www.booking.com/Share-lm4Ed9y",
      },
      {
        label: "Apartament z jedną sypialnią: Casa Sole Sharm Hills Apt 3",
        text: "Odpowiednie dla gości szukających apartamentu Casa Sole z jedną sypialnią w Sharm Hills.",
        linkLabel: "Otwórz na Booking.com",
        linkHref: "https://www.booking.com/Share-wM3oJj",
      },
      {
        label: "Apartament z jedną sypialnią: Casa Sole Sharm Hills Apt 4",
        text: "Odpowiednie dla gości szukających apartamentu Casa Sole z jedną sypialnią w Sharm Hills.",
        linkLabel: "Otwórz na Booking.com",
        linkHref: "https://www.booking.com/Share-3WMTv7",
      },
      {
        label: "Apartament z dwiema sypialniami: Casa Sole Sharm Hills Apt 5",
        text: "Odpowiednie dla rodzin lub grup, które wolą apartament Casa Sole z dwiema sypialniami w Sharm Hills.",
        linkLabel: "Otwórz na Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%205",
      },
      {
        label: "Apartament z trzema sypialniami: Casa Sole Sharm Hills Apt 6",
        text: "Odpowiednie dla większych rodzin lub grup, które wolą apartament Casa Sole z trzema sypialniami w Sharm Hills.",
        linkLabel: "Otwórz na Booking.com",
        linkHref: "https://www.booking.com/searchresults.html?ss=Casa%20Sole%20Sharm%20Hills%20Apt%206",
      },
    ],
    actions: [
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
  {
    slug: "contact",
    title: "Kontakt z nami",
    stage: "Wsparcie",
    summary: "Mr. Magdy do wsparcia podczas pobytu, Reservation Office do spraw rezerwacji.",
    guestNote: {
      title: "Z kim się skontaktować",
      text: "Skontaktuj się z właściwym zespołem, abyśmy mogli pomóc szybciej.",
    },
    details: [
      {
        label: "Mr. Magdy",
        text: "W sprawach zameldowania, wsparcia podczas pobytu, lokalnej pomocy, problemów z apartamentem, konserwacji, kluczy, karty plażowej, routera 5G i pilnej pomocy. Telefon / WhatsApp: +20 100 130 8835.",
      },
      {
        label: "Biuro rezerwacji",
        text: "W sprawach zmian rezerwacji, przedłużeń, wcześniejszego zameldowania, późnego wymeldowania, koordynacji transferu lotniskowego, Returning Guest Club, Booking.com i innych platform. Telefon / WhatsApp: +20 111 416 1141.",
      },
      {
        label: "Przy ochronie",
        text: "Po przyjeździe do Sharm Hills powiedz, że masz rezerwację z Mr. Magdy, a następnie poproś ochronę o hala recepcji.",
      },
    ],
    actions: [
      {
        label: "Napisz do naszego zespołu na miejscu przez WhatsApp",
        type: "whatsapp",
        href: magdyWhatsapp,
      },
      {
        label: "Biuro rezerwacji",
        type: "whatsapp",
        href: reservationWhatsapp,
      },
    ],
  },
];

export function getJourneyItem(slug: string) {
  return journeyItems.find((item) => item.slug === slug);
}
