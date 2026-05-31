import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | DOYA JJAMBBONG",
  description:
    "Privacy policy for DOYA JJAMBBONG District 1 website, reservation, delivery inquiry, and contact forms."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="noise min-h-screen bg-cream text-ink">
      <section className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <p className="text-sm font-black uppercase tracking-wide text-chili">Privacy Policy</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Privacy Policy</h1>
        <p className="mt-5 text-base leading-7 text-ink/70">
          DOYA JJAMBBONG District 1 respects customer privacy. This page explains how we handle basic information
          related to website visits, reservation requests, delivery inquiries, phone calls, KakaoTalk, Zalo, Facebook,
          and email communication.
        </p>

        <div className="mt-10 grid gap-5">
          <PolicyCard title="Information We May Collect">
            We may receive a customer name, phone number, email address, message content, order details, reservation
            time, delivery address, and communication history when a customer contacts us directly.
          </PolicyCard>
          <PolicyCard title="How We Use Information">
            We use customer information only to respond to inquiries, confirm reservations, prepare takeaway or delivery
            orders, support customer service, and improve the DOYA JJAMBBONG website and menu experience.
          </PolicyCard>
          <PolicyCard title="Advertising and Analytics">
            We may use Google Search Console, Google Ads, Google Merchant Center, and website analytics tools to
            understand traffic and improve advertising. These tools may use cookies or aggregated usage data according
            to their own policies.
          </PolicyCard>
          <PolicyCard title="Sharing Information">
            We do not sell customer personal information. We may share limited order or delivery information only when
            needed to complete a customer request, comply with law, or operate the restaurant website safely.
          </PolicyCard>
          <PolicyCard title="Contact">
            For privacy questions, contact us at {site.email} or call {site.phone}. Restaurant address: 77I Bui Thi
            Xuan, Ben Thanh, District 1, Ho Chi Minh City.
          </PolicyCard>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="rounded-md bg-chili px-5 py-3 font-black text-white" href="/vi">
            Home
          </Link>
          <Link className="rounded-md border border-ink/15 bg-white px-5 py-3 font-black text-ink" href="/en/return-policy">
            Return Policy
          </Link>
        </div>
      </section>
    </main>
  );
}

function PolicyCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white p-6">
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="mt-3 leading-7 text-ink/70">{children}</p>
    </article>
  );
}
