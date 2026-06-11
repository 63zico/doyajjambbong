import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaRow } from "@/components/CtaRow";
import { StickyCta } from "@/components/ConversionSections";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { blogPath, blogPosts, getBlogPost } from "@/data/blog";
import { restaurantJsonLd } from "@/lib/seo";
import { Locale, localizedPath, site } from "@/lib/site";

type PageParams = {
  locale: string;
  slug: string;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    locale: post.locale,
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const post = getBlogPost(locale, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${site.baseUrl}${blogPath(locale, post.slug)}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${site.baseUrl}${blogPath(locale, post.slug)}`,
      siteName: site.name,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `${site.baseUrl}${post.image}`,
          width: 1200,
          height: 900,
          alt: post.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${site.baseUrl}${post.image}`]
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const post = getBlogPost(locale, slug);
  if (!site.locales.includes(locale) || !post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${site.baseUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    },
    mainEntityOfPage: `${site.baseUrl}${blogPath(locale, post.slug)}`,
    keywords: post.keywords.join(", ")
  };

  return (
    <>
      <JsonLd data={restaurantJsonLd(locale)} />
      <JsonLd data={articleJsonLd} />
      <Header locale={locale} slug="about" activeSection="blog" />
      <main>
        <article>
          <section className="noise bg-cream">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-chili">{post.eyebrow}</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">{post.title}</h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70">{post.description}</p>
                <p className="mt-4 text-sm font-bold text-ink/50">
                  {post.date} · {post.readTime}
                </p>
                <div className="mt-7">
                  <CtaRow locale={locale} />
                </div>
              </div>
              <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-ink/10 bg-soy shadow-sm md:min-h-[380px]">
                <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
              </div>
            </div>
          </section>

          <section className="bg-bone">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div className="rounded-lg border border-ink/10 bg-white p-6 md:p-8">
                <p className="text-lg leading-8 text-ink/75">{post.intro}</p>
                <div className="mt-8 space-y-8">
                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="text-2xl font-black text-ink">{section.heading}</h2>
                      <p className="mt-3 leading-7 text-ink/70">{section.body}</p>
                    </section>
                  ))}
                </div>
                <div className="mt-8 rounded-md bg-cream p-5">
                  <p className="text-base font-black text-ink">{post.cta}</p>
                </div>
                <RelatedBlogLinks locale={locale} slug={post.slug} />
              </div>

              <aside className="h-fit rounded-lg border border-ink/10 bg-soy p-5 text-cream">
                <p className="text-sm font-black uppercase tracking-wide text-brass">Search Keywords</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-cream/15 px-3 py-1 text-xs font-bold text-cream/80">
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link href={blogPath(locale)} className="mt-6 inline-block rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
                  Blog
                </Link>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <Footer locale={locale} />
      <StickyCta locale={locale} />
    </>
  );
}

function RelatedBlogLinks({ locale, slug }: { locale: Locale; slug: string }) {
  const isBlackBeanPost = slug.includes("mi-tuong-den") || slug.includes("jajangmyeon") || slug.includes("korean-black-bean-noodles");
  const isChampongPost = /champong|jjambbong|jjamppong|korean-noodles|ben-thanh|bui-vien|hangover/.test(slug);
  if (!isBlackBeanPost && !isChampongPost) return null;

  const labelMap: Record<Locale, string[]> = {
    vi: ["Mì tương đen Hàn Quốc Quận 1", "Món jajangmyeon", "Tangsuyuk ăn cùng mì tương đen", "Xem toàn bộ menu", "Địa chỉ DOYA", "Đọc tiếp"],
    ko: ["호치민 1군 짜장면 안내", "짜장면 메뉴 상세", "짜장면과 탕수육 조합", "전체 메뉴 보기", "도야 위치/연락처", "관련 페이지"],
    en: ["Korean black bean noodles in District 1", "Jajangmyeon menu detail", "Tangsuyuk with jajangmyeon", "View full menu", "DOYA location", "Related pages"],
    zh: ["第1郡韩式炸酱面", "Jajangmyeon 菜单详情", "糖醋肉搭配炸酱面", "查看完整菜单", "DOYA 位置", "相关页面"],
    ja: ["1区のジャージャー麺", "Jajangmyeon メニュー詳細", "タンスユクとジャージャー麺", "全メニューを見る", "DOYA の場所", "関連ページ"]
  };
  const champongLabelMap: Record<Locale, string[]> = {
    vi: ["Champong cay o Quan 1", "Mon seafood jjambbong", "Mi Han gan Ben Thanh", "Mon Han gan Bui Vien", "Dia chi DOYA", "Trang lien quan"],
    ko: ["호치민 1군 짬뽕 가이드", "해물짬뽕 메뉴", "벤탄 근처 한식면", "부이비엔 근처 한식당", "도야 위치", "관련 페이지"],
    en: ["Best champong in District 1", "Seafood jjambbong menu detail", "Korean noodles near Ben Thanh", "Korean food near Bui Vien", "DOYA location", "Related pages"],
    zh: ["第1郡 Champong 指南", "海鲜辣汤面菜单", "滨城市场附近韩式面", "Bui Vien 附近韩国餐厅", "DOYA 位置", "相关页面"],
    ja: ["1区チャンポンガイド", "海鮮jjambbongメニュー", "ベンタイン近く韓国麺", "ブイビエン近く韓国料理", "DOYAの場所", "関連ページ"]
  };
  const labels = isChampongPost && !isBlackBeanPost ? champongLabelMap[locale] : labelMap[locale];

  const links =
    isChampongPost && !isBlackBeanPost
      ? [
          { label: labels[0], href: localizedPath(locale, "best-champong-district-1-ho-chi-minh") },
          { label: labels[1], href: `/${locale}/menu/seafood-jjambbong-champong` },
          { label: labels[2], href: localizedPath(locale, "korean-noodles-near-ben-thanh-market") },
          { label: labels[3], href: localizedPath(locale, "korean-restaurant-near-bui-vien-walking-street") },
          { label: labels[4], href: localizedPath(locale, "location-contact") }
        ]
      : [
          { label: labels[0], href: localizedPath(locale, "mi-tuong-den-han-quoc-quan-1") },
          { label: labels[1], href: `/${locale}/menu/jajangmyeon-mi-tuong-den` },
          { label: labels[2], href: `/${locale}/menu/tangsuyuk-korean-sweet-sour-pork` },
          { label: labels[3], href: `/${locale}/menu` },
          { label: labels[4], href: localizedPath(locale, "location-contact") }
        ];

  return (
    <div className="mt-6 rounded-md border border-ink/10 bg-bone p-5">
      <p className="text-sm font-black uppercase tracking-wide text-chili">{labels[5]}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-black text-ink/75 hover:border-chili hover:text-chili">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
