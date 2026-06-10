import { menuItems } from "@/data/menu";
import { Locale, site } from "@/lib/site";

export type MenuDetailContent = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  whyTitle: string;
  whyBody: string;
  searchTitle: string;
  searchBody: string;
  keywords: string[];
  faq: { question: string; answer: string }[];
};

export const menuDetailSlugs = [
  "seafood-jjambbong-champong",
  "doya-jjambbong-champong",
  "jajangmyeon-mi-tuong-den",
  "seafood-jajang-platter",
  "tteokbokki-korean-spicy-rice-cakes",
  "tangsuyuk-korean-sweet-sour-pork",
  "kkanpunggi-spicy-garlic-fried-chicken"
] as const;

export type MenuDetailSlug = (typeof menuDetailSlugs)[number];

export const menuDetailSlugByName = Object.fromEntries(
  menuItems.filter((item) => item.detailSlug).map((item) => [item.name, item.detailSlug])
) as Partial<Record<string, MenuDetailSlug>>;

export const menuDetailItemBySlug = Object.fromEntries(
  menuItems.filter((item) => item.detailSlug).map((item) => [item.detailSlug, item.name])
) as Record<MenuDetailSlug, string>;

export function menuDetailPath(locale: Locale, slug: MenuDetailSlug) {
  return `/${locale}/menu/${slug}`;
}

export function menuDetailUrl(locale: Locale, slug: MenuDetailSlug) {
  return `${site.baseUrl}${menuDetailPath(locale, slug)}`;
}

export const menuDetails = {
  "seafood-jjambbong-champong": {
    vi: {
      title: "Champong hải sản DOYA | Mì cay Hàn Quốc Quận 1",
      description:
        "DOYA Seafood Jjambbong là champong hải sản cay tại Quận 1, còn được tìm bằng jjambbong, jjamppong, mi cay Han Quoc và mì hải sản cay.",
      eyebrow: "Champong / Jjambbong",
      h1: "Champong hải sản DOYA tại Quận 1",
      intro:
        "Tô champong hải sản của DOYA dùng nước dùng đỏ cay, hải sản, rau và vị khói kiểu Korean Chinese. Món này phù hợp khi tìm mì cay Hàn Quốc, mì hải sản cay hoặc món ăn cay sau khi đi chơi ở Bui Vien, Ben Thanh.",
      whyTitle: "Vì sao nên gọi món này",
      whyBody:
        "Đây là món mạnh nhất để khách nhớ đến DOYA: cay rõ, nhiều hải sản, ăn no và dễ gọi khi muốn một tô mì nóng vào bữa trưa, bữa tối hoặc ăn khuya Quận 1.",
      searchTitle: "Từ khóa khách hay tìm",
      searchBody:
        "champong Ho Chi Minh, jjambbong, jjamppong, mì cay Hàn Quốc, mi cay Han Quoc, mì hải sản cay, quán Hàn mở khuya, Korean spicy seafood noodles.",
      keywords: ["champong", "jjambbong", "jjamppong", "mì cay Hàn Quốc", "mi cay Han Quoc", "mì hải sản cay"],
      faq: [
        {
          question: "Champong và jjambbong có giống nhau không?",
          answer:
            "Có. Nhiều khách tìm bằng champong, jjambbong hoặc jjamppong; tại DOYA đây là mì cay hải sản kiểu Hàn Quốc."
        },
        {
          question: "Món này có phù hợp để ăn khuya không?",
          answer: "Có. Nước dùng cay nóng và hải sản hợp với khách tìm đồ ăn khuya Quận 1 hoặc món ăn sau khi uống."
        }
      ]
    },
    ko: {
      title: "도야 해물짬뽕 | 호치민 champong 짬뽕 맛집",
      description:
        "호치민 1군에서 champong, jjambbong, 한국식 해물짬뽕, 해장짬뽕을 찾는 손님을 위한 도야짬뽕 대표 해물짬뽕입니다.",
      eyebrow: "대표 짬뽕",
      h1: "도야 해물짬뽕",
      intro:
        "도야 해물짬뽕은 진한 빨간 국물, 해산물, 채소, 한국식 중식의 불맛을 한 그릇에 담은 메뉴입니다. 호치민 짬뽕, 호치민 해장, 부이비엔 근처 매운 국물 메뉴를 찾는 손님에게 가장 먼저 추천하기 좋은 대표 메뉴입니다.",
      whyTitle: "이 메뉴를 선택해야 하는 이유",
      whyBody:
        "매운맛, 해산물, 든든함이 모두 있어서 점심, 저녁, 야식, 술 마신 다음 해장까지 폭넓게 맞습니다. 외국인도 champong 또는 Korean spicy seafood noodles로 이해하기 쉬운 메뉴입니다.",
      searchTitle: "검색 키워드",
      searchBody:
        "호치민 짬뽕, 호치민 해물짬뽕, champong Ho Chi Minh, jjambbong Ho Chi Minh, Korean spicy seafood noodles, 호치민 해장, 호치민 야식.",
      keywords: ["호치민 짬뽕", "champong", "jjambbong", "해물짬뽕", "Korean spicy seafood noodles"],
      faq: [
        {
          question: "champong으로 검색해도 같은 메뉴인가요?",
          answer: "네. champong, jjambbong, jjamppong 모두 한국식 짬뽕을 찾는 손님들이 쓰는 검색어입니다."
        },
        {
          question: "해장 메뉴로 괜찮나요?",
          answer: "네. 매운 국물과 해산물 구성이라 호치민에서 술 먹고 해장 메뉴를 찾는 손님에게 잘 맞습니다."
        }
      ]
    },
    en: {
      title: "DOYA Seafood Champong | Korean Spicy Seafood Noodles HCMC",
      description:
        "DOYA Seafood Jjambbong, also searched as champong or jjamppong, is a Korean spicy seafood noodle soup in District 1, Ho Chi Minh City.",
      eyebrow: "Signature champong",
      h1: "DOYA Seafood Champong in District 1",
      intro:
        "This seafood jjambbong is built for guests searching champong Ho Chi Minh, Korean spicy seafood noodles, spicy seafood soup, or late-night Korean food near Bui Vien and Ben Thanh.",
      whyTitle: "Why order it",
      whyBody:
        "It gives a clear reason to choose DOYA: spicy red broth, seafood, vegetables, and Korean-Chinese comfort in one filling bowl.",
      searchTitle: "Search intent covered",
      searchBody:
        "champong District 1, jjambbong Ho Chi Minh, Korean spicy seafood noodles, hangover food Saigon, late night Korean food Saigon.",
      keywords: ["champong Ho Chi Minh", "jjambbong", "jjamppong", "Korean spicy seafood noodles"],
      faq: [
        {
          question: "Is champong the same as jjambbong?",
          answer: "Yes. Champong, jjambbong, and jjamppong are common search variations for Korean spicy seafood noodles."
        },
        {
          question: "Is this a good late-night or hangover dish?",
          answer: "Yes. The hot spicy broth makes it a strong fit for late-night food and hangover food searches in Saigon."
        }
      ]
    }
  },
  "doya-jjambbong-champong": {
    vi: {
      title: "DOYA Jjambbong Champong | Mì cay Hàn Quốc Quận 1",
      description:
        "DOYA Jjambbong là tô champong cay kiểu Hàn Quốc tại Quận 1, phù hợp khi tìm mi cay Han Quoc, jjambbong hoặc Korean spicy noodles.",
      eyebrow: "Classic champong",
      h1: "DOYA Jjambbong / Champong cổ điển",
      intro:
        "Món jjambbong cổ điển của DOYA tập trung vào nước dùng đỏ cay, rau và hương vị Korean Chinese dễ ăn. Đây là lựa chọn đơn giản cho khách muốn mì cay Hàn Quốc nhưng không cần phần hải sản quá lớn.",
      whyTitle: "Lựa chọn dễ gọi",
      whyBody:
        "Nếu muốn thử champong lần đầu, đây là món cân bằng: cay, nóng, no và hợp cho bữa trưa, bữa tối hoặc ăn khuya gần Bui Thi Xuan.",
      searchTitle: "Từ khóa chính",
      searchBody: "champong, jjambbong, mi cay Han Quoc, mì cay Hàn Quốc, Korean spicy noodles, quán ăn Hàn Quốc quận 1.",
      keywords: ["champong", "jjambbong", "mi cay Han Quoc", "mì cay Hàn Quốc"],
      faq: [
        { question: "Món này cay không?", answer: "Có. Các món jjambbong/champong được ghi là cay để khách dễ chọn." },
        { question: "Có nên gọi cùng món nào?", answer: "Hợp với mandu, tangsuyuk hoặc jajangmyeon để ăn chung." }
      ]
    },
    ko: {
      title: "도야 짬뽕 | 호치민 champong 기본 짬뽕",
      description: "호치민 1군에서 기본 짬뽕, champong, jjambbong, 매운 한국식 중식 면요리를 찾을 때 고르기 좋은 도야 짬뽕입니다.",
      eyebrow: "기본 짬뽕",
      h1: "도야 짬뽕",
      intro:
        "도야 짬뽕은 가장 기본이 되는 매운 국물 면 메뉴입니다. 해물짬뽕보다 부담은 줄이고, 한국식 짬뽕의 매운 국물과 채소, 중식 스타일을 쉽게 느낄 수 있습니다.",
      whyTitle: "처음 방문할 때 고르기 좋은 메뉴",
      whyBody: "짬뽕이 먹고 싶지만 어떤 메뉴부터 고를지 애매하다면 도야 짬뽕이 가장 무난합니다. champong 검색 유입에도 맞는 핵심 메뉴입니다.",
      searchTitle: "검색 키워드",
      searchBody: "호치민 짬뽕, 1군 짬뽕, champong District 1, jjambbong Ho Chi Minh, spicy noodles Ho Chi Minh.",
      keywords: ["호치민 짬뽕", "champong", "jjambbong", "1군 짬뽕"],
      faq: [
        { question: "대표 해물짬뽕과 차이가 있나요?", answer: "도야 짬뽕은 기본형이고, 해물짬뽕은 해산물 구성이 더 강한 대표 메뉴입니다." },
        { question: "맵기는 어떻게 표시되나요?", answer: "짬뽕류는 매운맛으로 표시해 손님이 쉽게 이해하도록 정리했습니다." }
      ]
    },
    en: {
      title: "DOYA Jjambbong Champong | Korean Spicy Noodles District 1",
      description: "A classic Korean jjambbong, also searched as champong, for spicy noodles in District 1, Ho Chi Minh City.",
      eyebrow: "Classic Korean champong",
      h1: "DOYA Jjambbong / Champong",
      intro:
        "This is the classic spicy Korean-Chinese noodle bowl at DOYA. It is made for searches like champong District 1, jjambbong Ho Chi Minh, Korean spicy noodles, and Korean comfort food.",
      whyTitle: "Best first choice",
      whyBody: "It is the easiest bowl to order when you want hot, spicy Korean noodles without overthinking the menu.",
      searchTitle: "Search keywords",
      searchBody: "champong Ho Chi Minh, jjambbong District 1, Korean spicy noodles, spicy noodles Ho Chi Minh.",
      keywords: ["champong", "jjambbong", "Korean spicy noodles", "District 1"],
      faq: [
        { question: "Is this spicy?", answer: "Yes. DOYA marks jjambbong/champong dishes as spicy." },
        { question: "What pairs well with it?", answer: "Fried mandu, tangsuyuk, and jajangmyeon are good pairings." }
      ]
    }
  },
  "jajangmyeon-mi-tuong-den": {
    vi: {
      title: "Mì tương đen Hàn Quốc / Jajangmyeon tại Quận 1 | DOYA JJAMBBONG",
      description:
        "Mì tương đen Hàn Quốc, mi tuong den, jajangmyeon và Korean black bean noodles tại DOYA JJAMBBONG Quận 1, gần Bến Thành và Bùi Viện.",
      eyebrow: "Mì tương đen",
      h1: "Mì tương đen Hàn Quốc / Jajangmyeon",
      intro:
        "Jajangmyeon là mì tương đen Hàn Quốc với sốt đậu đen đậm, dễ ăn và hợp cho khách không muốn món quá cay. Nếu bạn tìm mi tuong den, mì tương đen Hàn Quốc, Korean black bean noodles hoặc jajangmyeon Ho Chi Minh, DOYA JJAMBBONG phục vụ món này tại 77I Bùi Thị Xuân, Quận 1, gần Bến Thành và Bùi Viện.",
      whyTitle: "Không cay, dễ ăn",
      whyBody: "Đây là món nên gọi cùng champong, jjambbong hoặc tangsuyuk khi đi theo nhóm, vì cân bằng tốt giữa món cay và món sốt đen đậm vị. Mì tương đen cũng phù hợp cho khách Việt, khách du lịch, gia đình và người không ăn cay.",
      searchTitle: "Từ khóa chính",
      searchBody:
        "mì tương đen Hàn Quốc, mi tuong den, mì tương đen Quận 1, jajangmyeon Ho Chi Minh, Korean black bean noodles, quán Hàn Quốc quận 1, món Hàn gần Bến Thành.",
      keywords: [
        "mì tương đen Hàn Quốc",
        "mi tuong den",
        "mì tương đen Quận 1",
        "jajangmyeon Ho Chi Minh",
        "Korean black bean noodles",
        "Bến Thành",
        "Bùi Viện"
      ],
      faq: [
        { question: "Mì tương đen có cay không?", answer: "Không. Đây là món sốt đen đậm vị, phù hợp cho khách muốn món không cay." },
        { question: "Mì tương đen và jajangmyeon có giống nhau không?", answer: "Có. Jajangmyeon là tên tiếng Hàn, còn mì tương đen hoặc mi tuong den là cách khách Việt thường tìm món này." },
        { question: "Nên gọi chung với món nào?", answer: "Hợp với champong, tangsuyuk hoặc mandu để ăn theo kiểu Korean Chinese." },
        { question: "DOYA có giao mì tương đen không?", answer: "Khách có thể hỏi đặt bàn, mua mang đi hoặc giao hàng qua Zalo, KakaoTalk hoặc điện thoại." }
      ]
    },
    ko: {
      title: "짜장면 | 호치민 mì tương đen 한국식 짜장면",
      description: "호치민 1군에서 짜장면, jajangmyeon, Korean black bean noodles, 베트남어 mì tương đen 검색을 잡는 도야 짜장면입니다.",
      eyebrow: "짜장면",
      h1: "호치민 한국식 짜장면",
      intro:
        "도야 짜장면은 매운 메뉴가 부담스러운 손님에게 좋은 기본 메뉴입니다. 베트남 손님은 mì tương đen 또는 mi tuong den으로 많이 찾기 때문에, 짜장면과 함께 두 키워드를 같이 강화했습니다.",
      whyTitle: "짬뽕과 같이 팔리는 메뉴",
      whyBody: "짬뽕만으로는 매운맛 부담이 있을 수 있어 짜장면이 메뉴 전환율을 잡아줍니다. 단체 주문, 배달, 가족 손님에게 특히 좋습니다.",
      searchTitle: "검색 키워드",
      searchBody: "호치민 짜장면, mì tương đen Hàn Quốc, mi tuong den, jajangmyeon Ho Chi Minh, Korean black bean noodles.",
      keywords: ["호치민 짜장면", "mì tương đen", "mi tuong den", "jajangmyeon"],
      faq: [
        { question: "베트남어로 짜장면은 어떤 키워드가 좋나요?", answer: "mì tương đen Hàn Quốc와 mi tuong den을 강하게 쓰는 것이 좋습니다." },
        { question: "매운 메뉴가 아닌가요?", answer: "네. 짜장면은 순한 메뉴라 매운 짬뽕과 같이 주문하기 좋습니다." }
      ]
    },
    en: {
      title: "Jajangmyeon Ho Chi Minh | Korean Black Bean Noodles",
      description: "Korean black bean noodles in District 1, also found as jajangmyeon, mi tuong den, and mì tương đen Hàn Quốc.",
      eyebrow: "Korean black bean noodles",
      h1: "Jajangmyeon in Ho Chi Minh City",
      intro:
        "DOYA jajangmyeon is the non-spicy Korean black bean noodle dish that balances the spicy champong lineup.",
      whyTitle: "Good for groups",
      whyBody: "It pairs naturally with jjambbong, tangsuyuk, and fried mandu, making it a strong order for delivery and dine-in groups.",
      searchTitle: "Search keywords",
      searchBody: "jajangmyeon Ho Chi Minh, Korean black bean noodles, mi tuong den, mì tương đen Hàn Quốc.",
      keywords: ["jajangmyeon", "Korean black bean noodles", "mi tuong den"],
      faq: [
        { question: "Is jajangmyeon spicy?", answer: "No. It is a rich black bean noodle dish and is usually not spicy." },
        { question: "Why include mi tuong den?", answer: "Vietnamese guests often search black bean noodles with mi tuong den or mì tương đen." }
      ]
    }
  },
  "seafood-jajang-platter": {
    vi: {
      title: "Mì tương đen hải sản đĩa lớn | Seafood Jajang Platter",
      description: "Mì tương đen hải sản đĩa lớn tại DOYA, phù hợp cho nhóm tìm mi tuong den, jajangmyeon và món Hàn Trung tại Quận 1.",
      eyebrow: "Seafood jajang",
      h1: "Mì tương đen hải sản đĩa lớn",
      intro: "Phiên bản đĩa lớn của mì tương đen với hải sản, rau và sốt đen đậm vị. Món này hợp khi đi nhóm hoặc muốn gọi món chia sẻ.",
      whyTitle: "Món chia sẻ tốt",
      whyBody: "Khác với một tô mì riêng, seafood jajang platter tạo cảm giác đầy đặn hơn và dễ tăng giá trị đơn hàng khi đi cùng bạn bè.",
      searchTitle: "Từ khóa chính",
      searchBody: "mì tương đen hải sản, mi tuong den, jajangmyeon, seafood jajang platter, Korean Chinese food District 1.",
      keywords: ["mì tương đen hải sản", "mi tuong den", "seafood jajang platter"],
      faq: [
        { question: "Món này dành cho mấy người?", answer: "Phù hợp để chia sẻ, đặc biệt khi gọi thêm champong hoặc món chiên." },
        { question: "Có cay không?", answer: "Vị chính là sốt tương đen, không phải món cay như champong." }
      ]
    },
    ko: {
      title: "해물쟁반짜장 | 호치민 짜장면 단체 메뉴",
      description: "호치민 1군에서 해물쟁반짜장, 짜장면, mi tuong den, Korean black bean noodles 단체 메뉴를 찾는 손님을 위한 메뉴입니다.",
      eyebrow: "쟁반짜장",
      h1: "해물쟁반짜장",
      intro: "해물쟁반짜장은 해산물과 짜장 소스를 넉넉하게 볶아 함께 나눠 먹기 좋은 메뉴입니다.",
      whyTitle: "객단가를 올리는 공유 메뉴",
      whyBody: "개인 면 메뉴보다 주문 단가가 높고, 탕수육이나 짬뽕과 같이 주문하기 좋아 단체 손님 전환에 유리합니다.",
      searchTitle: "검색 키워드",
      searchBody: "호치민 해물쟁반짜장, 호치민 짜장면, mi tuong den, jajangmyeon Ho Chi Minh, Korean Chinese food.",
      keywords: ["해물쟁반짜장", "호치민 짜장면", "mi tuong den"],
      faq: [
        { question: "해물쟁반짜장은 매운 메뉴인가요?", answer: "짜장 베이스 메뉴라 짬뽕류보다 부담이 적습니다." },
        { question: "배달 키워드에도 도움이 되나요?", answer: "네. 단체 주문, 공유 메뉴, Korean black bean noodles 키워드와 잘 맞습니다." }
      ]
    },
    en: {
      title: "Seafood Jajang Platter | Korean Black Bean Noodles District 1",
      description: "A shareable seafood jajang platter in Ho Chi Minh for Korean black bean noodles, jajangmyeon, and Korean-Chinese food searches.",
      eyebrow: "Shareable jajang",
      h1: "Seafood Jajang Platter",
      intro: "A larger seafood black bean noodle platter made for sharing.",
      whyTitle: "Built for group orders",
      whyBody: "This dish helps convert group diners who want something richer and less spicy than champong.",
      searchTitle: "Search keywords",
      searchBody: "seafood jajang platter, Korean black bean noodles, jajangmyeon Ho Chi Minh, Korean Chinese food District 1.",
      keywords: ["seafood jajang platter", "jajangmyeon", "Korean black bean noodles"],
      faq: [
        { question: "Is it spicy?", answer: "No. It is a black bean sauce noodle platter." },
        { question: "Is it good for groups?", answer: "Yes. It is one of the better sharing dishes on the menu." }
      ]
    }
  },
  "tteokbokki-korean-spicy-rice-cakes": {
    vi: {
      title: "Tokbokki / Tteokbokki Quận 1 | Bánh gạo cay Hàn Quốc",
      description: "Tokbokki, tteokbokki và bánh gạo cay Hàn Quốc tại DOYA Quận 1, món ăn Hàn dễ gọi cùng champong và mandu.",
      eyebrow: "Korean street food",
      h1: "Tokbokki Hàn Quốc tại Quận 1",
      intro: "Tokbokki là bánh gạo cay Hàn Quốc với sốt đỏ ngọt cay, dễ nhận diện với khách trẻ, khách du lịch và khách tìm đồ ăn Hàn Quốc giao hàng.",
      whyTitle: "Món dễ kéo khách mới",
      whyBody: "Nhiều khách không biết jjambbong nhưng biết tokbokki. Vì vậy món này giúp DOYA xuất hiện thêm ở nhóm tìm Korean spicy rice cakes và tteokbokki Ho Chi Minh.",
      searchTitle: "Từ khóa chính",
      searchBody: "tokbokki, tteokbokki, bánh gạo cay Hàn Quốc, Korean spicy rice cakes, tteokbokki Ho Chi Minh.",
      keywords: ["tokbokki", "tteokbokki", "bánh gạo cay Hàn Quốc", "Korean spicy rice cakes"],
      faq: [
        { question: "Tokbokki có cay không?", answer: "Có vị ngọt cay kiểu Hàn Quốc, dễ ăn hơn champong." },
        { question: "Có hợp giao hàng không?", answer: "Có. Đây là món dễ gọi cho nhóm khách tìm đồ ăn Hàn Quốc giao hàng Quận 1." }
      ]
    },
    ko: {
      title: "떡볶이 | 호치민 tteokbokki 한국 분식",
      description: "호치민 1군에서 떡볶이, tteokbokki, tokbokki, Korean spicy rice cakes를 찾는 손님을 위한 도야 떡볶이입니다.",
      eyebrow: "분식 메뉴",
      h1: "도야 떡볶이",
      intro: "떡볶이는 짬뽕이나 중식 메뉴를 모르는 외국인에게도 익숙한 한국 분식 키워드입니다.",
      whyTitle: "검색 폭을 넓히는 메뉴",
      whyBody: "짬뽕, 짜장면뿐 아니라 tteokbokki Ho Chi Minh, Korean spicy rice cakes 검색까지 받을 수 있어 관광객 유입에 도움이 됩니다.",
      searchTitle: "검색 키워드",
      searchBody: "호치민 떡볶이, tteokbokki Ho Chi Minh, tokbokki, Korean spicy rice cakes, bánh gạo cay Hàn Quốc.",
      keywords: ["호치민 떡볶이", "tteokbokki", "tokbokki", "Korean spicy rice cakes"],
      faq: [
        { question: "떡볶이는 왜 SEO에 넣나요?", answer: "외국인과 베트남 현지 손님이 한국 음식 검색 시 자주 쓰는 키워드라 유입 폭을 넓혀줍니다." },
        { question: "짬뽕과 같이 주문해도 괜찮나요?", answer: "네. 매운 국물 메뉴와 분식 메뉴 조합으로 주문하기 좋습니다." }
      ]
    },
    en: {
      title: "Tteokbokki Ho Chi Minh | Korean Spicy Rice Cakes",
      description: "Korean spicy rice cakes at DOYA District 1, also searched as tteokbokki, tokbokki, and Korean street food in Ho Chi Minh.",
      eyebrow: "Korean spicy rice cakes",
      h1: "Tteokbokki in Ho Chi Minh",
      intro: "Tteokbokki brings Korean street food search traffic into the DOYA menu alongside champong, jajangmyeon, and fried dishes.",
      whyTitle: "Easy tourist keyword",
      whyBody: "Many tourists know tteokbokki before they know Korean-Chinese dishes, so it helps capture a wider food search intent.",
      searchTitle: "Search keywords",
      searchBody: "tteokbokki Ho Chi Minh, Korean spicy rice cakes, tokbokki, Korean street food District 1.",
      keywords: ["tteokbokki Ho Chi Minh", "Korean spicy rice cakes", "tokbokki"],
      faq: [
        { question: "Is tteokbokki spicy?", answer: "It is sweet and spicy Korean rice cakes." },
        { question: "Is it good for delivery?", answer: "Yes. It is a simple, recognizable dish for Korean food delivery searches." }
      ]
    }
  },
  "tangsuyuk-korean-sweet-sour-pork": {
    vi: {
      title: "Tangsuyuk | Thịt heo chiên sốt chua ngọt Hàn Quốc",
      description: "Tangsuyuk tại DOYA Quận 1: thịt heo chiên sốt chua ngọt Hàn Quốc, hợp gọi cùng champong và mì tương đen.",
      eyebrow: "Korean sweet and sour pork",
      h1: "Tangsuyuk Hàn Quốc",
      intro: "Tangsuyuk là món thịt heo chiên sốt chua ngọt kiểu Hàn, món phụ mạnh khi khách gọi champong hoặc jajangmyeon.",
      whyTitle: "Món tăng giá trị đơn hàng",
      whyBody: "Khách đi nhóm thường cần món chiên để chia sẻ. Tangsuyuk giúp tăng đơn hàng và tạo cảm giác đủ bữa hơn.",
      searchTitle: "Từ khóa chính",
      searchBody: "tangsuyuk, thịt heo chiên sốt chua ngọt Hàn Quốc, Korean sweet and sour pork, Korean Chinese food District 1.",
      keywords: ["tangsuyuk", "thịt heo chiên sốt chua ngọt Hàn Quốc", "Korean sweet and sour pork"],
      faq: [
        { question: "Tangsuyuk ăn với món nào ngon?", answer: "Hợp nhất với champong hoặc mì tương đen Hàn Quốc." },
        { question: "Có phải món cay không?", answer: "Không. Đây là món chiên sốt chua ngọt." }
      ]
    },
    ko: {
      title: "탕수육 | 호치민 Korean sweet and sour pork",
      description: "호치민 1군에서 탕수육, tangsuyuk, Korean sweet and sour pork를 찾는 손님에게 맞는 도야 탕수육입니다.",
      eyebrow: "튀김 대표 메뉴",
      h1: "도야 탕수육",
      intro: "탕수육은 짬뽕, 짜장면과 함께 주문되는 한국식 중식 핵심 메뉴입니다.",
      whyTitle: "매출을 올리는 사이드가 아닌 메인",
      whyBody: "단순 사이드가 아니라 단체 주문과 배달 객단가를 올리는 대표 메뉴로 보여줘야 합니다.",
      searchTitle: "검색 키워드",
      searchBody: "호치민 탕수육, tangsuyuk Ho Chi Minh, Korean sweet and sour pork, 호치민 중국집.",
      keywords: ["호치민 탕수육", "tangsuyuk", "Korean sweet and sour pork"],
      faq: [
        { question: "탕수육은 어떤 메뉴와 잘 맞나요?", answer: "짬뽕, 짜장면, 해물쟁반짜장과 같이 주문하기 좋습니다." },
        { question: "외국인 검색어는 무엇인가요?", answer: "tangsuyuk Ho Chi Minh, Korean sweet and sour pork가 핵심입니다." }
      ]
    },
    en: {
      title: "Tangsuyuk Ho Chi Minh | Korean Sweet and Sour Pork",
      description: "Korean sweet and sour pork in District 1, a key Korean-Chinese fried dish to pair with champong or jajangmyeon.",
      eyebrow: "Korean-Chinese fried dish",
      h1: "Tangsuyuk in Ho Chi Minh",
      intro: "Tangsuyuk is a classic Korean sweet and sour pork dish that pairs naturally with champong and jajangmyeon.",
      whyTitle: "Strong group-order dish",
      whyBody: "It works as an upsell because guests can share it beside noodle and rice dishes.",
      searchTitle: "Search keywords",
      searchBody: "tangsuyuk Ho Chi Minh, Korean sweet and sour pork, Korean Chinese food District 1.",
      keywords: ["tangsuyuk Ho Chi Minh", "Korean sweet and sour pork"],
      faq: [
        { question: "What does tangsuyuk pair with?", answer: "Champong, jjambbong, and jajangmyeon are the strongest pairings." },
        { question: "Is tangsuyuk spicy?", answer: "No. It is a fried pork dish with sweet and sour sauce." }
      ]
    }
  },
  "kkanpunggi-spicy-garlic-fried-chicken": {
    vi: {
      title: "Kkanpunggi | Gà chiên sốt cay tỏi Hàn Quốc",
      description: "Kkanpunggi tại DOYA Quận 1: gà chiên sốt cay tỏi kiểu Korean Chinese, hợp cho nhóm và món nhậu.",
      eyebrow: "Spicy garlic fried chicken",
      h1: "Gà chiên sốt cay tỏi Kkanpunggi",
      intro: "Kkanpunggi là gà chiên sốt cay tỏi, hợp với khách muốn món chiên có vị mạnh hơn tangsuyuk.",
      whyTitle: "Món nhậu và món chia sẻ",
      whyBody: "Món này hợp với bia, soju, highball và nhóm khách tìm Korean restaurant drinks District 1.",
      searchTitle: "Từ khóa chính",
      searchBody: "kkanpunggi, gà chiên sốt cay tỏi, spicy garlic fried chicken Korean Chinese, món nhậu Hàn Quốc Quận 1.",
      keywords: ["kkanpunggi", "gà chiên sốt cay tỏi", "spicy garlic fried chicken"],
      faq: [
        { question: "Kkanpunggi có cay không?", answer: "Có vị cay tỏi rõ hơn tangsuyuk." },
        { question: "Có hợp đi nhóm không?", answer: "Có. Đây là món chiên chia sẻ tốt cho nhóm khách." }
      ]
    },
    ko: {
      title: "깐풍기 | 호치민 spicy garlic fried chicken",
      description: "호치민 1군에서 깐풍기, kkanpunggi, spicy garlic fried chicken Korean Chinese를 찾는 손님을 위한 메뉴입니다.",
      eyebrow: "술안주 튀김",
      h1: "도야 깐풍기",
      intro: "깐풍기는 매콤한 마늘 소스의 닭튀김 메뉴로, 술안주와 단체 주문에 강합니다.",
      whyTitle: "술안주 키워드와 잘 맞는 메뉴",
      whyBody: "짬뽕과 짜장면만으로 잡기 어려운 술안주, 치킨, fried chicken 검색 의도를 함께 잡을 수 있습니다.",
      searchTitle: "검색 키워드",
      searchBody: "호치민 깐풍기, kkanpunggi Ho Chi Minh, spicy garlic fried chicken Korean Chinese, 호치민 술안주.",
      keywords: ["호치민 깐풍기", "kkanpunggi", "spicy garlic fried chicken"],
      faq: [
        { question: "깐풍기는 술안주로 괜찮나요?", answer: "네. 매콤한 닭튀김이라 맥주, 소주, 하이볼과 잘 맞습니다." },
        { question: "탕수육과 차이는 무엇인가요?", answer: "탕수육은 새콤달콤한 돼지고기 튀김, 깐풍기는 매콤한 마늘 닭튀김입니다." }
      ]
    },
    en: {
      title: "Kkanpunggi Ho Chi Minh | Spicy Garlic Fried Chicken",
      description: "Kkanpunggi is Korean-Chinese spicy garlic fried chicken at DOYA District 1, good for groups, drinks, and late-night food.",
      eyebrow: "Spicy garlic chicken",
      h1: "Kkanpunggi in Ho Chi Minh",
      intro: "Kkanpunggi covers a different search intent from noodles: fried chicken, spicy garlic sauce, Korean-Chinese drinking food, and group orders.",
      whyTitle: "Good for drinks and groups",
      whyBody: "It is a strong fried dish to pair with soju, beer, highballs, and noodle bowls.",
      searchTitle: "Search keywords",
      searchBody: "kkanpunggi Ho Chi Minh, spicy garlic fried chicken Korean Chinese, Korean drinking food District 1.",
      keywords: ["kkanpunggi", "spicy garlic fried chicken", "Korean drinking food"],
      faq: [
        { question: "Is kkanpunggi spicy?", answer: "Yes. It has a spicy garlic sauce profile." },
        { question: "Is it a main or side dish?", answer: "It works as a shareable fried main for groups." }
      ]
    }
  }
} as Record<MenuDetailSlug, Record<Locale, MenuDetailContent>>;

const zhMenuDetails: Record<MenuDetailSlug, MenuDetailContent> = {
  "seafood-jjambbong-champong": {
    title: "DOYA 海鲜 Champong | 胡志明市韩式辣海鲜面",
    description: "DOYA 海鲜 Jjambbong, 也可搜索 champong 或 jjamppong, 是胡志明市第1郡的韩式辣海鲜汤面.",
    eyebrow: "招牌 champong",
    h1: "DOYA 海鲜 Champong 第1郡",
    intro: "这碗海鲜 jjambbong 适合搜索 champong Ho Chi Minh, Korean spicy seafood noodles, 辣海鲜汤面或 Bui Vien 附近韩国夜宵的客人.",
    whyTitle: "为什么推荐",
    whyBody: "红色辣汤、海鲜、蔬菜和韩式中餐风味集中在一碗里, 是 DOYA 最容易被记住的招牌菜单.",
    searchTitle: "覆盖搜索词",
    searchBody: "champong District 1, jjambbong Ho Chi Minh, Korean spicy seafood noodles, hangover food Saigon, late night Korean food Saigon.",
    keywords: ["champong Ho Chi Minh", "jjambbong", "jjamppong", "韩式辣海鲜面", "Korean spicy seafood noodles"],
    faq: [
      { question: "Champong 和 jjambbong 一样吗?", answer: "是的. Champong, jjambbong 和 jjamppong 都是韩国辣海鲜面的常见搜索写法." },
      { question: "适合夜宵或醒酒吗?", answer: "适合. 热辣的海鲜汤面很适合夜宵和酒后想吃热汤的客人." }
    ]
  },
  "doya-jjambbong-champong": {
    title: "DOYA Jjambbong Champong | 第1郡韩式辣面",
    description: "DOYA 经典 jjambbong, 也可搜索 champong, 是胡志明市第1郡的韩式辣汤面.",
    eyebrow: "经典 champong",
    h1: "DOYA Jjambbong / Champong",
    intro: "经典韩式中餐辣汤面, 适合搜索 champong District 1, jjambbong Ho Chi Minh 和 Korean spicy noodles 的客人.",
    whyTitle: "第一次来容易点",
    whyBody: "如果想吃热辣韩式面, 这道是最简单的选择.",
    searchTitle: "搜索关键词",
    searchBody: "champong Ho Chi Minh, jjambbong District 1, Korean spicy noodles, spicy noodles Ho Chi Minh.",
    keywords: ["champong", "jjambbong", "韩式辣面", "District 1"],
    faq: [
      { question: "这道菜辣吗?", answer: "辣. DOYA 的 jjambbong / champong 属于辣味汤面." },
      { question: "适合搭配什么?", answer: "适合搭配煎饺、糖醋肉或韩式炸酱面." }
    ]
  },
  "jajangmyeon-mi-tuong-den": {
    title: "Jajangmyeon 胡志明市 | 韩式炸酱面 Mi Tuong Den",
    description: "胡志明市第1郡韩式炸酱面, 也可搜索 jajangmyeon, mi tuong den, mì tương đen 或 Korean black bean noodles.",
    eyebrow: "韩式炸酱面",
    h1: "胡志明市韩式炸酱面 Jajangmyeon",
    intro: "DOYA 炸酱面是不辣的黑豆酱面, 适合搭配辣味 champong 菜单.",
    whyTitle: "适合多人点餐",
    whyBody: "韩式炸酱面适合搭配 jjambbong、糖醋肉和煎饺, 是不吃辣客人的好选择.",
    searchTitle: "搜索关键词",
    searchBody: "jajangmyeon Ho Chi Minh, Korean black bean noodles, mi tuong den, mì tương đen Hàn Quốc.",
    keywords: ["jajangmyeon", "韩式炸酱面", "mi tuong den", "Korean black bean noodles"],
    faq: [
      { question: "Jajangmyeon 辣吗?", answer: "不辣. 这是黑豆酱风味的韩式中餐面." },
      { question: "为什么写 mi tuong den?", answer: "越南客人常用 mi tuong den 或 mì tương đen 搜索韩式炸酱面." }
    ]
  },
  "seafood-jajang-platter": {
    title: "海鲜炸酱大盘 | 第1郡韩式黑豆酱面",
    description: "适合分享的海鲜炸酱大盘, 面向 Korean black bean noodles, jajangmyeon 和韩式中餐搜索.",
    eyebrow: "分享炸酱面",
    h1: "海鲜炸酱大盘",
    intro: "适合多人分享的海鲜黑豆酱面大盘.",
    whyTitle: "适合团体",
    whyBody: "比单人面更适合朋友或家庭分享, 可搭配 champong 和炸物.",
    searchTitle: "搜索关键词",
    searchBody: "seafood jajang platter, Korean black bean noodles, jajangmyeon Ho Chi Minh, Korean Chinese food District 1.",
    keywords: ["seafood jajang platter", "jajangmyeon", "韩式炸酱面"],
    faq: [
      { question: "辣吗?", answer: "不辣. 主要是黑豆酱风味." },
      { question: "适合多人吗?", answer: "适合, 这是菜单里比较适合分享的菜." }
    ]
  },
  "tteokbokki-korean-spicy-rice-cakes": {
    title: "Tteokbokki 胡志明市 | 韩国辣年糕",
    description: "DOYA 第1郡韩国辣年糕, 也可搜索 tteokbokki, tokbokki 和 Korean spicy rice cakes.",
    eyebrow: "韩国街头小吃",
    h1: "胡志明市 Tteokbokki 韩国辣年糕",
    intro: "Tteokbokki 是很多游客熟悉的韩国辣年糕, 适合搭配 champong 和煎饺.",
    whyTitle: "游客熟悉的关键词",
    whyBody: "很多客人先认识 tteokbokki, 再尝试韩式中餐菜单.",
    searchTitle: "搜索关键词",
    searchBody: "tteokbokki Ho Chi Minh, Korean spicy rice cakes, tokbokki, Korean street food District 1.",
    keywords: ["tteokbokki Ho Chi Minh", "Korean spicy rice cakes", "韩国辣年糕"],
    faq: [
      { question: "Tteokbokki 辣吗?", answer: "是甜辣口味的韩国年糕." },
      { question: "适合外卖吗?", answer: "适合, 这是容易理解和点餐的韩国小吃." }
    ]
  },
  "tangsuyuk-korean-sweet-sour-pork": {
    title: "Tangsuyuk 胡志明市 | 韩式糖醋肉",
    description: "第1郡韩式糖醋肉, 适合搭配 champong 或 jajangmyeon.",
    eyebrow: "韩式炸物",
    h1: "胡志明市韩式糖醋肉 Tangsuyuk",
    intro: "Tangsuyuk 是韩式中餐经典糖醋肉, 常和 champong 或炸酱面一起点.",
    whyTitle: "适合分享",
    whyBody: "多人用餐时, 糖醋肉是很好的分享菜和加点菜.",
    searchTitle: "搜索关键词",
    searchBody: "tangsuyuk Ho Chi Minh, Korean sweet and sour pork, Korean Chinese food District 1.",
    keywords: ["tangsuyuk Ho Chi Minh", "韩式糖醋肉", "Korean sweet and sour pork"],
    faq: [
      { question: "糖醋肉适合搭配什么?", answer: "最适合搭配 champong, jjambbong 和韩式炸酱面." },
      { question: "辣吗?", answer: "不辣. 是甜酸酱的炸猪肉." }
    ]
  },
  "kkanpunggi-spicy-garlic-fried-chicken": {
    title: "Kkanpunggi 胡志明市 | 韩式辣蒜炸鸡",
    description: "第1郡韩式辣蒜炸鸡, 适合多人、下酒菜和夜宵.",
    eyebrow: "辣蒜炸鸡",
    h1: "胡志明市 Kkanpunggi 辣蒜炸鸡",
    intro: "Kkanpunggi 是带有辣蒜酱风味的韩式中餐炸鸡, 适合搭配啤酒、烧酒和汤面.",
    whyTitle: "适合喝酒和多人分享",
    whyBody: "这是比糖醋肉口味更重的炸物分享菜.",
    searchTitle: "搜索关键词",
    searchBody: "kkanpunggi Ho Chi Minh, spicy garlic fried chicken Korean Chinese, Korean drinking food District 1.",
    keywords: ["kkanpunggi", "韩式辣蒜炸鸡", "spicy garlic fried chicken"],
    faq: [
      { question: "Kkanpunggi 辣吗?", answer: "有明显的辣蒜酱风味." },
      { question: "是主菜还是小菜?", answer: "适合多人分享, 也可以作为下酒主菜." }
    ]
  }
};

menuDetailSlugs.forEach((slug) => {
  menuDetails[slug].zh = zhMenuDetails[slug];
});
