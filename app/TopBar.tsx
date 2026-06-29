"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brandSettings } from "../content/brandSettings";
import {
  getUiText,
  languageHomeUrl,
  languages,
  type LanguageCode,
} from "../content/i18n";

type WeatherDay = {
  day: string;
  max: number;
  min: number;
};

const fallbackForecast: WeatherDay[] = [
  { day: "Today", max: 35, min: 27 },
  { day: "Sun", max: 35, min: 27 },
  { day: "Mon", max: 36, min: 28 },
  { day: "Tue", max: 36, min: 28 },
  { day: "Wed", max: 35, min: 27 },
];

function localeForLanguage(lang: LanguageCode) {
  const locales: Record<LanguageCode, string> = {
    en: "en", it: "it", ru: "ru", hu: "hu", tr: "tr", de: "de", fr: "fr", ro: "ro", pl: "pl", ar: "ar-EG",
  };
  return locales[lang] ?? "en";
}

function formatDay(value: string, lang: LanguageCode) {
  return new Intl.DateTimeFormat(localeForLanguage(lang), { weekday: "short" }).format(
    new Date(`${value}T12:00:00`),
  );
}

export function TopBar({ lang = "en" }: { lang?: LanguageCode }) {
  const t = getUiText(lang);
  const [forecast, setForecast] = useState<WeatherDay[]>(fallbackForecast);
  const [currentTemp, setCurrentTemp] = useState<number>(fallbackForecast[0].max);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    if (!brandSettings.weather.enabled) {
      return;
    }

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${brandSettings.weather.latitude}&longitude=${brandSettings.weather.longitude}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=${brandSettings.weather.timezone}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const days = data?.daily?.time?.map((day: string, index: number) => ({
          day: formatDay(day, lang),
          max: Math.round(data.daily.temperature_2m_max[index]),
          min: Math.round(data.daily.temperature_2m_min[index]),
        }));
        setForecast(days?.length ? days.slice(0, 5) : fallbackForecast);
        if (typeof data?.current?.temperature_2m === "number") {
          setCurrentTemp(Math.round(data.current.temperature_2m));
        }
      })
      .catch(() => setForecast(fallbackForecast));
  }, [lang]);

  return (
    <div className="fixed left-1/2 top-0 z-50 w-full max-w-md -translate-x-1/2 px-3 pt-3">
      <div className="relative rounded-3xl border border-white/20 bg-white/42 px-3 py-2 shadow-xl shadow-[#173f8a]/10 backdrop-blur-xl">
        <div className="grid grid-cols-[58px_1fr] gap-2">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-transparent">
            <Image
              src={brandSettings.logoPath}
              alt={`${brandSettings.brandName} logo`}
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="notranslate text-xs font-bold text-[#173f8a]" translate="no">
                Sharm El Sheikh
              </p>
              <div className="flex shrink-0 items-center gap-1.5">
                <p className="rounded-full bg-[#173f8a]/90 px-2.5 py-1 text-xs font-bold text-white">
                  {currentTemp}°C
                </p>
                <button
                  type="button"
                  onClick={() => setLanguageOpen((open) => !open)}
                  className="pressable rounded-full border border-[#173f8a]/20 bg-white/75 px-2.5 py-1 text-[11px] font-bold text-[#173f8a]"
                  aria-expanded={languageOpen}
                  aria-label={t.changeLanguage}
                >
                  {lang.toUpperCase()}
                </button>
              </div>
            </div>

            <div className="mt-1.5 px-1">
              <div className="grid grid-cols-5 text-center text-[9px] font-bold uppercase tracking-[0.06em] text-[#173f8a]">
                {forecast.slice(0, 5).map((item) => (
                  <span key={`day-${item.day}`}>{item.day}</span>
                ))}
              </div>
              <div className="mt-0.5 grid grid-cols-5 text-center text-[9px] font-bold text-[#173f8a]">
                {forecast.slice(0, 5).map((item) => (
                  <span key={`temp-${item.day}`}>
                    {item.max}/{item.min}°
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {languageOpen ? (
          <div className="absolute right-3 top-[calc(100%+8px)] z-50 w-44 overflow-hidden rounded-2xl border border-[#d9e8f3] bg-white shadow-2xl shadow-[#173f8a]/20">
            <Link
              href="/sharmhills"
              onClick={() => setLanguageOpen(false)}
              className="block border-b border-[#edf3f8] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#173f8a]"
            >
              {t.changeLanguage}
            </Link>
            {languages.map((language) => (
              <Link
                key={language.code}
                href={languageHomeUrl(language.code)}
                onClick={() => setLanguageOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#173f8a]"
              >
                <span className="notranslate" translate="no">{language.nativeLabel}</span>
                {language.code === lang ? (
                  <span className="rounded-full bg-[#e9f7fc] px-2 py-0.5 text-[10px]">
                    {t.active}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
