import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, PullQuote } from "@/components/editorial";

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

const credentials = [
  { label: "Training", value: "M.D., University of South Florida, 1995" },
  {
    label: "Fellowship",
    value: "Vascular and Critical Care Neurology, University of Alabama at Birmingham",
  },
  {
    label: "Practice",
    value: "Co-founder and Chief Medical Officer, The Neurogenesis Project",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero: dark band with a large portrait, in the manner of an author's page */}
      <section className="band-dark overflow-hidden text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-4 px-6 pt-10 md:grid-cols-[1.1fr_1fr] md:gap-8 md:pt-0">
          <div className="order-2 pb-14 md:order-1 md:py-24">
            <Eyebrow tone="dark">Neurologist &middot; Physician Entrepreneur &middot; Media Operator</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Sean C. Orr, M.D.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              Fellowship-trained neurologist building the infrastructure for
              physician-led brain health innovation. Through clinical practice,
              supplement science, physician advocacy media, and physician
              defense, I&apos;m proving that{" "}
              <em className="font-serif text-xl text-gold-light md:text-2xl">
                doctors who own their voice own their future.
              </em>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-gold-light"
              >
                About Dr. Orr
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-cream/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="order-1 mx-auto w-64 sm:w-80 md:order-2 md:w-full md:self-end">
            <Image
              src="/sean-orr-md-headshot.jpg"
              alt="Portrait of Sean C. Orr, M.D."
              width={2048}
              height={1664}
              priority
              sizes="(min-width: 1152px) 520px, (min-width: 768px) 45vw, 320px"
              className="portrait-fade h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-b border-navy/10 bg-white px-6 py-10">
        <dl className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {credentials.map((c) => (
            <div key={c.label} className="border-l-2 border-gold/50 pl-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                {c.label}
              </dt>
              <dd className="mt-2 font-serif text-lg leading-snug text-navy">{c.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Properties */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-navy md:text-4xl">
            Properties &amp; Projects
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((prop, i) => (
              <a
                key={prop.name}
                href={prop.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white p-7 transition-colors hover:bg-cream"
              >
                <span className="font-serif text-sm italic text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-navy">
                  {prop.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray">
                  {prop.description}
                </p>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep">
                  Visit <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </a>
            ))}
            <Link
              href="/ventures"
              className="group flex flex-col justify-center bg-navy p-7 text-cream transition-colors hover:bg-navy-light"
            >
              <span className="font-serif text-2xl leading-snug">See all ventures</span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                The full portfolio <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing quote band, from Sean's own writing on The Neuroeconomy */}
      <section className="band-paper px-6 py-20 md:py-28">
        <PullQuote cite="Sean C. Orr, M.D., on The Neuroeconomy">
          Cognition is the primary unit of human value.
        </PullQuote>
      </section>
    </div>
  );
}
