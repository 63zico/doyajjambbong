export const site = {
  name: "DOYA JJAMBBONG",
  alternateName: "도야짬뽕",
  defaultLocale: "vi",
  locales: ["vi", "ko", "en", "zh", "ja"] as const,
  baseUrl: "https://doyajjambbong.com",
  address: "77I Bùi Thị Xuân, P. Bến Thành, Quận 1, TP. Hồ Chí Minh",
  addressDetail: "Near Bui Thi Xuan, Ben Thanh, hotels, and the District 1 nightlife area",
  phone: "0843377788",
  email: "mokpofnb@gmail.com",
  priceRange: "$$",
  openingHours: "Mo-Su 10:30-23:30",
  openingHoursText: "Daily 10:30 AM - 11:30 PM",
  mapEmbed:
    "https://www.google.com/maps?q=77I%20Bui%20Thi%20Xuan%20Ben%20Thanh%20District%201%20Ho%20Chi%20Minh%20DOYA%20JJAMBBONG&output=embed",
  links: {
    official: "https://doya.vn/",
    facebook: "https://www.facebook.com/profile.php?id=61586476047210",
    facebookMessage: "https://m.me/61586476047210",
    kakao: "https://open.kakao.com/o/sCTA4Wvi",
    delivery: "https://zalo.me/0843377788",
    googleMaps:
      "https://maps.google.com/?q=77I%20Bui%20Thi%20Xuan%20Ben%20Thanh%20District%201%20Ho%20Chi%20Minh%20DOYA%20JJAMBBONG",
    tripAdvisor:
      "https://www.tripadvisor.in/Restaurant_Review-g293925-d34325475-Reviews-DOYA_JJAMBBONG_is_a_Korean_Restaurant-Ho_Chi_Minh_City.html",
    foody:
      "https://www.foody.vn/ho-chi-minh/doya-jjambbong-korean-chinese-restaurant-mi-cay-hai-san-champong-mi-tuong-den"
  }
};

export type Locale = (typeof site.locales)[number];

export const paths = [
  "",
  "menu",
  "mi-tuong-den-han-quoc-quan-1",
  "signature-jjambbong",
  "champong-korean-chinese-food-ho-chi-minh",
  "best-champong-district-1-ho-chi-minh",
  "mi-tuong-den-quan-1-gan-bui-vien",
  "jajangmyeon-jjambbong-district-1",
  "korean-noodles-near-ben-thanh-market",
  "korean-restaurant-near-bui-vien-walking-street",
  "korean-chinese-food-ho-chi-minh",
  "korean-food-delivery-ho-chi-minh",
  "late-night-korean-food-ho-chi-minh",
  "hangover-spicy-noodles-saigon",
  "location-contact",
  "about",
  "faq",
  "reviews",
  "branches",
  "return-policy"
] as const;

export type PageSlug = (typeof paths)[number];

export function localizedPath(locale: Locale, slug: PageSlug = "") {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function absoluteUrl(locale: Locale, slug: PageSlug = "") {
  return `${site.baseUrl}${localizedPath(locale, slug)}`;
}

export function ogImageUrl(locale: Locale, slug: PageSlug = "") {
  const page = slug || "home";
  return `${site.baseUrl}/api/og?locale=${locale}&page=${page}`;
}
