import type { Metadata } from "next";
import Link from "next/link";
import { PROFILES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fellowship-trained neurologist, among the first generation of interventional neurologists. Career spanning stroke center leadership, biotech innovation, and physician entrepreneurship.",
  alternates: { canonical: "/about" },
};

const externalLinks = PROFILES.map((p) => ({ label: p.label, href: p.url }));

export default function AboutPage() {
  return (
    <div className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
          About
        </h1>

        {/* Training */}
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
            Training &amp; Credentials
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-navy/80">
            <p>
              I&apos;m a fellowship-trained neurologist, part of the first
              generation of interventional neurologists in the United States.
              I completed a Fellowship in Vascular and Critical Care Neurology
              at the University of Alabama at Birmingham in 2001 under Dr.
              Camilo Gomez, with training in endovascular intervention:
              percutaneous endovascular procedures and IV tissue plasminogen
              activator (tPA) for acute stroke, at a time when most of these
              techniques were brand new.
            </p>
            <p>
              B.S. (1991). M.D. (1995), University of South Florida College of
              Medicine, followed by an internal medicine internship (1996) and
              neurology residency (1999, Chief Resident in the PGY-4 year) at
              USF. I&apos;m a charter member of the Society of Vascular and
              Interventional Neurology (SVIN), served on the board of the Brain
              Injury Association of Florida, and was formerly the team
              concussion physician for the Jacksonville Jaguars.
            </p>
            <p>
              I&apos;m a trained neuroimager — qualified to read and interpret
              MRI, CT, PET, and neurovascular doppler ultrasound, and trained
              to perform transcranial doppler ultrasound. During my early
              career, I helped innovate neurocritical care procedures and
              protocols including hypertonic saline, endovascular cooling, and
              intraventricular fibrinolysis for intracranial hemorrhage.
            </p>
          </div>
        </section>

        {/* Career Arc */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
            Career
          </h2>
          <div className="mt-6 space-y-6">
            {[
              {
                year: "2004",
                title: "Stroke Center Medical Director",
                org: "Baptist Medical Center, Jacksonville",
              },
              {
                year: "2009",
                title: "Founder & Chief of Neurology",
                org: "Baptist Neurology, Jacksonville",
                note: "Team concussion physician, Jacksonville Jaguars",
              },
              {
                year: "2014",
                title: "U.S. Vice President",
                org: "Ornim Medical (Israeli biotech)",
                note: "Launched the world's first non-invasive brain blood flow monitor into the Neurocritical Care market. The device used C-Flow — a proprietary technology combining laser tagging of red blood cells with doppler shift measurement to monitor changes in cerebral blood flow.",
              },
              {
                year: "2020–",
                title: "Founder & Physician Entrepreneur",
                org: "The Neurogenesis Project, Action Potential Supplements, Doctor Media Group, Florida Doctor Magazine",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="flex gap-4 border-l-2 border-gold/30 pl-6"
              >
                <span className="shrink-0 text-sm font-semibold text-gold">
                  {item.year}
                </span>
                <div>
                  <p className="font-semibold text-navy">{item.title}</p>
                  <p className="text-sm text-gray">{item.org}</p>
                  {item.note && (
                    <p className="mt-1 text-sm leading-relaxed text-navy/60">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Neuroeconomy */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
            The Neuroeconomy
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-navy/80">
            <p>
              I coined the term <em>The Neuroeconomy</em> to describe the new
              economic reality in which income is tied more than ever to frontal
              lobe function and integrity. This is not a metaphor — it is the
              framework that motivates everything I build.
            </p>
            <p>
              Cognition is the primary unit of human value. Brain health is not
              optional maintenance — it&apos;s the foundation of career,
              relationships, creative output, and legacy. This thread runs
              through{" "}
              <Link
                href="/ventures"
                className="font-medium text-gold hover:underline"
              >
                every venture I operate
              </Link>
              .
            </p>
          </div>
        </section>

        {/* External Links */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
            Find Me Elsewhere
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer me"
                className="rounded-full border border-navy/10 px-4 py-2 text-sm font-medium text-navy transition-all hover:border-gold/40 hover:text-gold"
              >
                {link.label} &rarr;
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
