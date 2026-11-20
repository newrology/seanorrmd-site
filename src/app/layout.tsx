import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { personJsonLd, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Sean C. Orr, M.D. — Neurologist & Physician Entrepreneur",
    template: "%s | Sean C. Orr, M.D.",
  },
  description:
    "Fellowship-trained neurologist, physician entrepreneur, and media operator building the infrastructure for physician-led brain health innovation.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sean C. Orr, M.D.",
    title: "Sean C. Orr, M.D. — Neurologist & Physician Entrepreneur",
    description:
      "Fellowship-trained neurologist, physician entrepreneur, and media operator building the infrastructure for physician-led brain health innovation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean C. Orr, M.D.",
    description:
      "Fellowship-trained neurologist, physician entrepreneur, and media operator.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Each page sets its own canonical URL. A canonical here would be inherited
  // by every page and tell search engines that all pages are the home page.
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-navy transition-colors hover:text-gold"
        >
          Sean C. Orr, M.D.
        </Link>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-navy/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 md:hidden">
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-medium text-navy/70 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-cream/70">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-cream">
              Sean C. Orr, M.D.
            </p>
            <p className="mt-1 text-xs text-cream/50">
              Neurologist &middot; Physician Entrepreneur &middot; Media Operator
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="https://neurogenesisproject.com"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-xs text-cream/50 transition-colors hover:text-gold"
            >
              The Neurogenesis Project
            </a>
            <a
              href="https://myactionpotential.com"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-xs text-cream/50 transition-colors hover:text-gold"
            >
              Action Potential
            </a>
            <a
              href="https://floridadoctormagazine.com"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-xs text-cream/50 transition-colors hover:text-gold"
            >
              Florida Doctor Magazine
            </a>
            <a
              href="https://www.youtube.com/@TheNeurogenesisProject"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-xs text-cream/50 transition-colors hover:text-gold"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/seanorrmd/"
              target="_blank"
              rel="noopener noreferrer me"
              className="text-xs text-cream/50 transition-colors hover:text-gold"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-cream/10 pt-6 text-center text-xs text-cream/40">
          &copy; 2026 Sean C. Orr, M.D. Professional information only, not medical advice.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-cream text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
