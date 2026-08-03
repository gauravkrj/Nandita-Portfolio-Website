"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, Compass, Rocket, Repeat } from "lucide-react";

const STEPS = [
  {
    step: "01",
    phase: "Discovery",
    timeline: "Week 1",
    icon: Search,
    headline: "Audit & Leak Detection",
    description: "Deep analytics and SEO audit to locate high-leverage growth opportunities.",
    deliverables: ["GA4 & Server-Side Audit", "Technical SEO Crawl", "Competitor Breakdown"],
  },
  {
    step: "02",
    phase: "Strategy",
    timeline: "Week 2",
    icon: Compass,
    headline: "90-Day Scale Roadmap",
    description: "Channel budget allocations, keyword matrix, and high-converting landing page wireframes.",
    deliverables: ["Channel Budget Plan", "Keyword Matrix", "Landing Page Wireframes"],
  },
  {
    step: "03",
    phase: "Execution",
    timeline: "Weeks 3-6",
    icon: Rocket,
    headline: "Campaign & Funnel Launch",
    description: "Deploying high-intent search campaigns, server-side CAPI, and CRO landing pages.",
    deliverables: ["CRO Landing Page Build", "Google & Meta Launch", "Server-Side CAPI"],
  },
  {
    step: "04",
    phase: "Optimization",
    timeline: "Ongoing",
    icon: Repeat,
    headline: "Testing & Scaling",
    description: "Continuous A/B split-testing across headlines and bidding to lower CAC.",
    deliverables: ["Weekly CRO Split Tests", "Creative Fatigue Refresh", "Real-Time Dashboard"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7EADA] relative z-10 border-t border-[#141414]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-section-title text-4xl sm:text-6xl font-black text-[#141414]">
              4-STEP <span className="underline underline-offset-8 decoration-[#141414]">FRAMEWORK</span>
            </h2>
          </div>
          <p className="text-base text-[#141414] font-medium max-w-md">
            Battle-tested process built for speed to outcome and full execution transparency.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#FFFBF6] border border-[#141414]/15 hover:border-[#141414] hover:shadow-md transition-all space-y-5 flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-numeral text-3xl font-black text-[#141414]">
                      {step.step}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F7EADA] border border-[#141414]/15 text-xs font-black text-[#141414]">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#F7EADA] text-[#141414] group-hover:bg-[#141414] group-hover:text-white transition-colors border border-[#141414]/15">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-widest text-[#141414] mb-1 block">
                        {step.phase}
                      </span>
                      <h3 className="font-black text-xl text-[#141414] uppercase">
                        {step.headline}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#525252] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#141414]/15 space-y-2">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[#141414] font-bold">
                      <CheckCircle className="w-4 h-4 text-[#141414] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
