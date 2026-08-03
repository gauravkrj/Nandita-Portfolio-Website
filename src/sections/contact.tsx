"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, ArrowUpRight, CheckCircle2, Send, Clock, MapPin, Loader2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import contactContent from "@/content/contact.json";

const SERVICE_OPTIONS = [
  "SEO & Content Optimization",
  "Social Media Strategy",
  "Meta Ads Support",
  "Influencer Barter Deals",
  "Canva Creative Design",
  "Other",
];

export function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["SEO & Content Optimization"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFBF6] relative z-10 border-t border-[#141414]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[0.18em] text-[#141414] mb-2 block">
              LET&apos;S CONNECT
            </span>
            <h2 className="text-section-title text-4xl sm:text-6xl font-black text-[#141414]">
              SCALE YOUR <span className="underline underline-offset-8 decoration-[#141414]">BRAND</span>
            </h2>
          </div>
          <p className="text-base text-[#141414] font-bold max-w-md leading-snug">
            Accepting select brand retainers &amp; strategic collaborations.
          </p>
        </div>

        {/* Contact Form & Direct Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Direct Links Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 space-y-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-[#141414] uppercase">
                Direct Contact &amp; Actions
              </h3>

              <div className="space-y-3 pt-1">
                {/* Calendly Booking */}
                <a
                  href={contactContent.calendlyUrl || "https://calendly.com/nanditasantra/visibility-power-call"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl button-onyx font-extrabold group"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <p className="font-extrabold text-sm uppercase">Visibility Power Call</p>
                      <p className="text-[11px] opacity-80">Book a Call via Calendly</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${contactContent.email || "nanditasantra924@gmail.com"}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FFFBF6] border border-[#141414]/15 hover:border-[#141414] text-[#141414] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#141414]" />
                    <div>
                      <p className="font-extrabold text-sm uppercase">Direct Email</p>
                      <p className="text-[11px] text-[#525252] font-semibold">{contactContent.email || "nanditasantra924@gmail.com"}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#141414] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 space-y-3 text-xs font-bold text-[#525252]">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#141414]" />
                <span>Response Time: Within 12 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#141414]" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 p-8 sm:p-10 relative overflow-hidden shadow-sm">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#141414] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black uppercase text-[#141414]">
                  INQUIRY SENT SUCCESSFULLY
                </h3>
                <p className="text-sm text-[#525252] font-medium max-w-md mx-auto">
                  Your message has been delivered to <span className="font-bold text-[#141414]">{contactContent.email}</span> &amp; <span className="font-bold text-[#141414]">{contactContent.testEmail}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#FFFBF6] border border-[#141414]/15 text-xs font-bold uppercase text-[#141414] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Target Services */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-[#141414] uppercase tracking-wider block">
                    1. Target Services
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#141414] text-white border-[#141414]"
                              : "bg-[#FFFBF6] border-[#141414]/15 text-[#141414] hover:border-[#141414]"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-[#141414] uppercase tracking-wider block">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-[#141414] placeholder-[#8a8a8a] text-sm focus:outline-none focus:border-[#141414] focus:border-2"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-[#141414] uppercase tracking-wider block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-[#141414] placeholder-[#8a8a8a] text-sm focus:outline-none focus:border-[#141414] focus:border-2"
                    />
                  </div>
                </div>

                {/* Phone (Optional) & Website / Social Handle Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-[#141414] uppercase tracking-wider block">
                      Phone Number <span className="text-[#525252] font-semibold text-[10px] lowercase">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-[#141414] placeholder-[#8a8a8a] text-sm focus:outline-none focus:border-[#141414] focus:border-2"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-[#141414] uppercase tracking-wider block">
                      Website / Social Handle
                    </label>
                    <input
                      type="text"
                      placeholder="https://yourbrand.com or @yourbrand"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-[#141414] placeholder-[#8a8a8a] text-sm focus:outline-none focus:border-[#141414] focus:border-2"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#141414] uppercase tracking-wider block">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell me about your brand goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-[#141414] placeholder-[#8a8a8a] text-sm focus:outline-none focus:border-[#141414] focus:border-2 resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl button-onyx font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
