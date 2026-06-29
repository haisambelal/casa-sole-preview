import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroScene } from "../../HeroScene";
import { RichCardsGrid } from "../../RichCardsGrid";
import { TopBar } from "../../TopBar";
import { ProtectedText } from "../../ProtectedText";
import { brandSettings } from "../../../content/brandSettings";
import { getSiteContent } from "../../casaSoleData";
import { getUiText, languageHomeUrl, languageModuleUrl, normalizeLanguage } from "../../../content/i18n";

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
  return `radial-gradient(circle at 82% 10%, ${colors.sunGold}b8, transparent 18%), radial-gradient(circle at 15% 0%, ${colors.skyBlue}66, transparent 36%), linear-gradient(160deg, ${colors.navy} 0%, ${colors.seaBlue} 58%, ${colors.skyBlue} 100%)`;
}

function getActionClass(type: string) {
  if (type === "whatsapp") {
    return "bg-[#25d366] text-white shadow-lg shadow-[#25d366]/20";
  }

  if (type === "map") {
    return "bg-[#1f77b4] text-white shadow-lg shadow-[#1f77b4]/20";
  }

  return "bg-[#f4b83a] text-[#173f8a] shadow-lg shadow-[#f4b83a]/20";
}

export function generateStaticParams() {
  return getSiteContent("en").journeyItems.map((item) => ({ slug: item.slug }));
}

export default async function SharmHillsModulePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lang?: string }>;
}) {
  const { slug } = await params;
  const query = await searchParams;
  const lang = normalizeLanguage(query?.lang);
  const t = getUiText(lang);
  const { journeyItems } = getSiteContent(lang);
  const item = journeyItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const currentIndex = journeyItems.findIndex((entry) => entry.slug === slug);
  const previous = journeyItems[currentIndex - 1];
  const next = journeyItems[currentIndex + 1];
  const importantNoteClass =
    slug === "apartment-guide" ? "text-[#8b1e1e]" : "text-[#1f2933]";

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen bg-[var(--warm-sand)] text-[var(--text)] ${getFontClass()}`}
      style={brandVars}
    >
      <TopBar lang={lang} />
      <div className="mx-auto min-h-screen max-w-md bg-[var(--surface)] shadow-2xl shadow-[#173f8a]/10">
        <section className="relative overflow-hidden bg-[var(--casa-navy)] px-5 pb-8 pt-28 text-white">
          <div className="absolute inset-0" style={{ background: getHeroBackground() }} />
          <HeroScene slug={slug} />
          <div className="absolute bottom-[-54px] left-[-18%] h-28 w-[136%] rounded-[50%] bg-white/18" />

          <div className="relative z-10 flex items-center justify-between">
            <Link
              href={languageHomeUrl(lang)}
              className="pressable rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
            >
              <ProtectedText text={t.back} />
            </Link>
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[var(--sun-gold)] bg-transparent p-1 shadow-lg shadow-[#173f8a]/20">
              <Image
                src={brandSettings.logoPath}
                alt={`${brandSettings.brandName} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <p className="relative z-10 mt-12 text-sm font-medium text-[#ffdda0]">
            <ProtectedText text={item.stage} />
          </p>
          <h1 className="relative z-10 mt-3 text-4xl font-semibold leading-tight tracking-tight">
            <ProtectedText text={item.title} />
          </h1>
          <p className="relative z-10 mt-4 text-base leading-7 text-white/80">
            <ProtectedText text={item.summary} />
          </p>
        </section>

        <section className="px-5 py-6">
          <div className="rounded-3xl bg-[#e9f7fc] p-5">
            <p
              className={`text-xs font-bold uppercase tracking-[0.18em] ${importantNoteClass}`}
            >
              <ProtectedText text={item.guestNote.title} />
            </p>
            <p className={`mt-3 text-sm font-semibold leading-6 ${importantNoteClass}`}>
              <ProtectedText text={item.guestNote.text} />
            </p>
          </div>
        </section>

        {item.photos?.length ? (
          <section className="pb-6">
            <div className="px-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f77b4]">
                <ProtectedText text={t.photos} />
              </p>
            </div>
            <div className="mt-3 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {item.photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="min-w-[78%] snap-center overflow-hidden rounded-3xl bg-[#e9f7fc] shadow-lg shadow-[#173f8a]/10"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={360}
                    height={450}
                    className="aspect-[4/5] h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {item.exploreItems?.length ? (
          <RichCardsGrid items={item.exploreItems} lang={lang} />
        ) : null}

        <section className="px-5 pb-6">
          <div className="space-y-3">
            {item.details.map((detail, index) => (
              <article
                key={`${detail.label}-${index}`}
                className="rounded-2xl border border-[#d9e8f3] bg-white p-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9a925]">
                  <ProtectedText text={detail.label} />
                </p>
                <p className="mt-2 text-sm leading-6 text-[#324252]">
                  <ProtectedText text={detail.text} />
                </p>
                {detail.mapHref ? (
                  <a
                    href={detail.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable mt-4 block rounded-2xl bg-[#1f77b4] px-4 py-3 text-center text-xs font-bold text-white shadow-lg shadow-[#1f77b4]/15"
                  >
                    <ProtectedText text={detail.mapLabel ?? t.openMap} />
                  </a>
                ) : null}
                {detail.linkHref ? (
                  <a
                    href={detail.linkHref}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable mt-4 block rounded-2xl bg-[#f4b83a] px-4 py-3 text-center text-xs font-bold text-[#173f8a] shadow-lg shadow-[#f4b83a]/15"
                  >
                    <ProtectedText text={detail.linkLabel ?? t.openLink} />
                  </a>
                ) : null}
              </article>
            ))}
          </div>

          {item.actions?.length ? (
            <div className="mt-6 grid gap-3">
              {item.actions.map((action) => (
                <a
                  key={`${action.type}-${action.label}`}
                  href={action.href}
                  className={`pressable rounded-2xl px-5 py-4 text-center text-sm font-bold ${getActionClass(action.type)}`}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <ProtectedText text={action.label} />
                </a>
              ))}
            </div>
          ) : null}
        </section>

        <section className="grid grid-cols-2 gap-3 px-5 pb-24">
          {previous ? (
            <Link
              href={languageModuleUrl(previous.slug, lang)}
              className="pressable rounded-2xl border border-[#b9d7ec] px-4 py-3 text-sm font-semibold text-[#173f8a]"
            >
              <ProtectedText text={t.previous} />
              <span className="mt-1 block text-xs font-normal text-[#6b7581]">
                <ProtectedText text={previous.title} />
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={languageModuleUrl(next.slug, lang)}
              className="pressable rounded-2xl bg-[#173f8a] px-4 py-3 text-right text-sm font-semibold text-white"
            >
              <ProtectedText text={t.next} />
              <span className="mt-1 block text-xs font-normal text-white/70">
                <ProtectedText text={next.title} />
              </span>
            </Link>
          ) : (
            <Link
              href={languageHomeUrl(lang)}
              className="pressable rounded-2xl bg-[#173f8a] px-4 py-3 text-right text-sm font-semibold text-white"
            >
              <ProtectedText text={t.finish} />
              <span className="mt-1 block text-xs font-normal text-white/70">
                <ProtectedText text={t.backHome} />
              </span>
            </Link>
          )}
        </section>

        <nav className="sticky bottom-0 z-30 border-t border-[#d9e8f3] bg-white/95 px-4 py-3 backdrop-blur">
          <div className="grid grid-cols-5 text-center text-[11px] font-semibold text-[#5b6673]">
            <Link className="text-[#173f8a]" href={languageHomeUrl(lang)}>
              {t.home}
            </Link>
            <Link href={`${languageHomeUrl(lang)}#journey`}>{t.journey}</Link>
            <Link href={languageModuleUrl("explore-sharm", lang)}>{t.explore}</Link>
            <Link href={languageModuleUrl("contact", lang)}>{t.support}</Link>
            <Link href={languageModuleUrl("contact", lang)}>{t.contact}</Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
