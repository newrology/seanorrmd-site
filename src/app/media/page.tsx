import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/editorial";

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
    <div>
      <PageHeader eyebrow="Press" title="Media & Speaking">
        <p>
          Talks, interviews, and media appearances. For media inquiries, please
          use the{" "}
          <Link
            href="/contact"
            className="font-medium text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
          >
            contact form
          </Link>
          .{" "}
          <a
            href="/sean-orr-md-headshot.jpg"
            download
            className="font-medium text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
          >
            Download a high-resolution headshot
          </a>
          .
        </p>
      </PageHeader>
    <div className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* The Braincast */}
        <section>
          <div className="band-paper relative overflow-hidden rounded-xl border border-navy/10 p-8 md:p-12">
            <span className="rule-gold" aria-hidden="true" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Video Series
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-navy">
              The Braincast
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy/75">
              Deep dives on brain health, neuroscience, physician advocacy, and
              the intersection of medicine and media. Featuring conversations
              with experts, researchers, and physicians who are pushing the
              field forward.
            </p>
            <a
              href="https://www.youtube.com/@TheNeurogenesisProject"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-navy-light"
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
              className="rounded-xl border border-dashed border-navy/20 bg-white/60 p-8 text-center"
            >
              <h3 className="font-serif text-xl text-navy">{section.title}</h3>
              <p className="mt-2 text-sm text-gray">{section.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-navy/55">
                Coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
