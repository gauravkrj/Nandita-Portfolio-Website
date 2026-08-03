"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brandData from "@/content/brand_collaborations.json";

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRowRef = useRef<HTMLDivElement>(null);
  const [, setActiveIndex] = useState(0);

  const brandList = brandData.brands || [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const cardsRow = cardsRowRef.current;

    if (!section || !cardsRow) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(cardsRow.scrollWidth - window.innerWidth + 48);

      gsap.to(cardsRow, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(600, cardsRow.scrollWidth - window.innerWidth + 100)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const idx = Math.min(
              brandList.length - 1,
              Math.floor(progress * brandList.length)
            );
            setActiveIndex(idx);
          },
        },
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="brand-collaborations-section relative bg-[#FFFBF6] border-t border-[#141414]/15 min-h-screen flex flex-col justify-center py-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 mb-6">
        
        {/* Header - Forced to Single Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[0.18em] text-[#141414] mb-1 block">
              PORTFOLIO & BRAND COLLABORATIONS
            </span>
            <h2 className="text-section-title text-3xl sm:text-5xl lg:text-6xl font-black text-[#141414] whitespace-nowrap">
              BRAND <span className="underline underline-offset-8 decoration-[#141414]">COLLABORATIONS</span>
            </h2>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
            <p className="text-sm text-[#141414] font-bold max-w-sm hidden md:block">
              Hands-on work across e-commerce, lifestyle, and food & beverage brands.
            </p>
          </div>
        </div>

      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full overflow-hidden">
        <div
          ref={cardsRowRef}
          className="brand-cards-row flex items-stretch gap-6 px-4 sm:px-6 lg:px-8 max-w-none w-max"
        >
          {brandList.map((project, idx) => (
            <div
              key={project.id || idx}
              className="w-[85vw] sm:w-[45vw] lg:w-[30vw] max-h-[72vh] flex-shrink-0 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 p-6 flex flex-col justify-between group hover:border-[#141414] hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-[#141414]/10 bg-[#FFFBF6]">
                  <Image
                    src={project.image}
                    alt={`${project.brand} brand collaboration by Nandita Santra`}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover object-center grayscale group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#141414]/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FFFBF6] border border-[#141414]/15 text-[11px] font-black text-[#141414]">
                    0{idx + 1} // {project.role}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#141414]/70">
                    <span className="font-black text-[#141414] uppercase text-xs sm:text-sm">{project.brand}</span>
                    <span className="text-[11px]">{project.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm font-extrabold text-[#141414] leading-snug">
                    &ldquo;{project.summary}&rdquo;
                  </p>

                  <div className="space-y-1 pt-1">
                    {project.tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-[#525252]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#141414] flex-shrink-0" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-[#141414]/15 mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => alert(`Brand collaboration details for ${project.brand} available on request.`)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-black text-[#141414] hover:opacity-70 transition-opacity cursor-pointer"
                >
                  <span>View Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
