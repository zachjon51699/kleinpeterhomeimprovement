import { Link } from 'react-router-dom';
import { Home, Shield, Wrench, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import HeroCarousel from '../components/HeroCarousel';
import SEO from '../components/SEO';

export default function Siding() {
  const sidingServices = [
    {
      title: 'Siding Installation',
      description: 'Professional siding installation for new construction and replacement projects throughout Louisiana.',
      icon: Home,
      features: ['Vinyl Siding', 'Fiber Cement', 'Wood Siding', 'Metal Siding']
    },
    {
      title: 'Siding Repair',
      description: 'Expert siding repair services to fix damage from Louisiana storms and weather conditions.',
      icon: Shield,
      features: ['Storm Damage Repair', 'Water Damage Repair', 'Crack Repairs', 'Color Matching']
    },
    {
      title: 'Siding Maintenance',
      description: 'Regular siding maintenance and cleaning to protect and extend the life of your siding.',
      icon: Wrench,
      features: ['Power Washing', 'Sealing', 'Painting', 'Inspection Services']
    }
  ];

  const sidingTypes = [
    {
      name: 'Vinyl Siding',
      description: 'Durable, low-maintenance vinyl siding that resists Louisiana humidity and weather.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Fiber Cement Siding', 
      description: 'Premium fiber cement siding that mimics wood but resists rot, insects, and fire.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Wood Siding',
      description: 'Classic wood siding options including cedar and pine for traditional Louisiana homes.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <>
      <SEO
        title="Siding Installation & Repair Louisiana - One Roof | Baton Rouge, New Orleans, Covington"
        description="Professional siding installation, repair, and maintenance services in Louisiana. Serving Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell & Mandeville. Vinyl siding, fiber cement, and wood siding."
        keywords="siding installation Louisiana, siding repair Baton Rouge, vinyl siding New Orleans, fiber cement siding Covington, wood siding Hammond, siding contractor Slidell, siding maintenance Mandeville"
        canonical="https://oneroof-la.com/siding"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-900 text-white min-h-[280px] sm:min-h-[340px] md:min-h-[400px] py-10 sm:py-14 md:py-16 lg:py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
              Siding Installation in Baton Rouge<br />
              <span className="text-white">& Surrounding Parishes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
              Protect and beautify your Louisiana home with professional siding installation, repair, and maintenance services. From vinyl to fiber cement, we provide comprehensive siding solutions.
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
                href="tel:+15551234567"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-xl flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>(555) 123-ROOF</span>
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
              Complete Siding Services for Louisiana Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From installation to maintenance, we provide comprehensive siding services designed to protect and enhance your Louisiana home's exterior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sidingServices.map((service, index) => (
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

      {/* Siding Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quality Siding Materials for Louisiana Weather
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with the highest quality siding materials designed to withstand Louisiana's humidity, storms, and weather conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sidingTypes.map((type, index) => (
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
              Why Choose One Roof for Siding Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Louisiana homeowners trust One Roof for professional siding installation and maintenance
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
                description: 'We use only the highest quality siding materials from trusted manufacturers.'
              },
              {
                title: 'Expert Installation',
                description: 'Professional installation by experienced siding specialists.'
              },
              {
                title: 'Warranty Protection',
                description: 'Comprehensive warranty on all siding installation and repair work.'
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
                Ready to Transform Your Home with Quality Siding?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Enhance your Louisiana home's curb appeal and protection with professional siding installation, repair, and maintenance services.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Free siding assessment and estimate</span>
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
                <strong>Service Areas:</strong> Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell, Mandeville, and surrounding Louisiana areas.
              </p>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Siding Estimate"
                subtitle="Transform your Louisiana home with quality siding services"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


