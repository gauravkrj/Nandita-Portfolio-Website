"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

const EXPERIENCES = [
  {
    num: "01",
    role: "Growth Specialist",
    company: "Knotycap Lifestyle",
    period: "Jun 2026 — Present",
    tag: "Growth",
    isNested: false,
  },
  {
    num: "02",
    role: "Social Media Manager",
    company: "Satanno Street Cafe",
    period: "Feb 2026 — Apr 2026",
    tag: "Social",
    isNested: false,
  },
  {
    num: "03",
    role: "Social Media Manager (Freelance)",
    company: "Clients: Mamasita India, Cha Carnival, Satanno",
    period: "Jun 2025 — Feb 2026",
    tag: "Freelance",
    isNested: false,
  },
  {
    num: "03a",
    role: "Social Media Marketing Manager",
    company: "Mamasita India",
    period: "Aug 2025 — Sep 2025",
    tag: "Social",
    isNested: true,
  },
  {
    num: "03b",
    role: "Social Media Manager",
    company: "Cha Carnival",
    period: "Feb 2025 — Jun 2025",
    tag: "Social",
    isNested: true,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7EADA] relative z-10 border-t border-[#141414]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[0.18em] text-[#141414] mb-2 block">
              WORK HISTORY & TRACK RECORD
            </span>
            <h2 className="text-section-title text-4xl sm:text-6xl font-black text-[#141414]">
              WORK <span className="underline underline-offset-8 decoration-[#141414]">EXPERIENCE</span>
            </h2>
          </div>
          <p className="text-base text-[#141414] font-medium max-w-md">
            Growth leadership, performance marketing, and digital brand management.
          </p>
        </div>

        {/* Numbered List for Experience Roles */}
        <div className="divide-y divide-[#141414]/15 border-y border-[#141414]/15 bg-[#FFFBF6] rounded-3xl p-6 sm:p-8 shadow-sm">
          {EXPERIENCES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group transition-colors ${
                item.isNested ? "ml-6 sm:ml-12 border-l-2 border-[#141414]/20 pl-4 bg-[#F7EADA]/50 rounded-xl" : ""
              }`}
            >
              <div className="flex items-center gap-5">
                <span className={`font-numeral font-black ${item.isNested ? "text-base text-[#525252]" : "text-2xl sm:text-3xl text-[#141414]"}`}>
                  {item.num}
                </span>

                <div className="p-2 rounded-xl bg-[#F7EADA] border border-[#141414]/15 text-[#141414] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                  <Briefcase className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className={`font-black text-[#141414] ${item.isNested ? "text-base sm:text-lg" : "text-lg sm:text-xl"}`}>
                      {item.role}
                    </h3>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded badge-onyx">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#525252] font-semibold mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>

              <div className="sm:text-right text-xs font-numeral font-bold text-[#141414]">
                {item.period}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
