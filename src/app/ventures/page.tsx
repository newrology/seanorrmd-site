import type { Metadata } from "next";

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
    <div className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
          Ventures
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70">
          Six physician-led ventures across patient care, brain nutrition,
          physician media, and physician advocacy. Each one supports the
          others.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="group relative rounded-lg border border-navy/10 bg-white p-8 transition-all hover:border-gold/40 hover:shadow-md"
            >
              {v.status === "building" && (
                <span className="absolute right-4 top-4 rounded-full bg-gold-dim px-3 py-1 text-xs font-medium text-gold">
                  Building
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {v.role}
              </p>
              <h2 className="mt-2 text-xl font-bold text-navy">{v.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray">
                {v.description}
              </p>
              {v.href && (
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-gold transition-colors hover:text-gold-light"
                >
                  Visit {v.name.split(" ")[0]} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
