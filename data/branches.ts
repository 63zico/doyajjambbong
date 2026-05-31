export type Branch = {
  name: string;
  koreanName: string;
  area: string;
  address: string;
  phone: string;
  keywords: string[];
  hours?: string;
};

export const hoChiMinhBranches: Branch[] = [
  {
    name: "DOYA JJAMBBONG District 1",
    koreanName: "도야짬뽕 호치민 1군",
    area: "District 1 / Bui Thi Xuan / Ben Thanh",
    address: "77I Bùi Thị Xuân, P. Bến Thành, Quận 1, TP. Hồ Chí Minh",
    phone: "0843377788",
    keywords: ["Doya Jjambbong District 1", "Doya champong District 1", "도야짬뽕 1군", "Korean food near Bui Thi Xuan", "Chinese food near Ben Thanh"],
    hours: "Daily 10:30 AM - 11:30 PM"
  },
  {
    name: "DOYA JJAMBBONG Sky Garden District 7",
    koreanName: "도야짬뽕 푸미흥 스카이가든",
    area: "Phu My Hung / Sky Garden / District 7",
    address: "14 Đ Nội khu Sky Garden 3, Tân Phong, Quận 7, Ho Chi Minh City",
    phone: "079 777 8877",
    keywords: ["Doya Jjambbong Phu My Hung", "Doya Jjambbong Sky Garden", "Doya champong Sky Garden", "Korean Chinese food District 7", "도야짬뽕 푸미흥"]
  },
  {
    name: "DOYA JJAMBBONG Midtown District 7",
    koreanName: "도야짬뽕 미드타운 7군",
    area: "Midtown The Peak / Phu My Hung / District 7",
    address: "SH26, M8 Midtown The Peak, Khu đô thị Phú Mỹ Hưng, Quận 7, Ho Chi Minh City",
    phone: "093 674 0890",
    keywords: ["Doya Jjambbong Midtown", "Doya Jjambbong The Peak", "Doya champong Midtown", "Korean food Midtown", "도야짬뽕 미드타운"]
  },
  {
    name: "DOYA JJAMBBONG Sun Avenue",
    koreanName: "도야짬뽕 선애비뉴",
    area: "Sun Avenue / An Phu / Thu Duc City",
    address: "82 Đường 51, Phường An Phú, Thành phố Thủ Đức, Ho Chi Minh City",
    phone: "0939 556 980",
    keywords: ["Doya Jjambbong Sun Avenue", "Doya Jjambbong An Phu", "Doya champong Sun Avenue", "Chinese food An Phu", "도야짬뽕 SUN AVENUE"]
  },
  {
    name: "DOYA JJAMBBONG Thao Dien",
    koreanName: "도야짬뽕 타오디엔",
    area: "Thao Dien / District 2 / Thu Duc City",
    address: "22 Đường số 10, Thảo Điền, Quận 2, Ho Chi Minh City",
    phone: "090 254 2890",
    keywords: ["Doya Jjambbong Thao Dien", "Doya Jjambbong District 2", "Doya champong Thao Dien", "Korean Chinese food Thao Dien", "도야짬뽕 타오디엔"]
  }
];
