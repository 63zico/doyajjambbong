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
import { Locale, site } from "@/lib/site";

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
