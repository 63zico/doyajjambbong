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
  en: "English"
};

export const navLabels: Record<Locale, Record<PageSlug, string>> = {
  vi: {
    "": "Trang chủ",
    menu: "Thực đơn",
    "signature-jjambbong": "Jjambbong đặc trưng",
    "champong-korean-chinese-food-ho-chi-minh": "Champong Quận 1",
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
    "signature-jjambbong": "대표 짬뽕",
    "champong-korean-chinese-food-ho-chi-minh": "champong 검색",
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
    "signature-jjambbong": "Signature Jjambbong",
    "champong-korean-chinese-food-ho-chi-minh": "Champong",
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
  }
};

export const pageContent: Record<Locale, Record<PageSlug, PageContent>> = {
  vi: {
    "": {
      slug: "",
      nav: "Trang chủ",
      title: "DOYA JJAMBBONG | Mì cay Hàn Quốc tại Quận 1, TP. Hồ Chí Minh",
      description:
        "DOYA JJAMBBONG phục vụ mì cay Hàn Quốc, mì hải sản cay jjambbong, mì tương đen Hàn Quốc jajangmyeon, tangsuyuk và món Hàn-Trung tại Quận 1, TP. Hồ Chí Minh.",
      eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
      h1: "Mì cay Hàn Quốc tại Quận 1, TP. Hồ Chí Minh",
      subtitle: "Jjambbong, mì tương đen jajangmyeon và món Hàn-Trung nóng hổi cho bữa trưa, bữa tối và ăn khuya ở trung tâm Sài Gòn.",
      summary:
        "DOYA JJAMBBONG là nhà hàng Hàn-Trung tại Quận 1, TP. Hồ Chí Minh, chuyên mì cay Hàn Quốc, mì hải sản cay jjambbong, mì tương đen Hàn Quốc jajangmyeon và các món Hàn dễ ăn cho khách địa phương, khách du lịch và người Hàn tại Sài Gòn.",
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
      title: "Korean Chinese Food Ho Chi Minh | DOYA JJAMBBONG Quận 1",
      description:
        "Tìm Korean food, Chinese food hoặc Korean Chinese food ở Ho Chi Minh? DOYA phục vụ jjambbong, champong, mì tương đen jajangmyeon và tangsuyuk tại Quận 1.",
      eyebrow: "Korean Chinese food",
      h1: "Korean Chinese food tại Ho Chi Minh",
      subtitle: "Món Hàn và món Trung theo phong cách Hàn Quốc: jjambbong, champong, mì tương đen jajangmyeon, tangsuyuk và cơm nóng.",
      summary:
        "DOYA là lựa chọn trung tâm cho khách tìm Korean food Ho Chi Minh, Chinese food District 1 hoặc Korean Chinese restaurant gần Bến Thành và Bùi Thị Xuân.",
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
      title: "도야짬뽕 | 호치민 1군 한국식 매운 해물짬뽕",
      description:
        "도야짬뽕은 호치민 1군에서 한국식 매운 해물짬뽕, 짜장면, 탕수육, 야식 메뉴를 제공하는 한국식 중화요리 식당입니다.",
      eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
      h1: "호치민 1군 한국식 매운 해물짬뽕",
      subtitle: "짬뽕, 짜장면, 탕수육, 늦은 밤에도 부담 없이 먹기 좋은 한국식 중화요리.",
      summary:
        "도야짬뽕은 호치민 1군에서 매운 해물짬뽕, 짜장면, 탕수육, 야식으로 먹기 좋은 한국식 중화요리를 선보이는 식당입니다.",
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
      title: "Korean Chinese Food 호치민 | 도야짬뽕 1군",
      description: "호치민에서 Korean food, Chinese food, Korean Chinese food를 찾는 손님을 위한 짬뽕, 짜장면, 탕수육 전문 페이지입니다.",
      eyebrow: "Korean Chinese food",
      h1: "호치민 한국식 중화요리",
      subtitle: "한국 음식과 중국 음식을 한국식으로 풀어낸 짬뽕, 짜장면, 탕수육.",
      summary:
        "도야짬뽕은 호치민 1군에서 Korean food, Chinese food, Korean Chinese restaurant를 찾는 관광객과 현지 손님에게 맞춘 매장입니다.",
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
      title: "DOYA JJAMBBONG | Korean Food, Chinese Food and Champong in Ho Chi Minh",
      description: "DOYA JJAMBBONG serves Korean food, Chinese food, Korean-Chinese champong or jjambbong, jajangmyeon, and tangsuyuk in District 1.",
      eyebrow: "DOYA JJAMBBONG / 도야짬뽕",
      h1: "Korean Spicy Seafood Noodles in Ho Chi Minh City",
      subtitle: "Authentic Korean-Chinese jjambbong, also searched as champong or champon, plus jajangmyeon and comfort food in District 1, Saigon.",
      summary: "DOYA JJAMBBONG is a Korean-Chinese restaurant in District 1, Ho Chi Minh City, specializing in Korean food, Chinese food, spicy seafood jjambbong or champong, jajangmyeon, and late-night comfort food.",
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
      title: "Korean Chinese Food Ho Chi Minh | DOYA JJAMBBONG District 1",
      description: "Find Korean food, Chinese food, and Korean Chinese food in Ho Chi Minh at DOYA: jjambbong, champong, jajangmyeon, tangsuyuk, and rice bowls.",
      eyebrow: "Korean Chinese food",
      h1: "Korean Chinese Food in Ho Chi Minh",
      subtitle: "Korean-style Chinese comfort food in District 1: jjambbong, champong, jajangmyeon, tangsuyuk, and rice bowls.",
      summary:
        "DOYA helps guests searching Korean food Ho Chi Minh, Chinese food District 1, Korean Chinese restaurant Saigon, and spicy seafood noodles find a clear restaurant choice.",
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
};
