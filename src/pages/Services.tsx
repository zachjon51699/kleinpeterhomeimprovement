import { Link } from 'react-router-dom';
import { Shield, Building, Wrench, Search, Zap, Award, ArrowRight, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    {
      title: 'Residential Roofing',
      description: 'Complete residential roofing services including new installations, replacements, and repairs for Louisiana homes.',
      icon: Shield,
      link: '/residential',
      features: ['Shingle Roofing', 'Metal Roofing', 'Roof Repairs', 'New Construction']
    },
    {
      title: 'Commercial Roofing',
      description: 'Professional commercial roofing solutions for businesses across Baton Rouge, New Orleans, and surrounding areas.',
      icon: Building,
      link: '/commercial', 
      features: ['Flat Roofing', 'TPO Systems', 'EPDM Roofing', 'Roof Maintenance']
    },
    {
      title: 'Storm Damage Repair',
      description: '24/7 emergency storm damage repair services with insurance claim assistance throughout Louisiana.',
      icon: Zap,
      link: '/storm-damage',
      features: ['Emergency Tarping', 'Insurance Claims', 'Wind Damage', 'Hail Damage']
    },
    {
      title: 'Roof Inspections',
      description: 'Comprehensive roof inspections to identify issues early and extend your roof\'s lifespan.',
      icon: Search,
      link: '/inspections',
      features: ['Annual Inspections', 'Storm Assessments', 'Pre-Purchase Inspections', 'Warranty Inspections']
    },
    {
      title: 'Roof Repair',
      description: 'Expert roof repair services for all roofing types and materials across Louisiana.',
      icon: Wrench,
      link: '/services',
      features: ['Leak Repairs', 'Shingle Replacement', 'Flashing Repair', 'Gutter Repairs']
    },
    {
      title: 'Fortified Roofing',
      description: 'Hurricane-resistant Fortified roofing systems that can reduce insurance premiums up to 35%.',
      icon: Award,
      link: '/fortified',
      features: ['Hurricane Protection', 'Insurance Savings', 'Enhanced Durability', 'IBHS Certified']
    }
  ];

  const roofingMaterials = [
    {
      name: 'Asphalt Shingles',
      description: 'The most popular roofing choice for Louisiana homes, offering durability and affordability.',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Metal Roofing', 
      description: 'Long-lasting metal roofing systems perfect for Louisiana weather conditions.',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Tile Roofing',
      description: 'Beautiful and durable tile roofing options for distinctive Louisiana architecture.',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <>
      <SEO
        title="Roofing Services"
        description="Complete roofing services in Louisiana including residential roofing, commercial roofing, storm damage repair, roof inspections, and fortified roofing. Serving Baton Rouge, New Orleans, Covington and surrounding areas."
        keywords="roofing services Louisiana, residential roofing Baton Rouge, commercial roofing New Orleans, storm damage repair Covington, roof inspection Hammond, fortified roofing Slidell"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-800 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Roofing Services Across Louisiana
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              From routine repairs to complete roof replacements and hurricane-resistant fortified roofing systems, One Roof provides comprehensive roofing solutions for residential and commercial properties throughout Louisiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+15551234567"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(555) 123-ROOF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive roofing solutions designed for Louisiana's unique climate challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2"
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

      {/* Roofing Materials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Quality Roofing Materials for Louisiana Weather
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with the highest quality roofing materials designed to withstand Louisiana's challenging weather conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roofingMaterials.map((material, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={material.image}
                  alt={`${material.name} roofing installation in Louisiana by One Roof`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{material.name}</h3>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Roofing Services Throughout Louisiana
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Professional roofing contractor serving these Louisiana communities and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Baton Rouge, LA', 'New Orleans, LA', 'Covington, LA', 'Gonzales, LA',
              'Hammond, LA', 'Slidell, LA', 'Mandeville, LA', 'And Surrounding Areas'
            ].map((area, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-800">{area}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Don't see your area listed? Contact us to confirm service availability in your Louisiana community.
            </p>
            <a 
              href="tel:+15551234567"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (555) 123-ROOF</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Professional Roofing Services in Louisiana?
              </h2>
              <p className="text-xl mb-6">
                From emergency storm damage repairs to complete roof replacements and fortified roofing installations, One Roof has the expertise to handle all your Louisiana roofing needs.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free, detailed estimates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Licensed & insured</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 emergency service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fortified roofing certified</span>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm 
                title="Request Your Free Roofing Estimate"
                subtitle="Get started with professional roofing services today"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}