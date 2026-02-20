import { Link } from 'react-router-dom';
import { Droplets, Shield, Wrench, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import ServiceGallery from '../components/ServiceGallery';
import SEO from '../components/SEO';
import { getServiceGalleryUrls } from '../data/serviceGalleryImages';

export default function Gutters() {
  const gutterServices = [
    {
      title: 'Gutter Installation',
      description: 'Professional gutter installation for new construction and replacement projects throughout Louisiana.',
      icon: Wrench,
      features: ['Seamless Gutters', 'Sectional Gutters', 'Copper Gutters', 'Aluminum Gutters']
    },
    {
      title: 'Gutter Repair',
      description: 'Expert gutter repair services to fix leaks, sagging, and damage from Louisiana storms.',
      icon: Shield,
      features: ['Leak Repairs', 'Sagging Fixes', 'Joint Repairs', 'Downspout Repairs']
    },
    {
      title: 'Gutter Cleaning',
      description: 'Regular gutter cleaning and maintenance to prevent water damage and extend gutter life.',
      icon: Droplets,
      features: ['Debris Removal', 'Flush & Test', 'Downspout Cleaning', 'Maintenance Plans']
    }
  ];

  const gutterTypes = [
    {
      name: 'Seamless Gutters',
      description: 'Custom-fabricated seamless gutters that eliminate joints and reduce leaks.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Copper Gutters', 
      description: 'Premium copper gutters that develop a beautiful patina and last for decades.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Aluminum Gutters',
      description: 'Durable aluminum gutters that resist rust and provide excellent value for Louisiana homes.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <>
      <SEO
        title="Gutter Installation & Repair Louisiana - Kleinpeter Home Improvement | Baton Rouge, New Orleans, Covington"
        description="Professional gutter installation, repair, and cleaning services in Louisiana. Serving Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell & Mandeville. Seamless gutters, copper gutters, and gutter maintenance."
        keywords="gutter installation Louisiana, gutter repair Baton Rouge, seamless gutters New Orleans, gutter cleaning Covington, copper gutters Hammond, aluminum gutters Slidell, gutter contractor Mandeville"
        canonical="https://www.kleinpeterhomeimprovements.com/gutters"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-900 text-white py-16 lg:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${import.meta.env.BASE_URL}Gutter%20Installation.avif")`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Gutter Installation in Baton Rouge<br />
              <span className="text-white">& Surrounding Parishes</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Protect your Louisiana home from water damage with professional gutter installation, repair, and maintenance services. From seamless gutters to copper systems, we provide comprehensive gutter solutions.
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
              Complete Gutter Services for Louisiana Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From installation to maintenance, we provide comprehensive gutter services designed to protect your Louisiana home from heavy rainfall and storm damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gutterServices.map((service, index) => (
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

      {/* Gutter Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quality Gutter Materials for Louisiana Weather
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with the highest quality gutter materials designed to withstand Louisiana's heavy rainfall and storm conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gutterTypes.map((type, index) => (
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
              Why Choose Kleinpeter Home Improvement for Gutter Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Louisiana homeowners trust Kleinpeter Home Improvement for professional gutter installation and maintenance
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
                description: 'We use only the highest quality gutter materials from trusted manufacturers.'
              },
              {
                title: 'Expert Installation',
                description: 'Professional installation by experienced gutter specialists.'
              },
              {
                title: 'Warranty Protection',
                description: 'Comprehensive warranty on all gutter installation and repair work.'
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
        images={getServiceGalleryUrls('gutters')}
        title="Gutter Installation Projects"
        subtitle="Recent gutter installation and repair work across Louisiana"
      />

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Protect Your Home with Quality Gutters?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Don't let water damage threaten your Louisiana home. Contact Kleinpeter Home Improvement today for professional gutter installation, repair, and maintenance services.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Free gutter assessment and estimate</span>
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
                title="Get Your Free Gutter Estimate"
                subtitle="Protect your Louisiana home with quality gutter services"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


