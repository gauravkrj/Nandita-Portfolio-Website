"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowDownRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import heroContent from "@/content/hero.json";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#FFFBF6] text-[#141414] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        
        {/* Asymmetric Hero Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4">
          
          {/* Main Huge Typography (Positioned Overlapping Image) */}
          <motion.div style={{ y: yText }} className="lg:col-span-8 z-20 space-y-6">
            <h1 className="text-display-hero text-6xl sm:text-8xl lg:text-[9.5rem] text-[#141414] tracking-tighter">
              {heroContent.titleLine1 || "NANDITA"} <br />
              <span className="text-[#141414]">{heroContent.titleLine2 || "SANTRA"}</span>
            </h1>

            <p className="text-lg sm:text-2xl text-[#141414] font-bold max-w-xl leading-snug pt-2">
              {heroContent.subheading}
            </p>

            {/* Inverted Primary CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <MagneticButton
                type="button"
                onClick={() => handleScrollTo("#case-studies")}
                className="px-7 py-3.5 rounded-full button-onyx font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 group"
              >
                <span>View Brand Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </MagneticButton>

              <button
                type="button"
                onClick={() => handleScrollTo("#about")}
                className="px-6 py-3.5 rounded-full bg-[#F7EADA] border border-[#141414]/20 hover:border-[#141414] text-[#141414] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                About Me
              </button>
            </div>
          </motion.div>

          {/* Editorial Visual Composition with Real Photo */}
          <motion.div style={{ y: yImage }} className="lg:col-span-4 z-10">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-[#141414]/20 shadow-xl bg-[#F7EADA] group">
              <Image
                src={heroContent.heroImage || "/nandita-hero.png"}
                alt="Nandita Santra - Digital Marketing Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover grayscale group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white text-xs font-bold uppercase tracking-wider">
                <p className="text-[#FFFBF6]">Digital Marketing Specialist</p>
                <p className="text-white/70 text-[11px] font-normal">IDCM Advanced Diploma Candidate</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Scroll Cue Bottom Center */}
      <div className="pt-8 flex justify-center border-t border-[#141414]/15 mt-8">
        <button
          type="button"
          onClick={() => handleScrollTo("#about")}
          className="group inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-[0.2em] text-[#141414] hover:opacity-70 transition-opacity cursor-pointer"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDownRight className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
