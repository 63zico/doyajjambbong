import Link from "next/link";
import { uiCopy } from "@/data/ui";
import { Locale, site } from "@/lib/site";

const phoneHref = `tel:${site.phone.replaceAll(" ", "")}`;

export function MapBlock({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].map;
  const cta = uiCopy[locale].cta;

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">{copy.title}</h2>
          <div className="mt-5 space-y-3 text-base leading-7 text-ink/75">
            <p>{copy.body1}</p>
            <p>{copy.body2}</p>
            <p>
              {copy.hours}: <strong>10:30 - 23:30</strong>
              <br />
              {copy.phone}: <strong>{site.phone}</strong>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={site.links.googleMaps} className="rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
              {copy.google}
            </Link>
            <Link href={phoneHref} className="rounded-md border border-ink/15 px-4 py-3 text-sm font-black text-ink">
              {cta.call}
            </Link>
            <Link href={site.links.delivery} className="rounded-md border border-ink/15 px-4 py-3 text-sm font-black text-ink">
              {cta.zalo}
            </Link>
            <Link href={site.links.facebookMessage} className="rounded-md border border-ink/15 px-4 py-3 text-sm font-black text-ink">
              {copy.facebook}
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-ink/10 bg-cream">
          <iframe
            title="DOYA JJAMBBONG Google Map"
            src={site.mapEmbed}
            className="block h-[360px] w-full border-0"
            loading="eager"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 bg-white p-4">
            <p className="text-sm font-bold text-ink/70">{site.address}</p>
            <Link href={site.links.googleMaps} className="rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
              {copy.google}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
