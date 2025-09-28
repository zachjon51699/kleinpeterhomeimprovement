import { Link } from 'react-router-dom';
import { Shield, DollarSign, Award, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Fortified() {
  const fortifiedBenefits = [
    {
      title: 'Insurance Savings',
      description: 'Save up to 35% on your homeowner\'s insurance premiums with a Fortified roof.',
      icon: DollarSign,
      details: ['Up to 35% premium discount', 'Immediate savings', 'Annual cost reduction', 'Verified by insurance companies']
    },
    {
      title: 'Hurricane Protection',
      description: 'Enhanced protection against high winds and severe weather conditions.',
      icon: Shield,
      details: ['Tested to withstand 130+ mph winds', 'Superior attachment methods', 'Enhanced deck attachment', 'Sealed roof deck system']
    },
    {
      title: 'IBHS Certification',
      description: 'Official certification from the Insurance Institute for Business & Home Safety.',
      icon: Award,
      details: ['Third-party verification', 'Industry-recognized standards', 'Quality assurance', 'Documented compliance']
    }
  ];

  const fortifiedFeatures = [
    'Enhanced roof deck attachment',
    'Sealed roof deck system',
    'Superior roof covering',
    'Protected openings',
    'High-impact resistant materials',
    'Advanced fastening systems'
  ];

  return (
    <>
      <SEO
        title="Fortified Roofing"
        description="Fortified roofing systems in Louisiana that provide hurricane protection and insurance savings up to 35%. Professional Fortified roof installation in Baton Rouge, New Orleans, Covington and surrounding areas."
        keywords="fortified roofing Louisiana, hurricane resistant roofing Baton Rouge, IBHS fortified roof New Orleans, fortified roofing Covington LA, storm resistant roofing Hammond, fortified home Louisiana"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-800 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fortified Roofing: Hurricane Protection + Insurance Savings
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Protect your Louisiana home with Fortified roofing systems that provide superior hurricane protection while saving you up to 35% on homeowner's insurance. One Roof is your certified Fortified roofing installer serving Baton Rouge, New Orleans, Covington, and surrounding Louisiana communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <span>Get Fortified Quote</span>
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

      {/* What is Fortified Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What is Fortified Roofing?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fortified roofing is a voluntary construction standard developed by the Insurance Institute for Business & Home Safety (IBHS) that strengthens homes against severe weather. In Louisiana, where hurricanes and severe storms are a constant threat, Fortified roofing provides enhanced protection for your most valuable investment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The Fortified standard focuses on three key areas: a stronger roof deck attachment, a sealed roof deck system, and impact-resistant roof covering. These enhancements work together to create a roof system that can withstand winds of 130+ mph and protect your home from water infiltration.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-3">Why Choose Fortified in Louisiana?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Proven protection against Louisiana's severe weather</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Significant insurance premium reductions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Increased home value and marketability</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fortified roofing installation showing enhanced storm protection in Louisiana"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fortified Roofing Benefits for Louisiana Homeowners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of Louisiana homeowners are choosing Fortified roofing for superior storm protection and financial benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fortifiedBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fortified Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Detailed view of Fortified roofing system installation by One Roof in Louisiana"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Fortified Roofing System Features
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fortified roofing goes beyond standard roofing practices to provide enhanced protection through specific construction standards and materials designed to withstand severe weather conditions common in Louisiana.
              </p>

              <div className="space-y-3 mb-8">
                {fortifiedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">One Roof Fortified Certification</h4>
                <p className="mb-4">
                  As a certified Fortified roofing installer, One Roof ensures your home meets all IBHS standards and qualifies for maximum insurance discounts.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  <span>Get Certified Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Savings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Insurance Savings with Fortified Roofing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Louisiana insurance companies recognize the superior protection of Fortified roofing and offer significant premium discounts to homeowners who invest in these systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Up to 35%</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">Insurance Premium Reduction</div>
              <p className="text-gray-600">
                Louisiana homeowners can save hundreds or even thousands annually on their homeowner's insurance with a Fortified roof certification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2,000+</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">Average Annual Savings</div>
              <p className="text-gray-600">
                The average Louisiana homeowner saves over $2,000 per year on insurance premiums with Fortified roofing certification.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Louisiana Insurance Companies Offering Fortified Discounts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">State Farm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Allstate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">USAA</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Louisiana Citizens</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">Travelers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">And many more...</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Contact your insurance agent to confirm your specific discount eligibility.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fortified Roofing Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified Fortified installation process ensures your Louisiana home meets all IBHS standards for maximum protection and insurance savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Assessment',
                description: 'Comprehensive evaluation of your current roof and Fortified eligibility assessment.'
              },
              {
                step: '2',
                title: 'Fortified Design',
                description: 'Custom Fortified roofing system design meeting all IBHS standards for Louisiana.'
              },
              {
                step: '3',
                title: 'Certified Installation',
                description: 'Professional installation by our certified Fortified roofing specialists.'
              },
              {
                step: '4',
                title: 'IBHS Certification',
                description: 'Final inspection and IBHS certification documentation for insurance discounts.'
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
                Ready to Save with Fortified Roofing?
              </h2>
              <p className="text-xl mb-6">
                Protect your Louisiana home and start saving on insurance premiums today. Contact One Roof, your certified Fortified roofing installer, for a free assessment and quote.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Fortified assessment and quote</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Certified IBHS Fortified installer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Insurance discount documentation provided</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Serving all Louisiana communities</span>
                </li>
              </ul>
              <p className="text-lg">
                <strong>Service Areas:</strong> Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell, Mandeville, and surrounding Louisiana areas.
              </p>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Fortified Assessment"
                subtitle="Start saving on insurance while protecting your Louisiana home"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}