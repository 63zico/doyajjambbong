import { Locale, PageSlug } from "@/lib/site";

export type PageContent = {
  slug: PageSlug;
  nav: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  subtitle: string;
  summary: string;
  sections: { heading: string; body: string }[];
};

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語"
};

export const navLabels: Record<Locale, Record<PageSlug, string>> = {
  vi: {
    "": "Trang chủ",
    menu: "Thực đơn",
    "mi-tuong-den-han-quoc-quan-1": "Mì tương đen",
    "signature-jjambbong": "Jjambbong đặc trưng",
    "champong-korean-chinese-food-ho-chi-minh": "Champong Quận 1",
    "best-champong-district-1-ho-chi-minh": "Best champong Q1",
    "mi-tuong-den-quan-1-gan-bui-vien": "Mì tương đen Bùi Viện",
    "jajangmyeon-jjambbong-district-1": "Jajangmyeon & jjambbong",
    "korean-noodles-near-ben-thanh-market": "Mì Hàn gần Bến Thành",
    "korean-restaurant-near-bui-vien-walking-street": "Món Hàn gần Bùi Viện",
    "korean-chinese-food-ho-chi-minh": "Món Hàn-Trung",
    "korean-food-delivery-ho-chi-minh": "Đặt bàn / Giao hàng",
    "late-night-korean-food-ho-chi-minh": "Ăn khuya",
    "hangover-spicy-noodles-saigon": "Mì cay giải rượu",
    "location-contact": "Địa điểm",
    about: "Về DOYA",
    faq: "FAQ",
    reviews: "Đánh giá",
    branches: "Chi nhánh",
    "return-policy": "Chính sách đổi trả"
  },
  ko: {
    "": "홈",
    menu: "메뉴",
    "mi-tuong-den-han-quoc-quan-1": "짜장면",
    "signature-jjambbong": "대표 짬뽕",
    "champong-korean-chinese-food-ho-chi-minh": "champong 검색",
    "best-champong-district-1-ho-chi-minh": "1군 champong",
    "mi-tuong-den-quan-1-gan-bui-vien": "부이비엔 짜장면",
    "jajangmyeon-jjambbong-district-1": "짜장면 짬뽕",
    "korean-noodles-near-ben-thanh-market": "벤탄 근처 한식면",
    "korean-restaurant-near-bui-vien-walking-street": "부이비엔 한식당",
    "korean-chinese-food-ho-chi-minh": "한국식 중화요리",
    "korean-food-delivery-ho-chi-minh": "예약/배달",
    "late-night-korean-food-ho-chi-minh": "호치민 야식",
    "hangover-spicy-noodles-saigon": "사이공 해장 매운면",
    "location-contact": "위치 / 연락처",
    about: "도야 소개",
    faq: "FAQ",
    reviews: "리뷰",
    branches: "호치민 지점",
    "return-policy": "환불/반품 정책"
  },
  en: {
    "": "Home",
    menu: "Menu",
    "mi-tuong-den-han-quoc-quan-1": "Black Bean Noodles",
    "signature-jjambbong": "Signature Jjambbong",
    "champong-korean-chinese-food-ho-chi-minh": "Champong",
    "best-champong-district-1-ho-chi-minh": "Best Champong D1",
    "mi-tuong-den-quan-1-gan-bui-vien": "Mi Tuong Den Bui Vien",
    "jajangmyeon-jjambbong-district-1": "Jajangmyeon & Jjambbong",
    "korean-noodles-near-ben-thanh-market": "Noodles Near Ben Thanh",
    "korean-restaurant-near-bui-vien-walking-street": "Near Bui Vien",
    "korean-chinese-food-ho-chi-minh": "Korean Chinese Food",
    "korean-food-delivery-ho-chi-minh": "Reservation / Delivery",
    "late-night-korean-food-ho-chi-minh": "Late Night",
    "hangover-spicy-noodles-saigon": "Hangover Noodles",
    "location-contact": "Location",
    about: "About",
    faq: "FAQ",
    reviews: "Reviews",
    branches: "Branches",
    "return-policy": "Return Policy"
  },
  zh: {
    "": "首页",
    menu: "菜单",
    "mi-tuong-den-han-quoc-quan-1": "韩式炸酱面",
    "signature-jjambbong": "招牌辣海鲜面",
    "champong-korean-chinese-food-ho-chi-minh": "Champong 辣海鲜面",
    "best-champong-district-1-ho-chi-minh": "第1郡 Champong",
    "mi-tuong-den-quan-1-gan-bui-vien": "Bui Vien 炸酱面",
    "jajangmyeon-jjambbong-district-1": "炸酱面和辣海鲜面",
    "korean-noodles-near-ben-thanh-market": "滨城市场韩式面",
    "korean-restaurant-near-bui-vien-walking-street": "Bui Vien 韩国餐厅",
    "korean-chinese-food-ho-chi-minh": "韩式中餐",
    "korean-food-delivery-ho-chi-minh": "预订 / 外卖",
    "late-night-korean-food-ho-chi-minh": "夜宵",
    "hangover-spicy-noodles-saigon": "醒酒辣面",
    "location-contact": "位置",
    about: "关于 DOYA",
    faq: "FAQ",
    reviews: "评价",
    branches: "分店",
    "return-policy": "退换政策"
  },
  ja: {
    "": "ホーム",
    menu: "メニュー",
    "mi-tuong-den-han-quoc-quan-1": "韓国式ジャージャー麺",
    "signature-jjambbong": "看板チャンポン",
    "champong-korean-chinese-food-ho-chi-minh": "チャンポン",
    "best-champong-district-1-ho-chi-minh": "1区チャンポン",
    "mi-tuong-den-quan-1-gan-bui-vien": "ブイビエン近くジャージャー麺",
    "jajangmyeon-jjambbong-district-1": "ジャージャー麺とチャンポン",
    "korean-noodles-near-ben-thanh-market": "ベンタイン近く韓国麺",
    "korean-restaurant-near-bui-vien-walking-street": "ブイビエン近く韓国料理",
    "korean-chinese-food-ho-chi-minh": "韓国中華",
    "korean-food-delivery-ho-chi-minh": "予約 / デリバリー",
    "late-night-korean-food-ho-chi-minh": "深夜の韓国料理",
    "hangover-spicy-noodles-saigon": "辛い海鮮麺",
    "location-contact": "場所",
    about: "DOYA について",
    faq: "FAQ",
    reviews: "レビュー",
    branches: "店舗",
    "return-policy": "返品ポリシー"
  }
};

export const pageContent = {
  vi: {
    "": {
      slug: "",
      nav: "Trang chủ",
      title: "DOYA JJAMBBONG | Korean restaurant, mì cay và champong tại Quận 1",
      description:
        "DOYA JJAMBBONG là Korean restaurant tại Quận 1, phục vụ mì cay Hàn Quốc, champong jjambbong, mi tuong den jajangmyeon và tangsuyuk gần Bến Thành, Bùi Viện.",
      eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
      h1: "Mì cay Hàn Quốc tại Quận 1, TP. Hồ Chí Minh",
      subtitle: "Jjambbong, mì tương đen jajangmyeon và món Hàn-Trung nóng hổi cho bữa trưa, bữa tối và ăn khuya ở trung tâm Sài Gòn.",
      summary:
        "DOYA JJAMBBONG là Korean restaurant và nhà hàng Hàn-Trung tại Quận 1, TP. Hồ Chí Minh, chuyên mì cay Hàn Quốc, champong jjambbong, mi tuong den jajangmyeon và các món Hàn dễ ăn cho khách địa phương, khách du lịch và người Hàn tại Sài Gòn.",
      sections: [
        {
          heading: "Nằm tại 77I Bùi Thị Xuân, Quận 1",
          body:
            "DOYA phù hợp cho khách tìm món Hàn gần Bùi Thị Xuân, Bến Thành, khách sạn, khu du lịch và khu nightlife trung tâm."
        },
        {
          heading: "Mở cửa từ 10:30 đến 23:30",
          body:
            "Một lựa chọn dễ ghé cho bữa trưa, bữa tối, món cay ấm bụng và mì giải rượu kiểu Hàn tại Sài Gòn."
        }
      ]
    },
    menu: {
      slug: "menu",
      nav: "Thực đơn",
      title: "Thực đơn DOYA | Mì cay, Mì tương đen Jajangmyeon tại Sài Gòn",
      description:
        "Xem thực đơn DOYA với mì cay Hàn Quốc, mì hải sản cay, mì tương đen Hàn Quốc, tteokbokki, tangsuyuk và gà chiên sốt cay tỏi tại Quận 1.",
      eyebrow: "Thực đơn DOYA",
      h1: "Thực đơn Hàn-Trung dễ gọi",
      subtitle: "Món cay, món không cay, món chia sẻ và cơm nóng cho mọi nhóm khách.",
      summary:
        "Thực đơn DOYA tập trung vào các món Hàn-Trung dễ hiểu: mì cay jjambbong hải sản, mì tương đen Hàn Quốc, mi tuong den, jajangmyeon, tangsuyuk, kkanpunggi và bánh gạo cay Hàn Quốc.",
      sections: [{ heading: "Dễ chọn, dễ gọi", body: "Mỗi món có nhãn độ cay và gợi ý rõ ràng để khách Việt, khách Hàn và khách du lịch gọi nhanh hơn." }]
    },
    "mi-tuong-den-han-quoc-quan-1": {
      slug: "mi-tuong-den-han-quoc-quan-1",
      nav: "Mì tương đen",
      title: "Mì tương đen Hàn Quốc tại Quận 1 | Jajangmyeon DOYA JJAMBBONG",
      description:
        "Ăn mì tương đen Hàn Quốc, jajangmyeon và mì sốt đậu đen kiểu Hàn tại DOYA JJAMBBONG Quận 1, gần Bến Thành và Bùi Viện. Có đặt bàn, mang đi và giao hàng.",
      eyebrow: "Mì tương đen / Jajangmyeon",
      h1: "Mì tương đen Hàn Quốc tại Quận 1",
      subtitle: "Jajangmyeon không cay, dễ ăn, hợp gọi cùng tangsuyuk, mandu hoặc một tô jjambbong cay nóng.",
      summary:
        "DOYA JJAMBBONG phục vụ mì tương đen Hàn Quốc, còn gọi là jajangmyeon, tại 77I Bùi Thị Xuân, Quận 1, gần Bến Thành và Bùi Viện. Đây là món mì sốt đậu đen kiểu Hàn Quốc dễ ăn, không cay, phù hợp cho khách Việt, khách du lịch và người Hàn tại TP. Hồ Chí Minh.",
      sections: [
        {
          heading: "Mì tương đen là gì?",
          body:
            "Mì tương đen, mi tuong den hoặc jajangmyeon là món mì Hàn Quốc dùng sốt đậu đen xào đậm vị. Món này không cay như jjambbong nên dễ ăn với khách Việt và khách du lịch."
        },
        {
          heading: "Ăn mì tương đen ở đâu tại Quận 1?",
          body:
            "DOYA nằm tại 77I Bùi Thị Xuân, P. Bến Thành, Quận 1, thuận tiện cho khách ở gần Bến Thành, Bùi Viện, khách sạn trung tâm và khu du lịch."
        },
        {
          heading: "Gợi ý gọi món",
          body:
            "Nếu đi nhóm, hãy gọi mì tương đen cùng tangsuyuk, mandu hoặc jjambbong. Một món không cay và một món cay giúp bữa ăn cân bằng hơn."
        }
      ]
    },
    "signature-jjambbong": {
      slug: "signature-jjambbong",
      nav: "Jjambbong đặc trưng",
      title: "Jjambbong đặc trưng | Mì cay Hàn Quốc tại Quận 1",
      description:
        "Jjambbong đặc trưng của DOYA là mì cay Hàn Quốc với nước dùng hải sản đỏ đậm vị, phù hợp cho người thích món cay tại Quận 1.",
      eyebrow: "Signature bowl",
      h1: "Mì cay jjambbong đặc trưng của DOYA",
      subtitle: "Nước dùng đỏ đậm vị, hải sản, rau và hương thơm kiểu Hàn-Trung.",
      summary:
        "Món DOYA Jjambbong dành cho khách tìm mì cay Hàn Quốc, mì cay hải sản tại Sài Gòn, jjambbong Quận 1 hoặc món hải sản cay nóng sau một ngày dài.",
      sections: [
        { heading: "Nước dùng đỏ đậm", body: "Vị cay, vị hải sản và mùi áp chảo tạo nên bát mì ấm, rõ vị và dễ nhớ." },
        { heading: "Dành cho người thích cay", body: "Phù hợp cho bữa tối, ăn khuya hoặc khi cần một món nóng giúp tỉnh người." }
      ]
    },
    "champong-korean-chinese-food-ho-chi-minh": {
      slug: "champong-korean-chinese-food-ho-chi-minh",
      nav: "Champong Quận 1",
      title: "Champong Quận 1 | Mì cay hải sản Hàn-Trung tại TP. Hồ Chí Minh",
      description:
        "DOYA phục vụ champong, champon hoặc jjambbong - mì hải sản cay Hàn-Trung tại 77I Bùi Thị Xuân, Quận 1, TP. Hồ Chí Minh.",
      eyebrow: "Champong / Jjambbong",
      h1: "Champong Hàn-Trung tại Quận 1",
      subtitle: "Một cách tìm khác của jjambbong: mì hải sản cay với nước dùng đỏ, rau, hải sản và hương áp chảo.",
      summary:
        "Nhiều khách du lịch tìm món này bằng champong, champon, jjamppong hoặc jjambbong. DOYA gom các cách gọi đó vào cùng một trải nghiệm mì hải sản cay Hàn-Trung tại trung tâm Sài Gòn.",
      sections: [
        { heading: "Champong là jjambbong", body: "Champong, champon và jjamppong là các cách viết phổ biến khi khách nước ngoài tìm món 짬뽕 Hàn Quốc." },
        { heading: "Gắn với địa điểm thật", body: "Trang này tập trung vào tìm kiếm champong Quận 1, Korean Chinese food Ho Chi Minh và mì hải sản cay gần Bùi Thị Xuân." }
      ]
    },
    "korean-chinese-food-ho-chi-minh": {
      slug: "korean-chinese-food-ho-chi-minh",
      nav: "Món Hàn-Trung",
      title: "Korean Restaurant Ho Chi Minh | Korean Chinese Food DOYA Quận 1",
      description:
        "Tìm Korean restaurant Ho Chi Minh, Korean food District 1 hoặc Korean Chinese food? DOYA phục vụ jjambbong, champong, mi tuong den jajangmyeon và tangsuyuk tại Quận 1.",
      eyebrow: "Korean Chinese food",
      h1: "Korean Chinese food tại Ho Chi Minh",
      subtitle: "Món Hàn và món Trung theo phong cách Hàn Quốc: jjambbong, champong, mì tương đen jajangmyeon, tangsuyuk và cơm nóng.",
      summary:
        "DOYA là lựa chọn trung tâm cho khách tìm Korean restaurant Ho Chi Minh, Korean food District 1, Korean restaurant near Ben Thanh, Chinese food District 1 hoặc Korean Chinese restaurant gần Bến Thành và Bùi Thị Xuân.",
      sections: [
        { heading: "Không phải Chinese food thông thường", body: "Đây là phong cách Hàn-Trung quen thuộc với người Hàn: mì tương đen Hàn Quốc, mi tuong den jajangmyeon, mì hải sản cay và món chiên ăn chung." },
        { heading: "Dễ hiểu cho khách quốc tế", body: "Nội dung dùng cả Korean food, Chinese food, Korean Chinese food, champong và jjambbong để khách tìm đúng món nhanh hơn." }
      ]
    },
    "korean-food-delivery-ho-chi-minh": {
      slug: "korean-food-delivery-ho-chi-minh",
      nav: "Đặt bàn / Giao hàng",
      title: "Đặt bàn và giao hàng mì cay Hàn Quốc Quận 1 | DOYA JJAMBBONG",
      description:
        "Đặt bàn, takeaway hoặc giao hàng mì cay Hàn Quốc và món Hàn-Trung tại Quận 1 qua KakaoTalk, Zalo hoặc gọi điện: jjambbong, mì tương đen jajangmyeon, tangsuyuk.",
      eyebrow: "Đặt bàn / Giao hàng",
      h1: "Đặt bàn và giao hàng DOYA JJAMBBONG",
      subtitle: "Chọn KakaoTalk, Zalo hoặc gọi điện để đặt bàn, hỏi món, takeaway hoặc giao hàng quanh Quận 1.",
      summary:
        "DOYA giúp khách đặt bàn và đặt món Hàn-Trung nhanh hơn qua KakaoTalk, Zalo và điện thoại: mì cay jjambbong, mì tương đen jajangmyeon không quá cay, tangsuyuk giòn, cơm nóng và đồ uống. Phù hợp cho bữa trưa, bữa tối, ăn khuya hoặc đặt món về khách sạn gần Bến Thành.",
      sections: [
        { heading: "3 cách đặt bàn và đặt món", body: "Chọn KakaoTalk, Zalo hoặc gọi điện trực tiếp để đặt bàn, gửi món muốn đặt và xác nhận thời gian nhận hoặc giao hàng." },
        { heading: "Từ Quận 1 dễ xử lý", body: "Địa chỉ 77I Bùi Thị Xuân gần Bến Thành, thuận tiện cho khách ở khách sạn, văn phòng và khu trung tâm." },
        { heading: "Combo dễ đặt", body: "Jjambbong, mì tương đen jajangmyeon và tangsuyuk là combo dễ hiểu cho nhóm nhỏ, khách Hàn và khách du lịch." }
      ]
    },
    "late-night-korean-food-ho-chi-minh": {
      slug: "late-night-korean-food-ho-chi-minh",
      nav: "Ăn khuya",
      title: "Mì cay ăn khuya ở TP. Hồ Chí Minh | DOYA JJAMBBONG Quận 1",
      description:
        "Tìm món ăn khuya ở Quận 1, quán Hàn mở khuya hoặc quán Hàn Quốc ngon quận 1? DOYA phục vụ mì cay Hàn Quốc, mì tương đen và tangsuyuk.",
      eyebrow: "Ăn khuya Quận 1",
      h1: "Món Hàn ăn khuya tại trung tâm Sài Gòn",
      subtitle: "Mì nóng, nước dùng cay và món chia sẻ dễ gọi sau giờ làm hoặc sau khi đi chơi.",
      summary:
        "DOYA phù hợp cho khách tìm ăn khuya quận 1, quán Hàn mở khuya, quán người Hàn ở Sài Gòn, đồ ăn cay Hàn Quốc và món nóng gần Bùi Thị Xuân.",
      sections: [
        { heading: "Gần khu trung tâm", body: "Dễ ghé từ khách sạn, khu du lịch, Bến Thành, Bùi Thị Xuân và các tuyến phố buổi tối." },
        { heading: "Món nóng dễ ăn", body: "Jjambbong, mì tương đen jajangmyeon, tangsuyuk và cơm nóng là lựa chọn rõ ràng khi muốn ăn nhanh mà vẫn ngon." }
      ]
    },
    "hangover-spicy-noodles-saigon": {
      slug: "hangover-spicy-noodles-saigon",
      nav: "Mì cay giải rượu",
      title: "Mì cay giải rượu ở Sài Gòn | Jjambbong hải sản Hàn Quốc",
      description:
        "DOYA JJAMBBONG phục vụ mì cay giải rượu ở Sài Gòn với mì cay hải sản, mì cay kiểu Hàn, vị cay ấm và món Hàn-Trung dễ chịu.",
      eyebrow: "Hangover noodles",
      h1: "Mì cay giải rượu kiểu Hàn ở Sài Gòn",
      subtitle: "Một bát jjambbong nóng, cay và đậm vị cho những lúc cần món ăn thật đã.",
      summary:
        "Với các tìm kiếm như món cay giải rượu Sài Gòn, mì hải sản cay Hàn Quốc, mì siêu cay, cay xé lưỡi và hangover food District 1, DOYA là điểm đến dễ nhớ ở Quận 1.",
      sections: [
        { heading: "Một bát nóng sau cuộc vui", body: "Nước dùng cay, hải sản, rau và mì tạo cảm giác ấm bụng theo kiểu comfort food Hàn Quốc." },
        { heading: "Có cả món không cay", body: "Khách không ăn cay có thể chọn mì tương đen jajangmyeon, tangsuyuk hoặc cơm bulgogi." }
      ]
    },
    "location-contact": {
      slug: "location-contact",
      nav: "Địa điểm",
      title: "Địa điểm DOYA JJAMBBONG Quận 1 | 77I Bùi Thị Xuân, bản đồ, điện thoại",
      description:
        "Thông tin DOYA JJAMBBONG Quận 1 tại 77I Bùi Thị Xuân, P. Bến Thành. Xem bản đồ, giờ mở cửa, số điện thoại và đặt giao hàng.",
      eyebrow: "Địa điểm Quận 1",
      h1: "Địa điểm và liên hệ",
      subtitle: "Tìm DOYA tại Quận 1 và đi nhanh bằng Google Maps.",
      summary:
        "DOYA JJAMBBONG Quận 1 nằm tại 77I Bùi Thị Xuân, P. Bến Thành, TP. Hồ Chí Minh, thuận tiện cho khách quanh Bến Thành, khách sạn và khu vui chơi buổi tối.",
      sections: [{ heading: "Đi bằng Google Maps", body: "Dùng bản đồ để đến nhanh bằng taxi, xe máy hoặc đi bộ từ các khách sạn ở Quận 1." }]
    },
    about: {
      slug: "about",
      nav: "Về DOYA",
      title: "Về DOYA JJAMBBONG | Nhà hàng Hàn-Trung tại TP. Hồ Chí Minh",
      description:
        "DOYA JJAMBBONG là nhà hàng Hàn-Trung tại TP. Hồ Chí Minh, nổi bật với jjambbong hải sản cay, mì tương đen Hàn Quốc jajangmyeon và món Hàn ăn khuya.",
      eyebrow: "Về thương hiệu",
      h1: "Về DOYA JJAMBBONG",
      subtitle: "Hương vị Hàn-Trung quen thuộc, được trình bày dễ hiểu cho khách tại Sài Gòn.",
      summary:
        "DOYA JJAMBBONG là nhà hàng Hàn-Trung tại Quận 1, TP. Hồ Chí Minh, chuyên mì hải sản cay jjambbong, mì tương đen jajangmyeon và các món Hàn dễ ăn cho khách địa phương, khách du lịch và người Hàn tại Sài Gòn.",
      sections: [
        { heading: "Comfort food kiểu Hàn-Trung", body: "DOYA mang vị cay, nóng và đậm đà của jjambbong Hàn Quốc đến trung tâm Sài Gòn." },
        { heading: "Dễ hiểu cho khách quốc tế", body: "Website và thực đơn được thiết kế cho khách Việt, khách Hàn, khách du lịch và đơn giao hàng." }
      ]
    },
    faq: {
      slug: "faq",
      nav: "FAQ",
      title: "FAQ DOYA JJAMBBONG | Mì cay Hàn Quốc, giao hàng, địa điểm Quận 1",
      description:
        "Câu hỏi thường gặp về jjambbong, độ cay, món không cay, ăn khuya, giao hàng và vị trí DOYA JJAMBBONG Quận 1.",
      eyebrow: "FAQ",
      h1: "Câu hỏi thường gặp",
      subtitle: "Những điều cần biết trước khi ghé DOYA hoặc đặt món.",
      summary:
        "DOYA JJAMBBONG là nhà hàng Hàn-Trung tại Quận 1, TP. Hồ Chí Minh, chuyên mì hải sản cay jjambbong, mì tương đen jajangmyeon và món Hàn ăn khuya.",
      sections: []
    },
    reviews: {
      slug: "reviews",
      nav: "Đánh giá",
      title: "Đánh giá DOYA JJAMBBONG | Nhà hàng Hàn Quốc Quận 1",
      description:
        "Xem điểm nổi bật từ khách hàng của DOYA JJAMBBONG: mì hải sản cay, vị trí Quận 1, món Hàn-Trung và lựa chọn ăn khuya.",
      eyebrow: "Đánh giá",
      h1: "Khách nói gì về DOYA",
      subtitle: "Những lý do khách chọn DOYA khi muốn ăn món Hàn-Trung tại Quận 1.",
      summary:
        "Khách chọn DOYA vì mì hải sản cay, vị trí trung tâm Quận 1, món ăn nóng dễ chịu và các món Hàn-Trung quen thuộc.",
      sections: [{ heading: "Liên kết đánh giá", body: "Kết nối Google Reviews và TripAdvisor để khách có thể kiểm tra phản hồi thực tế trước khi ghé." }]
    },
    branches: {
      slug: "branches",
      nav: "Chi nhánh",
      title: "Chi nhánh DOYA JJAMBBONG tại TP. Hồ Chí Minh | Quận 1, Quận 7, Thảo Điền",
      description:
        "Danh sách chi nhánh DOYA JJAMBBONG tại TP. Hồ Chí Minh: Quận 1, Sky Garden Quận 7, Midtown, Sun Avenue và Thảo Điền.",
      eyebrow: "Chi nhánh DOYA",
      h1: "Các chi nhánh DOYA JJAMBBONG tại TP. Hồ Chí Minh",
      subtitle: "Tìm đúng địa điểm DOYA theo khu vực bạn đang ở.",
      summary:
        "Trang chi nhánh giúp khách tìm DOYA JJAMBBONG Quận 1, Phú Mỹ Hưng, Sky Garden, Midtown, Sun Avenue và Thảo Điền bằng cả tiếng Việt, tiếng Hàn và tiếng Anh.",
      sections: [
        {
          heading: "Tối ưu cho tìm kiếm địa phương",
          body:
            "Các tên như Doya Jjambbong Ho Chi Minh, 도야짬뽕 호치민, Doya Jjambbong Thao Dien, Sun Avenue và Phu My Hung được gom rõ ràng để khách tìm đúng chi nhánh."
        }
      ]
    },
    "return-policy": {
      slug: "return-policy",
      nav: "Chính sách đổi trả",
      title: "Chính sách đổi trả và hoàn tiền | DOYA JJAMBBONG",
      description: "Chính sách đổi trả, hoàn tiền và xử lý đơn hàng của DOYA JJAMBBONG Quận 1 cho đơn đặt món, mang đi và giao hàng.",
      eyebrow: "Return Policy",
      h1: "Chính sách đổi trả và hoàn tiền",
      subtitle: "Áp dụng cho món ăn đặt tại DOYA JJAMBBONG Quận 1.",
      summary: "Vì món ăn được chế biến theo đơn, DOYA không nhận đổi trả hoặc hoàn tiền do đổi ý sau khi món đã được chuẩn bị. Nếu đơn hàng sai món, thiếu món hoặc có vấn đề chất lượng, vui lòng liên hệ ngay qua điện thoại, Zalo hoặc Facebook để được hỗ trợ.",
      sections: [
        { heading: "Đơn sai hoặc thiếu món", body: "Khách vui lòng liên hệ trong ngày đặt hàng và cung cấp thông tin đơn, hình ảnh nếu có. DOYA sẽ kiểm tra và hỗ trợ đổi món, bổ sung món hoặc hoàn tiền phù hợp." },
        { heading: "Món đã chế biến", body: "Món ăn đã được chế biến, giao hoặc nhận tại quán không áp dụng hoàn tiền do đổi ý cá nhân." },
        { heading: "Liên hệ hỗ trợ", body: "Điện thoại: 0843377788. Email: mokpofnb@gmail.com. Địa chỉ: 77I Bùi Thị Xuân, P. Bến Thành, Quận 1, TP. Hồ Chí Minh." }
      ]
    }
  },
  ko: {
    "": {
      slug: "",
      nav: "홈",
      title: "도야짬뽕 | 호치민 1군 Korean restaurant champong 맛집",
      description:
        "도야짬뽕은 호치민 1군에서 Korean restaurant, champong, jjambbong, mi tuong den 짜장면, 탕수육, 야식 메뉴를 찾는 손님을 위한 한국식 중화요리 식당입니다.",
      eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
      h1: "호치민 1군 한국식 매운 해물짬뽕",
      subtitle: "짬뽕, 짜장면, 탕수육, 늦은 밤에도 부담 없이 먹기 좋은 한국식 중화요리.",
      summary:
        "도야짬뽕은 호치민 1군에서 Korean restaurant, Korean food District 1, champong, jjambbong, mi tuong den 검색으로 들어오는 외국인 손님도 쉽게 찾을 수 있는 한국식 중화요리 식당입니다.",
      sections: [
        { heading: "77I Bùi Thị Xuân 1군 위치", body: "Bui Thi Xuan, 벤탄, 여행자 거리, 호텔, 나이트라이프 지역에서 찾기 쉬운 한국식 중화요리 식당입니다." },
        { heading: "10:30부터 23:30까지 영업", body: "점심, 저녁, 야식, 해장용 매운 국물 메뉴를 찾는 손님에게 잘 맞습니다." }
      ]
    },
    menu: {
      slug: "menu",
      nav: "메뉴",
      title: "도야짬뽕 메뉴 | 짬뽕, 짜장면, 탕수육, 호치민 1군",
      description: "호치민 짬뽕, 호치민 짜장면, 탕수육, 깐풍기, 떡볶이, 한국식 중식당 메뉴를 확인하세요.",
      eyebrow: "도야 메뉴",
      h1: "짬뽕부터 짜장, 튀김요리까지 한 번에",
      subtitle: "매운 국물이 당길 때는 짬뽕, 든든하게 먹고 싶을 때는 짜장과 밥메뉴, 같이 나눌 때는 탕수육과 깐풍기를 고르기 좋습니다.",
      summary: "도야짬뽕 메뉴는 호치민 짬뽕, 호치민 짜장면, 호치민 한국식 짬뽕, 호치민 중국집, 호치민 한국 중국집을 찾는 손님이 바로 이해하기 좋은 구성입니다.",
      sections: [{ heading: "주문하기 쉬운 구성", body: "한국식 짬뽕, 짜장면, 탕수육, 깐풍기, 떡볶이를 대표 메뉴별로 나눠 관광객, 현지 손님, 배달 손님 모두 빠르게 선택할 수 있습니다." }]
    },
    "mi-tuong-den-han-quoc-quan-1": {
      slug: "mi-tuong-den-han-quoc-quan-1",
      nav: "짜장면",
      title: "호치민 1군 짜장면 | Mì tương đen Hàn Quốc DOYA JJAMBBONG",
      description:
        "호치민 1군 Bùi Thị Xuân, Bến Thành, Bùi Viện 근처에서 한국식 짜장면, mì tương đen, jajangmyeon을 찾는 손님을 위한 도야짬뽕 안내 페이지입니다.",
      eyebrow: "짜장면 / Mì tương đen",
      h1: "호치민 1군 한국식 짜장면",
      subtitle: "베트남어로는 mì tương đen, 영어로는 jajangmyeon 또는 Korean black bean noodles로 찾는 한국식 중식 대표 메뉴입니다.",
      summary:
        "도야짬뽕은 77I Bùi Thị Xuân, Quận 1에서 한국식 짜장면을 제공합니다. 매운 짬뽕이 부담스러운 손님, 아이와 함께 온 가족, 관광객에게도 이해하기 쉬운 메뉴입니다.",
      sections: [
        { heading: "mì tương đen 검색 의도", body: "베트남 손님은 짜장면을 mì tương đen 또는 mi tuong den으로 많이 검색합니다. 도야짬뽕은 이 표현과 jajangmyeon을 함께 안내합니다." },
        { heading: "1군 중심 위치", body: "Bến Thành, Bùi Viện, 호텔, 여행자 거리에서 이동하기 쉬운 77I Bùi Thị Xuân에 있습니다." },
        { heading: "추천 조합", body: "짜장면은 탕수육, 군만두, 짬뽕과 같이 주문하면 매운 메뉴와 순한 메뉴의 균형이 좋습니다." }
      ]
    },
    "signature-jjambbong": {
      slug: "signature-jjambbong",
      nav: "대표 짬뽕",
      title: "도야 대표 짬뽕 | 호치민 1군 한국식 매운 해물짬뽕",
      description: "도야 대표 짬뽕은 깊은 해물 국물과 매운맛, 한국식 중화요리의 불맛을 담은 호치민 1군 대표 메뉴입니다.",
      eyebrow: "대표 메뉴",
      h1: "도야 대표 해물짬뽕",
      subtitle: "빨간 국물, 해산물, 채소, 한국식 중화요리의 묵직한 맛.",
      summary: "호치민 짬뽕, 사이공 매운 해물면, 1군 매운 국물 메뉴를 찾는 손님에게 도야 대표 짬뽕은 가장 먼저 추천할 메뉴입니다.",
      sections: [
        { heading: "깊은 빨간 국물", body: "해산물의 감칠맛, 고추의 매운맛, 채소의 단맛이 균형 있게 들어간 짬뽕입니다." },
        { heading: "매운맛을 좋아하는 손님에게", body: "퇴근 후, 여행 후, 늦은 밤에 따뜻하고 강한 한 그릇이 필요할 때 잘 어울립니다." }
      ]
    },
    "champong-korean-chinese-food-ho-chi-minh": {
      slug: "champong-korean-chinese-food-ho-chi-minh",
      nav: "champong 검색",
      title: "Champong 호치민 | 도야짬뽕 1군 한국식 중화요리",
      description: "외국인 손님이 champong, champon, jjamppong으로 찾는 한국식 짬뽕을 도야짬뽕 1군에서 만날 수 있습니다.",
      eyebrow: "Champong / 짬뽕",
      h1: "champong으로 검색해도 도야짬뽕",
      subtitle: "champong, champon, jjamppong은 모두 한국식 매운 해물짬뽕을 찾는 검색 표현입니다.",
      summary:
        "도야짬뽕은 호치민 1군 77I Bùi Thị Xuân에서 champong, jjambbong, Korean Chinese food를 찾는 외국인 손님이 쉽게 발견할 수 있도록 구성했습니다.",
      sections: [
        { heading: "검색 표기까지 반영", body: "짬뽕은 영어권에서 jjambbong, jjamppong, champong, champon 등 여러 방식으로 검색됩니다." },
        { heading: "실제 위치와 연결", body: "77I Bùi Thị Xuân, 벤탄 근처 위치 정보를 함께 넣어 지역 검색 신호를 강화했습니다." }
      ]
    },
    "korean-chinese-food-ho-chi-minh": {
      slug: "korean-chinese-food-ho-chi-minh",
      nav: "한국식 중화요리",
      title: "Korean Restaurant 호치민 | Korean Chinese Food 도야짬뽕 1군",
      description: "호치민에서 Korean restaurant, Korean food District 1, Chinese food, Korean Chinese food를 찾는 손님을 위한 짬뽕, 짜장면, 탕수육 전문 페이지입니다.",
      eyebrow: "Korean Chinese food",
      h1: "호치민 한국식 중화요리",
      subtitle: "한국 음식과 중국 음식을 한국식으로 풀어낸 짬뽕, 짜장면, 탕수육.",
      summary:
        "도야짬뽕은 호치민 1군에서 Korean restaurant Ho Chi Minh, Korean food near Bui Vien, Korean restaurant near Ben Thanh, Chinese food, Korean Chinese restaurant를 찾는 관광객과 현지 손님에게 맞춘 매장입니다.",
      sections: [
        { heading: "한국인이 아는 중화요리", body: "중국 음식 기반이지만 한국식으로 자리 잡은 짬뽕, 짜장면, 탕수육을 중심으로 구성했습니다." },
        { heading: "외국인 검색 의도 대응", body: "Korean food, Chinese food, Korean Chinese food, champong, jjambbong을 자연스럽게 연결했습니다." }
      ]
    },
    "korean-food-delivery-ho-chi-minh": {
      slug: "korean-food-delivery-ho-chi-minh",
      nav: "예약/배달",
      title: "호치민 한식 예약/배달 | 도야짬뽕 1군",
      description: "호치민 1군에서 짬뽕, 짜장, 탕수육, 밥메뉴를 카카오톡, Zalo, 전화로 예약 문의와 배달 주문할 수 있는 도야짬뽕 안내 페이지입니다.",
      eyebrow: "예약/배달",
      h1: "호치민 1군 도야짬뽕 예약/배달",
      subtitle: "카카오톡 오픈채팅, Zalo, 전화주문 중 편한 방법으로 매장 예약, 포장, 배달을 문의하세요.",
      summary:
        "도야짬뽕은 77I Bùi Thị Xuân 매장에서 카카오톡 오픈채팅, Zalo, 전화주문 3가지 방식으로 예약 문의와 배달 주문을 받을 수 있도록 정리했습니다. 호치민 한식 예약, 호치민 1군 배달, 호치민 짬뽕 배달, 야식 배달을 찾는 손님이 메뉴를 보고 바로 문의할 수 있습니다.",
      sections: [
        { heading: "예약/배달 방법 3가지", body: "카카오톡 오픈채팅, Zalo, 전화주문 버튼을 따로 두어 손님이 편한 방식으로 인원, 시간, 메뉴, 수량, 주소를 바로 전달할 수 있습니다." },
        { heading: "1군 중심 예약/배달 문의", body: "벤탄, Bùi Thị Xuân, 호텔, 사무실, 여행자 거리 근처에서 점심, 저녁, 야식 예약이나 배달을 생각하는 손님에게 맞춘 페이지입니다." },
        { heading: "예약과 배달에 좋은 메뉴", body: "짬뽕, 짜장, 탕수육, 밥메뉴처럼 혼자 먹기 좋은 메뉴와 함께 나눠 먹기 좋은 메뉴를 모두 한 번에 확인할 수 있습니다." }
      ]
    },
    "late-night-korean-food-ho-chi-minh": {
      slug: "late-night-korean-food-ho-chi-minh",
      nav: "호치민 야식",
      title: "호치민 야식 한국 음식 | 도야짬뽕 1군",
      description: "호치민 야식, 호치민 새벽 맛집, 술먹고 해장할 매운 짬뽕과 한국식 중식 메뉴를 찾는다면 도야짬뽕을 확인하세요.",
      eyebrow: "호치민 야식",
      h1: "호치민 1군에서 먹는 한국식 야식",
      subtitle: "늦은 시간에도 따뜻한 국물과 익숙한 한국식 중화요리를 즐길 수 있습니다.",
      summary: "도야짬뽕은 Bui Thi Xuan, 벤탄, 부이비엔, 1군 나이트라이프 근처에서 호치민 야식 맛집, 호치민 부이비엔 근처 맛집, 호치민 한국인 맛집을 찾는 손님에게 맞춘 식당입니다.",
      sections: [
        { heading: "중심가에서 가까운 위치", body: "호텔, 관광지, 바, 부이비엔, 벤탄 근처에서 이동하기 쉬워 늦은 식사와 새벽 맛집 검색에 잘 맞습니다." },
        { heading: "늦은 시간에 당기는 메뉴", body: "뜨거운 국물, 해장짬뽕, 불맛짬뽕, 짜장면, 탕수육처럼 복잡하지 않고 확실한 메뉴를 제공합니다." }
      ]
    },
    "hangover-spicy-noodles-saigon": {
      slug: "hangover-spicy-noodles-saigon",
      nav: "사이공 해장 매운면",
      title: "사이공 해장 매운면 | 도야 해물짬뽕",
      description: "호치민 해장, 사이공 해장 매운면, spicy soup after drinking, hangover food Saigon을 찾는 손님을 위한 도야 해물짬뽕.",
      eyebrow: "해장 매운면",
      h1: "사이공에서 찾는 한국식 해장 매운면",
      subtitle: "매운 해물 국물과 면이 필요한 날, 도야짬뽕 한 그릇.",
      summary: "도야짬뽕은 사이공 해장 음식, 호치민 해장, 호치민 매운음식, 해장짬뽕, 불짬뽕, 불맛짬뽕을 찾는 손님이 쉽게 이해하고 방문할 수 있도록 구성되어 있습니다.",
      sections: [
        { heading: "긴 밤 뒤에 먹는 뜨거운 국물", body: "매운 국물, 해산물, 채소, 면이 들어간 짬뽕은 한국식 해장 comfort food입니다." },
        { heading: "맵지 않은 선택지도 준비", body: "짜장면, 탕수육, 불고기덮밥처럼 매운 음식을 피하고 싶은 손님을 위한 메뉴도 있습니다." }
      ]
    },
    "location-contact": {
      slug: "location-contact",
      nav: "위치 / 연락처",
      title: "도야짬뽕 호치민 1군 위치 | 77I Bùi Thị Xuân, 전화번호, 지도",
      description: "도야짬뽕 호치민 1군 77I Bùi Thị Xuân 위치, 전화번호 0843377788, 영업시간 10:30-23:30, 지도와 배달 링크를 확인하세요.",
      eyebrow: "위치 안내",
      h1: "위치와 연락처",
      subtitle: "호치민 1군 도야짬뽕으로 바로 길찾기.",
      summary: "도야짬뽕 1군점은 77I Bùi Thị Xuân, P. Bến Thành에 있으며 Bui Thi Xuan, 벤탄, 호텔, 여행자 거리와 가까운 한국식 중화요리 식당입니다.",
      sections: [{ heading: "Google Maps로 길찾기", body: "택시, 그랩, 오토바이, 도보 이동 시 지도를 이용하면 가장 빠르게 찾을 수 있습니다." }]
    },
    about: {
      slug: "about",
      nav: "도야 소개",
      title: "도야짬뽕 소개 | 호치민 1군 한국식 중화요리",
      description: "도야짬뽕은 호치민 1군에서 짬뽕, 짜장, 탕수육, 밥메뉴를 편하게 즐길 수 있는 한국식 중화요리 매장입니다.",
      eyebrow: "브랜드 소개",
      h1: "도야짬뽕 소개",
      subtitle: "호치민 1군에서 한국 사람이 익숙하게 찾고, 처음 온 손님도 쉽게 고를 수 있는 한국식 중화요리.",
      summary:
        "도야짬뽕은 77I Bùi Thị Xuân에서 뜨거운 짬뽕 국물, 고소한 짜장, 바삭한 탕수육, 든든한 밥메뉴를 한 번에 즐길 수 있는 매장입니다. 점심 한 끼, 저녁 식사, 늦은 시간의 해장 메뉴까지 부담 없이 고를 수 있도록 메뉴를 단순하고 익숙하게 구성했습니다.",
      sections: [
        {
          heading: "한국식 짬뽕의 만족감",
          body: "도야의 중심은 깊고 뜨거운 빨간 국물입니다. 해산물의 감칠맛, 채소의 단맛, 매운맛의 여운이 살아 있어 호치민에서도 한국에서 먹던 짬뽕 한 그릇의 만족감을 느낄 수 있습니다."
        },
        {
          heading: "같이 시키기 좋은 메뉴 구성",
          body: "매운 짬뽕이 부담스러운 손님을 위해 짜장, 밥메뉴, 사이드메뉴도 함께 준비했습니다. 짬뽕과 짜장, 탕수육 조합처럼 익숙한 주문 흐름을 그대로 가져갈 수 있어 혼밥부터 단체 식사까지 고르기 쉽습니다."
        },
        {
          heading: "1군에서 접근하기 쉬운 위치",
          body: "매장은 77I Bùi Thị Xuân, 벤탄 근처에 있어 여행 중 들르기 좋고, 근처 직장인과 거주자도 점심이나 저녁에 편하게 방문하기 좋습니다. 카카오톡, Zalo, 전화주문과 길찾기 버튼도 바로 연결되도록 정리했습니다."
        }
      ]
    },
    faq: {
      slug: "faq",
      nav: "FAQ",
      title: "도야짬뽕 FAQ | 짬뽕, 매운맛, 배달, 위치",
      description: "도야짬뽕의 짬뽕, 매운맛, 맵지 않은 메뉴, 야식, 배달, 호치민 1군 위치에 대한 자주 묻는 질문입니다.",
      eyebrow: "FAQ",
      h1: "자주 묻는 질문",
      subtitle: "방문 전 알아두면 좋은 도야짬뽕 정보.",
      summary:
        "도야짬뽕은 호치민 1군에서 짬뽕, 짜장면, 탕수육, 배달과 방문 정보를 쉽게 확인할 수 있는 한국식 중화요리 식당입니다.",
      sections: []
    },
    reviews: {
      slug: "reviews",
      nav: "리뷰",
      title: "도야짬뽕 리뷰 | 호치민 1군 한국 식당",
      description: "도야짬뽕 리뷰 하이라이트: 매운 해물짬뽕, 1군 접근성, 야식, 한국식 중화요리 메뉴.",
      eyebrow: "리뷰",
      h1: "도야짬뽕 리뷰",
      subtitle: "손님들이 도야를 찾는 이유.",
      summary: "손님들은 매운 해물짬뽕, 호치민 1군 접근성, 늦은 시간에도 먹기 좋은 메뉴 때문에 도야를 선택합니다.",
      sections: [{ heading: "리뷰 링크", body: "Google 리뷰와 TripAdvisor 링크를 통해 실제 방문 후기를 확인할 수 있게 연결합니다." }]
    },
    branches: {
      slug: "branches",
      nav: "호치민 지점",
      title: "도야짬뽕 호치민 지점 | 1군, 푸미흥, 타오디엔, 선애비뉴",
      description: "도야짬뽕 호치민 지점 안내: 1군, 푸미흥 스카이가든, 미드타운, 선애비뉴, 타오디엔 지점 검색 정보를 확인하세요.",
      eyebrow: "호치민 지점 안내",
      h1: "도야짬뽕 호치민 지점",
      subtitle: "도야짬뽕 호치민 검색어를 한 곳에서 정리했습니다.",
      summary: "도야짬뽕 1군, 푸미흥, 스카이가든, 미드타운, 선애비뉴, 타오디엔 등 호치민 지점명을 검색하는 손님이 이 사이트에서 정보를 찾을 수 있게 구성했습니다.",
      sections: [
        {
          heading: "검색 친화적인 지점 안내",
          body: "Doya Jjambbong Ho Chi Minh, 도야짬뽕 호치민, Doya Jjambbong Thao Dien, Sun Avenue, Phu My Hung 같은 검색어를 자연스럽게 포함했습니다."
        }
      ]
    },
    "return-policy": {
      slug: "return-policy",
      nav: "환불/반품 정책",
      title: "도야짬뽕 환불/반품 정책 | 주문, 포장, 배달 안내",
      description: "도야짬뽕 1군점 음식 주문, 포장, 배달에 대한 환불/반품 정책과 주문 오류 처리 안내입니다.",
      eyebrow: "Return Policy",
      h1: "환불/반품 정책",
      subtitle: "도야짬뽕 1군점 음식 주문에 적용되는 안내입니다.",
      summary: "음식은 주문 후 조리되는 상품이라 조리 완료 후 단순 변심에 따른 반품 또는 환불은 어렵습니다. 주문 오류, 누락, 품질 문제가 있는 경우 당일 즉시 전화, Zalo, Facebook 또는 이메일로 연락주시면 확인 후 재조리, 보완 또는 환불을 도와드립니다.",
      sections: [
        { heading: "주문 오류 또는 누락", body: "주문한 메뉴와 다른 음식이 제공되었거나 메뉴가 누락된 경우, 가능한 한 당일에 주문 정보와 사진을 함께 보내주세요." },
        { heading: "조리 완료된 음식", body: "고객 변심, 개인 취향, 수령 지연 등으로 인한 조리 완료 음식의 반품은 어렵습니다." },
        { heading: "문의 연락처", body: "전화: 0843377788. 이메일: mokpofnb@gmail.com. 주소: 77I Bùi Thị Xuân, P. Bến Thành, Quận 1, TP. Hồ Chí Minh." }
      ]
    }
  },
  en: {
    "": {
      slug: "",
      nav: "Home",
      title: "DOYA JJAMBBONG | DOYA Korean Restaurant in Ho Chi Minh City",
      description: "DOYA Korean Restaurant, also known as DOYA JJAMBBONG, serves Korean-Chinese champong or jjambbong, jajangmyeon, and tangsuyuk in District 1 near Ben Thanh and Bui Vien.",
      eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
      h1: "DOYA Korean Restaurant in Ho Chi Minh City",
      subtitle: "DOYA JJAMBBONG serves authentic Korean-Chinese jjambbong, also searched as champong or champon, plus jajangmyeon and comfort food in District 1, Saigon.",
      summary: "DOYA Korean Restaurant is DOYA JJAMBBONG, a Korean-Chinese restaurant in District 1, Ho Chi Minh City. We specialize in Korean food, spicy seafood jjambbong or champong, jajangmyeon, tangsuyuk, and late-night comfort food near Ben Thanh and Bui Vien.",
      sections: [
        { heading: "Located at 77I Bui Thi Xuan, District 1", body: "Find DOYA near Ben Thanh, tourist streets, hotels, and the central nightlife area." },
        { heading: "Open 10:30 AM to 11:30 PM", body: "A practical stop for lunch, dinner, late meals, spicy noodles, and Korean hangover comfort food." }
      ]
    },
    menu: {
      slug: "menu",
      nav: "Menu",
      title: "Menu | Champong, Jjambbong, Jajangmyeon and Korean Chinese Food in Saigon",
      description: "Explore DOYA menu favorites including Korean spicy seafood noodles, jjambbong, Korean black bean noodles, tteokbokki, tangsuyuk, and kkanpunggi.",
      eyebrow: "DOYA Menu",
      h1: "Menu",
      subtitle: "Spicy bowls, non-spicy classics, sharing dishes, and rice bowls.",
      summary: "A focused Korean-Chinese food menu built around spicy seafood jjambbong, champong District 1, Korean black bean noodles, tangsuyuk, kkanpunggi, tteokbokki, and rice bowls.",
      sections: [{ heading: "Easy to order", body: "The menu is organized for tourists, locals, delivery guests, and late-night diners." }]
    },
    "mi-tuong-den-han-quoc-quan-1": {
      slug: "mi-tuong-den-han-quoc-quan-1",
      nav: "Black Bean Noodles",
      title: "Korean Black Bean Noodles in District 1 | Jajangmyeon DOYA JJAMBBONG",
      description:
        "Find Korean black bean noodles, jajangmyeon, mi tuong den, and mì tương đen Hàn Quốc at DOYA JJAMBBONG District 1 near Ben Thanh and Bui Vien.",
      eyebrow: "Jajangmyeon / Mi tuong den",
      h1: "Korean black bean noodles in District 1",
      subtitle: "A non-spicy Korean-Chinese noodle dish for guests searching jajangmyeon, mi tuong den, or mì tương đen near Ben Thanh and Bui Vien.",
      summary:
        "DOYA JJAMBBONG serves Korean black bean noodles, also known as jajangmyeon or mì tương đen, at 77I Bui Thi Xuan in District 1. It is an easy choice for travelers who want Korean-Chinese food without spicy soup.",
      sections: [
        { heading: "What is mi tuong den?", body: "Mi tuong den is how many Vietnamese guests search for jajangmyeon, a Korean black bean noodle dish with a rich savory sauce." },
        { heading: "Near Ben Thanh and Bui Vien", body: "The restaurant is located in central District 1, convenient for hotels, travelers, nightlife, and lunch or dinner plans." },
        { heading: "Best pairings", body: "Order jajangmyeon with tangsuyuk, fried mandu, or jjambbong for a balanced Korean-Chinese meal." }
      ]
    },
    "signature-jjambbong": {
      slug: "signature-jjambbong",
      nav: "Signature Jjambbong",
      title: "Signature Jjambbong Champong | Korean Spicy Seafood Noodles in District 1",
      description: "DOYA signature jjambbong, also searched as champong or champon, is a Korean spicy seafood noodle soup in District 1, Ho Chi Minh City.",
      eyebrow: "Signature Bowl",
      h1: "Signature DOYA Jjambbong Champong",
      subtitle: "Deep red broth, seafood, vegetables, and Korean-Chinese wok flavor.",
      summary: "DOYA Jjambbong is made for guests searching for jjambbong, champong, champon, Korean spicy seafood noodles, and Chinese-style Korean noodles in District 1.",
      sections: [
        { heading: "Deep red broth", body: "The signature bowl balances seafood depth, chili heat, vegetables, and Korean-Chinese wok aroma." },
        { heading: "For spice lovers", body: "It is ideal for guests who want a hot, savory bowl after work, after travel, or after a night out." }
      ]
    },
    "champong-korean-chinese-food-ho-chi-minh": {
      slug: "champong-korean-chinese-food-ho-chi-minh",
      nav: "Champong",
      title: "Champong Ho Chi Minh | Korean Chinese Spicy Seafood Noodles",
      description: "Looking for champong, champon, jjamppong or jjambbong in Ho Chi Minh? DOYA serves Korean-Chinese spicy seafood noodles at 77I Bui Thi Xuan, District 1.",
      eyebrow: "Champong / Jjambbong",
      h1: "Champong in Ho Chi Minh City",
      subtitle: "Champong, champon, jjamppong and jjambbong all point to the Korean-Chinese spicy seafood noodle soup guests come to DOYA for.",
      summary:
        "This page is built for guests searching champong Ho Chi Minh, champon District 1, jjamppong Saigon, jjambbong near Ben Thanh, and Korean Chinese food near Bui Thi Xuan.",
      sections: [
        { heading: "Champong means jjambbong here", body: "International guests spell the Korean 짬뽕 noodle soup in different ways. DOYA keeps those searches connected to the same signature bowl." },
        { heading: "Local search signal", body: "The page pairs the dish keyword with 77I Bui Thi Xuan, Ben Thanh, District 1, Ho Chi Minh City for stronger local discovery." }
      ]
    },
    "korean-chinese-food-ho-chi-minh": {
      slug: "korean-chinese-food-ho-chi-minh",
      nav: "Korean Chinese Food",
      title: "Korean Restaurant Ho Chi Minh | Korean Chinese Food DOYA District 1",
      description: "Find a Korean restaurant in Ho Chi Minh for Korean food, Chinese food, champong, jjambbong, mi tuong den jajangmyeon, tangsuyuk, and rice bowls.",
      eyebrow: "Korean Chinese food",
      h1: "Korean Chinese Food in Ho Chi Minh",
      subtitle: "Korean-style Chinese comfort food in District 1: jjambbong, champong, jajangmyeon, tangsuyuk, and rice bowls.",
      summary:
        "DOYA helps guests searching Korean restaurant Ho Chi Minh, Korean food District 1, Korean restaurant near Ben Thanh, Korean food near Bui Vien, Chinese food District 1, Korean Chinese restaurant Saigon, and spicy seafood noodles find a clear restaurant choice.",
      sections: [
        { heading: "Korean food plus Chinese food", body: "The menu is Chinese-inspired but Korean in flavor, built around red seafood broth, black bean noodles, crispy dishes, and fast comfort." },
        { heading: "Easy for travelers to understand", body: "The page uses Korean food, Chinese food, Korean Chinese food, champong, and jjambbong naturally so tourists can match the dish they want." }
      ]
    },
    "korean-food-delivery-ho-chi-minh": {
      slug: "korean-food-delivery-ho-chi-minh",
      nav: "Reservation / Delivery",
      title: "Korean Food Reservation and Delivery Ho Chi Minh | DOYA JJAMBBONG",
      description: "Reserve a table or order Korean-Chinese food through KakaoTalk, Zalo, or phone in District 1: jjambbong, jajang, tangsuyuk, rice dishes, and late-night comfort.",
      eyebrow: "Reservation / Delivery",
      h1: "Reserve or order DOYA JJAMBBONG",
      subtitle: "Choose KakaoTalk, Zalo, or phone order for table reservations, takeaway, or delivery around District 1.",
      summary:
        "DOYA connects Korean food reservations, Korean food delivery Ho Chi Minh, Korean food delivery District 1, jjambbong delivery, jajangmyeon delivery, and late-night Korean food searches to three clear contact paths: KakaoTalk, Zalo, and phone.",
      sections: [
        { heading: "3 ways to reserve or order", body: "Tap KakaoTalk, Zalo, or phone order, send your party size, time, menu choices, quantity, and address, then confirm dine-in, pickup, or delivery details." },
        { heading: "Useful around District 1", body: "The 77I Bui Thi Xuan location is practical for hotel guests, office lunches, evening meals, reservations, and late-night orders near Ben Thanh." },
        { heading: "Reservation and delivery-friendly dishes", body: "Jjambbong, jajang, tangsuyuk, rice dishes, and drinks are grouped so dine-in guests, solo guests, and small groups can order quickly." }
      ]
    },
    "late-night-korean-food-ho-chi-minh": {
      slug: "late-night-korean-food-ho-chi-minh",
      nav: "Late Night",
      title: "Late Night Korean Food in Ho Chi Minh | DOYA JJAMBBONG District 1",
      description: "Looking for late night food Ho Chi Minh, where to eat after bar in Saigon, or open until late restaurant District 1? DOYA serves Korean comfort food.",
      eyebrow: "Late Night District 1",
      h1: "Late Night Korean Food in Ho Chi Minh",
      subtitle: "Hot noodles and sharing dishes near the center of Saigon.",
      summary: "DOYA is built for dinner, late meals, food after drinking in Ho Chi Minh, Korean food near Bui Vien, hidden Korean restaurant Saigon, champong, and spicy Korean comfort food near Bui Thi Xuan.",
      sections: [
        { heading: "Close to the center", body: "A convenient District 1 option for travelers, hotel guests, and groups ending the night nearby." },
        { heading: "Food that lands late", body: "Hot broth, noodles, and shareable Korean-Chinese dishes are easy choices when people want comfort over complexity." }
      ]
    },
    "hangover-spicy-noodles-saigon": {
      slug: "hangover-spicy-noodles-saigon",
      nav: "Hangover Noodles",
      title: "Hangover Spicy Noodles in Saigon | Korean Seafood Jjambbong Champong",
      description: "DOYA serves hangover food Saigon, spicy soup after drinking, Korean spicy soup, champong, jjambbong, and Korean-Chinese comfort dishes.",
      eyebrow: "Hangover Noodles",
      h1: "Hangover Spicy Noodles in Saigon",
      subtitle: "A hot bowl of spicy seafood jjambbong when you need comfort food.",
      summary: "For hangover food Saigon, spicy seafood noodles, extremely spicy noodles, fire noodles soup, and wok hei noodles searches, DOYA offers Korean-Chinese comfort dishes in District 1.",
      sections: [
        { heading: "A hot bowl after a long night", body: "Spicy broth, noodles, seafood, and vegetables make jjambbong a classic Korean hangover comfort food." },
        { heading: "Spicy and non-spicy choices", body: "Guests can choose bold jjambbong or calmer options like jajangmyeon and bulgogi rice bowls." }
      ]
    },
    "location-contact": {
      slug: "location-contact",
      nav: "Location",
      title: "Location and Contact | DOYA JJAMBBONG 77I Bui Thi Xuan District 1",
      description: "Find DOYA JJAMBBONG at 77I Bui Thi Xuan, Ben Thanh Ward, District 1. Get directions, phone, hours, and delivery links.",
      eyebrow: "District 1 Location",
      h1: "Location and Contact",
      subtitle: "Get to DOYA JJAMBBONG at 77I Bui Thi Xuan quickly.",
      summary: "DOYA JJAMBBONG is located at 77I Bui Thi Xuan, Ben Thanh Ward, District 1, Ho Chi Minh City, near tourist areas and central nightlife.",
      sections: [{ heading: "Get directions", body: "Use Google Maps for the fastest route by taxi, motorbike, or walking from nearby District 1 hotels." }]
    },
    about: {
      slug: "about",
      nav: "About",
      title: "About DOYA JJAMBBONG | Korean Food and Chinese Food in Ho Chi Minh",
      description: "Learn about DOYA JJAMBBONG, a Korean-Chinese restaurant specializing in Korean food, Chinese food, champong, jjambbong, and jajangmyeon.",
      eyebrow: "About DOYA",
      h1: "About DOYA",
      subtitle: "Korean-Chinese comfort food in the center of Saigon.",
      summary: "DOYA JJAMBBONG is a Korean-Chinese restaurant in District 1, Ho Chi Minh City, specializing in Korean food, Chinese food, spicy seafood jjambbong or champong, jajangmyeon, and late-night comfort food.",
      sections: [
        { heading: "Korean-Chinese comfort in Saigon", body: "DOYA brings the familiar heat and depth of Korean jjambbong culture to District 1." },
        { heading: "Clear for visitors", body: "The restaurant is designed to be easy for international tourists, Korean guests, Vietnamese locals, and delivery diners." }
      ]
    },
    faq: {
      slug: "faq",
      nav: "FAQ",
      title: "FAQ | DOYA JJAMBBONG Korean Chinese Restaurant District 1",
      description: "Answers about jjambbong, champong, spicy levels, Korean food, Chinese food, Korean-Chinese food, late-night dining, delivery, and DOYA location.",
      eyebrow: "FAQ",
      h1: "Frequently Asked Questions",
      subtitle: "What to know before visiting or ordering.",
      summary: "DOYA JJAMBBONG is a Korean-Chinese restaurant in District 1, Ho Chi Minh City, specializing in Korean food, Chinese food, spicy seafood jjambbong or champong, jajangmyeon, and late-night comfort food.",
      sections: []
    },
    reviews: {
      slug: "reviews",
      nav: "Reviews",
      title: "Reviews | DOYA JJAMBBONG Korean Restaurant District 1",
      description: "Read review highlights for DOYA JJAMBBONG, a Korean restaurant in District 1 serving Korean food, Chinese food, spicy seafood champong, and Korean-Chinese classics.",
      eyebrow: "Reviews",
      h1: "Reviews",
      subtitle: "Why guests choose DOYA in District 1.",
      summary: "Guests choose DOYA for spicy seafood noodles, champong or jjambbong, convenient District 1 access, late-night comfort, and Korean-Chinese classics.",
      sections: [{ heading: "Review links", body: "Connect visitors to Google Reviews and TripAdvisor so they can compare real guest feedback before visiting." }]
    },
    branches: {
      slug: "branches",
      nav: "Branches",
      title: "DOYA JJAMBBONG Ho Chi Minh Branches | District 1, District 7, Thao Dien",
      description: "Find DOYA JJAMBBONG branches in Ho Chi Minh City including District 1, Sky Garden, Midtown, Sun Avenue, and Thao Dien.",
      eyebrow: "DOYA Branches",
      h1: "DOYA JJAMBBONG Ho Chi Minh Branches",
      subtitle: "Find the right DOYA location by neighborhood.",
      summary: "Use this branch guide to find DOYA JJAMBBONG in Ho Chi Minh City, including District 1, Phu My Hung, Sky Garden, Midtown, Sun Avenue, and Thao Dien.",
      sections: [
        { heading: "Search-friendly branch guide", body: "This page helps guests searching for Doya Jjambbong Ho Chi Minh, Doya champong, Korean food Ho Chi Minh, Chinese food Ho Chi Minh, Thao Dien, Sun Avenue, or Phu My Hung find the right store." }
      ]
    },
    "return-policy": {
      slug: "return-policy",
      nav: "Return Policy",
      title: "Return and Refund Policy | DOYA JJAMBBONG",
      description: "Return, refund, and order issue policy for DOYA JJAMBBONG District 1 dine-in, takeaway, and delivery orders.",
      eyebrow: "Return Policy",
      h1: "Return and Refund Policy",
      subtitle: "For food orders from DOYA JJAMBBONG District 1.",
      summary: "Because food is prepared to order, DOYA cannot accept returns or refunds for a change of mind after preparation has started. If an order is wrong, missing items, or has a quality issue, contact us on the same day by phone, Zalo, Facebook, or email so we can review and help with replacement, correction, or refund when appropriate.",
      sections: [
        { heading: "Wrong or missing items", body: "Please contact us on the same day with order details and photos if available. We will review the issue and help correct the order." },
        { heading: "Prepared food", body: "Prepared food cannot be returned for personal preference, change of mind, or delays outside the restaurant's control." },
        { heading: "Contact", body: "Phone: 0843377788. Email: mokpofnb@gmail.com. Address: 77I Bui Thi Xuan, Ben Thanh Ward, District 1, Ho Chi Minh City." }
      ]
    }
  }
} as unknown as Record<Locale, Record<PageSlug, PageContent>>;

pageContent.zh = {
  ...pageContent.en,
  "": {
    slug: "",
    nav: "首页",
    title: "DOYA JJAMBBONG | 胡志明市第1郡韩国餐厅, Champong 辣海鲜面",
    description:
      "DOYA JJAMBBONG 是胡志明市第1郡的韩国餐厅, 主打韩式中餐、champong 辣海鲜面、jjambbong、mi tuong den 韩式炸酱面、糖醋肉, 靠近 Ben Thanh 和 Bui Vien.",
    eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
    h1: "胡志明市第1郡韩国餐厅与韩式辣海鲜面",
    subtitle: "在 Saigon 市中心享用韩式中餐: champong / jjambbong 辣海鲜面、韩式炸酱面、糖醋肉和适合夜宵的热食.",
    summary:
      "DOYA JJAMBBONG 位于 77I Bui Thi Xuan, District 1, Ho Chi Minh City, 是一家面向游客、当地客人、韩国客人和中国客人的韩式中餐餐厅.",
    sections: [
      {
        heading: "第1郡 77I Bui Thi Xuan",
        body: "餐厅靠近 Ben Thanh, Bui Vien, 酒店区和市中心夜生活区域, 适合午餐、晚餐和夜宵."
      },
      {
        heading: "营业时间 10:30 - 23:30",
        body: "适合搜索 Korean restaurant Ho Chi Minh, 韩国餐厅, 韩式中餐, champong, jjambbong 或辣海鲜面的客人."
      }
    ]
  },
  menu: {
    ...pageContent.en.menu,
    nav: "菜单",
    title: "菜单 | Champong 辣海鲜面、韩式炸酱面和韩式中餐",
    description: "查看 DOYA 菜单: champong / jjambbong 辣海鲜面、mi tuong den 韩式炸酱面、tteokbokki、糖醋肉、辣蒜炸鸡和米饭类.",
    eyebrow: "DOYA 菜单",
    h1: "菜单",
    subtitle: "辣汤面、不辣的韩式炸酱面、分享菜和米饭类.",
    summary: "DOYA 菜单围绕韩式中餐展开, 包括 champong 辣海鲜面、韩式炸酱面、糖醋肉、tteokbokki 和炸鸡类."
  },
  "mi-tuong-den-han-quoc-quan-1": {
    slug: "mi-tuong-den-han-quoc-quan-1",
    nav: "韩式炸酱面",
    title: "胡志明市第1郡韩式炸酱面 | Mi Tuong Den Jajangmyeon",
    description:
      "在 DOYA JJAMBBONG 吃韩式炸酱面, 也可搜索 mi tuong den, mì tương đen, jajangmyeon 或 Korean black bean noodles, 靠近 Ben Thanh 和 Bui Vien.",
    eyebrow: "Jajangmyeon / Mi tuong den",
    h1: "胡志明市第1郡韩式炸酱面",
    subtitle: "不辣、酱香浓郁, 适合搭配糖醋肉、煎饺或一碗 champong 辣海鲜面.",
    summary:
      "DOYA JJAMBBONG 提供韩式炸酱面, 也就是 jajangmyeon 或 mi tuong den. 地址在 77I Bui Thi Xuan, District 1, 靠近 Ben Thanh 和 Bui Vien.",
    sections: [
      { heading: "Mi tuong den 是什么?", body: "Mi tuong den 是很多越南客人搜索韩式炸酱面时使用的无声调写法, 对应韩语 jajangmyeon." },
      { heading: "靠近 Ben Thanh 和 Bui Vien", body: "位于第1郡市中心, 适合游客、酒店客人、办公室午餐和晚餐." },
      { heading: "推荐搭配", body: "韩式炸酱面适合搭配糖醋肉、煎饺或 champong 辣海鲜面, 一桌人更好点餐." }
    ]
  },
  "champong-korean-chinese-food-ho-chi-minh": {
    slug: "champong-korean-chinese-food-ho-chi-minh",
    nav: "Champong 辣海鲜面",
    title: "Champong Ho Chi Minh | 胡志明市韩式辣海鲜面",
    description: "在胡志明市第1郡寻找 champong, champon, jjamppong 或 jjambbong? DOYA 提供韩式中餐辣海鲜面.",
    eyebrow: "Champong / Jjambbong",
    h1: "胡志明市 Champong 辣海鲜面",
    subtitle: "Champong, champon, jjamppong 和 jjambbong 都指向这道韩式中餐辣海鲜汤面.",
    summary:
      "这个页面面向搜索 champong Ho Chi Minh, jjambbong Saigon, Korean spicy seafood noodles 和韩式中餐的客人.",
    sections: [
      { heading: "Champong 就是 jjambbong", body: "不同客人会用 champong, champon, jjamppong 或 jjambbong 搜索韩国辣海鲜面." },
      { heading: "真实第1郡位置", body: "页面将菜品关键词与 77I Bui Thi Xuan, Ben Thanh, District 1, Ho Chi Minh City 连接起来." }
    ]
  },
  "korean-chinese-food-ho-chi-minh": {
    slug: "korean-chinese-food-ho-chi-minh",
    nav: "韩式中餐",
    title: "胡志明市韩国餐厅 | DOYA 韩式中餐第1郡",
    description:
      "在胡志明市找韩国餐厅、韩式中餐、Korean food District 1 或 Korean restaurant near Ben Thanh? DOYA 提供 champong, 炸酱面和糖醋肉.",
    eyebrow: "Korean Chinese food",
    h1: "胡志明市韩式中餐",
    subtitle: "韩国风味的中餐: jjambbong / champong 辣海鲜面、韩式炸酱面、糖醋肉和米饭类.",
    summary:
      "DOYA 适合搜索 Korean restaurant Ho Chi Minh, 韩国餐厅第1郡, Korean food near Bui Vien, Korean restaurant near Ben Thanh 和韩式中餐的客人.",
    sections: [
      { heading: "不是普通中餐", body: "这是韩国人熟悉的韩式中餐风味, 以红汤辣海鲜面、黑豆酱面和炸物分享菜为主." },
      { heading: "方便游客理解", body: "页面自然包含 Korean restaurant, Korean food, Chinese food, Korean Chinese food, champong 和 jjambbong 等搜索词." }
    ]
  },
  "korean-food-delivery-ho-chi-minh": {
    ...pageContent.en["korean-food-delivery-ho-chi-minh"],
    nav: "预订 / 外卖",
    title: "胡志明市韩国餐厅预订与外卖 | DOYA JJAMBBONG",
    h1: "预订或订购 DOYA JJAMBBONG",
    subtitle: "可通过 KakaoTalk, Zalo 或电话咨询订位、外带和第1郡附近外卖."
  },
  "late-night-korean-food-ho-chi-minh": {
    ...pageContent.en["late-night-korean-food-ho-chi-minh"],
    nav: "夜宵",
    title: "胡志明市第1郡韩国夜宵 | DOYA JJAMBBONG",
    h1: "胡志明市韩国夜宵",
    subtitle: "在 Saigon 市中心吃热汤面、韩式中餐和分享菜."
  },
  "hangover-spicy-noodles-saigon": {
    ...pageContent.en["hangover-spicy-noodles-saigon"],
    nav: "醒酒辣面",
    title: "Saigon 醒酒辣面 | 韩式 Champong 辣海鲜面",
    h1: "Saigon 韩式醒酒辣海鲜面"
  },
  "location-contact": {
    ...pageContent.en["location-contact"],
    nav: "位置",
    title: "位置与联系方式 | DOYA JJAMBBONG 第1郡",
    h1: "位置与联系方式",
    subtitle: "前往 77I Bui Thi Xuan, District 1 的 DOYA JJAMBBONG."
  },
  about: { ...pageContent.en.about, nav: "关于 DOYA", title: "关于 DOYA JJAMBBONG | 胡志明市韩国餐厅", h1: "关于 DOYA" },
  faq: { ...pageContent.en.faq, nav: "FAQ", title: "FAQ | DOYA JJAMBBONG 韩国餐厅第1郡", h1: "常见问题" },
  reviews: { ...pageContent.en.reviews, nav: "评价", title: "评价 | DOYA JJAMBBONG 韩国餐厅第1郡", h1: "评价" },
  branches: { ...pageContent.en.branches, nav: "分店", title: "DOYA JJAMBBONG 胡志明市分店", h1: "DOYA JJAMBBONG 胡志明市分店" },
  "return-policy": { ...pageContent.en["return-policy"], nav: "退换政策", title: "退换政策 | DOYA JJAMBBONG", h1: "退换政策" }
};

pageContent.ja = {
  ...pageContent.en,
  "": {
    slug: "",
    nav: "ホーム",
    title: "DOYA JJAMBBONG | ホーチミン1区の韓国料理・チャンポン",
    description:
      "DOYA JJAMBBONG はホーチミン1区の韓国料理・韓国中華レストラン。チャンポン、韓国式海鮮ラーメン、ジャージャー麺、タンスユクをベンタイン市場やブイビエン近くで楽しめます。",
    eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
    h1: "ホーチミン1区の韓国料理と韓国中華チャンポン",
    subtitle: "ベンタイン市場、ブイビエン、Bui Thi Xuan 近くで、辛い海鮮チャンポン、ジャージャー麺、タンスユクを気軽にどうぞ。",
    summary:
      "DOYA JJAMBBONG は 77I Bui Thi Xuan, District 1, Ho Chi Minh City にある韓国中華レストランです。ホーチミン 韓国料理、ホーチミン チャンポン、ホーチミン ジャージャー麺、ベンタイン市場 韓国料理を探す日本人旅行者にも分かりやすい場所です。",
    sections: [
      {
        heading: "1区中心部、ベンタイン市場とブイビエン近く",
        body: "ホテル、観光エリア、バー街からアクセスしやすい Bui Thi Xuan にあります。ホーチミン 韓国料理 1区、ブイビエン 韓国料理、ベンタイン市場 韓国料理の検索意図に合わせたページです。"
      },
      {
        heading: "毎日 10:30 - 23:30",
        body: "ランチ、夕食、夜遅めの食事、飲んだ後の辛いスープ麺に使いやすい営業時間です。チャンポン、ジャージャー麺、韓国式中華料理を中心に提供しています。"
      }
    ]
  },
  menu: {
    ...pageContent.en.menu,
    nav: "メニュー",
    title: "DOYA メニュー | ホーチミンのチャンポン、ジャージャー麺、韓国中華",
    description:
      "DOYA JJAMBBONG の日本語メニュー。ホーチミン1区でチャンポン、韓国式海鮮ラーメン、ジャージャー麺、タンスユク、韓国中華を探す方へ。",
    eyebrow: "DOYA メニュー",
    h1: "韓国中華メニュー",
    subtitle: "辛い麺、辛くない麺、シェア料理、ご飯ものまで、旅行者にも選びやすいメニューです。",
    summary:
      "DOYA のメニューは、ホーチミン チャンポン、韓国式海鮮ラーメン、ジャージャー麺、Jajangmyeon、タンスユク、韓国中華を探すお客様に向けて整理されています。"
  },
  "mi-tuong-den-han-quoc-quan-1": {
    slug: "mi-tuong-den-han-quoc-quan-1",
    nav: "韓国式ジャージャー麺",
    title: "ホーチミンの韓国式ジャージャー麺 | Jajangmyeon・Mi Tuong Den",
    description:
      "ホーチミン1区で韓国式ジャージャー麺、Jajangmyeon、Korean black bean noodles、mi tuong den を探すなら DOYA JJAMBBONG。ベンタイン市場とブイビエン近く。",
    eyebrow: "Jajangmyeon / Mi tuong den",
    h1: "ホーチミン1区の韓国式ジャージャー麺",
    subtitle: "辛くない黒味噌ソースの麺。辛いチャンポンが苦手な方にも選びやすい韓国中華メニューです。",
    summary:
      "韓国式ジャージャー麺は Jajangmyeon、Korean black bean noodles、mi tuong den とも検索されます。DOYA JJAMBBONG は 77I Bui Thi Xuan にあり、ベンタイン市場、ブイビエン、1区ホテル街から行きやすい場所です。",
    sections: [
      {
        heading: "ジャージャー麺とは",
        body: "黒豆味噌ソースを絡めて食べる韓国中華の定番麺です。チャンポンより辛くないため、辛い料理が苦手な日本人のお客様にもおすすめです。"
      },
      {
        heading: "mi tuong den 検索にも対応",
        body: "ベトナムでは mi tuong den や mì tương đen と検索されることがあります。日本語ページでも Jajangmyeon とあわせて同じ料理として案内しています。"
      },
      {
        heading: "タンスユクとの組み合わせ",
        body: "ジャージャー麺はタンスユク、餃子、辛いチャンポンと一緒に頼むと、辛い料理と辛くない料理のバランスが取りやすくなります。"
      }
    ]
  },
  "signature-jjambbong": {
    slug: "signature-jjambbong",
    nav: "看板チャンポン",
    title: "看板 Jjambbong | ホーチミン1区の韓国式辛い海鮮麺",
    description:
      "DOYA の看板 Jjambbong は、ホーチミン1区でチャンポン、韓国式海鮮ラーメン、辛い海鮮麺を探す方に向けた一杯です。",
    eyebrow: "Signature bowl",
    h1: "DOYA の看板チャンポン",
    subtitle: "赤い辛口スープ、海鮮、野菜、韓国中華の香ばしさを合わせた一杯。",
    summary:
      "DOYA Jjambbong は、ホーチミン チャンポン、辛い海鮮麺、韓国式海鮮ラーメン、韓国中華を探す方に分かりやすい看板メニューです。",
    sections: [
      { heading: "赤い辛口スープ", body: "海鮮の旨味、唐辛子の辛さ、野菜、韓国中華の香りを合わせた深い味わいです。" },
      { heading: "辛い料理が好きな方へ", body: "夕食、夜遅めの食事、飲んだ後の温かい麺として選びやすいメニューです。" }
    ]
  },
  "champong-korean-chinese-food-ho-chi-minh": {
    slug: "champong-korean-chinese-food-ho-chi-minh",
    nav: "チャンポン",
    title: "ホーチミン チャンポン | 韓国式海鮮ラーメン・Jjambbong",
    description:
      "ホーチミンでチャンポン、champong、jjambbong、韓国式海鮮ラーメン、辛い海鮮麺を探す方へ。DOYA は1区 Bui Thi Xuan で提供しています。",
    eyebrow: "Champong / Jjambbong",
    h1: "ホーチミンの韓国式チャンポン",
    subtitle: "チャンポン、champong、jjamppong、jjambbong は、韓国中華の辛い海鮮麺を探すときによく使われる表記です。",
    summary:
      "このページは、ホーチミン チャンポン、韓国チャンポン ホーチミン、韓国式海鮮ラーメン、辛い海鮮麺、ベンタイン市場 韓国料理、ブイビエン 韓国料理の検索に合わせています。",
    sections: [
      {
        heading: "Champong は Jjambbong の検索表記",
        body: "日本語ではチャンポン、英語では champong、jjamppong、jjambbong と検索されることがあります。DOYA はこれらの検索を同じ看板メニューに接続します。"
      },
      {
        heading: "1区のローカル検索に強いページ",
        body: "77I Bui Thi Xuan、Ben Thanh、District 1、Ho Chi Minh City を明記し、日本人旅行者が Google で見つけやすい構成にしています。"
      }
    ]
  },
  "korean-chinese-food-ho-chi-minh": {
    slug: "korean-chinese-food-ho-chi-minh",
    nav: "韓国中華",
    title: "ホーチミン 韓国料理 | 1区の韓国中華 DOYA JJAMBBONG",
    description:
      "ホーチミン 韓国料理、ホーチミン 韓国中華、1区 韓国料理、ベンタイン市場 韓国料理を探すなら DOYA。チャンポン、ジャージャー麺、タンスユクを提供。",
    eyebrow: "Korean Chinese food",
    h1: "ホーチミンの韓国中華",
    subtitle: "韓国風の中華料理: チャンポン、ジャージャー麺、タンスユク、ご飯ものを1区中心部で。",
    summary:
      "DOYA は、ホーチミン 韓国料理、ホーチミン 韓国料理 1区、ホーチミン 韓国中華、Korean restaurant near Ben Thanh、Korean food near Bui Vien の検索意図に合わせたレストランページです。",
    sections: [
      {
        heading: "一般的な中華ではなく韓国中華",
        body: "メニューは中華由来ですが、味は韓国式です。辛い赤い海鮮スープ、黒味噌のジャージャー麺、タンスユクなどが中心です。"
      },
      {
        heading: "日本人旅行者にも分かりやすく",
        body: "韓国料理、韓国中華、チャンポン、ジャージャー麺、ベンタイン市場、ブイビエンという検索語を自然に入れ、旅行中でも探しやすくしています。"
      }
    ]
  },
  "korean-food-delivery-ho-chi-minh": {
    ...pageContent.en["korean-food-delivery-ho-chi-minh"],
    nav: "予約 / デリバリー",
    title: "ホーチミン 韓国料理の予約・デリバリー | DOYA JJAMBBONG",
    description:
      "ホーチミン1区で韓国料理、チャンポン、ジャージャー麺、タンスユクの予約、持ち帰り、デリバリー相談は KakaoTalk、Zalo、電話で可能です。",
    eyebrow: "予約 / デリバリー",
    h1: "DOYA JJAMBBONG の予約・注文",
    subtitle: "KakaoTalk、Zalo、電話から、席予約、持ち帰り、デリバリーを相談できます。",
    summary:
      "ホーチミン 韓国料理 デリバリー、1区 韓国料理 予約、チャンポン デリバリー、ジャージャー麺 持ち帰りを探す方に向けた案内ページです。"
  },
  "late-night-korean-food-ho-chi-minh": {
    ...pageContent.en["late-night-korean-food-ho-chi-minh"],
    nav: "深夜の韓国料理",
    title: "ホーチミン 深夜 韓国料理 | 1区のチャンポンと韓国中華",
    description:
      "ホーチミン1区で夜遅めの韓国料理、飲んだ後の辛い海鮮麺、チャンポン、ジャージャー麺を探す方へ。DOYA は毎日 23:30 まで営業。",
    eyebrow: "Late Night District 1",
    h1: "ホーチミン1区の深夜韓国料理",
    subtitle: "観光後、仕事後、飲んだ後に食べやすい熱い麺とシェア料理。",
    summary:
      "ホーチミン 深夜 韓国料理、ブイビエン 韓国料理、飲んだ後 食事 サイゴン、チャンポン 1区の検索に合わせたページです。"
  },
  "hangover-spicy-noodles-saigon": {
    ...pageContent.en["hangover-spicy-noodles-saigon"],
    nav: "辛い海鮮麺",
    title: "サイゴンの辛い海鮮麺 | 韓国式チャンポン・Jjambbong",
    description:
      "飲んだ後や夜食に食べたい韓国式辛い海鮮麺。ホーチミン1区の DOYA でチャンポン、jjambbong、韓国中華をどうぞ。",
    eyebrow: "Hangover noodles",
    h1: "サイゴンの韓国式辛い海鮮麺",
    subtitle: "熱いスープ、海鮮、辛さがほしい時の韓国式チャンポン。",
    summary:
      "サイゴン 辛い麺、ホーチミン チャンポン、韓国式海鮮ラーメン、飲んだ後 食事の検索に合わせたページです。"
  },
  "location-contact": {
    ...pageContent.en["location-contact"],
    nav: "場所",
    title: "DOYA JJAMBBONG の場所 | ホーチミン1区 Bui Thi Xuan",
    description:
      "DOYA JJAMBBONG は 77I Bui Thi Xuan, District 1, Ho Chi Minh City。ベンタイン市場、ブイビエン、1区ホテル街からアクセスしやすい韓国料理店です。",
    eyebrow: "1区の場所",
    h1: "場所と連絡先",
    subtitle: "Google Maps で 77I Bui Thi Xuan の DOYA JJAMBBONG へ。",
    summary:
      "DOYA JJAMBBONG はホーチミン1区、Bui Thi Xuan にある韓国中華レストランです。ベンタイン市場、ブイビエン、ホテル街、夜遊びエリアからアクセスしやすい場所です。"
  },
  about: {
    ...pageContent.en.about,
    nav: "DOYA について",
    title: "DOYA JJAMBBONG について | ホーチミンの韓国中華レストラン",
    description:
      "DOYA JJAMBBONG はホーチミン1区の韓国中華レストラン。チャンポン、ジャージャー麺、タンスユク、辛い海鮮麺を提供しています。",
    eyebrow: "About DOYA",
    h1: "DOYA JJAMBBONG について",
    subtitle: "サイゴン中心部で楽しめる韓国中華のコンフォートフード。",
    summary:
      "DOYA JJAMBBONG は、ホーチミン 韓国料理、ホーチミン 韓国中華、チャンポン、ジャージャー麺を探す方に向けた1区のレストランです。"
  },
  faq: {
    ...pageContent.en.faq,
    nav: "FAQ",
    title: "FAQ | DOYA JJAMBBONG ホーチミン1区 韓国料理",
    description:
      "チャンポン、ジャージャー麺、辛さ、予約、デリバリー、場所についてのよくある質問。",
    eyebrow: "FAQ",
    h1: "よくある質問",
    subtitle: "来店前、注文前に知っておきたいこと。",
    summary:
      "DOYA JJAMBBONG はホーチミン1区の韓国中華レストランです。チャンポン、ジャージャー麺、タンスユク、予約、デリバリー、場所について案内します。"
  },
  reviews: {
    ...pageContent.en.reviews,
    nav: "レビュー",
    title: "レビュー | DOYA JJAMBBONG ホーチミン韓国料理",
    description:
      "ホーチミン1区でチャンポン、ジャージャー麺、韓国中華を楽しむ DOYA JJAMBBONG のレビュー案内。",
    eyebrow: "Reviews",
    h1: "レビュー",
    subtitle: "1区で DOYA が選ばれる理由。",
    summary:
      "お客様は、辛い海鮮チャンポン、アクセスの良い1区の場所、夜遅めの食事、韓国中華メニューを理由に DOYA を選びます。"
  },
  branches: {
    ...pageContent.en.branches,
    nav: "店舗",
    title: "DOYA JJAMBBONG ホーチミン店舗 | 1区・7区・タオディエン",
    description:
      "ホーチミン市内の DOYA JJAMBBONG 店舗情報。1区、Sky Garden、Midtown、Sun Avenue、Thao Dien など。",
    eyebrow: "DOYA Branches",
    h1: "DOYA JJAMBBONG ホーチミン店舗",
    subtitle: "エリア別に DOYA を探せます。",
    summary:
      "ホーチミン市内で DOYA JJAMBBONG、韓国料理、チャンポン、韓国中華を探す方のための店舗案内です。"
  },
  "return-policy": {
    ...pageContent.en["return-policy"],
    nav: "返品ポリシー",
    title: "返品・返金ポリシー | DOYA JJAMBBONG",
    description:
      "DOYA JJAMBBONG の店内飲食、持ち帰り、デリバリー注文に関する返品・返金ポリシー。",
    eyebrow: "Return Policy",
    h1: "返品・返金ポリシー",
    subtitle: "DOYA JJAMBBONG 1区の食品注文について。",
    summary:
      "食品は注文後に調理するため、調理開始後のお客様都合による返品・返金は原則できません。注文違い、品不足、品質の問題がある場合は、当日中に電話、Zalo、Facebook、メールでご連絡ください。"
  }
};

const competitiveLandingPages: Record<Locale, Partial<Record<PageSlug, PageContent>>> = {
  vi: {
    "best-champong-district-1-ho-chi-minh": {
      slug: "best-champong-district-1-ho-chi-minh",
      nav: "Best champong Q1",
      title: "Best Champong District 1 Ho Chi Minh | DOYA JJAMBBONG",
      description:
        "Tìm best champong District 1, jjambbong Ho Chi Minh hoặc mì cay hải sản gần Bến Thành? DOYA phục vụ champong Hàn-Trung tại 77I Bùi Thị Xuân.",
      eyebrow: "Champong District 1",
      h1: "Best champong tại District 1 cho khách tìm mì cay Hàn Quốc",
      subtitle:
        "Một trang dành riêng cho khách gõ champong District 1, jjambbong Ho Chi Minh, jjamppong Saigon hoặc Korean spicy seafood noodles.",
      summary:
        "DOYA JJAMBBONG nằm tại 77I Bùi Thị Xuân, Quận 1, gần Bến Thành, Bùi Viện và khu khách sạn trung tâm. Trang này gom các tìm kiếm về champong, champon, jjambbong và mì cay hải sản Hàn Quốc vào đúng món nổi bật của DOYA.",
      sections: [
        {
          heading: "Champong, jjamppong và jjambbong là cùng một nhu cầu tìm kiếm",
          body:
            "Khách nước ngoài có thể gõ champong, jjamppong, jjambbong hoặc Korean spicy seafood noodles. Nội dung này giúp Google hiểu DOYA phù hợp với các cách viết đó."
        },
        {
          heading: "Tập trung vào Quận 1, không đánh rộng toàn thành phố",
          body:
            "DOYA có lợi thế vị trí thật ở Bùi Thị Xuân, gần Bến Thành, Bùi Viện, Phạm Ngũ Lão và các khách sạn District 1."
        },
        {
          heading: "Gợi ý gọi món",
          body:
            "Nếu muốn vị cay hải sản, chọn DOYA Seafood Jjambbong. Nếu đi nhóm, gọi thêm tangsuyuk hoặc mandu để cân bằng vị cay."
        }
      ]
    },
    "mi-tuong-den-quan-1-gan-bui-vien": {
      slug: "mi-tuong-den-quan-1-gan-bui-vien",
      nav: "Mì tương đen Bùi Viện",
      title: "Mì tương đen Quận 1 gần Bùi Viện | Jajangmyeon DOYA",
      description:
        "Tìm mì tương đen Quận 1, mi tuong den gần Bùi Viện hoặc jajangmyeon gần Bến Thành? DOYA phục vụ mì tương đen Hàn Quốc không cay.",
      eyebrow: "Mi tuong den near Bui Vien",
      h1: "Mì tương đen Quận 1 gần Bùi Viện",
      subtitle:
        "Món Hàn không cay, dễ ăn, hợp với khách du lịch, khách Việt và nhóm đi ăn quanh Bùi Viện, Bến Thành.",
      summary:
        "Mì tương đen Hàn Quốc còn được tìm bằng mi tuong den, mì tương đen, jajangmyeon hoặc Korean black bean noodles. DOYA đặt trang này cho khách đang ở Quận 1, Bùi Viện, Phạm Ngũ Lão và Bến Thành.",
      sections: [
        {
          heading: "Không cay, dễ gọi cho nhóm",
          body:
            "Mì tương đen là món sốt đậu đen kiểu Hàn Quốc. Món này dễ ăn hơn champong cay và phù hợp khi trong nhóm có người không ăn cay."
        },
        {
          heading: "Gần khu nightlife và khách sạn",
          body:
            "Từ Bùi Viện, Phạm Ngũ Lão, Bến Thành và các khách sạn Quận 1, khách có thể dùng Google Maps để đến DOYA nhanh hơn."
        },
        {
          heading: "Từ khóa cần thắng",
          body:
            "Trang này tập trung vào mi tuong den Quan 1, mì tương đen Hàn Quốc, jajangmyeon District 1 và Korean black bean noodles near Bui Vien."
        }
      ]
    },
    "jajangmyeon-jjambbong-district-1": {
      slug: "jajangmyeon-jjambbong-district-1",
      nav: "Jajangmyeon & jjambbong",
      title: "Jajangmyeon và Jjambbong District 1 | Korean Chinese Noodles",
      description:
        "Ăn jajangmyeon và jjambbong tại District 1 Ho Chi Minh. DOYA phục vụ mì tương đen Hàn Quốc, champong hải sản cay và món Hàn-Trung.",
      eyebrow: "Jajangmyeon + Jjambbong",
      h1: "Jajangmyeon và jjambbong tại District 1",
      subtitle:
        "Một món không cay, một món cay hải sản. Đây là cặp gọi món dễ hiểu nhất trong Korean Chinese food.",
      summary:
        "Nếu khách phân vân giữa Korean black bean noodles và Korean spicy seafood noodles, DOYA giúp chọn nhanh: jajangmyeon cho vị không cay, jjambbong hoặc champong cho nước dùng cay nóng.",
      sections: [
        {
          heading: "Cặp món Korean Chinese food kinh điển",
          body:
            "Jajangmyeon là mì sốt đậu đen, còn jjambbong là mì cay hải sản. Cả hai đều là món Hàn-Trung quen thuộc với người Hàn."
        },
        {
          heading: "Phù hợp khách lần đầu",
          body:
            "Khách lần đầu có thể gọi một tô mì tương đen, một tô champong và một phần tangsuyuk để thử đủ vị."
        },
        {
          heading: "Địa điểm District 1 rõ ràng",
          body:
            "Trang nhấn mạnh 77I Bùi Thị Xuân, District 1 để cạnh tranh các tìm kiếm có vị trí như jajangmyeon District 1 và jjambbong near Ben Thanh."
        }
      ]
    },
    "korean-noodles-near-ben-thanh-market": {
      slug: "korean-noodles-near-ben-thanh-market",
      nav: "Mì Hàn gần Bến Thành",
      title: "Korean Noodles near Ben Thanh Market | DOYA District 1",
      description:
        "Tìm Korean noodles near Ben Thanh Market, mì cay Hàn Quốc hoặc mì tương đen gần Bến Thành? DOYA ở 77I Bùi Thị Xuân, Quận 1.",
      eyebrow: "Near Ben Thanh Market",
      h1: "Korean noodles near Ben Thanh Market",
      subtitle:
        "Champong cay, mì tương đen không cay và món Hàn-Trung cho khách ở quanh Bến Thành và khách sạn Quận 1.",
      summary:
        "Khách du lịch thường tìm Korean food near Ben Thanh Market, Korean noodles near Ben Thanh hoặc Korean restaurant District 1. DOYA kết nối các tìm kiếm đó với thực đơn mì Hàn-Trung rõ ràng.",
      sections: [
        {
          heading: "Cho khách ở quanh Bến Thành",
          body:
            "Từ Bến Thành, khu khách sạn và các tuyến đường trung tâm, DOYA là điểm ăn mì Hàn Quốc dễ tìm bằng bản đồ."
        },
        {
          heading: "Mì cay và mì không cay",
          body:
            "Champong phù hợp người thích cay. Mì tương đen phù hợp người muốn món đậm vị nhưng không cay."
        },
        {
          heading: "Tăng độ liên quan địa phương",
          body:
            "Trang dùng các từ khóa Ben Thanh Market, District 1, Korean noodles, jjambbong và jajangmyeon trong cùng ngữ cảnh."
        }
      ]
    },
    "korean-restaurant-near-bui-vien-walking-street": {
      slug: "korean-restaurant-near-bui-vien-walking-street",
      nav: "Món Hàn gần Bùi Viện",
      title: "Korean Restaurant near Bui Vien Walking Street | DOYA JJAMBBONG",
      description:
        "Tìm Korean restaurant near Bui Vien Walking Street, Korean food near Pham Ngu Lao hoặc món Hàn ăn khuya Quận 1? DOYA phục vụ đến 23:30.",
      eyebrow: "Near Bui Vien",
      h1: "Korean restaurant near Bui Vien Walking Street",
      subtitle:
        "Một lựa chọn món Hàn-Trung nóng hổi gần khu nightlife Quận 1, phù hợp trước hoặc sau khi đi chơi.",
      summary:
        "DOYA nằm tại Bùi Thị Xuân, gần Bùi Viện, Phạm Ngũ Lão và trung tâm Quận 1. Trang này tập trung vào Korean restaurant near Bui Vien, Korean food near Pham Ngu Lao và late night Korean food District 1.",
      sections: [
        {
          heading: "Sau khi đi chơi vẫn có món nóng",
          body:
            "Jjambbong cay, mì tương đen, tangsuyuk và cơm nóng là các lựa chọn rõ ràng khi khách muốn ăn tối muộn."
        },
        {
          heading: "Không chỉ cho khách Hàn",
          body:
            "Nội dung dùng tiếng Anh, tiếng Việt và tên món phổ biến để khách quốc tế hiểu nhanh mà không cần biết tiếng Hàn."
        },
        {
          heading: "Tín hiệu địa phương mạnh",
          body:
            "Bui Vien, Pham Ngu Lao, Ben Thanh, Bui Thi Xuan và District 1 được nhắc rõ để Google hiểu phạm vi tìm kiếm gần quán."
        }
      ]
    }
  },
  ko: {
    "best-champong-district-1-ho-chi-minh": {
      slug: "best-champong-district-1-ho-chi-minh",
      nav: "1군 champong",
      title: "호치민 1군 Champong | 도야짬뽕 Korean Spicy Seafood Noodles",
      description:
        "호치민 1군에서 champong, jjambbong, jjamppong, 한국식 매운 해물짬뽕을 찾는 손님을 위한 도야짬뽕 검색 랜딩 페이지입니다.",
      eyebrow: "Champong District 1",
      h1: "호치민 1군 champong 검색을 도야짬뽕으로 연결",
      subtitle:
        "외국인이 champong, champon, jjamppong, jjambbong으로 검색해도 도야 대표 짬뽕을 찾을 수 있게 만든 페이지입니다.",
      summary:
        "도야짬뽕은 77I Bui Thi Xuan, District 1에 위치한 한국식 중화요리 식당입니다. 벤탄, 부이비엔, 팜응우라오, 1군 호텔 근처에서 매운 해물짬뽕을 찾는 검색 의도를 정확히 받습니다.",
      sections: [
        {
          heading: "champong 표기까지 흡수",
          body:
            "한국어 짬뽕은 외국인 검색에서 champong, champon, jjamppong, jjambbong으로 다양하게 입력됩니다. 이 페이지는 그 표기를 한곳으로 모읍니다."
        },
        {
          heading: "1군 위치 키워드 강화",
          body:
            "District 1, Ben Thanh, Bui Vien, Bui Thi Xuan을 본문에 자연스럽게 넣어 넓은 호치민 검색보다 가까운 손님을 먼저 노립니다."
        },
        {
          heading: "대표 메뉴 연결",
          body:
            "매운 해물 국물을 찾는 손님은 DOYA Seafood Jjambbong, 덜 매운 메뉴가 필요하면 짜장면이나 탕수육을 함께 고를 수 있습니다."
        }
      ]
    },
    "mi-tuong-den-quan-1-gan-bui-vien": {
      slug: "mi-tuong-den-quan-1-gan-bui-vien",
      nav: "부이비엔 짜장면",
      title: "부이비엔 근처 짜장면 | Mi Tuong Den Quận 1 DOYA",
      description:
        "부이비엔, 팜응우라오, 벤탄 근처에서 mi tuong den, mì tương đen, jajangmyeon, 한국식 짜장면을 찾는 손님을 위한 도야짬뽕 페이지입니다.",
      eyebrow: "Mi tuong den near Bui Vien",
      h1: "부이비엔 근처 한국식 짜장면",
      subtitle:
        "맵지 않고 든든한 한국식 짜장면을 찾는 외국인, 베트남 손님, 한국 손님에게 맞춘 검색 페이지입니다.",
      summary:
        "mi tuong den은 베트남 손님이 한국식 짜장면을 찾을 때 자주 쓰는 검색어입니다. 도야짬뽕은 부이비엔, 팜응우라오, 벤탄에서 접근하기 쉬운 1군 위치에 있습니다.",
      sections: [
        {
          heading: "mi tuong den과 jajangmyeon 동시 대응",
          body:
            "검색어가 베트남어 무성조, 영어, 한국어로 갈라지기 때문에 mi tuong den, mì tương đen, jajangmyeon, 짜장면을 함께 사용합니다."
        },
        {
          heading: "맵지 않은 메뉴로 전환",
          body:
            "champong이 부담스러운 손님에게 짜장면은 가장 안전한 선택입니다. 탕수육과 같이 주문하기 좋습니다."
        },
        {
          heading: "부이비엔 주변 검색 대응",
          body:
            "Bui Vien, Pham Ngu Lao, Ben Thanh, District 1 키워드를 넣어 관광객의 근처 검색을 노립니다."
        }
      ]
    },
    "jajangmyeon-jjambbong-district-1": {
      slug: "jajangmyeon-jjambbong-district-1",
      nav: "짜장면 짬뽕",
      title: "호치민 1군 짜장면 짬뽕 | Jajangmyeon Jjambbong District 1",
      description:
        "호치민 1군에서 짜장면과 짬뽕, jajangmyeon, jjambbong, Korean Chinese noodles를 함께 찾는 손님을 위한 도야짬뽕 페이지입니다.",
      eyebrow: "Jajangmyeon + Jjambbong",
      h1: "호치민 1군 짜장면과 짬뽕",
      subtitle:
        "맵지 않은 짜장면과 매운 해물짬뽕을 한 번에 고를 수 있는 한국식 중화요리 조합입니다.",
      summary:
        "외국인 손님은 Korean black bean noodles와 Korean spicy seafood noodles를 따로 검색합니다. 이 페이지는 jajangmyeon과 jjambbong을 같은 식사 선택지로 연결합니다.",
      sections: [
        {
          heading: "처음 오는 손님에게 쉬운 조합",
          body:
            "한 명은 짬뽕, 한 명은 짜장면을 고르고 탕수육을 나눠 먹는 조합은 한국식 중화요리를 처음 먹는 손님에게도 이해가 쉽습니다."
        },
        {
          heading: "영문 검색어 반영",
          body:
            "jajangmyeon District 1, jjambbong near Ben Thanh, Korean Chinese noodles Ho Chi Minh 같은 검색을 한 페이지에서 받습니다."
        },
        {
          heading: "현장 위치와 메뉴를 함께 설명",
          body:
            "구글은 메뉴명만 있는 페이지보다 실제 주소, 근처 지역, 주문 상황이 함께 있는 페이지를 더 이해하기 쉽습니다."
        }
      ]
    },
    "korean-noodles-near-ben-thanh-market": {
      slug: "korean-noodles-near-ben-thanh-market",
      nav: "벤탄 근처 한식면",
      title: "벤탄시장 근처 Korean Noodles | 도야짬뽕 1군",
      description:
        "벤탄시장 근처에서 Korean noodles, jjambbong, jajangmyeon, 한국식 짬뽕과 짜장면을 찾는 손님을 위한 도야짬뽕 위치 페이지입니다.",
      eyebrow: "Near Ben Thanh Market",
      h1: "벤탄시장 근처 한국식 면요리",
      subtitle:
        "벤탄, 부이티쑤언, 1군 호텔 근처에서 짬뽕과 짜장면을 찾는 손님에게 맞춘 페이지입니다.",
      summary:
        "도야짬뽕은 벤탄시장 주변에서 Korean noodles near Ben Thanh Market, Korean restaurant District 1, jjambbong Ho Chi Minh을 검색하는 손님에게 명확한 선택지가 되도록 구성했습니다.",
      sections: [
        {
          heading: "벤탄 근처 로컬 검색",
          body:
            "Ben Thanh Market, Bui Thi Xuan, District 1을 함께 사용해 관광객과 호텔 손님의 근처 검색을 받습니다."
        },
        {
          heading: "짬뽕과 짜장 모두 대응",
          body:
            "매운 국물이 필요하면 짬뽕, 맵지 않은 메뉴가 필요하면 짜장면으로 선택지를 나눕니다."
        },
        {
          heading: "구글 지도와 연결",
          body:
            "검색 후 바로 지도, 전화, Zalo, KakaoTalk으로 이어지도록 위치 정보와 주문 경로를 유지합니다."
        }
      ]
    },
    "korean-restaurant-near-bui-vien-walking-street": {
      slug: "korean-restaurant-near-bui-vien-walking-street",
      nav: "부이비엔 한식당",
      title: "부이비엔 근처 한식당 | Korean Restaurant near Bui Vien",
      description:
        "부이비엔 워킹스트리트, 팜응우라오, 벤탄 근처에서 Korean restaurant, Korean food, 짬뽕, 짜장면을 찾는 손님을 위한 도야짬뽕 페이지입니다.",
      eyebrow: "Near Bui Vien",
      h1: "부이비엔 근처 한국식 중화요리",
      subtitle:
        "늦은 시간에도 뜨거운 짬뽕, 짜장면, 탕수육을 찾는 여행객과 1군 손님을 위한 페이지입니다.",
      summary:
        "이 페이지는 Korean restaurant near Bui Vien Walking Street, Korean food near Pham Ngu Lao, late night Korean food District 1 검색을 도야짬뽕으로 연결합니다.",
      sections: [
        {
          heading: "야식과 해장 검색 대응",
          body:
            "부이비엔 근처에서 술 마신 뒤 뜨거운 국물이나 든든한 한식을 찾는 손님에게 짬뽕과 짜장면을 연결합니다."
        },
        {
          heading: "외국인이 이해하는 표현",
          body:
            "Korean restaurant, Korean food, Korean Chinese food, jjambbong, jajangmyeon을 함께 사용해 검색어 차이를 줄입니다."
        },
        {
          heading: "1군 실제 주소 강조",
          body:
            "77I Bui Thi Xuan 주소와 Bui Vien, Pham Ngu Lao, Ben Thanh의 거리감을 계속 보여주는 것이 핵심입니다."
        }
      ]
    }
  },
  en: {
    "best-champong-district-1-ho-chi-minh": {
      slug: "best-champong-district-1-ho-chi-minh",
      nav: "Best Champong D1",
      title: "Best Champong District 1 Ho Chi Minh | DOYA JJAMBBONG",
      description:
        "Looking for best champong District 1, jjambbong Ho Chi Minh, or Korean spicy seafood noodles near Ben Thanh? DOYA serves Korean-Chinese noodles on Bui Thi Xuan.",
      eyebrow: "Champong District 1",
      h1: "Best champong in District 1 for Korean spicy seafood noodles",
      subtitle:
        "A focused guide for guests searching champong, champon, jjamppong, jjambbong, or Korean spicy seafood noodles in central Ho Chi Minh City.",
      summary:
        "DOYA JJAMBBONG is at 77I Bui Thi Xuan, District 1, close to Ben Thanh, Bui Vien, Pham Ngu Lao, and central hotels. This page connects champong and jjambbong searches to DOYA's spicy seafood noodle bowls.",
      sections: [
        {
          heading: "Champong, jjamppong, and jjambbong search intent",
          body:
            "Guests spell Korean 짬뽕 in several ways. This page helps Google connect champong, champon, jjamppong, and jjambbong to the same Korean spicy seafood noodle experience."
        },
        {
          heading: "Focused on District 1",
          body:
            "Instead of competing across all of Ho Chi Minh City, DOYA targets high-intent nearby searches around Bui Thi Xuan, Ben Thanh, Bui Vien, and District 1 hotels."
        },
        {
          heading: "What to order",
          body:
            "Choose DOYA Seafood Jjambbong for a spicy seafood broth. Add tangsuyuk or mandu when sharing with friends."
        }
      ]
    },
    "mi-tuong-den-quan-1-gan-bui-vien": {
      slug: "mi-tuong-den-quan-1-gan-bui-vien",
      nav: "Mi Tuong Den Bui Vien",
      title: "Mi Tuong Den Quan 1 near Bui Vien | Korean Black Bean Noodles",
      description:
        "Find mi tuong den Quan 1, mì tương đen near Bui Vien, jajangmyeon, or Korean black bean noodles near Ben Thanh at DOYA JJAMBBONG.",
      eyebrow: "Mi tuong den near Bui Vien",
      h1: "Mi tuong den in Quan 1 near Bui Vien",
      subtitle:
        "A non-spicy Korean black bean noodle option for tourists, Vietnamese guests, and groups near Bui Vien, Pham Ngu Lao, and Ben Thanh.",
      summary:
        "Mi tuong den, mì tương đen, jajangmyeon, and Korean black bean noodles all point to the same Korean-Chinese comfort food. DOYA targets those searches from a real District 1 location.",
      sections: [
        {
          heading: "Non-spicy Korean noodles",
          body:
            "Jajangmyeon is a black bean sauce noodle dish. It is easier for non-spicy eaters than champong and works well for mixed groups."
        },
        {
          heading: "Close to Bui Vien and Pham Ngu Lao",
          body:
            "Guests staying around Bui Vien Walking Street, Pham Ngu Lao, Ben Thanh, or central hotels can reach DOYA by Google Maps."
        },
        {
          heading: "Keywords this page targets",
          body:
            "Mi tuong den Quan 1, mì tương đen Hàn Quốc, jajangmyeon District 1, Korean black bean noodles near Bui Vien, and non-spicy Korean noodles."
        }
      ]
    },
    "jajangmyeon-jjambbong-district-1": {
      slug: "jajangmyeon-jjambbong-district-1",
      nav: "Jajangmyeon & Jjambbong",
      title: "Jajangmyeon and Jjambbong District 1 | Korean Chinese Noodles",
      description:
        "Eat jajangmyeon and jjambbong in District 1 Ho Chi Minh. DOYA serves Korean black bean noodles, spicy seafood champong, and Korean-Chinese classics.",
      eyebrow: "Jajangmyeon + Jjambbong",
      h1: "Jajangmyeon and jjambbong in District 1",
      subtitle:
        "One non-spicy black bean noodle dish, one spicy seafood noodle soup. The easiest Korean-Chinese pairing for first-time guests.",
      summary:
        "Guests often search Korean black bean noodles and Korean spicy seafood noodles separately. DOYA connects jajangmyeon and jjambbong as two core Korean-Chinese choices at one District 1 restaurant.",
      sections: [
        {
          heading: "The classic Korean-Chinese noodle pair",
          body:
            "Jajangmyeon is black bean noodles. Jjambbong, also searched as champong, is spicy seafood noodle soup."
        },
        {
          heading: "Easy first order",
          body:
            "For two or more people, order one jajangmyeon, one jjambbong, and tangsuyuk to try the core Korean-Chinese flavors."
        },
        {
          heading: "District 1 local relevance",
          body:
            "This page combines menu terms with location terms such as District 1, Ben Thanh, Bui Vien, and Bui Thi Xuan."
        }
      ]
    },
    "korean-noodles-near-ben-thanh-market": {
      slug: "korean-noodles-near-ben-thanh-market",
      nav: "Noodles Near Ben Thanh",
      title: "Korean Noodles near Ben Thanh Market | DOYA District 1",
      description:
        "Find Korean noodles near Ben Thanh Market, Korean spicy seafood noodles, jjambbong, or jajangmyeon at DOYA on Bui Thi Xuan, District 1.",
      eyebrow: "Near Ben Thanh Market",
      h1: "Korean noodles near Ben Thanh Market",
      subtitle:
        "Spicy champong, non-spicy black bean noodles, and Korean-Chinese dishes for guests near Ben Thanh and District 1 hotels.",
      summary:
        "Tourists search Korean food near Ben Thanh Market, Korean noodles near Ben Thanh, and Korean restaurant District 1. DOYA gives those searches a clear noodle-focused landing page.",
      sections: [
        {
          heading: "For guests around Ben Thanh",
          body:
            "DOYA is easy to find from Ben Thanh, central hotels, Bui Thi Xuan, and nearby District 1 streets."
        },
        {
          heading: "Spicy and non-spicy choices",
          body:
            "Champong is the spicy seafood option. Jajangmyeon is the black bean noodle option for guests who do not want spice."
        },
        {
          heading: "Local SEO focus",
          body:
            "This page connects Ben Thanh Market, District 1, Korean noodles, jjambbong, champong, and jajangmyeon in one search-friendly context."
        }
      ]
    },
    "korean-restaurant-near-bui-vien-walking-street": {
      slug: "korean-restaurant-near-bui-vien-walking-street",
      nav: "Near Bui Vien",
      title: "Korean Restaurant near Bui Vien Walking Street | DOYA JJAMBBONG",
      description:
        "Looking for a Korean restaurant near Bui Vien Walking Street, Korean food near Pham Ngu Lao, or late-night Korean food in District 1? DOYA is open until 23:30.",
      eyebrow: "Near Bui Vien",
      h1: "Korean restaurant near Bui Vien Walking Street",
      subtitle:
        "Hot Korean-Chinese noodles and share dishes near District 1 nightlife, hotels, Bui Vien, and Pham Ngu Lao.",
      summary:
        "DOYA is on Bui Thi Xuan, close to Bui Vien, Pham Ngu Lao, Ben Thanh, and central District 1. This page targets Korean restaurant near Bui Vien, Korean food near Pham Ngu Lao, and late-night Korean food District 1.",
      sections: [
        {
          heading: "Hot food after a night out",
          body:
            "Spicy jjambbong, black bean noodles, tangsuyuk, and rice dishes work well for late dinners and post-drinks meals."
        },
        {
          heading: "Readable for international guests",
          body:
            "The page uses English menu names, Korean-Chinese terms, and nearby landmarks so visitors can quickly understand what DOYA serves."
        },
        {
          heading: "Strong neighborhood signals",
          body:
            "Bui Vien, Pham Ngu Lao, Ben Thanh, Bui Thi Xuan, and District 1 appear together to strengthen local search relevance."
        }
      ]
    }
  },
  zh: {
    "best-champong-district-1-ho-chi-minh": {
      slug: "best-champong-district-1-ho-chi-minh",
      nav: "第1郡 Champong",
      title: "胡志明市第1郡 Champong 辣海鲜面 | DOYA JJAMBBONG",
      description:
        "在胡志明市第1郡搜索 champong, jjambbong, jjamppong 或韩式辣海鲜面? DOYA 位于 77I Bui Thi Xuan, 靠近 Ben Thanh 和 Bui Vien.",
      eyebrow: "Champong District 1",
      h1: "胡志明市第1郡 Champong 辣海鲜面",
      subtitle:
        "为搜索 champong, champon, jjamppong, jjambbong 和 Korean spicy seafood noodles 的客人准备的页面.",
      summary:
        "DOYA JJAMBBONG 位于 77I Bui Thi Xuan, District 1, 靠近 Ben Thanh, Bui Vien, Pham Ngu Lao 和市中心酒店. 这个页面把不同拼写的 champong 搜索连接到 DOYA 的韩式辣海鲜面.",
      sections: [
        {
          heading: "不同拼写, 同一道韩式辣海鲜面",
          body:
            "中国客人和外国客人可能会输入 champong, champon, jjamppong 或 jjambbong. 这些搜索都指向韩式辣海鲜汤面."
        },
        {
          heading: "主打第1郡近距离搜索",
          body:
            "相比全胡志明市的大关键词, DOYA 更适合先赢 District 1, Ben Thanh, Bui Vien 和 Bui Thi Xuan 附近搜索."
        },
        {
          heading: "推荐点餐",
          body:
            "想吃辣海鲜汤面可以选 DOYA Seafood Jjambbong. 如果多人一起吃, 可以加糖醋肉或煎饺."
        }
      ]
    },
    "mi-tuong-den-quan-1-gan-bui-vien": {
      slug: "mi-tuong-den-quan-1-gan-bui-vien",
      nav: "Bui Vien 炸酱面",
      title: "Bui Vien 附近韩式炸酱面 | Mi Tuong Den 第1郡",
      description:
        "在 Bui Vien, Pham Ngu Lao, Ben Thanh 附近搜索 mi tuong den, mì tương đen, jajangmyeon 或韩式炸酱面, 可前往 DOYA JJAMBBONG.",
      eyebrow: "Mi tuong den near Bui Vien",
      h1: "Bui Vien 附近韩式炸酱面",
      subtitle:
        "不辣、酱香浓郁, 适合游客、中国客人、越南客人和不想吃辣的客人.",
      summary:
        "Mi tuong den 是很多越南客人搜索韩式炸酱面时使用的写法, 也对应 jajangmyeon 和 Korean black bean noodles. DOYA 位于第1郡, 靠近 Bui Vien, Pham Ngu Lao 和 Ben Thanh.",
      sections: [
        {
          heading: "不辣的韩国面",
          body:
            "韩式炸酱面使用黑豆酱, 口味浓郁但不辣. 如果不想吃 champong 辣海鲜面, 炸酱面是更安全的选择."
        },
        {
          heading: "靠近 Bui Vien 和 Pham Ngu Lao",
          body:
            "住在步行街、范五老街、滨城市场或第1郡酒店的客人, 可以通过 Google Maps 快速找到 DOYA."
        },
        {
          heading: "目标关键词",
          body:
            "这个页面集中覆盖 mi tuong den Quan 1, 韩式炸酱面 胡志明市, jajangmyeon District 1 和 Korean black bean noodles near Bui Vien."
        }
      ]
    },
    "jajangmyeon-jjambbong-district-1": {
      slug: "jajangmyeon-jjambbong-district-1",
      nav: "炸酱面和辣海鲜面",
      title: "第1郡 Jajangmyeon 和 Jjambbong | 韩式中餐面",
      description:
        "在胡志明市第1郡吃 jajangmyeon 韩式炸酱面和 jjambbong 辣海鲜面. DOYA 提供韩式中餐经典菜单.",
      eyebrow: "Jajangmyeon + Jjambbong",
      h1: "第1郡 Jajangmyeon 和 Jjambbong",
      subtitle:
        "一个是不辣的黑豆酱面, 一个是辣海鲜汤面. 第一次吃韩式中餐时很容易选择.",
      summary:
        "很多客人会分别搜索 Korean black bean noodles 和 Korean spicy seafood noodles. DOYA 把 jajangmyeon 和 jjambbong 连接到同一家第1郡韩式中餐餐厅.",
      sections: [
        {
          heading: "韩式中餐经典组合",
          body:
            "Jajangmyeon 是韩式炸酱面, jjambbong 或 champong 是辣海鲜汤面. 两个菜单一起点最容易理解韩国中餐风味."
        },
        {
          heading: "第一次来怎么点",
          body:
            "两个人以上可以点一份炸酱面, 一份辣海鲜面, 再加糖醋肉分享."
        },
        {
          heading: "第1郡本地搜索",
          body:
            "页面把菜单名和 District 1, Ben Thanh, Bui Vien, Bui Thi Xuan 放在一起, 方便 Google 理解地点相关性."
        }
      ]
    },
    "korean-noodles-near-ben-thanh-market": {
      slug: "korean-noodles-near-ben-thanh-market",
      nav: "滨城市场韩式面",
      title: "滨城市场附近韩式面 | Korean Noodles near Ben Thanh",
      description:
        "在滨城市场附近搜索 Korean noodles, 韩式辣海鲜面, jjambbong 或韩式炸酱面? DOYA 位于 Bui Thi Xuan 第1郡.",
      eyebrow: "Near Ben Thanh Market",
      h1: "滨城市场附近韩式面",
      subtitle:
        "为在 Ben Thanh, 第1郡酒店和市中心附近寻找韩国面食的客人准备.",
      summary:
        "游客经常搜索 Korean food near Ben Thanh Market, Korean noodles near Ben Thanh 或 Korean restaurant District 1. DOYA 用这个页面连接滨城市场附近的韩式面需求.",
      sections: [
        {
          heading: "适合滨城市场附近客人",
          body:
            "从 Ben Thanh, Bui Thi Xuan, 第1郡酒店和市中心街区前往 DOYA 都比较方便."
        },
        {
          heading: "辣和不辣都可以",
          body:
            "Champong 是辣海鲜面, 韩式炸酱面是不辣黑豆酱面, 适合不同口味."
        },
        {
          heading: "本地 SEO 重点",
          body:
            "这个页面把 Ben Thanh Market, District 1, Korean noodles, jjambbong, champong 和 jajangmyeon 放在同一语境中."
        }
      ]
    },
    "korean-restaurant-near-bui-vien-walking-street": {
      slug: "korean-restaurant-near-bui-vien-walking-street",
      nav: "Bui Vien 韩国餐厅",
      title: "Bui Vien 步行街附近韩国餐厅 | DOYA JJAMBBONG",
      description:
        "在 Bui Vien Walking Street 附近搜索韩国餐厅、Korean food near Pham Ngu Lao 或第1郡韩国夜宵? DOYA 每天营业至 23:30.",
      eyebrow: "Near Bui Vien",
      h1: "Bui Vien 步行街附近韩国餐厅",
      subtitle:
        "靠近第1郡夜生活区、酒店区和 Pham Ngu Lao 的韩式中餐热食选择.",
      summary:
        "DOYA 位于 Bui Thi Xuan, 靠近 Bui Vien, Pham Ngu Lao, Ben Thanh 和第1郡中心. 这个页面覆盖 Korean restaurant near Bui Vien, Korean food near Pham Ngu Lao 和 late night Korean food District 1.",
      sections: [
        {
          heading: "夜晚也适合吃热食",
          body:
            "辣海鲜面、韩式炸酱面、糖醋肉和米饭类适合晚餐、夜宵或酒后想吃热汤的客人."
        },
        {
          heading: "方便外国客人理解",
          body:
            "页面同时使用英文菜单名、韩式中餐词汇和附近地标, 让游客更快知道 DOYA 提供什么."
        },
        {
          heading: "加强附近地标信号",
          body:
            "Bui Vien, Pham Ngu Lao, Ben Thanh, Bui Thi Xuan 和 District 1 同时出现, 提高本地搜索相关性."
        }
      ]
    }
  },
  ja: {
    "best-champong-district-1-ho-chi-minh": {
      slug: "best-champong-district-1-ho-chi-minh",
      nav: "1区チャンポン",
      title: "ホーチミン1区 チャンポン | DOYA JJAMBBONG",
      description:
        "ホーチミン1区でチャンポン、champong、jjambbong、jjamppong、韓国式海鮮ラーメンを探す方へ。DOYA は Bui Thi Xuan にあります。",
      eyebrow: "Champong District 1",
      h1: "ホーチミン1区のチャンポン",
      subtitle:
        "チャンポン、champong、jjamppong、jjambbong と検索する日本人旅行者・外国人旅行者向けのページです。",
      summary:
        "DOYA JJAMBBONG は 77I Bui Thi Xuan, District 1 にあり、ベンタイン市場、ブイビエン、ファングーラオ、1区ホテル街からアクセスしやすい韓国中華レストランです。",
      sections: [
        {
          heading: "表記違いを同じ料理へ接続",
          body:
            "韓国の 짬뽕 は、日本語ではチャンポン、英語検索では champong、jjamppong、jjambbong と入力されることがあります。"
        },
        {
          heading: "1区の近く検索を狙うページ",
          body:
            "ホーチミン全体ではなく、District 1、Ben Thanh、Bui Vien、Bui Thi Xuan 近くの検索意図に集中しています。"
        },
        {
          heading: "おすすめ注文",
          body:
            "辛い海鮮スープ麺なら DOYA Seafood Jjambbong。複数人ならタンスユクや餃子と合わせると選びやすくなります。"
        }
      ]
    },
    "mi-tuong-den-quan-1-gan-bui-vien": {
      slug: "mi-tuong-den-quan-1-gan-bui-vien",
      nav: "ブイビエン近くジャージャー麺",
      title: "ブイビエン近く韓国式ジャージャー麺 | Mi Tuong Den 1区",
      description:
        "ブイビエン、ファングーラオ、ベンタイン近くで mi tuong den、jajangmyeon、韓国式ジャージャー麺を探すなら DOYA JJAMBBONG。",
      eyebrow: "Mi tuong den near Bui Vien",
      h1: "ブイビエン近くの韓国式ジャージャー麺",
      subtitle:
        "辛くない黒味噌ソースの麺。旅行者、日本人、ベトナム人、辛い料理が苦手な方にも選びやすい一品です。",
      summary:
        "Mi tuong den は、ベトナムで韓国式ジャージャー麺を探す時によく使われる表記です。DOYA は Bui Vien、Pham Ngu Lao、Ben Thanh に近い1区の韓国中華レストランです。",
      sections: [
        {
          heading: "辛くない韓国麺",
          body:
            "韓国式ジャージャー麺は黒豆味噌ソースの麺です。チャンポンほど辛くないため、辛い料理が苦手な方にも向いています。"
        },
        {
          heading: "ブイビエンとファングーラオ近く",
          body:
            "ウォーキングストリート、ファングーラオ、ベンタイン、1区ホテル街から Google Maps でアクセスしやすい場所です。"
        },
        {
          heading: "狙う検索語",
          body:
            "mi tuong den Quan 1、韓国式ジャージャー麺 ホーチミン、jajangmyeon District 1、Korean black bean noodles near Bui Vien を意識しています。"
        }
      ]
    },
    "jajangmyeon-jjambbong-district-1": {
      slug: "jajangmyeon-jjambbong-district-1",
      nav: "ジャージャー麺とチャンポン",
      title: "ホーチミン1区 Jajangmyeon と Jjambbong | 韓国中華麺",
      description:
        "ホーチミン1区で韓国式ジャージャー麺とチャンポンを食べるなら DOYA。Jajangmyeon, Jjambbong, 韓国中華の案内ページ。",
      eyebrow: "Jajangmyeon + Jjambbong",
      h1: "ホーチミン1区のジャージャー麺とチャンポン",
      subtitle:
        "辛くない黒味噌麺と辛い海鮮スープ麺。初めての韓国中華でも選びやすい組み合わせです。",
      summary:
        "韓国式ジャージャー麺は Jajangmyeon、辛い海鮮麺は Jjambbong または Champong と検索されます。DOYA はこの2つを1区の同じ店舗で案内します。",
      sections: [
        {
          heading: "韓国中華の定番2品",
          body:
            "Jajangmyeon は黒味噌ソースの麺、Jjambbong は辛い海鮮スープ麺です。2品を一緒に注文すると韓国中華らしさが分かりやすくなります。"
        },
        {
          heading: "初めてならこの組み合わせ",
          body:
            "2人以上ならジャージャー麺、チャンポン、タンスユクを一緒に頼むのがおすすめです。"
        },
        {
          heading: "1区の検索に合わせる",
          body:
            "District 1、Ben Thanh、Bui Vien、Bui Thi Xuan とメニュー名を同じページ内で自然に結びます。"
        }
      ]
    },
    "korean-noodles-near-ben-thanh-market": {
      slug: "korean-noodles-near-ben-thanh-market",
      nav: "ベンタイン近く韓国麺",
      title: "ベンタイン市場近く韓国麺 | Korean Noodles near Ben Thanh",
      description:
        "ベンタイン市場近くで韓国麺、チャンポン、韓国式海鮮ラーメン、ジャージャー麺を探すなら DOYA JJAMBBONG 1区。",
      eyebrow: "Near Ben Thanh Market",
      h1: "ベンタイン市場近くの韓国麺",
      subtitle:
        "ベンタイン、市中心部ホテル、1区観光エリアから行きやすい韓国中華の麺メニュー。",
      summary:
        "旅行者は Korean food near Ben Thanh Market、Korean noodles near Ben Thanh、Korean restaurant District 1 と検索します。DOYA はその検索に対してチャンポンとジャージャー麺を案内します。",
      sections: [
        {
          heading: "ベンタイン周辺の旅行者へ",
          body:
            "Ben Thanh、Bui Thi Xuan、1区ホテル街、市中心部から Google Maps で探しやすい場所です。"
        },
        {
          heading: "辛い麺と辛くない麺",
          body:
            "チャンポンは辛い海鮮麺、ジャージャー麺は辛くない黒味噌麺です。グループでも選びやすい構成です。"
        },
        {
          heading: "ローカル SEO の狙い",
          body:
            "Ben Thanh Market、District 1、Korean noodles、jjambbong、champong、jajangmyeon を同じ文脈で使います。"
        }
      ]
    },
    "korean-restaurant-near-bui-vien-walking-street": {
      slug: "korean-restaurant-near-bui-vien-walking-street",
      nav: "ブイビエン近く韓国料理",
      title: "ブイビエン近く韓国料理 | Korean Restaurant near Bui Vien",
      description:
        "ブイビエン、ファングーラオ近くで韓国料理、韓国中華、チャンポン、夜食を探す方へ。DOYA は毎日 23:30 まで営業。",
      eyebrow: "Near Bui Vien",
      h1: "ブイビエン近くの韓国料理",
      subtitle:
        "1区の夜遊びエリア、ホテル街、ファングーラオ近くで温かい韓国中華を食べたい時に。",
      summary:
        "DOYA は Bui Thi Xuan にあり、Bui Vien、Pham Ngu Lao、Ben Thanh、1区中心部からアクセスしやすい韓国中華レストランです。このページは Korean restaurant near Bui Vien と late night Korean food District 1 を狙います。",
      sections: [
        {
          heading: "夜遅めにも温かい食事",
          body:
            "辛いチャンポン、ジャージャー麺、タンスユク、ご飯ものは、夕食や飲んだ後の食事に使いやすいメニューです。"
        },
        {
          heading: "外国人にも分かりやすい表記",
          body:
            "Korean restaurant、Korean food、Korean Chinese food、jjambbong、jajangmyeon を同時に使い、検索語の違いを吸収します。"
        },
        {
          heading: "近く検索の地名を強化",
          body:
            "Bui Vien、Pham Ngu Lao、Ben Thanh、Bui Thi Xuan、District 1 を同じページで明確に示します。"
        }
      ]
    }
  }
};

for (const locale of Object.keys(competitiveLandingPages) as Locale[]) {
  Object.assign(pageContent[locale], competitiveLandingPages[locale]);
}
