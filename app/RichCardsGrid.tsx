"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { ExploreItem } from "../content/siteContent";
import { getUiText, type LanguageCode } from "../content/i18n";
import { ProtectedText } from "./ProtectedText";

export function RichCardsGrid({ items, lang = "en" }: { items: ExploreItem[]; lang?: LanguageCode }) {
  const t = getUiText(lang);
  const categories = useMemo(() => {
    const seen = new Set<string>();
    items.forEach((item) => {
      item.categories.forEach((category) => seen.add(category));
    });

    return [t.all, ...Array.from(seen)];
  }, [items, t.all]);

  const [activeCategory, setActiveCategory] = useState(t.all);

  useEffect(() => {
    setActiveCategory(t.all);
  }, [t.all]);

  const visibleItems =
    activeCategory === t.all
      ? items
      : items.filter((item) => item.categories.includes(activeCategory));

  return (
    <section className="px-5 pb-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1f77b4]">
          {t.filterBy}
        </p>
        <p className="text-xs font-semibold text-[#6b7581]">
          {t.showingOf.replace("{visible}", String(visibleItems.length)).replace("{total}", String(items.length))}
        </p>
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`pressable whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold transition ${
                isActive
                  ? "border-[#173f8a] bg-[#173f8a] text-white shadow-lg shadow-[#173f8a]/15"
                  : "border-[#b9d7ec] bg-white text-[#173f8a]"
              }`}
            >
              <ProtectedText text={category} />
            </button>
          );
        })}
      </div>

      <div className="space-y-5">
        {visibleItems.map((place) => (
          <article
            key={place.title}
            className="overflow-hidden rounded-3xl border border-[#d9e8f3] bg-white shadow-lg shadow-[#173f8a]/10"
          >
            <div className="relative aspect-[4/3] bg-[#e9f7fc]">
              <Image
                src={place.image}
                alt={place.title}
                fill
                sizes="(max-width: 480px) 90vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                <h2 className="text-2xl font-semibold text-white">
                  <ProtectedText text={place.title} />
                </h2>
              </div>
            </div>

            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {place.categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`pressable rounded-full px-3 py-1 text-[11px] font-bold transition ${
                      category === activeCategory
                        ? "bg-[#173f8a] text-white"
                        : "bg-[#e9f7fc] text-[#1f77b4]"
                    }`}
                  >
                    <ProtectedText text={category} />
                  </button>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-[#324252]">
                <ProtectedText text={place.description} />
              </p>

              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-2xl bg-[#f7efe0] p-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e9a925]">
                    {t.distance}
                  </p>
                  <p className="mt-1 font-semibold text-[#173f8a]">
                    <ProtectedText text={place.distance} />
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#e9f7fc] p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1f77b4]">
                      {t.visitTime}
                    </p>
                    <p className="mt-1 font-semibold text-[#173f8a]">
                      <ProtectedText text={place.visitTime} />
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#e9f7fc] p-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1f77b4]">
                      {t.bestFor}
                    </p>
                    <p className="mt-1 font-semibold text-[#173f8a]">
                      <ProtectedText text={place.bestFor} />
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 rounded-2xl border border-[#d9e8f3] bg-white p-3 text-sm leading-6 text-[#5b6673]">
                <span className="font-bold text-[#173f8a]">{t.casaSoleTip}:</span>{" "}
                <ProtectedText text={place.tip} />
              </p>

              <a
                href={place.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="pressable mt-4 block rounded-2xl bg-[#1f77b4] px-5 py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#1f77b4]/20"
              >
                {t.openMap}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
