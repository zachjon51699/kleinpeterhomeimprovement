import { Link } from 'react-router-dom';
import { Building, Shield, Wrench, Clock, Phone, ArrowRight, Award } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Commercial() {
  const commercialServices = [
    {
      title: 'Flat Roof Systems',
      description: 'Professional flat roofing installation and repair for Louisiana commercial properties.',
      icon: Building,
      features: ['TPO roofing', 'EPDM systems', 'Modified bitumen', 'Built-up roofing']
    },
    {
      title: 'Roof Maintenance',
      description: 'Preventive maintenance programs to extend your commercial roof\'s lifespan.',
      icon: Wrench,
      features: ['Annual inspections', 'Preventive maintenance', 'Emergency repairs', 'Maintenance contracts']
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency commercial roofing services to protect your Louisiana business.',
      icon: Clock,
      features: ['Emergency leak repair', 'Storm damage response', 'Temporary roofing solutions', 'Insurance claim support']
    }
  ];

  const commercialSolutions = [
    {
      name: 'TPO Roofing',
      description: 'Thermoplastic Polyolefin roofing systems offering excellent durability and energy efficiency.',
      benefits: ['Energy efficient', 'Weather resistant', 'Long-lasting', 'Cost-effective'],
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'EPDM Roofing',
      description: 'Ethylene Propylene Diene Monomer rubber roofing for superior weather protection.',
      benefits: ['Excellent durability', 'UV resistant', 'Low maintenance', 'Proven performance'],
      image: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Metal Roofing',
      description: 'Commercial metal roofing systems designed for Louisiana\'s challenging climate.',
      benefits: ['50+ year lifespan', 'Storm resistant', 'Energy savings', 'Low maintenance'],
      image: 'https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <>
      <SEO
        title="Commercial Roofing"
        description="Professional commercial roofing services in Louisiana including flat roof installation, TPO roofing, EPDM systems, and emergency repairs. Serving businesses in Baton Rouge, New Orleans, Covington and surrounding areas."
        keywords="commercial roofing Louisiana, business roofing Baton Rouge, commercial roof repair New Orleans, TPO roofing Covington LA, flat roof Hammond, commercial roofing contractor Slidell"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-800 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Roofing Solutions for Louisiana Businesses
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Protect your Louisiana business with professional commercial roofing services from One Roof. We specialize in flat roof systems, TPO roofing, EPDM installation, and emergency repairs for businesses throughout Baton Rouge, New Orleans, Covington, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <span>Get Commercial Quote</span>
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Commercial Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complete roof replacement, we provide comprehensive commercial roofing solutions for Louisiana businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Commercial Roofing Systems for Louisiana Weather
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade roofing systems designed to protect your business from Louisiana's challenging weather conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commercialSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={solution.image}
                  alt={`${solution.name} commercial roofing installation in Louisiana by One Roof`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.name}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Key Advantages:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Commercial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Louisiana Businesses Trust One Roof
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                When your business needs commercial roofing services in Louisiana, One Roof delivers the expertise, reliability, and professionalism you deserve. We understand that your roof is critical to your business operations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Commercial Expertise</h4>
                    <p className="text-gray-600">15+ years specializing in Louisiana commercial roofing systems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Emergency Service</h4>
                    <p className="text-gray-600">Emergency response to protect your business from roof leaks and storm damage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Maintenance Programs</h4>
                    <p className="text-gray-600">Preventive maintenance contracts to extend your roof's lifespan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Insurance & Bonding</h4>
                    <p className="text-gray-600">Fully licensed, insured, and bonded Louisiana commercial contractor</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Commercial Service Areas:</h4>
                <p className="text-gray-700">
                  Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell, Mandeville, and throughout Louisiana.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="One Roof team installing commercial roofing system in New Orleans Louisiana"
                className="rounded-lg shadow-lg"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">Licensed & Insured</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Louisiana Commercial Contractor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Industries We Serve in Louisiana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional commercial roofing services for diverse Louisiana business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Office Buildings',
              'Retail Centers',
              'Warehouses',
              'Manufacturing',
              'Healthcare Facilities',
              'Educational Institutions',
              'Restaurants',
              'Hotels & Hospitality'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="font-semibold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Commercial Roofing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional, efficient commercial roofing services designed to minimize business disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Site Assessment',
                description: 'Comprehensive commercial roof inspection and detailed project proposal.'
              },
              {
                step: '2',
                title: 'Project Planning',
                description: 'Custom roofing solution designed for your business needs and budget.'
              },
              {
                step: '3',
                title: 'Professional Installation',
                description: 'Expert installation with minimal disruption to your business operations.'
              },
              {
                step: '4',
                title: 'Quality Assurance',
                description: 'Final inspection and comprehensive warranty coverage for peace of mind.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Louisiana Business Today
              </h2>
              <p className="text-xl mb-6">
                Don't let roofing problems disrupt your business operations. Get your free commercial roofing assessment and discover why Louisiana businesses trust One Roof for their commercial roofing needs.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free commercial roof assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Licensed & insured commercial contractor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 emergency service available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Maintenance programs available</span>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Commercial Assessment"
                subtitle="Contact us today for professional commercial roofing solutions"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}