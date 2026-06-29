import type { ReactNode } from "react";

const protectedTerms = [
  "Casa Sole Sharm Hills Apt 1",
  "Casa Sole Sharm Hills Apt 2",
  "Casa Sole Sharm Hills Apt 3",
  "Casa Sole Sharm Hills Apt 4",
  "Casa Sole Sharm Hills Apt 5",
  "Casa Sole Sharm Hills Apt 6",
  "Casa Sole Sharm Hills",
  "Casa Sole",
  "Sharm Hills Resort",
  "Sharm Hills",
  "Sharm El Sheikh International Airport",
  "Sharm El Sheikh Airport",
  "Sharm El Sheikh Museum",
  "Sharm El Sheikh",
  "Sinbad Beach",
  "SOHO Square",
  "Old Market",
  "Al Sahaba Mosque",
  "Naama Bay",
  "Farsha Cafe",
  "Ras Mohammed National Park",
  "White Island",
  "Sharm Museum",
  "Heavenly Cathedral",
  "Shark’s Bay",
  "Shark's Bay",
  "Ras Um Sid",
  "Ras Ghozlani",
  "Dahab",
  "Blue Hole",
  "Mount Sinai",
  "St Catherine",
  "Hollywood Sharm",
  "Fares Seafood",
  "Wild West Sharm El Sheikh",
  "Impasto Sharm el-Sheikh",
  "Fleur De Lis",
  "Rangoli",
  "Boharat Restaurant",
  "Dananeer Seafood & Steak House",
  "Pomodoro",
  "Camel Rooftop",
  "Fairuz",
  "El Masrien",
  "German Bakery",
  "Safeway Market",
  "Russian Pharmacy",
  "Русская Аптека",
  "City Dry Clean",
  "Mango Juice & Fruits",
  "Primal Fit Gym",
  "Delilah Bazar",
  "Mango Market & Shopping Mall",
  "Booking.com",
  "WhatsApp",
  "Wi-Fi",
  "5G",
  "USD",
  "Mr. Magdy",
  "Magdy",
];

const protectedPattern = new RegExp(
  `(${protectedTerms
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "g",
);

export function ProtectedText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  text.replace(protectedPattern, (match, _term, index) => {
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    parts.push(
      <span key={`${match}-${index}`} className="notranslate" translate="no">
        {match}
      </span>,
    );
    lastIndex = index + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
