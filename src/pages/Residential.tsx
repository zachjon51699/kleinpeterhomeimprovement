import { Link } from 'react-router-dom';
import { Shield, Home, Wrench, Star, Phone, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Residential() {
  const residentialServices = [
    {
      title: 'Roof Replacement',
      description: 'Complete residential roof replacement with premium materials designed for Louisiana weather.',
      icon: Home,
      features: ['Full tear-off and replacement', 'Premium shingle selection', 'Warranty protection', 'Insurance claim assistance']
    },
    {
      title: 'Roof Repairs',
      description: 'Expert residential roof repairs to fix leaks, missing shingles, and storm damage.',
      icon: Wrench,
      features: ['Emergency leak repairs', 'Shingle replacement', 'Flashing repair', 'Same-day service available']
    },
    {
      title: 'New Construction',
      description: 'Professional roofing installation for new residential construction projects.',
      icon: Shield,
      features: ['Custom roof design', 'Energy-efficient options', 'Code compliance', 'Builder partnerships']
    }
  ];

  const roofingOptions = [
    {
      name: 'Asphalt Shingles',
      description: 'The most popular choice for Louisiana homes, offering excellent value and storm resistance.',
      benefits: ['Cost-effective', 'Wide variety of colors', 'Good wind resistance', 'Easy maintenance'],
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Metal Roofing',
      description: 'Long-lasting metal roofing systems that excel in Louisiana\'s challenging climate.',
      benefits: ['50+ year lifespan', 'Superior storm protection', 'Energy efficient', 'Low maintenance'],
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Fortified Roofing',
      description: 'Hurricane-resistant roofing systems that can reduce your insurance premiums.',
      benefits: ['Insurance savings up to 35%', 'Hurricane protection', 'Enhanced durability', 'IBHS certified'],
      image: 'https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <>
      <SEO
        title="Residential Roofing"
        description="Professional residential roofing services in Louisiana including roof replacement, repairs, and new construction. Serving Baton Rouge, New Orleans, Covington and surrounding areas with expert home roofing solutions."
        keywords="residential roofing Louisiana, home roofing Baton Rouge, residential roof replacement New Orleans, house roofing Covington LA, residential roofing contractor Mandeville"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-800 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Residential Roofing in Louisiana
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Protect your Louisiana home with expert residential roofing services from One Roof. We specialize in roof replacements, repairs, and new construction for homes throughout Baton Rouge, New Orleans, Covington, and surrounding communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <span>Get Free Home Estimate</span>
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
              Complete Residential Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From minor repairs to complete roof replacements, we provide comprehensive residential roofing solutions for Louisiana homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
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

      {/* Roofing Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Residential Roofing Options for Louisiana Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of premium roofing materials designed to protect your home from Louisiana's challenging weather conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roofingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={option.image}
                  alt={`${option.name} residential roofing installation in Louisiana by One Roof`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{option.name}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
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

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Louisiana Homeowners Choose One Roof
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                When it comes to protecting your home, Louisiana homeowners trust One Roof for our expertise, reliability, and commitment to quality. We understand the unique challenges that Louisiana weather presents to residential roofing systems.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Louisiana Weather Expertise</h4>
                    <p className="text-gray-600">15+ years of experience with Louisiana's hurricanes, storms, and extreme weather</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Insurance Claim Assistance</h4>
                    <p className="text-gray-600">Complete support through the insurance claim process for storm damage</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fortified Roofing Certified</h4>
                    <p className="text-gray-600">Official installer of hurricane-resistant Fortified roofing systems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Local Louisiana Company</h4>
                    <p className="text-gray-600">Locally owned and operated, serving Louisiana communities for over 15 years</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Service Areas Include:</h4>
                <p className="text-gray-700">
                  Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell, Mandeville, and surrounding Louisiana communities.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="One Roof team installing residential roofing system in Baton Rouge Louisiana"
                className="rounded-lg shadow-lg"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">5.0 Rating</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">500+ Happy Louisiana Homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Residential Roofing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final inspection, we make your residential roofing project smooth and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Free Inspection',
                description: 'Comprehensive roof inspection and detailed estimate for your Louisiana home.'
              },
              {
                step: '2', 
                title: 'Material Selection',
                description: 'Choose from premium roofing materials designed for Louisiana weather conditions.'
              },
              {
                step: '3',
                title: 'Professional Installation', 
                description: 'Expert installation by our certified Louisiana roofing professionals.'
              },
              {
                step: '4',
                title: 'Final Inspection',
                description: 'Quality inspection and warranty protection for your peace of mind.'
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
                Ready to Protect Your Louisiana Home?
              </h2>
              <p className="text-xl mb-6">
                Don't wait for the next storm season. Get your free residential roofing estimate today and discover why Louisiana homeowners trust One Roof to protect their most valuable investment.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free detailed estimates with no obligation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Licensed & insured Louisiana contractor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fortified roofing options available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Insurance claim assistance provided</span>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Residential Roofing Estimate"
                subtitle="Contact us today for expert residential roofing solutions"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}