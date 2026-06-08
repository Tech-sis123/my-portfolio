"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/backend-engineering", label: "Backend" },
  { href: "/hardware-engineering", label: "Hardware" },
  { href: "/applied-research", label: "Research" },
  { href: "/project-management", label: "Project Mgmt" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[#fdfdfc]/80 dark:bg-[#070707]/80 border-b border-[var(--hairline)]" : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand monogram */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="relative inline-flex items-center gap-1"
            style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.68rem", letterSpacing: "0.15em", color: "var(--ink)" }}
          >
            EB
            <span className="inline-block w-1 h-1 rounded-full bg-[var(--backend)] animate-[pulse-dot_2.5s_ease-in-out_infinite]" />
            ESABU.TECH / 26
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[var(--ink)] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[var(--ink)] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[var(--ink)] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--hairline)] bg-[#fdfdfc]/95 dark:bg-[#070707]/95 backdrop-blur-md">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-6 py-4 nav-link border-b border-[var(--hairline)] ${pathname === l.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4 border-b border-[var(--hairline)]">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
