import type { Metadata } from "next";
import { pageContent } from "@/data/content";
import { faqs } from "@/data/faq";
import { menuItems } from "@/data/menu";
import { menuDetailSlugByName, menuDetailUrl } from "@/data/menu-details";
import { hoChiMinhBranches } from "@/data/branches";
import { absoluteUrl, Locale, localizedPath, ogImageUrl, PageSlug, site } from "@/lib/site";

const baseKeywords = [
  "DOYA JJAMBBONG",
  "Doya Jjambbong Ho Chi Minh",
  "호치민 짬뽕",
  "호치민 짜장면",
  "호치민 한식 중식",
  "호치민 중국집",
  "호치민 한국 중국집",
  "1군 짬뽕",
  "호치민 한국식 짬뽕",
  "호치민 야식",
  "호치민 해장",
  "호치민 매운음식",
  "jjambbong Ho Chi Minh",
  "Jjamppong Ho Chi Minh",
  "jjamppong Ho Chi Minh",
  "champong Ho Chi Minh",
  "champong District 1",
  "champon Ho Chi Minh",
  "Korean spicy seafood noodles",
  "Korean noodles Ho Chi Minh",
  "Late night food Ho Chi Minh",
  "Spicy noodles Ho Chi Minh",
  "Korean comfort food Ho Chi Minh",
  "Best Korean restaurant District 1",
  "Hangover food Saigon",
  "Late night Korean food Saigon",
  "spicy seafood noodles",
  "extremely spicy noodles",
  "korean spicy soup",
  "fire noodles soup",
  "wok hei noodles",
  "Mì cay Ho Chi Minh",
  "Mì cay Quận 1",
  "Mì cay Sài Gòn",
  "mì cay Hàn Quốc",
  "mì hải sản cay",
  "quán jjambbong Hàn Quốc",
  "quán ăn Hàn Quốc quận 1",
  "ăn khuya quận 1",
  "đồ ăn cay Hàn Quốc",
  "quán Hàn mở khuya",
  "quán Hàn Quốc ngon quận 1",
  "quán người Hàn ở Sài Gòn",
  "mì cay hải sản",
  "mì siêu cay",
  "cay xé lưỡi",
  "mì cay kiểu Hàn",
  "Korean food Ho Chi Minh",
  "Chinese food Ho Chi Minh",
  "Korean Chinese food Ho Chi Minh",
  "Korean Chinese restaurant Ho Chi Minh",
  "Korean restaurant District 1",
  "Korean food near Bui Vien",
  "Korean restaurant near Bui Vien",
  "Korean food near District 3",
  "Korean restaurant drinks District 1",
  "soju District 1 Ho Chi Minh",
  "Korean restaurant with soju Ho Chi Minh",
  "where to eat after bar in Saigon",
  "best late night restaurant Saigon",
  "food after drinking in Ho Chi Minh",
  "spicy soup after drinking",
  "open until late restaurant district 1",
  "best noodles in Saigon",
  "hidden Korean restaurant Saigon",
  "late night",
  "open late",
  "hangover food",
  "korean spicy noodles",
  "korean chinese food",
  "district 1 restaurant",
  "seafood noodles",
  "black bean noodles",
  "authentic Korean flavor",
  "호치민 술먹고 해장",
  "호치민 새벽 맛집",
  "호치민 야식 맛집",
  "호치민 부이비엔 근처 맛집",
  "호치민 한국인 맛집",
  "미친매운짬뽕",
  "불짬뽕",
  "해장짬뽕",
  "불맛짬뽕",
  "cafe menu District 1",
  "Korean restaurant near District 3",
  "spicy seafood noodles Saigon",
  "mì tương đen Ho Chi Minh",
  "mì tương đen Quận 1",
  "mì tương đen Hàn Quốc",
  "mi tuong den Ho Chi Minh",
  "mi tuong den Quan 1",
  "mi tuong den Han Quoc",
  "jajangmyeon Ho Chi Minh",
  "Korean black bean noodles",
  "tokbokki",
  "tteokbokki",
  "tteokbokki Ho Chi Minh",
  "Korean spicy rice cakes",
  "bánh gạo cay Hàn Quốc",
  "tangsuyuk Ho Chi Minh",
  "Korean sweet and sour pork",
  "thịt heo chiên sốt chua ngọt Hàn Quốc",
  "kkanpunggi Ho Chi Minh",
  "spicy garlic fried chicken Korean Chinese",
  "gà chiên sốt cay tỏi",
  "vegetarian options Ho Chi Minh",
  "vegetarian Korean food District 1",
  "món chay Quận 1",
  "món chay Hàn Quốc",
  "호치민 채식 메뉴",
  "호치민 채식 가능 식당"
];

const pageKeywordMap: Partial<Record<PageSlug, string[]>> = {
  "": ["Korean food District 1", "Chinese food District 1", "champong District 1", "Mì cay Quận 1", "Korean food near Bui Vien", "Korean food near District 3"],
  menu: [
    "DOYA menu",
    "champong menu",
    "Korean Chinese food menu",
    "Korean noodles menu",
    "jjambbong Ho Chi Minh",
    "champong District 1",
    "Korean spicy seafood noodles",
    "menu mì cay",
    "menu mì tương đen",
    "mi tuong den menu",
    "mì tương đen Hàn Quốc",
    "Korean black bean noodles",
    "tteokbokki Ho Chi Minh",
    "Korean spicy rice cakes",
    "tangsuyuk Ho Chi Minh",
    "Korean sweet and sour pork",
    "kkanpunggi Ho Chi Minh",
    "spicy garlic fried chicken Korean Chinese",
    "Korean restaurant drinks District 1",
    "soju menu Ho Chi Minh",
    "trà sữa Quận 1",
    "soda chanh dây Quận 1",
    "cafe menu District 1",
    "highball District 1",
    "호치민 1군 소주",
    "호치민 1군 음료",
    "호치민 카페 메뉴"
  ],
  "signature-jjambbong": ["signature jjambbong", "champong", "Korean spicy seafood noodle soup", "Mì cay Hàn Quốc"],
  "champong-korean-chinese-food-ho-chi-minh": ["champong Ho Chi Minh", "champon District 1", "jjamppong Saigon", "Mì cay hải sản"],
  "korean-chinese-food-ho-chi-minh": ["Korean Chinese food Ho Chi Minh", "Korean style Chinese food", "Chinese Korean restaurant", "mì tương đen Hàn Quốc", "mi tuong den Han Quoc", "jajangmyeon Ho Chi Minh"],
  "korean-food-delivery-ho-chi-minh": [
    "Korean restaurant reservation Ho Chi Minh",
    "Korean food reservation District 1",
    "KakaoTalk reservation Ho Chi Minh",
    "Korean food delivery Ho Chi Minh",
    "Korean food delivery District 1",
    "jjambbong delivery Ho Chi Minh",
    "Mì cay giao hàng Quận 1",
    "KakaoTalk food order Ho Chi Minh",
    "Zalo food order Ho Chi Minh",
    "phone order Korean food Ho Chi Minh"
  ],
  "late-night-korean-food-ho-chi-minh": [
    "late night Korean food",
    "Late night food Ho Chi Minh",
    "Late night Korean food Saigon",
    "late night Chinese food",
    "late night noodles Ho Chi Minh",
    "where to eat after bar in Saigon",
    "best late night restaurant Saigon",
    "open until late restaurant district 1",
    "food after drinking in Ho Chi Minh",
    "Mì cay ăn khuya",
    "ăn khuya quận 1",
    "quán Hàn mở khuya",
    "호치민 야식",
    "호치민 새벽 맛집",
    "호치민 야식 맛집",
    "호치민 술먹고 해장"
  ],
  "hangover-spicy-noodles-saigon": [
    "Hangover food Saigon",
    "hangover noodles Saigon",
    "champong hangover food",
    "Korean hangover soup",
    "spicy soup after drinking",
    "korean spicy soup",
    "spicy seafood noodles",
    "Mì cay giải rượu",
    "mì cay hải sản",
    "mì cay kiểu Hàn",
    "호치민 해장",
    "해장짬뽕",
    "불맛짬뽕",
    "호치민 매운음식"
  ],
  "location-contact": [
    "Korean food near Bui Thi Xuan",
    "Korean food near Bui Vien",
    "Korean restaurant near District 3",
    "Chinese food near Ben Thanh",
    "DOYA Bui Thi Xuan",
    "district 1 restaurant",
    "Best Korean restaurant District 1",
    "korean food near Bui Vien",
    "hidden Korean restaurant Saigon",
    "quán Hàn Quốc ngon quận 1",
    "quán người Hàn ở Sài Gòn",
    "호치민 부이비엔 근처 맛집",
    "호치민 한국인 맛집"
  ],
  branches: ["Doya Jjambbong branches", "Doya Jjambbong Sky Garden", "Doya Jjambbong Thao Dien"]
};

export function metadataFor(locale: Locale, slug: PageSlug): Metadata {
  const page = pageContent[locale][slug];
  const languages = Object.fromEntries(site.locales.map((lang) => [lang, absoluteUrl(lang, slug)]));
  const keywords = [...baseKeywords, ...(pageKeywordMap[slug] ?? [])];

  return {
    title: page.title,
    description: page.description,
    keywords,
    category: "restaurant",
    creator: site.name,
    publisher: site.name,
    metadataBase: new URL(site.baseUrl),
    alternates: {
      canonical: absoluteUrl(locale, slug),
      languages: {
        ...languages,
        "x-default": absoluteUrl(site.defaultLocale as Locale, slug)
      }
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(locale, slug),
      siteName: site.name,
      locale,
      type: "website",
      images: [
        {
          url: ogImageUrl(locale, slug),
          width: 1200,
          height: 630,
          alt: `${site.name} Korean spicy seafood noodles`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImageUrl(locale, slug)]
    },
    other: {
      "geo.region": "VN-SG",
      "geo.placename": "District 1, Ho Chi Minh City",
      "business:contact_data:street_address": "77I Bùi Thị Xuân",
      "business:contact_data:locality": "Ho Chi Minh City",
      "business:contact_data:region": "District 1",
      "business:contact_data:country_name": "Vietnam",
      "business:contact_data:phone_number": site.phone
    }
  };
}

export function restaurantJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.baseUrl}/#restaurant`,
    name: site.name,
    alternateName: site.alternateName,
    description: pageContent[locale][""].summary,
    url: absoluteUrl(locale, ""),
    image: ogImageUrl(locale, ""),
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "77I Bùi Thị Xuân",
      addressLocality: "Ho Chi Minh City",
      addressRegion: "District 1",
      postalCode: "700000",
      addressCountry: "VN"
    },
    openingHours: site.openingHours,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:30",
        closes: "23:30"
      }
    ],
    cuisine: "Korean-Chinese, Korean, Noodles, Seafood",
    servesCuisine: ["Korean-Chinese", "Korean", "Chinese", "Noodles", "Seafood"],
    areaServed: [
      "District 1",
      "Ben Thanh",
      "Bui Thi Xuan",
      "Bui Vien",
      "District 3",
      "Ho Chi Minh City",
      "Saigon"
    ],
    knowsAbout: [
      "jjambbong",
      "champong",
      "jjamppong",
      "Mì cay",
      "mì cay Hàn Quốc",
      "mì hải sản cay",
      "mì tương đen",
      "mi tuong den",
      "mì tương đen Hàn Quốc",
      "jajangmyeon",
      "tangsuyuk",
      "Korean food",
      "Chinese food",
      "Korean-Chinese food",
      "late-night food",
      "food delivery District 1"
    ],
    keywords: baseKeywords.join(", "),
    acceptsReservations: true,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "orders and customer service",
        areaServed: "VN",
        availableLanguage: ["Korean", "Vietnamese", "English"]
      }
    ],
    hasMenu: absoluteUrl(locale, "menu"),
    menu: absoluteUrl(locale, "menu"),
    sameAs: [site.links.official, site.links.facebook, site.links.googleMaps, site.links.tripAdvisor, site.links.foody, site.links.kakao, site.links.delivery],
    potentialAction: [
      {
        "@type": "OrderAction",
        target: site.links.delivery,
        deliveryMethod: ["https://schema.org/OnSitePickup", "https://schema.org/DeliveryModeOwnFleet"]
      },
      {
        "@type": "OrderAction",
        target: site.links.kakao,
        deliveryMethod: ["https://schema.org/OnSitePickup", "https://schema.org/DeliveryModeOwnFleet"]
      },
      {
        "@type": "CommunicateAction",
        target: `tel:${site.phone}`,
        name: "Phone order"
      }
    ]
  };
}

export function branchesJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DOYA JJAMBBONG Ho Chi Minh branch guide",
    url: absoluteUrl(locale, "branches"),
    itemListElement: hoChiMinhBranches.map((branch, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Restaurant",
        name: branch.name,
        alternateName: branch.koreanName,
        address: branch.address,
        telephone: branch.phone,
        servesCuisine: ["Korean-Chinese", "Korean", "Chinese", "Noodles", "Seafood"],
        keywords: branch.keywords.join(", ")
      }
    }))
  };
}

export function menuJsonLd(locale: Locale) {
  const priceValue = (price?: string) => {
    const match = price?.match(/\d[\d,]*/);
    return match ? match[0].replace(/,/g, "") : undefined;
  };

  const hasMenuItem = menuItems.map((item) => {
    const detailSlug = menuDetailSlugByName[item.name];
    const url = detailSlug ? menuDetailUrl(locale, detailSlug) : absoluteUrl(locale, "menu");

    return {
      "@type": "MenuItem",
      name: item.name,
      alternateName: [item.koreanName, item.vietnameseName].filter(Boolean),
      description: item.description,
      keywords: item.tags.join(", "),
      url,
      image: item.image ? `${site.baseUrl}${item.image}` : undefined,
      offers: {
        "@type": "Offer",
        priceCurrency: "VND",
        price: priceValue(item.price),
        url,
        availability: "https://schema.org/InStock"
      }
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${site.name} Menu`,
    url: absoluteUrl(locale, "menu"),
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Korean-Chinese noodles and comfort food",
        hasMenuItem
      }
    ]
  };
}

export function faqJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs[locale].map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbJsonLd(locale: Locale, slug: PageSlug) {
  const page = pageContent[locale][slug];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${site.baseUrl}${localizedPath(locale)}`
      },
      ...(slug
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: page.nav,
              item: absoluteUrl(locale, slug)
            }
          ]
        : [])
    ]
  };
}
