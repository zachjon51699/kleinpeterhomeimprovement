import { Link } from 'react-router-dom';
import { Droplets, Shield, Wrench, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ServiceGallery from '../components/ServiceGallery';
import SEO from '../components/SEO';
import { getServiceGalleryUrls } from '../data/serviceGalleryImages';

export default function PressureWashing() {
  const pressureWashingServices = [
    {
      title: 'House Washing',
      description: 'Professional house washing services to remove dirt, mold, and mildew from your Louisiana home exterior.',
      icon: Droplets,
      features: ['Siding Cleaning', 'Brick Cleaning', 'Stucco Cleaning', 'Soft Washing']
    },
    {
      title: 'Driveway & Walkway Cleaning',
      description: 'Expert pressure washing services to restore your driveways and walkways to like-new condition.',
      icon: Shield,
      features: ['Concrete Cleaning', 'Paver Cleaning', 'Stain Removal', 'Sealant Application']
    },
    {
      title: 'Deck & Patio Cleaning',
      description: 'Regular deck and patio cleaning to maintain and protect your outdoor living spaces.',
      icon: Wrench,
      features: ['Wood Deck Cleaning', 'Composite Deck Cleaning', 'Patio Cleaning', 'Sealing Services']
    }
  ];

  const serviceTypes = [
    {
      name: 'Residential Pressure Washing',
      description: 'Complete residential pressure washing services for homes throughout Louisiana.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Commercial Pressure Washing', 
      description: 'Professional commercial pressure washing for businesses and commercial properties.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Specialty Cleaning',
      description: 'Specialized cleaning services including roof cleaning, gutter cleaning, and more.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <>
      <SEO
        title="Pressure Washing"
        description="We do pressure washing of your home by Kleinpeter's Home Improvement. House washing, driveway cleaning, deck and patio cleaning across Louisiana. Licensed contractor."
        keywords="pressure washing Louisiana, house washing Baton Rouge, driveway deck patio cleaning Louisiana"
        canonical="https://www.kleinpeterhomeimprovements.com/pressure-washing"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-900 text-white min-h-[280px] sm:min-h-[340px] md:min-h-[400px] py-10 sm:py-14 md:py-16 lg:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${import.meta.env.BASE_URL}Pressure%20Washing.avif")`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
              Pressure Washing in Baton Rouge<br />
              <span className="text-white">& Surrounding Parishes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
              Restore and maintain your Louisiana property with professional pressure washing services. From houses to driveways, we provide comprehensive cleaning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-kleinpeter-600 text-white px-10 py-5 rounded-lg hover:bg-kleinpeter-700 transition-all duration-300 font-bold text-xl flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a 
                href="tel:+12259759845"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-xl flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>(225) 975-9845</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Complete Pressure Washing Services for Louisiana Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From residential to commercial, we provide comprehensive pressure washing services designed to restore and protect your Louisiana property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressureWashingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="bg-kleinpeter-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-kleinpeter-200 transition-colors">
                  <service.icon className="w-10 h-10 text-kleinpeter-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-kleinpeter-600 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quality Pressure Washing Services for Louisiana Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide professional pressure washing services designed to handle Louisiana's humidity, mold, and weather conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{type.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Kleinpeter Home Improvement for Pressure Washing Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Louisiana property owners trust Kleinpeter Home Improvement for professional pressure washing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed Louisiana contractor with comprehensive insurance coverage.'
              },
              {
                title: 'Professional Equipment',
                description: 'We use commercial-grade pressure washing equipment for superior results.'
              },
              {
                title: 'Expert Technicians',
                description: 'Professional technicians trained in safe and effective pressure washing techniques.'
              },
              {
                title: 'Eco-Friendly Solutions',
                description: 'We use environmentally safe cleaning solutions that protect your property and the environment.'
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

      <ServiceGallery
        images={getServiceGalleryUrls('pressureWashing')}
        title="Pressure Washing Projects"
        subtitle="Recent pressure washing work across Louisiana"
      />

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Restore Your Property with Quality Pressure Washing?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Enhance your Louisiana property's curb appeal with professional pressure washing services.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Free pressure washing assessment and estimate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Licensed and insured contractor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Professional equipment and techniques</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Serving all Louisiana communities</span>
                </li>
              </ul>
              <p className="text-xl">
                <strong>Service Areas:</strong> Livingston Parish, Ascension Parish, East Baton Rouge Parish, and surrounding Louisiana areas.
              </p>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Pressure Washing Estimate"
                subtitle="Restore your Louisiana property with quality pressure washing services"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
