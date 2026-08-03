"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Share2, Users, Palette, Plus, Minus, ArrowUpRight } from "lucide-react";
import { useLenis } from "lenis/react";

const SERVICES = [
  {
    id: "seo",
    num: "01",
    title: "On-Page SEO",
    tagline: "Keyword & Content Optimization",
    icon: Search,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    capabilities: [
      "Target Keyword Research & Structuring",
      "Meta Titles & Descriptions Optimization",
      "Image Alt Text & On-Page Audits",
      "Content Matrix & Blog SEO Alignments",
    ],
  },
  {
    id: "social-media",
    num: "02",
    title: "Social Media Management",
    tagline: "Content Planning & Scheduling",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    capabilities: [
      "Monthly Content Calendar Planning",
      "Audience Engagement & Community Support",
      "Competitor Social Benchmarking",
      "Multi-Channel Post Scheduling",
    ],
  },
  {
    id: "paid-social",
    num: "03",
    title: "Paid Social Support",
    tagline: "Meta Ads Campaign Assistance",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    capabilities: [
      "Meta Campaign Audience Setup",
      "Ad Creative Copy & Hook Drafting",
      "Campaign Monitoring Support",
      "Performance Reporting Sprints",
    ],
  },
  {
    id: "influencer",
    num: "04",
    title: "Influencer Partnerships",
    tagline: "Barter Collaborations",
    icon: Users,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    capabilities: [
      "Creator Outreach & Onboarding",
      "Barter Deal Coordination",
      "UGC Content Deliverable Tracking",
      "Brand Collaboration Management",
    ],
  },
  {
    id: "content-design",
    num: "05",
    title: "Content Design",
    tagline: "Canva-Based Creative Assets",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    capabilities: [
      "Canva Social Media Graphics",
      "Carousel & Story Visual Layouts",
      "Brand Template Creation",
      "Visual Asset Formatting",
    ],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string>("seo");
  const lenis = useLenis();

  const handleBookCall = () => {
    if (lenis) {
      lenis.scrollTo("#contact", { offset: -80, duration: 1.2 });
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7EADA] relative z-10 border-t border-[#141414]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-section-title text-4xl sm:text-6xl font-black text-[#141414]">
              MARKETING <span className="underline underline-offset-8 decoration-[#141414]">SERVICES</span>
            </h2>
          </div>
          <p className="text-base text-[#141414] font-bold max-w-md">
            Hands-on execution across search, social, and content design.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const isOpen = activeService === service.id;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={false}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#FFFBF6] border-[#141414] shadow-md"
                    : "bg-[#FFFBF6] border-[#141414]/15 hover:border-[#141414]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveService(isOpen ? "" : service.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-numeral text-base font-black text-[#141414]">
                      {service.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-[#F7EADA] border border-[#141414]/15 text-[#141414] hidden sm:block">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl sm:text-2xl text-[#141414] uppercase tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs font-bold text-[#141414]/70 uppercase tracking-wider mt-1">
                        — {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-[#F7EADA] border border-[#141414]/15 text-[#141414]">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-[#141414]/15 space-y-6">
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          <div className="lg:col-span-7 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.capabilities.map((cap, idx) => (
                                <div
                                  key={idx}
                                  className="p-3 rounded-xl bg-[#F7EADA] border border-[#141414]/15 flex items-center gap-2.5 text-xs text-[#141414] font-bold"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] flex-shrink-0" />
                                  <span>{cap}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="lg:col-span-5">
                            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#141414]/15 shadow-sm">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 35vw"
                                className="object-cover grayscale hover:scale-105 transition-all duration-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            type="button"
                            onClick={handleBookCall}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#141414] hover:opacity-70 transition-opacity cursor-pointer"
                          >
                            <span>Request Collaboration</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
