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
  "Korean restaurant Ho Chi Minh",
  "Korean restaurant Saigon",
  "Best Korean restaurant District 1",
  "best Korean food in Saigon",
  "Korean restaurant near Ben Thanh",
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
  "Korean restaurant near Ben Thanh Market",
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
  "ホーチミン 韓国料理",
  "ホーチミン 韓国料理 1区",
  "ホーチミン 韓国中華",
  "ホーチミン チャンポン",
  "ホーチミン ジャージャー麺",
  "韓国式海鮮ラーメン ホーチミン",
  "ベンタイン市場 韓国料理",
  "ブイビエン 韓国料理",
  "ホーチミン 深夜 韓国料理",
  "ホーチミン 出前 韓国料理",
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

const localeKeywordMap: Record<Locale, string[]> = {
  vi: [],
  ko: [],
  en: [
    "Korean restaurant District 1 Ho Chi Minh",
    "Korean restaurant in District 1",
    "Korean food District 1 Ho Chi Minh",
    "Korean-Chinese restaurant District 1",
    "Korean Chinese restaurant Saigon",
    "Korean food near Ben Thanh Market",
    "Korean restaurant near Bui Vien walking street",
    "Korean food near Pham Ngu Lao",
    "Korean spicy seafood noodles District 1",
    "jjambbong District 1",
    "jjamppong District 1",
    "champong near Ben Thanh",
    "jajangmyeon District 1",
    "Korean black bean noodles near Ben Thanh",
    "tangsuyuk Ho Chi Minh",
    "late night Korean food District 1",
    "Korean hangover soup Saigon",
    "where to eat Korean food after drinks in Saigon",
    "Korean noodles near Bui Vien",
    "Korean restaurant open late District 1"
  ],
  zh: [
    "胡志明市韩国餐厅",
    "胡志明市第1郡韩国餐厅",
    "胡志明市一区韩国餐厅",
    "第1郡韩国料理",
    "胡志明市韩式中餐",
    "第1郡韩式中餐",
    "胡志明市韩国中餐",
    "胡志明市韩式辣海鲜面",
    "胡志明市辣海鲜面",
    "胡志明市 champong",
    "胡志明市 jjambbong",
    "第1郡 champong",
    "第1郡 jjambbong",
    "胡志明市韩式炸酱面",
    "胡志明市炸酱面",
    "第1郡韩式炸酱面",
    "韩国黑豆面 胡志明市",
    "韩国糖醋肉 胡志明市",
    "滨城市场附近韩国餐厅",
    "Bui Vien 附近韩国餐厅",
    "范五老街附近韩国餐厅",
    "胡志明市韩国夜宵",
    "第1郡韩国夜宵",
    "胡志明市醒酒辣面",
    "胡志明市深夜韩国餐厅"
  ],
  ja: [
    "ホーチミン 韓国料理",
    "ホーチミン1区 韓国料理",
    "ホーチミン 韓国料理 1区",
    "ホーチミン 韓国料理店",
    "ホーチミン 韓国中華",
    "ホーチミン 韓国式中華",
    "ホーチミン チャンポン",
    "ホーチミン 辛いチャンポン",
    "ホーチミン 韓国式海鮮ラーメン",
    "ホーチミン 辛い海鮮麺",
    "ホーチミン ジャージャー麺",
    "ホーチミン 韓国式ジャージャー麺",
    "ホーチミン Jajangmyeon",
    "ホーチミン タンスユク",
    "ベンタイン市場 韓国料理",
    "ベンタイン市場近く 韓国料理",
    "ブイビエン 韓国料理",
    "ブイビエン近く 韓国料理",
    "ファングーラオ 韓国料理",
    "ホーチミン 深夜 韓国料理",
    "ホーチミン 夜食 韓国料理",
    "ホーチミン 韓国料理 デリバリー"
  ]
};

const pageKeywordMap: Partial<Record<PageSlug, string[]>> = {
  "": [
    "Korean restaurant Ho Chi Minh",
    "Korean restaurant District 1",
    "Korean food District 1",
    "best Korean food in Saigon",
    "Chinese food District 1",
    "champong District 1",
    "Mì cay Quận 1",
    "Korean food near Bui Vien",
    "Korean restaurant near Ben Thanh",
    "Korean food near District 3"
  ],
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
  "best-champong-district-1-ho-chi-minh": [
    "best champong District 1",
    "champong District 1 Ho Chi Minh",
    "jjambbong near Ben Thanh",
    "jjamppong District 1",
    "Korean spicy seafood noodles District 1",
    "mì cay hải sản Quận 1",
    "champong near Bui Vien"
  ],
  "mi-tuong-den-quan-1-gan-bui-vien": [
    "mi tuong den Quan 1",
    "mì tương đen gần Bùi Viện",
    "jajangmyeon near Bui Vien",
    "Korean black bean noodles near Bui Vien",
    "mì tương đen Hàn Quốc Quận 1",
    "jajangmyeon District 1",
    "non spicy Korean noodles District 1"
  ],
  "jajangmyeon-jjambbong-district-1": [
    "jajangmyeon and jjambbong District 1",
    "Korean Chinese noodles District 1",
    "Korean black bean noodles and spicy seafood noodles",
    "jajangmyeon jjambbong Ho Chi Minh",
    "짜장면 짬뽕 호치민",
    "mì tương đen và champong"
  ],
  "korean-noodles-near-ben-thanh-market": [
    "Korean noodles near Ben Thanh Market",
    "Korean food near Ben Thanh Market",
    "jjambbong near Ben Thanh",
    "jajangmyeon near Ben Thanh",
    "Korean restaurant near Ben Thanh",
    "mì Hàn gần chợ Bến Thành"
  ],
  "korean-restaurant-near-bui-vien-walking-street": [
    "Korean restaurant near Bui Vien Walking Street",
    "Korean food near Pham Ngu Lao",
    "Korean food near Bui Vien",
    "late night Korean food District 1",
    "jjambbong near Bui Vien",
    "jajangmyeon near Bui Vien",
    "quán Hàn gần Bùi Viện"
  ],
  "korean-chinese-food-ho-chi-minh": [
    "Korean restaurant Ho Chi Minh",
    "Korean restaurant District 1",
    "Korean food Ho Chi Minh",
    "Korean food Saigon",
    "best Korean food in Saigon",
    "Korean Chinese food Ho Chi Minh",
    "Korean style Chinese food",
    "Chinese Korean restaurant",
    "Korean restaurant near Ben Thanh",
    "Korean restaurant near Bui Vien",
    "mì tương đen Hàn Quốc",
    "mi tuong den Han Quoc",
    "jajangmyeon Ho Chi Minh"
  ],
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

const pageLocaleKeywordMap: Partial<Record<PageSlug, Partial<Record<Locale, string[]>>>> = {
  "": {
    en: [
      "best Korean restaurant District 1 Ho Chi Minh",
      "Korean restaurant near Ben Thanh and Bui Vien",
      "Korean-Chinese food District 1 Saigon"
    ],
    zh: ["胡志明市第1郡韩国餐厅", "滨城市场附近韩国餐厅", "Bui Vien 附近韩国餐厅", "胡志明市韩式中餐"],
    ja: ["ホーチミン1区 韓国料理", "ベンタイン市場 韓国料理", "ブイビエン 韓国料理", "ホーチミン 韓国中華"]
  },
  menu: {
    en: ["DOYA JJAMBBONG menu English", "Korean Chinese menu District 1", "champong jajangmyeon tangsuyuk menu"],
    zh: ["DOYA 菜单", "胡志明市韩国餐厅菜单", "韩式炸酱面菜单", "辣海鲜面菜单", "糖醋肉菜单"],
    ja: ["DOYA メニュー", "ホーチミン 韓国料理 メニュー", "チャンポン メニュー", "ジャージャー麺 メニュー", "タンスユク メニュー"]
  },
  "mi-tuong-den-han-quoc-quan-1": {
    en: ["jajangmyeon Ho Chi Minh", "jajangmyeon District 1", "Korean black bean noodles Saigon", "non spicy Korean noodles District 1"],
    zh: ["胡志明市韩式炸酱面", "第1郡韩式炸酱面", "韩国黑豆面 胡志明市", "不辣韩国面 胡志明市"],
    ja: ["ホーチミン ジャージャー麺", "ホーチミン 韓国式ジャージャー麺", "ホーチミン 黒味噌麺", "辛くない韓国料理 ホーチミン"]
  },
  "signature-jjambbong": {
    en: ["signature jjambbong District 1", "spicy seafood jjambbong Ho Chi Minh", "Korean spicy seafood soup Saigon"],
    zh: ["招牌辣海鲜面 胡志明市", "胡志明市韩式辣海鲜面", "第1郡辣海鲜汤面"],
    ja: ["看板チャンポン ホーチミン", "ホーチミン 辛い海鮮チャンポン", "韓国式辛い海鮮麺 ホーチミン"]
  },
  "champong-korean-chinese-food-ho-chi-minh": {
    en: ["champong Ho Chi Minh", "champong District 1", "jjamppong Saigon", "jjambbong near Ben Thanh"],
    zh: ["胡志明市 champong", "第1郡 champong", "胡志明市 jjambbong", "韩国辣海鲜面 胡志明市"],
    ja: ["ホーチミン チャンポン", "ホーチミン 韓国チャンポン", "ホーチミン 韓国式海鮮ラーメン", "ホーチミン 辛い海鮮麺"]
  },
  "best-champong-district-1-ho-chi-minh": {
    en: ["best champong District 1", "champong near Ben Thanh", "jjambbong near Bui Vien", "Korean spicy seafood noodles District 1"],
    vi: ["champong Quận 1", "mì cay hải sản Quận 1", "mì jjambbong gần Bến Thành", "champong gần Bùi Viện"],
    ko: ["호치민 1군 champong", "호치민 1군 짬뽕", "벤탄 근처 짬뽕", "부이비엔 근처 짬뽕"],
    zh: ["胡志明市第1郡 champong", "第1郡韩式辣海鲜面", "滨城市场附近辣海鲜面", "Bui Vien 附近 champong"],
    ja: ["ホーチミン1区 チャンポン", "ベンタイン市場近く チャンポン", "ブイビエン近く チャンポン", "ホーチミン 韓国式海鮮ラーメン"]
  },
  "mi-tuong-den-quan-1-gan-bui-vien": {
    en: ["mi tuong den Quan 1", "jajangmyeon near Bui Vien", "Korean black bean noodles near Pham Ngu Lao"],
    vi: ["mì tương đen Quận 1", "mi tuong den gan Bui Vien", "mì tương đen gần Phạm Ngũ Lão", "jajangmyeon gần Bến Thành"],
    ko: ["부이비엔 근처 짜장면", "호치민 1군 짜장면", "벤탄 근처 짜장면", "mi tuong den 한식"],
    zh: ["Bui Vien 附近韩式炸酱面", "第1郡韩式炸酱面", "胡志明市韩国黑豆面", "不辣韩国面 Bui Vien"],
    ja: ["ブイビエン近く ジャージャー麺", "ホーチミン1区 韓国式ジャージャー麺", "ベンタイン近く Jajangmyeon", "辛くない韓国麺 ホーチミン"]
  },
  "jajangmyeon-jjambbong-district-1": {
    en: ["jajangmyeon and jjambbong District 1", "Korean Chinese noodles Ho Chi Minh", "black bean noodles and spicy seafood noodles"],
    vi: ["jajangmyeon và jjambbong Quận 1", "mì tương đen và mì cay Hàn Quốc", "Korean Chinese noodles Quận 1"],
    ko: ["호치민 짜장면 짬뽕", "호치민 1군 짜장면 짬뽕", "한국식 중화요리 호치민", "Korean Chinese noodles District 1"],
    zh: ["胡志明市炸酱面和辣海鲜面", "第1郡韩式中餐面", "jajangmyeon jjambbong 胡志明市"],
    ja: ["ホーチミン ジャージャー麺 チャンポン", "ホーチミン1区 韓国中華麺", "Jajangmyeon Jjambbong District 1"]
  },
  "korean-noodles-near-ben-thanh-market": {
    en: ["Korean noodles near Ben Thanh Market", "Korean restaurant near Ben Thanh Market", "jjambbong near Ben Thanh"],
    vi: ["mì Hàn gần chợ Bến Thành", "mì cay Hàn Quốc gần Bến Thành", "mì tương đen gần Bến Thành"],
    ko: ["벤탄시장 근처 한국식 면요리", "벤탄 근처 짬뽕", "벤탄 근처 짜장면", "호치민 벤탄 한식당"],
    zh: ["滨城市场附近韩式面", "滨城市场附近韩国餐厅", "滨城市场附近韩式炸酱面", "Ben Thanh 韩式辣海鲜面"],
    ja: ["ベンタイン市場近く 韓国麺", "ベンタイン市場 韓国料理", "ベンタイン近く チャンポン", "ベンタイン近く ジャージャー麺"]
  },
  "korean-restaurant-near-bui-vien-walking-street": {
    en: ["Korean restaurant near Bui Vien Walking Street", "Korean food near Pham Ngu Lao", "late night Korean food near Bui Vien"],
    vi: ["quán Hàn gần Bùi Viện", "món Hàn gần Phạm Ngũ Lão", "ăn khuya Hàn Quốc Quận 1", "mì cay gần Bùi Viện"],
    ko: ["부이비엔 근처 한식당", "팜응우라오 근처 한식", "호치민 1군 야식", "부이비엔 근처 짬뽕"],
    zh: ["Bui Vien 附近韩国餐厅", "范五老街附近韩国餐厅", "第1郡韩国夜宵", "Bui Vien 附近韩式中餐"],
    ja: ["ブイビエン近く 韓国料理", "ファングーラオ 韓国料理", "ホーチミン1区 夜食 韓国料理", "ブイビエン近く 韓国中華"]
  },
  "korean-chinese-food-ho-chi-minh": {
    en: ["Korean Chinese food District 1", "Korean-Chinese restaurant near Ben Thanh", "Korean food and Chinese food Ho Chi Minh"],
    zh: ["胡志明市韩式中餐", "第1郡韩式中餐", "胡志明市韩国中餐", "韩国餐厅第1郡"],
    ja: ["ホーチミン 韓国中華", "ホーチミン 韓国式中華", "ホーチミン1区 韓国料理", "韓国料理と中華 ホーチミン"]
  },
  "korean-food-delivery-ho-chi-minh": {
    en: ["Korean food delivery District 1", "Korean food reservation Ho Chi Minh", "jjambbong delivery District 1", "KakaoTalk Korean food order"],
    zh: ["胡志明市韩国外卖", "第1郡韩国外卖", "韩国餐厅预订 胡志明市", "辣海鲜面外卖 胡志明市"],
    ja: ["ホーチミン 韓国料理 デリバリー", "ホーチミン 韓国料理 予約", "チャンポン デリバリー ホーチミン", "Zalo 韓国料理 注文"]
  },
  "late-night-korean-food-ho-chi-minh": {
    en: ["late night Korean food District 1", "Korean restaurant open late Saigon", "food after drinking near Bui Vien", "late night noodles Ho Chi Minh"],
    zh: ["胡志明市韩国夜宵", "第1郡韩国夜宵", "Bui Vien 附近夜宵", "深夜韩国餐厅 胡志明市"],
    ja: ["ホーチミン 深夜 韓国料理", "ホーチミン 夜食 韓国料理", "ブイビエン 夜食 韓国料理", "深夜営業 韓国料理 ホーチミン"]
  },
  "hangover-spicy-noodles-saigon": {
    en: ["Korean hangover soup Saigon", "spicy noodles after drinking Ho Chi Minh", "hangover jjambbong District 1"],
    zh: ["胡志明市醒酒辣面", "酒后辣海鲜面 胡志明市", "第1郡醒酒汤面"],
    ja: ["ホーチミン 締め 韓国料理", "ホーチミン 飲んだ後 辛い麺", "ホーチミン 辛い海鮮麺"]
  },
  "location-contact": {
    en: ["Korean restaurant 77I Bui Thi Xuan", "Korean food near Bui Thi Xuan", "Korean restaurant near Pham Ngu Lao"],
    zh: ["77I Bui Thi Xuan 韩国餐厅", "Bui Thi Xuan 韩国餐厅", "滨城市场附近韩国餐厅", "范五老街附近韩国餐厅"],
    ja: ["77I Bui Thi Xuan 韓国料理", "Bui Thi Xuan 韓国料理", "ベンタイン市場近く 韓国料理", "ファングーラオ 韓国料理"]
  }
};

function uniqueKeywords(keywords: string[]) {
  return Array.from(new Set(keywords.filter(Boolean)));
}

export function metadataFor(locale: Locale, slug: PageSlug): Metadata {
  const page = pageContent[locale][slug];
  const languages = Object.fromEntries(site.locales.map((lang) => [lang, absoluteUrl(lang, slug)]));
  const keywords = uniqueKeywords([
    ...baseKeywords,
    ...localeKeywordMap[locale],
    ...(pageKeywordMap[slug] ?? []),
    ...(pageLocaleKeywordMap[slug]?.[locale] ?? [])
  ]);

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
  const keywords = uniqueKeywords([...baseKeywords, ...localeKeywordMap[locale]]);

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
      "Ben Thanh Market",
      "Pham Ngu Lao",
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
      "Korean restaurant Ho Chi Minh",
      "Korean restaurant District 1",
      "Korean food near Ben Thanh",
      "Korean food near Bui Vien",
      "ホーチミン 韓国料理",
      "ホーチミン チャンポン",
      "ホーチミン ジャージャー麺",
      "韓国式海鮮ラーメン",
      "ベンタイン市場 韓国料理",
      "ブイビエン 韓国料理",
      "Chinese food",
      "Korean-Chinese food",
      "late-night food",
      "food delivery District 1"
    ].concat(localeKeywordMap[locale]),
    keywords: keywords.join(", "),
    acceptsReservations: true,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "orders and customer service",
        areaServed: "VN",
        availableLanguage: ["Korean", "Vietnamese", "English", "Chinese", "Japanese"]
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
