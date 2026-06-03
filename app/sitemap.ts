import type { MetadataRoute } from "next";
import { blogPath, blogPosts } from "@/data/blog";
import { menuDetailSlugs, menuDetailUrl } from "@/data/menu-details";
import { absoluteUrl, Locale, paths, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rootPages = [
    {
      url: `${site.baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4
    }
  ];

  const pages = site.locales.flatMap((locale) =>
    paths.map((slug) => ({
      url: absoluteUrl(locale, slug),
      lastModified: new Date(),
      changeFrequency: slug === "" ? ("weekly" as const) : ("monthly" as const),
      priority: slug === "" ? 1 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(site.locales.map((lang) => [lang, absoluteUrl(lang, slug)])),
          "x-default": absoluteUrl(site.defaultLocale as Locale, slug)
        }
      }
    }))
  );

  const blogIndexes = site.locales.map((locale) => ({
    url: `${site.baseUrl}${blogPath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${site.baseUrl}${blogPath(post.locale, post.slug)}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const menuDetailPages = site.locales.flatMap((locale) =>
    menuDetailSlugs.map((slug) => ({
      url: menuDetailUrl(locale, slug),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          ...Object.fromEntries(site.locales.map((lang) => [lang, menuDetailUrl(lang, slug)])),
          "x-default": menuDetailUrl(site.defaultLocale as Locale, slug)
        }
      }
    }))
  );

  return [...rootPages, ...pages, ...menuDetailPages, ...blogIndexes, ...blogPages];
}
