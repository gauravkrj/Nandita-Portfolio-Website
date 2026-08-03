"use client";

import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MobileMenu } from "./mobile-menu";
import { Menu, ArrowUpRight, Download } from "lucide-react";
import contactContent from "@/content/contact.json";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (lenis) {
      lenis.scrollTo(href, { offset: -80, duration: 1.2 });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`w-full flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-[#F7EADA] border border-[#141414]/20 shadow-md"
                : "bg-[#FFFBF6] border border-[#141414]/15 shadow-sm"
            }`}
          >
            {/* Brand Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-3 text-left group cursor-pointer"
              data-cursor-hover="true"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#141414]" />
              <span className="font-extrabold text-sm sm:text-base tracking-tight uppercase text-[#141414] group-hover:opacity-75 transition-opacity">
                NANDITA SANTRA
              </span>
            </button>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-bold text-[#141414]">
              {NAV_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-[#141414] transition-colors relative py-1 group cursor-pointer font-bold"
                  data-cursor-hover="true"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#141414] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Right Action CTAs */}
            <div className="flex items-center gap-3">
              <a
                href={contactContent.resumePdf || "/Nandita_Santra_Resume.pdf"}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFFBF6] border border-[#141414]/20 hover:border-[#141414] text-[#141414] text-xs font-extrabold uppercase tracking-wider transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              <a
                href={contactContent.calendlyUrl || "https://calendly.com/nanditasantra/visibility-power-call"}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:inline-flex px-5 py-2.5 rounded-full button-onyx text-xs font-extrabold uppercase tracking-wider shadow-sm items-center gap-1"
              >
                <span>Book Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full bg-[#F7EADA] border border-[#141414]/20 hover:bg-[#141414] hover:text-white transition-colors ml-2"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5 text-[#141414]" />
            </button>
          </nav>
        </div>

        {/* Top Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#141414] origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
