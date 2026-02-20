import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const serviceAreas = [
    { name: 'All Service Areas', path: '/locations' },
    { name: 'Baton Rouge, LA', path: '/locations/baton-rouge' },
    { name: 'New Orleans, LA', path: '/locations/new-orleans' },
    { name: 'Covington, LA', path: '/locations/covington' },
    { name: 'Gonzales, LA', path: '/locations/gonzales' },
    { name: 'Prairieville, LA', path: '/locations/prairieville' },
    { name: 'Hammond, LA', path: '/locations/hammond' },
    { name: 'Slidell, LA', path: '/locations/slidell' },
    { name: 'Mandeville, LA', path: '/locations/mandeville' },
  ];

  const services = [
    { path: '/gutters', label: 'Gutter Installation' },
    { path: '/patios', label: 'Patio Installation' },
    { path: '/pergolas', label: 'Pergola Installation' },
    { path: '/screened-enclosures', label: 'Screened Enclosure Installation' },
    { path: '/pressure-washing', label: 'Pressure Washing' },
    { path: '/fence', label: 'Fence Installation' },
    { path: '/paint', label: 'Painting Services' },
    { path: '/decks', label: 'Deck Installation' },
  ];

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}kleinpeterlogo.png`} 
                alt="Kleinpeter's Home Improvement Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Providing reliable, long-lasting home improvement solutions that protect and enhance homes across Louisiana.
            </p>
            <div className="space-y-2">
              <a href="tel:+12259759845" className="flex items-center space-x-2 text-black hover:text-gray-700">
                <Phone className="w-4 h-4" />
                <span>(225) 975-9845</span>
              </a>
              <a href="mailto:kleinpeter.homes@gmail.com" className="flex items-center space-x-2 text-gray-700 hover:text-black">
                <Mail className="w-4 h-4" />
                <span>kleinpeter.homes@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.path}
                    className="text-gray-700 hover:text-black transition-colors flex items-center space-x-2"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Business Hours</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Monday: 7:00AM – 5:00PM</span>
              </div>
              <div className="ml-6">Tuesday: 7:00AM – 5:00PM</div>
              <div className="ml-6">Wednesday: 7:00AM – 5:00PM</div>
              <div className="ml-6">Thursday: 7:00AM – 5:00PM</div>
              <div className="ml-6">Friday: 7:00AM – 5:00PM</div>
              <div className="ml-6">Saturday: 8:00AM – 4:00PM</div>
              <div className="ml-6">Sunday: Closed</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-700">
          <p>© {currentYear} Kleinpeter&apos;s Home Improvement &amp; Home Maintenance, LLC. All rights reserved. Licensed &amp; Insured Louisiana Contractor.</p>
        </div>
      </div>
    </footer>
  );
}
