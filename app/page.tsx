import type { Metadata } from "next";
import ContentPage from "./[locale]/[...slug]/page";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor("vi", "");

export default function RootPage() {
  return <ContentPage params={Promise.resolve({ locale: "vi" })} />;
}
