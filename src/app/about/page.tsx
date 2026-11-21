import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, PageHeader, PullQuote } from "@/components/editorial";
import { FELLOWSHIP, PROFILES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fellowship-trained neurologist, among the first generation of interventional neurologists. Career spanning stroke center leadership, biotech innovation, and physician entrepreneurship.",
  alternates: { canonical: "/about" },
};

const externalLinks = PROFILES.map((p) => ({ label: p.label, href: p.url }));

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="Biography" title="About">
        <p>{FELLOWSHIP}.</p>
      </PageHeader>

      <div className="px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_17rem] md:gap-16">
        {/* Training */}
        <section>
          <Eyebrow>Background</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium text-navy">Training &amp; Credentials</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-navy/80 md:text-[1.0625rem] [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-2 [&>p:first-child]:first-letter:font-serif [&>p:first-child]:first-letter:text-6xl [&>p:first-child]:first-letter:leading-[0.85] [&>p:first-child]:first-letter:text-gold-deep">
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

        <aside className="md:pt-2">
          <figure>
            <Image
              src="/headshot.jpg"
              alt="Sean C. Orr, M.D."
              width={800}
              height={800}
              sizes="(min-width: 768px) 272px, 100vw"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[0_20px_40px_-20px_rgba(26,26,46,0.5)]"
            />
            <figcaption className="mt-3 text-xs italic text-gray">
              Sean C. Orr, M.D.
            </figcaption>
          </figure>
          <dl className="mt-8 space-y-4 border-t border-navy/10 pt-6 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">M.D.</dt>
              <dd className="mt-1 text-navy/80">University of South Florida, 1995</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Residency</dt>
              <dd className="mt-1 text-navy/80">Neurology, USF, 1999 (Chief Resident)</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Fellowship</dt>
              <dd className="mt-1 text-navy/80">Vascular and Critical Care Neurology, UAB, 2001</dd>
            </div>
          </dl>
        </aside>
      </div>
      </div>

      <div className="band-paper px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* Career Arc */}
        <section>
          <Eyebrow>Career</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium text-navy">From stroke center to founder</h2>
          <div className="mt-8 space-y-8">
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
                className="flex gap-5 border-l-2 border-gold/40 pl-6"
              >
                <span className="w-14 shrink-0 font-serif text-xl italic text-gold-deep">
                  {item.year}
                </span>
                <div>
                  <p className="font-serif text-xl text-navy">{item.title}</p>
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

      </div>
      </div>

      <section className="band-dark px-6 py-16 md:py-24">
        <PullQuote tone="dark" cite="Sean C. Orr, M.D.">
          Brain health is not optional maintenance. It&apos;s the foundation of
          career, relationships, creative output, and legacy.
        </PullQuote>
      </section>

      <div className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        {/* The Neuroeconomy */}
        <section>
          <Eyebrow>An idea</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium text-navy">The Neuroeconomy</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-navy/80 md:text-[1.0625rem]">
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
                className="font-medium text-gold-deep underline decoration-gold/50 underline-offset-4 hover:decoration-gold-deep"
              >
                every venture I operate
              </Link>
              .
            </p>
          </div>
        </section>

        {/* External Links */}
        <section className="mt-12">
          <Eyebrow>Find Me Elsewhere</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-3">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer me"
                className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy transition-all hover:border-gold hover:text-gold-deep"
              >
                {link.label} &rarr;
              </a>
            ))}
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}
