import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const properties = [
  {
    name: "The Neurogenesis Project",
    description: "Precision neurology & brain health optimization",
    href: "https://neurogenesisproject.com",
  },
  {
    name: "Action Potential Supplements",
    description: "Brain nutrition backed by neuroscience",
    href: "https://myactionpotential.com",
  },
  {
    name: "Florida Doctor Magazine",
    description: "Physician advocacy & medical media",
    href: "https://floridadoctormagazine.com",
  },
  {
    name: "The Braincast",
    description: "Video series on brain health & medicine",
    href: "https://www.youtube.com/@TheNeurogenesisProject",
  },
  {
    name: "The Neuroeconomy",
    description: "Weekly newsletter on brain health & performance",
    href: "https://neurogenesisproject.com/newsletter",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
            {/* Headshot placeholder */}
            <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-navy/10 md:h-52 md:w-52">
              <span className="text-4xl font-bold text-navy/40 md:text-5xl">
                SO
              </span>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
                Sean C. Orr, M.D.
              </h1>
              <p className="mt-3 text-lg text-gray md:text-xl">
                Neurologist &middot; Physician Entrepreneur &middot; Media
                Operator
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/80 md:text-lg">
                Fellowship-trained neurologist building the infrastructure for
                physician-led brain health innovation. Through clinical
                practice, supplement science, physician advocacy media, and
                physician defense, I&apos;m proving that doctors who own their
                voice own their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-navy/10" />
      </div>

      {/* Properties Grid */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-gold">
            Properties &amp; Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((prop) => (
              <a
                key={prop.name}
                href={prop.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-navy/10 bg-white p-6 transition-all hover:border-gold/40 hover:shadow-md"
              >
                <h3 className="font-semibold text-navy group-hover:text-gold">
                  {prop.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {prop.description}
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Visit &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
