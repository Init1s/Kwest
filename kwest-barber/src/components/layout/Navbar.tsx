"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center" aria-label="Kwest The Barber">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-logo.jpeg`}
            alt="Kwest The Barber"
            width={128}
            height={128}
            priority
            className={`transition-all duration-300 [mix-blend-mode:screen] ${
              scrolled
                ? "h-12 w-12 md:h-20 md:w-20"
                : "h-14 w-14 md:h-28 md:w-28"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-smoke transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <MagneticButton>
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold font-display text-xs font-bold uppercase tracking-widest text-ink px-5 py-2.5 transition-all hover:bg-gold-light"
            >
              Book Now
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-bone transition-all duration-300 ${
              menuOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full bg-ink/98 backdrop-blur-lg border-b border-gold/10 transition-all duration-300 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-lg font-bold uppercase tracking-widest text-smoke transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold font-display text-center text-sm font-bold uppercase tracking-widest text-ink px-5 py-3"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
