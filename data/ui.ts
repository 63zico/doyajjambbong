import { Locale } from "@/lib/site";

export const uiCopy: Record<
  Locale,
  {
    badges: string[];
    cta: {
      menu: string;
      directions: string;
      order: string;
      call: string;
      kakao: string;
      zalo: string;
      phoneOrder: string;
      orderMethodsTitle: string;
      orderMethodsBody: string;
    };
    heroCard: { line: string; pill: string; label: string; title: string };
    menu: { eyebrow: string; title: string; body: string; lineup: string; signatureBadge: string };
    localSeo: { thirdTitle: string; thirdBody: string };
    map: {
      eyebrow: string;
      title: string;
      body1: string;
      body2: string;
      hours: string;
      phone: string;
      google: string;
      official: string;
      facebook: string;
      tripadvisor: string;
      delivery: string;
    };
    branch: { eyebrow: string; title: string; body: string; button: string; phone: string };
    why: { eyebrow: string; title: string; body: string; button: string; items: [string, string][] };
    spice: { eyebrow: string; title: string; levels: [string, string][] };
    trust: [string, string][];
    reviews: string[];
    footer: { visit: string; pages: string; description: string };
  }
> = {
  vi: {
    badges: ["Phong cách Hàn-Trung", "Quận 1 Sài Gòn", "10:30 - 23:30"],
    cta: {
      menu: "Xem thực đơn",
      directions: "Chỉ đường",
      order: "Đặt bàn / Giao hàng",
      call: "Gọi ngay",
      kakao: "KakaoTalk",
      zalo: "Zalo",
      phoneOrder: "Gọi đặt món",
      orderMethodsTitle: "3 cách đặt bàn / giao hàng",
      orderMethodsBody: "Chọn KakaoTalk, Zalo hoặc gọi điện trực tiếp để đặt bàn, đặt giao hàng, takeaway hoặc hỏi món."
    },
    heroCard: { line: "Nước dùng cay tại 77I Bùi Thị Xuân.", pill: "Sài Gòn", label: "Món đặc trưng", title: "JJAMBBONG" },
    menu: {
      eyebrow: "Món nổi bật",
      title: "Jjambbong, mì tương đen jajangmyeon, tangsuyuk và cơm nóng",
      body: "Thực đơn gọn, dễ hiểu, có món cay, món không cay và món chia sẻ cho nhóm bạn.",
      lineup: "Dòng món signature dễ gọi",
      signatureBadge: "Món DOYA"
    },
    localSeo: {
      thirdTitle: "Món Hàn gần Bùi Thị Xuân",
      thirdBody: "Một lựa chọn trung tâm cho khách tìm nhà hàng Hàn Quốc Quận 1, mì jjambbong Sài Gòn và món Hàn-Trung tại TP. Hồ Chí Minh."
    },
    map: {
      eyebrow: "Quận 1 Sài Gòn",
      title: "77I Bùi Thị Xuân, Quận 1, TP. Hồ Chí Minh",
      body1: "Nằm tại 77I Bùi Thị Xuân, P. Bến Thành, gần khách sạn, khu du lịch và nightlife trung tâm.",
      body2: "Phù hợp cho bữa trưa, bữa tối, món cay nóng và ăn khuya.",
      hours: "Giờ mở cửa",
      phone: "Điện thoại",
      google: "Google Maps",
      official: "Website chính thức",
      facebook: "Facebook",
      tripadvisor: "TripAdvisor",
      delivery: "Đặt bàn / Giao hàng"
    },
    branch: {
      eyebrow: "Mạng lưới DOYA tại TP. Hồ Chí Minh",
      title: "Tìm DOYA theo khu vực bạn đang ở",
      body: "Trang này gom các từ khóa như DOYA JJAMBBONG Quận 1, Phú Mỹ Hưng, Sky Garden, Midtown, Sun Avenue và Thảo Điền để khách dễ tìm đúng chi nhánh.",
      button: "Xem tất cả chi nhánh",
      phone: "Điện thoại"
    },
    why: {
      eyebrow: "Vì sao chọn DOYA",
      title: "Một thương hiệu Hàn-Trung cay nóng, rõ món và dễ gọi.",
      body: "DOYA được tối ưu cho các tìm kiếm như mì cay Hàn Quốc, mì hải sản cay, jjambbong Quận 1, món Hàn ăn khuya và món cay giải rượu ở Sài Gòn.",
      button: "Xem món signature",
      items: [
        ["Mì cay Hàn Quốc", "Vị hải sản cay nóng, dễ nhớ và hợp với người thích mì cay, jjambbong hoặc champong."],
        ["Dễ hiểu cho khách du lịch", "Cấu trúc tiếng Việt, tiếng Hàn và tiếng Anh giúp khách gọi món nhanh."],
        ["Ăn khuya tiện", "Mì nóng, tangsuyuk, mì tương đen jajangmyeon và cơm cho những lúc cần món chắc bụng."],
        ["Dễ đặt và dễ đi", "CTA rõ ràng cho gọi điện, chỉ đường, giao hàng và takeaway."]
      ]
    },
    spice: {
      eyebrow: "Hướng dẫn độ cay",
      title: "Chọn món nhanh theo khẩu vị.",
      levels: [
        ["Không cay", "Mì tương đen jajangmyeon, tangsuyuk, cơm bulgogi"],
        ["Cay", "Jjambbong đỏ, món cay và các món có vị cay rõ cho khách thích ăn cay"]
      ]
    },
    trust: [
      ["77I Bùi Thị Xuân", "Gần Bến Thành, dễ ghé khi ở Quận 1"],
      ["10:30 - 23:30", "Phù hợp bữa trưa, bữa tối và ăn khuya"],
      ["3 cách đặt", "KakaoTalk, Zalo hoặc gọi điện để đặt nhanh"],
      ["Combo dễ gọi", "Jjambbong, mì tương đen jajangmyeon và tangsuyuk ăn chung rất hợp"]
    ],
    reviews: [
      "Một bát mì cay Hàn Quốc nóng, hợp khi ở trung tâm Quận 1.",
      "Dễ chọn cho khách du lịch muốn ăn món Hàn-Trung tại Sài Gòn.",
      "Jjambbong, mì tương đen jajangmyeon và tangsuyuk là lý do để quay lại."
    ],
    footer: {
      visit: "Ghé DOYA",
      pages: "Trang",
      description: "Jjambbong, mì tương đen jajangmyeon, tangsuyuk và món Hàn-Trung tại Quận 1, TP. Hồ Chí Minh."
    }
  },
  ko: {
    badges: ["한국식 중화요리", "호치민 1군", "10:30 - 23:30"],
    cta: {
      menu: "메뉴 보기",
      directions: "길찾기",
      order: "예약/배달",
      call: "전화",
      kakao: "카카오톡",
      zalo: "Zalo",
      phoneOrder: "전화주문",
      orderMethodsTitle: "예약/배달 방법 3가지",
      orderMethodsBody: "카카오톡, Zalo, 전화주문 중 편한 방법으로 매장 예약, 배달 주문, 포장 예약을 문의하세요."
    },
    heroCard: { line: "77I Bùi Thị Xuân에서 먹는 매운 해물 국물.", pill: "사이공", label: "대표 메뉴", title: "짬뽕" },
    menu: {
      eyebrow: "대표 메뉴",
      title: "짬뽕, 짜장면, 탕수육, 덮밥",
      body: "매운 메뉴와 맵지 않은 메뉴를 구분해 한국인, 현지 손님, 관광객 모두 쉽게 고를 수 있게 구성했습니다.",
      lineup: "프랜차이즈형 시그니처 라인업",
      signatureBadge: "도야 대표"
    },
    localSeo: {
      thirdTitle: "부이비엔·3군 근처 한식",
      thirdBody: "부이비엔 근처 한식, 호치민 3군 근처 한국 식당, 호치민 짬뽕 검색에 자연스럽게 연결되는 1군 중심 매장입니다."
    },
    map: {
      eyebrow: "호치민 1군",
      title: "호치민 1군 77I Bùi Thị Xuân",
      body1: "77I Bùi Thị Xuân, P. Bến Thành에 있으며 벤탄, 여행자 숙소, 관광지, 나이트라이프 지역과 가깝습니다.",
      body2: "점심, 저녁, 매운 국물, 야식, 해장 메뉴로 방문하기 좋습니다.",
      hours: "영업시간",
      phone: "전화번호",
      google: "Google Maps",
      official: "공식 사이트",
      facebook: "Facebook",
      tripadvisor: "TripAdvisor",
      delivery: "예약/배달"
    },
    branch: {
      eyebrow: "호치민 도야짬뽕 지점",
      title: "도야짬뽕 호치민 지점명을 한 곳에 정리",
      body: "도야짬뽕 1군, 푸미흥, 스카이가든, 미드타운, 선애비뉴, 타오디엔 같은 검색어로도 이 사이트가 연결되도록 구성했습니다.",
      button: "전체 지점 보기",
      phone: "전화"
    },
    why: {
      eyebrow: "왜 도야인가",
      title: "짬뽕 한 그릇이 생각나는 날, 선택이 쉬운 곳.",
      body: "도야짬뽕은 진한 국물, 익숙한 메뉴 조합, 1군 접근성, 카카오톡, Zalo, 전화주문 편의까지 갖춘 한국식 중화요리 매장입니다.",
      button: "대표 메뉴 보기",
      items: [
        ["진한 빨간 국물", "해산물 감칠맛과 매운맛이 살아 있는 한국식 짬뽕."],
        ["익숙한 주문 조합", "짬뽕, 짜장, 탕수육, 밥메뉴를 취향대로 고르기 쉬움."],
        ["늦은 식사에도 든든함", "점심, 저녁, 야식, 해장 메뉴까지 폭넓게 어울림."],
        ["방문과 주문이 간단함", "지도, 카카오톡, Zalo, 전화주문 버튼으로 바로 연결."]
      ]
    },
    spice: {
      eyebrow: "매운맛 가이드",
      title: "취향에 맞게 빠르게 고르세요.",
      levels: [
        ["순한맛", "짜장면, 탕수육처럼 맵지 않거나 부담이 적은 메뉴"],
        ["매운맛", "짬뽕류와 매운맛을 좋아하는 손님에게 맞는 메뉴"]
      ]
    },
    trust: [
      ["77I Bùi Thị Xuân", "벤탄 근처라 1군에서 들르기 쉬움"],
      ["10:30 - 23:30", "점심, 저녁, 늦은 식사까지 가능"],
      ["주문 방법 3가지", "카카오톡, Zalo, 전화로 바로 문의 가능"],
      ["추천 조합", "짬뽕, 짜장, 탕수육을 함께 주문하기 좋음"]
    ],
    reviews: [
      "호치민 1군에서 뜨거운 매운 해물짬뽕을 먹기 좋은 곳.",
      "사이공에서 한국식 중화요리가 생각날 때 찾기 쉬운 매장.",
      "짬뽕, 짜장면, 탕수육 조합이 다시 오게 만드는 이유."
    ],
    footer: {
      visit: "방문 정보",
      pages: "페이지",
      description: "호치민 1군에서 즐기는 짬뽕, 짜장면, 탕수육, 한국식 중화요리."
    }
  },
  en: {
    badges: ["Korean-Chinese Franchise Style", "District 1 Saigon", "10:30 AM - 11:30 PM"],
    cta: {
      menu: "View Menu",
      directions: "Get Directions",
      order: "Reserve / Delivery",
      call: "Call",
      kakao: "KakaoTalk",
      zalo: "Zalo",
      phoneOrder: "Phone Order",
      orderMethodsTitle: "3 ways to reserve / order",
      orderMethodsBody: "Choose KakaoTalk, Zalo, or a direct phone call for table reservations, delivery, takeaway, or order questions."
    },
    heroCard: { line: "Spicy seafood broth at 77I Bui Thi Xuan.", pill: "Saigon", label: "Signature Bowl", title: "JJAMBBONG" },
    menu: {
      eyebrow: "Representative menu",
      title: "Jjambbong, jajangmyeon, tangsuyuk and rice bowls",
      body: "A tighter franchise-style menu built around clear spicy, non-spicy, sharing, and rice options.",
      lineup: "Franchise-ready signature lineup",
      signatureBadge: "DOYA Signature"
    },
    localSeo: {
      thirdTitle: "Korean food near Bui Thi Xuan",
      thirdBody: "A central choice for Korean food Ho Chi Minh, Chinese food Ho Chi Minh, Korean Chinese restaurant Ho Chi Minh, jjambbong Ho Chi Minh, and champong District 1 searches."
    },
    map: {
      eyebrow: "District 1 Saigon",
      title: "77I Bui Thi Xuan, District 1, Ho Chi Minh City",
      body1: "Located at 77I Bui Thi Xuan, Ben Thanh Ward, near hotels, tourist streets, bars, and the central nightlife area.",
      body2: "Good for lunch, dinner, spicy noodles, late meals, and Korean hangover comfort food.",
      hours: "Hours",
      phone: "Phone",
      google: "Google Maps",
      official: "Official Site",
      facebook: "Facebook",
      tripadvisor: "TripAdvisor",
      delivery: "Reserve / Delivery"
    },
    branch: {
      eyebrow: "Ho Chi Minh DOYA network",
      title: "Find DOYA by neighborhood",
      body: "This section helps branch searches for District 1, Phu My Hung, Sky Garden, Midtown, Sun Avenue, and Thao Dien connect back to the official site.",
      button: "View all branches",
      phone: "Phone"
    },
    why: {
      eyebrow: "Why DOYA",
      title: "Built like a spicy Korean-Chinese franchise brand.",
      body: "DOYA is positioned for Korean food, Chinese food, Korean Chinese food, jjambbong or champong in Saigon, late night food, and hangover spicy noodle searches.",
      button: "Explore signature menu",
      items: [
        ["Signature red broth", "Deep spicy seafood jjambbong broth, also searched as champong or champon, built for Korean-Chinese noodle fans."],
        ["Tourist friendly", "Clear English, Vietnamese, and Korean structure for travelers in District 1."],
        ["Late-night comfort", "Hot noodles, tangsuyuk, jajangmyeon, and rice bowls for after-hours cravings."],
        ["Delivery ready", "Fast paths for delivery, takeaway, maps, and phone conversion."]
      ]
    },
    spice: {
      eyebrow: "Spice level guide",
      title: "Easy choices for tourists, locals, and Korean expats.",
      levels: [
        ["Mild", "Jajangmyeon, tangsuyuk, rice bowls"],
        ["Spicy", "Red jjambbong and clear heat for guests who like spicy Korean-Chinese food"]
      ]
    },
    trust: [
      ["77I Bùi Thị Xuân", "Easy stop near Ben Thanh in District 1"],
      ["10:30 - 23:30", "Open for lunch, dinner, and late meals"],
      ["3 order paths", "Use KakaoTalk, Zalo, or phone to order"],
      ["Easy combo", "Jjambbong, jajang, and tangsuyuk pair well"]
    ],
    reviews: [
      "A satisfying spicy seafood noodle bowl in the center of District 1.",
      "Great for travelers craving Korean food, Chinese food, and Korean-Chinese comfort food in Saigon.",
      "Jjambbong, jajangmyeon, and tangsuyuk are the reason to come back."
    ],
    footer: {
      visit: "Visit",
      pages: "Pages",
      description: "Korean food, Chinese food, Korean-Chinese jjambbong or champong, jajangmyeon, tangsuyuk, and comfort food in District 1."
    }
  }
};
