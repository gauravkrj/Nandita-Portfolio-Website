import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { StructuredData } from "@/components/seo/structured-data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nanditasantra.com"),
  title: "Nandita Santra — Digital Marketing Expert & Growth Architect",
  description:
    "A $10,000-caliber agency-grade portfolio for Nandita Santra. Driving multi-million dollar revenue growth through data-driven SEO, paid media, and CRO.",
  keywords: [
    "Nandita Santra",
    "Digital Marketing Consultant",
    "Growth Marketer",
    "SEO Strategist",
    "Paid Performance Media",
    "CRO Specialist",
    "Fractional CMO",
  ],
  authors: [{ name: "Nandita Santra" }],
  creator: "Nandita Santra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nanditasantra.com",
    title: "Nandita Santra — Digital Marketing Expert & Growth Architect",
    description:
      "Architecting scaled acquisition funnels, organic search domination, and performance marketing engines for high-growth global brands.",
    siteName: "Nandita Santra Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nandita Santra — Digital Marketing Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandita Santra — Digital Marketing Expert & Growth Architect",
    description:
      "Architecting scaled acquisition funnels, organic search domination, and performance marketing engines.",
    creator: "@nanditasantra",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased bg-[#fffbf6] text-[#141414] relative font-sans">
        <StructuredData />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
