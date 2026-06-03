import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "@/data/menu";
import { Locale } from "@/lib/site";

function spiceLabel(spice: MenuItem["spice"], locale: Locale) {
  if (locale === "ko") {
    if (spice >= 2) return "매운맛";
    return "순한맛";
  }

  if (locale === "vi") {
    if (spice >= 2) return "Cay";
    return "Không cay";
  }

  if (spice >= 2) return "Spicy";
  return "Mild";
}

export function MenuCard({ item, locale }: { item: MenuItem; locale: Locale }) {
  const displayName = locale === "vi" ? item.vietnameseName ?? item.name : item.name;
  const secondaryName = locale === "ko" ? item.koreanName : item.koreanName ?? item.name;
  const description =
    locale === "vi"
      ? item.descriptionVi ?? item.description
      : locale === "ko"
        ? item.descriptionKo ?? item.description
        : item.description;
  const detailLabel = locale === "vi" ? "Xem chi tiết" : locale === "ko" ? "자세히 보기" : "View details";
  return (
    <article className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-[4/3] overflow-hidden bg-soy">
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.name} at DOYA JJAMBBONG`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-soy p-6 text-center">
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-chili">DOYA JJAMBBONG</p>
              <p className="mt-3 text-2xl font-black text-cream">{displayName}</p>
              {item.vietnameseName ? <p className="mt-2 text-sm font-bold text-cream/70">{item.vietnameseName}</p> : null}
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-ink">{displayName}</h3>
            <p className="text-sm font-bold text-chili">{secondaryName}</p>
          </div>
          <span className="rounded-full bg-cream px-3 py-1 text-xs font-black text-chili">
            {spiceLabel(item.spice, locale)}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-ink/70">{description}</p>
        {item.price && item.price !== "Contact store" ? <p className="mt-3 text-sm font-black text-chili">{item.price}</p> : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-ink/10 px-2.5 py-1 text-xs font-bold text-ink/60">
              {tag}
            </span>
          ))}
        </div>
        {item.detailSlug ? (
          <Link
            href={`/${locale}/menu/${item.detailSlug}`}
            className="mt-5 inline-flex rounded-md border border-ink/10 bg-cream px-3 py-2 text-xs font-black text-ink hover:border-chili hover:text-chili"
          >
            {detailLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
