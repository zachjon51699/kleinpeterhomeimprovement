// Services Page - Updated 2026-02-08 - Fixed Shield error - Force rebuild
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  Droplets, 
  Home, 
  Paintbrush,
  Shield
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import HeroCarousel from '../components/HeroCarousel';
import SEO from '../components/SEO';

export default function Services() {
  // Force Vite rebuild - Shield imported to fix cached bundle issue
  const services = [
    {
      title: 'Gutter Installation',
      description: 'Professional gutter installation, repair, and cleaning services to protect your Louisiana home from water damage.',
      icon: Droplets,
      link: '/gutters',
      features: ['Gutter Installation', 'Gutter Repair', 'Gutter Cleaning', 'Seamless Gutters']
    },
    {
      title: 'Patio Installation',
      description: 'Professional patio installation, repair, and maintenance services to enhance your outdoor living space.',
      icon: Home,
      link: '/patios',
      features: ['Concrete Patios', 'Paver Patios', 'Stone Patios', 'Custom Designs']
    },
    {
      title: 'Pergola Installation',
      description: 'Beautiful pergola installation, repair, and maintenance services to create stunning outdoor living areas.',
      icon: Home,
      link: '/pergolas',
      features: ['Wood Pergolas', 'Vinyl Pergolas', 'Aluminum Pergolas', 'Custom Designs']
    },
    {
      title: 'Screened Enclosure Installation',
      description: 'Professional screened enclosure installation and repair services to create bug-free outdoor spaces.',
      icon: Home,
      link: '/screened-enclosures',
      features: ['Pool Enclosures', 'Patio Enclosures', 'Porch Enclosures', 'Custom Designs']
    },
    {
      title: 'Pressure Washing',
      description: 'Professional pressure washing services to restore and maintain your Louisiana property\'s appearance.',
      icon: Droplets,
      link: '/pressure-washing',
      features: ['House Washing', 'Driveway Cleaning', 'Deck Cleaning', 'Commercial Services']
    },
    {
      title: 'Fence Installation',
      description: 'Professional fence installation, repair, and maintenance services to secure and beautify your property.',
      icon: Home,
      link: '/fence',
      features: ['Wood Fences', 'Vinyl Fences', 'Aluminum Fences', 'Chain Link Fences']
    }, // Fence service - using Home icon
    {
      title: 'Painting Services',
      description: 'Professional interior and exterior painting services to transform and protect your Louisiana home.',
      icon: Paintbrush,
      link: '/paint',
      features: ['Interior Painting', 'Exterior Painting', 'Paint Repair', 'Color Consultation']
    },
    {
      title: 'Deck Installation',
      description: 'Professional deck installation, repair, and maintenance services to enhance your outdoor living space.',
      icon: Home,
      link: '/decks',
      features: ['Wood Decks', 'Composite Decks', 'PVC Decks', 'Custom Designs']
    }
  ];

  return (
    <>
      <SEO
        title="Home Improvements"
        description="At Kleinpeter's Home Improvement & Maintenance, your job is our next challenge. Gutters, patios, pergolas, screened enclosures, decks, fence, paint, and pressure washing across Louisiana. Licensed contractor."
        keywords="home improvement services Louisiana, gutters Livingston Parish, patios Ascension Parish, pergolas East Baton Rouge, screened enclosures, pressure washing, fence installation, painting services, deck installation"
        canonical="https://www.kleinpeterhomeimprovements.com/services"
      />

      {/* Hero Section */}
      <HeroCarousel className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Complete Home Improvement Services<br />
              <span className="text-white">Across Louisiana</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
              From gutters and patios to pergolas and screened enclosures, Kleinpeter's Home Improvement provides comprehensive home improvement solutions for properties throughout Livingston Parish, Ascension Parish, and East Baton Rouge Parish.
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
      </HeroCarousel>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Home Improvement Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive home improvement solutions designed to enhance and protect your Louisiana home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="bg-kleinpeter-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-kleinpeter-200 transition-colors">
                    <service.icon className="w-10 h-10 text-kleinpeter-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-gray-600">
                        <div className="w-2 h-2 bg-kleinpeter-600 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link}
                    className="text-kleinpeter-600 hover:text-kleinpeter-700 font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Home Improvement Services Throughout Louisiana
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional home improvement contractor serving these Louisiana parishes and surrounding areas with expert solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Livingston Parish, LA', 'Ascension Parish, LA', 'East Baton Rouge Parish, LA'
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100">
                <p className="font-bold text-gray-800 text-lg">{area}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-8 text-lg">
              Don't see your area listed? Contact us to confirm service availability in your Louisiana community.
            </p>
            <a 
              href="tel:+12259759845"
              className="bg-kleinpeter-600 text-white px-10 py-4 rounded-lg hover:bg-kleinpeter-700 transition-all duration-300 font-bold text-lg inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>Call (225) 975-9845</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Need Professional Home Improvement Services in Louisiana?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                From gutters and patios to pergolas and screened enclosures, Kleinpeter's Home Improvement has the expertise to handle all your Louisiana home improvement needs.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">Free, detailed estimates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">Licensed & insured</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-lg">24/7 emergency service</span>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm 
                title="Request Your Free Home Improvement Estimate"
                subtitle="Get started with professional home improvement services today"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}