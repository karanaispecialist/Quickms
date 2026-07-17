"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navLinks } from "./navigation.data";
import NavLink from "./NavLink";
import ServicesMegaMenu from "./ServicesMegaMenu";
import MobileMenu from "./MobileMenu";
import QuoteButton from "./QuoteButton";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor scroll height to trigger floating transition
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when pathname changes (navigation occurs)
  useEffect(() => {
    const handle = setTimeout(() => {
      setMobileMenuOpen(false);
      setMegaMenuOpen(false);
    }, 0);
    return () => clearTimeout(handle);
  }, [pathname]);

  // Handle Mega Menu Hover (Desktop)
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150); // small delay to prevent accidental closing
  };

  // Cleaning up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Check if Services is active
  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between transition-all duration-500 ease-out
          ${scrolled 
            ? "w-[92%] max-w-6xl top-4 px-6 md:px-8 py-3 bg-white/95 backdrop-blur-md border border-neutral-200 shadow-[0_10px_35px_rgba(0,0,0,0.05)] rounded-[3px] text-neutral-dark" 
            : "w-full top-0 px-6 md:px-12 py-6 bg-transparent border-b border-white/5 text-white"
          }
        `}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center focus-ring rounded group w-44 sm:w-48 md:w-52"
          aria-label="Quickmas Integrated Logistics Homepage"
        >
          <Logo scrolled={scrolled} className="w-full" />
        </Link>

        {/* DESKTOP NAVIGATION (Center) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            if (link.hasMegaMenu) {
              return (
                <div
                  key={link.label}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative py-2"
                >
                  <button
                    aria-expanded={megaMenuOpen}
                    aria-controls="mega-menu"
                    className={`flex items-center gap-1 cursor-pointer transition-colors duration-300 focus-ring rounded font-medium
                      ${isServicesActive
                        ? "text-brand-orange"
                        : scrolled
                        ? "text-neutral-dark hover:text-brand-orange"
                        : "text-white/85 hover:text-white"
                      }
                    `}
                  >
                    <span className="relative overflow-hidden block">
                      <span className="block transition-transform duration-300 hover:-translate-y-0.5">
                        {link.label}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${megaMenuOpen ? "rotate-180 text-brand-orange" : ""}`}
                    />
                  </button>
                </div>
              );
            }

            return (
              <NavLink
                key={link.label}
                item={link}
                scrolled={scrolled}
              />
            );
          })}
        </nav>

        {/* RIGHT SIDE: Quote button & Mobile Menu trigger */}
        <div className="flex items-center gap-4">
          {/* CTA - Hidden on mobile */}
          <div className="hidden sm:block">
            <QuoteButton scrolled={scrolled} />
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden flex flex-col justify-center items-end w-8 h-8 focus-ring rounded transition-colors duration-300
              ${scrolled ? "text-neutral-dark hover:text-brand-orange" : "text-white hover:text-brand-orange"}
            `}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {/* Custom 2-line transition to 'X' */}
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-center
                  ${mobileMenuOpen ? "rotate-45 translate-y-[4px] w-6" : "w-6"}
                `}
              />
              <span
                className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-center
                  ${mobileMenuOpen ? "-rotate-45 -translate-y-[4px] w-6" : "w-4"}
                `}
              />
            </div>
          </button>
        </div>

        {/* MEGA MENU CONTAINER */}
        <AnimatePresence>
          {megaMenuOpen && (
            <div
              id="mega-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ServicesMegaMenu
                isOpen={megaMenuOpen}
                onClose={() => setMegaMenuOpen(false)}
                scrolled={scrolled}
              />
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* MOBILE MENU CONTAINER */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
