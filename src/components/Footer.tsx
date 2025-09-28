import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const serviceAreas = [
    'Baton Rouge, LA',
    'New Orleans, LA',
    'Covington, LA',
    'Gonzales, LA',
    'Hammond, LA',
    'Slidell, LA',
    'Mandeville, LA',
  ];

  const services = [
    { path: '/residential', label: 'Residential Roofing' },
    { path: '/commercial', label: 'Commercial Roofing' },
    { path: '/fortified', label: 'Fortified Roofing' },
    { path: '/storm-damage', label: 'Storm Damage Repair' },
    { path: '/inspections', label: 'Roof Inspections' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">OR</span>
              </div>
              <div>
                <div className="text-xl font-bold">One Roof</div>
                <div className="text-sm text-gray-400">Louisiana Roofing Experts</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing reliable, long-lasting roofing solutions that protect homes and businesses across Louisiana.
            </p>
            <div className="space-y-2">
              <a href="tel:+15551234567" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                <Phone className="w-4 h-4" />
                <span>(555) 123-ROOF</span>
              </a>
              <a href="mailto:info@oneroof.com" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <Mail className="w-4 h-4" />
                <span>info@oneroof.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-gray-400 flex items-center space-x-2">
                  <MapPin className="w-3 h-3" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 7AM-6PM</span>
              </div>
              <div className="ml-6">Saturday: 8AM-4PM</div>
              <div className="ml-6">Sunday: Emergency Only</div>
            </div>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 One Roof. All rights reserved. Licensed & Insured Louisiana Roofing Contractor.</p>
        </div>
      </div>
    </footer>
  );
}