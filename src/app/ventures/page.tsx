import type { Metadata } from "next";
import { PageHeader, PullQuote } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "The interconnected portfolio of physician-led ventures in brain health, supplements, physician advocacy, and medical media.",
  alternates: { canonical: "/ventures" },
};

const ventures = [
  {
    name: "The Neurogenesis Project",
    role: "Co-founder & CMO",
    description:
      "Precision neurology clinic offering the Intensive Brain Health Program — a 5-day intensive combining IV neurotherapeutics, neuromodulation, and advanced diagnostics — and Rescue From Rehab, an addiction recovery program grounded in neuroscience.",
    href: "https://neurogenesisproject.com",
    status: "active" as const,
  },
  {
    name: "Action Potential Supplements",
    role: "Founder",
    description:
      "Brain nutrition supplement brand with 18+ SKUs focused on the energetic demands of the brain. Society is suffering an epidemic of brain failure — neuronutrients close accessible nutritional gaps that support cognitive performance.",
    href: "https://myactionpotential.com",
    status: "active" as const,
  },
  {
    name: "Florida Doctor Magazine",
    role: "Publisher",
    description:
      "Physician advocacy publication reaching 54,000+ newsletter subscribers. Covering policy, practice, and professional life through a physician-first lens. The flagship property of Doctor Media Group.",
    href: "https://floridadoctormagazine.com",
    status: "active" as const,
  },
  {
    name: "Doctor Media Group",
    role: "CEO",
    description:
      "Umbrella media entity with a mission: help physicians find their voice as leaders. Advocate for physician autonomy and professional security through media, community, and infrastructure.",
    href: null,
    status: "active" as const,
  },
  {
    name: "Physician Defense",
    role: "Founder",
    description:
      "Physician advocacy and legal protection — building the resources and community that physicians need to defend their careers, their licenses, and their autonomy.",
    href: null,
    status: "building" as const,
  },
  {
    name: "The Atlas Accord",
    role: "Co-Founder",
    description:
      "Physician membership organization. Keeping physicians sovereign — staying independent while the ecosystem supplies infrastructure — rather than forcing them into employment or franchise models.",
    href: null,
    status: "building" as const,
  },
];

export default function VenturesPage() {
  return (
    <div>
      <PageHeader eyebrow="Portfolio" title="Ventures">
        <p>
          Six physician-led ventures across patient care, brain nutrition,
          physician media, and physician advocacy. Each one supports the
          others.
        </p>
      </PageHeader>
    <div className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {ventures.map((v, i) => (
            <div
              key={v.name}
              className="group relative flex flex-col rounded-xl border border-navy/10 bg-white p-8 shadow-[0_1px_0_rgba(26,26,46,0.04)] transition-all hover:border-gold/50 hover:shadow-[0_18px_40px_-24px_rgba(26,26,46,0.45)]"
            >
              <span aria-hidden="true" className="font-serif text-sm italic text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              {v.status === "building" && (
                <span className="absolute right-5 top-5 rounded-full border border-gold/40 bg-gold-dim px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">
                  Building
                </span>
              )}
              <h2 className="mt-3 font-serif text-2xl leading-snug text-navy">{v.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                {v.role}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/70">
                {v.description}
              </p>
              {v.href && (
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep transition-colors hover:text-navy"
                >
                  Visit website <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
      <section className="band-paper px-6 py-20 md:py-24">
        <PullQuote cite="Sean C. Orr, M.D.">
          Doctors who own their voice own their future.
        </PullQuote>
      </section>
    </div>
  );
}
