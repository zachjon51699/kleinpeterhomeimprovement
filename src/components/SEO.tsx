import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  const siteTitle = 'One Roof - Louisiana Roofing Company';
  const fullTitle = title === 'Home' ? siteTitle : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="One Roof" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          "name": "One Roof",
          "description": "Professional roofing contractor serving Louisiana with residential and commercial roofing services, storm damage repair, and fortified roofing solutions.",
          "url": "https://oneroof.com",
          "telephone": "+15551234567",
          "email": "info@oneroof.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "LA",
            "addressCountry": "US"
          },
          "areaServed": [
            "Baton Rouge, LA",
            "New Orleans, LA", 
            "Covington, LA",
            "Gonzales, LA",
            "Hammond, LA",
            "Slidell, LA",
            "Mandeville, LA"
          ],
          "serviceType": [
            "Roof Repair",
            "Roof Replacement", 
            "Storm Damage Repair",
            "Roof Inspections",
            "Residential Roofing",
            "Commercial Roofing",
            "Fortified Roofing"
          ],
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
}