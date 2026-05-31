import { Locale } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: Record<Locale, FaqItem[]> = {
  en: [
    {
      question: "What is jjambbong?",
      answer:
        "Jjambbong is a Korean-Chinese spicy seafood noodle soup known for red chili broth, seafood, vegetables, and wok-fired depth. Some guests also search for it as champong or champon."
    },
    {
      question: "Is champong the same as jjambbong?",
      answer:
        "Yes. Champong and champon are common search spellings for jjambbong, the Korean-Chinese spicy seafood noodle soup served at DOYA."
    },
    {
      question: "Is DOYA JJAMBBONG Korean or Chinese food?",
      answer:
        "DOYA serves Korean food and Chinese food in the Korean-Chinese style, including jjambbong or champong, jajangmyeon, and tangsuyuk."
    },
    {
      question: "Do you serve late-night food?",
      answer:
        "Yes. DOYA is positioned for dinner, late-night meals, spicy noodle cravings, and hangover food in District 1, Ho Chi Minh City."
    },
    {
      question: "Is the food spicy?",
      answer:
        "The signature jjambbong is spicy, but the menu also includes milder and non-spicy options such as jajangmyeon and tangsuyuk."
    },
    {
      question: "Do you have non-spicy options?",
      answer:
        "Yes. Jajangmyeon, tangsuyuk, rice bowls, and selected dishes are suitable for guests who prefer less heat."
    },
    {
      question: "Where is DOYA JJAMBBONG located?",
      answer:
        "DOYA JJAMBBONG is located in District 1, Ho Chi Minh City, near Bui Thi Xuan, Ben Thanh, tourist hotels, and nightlife areas."
    },
    {
      question: "Do you offer reservations and delivery?",
      answer:
        "Table reservations, delivery, and takeaway orders can be requested through KakaoTalk, Zalo, or a direct phone call."
    },
    {
      question: "Is it good for tourists?",
      answer:
        "Yes. The restaurant is easy to understand for tourists looking for Korean restaurant Ho Chi Minh, jjambbong in Saigon, or Korean food near Bui Thi Xuan."
    }
  ],
  vi: [
    {
      question: "Jjambbong la gi? Co phai mi cay Han Quoc khong?",
      answer:
        "Jjambbong la mon mi cay Han Quoc kieu Han-Trung voi nuoc dung do, hai san, rau va mui vi ap chao dam da. Mot so khach cung tim bang tu mi cay, champong hoac champon."
    },
    {
      question: "Champong co phai la jjambbong khong?",
      answer:
        "Co. Champong va champon la cach viet khac cua jjambbong, mon mi cay hai san Han-Trung cua DOYA."
    },
    {
      question: "DOYA JJAMBBONG la mon Han hay mon Trung?",
      answer:
        "DOYA phuc vu mon Han, mon Trung va am thuc Han-Trung, gom jjambbong hoac champong, mi tuong den Han Quoc jajangmyeon va tangsuyuk theo phong cach Han Quoc."
    },
    {
      question: "Nha hang co phuc vu an khuya khong?",
      answer:
        "Co. DOYA phu hop cho bua toi, an khuya, mi cay va mon an giai ruou tai Quan 1, TP. Ho Chi Minh."
    },
    {
      question: "Mon an co cay khong?",
      answer:
        "Jjambbong dac trung co vi cay, nhung thuc don co lua chon it cay va khong cay nhu mi tuong den jajangmyeon va tangsuyuk."
    },
    {
      question: "Co mon khong cay khong?",
      answer:
        "Co. Mi tuong den Han Quoc jajangmyeon, tangsuyuk, com bulgogi va mot so mon khac phu hop voi khach khong an cay."
    },
    {
      question: "DOYA JJAMBBONG nam o dau?",
      answer:
        "DOYA JJAMBBONG nam tai Quan 1, TP. Ho Chi Minh, gan Bui Thi Xuan, Ben Thanh, khach san va khu vui choi ve dem."
    },
    {
      question: "Co dat ban va giao hang khong?",
      answer:
        "Co the dat ban, dat mang ve va giao hang qua KakaoTalk, Zalo hoac goi dien truc tiep cho cua hang."
    },
    {
      question: "Khach du lich co de den khong?",
      answer:
        "Co. DOYA de tim cho khach du lich muon an nha hang Han Quoc o Ho Chi Minh, jjambbong o Saigon, hoac mon Han gan Bui Thi Xuan."
    }
  ],
  ko: [
    {
      question: "짬뽕은 어떤 음식인가요?",
      answer:
        "짬뽕은 매운 해물 육수, 면, 채소, 해산물을 함께 즐기는 한국식 중화요리 대표 메뉴입니다. 영어권에서는 jjambbong 외에 champong, champon으로 검색되기도 합니다."
    },
    {
      question: "champong도 짬뽕 키워드로 봐야 하나요?",
      answer:
        "네. champong과 champon은 외국인 손님이 짬뽕을 찾을 때 쓰는 검색 표기라서 도야짬뽕 SEO에 함께 반영했습니다."
    },
    {
      question: "도야짬뽕은 한국 음식인가요, 중국 음식인가요?",
      answer:
        "도야짬뽕은 한국 음식과 중국 음식을 한국식 중화요리로 풀어낸 메뉴를 제공합니다. 짬뽕, 짜장면, 탕수육이 대표 메뉴입니다."
    },
    {
      question: "야식으로 먹기 좋은가요?",
      answer:
        "네. 도야짬뽕은 호치민 1군에서 저녁 식사, 늦은 밤 식사, 해장용 매운 면을 찾는 분들에게 잘 맞습니다."
    },
    {
      question: "음식이 매운가요?",
      answer:
        "대표 짬뽕은 매운 편이지만 짜장면, 탕수육, 덮밥처럼 덜 맵거나 맵지 않은 메뉴도 준비되어 있습니다."
    },
    {
      question: "맵지 않은 메뉴도 있나요?",
      answer:
        "네. 짜장면, 탕수육, 불고기덮밥 등 매운 음식을 부담스러워하는 손님도 선택할 수 있는 메뉴가 있습니다."
    },
    {
      question: "도야짬뽕은 어디에 있나요?",
      answer:
        "도야짬뽕은 호치민시 1군에 있으며, Bui Thi Xuan, 벤탄, 여행자 숙소, 나이트라이프 지역과 가깝습니다."
    },
    {
      question: "예약과 배달이 가능한가요?",
      answer:
        "카카오톡 오픈채팅, Zalo, 전화주문으로 매장 예약, 포장, 배달 주문 문의가 가능합니다."
    },
    {
      question: "관광객에게도 좋은 식당인가요?",
      answer:
        "네. 호치민 한국 식당, 사이공 짬뽕, Bui Thi Xuan 근처 한식을 찾는 외국인 관광객도 이해하기 쉽게 구성되어 있습니다."
    }
  ]
};
