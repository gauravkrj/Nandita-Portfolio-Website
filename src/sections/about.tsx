"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Layers, GraduationCap } from "lucide-react";
import aboutContent from "@/content/about.json";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7EADA] relative z-10 border-t border-[#141414]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[0.18em] text-[#141414] mb-2 block">
              PHILOSOPHY & PURPOSE
            </span>
            <h2 className="text-section-title text-4xl sm:text-6xl font-black text-[#141414]">
              ABOUT & <span className="underline underline-offset-8 decoration-[#141414]">APPROACH</span>
            </h2>
          </div>
          <p className="text-base text-[#141414] font-bold max-w-md leading-snug">
            Combining analytical commerce background with hands-on digital marketing execution.
          </p>
        </div>

        {/* 2-Column Layout: Perfect Natural Height Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait Photo Only */}
          <div className="lg:col-span-4 rounded-3xl bg-[#FFFBF6] border border-[#141414]/15 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#141414] transition-all group">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFFBF6] border border-[#141414]/10">
              <Image
                src={aboutContent.portraitImage || "/nandita-about.png"}
                alt="Nandita Santra - Digital Marketing Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-contain grayscale group-hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>

          {/* Right Column: Narrative Quote + 3 Feature Cards */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Long Narrative Quote Card */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FFFBF6] border border-[#141414]/15 hover:border-[#141414] hover:shadow-md transition-all space-y-4"
            >
              <blockquote className="text-sm sm:text-base font-normal text-[#141414] leading-relaxed">
                &ldquo;{aboutContent.quote}&rdquo;
              </blockquote>

              <div className="pt-3.5 border-t border-[#141414]/15 flex items-center justify-between text-xs font-bold text-[#141414]">
                <p className="italic font-medium text-sm text-[#141414]">{aboutContent.authorName || "— Nandita Santra"}</p>
                <span className="px-3 py-1 rounded-full badge-onyx font-extrabold">{aboutContent.location || "Kolkata, India"}</span>
              </div>
            </motion.div>

            {/* 2 Core Capability Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Card 1: SEO */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-6 rounded-3xl bg-[#FFFBF6] border border-[#141414]/15 hover:border-[#141414] hover:shadow-md transition-all space-y-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F7EADA] flex items-center justify-center text-[#141414] border border-[#141414]/10">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#141414] uppercase">
                  {aboutContent.seoTitle || "SEO & Content Optimization"}
                </h3>
                <p className="text-xs text-[#525252] leading-relaxed font-medium">
                  {aboutContent.seoDescription}
                </p>
              </motion.div>

              {/* Card 2: Social Strategy */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-6 rounded-3xl bg-[#FFFBF6] border border-[#141414]/15 hover:border-[#141414] hover:shadow-md transition-all space-y-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F7EADA] flex items-center justify-center text-[#141414] border border-[#141414]/10">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#141414] uppercase">
                  {aboutContent.socialTitle || "Social Strategy & Meta Ads"}
                </h3>
                <p className="text-xs text-[#525252] leading-relaxed font-medium">
                  {aboutContent.socialDescription}
                </p>
              </motion.div>

            </div>

            {/* Card 3: Education & Qualification */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-6 rounded-3xl bg-[#FFFBF6] border border-[#141414]/15 hover:border-[#141414] hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#F7EADA] flex items-center justify-center text-[#141414] border border-[#141414]/10 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#141414] uppercase">
                    Education & Diploma
                  </h3>
                  <p className="text-xs text-[#525252] leading-relaxed font-medium">
                    {aboutContent.educationText}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 text-[11px] font-bold text-[#141414] shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-[#F7EADA] border border-[#141414]/15">IDCM Diploma</span>
                <span className="px-2.5 py-1 rounded-full bg-[#F7EADA] border border-[#141414]/15">M.Com</span>
                <span className="px-2.5 py-1 rounded-full bg-[#F7EADA] border border-[#141414]/15">B.Com (Hons)</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
