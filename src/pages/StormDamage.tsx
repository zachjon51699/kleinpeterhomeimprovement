import { Link } from 'react-router-dom';
import { Zap, Clock, Shield, FileText, Phone, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function StormDamage() {
  const emergencyServices = [
    {
      title: '24/7 Emergency Response',
      description: 'Immediate response to storm damage throughout Louisiana, day or night.',
      icon: Clock,
      features: ['Emergency tarping', 'Immediate leak repair', 'Storm damage assessment', 'Insurance documentation']
    },
    {
      title: 'Insurance Claim Support',
      description: 'Complete assistance with insurance claims from documentation to completion.',
      icon: FileText,
      features: ['Damage documentation', 'Insurance communication', 'Claim advocacy', 'Direct insurance billing']
    },
    {
      title: 'Storm-Ready Repairs',
      description: 'Expert repairs using Louisiana-tested materials and hurricane-resistant methods.',
      icon: Shield,
      features: ['Hurricane-resistant materials', 'Fortified upgrades available', 'Code-compliant repairs', 'Warranty protection']
    }
  ];

  const stormTypes = [
    {
      name: 'Hurricane Damage',
      description: 'Comprehensive hurricane damage repair and restoration services.',
      damages: ['High wind damage', 'Flying debris impact', 'Water infiltration', 'Complete roof loss'],
      image: 'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Hail Damage',
      description: 'Professional hail damage assessment and repair throughout Louisiana.',
      damages: ['Granule loss', 'Cracked shingles', 'Exposed mat', 'Punctured roofing'],
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Wind Damage',
      description: 'Expert wind damage repair for Louisiana\'s severe thunderstorms.',
      damages: ['Missing shingles', 'Lifted materials', 'Flashing damage', 'Gutter damage'],
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <>
      <SEO
        title="Storm Damage Repair"
        description="24/7 emergency storm damage repair services in Louisiana. Expert hurricane, hail, and wind damage restoration with insurance claim assistance. Serving Baton Rouge, New Orleans, Covington and all Louisiana communities."
        keywords="storm damage repair Louisiana, hurricane damage Baton Rouge, roof storm damage New Orleans, emergency roofing Covington LA, hail damage repair Hammond, wind damage Slidell, storm damage Mandeville"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-800 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
              <span className="font-bold">EMERGENCY SERVICE AVAILABLE 24/7</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Storm Damage Repair in Louisiana
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              When severe weather strikes Louisiana, One Roof responds immediately with 24/7 emergency storm damage repair services. From hurricane damage to hail and wind damage, we provide complete restoration services throughout Baton Rouge, New Orleans, Covington, and all Louisiana communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+15551234567"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency: (555) 123-ROOF</span>
              </a>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <span>Request Service</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Section */}
      <section className="py-8 bg-red-50 border-t-4 border-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Zap className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl font-bold text-red-800">Storm Damage Emergency?</h2>
          </div>
          <p className="text-lg text-red-700 mb-4">
            Don't wait - storm damage can worsen rapidly. Call now for immediate emergency response throughout Louisiana.
          </p>
          <a 
            href="tel:+15551234567"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg inline-flex items-center space-x-2"
          >
            <Phone className="w-6 h-6" />
            <span>Call Emergency Line: (555) 123-ROOF</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Storm Damage Restoration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency tarping to complete roof restoration, One Roof provides comprehensive storm damage repair services throughout Louisiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storm Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Louisiana Storm Damage Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Louisiana faces unique weather challenges. Our team specializes in repairing damage from all types of severe weather.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stormTypes.map((storm, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={storm.image}
                  alt={`${storm.name} repair services in Louisiana by One Roof`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{storm.name}</h3>
                  <p className="text-gray-600 mb-4">{storm.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Common Damage Types:</h4>
                  <ul className="space-y-2">
                    {storm.damages.map((damage, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                        <span>{damage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claims Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Insurance Claim Assistance Throughout Louisiana
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dealing with insurance companies after storm damage can be overwhelming. One Roof provides complete insurance claim assistance to Louisiana property owners, ensuring you get the coverage you deserve for proper storm damage repairs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Complete Damage Documentation</h4>
                    <p className="text-gray-600">Thorough photo documentation and detailed reports for your insurance claim</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Insurance Company Communication</h4>
                    <p className="text-gray-600">Direct communication with adjusters and insurance representatives</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Claim Advocacy</h4>
                    <p className="text-gray-600">Experienced advocacy to ensure fair settlement for all storm damages</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Direct Insurance Billing</h4>
                    <p className="text-gray-600">Streamlined payment process with direct insurance company billing</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Working with Louisiana Insurance Companies:</h4>
                <p className="text-gray-700">
                  We work with all major insurance companies serving Louisiana including State Farm, Allstate, Louisiana Citizens, USAA, and many others.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="One Roof team documenting storm damage for insurance claim in Louisiana"
                className="rounded-lg shadow-lg"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">Insurance Approved</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Trusted by Louisiana Insurers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When storm damage strikes your Louisiana property, every minute counts. Our proven emergency response process protects your property from further damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Immediate Response',
                description: 'Emergency call received and team dispatched within hours throughout Louisiana.',
                time: '0-2 Hours'
              },
              {
                step: '2',
                title: 'Damage Assessment',
                description: 'Complete damage assessment with photo documentation for insurance purposes.',
                time: '2-4 Hours'
              },
              {
                step: '3',
                title: 'Emergency Protection',
                description: 'Immediate tarping, boarding, and leak repair to prevent further damage.',
                time: 'Same Day'
              },
              {
                step: '4',
                title: 'Restoration Plan',
                description: 'Complete restoration plan with insurance coordination and scheduling.',
                time: '24-48 Hours'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                <div className="text-sm font-semibold text-red-600 mb-3">{process.time}</div>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            24/7 Emergency Service Throughout Louisiana
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {['Baton Rouge', 'New Orleans', 'Covington', 'Gonzales', 'Hammond', 'Slidell', 'Mandeville'].map((city) => (
              <div key={city} className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Emergency storm damage repair services available 24/7 throughout Louisiana. Don't see your area? Call us - we may still be able to help.
          </p>
          <a 
            href="tel:+15551234567"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg inline-flex items-center space-x-2"
          >
            <Phone className="w-6 h-6" />
            <span>Emergency: (555) 123-ROOF</span>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't Wait - Storm Damage Worsens Quickly
              </h2>
              <p className="text-xl mb-6">
                Louisiana weather doesn't wait, and neither should you. Contact One Roof immediately for 24/7 emergency storm damage repair services throughout Louisiana.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>24/7 emergency response available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Licensed & insured storm damage specialists</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Complete insurance claim assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Serving all Louisiana communities</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white text-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Emergency Contact</h3>
                <div className="text-center mb-6">
                  <a 
                    href="tel:+15551234567"
                    className="text-3xl font-bold text-red-600 hover:text-red-700"
                  >
                    (555) 123-ROOF
                  </a>
                  <p className="text-gray-600 mt-2">Available 24 hours a day, 7 days a week</p>
                </div>
                <ContactForm 
                  title="Request Emergency Service"
                  subtitle="Or fill out this form for immediate callback"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}