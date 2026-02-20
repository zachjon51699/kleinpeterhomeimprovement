import { Link } from 'react-router-dom';
import { Home, Shield, Wrench, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ServiceGallery from '../components/ServiceGallery';
import SEO from '../components/SEO';
import { getServiceGalleryUrls } from '../data/serviceGalleryImages';

export default function Decks() {
  const deckServices = [
    {
      title: 'Deck Installation',
      description: 'Professional deck installation for new construction and replacement projects throughout Louisiana.',
      icon: Home,
      features: ['Wood Decks', 'Composite Decks', 'PVC Decks', 'Custom Designs']
    },
    {
      title: 'Deck Repair',
      description: 'Expert deck repair services to fix damage from Louisiana storms and weather conditions.',
      icon: Shield,
      features: ['Board Replacement', 'Structural Repairs', 'Rail Repairs', 'Hardware Repairs']
    },
    {
      title: 'Deck Maintenance',
      description: 'Regular deck maintenance and treatment to protect and extend the life of your deck.',
      icon: Wrench,
      features: ['Staining & Sealing', 'Power Washing', 'Hardware Maintenance', 'Inspection Services']
    }
  ];

  const deckTypes = [
    {
      name: 'Wood Decks',
      description: 'Classic wood decks that add natural beauty and value to your Louisiana home.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Composite Decks', 
      description: 'Low-maintenance composite decks that resist weather and require minimal upkeep.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'PVC Decks',
      description: 'Durable PVC decks that withstand Louisiana humidity and weather conditions.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <>
      <SEO
        title="Decks"
        description="Decks by Kleinpeter's Home Improvement & Home Maintenance. Professional deck installation, repair, and maintenance across Louisiana. Wood, composite, and PVC decks. Licensed contractor."
        keywords="deck installation Louisiana, deck repair Baton Rouge, wood decks composite PVC Louisiana"
        canonical="https://www.kleinpeterhomeimprovements.com/decks"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-800 text-white py-16 lg:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("${import.meta.env.BASE_URL}deck%20installation%20main.jpg")`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Deck Installation in Baton Rouge<br />
              <span className="text-white">& Surrounding Parishes</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Enhance your outdoor living space with professional deck installation, repair, and maintenance services. From wood to composite, we provide comprehensive deck solutions.
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
              Complete Deck Services for Louisiana Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From installation to maintenance, we provide comprehensive deck services designed to enhance your Louisiana home's outdoor living space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deckServices.map((service, index) => (
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

      {/* Deck Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quality Deck Materials for Louisiana Weather
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with the highest quality deck materials designed to withstand Louisiana's humidity, storms, and weather conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deckTypes.map((type, index) => (
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
              Why Choose Kleinpeter Home Improvement for Deck Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Louisiana homeowners trust Kleinpeter Home Improvement for professional deck installation and maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Licensed & Insured',
                description: 'Fully licensed Louisiana contractor with comprehensive insurance coverage.'
              },
              {
                title: 'Quality Materials',
                description: 'We use only the highest quality deck materials from trusted manufacturers.'
              },
              {
                title: 'Expert Installation',
                description: 'Professional installation by experienced deck specialists.'
              },
              {
                title: 'Warranty Protection',
                description: 'Comprehensive warranty on all deck installation and repair work.'
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
        images={getServiceGalleryUrls('decks')}
        title="Deck Installation Projects"
        subtitle="Recent deck installation work across Louisiana"
      />

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Enhance Your Outdoor Space with Quality Decks?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Create beautiful outdoor living areas with professional deck installation, repair, and maintenance services.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Free deck assessment and estimate</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Licensed and insured contractor</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Quality materials and workmanship</span>
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
                title="Get Your Free Deck Estimate"
                subtitle="Enhance your Louisiana home with quality deck services"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
