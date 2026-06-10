import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/ConversionSections";
import { blogPath, getBlogPosts } from "@/data/blog";
import { Locale, site } from "@/lib/site";

type PageParams = {
  locale: string;
};

const blogCopy: Record<Locale, { title: string; description: string; eyebrow: string; h1: string; subtitle: string }> = {
  vi: {
    title: "Blog DOYA JJAMBBONG | Mì cay Hàn Quốc, jjambbong và món Hàn-Trung Quận 1",
    description: "Bài viết hướng dẫn về mì cay Hàn Quốc, jjambbong, món ăn khuya và nhà hàng Hàn-Trung tại Quận 1, TP. Hồ Chí Minh.",
    eyebrow: "DOYA Blog",
    h1: "Mì cay, jjambbong và món Hàn-Trung ở Quận 1",
    subtitle: "Hướng dẫn cho khách du lịch, khách Hàn Quốc và người Việt đang tìm món cay, món nóng, ăn khuya hoặc món Hàn-Trung tại Sài Gòn."
  },
  ko: {
    title: "도야짬뽕 블로그 | 호치민 짬뽕, 야식, 해장, 한국식 중화요리",
    description: "호치민 1군 짬뽕, 부이비엔 벤탄 근처 한국음식, 야식, 해장, 관광객 추천 메뉴를 정리한 도야짬뽕 블로그.",
    eyebrow: "DOYA Blog",
    h1: "호치민 짬뽕, 야식, 해장, 관광객 맛집 가이드",
    subtitle: "호치민 1군에서 한국식 중화요리, 매운 짬뽕, 짜장면, 탕수육, 늦은 식사 장소를 찾는 손님을 위한 글입니다."
  },
  en: {
    title: "DOYA JJAMBBONG Blog | Korean Spicy Noodles and Korean-Chinese Food in Saigon",
    description: "Guides for Korean spicy noodles, jjambbong, champong, late-night Korean food, hangover soup, and Korean-Chinese food in District 1.",
    eyebrow: "DOYA Blog",
    h1: "Korean spicy noodles and Korean-Chinese food in Saigon",
    subtitle: "Helpful guides for tourists and locals searching jjambbong, champong, Korean hangover soup, and late-night Korean food in District 1."
  },
  zh: {
    title: "DOYA JJAMBBONG 博客 | 胡志明市韩国餐厅与韩式中餐",
    description: "关于胡志明市第1郡韩国餐厅、champong 辣海鲜面、jjambbong、韩式炸酱面、夜宵和韩式中餐的指南.",
    eyebrow: "DOYA Blog",
    h1: "胡志明市韩国餐厅、辣海鲜面和韩式中餐指南",
    subtitle: "帮助中国客人和游客了解 champong, jjambbong, 韩式炸酱面、韩国夜宵和第1郡 DOYA JJAMBBONG."
  }
};

export function generateStaticParams() {
  return site.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const copy = blogCopy[locale] ?? blogCopy[site.defaultLocale as Locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `${site.baseUrl}${blogPath(locale)}`,
      languages: Object.fromEntries(site.locales.map((lang) => [lang, `${site.baseUrl}${blogPath(lang)}`]))
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${site.baseUrl}${blogPath(locale)}`,
      siteName: site.name,
      type: "website"
    }
  };
}

export default async function BlogIndexPage({ params }: { params: Promise<PageParams> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const copy = blogCopy[locale] ?? blogCopy[site.defaultLocale as Locale];
  const posts = getBlogPosts(locale);

  return (
    <>
      <Header locale={locale} slug="about" activeSection="blog" />
      <main>
        <section className="noise bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
            <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black text-ink md:text-6xl">{copy.h1}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70">{copy.subtitle}</p>
          </div>
        </section>

        <section className="bg-bone">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 py-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={blogPath(locale, post.slug)}
                className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-wide text-chili">{post.eyebrow}</p>
                  <h2 className="mt-2 text-xl font-black leading-tight text-ink group-hover:text-chili">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink/65">{post.description}</p>
                  <p className="mt-4 text-xs font-bold text-ink/50">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <StickyCta locale={locale} />
    </>
  );
}
