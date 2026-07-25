import { site } from "@/lib/site";

const phoneHref = `tel:${site.phone.replaceAll(" ", "")}`;

const contactButtons = [
  {
    label: "Facebook",
    icon: "facebook",
    href: site.links.facebookMessage,
    className: "bg-[#1877F2] text-white shadow-[0_14px_30px_rgba(24,119,242,0.35)]"
  },
  {
    label: "KakaoTalk",
    icon: "kakao",
    href: site.links.kakao,
    className: "bg-[#FEE500] text-[#191600] shadow-[0_14px_30px_rgba(254,229,0,0.28)]"
  },
  {
    label: "Zalo",
    icon: "zalo",
    href: site.links.delivery,
    className: "bg-[#0068FF] text-white shadow-[0_14px_30px_rgba(0,104,255,0.35)]"
  },
  {
    label: "Call",
    icon: "call",
    href: phoneHref,
    className: "bg-chili text-white shadow-[0_14px_30px_rgba(197,22,29,0.35)]"
  }
];

export function FloatingContactButtons() {
  return (
    <nav aria-label="Quick contact" className="fixed bottom-24 right-3 z-[60] flex flex-col items-center gap-3 md:bottom-auto md:right-5 md:top-1/2 md:-translate-y-1/2">
      {contactButtons.map((button) => (
        <a
          key={button.label}
          href={button.href}
          aria-label={button.label}
          title={button.label}
          className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/80 text-[11px] font-black transition duration-200 hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ink/15 md:h-16 md:w-16 ${button.className}`}
        >
          <ContactIcon icon={button.icon} />
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-md bg-ink px-3 py-2 text-xs font-black text-cream opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
            {button.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "call") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path d="M8.3 5.1 10 8.9c.3.7.1 1.4-.4 1.9l-1 1c1.2 2.2 2.9 3.9 5.1 5.1l1-1c.5-.5 1.3-.7 1.9-.4l3.8 1.7c.7.3 1.1 1 1 1.7-.2 1.5-1.4 2.6-2.9 2.6C9.8 21.5 2.5 14.2 2.5 5.5 2.5 4 3.6 2.8 5.1 2.6c.7-.1 1.4.3 1.7 1l1.5 1.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return <span aria-hidden="true" className="text-3xl font-black leading-none">f</span>;
  }

  if (icon === "zalo") {
    return <span aria-hidden="true" className="text-sm font-black leading-none">Zalo</span>;
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none">
      <path d="M12 4C6.8 4 2.8 7.2 2.8 11.2c0 2.5 1.6 4.8 4 6.1l-.7 2.5c-.1.4.3.7.6.5l3.1-2c.7.1 1.4.2 2.2.2 5.2 0 9.2-3.2 9.2-7.2S17.2 4 12 4Z" fill="currentColor" />
      <path d="M8 11h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="text-[#FEE500]" />
    </svg>
  );
}
