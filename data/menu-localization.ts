import { Locale } from "@/lib/site";

type MenuCardLocalization = {
  name: string;
  description: string;
  secondaryName?: string;
};

export const localizedMenuCardUi: Partial<Record<Locale, { mild: string; spicy: string; details: string }>> = {
  zh: {
    mild: "不辣",
    spicy: "辣",
    details: "查看详情"
  },
  ja: {
    mild: "辛くない",
    spicy: "辛い",
    details: "詳細を見る"
  }
};

export const localizedMenuCardCopy: Partial<Record<Locale, Record<string, MenuCardLocalization>>> = {
  zh: {
    "DOYA Seafood Jjambbong": {
      name: "DOYA 海鲜辣海鲜面",
      description: "DOYA 招牌韩式辣海鲜汤面, 适合搜索 champong、jjambbong 和胡志明辣海鲜面的客人."
    },
    "DOYA Jjambbong": {
      name: "DOYA 经典辣海鲜面",
      description: "经典红汤 jjambbong, 有蔬菜、海鲜风味和韩式中餐锅气."
    },
    "Mala Jjambbong": {
      name: "麻辣 Jjambbong",
      description: "带有麻辣香气和辣度的韩式海鲜汤面, 适合喜欢重口味的客人."
    },
    "Beef Jjambbong": {
      name: "牛肉 Jjambbong",
      description: "牛肉、蔬菜和红汤辣味结合的韩式中餐汤面."
    },
    "Sujebi Jjambbong": {
      name: "手撕面片 Jjambbong",
      description: "加入有嚼劲 sujebi 面片的辣汤面, 口感更丰富."
    },
    "Soft Tofu Jjambbong": {
      name: "嫩豆腐 Jjambbong",
      description: "嫩豆腐、海鲜和红汤辣味结合, 适合想要热汤和柔和口感的客人."
    },
    "Seafood White Jjambbong": {
      name: "海鲜白汤 Jjambbong",
      description: "比红汤更温和的海鲜白汤面, 适合想吃海鲜但不想太辣的客人."
    },
    "Seafood Jjambbong Platter": {
      name: "海鲜大盘 Jjambbong",
      description: "适合多人分享的海鲜辣面大盘, 有面、海鲜、蔬菜和辣酱."
    },
    "Cream Jjambbong": {
      name: "奶油 Jjambbong",
      description: "奶油汤底和辣味结合的海鲜 jjambbong, 口感浓郁."
    },
    Jajangmyeon: {
      name: "韩式炸酱面",
      description: "不辣的韩式黑豆酱面, 也常被搜索为 jajangmyeon、mi tuong den 或 Korean black bean noodles."
    },
    "Chili Jajangmyeon": {
      name: "辣椒炸酱面",
      description: "在韩式炸酱面中加入青辣椒, 适合想要一点辣味的客人."
    },
    "Gan Jajang": {
      name: "干炸酱面",
      description: "现炒黑豆酱和面分开上桌, 酱香更浓."
    },
    "Seafood Jajang Platter": {
      name: "海鲜炸酱大盘",
      description: "适合多人分享的海鲜黑豆酱面大盘, 可搭配 champong 和炸物."
    },
    "Bulgogi Japchae Rice": {
      name: "烤肉杂菜饭",
      description: "米饭搭配韩式烤肉、炒粉丝、蔬菜和咸香酱汁."
    },
    "Shrimp Fried Rice": {
      name: "虾仁炒饭",
      description: "虾仁、鸡蛋、蔬菜炒饭, 搭配韩式黑豆酱更有饱足感."
    },
    "Mapo Tofu Rice": {
      name: "麻婆豆腐饭",
      description: "软豆腐和辣味麻婆酱搭配米饭, 适合想吃饭类的客人."
    },
    Tangsuyuk: {
      name: "韩式糖醋肉",
      description: "韩式中餐经典炸肉料理, 酸甜酱汁适合搭配炸酱面和 jjambbong."
    },
    Kkanpunggi: {
      name: "韩式辣蒜炸鸡",
      description: "辣蒜酱风味的韩式中餐炸鸡, 适合下酒和多人分享."
    },
    "Chili Shrimp": {
      name: "辣椒虾",
      description: "酥脆炸虾裹上甜辣酱, 适合搭配面类或酒类."
    },
    "Cream Shrimp": {
      name: "奶油虾",
      description: "酥脆炸虾搭配柔和奶油酱, 味道不太辣."
    },
    "Kkanpung Shrimp": {
      name: "辣蒜虾",
      description: "炸虾搭配辣蒜酱、干辣椒和芝麻, 味道更浓."
    },
    Menbosha: {
      name: "虾吐司 Menbosha",
      description: "酥脆虾吐司, 适合当作分享小菜或加点菜单."
    },
    Yuringi: {
      name: "油淋鸡",
      description: "炸鸡搭配青辣椒和酸咸酱汁, 清爽又适合分享."
    },
    "Boiled Mandu": {
      name: "水饺",
      description: "柔软好入口的韩式水饺, 适合搭配主食."
    },
    "Fried Mandu": {
      name: "煎饺",
      description: "外皮酥脆的韩式煎饺, 适合搭配 jjambbong 或炸酱面."
    },
    "Fried Flower Bun": {
      name: "炸花卷",
      description: "酥脆炸花卷, 可搭配甜酱或作为小食."
    },
    Tteokbokki: {
      name: "韩国辣年糕",
      description: "甜辣口味的韩国年糕, 也常被搜索为 tteokbokki 或 tokbokki."
    },
    "Seafood Nurungji Soup": {
      name: "海鲜锅巴汤",
      description: "热汤、海鲜、蔬菜和酥脆锅巴结合的韩式中餐汤品."
    },
    "Seafood Jjambbong Soup": {
      name: "海鲜 Jjambbong 汤",
      description: "适合多人分享的辣海鲜汤, 适合作为夜宵或下酒汤."
    },
    "Mapo Tofu": {
      name: "麻婆豆腐",
      description: "软豆腐搭配浓郁辣味酱汁, 适合加点或下酒."
    },
    Yangjangpi: {
      name: "两张皮海鲜冷盘",
      description: "海鲜和蔬菜拼盘, 搭配韩式芥末酱, 适合多人分享."
    },
    "Passion Fruit Soda": {
      name: "百香果苏打",
      description: "清爽百香果苏打, 适合搭配辣面和炸物."
    },
    "Strawberry Soda": {
      name: "草莓苏打",
      description: "甜香草莓苏打, 适合午餐、晚餐或夜宵."
    },
    "Blueberry Soda": {
      name: "蓝莓苏打",
      description: "清爽蓝莓苏打, 适合搭配韩式中餐."
    },
    "Lemon Tea": {
      name: "柠檬茶",
      description: "清爽柠檬茶, 适合搭配辣味或炸物菜单."
    },
    "Milk Tea": {
      name: "奶茶",
      description: "饭后或搭配小食都容易入口的奶茶."
    },
    "Thai Milk Tea": {
      name: "泰式奶茶",
      description: "浓郁泰式奶茶, 适合想喝甜味饮料的客人."
    },
    "Orange Juice": {
      name: "橙汁",
      description: "清爽橙汁, 适合家庭和不吃辣的客人."
    },
    "Peach Tea": {
      name: "桃子茶",
      description: "香甜桃子茶, 适合搭配炸酱面、jjambbong 或炸物."
    },
    Coke: {
      name: "可乐",
      description: "经典可乐, 适合搭配炸物和辣味菜单."
    },
    "Coke Zero": {
      name: "零度可乐",
      description: "更轻爽的无糖可乐选择."
    },
    Sprite: {
      name: "雪碧",
      description: "清爽汽水, 适合搭配辣海鲜面和炸物."
    },
    "Soda Water": {
      name: "苏打水",
      description: "干净清爽的气泡水, 适合搭配韩式中餐."
    },
    "Jinro Soju": {
      name: "真露烧酒",
      description: "韩国烧酒, 适合搭配糖醋肉、汤类和下酒菜."
    },
    "Chamisul Soju": {
      name: "Chamisul 烧酒",
      description: "韩国经典烧酒, 适合搭配韩式中餐和夜宵."
    },
    "Saero Soju": {
      name: "Saero 烧酒",
      description: "适合在胡志明第1郡寻找韩国烧酒的客人."
    },
    "Good Day Fruit Soju": {
      name: "Good Day 水果烧酒",
      description: "水果味韩国烧酒, 适合搭配炸物和分享菜."
    },
    "Tiger Beer": {
      name: "Tiger 啤酒",
      description: "适合搭配炸鸡、糖醋肉和下酒菜的啤酒."
    },
    "Yantai Guniang Liquor": {
      name: "烟台古酿酒",
      description: "适合搭配韩式中餐、海鲜汤和分享菜."
    },
    "Tsingtao Beer": {
      name: "青岛啤酒",
      description: "适合搭配炸物、辣海鲜面和韩式中餐."
    },
    "House Red Wine": {
      name: "House 红酒",
      description: "适合晚餐和分享菜的轻松红酒选择."
    },
    "Lemon Highball": {
      name: "柠檬 Highball",
      description: "清爽柠檬 highball, 适合搭配炸物和夜宵."
    },
    "Earl Grey Highball": {
      name: "伯爵茶 Highball",
      description: "带有茶香的 highball, 适合晚餐和下酒菜."
    },
    Americano: {
      name: "美式咖啡",
      description: "饭后适合饮用的 Americano."
    },
    "Caffe Latte": {
      name: "拿铁咖啡",
      description: "柔和拿铁, 适合饭后或休息时饮用."
    },
    "Coconut Coffee": {
      name: "椰子咖啡",
      description: "越南风味椰子咖啡, 适合游客饭后尝试."
    },
    "Lemon Coffee": {
      name: "柠檬咖啡",
      description: "带有清爽柠檬风味的特色咖啡."
    },
    "Salt Coffee": {
      name: "盐咖啡",
      description: "越南风味盐咖啡, 适合饭后饮用."
    },
    "Condensed Milk Coffee": {
      name: "炼乳咖啡",
      description: "越南炼乳咖啡, 甜香浓郁."
    },
    "Matcha Latte": {
      name: "抹茶拿铁",
      description: "甜度柔和的抹茶拿铁, 适合搭配饭后甜饮."
    },
    "Strawberry Matcha Latte": {
      name: "草莓抹茶拿铁",
      description: "像甜点一样的草莓抹茶拿铁."
    }
  },
  ja: {
    "DOYA Seafood Jjambbong": {
      name: "DOYA 海鮮チャンポン",
      description: "DOYA の看板韓国式海鮮チャンポン。champong、jjambbong、ホーチミン チャンポン検索向けの一杯です。"
    },
    "DOYA Jjambbong": {
      name: "DOYA クラシックチャンポン",
      description: "赤い辛口スープ、野菜、海鮮の旨味を合わせた定番 jjambbong です。"
    },
    "Mala Jjambbong": {
      name: "マーラーチャンポン",
      description: "しびれる辛さと韓国式海鮮スープを合わせた、重めの辛口チャンポンです。"
    },
    "Beef Jjambbong": {
      name: "牛肉チャンポン",
      description: "牛肉、野菜、赤い辛口スープを合わせた韓国中華の麺料理です。"
    },
    "Sujebi Jjambbong": {
      name: "すいとんチャンポン",
      description: "もちっとした sujebi 生地を入れた辛口チャンポンです。"
    },
    "Soft Tofu Jjambbong": {
      name: "スンドゥブチャンポン",
      description: "柔らかい豆腐と海鮮、辛口スープを合わせた温かい一杯です。"
    },
    "Seafood White Jjambbong": {
      name: "海鮮白チャンポン",
      description: "赤い辛口スープより穏やかな海鮮白湯麺です。"
    },
    "Seafood Jjambbong Platter": {
      name: "海鮮大皿チャンポン",
      description: "麺、海鮮、野菜、辛口ソースを大皿で楽しむシェア向けメニューです。"
    },
    "Cream Jjambbong": {
      name: "クリームチャンポン",
      description: "海鮮と野菜に濃厚な辛口クリームスープを合わせたチャンポンです。"
    },
    Jajangmyeon: {
      name: "韓国式ジャージャー麺",
      description: "辛くない黒味噌ソースの麺。jajangmyeon、mi tuong den、Korean black bean noodles として検索されます。"
    },
    "Chili Jajangmyeon": {
      name: "青唐辛子ジャージャー麺",
      description: "韓国式ジャージャー麺に青唐辛子を加えた、少し辛いメニューです。"
    },
    "Gan Jajang": {
      name: "カンジャジャン",
      description: "炒めた黒味噌ソースを別添えで混ぜて食べる濃厚なジャージャー麺です。"
    },
    "Seafood Jajang Platter": {
      name: "海鮮ジャージャー麺大皿",
      description: "海鮮と黒味噌ソースを合わせたシェア向けの大皿麺です。"
    },
    "Bulgogi Japchae Rice": {
      name: "プルコギ春雨ご飯",
      description: "プルコギ、炒め春雨、野菜をご飯と一緒に食べる満足感のあるメニューです。"
    },
    "Shrimp Fried Rice": {
      name: "エビチャーハン",
      description: "エビ、卵、野菜を炒めたチャーハン。黒味噌ソースともよく合います。"
    },
    "Mapo Tofu Rice": {
      name: "麻婆豆腐ご飯",
      description: "辛口麻婆ソースと柔らかい豆腐をご飯と一緒に楽しめます。"
    },
    Tangsuyuk: {
      name: "韓国式タンスユク",
      description: "甘酸っぱいソースで食べる韓国中華の揚げ豚料理。ジャージャー麺やチャンポンと合います。"
    },
    Kkanpunggi: {
      name: "カンプンギ",
      description: "辛口ガーリックソースの韓国式フライドチキン。お酒やシェアに向いています。"
    },
    "Chili Shrimp": {
      name: "チリ海老",
      description: "サクッと揚げた海老に甘辛いチリソースを絡めたメニューです。"
    },
    "Cream Shrimp": {
      name: "クリーム海老",
      description: "揚げ海老にまろやかなクリームソースを合わせた辛くないメニューです。"
    },
    "Kkanpung Shrimp": {
      name: "カンプン海老",
      description: "揚げ海老に辛口ガーリックソース、乾燥唐辛子、胡麻を合わせた一品です。"
    },
    Menbosha: {
      name: "メンボシャ",
      description: "海老トーストをカリッと揚げた、シェアしやすいサイドメニューです。"
    },
    Yuringi: {
      name: "ユーリンギ",
      description: "揚げ鶏に青唐辛子と酸味のあるソースを合わせたさっぱり系の一品です。"
    },
    "Boiled Mandu": {
      name: "水餃子",
      description: "柔らかく食べやすい韓国式の水餃子です。"
    },
    "Fried Mandu": {
      name: "焼き餃子",
      description: "外側がカリッとした餃子。チャンポンやジャージャー麺に合わせやすいです。"
    },
    "Fried Flower Bun": {
      name: "揚げ花巻",
      description: "軽くつまめる揚げパン系のサイドメニューです。"
    },
    Tteokbokki: {
      name: "トッポッキ",
      description: "甘辛い韓国餅料理。tteokbokki や tokbokki としても検索されます。"
    },
    "Seafood Nurungji Soup": {
      name: "海鮮おこげスープ",
      description: "海鮮、野菜、カリッとしたおこげを温かいスープで楽しむ料理です。"
    },
    "Seafood Jjambbong Soup": {
      name: "海鮮チャンポン鍋",
      description: "グループでシェアしやすい辛口海鮮スープ。夜食やお酒にも合います。"
    },
    "Mapo Tofu": {
      name: "麻婆豆腐",
      description: "柔らかい豆腐に辛口ソースを合わせた単品料理です。"
    },
    Yangjangpi: {
      name: "ヤンジャンピ",
      description: "海鮮と野菜の盛り合わせを韓国中華風のマスタードソースで楽しむ料理です。"
    },
    "Passion Fruit Soda": {
      name: "パッションフルーツソーダ",
      description: "辛い麺や揚げ物に合う、さっぱりしたソーダです。"
    },
    "Strawberry Soda": {
      name: "ストロベリーソーダ",
      description: "甘く飲みやすいストロベリーソーダです。"
    },
    "Blueberry Soda": {
      name: "ブルーベリーソーダ",
      description: "食事と合わせやすい爽やかなブルーベリーソーダです。"
    },
    "Lemon Tea": {
      name: "レモンティー",
      description: "辛い料理や揚げ物に合う、さっぱりしたレモンティーです。"
    },
    "Milk Tea": {
      name: "ミルクティー",
      description: "食後やサイドメニューと一緒に飲みやすいミルクティーです。"
    },
    "Thai Milk Tea": {
      name: "タイミルクティー",
      description: "濃い甘さと香りのあるタイミルクティーです。"
    },
    "Orange Juice": {
      name: "オレンジジュース",
      description: "家族連れや辛くないメニューを選ぶ方にも飲みやすいジュースです。"
    },
    "Peach Tea": {
      name: "ピーチティー",
      description: "チャンポン、ジャージャー麺、揚げ物に合わせやすい甘いお茶です。"
    },
    Coke: {
      name: "コーラ",
      description: "揚げ物や辛いメニューに合う定番ドリンクです。"
    },
    "Coke Zero": {
      name: "ゼロコーラ",
      description: "軽めに飲みたい時のゼロシュガーコーラです。"
    },
    Sprite: {
      name: "スプライト",
      description: "辛い麺や揚げ物に合う爽やかな炭酸飲料です。"
    },
    "Soda Water": {
      name: "ソーダウォーター",
      description: "食事と合わせやすい無糖の炭酸水です。"
    },
    "Jinro Soju": {
      name: "ジンロ焼酎",
      description: "タンスユク、チャンポン鍋、おつまみと合わせやすい韓国焼酎です。"
    },
    "Chamisul Soju": {
      name: "チャミスル焼酎",
      description: "韓国料理や夜食と一緒に楽しみやすい定番焼酎です。"
    },
    "Saero Soju": {
      name: "セロ焼酎",
      description: "ホーチミン1区で韓国焼酎を探す方に向けたドリンクです。"
    },
    "Good Day Fruit Soju": {
      name: "Good Day フルーツ焼酎",
      description: "フルーツ味で飲みやすい韓国焼酎です。"
    },
    "Tiger Beer": {
      name: "タイガービール",
      description: "揚げ物やおつまみメニューに合うビールです。"
    },
    "Yantai Guniang Liquor": {
      name: "煙台古酿酒",
      description: "韓国中華、海鮮スープ、シェア料理と合わせやすいお酒です。"
    },
    "Tsingtao Beer": {
      name: "青島ビール",
      description: "揚げ物や辛い海鮮麺に合うビールです。"
    },
    "House Red Wine": {
      name: "ハウス赤ワイン",
      description: "夕食やシェア料理と合わせやすい軽めの赤ワインです。"
    },
    "Lemon Highball": {
      name: "レモンハイボール",
      description: "揚げ物や夜食に合わせやすい爽やかなハイボールです。"
    },
    "Earl Grey Highball": {
      name: "アールグレイハイボール",
      description: "紅茶の香りがあるハイボール。夕食やおつまみに合います。"
    },
    Americano: {
      name: "アメリカーノ",
      description: "韓国中華の食後に飲みやすいコーヒーです。"
    },
    "Caffe Latte": {
      name: "カフェラテ",
      description: "食後にやさしく飲めるラテです。"
    },
    "Coconut Coffee": {
      name: "ココナッツコーヒー",
      description: "ベトナムらしいカフェ風味を楽しめる食後のコーヒーです。"
    },
    "Lemon Coffee": {
      name: "レモンコーヒー",
      description: "爽やかなレモンの香りがある個性的なコーヒーです。"
    },
    "Salt Coffee": {
      name: "塩コーヒー",
      description: "ベトナム風の塩コーヒー。食後におすすめです。"
    },
    "Condensed Milk Coffee": {
      name: "練乳コーヒー",
      description: "甘く濃いベトナム式の練乳コーヒーです。"
    },
    "Matcha Latte": {
      name: "抹茶ラテ",
      description: "辛い料理の後にも飲みやすい、やさしい甘さの抹茶ラテです。"
    },
    "Strawberry Matcha Latte": {
      name: "いちご抹茶ラテ",
      description: "デザート感覚で楽しめるいちご抹茶ラテです。"
    }
  }
};
