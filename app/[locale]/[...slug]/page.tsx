import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BranchNetwork } from "@/components/BranchNetwork";
import { CtaRow, OrderMethodButtons } from "@/components/CtaRow";
import { SpiceGuide, StickyCta, TrustStrip, WhyDoya } from "@/components/ConversionSections";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MapBlock } from "@/components/MapBlock";
import { MenuCard } from "@/components/MenuCard";
import { pageContent } from "@/data/content";
import { faqs } from "@/data/faq";
import { menuCategoryLabels, menuCategoryOrder, menuItems } from "@/data/menu";
import { uiCopy } from "@/data/ui";
import { branchesJsonLd, breadcrumbJsonLd, faqJsonLd, menuJsonLd, metadataFor, restaurantJsonLd } from "@/lib/seo";
import { Locale, PageSlug, paths, site } from "@/lib/site";

type PageParams = {
  locale: string;
  slug?: string[];
};

function normalizeSlug(slug?: string[]): PageSlug | null {
  const joined = slug?.join("/") ?? "";
  return paths.includes(joined as PageSlug) ? (joined as PageSlug) : null;
}

export function generateStaticParams() {
  return site.locales.flatMap((locale) =>
    paths
      .filter((slug) => slug !== "")
      .map((slug) => ({
        locale,
        slug: [slug]
      }))
  );
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const routeParams = await params;
  const locale = routeParams.locale as Locale;
  const slug = normalizeSlug(routeParams.slug);
  if (!site.locales.includes(locale) || slug === null) return {};
  return metadataFor(locale, slug);
}

export default async function ContentPage({ params }: { params: Promise<PageParams> }) {
  const routeParams = await params;
  const locale = routeParams.locale as Locale;
  const slug = normalizeSlug(routeParams.slug);
  if (!site.locales.includes(locale) || slug === null) notFound();

  return (
    <>
      <JsonLd data={restaurantJsonLd(locale)} />
      <JsonLd data={breadcrumbJsonLd(locale, slug)} />
      {slug === "menu" ? <JsonLd data={menuJsonLd(locale)} /> : null}
      {slug === "faq" ? <JsonLd data={faqJsonLd(locale)} /> : null}
      {slug === "branches" || slug === "" ? <JsonLd data={branchesJsonLd(locale)} /> : null}
      <Header locale={locale} slug={slug} />
      {slug === "" ? <HomePage locale={locale} /> : <InnerPage locale={locale} slug={slug} />}
      <Footer locale={locale} />
      <StickyCta locale={locale} />
    </>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const page = pageContent[locale][""];
  const copy = uiCopy[locale];

  return (
    <main>
      <section className="noise overflow-hidden bg-bone">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:grid-cols-[1fr_0.9fr] lg:min-h-[calc(100vh-84px)] lg:gap-10 lg:py-12">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {copy.badges.map((badge, index) => (
                <span
                  key={badge}
                  className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${
                    index === 0 ? "bg-chili text-white" : "border border-ink/10 bg-white text-ink/70"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-sm font-black uppercase tracking-wide text-chili">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] text-ink md:text-5xl lg:text-7xl">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75 lg:text-lg lg:leading-8">{page.subtitle}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/70 lg:text-base lg:leading-7">{page.summary}</p>
            <div className="mt-6">
              <CtaRow locale={locale} />
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-ink/10 bg-soy shadow-glow">
              <Image
                src="/images/menu/doya-menu-spread.jpg"
                alt="DOYA JJAMBBONG spicy seafood jjambbong"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soy/65 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-md bg-soy/90 p-4 text-cream backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-black">{copy.heroCard.line}</p>
                <span className="shrink-0 rounded-full bg-chili px-3 py-1 text-xs font-black">{copy.heroCard.pill}</span>
              </div>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-lg border border-white/30 bg-chili p-4 text-white shadow-glow md:block">
              <p className="text-xs font-black uppercase tracking-wide">{copy.heroCard.label}</p>
              <p className="mt-1 text-2xl font-black">{copy.heroCard.title}</p>
            </div>
          </div>
        </div>
      </section>
      <WhyDoya locale={locale} />
      <SpiceGuide locale={locale} />
      <TrustStrip locale={locale} />
      <BranchNetwork locale={locale} compact />
      <SeoLocalSection locale={locale} />
      <MapBlock locale={locale} />
    </main>
  );
}

function InnerPage({ locale, slug }: { locale: Locale; slug: PageSlug }) {
  const page = pageContent[locale][slug];
  const heroImage = heroImageForSlug(slug);

  if (slug === "location-contact") {
    return (
      <main>
        <MapBlock locale={locale} />
      </main>
    );
  }

  return (
    <main>
      <section className="noise bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-chili">{page.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black text-ink md:text-6xl">{page.h1}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">{page.subtitle}</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{page.summary}</p>
            <div className="mt-8">
              <CtaRow locale={locale} orderHref={slug === "korean-food-delivery-ho-chi-minh" ? "#order-methods" : undefined} />
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-ink/10 bg-soy shadow-sm md:min-h-[360px]">
            <Image
              src={heroImage}
              alt={`${page.h1} at DOYA JJAMBBONG`}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soy/55 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      {slug === "menu" ? <MenuPreview locale={locale} full /> : null}
      {slug === "korean-food-delivery-ho-chi-minh" ? <OrderMethodButtons locale={locale} /> : null}
      {slug === "faq" ? <FaqSection locale={locale} /> : null}
      {slug === "reviews" ? <ReviewsSection locale={locale} /> : null}
      {slug === "branches" ? <BranchNetwork locale={locale} /> : null}
      {slug !== "menu" && slug !== "faq" && slug !== "reviews" ? <TextSections locale={locale} slug={slug} /> : null}
      {slug === "about" ? <WhyDoya locale={locale} /> : null}
      <SeoLocalSection locale={locale} />
    </main>
  );
}

function heroImageForSlug(slug: PageSlug) {
  if (slug === "menu") return "/images/menu/doya-menu-spread.jpg";
  if (slug === "about" || slug === "reviews" || slug === "branches") return "/images/menu/doya-menu-spread.jpg";
  if (slug === "location-contact") return "/images/menu/doya-jajangmyeon.jpg";
  return "/images/menu/doya-seafood-jjambbong.jpg";
}

function MenuPreview({ locale, full = false }: { locale: Locale; full?: boolean }) {
  const items = full ? menuItems : menuItems.filter((item) => item.featured);
  const copy = uiCopy[locale].menu;
  const heading = full ? fullMenuHeading(locale) : copy;
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-chili">{heading.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">{heading.title}</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-ink/65">{heading.body}</p>
          </div>
        </div>
        {full ? <CategorizedMenu locale={locale} /> : <FeaturedMenuGrid items={items} locale={locale} />}
      </div>
    </section>
  );
}

function fullMenuHeading(locale: Locale) {
  if (locale === "ko") {
    return {
      eyebrow: "전체 메뉴",
      title: "카테고리별로 보는 도야 메뉴",
      body: "짬뽕, 짜장, 밥메뉴, 튀김메뉴, 사이드메뉴를 한눈에 고르기 쉽게 나눴습니다."
    };
  }

  if (locale === "vi") {
    return {
      eyebrow: "Thực đơn đầy đủ",
      title: "Xem menu theo nhóm món",
      body: "Jjambbong, jajang, cơm, món chiên và món phụ được chia nhóm để khách chọn nhanh hơn."
    };
  }

  return {
    eyebrow: "Full menu",
    title: "Browse the menu by category",
    body: "Jjambbong, jajang, rice, fried dishes, and sides are grouped so the full menu feels easy to choose from."
  };
}

function FeaturedMenuGrid({ items, locale }: { items: typeof menuItems; locale: Locale }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} locale={locale} />
      ))}
    </div>
  );
}

function CategorizedMenu({ locale }: { locale: Locale }) {
  return (
    <div className="mt-10 space-y-10">
      {menuCategoryOrder.map((category) => {
        const copy = menuCategoryLabels[locale][category];
        const items = menuItems.filter((item) => item.category === category);

        return (
          <section key={category} aria-labelledby={`menu-${category}`} className="border-t border-ink/10 pt-8">
            <div className="mb-5 max-w-3xl">
              <h3 id={`menu-${category}`} className="text-2xl font-black text-ink">
                {copy.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{copy.body}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <MenuCard key={item.name} item={item} locale={locale} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function SeoLocalSection({ locale }: { locale: Locale }) {
  const page = pageContent[locale][""];
  const copy = uiCopy[locale].localSeo;
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-3">
        {page.sections.map((section) => (
          <article key={section.heading} className="rounded-lg border border-ink/10 bg-white p-6">
            <h2 className="text-xl font-black text-ink">{section.heading}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">{section.body}</p>
          </article>
        ))}
        <article className="rounded-lg border border-ink/10 bg-soy p-6 text-cream">
          <h2 className="text-xl font-black">{copy.thirdTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-cream/75">{copy.thirdBody}</p>
        </article>
      </div>
    </section>
  );
}

function TextSections({ locale, slug }: { locale: Locale; slug: PageSlug }) {
  const page = pageContent[locale][slug];
  return (
    <section className="bg-bone">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-2">
        {page.sections.map((section) => (
          <article key={section.heading} className="rounded-lg border border-ink/10 bg-white p-6">
            <h2 className="text-2xl font-black text-ink">{section.heading}</h2>
            <p className="mt-3 leading-7 text-ink/70">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <div className="space-y-4">
          {faqs[locale].map((item) => (
            <details key={item.question} className="rounded-lg border border-ink/10 bg-white p-5">
              <summary className="cursor-pointer text-lg font-black text-ink">{item.question}</summary>
              <p className="mt-3 leading-7 text-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection({ locale }: { locale: Locale }) {
  const reviews = uiCopy[locale].reviews;
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review} className="rounded-lg border border-ink/10 bg-white p-6">
              <p className="text-3xl font-black text-chili">5.0</p>
              <p className="mt-4 leading-7 text-ink/70">{review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
