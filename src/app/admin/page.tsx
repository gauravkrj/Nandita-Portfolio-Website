"use client";

import { useState } from "react";
import { Lock, CheckCircle2, Save, Upload, ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";
import heroContentData from "@/content/hero.json";
import aboutContentData from "@/content/about.json";
import contactContentData from "@/content/contact.json";
import brandContentData from "@/content/brand_collaborations.json";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");

  // Editable Form States initialized with current site content
  const [heroContent, setHeroContent] = useState(heroContentData);
  const [aboutContent, setAboutContent] = useState(aboutContentData);
  const [contactContent, setContactContent] = useState(contactContentData);
  const [brandContent, setBrandContent] = useState(brandContentData);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master admin password for Nandita
    if (password === "Nandita2026!" || password === "admin123") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid admin password. Please try again.");
    }
  };

  const handleSave = async () => {
    setSaveStatus("saving");
    try {
      const res = await fetch("/api/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          hero: heroContent,
          about: aboutContent,
          contact: contactContent,
          brands: brandContent,
        }),
      });

      if (res.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 4000);
      } else {
        setSaveStatus("error");
      }
    } catch (err) {
      console.error("Failed to save site updates:", err);
      setSaveStatus("error");
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFFBF6] flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-3xl bg-[#F7EADA] border border-[#141414]/15 p-8 space-y-6 shadow-lg text-[#141414]">
          <div className="w-12 h-12 rounded-2xl bg-[#141414] text-white flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-2xl font-black uppercase">PORTFOLIO CMS ADMIN</h1>
            <p className="text-xs text-[#525252] font-semibold">Enter your secure password to edit website content.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-wider block">Admin Password</label>
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-[#141414] text-sm focus:outline-none focus:border-[#141414]"
              />
            </div>

            {loginError && (
              <p className="text-xs font-bold text-red-600 bg-red-100 p-2.5 rounded-lg border border-red-200 text-center">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl button-onyx font-extrabold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Unlock Admin Panel</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#FFFBF6] text-[#141414] p-4 sm:p-8 lg:p-12 space-y-8">
      {/* Top Admin Header */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#141414]/15 pb-6">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#525252]">NANDITA SANTRA PORTFOLIO</span>
          <h1 className="text-3xl font-black uppercase text-[#141414]">CONTENT MANAGER</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="px-6 py-3 rounded-full button-onyx font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{saveStatus === "saving" ? "Saving Updates..." : "Save & Update Site"}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-3 rounded-full bg-[#F7EADA] border border-[#141414]/20 font-extrabold text-xs uppercase text-[#141414] hover:bg-[#141414] hover:text-white transition-colors cursor-pointer"
          >
            Lock Panel
          </button>
        </div>
      </div>

      {saveStatus === "success" && (
        <div className="max-w-5xl mx-auto p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-3 text-xs font-bold">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Website content updated successfully!</span>
        </div>
      )}

      {/* Main Content Form Tabs */}
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section 1: Hero Content */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 space-y-6 shadow-sm">
          <h2 className="text-xl font-black uppercase flex items-center gap-2 text-[#141414]">
            <ImageIcon className="w-5 h-5" />
            <span>1. Hero Section</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">Title Line 1</label>
              <input
                type="text"
                value={heroContent.titleLine1}
                onChange={(e) => setHeroContent({ ...heroContent, titleLine1: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">Title Line 2</label>
              <input
                type="text"
                value={heroContent.titleLine2}
                onChange={(e) => setHeroContent({ ...heroContent, titleLine2: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-[#141414]">Subheading</label>
            <textarea
              rows={2}
              value={heroContent.subheading}
              onChange={(e) => setHeroContent({ ...heroContent, subheading: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-[#141414]">Hero Photo Path / URL</label>
            <input
              type="text"
              value={heroContent.heroImage}
              onChange={(e) => setHeroContent({ ...heroContent, heroImage: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
            />
          </div>
        </div>

        {/* Section 2: About Philosophy & Qualifications */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 space-y-6 shadow-sm">
          <h2 className="text-xl font-black uppercase flex items-center gap-2 text-[#141414]">
            <FileText className="w-5 h-5" />
            <span>2. About Section</span>
          </h2>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-[#141414]">Narrative Philosophy Quote</label>
            <textarea
              rows={4}
              value={aboutContent.quote}
              onChange={(e) => setAboutContent({ ...aboutContent, quote: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">Author Signature</label>
              <input
                type="text"
                value={aboutContent.authorName}
                onChange={(e) => setAboutContent({ ...aboutContent, authorName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">Location Tag</label>
              <input
                type="text"
                value={aboutContent.location}
                onChange={(e) => setAboutContent({ ...aboutContent, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-[#141414]">Education & Qualification Text</label>
            <input
              type="text"
              value={aboutContent.educationText}
              onChange={(e) => setAboutContent({ ...aboutContent, educationText: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
            />
          </div>
        </div>

        {/* Section 3: Contact & Links */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F7EADA] border border-[#141414]/15 space-y-6 shadow-sm">
          <h2 className="text-xl font-black uppercase flex items-center gap-2 text-[#141414]">
            <Upload className="w-5 h-5" />
            <span>3. Contact &amp; Links</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">Primary Email</label>
              <input
                type="email"
                value={contactContent.email}
                onChange={(e) => setContactContent({ ...contactContent, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">Test Email</label>
              <input
                type="email"
                value={contactContent.testEmail}
                onChange={(e) => setContactContent({ ...contactContent, testEmail: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">LinkedIn URL</label>
              <input
                type="url"
                value={contactContent.linkedinUrl}
                onChange={(e) => setContactContent({ ...contactContent, linkedinUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#141414]">Calendly Booking URL</label>
              <input
                type="url"
                value={contactContent.calendlyUrl}
                onChange={(e) => setContactContent({ ...contactContent, calendlyUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-[#141414]">Resume PDF Path</label>
            <input
              type="text"
              value={contactContent.resumePdf}
              onChange={(e) => setContactContent({ ...contactContent, resumePdf: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FFFBF6] border border-[#141414]/20 text-sm font-semibold text-[#141414]"
            />
          </div>
        </div>

        {/* Floating Save Button */}
        <div className="pt-4 flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="px-8 py-4 rounded-full button-onyx font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{saveStatus === "saving" ? "Saving..." : "Save All Site Changes"}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
