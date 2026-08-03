"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Award, Compass } from "lucide-react";

const STATS = [
  {
    value: "04",
    label: "Brands Collaborated With",
    detail: "Knotycap, Satanno, Mamasita & Cha Carnival",
    icon: Users,
    headline: true,
  },
  {
    value: "1.5+ Yrs",
    label: "Digital Marketing Experience",
    detail: "Hands-on execution since Feb 2025",
    icon: Calendar,
    headline: false,
  },
  {
    value: "03",
    label: "Academic & Professional Degrees",
    detail: "IDCM Diploma, M.Com & B.Com (Hons)",
    icon: Award,
    headline: false,
  },
  {
    value: "04",
    label: "Core Skill Disciplines",
    detail: "On-Page SEO, Social, Meta Ads & Influencer",
    icon: Compass,
    headline: false,
  },
];

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFBF6] relative z-10 border-y border-[#141414]/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 hover:border-[#141414] hover:shadow-md transition-all space-y-3 shadow-sm ${
                stat.headline ? "sm:col-span-2 lg:col-span-1 border-[#141414]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#FFFBF6] border border-[#141414]/15 text-[#141414]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-[#141414]/60">0{idx + 1}</span>
              </div>

              <div className="font-numeral font-black text-[#141414] tracking-tight pt-2 text-4xl sm:text-5xl">
                {stat.value}
              </div>

              <h3 className="font-black text-base text-[#141414] uppercase">
                {stat.label}
              </h3>

              <p className="text-xs text-[#525252] font-semibold">
                {stat.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
