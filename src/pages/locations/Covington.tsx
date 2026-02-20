import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import HeroCarousel from '../../components/HeroCarousel';
import LocationMap from '../../components/LocationMap';
import SEO from '../../components/SEO';

export default function Covington() {
  const services = [
    'Residential Roofing',
    'Commercial Roofing', 
    'Fortified Roofing',
    'Storm Damage Repair',
    'Roof Inspections',
    'Gutter Installation',
    'Siding Installation'
  ];

  const areas = [
    'Downtown Covington',
    'Riverbend',
    'Bogue Falaya',
    'Covington Country Club',
    'Tchefuncte Trace',
    'St. Tammany Parish',
    'Madisonville',
    'Abita Springs',
    'Folsom',
    'Bush'
  ];

  return (
    <>
      <SEO
        title="Covington Home Improvement Services - Kleinpeter's Home Improvement"
        description="Professional home improvement services in Covington, LA. Gutters, patios, pergolas, screened enclosures, fence, paint, decks, and pressure washing. Serving St. Tammany, Washington & Tangipahoa parishes. Licensed contractor."
        keywords="home improvement Covington, Covington home improvement, gutters Covington, patios Covington, fence installation Covington, North Shore home improvement, deck installation Covington LA"
        canonical="https://www.kleinpeterhomeimprovements.com/locations/covington"
      />

      {/* Hero Section */}
      <HeroCarousel className="min-h-[50vh] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:col-span-7">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Link to="/" className="text-white hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-white mx-2">/</span>
                <Link to="/locations" className="text-white hover:text-white transition-colors">
                  Service Areas
                </Link>
                <span className="text-white mx-2">/</span>
                <span className="text-white font-semibold">Covington</span>
              </div>
              
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Covington<br />
                  <span className="text-white">Home Improvement Services</span>
                </h1>
                <div className="w-24 h-1 bg-kleinpeter-500 mb-6"></div>
                <p className="text-xl text-white leading-relaxed">
                  Professional home improvement services in Covington, Louisiana. Serving St. Tammany Parish and the North Shore with expert gutters, patios, pergolas, fence, paint, decks, and more.
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Covington Home Improvement Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete home improvement solutions for Covington homes and businesses. Gutters, patios, pergolas, fence, paint, decks, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
                <div className="bg-kleinpeter-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-kleinpeter-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Serving Covington & North Shore
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kleinpeter&apos;s Home Improvement provides professional home improvement services throughout Covington and the North Shore area. We understand the unique character of this historic community.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Covington Areas We Serve:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-kleinpeter-600" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-kleinpeter-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Parishes We Serve:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-kleinpeter-600" />
                    <span className="text-gray-700">St. Tammany Parish</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-kleinpeter-600" />
                    <span className="text-gray-700">Washington Parish</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-kleinpeter-600" />
                    <span className="text-gray-700">Tangipahoa Parish</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <LocationMap locationKey="covington" title="Covington" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Covington Homeowners Choose Kleinpeter&apos;s
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local North Shore expertise, historic home experience, and commitment to quality home improvement solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'North Shore Expertise',
                description: 'Deep knowledge of Covington and St. Tammany Parish home improvement requirements.'
              },
              {
                title: 'Historic Home Experience',
                description: 'Specialized experience with Covington\'s historic downtown properties.'
              },
              {
                title: 'Local Covington Team',
                description: 'Local contractors who understand North Shore weather and building codes.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-kleinpeter-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-kleinpeter-700 transition-colors shadow-lg">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready for Professional Home Improvement in Covington?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Contact Kleinpeter&apos;s Home Improvement today for your free Covington estimate. We serve all neighborhoods and surrounding North Shore areas with expert home improvement solutions.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Free Covington estimate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">North Shore home improvement expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Historic home experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Emergency storm damage repair</span>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Covington Estimate"
                subtitle="Professional home improvement services in Covington, Louisiana"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


