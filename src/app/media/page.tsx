import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media & Speaking",
  description:
    "Press mentions, podcast appearances, conference talks, and The Braincast video series from Dr. Sean C. Orr.",
  alternates: { canonical: "/media" },
};

const placeholderSections = [
  {
    title: "Press Mentions",
    description: "Featured coverage and media mentions.",
  },
  {
    title: "Podcast Appearances",
    description: "Guest appearances on podcasts and interview series.",
  },
  {
    title: "Conference Talks",
    description: "Speaking engagements and conference presentations.",
  },
];

export default function MediaPage() {
  return (
    <div className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
          Media &amp; Speaking
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70">
          Talks, interviews, and media appearances. For media inquiries, please
          use the{" "}
          <Link
            href="/contact"
            className="font-medium text-gold hover:underline"
          >
            contact form
          </Link>
          .{" "}
          <a
            href="/sean-orr-md-headshot.jpg"
            download
            className="font-medium text-gold hover:underline"
          >
            Download a high-resolution headshot
          </a>
          .
        </p>

        {/* The Braincast */}
        <section className="mt-12">
          <div className="rounded-lg border border-navy/10 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Video Series
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy">
              The Braincast
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray">
              Deep dives on brain health, neuroscience, physician advocacy, and
              the intersection of medicine and media. Featuring conversations
              with experts, researchers, and physicians who are pushing the
              field forward.
            </p>
            <a
              href="https://www.youtube.com/@TheNeurogenesisProject"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              Watch on YouTube &rarr;
            </a>
          </div>
        </section>

        {/* Placeholder sections */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {placeholderSections.map((section) => (
            <div
              key={section.title}
              className="rounded-lg border border-dashed border-navy/15 bg-white/50 p-8 text-center"
            >
              <h3 className="font-semibold text-navy">{section.title}</h3>
              <p className="mt-2 text-sm text-gray">{section.description}</p>
              <p className="mt-4 text-xs font-medium text-navy/30">
                Coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
