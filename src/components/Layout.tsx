import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "/images/logo.png";

const navLinks = [
  { href: "/", label: "The Hive" },
  { href: "/about", label: "Meet Bee" },
  { href: "/honeycomb", label: "The Honeycomb" },
  { href: "/collections", label: "Collections" },
  { href: "/join", label: "Join the Swarm" },
  { href: "/queens-circle", label: "The Queen's Circle" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(212,168,67,0.1)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={LOGO_URL}
              alt="Hive & Thrive"
              className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:rotate-12"
            />
            <div className="flex flex-col leading-none">
              <span className={`font-display text-lg lg:text-xl font-bold tracking-wide transition-colors duration-500 ${
                scrolled ? "text-navy" : "text-white"
              }`}>
                Hive & Thrive
              </span>
              <span className={`text-[10px] lg:text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-500 ${
                scrolled ? "text-honey-dark" : "text-honey-light"
              }`}>
                with Bee
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  location === link.href
                    ? scrolled ? "text-honey-dark" : "text-honey-light"
                    : scrolled ? "text-charcoal/70 hover:text-honey-dark" : "text-cream/70 hover:text-white"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-honey"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${scrolled ? "text-navy" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-cream/98 backdrop-blur-lg border-t border-honey/20 overflow-hidden"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      location === link.href
                        ? "bg-honey/10 text-honey-dark"
                        : "text-charcoal/70 hover:bg-honey/5 hover:text-honey-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-cream/80">
        <div className="w-full overflow-hidden">
          <svg viewBox="0 0 1200 40" className="w-full h-8 lg:h-10" preserveAspectRatio="none">
            <path
              d="M0,40 L0,20 Q100,0 200,20 Q300,40 400,20 Q500,0 600,20 Q700,40 800,20 Q900,0 1000,20 Q1100,40 1200,20 L1200,40 Z"
              fill="oklch(0.25 0.04 260)"
            />
          </svg>
        </div>

        <div className="container py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={LOGO_URL} alt="Hive & Thrive" className="w-10 h-10 brightness-110" />
                <span className="font-display text-xl font-bold text-cream">Hive & Thrive</span>
              </div>
              <p className="text-sm leading-relaxed text-cream/60 mb-6">
                Helping professional women build thriving careers with purpose. Excellence, resilience, and the courage to fly.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/hiveandthrivelife" target="_blank" rel="noopener noreferrer" className="text-cream/50 hover:text-honey transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-cream/50 hover:text-honey transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="text-cream/50 hover:text-honey transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-honey mb-4">Navigate</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-cream/60 hover:text-honey transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming Soon */}
            <div>
              <h4 className="font-display text-lg font-semibold text-honey mb-4">Coming Soon</h4>
              <ul className="space-y-2.5">
                <li className="text-sm text-cream/60">Hive Talks Podcast</li>
                <li className="text-sm text-cream/60">Guided Journal</li>
                <li className="text-sm text-cream/60">Corporate Workshops</li>
                <li className="text-sm text-cream/60">Speaking Engagements</li>
              </ul>
            </div>

            {/* Daily Nectar */}
            <div>
              <h4 className="font-display text-lg font-semibold text-honey mb-4">Daily Nectar</h4>
              <blockquote className="text-sm italic text-cream/60 leading-relaxed border-l-2 border-honey/30 pl-4">
                "A woman who knows her worth adds value to everything she touches. She is clothed with strength and dignity."
              </blockquote>
              <p className="text-xs text-honey/60 mt-2">~ Bee</p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40">
              &copy; {new Date().getFullYear()} Hive & Thrive. All rights reserved.
            </p>
            <p className="text-xs text-cream/40">
              Built with purpose. Powered by passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
