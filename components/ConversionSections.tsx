import Link from "next/link";
import { uiCopy } from "@/data/ui";
import { Locale, localizedPath, site } from "@/lib/site";

const phoneHref = `tel:${site.phone.replaceAll(" ", "")}`;

export function WhyDoya({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].why;

  return (
    <section className="bg-soy text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-brass">{copy.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">{copy.title}</h2>
            <p className="mt-5 text-sm leading-6 text-cream/75">
              {copy.body}
            </p>
            <Link href={localizedPath(locale, "menu")} className="mt-7 inline-flex rounded-md bg-chili px-5 py-3 text-sm font-black text-white">
              {copy.button}
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.items.map(([title, body]) => (
              <article key={title} className="rounded-lg border border-cream/15 bg-cream/5 p-5">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SpiceGuide({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].spice;

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">{copy.title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {copy.levels.map(([title, body], index) => (
            <article key={title} className="rounded-lg border border-ink/10 bg-white p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chili text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-black text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustStrip({ locale }: { locale: Locale }) {
  const stats = uiCopy[locale].trust;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([title, body]) => (
          <div key={title} className="rounded-lg border border-ink/10 p-5">
            <p className="text-2xl font-black text-chili">{title}</p>
            <p className="mt-2 text-sm font-bold text-ink/60">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StickyCta({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].cta;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-bone/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link href={site.links.kakao} className="rounded-md bg-[#FEE500] px-3 py-3 text-center text-xs font-black text-[#191600]">
          {copy.kakao}
        </Link>
        <Link href={site.links.delivery} className="rounded-md bg-chili px-3 py-3 text-center text-xs font-black text-white">
          {copy.zalo}
        </Link>
        <Link href={phoneHref} className="rounded-md bg-ink px-3 py-3 text-center text-xs font-black text-cream">
          {copy.phoneOrder}
        </Link>
      </div>
    </div>
  );
}
