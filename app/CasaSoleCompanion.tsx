import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeGuestTools } from "./HomeGuestTools";
import { InstallGuideActions } from "./InstallGuideActions";
import { TopBar } from "./TopBar";
import { ProtectedText } from "./ProtectedText";
import { brandSettings } from "../content/brandSettings";
import { getSiteContent } from "./casaSoleData";
import { getUiText, languageHomeUrl, languageModuleUrl, type LanguageCode } from "../content/i18n";

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
  "--emergency": colors.emergency,
  "--whatsapp": colors.whatsapp,
} as CSSProperties;

function getFontClass() {
  if (brandSettings.fontStyle === "luxury") {
    return "font-luxury";
  }

  if (brandSettings.fontStyle === "clean") {
    return "font-clean";
  }

  return "font-modern";
}

function getHeroBackground() {
  if (brandSettings.heroMood === "sea") {
    return `radial-gradient(circle at 82% 12%, ${colors.sunGold}99, transparent 18%), linear-gradient(160deg, ${colors.navy} 0%, ${colors.seaBlue} 46%, ${colors.skyBlue} 100%)`;
  }

  if (brandSettings.heroMood === "sand") {
    return `radial-gradient(circle at 78% 12%, ${colors.sunGold}cc, transparent 20%), linear-gradient(160deg, ${colors.navy} 0%, ${colors.seaBlue} 54%, ${colors.warmSand} 100%)`;
  }

  return `radial-gradient(circle at 78% 12%, ${colors.sunGold}cc, transparent 18%), radial-gradient(circle at 20% 0%, ${colors.skyBlue}88, transparent 35%), linear-gradient(160deg, ${colors.navy} 0%, ${colors.seaBlue} 52%, ${colors.skyBlue} 100%)`;
}

function ModulePill({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="pressable rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--casa-navy)] shadow-sm transition hover:border-[var(--sun-gold)]"
    >
      <ProtectedText text={name} />
    </Link>
  );
}

function TimelineStep({
  item,
  index,
  lang,
  isLast,
}: {
  item: ReturnType<typeof getSiteContent>["journeyItems"][number];
  index: number;
  lang: LanguageCode;
  isLast: boolean;
}) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={languageModuleUrl(item.slug, lang)}
      className="pressable grid grid-cols-[44px_1fr] gap-4 rounded-3xl border border-[var(--border)] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--sun-gold)] hover:shadow-lg"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--casa-navy)] text-xs font-bold text-[var(--sun-gold)]">
          {stepNumber}
        </div>
        {!isLast ? (
          <div className="mt-3 h-full min-h-10 w-px bg-[var(--border)]" />
        ) : null}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9a925]">
          <ProtectedText text={item.stage} />
        </p>
        <div className="mt-1 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[var(--casa-navy)]">
            <ProtectedText text={item.title} />
          </h3>
          <span className="text-xl text-[#e9a925]">&gt;</span>
        </div>
        <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
          <ProtectedText text={item.summary} />
        </p>
      </div>
    </Link>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 px-5 py-8">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e9a925]">
        <ProtectedText text={eyebrow} />
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--casa-navy)]">
        <ProtectedText text={title} />
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function CasaSoleCompanion({ lang = "en" }: { lang?: LanguageCode }) {
  const t = getUiText(lang);
  const { appContent, journeyItems } = getSiteContent(lang);

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen bg-[var(--warm-sand)] text-[var(--text)] ${getFontClass()}`}
      style={brandVars}
    >
      <TopBar lang={lang} />
      <div className="mx-auto min-h-screen max-w-md bg-[var(--surface)] shadow-2xl shadow-[#173f8a]/10">
        <section className="relative min-h-[620px] overflow-hidden bg-[var(--casa-navy)] px-5 pb-8 pt-28 text-white">
          <div
            className="absolute inset-0"
            style={{ background: getHeroBackground() }}
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
          <div className="absolute bottom-[-44px] left-[-12%] h-36 w-[124%] rounded-[50%] bg-white/18" />
          <div className="absolute bottom-[-68px] left-[-16%] h-36 w-[132%] rounded-[50%] bg-white/24" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#173f8a]/80 to-transparent" />

          {brandSettings.enableMotion ? (
            <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
              <span className="animated-bird bird-one">
                <span className="bird-wing bird-wing-left" />
                <span className="bird-body" />
                <span className="bird-wing bird-wing-right" />
              </span>
              <span className="animated-bird bird-two">
                <span className="bird-wing bird-wing-left" />
                <span className="bird-body" />
                <span className="bird-wing bird-wing-right" />
              </span>
              <span className="animated-bird bird-three">
                <span className="bird-wing bird-wing-left" />
                <span className="bird-body" />
                <span className="bird-wing bird-wing-right" />
              </span>
              <span className="sea-line sea-line-one" />
              <span className="sea-line sea-line-two" />
              <span className="sea-line sea-line-three" />
            </div>
          ) : null}

          <div className="relative z-10 mt-0 flex h-40 w-40 items-center justify-center rounded-[2rem] border border-white/20 bg-transparent p-1 shadow-2xl shadow-[#173f8a]/18">
            <Image
              src={brandSettings.logoPath}
              alt={`${brandSettings.brandName} logo`}
              width={132}
              height={132}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="relative z-10 mt-8">
            <p className="text-sm font-medium text-[#ffdda0]">
              <ProtectedText text={t.digitalConcierge} />
            </p>
            <h1 className="mt-3 text-5xl font-semibold leading-[0.95] tracking-tight">
              <ProtectedText text={brandSettings.appName} />
            </h1>
            <p className="mt-5 max-w-xs text-base leading-7 text-white/80">
              <ProtectedText text={brandSettings.appSubtitle} />
            </p>
          </div>

          <div className="relative z-10 mt-10 rounded-[1.75rem] border border-white/25 bg-white/14 p-4 backdrop-blur-md">
            <p className="text-sm font-semibold text-[#ffdda0]">
              <ProtectedText text={appContent.privateInfoTitle} />
            </p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              <ProtectedText text={appContent.privateInfoText} />
            </p>
            <InstallGuideActions lang={lang} />
          </div>
        </section>

        <section className="-mt-12 grid grid-cols-2 gap-3 px-5">
          {appContent.quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href.startsWith("/sharmhills/") ? languageModuleUrl(action.href.replace("/sharmhills/", ""), lang) : action.href}
              className="pressable relative z-20 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-xl shadow-[#173f8a]/10 transition hover:-translate-y-0.5 hover:border-[var(--sun-gold)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--soft-sky)] text-xl">
                  {action.icon}
                </span>
                <p className="text-base font-semibold text-[var(--casa-navy)]">
                  <ProtectedText text={action.label} />
                </p>
              </div>
              <p className="mt-2 text-xs leading-5 text-[var(--muted-text)]">
                <ProtectedText text={action.detail} />
              </p>
            </Link>
          ))}
        </section>

        <HomeGuestTools lang={lang} />

        <Section id="journey" eyebrow={t.guestJourney} title={t.everythingYouNeed}>
          <div className="space-y-3">
            {journeyItems.map((item, index) => (
              <TimelineStep key={item.slug} item={item} index={index} lang={lang} isLast={index === journeyItems.length - 1} />
            ))}
          </div>
        </Section>

        <Section id="check-in" eyebrow={t.arrivalPlan} title={t.howToArrive}>
          <div className="rounded-3xl bg-[var(--soft-sky)] p-5">
            <ol className="space-y-4 text-sm font-semibold leading-6 text-[#1f2933]">
              {appContent.checkInPreview.map((item, index) => (
                <li key={item}>
                  <span className="font-bold text-[var(--casa-navy)]">
                    {index + 1}.{" "}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section id="support" eyebrow={t.support} title={t.whatsappSupport}>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--soft-sky)] p-5">
            <p className="text-sm font-semibold leading-6 text-[#1f2933]">
              <ProtectedText text={appContent.supportPreview} />
            </p>
            <div className="mt-4 grid gap-3">
              <a
                className="pressable rounded-2xl bg-[var(--whatsapp)] px-4 py-3 text-center text-sm font-semibold text-white"
                href="https://wa.me/201001308835"
              >
                <ProtectedText text={journeyItems.find((item) => item.slug === "arrival")?.actions?.find((action) => action.href.includes("201001308835"))?.label ?? "WhatsApp our onsite team"} />
              </a>
            </div>
          </div>
        </Section>

        <Section id="help" eyebrow={t.guide} title={t.frequentlyNeeded}>
          <div className="flex flex-wrap gap-2">
            <ModulePill name="FAQ" href={languageModuleUrl("faq", lang)} />
            <ModulePill name="Contact Us" href={languageModuleUrl("contact", lang)} />
            <ModulePill name="Returning Guest Club" href={languageModuleUrl("returning-guest-club", lang)} />
          </div>
          <div className="mt-5 space-y-3">
            {appContent.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-[var(--warm-sand)] p-4"
              >
                <h3 className="font-semibold text-[var(--casa-navy)]">
                  <ProtectedText text={item.title} />
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                  <ProtectedText text={item.text} />
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={t.contact} title={t.needHelp}>
          <div className="rounded-3xl bg-[var(--casa-navy)] p-5 text-white">
            <p className="text-sm leading-6 text-white/80">
              <ProtectedText text={appContent.contactPreview} />
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href="https://wa.me/201114161141"
                className="pressable rounded-2xl bg-[var(--sun-gold)] px-4 py-3 text-center text-sm font-semibold text-[var(--casa-navy)]"
              >
                <ProtectedText text={journeyItems.find((item) => item.slug === "arrival")?.actions?.find((action) => action.href.includes("201114161141"))?.label ?? "Reservation Office"} />
              </a>
            </div>
          </div>
        </Section>

        <nav className="sticky bottom-0 z-30 border-t border-[var(--border)] bg-white/95 px-4 py-3 backdrop-blur">
          <div className="grid grid-cols-5 text-center text-[11px] font-semibold text-[var(--muted-text)]">
            <Link className="text-[var(--casa-navy)]" href={languageHomeUrl(lang)}>
              {t.home}
            </Link>
            <a href="#journey">{t.journey}</a>
            <Link href={languageModuleUrl("explore-sharm", lang)}>{t.explore}</Link>
            <a href="#support">{t.support}</a>
            <Link href={languageModuleUrl("contact", lang)}>{t.contact}</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
