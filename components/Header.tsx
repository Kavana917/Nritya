"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteSettings } from "@/lib/types";

const links = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#gallery", label: "Gallery" },
  { href: "#achievements", label: "Achievements" },
  { href: "#faq", label: "FAQ" },
];

export function Header({ settings }: { settings: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--cream)]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="relative flex max-h-10 items-center">
          {settings.logoUrl ? (
            <Image
              src={settings.logoUrl}
              alt={settings.schoolName}
              width={160}
              height={40}
              className={`h-8 w-auto object-contain md:h-9 ${
                onDark ? "brightness-0 invert" : ""
              }`}
              priority
            />
          ) : (
            <span
              className={`site-logo-text transition-colors ${
                onDark ? "text-white" : "text-[var(--maroon-deep)]"
              }`}
            >
              {settings.schoolName}
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-[0.68rem] transition-colors hover:text-[var(--gold)] ${
                onDark ? "text-white/90" : "text-[var(--ink)]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="cta-btn rounded-full bg-[var(--maroon)] px-5 py-2.5 text-[0.68rem] font-light uppercase tracking-[0.14em] text-white transition hover:bg-[var(--maroon-deep)]"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`lg:hidden ${onDark ? "text-white" : "text-[var(--maroon-deep)]"}`}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`h-px w-full transition-colors ${
          onDark ? "bg-white/55" : "bg-[var(--ink)]/15"
        }`}
        aria-hidden
      />

      {open && (
        <div className="border-b border-[var(--maroon)]/10 bg-[var(--cream)] px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link py-1 text-[0.75rem] text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-block rounded-full bg-[var(--maroon)] px-4 py-2 text-center text-sm font-light text-white"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
