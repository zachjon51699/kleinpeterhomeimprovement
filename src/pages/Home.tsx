import { Link } from 'react-router-dom';
import { Shield, Users, Award, Clock, Phone, Star, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Home() {
  const services = [
    {
      title: 'Residential Roofing',
      description: 'Complete residential roofing services including repairs, replacements, and new installations.',
      icon: Shield,
      link: '/residential'
    },
    {
      title: 'Commercial Roofing',
      description: 'Professional commercial roofing solutions for businesses across Louisiana.',
      icon: Users,
      link: '/commercial'
    },
    {
      title: 'Storm Damage Repair',
      description: '24/7 emergency storm damage repair with insurance claim assistance.',
      icon: Clock,
      link: '/storm-damage'
    },
    {
      title: 'Fortified Roofing',
      description: 'Hurricane-resistant roofing systems that can save you up to 35% on insurance.',
      icon: Award,
      link: '/fortified'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Baton Rouge, LA',
      text: 'One Roof did an amazing job replacing our storm-damaged roof. Professional, fast, and the quality is outstanding.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      location: 'New Orleans, LA',
      text: 'Their fortified roofing system saved us thousands on insurance. Highly recommend One Roof!',
      rating: 5
    },
    {
      name: 'Jennifer Davis',
      location: 'Covington, LA',
      text: 'From inspection to completion, One Roof was professional and transparent. Great experience!',
      rating: 5
    }
  ];

  return (
    <>
      <SEO
        title="Home"
        description="One Roof - Louisiana's premier roofing contractor serving Baton Rouge, New Orleans, Covington and surrounding areas. Expert roof repair, replacement, storm damage repair, and fortified roofing solutions."
        keywords="Louisiana roofing company, roof repair Baton Rouge, roof replacement New Orleans, roofing contractor Covington LA, storm damage repair Louisiana, fortified roofing"
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-gray-800 text-white py-24"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Louisiana's Most Trusted<br />
            <span className="text-blue-400">Roofing Company</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Protecting homes and businesses across Baton Rouge, New Orleans, Covington, and surrounding Louisiana communities with reliable, long-lasting roofing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg flex items-center space-x-2"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-bold text-lg flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(555) 123-ROOF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Roofing Services Across Louisiana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine repairs to complete roof replacements and fortified hurricane protection, we provide comprehensive roofing solutions for residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Louisiana Homeowners Choose One Roof
            </h2>
            <p className="text-xl text-gray-600">
              Over 15 years of experience protecting Louisiana homes from severe weather
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed Louisiana roofing contractor with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fortified Roofing Certified</h3>
              <p className="text-gray-600">
                Official Fortified roofing installer - hurricane-resistant systems that reduce insurance premiums up to 35%.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Storm damage doesn't wait - neither do we. Emergency roofing services available across our Louisiana service area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Serving Louisiana Communities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['Baton Rouge', 'New Orleans', 'Covington', 'Gonzales', 'Hammond', 'Slidell', 'Mandeville'].map((city) => (
              <div key={city} className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Professional roofing services throughout Louisiana. Contact us to confirm service availability in your area.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Louisiana Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by homeowners and businesses across Louisiana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
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
                Ready to Protect Your Louisiana Property?
              </h2>
              <p className="text-xl mb-8">
                Get your free roofing estimate today. We serve Baton Rouge, New Orleans, Covington, and surrounding Louisiana communities with expert roofing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+15551234567"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (555) 123-ROOF</span>
                </a>
                <Link 
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-center"
                >
                  Online Estimate
                </Link>
              </div>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Estimate"
                subtitle="Fill out the form and we'll contact you within 24 hours"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}