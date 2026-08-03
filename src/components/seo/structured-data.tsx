export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nandita Santra",
    jobTitle: "Digital Marketing Specialist",
    email: "nanditasantra924@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/nandita-santra-/",
    ],
    description:
      "Digital Marketing Specialist specializing in SEO, Social Strategy, Meta Ads Support, and Content Planning.",
    knowsAbout: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Strategy & Calendars",
      "Meta Ads Support",
      "Influencer Barter Outreach",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
