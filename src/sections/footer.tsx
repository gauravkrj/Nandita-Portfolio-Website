"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/icons";
import contactContent from "@/content/contact.json";

export function FooterSection() {
  const [localTime, setLocalTime] = useState<string>("");
  const lenis = useLenis();

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTop = () => {
    if (lenis) {
      lenis.scrollTo("#hero", { duration: 1.5 });
    }
  };

  return (
    <footer className="bg-[#FFFBF6] text-[#141414] pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-[#141414]/15 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-5">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#141414]">
              NANDITA SANTRA
            </h3>
            <p className="text-sm text-[#525252] max-w-sm leading-relaxed font-medium">
              Digital Marketing Specialist — SEO, Social Strategy &amp; Content.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F7EADA] border border-[#141414]/15 text-xs font-bold text-[#141414]">
              <span className="w-2 h-2 rounded-full bg-[#141414] animate-pulse" />
              <span>Available for New Projects</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-black uppercase text-[#141414] tracking-widest">
              Navigation
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wider font-bold text-[#525252]">
              {["About", "Experience", "Services", "Work", "Process", "Contact"].map((item) => {
                const slug = item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => lenis?.scrollTo(`#${slug}`, { offset: -80 })}
                      className="hover:text-[#141414] hover:underline transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-3 space-y-5">
            <div>
              <p className="text-xs font-black uppercase text-[#141414] tracking-widest mb-3">
                Connect
              </p>
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

            <div className="space-y-1 text-xs text-[#525252] font-semibold">
              <p className="text-[#141414] font-bold uppercase text-[11px]">Direct Contact</p>
              <a
                href={`mailto:${contactContent.email || "nanditasantra924@gmail.com"}`}
                className="hover:text-[#141414] hover:underline block"
              >
                {contactContent.email || "nanditasantra924@gmail.com"}
              </a>
            </div>

            <div className="space-y-1 text-xs text-[#525252] font-semibold pt-1">
              <p className="text-[#141414] font-bold uppercase text-[11px]">Local Time (Kolkata, IN)</p>
              <p className="font-mono text-[#141414] font-bold">{localTime || "12:00:00 PM"}</p>
            </div>
          </div>

        </div>

        {/* Massive Horizontally Straight Greyish Watermark Brand Display */}
        <div className="py-4 overflow-hidden select-none pointer-events-none text-center">
          <h2 className="text-7xl sm:text-[11rem] lg:text-[15rem] font-black uppercase tracking-tighter text-[#141414]/10 leading-none whitespace-nowrap">
            NANDITA
          </h2>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-[#141414]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#525252]">
          <p>&copy; {new Date().getFullYear()} Nandita Santra. All Rights Reserved.</p>
          <button
            type="button"
            onClick={handleScrollTop}
            className="group flex items-center gap-2 hover:text-[#141414] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
