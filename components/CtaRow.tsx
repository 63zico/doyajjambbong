import Link from "next/link";
import { uiCopy } from "@/data/ui";
import { Locale, site, localizedPath } from "@/lib/site";

const phoneHref = `tel:${site.phone.replaceAll(" ", "")}`;

function orderGuideCopy(locale: Locale) {
  if (locale === "ko") {
    return {
      title: "문의할 때 이렇게 보내면 빨라요",
      items: ["방문 예약: 인원수, 날짜, 시간", "배달/포장: 메뉴, 수량, 주소", "근처 위치: 호텔명, 부이비엔, 3군 근처 여부"],
      comboTitle: "추천 주문 조합",
      combos: ["도야짬뽕 + 탕수육", "짜장면 + 군만두", "짬뽕탕 + 술안주메뉴"]
    };
  }

  if (locale === "vi") {
    return {
      title: "Gửi thông tin này để đặt nhanh hơn",
      items: ["Đặt bàn: số người, ngày, giờ", "Giao hàng/takeaway: món, số lượng, địa chỉ", "Vị trí gần bạn: tên khách sạn, Bùi Viện, gần Quận 3"],
      comboTitle: "Gợi ý gọi món",
      combos: ["Mì cay DOYA + tangsuyuk", "Jajangmyeon + mandu chiên", "Súp jjambbong + món nhậu"]
    };
  }

  if (locale === "zh") {
    return {
      title: "发送这些信息可以更快确认",
      items: ["订位: 人数、日期、时间", "外卖/外带: 菜名、数量、地址", "附近地标: 酒店名、Bui Vien 或 District 3 附近"],
      comboTitle: "推荐组合",
      combos: ["DOYA jjambbong + 糖醋肉", "韩式炸酱面 + 煎饺", "Jjambbong 汤 + 下酒菜"]
    };
  }

  if (locale === "ja") {
    return {
      title: "この内容を送ると確認が早いです",
      items: ["予約: 人数、日付、時間", "デリバリー/持ち帰り: メニュー、数量、住所", "近くの目印: ホテル名、ブイビエン、3区付近など"],
      comboTitle: "おすすめ注文",
      combos: ["DOYA jjambbong + タンスユク", "ジャージャー麺 + 焼き餃子", "チャンポン鍋 + おつまみ"]
    };
  }

  return {
    title: "Send this for faster ordering",
    items: ["Reservation: party size, date, time", "Delivery/takeaway: menu, quantity, address", "Nearby landmark: hotel name, Bui Vien, near District 3"],
    comboTitle: "Suggested combos",
    combos: ["DOYA jjambbong + tangsuyuk", "Jajangmyeon + fried mandu", "Jjambbong soup + drinking snacks"]
  };
}

export function CtaRow({ locale, orderHref }: { locale: Locale; orderHref?: string }) {
  const copy = uiCopy[locale].cta;
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link href={localizedPath(locale, "menu")} className="rounded-md bg-chili px-5 py-3 text-center text-sm font-black text-white shadow-glow hover:bg-flame">
        {copy.menu}
      </Link>
      <Link href={site.links.googleMaps} className="rounded-md bg-ink px-5 py-3 text-center text-sm font-black text-cream hover:bg-soy">
        {copy.directions}
      </Link>
      <Link href={orderHref ?? localizedPath(locale, "korean-food-delivery-ho-chi-minh")} className="rounded-md border border-ink/15 bg-white px-5 py-3 text-center text-sm font-black text-ink hover:border-chili">
        {copy.order}
      </Link>
    </div>
  );
}

export function OrderMethodButtons({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale].cta;
  const guide = orderGuideCopy(locale);
  return (
    <section id="order-methods" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-lg border border-ink/10 bg-bone p-5 md:p-7">
          <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.orderMethodsTitle}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">{copy.orderMethodsBody}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Link href={site.links.kakao} className="rounded-md bg-[#FEE500] px-5 py-4 text-center text-sm font-black text-[#191600]">
              {copy.kakao}
            </Link>
            <Link href={site.links.delivery} className="rounded-md bg-chili px-5 py-4 text-center text-sm font-black text-white shadow-glow">
              {copy.zalo}
            </Link>
            <Link href={phoneHref} className="rounded-md bg-ink px-5 py-4 text-center text-sm font-black text-cream">
              {copy.phoneOrder}
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-ink/10 bg-white p-4">
              <h2 className="text-base font-black text-ink">{guide.title}</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/70">
                {guide.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-ink/10 bg-white p-4">
              <h2 className="text-base font-black text-ink">{guide.comboTitle}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {guide.combos.map((combo) => (
                  <span key={combo} className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-black text-ink/70">
                    {combo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
