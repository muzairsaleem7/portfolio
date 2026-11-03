import { siteConfig } from "~/site.config";

export function PersonJsonLd() {
  const sameAs = [siteConfig.links.linkedin, siteConfig.links.github].filter(Boolean);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Product Engineer",
    description: siteConfig.description,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    sameAs,
    knowsAbout: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Supabase", "SaaS"],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; the content is static and we escape "<" to be safe in HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
