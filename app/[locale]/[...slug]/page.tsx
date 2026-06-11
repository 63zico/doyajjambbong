import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BranchNetwork } from "@/components/BranchNetwork";
import { CtaRow, OrderMethodButtons } from "@/components/CtaRow";
import { SpiceGuide, StickyCta, TrustStrip, WhyDoya } from "@/components/ConversionSections";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MapBlock } from "@/components/MapBlock";
import { MenuCard } from "@/components/MenuCard";
import { blogPath } from "@/data/blog";
import { pageContent } from "@/data/content";
import { faqs } from "@/data/faq";
import { menuCategoryLabels, menuCategoryOrder, menuItems } from "@/data/menu";
import { uiCopy } from "@/data/ui";
import { branchesJsonLd, breadcrumbJsonLd, faqJsonLd, menuJsonLd, metadataFor, restaurantJsonLd } from "@/lib/seo";
import { Locale, PageSlug, localizedPath, paths, site } from "@/lib/site";

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
      {slug === "mi-tuong-den-han-quoc-quan-1" ? <JsonLd data={miTuongDenFaqJsonLd(locale)} /> : null}
      {slug === "mi-tuong-den-han-quoc-quan-1" ? <JsonLd data={miTuongDenImageJsonLd(locale)} /> : null}
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
            <HeroActionGrid locale={locale} />
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
      <RecommendedOrderSection locale={locale} />
      {locale === "vi" ? <MiTuongDenLinkBand locale={locale} /> : null}
      <WhyDoya locale={locale} />
      <SpiceGuide locale={locale} />
      <TrustStrip locale={locale} />
      <BranchNetwork locale={locale} compact />
      <SeoLocalSection locale={locale} />
      <MapBlock locale={locale} />
    </main>
  );
}

function heroActionCopy(locale: Locale) {
  if (locale === "ko") {
    return [
      { label: "오늘 영업", value: "10:30 - 23:30", href: localizedPath(locale, "location-contact") },
      { label: "위치", value: "벤탄 · 부이비엔 근처 1군", href: site.links.googleMaps },
      { label: "전화", value: site.phone, href: `tel:${site.phone}` },
      { label: "예약/배달", value: "Zalo · 카카오톡 문의", href: localizedPath(locale, "korean-food-delivery-ho-chi-minh") }
    ];
  }

  if (locale === "vi") {
    return [
      { label: "Mở cửa hôm nay", value: "10:30 - 23:30", href: localizedPath(locale, "location-contact") },
      { label: "Vị trí", value: "Quận 1 · gần Bến Thành", href: site.links.googleMaps },
      { label: "Gọi ngay", value: site.phone, href: `tel:${site.phone}` },
      { label: "Đặt bàn/giao hàng", value: "Zalo · KakaoTalk", href: localizedPath(locale, "korean-food-delivery-ho-chi-minh") }
    ];
  }

  return [
    { label: "Open today", value: "10:30 - 23:30", href: localizedPath(locale, "location-contact") },
    { label: "Location", value: "District 1 · near Ben Thanh", href: site.links.googleMaps },
    { label: "Call", value: site.phone, href: `tel:${site.phone}` },
    { label: "Reserve/order", value: "Zalo · KakaoTalk", href: localizedPath(locale, "korean-food-delivery-ho-chi-minh") }
  ];
}

function HeroActionGrid({ locale }: { locale: Locale }) {
  return (
    <div className="mt-6 grid gap-2 sm:grid-cols-2">
      {heroActionCopy(locale).map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="rounded-lg border border-ink/10 bg-white/85 p-3 text-left shadow-sm backdrop-blur hover:border-chili"
        >
          <span className="block text-[11px] font-black uppercase tracking-wide text-chili">{item.label}</span>
          <span className="mt-1 block text-sm font-black text-ink">{item.value}</span>
        </Link>
      ))}
    </div>
  );
}

function recommendedOrderCopy(locale: Locale) {
  if (locale === "ko") {
    return {
      eyebrow: "처음 오면 이렇게 주문",
      title: "대표 메뉴를 바로 고를 수 있게 정리했습니다",
      body:
        "호치민 1군에서 짬뽕, 짜장면, 탕수육, 떡볶이를 찾는 손님이 가장 많이 고민하는 조합입니다. 매장 방문, 포장, 배달 문의 전에 먼저 보면 선택이 빨라집니다.",
      cta: "전체 메뉴 보기",
      items: [
        {
          title: "짬뽕 첫 방문 조합",
          body: "도야 해물짬뽕에 군만두를 더하면 매운 국물과 바삭한 사이드가 가장 균형 좋습니다.",
          href: "/menu/seafood-jjambbong-champong",
          tags: ["champong", "해장", "매운맛"]
        },
        {
          title: "짜장면 + 탕수육 조합",
          body: "맵지 않은 메뉴가 필요하면 짜장면과 탕수육이 가장 안전합니다. 아이, 외국인, 단체 주문에 좋습니다.",
          href: "/menu/jajangmyeon-mi-tuong-den",
          tags: ["짜장면", "tangsuyuk", "비매운"]
        },
        {
          title: "야식·술안주 조합",
          body: "늦은 시간에는 짬뽕탕, 깐풍기, 하이볼이나 소주 조합이 주문 전환이 좋습니다.",
          href: "/menu/kkanpunggi-spicy-garlic-fried-chicken",
          tags: ["야식", "술안주", "open late"]
        }
      ]
    };
  }

  if (locale === "vi") {
    return {
      eyebrow: "Gợi ý gọi món nhanh",
      title: "Chọn món Hàn-Trung dễ hơn trong lần đầu ghé DOYA",
      body:
        "Nếu bạn tìm mì cay Hàn Quốc, champong, mì tương đen, jajangmyeon, tokbokki hoặc món Hàn Quốc Quận 1, các combo này giúp gọi món nhanh hơn.",
      cta: "Xem toàn bộ menu",
      items: [
        {
          title: "Combo champong lần đầu",
          body: "DOYA hải sản jjambbong có nước dùng cay, đậm vị hải sản. Gọi thêm mandu chiên để ăn kèm rất hợp.",
          href: "/menu/seafood-jjambbong-champong",
          tags: ["champong", "mì cay", "hải sản"]
        },
        {
          title: "Mì tương đen + tangsuyuk",
          body: "Mì tương đen Hàn Quốc, còn gọi là jajangmyeon, hợp với thịt heo chiên sốt chua ngọt tangsuyuk.",
          href: "/menu/jajangmyeon-mi-tuong-den",
          tags: ["mi tuong den", "jajangmyeon", "không cay"]
        },
        {
          title: "Ăn khuya sau khi đi chơi",
          body: "Gần Bến Thành và Bùi Viện, thực khách thường chọn jjambbong, tokbokki hoặc gà chiên sốt cay tỏi.",
          href: "/menu/tteokbokki-korean-spicy-rice-cakes",
          tags: ["ăn khuya", "Quận 1", "tokbokki"]
        }
      ]
    };
  }

  return {
    eyebrow: "First-order shortcuts",
    title: "The easiest way to order at DOYA JJAMBBONG",
    body:
      "For Korean Chinese food in District 1, start with these combinations: spicy seafood noodles, Korean black bean noodles, tangsuyuk, tteokbokki, and late-night drinking food.",
    cta: "View full menu",
    items: [
      {
        title: "First-time champong combo",
        body: "Start with DOYA seafood jjambbong, then add fried mandu for a crisp side with the spicy seafood broth.",
        href: "/menu/seafood-jjambbong-champong",
        tags: ["champong", "jjambbong", "hangover food"]
      },
      {
        title: "Jajangmyeon + tangsuyuk",
        body: "Korean black bean noodles and Korean sweet and sour pork are the safest non-spicy order for groups.",
        href: "/menu/jajangmyeon-mi-tuong-den",
        tags: ["jajangmyeon", "tangsuyuk", "non-spicy"]
      },
      {
        title: "Late-night District 1 order",
        body: "After Bui Vien or Ben Thanh, choose jjambbong soup, tteokbokki, or spicy garlic fried chicken.",
        href: "/menu/tteokbokki-korean-spicy-rice-cakes",
        tags: ["late night", "District 1", "tteokbokki"]
      }
    ]
  };
}

function RecommendedOrderSection({ locale }: { locale: Locale }) {
  const copy = recommendedOrderCopy(locale);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink md:text-4xl">{copy.title}</h2>
            <p className="mt-4 text-sm leading-6 text-ink/70">{copy.body}</p>
            <Link
              href={localizedPath(locale, "menu")}
              className="mt-5 inline-flex rounded-md bg-chili px-5 py-3 text-sm font-black text-white shadow-glow"
            >
              {copy.cta}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.items.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-bone p-5">
                <h3 className="text-xl font-black leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-ink/10 bg-white px-2.5 py-1 text-[11px] font-black text-ink/65">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${locale}${item.href}`}
                  className="mt-5 inline-flex text-sm font-black text-chili hover:text-flame"
                >
                  {item.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
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
      {locale === "vi" && miTuongDenLinkPages.includes(slug) ? <MiTuongDenLinkBand locale={locale} /> : null}
      {slug === "mi-tuong-den-han-quoc-quan-1" ? <MiTuongDenLanding locale={locale} /> : null}
      {slug === "menu" ? <MenuPreview locale={locale} full /> : null}
      {slug === "korean-food-delivery-ho-chi-minh" ? <OrderMethodButtons locale={locale} /> : null}
      {slug === "faq" ? <FaqSection locale={locale} /> : null}
      {slug === "reviews" ? <ReviewsSection locale={locale} /> : null}
      {slug === "branches" ? <BranchNetwork locale={locale} /> : null}
      {slug !== "menu" && slug !== "faq" && slug !== "reviews" && slug !== "mi-tuong-den-han-quoc-quan-1" ? (
        <TextSections locale={locale} slug={slug} />
      ) : null}
      <BlogClusterLinks locale={locale} slug={slug} />
      {slug === "about" ? <WhyDoya locale={locale} /> : null}
      <SeoLocalSection locale={locale} />
      <SearchIntentLinks locale={locale} />
    </main>
  );
}

type BlogClusterLink = {
  title: string;
  body: string;
  href: string;
};

function BlogClusterLinks({ locale, slug }: { locale: Locale; slug: PageSlug }) {
  const links = blogClusterLinks(locale, slug);
  if (!links.length) return null;

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wide text-chili">DOYA search guides</p>
          <h2 className="mt-2 text-3xl font-black text-ink">Related keyword guides</h2>
          <p className="mt-4 leading-7 text-ink/70">
            These articles connect this page with the matching champong, jjambbong, jajangmyeon, mi tuong den, Ben Thanh, and Bui Vien searches.
          </p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm hover:border-chili">
              <h3 className="text-lg font-black leading-tight text-ink">{link.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{link.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function blogClusterLinks(locale: Locale, slug: PageSlug): BlogClusterLink[] {
  const champongPages: PageSlug[] = [
    "",
    "signature-jjambbong",
    "champong-korean-chinese-food-ho-chi-minh",
    "best-champong-district-1-ho-chi-minh",
    "korean-noodles-near-ben-thanh-market",
    "korean-restaurant-near-bui-vien-walking-street",
    "late-night-korean-food-ho-chi-minh",
    "hangover-spicy-noodles-saigon"
  ];
  const blackBeanPages: PageSlug[] = [
    "mi-tuong-den-han-quoc-quan-1",
    "mi-tuong-den-quan-1-gan-bui-vien",
    "jajangmyeon-jjambbong-district-1",
    "korean-noodles-near-ben-thanh-market",
    "menu"
  ];

  const enLinks: BlogClusterLink[] = [
    {
      title: "What is champong? Jjambbong vs jjamppong",
      body: "Explains the spellings tourists use when searching Korean spicy seafood noodles in District 1.",
      href: blogPath("en", "what-is-champong-jjambbong-vs-jjamppong")
    },
    {
      title: "Best Korean noodles near Ben Thanh Market",
      body: "Connects Ben Thanh searches with champong, jajangmyeon, and the DOYA District 1 location.",
      href: blogPath("en", "best-korean-noodles-near-ben-thanh-market")
    },
    {
      title: "Where to eat jajangmyeon in District 1",
      body: "Targets Korean black bean noodles, jajangmyeon, and mi tuong den searches around Bui Vien and Ben Thanh.",
      href: blogPath("en", "where-to-eat-jajangmyeon-district-1")
    }
  ];

  if (locale === "en") {
    if (champongPages.includes(slug) || blackBeanPages.includes(slug)) return enLinks;
    return [];
  }

  if (locale === "vi" && blackBeanPages.includes(slug)) {
    return [
      {
        title: "Mi tuong den la gi? Jajangmyeon Han Quoc",
        body: "Vietnamese guide for mi tuong den, jajangmyeon, Korean black bean noodles, and District 1 searches.",
        href: blogPath("vi", "mi-tuong-den-la-gi-jajangmyeon-han-quoc")
      }
    ];
  }

  if (locale === "ko" && champongPages.includes(slug)) {
    return [
      {
        title: "Bui Vien hangover jjambbong guide",
        body: "Korean guide for Bui Vien hangover food, late-night jjambbong, and District 1 Korean-Chinese food.",
        href: blogPath("ko", "bui-vien-hangover-jjambbong-district-1")
      }
    ];
  }

  if (locale === "ja" && champongPages.includes(slug)) {
    return [
      {
        title: "Ho Chi Minh District 1 champong guide",
        body: "Japanese guide for champong, jjambbong, Korean seafood noodles, Bui Vien, and Ben Thanh searches.",
        href: blogPath("ja", "ho-chi-minh-district-1-champong-guide")
      }
    ];
  }

  if (locale === "zh" && blackBeanPages.includes(slug)) {
    return [
      {
        title: "Hu Zhi Ming District 1 Korean jajangmyeon guide",
        body: "Chinese guide for Korean black bean noodles, jajangmyeon, mi tuong den, Bui Vien, and Ben Thanh searches.",
        href: blogPath("zh", "jajangmyeon-mi-tuong-den-hu-zhi-ming-di-1-jun")
      }
    ];
  }

  return [];
}

function heroImageForSlug(slug: PageSlug) {
  if (slug === "menu") return "/images/menu/doya-menu-spread.jpg";
  if (slug === "mi-tuong-den-han-quoc-quan-1") return "/images/menu/doya-jajangmyeon.jpg";
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
      <nav className="sticky top-[82px] z-20 -mx-4 overflow-x-auto border-y border-ink/10 bg-bone/95 px-4 py-3 backdrop-blur lg:top-[73px]">
        <div className="flex gap-2">
          {menuCategoryOrder.map((category) => (
            <a
              key={category}
              href={`#menu-${category}`}
              className="shrink-0 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-black text-ink/70 hover:border-chili hover:text-chili"
            >
              {menuCategoryLabels[locale][category].title}
            </a>
          ))}
        </div>
      </nav>
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

function searchIntentCopy(locale: Locale) {
  if (locale === "ko") {
    return {
      eyebrow: "검색어별 바로가기",
      title: "외국인이 찾는 한식당 검색어를 도야 페이지로 연결",
      body:
        "champong, mi tuong den, Korean restaurant District 1, Korean food near Bui Vien처럼 실제 손님이 구글에 입력할 만한 검색 의도를 한곳에서 연결합니다.",
      links: [
        {
          title: "Champong Ho Chi Minh",
          body: "champong, champon, jjamppong, jjambbong 검색을 도야 대표 짬뽕 페이지로 연결합니다.",
          href: localizedPath(locale, "champong-korean-chinese-food-ho-chi-minh"),
          label: "champong 페이지"
        },
        {
          title: "Mi tuong den / Jajangmyeon",
          body: "mi tuong den, mì tương đen, Korean black bean noodles 검색을 짜장면 페이지로 연결합니다.",
          href: localizedPath(locale, "mi-tuong-den-han-quoc-quan-1"),
          label: "짜장면 페이지"
        },
        {
          title: "Korean restaurant District 1",
          body: "Korean food Ho Chi Minh, Korean restaurant near Ben Thanh, Korean food near Bui Vien 검색을 한국식 중화요리 페이지로 연결합니다.",
          href: localizedPath(locale, "korean-chinese-food-ho-chi-minh"),
          label: "한식당 검색 페이지"
        }
      ]
    };
  }

  if (locale === "vi") {
    return {
      eyebrow: "Tu khoa Google",
      title: "Ket noi cac tim kiem mon Han ve DOYA",
      body:
        "Cac tu khoa nhu champong, mi tuong den, Korean restaurant District 1 va Korean food near Bui Vien duoc gom thanh cac trang ro rang de khach tim dung mon nhanh hon.",
      links: [
        {
          title: "Champong Ho Chi Minh",
          body: "Danh cho khach tim champong, champon, jjamppong hoac jjambbong tai Quan 1.",
          href: localizedPath(locale, "champong-korean-chinese-food-ho-chi-minh"),
          label: "Xem champong"
        },
        {
          title: "Mi tuong den / Jajangmyeon",
          body: "Danh cho khach tim mi tuong den, mi tuong den Han Quoc hoac Korean black bean noodles.",
          href: localizedPath(locale, "mi-tuong-den-han-quoc-quan-1"),
          label: "Xem mi tuong den"
        },
        {
          title: "Korean restaurant District 1",
          body: "Danh cho khach tim Korean food Ho Chi Minh, Korean restaurant near Ben Thanh hoac Korean food near Bui Vien.",
          href: localizedPath(locale, "korean-chinese-food-ho-chi-minh"),
          label: "Xem mon Han-Trung"
        }
      ]
    };
  }

  if (locale === "zh") {
    return {
      eyebrow: "Google 搜索关键词",
      title: "把中国客人常搜的韩国餐厅关键词连接到 DOYA",
      body:
        "胡志明市韩国餐厅、第1郡韩式中餐、胡志明市韩式炸酱面、champong 辣海鲜面、滨城市场附近韩国餐厅等搜索意图会连接到清楚的菜单和位置页面。",
      links: [
        {
          title: "胡志明市 Champong 辣海鲜面",
          body: "适合搜索 champong、jjambbong、jjamppong、韩式辣海鲜面、第1郡辣面 的客人。",
          href: localizedPath(locale, "champong-korean-chinese-food-ho-chi-minh"),
          label: "查看辣海鲜面"
        },
        {
          title: "韩式炸酱面 / Jajangmyeon",
          body: "适合搜索 韩式炸酱面、韩国黑豆面、jajangmyeon、mi tuong den、不辣韩国面 的客人。",
          href: localizedPath(locale, "mi-tuong-den-han-quoc-quan-1"),
          label: "查看炸酱面"
        },
        {
          title: "胡志明市第1郡韩国餐厅",
          body: "适合搜索 胡志明市韩国餐厅、滨城市场附近韩国餐厅、Bui Vien 附近韩国餐厅、韩式中餐 的客人。",
          href: localizedPath(locale, "korean-chinese-food-ho-chi-minh"),
          label: "查看韩式中餐"
        }
      ]
    };
  }

  if (locale === "ja") {
    return {
      eyebrow: "Google 検索キーワード",
      title: "日本人が探す韓国料理検索を DOYA へ接続",
      body:
        "ホーチミン 韓国料理、ホーチミン チャンポン、ジャージャー麺、ベンタイン市場 韓国料理、ブイビエン 韓国料理のような検索意図を分かりやすいページにまとめています。",
      links: [
        {
          title: "ホーチミン チャンポン",
          body: "チャンポン、champong、jjamppong、jjambbong、韓国式海鮮ラーメンを探す方へ。",
          href: localizedPath(locale, "champong-korean-chinese-food-ho-chi-minh"),
          label: "チャンポンを見る"
        },
        {
          title: "ジャージャー麺 / Jajangmyeon",
          body: "韓国式ジャージャー麺、Jajangmyeon、Korean black bean noodles、mi tuong den を探す方へ。",
          href: localizedPath(locale, "mi-tuong-den-han-quoc-quan-1"),
          label: "ジャージャー麺を見る"
        },
        {
          title: "ホーチミン 韓国料理 1区",
          body: "ベンタイン市場、ブイビエン、Bui Thi Xuan 近くで韓国料理と韓国中華を探す方へ。",
          href: localizedPath(locale, "korean-chinese-food-ho-chi-minh"),
          label: "韓国中華を見る"
        }
      ]
    };
  }

  return {
    eyebrow: "Search shortcuts",
    title: "Connect foreign Korean restaurant searches to DOYA",
    body:
      "These links group high-intent searches such as champong, mi tuong den, Korean restaurant District 1, Korean food near Bui Vien, and Korean restaurant near Ben Thanh.",
    links: [
      {
        title: "Champong Ho Chi Minh",
        body: "For guests searching champong, champon, jjamppong, jjambbong, or Korean spicy seafood noodles in District 1.",
        href: localizedPath(locale, "champong-korean-chinese-food-ho-chi-minh"),
        label: "Open champong guide"
      },
      {
        title: "Mi tuong den / Jajangmyeon",
        body: "For guests searching mi tuong den, mì tương đen, jajangmyeon, or Korean black bean noodles.",
        href: localizedPath(locale, "mi-tuong-den-han-quoc-quan-1"),
        label: "Open black bean noodles"
      },
      {
        title: "Korean restaurant District 1",
        body: "For guests searching Korean food Ho Chi Minh, Korean restaurant near Ben Thanh, or Korean food near Bui Vien.",
        href: localizedPath(locale, "korean-chinese-food-ho-chi-minh"),
        label: "Open Korean food guide"
      }
    ]
  };
}

function competitiveSearchLinks(locale: Locale) {
  if (locale === "ko") {
    return [
      {
        title: "Best Champong District 1",
        body: "champong District 1, jjambbong near Ben Thanh, Korean spicy seafood noodles 검색을 직접 겨냥합니다.",
        href: localizedPath(locale, "best-champong-district-1-ho-chi-minh"),
        label: "1군 champong 보기"
      },
      {
        title: "Mi tuong den near Bui Vien",
        body: "부이비엔, 팜응우라오, 벤탄 근처에서 mi tuong den, jajangmyeon, 짜장면을 찾는 손님용입니다.",
        href: localizedPath(locale, "mi-tuong-den-quan-1-gan-bui-vien"),
        label: "부이비엔 짜장면"
      },
      {
        title: "Korean noodles near Ben Thanh",
        body: "벤탄시장 근처 Korean noodles, jjambbong, jajangmyeon 검색을 도야 위치와 연결합니다.",
        href: localizedPath(locale, "korean-noodles-near-ben-thanh-market"),
        label: "벤탄 근처 한식면"
      },
      {
        title: "Jajangmyeon & Jjambbong",
        body: "짜장면과 짬뽕을 같이 찾는 Korean Chinese noodles District 1 검색 의도를 받습니다.",
        href: localizedPath(locale, "jajangmyeon-jjambbong-district-1"),
        label: "짜장면 짬뽕 조합"
      },
      {
        title: "Korean restaurant near Bui Vien",
        body: "부이비엔 워킹스트리트 근처 한식당, 야식, 해장 검색을 도야 위치로 연결합니다.",
        href: localizedPath(locale, "korean-restaurant-near-bui-vien-walking-street"),
        label: "부이비엔 한식당"
      }
    ];
  }

  if (locale === "vi") {
    return [
      {
        title: "Best champong District 1",
        body: "Nhan thang vao tim kiem champong District 1, jjambbong near Ben Thanh va Korean spicy seafood noodles.",
        href: localizedPath(locale, "best-champong-district-1-ho-chi-minh"),
        label: "Xem best champong Q1"
      },
      {
        title: "Mi tuong den gan Bui Vien",
        body: "Danh cho khach tim mi tuong den Quan 1, jajangmyeon gan Bui Vien, Pham Ngu Lao hoac Ben Thanh.",
        href: localizedPath(locale, "mi-tuong-den-quan-1-gan-bui-vien"),
        label: "Xem mi tuong den"
      },
      {
        title: "Korean noodles gan Ben Thanh",
        body: "Ket noi tim kiem Korean noodles near Ben Thanh Market voi thuc don jjambbong va jajangmyeon cua DOYA.",
        href: localizedPath(locale, "korean-noodles-near-ben-thanh-market"),
        label: "Xem mi Han gan Ben Thanh"
      },
      {
        title: "Jajangmyeon va jjambbong",
        body: "Danh cho khach tim Korean Chinese noodles, jajangmyeon va jjambbong tai District 1.",
        href: localizedPath(locale, "jajangmyeon-jjambbong-district-1"),
        label: "Xem cap mon Han-Trung"
      },
      {
        title: "Korean restaurant gan Bui Vien",
        body: "Danh cho khach tim Korean restaurant near Bui Vien Walking Street, Pham Ngu Lao va an khuya Quan 1.",
        href: localizedPath(locale, "korean-restaurant-near-bui-vien-walking-street"),
        label: "Xem gan Bui Vien"
      }
    ];
  }

  if (locale === "zh") {
    return [
      {
        title: "第1郡 Champong",
        body: "直接对应 champong District 1, jjambbong near Ben Thanh 和韩式辣海鲜面搜索.",
        href: localizedPath(locale, "best-champong-district-1-ho-chi-minh"),
        label: "查看第1郡 Champong"
      },
      {
        title: "Bui Vien 附近韩式炸酱面",
        body: "适合搜索 mi tuong den, jajangmyeon, 韩式炸酱面和 Bui Vien 附近韩国面食的客人.",
        href: localizedPath(locale, "mi-tuong-den-quan-1-gan-bui-vien"),
        label: "查看 Bui Vien 炸酱面"
      },
      {
        title: "滨城市场附近韩式面",
        body: "连接 Korean noodles near Ben Thanh Market, jjambbong 和 jajangmyeon 搜索.",
        href: localizedPath(locale, "korean-noodles-near-ben-thanh-market"),
        label: "查看滨城市场韩式面"
      },
      {
        title: "Jajangmyeon 和 Jjambbong",
        body: "适合同时搜索韩式炸酱面、辣海鲜面和 Korean Chinese noodles District 1 的客人.",
        href: localizedPath(locale, "jajangmyeon-jjambbong-district-1"),
        label: "查看炸酱面和辣海鲜面"
      },
      {
        title: "Bui Vien 附近韩国餐厅",
        body: "连接 Bui Vien Walking Street, Pham Ngu Lao 和第1郡韩国夜宵搜索.",
        href: localizedPath(locale, "korean-restaurant-near-bui-vien-walking-street"),
        label: "查看 Bui Vien 韩国餐厅"
      }
    ];
  }

  if (locale === "ja") {
    return [
      {
        title: "ホーチミン1区 チャンポン",
        body: "champong District 1, jjambbong near Ben Thanh, 韓国式海鮮ラーメンの検索に対応します。",
        href: localizedPath(locale, "best-champong-district-1-ho-chi-minh"),
        label: "1区チャンポンを見る"
      },
      {
        title: "ブイビエン近くジャージャー麺",
        body: "mi tuong den, jajangmyeon, 韓国式ジャージャー麺をブイビエン・ファングーラオ近くの検索へ接続します。",
        href: localizedPath(locale, "mi-tuong-den-quan-1-gan-bui-vien"),
        label: "ジャージャー麺を見る"
      },
      {
        title: "ベンタイン市場近く韓国麺",
        body: "Korean noodles near Ben Thanh Market, チャンポン, ジャージャー麺の検索向けページです。",
        href: localizedPath(locale, "korean-noodles-near-ben-thanh-market"),
        label: "ベンタイン近く韓国麺"
      },
      {
        title: "ジャージャー麺とチャンポン",
        body: "Jajangmyeon, Jjambbong, Korean Chinese noodles District 1 を同じページで案内します。",
        href: localizedPath(locale, "jajangmyeon-jjambbong-district-1"),
        label: "韓国中華麺を見る"
      },
      {
        title: "ブイビエン近く韓国料理",
        body: "Bui Vien Walking Street, Pham Ngu Lao, 夜遅めの韓国料理検索に対応します。",
        href: localizedPath(locale, "korean-restaurant-near-bui-vien-walking-street"),
        label: "ブイビエン近くを見る"
      }
    ];
  }

  return [
    {
      title: "Best champong District 1",
      body: "A focused page for champong District 1, jjambbong near Ben Thanh, and Korean spicy seafood noodles.",
      href: localizedPath(locale, "best-champong-district-1-ho-chi-minh"),
      label: "Open District 1 champong"
    },
    {
      title: "Mi tuong den near Bui Vien",
      body: "For guests searching mi tuong den Quan 1, jajangmyeon near Bui Vien, Pham Ngu Lao, or Ben Thanh.",
      href: localizedPath(locale, "mi-tuong-den-quan-1-gan-bui-vien"),
      label: "Open Bui Vien noodles"
    },
    {
      title: "Korean noodles near Ben Thanh",
      body: "Connects Korean noodles near Ben Thanh Market with DOYA's jjambbong and jajangmyeon menu.",
      href: localizedPath(locale, "korean-noodles-near-ben-thanh-market"),
      label: "Open Ben Thanh noodles"
    },
    {
      title: "Jajangmyeon and jjambbong",
      body: "For Korean Chinese noodles searches that compare black bean noodles and spicy seafood noodles.",
      href: localizedPath(locale, "jajangmyeon-jjambbong-district-1"),
      label: "Open noodle pairing"
    },
    {
      title: "Korean restaurant near Bui Vien",
      body: "For guests searching Korean restaurant near Bui Vien Walking Street, Pham Ngu Lao, or late-night District 1 food.",
      href: localizedPath(locale, "korean-restaurant-near-bui-vien-walking-street"),
      label: "Open Bui Vien guide"
    }
  ];
}

function SearchIntentLinks({ locale }: { locale: Locale }) {
  const copy = searchIntentCopy(locale);
  const links = [...copy.links, ...competitiveSearchLinks(locale)];

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">{copy.title}</h2>
          <p className="mt-4 leading-7 text-ink/70">{copy.body}</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {links.map((link) => (
            <article key={link.href} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="text-xl font-black text-ink">{link.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{link.body}</p>
              <Link href={link.href} className="mt-5 inline-flex rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
                {link.label}
              </Link>
            </article>
          ))}
        </div>
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

const miTuongDenLinkPages: PageSlug[] = [
  "",
  "menu",
  "best-champong-district-1-ho-chi-minh",
  "mi-tuong-den-quan-1-gan-bui-vien",
  "jajangmyeon-jjambbong-district-1",
  "korean-noodles-near-ben-thanh-market",
  "korean-restaurant-near-bui-vien-walking-street",
  "korean-chinese-food-ho-chi-minh",
  "korean-food-delivery-ho-chi-minh",
  "about"
];

const miTuongDenFaq = [
  {
    question: "Mì tương đen là gì?",
    answer:
      "Mì tương đen là món mì Hàn Quốc dùng sốt đậu đen xào đậm vị, thường được biết đến với tên jajangmyeon hoặc Korean black bean noodles."
  },
  {
    question: "Mì tương đen và jajangmyeon có giống nhau không?",
    answer:
      "Có. Jajangmyeon là tên tiếng Hàn, còn mì tương đen hoặc mi tuong den là cách nhiều khách Việt tìm món này trên Google."
  },
  {
    question: "Mì tương đen có cay không?",
    answer:
      "Không. Đây là món sốt đen đậm vị, dễ ăn hơn các món cay như jjambbong hoặc champong."
  },
  {
    question: "Ăn mì tương đen Hàn Quốc ở đâu tại Quận 1?",
    answer:
      "Bạn có thể ăn mì tương đen Hàn Quốc tại DOYA JJAMBBONG, 77I Bùi Thị Xuân, P. Bến Thành, Quận 1, gần Bến Thành và Bùi Viện."
  },
  {
    question: "DOYA JJAMBBONG có giao mì tương đen không?",
    answer:
      "Có thể hỏi đặt bàn, mua mang đi hoặc giao hàng qua Zalo, KakaoTalk hoặc điện thoại trước khi đặt món."
  },
  {
    question: "Mì tương đen hợp ăn với món gì?",
    answer:
      "Mì tương đen hợp với tangsuyuk, mandu chiên, mandu luộc hoặc một tô jjambbong cay để cân bằng vị."
  }
];

function miTuongDenFaqJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: miTuongDenFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

function miTuongDenImageJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${site.baseUrl}/images/menu/doya-jajangmyeon.jpg`,
    name: "Mì tương đen Hàn Quốc jajangmyeon tại DOYA JJAMBBONG Quận 1",
    caption: "Mì tương đen Hàn Quốc jajangmyeon tại DOYA JJAMBBONG Quận 1 gần Bến Thành",
    inLanguage: locale,
    representativeOfPage: true
  };
}

function MiTuongDenLinkBand({ locale }: { locale: Locale }) {
  if (locale !== "vi") return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-lg border border-ink/10 bg-cream p-5 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-chili">Mì tương đen Hàn Quốc</p>
            <h2 className="mt-2 text-2xl font-black text-ink">Tìm mi tuong den, jajangmyeon hoặc Korean black bean noodles?</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-ink/70">
              DOYA có trang riêng cho mì tương đen tại Quận 1, gần Bến Thành và Bùi Viện, kèm gợi ý gọi cùng tangsuyuk, mandu và jjambbong.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
            <Link href={localizedPath(locale, "mi-tuong-den-han-quoc-quan-1")} className="rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
              Mì tương đen Quận 1
            </Link>
            <Link href={`/${locale}/menu/jajangmyeon-mi-tuong-den`} className="rounded-md border border-ink/10 bg-white px-4 py-3 text-sm font-black text-ink">
              Xem món jajangmyeon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiTuongDenLanding({ locale }: { locale: Locale }) {
  const menuHref = `/${locale}/menu/jajangmyeon-mi-tuong-den`;
  const tangsuyukHref = `/${locale}/menu/tangsuyuk-korean-sweet-sour-pork`;
  const jjambbongHref = `/${locale}/menu/seafood-jjambbong-champong`;

  return (
    <>
      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Mì tương đen là gì?",
                body:
                  "Đây là món mì sốt đậu đen kiểu Hàn Quốc, còn gọi là jajangmyeon. Vị đậm, không cay, dễ ăn cho khách Việt và khách du lịch.",
                href: menuHref,
                label: "Xem menu & giá"
              },
              {
                title: "Ăn ở đâu tại Quận 1?",
                body:
                  "DOYA nằm tại 77I Bùi Thị Xuân, P. Bến Thành, gần Bến Thành, Bùi Viện, khách sạn và khu du lịch trung tâm.",
                href: site.links.googleMaps,
                label: "Chỉ đường Google Maps"
              },
              {
                title: "Đặt bàn, mang đi, giao hàng",
                body:
                  "Bạn có thể hỏi món qua Zalo, KakaoTalk hoặc gọi điện. Mì tương đen hợp đặt cùng tangsuyuk, mandu và jjambbong.",
                href: site.links.delivery,
                label: "Đặt qua Zalo"
              }
            ].map((card) => (
              <article key={card.title} className="rounded-lg border border-ink/10 bg-white p-6">
                <h2 className="text-2xl font-black text-ink">{card.title}</h2>
                <p className="mt-3 leading-7 text-ink/70">{card.body}</p>
                <Link href={card.href} className="mt-5 inline-flex rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
                  {card.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-chili">Jajangmyeon guide</p>
            <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">Vì sao mì tương đen Hàn Quốc được yêu thích?</h2>
            <p className="mt-4 leading-7 text-ink/70">
              Nếu bạn đang tìm mi tuong den hoặc mì tương đen Hàn Quốc tại Quận 1, DOYA JJAMBBONG là lựa chọn dễ đi vì nằm gần Bến Thành,
              Bùi Viện và nhiều khách sạn trung tâm. Món này không cay như champong, nhưng vẫn có vị sốt đậu đen đậm, thơm và no bụng.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Mì tương đen tại DOYA có gì khác?", "Sốt đen kiểu Hàn, mì mềm dai, vị đậm nhưng dễ ăn. Đây là món cân bằng tốt khi bàn có người không ăn cay."],
              ["Gần Bến Thành, Bùi Viện, khách sạn", "Địa chỉ ở trung tâm Quận 1 giúp khách du lịch, nhân viên văn phòng và người Hàn tại Sài Gòn ghé nhanh hơn."],
              ["Gợi ý gọi món", "Mì tương đen + tangsuyuk, mì tương đen + mandu, hoặc mì tương đen + jjambbong là các combo dễ hiểu."],
              ["Không chỉ là jajangmyeon", "Trang này giữ cả cách gọi mi tuong den, mì tương đen, jajangmyeon và Korean black bean noodles để khách tìm đúng món."]
            ].map(([title, body]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-cream p-5">
                <h3 className="text-xl font-black text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soy text-cream">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-brass">Pairing menu</p>
              <h2 className="mt-2 text-3xl font-black">Mì tương đen nên ăn với gì?</h2>
              <p className="mt-4 leading-7 text-cream/75">
                Nếu đi 2 người trở lên, hãy gọi một món mì tương đen không cay cùng một món chiên hoặc một tô jjambbong cay. Cách gọi này dễ hợp khẩu vị hơn cho cả nhóm.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Mì tương đen", menuHref],
                ["Tangsuyuk", tangsuyukHref],
                ["Jjambbong", jjambbongHref]
              ].map(([label, href]) => (
                <Link key={label} href={href} className="rounded-md border border-cream/15 bg-cream/10 p-4 text-sm font-black text-cream hover:bg-cream/15">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-black text-ink">FAQ về mì tương đen</h2>
          <div className="mt-6 space-y-4">
            {miTuongDenFaq.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-ink/10 bg-white p-5">
                <summary className="cursor-pointer text-lg font-black text-ink">{faq.question}</summary>
                <p className="mt-3 leading-7 text-ink/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="rounded-lg border border-ink/10 bg-white p-6">
            <h2 className="text-2xl font-black text-ink">Đặt bàn hoặc giao hàng</h2>
            <p className="mt-3 leading-7 text-ink/70">
              Muốn đặt mì tương đen Hàn Quốc, jajangmyeon hoặc món Hàn-Trung tại Quận 1? Chọn cách tiện nhất: Zalo, KakaoTalk, điện thoại hoặc Google Maps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={menuHref} className="rounded-md bg-chili px-5 py-3 text-sm font-black text-white">
                Xem menu & giá
              </Link>
              <Link href={site.links.googleMaps} className="rounded-md bg-soy px-5 py-3 text-sm font-black text-white">
                Chỉ đường Google Maps
              </Link>
              <Link href={site.links.delivery} className="rounded-md border border-ink/10 bg-white px-5 py-3 text-sm font-black text-ink">
                Zalo
              </Link>
              <Link href={`tel:${site.phone}`} className="rounded-md border border-ink/10 bg-white px-5 py-3 text-sm font-black text-ink">
                Gọi điện
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
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
