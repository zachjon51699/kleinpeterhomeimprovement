import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

export default function SEO({ title, description, keywords, canonical, image, type = "website" }: SEOProps) {
  const siteTitle = "Kleinpeter's Home Improvement & Home Maintenance, LLC";
  const fullTitle = title === 'Home' ? siteTitle : `${title} | ${siteTitle}`;
  const siteUrl = 'https://www.kleinpeterhomeimprovements.com';
  const defaultImage = `${siteUrl}/images/kleinpeter-home-improvement.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Kleinpeter's Home Improvement & Home Maintenance, LLC" />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:site" content="@KleinpeterHI" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Kleinpeter's Home Improvement & Home Maintenance, LLC" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeImprovementContractor",
          "name": "Kleinpeter's Home Improvement & Home Maintenance, LLC",
          "alternateName": "Kleinpeter's Home Improvement",
          "description": "Professional home improvement contractor serving Louisiana with gutters, patios, pergolas, screened enclosures, pressure washing, fence, paint, and decks.",
          "url": siteUrl,
          "logo": `${siteUrl}/kleinpeterlogo.png`,
          "image": defaultImage,
          "telephone": "+12259759845",
          "email": "kleinpeter.homes@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "LA",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.4515",
            "longitude": "-91.1871"
          },
          "areaServed": [
            {
              "@type": "AdministrativeArea",
              "name": "Livingston Parish",
              "containedInPlace": {
                "@type": "State",
                "name": "Louisiana"
              }
            },
            {
              "@type": "AdministrativeArea", 
              "name": "Ascension Parish",
              "containedInPlace": {
                "@type": "State",
                "name": "Louisiana"
              }
            },
            {
              "@type": "AdministrativeArea",
              "name": "East Baton Rouge Parish", 
              "containedInPlace": {
                "@type": "State",
                "name": "Louisiana"
              }
            }
          ],
          "serviceType": [
            "Gutter Installation",
            "Gutter Repair", 
            "Patio Installation",
            "Pergola Installation",
            "Screened Enclosure Installation",
            "Pressure Washing",
            "Fence Installation",
            "Painting Services",
            "Deck Installation"
          ],
          "priceRange": "$$",
          "openingHours": "Mo-Su 00:00-23:59",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Home Improvement Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gutters",
                  "description": "Professional gutter installation, repair, and cleaning services"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Patios",
                  "description": "Professional patio installation, repair, and maintenance services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Pergolas",
                  "description": "Beautiful pergola installation, repair, and maintenance services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Screened Enclosures",
                  "description": "Professional screened enclosure installation and repair services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Pressure Washing",
                  "description": "Professional pressure washing services to restore and maintain your property"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Fence",
                  "description": "Professional fence installation, repair, and maintenance services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Paint",
                  "description": "Professional interior and exterior painting services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Decks",
                  "description": "Professional deck installation, repair, and maintenance services"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/kleinpeterhomeimprovements"
          ]
        })}
      </script>
      {/* WebSite schema for sitelinks and search appearance */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Kleinpeter's Home Improvement & Home Maintenance, LLC",
          "alternateName": "Kleinpeter's Home Improvement",
          "url": siteUrl,
          "description": "At Kleinpeter's Home Improvement & Maintenance, your job is our next challenge. We specialize in gutters, patios, screen & glass room enclosures, fences, decks, paint, and pressure washing across Louisiana.",
          "publisher": {
            "@type": "Organization",
            "name": "Kleinpeter's Home Improvement & Home Maintenance, LLC",
            "url": siteUrl
          }
        })}
      </script>
    </Helmet>
  );
}