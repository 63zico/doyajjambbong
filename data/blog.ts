import { Locale, site } from "@/lib/site";

export type BlogPost = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  eyebrow: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  intro: string;
  sections: { heading: string; body: string }[];
  cta: string;
};

const sharedDate = "2026-05-20";
const seoExpansionDate = "2026-06-10";

export const blogPosts: BlogPost[] = [
  {
    locale: "ko",
    slug: "ho-chi-minh-jjambbong-district-1",
    title: "호치민 1군 짬뽕 맛집 찾을 때: 부이비엔, 벤탄 근처 도야짬뽕",
    description:
      "호치민 1군, 부이비엔, 벤탄 근처에서 한국식 짬뽕, 짜장면, 탕수육을 찾는 여행자와 교민을 위한 중식당 위치와 메뉴 안내.",
    eyebrow: "District 1 Korean Chinese Food",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-seafood-jjambbong.jpg",
    imageAlt: "호치민 1군 도야짬뽕의 매운 해물 짬뽕",
    keywords: ["호치민 짬뽕", "호치민 1군 맛집 추천", "호치민 1군 중식당", "호치민 중국집", "부이비엔 근처 한국음식", "벤탄 근처 짬뽕", "Korean food District 1"],
    intro:
      `도야짬뽕은 ${site.address}에 있는 한국식 중식당입니다. 호치민 1군에서 매운 국물, 짜장면, 탕수육, 중국집 메뉴를 찾는 여행객에게 찾기 쉬운 위치입니다.`,
    sections: [
      {
        heading: "부이비엔과 벤탄 사이에서 찾기 쉬운 위치",
        body:
          "77I Bui Thi Xuan은 벤탄, 부이비엔, 3군 근처 동선에서 접근하기 좋습니다. 호텔에서 택시나 그랩으로 이동하기 쉽고, 식사 후 중심가로 이동하기에도 편합니다."
      },
      {
        heading: "짬뽕, 짜장, 탕수육 조합",
        body:
          "처음 방문한다면 도야짬뽕이나 해물백짬뽕에 짜장면 또는 탕수육을 함께 주문하는 조합이 좋습니다. 매운 메뉴와 맵지 않은 메뉴를 같이 고를 수 있어 일행이 함께 먹기 편합니다."
      },
      {
        heading: "관광객이 검색하는 키워드와 실제 메뉴가 맞는 곳",
        body:
          "Korean spicy seafood noodles, jjambbong, champong, Korean Chinese food 같은 검색어로 찾는 손님에게 실제 음식 사진과 메뉴가 바로 연결되도록 구성했습니다."
      }
    ],
    cta: "메뉴를 보고 카카오톡 오픈채팅, Zalo, 전화로 예약 또는 포장/배달 문의를 할 수 있습니다."
  },
  {
    locale: "ko",
    slug: "late-night-korean-food-saigon",
    title: "호치민 야식으로 한국 음식이 생각날 때: 1군 심야 짬뽕과 탕수육",
    description:
      "호치민 1군에서 늦은 저녁, 야식, 해장 메뉴를 찾을 때 좋은 한국식 짬뽕과 중식당 메뉴 추천.",
    eyebrow: "Late Night Korean Food",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-classic-jjambbong.jpg",
    imageAlt: "호치민 야식으로 좋은 도야짬뽕 기본 짬뽕",
    keywords: ["호치민 야식 맛집", "호치민 1군 야식", "호치민 해장 맛집", "late night Korean food", "Korean hangover soup", "심야 짬뽕"],
    intro:
      "여행 중 늦은 시간에 뜨거운 국물이나 매운 면이 생각날 때가 있습니다. 도야짬뽕은 10:30부터 23:30까지 운영해 저녁 식사와 늦은 식사에 맞는 메뉴를 제공합니다.",
    sections: [
      {
        heading: "야식 검색에 잘 맞는 메뉴",
        body:
          "짬뽕은 뜨거운 국물과 면, 채소, 해산물의 조합이라 늦은 시간에 든든하게 먹기 좋습니다. 탕수육, 군만두, 꽃빵튀김 같은 사이드 메뉴도 함께 고르기 좋습니다."
      },
      {
        heading: "술 마신 뒤 찾는 해장 키워드",
        body:
          "관광객은 late night Korean food, hangover spicy noodles, spicy seafood noodles 같은 검색어를 자주 사용합니다. 도야짬뽕은 이런 검색 의도와 실제 메뉴가 잘 맞습니다."
      },
      {
        heading: "매운맛이 부담되면",
        body:
          "매운 국물이 부담될 때는 해물백짬뽕, 짜장면, 볶음밥, 탕수육처럼 비교적 편하게 먹을 수 있는 메뉴를 고르면 좋습니다."
      }
    ],
    cta: "늦은 저녁 방문 전에는 전화 또는 Zalo로 영업 여부와 주문 가능 메뉴를 확인하면 더 편합니다."
  },
  {
    locale: "ko",
    slug: "bui-vien-ben-thanh-korean-food",
    title: "부이비엔, 벤탄 근처 한국음식: 여행자가 찾기 쉬운 도야짬뽕 1군점",
    description:
      "부이비엔 거리, 벤탄시장, 3군 근처에서 한국식 중식당과 매운 짬뽕을 찾는 관광객을 위한 위치 안내.",
    eyebrow: "Tourist SEO",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "부이비엔 벤탄 근처 한국식 짜장면",
    keywords: ["부이비엔 근처 맛집", "벤탄시장 근처 맛집", "벤탄 근처 한국음식", "호치민 1군 중식당", "호치민 중국집 추천", "Korean food near Bui Vien", "Korean restaurant near Ben Thanh", "District 1 Korean restaurant"],
    intro:
      "호치민 여행자는 숙소, 벤탄시장, 부이비엔 거리 주변에서 식사를 찾는 경우가 많습니다. 도야짬뽕 1군점은 이 동선에서 한국식 중식당이나 중국집을 찾는 손님에게 맞는 매장입니다.",
    sections: [
      {
        heading: "여행자 동선에 맞는 위치",
        body:
          "77I Bui Thi Xuan은 중심가와 가까워 택시, 그랩, 도보 이동 계획에 넣기 쉽습니다. Google Maps 버튼을 이용하면 바로 길찾기를 열 수 있습니다."
      },
      {
        heading: "혼밥과 단체 모두 가능한 메뉴",
        body:
          "혼자라면 짬뽕이나 짜장면 한 그릇이 좋고, 여러 명이면 탕수육, 깐풍기, 해물쟁반짜장, 해물짬뽕탕 같은 메뉴를 나눠 먹기 좋습니다."
      },
      {
        heading: "한국인과 외국인이 모두 이해하기 쉬운 구성",
        body:
          "사이트는 한국어, 베트남어, 영어로 구성되어 있어 관광객, 베트남 손님, 한국 손님이 메뉴와 위치를 빠르게 확인할 수 있습니다."
      }
    ],
    cta: "위치/연락처 페이지에서 Google Maps, Zalo, Facebook, 전화 버튼을 바로 사용할 수 있습니다."
  },
  {
    locale: "ko",
    slug: "what-is-jjambbong-champong",
    title: "짬뽕, Jjambbong, Champong 차이: 호치민에서 검색할 때 알아두면 좋은 말",
    description:
      "외국인이 champong, champon, jjamppong으로 검색하는 한국식 짬뽕의 뜻과 도야짬뽕 메뉴 안내.",
    eyebrow: "Jjambbong Guide",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-spicy-pork-jjambbong.jpg",
    imageAlt: "도야짬뽕의 매운 짬뽕 메뉴",
    keywords: ["jjambbong", "champong", "jjamppong", "Korean spicy seafood noodles", "mì cay Hàn Quốc"],
    intro:
      "짬뽕은 한국식 중식당에서 많이 찾는 매운 국물 면요리입니다. 영어권 손님은 jjambbong, jjamppong, champong, champon 같은 여러 철자로 검색합니다.",
    sections: [
      {
        heading: "Jjambbong과 Champong은 같은 메뉴를 찾는 검색어",
        body:
          "표기는 달라도 대부분 한국식 매운 해물 국물면을 찾는 검색입니다. 도야짬뽕 사이트는 여러 표기를 자연스럽게 반영해 관광객이 메뉴를 찾기 쉽게 했습니다."
      },
      {
        heading: "베트남어 검색은 Mì cay가 중요",
        body:
          "베트남 손님은 mì cay, mì cay Hàn Quốc, mì cay hải sản처럼 검색할 수 있습니다. 그래서 베트남어 페이지는 매운 면과 해물 국물 키워드를 중심으로 구성하는 것이 좋습니다."
      },
      {
        heading: "도야짬뽕에서 고를 수 있는 종류",
        body:
          "기본 도야짬뽕, 마라짬뽕, 소고기짬뽕, 순두부짬뽕, 해물백짬뽕처럼 취향에 맞춰 선택할 수 있습니다."
      }
    ],
    cta: "처음이면 기본 도야짬뽕을, 매운맛을 좋아하면 마라짬뽕을 추천합니다."
  },
  {
    locale: "ko",
    slug: "tourist-korean-food-saigon",
    title: "사이공 여행 중 한국음식이 먹고 싶을 때: 1군에서 메뉴 고르는 법",
    description:
      "호치민 여행자가 한국음식, 매운 음식, 해장 음식, 혼밥 메뉴를 찾을 때 도야짬뽕에서 고르기 좋은 메뉴 안내.",
    eyebrow: "Saigon Tourist Food",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-tangsuyuk.jpg",
    imageAlt: "호치민 여행 중 함께 먹기 좋은 도야짬뽕 탕수육",
    keywords: ["best Korean food in Saigon", "where to eat after drinking in Ho Chi Minh", "korean spicy noodles Vietnam", "호치민 한국음식", "호치민 혼밥"],
    intro:
      "여행 중 현지 음식도 좋지만, 한 번쯤 익숙한 한국식 메뉴가 생각날 때가 있습니다. 도야짬뽕은 매운 국물, 짜장면, 볶음밥, 튀김 메뉴를 한 곳에서 고를 수 있습니다.",
    sections: [
      {
        heading: "혼자 먹을 때",
        body:
          "혼밥이라면 도야짬뽕, 짜장면, 새우볶음밥, 마파두부밥처럼 한 접시로 끝나는 메뉴가 편합니다."
      },
      {
        heading: "여럿이 먹을 때",
        body:
          "2명 이상이면 짬뽕이나 짜장에 탕수육, 유린기, 칠리새우, 깐풍기 같은 메뉴를 추가하면 나눠 먹기 좋습니다."
      },
      {
        heading: "매운 음식이 생각날 때",
        body:
          "spicy seafood noodles, Korean spicy noodles, hangover soup 같은 검색어로 찾는 손님에게는 도야짬뽕과 마라짬뽕이 가장 잘 맞습니다."
      }
    ],
    cta: "메뉴 페이지에서 사진을 보고, 위치/연락처 페이지에서 길찾기 또는 예약/배달을 진행할 수 있습니다."
  },
  {
    locale: "ko",
    slug: "district-1-restaurant-recommendation",
    title: "호치민 1군 맛집 추천: 부이비엔, 벤탄 근처 짬뽕 중식당 도야짬뽕",
    description:
      "호치민 1군 맛집 추천, 부이비엔 근처 맛집, 벤탄시장 근처 맛집, 호치민 중식당과 중국집을 찾는 손님을 위한 도야짬뽕 메뉴 안내.",
    eyebrow: "호치민 1군 맛집 추천",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-menu-spread.jpg",
    imageAlt: "호치민 1군 맛집 추천 도야짬뽕 메뉴",
    keywords: [
      "호치민 1군 맛집 추천",
      "호치민 맛집 추천",
      "호치민 1군 맛집",
      "호치민 중식당",
      "호치민 중국집",
      "호치민 짬뽕 맛집",
      "부이비엔 근처 맛집",
      "벤탄시장 근처 맛집",
      "호치민 한국음식 추천",
      "호치민 매운 음식 맛집"
    ],
    intro:
      "호치민 1군에서 맛집을 찾는 손님은 보통 위치, 메뉴 사진, 영업시간, 이동 동선이 바로 필요합니다. 도야짬뽕은 부이비엔, 벤탄, 3군 근처에서 짬뽕과 짜장면, 탕수육을 찾는 손님에게 맞는 한국식 중식당입니다.",
    sections: [
      {
        heading: "호치민 1군 맛집 추천 검색에 맞는 이유",
        body:
          "도야짬뽕은 77I Bui Thi Xuan에 있어 중심가에서 접근하기 쉽고, 메뉴가 짬뽕, 짜장면, 탕수육, 볶음밥, 튀김 메뉴처럼 한국인이 익숙한 중국집 메뉴로 구성되어 있습니다."
      },
      {
        heading: "부이비엔, 벤탄, 3군 근처 손님에게 좋은 동선",
        body:
          "관광객은 부이비엔 근처 맛집, 벤탄시장 근처 맛집, District 1 restaurant recommendation 같은 검색을 많이 합니다. 이 글은 그런 검색 의도와 실제 방문 동선을 연결합니다."
      },
      {
        heading: "처음 방문할 때 추천 조합",
        body:
          "매운 국물이 좋으면 도야짬뽕, 맵지 않은 메뉴가 필요하면 짜장면이나 탕수육을 추천합니다. 여러 명이면 짬뽕 하나, 짜장 하나, 탕수육이나 깐풍기 같은 튀김 메뉴를 함께 고르면 좋습니다."
      }
    ],
    cta: "호치민 1군 맛집을 찾는 중이라면 메뉴 사진을 먼저 보고 Google Maps로 77I Bui Thi Xuan 위치를 확인하세요."
  },
  {
    locale: "ko",
    slug: "jjambbong-delivery-district-1",
    title: "호치민 짬뽕 배달과 포장: 1군에서 Zalo, 카카오톡, 전화로 주문하기",
    description:
      "호치민 1군 짬뽕 배달, 한국음식 배달, 중식당 포장 주문, Zalo 주문, 카카오톡 예약 문의를 위한 도야짬뽕 주문 안내.",
    eyebrow: "호치민 짬뽕 배달",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-seafood-jjambbong-platter.jpg",
    imageAlt: "호치민 1군 짬뽕 배달 포장 메뉴",
    keywords: [
      "호치민 짬뽕 배달",
      "호치민 1군 배달 맛집",
      "호치민 한국음식 배달",
      "호치민 중식 배달",
      "호치민 중국집 배달",
      "호치민 짜장면 배달",
      "호치민 탕수육 배달",
      "District 1 Korean food delivery",
      "jjambbong delivery Ho Chi Minh",
      "Zalo food order Ho Chi Minh"
    ],
    intro:
      "도야짬뽕은 방문 식사뿐 아니라 예약, 포장, 배달 문의도 받을 수 있도록 Zalo, 카카오톡 오픈채팅, 전화 주문 동선을 준비했습니다. 호치민 1군에서 짬뽕 배달이나 한국식 중식 포장을 찾는 손님에게 맞는 안내입니다.",
    sections: [
      {
        heading: "배달 검색어는 메뉴명과 지역을 같이 잡아야 함",
        body:
          "호치민 짬뽕 배달, 호치민 짜장면 배달, 호치민 탕수육 배달처럼 메뉴명과 지역이 같이 들어간 검색어가 전환율이 높습니다. 외국인은 Korean food delivery District 1, jjambbong delivery Ho Chi Minh처럼 검색할 수 있습니다."
      },
      {
        heading: "주문할 때 보내면 좋은 정보",
        body:
          "배달이나 포장 문의를 할 때는 메뉴명, 수량, 주소, 호텔명, 원하는 시간, 전화번호를 함께 보내면 확인이 빠릅니다. 예약은 인원수, 날짜, 시간을 같이 보내면 됩니다."
      },
      {
        heading: "배달/포장 추천 메뉴",
        body:
          "짬뽕류, 짜장면, 탕수육, 군만두, 꽃빵튀김, 볶음밥은 포장 문의에 잘 맞습니다. 국물 메뉴는 이동 거리와 시간에 따라 Zalo나 전화로 먼저 확인하는 것이 좋습니다."
      }
    ],
    cta: "예약/배달 페이지에서 KakaoTalk, Zalo, 전화주문 버튼 중 편한 방법을 선택하세요."
  },
  {
    locale: "vi",
    slug: "mi-cay-han-quoc-quan-1",
    title: "Mì cay Hàn Quốc Quận 1: DOYA JJAMBBONG gần Bùi Viện và Bến Thành",
    description:
      "Gợi ý mì cay Hàn Quốc, jjambbong, mì tương đen jajangmyeon và tangsuyuk tại Quận 1, gần Bùi Viện, Bến Thành và khu khách sạn trung tâm.",
    eyebrow: "Mì cay Hàn Quốc",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-classic-jjambbong.jpg",
    imageAlt: "Mì cay Hàn Quốc jjambbong tại DOYA JJAMBBONG Quận 1",
    keywords: ["mì cay Hàn Quốc Quận 1", "mì cay hải sản", "mì tương đen Quận 1", "mi tuong den Han Quoc", "jjambbong Sài Gòn", "quán ăn Hàn Quốc Quận 1", "mì cay gần Bùi Viện"],
    intro:
      `DOYA JJAMBBONG nằm tại ${site.address}. Đây là lựa chọn cho khách muốn ăn mì cay Hàn Quốc, jjambbong, mì tương đen jajangmyeon và món Hàn-Trung tại trung tâm Quận 1.`,
    sections: [
      {
        heading: "Gần Bùi Viện, Bến Thành và khách sạn trung tâm",
        body:
          "Vị trí 77I Bùi Thị Xuân thuận tiện cho khách du lịch, khách Hàn Quốc, người Việt làm việc hoặc ở gần Quận 1."
      },
      {
        heading: "Món nên thử khi tìm mì cay",
        body:
          "Nếu muốn vị cay rõ, hãy thử DOYA jjambbong hoặc mara jjambbong. Nếu muốn nhẹ hơn, có thể chọn mì trắng hải sản, mì tương đen Hàn Quốc jajangmyeon, cơm chiên tôm hoặc tangsuyuk."
      },
      {
        heading: "Dễ đặt bàn và hỏi giao hàng",
        body:
          "Khách có thể liên hệ bằng Zalo, KakaoTalk Open Chat hoặc gọi điện trực tiếp để hỏi đặt bàn, takeaway hoặc giao hàng."
      }
    ],
    cta: "Xem menu bằng hình ảnh trước khi đến để chọn món nhanh hơn."
  },
  {
    locale: "vi",
    slug: "quan-an-khuya-han-quoc-sai-gon",
    title: "Quán ăn khuya Hàn Quốc ở Sài Gòn: mì cay, jjambbong và món nóng Quận 1",
    description:
      "DOYA JJAMBBONG mở cửa đến 23:30, phù hợp cho khách tìm quán ăn khuya Hàn Quốc, mì cay hải sản và món Hàn-Trung tại Quận 1.",
    eyebrow: "Ăn khuya Quận 1",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-seafood-jjambbong-soup.jpg",
    imageAlt: "Món nóng ăn khuya Hàn Quốc tại Quận 1",
    keywords: ["quán ăn khuya Hàn Quốc", "mì cay ăn khuya", "mì tương đen ăn khuya", "late night Korean food Saigon", "mì cay hải sản Hàn Quốc", "ăn khuya Quận 1"],
    intro:
      "Khi cần món nóng sau giờ làm, sau khi đi chơi hoặc khi ở khách sạn gần trung tâm, mì cay và món Hàn-Trung là lựa chọn dễ ăn.",
    sections: [
      {
        heading: "Mở cửa cho bữa tối muộn",
        body:
          "DOYA phục vụ từ 10:30 đến 23:30, phù hợp cho bữa trưa, bữa tối và bữa ăn muộn tại trung tâm Sài Gòn."
      },
      {
        heading: "Mì cay và món chia sẻ",
        body:
          "Jjambbong, mì tương đen, tangsuyuk, gà chiên sốt và các món tôm là nhóm món dễ gọi khi đi theo nhóm."
      },
      {
        heading: "Từ khóa khách du lịch thường tìm",
        body:
          "Khách quốc tế có thể tìm late night Korean food, Korean hangover soup, spicy seafood noodles hoặc Korean restaurant District 1."
      }
    ],
    cta: "Bấm Google Maps để xem đường đi hoặc Zalo để hỏi món trước khi đến."
  },
  {
    locale: "vi",
    slug: "jjambbong-la-gi",
    title: "Jjambbong là gì? Mì cay hải sản Hàn Quốc khác gì mì cay Việt Nam?",
    description:
      "Giải thích jjambbong, champong, mì cay hải sản Hàn Quốc và cách chọn món tại DOYA JJAMBBONG Quận 1.",
    eyebrow: "Hướng dẫn món ăn",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-white-seafood-jjambbong.jpg",
    imageAlt: "Mì hải sản Hàn Quốc jjambbong trắng tại DOYA",
    keywords: ["jjambbong là gì", "champong là gì", "mì cay Hàn Quốc", "mì hải sản cay", "mì tương đen Hàn Quốc", "mì cay hải sản Quận 1"],
    intro:
      "Jjambbong là món mì Hàn-Trung với nước dùng nóng, thường có hải sản, rau và vị cay. Nhiều khách cũng tìm món này bằng tên champong, champon hoặc jjamppong.",
    sections: [
      {
        heading: "Jjambbong, champong và jjamppong",
        body:
          "Các cách viết khác nhau thường chỉ cùng một món mì cay hải sản kiểu Hàn Quốc. Trên menu DOYA, khách có thể chọn nhiều biến thể jjambbong theo khẩu vị."
      },
      {
        heading: "Khác với mì cay Việt Nam",
        body:
          "Mì cay Việt Nam thường quen thuộc với cấp độ cay. Jjambbong nhấn mạnh nước dùng hải sản, rau, độ nóng và phong cách Hàn-Trung."
      },
      {
        heading: "Nếu không ăn cay",
        body:
          "Khách có thể chọn bạch jjambbong, mì tương đen jajangmyeon, cơm chiên tôm hoặc tangsuyuk để có món dễ ăn hơn."
      }
    ],
    cta: "Xem menu DOYA để chọn món cay hoặc không cay phù hợp với nhóm của bạn."
  },
  {
    locale: "vi",
    slug: "giao-hang-mi-cay-quan-1",
    title: "Giao hàng mì cay Hàn Quốc Quận 1: đặt DOYA JJAMBBONG qua Zalo",
    description:
      "Hướng dẫn đặt mì cay Hàn Quốc, jjambbong, mì tương đen jajangmyeon, tangsuyuk và món Hàn-Trung Quận 1 qua Zalo, KakaoTalk hoặc điện thoại.",
    eyebrow: "Giao hàng Quận 1",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-seafood-jjambbong-platter.jpg",
    imageAlt: "Giao hàng mì cay Hàn Quốc Quận 1 DOYA JJAMBBONG",
    keywords: [
      "giao hàng mì cay Quận 1",
      "mì cay Hàn Quốc giao hàng",
      "đặt mì cay Hàn Quốc",
      "mì cay hải sản giao hàng",
      "mì tương đen giao hàng",
      "mi tuong den giao hang",
      "nhà hàng Hàn Quốc giao hàng Quận 1",
      "Zalo đặt món Hàn Quốc",
      "jjambbong delivery Ho Chi Minh"
    ],
    intro:
      "Nếu bạn đang tìm giao hàng mì cay Hàn Quốc Quận 1, DOYA JJAMBBONG có thể nhận hỏi món qua Zalo, KakaoTalk Open Chat hoặc điện thoại.",
    sections: [
      {
        heading: "Từ khóa giao hàng quan trọng",
        body:
          "Khách thường tìm giao hàng mì cay Quận 1, mì cay Hàn Quốc giao hàng, mì cay hải sản giao hàng hoặc nhà hàng Hàn Quốc giao hàng Quận 1. Nội dung này giúp khách tìm đúng trang đặt món."
      },
      {
        heading: "Thông tin nên gửi khi đặt món",
        body:
          "Hãy gửi tên món, số lượng, địa chỉ, tên khách sạn hoặc landmark gần đó, số điện thoại và thời gian mong muốn để nhân viên xác nhận nhanh hơn."
      },
      {
        heading: "Món dễ hỏi giao hàng",
        body:
          "Jjambbong, mì tương đen jajangmyeon, tangsuyuk, mandu chiên, cơm chiên tôm và các món chiên là nhóm món khách thường hỏi khi đặt takeaway hoặc giao hàng."
      }
    ],
    cta: "Bấm Zalo hoặc gọi điện để hỏi món, thời gian và khu vực giao hàng trước khi đặt."
  },
  {
    locale: "vi",
    slug: "quan-an-ngon-quan-1-gan-bui-vien",
    title: "Quán ăn ngon Quận 1 gần Bùi Viện: mì cay Hàn Quốc và món Hàn-Trung",
    description:
      "Gợi ý quán ăn ngon Quận 1 gần Bùi Viện, Bến Thành và khách sạn trung tâm cho khách muốn ăn mì cay Hàn Quốc, jjambbong, mì tương đen jajangmyeon và tangsuyuk.",
    eyebrow: "Quán ăn ngon Quận 1",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-menu-spread.jpg",
    imageAlt: "Quán ăn ngon Quận 1 gần Bùi Viện DOYA JJAMBBONG",
    keywords: [
      "quán ăn ngon Quận 1",
      "quán ăn ngon gần Bùi Viện",
      "quán ăn gần Bến Thành",
      "nhà hàng Hàn Quốc Quận 1",
      "mì tương đen Quận 1",
      "mi tuong den Quan 1",
      "mì cay ngon Quận 1",
      "quán Hàn Quốc gần Bùi Viện",
      "món Hàn-Trung Quận 1",
      "địa điểm ăn tối Quận 1"
    ],
    intro:
      "Khách ở Quận 1 thường tìm quán ăn ngon gần Bùi Viện, gần Bến Thành hoặc gần khách sạn trung tâm. DOYA JJAMBBONG là lựa chọn cho khách muốn ăn mì cay Hàn Quốc và món Hàn-Trung nóng tại 77I Bùi Thị Xuân.",
    sections: [
      {
        heading: "Vì sao hợp với tìm kiếm quán ăn ngon Quận 1",
        body:
          "DOYA có vị trí dễ đi, menu có hình ảnh rõ và các món quen thuộc như jjambbong, mì tương đen jajangmyeon, tangsuyuk, cơm chiên tôm, mandu chiên và các món tôm sốt."
      },
      {
        heading: "Gần Bùi Viện, Bến Thành và khu khách sạn",
        body:
          "Vị trí 77I Bùi Thị Xuân thuận tiện cho khách du lịch, khách Hàn Quốc, nhân viên văn phòng và nhóm bạn muốn ăn tối ở khu trung tâm."
      },
      {
        heading: "Món nên gọi lần đầu",
        body:
          "Nếu thích cay, hãy chọn DOYA jjambbong hoặc mara jjambbong. Nếu đi nhóm, gọi thêm tangsuyuk, gà sốt hoặc món tôm để dễ chia sẻ."
      }
    ],
    cta: "Dùng Google Maps để tìm đường hoặc Zalo để hỏi đặt bàn, takeaway và giao hàng."
  },
  {
    locale: "vi",
    slug: "nha-hang-han-quoc-gan-ben-thanh",
    title: "Nhà hàng Hàn Quốc gần Bến Thành: mì cay, jjambbong và món ăn khuya Quận 1",
    description:
      "DOYA JJAMBBONG là nhà hàng Hàn Quốc gần Bến Thành, Quận 1, phục vụ mì cay Hàn Quốc, jjambbong, mì tương đen jajangmyeon, tangsuyuk và món ăn khuya.",
    eyebrow: "Nhà hàng Hàn Quốc gần Bến Thành",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-classic-jjambbong.jpg",
    imageAlt: "Nhà hàng Hàn Quốc gần Bến Thành với mì cay jjambbong",
    keywords: [
      "nhà hàng Hàn Quốc gần Bến Thành",
      "quán Hàn Quốc Quận 1",
      "mì cay gần Bến Thành",
      "mì cay Hàn Quốc Sài Gòn",
      "mì tương đen gần Bến Thành",
      "mi tuong den gan Ben Thanh",
      "quán ăn khuya Quận 1",
      "Korean restaurant near Ben Thanh",
      "Korean food near District 1 hotels"
    ],
    intro:
      "Nếu bạn ở gần Bến Thành và muốn tìm nhà hàng Hàn Quốc hoặc món mì cay nóng, DOYA JJAMBBONG là một điểm dễ đi tại trung tâm Quận 1.",
    sections: [
      {
        heading: "Tìm nhà hàng Hàn Quốc gần Bến Thành",
        body:
          "Khách du lịch thường tìm nhà hàng Hàn Quốc gần Bến Thành, Korean restaurant near Ben Thanh hoặc quán Hàn Quốc Quận 1. DOYA kết nối các tìm kiếm đó với menu mì cay và món Hàn-Trung."
      },
      {
        heading: "Menu phù hợp cho bữa tối và ăn khuya",
        body:
          "Jjambbong cay nóng, mì tương đen jajangmyeon không quá cay, tangsuyuk giòn và cơm chiên là các lựa chọn dễ gọi cho khách đi một mình hoặc đi nhóm."
      },
      {
        heading: "Có thể hỏi đặt bàn và giao hàng",
        body:
          "Khách có thể liên hệ qua Zalo, KakaoTalk Open Chat hoặc điện thoại để hỏi đặt bàn, takeaway hoặc giao hàng quanh Quận 1."
      }
    ],
    cta: "Xem trang vị trí để mở Google Maps và đến DOYA nhanh hơn từ khu Bến Thành."
  },
  {
    locale: "en",
    slug: "korean-spicy-noodles-saigon",
    title: "Korean Spicy Noodles in Saigon: Jjambbong Near Bui Vien and Ben Thanh",
    description:
      "A tourist-friendly guide to Korean spicy seafood noodles, jjambbong, champong, jajangmyeon and tangsuyuk at DOYA JJAMBBONG in District 1.",
    eyebrow: "Korean Spicy Noodles",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-spicy-pork-jjambbong.jpg",
    imageAlt: "Korean spicy seafood noodles at DOYA JJAMBBONG in Saigon",
    keywords: ["Korean spicy noodles Saigon", "jjambbong Ho Chi Minh", "champong District 1", "Korean food near Bui Vien", "best Korean food in Saigon"],
    intro:
      `DOYA JJAMBBONG is located at ${site.address}, close to Bui Thi Xuan, Ben Thanh, hotels, and the District 1 nightlife area.`,
    sections: [
      {
        heading: "What to order first",
        body:
          "Start with DOYA jjambbong if you want the classic spicy seafood noodle soup. Add jajangmyeon or tangsuyuk if your group wants a non-spicy dish to share."
      },
      {
        heading: "Useful for travelers",
        body:
          "The location works well for guests staying near Ben Thanh, Bui Vien, District 3, or central Saigon hotels."
      },
      {
        heading: "Search terms that point to the same craving",
        body:
          "Guests may search jjambbong, jjamppong, champong, champon, Korean spicy noodles, spicy seafood noodles, or Korean Chinese food."
      }
    ],
    cta: "Use the location page for Google Maps, phone, Zalo, and Facebook contact buttons."
  },
  {
    locale: "en",
    slug: "late-night-korean-food-ho-chi-minh",
    title: "Late Night Korean Food in Ho Chi Minh: Hot Jjambbong and Comfort Food",
    description:
      "Where to eat Korean food after drinking or late in the evening in District 1: spicy seafood noodles, tangsuyuk, jajangmyeon and sharing dishes.",
    eyebrow: "Late Night Food",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-seafood-jjambbong-soup.jpg",
    imageAlt: "Late night Korean hangover soup in Ho Chi Minh City",
    keywords: ["late night Korean food", "Korean hangover soup", "where to eat after drinking in Ho Chi Minh", "spicy seafood noodles Saigon", "Korean restaurant open late"],
    intro:
      "After a long travel day or a night out in Saigon, a hot bowl of spicy noodles can be exactly what people search for.",
    sections: [
      {
        heading: "Open for late meals",
        body:
          "DOYA is open daily from 10:30 AM to 11:30 PM, making it useful for lunch, dinner, and late meals in District 1."
      },
      {
        heading: "Hangover-friendly menu choices",
        body:
          "Jjambbong is the strongest fit for Korean hangover soup searches. Jajangmyeon, tangsuyuk, fried mandu, and rice dishes are good options for guests who want less heat."
      },
      {
        heading: "Good for groups",
        body:
          "Groups can order a spicy noodle bowl, a black bean noodle dish, and one fried sharing dish for an easy Korean-Chinese meal."
      }
    ],
    cta: "Check the menu page first, then call or message through Zalo for reservation and delivery questions."
  },
  {
    locale: "en",
    slug: "what-is-jjambbong-champong",
    title: "What Is Jjambbong? Champong, Jjamppong and Korean Spicy Seafood Noodles",
    description:
      "A simple guide for tourists searching jjambbong, champong, champon or jjamppong in Ho Chi Minh City.",
    eyebrow: "Food Guide",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-seafood-jjambbong.jpg",
    imageAlt: "Korean jjambbong spicy seafood noodle soup",
    keywords: ["what is jjambbong", "champong Ho Chi Minh", "jjamppong Saigon", "Korean Chinese noodles", "spicy seafood noodle soup"],
    intro:
      "Jjambbong is a Korean-Chinese spicy noodle soup, often made with seafood, vegetables, chili heat, and a deep red broth.",
    sections: [
      {
        heading: "Why so many spellings?",
        body:
          "International guests often write the dish as jjambbong, jjamppong, champong, or champon. They usually mean the same Korean-Chinese spicy seafood noodle soup."
      },
      {
        heading: "What it tastes like",
        body:
          "The bowl is hot, savory, spicy, and seafood-forward. It is different from a simple spicy instant noodle because the broth is the focus."
      },
      {
        heading: "What to pair with it",
        body:
          "Jjambbong pairs well with jajangmyeon, tangsuyuk, fried mandu, or shrimp dishes when sharing a meal."
      }
    ],
    cta: "At DOYA, start with signature jjambbong and add tangsuyuk for a classic Korean-Chinese combo."
  },
  {
    locale: "en",
    slug: "korean-food-delivery-district-1",
    title: "Korean Food Delivery in District 1: Order Jjambbong, Jajangmyeon and Tangsuyuk",
    description:
      "How to ask for Korean food delivery, takeaway or reservation from DOYA JJAMBBONG in District 1 through Zalo, KakaoTalk or phone.",
    eyebrow: "Delivery District 1",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-tangsuyuk.jpg",
    imageAlt: "Korean Chinese food delivery District 1 tangsuyuk and jjambbong",
    keywords: [
      "Korean food delivery District 1",
      "Korean food delivery Ho Chi Minh",
      "jjambbong delivery Ho Chi Minh",
      "jajangmyeon delivery Saigon",
      "tangsuyuk delivery District 1",
      "Korean restaurant delivery near Bui Vien",
      "Zalo food order Ho Chi Minh"
    ],
    intro:
      "Guests staying near Bui Vien, Ben Thanh, or District 1 hotels often search for Korean food delivery or takeaway. DOYA provides clear contact paths through Zalo, KakaoTalk Open Chat, and phone.",
    sections: [
      {
        heading: "Delivery keywords tourists actually use",
        body:
          "High-intent searches include Korean food delivery District 1, jjambbong delivery Ho Chi Minh, jajangmyeon delivery Saigon, and Korean restaurant delivery near Bui Vien."
      },
      {
        heading: "What to send when ordering",
        body:
          "Send the menu items, quantity, address, hotel name or nearby landmark, phone number, and preferred time. For reservations, send party size, date, and time."
      },
      {
        heading: "Popular takeaway choices",
        body:
          "Jjambbong, jajangmyeon, tangsuyuk, fried mandu, shrimp fried rice, and fried sharing dishes are simple choices for takeaway and delivery questions."
      }
    ],
    cta: "Use the reservation and delivery page to choose Zalo, KakaoTalk, or phone order."
  },
  {
    locale: "en",
    slug: "best-korean-restaurant-district-1-bui-vien",
    title: "Best Korean Restaurant in District 1 Near Bui Vien: Spicy Noodles and Korean-Chinese Food",
    description:
      "A tourist-focused guide for guests searching best Korean restaurant in District 1, Korean food near Bui Vien, and Korean-Chinese food near Ben Thanh.",
    eyebrow: "Best Korean Restaurant District 1",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-menu-spread.jpg",
    imageAlt: "Best Korean restaurant District 1 near Bui Vien DOYA JJAMBBONG menu",
    keywords: [
      "best Korean restaurant in District 1",
      "Korean restaurant near Bui Vien",
      "Korean food near Ben Thanh",
      "best Korean food in Saigon",
      "where to eat in District 1 Ho Chi Minh",
      "Korean Chinese restaurant District 1",
      "spicy noodles District 1",
      "restaurant recommendation District 1"
    ],
    intro:
      "Travelers in District 1 often search for the best Korean restaurant near Bui Vien, Ben Thanh, or their hotel. DOYA JJAMBBONG gives them a clear option for Korean spicy noodles and Korean-Chinese comfort food.",
    sections: [
      {
        heading: "A strong fit for District 1 restaurant searches",
        body:
          "High-intent searches usually include a food type, neighborhood, and need. Examples include best Korean restaurant in District 1, Korean restaurant near Bui Vien, and where to eat in District 1 Ho Chi Minh."
      },
      {
        heading: "What tourists can order",
        body:
          "First-time guests can choose signature jjambbong, jajangmyeon, tangsuyuk, shrimp fried rice, fried mandu, or shrimp dishes depending on how spicy they want the meal to be."
      },
      {
        heading: "Easy to find from hotels and nightlife areas",
        body:
          "The 77I Bui Thi Xuan address is close to central hotels, Ben Thanh, Bui Vien, and the District 1 nightlife area, which helps tourists decide quickly."
      }
    ],
    cta: "Open the location page for Google Maps, Zalo, Facebook, and phone contact buttons."
  },
  {
    locale: "en",
    slug: "where-to-eat-after-drinking-ho-chi-minh",
    title: "Where to Eat After Drinking in Ho Chi Minh: Korean Hangover Soup and Late Night Food",
    description:
      "For travelers searching where to eat after drinking in Ho Chi Minh, DOYA serves hot Korean jjambbong, spicy seafood noodles, jajangmyeon and sharing dishes in District 1.",
    eyebrow: "After Drinking Food Saigon",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-seafood-jjambbong-soup.jpg",
    imageAlt: "Korean hangover soup and late night food in Ho Chi Minh",
    keywords: [
      "where to eat after drinking in Ho Chi Minh",
      "Korean hangover soup Saigon",
      "late night food District 1",
      "late night Korean food Ho Chi Minh",
      "spicy seafood noodles after drinking",
      "hangover food District 1",
      "Korean restaurant open late Ho Chi Minh"
    ],
    intro:
      "After a night out in Saigon, many travelers search for hot soup, spicy noodles, or comfort food near District 1. Korean jjambbong is a natural fit for that after-drinking craving.",
    sections: [
      {
        heading: "The search intent is simple",
        body:
          "People searching where to eat after drinking usually want something open, hot, filling, and easy to reach. DOYA is open daily from 10:30 AM to 11:30 PM in District 1."
      },
      {
        heading: "Korean hangover soup keywords",
        body:
          "Korean hangover soup, hangover spicy noodles, spicy seafood noodles, and late night Korean food are all useful search phrases for guests looking for a warm meal after drinks."
      },
      {
        heading: "Good non-spicy backup choices",
        body:
          "Guests who do not want spice can choose jajangmyeon, tangsuyuk, fried mandu, shrimp fried rice, or other sharing dishes."
      }
    ],
    cta: "Check the menu before visiting, then use Google Maps or Zalo to confirm the easiest route and order details."
  },
  {
    locale: "ko",
    slug: "vegetarian-options-district-1",
    title: "호치민 1군 채식 메뉴: 중식당에서 가볍게 먹기 좋은 선택지",
    description:
      "호치민 1군에서 채식 메뉴, vegetarian options, 맵지 않은 메뉴와 재료 조정 가능한 중식당 메뉴를 찾는 손님을 위한 안내.",
    eyebrow: "채식 메뉴",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "호치민 1군 채식 메뉴 문의와 맵지 않은 중식당 메뉴",
    keywords: [
      "호치민 채식 메뉴",
      "호치민 채식 가능 식당",
      "호치민 1군 채식",
      "호치민 vegetarian options",
      "vegetarian Korean food District 1",
      "호치민 맵지 않은 메뉴",
      "호치민 중식당 채식 문의",
      "채식 메뉴"
    ],
    intro:
      "호치민 1군에서 매운 음식이 부담스럽거나 채식 메뉴를 찾는 손님도 도야짬뽕에서 비교적 가볍게 고를 수 있는 선택지가 있습니다. 짜장면처럼 맵지 않은 메뉴를 중심으로 보고, 고기나 해산물 제외 같은 재료 조정이 필요하면 주문 전에 편하게 문의하면 됩니다.",
    sections: [
      {
        heading: "채식 손님도 먼저 볼 만한 메뉴",
        body:
          "매운 국물이 부담스럽다면 짜장면, 볶음밥류, 사이드 메뉴처럼 비교적 편하게 고를 수 있는 메뉴부터 확인해보면 좋습니다. 채식 기준이 엄격한 경우에는 소스와 육수, 고기, 해산물 포함 여부를 주문 전에 확인하면 더 안전합니다."
      },
      {
        heading: "vegetarian options를 찾는 관광객에게도 유용",
        body:
          "관광객은 vegetarian options Ho Chi Minh, vegetarian Korean food District 1, non spicy Korean food 같은 키워드로 식당을 찾습니다. 도야짬뽕은 이런 손님이 메뉴를 보고 재료 조정 가능 여부를 바로 문의할 수 있게 Zalo, 카카오톡, 전화 연결을 준비해두었습니다."
      },
      {
        heading: "이렇게 문의하면 빠릅니다",
        body:
          "'고기 없이 가능한 메뉴가 있나요?', '해산물 제외 가능한가요?', '채식으로 먹기 좋은 메뉴가 있나요?', '맵지 않게 가능한 메뉴가 있나요?'처럼 원하는 기준을 짧게 보내면 확인이 빠릅니다."
      }
    ],
    cta: "채식 메뉴나 재료 조정이 필요하면 방문 전 Zalo, 카카오톡, 전화로 편하게 문의하세요."
  },
  {
    locale: "vi",
    slug: "mon-chay-quan-1-hoi-truoc-khi-dat",
    title: "Món chay Quận 1: lựa chọn nhẹ nhàng và vegetarian options tại DOYA",
    description:
      "Khách tìm món chay Quận 1, vegetarian options hoặc món không cay có thể xem menu DOYA và hỏi thêm về thành phần, nước sốt hoặc cách điều chỉnh món.",
    eyebrow: "Món chay / Vegetarian options",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "Món chay Quận 1 và vegetarian options tại nhà hàng Hàn-Trung",
    keywords: [
      "món chay Quận 1",
      "món chay Hàn Quốc",
      "vegetarian options Ho Chi Minh",
      "vegetarian food District 1",
      "món không cay Quận 1",
      "nhà hàng Hàn Quốc có món chay",
      "hỏi món chay qua Zalo"
    ],
    intro:
      "Nếu bạn muốn ăn nhẹ hơn, không quá cay hoặc cần lựa chọn gần với món chay, DOYA có một số món dễ hỏi và dễ điều chỉnh hơn. Khách có thể xem menu trước, sau đó nhắn Zalo hoặc gọi điện để hỏi rõ thành phần.",
    sections: [
      {
        heading: "Có lựa chọn cho khách muốn món nhẹ hơn",
        body:
          "Những món không quá cay, món mì tương đen Hàn Quốc (mi tuong den, jajangmyeon), cơm hoặc món phụ có thể là lựa chọn dễ bắt đầu. Nếu bạn không ăn thịt, không ăn hải sản hoặc cần kiểm tra nước sốt, hãy hỏi trước để nhân viên xác nhận."
      },
      {
        heading: "Khách du lịch thường tìm vegetarian options",
        body:
          "Các tìm kiếm như món chay Quận 1, vegetarian options Ho Chi Minh, vegetarian food District 1 và món không cay Quận 1 thường đến từ khách muốn ăn món Hàn nhưng cần lựa chọn nhẹ hơn."
      },
      {
        heading: "Cách hỏi nhanh qua Zalo",
        body:
          "Bạn có thể nhắn: không thịt, không hải sản, không trứng, không cay hoặc cần kiểm tra nước sốt. Nếu đã chọn món trên menu, gửi tên món kèm yêu cầu sẽ dễ xác nhận hơn."
      }
    ],
    cta: "Bấm Zalo hoặc gọi điện để hỏi món phù hợp trước khi đặt bàn hoặc đặt món."
  },
  {
    locale: "en",
    slug: "vegetarian-options-district-1-ho-chi-minh",
    title: "Vegetarian Options in District 1: Easy Choices at a Korean-Chinese Restaurant",
    description:
      "A natural guide for guests searching vegetarian options in District 1, non-spicy Korean food, and lighter Korean-Chinese menu choices at DOYA JJAMBBONG.",
    eyebrow: "Vegetarian Options",
    date: sharedDate,
    readTime: "3 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "Vegetarian options and ingredient questions in District 1 Korean-Chinese restaurant",
    keywords: [
      "vegetarian options Ho Chi Minh",
      "vegetarian options District 1",
      "vegetarian Korean food District 1",
      "non spicy Korean food Ho Chi Minh",
      "Korean restaurant vegetarian options",
      "Chinese restaurant vegetarian options District 1",
      "vegetarian food near Bui Vien"
    ],
    intro:
      "If you are looking for vegetarian options, non-spicy Korean food, or lighter Korean-Chinese dishes in District 1, DOYA has menu choices worth checking first. Guests with specific ingredient restrictions can message ahead so the team can confirm what works.",
    sections: [
      {
        heading: "Vegetarian-friendly choices to ask about",
        body:
          "Start with non-spicy or simpler dishes such as black bean noodles, rice dishes, or side dishes, then ask whether meat, seafood, egg, or sauce ingredients can be adjusted for your needs."
      },
      {
        heading: "Useful for vegetarian options searches",
        body:
          "Guests often search vegetarian options Ho Chi Minh, vegetarian food District 1, non-spicy Korean food, and Korean restaurant vegetarian options near Bui Vien. This page helps connect those searches to practical menu questions."
      },
      {
        heading: "What to send before ordering",
        body:
          "Send a short note like no meat, no seafood, vegan, no egg, not spicy, or please check the sauce. If you already picked a menu item, include the dish name so the team can answer faster."
      }
    ],
    cta: "Use Zalo, KakaoTalk, or phone before visiting if you want to confirm vegetarian options or ingredient adjustments."
  },
  {
    locale: "vi",
    slug: "mi-tuong-den-la-gi",
    title: "Mì tương đen là gì? Món jajangmyeon Hàn Quốc dễ ăn cho người Việt",
    description:
      "Giải thích mì tương đen, mi tuong den và jajangmyeon Hàn Quốc: món mì sốt đậu đen không cay, dễ ăn tại DOYA JJAMBBONG Quận 1.",
    eyebrow: "Mì tương đen guide",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "Mì tương đen Hàn Quốc jajangmyeon tại DOYA JJAMBBONG Quận 1 gần Bến Thành",
    keywords: [
      "mì tương đen là gì",
      "mi tuong den",
      "mì tương đen Hàn Quốc",
      "jajangmyeon",
      "Korean black bean noodles",
      "món Hàn không cay Quận 1"
    ],
    intro:
      "Mì tương đen là cách nhiều khách Việt gọi món jajangmyeon, một món mì sốt đậu đen kiểu Hàn Quốc. Khác với jjambbong cay, món này có vị đậm, béo nhẹ, không cay và dễ ăn cho cả khách Việt lẫn khách du lịch.",
    sections: [
      {
        heading: "Mì tương đen và jajangmyeon là cùng một món",
        body:
          "Jajangmyeon là tên tiếng Hàn, còn mì tương đen hoặc mi tuong den là cách gọi quen thuộc khi khách Việt tìm món mì sốt đậu đen. Trên thực đơn DOYA, món này được giữ cả hai cách gọi để khách tìm đúng món nhanh hơn."
      },
      {
        heading: "Món Hàn-Trung không cay, dễ bắt đầu",
        body:
          "Nhiều món Hàn Quốc nổi tiếng có vị cay, nhưng mì tương đen lại dễ ăn hơn. Đây là lựa chọn tốt cho trẻ em, khách không ăn cay, gia đình hoặc nhóm có người muốn món nhẹ hơn champong."
      },
      {
        heading: "Ăn mì tương đen tại DOYA JJAMBBONG",
        body:
          `DOYA JJAMBBONG nằm tại ${site.address}. Nếu bạn tìm mì tương đen Hàn Quốc, mi tuong den hoặc jajangmyeon tại Quận 1, có thể xem món này trên menu rồi đặt bàn, mua mang đi hoặc hỏi giao hàng qua Zalo.`
      }
    ],
    cta: "Xem món mì tương đen trên menu DOYA, hoặc nhắn Zalo để hỏi đặt bàn, takeaway và giao hàng tại Quận 1."
  },
  {
    locale: "vi",
    slug: "mi-tuong-den-quan-1",
    title: "Ăn mì tương đen Hàn Quốc ở đâu tại Quận 1, TP. Hồ Chí Minh?",
    description:
      "Gợi ý ăn mì tương đen Hàn Quốc, mi tuong den và jajangmyeon tại Quận 1 gần Bến Thành, Bùi Viện và khách sạn trung tâm.",
    eyebrow: "Quận 1 food guide",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "Mì tương đen Hàn Quốc tại Quận 1 gần Bến Thành và Bùi Viện",
    keywords: [
      "mì tương đen Quận 1",
      "mi tuong den quan 1",
      "mì tương đen Hàn Quốc Quận 1",
      "jajangmyeon Ho Chi Minh",
      "Korean black bean noodles District 1",
      "món Hàn gần Bến Thành"
    ],
    intro:
      "Khi tìm mì tương đen Quận 1, nhiều người cần một địa chỉ dễ đi, có hình món rõ ràng và đặt món nhanh. DOYA JJAMBBONG nằm ở Bùi Thị Xuân, gần Bến Thành, Bùi Viện và nhiều khách sạn trung tâm.",
    sections: [
      {
        heading: "Vì sao vị trí Quận 1 quan trọng?",
        body:
          "Khách du lịch, nhân viên văn phòng và người Hàn ở trung tâm thường tìm món ăn gần khách sạn, gần Bến Thành hoặc gần khu đi chơi buổi tối. Địa chỉ 77I Bùi Thị Xuân giúp việc ghé ăn, mua mang đi hoặc gọi xe đến quán dễ hơn."
      },
      {
        heading: "Mì tương đen phù hợp cho khách Việt và khách du lịch",
        body:
          "Món này không cay, vị sốt đậu đen đậm và dễ hiểu hơn với người lần đầu ăn món Hàn-Trung. Nếu nhóm có người muốn ăn cay, có thể gọi thêm jjambbong hoặc tteokbokki."
      },
      {
        heading: "Đặt bàn, takeaway và giao hàng",
        body:
          "Bạn có thể xem menu trước, gọi điện, nhắn Zalo hoặc KakaoTalk để hỏi đặt bàn và giao hàng. Khi nhắn, chỉ cần ghi mì tương đen, mi tuong den hoặc jajangmyeon, nhân viên sẽ hiểu đúng món."
      }
    ],
    cta: "Nếu bạn đang ở gần Bến Thành, Bùi Viện hoặc khách sạn Quận 1, hãy mở Google Maps để đến DOYA hoặc nhắn Zalo hỏi món trước."
  },
  {
    locale: "vi",
    slug: "jajangmyeon-mi-tuong-den-tangsuyuk",
    title: "Mì tương đen ăn với gì? Gợi ý jajangmyeon, tangsuyuk và mandu",
    description:
      "Gợi ý combo mì tương đen Hàn Quốc với tangsuyuk, mandu và jjambbong tại DOYA JJAMBBONG Quận 1 cho nhóm, gia đình và khách du lịch.",
    eyebrow: "Combo gợi ý",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-tangsuyuk.jpg",
    imageAlt: "Tangsuyuk ăn cùng mì tương đen jajangmyeon tại DOYA JJAMBBONG Quận 1",
    keywords: [
      "mì tương đen ăn với gì",
      "jajangmyeon tangsuyuk",
      "mi tuong den tangsuyuk",
      "mì tương đen mandu",
      "Korean black bean noodles combo",
      "món Hàn-Trung Quận 1"
    ],
    intro:
      "Mì tương đen ngon nhất khi gọi cùng một món có độ giòn hoặc một món cay để cân bằng vị. Tại DOYA JJAMBBONG, khách thường chọn mì tương đen với tangsuyuk, mandu hoặc jjambbong.",
    sections: [
      {
        heading: "Mì tương đen + tangsuyuk",
        body:
          "Tangsuyuk là thịt heo chiên sốt chua ngọt kiểu Hàn. Vị giòn và sốt nhẹ giúp món mì tương đen đậm vị dễ ăn hơn, đặc biệt khi đi nhóm hoặc gia đình."
      },
      {
        heading: "Mì tương đen + mandu",
        body:
          "Mandu luộc hoặc mandu chiên là món phụ dễ gọi nếu bạn muốn bữa ăn vừa đủ, không quá nặng. Đây cũng là lựa chọn hợp với trẻ em hoặc khách không ăn cay."
      },
      {
        heading: "Mì tương đen + jjambbong",
        body:
          "Nếu một người muốn món không cay và một người muốn món cay nóng, hãy gọi mì tương đen cùng jjambbong. Đây là cách gọi rất quen thuộc trong món Hàn-Trung."
      }
    ],
    cta: "Xem menu DOYA để chọn mì tương đen, tangsuyuk, mandu hoặc jjambbong rồi đặt bàn/giao hàng qua Zalo, KakaoTalk hoặc điện thoại."
  },
  {
    locale: "ko",
    slug: "mi-tuong-den-jajangmyeon-ho-chi-minh",
    title: "mi tuong den으로 찾는 호치민 짜장면 | 도야짬뽕 1군",
    description:
      "베트남에서 mi tuong den, mì tương đen, jajangmyeon으로 검색하는 한국식 짜장면을 호치민 1군 도야짬뽕에서 찾는 방법.",
    eyebrow: "짜장면 SEO 가이드",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "호치민 1군 도야짬뽕의 mi tuong den 한국식 짜장면 jajangmyeon",
    keywords: [
      "mi tuong den",
      "mì tương đen",
      "호치민 짜장면",
      "호치민 1군 짜장면",
      "jajangmyeon Ho Chi Minh",
      "Korean black bean noodles"
    ],
    intro:
      "베트남에서는 짜장면을 찾을 때 jajangmyeon뿐 아니라 mi tuong den 또는 mì tương đen으로 검색하는 경우가 많습니다. 도야짬뽕은 호치민 1군 77I Bùi Thị Xuân에서 한국식 짜장면, 짬뽕, 탕수육을 함께 먹을 수 있는 한국식 중식당입니다.",
    sections: [
      {
        heading: "mi tuong den은 짜장면을 찾는 베트남식 검색어",
        body:
          "mi tuong den은 베트남어 입력에서 성조 없이 쓰는 표현이고, mì tương đen은 성조가 포함된 표현입니다. 둘 다 한국식 짜장면 또는 jajangmyeon을 찾을 때 쓰입니다."
      },
      {
        heading: "호치민 1군에서 찾기 쉬운 위치",
        body:
          "도야짬뽕은 Bến Thành, Bùi Viện, 호텔 밀집 지역에서 이동하기 쉬운 1군 중심 매장입니다. 관광객, 교민, 현지 손님 모두 메뉴를 보고 예약, 포장, 배달 문의를 할 수 있습니다."
      },
      {
        heading: "짜장면과 함께 주문하기 좋은 메뉴",
        body:
          "짜장면은 탕수육, 군만두, 짬뽕과 함께 주문하면 가장 이해하기 쉬운 한국식 중식 조합이 됩니다. 맵지 않은 메뉴가 필요할 때도 mi tuong den은 좋은 선택입니다."
      }
    ],
    cta: "도야짬뽕 메뉴에서 짜장면, 탕수육, 군만두 조합을 확인하고 카카오톡, Zalo, 전화로 예약/배달 문의하세요."
  },
  {
    locale: "ko",
    slug: "mi-tuong-den-quan-1-korean-black-bean-noodles",
    title: "호치민 1군 mi tuong den 맛집 찾을 때 보는 짜장면 가이드",
    description:
      "mi tuong den quan 1, mì tương đen Hàn Quốc, 호치민 짜장면 검색에 맞춘 도야짬뽕 1군 짜장면 위치와 메뉴 조합 안내.",
    eyebrow: "호치민 1군 짜장면",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "호치민 1군 Bến Thành 근처 mi tuong den 한국식 짜장면",
    keywords: [
      "mi tuong den quan 1",
      "mì tương đen Quận 1",
      "mì tương đen Hàn Quốc",
      "호치민 1군 짜장면",
      "Bến Thành 짜장면",
      "Bùi Viện Korean Chinese food"
    ],
    intro:
      "호치민 1군에서 mi tuong den quan 1 또는 mì tương đen Hàn Quốc을 검색하는 손님은 맵지 않고 든든한 한국식 짜장면을 찾는 경우가 많습니다. 도야짬뽕은 짬뽕 전문 이미지와 함께 짜장면, 탕수육, 만두 메뉴까지 한 번에 고를 수 있게 구성했습니다.",
    sections: [
      {
        heading: "베트남 손님에게 쉬운 한국식 중식 메뉴",
        body:
          "짬뽕은 매운 국물 메뉴라 취향을 타지만 짜장면은 달고 짭짤한 검은 소스라 현지 손님과 관광객이 이해하기 쉽습니다."
      },
      {
        heading: "Bến Thành과 Bùi Viện 근처 검색 의도",
        body:
          "관광객은 보통 식당 이름보다 근처 지명과 음식명을 같이 검색합니다. 그래서 mi tuong den quan 1, jajangmyeon Ho Chi Minh, Korean black bean noodles 같은 키워드를 페이지 안에서 자연스럽게 연결했습니다."
      },
      {
        heading: "도야짬뽕에서 추천하는 주문 흐름",
        body:
          "처음 방문한다면 짜장면 하나, 짬뽕 하나, 탕수육 또는 군만두를 함께 주문하는 방식이 가장 실패 확률이 낮습니다."
      }
    ],
    cta: "호치민 1군에서 짜장면을 찾는다면 메뉴 페이지에서 가격과 사진을 확인한 뒤 길찾기 또는 예약/배달 버튼을 이용하세요."
  },
  {
    locale: "ko",
    slug: "jajangmyeon-tangsuyuk-mandu-combo",
    title: "짜장면은 뭐랑 먹어야 할까? 탕수육, 군만두, 짬뽕 조합",
    description:
      "호치민 도야짬뽕에서 mi tuong den 짜장면을 탕수육, 군만두, 짬뽕과 함께 주문하는 추천 조합.",
    eyebrow: "추천 조합",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-tangsuyuk.jpg",
    imageAlt: "짜장면과 함께 먹기 좋은 도야짬뽕 탕수육",
    keywords: [
      "짜장면 탕수육 조합",
      "jajangmyeon tangsuyuk",
      "mi tuong den tangsuyuk",
      "호치민 탕수육",
      "호치민 군만두",
      "Korean Chinese combo Ho Chi Minh"
    ],
    intro:
      "짜장면은 단독으로도 좋지만 탕수육, 군만두, 짬뽕과 함께 주문할 때 한국식 중식의 매력이 더 잘 살아납니다. 특히 mi tuong den을 검색하고 들어온 베트남 손님에게도 이 조합은 이해하기 쉽습니다.",
    sections: [
      {
        heading: "짜장면 + 탕수육",
        body:
          "검은 소스의 짜장면과 바삭한 탕수육은 가장 익숙한 조합입니다. 가족, 친구, 단체 손님에게 객단가를 올리기 좋은 메뉴 구성입니다."
      },
      {
        heading: "짜장면 + 군만두",
        body:
          "간단하게 추가하기 좋은 사이드가 필요하면 군만두가 좋습니다. 면 메뉴와 같이 먹기 쉽고 사진으로도 직관적입니다."
      },
      {
        heading: "짜장면 + 짬뽕",
        body:
          "한 명은 맵지 않은 메뉴, 한 명은 매운 국물을 원할 때 짜장면과 짬뽕 조합이 가장 안정적입니다."
      }
    ],
    cta: "도야짬뽕 메뉴에서 짜장면, 탕수육, 군만두, 짬뽕 사진을 보고 원하는 조합으로 예약/배달 문의하세요."
  },
  {
    locale: "en",
    slug: "mi-tuong-den-jajangmyeon-ho-chi-minh",
    title: "Mi Tuong Den in Ho Chi Minh | Korean Jajangmyeon at DOYA",
    description:
      "Find mi tuong den, mì tương đen, jajangmyeon, and Korean black bean noodles at DOYA JJAMBBONG in District 1 near Ben Thanh and Bui Vien.",
    eyebrow: "Korean black bean noodles",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "Mi tuong den Korean jajangmyeon at DOYA JJAMBBONG District 1 Ho Chi Minh",
    keywords: [
      "mi tuong den",
      "mì tương đen",
      "jajangmyeon Ho Chi Minh",
      "Korean black bean noodles",
      "Korean black bean noodles District 1",
      "jajangmyeon near Ben Thanh"
    ],
    intro:
      "Mi tuong den is one of the ways Vietnamese guests search for Korean jajangmyeon, or Korean black bean noodles. At DOYA JJAMBBONG in District 1, guests can order jajangmyeon together with jjambbong, tangsuyuk, mandu, and other Korean-Chinese comfort dishes.",
    sections: [
      {
        heading: "Mi tuong den means Korean black bean noodles",
        body:
          "The phrase mi tuong den is a simplified Vietnamese search term for mì tương đen. It points to the same dish many Korean food fans know as jajangmyeon."
      },
      {
        heading: "Easy location in District 1",
        body:
          "DOYA is located at 77I Bui Thi Xuan, close to Ben Thanh, Bui Vien, central hotels, and nightlife areas. That makes it practical for tourists, Korean residents, and local guests."
      },
      {
        heading: "Non-spicy choice for Korean-Chinese food",
        body:
          "Unlike spicy jjambbong or champong, jajangmyeon is not spicy. It is a good first choice for guests who want Korean flavor without a hot soup."
      }
    ],
    cta: "Check the DOYA menu for jajangmyeon, tangsuyuk, mandu, and jjambbong, then use Maps, Zalo, KakaoTalk, or phone ordering."
  },
  {
    locale: "en",
    slug: "korean-black-bean-noodles-district-1",
    title: "Korean Black Bean Noodles in District 1 | Jajangmyeon Near Ben Thanh",
    description:
      "A District 1 guide for Korean black bean noodles, mi tuong den, and jajangmyeon near Ben Thanh, Bui Vien, and central Ho Chi Minh hotels.",
    eyebrow: "District 1 food guide",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "Korean black bean noodles jajangmyeon near Ben Thanh and Bui Vien",
    keywords: [
      "Korean black bean noodles District 1",
      "jajangmyeon near Ben Thanh",
      "mi tuong den quan 1",
      "mì tương đen Quận 1",
      "Korean Chinese restaurant Ho Chi Minh",
      "Bui Vien Korean food"
    ],
    intro:
      "Travelers usually search by food plus location: Korean black bean noodles District 1, jajangmyeon near Ben Thanh, or mi tuong den quan 1. DOYA JJAMBBONG connects those searches to a real Korean-Chinese restaurant in central Ho Chi Minh City.",
    sections: [
      {
        heading: "Why District 1 matters",
        body:
          "District 1 is where many tourists, office workers, and Korean visitors stay. A restaurant near Ben Thanh and Bui Vien is easier to choose when guests want quick directions, menu photos, and ordering options."
      },
      {
        heading: "What to order with jajangmyeon",
        body:
          "Tangsuyuk, fried mandu, and jjambbong are natural pairings. They help groups mix non-spicy noodles, crispy sides, and spicy seafood soup."
      },
      {
        heading: "For tourists and local guests",
        body:
          "The dish is familiar enough for Korean diners and easy enough for first-time guests trying Korean-Chinese food in Saigon."
      }
    ],
    cta: "Open the menu, check the address, or contact DOYA for reservation, takeaway, and delivery in District 1."
  },
  {
    locale: "en",
    slug: "jajangmyeon-tangsuyuk-mandu-combo",
    title: "What to Eat with Jajangmyeon: Tangsuyuk, Mandu, and Jjambbong",
    description:
      "Best Korean-Chinese menu pairings for jajangmyeon and mi tuong den at DOYA JJAMBBONG in Ho Chi Minh: tangsuyuk, mandu, and jjambbong.",
    eyebrow: "Menu pairings",
    date: sharedDate,
    readTime: "4 min",
    image: "/images/menu/doya-tangsuyuk.jpg",
    imageAlt: "Tangsuyuk served with jajangmyeon and Korean black bean noodles at DOYA",
    keywords: [
      "jajangmyeon tangsuyuk",
      "mi tuong den tangsuyuk",
      "Korean sweet and sour pork Ho Chi Minh",
      "fried mandu District 1",
      "jjambbong and jajangmyeon",
      "Korean Chinese food combo"
    ],
    intro:
      "Jajangmyeon, also searched as mi tuong den or Korean black bean noodles, works best when paired with a crispy or spicy side. At DOYA JJAMBBONG, the most useful combinations are jajangmyeon with tangsuyuk, mandu, or jjambbong.",
    sections: [
      {
        heading: "Jajangmyeon + tangsuyuk",
        body:
          "Sweet and sour pork adds crunch and a bright sauce to the rich black bean noodles. It is the easiest pairing for groups."
      },
      {
        heading: "Jajangmyeon + mandu",
        body:
          "Fried mandu or boiled mandu is lighter than a large sharing dish and easy to add to a noodle order."
      },
      {
        heading: "Jajangmyeon + jjambbong",
        body:
          "This is the classic balance: one non-spicy black bean noodle dish and one spicy seafood noodle soup."
      }
    ],
    cta: "Use the menu page to choose jajangmyeon, tangsuyuk, mandu, and jjambbong before visiting or ordering."
  },
  {
    locale: "zh",
    slug: "hu-zhi-ming-han-guo-can-ting-di-1-qu",
    title: "胡志明市韩国餐厅第1郡 | DOYA JJAMBBONG 靠近滨城市场和裴援街",
    description:
      "寻找胡志明韩国餐厅、第1郡韩国料理、滨城市场韩国餐厅或裴援街韩国餐厅? DOYA JJAMBBONG 提供韩式辣海鲜面、炸酱面和糖醋肉.",
    eyebrow: "胡志明韩国餐厅",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-menu-spread.jpg",
    imageAlt: "胡志明市第1郡 DOYA JJAMBBONG 韩国餐厅菜单",
    keywords: [
      "胡志明市韩国餐厅",
      "胡志明韩国餐厅",
      "第1郡韩国餐厅",
      "胡志明市韩国料理",
      "滨城市场韩国餐厅",
      "裴援街韩国餐厅",
      "Bui Vien Korean restaurant",
      "Ben Thanh Korean food"
    ],
    intro:
      `DOYA JJAMBBONG 位于 ${site.address}. 如果你在胡志明市第1郡寻找韩国餐厅、韩式中餐、辣海鲜面或韩式炸酱面, 这里的位置对游客和住在市中心的客人都很方便.`,
    sections: [
      {
        heading: "为什么适合搜索胡志明韩国餐厅的客人",
        body:
          "很多中国客人会用胡志明韩国餐厅、胡志明市韩国料理、第1郡韩国餐厅来搜索. DOYA 页面把位置、菜单、Google Maps、预订和外卖入口放在一起, 方便快速决定是否到店."
      },
      {
        heading: "靠近滨城市场、裴援街和市中心酒店",
        body:
          "77I Bui Thi Xuan 距离 Ben Thanh、Bui Vien 和第1郡酒店区都比较方便. 对旅行者来说, 吃完饭继续去市中心、夜生活区域或回酒店都容易安排."
      },
      {
        heading: "第一次来可以这样点",
        body:
          "如果想吃辣, 可以点 DOYA jjambbong 或海鲜 champong. 如果不想吃辣, 可以点韩式炸酱面. 多人用餐时, 糖醋肉、煎饺和辣蒜炸鸡都适合分享."
      }
    ],
    cta: "打开菜单页面查看图片, 或用 Google Maps、Zalo、KakaoTalk、电话联系 DOYA 预订和点餐."
  },
  {
    locale: "zh",
    slug: "hu-zhi-ming-champong-la-hai-xian-mian",
    title: "胡志明 Champong 辣海鲜面 | 韩式 Jjambbong 在第1郡",
    description:
      "胡志明市第1郡 champong、jjambbong、jjamppong、韩式辣海鲜面搜索指南. DOYA JJAMBBONG 靠近 Ben Thanh 和 Bui Vien.",
    eyebrow: "Champong 辣海鲜面",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-seafood-jjambbong.jpg",
    imageAlt: "胡志明第1郡韩式 champong 辣海鲜面",
    keywords: [
      "胡志明 Champong",
      "胡志明辣海鲜面",
      "胡志明韩式海鲜面",
      "胡志明韩国辣海鲜面",
      "Jjambbong Ho Chi Minh",
      "Champong District 1",
      "韩国海鲜面胡志明",
      "韩式辣汤面胡志明"
    ],
    intro:
      "Champong、jjamppong 和 jjambbong 都常被用来搜索韩式辣海鲜汤面. DOYA JJAMBBONG 在胡志明市第1郡提供红汤海鲜面, 适合想吃热汤、辣味和韩式中餐的客人.",
    sections: [
      {
        heading: "Champong 和 jjambbong 是什么关系?",
        body:
          "不同客人会用不同拼写搜索同一道菜. Champong、jjamppong、jjambbong 通常都指韩国中餐里的辣海鲜汤面. DOYA 页面保留这些关键词, 让中国客人更容易找到."
      },
      {
        heading: "适合什么时候吃?",
        body:
          "辣海鲜面适合午餐、晚餐、夜宵, 也适合喝酒后想吃热汤的时候. 如果同行有人不吃辣, 可以搭配韩式炸酱面或糖醋肉."
      },
      {
        heading: "第1郡位置优势",
        body:
          "DOYA 位于 Bui Thi Xuan, 靠近 Ben Thanh、Bui Vien 和酒店区. 搜索胡志明辣海鲜面或第1郡韩国餐厅时, 位置和菜单都很直接."
      }
    ],
    cta: "查看 champong 页面和菜单详情, 选择 DOYA 海鲜 jjambbong、经典 jjambbong 或白汤海鲜面."
  },
  {
    locale: "zh",
    slug: "hu-zhi-ming-han-shi-zha-jiang-mian",
    title: "胡志明韩式炸酱面 | Jajangmyeon 与 Mi Tuong Den 第1郡指南",
    description:
      "在胡志明第1郡寻找韩式炸酱面、jajangmyeon、mi tuong den 或 Korean black bean noodles? DOYA JJAMBBONG 提供不辣的黑豆酱面.",
    eyebrow: "韩式炸酱面",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "胡志明第1郡 DOYA 韩式炸酱面 jajangmyeon",
    keywords: [
      "胡志明韩式炸酱面",
      "胡志明韩国炸酱面",
      "韩国炸酱面第一郡",
      "韩式黑酱面胡志明",
      "Jajangmyeon 胡志明",
      "Mi tuong den 韩式",
      "Korean black bean noodles District 1"
    ],
    intro:
      "韩式炸酱面是很多客人不想吃辣时会选择的韩国中餐. 在越南, 这道菜也可能被搜索为 mi tuong den 或 mì tương đen. DOYA 把这些搜索词连接到同一份菜单.",
    sections: [
      {
        heading: "韩式炸酱面不辣, 容易入口",
        body:
          "和辣海鲜面不同, jajangmyeon 是黑豆酱风味, 不辣, 适合家庭、儿童、不吃辣的客人, 也适合和朋友一起分享不同口味."
      },
      {
        heading: "为什么要保留 mi tuong den 关键词?",
        body:
          "很多在越南生活或旅行的客人会用 mi tuong den 搜索黑酱面. 对中国客人来说, 看到 jajangmyeon、韩式炸酱面和 mi tuong den 放在一起, 更容易确认是同一道菜."
      },
      {
        heading: "推荐搭配",
        body:
          "韩式炸酱面适合搭配糖醋肉、煎饺或一碗辣 champong. 一份不辣、一份辛辣, 是韩国中餐很经典的组合."
      }
    ],
    cta: "打开韩式炸酱面页面或菜单详情, 查看价格、图片和预订/外卖联系方式."
  },
  {
    locale: "zh",
    slug: "ben-thanh-bui-vien-han-guo-ye-xiao",
    title: "滨城市场和裴援街附近韩国夜宵 | 胡志明第1郡 DOYA",
    description:
      "在 Ben Thanh、Bui Vien、胡志明第1郡附近寻找韩国夜宵、辣海鲜面、韩式中餐或饮酒后热汤? DOYA JJAMBBONG 营业到 23:30.",
    eyebrow: "第1郡韩国夜宵",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-seafood-jjambbong-soup.jpg",
    imageAlt: "滨城市场和裴援街附近韩国夜宵 DOYA jjambbong 汤",
    keywords: [
      "胡志明夜宵韩国餐厅",
      "滨城市场韩国夜宵",
      "裴援街韩国餐厅",
      "Bui Vien Korean food",
      "Ben Thanh Korean restaurant",
      "胡志明醒酒汤面",
      "胡志明辣海鲜面夜宵"
    ],
    intro:
      "旅行中晚上想吃热汤、辣面或韩国中餐时, 位置和营业时间很重要. DOYA JJAMBBONG 位于第1郡中心区域, 每天营业到 23:30, 适合晚餐、夜宵和饮酒后热汤.",
    sections: [
      {
        heading: "靠近游客常去区域",
        body:
          "Ben Thanh、Bui Vien、Pham Ngu Lao 和第1郡酒店区附近的客人, 可以用 Google Maps 很快确认路线. 页面也保留中文关键词, 方便从搜索直接进入."
      },
      {
        heading: "夜宵推荐菜单",
        body:
          "想吃热汤可以点 jjambbong 或海鲜 jjambbong 汤. 想要不辣可以点韩式炸酱面. 多人一起吃, 糖醋肉、煎饺和辣蒜炸鸡都适合分享."
      },
      {
        heading: "预订和外卖",
        body:
          "如果时间较晚, 建议先通过 Zalo、KakaoTalk 或电话确认座位和菜单. 页面上的按钮可以直接联系店铺."
      }
    ],
    cta: "在出发前打开位置页面, 用 Google Maps 确认 77I Bui Thi Xuan 的路线."
  },
  {
    locale: "ja",
    slug: "ho-chi-minh-kankoku-ryori-district-1",
    title: "ホーチミン1区の韓国料理 | ベンタイン市場・ブイビエン近くの DOYA",
    description:
      "ホーチミン 韓国料理、ホーチミン 韓国料理 1区、ベンタイン市場 韓国料理、ブイビエン 韓国料理を探す日本人旅行者向けの DOYA JJAMBBONG ガイド.",
    eyebrow: "ホーチミン 韓国料理",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-menu-spread.jpg",
    imageAlt: "ホーチミン1区 DOYA JJAMBBONG 韓国料理メニュー",
    keywords: [
      "ホーチミン 韓国料理",
      "ホーチミン 韓国料理 1区",
      "ホーチミン 韓国中華",
      "ベンタイン市場 韓国料理",
      "ブイビエン 韓国料理",
      "ホーチミン 韓国料理 おすすめ",
      "Korean restaurant District 1"
    ],
    intro:
      `DOYA JJAMBBONG は ${site.address} にある韓国中華レストランです。ホーチミン1区で韓国料理、チャンポン、ジャージャー麺、タンスユクを探す日本人旅行者にも分かりやすい場所です。`,
    sections: [
      {
        heading: "1区で韓国料理を探す時に便利",
        body:
          "ホーチミン 韓国料理、韓国料理 1区、ベンタイン市場 韓国料理のように検索する方は、場所、メニュー写真、営業時間、Google Maps がすぐ見られるページが必要です。DOYA はその情報をまとめています。"
      },
      {
        heading: "ベンタイン市場とブイビエンから行きやすい",
        body:
          "77I Bui Thi Xuan は中心部にあり、ホテル、観光エリア、夜の外出の前後にも寄りやすい立地です。タクシーや Grab でも説明しやすい住所です。"
      },
      {
        heading: "初めてならこの組み合わせ",
        body:
          "辛い料理が好きならチャンポン、辛くない料理ならジャージャー麺。グループならタンスユクや焼き餃子を追加すると韓国中華らしい食事になります。"
      }
    ],
    cta: "メニュー写真を見て、Google Maps、Zalo、KakaoTalk、電話から予約や注文を確認できます。"
  },
  {
    locale: "ja",
    slug: "ho-chi-minh-champong-korean-seafood-noodles",
    title: "ホーチミン チャンポン | 韓国式海鮮ラーメン Jjambbong",
    description:
      "ホーチミンでチャンポン、韓国チャンポン、韓国式海鮮ラーメン、jjambbong、champong を探す方向けの DOYA JJAMBBONG 第1郡ガイド.",
    eyebrow: "ホーチミン チャンポン",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-seafood-jjambbong.jpg",
    imageAlt: "ホーチミン1区の韓国式チャンポン DOYA jjambbong",
    keywords: [
      "ホーチミン チャンポン",
      "韓国チャンポン ホーチミン",
      "辛いチャンポン ホーチミン",
      "韓国式海鮮ラーメン ホーチミン",
      "Jjambbong Ho Chi Minh",
      "Champong Ho Chi Minh",
      "辛い海鮮麺 ホーチミン"
    ],
    intro:
      "日本語ではチャンポン、英語では champong、jjamppong、jjambbong と検索されることがあります。DOYA JJAMBBONG はホーチミン1区で韓国式の辛い海鮮麺を提供しています.",
    sections: [
      {
        heading: "チャンポンは韓国中華の辛い海鮮麺",
        body:
          "DOYA のチャンポンは、赤い辛口スープ、海鮮、野菜、韓国中華の香りを合わせた一杯です。日本の長崎ちゃんぽんとは違い、韓国式の辛いスープ麺です。"
      },
      {
        heading: "検索表記をまとめて拾う",
        body:
          "ホーチミン チャンポン、韓国式海鮮ラーメン、jjambbong、champong は、旅行者が同じ料理を探す時に使う表記です。ページ内で自然に接続しています。"
      },
      {
        heading: "辛さが不安な時",
        body:
          "辛い料理が苦手な方は、ジャージャー麺やタンスユクと組み合わせると食べやすくなります。グループなら辛い麺と辛くない麺を一緒に注文できます。"
      }
    ],
    cta: "チャンポンの詳細ページで写真、メニュー、場所を確認してから来店できます。"
  },
  {
    locale: "ja",
    slug: "ho-chi-minh-jajangmyeon-korean-black-bean-noodles",
    title: "ホーチミン ジャージャー麺 | 韓国式 Jajangmyeon と Mi Tuong Den",
    description:
      "ホーチミンで韓国式ジャージャー麺、Jajangmyeon、Korean black bean noodles、mi tuong den を探す方へ。DOYA は第1郡にあります.",
    eyebrow: "韓国式ジャージャー麺",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-jajangmyeon.jpg",
    imageAlt: "ホーチミン第1郡 DOYA 韓国式ジャージャー麺 jajangmyeon",
    keywords: [
      "ホーチミン ジャージャー麺",
      "韓国ジャージャー麺 ホーチミン",
      "韓国式ジャージャー麺 ホーチミン",
      "Jajangmyeon Ho Chi Minh",
      "Korean black bean noodles",
      "Mi tuong den 韓国式"
    ],
    intro:
      "韓国式ジャージャー麺は、黒味噌ソースで食べる韓国中華の定番麺です。ベトナムでは mi tuong den と検索されることもあり、DOYA では同じ料理として案内しています.",
    sections: [
      {
        heading: "辛くない韓国中華メニュー",
        body:
          "ジャージャー麺はチャンポンのような辛いスープではなく、黒豆味噌ソースのまろやかな麺です。辛いものが苦手な方や家族連れにも選びやすいメニューです。"
      },
      {
        heading: "Jajangmyeon と mi tuong den",
        body:
          "Jajangmyeon は韓国語由来の表記で、mi tuong den はベトナムで検索されやすい表記です。ホーチミンで探す時は両方のキーワードが役に立ちます。"
      },
      {
        heading: "おすすめの食べ方",
        body:
          "ジャージャー麺にはタンスユク、焼き餃子、チャンポンがよく合います。辛くない麺と辛いスープ麺を一緒に頼むとバランスが良いです。"
      }
    ],
    cta: "ジャージャー麺ページとメニュー詳細で、写真、価格、場所、注文方法を確認できます。"
  },
  {
    locale: "ja",
    slug: "ben-thanh-bui-vien-korean-late-night-food",
    title: "ベンタイン市場・ブイビエン近くの深夜韓国料理 | DOYA JJAMBBONG",
    description:
      "ベンタイン市場、ブイビエン、ホーチミン1区で深夜の韓国料理、チャンポン、飲んだ後の辛い海鮮麺を探す方へ。DOYA は 23:30 まで営業.",
    eyebrow: "深夜の韓国料理",
    date: seoExpansionDate,
    readTime: "4 min",
    image: "/images/menu/doya-seafood-jjambbong-soup.jpg",
    imageAlt: "ベンタイン市場とブイビエン近くの深夜韓国料理 DOYA チャンポン鍋",
    keywords: [
      "ホーチミン 深夜 韓国料理",
      "ブイビエン 韓国料理",
      "ベンタイン市場 韓国料理",
      "ホーチミン 夜食 韓国料理",
      "飲んだ後 食事 ホーチミン",
      "ホーチミン 辛い海鮮麺",
      "late night Korean food Saigon"
    ],
    intro:
      "ホーチミン旅行中、夜遅めに熱いスープや辛い麺が食べたくなることがあります。DOYA JJAMBBONG は1区中心部で、夕食、夜食、飲んだ後の食事に使いやすい韓国中華レストランです.",
    sections: [
      {
        heading: "ベンタイン市場・ブイビエンからアクセスしやすい",
        body:
          "観光や夜の外出の後、Google Maps で 77I Bui Thi Xuan を開けばルートを確認できます。ホテル街や中心部から移動しやすい場所です。"
      },
      {
        heading: "夜食に合うメニュー",
        body:
          "温かいスープならチャンポンやチャンポン鍋、辛くない料理ならジャージャー麺。グループならタンスユクや焼き餃子を追加すると満足感があります。"
      },
      {
        heading: "遅い時間は事前確認がおすすめ",
        body:
          "営業時間は 10:30 - 23:30 ですが、遅い時間の来店や持ち帰りは Zalo、KakaoTalk、電話で先に確認すると安心です。"
      }
    ],
    cta: "場所ページから Google Maps を開き、来店前に電話や Zalo で確認できます。"
  }
];

export function getBlogPosts(locale: Locale) {
  return blogPosts.filter((post) => post.locale === locale);
}

export function getBlogPost(locale: Locale, slug: string) {
  return blogPosts.find((post) => post.locale === locale && post.slug === slug);
}

export function blogPath(locale: Locale, slug?: string) {
  return slug ? `/${locale}/blog/${slug}` : `/${locale}/blog`;
}
