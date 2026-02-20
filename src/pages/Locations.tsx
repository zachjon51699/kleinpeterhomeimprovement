// Service Areas Page - Updated 2026-02-08
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import HeroCarousel from '../components/HeroCarousel';

export default function Locations() {
  const parishes = [
    {
      name: 'East Baton Rouge Parish',
      cities: [
        { name: 'Baker', link: '/locations/baton-rouge' },
        { name: 'Baton Rouge', link: '/locations/baton-rouge' },
        { name: 'Brownfields', link: '/locations/baton-rouge' },
        { name: 'Central', link: '/locations/baton-rouge' },
        { name: 'Gardere', link: '/locations/baton-rouge' },
        { name: 'Merrydale', link: '/locations/baton-rouge' },
        { name: 'Monticello', link: '/locations/baton-rouge' },
        { name: 'St. George', link: '/locations/baton-rouge' },
        { name: 'Zachary', link: '/locations/baton-rouge' }
      ]
    },
    {
      name: 'Ascension Parish',
      cities: [
        { name: 'Donaldsonville', link: '/locations/gonzales' },
        { name: 'Dutchtown', link: '/locations/gonzales' },
        { name: 'Geismar', link: '/locations/gonzales' },
        { name: 'Gonzales', link: '/locations/gonzales' },
        { name: 'Prairieville', link: '/locations/prairieville' },
        { name: 'Sorrento', link: '/locations/gonzales' },
        { name: 'St. Amant', link: '/locations/prairieville' }
      ]
    },
    {
      name: 'St. Tammany Parish',
      cities: [
        { name: 'Abita Springs', link: '/locations/covington' },
        { name: 'Covington', link: '/locations/covington' },
        { name: 'Folsom', link: '/locations/covington' },
        { name: 'Madisonville', link: '/locations/mandeville' },
        { name: 'Mandeville', link: '/locations/mandeville' },
        { name: 'Pearl River', link: '/locations/slidell' },
        { name: 'Slidell', link: '/locations/slidell' },
        { name: 'Sun', link: '/locations/slidell' }
      ]
    },
    {
      name: 'St. John the Baptist Parish',
      cities: [
        { name: 'Edgard', link: '/locations/new-orleans' },
        { name: 'Garyville', link: '/locations/new-orleans' },
        { name: 'LaPlace', link: '/locations/new-orleans' },
        { name: 'Lutcher', link: '/locations/new-orleans' },
        { name: 'Pleasure Bend', link: '/locations/new-orleans' },
        { name: 'Reserve', link: '/locations/new-orleans' },
        { name: 'Wallace', link: '/locations/new-orleans' }
      ]
    },
    {
      name: 'Livingston Parish',
      cities: [
        { name: 'Denham Springs', link: '/locations/baton-rouge' },
        { name: 'Walker', link: '/locations/baton-rouge' },
        { name: 'Watson', link: '/locations/baton-rouge' }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Service Areas - Kleinpeter's Home Improvement | Baton Rouge, Ascension, St. Tammany Parish"
        description="Kleinpeter's Home Improvement proudly serves Baton Rouge, Ascension Parish, St. Tammany Parish, St. John the Baptist Parish, and surrounding areas across Southeast Louisiana."
        keywords="home improvement service areas Louisiana, Baton Rouge home improvement, Ascension Parish, St. Tammany Parish, Gonzales, Prairieville, Covington, Mandeville, Slidell"
        canonical="https://www.kleinpeterhomeimprovements.com/locations"
      />

      {/* Hero Section */}
      <HeroCarousel className="min-h-[50vh] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 relative z-10 py-10 sm:py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:col-span-7">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Link to="/" className="text-white hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-white mx-2">/</span>
                <span className="text-white font-semibold">Service Areas</span>
              </div>
              
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Service Areas
                </h1>
                <div className="w-24 h-1 bg-kleinpeter-500 mb-6"></div>
                <p className="text-xl text-white leading-relaxed">
                  Kleinpeter's Home Improvement proudly serves Baton Rouge, Ascension Parish, St. Tammany Parish, St. John the Baptist Parish, and surrounding areas across Southeast Louisiana.
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form Card */}
            <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="bg-gray-300 rounded-3xl p-8 w-full max-w-lg shadow-2xl lg:ml-auto">
              <h2 className="text-xl font-bold text-black text-center mb-6">Kleinpeter Home Improvement & Home Maintenance</h2>
              <ContactForm title="" subtitle="" darkMode={false} />
            </div>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Serving Baton Rouge & Surrounding Parishes
            </h2>
            {/* UPDATED LAYOUT - Parishes organized by region */}
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We proudly serve Southeast Louisiana — including Baton Rouge, Gonzales, Prairieville, Zachary, St. Amant, Covington, Mandeville, Slidell, and surrounding communities. Explore the areas where Kleinpeter's Home Improvement delivers expert home improvement services below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parishes.map((parish, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{parish.name}</h3>
                <div className="space-y-2">
                  {parish.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mr-3"></div>
                      <Link
                        to={city.link}
                        className="text-gray-700 hover:text-kleinpeter-600 transition-colors"
                      >
                        {city.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


