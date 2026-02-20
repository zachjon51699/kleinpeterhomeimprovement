import { useState } from 'react';
import { Phone, MapPin, FileText, Shield, Clock, Star, CheckCircle, DollarSign, AlertTriangle, User } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

export default function Landing() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    streetAddress: '',
    city: '',
    state: 'LA',
    helpType: 'not-sure'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO
        title="Free Same-Day Roof Inspection | One Roof Louisiana"
        description="Get a free same-day roof inspection with on-the-spot estimate. 100% satisfaction guaranteed. Limited slots available. Schedule now!"
        keywords="free roof inspection, roof estimate, Louisiana roofing, Baton Rouge roof inspection"
      />

      {/* Top Alert Bar */}
      <div className="bg-kleinpeter-600 text-white py-3 text-center">
        <p className="text-sm md:text-base font-bold uppercase tracking-wide">
          LIMITED SLOTS AVAILABLE! SCHEDULE YOUR SAME-DAY FREE ROOF INSPECTION TODAY!
        </p>
      </div>

      {/* Main Hero Section */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-4">
            <img 
              src="/kleinpeterlogo.png" 
              alt="One Roof Louisiana" 
              className="h-16 mx-auto"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-kleinpeter-600 mb-3 leading-tight">
            SAME-DAY FREE ROOF INSPECTION<br />
            <span className="text-kleinpeter-600">WITH ON-THE-SPOT ESTIMATE</span>
          </h1>

          {/* Guarantee Statement */}
          <p className="text-sm md:text-base text-gray-800 mb-6 font-semibold">
            100% Satisfaction Guaranteed — We'll Make It Right or You Don't Pay a Dime!
          </p>

          {/* CTA Button */}
          <a 
            href="#claim-inspection"
            className="inline-block bg-kleinpeter-600 text-white px-6 py-3 rounded-lg hover:bg-kleinpeter-700 transition-colors font-bold text-base shadow-lg"
          >
            SECURE YOUR SPOT NOW
          </a>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="claim-inspection" className="bg-gray-50 py-8 px-4">
        <div className="max-w-xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
              Claim Your Free Inspection Now!
            </h2>
            <p className="text-xs text-gray-600">
              Fill in your details below to lock in your inspection
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 md:p-5">
            {/* Full Name */}
            <div className="mb-3">
              <label className="block text-gray-800 font-semibold mb-1 text-xs">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kleinpeter-600 text-xs"
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="block text-gray-800 font-semibold mb-1 text-xs">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kleinpeter-600 text-xs"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="block text-gray-800 font-semibold mb-1 text-xs">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kleinpeter-600 text-xs"
              />
            </div>

            {/* Address Search */}
            <div className="mb-3">
              <label className="block text-gray-800 font-semibold mb-1 text-xs">
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Search address"
                  className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kleinpeter-600 pl-7 text-xs"
                />
                <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
              </div>
            </div>

            {/* Street Address */}
            <div className="mb-3">
              <label className="block text-gray-800 font-semibold mb-1 text-xs">
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                placeholder="Address"
                className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kleinpeter-600 text-xs"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-xs">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kleinpeter-600 text-xs"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-xs">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kleinpeter-600 text-xs"
                >
                  <option value="LA">Louisiana</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="MS">Mississippi</option>
                  <option value="TX">Texas</option>
                </select>
              </div>
            </div>

            {/* Help Type Selection */}
            <div className="mb-3">
              <label className="block text-gray-800 font-semibold mb-2 text-xs">
                How can we help you? *
              </label>
              <div className="space-y-1.5">
                <label className="flex items-center p-1.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-kleinpeter-50 transition-colors text-xs">
                  <input
                    type="radio"
                    name="helpType"
                    value="full-replacement"
                    checked={formData.helpType === 'full-replacement'}
                    onChange={handleChange}
                    className="mr-1.5 w-2.5 h-2.5 text-kleinpeter-600 focus:ring-kleinpeter-600"
                  />
                  <span className="text-gray-800 text-xs">Full Roof Replacement</span>
                </label>
                <label className="flex items-center p-1.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-kleinpeter-50 transition-colors text-xs">
                  <input
                    type="radio"
                    name="helpType"
                    value="repair"
                    checked={formData.helpType === 'repair'}
                    onChange={handleChange}
                    className="mr-1.5 w-2.5 h-2.5 text-kleinpeter-600 focus:ring-kleinpeter-600"
                  />
                  <span className="text-gray-800 text-xs">Roof Repair (Leaks, Shingles, Flashing)</span>
                </label>
                <label className="flex items-center p-1.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-kleinpeter-50 transition-colors text-xs">
                  <input
                    type="radio"
                    name="helpType"
                    value="storm-damage"
                    checked={formData.helpType === 'storm-damage'}
                    onChange={handleChange}
                    className="mr-1.5 w-2.5 h-2.5 text-kleinpeter-600 focus:ring-kleinpeter-600"
                  />
                  <span className="text-gray-800 text-xs">Storm or Insurance-Related Damage</span>
                </label>
                <label className="flex items-center p-1.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-kleinpeter-50 transition-colors text-xs">
                  <input
                    type="radio"
                    name="helpType"
                    value="skylight"
                    checked={formData.helpType === 'skylight'}
                    onChange={handleChange}
                    className="mr-1.5 w-2.5 h-2.5 text-kleinpeter-600 focus:ring-kleinpeter-600"
                  />
                  <span className="text-gray-800 text-xs">Skylight or Structural Repairs</span>
                </label>
                <label className="flex items-center p-1.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-kleinpeter-50 transition-colors text-xs">
                  <input
                    type="radio"
                    name="helpType"
                    value="not-sure"
                    checked={formData.helpType === 'not-sure'}
                    onChange={handleChange}
                    className="mr-1.5 w-2.5 h-2.5 text-kleinpeter-600 focus:ring-kleinpeter-600"
                  />
                  <span className="text-gray-800 text-xs">Not Sure — I Need a Roof Assessment</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-kleinpeter-600 text-white py-2 rounded-lg hover:bg-kleinpeter-700 transition-colors font-bold text-xs shadow-lg"
            >
              SUBMIT & SECURE YOUR FREE INSPECTION
            </button>

            {/* Trust Indicators */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-kleinpeter-600 mr-1" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-kleinpeter-600 mr-1" />
                  <span>5/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-3 h-3 text-kleinpeter-600 mr-1" />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Images */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/image1.png"
                alt="One Roof roofing project showcasing expert craftsmanship"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/image2.png"
                alt="Professional roofing work demonstrating quality and attention to detail"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Trusted by Your Neighbors Across Baton Rouge, New Orleans & Lafayette
            </h2>
            
            <ul className="space-y-3 mb-6 max-w-2xl mx-auto">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-base">15+ Years of Roofing Excellence & Integrity</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-base">Thorough Cleanup (Nails, Felt, and Debris)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-base">Emergency Response Teams Available 24/7</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 text-base">Licensed & Fully Insured Local Roofing Experts</span>
              </li>
            </ul>

            <a 
              href="#claim-inspection"
              className="inline-block bg-kleinpeter-600 text-white px-6 py-3 rounded-lg hover:bg-kleinpeter-700 transition-colors font-bold text-base shadow-lg"
            >
              SECURE YOUR SPOT NOW
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Why Choose One Roof Louisiana?
              </h2>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-gray-700 text-base font-semibold">Rapid Response: </span>
                    <span className="text-gray-700 text-base">Same-day inspections and fast, reliable service.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-gray-700 text-base font-semibold">Expert Craftsmanship: </span>
                    <span className="text-gray-700 text-base">Meticulous attention to detail ensuring your roof's longevity.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-gray-700 text-base font-semibold">Transparent Pricing: </span>
                    <span className="text-gray-700 text-base">Clear, upfront estimates with zero hidden fees.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-gray-700 text-base font-semibold">Local Reputation: </span>
                    <span className="text-gray-700 text-base">Over 15 years serving Louisiana with pride.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-kleinpeter-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-gray-700 text-base font-semibold">Superior Warranty: </span>
                    <span className="text-gray-700 text-base">Lifetime workmanship guarantee giving you complete peace of mind.</span>
                  </div>
                </li>
              </ul>

              <a 
                href="#claim-inspection"
                className="inline-block bg-kleinpeter-600 text-white px-6 py-3 rounded-lg hover:bg-kleinpeter-700 transition-colors font-bold text-base shadow-lg"
              >
                SECURE YOUR SPOT NOW
              </a>
            </div>

            {/* Right Column - Image */}
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/WhyChooseOneRoof.png"
                  alt="Professional residential roof with brown asphalt shingles showing expert craftsmanship"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning CTA Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-kleinpeter-600 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Image */}
              <div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/DontWaituntilitstoolate.png"
                    alt="Professional roofing team working on residential roof repair"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right Column - Warning & CTA */}
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
                  <h2 className="text-xl md:text-2xl font-bold">
                    Don't Wait Until It's Too Late!
                  </h2>
                </div>
                
                <p className="text-sm md:text-base mb-6 leading-relaxed">
                  Roof damage can quickly escalate, impacting your home's safety, value, and comfort. Secure your home today with Louisiana's most trusted roofing experts.
                </p>

                <a 
                  href="#claim-inspection"
                  className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-bold text-base shadow-lg"
                >
                  CLAIM YOUR FREE INSPECTION NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            What Your Neighbors Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 - Claire McCrary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Claire McCrary</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">2 years ago</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                I love supporting LOCAL biz & this family is rooted in the BTR area community. OneRoof LA went above & beyond to make sure my home is protected. I got a new roof within days of contacting them, and they showed attention to detail during the installation—even calling to see if I wanted an old dish satellite disposed of. I was told the crew would be there at 6:30am, and they pulled in at 6:28. The perimeter was draped with tarps and I didn't see a single nail or scrap after they left.
              </p>
            </div>

            {/* Testimonial 2 - Anonymous Customer */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Anonymous Customer</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Recently</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                The OneRoof team put a new fortified roof on my home after we received hail damage earlier. They were very professional, courteous and efficient. We were very happy with the finished product, since my homeowners insurance re-adjusted to a lower price, causing my payments to go down.
              </p>
            </div>

            {/* Testimonial 3 - Nicole Boudreaux */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Nicole Boudreaux</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Recently</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                OneRoofLa Recently redid our roof- Ray was especially helpful and extremely responsive to all of my questions and concerns. They were able to get our roof done swiftly after multiple storms and help with all insurance concerns. The crew that redid our roof was very clean and thorough with making sure all nails were picked up before leaving & completed the entire roof in one day. We love our new roof- thanks OneRoofLa!!
              </p>
            </div>

            {/* Testimonial 4 - Christin Andrews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Christin Andrews</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">2 years ago</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                Best company to deal with from start to finish.
              </p>
            </div>

            {/* Testimonial 5 - Altitudemonk */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Altitudemonk</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">2 years ago</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                Beautiful new roof beautiful new roof. Finished on time looks great.
              </p>
            </div>

            {/* Testimonial 6 - Phillip Bates */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Phillip Bates</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">a year ago</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                Very professional, best roofer in Baton Rouge!
              </p>
            </div>

            {/* Testimonial 7 - Jonathan Patout */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Jonathan Patout</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">2 years ago</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                Justin Andrews did a great job getting us a roof in a timely manner. One roof was really professional and did a great job cleaning up after the job.
              </p>
            </div>

            {/* Testimonial 8 - Jonathan Drummond */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Jonathan Drummond</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Recently</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                The OneRoof rep Justin showed up on time and was really helpful and knowledgeable. He handled everything with the insurer for us and was available throughout the entire roof replacement process.
              </p>
            </div>

            {/* Testimonial 9 - Francine King */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-kleinpeter-600 mr-2" />
                <span className="font-semibold text-gray-800">Francine King</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Recently</p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">
                Overall, we are very satisfied. I would recommend them to anyone considering a new roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Number Footer */}
      <section className="bg-kleinpeter-600 text-white py-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold">
            Or call us directly: <a href="tel:+15551234567" className="underline hover:text-kleinpeter-200">(555) 123-ROOF</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

