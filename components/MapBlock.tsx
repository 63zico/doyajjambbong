import Image from "next/image";
import Link from "next/link";
import { uiCopy } from "@/data/ui";
import { Locale, site } from "@/lib/site";

const phoneHref = `tel:${site.phone.replaceAll(" ", "")}`;

const storeGalleryCopy: Record<Locale, { eyebrow: string; title: string; body: string; alt: [string, string, string] }> = {
  vi: {
    eyebrow: "DOYA JJAMBBONG Quan 1",
    title: "Mat tien cua hang tren Bui Thi Xuan",
    body: "Nhan biet DOYA de tim den nhanh hon tu Ben Thanh, Bui Vien va cac khach san trung tam.",
    alt: [
      "Mat tien DOYA JJAMBBONG tren duong Bui Thi Xuan, Quan 1",
      "Cua hang DOYA JJAMBBONG Quan 1 luc chieu muon",
      "Bang hieu neon DOYA JJAMBBONG ve dem tai Quan 1"
    ]
  },
  ko: {
    eyebrow: "DOYA JJAMBBONG 1군",
    title: "Bui Thi Xuan 매장 외관",
    body: "벤탄시장, 부이비엔, 1군 중심 호텔가에서 도야짬뽕을 쉽게 찾을 수 있는 실제 매장 모습입니다.",
    alt: [
      "호치민 1군 Bui Thi Xuan 거리의 도야짬뽕 매장 외관",
      "해질녘 호치민 1군 도야짬뽕 매장 전경",
      "호치민 1군 밤의 도야짬뽕 네온 간판"
    ]
  },
  en: {
    eyebrow: "DOYA JJAMBBONG District 1",
    title: "See the Bui Thi Xuan storefront",
    body: "The real DOYA storefront makes the restaurant easy to find from Ben Thanh, Bui Vien, and central District 1 hotels.",
    alt: [
      "DOYA JJAMBBONG storefront on Bui Thi Xuan in District 1 Ho Chi Minh City",
      "DOYA JJAMBBONG District 1 exterior in the late afternoon",
      "DOYA JJAMBBONG neon storefront at night in District 1 Ho Chi Minh City"
    ]
  },
  zh: {
    eyebrow: "DOYA JJAMBBONG 第1郡",
    title: "Bui Thi Xuan 的实体门店外观",
    body: "从滨城市场、Bui Vien 和第1郡中心酒店前来时，可以通过门店外观轻松找到 DOYA。",
    alt: [
      "胡志明市第1郡 Bui Thi Xuan 街上的 DOYA JJAMBBONG 门店外观",
      "傍晚的 DOYA JJAMBBONG 第1郡门店外观",
      "夜晚的 DOYA JJAMBBONG 第1郡霓虹招牌"
    ]
  },
  ja: {
    eyebrow: "DOYA JJAMBBONG 1区",
    title: "Bui Thi Xuan の店舗外観",
    body: "ベンタイン市場、ブイビエン、1区中心部のホテルから、実際の外観を目印に DOYA を見つけられます。",
    alt: [
      "ホーチミン1区 Bui Thi Xuan 通りの DOYA JJAMBBONG 店舗外観",
      "夕方のホーチミン1区 DOYA JJAMBBONG 店舗外観",
      "夜のホーチミン1区 DOYA JJAMBBONG ネオン看板"
    ]
  }
};

const storePhotos = [
  "/images/store/doya-district-1-streetfront-day.png",
  "/images/store/doya-district-1-exterior-sunset.png",
  "/images/store/doya-district-1-neon-night.png"
];

export function MapBlock({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].map;
  const cta = uiCopy[locale].cta;
  const galleryCopy = storeGalleryCopy[locale];

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-ink md:text-4xl">{copy.title}</h2>
          <div className="mt-5 space-y-3 text-base leading-7 text-ink/75">
            <p>{copy.body1}</p>
            <p>{copy.body2}</p>
            <p>
              {copy.hours}: <strong>10:30 - 23:30</strong>
              <br />
              {copy.phone}: <strong>{site.phone}</strong>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={site.links.googleMaps} className="rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
              {copy.google}
            </Link>
            <Link href={phoneHref} className="rounded-md border border-ink/15 px-4 py-3 text-sm font-black text-ink">
              {cta.call}
            </Link>
            <Link href={site.links.delivery} className="rounded-md border border-ink/15 px-4 py-3 text-sm font-black text-ink">
              {cta.zalo}
            </Link>
            <Link href={site.links.facebookMessage} className="rounded-md border border-ink/15 px-4 py-3 text-sm font-black text-ink">
              {copy.facebook}
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-ink/10 bg-cream">
          <iframe
            title="DOYA JJAMBBONG Google Map"
            src={site.mapEmbed}
            className="block h-[360px] w-full border-0"
            loading="eager"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 bg-white p-4">
            <p className="text-sm font-bold text-ink/70">{site.address}</p>
            <Link href={site.links.googleMaps} className="rounded-md bg-chili px-4 py-3 text-sm font-black text-white">
              {copy.google}
            </Link>
          </div>
        </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-chili">{galleryCopy.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">{galleryCopy.title}</h2>
            <p className="mt-4 leading-7 text-ink/70">{galleryCopy.body}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {storePhotos.map((photo, index) => (
              <div key={photo} className="relative aspect-[3/4] overflow-hidden rounded-lg border border-ink/10 bg-soy shadow-sm">
                <Image src={photo} alt={galleryCopy.alt[index]} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
