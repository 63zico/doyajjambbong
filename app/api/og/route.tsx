import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const alt = "DOYA JJAMBBONG Korean spicy seafood noodles";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") ?? "en";
  const page = searchParams.get("page") ?? "home";
  const title =
    page === "home"
      ? "Korean Spicy Seafood Noodles in Ho Chi Minh City"
      : page
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fff4df",
          color: "#111111",
          fontFamily: "Arial",
          padding: 64
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "62%" }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div
              style={{
                width: 78,
                height: 78,
                borderRadius: 999,
                background: "#c5161d",
                color: "#fff4df",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 900
              }}
            >
              DOYA
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 30, fontWeight: 900 }}>DOYA JJAMBBONG</div>
              <div style={{ fontSize: 22, color: "#6b4b3a" }}>District 1, Ho Chi Minh City</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 66, lineHeight: 0.95, fontWeight: 900 }}>{title}</div>
            <div style={{ fontSize: 28, color: "#4c332b" }}>
              Champong, jjambbong, jajangmyeon, tangsuyuk, Korean food and Chinese food. {locale.toUpperCase()}
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              width: 360,
              height: 360,
              borderRadius: 36,
              background: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div
              style={{
                width: 250,
                height: 250,
                borderRadius: 999,
                background: "#c5161d",
                border: "18px solid #fff4df"
              }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
