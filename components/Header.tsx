import Image from "next/image";
import Link from "next/link";
import { navLabels } from "@/data/content";
import { uiCopy } from "@/data/ui";
import { Locale, PageSlug, site, localizedPath } from "@/lib/site";

const mainPaths: PageSlug[] = [
  "",
  "menu",
  "korean-food-delivery-ho-chi-minh",
  "late-night-korean-food-ho-chi-minh",
  "location-contact",
  "about"
];

const languageOptions: Record<Locale, { flagSrc: string; label: string; code: string }> = {
  vi: { flagSrc: "/images/flags/vn.svg", label: "Tiếng Việt", code: "VI" },
  ko: { flagSrc: "/images/flags/kr.svg", label: "한국어", code: "KO" },
  en: { flagSrc: "/images/flags/gb.svg", label: "English", code: "EN" },
  zh: { flagSrc: "/images/flags/cn.svg", label: "中文 (中国)", code: "CN" },
  ja: { flagSrc: "/images/flags/jp.svg", label: "日本語", code: "JP" }
};

const blogLabel: Record<Locale, string> = {
  vi: "Blog",
  ko: "블로그",
  en: "Blog",
  zh: "博客",
  ja: "ブログ"
};

export function Header({ locale, slug, activeSection }: { locale: Locale; slug: PageSlug; activeSection?: "blog" }) {
  const copy = uiCopy[locale].cta;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link href={localizedPath(locale)} className="flex min-w-0 items-center gap-3" aria-label="DOYA JJAMBBONG home">
          <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-md bg-chili shadow-glow">
            <Image
              src="/images/doya-header-logo.jpg"
              alt="DOYA JJAMBBONG logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black tracking-wide text-ink">{site.name}</span>
            <span className="block truncate text-xs font-semibold text-ink/60">{site.alternateName} District 1</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {mainPaths.map((path) => (
            <Link
              key={path}
              href={localizedPath(locale, path)}
              className={`rounded-md px-3 py-2 text-sm font-bold ${
                slug === path ? "bg-ink text-cream" : "text-ink/75 hover:bg-ink/5"
              }`}
            >
              {navLabels[locale][path]}
            </Link>
          ))}
          <Link
            href={`/${locale}/blog`}
            className={`rounded-md px-3 py-2 text-sm font-bold ${
              activeSection === "blog" ? "bg-ink text-cream" : "text-ink/75 hover:bg-ink/5"
            }`}
          >
            {blogLabel[locale]}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} slug={slug} />
          <Link
            href={site.links.googleMaps}
            className="rounded-md bg-chili px-4 py-2 text-sm font-black text-white shadow-glow hover:bg-flame"
          >
            {copy.directions}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 lg:hidden">
        {mainPaths.map((path) => (
          <Link
            key={path}
            href={localizedPath(locale, path)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-bold ${
              slug === path ? "border-chili bg-chili text-white" : "border-ink/10 bg-white text-ink/70"
            }`}
          >
            {navLabels[locale][path]}
          </Link>
        ))}
        <Link
          href={`/${locale}/blog`}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-bold ${
            activeSection === "blog" ? "border-chili bg-chili text-white" : "border-ink/10 bg-white text-ink/70"
          }`}
        >
          {blogLabel[locale]}
        </Link>
      </div>
    </header>
  );
}

function LanguageSwitcher({ locale, slug }: { locale: Locale; slug: PageSlug }) {
  const current = languageOptions[locale];

  return (
    <details className="group relative">
      <summary
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-2.5 py-1.5 text-sm font-black text-ink shadow-sm outline-none transition hover:bg-white [&::-webkit-details-marker]:hidden"
        aria-label="Language switcher"
      >
        <span className="relative h-6 w-6 overflow-hidden rounded-full shadow-sm ring-1 ring-ink/10">
          <Image src={current.flagSrc} alt="" fill sizes="24px" className="object-cover" />
        </span>
        <span className="hidden sm:inline">{current.code}</span>
        <span className="text-xs text-ink/60 transition group-open:rotate-180">⌄</span>
      </summary>
      <div className="absolute right-0 top-11 z-50 w-44 overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-2 shadow-2xl backdrop-blur">
        {site.locales.map((lang) => {
          const option = languageOptions[lang];

          return (
            <Link
              key={lang}
              href={localizedPath(lang, slug)}
              hrefLang={lang}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-bold transition ${
                lang === locale ? "bg-chili/10 text-chili" : "text-ink hover:bg-bone"
              }`}
            >
              <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-ink/10">
                <Image src={option.flagSrc} alt="" fill sizes="28px" className="object-cover" />
              </span>
              <span>{option.label}</span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}
