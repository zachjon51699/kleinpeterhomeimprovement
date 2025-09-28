import { Link } from 'react-router-dom';
import { Search, CheckCircle, AlertTriangle, FileText, Phone, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Inspections() {
  const inspectionTypes = [
    {
      title: 'Annual Roof Inspections',
      description: 'Comprehensive yearly inspections to identify issues before they become costly problems.',
      icon: Search,
      features: ['Detailed condition assessment', 'Photo documentation', 'Maintenance recommendations', 'Priority repair identification']
    },
    {
      title: 'Storm Damage Assessments',
      description: 'Post-storm inspections to document damage for insurance claims and repairs.',
      icon: AlertTriangle,
      features: ['Insurance-ready documentation', 'Damage severity assessment', 'Emergency repair recommendations', 'Claim support preparation']
    },
    {
      title: 'Pre-Purchase Inspections',
      description: 'Thorough roof evaluations for home buyers in Louisiana real estate transactions.',
      icon: FileText,
      features: ['Complete condition report', 'Estimated lifespan assessment', 'Repair cost estimates', 'Buyer protection insights']
    }
  ];

  const inspectionBenefits = [
    'Prevent costly emergency repairs',
    'Extend your roof\'s lifespan',
    'Maintain warranty compliance',
    'Identify insurance claim opportunities',
    'Plan for future roofing needs',
    'Ensure family safety and protection'
  ];

  return (
    <>
      <SEO
        title="Roof Inspections"
        description="Professional roof inspections in Louisiana including annual inspections, storm damage assessments, and pre-purchase evaluations. Expert roof inspection services in Baton Rouge, New Orleans, Covington and surrounding areas."
        keywords="roof inspection Louisiana, roof inspection Baton Rouge, storm damage inspection New Orleans, pre-purchase roof inspection Covington, roof assessment Hammond, roof evaluation Slidell"
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
              Professional Roof Inspections Throughout Louisiana
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Protect your investment with comprehensive roof inspections from One Roof. Our certified inspectors provide detailed assessments for Louisiana homes and businesses in Baton Rouge, New Orleans, Covington, and surrounding communities, helping you identify issues before they become costly problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
              >
                <span>Schedule Inspection</span>
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

      {/* Why Inspections Matter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Roof Inspections Matter in Louisiana
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Louisiana's challenging weather conditions - from hurricanes and severe storms to intense heat and humidity - can cause roof damage that's not always visible from the ground. Regular professional inspections are essential for Louisiana property owners to protect their investment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our certified roof inspectors understand Louisiana's unique climate challenges and know exactly what to look for to keep your roof performing at its best, whether you're in Baton Rouge, New Orleans, or anywhere throughout Louisiana.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inspectionBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional roof inspector examining Louisiana home roof for damage assessment"
                className="rounded-lg shadow-lg"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Search className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">Certified Inspectors</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Louisiana Roofing Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Roof Inspection Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional roof inspections tailored to Louisiana's climate and your specific needs, from routine maintenance to insurance documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspectionTypes.map((inspection, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <inspection.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{inspection.title}</h3>
                <p className="text-gray-600 mb-4">{inspection.description}</p>
                
                <ul className="space-y-2">
                  {inspection.features.map((feature, idx) => (
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

      {/* What We Inspect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What We Inspect on Louisiana Roofs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive inspections cover every aspect of your roofing system, from shingles to structural components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Roofing Materials',
                items: ['Shingle condition', 'Metal roofing integrity', 'Tile damage assessment', 'Material aging evaluation']
              },
              {
                category: 'Structural Elements',
                items: ['Decking condition', 'Rafter assessment', 'Truss evaluation', 'Support structure integrity']
              },
              {
                category: 'Drainage Systems',
                items: ['Gutter condition', 'Downspout functionality', 'Drainage efficiency', 'Water flow assessment']
              },
              {
                category: 'Flashing & Sealing',
                items: ['Chimney flashing', 'Vent penetrations', 'Skylight sealing', 'Valley waterproofing']
              },
              {
                category: 'Ventilation',
                items: ['Attic ventilation', 'Ridge vents', 'Soffit vents', 'Air circulation assessment']
              },
              {
                category: 'Storm Damage',
                items: ['Wind damage signs', 'Hail impact assessment', 'Debris damage', 'Weather-related wear']
              }
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Professional Inspection Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thorough, systematic inspections that provide you with the detailed information you need about your Louisiana roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Scheduling',
                description: 'Convenient scheduling that works with your Louisiana schedule and weather conditions.'
              },
              {
                step: '2',
                title: 'Exterior Inspection',
                description: 'Comprehensive exterior roof assessment including all roofing materials and components.'
              },
              {
                step: '3',
                title: 'Interior Assessment',
                description: 'Attic and interior inspection to identify leaks, ventilation, and structural issues.'
              },
              {
                step: '4',
                title: 'Detailed Report',
                description: 'Comprehensive written report with photos, recommendations, and priority rankings.'
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

      {/* When to Inspect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Louisiana home after storm showing need for professional roof inspection"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                When Should Louisiana Property Owners Schedule Inspections?
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">After Major Louisiana Storms</h4>
                    <p className="text-gray-600">Hurricane season and severe weather can cause hidden damage that needs professional assessment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Annual Preventive Maintenance</h4>
                    <p className="text-gray-600">Yearly inspections help identify issues before they become expensive problems</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Before Buying Louisiana Real Estate</h4>
                    <p className="text-gray-600">Know the true condition before making your investment in Louisiana property</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Insurance Requirements</h4>
                    <p className="text-gray-600">Many Louisiana insurers require periodic inspections for coverage maintenance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Aging Roof Systems</h4>
                    <p className="text-gray-600">Roofs over 10 years old benefit from regular professional assessment</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Louisiana Service Areas:</h4>
                <p className="text-gray-700">
                  Professional roof inspections throughout Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell, Mandeville, and surrounding Louisiana communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Louisiana Investment with Professional Inspection
              </h2>
              <p className="text-xl mb-6">
                Don't wait for visible damage to appear. Schedule your professional roof inspection today and discover potential issues before they become costly problems.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Comprehensive written inspection report</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Photo documentation included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Priority repair recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Insurance claim support when needed</span>
                </li>
              </ul>
              <p className="text-lg">
                Serving all Louisiana communities including Baton Rouge, New Orleans, Covington, and surrounding areas.
              </p>
            </div>
            <div>
              <ContactForm 
                title="Schedule Your Roof Inspection"
                subtitle="Professional inspection services throughout Louisiana"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}