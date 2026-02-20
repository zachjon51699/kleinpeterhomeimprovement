import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import HeroCarousel from '../../components/HeroCarousel';
import LocationMap from '../../components/LocationMap';
import SEO from '../../components/SEO';

export default function BatonRouge() {
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
    'Downtown Baton Rouge',
    'Mid City',
    'Garden District',
    'Highland Road',
    'Perkins Road',
    'Bluebonnet',
    'Shenandoah',
    'Broadmoor',
    'Old South Baton Rouge',
    'Spanish Town'
  ];

  return (
    <>
      <SEO
        title="Baton Rouge Home Improvement Services - Kleinpeter's Home Improvement"
        description="Professional home improvement services in Baton Rouge, LA. Gutters, patios, pergolas, screened enclosures, fence, paint, decks, and pressure washing. Serving East Baton Rouge, West Baton Rouge, Ascension & Livingston parishes. Licensed contractor."
        keywords="home improvement Baton Rouge, Baton Rouge home improvement, gutters Baton Rouge, patios Baton Rouge, fence installation Baton Rouge, painting services Baton Rouge, deck installation Baton Rouge LA"
        canonical="https://www.kleinpeterhomeimprovements.com/locations/baton-rouge"
      />

      {/* Hero Section */}
      <HeroCarousel className="min-h-[600px] flex items-center">
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
                <span className="text-white font-semibold">Baton Rouge</span>
              </div>
              
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Baton Rouge<br />
                  <span className="text-white">Home Improvement Services</span>
                </h1>
                <div className="w-24 h-1 bg-kleinpeter-500 mb-6"></div>
                <p className="text-xl text-white leading-relaxed">
                  Professional home improvement services in Baton Rouge, Louisiana. Serving the capital city and surrounding parishes with expert gutters, patios, pergolas, fence, paint, decks, and more.
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
              Baton Rouge Home Improvement Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete home improvement solutions for Baton Rouge homes and businesses. Gutters, patios, pergolas, fence, paint, decks, and more.
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
                Serving Baton Rouge & Surrounding Areas
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kleinpeter&apos;s Home Improvement provides professional home improvement services throughout Baton Rouge and the surrounding parishes. We&apos;re your local experts with deep knowledge of Louisiana&apos;s unique weather challenges.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Baton Rouge Neighborhoods We Serve:</h3>
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
                    <span className="text-gray-700">East Baton Rouge Parish</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-kleinpeter-600" />
                    <span className="text-gray-700">West Baton Rouge Parish</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-kleinpeter-600" />
                    <span className="text-gray-700">Ascension Parish</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-kleinpeter-600" />
                    <span className="text-gray-700">Livingston Parish</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <LocationMap locationKey="baton-rouge" title="Baton Rouge" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Baton Rouge Homeowners Choose Kleinpeter&apos;s
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local expertise, professional service, and commitment to quality home improvement solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Baton Rouge Expertise',
                description: 'Deep knowledge of Baton Rouge weather patterns and building codes.'
              },
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed Louisiana contractor with comprehensive insurance coverage.'
              },
              {
                title: '24/7 Emergency Service',
                description: 'Storm damage doesn\'t wait - neither do we. Emergency services available.'
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
                Ready for Professional Home Improvement in Baton Rouge?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Contact Kleinpeter&apos;s Home Improvement today for your free Baton Rouge estimate. We serve all neighborhoods and surrounding parishes with expert home improvement solutions.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Free Baton Rouge estimate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Licensed Louisiana contractor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Serving all Baton Rouge neighborhoods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Emergency storm damage repair</span>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Baton Rouge Estimate"
                subtitle="Professional home improvement services in Baton Rouge, Louisiana"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


