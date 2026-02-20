import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function Contact() {
  const serviceAreas = [
    { city: 'Livingston Parish', state: 'LA', description: 'Serving Livingston Parish with professional home improvement services.' },
    { city: 'Ascension Parish', state: 'LA', description: 'Expert home improvement solutions for Ascension Parish.' },
    { city: 'East Baton Rouge Parish', state: 'LA', description: 'Quality home improvement services for East Baton Rouge Parish.' }
  ];

  return (
    <>
      <SEO
        title="Contact"
        description="Contact us today for a free quote from Kleinpeter's Home Improvement. Louisiana gutters, patios, pergolas, enclosures, decks, fence, paint, pressure washing. Call (225) 975-9845. Licensed contractor."
        keywords="contact home improvement contractor Louisiana, home improvement estimate Livingston Parish, free quote Ascension East Baton Rouge"
        canonical="https://www.kleinpeterhomeimprovements.com/contact"
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-10 lg:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Contact Kleinpeter's<br />
              <span className="text-white">Home Improvement</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Ready to improve your Louisiana home? Contact Kleinpeter's Home Improvement today for your free estimate. We serve Livingston Parish, Ascension Parish, East Baton Rouge Parish, and surrounding communities with expert home improvement solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+12259759845"
                className="bg-kleinpeter-600 text-white px-10 py-5 rounded-lg hover:bg-kleinpeter-700 transition-all duration-300 font-bold text-xl flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-6 h-6" />
                <span>(225) 975-9845</span>
              </a>
              <a 
                href="mailto:kleinpeter.homes@gmail.com"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-xl flex items-center justify-center space-x-3"
              >
                <Mail className="w-6 h-6" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm 
                title="Get Your Free Louisiana Home Improvement Estimate"
                subtitle="Fill out the form below and we'll contact you within 24 hours to schedule your free estimate."
              />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-kleinpeter-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-kleinpeter-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                    <a href="tel:+12259759845" className="text-kleinpeter-600 hover:text-kleinpeter-700 font-medium">
                      (225) 975-9845
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call for a free estimate</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-kleinpeter-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-kleinpeter-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:kleinpeter.homes@gmail.com" className="text-kleinpeter-600 hover:text-kleinpeter-700 font-medium">
                      kleinpeter.homes@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We respond within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-kleinpeter-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-kleinpeter-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Service Area</h3>
                    <p className="text-gray-700">Serving Louisiana</p>
                    <p className="text-gray-600 text-sm mt-1">Livingston Parish, Ascension Parish, East Baton Rouge Parish, and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-kleinpeter-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-kleinpeter-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-800 mb-2">Free Estimates Available</h4>
                <p className="text-red-700 text-sm">
                  Contact us today for your free home improvement estimate. Call (225) 975-9845 or email kleinpeter.homes@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Louisiana Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional home improvement services throughout Louisiana. We're proud to serve these communities and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-5 h-5 text-kleinpeter-600" />
                  <h3 className="text-lg font-bold text-gray-800">{area.city}, {area.state}</h3>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your Louisiana community listed? Contact us to confirm service availability in your area.
            </p>
            <a 
              href="tel:+12259759845"
              className="bg-kleinpeter-600 text-white px-8 py-3 rounded-lg hover:bg-kleinpeter-700 transition-colors font-semibold inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (225) 975-9845</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Serving Louisiana Communities
            </h2>
            <p className="text-xl text-gray-600">
              Serving Livingston Parish, Ascension Parish, and East Baton Rouge Parish
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234526.68278865785!2d-90.34128565!3d30.217525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a454b2118265%3A0x6865551163924861!2sBaton%20Rouge%2C%20LA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kleinpeter's Home Improvement Service Area - Louisiana"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Kleinpeter's Home Improvement today for your free estimate and discover why Louisiana homeowners trust us to improve their homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12259759845"
              className="bg-white text-kleinpeter-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-6 h-6" />
              <span>Call (225) 975-9845</span>
            </a>
            <a 
              href="mailto:kleinpeter.homes@gmail.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-kleinpeter-600 transition-colors font-bold text-lg inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-6 h-6" />
              <span>Email for Quote</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}