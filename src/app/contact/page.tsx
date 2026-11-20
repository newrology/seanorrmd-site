"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — just show confirmation
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
            <svg
              className="h-8 w-8 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-bold text-navy">
            Thank you, {formData.name}.
          </h1>
          <p className="mt-3 text-base text-gray">
            Your message has been received. I&apos;ll be in touch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-base leading-relaxed text-navy/70">
          Professional inquiries — partnerships, speaking, media, and
          collaboration. For patient care, please visit{" "}
          <a
            href="https://neurogenesisproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold hover:underline"
          >
            neurogenesisproject.com
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-navy"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-2 block w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder-navy/30 transition-colors focus:border-gold focus:ring-0"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-navy"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-2 block w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder-navy/30 transition-colors focus:border-gold focus:ring-0"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-2 block w-full resize-none rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder-navy/30 transition-colors focus:border-gold focus:ring-0"
              placeholder="How can I help?"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
