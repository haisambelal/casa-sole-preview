"use client";

import Link from "next/link";
import { useState } from "react";
import { brandSettings } from "../content/brandSettings";
import {
  getUiText,
  languageHomeUrl,
  languageModuleUrl,
  type LanguageCode,
} from "../content/i18n";

export function HomeGuestTools({ lang = "en" }: { lang?: LanguageCode }) {
  const t = getUiText(lang);
  const [shareMessage, setShareMessage] = useState(t.shareReady);

  async function copyGuideLink(shareUrl: string) {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareMessage(t.guideCopied);
    } catch {
      setShareMessage(t.copyFromBar);
    }
  }

  async function shareGuide() {
    const shareUrl = `${window.location.origin}${languageHomeUrl(lang)}`;
    const shareData = {
      title: brandSettings.appName,
      text: t.shareText,
      url: shareUrl,
    };

    try {
      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        setShareMessage(t.guideShared);
        return;
      }

      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage(t.guideShared);
        return;
      }

      await copyGuideLink(shareUrl);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        setShareMessage(t.shareCancelled);
        return;
      }

      await copyGuideLink(shareUrl);
    }
  }

  return (
    <section className="grid grid-cols-2 gap-3 px-5 pt-4">
      <button
        type="button"
        onClick={shareGuide}
        className="pressable rounded-2xl border border-[var(--border)] bg-white p-4 text-left shadow-xl shadow-[#173f8a]/10 transition hover:-translate-y-0.5 hover:border-[var(--sun-gold)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--soft-sky)] text-xl">
          ↗
        </span>
        <span className="mt-3 block text-base font-semibold text-[var(--casa-navy)]">
          {t.shareGuide}
        </span>
        <span className="mt-2 block text-xs leading-5 text-[var(--muted-text)]">
          {shareMessage}
        </span>
      </button>

      <Link
        href={languageModuleUrl("discover-our-units", lang)}
        className="pressable rounded-2xl border border-[var(--border)] bg-white p-4 text-left shadow-xl shadow-[#173f8a]/10 transition hover:-translate-y-0.5 hover:border-[var(--sun-gold)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--soft-sky)] text-xl">
          🏡
        </span>
        <span className="mt-3 block text-base font-semibold text-[var(--casa-navy)]">
          {t.discoverUnits}
        </span>
        <span className="mt-2 block text-xs leading-5 text-[var(--muted-text)]">
          {t.discoverUnitsText}
        </span>
      </Link>
    </section>
  );
}
