import Link from "next/link";
import { hoChiMinhBranches } from "@/data/branches";
import { uiCopy } from "@/data/ui";
import { Locale, localizedPath } from "@/lib/site";

export function BranchNetwork({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const copy = uiCopy[locale].branch;

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-chili">{copy.eyebrow}</p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black text-ink md:text-4xl">{copy.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/70">{copy.body}</p>
          </div>
          {!compact ? (
            <Link href={localizedPath(locale, "branches")} className="rounded-md bg-ink px-5 py-3 text-center text-sm font-black text-cream">
              {copy.button}
            </Link>
          ) : null}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hoChiMinhBranches.map((branch) => (
            <article key={branch.name} className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-ink">{branch.name}</h3>
                  <p className="mt-1 text-sm font-bold text-chili">{branch.koreanName}</p>
                </div>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-black text-ink/65">{branch.area}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-ink/70">{branch.address}</p>
              <p className="mt-2 text-sm font-black text-ink">
                {copy.phone}: {branch.phone}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {branch.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-ink/10 px-2.5 py-1 text-xs font-bold text-ink/55">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
