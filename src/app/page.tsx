import { Navbar } from "@/components/ui/navbar";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { CredentialsSection } from "@/sections/credentials";
import { ExperienceSection } from "@/sections/experience";
import { ServicesSection } from "@/sections/services";
import { CaseStudiesSection } from "@/sections/case-studies";
import { ProcessSection } from "@/sections/process";
import { StatsSection } from "@/sections/stats";
import { TestimonialsSection } from "@/sections/testimonials";
import { ContactSection } from "@/sections/contact";
import { FooterSection } from "@/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF6] text-[#141414] relative font-sans">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CredentialsSection />
      <ExperienceSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
