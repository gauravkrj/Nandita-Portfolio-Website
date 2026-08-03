"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, Award, BookOpen } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import contactContent from "@/content/contact.json";

const CREDENTIALS = [
  {
    num: "01",
    type: "Advanced Diploma",
    title: "Digital & Content Marketing",
    institution: "IDCM — Institute of Digital & Content Marketing",
    year: "Oct 2025 — Present",
    icon: Award,
  },
  {
    num: "02",
    type: "Master of Commerce",
    title: "Accounting & Finance",
    institution: "Calcutta University",
    year: "2022 — 2024",
    icon: GraduationCap,
  },
  {
    num: "03",
    type: "B.Com Honours",
    title: "Accounting & Finance",
    institution: "St. Xavier's College, Kolkata",
    year: "2019 — 2022",
    icon: GraduationCap,
  },
  {
    num: "04",
    type: "Schooling",
    title: "Higher Secondary & Secondary Education",
    institution: "Rose Bud, Liluah",
    year: "2012 — 2019",
    icon: BookOpen,
  },
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFBF6] relative z-10 border-t border-[#141414]/15">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header & Signature Inverted Resume Download Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[0.18em] text-[#141414] mb-2 block">
              ACADEMIC & PROFESSIONAL EDUCATION
            </span>
            <h2 className="text-section-title text-4xl sm:text-6xl font-black text-[#141414]">
              CREDENTIALS & <span className="underline underline-offset-8 decoration-[#141414]">BACKGROUND</span>
            </h2>
          </div>

          {/* Signature Inverted CTA Button */}
          <div>
            <a
              href={contactContent.resumePdf || "/Nandita_Santra_Resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <MagneticButton
                type="button"
                className="px-8 py-4 rounded-2xl button-onyx font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center gap-3 group cursor-pointer"
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume (CV)</span>
              </MagneticButton>
            </a>
          </div>
        </div>

        {/* Large Numbered Credentials List */}
        <div className="divide-y divide-[#141414]/15 border-y border-[#141414]/15">
          {CREDENTIALS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#F7EADA] px-4 transition-colors rounded-2xl"
              >
                <div className="flex items-center gap-6">
                  <span className="font-numeral text-2xl sm:text-3xl text-[#141414] font-black">
                    {item.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#F7EADA] border border-[#141414]/15 text-[#141414] group-hover:bg-[#141414] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#141414]/70 block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#141414]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#525252] font-semibold mt-0.5">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right text-xs font-numeral font-bold text-[#141414]">
                  {item.year}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
