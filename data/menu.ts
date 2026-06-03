import { Locale } from "@/lib/site";

export type MenuCategory = "champong" | "jajang" | "rice" | "fried" | "anju" | "side" | "drink" | "alcohol" | "coffee";

export type MenuItem = {
  name: string;
  koreanName?: string;
  vietnameseName?: string;
  detailSlug?: string;
  description: string;
  descriptionVi?: string;
  descriptionKo?: string;
  tags: string[];
  spice: 0 | 1 | 2 | 3;
  category: MenuCategory;
  featured?: boolean;
  price?: string;
  image?: string;
};

export const menuCategoryLabels: Record<Locale, Record<MenuCategory, { title: string; body: string }>> = {
  vi: {
    champong: {
      title: "Mì cay / Jjambbong / Champong",
      body: "Các tô mì cay Hàn Quốc và mì hải sản cay, nước dùng đỏ hoặc trắng, phù hợp cho khách tìm mì cay, champong, champon, jjamppong hoặc jjambbong."
    },
    jajang: {
      title: "Mì tương đen / Jajangmyeon",
      body: "Các món mì tương đen Hàn Quốc, mi tuong den và jajangmyeon không quá cay, dễ ăn cho khách tìm món Hàn-Trung tại Quận 1."
    },
    rice: {
      title: "Cơm / Rice",
      body: "Cơm nóng, cơm trộn và các phần ăn chắc bụng cho bữa trưa hoặc bữa tối."
    },
    fried: {
      title: "Món chiên",
      body: "Các món chiên giòn như mandu, menbosha và tôm chiên để gọi thêm cùng mì hoặc cơm."
    },
    anju: {
      title: "Món nhậu",
      body: "Các món dùng chung hợp với bia và rượu như tangsuyuk, gà sốt cay, súp hải sản và yangjangpi."
    },
    side: {
      title: "Món phụ",
      body: "Món nhẹ và phần gọi thêm để bữa ăn đầy đủ hơn."
    },
    drink: {
      title: "Đồ uống / Soda / Trà sữa",
      body: "Đồ uống tại DOYA JJAMBBONG Quận 1: soda chanh dây, soda dâu, trà sữa, trà đào, nước cam, Coke, Coke Zero, Sprite và soda cho khách gần Bùi Thị Xuân, Bến Thành, Bui Vien."
    },
    alcohol: {
      title: "Rượu, bia & highball",
      body: "Soju Jinro, Chamisul, Saero, Good Day, bia Tiger, rượu Yantai, Tsingtao, vang đỏ và highball cho khách tìm quán Hàn Quốc uống soju ở Quận 1."
    },
    coffee: {
      title: "Cà phê & cafe menu",
      body: "Cafe menu tại nhà hàng Hàn Quốc Quận 1 với Americano, latte, cà phê dừa, cà phê muối, matcha latte và matcha dâu latte."
    }
  },
  ko: {
    champong: {
      title: "짬뽕 / Champong",
      body: "해물짬뽕, 도야 짬뽕, 마라짬뽕, 해물백짬뽕처럼 champong, champon, jjamppong 검색까지 잡는 대표 면 메뉴입니다."
    },
    jajang: {
      title: "짜장",
      body: "짜장면, 고추짜장처럼 맵지 않게 먹기 좋은 한국식 중화요리 메뉴입니다."
    },
    rice: {
      title: "밥메뉴",
      body: "볶음밥, 덮밥, 해산물 밥 메뉴처럼 든든하게 먹기 좋은 메뉴입니다."
    },
    fried: {
      title: "튀김메뉴",
      body: "멘보샤, 새우튀김류처럼 짬뽕과 짜장에 가볍게 곁들이기 좋은 바삭한 메뉴입니다."
    },
    anju: {
      title: "술안주메뉴",
      body: "탕수육, 깐풍기, 유린기, 짬뽕탕처럼 맥주나 술과 함께 나눠먹기 좋은 요리 메뉴입니다."
    },
    side: {
      title: "사이드메뉴",
      body: "물만두와 가볍게 추가하기 좋은 사이드 메뉴입니다."
    },
    drink: {
      title: "음료 / 소다 / 밀크티",
      body: "호치민 1군 도야짬뽕에서 즐기는 패션후르츠 소다, 딸기 소다, 블루베리 소다, 레몬티, 밀크티, 타이 밀크티, 오렌지 주스, 복숭아티, 콜라, 제로콜라, 스프라이트, 탄산수 음료 메뉴입니다."
    },
    alcohol: {
      title: "주류 & 하이볼",
      body: "진로, 참이슬, 새로, 좋은데이 소주와 타이거 맥주, 연태고량주, 칭따오, 하우스 레드 와인, 레몬 하이볼, 얼그레이 하이볼을 준비한 호치민 1군 술안주 식당 메뉴입니다."
    },
    coffee: {
      title: "커피 & 카페 메뉴",
      body: "아메리카노, 카페라떼, 코코넛 커피, 레몬 커피, 소금 커피, 연유 커피, 말차라떼, 딸기 말차라떼까지 식사 후 마시기 좋은 카페 메뉴입니다."
    }
  },
  en: {
    champong: {
      title: "Jjambbong / Champong",
      body: "Spicy and white seafood noodle soups for guests searching champong, champon, jjamppong, or jjambbong in Ho Chi Minh."
    },
    jajang: {
      title: "Jajang",
      body: "Black bean noodles and Korean-Chinese jajang options for mild or savory cravings."
    },
    rice: {
      title: "Rice",
      body: "Rice bowls, fried rice, and filling Korean food options for lunch or dinner."
    },
    fried: {
      title: "Fried Menu",
      body: "Crispy fried add-ons like menbosha, fried mandu, and shrimp dishes that pair well with jjambbong or jajang."
    },
    anju: {
      title: "Drinking Snacks",
      body: "Shareable Korean-Chinese dishes for beer or drinks, including tangsuyuk, spicy chicken, seafood soups, and yangjangpi."
    },
    side: {
      title: "Side Menu",
      body: "Light add-ons and simple sides to round out the meal."
    },
    drink: {
      title: "Drinks / Soda / Milk Tea",
      body: "Drinks at DOYA JJAMBBONG District 1: passion fruit soda, strawberry soda, blueberry soda, lemon tea, milk tea, Thai milk tea, orange juice, peach tea, Coke, Coke Zero, Sprite, and soda near Bui Thi Xuan, Ben Thanh, and Bui Vien."
    },
    alcohol: {
      title: "Soju, Beer & Highball",
      body: "Soju, beer, Yantai liquor, Tsingtao, house red wine, lemon highball, and Earl Grey highball for guests searching a Korean restaurant with soju in District 1 Ho Chi Minh."
    },
    coffee: {
      title: "Coffee & Cafe Menu",
      body: "Cafe drinks after Korean-Chinese food in District 1: Americano, latte, coconut coffee, salt coffee, condensed milk coffee, matcha latte, and strawberry matcha latte."
    }
  }
};

export const menuCategoryOrder: MenuCategory[] = ["champong", "jajang", "rice", "fried", "anju", "side", "drink", "alcohol", "coffee"];

export const menuItems: MenuItem[] = [
  {
    name: "DOYA Seafood Jjambbong",
    detailSlug: "seafood-jjambbong-champong",
    koreanName: "도야 해물짬뽕",
    vietnameseName: "Mì cay hải sản DOYA",
    description: "Korean spicy seafood noodles in Ho Chi Minh, a signature jjambbong also searched as champong District 1.",
    descriptionVi: "Mì cay Hàn Quốc và mì hải sản cay kiểu jjambbong/champong tại Quận 1, TP. Hồ Chí Minh.",
    descriptionKo: "호치민 1군에서 jjambbong, champong, Korean spicy seafood noodles로 찾기 좋은 도야 대표 해물짬뽕입니다.",
    tags: ["Mì cay Hàn Quốc", "Mì hải sản cay", "jjambbong Ho Chi Minh", "champong District 1"],
    spice: 2,
    category: "champong",
    featured: true,
    price: "M 220,000 / L 250,000 VND",
    image: "/images/menu/doya-seafood-jjambbong.jpg"
  },
  {
    name: "DOYA Jjambbong",
    detailSlug: "doya-jjambbong-champong",
    koreanName: "도야 짬뽕",
    vietnameseName: "Mì jjambbong cổ điển",
    description: "Classic jjambbong Ho Chi Minh style with red broth, vegetables, seafood flavor, and Korean-Chinese wok depth.",
    descriptionVi: "Tô jjambbong nước đỏ cổ điển cho khách tìm mì cay Hàn Quốc, mì hải sản cay hoặc champong ở Quận 1.",
    descriptionKo: "호치민 1군에서 mì cay Hàn Quốc, champong, jjambbong 키워드로 찾기 좋은 기본 짬뽕입니다.",
    tags: ["Mì cay Hàn Quốc", "jjambbong", "champong", "Korean spicy seafood noodles"],
    spice: 2,
    category: "champong",
    featured: true,
    price: "S 130,000 / M 180,000 / L 210,000 VND",
    image: "/images/menu/doya-classic-jjambbong.jpg"
  },
  {
    name: "Mala Jjambbong",
    koreanName: "마라짬뽕",
    vietnameseName: "Mì jjambbong mala",
    description: "A bold mala-style jjambbong bowl with numbing spice, vegetables, and a deep red broth.",
    descriptionVi: "Mì jjambbong vị mala cay tê với rau và nước dùng đỏ đậm vị.",
    descriptionKo: "마라의 얼얼한 매운맛과 진한 빨간 국물이 어우러진 짬뽕입니다.",
    tags: ["Mì cay", "Mala", "Spicy"],
    spice: 2,
    category: "champong",
    price: "M 220,000 / L 250,000 VND",
    image: "/images/menu/doya-spicy-pork-jjambbong.jpg"
  },
  {
    name: "Beef Jjambbong",
    koreanName: "소고기짬뽕",
    vietnameseName: "Mì jjambbong bò",
    description: "A hearty red broth jjambbong with beef, vegetables, and Korean-Chinese spicy depth.",
    descriptionVi: "Mì jjambbong nước đỏ cay với bò, rau và vị đậm kiểu Hàn-Trung.",
    descriptionKo: "소고기와 채소가 들어간 진한 빨간 국물의 소고기짬뽕입니다.",
    tags: ["Mì cay", "Beef", "Spicy"],
    spice: 2,
    category: "champong",
    price: "M 220,000 / L 250,000 VND",
    image: "/images/menu/doya-beef-jjambbong.jpg"
  },
  {
    name: "Sujebi Jjambbong",
    koreanName: "수제비짬뽕",
    vietnameseName: "Mì jjambbong sujebi",
    description: "A spicy red broth jjambbong with chewy hand-torn sujebi dough, vegetables, and Korean-Chinese depth.",
    descriptionVi: "Jjambbong nước đỏ cay với bánh bột sujebi dai, rau và vị đậm kiểu Hàn-Trung.",
    descriptionKo: "쫄깃한 수제비와 채소를 진한 빨간 국물로 즐기는 수제비짬뽕입니다.",
    tags: ["Mì cay", "Sujebi", "Spicy"],
    spice: 2,
    category: "champong",
    price: "M 220,000 / L 250,000 VND",
    image: "/images/menu/doya-sujebi-jjambbong.jpg"
  },
  {
    name: "Soft Tofu Jjambbong",
    koreanName: "순두부짬뽕",
    vietnameseName: "Mì jjambbong đậu hũ non",
    description: "A spicy red broth jjambbong with soft tofu, seafood, vegetables, and Korean-Chinese depth.",
    descriptionVi: "Jjambbong nước đỏ cay với đậu hũ non, hải sản, rau và vị đậm kiểu Hàn-Trung.",
    descriptionKo: "부드러운 순두부와 해산물, 채소를 진한 빨간 국물로 즐기는 순두부짬뽕입니다.",
    tags: ["Mì cay", "Tofu", "Spicy"],
    spice: 2,
    category: "champong",
    price: "M 220,000 / L 250,000 VND",
    image: "/images/menu/doya-soft-tofu-jjambbong.jpg"
  },
  {
    name: "Seafood White Jjambbong",
    koreanName: "해물백짬뽕",
    vietnameseName: "Mì hải sản nước trắng",
    description: "A milder white seafood noodle soup for guests who want seafood depth without heavy chili.",
    descriptionVi: "Mì hải sản nước trắng, vị nhẹ hơn nhưng vẫn đậm vị hải sản.",
    descriptionKo: "매운맛 부담을 줄이고 해산물의 깊은 맛을 살린 해물백짬뽕입니다.",
    tags: ["Seafood", "Mild"],
    spice: 2,
    category: "champong",
    price: "M 220,000 / L 250,000 VND",
    image: "/images/menu/doya-white-seafood-jjambbong.jpg"
  },
  {
    name: "Seafood Jjambbong Platter",
    koreanName: "해물쟁반짬뽕",
    vietnameseName: "Mì jjambbong hải sản đĩa lớn",
    description: "A generous seafood jjambbong platter with noodles, seafood, vegetables, and spicy red sauce.",
    descriptionVi: "Mì jjambbong hải sản đĩa lớn với mì, hải sản, rau và sốt đỏ cay.",
    descriptionKo: "해산물, 채소, 면을 매콤한 빨간 소스와 함께 즐기는 해물쟁반짬뽕입니다.",
    tags: ["Mì cay", "Seafood", "Platter"],
    spice: 2,
    category: "champong",
    price: "M 220,000 / L 420,000 VND",
    image: "/images/menu/doya-seafood-jjambbong-platter.jpg"
  },
  {
    name: "Cream Jjambbong",
    koreanName: "크림짬뽕",
    vietnameseName: "Mì jjambbong kem",
    description: "A creamy jjambbong bowl with seafood, vegetables, and a rich spicy cream broth.",
    descriptionVi: "Mì jjambbong kem với hải sản, rau và nước dùng kem cay béo.",
    descriptionKo: "해산물과 채소를 부드럽고 진한 매콤 크림 국물로 즐기는 크림짬뽕입니다.",
    tags: ["Mì cay", "Cream", "Seafood"],
    spice: 2,
    category: "champong",
    price: "M 220,000 / L 250,000 VND",
    image: "/images/menu/doya-cream-jjambbong.jpg"
  },
  {
    name: "Jajangmyeon",
    detailSlug: "jajangmyeon-mi-tuong-den",
    koreanName: "짜장면",
    vietnameseName: "Mì tương đen Hàn Quốc",
    description: "Korean black bean noodles in Ho Chi Minh, also searched as jajangmyeon Ho Chi Minh and mi tuong den.",
    descriptionVi: "Mì tương đen Hàn Quốc, mi tuong den và jajangmyeon đậm đà, không cay, dễ ăn cho khách muốn vị nhẹ hơn.",
    descriptionKo: "호치민에서 Korean black bean noodles, jajangmyeon, mi tuong den으로 찾기 좋은 한국식 짜장면입니다.",
    tags: ["Mì tương đen Hàn Quốc", "mi tuong den", "jajangmyeon Ho Chi Minh", "Korean black bean noodles"],
    spice: 0,
    category: "jajang",
    featured: true,
    price: "S 90,000 / M 130,000 / L 160,000 VND",
    image: "/images/menu/doya-jajangmyeon.jpg"
  },
  {
    name: "Chili Jajangmyeon",
    koreanName: "고추짜장",
    vietnameseName: "Mì tương đen ớt xanh",
    description: "Black bean noodles with fresh green chili for guests who want jajangmyeon with heat.",
    descriptionVi: "Mì tương đen Hàn Quốc thêm ớt xanh, giữ vị jajangmyeon đậm đà cho khách muốn cay hơn.",
    descriptionKo: "짜장면에 청고추를 올려 매운맛을 더한 메뉴입니다.",
    tags: ["Noodles", "Chili"],
    spice: 2,
    category: "jajang",
    price: "M 180,000 / L 210,000 VND",
    image: "/images/menu/doya-chili-jajangmyeon.jpg"
  },
  {
    name: "Gan Jajang",
    koreanName: "간짜장",
    vietnameseName: "Mì tương đen gan jajang",
    description: "Fresh jajang noodles served with a rich stir-fried black bean sauce on the side.",
    descriptionVi: "Mì tương đen gan jajang, ăn cùng sốt tương đen xào đậm vị để riêng.",
    descriptionKo: "면과 갓 볶은 진한 짜장 소스를 따로 담아 비벼 먹는 간짜장입니다.",
    tags: ["Jajang", "Noodles"],
    spice: 0,
    category: "jajang",
    price: "M 180,000 / L 210,000 VND",
    image: "/images/menu/doya-gan-jajang.jpg"
  },
  {
    name: "Seafood Jajang Platter",
    detailSlug: "seafood-jajang-platter",
    koreanName: "해물쟁반짜장",
    vietnameseName: "Mì tương đen hải sản đĩa lớn",
    description: "A generous seafood jajang platter with noodles, Korean black bean sauce, vegetables, and seafood.",
    descriptionVi: "Mì tương đen hải sản đĩa lớn với rau, hải sản và sốt tương đen Hàn Quốc, phù hợp cho khách tìm mi tuong den hoặc jajangmyeon hải sản.",
    descriptionKo: "해산물, 채소, 면을 진한 짜장 소스와 함께 비벼 먹는 해물쟁반짜장입니다.",
    tags: ["Jajang", "Seafood"],
    spice: 2,
    category: "jajang",
    price: "M 220,000 / L 420,000 VND",
    image: "/images/menu/doya-seafood-jajang-platter.jpg"
  },
  {
    name: "Bulgogi Japchae Rice",
    koreanName: "불고기잡채밥",
    vietnameseName: "Cơm miến xào bulgogi",
    description: "Rice served with bulgogi, stir-fried glass noodles, vegetables, and savory Korean sauce.",
    descriptionVi: "Cơm ăn cùng bò bulgogi, miến xào, rau và sốt kiểu Hàn đậm vị.",
    descriptionKo: "불고기와 잡채를 밥과 함께 든든하게 즐기는 불고기잡채밥입니다.",
    tags: ["Rice", "Bulgogi"],
    spice: 0,
    category: "rice",
    price: "Contact store",
    image: "/images/menu/doya-bulgogi-japchae-rice.jpg"
  },
  {
    name: "Shrimp Fried Rice",
    koreanName: "새우볶음밥",
    vietnameseName: "Cơm chiên tôm",
    description: "Fried rice with shrimp, egg, vegetables, and a savory jajang sauce on the side.",
    descriptionVi: "Cơm chiên tôm với trứng, rau và sốt tương đen đậm đà ăn kèm.",
    descriptionKo: "새우, 계란, 채소를 함께 볶고 짜장 소스를 곁들여 든든하게 먹기 좋은 새우볶음밥입니다.",
    tags: ["Rice", "Shrimp"],
    spice: 0,
    category: "rice",
    price: "Contact store",
    image: "/images/menu/doya-shrimp-fried-rice.jpg"
  },
  {
    name: "Mapo Tofu Rice",
    koreanName: "마파두부밥",
    vietnameseName: "Cơm đậu hũ mapo",
    description: "Rice served with spicy mapo tofu sauce, soft tofu, vegetables, and savory Korean-Chinese heat.",
    descriptionVi: "Cơm ăn cùng đậu hũ mapo cay, rau và sốt đậm vị kiểu Hàn-Trung.",
    descriptionKo: "매콤한 마파두부 소스를 밥과 함께 든든하게 즐기는 마파두부밥입니다.",
    tags: ["Rice", "Tofu"],
    spice: 2,
    category: "rice",
    price: "Contact store",
    image: "/images/menu/doya-mapo-tofu-rice.jpg"
  },
  {
    name: "Tangsuyuk",
    detailSlug: "tangsuyuk-korean-sweet-sour-pork",
    koreanName: "탕수육",
    vietnameseName: "Thịt chiên sốt chua ngọt",
    description: "Korean sweet and sour pork, also searched as tangsuyuk Ho Chi Minh, ideal with jjambbong or jajangmyeon.",
    descriptionVi: "Thịt heo chiên sốt chua ngọt Hàn Quốc, tangsuyuk giòn hợp để ăn chung với mì cay hoặc mì tương đen.",
    descriptionKo: "호치민에서 tangsuyuk, Korean sweet and sour pork로 찾기 좋은 바삭한 한국식 탕수육입니다.",
    tags: ["Tangsuyuk Ho Chi Minh", "Korean sweet and sour pork", "thịt heo chiên sốt chua ngọt Hàn Quốc"],
    spice: 0,
    category: "anju",
    featured: true,
    price: "Contact store",
    image: "/images/menu/doya-tangsuyuk.jpg"
  },
  {
    name: "Kkanpunggi",
    detailSlug: "kkanpunggi-spicy-garlic-fried-chicken",
    koreanName: "깐풍기",
    vietnameseName: "Gà chiên sốt cay tỏi",
    description: "Spicy garlic fried chicken Korean Chinese style, also searched as kkanpunggi Ho Chi Minh.",
    descriptionVi: "Gà chiên sốt cay tỏi kiểu Hàn-Trung, món kkanpunggi hợp để ăn chung với bia hoặc mì cay.",
    descriptionKo: "호치민에서 kkanpunggi, spicy garlic fried chicken Korean Chinese로 찾기 좋은 깐풍기입니다.",
    tags: ["Kkanpunggi Ho Chi Minh", "spicy garlic fried chicken Korean Chinese", "gà chiên sốt cay tỏi"],
    spice: 2,
    category: "anju",
    price: "Contact store",
    image: "/images/menu/doya-kkampoonggi.jpg"
  },
  {
    name: "Chili Shrimp",
    koreanName: "칠리새우",
    vietnameseName: "Tôm sốt chili",
    description: "Crispy shrimp coated in a sweet and spicy chili sauce with sesame and almond garnish.",
    descriptionVi: "Tôm chiên giòn phủ sốt chili cay ngọt, thêm mè và hạnh nhân.",
    descriptionKo: "바삭한 새우튀김에 달콤매콤한 칠리소스를 입힌 칠리새우입니다.",
    tags: ["Shrimp", "Crispy"],
    spice: 2,
    category: "fried",
    price: "Contact store",
    image: "/images/menu/doya-chili-shrimp.jpg"
  },
  {
    name: "Cream Shrimp",
    koreanName: "크림새우",
    vietnameseName: "Tôm sốt kem",
    description: "Crispy shrimp coated in a rich cream sauce with sesame and almond garnish.",
    descriptionVi: "Tôm chiên giòn phủ sốt kem béo, thêm mè và hạnh nhân.",
    descriptionKo: "바삭한 새우튀김에 부드러운 크림소스를 입힌 크림새우입니다.",
    tags: ["Shrimp", "Cream"],
    spice: 0,
    category: "fried",
    price: "Contact store",
    image: "/images/menu/doya-cream-shrimp.jpg"
  },
  {
    name: "Kkanpung Shrimp",
    koreanName: "깐풍새우",
    vietnameseName: "Tôm chiên sốt cay tỏi",
    description: "Crispy shrimp coated in a spicy garlic soy sauce with dried chili and sesame.",
    descriptionVi: "Tôm chiên giòn phủ sốt cay tỏi, ớt khô và mè.",
    descriptionKo: "바삭한 새우튀김에 매콤한 마늘 간장 소스를 입힌 깐풍새우입니다.",
    tags: ["Shrimp", "Crispy"],
    spice: 2,
    category: "fried",
    price: "Contact store",
    image: "/images/menu/doya-kkampoong-shrimp.jpg"
  },
  {
    name: "Menbosha",
    koreanName: "멘보샤",
    vietnameseName: "Bánh mì tôm chiên",
    description: "Crispy shrimp toast served with a sweet chili dipping sauce.",
    descriptionVi: "Bánh mì tôm chiên giòn ăn cùng sốt chili ngọt cay.",
    descriptionKo: "바삭하게 튀긴 새우 토스트를 달콤매콤한 칠리소스와 함께 즐기는 멘보샤입니다.",
    tags: ["Shrimp", "Crispy"],
    spice: 0,
    category: "fried",
    price: "Contact store",
    image: "/images/menu/doya-menbosha.jpg"
  },
  {
    name: "Yuringi",
    koreanName: "유린기",
    vietnameseName: "Gà chiên sốt yuringi",
    description: "Crispy fried chicken with fresh green chili, vegetables, and a tangy soy-based yuringi sauce.",
    descriptionVi: "Gà chiên giòn với ớt xanh, rau và sốt yuringi chua mặn nhẹ.",
    descriptionKo: "바삭한 닭튀김에 청고추와 새콤짭짤한 소스를 곁들인 유린기입니다.",
    tags: ["Chicken", "Crispy"],
    spice: 2,
    category: "anju",
    price: "Contact store",
    image: "/images/menu/doya-yuringi.jpg"
  },
  {
    name: "Boiled Mandu",
    koreanName: "물만두",
    vietnameseName: "Mandu luộc",
    description: "Soft boiled Korean dumplings that work well as a light side or starter.",
    descriptionVi: "Mandu luộc mềm, dễ gọi thêm trước món chính.",
    descriptionKo: "부드럽게 먹기 좋은 물만두 사이드 메뉴입니다.",
    tags: ["Dumplings", "Side"],
    spice: 0,
    category: "side",
    price: "20PC 130,000 VND",
    image: "/images/menu/doya-boiled-mandu.jpg"
  },
  {
    name: "Fried Mandu",
    koreanName: "군만두",
    vietnameseName: "Mandu chiên",
    description: "Crispy fried dumplings for guests who want a simple snack with noodles.",
    descriptionVi: "Mandu chiên giòn, hợp ăn chung với mì cay hoặc mì tương đen.",
    descriptionKo: "면 메뉴와 함께 먹기 좋은 바삭한 군만두입니다.",
    tags: ["Dumplings", "Crispy"],
    spice: 0,
    category: "side",
    price: "4PC 60,000 / 8PC 110,000 VND",
    image: "/images/menu/doya-fried-mandu.jpg"
  },
  {
    name: "Fried Flower Bun",
    koreanName: "꽃빵튀김",
    vietnameseName: "Bánh bao hoa chiên",
    description: "Crispy fried flower buns served with a sweet creamy dipping sauce.",
    descriptionVi: "Bánh bao hoa chiên giòn, ăn cùng sốt kem ngọt nhẹ.",
    descriptionKo: "바삭하게 튀긴 꽃빵을 달콤한 소스와 함께 즐기는 사이드메뉴입니다.",
    tags: ["Side", "Crispy"],
    spice: 0,
    category: "side",
    price: "4PC 80,000 VND",
    image: "/images/menu/doya-fried-flower-bun.jpg"
  },
  {
    name: "Tteokbokki",
    detailSlug: "tteokbokki-korean-spicy-rice-cakes",
    koreanName: "떡볶이",
    vietnameseName: "Tokbokki Hàn Quốc",
    description: "Korean spicy rice cakes in a sweet and spicy red sauce, also searched as tteokbokki Ho Chi Minh, tokbokki, and Korean spicy rice cakes.",
    descriptionVi: "Tokbokki Hàn Quốc, bánh gạo cay Hàn Quốc sốt đỏ ngọt cay, phù hợp cho khách tìm tteokbokki Ho Chi Minh ở Quận 1.",
    descriptionKo: "쫄깃한 떡을 매콤달콤한 빨간 소스에 버무린 한국식 떡볶이입니다. 호치민 1군에서 떡볶이, tokbokki, tteokbokki를 찾는 손님에게 좋은 사이드 메뉴입니다.",
    tags: ["Tteokbokki Ho Chi Minh", "Tokbokki", "Korean spicy rice cakes", "bánh gạo cay Hàn Quốc"],
    spice: 2,
    category: "side",
    price: "80,000 VND",
    image: "/images/menu/doya-tteokbokki.jpg"
  },
  {
    name: "Seafood Nurungji Soup",
    koreanName: "해물 누룽지탕",
    vietnameseName: "Súp hải sản cơm cháy",
    description: "A warm seafood nurungji soup with crispy scorched rice, seafood, and vegetables.",
    descriptionVi: "Súp hải sản cơm cháy nóng với hải sản, rau và miếng cơm cháy giòn.",
    descriptionKo: "바삭한 누룽지와 해산물, 채소를 따뜻한 국물로 즐기는 해물 누룽지탕입니다.",
    tags: ["Seafood", "Soup"],
    spice: 0,
    category: "anju",
    price: "Contact store",
    image: "/images/menu/doya-seafood-nurungji-soup.jpg"
  },
  {
    name: "Seafood Jjambbong Soup",
    koreanName: "해물짬뽕탕",
    vietnameseName: "Súp jjambbong hải sản",
    description: "A spicy seafood jjambbong soup served as a shareable hot pot-style dish.",
    descriptionVi: "Súp jjambbong hải sản cay nóng, phù hợp gọi chung cho nhóm.",
    descriptionKo: "해산물과 진한 빨간 국물을 함께 즐기는 매콤한 해물짬뽕탕입니다.",
    tags: ["Seafood", "Soup"],
    spice: 2,
    category: "anju",
    price: "Contact store",
    image: "/images/menu/doya-seafood-jjambbong-soup.jpg"
  },
  {
    name: "Mapo Tofu",
    koreanName: "마파두부",
    vietnameseName: "Đậu hũ mapo",
    description: "Soft tofu simmered in a spicy, savory mapo sauce with Korean-Chinese depth.",
    descriptionVi: "Đậu hũ mềm nấu cùng sốt mapo cay đậm vị kiểu Hàn-Trung.",
    descriptionKo: "부드러운 두부에 매콤하고 진한 마파 소스를 더한 단품 마파두부입니다.",
    tags: ["Tofu", "Spicy"],
    spice: 2,
    category: "anju",
    price: "Contact store",
    image: "/images/menu/doya-mapo-tofu.jpg"
  },
  {
    name: "Yangjangpi",
    koreanName: "양장피",
    vietnameseName: "Yangjangpi hải sản",
    description: "A colorful seafood and vegetable platter served with Korean-Chinese mustard sauce.",
    descriptionVi: "Đĩa hải sản và rau nhiều màu ăn cùng sốt mù tạt kiểu Hàn-Trung.",
    descriptionKo: "해산물, 채소, 계란지단을 겨자소스와 함께 즐기는 양장피입니다.",
    tags: ["Seafood", "Platter"],
    spice: 0,
    category: "anju",
    price: "Contact store",
    image: "/images/menu/doya-yangjangpi.jpg"
  },
  {
    name: "Passion Fruit Soda",
    koreanName: "패션후르츠 소다",
    vietnameseName: "Soda chanh dây",
    description: "Passion fruit soda for guests looking for refreshing drinks at a Korean restaurant in District 1 Ho Chi Minh near Bui Vien and Ben Thanh.",
    descriptionVi: "Soda chanh dây mát lạnh tại DOYA JJAMBBONG Quận 1, dễ gọi cùng mì cay Hàn Quốc, jjambbong hoặc món chiên.",
    descriptionKo: "호치민 1군 도야짬뽕에서 짬뽕, 짜장, 튀김메뉴와 함께 마시기 좋은 상큼한 패션후르츠 소다입니다.",
    tags: ["Drink", "Soda", "District 1"],
    spice: 0,
    category: "drink",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/passion-fruit-soda.jpg"
  },
  {
    name: "Strawberry Soda",
    koreanName: "딸기 소다",
    vietnameseName: "Soda dâu",
    description: "Sweet strawberry soda for lunch, dinner, or late-night Korean food in District 1.",
    descriptionVi: "Soda dâu ngọt nhẹ, hợp với món cay, tangsuyuk và đồ chiên tại nhà hàng Hàn Quốc Quận 1.",
    descriptionKo: "매운 짬뽕이나 튀김메뉴와 잘 어울리는 달콤한 딸기 소다입니다.",
    tags: ["Drink", "Soda", "Strawberry"],
    spice: 0,
    category: "drink",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/strawberry-soda.jpg"
  },
  {
    name: "Blueberry Soda",
    koreanName: "블루베리 소다",
    vietnameseName: "Soda việt quất",
    description: "Blueberry soda on the DOYA drinks menu for visitors near Bui Thi Xuan and Ben Thanh.",
    descriptionVi: "Soda việt quất mát lạnh, dễ uống cùng mì cay, mì tương đen jajangmyeon hoặc món tôm chiên.",
    descriptionKo: "호치민 1군 식사 후 가볍게 마시기 좋은 블루베리 소다입니다.",
    tags: ["Drink", "Soda", "Blueberry"],
    spice: 0,
    category: "drink",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/blueberry-soda.jpg"
  },
  {
    name: "Lemon Tea",
    koreanName: "레몬 티",
    vietnameseName: "Trà chanh",
    description: "Lemon tea for a lighter drink choice with Korean-Chinese food in Ho Chi Minh City.",
    descriptionVi: "Trà chanh thanh mát, hợp với bữa trưa, bữa tối hoặc takeaway quanh Quận 1.",
    descriptionKo: "식사와 함께 산뜻하게 마시기 좋은 레몬 티입니다.",
    tags: ["Drink", "Tea", "Lemon"],
    spice: 0,
    category: "drink",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/lemon-tea.jpg"
  },
  {
    name: "Milk Tea",
    koreanName: "밀크티",
    vietnameseName: "Trà sữa",
    description: "Milk tea on the DOYA beverage menu near Bui Vien and District 1 hotels.",
    descriptionVi: "Trà sữa dễ uống sau bữa ăn Hàn-Trung tại DOYA JJAMBBONG Quận 1.",
    descriptionKo: "도야짬뽕 식사 후 디저트처럼 마시기 좋은 밀크티입니다.",
    tags: ["Drink", "Milk Tea", "Cafe"],
    spice: 0,
    category: "drink",
    price: "44,000 VND",
    image: "/images/menu/drinks/styled/milk-tea.jpg"
  },
  {
    name: "Thai Milk Tea",
    koreanName: "타이 밀크티",
    vietnameseName: "Trà sữa Thái",
    description: "Thai milk tea for guests searching drinks with Korean food in District 1.",
    descriptionVi: "Trà sữa Thái đậm vị, hợp với món cay và đồ chiên tại DOYA.",
    descriptionKo: "진한 향과 달콤함이 있는 타이 밀크티입니다.",
    tags: ["Drink", "Thai Milk Tea", "Cafe"],
    spice: 0,
    category: "drink",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/thai-milk-tea.jpg"
  },
  {
    name: "Orange Juice",
    koreanName: "오렌지 주스",
    vietnameseName: "Nước cam",
    description: "Orange juice for families, tourists, and non-spicy menu guests at DOYA District 1.",
    descriptionVi: "Nước cam dễ uống cho khách đi cùng gia đình, khách du lịch và bữa ăn nhẹ hơn.",
    descriptionKo: "가족 손님과 관광객도 편하게 고르기 좋은 오렌지 주스입니다.",
    tags: ["Drink", "Juice", "Orange"],
    spice: 0,
    category: "drink",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/orange-juice.jpg"
  },
  {
    name: "Peach Tea",
    koreanName: "복숭아티",
    vietnameseName: "Trà đào",
    description: "Peach tea for guests who want a sweet tea with jjambbong, jajangmyeon, or fried dishes.",
    descriptionVi: "Trà đào ngọt thơm, hợp với mì cay, mì tương đen jajangmyeon và món chiên.",
    descriptionKo: "짬뽕, 짜장면, 튀김메뉴와 함께 마시기 좋은 복숭아티입니다.",
    tags: ["Drink", "Tea", "Peach"],
    spice: 0,
    category: "drink",
    price: "54,000 VND",
    image: "/images/menu/drinks/styled/peach-tea.jpg"
  },
  {
    name: "Coke",
    koreanName: "콜라",
    vietnameseName: "Coke",
    description: "Classic Coke with Korean-Chinese food, fried dishes, and delivery orders in District 1.",
    descriptionVi: "Coke dùng cùng món chiên, mì cay và đơn takeaway quanh Quận 1.",
    descriptionKo: "튀김메뉴, 짬뽕, 배달 주문과 잘 맞는 콜라입니다.",
    tags: ["Drink", "Coke", "Delivery"],
    spice: 0,
    category: "drink",
    price: "30,000 VND",
    image: "/images/menu/drinks/styled/coke.jpg"
  },
  {
    name: "Coke Zero",
    koreanName: "제로콜라",
    vietnameseName: "Coke zero",
    description: "Coke Zero for guests who want a lighter soda with Korean food in Ho Chi Minh.",
    descriptionVi: "Coke Zero cho khách muốn đồ uống nhẹ hơn khi ăn món Hàn-Trung.",
    descriptionKo: "가볍게 마시기 좋은 제로콜라입니다.",
    tags: ["Drink", "Coke Zero", "Soda"],
    spice: 0,
    category: "drink",
    price: "30,000 VND",
    image: "/images/menu/drinks/styled/coke-zero.jpg"
  },
  {
    name: "Sprite",
    koreanName: "스프라이트",
    vietnameseName: "Sprite",
    description: "Sprite for spicy noodles, fried shrimp, and tangsuyuk at DOYA JJAMBBONG.",
    descriptionVi: "Sprite mát lạnh dùng cùng mì cay, tôm chiên và tangsuyuk.",
    descriptionKo: "매운 메뉴와 튀김류에 잘 어울리는 스프라이트입니다.",
    tags: ["Drink", "Sprite", "Soda"],
    spice: 0,
    category: "drink",
    price: "30,000 VND",
    image: "/images/menu/drinks/styled/sprite.jpg"
  },
  {
    name: "Soda Water",
    koreanName: "탄산수",
    vietnameseName: "Soda",
    description: "Soda water for guests who want a clean sparkling drink with Korean-Chinese food.",
    descriptionVi: "Soda không ngọt, dễ uống cùng bữa ăn Hàn-Trung tại Quận 1.",
    descriptionKo: "깔끔한 탄산감으로 식사와 함께 마시기 좋은 탄산수입니다.",
    tags: ["Drink", "Soda Water", "Sparkling"],
    spice: 0,
    category: "drink",
    price: "30,000 VND",
    image: "/images/menu/drinks/styled/soda-water.jpg"
  },
  {
    name: "Jinro Soju",
    koreanName: "진로 소주",
    vietnameseName: "Soju Jinro",
    description: "Jinro soju at a Korean restaurant in District 1, Ho Chi Minh, near Bui Vien and Ben Thanh.",
    descriptionVi: "Soju Jinro tại nhà hàng Hàn Quốc Quận 1, hợp với tangsuyuk, jjambbong soup và món nhậu.",
    descriptionKo: "호치민 1군 도야짬뽕에서 술안주 메뉴와 함께 즐기기 좋은 진로 소주입니다.",
    tags: ["Soju", "Korean alcohol", "District 1"],
    spice: 0,
    category: "alcohol",
    price: "150,000 VND",
    image: "/images/menu/drinks/styled/jinro-soju.jpg"
  },
  {
    name: "Chamisul Soju",
    koreanName: "참이슬",
    vietnameseName: "Soju Chamisul",
    description: "Chamisul soju for Korean food, drinking snacks, and late-night dining in District 1.",
    descriptionVi: "Soju Chamisul dùng cùng món nhậu Hàn-Trung và bữa tối quanh Bùi Thị Xuân.",
    descriptionKo: "탕수육, 유린기, 짬뽕탕과 함께 즐기기 좋은 참이슬입니다.",
    tags: ["Soju", "Chamisul", "Korean restaurant"],
    spice: 0,
    category: "alcohol",
    price: "150,000 VND",
    image: "/images/menu/drinks/styled/chamisul-soju.jpg"
  },
  {
    name: "Saero Soju",
    koreanName: "새로 소주",
    vietnameseName: "Soju Saero",
    description: "Saero soju for guests looking for Korean soju in Ho Chi Minh District 1.",
    descriptionVi: "Soju Saero cho khách tìm soju Hàn Quốc tại Quận 1 TP. Hồ Chí Minh.",
    descriptionKo: "호치민 1군에서 한국 소주를 찾는 손님을 위한 새로 소주입니다.",
    tags: ["Soju", "Saero", "Korean alcohol"],
    spice: 0,
    category: "alcohol",
    price: "150,000 VND",
    image: "/images/menu/drinks/styled/saero-soju.jpg"
  },
  {
    name: "Good Day Fruit Soju",
    koreanName: "굿데이 과일맛소주",
    vietnameseName: "Soju Good Day vị trái cây",
    description: "Good Day fruit soju for guests searching Korean fruit soju, soju with anju, and Korean drinks in District 1 Ho Chi Minh.",
    descriptionVi: "Soju Good Day vị trái cây dành cho khách tìm soju Hàn Quốc, đồ uống Hàn và món nhậu tại Quận 1.",
    descriptionKo: "굿데이 과일맛소주는 탕수육, 유린기, 깐풍기 같은 술안주와 함께 가볍게 즐기기 좋은 한국 과일소주입니다.",
    tags: ["Fruit soju", "Korean soju", "Anju"],
    spice: 0,
    category: "alcohol",
    price: "150,000 VND",
    image: "/images/menu/drinks/styled/good-day-soju.jpg"
  },
  {
    name: "Tiger Beer",
    koreanName: "타이거 맥주",
    vietnameseName: "Bia Tiger",
    description: "Tiger beer with fried chicken, tangsuyuk, shrimp dishes, and Korean-Chinese snacks.",
    descriptionVi: "Bia Tiger hợp với gà chiên, tangsuyuk, tôm chiên và món nhậu.",
    descriptionKo: "튀김메뉴와 술안주 메뉴에 잘 어울리는 타이거 맥주입니다.",
    tags: ["Beer", "Tiger", "Anju"],
    spice: 0,
    category: "alcohol",
    price: "40,000 VND",
    image: "/images/menu/drinks/styled/tiger-beer.jpg"
  },
  {
    name: "Yantai Guniang Liquor",
    koreanName: "연태 고량주",
    vietnameseName: "Yantai Guniang",
    description: "Yantai liquor for Korean-Chinese dining, seafood soup, yangjangpi, and spicy sharing dishes.",
    descriptionVi: "Rượu Yantai Guniang dùng cùng món Hàn-Trung, yangjangpi, hải sản và món nhậu cay.",
    descriptionKo: "양장피, 해물짬뽕탕, 술안주 메뉴와 잘 어울리는 연태 고량주입니다.",
    tags: ["Liquor", "Yantai", "Korean Chinese food"],
    spice: 0,
    category: "alcohol",
    price: "290,000 / 390,000 / 710,000 VND",
    image: "/images/menu/drinks/styled/yantai-guniang.jpg"
  },
  {
    name: "Tsingtao Beer",
    koreanName: "칭따오",
    vietnameseName: "Bia Tsing Tao",
    description: "Tsingtao beer for Korean-Chinese fried dishes and spicy seafood noodles in District 1.",
    descriptionVi: "Bia Tsingtao dùng cùng đồ chiên, mì cay hải sản và món nhậu Hàn-Trung.",
    descriptionKo: "중식당 메뉴와 잘 맞는 칭따오 맥주입니다.",
    tags: ["Beer", "Tsingtao", "Chinese food"],
    spice: 0,
    category: "alcohol",
    price: "90,000 VND",
    image: "/images/menu/drinks/styled/tsingtao-beer.jpg"
  },
  {
    name: "House Red Wine",
    koreanName: "하우스 레드 와인",
    vietnameseName: "House Red Wine",
    description: "House red wine for dinner, sharing dishes, and a relaxed Korean-Chinese meal in District 1.",
    descriptionVi: "House red wine cho bữa tối, món chia sẻ và nhóm khách muốn uống nhẹ.",
    descriptionKo: "저녁 식사와 나눠 먹는 메뉴에 곁들이기 좋은 하우스 레드 와인입니다.",
    tags: ["Wine", "Dinner", "District 1"],
    spice: 0,
    category: "alcohol",
    price: "130,000 VND",
    image: "/images/menu/drinks/styled/house-red-wine.jpg"
  },
  {
    name: "Lemon Highball",
    koreanName: "레몬 하이볼",
    vietnameseName: "Highball chanh",
    description: "Lemon highball for guests looking for highball and Korean food near Bui Vien.",
    descriptionVi: "Highball chanh mát nhẹ, hợp với món chiên và bữa tối gần Bui Vien.",
    descriptionKo: "부이비엔 근처에서 가볍게 마시기 좋은 레몬 하이볼입니다.",
    tags: ["Highball", "Lemon", "Bui Vien"],
    spice: 0,
    category: "alcohol",
    price: "88,000 VND",
    image: "/images/menu/drinks/styled/lemon-highball.jpg"
  },
  {
    name: "Earl Grey Highball",
    koreanName: "얼그레이 하이볼",
    vietnameseName: "Earl Grey Highball",
    description: "Earl Grey highball with a tea aroma for dinner and drinking snacks in District 1.",
    descriptionVi: "Earl Grey Highball thơm mùi trà, hợp với món nhậu và bữa tối Quận 1.",
    descriptionKo: "향긋한 얼그레이 풍미가 있는 하이볼입니다.",
    tags: ["Highball", "Earl Grey", "Anju"],
    spice: 0,
    category: "alcohol",
    price: "99,000 VND",
    image: "/images/menu/drinks/styled/earl-grey-highball.jpg"
  },
  {
    name: "Americano",
    koreanName: "아메리카노",
    vietnameseName: "Cà phê Americano",
    description: "Americano coffee after Korean-Chinese food at DOYA JJAMBBONG District 1.",
    descriptionVi: "Cà phê Americano sau bữa ăn Hàn-Trung tại DOYA JJAMBBONG Quận 1.",
    descriptionKo: "도야짬뽕 식사 후 마시기 좋은 아메리카노입니다.",
    tags: ["Coffee", "Cafe", "Americano"],
    spice: 0,
    category: "coffee",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/americano.jpg"
  },
  {
    name: "Caffe Latte",
    koreanName: "카페라떼",
    vietnameseName: "Caffe Latte",
    description: "Caffe latte for guests searching cafe drinks at a Korean restaurant in Ho Chi Minh.",
    descriptionVi: "Caffe Latte cho khách muốn uống cà phê sau bữa ăn ở Quận 1.",
    descriptionKo: "식사 후 부드럽게 마시기 좋은 카페라떼입니다.",
    tags: ["Coffee", "Latte", "Cafe"],
    spice: 0,
    category: "coffee",
    price: "54,000 VND",
    image: "/images/menu/drinks/styled/caffe-latte.jpg"
  },
  {
    name: "Coconut Coffee",
    koreanName: "코코넛 커피",
    vietnameseName: "Cà phê dừa",
    description: "Coconut coffee for tourists looking for Vietnamese cafe flavors after Korean food in District 1.",
    descriptionVi: "Cà phê dừa cho khách du lịch muốn vị cà phê Việt sau món Hàn-Trung.",
    descriptionKo: "베트남식 카페 메뉴를 찾는 관광객에게 좋은 코코넛 커피입니다.",
    tags: ["Coffee", "Coconut", "Vietnam cafe"],
    spice: 0,
    category: "coffee",
    price: "54,000 VND",
    image: "/images/menu/drinks/styled/coconut-coffee.jpg"
  },
  {
    name: "Lemon Coffee",
    koreanName: "레몬 커피",
    vietnameseName: "Cà phê chanh",
    description: "Lemon coffee for a bright cafe drink after jjambbong, jajangmyeon, or fried dishes.",
    descriptionVi: "Cà phê chanh lạ miệng, hợp để uống sau mì cay hoặc món chiên.",
    descriptionKo: "상큼한 레몬 향이 있는 레몬 커피입니다.",
    tags: ["Coffee", "Lemon", "Cafe"],
    spice: 0,
    category: "coffee",
    price: "54,000 VND",
    image: "/images/menu/drinks/styled/lemon-coffee.jpg"
  },
  {
    name: "Salt Coffee",
    koreanName: "소금 커피",
    vietnameseName: "Cà phê muối",
    description: "Salt coffee for guests searching cafe menu and Korean food near Ben Thanh District 1.",
    descriptionVi: "Cà phê muối cho khách tìm cafe menu gần Bến Thành và Bùi Thị Xuân.",
    descriptionKo: "벤탄, 부이티쑤언 근처에서 식사 후 마시기 좋은 소금 커피입니다.",
    tags: ["Coffee", "Salt coffee", "Ben Thanh"],
    spice: 0,
    category: "coffee",
    price: "54,000 VND",
    image: "/images/menu/drinks/styled/salt-coffee.jpg"
  },
  {
    name: "Condensed Milk Coffee",
    koreanName: "연유 커피",
    vietnameseName: "Cà phê sữa đặc",
    description: "Vietnamese condensed milk coffee served after Korean-Chinese meals in District 1.",
    descriptionVi: "Cà phê sữa đặc Việt Nam, hợp để kết thúc bữa ăn tại DOYA.",
    descriptionKo: "진한 베트남식 연유 커피입니다.",
    tags: ["Coffee", "Vietnamese coffee", "Cafe"],
    spice: 0,
    category: "coffee",
    price: "49,000 VND",
    image: "/images/menu/drinks/styled/condensed-milk-coffee.jpg"
  },
  {
    name: "Matcha Latte",
    koreanName: "말차라떼",
    vietnameseName: "Matcha Latte",
    description: "Matcha latte for guests who want a sweet cafe drink after spicy noodles or fried food.",
    descriptionVi: "Matcha Latte ngọt nhẹ, hợp sau món cay hoặc món chiên.",
    descriptionKo: "매운 메뉴 뒤에 부드럽게 마시기 좋은 말차라떼입니다.",
    tags: ["Cafe", "Matcha", "Latte"],
    spice: 0,
    category: "coffee",
    price: "54,000 VND",
    image: "/images/menu/drinks/styled/matcha-latte.jpg"
  },
  {
    name: "Strawberry Matcha Latte",
    koreanName: "딸기 말차라떼",
    vietnameseName: "Matcha dâu latte",
    description: "Strawberry matcha latte on the DOYA cafe menu for dessert-style drinks in District 1.",
    descriptionVi: "Matcha dâu latte như món tráng miệng nhẹ sau bữa ăn Hàn-Trung.",
    descriptionKo: "디저트처럼 즐기기 좋은 딸기 말차라떼입니다.",
    tags: ["Cafe", "Matcha", "Strawberry"],
    spice: 0,
    category: "coffee",
    price: "59,000 VND",
    image: "/images/menu/drinks/styled/strawberry-matcha-latte.jpg"
  }
];
