import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaRow } from "@/components/CtaRow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MenuCard } from "@/components/MenuCard";
import { menuDetails, menuDetailSlugs, menuDetailItemBySlug, menuDetailUrl, MenuDetailSlug } from "@/data/menu-details";
import { menuItems } from "@/data/menu";
import { restaurantJsonLd } from "@/lib/seo";
import { Locale, site } from "@/lib/site";

type PageParams = {
  locale: string;
  itemSlug: string;
};

function isMenuDetailSlug(slug: string): slug is MenuDetailSlug {
  return menuDetailSlugs.includes(slug as MenuDetailSlug);
}

function getMenuDetail(locale: Locale, itemSlug: string) {
  if (!site.locales.includes(locale) || !isMenuDetailSlug(itemSlug)) return null;
  const itemName = menuDetailItemBySlug[itemSlug];
  const item = menuItems.find((menuItem) => menuItem.name === itemName);
  const content = menuDetails[itemSlug][locale];
  if (!item || !content) return null;
  return { item, content, itemSlug };
}

export function generateStaticParams() {
  return site.locales.flatMap((locale) => menuDetailSlugs.map((itemSlug) => ({ locale, itemSlug })));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const routeParams = await params;
  const locale = routeParams.locale as Locale;
  const detail = getMenuDetail(locale, routeParams.itemSlug);
  if (!detail) return {};

  const languages = Object.fromEntries(site.locales.map((lang) => [lang, menuDetailUrl(lang, detail.itemSlug)]));
  const image = detail.item.image ? `${site.baseUrl}${detail.item.image}` : `${site.baseUrl}/images/menu/doya-menu-spread.jpg`;

  return {
    title: detail.content.title,
    description: detail.content.description,
    keywords: detail.content.keywords,
    metadataBase: new URL(site.baseUrl),
    alternates: {
      canonical: menuDetailUrl(locale, detail.itemSlug),
      languages: {
        ...languages,
        "x-default": menuDetailUrl(site.defaultLocale as Locale, detail.itemSlug)
      }
    },
    openGraph: {
      title: detail.content.title,
      description: detail.content.description,
      url: menuDetailUrl(locale, detail.itemSlug),
      siteName: site.name,
      locale,
      type: "article",
      images: [{ url: image, width: 1200, height: 900, alt: `${detail.item.name} at DOYA JJAMBBONG` }]
    },
    twitter: {
      card: "summary_large_image",
      title: detail.content.title,
      description: detail.content.description,
      images: [image]
    }
  };
}

function priceValue(price?: string) {
  const match = price?.match(/\d[\d,]*/);
  return match ? match[0].replace(/,/g, "") : undefined;
}

function menuItemJsonLd(locale: Locale, detail: NonNullable<ReturnType<typeof getMenuDetail>>) {
  const { item, content, itemSlug } = detail;
  return {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "@id": `${menuDetailUrl(locale, itemSlug)}#menu-item`,
    name: item.name,
    alternateName: [item.koreanName, item.vietnameseName, ...content.keywords].filter(Boolean),
    description: content.description,
    image: item.image ? `${site.baseUrl}${item.image}` : undefined,
    url: menuDetailUrl(locale, itemSlug),
    menuAddOn: item.tags,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: priceValue(item.price),
      availability: "https://schema.org/InStock",
      url: menuDetailUrl(locale, itemSlug)
    }
  };
}

function breadcrumbJsonLd(locale: Locale, detail: NonNullable<ReturnType<typeof getMenuDetail>>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Menu", item: `${site.baseUrl}/${locale}/menu` },
      { "@type": "ListItem", position: 3, name: detail.content.h1, item: menuDetailUrl(locale, detail.itemSlug) }
    ]
  };
}

function faqJsonLd(detail: NonNullable<ReturnType<typeof getMenuDetail>>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.content.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

export default async function MenuDetailPage({ params }: { params: Promise<PageParams> }) {
  const routeParams = await params;
  const locale = routeParams.locale as Locale;
  const detail = getMenuDetail(locale, routeParams.itemSlug);
  if (!detail) notFound();

  const relatedItems = menuItems
    .filter((item) => item.name !== detail.item.name && (item.category === detail.item.category || item.featured))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={restaurantJsonLd(locale)} />
      <JsonLd data={menuItemJsonLd(locale, detail)} />
      <JsonLd data={breadcrumbJsonLd(locale, detail)} />
      <JsonLd data={faqJsonLd(detail)} />
      <Header locale={locale} slug="menu" />
      <main>
        <section className="noise bg-cream">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-chili">{detail.content.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-ink md:text-6xl">{detail.content.h1}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{detail.content.intro}</p>
              {detail.item.price && detail.item.price !== "Contact store" ? (
                <p className="mt-5 text-xl font-black text-chili">{detail.item.price}</p>
              ) : null}
              <div className="mt-8">
                <CtaRow locale={locale} />
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink/10 bg-soy shadow-glow">
              <Image
                src={detail.item.image ?? "/images/menu/doya-menu-spread.jpg"}
                alt={`${detail.item.name} champong Korean food at DOYA JJAMBBONG District 1`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-2">
            <article className="rounded-lg border border-ink/10 bg-white p-6">
              <h2 className="text-2xl font-black text-ink">{detail.content.whyTitle}</h2>
              <p className="mt-3 leading-7 text-ink/70">{detail.content.whyBody}</p>
            </article>
            <article className="rounded-lg border border-ink/10 bg-soy p-6 text-cream">
              <h2 className="text-2xl font-black">{detail.content.searchTitle}</h2>
              <p className="mt-3 leading-7 text-cream/75">{detail.content.searchBody}</p>
            </article>
          </div>
        </section>

        <section className="bg-cream">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-3xl font-black text-ink">FAQ</h2>
            <div className="mt-6 space-y-4">
              {detail.content.faq.map((faq) => (
                <details key={faq.question} className="rounded-lg border border-ink/10 bg-white p-5">
                  <summary className="cursor-pointer text-lg font-black text-ink">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-ink/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto max-w-7xl px-4 py-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-chili">Related menu</p>
                <h2 className="mt-2 text-3xl font-black text-ink">More DOYA dishes</h2>
              </div>
              <Link href={`/${locale}/menu`} className="rounded-md border border-ink/10 bg-white px-4 py-2 text-sm font-black text-ink">
                Menu
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedItems.map((item) => (
                <MenuCard key={item.name} item={item} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
