import { Users, Award, Shield, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Where your home improvement dreams become our next challenge. Learn about Kleinpeter's Home Improvement & Home Maintenance, LLC — Louisiana contractor for gutters, patios, pergolas, enclosures, decks, fence, paint, and pressure washing."
        keywords="about Kleinpeter Home Improvement, Louisiana home improvement contractor, Livingston Parish Ascension East Baton Rouge"
        canonical="https://www.kleinpeterhomeimprovements.com/about"
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
              About One Roof
            </h1>
            <p className="text-xl leading-relaxed">
              For over 15 years, One Roof has been Louisiana's most trusted roofing contractor, protecting homes and businesses from Baton Rouge to New Orleans with reliable, long-lasting roofing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At One Roof, our mission is simple: to provide reliable, long-lasting roofing solutions that protect homes and businesses across Louisiana. We understand the unique challenges that Louisiana weather presents, from intense hurricanes to severe thunderstorms, and we're committed to delivering roofing systems that can withstand whatever Mother Nature brings.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a locally-owned and operated Louisiana roofing company, we take pride in serving our communities with integrity, professionalism, and unmatched expertise. Every project we complete strengthens our commitment to protecting Louisiana families and businesses.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-kleinpeter-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-kleinpeter-600 mb-2">5000+</div>
                  <div className="text-gray-600">Roofs Protected</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="One Roof team working on residential roof repair in Baton Rouge Louisiana"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do as Louisiana's premier roofing contractor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-kleinpeter-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-kleinpeter-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We use only the highest quality materials and proven installation techniques to ensure your roof stands the test of time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-kleinpeter-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-kleinpeter-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Every decision we make is centered around what's best for our customers and their long-term satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-kleinpeter-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-kleinpeter-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, from the smallest repair to complete roof replacement systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-kleinpeter-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-kleinpeter-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reliability</h3>
              <p className="text-gray-600">
                When we say we'll be there, we'll be there. Louisiana weather doesn't wait, and neither do we.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fortified roofing installation by One Roof contractors in New Orleans Louisiana"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Louisiana Roofing Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team brings over 15 years of specialized experience in Louisiana roofing challenges. We understand the unique demands that our climate places on roofing systems - from hurricane-force winds to intense heat and humidity.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Storm Damage Specialists</h4>
                    <p className="text-gray-600">Expert storm damage assessment and repair throughout Louisiana</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fortified Roofing Certified</h4>
                    <p className="text-gray-600">Official Fortified roofing installer for hurricane-resistant systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Insurance Claim Assistance</h4>
                    <p className="text-gray-600">Complete support through the insurance claim process</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600">
                Whether you're in Baton Rouge, New Orleans, Covington, or anywhere in between, our Louisiana-based team understands your local needs and delivers solutions that protect your investment for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work with Louisiana's Most Trusted Roofers?
              </h2>
              <p className="text-xl mb-8">
                Experience the One Roof difference. Contact us today for your free estimate and discover why thousands of Louisiana property owners trust us with their roofing needs.
              </p>
              <p className="text-lg mb-4">
                <strong>Service Areas:</strong> Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell, Mandeville, and surrounding Louisiana communities.
              </p>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Estimate"
                subtitle="Contact One Roof today for expert roofing solutions"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}