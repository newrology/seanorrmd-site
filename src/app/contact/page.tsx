"use client";

import { useState } from "react";
import { REASONS } from "@/lib/contact";
import { CONTACT_EMAIL, PATIENT_URL } from "@/lib/site";
import { PageHeader } from "@/components/editorial";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 block w-full rounded-lg border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder-navy/30 transition-colors focus:border-gold focus:ring-0";

export default function ContactPage() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setState("error");
        setError(body.error ?? `The message could not be sent. Please email ${CONTACT_EMAIL} directly.`);
        return;
      }
      setName(String(data.name ?? ""));
      setState("sent");
    } catch {
      setState("error");
      setError(`The message could not be sent. Please email ${CONTACT_EMAIL} directly.`);
    }
  }

  if (state === "sent") {
    return (
      <div className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center" role="status">
          <h1 className="font-serif text-4xl font-medium text-navy">Thank you, {name}.</h1>
          <p className="mt-3 text-base text-gray">
            Your message was sent. You&apos;ll get a reply at the email address you entered.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader eyebrow="Correspondence" title="Contact">
        <p>
          Professional inquiries: media, speaking, partnerships, and collaboration with other
          physicians. You can also email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </PageHeader>
    <div className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-xl">
        <p className="border-l-2 border-gold pl-4 text-sm leading-relaxed text-navy/75">
          This form is not for patient care. Patients and families can reach The Neurogenesis
          Project at{" "}
          <a href={PATIENT_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-gold-deep underline decoration-gold/50 underline-offset-4">
            neurogenesisproject.com
          </a>
          . Please don&apos;t include medical information here.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-xl border border-navy/10 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(26,26,46,0.45)] md:p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy">Name</label>
            <input type="text" id="name" name="name" required maxLength={120} autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy">Email</label>
            <input type="email" id="email" name="email" required maxLength={200} autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-navy">
              Organization <span className="font-normal text-gray">(optional)</span>
            </label>
            <input type="text" id="organization" name="organization" maxLength={160} autoComplete="organization" className={field} />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-navy">What is this about?</label>
            <select id="reason" name="reason" required defaultValue="" className={field}>
              <option value="" disabled>Choose one</option>
              {REASONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy">Message</label>
            <textarea id="message" name="message" required minLength={10} maxLength={5000} rows={5} className={`${field} resize-y`} />
          </div>
          {/* Honeypot: hidden from people, filled in by bots. */}
          <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <button
            type="submit"
            disabled={state === "sending"}
            className="w-full rounded-full bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-navy-light disabled:cursor-progress disabled:opacity-60"
          >
            {state === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" aria-live="polite" className="text-sm text-red-700">
            {state === "error" ? error : ""}
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
