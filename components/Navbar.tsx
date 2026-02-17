"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#anasayfa");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(`#${current}`);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#anasayfa" className="flex items-center">
            <div className="relative h-14 w-36">
              <Image
                src="/logo.png"
                alt="Derintaş Mermer & Granit"
                fill
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                sizes="144px"
                priority
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  scrolled
                    ? activeSection === link.href
                      ? "text-navy-800"
                      : "text-gray-600 hover:text-navy-800"
                    : activeSection === link.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      scrolled ? "bg-navy-800" : "bg-white"
                    }`}
                  />
                )}
              </a>
            ))}
            <a
              href="#iletisim"
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? "bg-navy-800 text-white hover:bg-navy-900"
                  : "bg-white text-navy-900 hover:bg-white/90"
              }`}
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-gray-600" : "text-white"
            }`}
            aria-label="Menü"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  activeSection === link.href
                    ? "text-navy-800"
                    : "text-gray-600 hover:text-navy-800"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setIsOpen(false)}
              className="block bg-navy-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium text-center hover:bg-navy-900 transition-colors"
            >
              Teklif Al
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
