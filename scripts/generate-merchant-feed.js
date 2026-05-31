const fs = require("fs");

const DOMAIN = "https://doyajjambbong.com";
const source = fs.readFileSync("data/menu.ts", "utf8");

const essentialProductNames = new Set([
  "DOYA Seafood Jjambbong",
  "DOYA Jjambbong",
  "Jajangmyeon",
  "Seafood Jajang Platter",
  "Tteokbokki",
  "Fried Mandu"
]);

const merchantProductNames = new Map([
  ["DOYA Jjambbong", "DOYA Classic Jjambbong"]
]);

const columns = [
  "id",
  "title",
  "description",
  "availability",
  "availability date",
  "expiration date",
  "link",
  "mobile link",
  "image link",
  "price",
  "sale price",
  "sale price effective date",
  "identifier exists",
  "gtin",
  "mpn",
  "brand",
  "product highlight",
  "product detail",
  "additional image link",
  "condition",
  "adult",
  "color",
  "size",
  "size type",
  "size system",
  "gender",
  "material",
  "pattern",
  "age group",
  "multipack",
  "is bundle",
  "unit pricing measure",
  "unit pricing base measure",
  "energy efficiency class",
  "min energy efficiency class",
  "max energy efficiency class",
  "item group id",
  "sell on google quantity"
];

function field(block, key) {
  const match = block.match(new RegExp(`${key}: "([^"]*)"`, "u"));
  return match ? match[1] : "";
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function cleanDescription(value, title) {
  const suffix = " Available at DOYA JJAMBBONG District 1, Ho Chi Minh.";
  const text = (value || title).replace(/\s+/g, " ").trim();
  return `${text}${suffix}`.slice(0, 200);
}

function parsePriceVariants(name, rawPrice) {
  if (!rawPrice || rawPrice === "Contact store") return [];

  if (name === "Yantai Guniang Liquor") {
    return [
      { label: "100ml", price: "290000 VND" },
      { label: "250ml", price: "390000 VND" },
      { label: "500ml", price: "710000 VND" }
    ];
  }

  const normalized = rawPrice.replace(/\s*VND\s*$/i, "");
  const pieces = normalized.split("/").map((part) => part.trim());

  if (pieces.length === 1) {
    const singleMatch = pieces[0].match(/^([A-Za-z0-9]+)\s+([\d,]+)$/u);
    if (singleMatch) return [{ label: singleMatch[1], price: `${singleMatch[2].replace(/,/g, "")} VND` }];
    const amount = pieces[0].replace(/,/g, "").trim();
    return [{ label: "", price: `${amount} VND` }];
  }

  return pieces.map((piece, index) => {
    const match = piece.match(/^([A-Za-z0-9]+)\s+([\d,]+)$/u);
    if (match) return { label: match[1], price: `${match[2].replace(/,/g, "")} VND` };
    return { label: `Option ${index + 1}`, price: `${piece.replace(/,/g, "")} VND` };
  });
}

function tsv(value) {
  return String(value ?? "").replace(/\t/g, " ").replace(/\r?\n/g, " ").trim();
}

const blocks = source.match(/\{\s*name: "[\s\S]*?\n\s*\}/gu) || [];
const rows = [columns];

for (const block of blocks) {
  const name = field(block, "name");
  const description = field(block, "description");
  const price = field(block, "price");
  const image = field(block, "image");
  if (!name || !image || !price || price === "Contact store") continue;
  if (!essentialProductNames.has(name)) continue;

  const variants = parsePriceVariants(name, price);
  const groupId = slug(name);
  const merchantName = merchantProductNames.get(name) || name;

  for (const variant of variants) {
    const title = variant.label ? `${merchantName} ${variant.label}` : merchantName;
    const id = slug(variant.label ? `${name} ${variant.label}` : name);
    rows.push([
      id,
      title,
      cleanDescription(description, title),
      "in_stock",
      "",
      "",
      `${DOMAIN}/ko/menu`,
      `${DOMAIN}/ko/menu`,
      `${DOMAIN}${image}`,
      variant.price,
      "",
      "",
      "no",
      "",
      id,
      "DOYA JJAMBBONG",
      "Korean restaurant in District 1, Ho Chi Minh",
      "Restaurant: cuisine: Korean-Chinese",
      "",
      "new",
      "no",
      "",
      variant.label,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "no",
      "",
      "",
      "",
      "",
      "",
      groupId,
      ""
    ]);
  }
}

fs.mkdirSync("exports", { recursive: true });
fs.writeFileSync("exports/google-merchant-products.tsv", rows.map((row) => row.map(tsv).join("\t")).join("\n"), "utf8");
console.log(`Wrote ${rows.length - 1} products to exports/google-merchant-products.tsv`);
