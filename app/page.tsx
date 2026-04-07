"use client";

import Link from "next/link";
import Image from "next/image";
import { Lock, Sparkles } from "lucide-react";
import { useCallback, useState, type ReactNode } from "react";
import dynamic from 'next/dynamic';

import { HOME_PAGE_DATA, type GridItem, type TemplateCard } from "@/lib/home-data";
import CopyPromptButton from "../components/copy-prompt-button";
import { LanguageSwitcher, useLanguage } from "@/components/language-switcher";
import { getTranslation } from "@/lib/translations";

// Lazy load modal - chỉ load khi cần
const UnlockContactModal = dynamic(
  () => import('@/components/unlock-contact-modal'),
  {
    ssr: false,
    loading: () => null
  }
);

const BRAND_NAME = "Trịnh Văn Hào";
const BRAND_LOGO_SRC = "/assets/images/assets/tvh.png";

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function NavHref({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  if (isExternalHref(href)) {
    return (
      <a className={className} href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

function isUnlimitedHref(href: string): boolean {
  return href.includes("/pages/pricing");
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function TemplateCardView({ item, onUnlock, index }: { item: TemplateCard; onUnlock: (title: string) => void; index: number }) {
  const language = useLanguage();
  const t = getTranslation(language);
  const [gifLoaded, setGifLoaded] = useState(false);

  // Priority cho 4 templates đầu tiên
  const isPriority = index < 4;

  // Tách PNG poster và GIF preview
  const posterImage = item.media.find(m => !m.isPreview); // PNG
  const previewGif = item.media.find(m => m.isPreview);   // GIF

  return (
    <article
      className={`rounded-3xl overflow-hidden card-hover flex flex-col border border-white/10 bg-neutral-900 shadow-[0_18px_40px_rgba(0,0,0,0.35)]${item.rowSpan2 ? " row-span-2" : ""}`}
    >
      <div
        className={`relative w-full rounded-xl overflow-hidden mb-3 ${item.rowSpan2 ? "aspect-[3/4] md:aspect-auto md:flex-1 md:min-h-0" : "aspect-[4/3]"}`}
      >
        {/* Skeleton loader */}
        {!posterImage && item.hasLoader && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}

        {/* PNG Poster - Load ngay, luôn hiển thị */}
        {posterImage && (
          <Image
            alt={posterImage.alt}
            className="absolute inset-0 w-full h-full object-cover object-top"
            decoding="async"
            fill
            loading={isPriority ? "eager" : "lazy"}
            priority={isPriority}
            quality={85}
            sizes={item.rowSpan2 ? "(max-width: 1024px) 50vw, 25vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
            src={posterImage.src}
            unoptimized
          />
        )}

        {/* GIF Preview - Load sau, fade in khi ready */}
        {previewGif && (
          <Image
            alt={previewGif.alt}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${gifLoaded ? 'opacity-100' : 'opacity-0'}`}
            decoding="async"
            fill
            fetchPriority="low"
            loading="lazy"
            onLoad={() => setGifLoaded(true)}
            quality={75}
            sizes={item.rowSpan2 ? "(max-width: 1024px) 50vw, 25vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
            src={previewGif.src}
            unoptimized
          />
        )}

        {/* Nếu chỉ có 1 media (GIF only) */}
        {item.media.length === 1 && !posterImage && (
          <Image
            alt={item.media[0].alt}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${gifLoaded ? 'opacity-100' : 'opacity-0'}`}
            decoding="async"
            fill
            loading="lazy"
            onLoad={() => setGifLoaded(true)}
            quality={75}
            sizes={item.rowSpan2 ? "(max-width: 1024px) 50vw, 25vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
            src={item.media[0].src}
            unoptimized
          />
        )}
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <h3 className="text-foreground font-bold text-lg truncate">{item.title}</h3>
          <span className="text-muted-foreground text-sm">{item.category}</span>
        </div>

        {item.action === "copy" ? (
          <CopyPromptButton
            className="flex items-center gap-1.5 bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground px-3 py-2 rounded-xl text-sm font-medium transition-colors disabled:opacity-50"
            title={item.title}
          />
        ) : (
          <button
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white/90 transition hover:border-white/30 hover:bg-white/15"
            onClick={() => onUnlock(item.title)}
            type="button"
          >
            <Lock className="h-4 w-4" />
            {t.cards.unlock}
          </button>
        )}
      </div>
    </article>
  );
}

function PromoCardView({ item }: { item: Extract<GridItem, { kind: "promo" }> }) {
  return (
    <a
      className="h-full flex items-start p-6 rounded-2xl border border-white/10 bg-neutral-900 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-500 ease-out group relative overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
      href={item.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(100% 100% at 0% 100%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 56%), linear-gradient(145deg, rgba(208,178,255,0.05), rgba(255,238,216,0.05), rgba(232,64,13,0.05))",
          mixBlendMode: "screen",
        }}
      />

      <div className="w-full h-full flex flex-col justify-between z-10">
        <div className="flex justify-center items-center h-[160px] mb-6 overflow-hidden">
          <Image
            alt={BRAND_NAME}
            className="w-auto h-full max-h-[140px] scale-[1.55] md:scale-[1.7] opacity-95 drop-shadow-2xl group-hover:scale-[1.9] group-hover:rotate-1 transition-transform duration-700 ease-out"
            src={BRAND_LOGO_SRC}
            unoptimized
            width={220}
            height={220}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-white text-xl font-bold leading-tight group-hover:text-purple-200 transition-colors duration-300">{item.title}</h3>
          <p className="text-white/60 text-sm font-medium">{item.subtitle}</p>
          <span className="w-fit mt-3 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-orange-400 hover:from-purple-400 hover:to-orange-300 text-white text-sm font-bold rounded-xl shadow-lg group-hover:shadow-orange-500/25 transition-all">
            {item.cta}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);
  const [selectedTemplateTitle, setSelectedTemplateTitle] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(12); // Chỉ hiển thị 12 items đầu tiên
  const language = useLanguage();
  const t = getTranslation(language);

  const openUnlockModal = useCallback((title?: string) => {
    setSelectedTemplateTitle(title ?? null);
    setIsUnlockModalOpen(true);
  }, []);

  const closeUnlockModal = useCallback(() => {
    setIsUnlockModalOpen(false);
  }, []);

  const loadMore = useCallback(() => {
    setVisibleItems(prev => Math.min(prev + 12, HOME_PAGE_DATA.gridItems.length));
  }, []);

  // Prevent rendering until translations are loaded
  if (!t || !t.hero) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-white/5 transition-all duration-500 hover:bg-background/90">
        <div className="w-full px-6 sm:px-8 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
          <Link className="flex items-center gap-3 sm:gap-4 min-w-0" href={HOME_PAGE_DATA.logoLink}>
            <Image
              alt={BRAND_NAME}
              className="h-10 sm:h-12 w-auto shrink-0 transition-transform duration-500 hover:scale-105"
              height={48}
              src={BRAND_LOGO_SRC}
              unoptimized
              width={160}
              style={{ objectFit: "contain" }}
              priority
            />
            <span className="font-[var(--font-display)] text-sm sm:text-base md:text-lg text-foreground tracking-[0.08em] whitespace-nowrap hover:text-purple-300 transition-colors duration-300">
              Promptverse
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {HOME_PAGE_DATA.menuLinks.map((menuLink, index) => {
              // Get translated label based on menu item
              let label = menuLink.text;
              if (menuLink.href.includes("/pages/backgrounds")) {
                label = t.nav.backgrounds;
              } else if (menuLink.href.includes("/instructions")) {
                label = t.nav.instructions;
              } else if (menuLink.href.includes("/pages/pricing")) {
                label = t.nav.pricing;
              }

              if (isUnlimitedHref(menuLink.href)) {
                return (
                  <button
                    className="px-3 sm:px-4 py-2 text-muted-foreground text-sm font-medium rounded-lg hover:text-foreground hover:bg-white/5 transition-all duration-300 flex items-center group"
                    key={menuLink.href}
                    onClick={() => openUnlockModal(label)}
                    type="button"
                  >
                    <span className="relative group-hover:-translate-y-0.5 transition-transform duration-300 inline-block">{label}</span>
                  </button>
                );
              }

              return (
                <NavHref
                  className="px-3 sm:px-4 py-2 text-muted-foreground text-sm font-medium rounded-lg hover:text-foreground hover:bg-white/5 transition-all duration-300 flex items-center group"
                  href={menuLink.href}
                  key={menuLink.href}
                >
                  <span className="relative group-hover:-translate-y-0.5 transition-transform duration-300 inline-block">
                    {label}
                  </span>
                  {menuLink.isNew ? (
                    <span className="relative inline-flex items-center ml-1" style={{ top: 1 }}>
                      <span
                        className="absolute inset-0 pointer-events-none group-hover:opacity-80 transition-opacity"
                        style={{
                          background:
                            "radial-gradient(80.17% 109.2% at 44.373% 35.1526%, rgb(208, 178, 255) 0%, rgb(255, 238, 216) 42.83%, rgb(232, 64, 13) 88.38%)",
                          mask: "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
                          padding: 1,
                          borderRadius: 9999,
                        }}
                      />
                      <span
                        className="px-[5px] py-[1px] font-bold uppercase leading-none"
                        style={{
                          fontSize: 8,
                          backgroundImage:
                            "radial-gradient(80.17% 109.2% at 44.373% 35.1526%, rgb(208, 178, 255) 0%, rgb(255, 238, 216) 42.83%, rgb(232, 64, 13) 88.38%)",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        {t.nav.newBadge}
                      </span>
                    </span>
                  ) : null}
                </NavHref>
              );
            })}

            <button
              className="px-5 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 hover:scale-105 hover:bg-neutral-200 transition-all duration-300 ml-2"
              onClick={() => openUnlockModal(t.nav.unlimitedAccess)}
              type="button"
            >
              {t.nav.unlimitedAccess}
            </button>

            <LanguageSwitcher />
          </div>

          <button aria-label="Mở menu" className="md:hidden p-2 text-foreground" type="button">
            <MenuIcon />
          </button>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-6">
        <header className="flex flex-col items-center pt-12 sm:pt-16 pb-10">
          <p className="mb-2 text-muted-foreground text-sm font-medium">
            {t.hero.designedBy} <span className="text-foreground">{BRAND_NAME}</span>
          </p>

          <h1
            className="font-[var(--font-display)] text-[34px] sm:text-[56px] md:text-[68px] text-foreground text-center mb-4 font-extrabold leading-[1.12] sm:leading-[1.06] tracking-[0.015em]"
          >
            <span className="sm:hidden block">
              <span className="block mb-0.5">{t.hero.unlockPower}</span>
              <span className="block">{t.hero.aiDesign}</span>
            </span>
            <span className="hidden sm:block">
              {t.hero.unlockPower}
            </span>
            <span className="hidden sm:block">
              {t.hero.aiDesign}{" "}
              <span className="relative inline-block">
                <span
                  className="animate-gradient-shift font-[var(--font-art)] italic font-normal tracking-[0.045em]"
                  style={{
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundSize: "200% 200%",
                    backgroundImage:
                      "radial-gradient(80.17% 109.2% at var(--gradient-x, 44.373%) var(--gradient-y, 35.1526%), rgb(208, 178, 255) 0%, rgb(255, 238, 216) 42.83%, rgb(232, 64, 13) 88.38%)",
                    textShadow: "0 0 24px rgba(255, 203, 155, 0.25)",
                  }}
                >
                  {t.hero.breakthrough}
                </span>
              </span>
            </span>
            <span className="sm:hidden block">
              <span
                className="animate-gradient-shift font-[var(--font-art)] italic font-normal tracking-[0.045em]"
                style={{
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200% 200%",
                  backgroundImage:
                    "radial-gradient(80.17% 109.2% at var(--gradient-x, 44.373%) var(--gradient-y, 35.1526%), rgb(208, 178, 255) 0%, rgb(255, 238, 216) 42.83%, rgb(232, 64, 13) 88.38%)",
                  textShadow: "0 0 24px rgba(255, 203, 155, 0.25)",
                }}
              >
                {t.hero.breakthrough}
              </span>
            </span>
          </h1>

          <p className="text-muted-foreground font-medium text-center max-w-2xl mb-6 leading-relaxed text-[16px] tracking-[0.01em]">
            {t.hero.description}<br />{t.hero.descriptionLine2}
          </p>

          {isUnlimitedHref(HOME_PAGE_DATA.hero.ctaHref) ? (
            <button
              className="flex items-center justify-center gap-1 px-8 py-2 h-14 text-lg font-semibold rounded-full border-t-2 border-white cursor-pointer hover:opacity-90 transition-opacity mb-6"
              onClick={() => openUnlockModal(HOME_PAGE_DATA.hero.ctaText)}
              type="button"
            >
              <Sparkles className="h-4 w-4" />
              {HOME_PAGE_DATA.hero.ctaText}
            </button>
          ) : (
            <NavHref
              className="flex items-center justify-center gap-1 px-8 py-2 h-14 text-lg font-semibold rounded-full border-t-2 border-white cursor-pointer hover:opacity-90 transition-opacity mb-6"
              href={HOME_PAGE_DATA.hero.ctaHref}
            >
              {HOME_PAGE_DATA.hero.ctaText}
            </NavHref>
          )}
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pb-6" style={{ gridAutoRows: "auto" }}>
          {HOME_PAGE_DATA.gridItems.slice(0, visibleItems).map((item, index) =>
            item.kind === "template" ? (
              <TemplateCardView item={item} index={index} key={`${item.title}-${index}`} onUnlock={openUnlockModal} />
            ) : (
              <PromoCardView item={item} key={`promo-${index}`} />
            ),
          )}
        </section>

        {visibleItems < HOME_PAGE_DATA.gridItems.length && (
          <div className="flex justify-center pb-12">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-orange-400 hover:from-purple-400 hover:to-orange-300 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              type="button"
            >
              Xem thêm {Math.min(12, HOME_PAGE_DATA.gridItems.length - visibleItems)} mẫu →
            </button>
          </div>
        )}



        <footer className="border-t border-border py-8 mt-8 text-center text-sm text-muted-foreground">
          <p>{HOME_PAGE_DATA.footerText}</p>
        </footer>
      </div >

      <UnlockContactModal isOpen={isUnlockModalOpen} onClose={closeUnlockModal} sourceTitle={selectedTemplateTitle} />
    </main >
  );
}
