"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import contactContent from "@/content/contact.json";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (isOpen) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "";
    }

    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  const handleNavClick = (href: string) => {
    onClose();
    if (lenis) {
      lenis.start();
      setTimeout(() => {
        lenis.scrollTo(href, { offset: -80, duration: 1.2 });
      }, 150);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#FFFBF6] flex flex-col justify-between p-6 md:p-12 text-[#141414]"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-black tracking-tight text-[#141414]">
              NANDITA SANTRA
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-3 rounded-full bg-[#F7EADA] border border-[#141414]/20 hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-[#141414]" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="my-auto flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="group flex items-baseline gap-4 text-3xl sm:text-5xl font-black tracking-tight text-left transition-colors hover:text-[#525252] cursor-pointer"
                >
                  <span className="text-xs font-semibold tracking-widest text-[#141414]/50 group-hover:text-[#141414]">
                    0{idx + 1}
                  </span>
                  {item.label}
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#141414] inline-block" />
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Footer Socials */}
          <div className="pt-6 border-t border-[#141414]/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-[#141414]">
            <div>
              <p className="text-xs text-[#141414]/60 font-bold uppercase tracking-wider mb-1">Direct Contact</p>
              <a
                href={`mailto:${contactContent.email || "nanditasantra924@gmail.com"}`}
                className="text-[#141414] hover:underline transition-all font-bold"
              >
                {contactContent.email || "nanditasantra924@gmail.com"}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={contactContent.linkedinUrl || "https://www.linkedin.com/in/nandita-santra-/"}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-[#F7EADA] border border-[#141414]/15 hover:bg-[#141414] hover:text-white transition-colors flex items-center gap-2 px-4"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
