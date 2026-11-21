import type { ReactNode } from "react";

/** Small uppercase label with a short gold rule above it. */
export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div>
      <span className="rule-gold" aria-hidden="true" />
      <p
        className={`mt-3 text-xs font-semibold uppercase tracking-[0.2em] ${
          tone === "dark" ? "text-gold" : "text-gold-deep"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/** Dark title band used at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="band-dark px-6 pb-14 pt-16 text-cream md:pb-20 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        <h1 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Centered italic pull quote set between sections. Text must be Sean's own words. */
export function PullQuote({
  children,
  cite,
  tone = "light",
}: {
  children: ReactNode;
  cite?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <span
        aria-hidden="true"
        className={`block font-serif text-6xl leading-none ${dark ? "text-gold" : "text-gold/70"}`}
      >
        &ldquo;
      </span>
      <blockquote
        className={`mt-2 font-serif text-2xl italic leading-snug md:text-3xl ${
          dark ? "text-cream" : "text-navy"
        }`}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption
          className={`mt-5 text-xs font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-gold" : "text-gold-deep"
          }`}
        >
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
