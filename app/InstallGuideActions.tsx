"use client";

import { useEffect, useState } from "react";
import { getUiText, type LanguageCode } from "../content/i18n";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
};

export function InstallGuideActions({ lang = "en" }: { lang?: LanguageCode }) {
  const t = getUiText(lang);
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [message, setMessage] = useState(t.saveInstruction);

  useEffect(() => {
    setMessage(t.saveInstruction);
  }, [t.saveInstruction]);

  useEffect(() => {
    const handlePrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handlePrompt);
    return () => window.removeEventListener("beforeinstallprompt", handlePrompt);
  }, []);

  async function handleAndroid() {
    if (installPrompt) {
      await installPrompt.prompt();
      setInstallPrompt(null);
      setMessage(t.installAppeared);
      return;
    }

    setMessage(t.androidSteps);
  }

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setMessage(t.iphoneSteps)}
          className="pressable rounded-2xl bg-white/20 px-3 py-3 text-center"
        >
          <span className="block text-xs font-bold text-white">iPhone</span>
          <span className="mt-1 block text-[11px] leading-4 text-white/78">
            {t.showSteps}
          </span>
        </button>
        <button
          type="button"
          onClick={handleAndroid}
          className="pressable rounded-2xl bg-white/20 px-3 py-3 text-center"
        >
          <span className="block text-xs font-bold text-white">Android</span>
          <span className="mt-1 block text-[11px] leading-4 text-white/78">
            {t.installGuide}
          </span>
        </button>
      </div>
      <p className="mt-3 rounded-2xl bg-white/18 px-3 py-2 text-xs font-semibold leading-5 text-white">
        {message}
      </p>
    </div>
  );
}
