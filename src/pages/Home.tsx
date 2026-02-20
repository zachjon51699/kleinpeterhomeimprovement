import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Clock, Phone, Star, ArrowRight, MapPin, DollarSign, Wrench, Building, Zap, Droplets, Paintbrush, CloudRain, LayoutGrid, Trees, Fence, Layers } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const HERO_BACKGROUNDS = [
  `${import.meta.env.BASE_URL}Main Background Image 1.avif`,
  `${import.meta.env.BASE_URL}Main Background Image 2.avif`,
  `${import.meta.env.BASE_URL}Main Background Image 3.avif`,
  `${import.meta.env.BASE_URL}Main Background Image 4.avif`
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (HERO_BACKGROUNDS.length <= 1) return;
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const services = [
    {
      title: 'Gutter Installation',
      description: 'Professional gutter installation, repair, and cleaning services to protect your Louisiana home.',
      icon: CloudRain,
      link: '/gutters'
    },
    {
      title: 'Patio Installation',
      description: 'Transform your outdoor space with professional patio installation and maintenance.',
      icon: LayoutGrid,
      link: '/patios'
    },
    {
      title: 'Pergola Installation',
      description: 'Elevate your outdoor space with beautifully crafted pergolas designed for shade and style.',
      icon: Trees,
      link: '/pergolas'
    },
    {
      title: 'Screened Enclosure Installation',
      description: 'Transform your living space with custom screen and glass room enclosures.',
      icon: Building,
      link: '/screened-enclosures'
    },
    {
      title: 'Pressure Washing',
      description: 'Professional pressure washing services to restore and maintain your Louisiana property\'s appearance.',
      icon: Droplets,
      link: '/pressure-washing'
    },
    {
      title: 'Fence Installation',
      description: 'Secure and beautify your property with professional fence installation, repair, and maintenance.',
      icon: Fence,
      link: '/fence'
    },
    {
      title: 'Painting Services',
      description: 'Transform and protect your Louisiana home with professional interior and exterior painting.',
      icon: Paintbrush,
      link: '/paint'
    },
    {
      title: 'Deck Installation',
      description: 'Enhance your outdoor living space with professional deck installation, repair, and maintenance.',
      icon: Layers,
      link: '/decks'
    }
  ];

  const testimonials: { name: string; location: string; date: string; text: string; rating: number; showReviewButton: boolean }[] = [
    {
      name: 'Dee Schneider',
      location: 'LA',
      date: 'July 2024',
      text: 'The crew was on time , very knowledgeable, and couteous during every moment of my repair. They went above and beyond and the price was very fair. I Will use Kieinpeter\'s again!',
      rating: 5,
      showReviewButton: false
    },
    {
      name: 'Jeffrey Marino',
      location: 'LA',
      date: 'July 2024',
      text: 'Excellent repairs and gutters to prevent it from happening again.',
      rating: 5,
      showReviewButton: true
    },
    {
      name: 'Codi Blacklock',
      location: 'LA',
      date: 'July 2024',
      text: 'Joey did an amazing job and was very professional and resonsive. I will definitely refer him and use him on other projects in the future.',
      rating: 5,
      showReviewButton: false
    }
  ];

  const serviceAreas = [
    'Baton Rouge', 'New Orleans', 'Covington', 'Gonzales', 
    'Hammond', 'Slidell', 'Mandeville'
  ];

  const whyChooseUs = [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed Louisiana roofing contractor with comprehensive insurance coverage for your peace of mind.',
      icon: Shield
    },
    {
      title: '24/7 Emergency Service',
      description: 'Storm damage doesn\'t wait - neither do we. Emergency roofing services available across our Louisiana service area.',
      icon: Clock
    },
    {
      title: 'Insurance Claim Assistance',
      description: 'We work directly with your insurance company to maximize your claim and minimize your out-of-pocket costs.',
      icon: DollarSign
    },
    {
      title: '15+ Years Experience',
      description: 'Over 15 years of experience protecting Louisiana homes from severe weather with thousands of satisfied customers.',
      icon: Star
    },
    {
      title: 'Quality Workmanship',
      description: 'We use only the highest quality materials and employ skilled craftsmen who take pride in their work.',
      icon: Wrench
    }
  ];

  return (
    <>
      <SEO
        title="Home"
        description="At Kleinpeter's Home Improvement & Maintenance, your job is our next challenge. We specialize in gutter, patios, screen & glass room enclosures, fences, decks, paint, and pressure washing. Licensed contractor serving Livingston Parish, Ascension Parish, East Baton Rouge Parish and surrounding Louisiana."
        keywords="Louisiana home improvement contractor, gutters Livingston Parish, patios Ascension Parish, pergolas East Baton Rouge, screened enclosures Louisiana, decks Louisiana, fence installation, painting services, pressure washing"
        canonical="https://www.kleinpeterhomeimprovements.com"
      />

      {/* Hero Section - Carousel visible; on mobile form is below, on desktop form is right with glass effect */}
      <section className="relative min-h-0 md:min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Full-screen background carousel */}
        <div className="absolute inset-0 z-0 min-w-0 min-h-0">
          {HERO_BACKGROUNDS.map((src, index) => (
            <img
              key={src}
              src={encodeURI(src)}
              alt=""
              className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-top sm:object-center transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === heroIndex ? 1 : 0,
                zIndex: index === heroIndex ? 0 : -1,
                filter: 'brightness(1.08)'
              }}
              aria-hidden={index !== heroIndex}
            />
          ))}
        </div>
        {/* Gradient overlay - stronger on right so form stays readable */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-transparent via-black/10 to-black/50 md:to-black/40 pointer-events-none" aria-hidden="true" />

        {/* Mobile: carousel viewing area (no form on top) */}
        <div className="relative z-10 min-h-[55vh] md:min-h-0 md:flex-1 md:min-h-screen w-full" aria-hidden="true" />

        {/* Form: below carousel on mobile, right side on desktop with glass style so image shows through */}
        <div className="relative z-10 w-full md:w-[420px] lg:w-[440px] md:flex-shrink-0 flex items-center justify-center md:justify-end min-h-0 px-4 py-6 md:py-8 md:pr-8 lg:pr-12">
            <div className="w-full max-w-lg rounded-3xl p-8 shadow-2xl bg-white/95 md:bg-white/90 backdrop-blur-sm border border-white/20">
              <h2 className="text-xl font-bold text-black text-center mb-6">
                Kleinpeter Home Improvement & Home Maintenance
              </h2>
              {/* Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Short message about your needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Complete Home Improvement Services Across Louisiana
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From gutters and patios to pergolas and screened enclosures, we provide comprehensive home improvement solutions for properties throughout Livingston, Ascension, and East Baton Rouge Parishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-kleinpeter-200 group">
                <div className="bg-kleinpeter-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-kleinpeter-200 transition-colors">
                  <service.icon className="w-10 h-10 text-kleinpeter-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  to={service.link}
                  className="text-kleinpeter-600 hover:text-kleinpeter-700 font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Louisiana Homeowners Choose Kleinpeter's Home Improvement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted local home improvement experts with honesty, integrity, and accountability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-kleinpeter-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-kleinpeter-700 transition-colors shadow-lg">
                  <item.icon className="w-12 h-12 text-white" />
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


      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Serving Louisiana Communities
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional home improvement services throughout Louisiana. Contact us to confirm service availability in your area.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {serviceAreas.map((city) => (
              <div key={city} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <MapPin className="w-6 h-6 text-kleinpeter-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Customer Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <p className="font-bold text-black text-xl mb-1">{testimonial.name}, {testimonial.location}</p>
                <p className="text-gray-500 text-base mb-4">{testimonial.date}</p>
                <div className="flex justify-center gap-0.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-black text-base leading-relaxed text-left w-full mb-6">"{testimonial.text}"</p>
                {testimonial.showReviewButton && (
                  <a
                    href="https://www.google.com/search?q=Kleinpeter+Home+Improvement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                  >
                    Review Us
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Protect Your Louisiana Property?
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Get your free estimate today. We serve Livingston Parish, Ascension Parish, East Baton Rouge Parish, and surrounding Louisiana communities with expert home improvement solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="tel:+12259759845"
                  className="bg-white text-kleinpeter-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg text-center flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call (225) 975-9845</span>
                </a>
                <Link 
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-kleinpeter-600 transition-all duration-300 font-bold text-lg text-center"
                >
                  Online Estimate
                </Link>
              </div>
            </div>
            <div>
              <ContactForm 
                title="Get Your Free Estimate"
                subtitle="Fill out the form and we'll contact you within 24 hours"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}