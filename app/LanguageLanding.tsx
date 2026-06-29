"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandSettings } from "../content/brandSettings";
import { getUiText, languageHomeUrl, languages } from "../content/i18n";

const colors = brandSettings.colors;

const brandVars = {
  "--casa-navy": colors.navy,
  "--sea-blue": colors.seaBlue,
  "--sky-blue": colors.skyBlue,
  "--soft-sky": colors.softSky,
  "--sun-gold": colors.sunGold,
  "--warm-sand": colors.warmSand,
  "--surface": colors.surface,
  "--text": colors.text,
  "--muted-text": colors.mutedText,
  "--border": colors.border,
} as CSSProperties;


function rememberLanguage(code: string) {
  window.localStorage.setItem("casaSoleLanguage", code);
}

export function LanguageLanding() {
  const t = getUiText("en");
  return (
    <main
      className="min-h-screen bg-[var(--warm-sand)] text-[var(--text)]"
      style={brandVars}
    >
      <div className="mx-auto min-h-screen max-w-md bg-[var(--surface)] shadow-2xl shadow-[#173f8a]/10">
        <section className="relative min-h-screen overflow-hidden bg-[var(--casa-navy)] px-5 py-8 text-white">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 78% 13%, ${colors.sunGold}cc, transparent 18%), radial-gradient(circle at 18% 0%, ${colors.skyBlue}88, transparent 34%), linear-gradient(160deg, ${colors.navy} 0%, ${colors.seaBlue} 54%, ${colors.skyBlue} 100%)`,
            }}
          />
          <div className="sun-orb" />
          <div className="real-palm-layer">
            <Image
              src={brandSettings.palmSilhouettePath}
              alt=""
              fill
              className="object-cover object-right-bottom"
              priority
            />
          </div>
          <div className="beach-sand" />
          <div className="absolute bottom-[-48px] left-[-12%] h-36 w-[124%] rounded-[50%] bg-white/18" />
          <div className="absolute bottom-[-72px] left-[-16%] h-36 w-[132%] rounded-[50%] bg-white/24" />

          <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col">
            <div className="flex justify-center pt-4">
              <div className="flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/20 bg-transparent p-1 shadow-2xl shadow-[#173f8a]/18">
                <Image
                  src={brandSettings.logoPath}
                  alt={`${brandSettings.brandName} logo`}
                  width={128}
                  height={128}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-3xl font-semibold leading-tight text-[#ffdda0]">
                Casa Sole Sharm Hills
              </p>
              <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">
                {t.chooseLanguage}
              </h1>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-white/78">
                {t.selectPreferred}
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {languages.map((language) => (
                <Link
                  key={language.code}
                  href={languageHomeUrl(language.code)}
                  onClick={() => rememberLanguage(language.code)}
                  className="pressable flex items-center justify-between rounded-2xl border border-white/25 bg-white/95 px-5 py-4 text-left text-[var(--casa-navy)] shadow-xl shadow-[#173f8a]/12"
                >
                  <span>
                    <span className="block text-base font-bold">
                      {language.nativeLabel}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-[#5b6673]">
                      {language.label}
                    </span>
                  </span>
                  <span className="rounded-full bg-[var(--sun-gold)] px-3 py-1 text-xs font-bold">
                    {t.open}
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-auto pt-8 text-center text-xs leading-5 text-white/64">
              {t.moreLanguages}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
