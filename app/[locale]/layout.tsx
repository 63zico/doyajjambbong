import { notFound } from "next/navigation";
import { Locale, site } from "@/lib/site";

export function generateStaticParams() {
  return site.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!site.locales.includes(locale as Locale)) notFound();
  return <div className="min-h-screen bg-bone">{children}</div>;
}
