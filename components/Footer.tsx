import Link from "next/link";
import { navLabels } from "@/data/content";
import { uiCopy } from "@/data/ui";
import { Locale, paths, site, localizedPath } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].footer;
  return (
    <footer className="bg-soy text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-cream/75">
            {copy.description}
          </p>
        </div>
        <div>
          <p className="text-sm font-black uppercase text-brass">{copy.visit}</p>
          <p className="mt-3 text-sm text-cream/75">{site.address}</p>
          <p className="mt-1 text-sm text-cream/75">{site.openingHoursText}</p>
          <p className="mt-1 text-sm text-cream/75">{site.phone}</p>
          <p className="mt-1 text-sm text-cream/75">{site.email}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={site.links.official} className="text-sm font-bold text-cream/75 hover:text-white">
              Official
            </Link>
            <Link href={site.links.facebook} className="text-sm font-bold text-cream/75 hover:text-white">
              Facebook
            </Link>
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <p className="text-sm font-black uppercase text-brass">{copy.pages}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {paths.map((path) => (
              <Link key={path} href={localizedPath(locale, path)} className="text-sm text-cream/75 hover:text-white">
                {navLabels[locale][path]}
              </Link>
            ))}
            <Link href={`/${locale}/blog`} className="text-sm text-cream/75 hover:text-white">
              {locale === "ko" ? "블로그" : "Blog"}
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
