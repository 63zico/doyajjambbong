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

const languageShortLabel: Record<Locale, string> = {
  vi: "VN Vietnam",
  ko: "KR 한국",
  en: "US English"
};

const blogLabel: Record<Locale, string> = {
  vi: "Blog",
  ko: "블로그",
  en: "Blog"
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
          <div className="hidden rounded-full border border-ink/10 bg-white p-1 sm:flex" aria-label="Language switcher">
            {site.locales.map((lang) => (
              <Link
                key={lang}
                href={localizedPath(lang, slug)}
                hrefLang={lang}
                className={`rounded-full px-3 py-1 text-xs font-black ${
                  lang === locale ? "bg-chili text-white" : "text-ink/60 hover:text-ink"
                }`}
              >
                {languageShortLabel[lang]}
              </Link>
            ))}
          </div>
          <Link
            href={site.links.googleMaps}
            className="rounded-md bg-chili px-4 py-2 text-sm font-black text-white shadow-glow hover:bg-flame"
          >
            {copy.directions}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-2 sm:hidden" aria-label="Language switcher">
        {site.locales.map((lang) => (
          <Link
            key={lang}
            href={localizedPath(lang, slug)}
            hrefLang={lang}
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-black ${
              lang === locale ? "bg-chili text-white" : "border border-ink/10 bg-white text-ink/60"
            }`}
          >
            {languageShortLabel[lang]}
          </Link>
        ))}
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
