import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/locations', label: 'Service Areas' },
    { path: '/contact', label: 'Contact' },
  ];

  const locationItems = [
    { path: '/locations', label: 'All Service Areas' },
    { path: '/locations/baton-rouge', label: 'Baton Rouge, LA' },
    { path: '/locations/new-orleans', label: 'New Orleans, LA' },
    { path: '/locations/covington', label: 'Covington, LA' },
    { path: '/locations/gonzales', label: 'Gonzales, LA' },
    { path: '/locations/prairieville', label: 'Prairieville, LA' },
    { path: '/locations/hammond', label: 'Hammond, LA' },
    { path: '/locations/slidell', label: 'Slidell, LA' },
    { path: '/locations/mandeville', label: 'Mandeville, LA' },
  ];

  const serviceItems = [
    { path: '/services', label: 'All Services' },
    { path: '/gutters', label: 'Gutter Installation' },
    { path: '/patios', label: 'Patio Installation' },
    { path: '/pergolas', label: 'Pergola Installation' },
    { path: '/screened-enclosures', label: 'Screened Enclosure Installation' },
    { path: '/pressure-washing', label: 'Pressure Washing' },
    { path: '/fence', label: 'Fence Installation' },
    { path: '/paint', label: 'Painting Services' },
    { path: '/decks', label: 'Deck Installation' },
  ];

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleLocationsMouseEnter = () => {
    if (locationsTimeoutRef.current) {
      clearTimeout(locationsTimeoutRef.current);
    }
    setIsLocationsOpen(true);
  };

  const handleLocationsMouseLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setIsLocationsOpen(false);
    }, 150);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/kleinpeterlogo.png" 
              alt="Kleinpeter's Home Improvement Logo" 
              className="h-16 w-auto"
            />
          </Link>

              <nav className="hidden lg:flex items-center space-x-8">
                <Link
                  to="/"
                  className={`font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'text-black'
                      : 'text-black hover:text-gray-700'
                  }`}
                >
                  Home
                </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
                  <button
                    className={`font-medium transition-colors flex items-center space-x-1 ${
                      serviceItems.some(item => location.pathname === item.path)
                        ? 'text-black'
                        : 'text-black hover:text-gray-700'
                    }`}
                  >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsServicesOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'text-black bg-kleinpeter-50'
                              : 'text-gray-800 hover:text-black hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                </div>
              )}
            </div>

                <Link
                  to="/gallery"
                  className={`font-medium transition-colors ${
                    location.pathname === '/gallery'
                      ? 'text-black'
                      : 'text-black hover:text-gray-700'
                  }`}
                >
                  Gallery
                </Link>

            {/* Service Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleLocationsMouseEnter}
              onMouseLeave={handleLocationsMouseLeave}
            >
                  <button
                    className={`font-medium transition-colors flex items-center space-x-1 ${
                      locationItems.some(item => location.pathname === item.path)
                        ? 'text-black'
                        : 'text-black hover:text-gray-700'
                    }`}
                  >
                <span>Service Areas</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLocationsOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border py-2 z-50"
                  onMouseEnter={handleLocationsMouseEnter}
                  onMouseLeave={handleLocationsMouseLeave}
                >
                      {locationItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsLocationsOpen(false)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'text-black bg-kleinpeter-50'
                              : 'text-gray-800 hover:text-black hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                </div>
              )}
            </div>
            
                <Link
                  to="/contact"
                  className={`font-medium transition-colors ${
                    location.pathname === '/contact'
                      ? 'text-black'
                      : 'text-black hover:text-gray-700'
                  }`}
                >
                  Contact
                </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
                <a
                  href="tel:+12259759845"
                  className="flex items-center space-x-2 text-black hover:text-gray-700 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>(225) 975-9845</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-kleinpeter-600 text-white px-6 py-2 rounded-lg hover:bg-kleinpeter-700 transition-colors font-semibold"
                >
                  Free Estimate
                </Link>
          </div>

          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
                  <Link
                    to="/"
                    className={`p-2 rounded-lg transition-colors ${
                      location.pathname === '/'
                        ? 'text-black bg-kleinpeter-50'
                        : 'text-black hover:text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
              
              {/* Mobile Services Section */}
              <div className="pt-2 border-t">
                <div className="text-sm font-semibold text-gray-700 px-2 mb-2">Services</div>
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`p-2 pl-4 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'text-black bg-kleinpeter-50'
                        : 'text-black hover:text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/gallery"
                className={`p-2 rounded-lg transition-colors ${
                  location.pathname === '/gallery'
                    ? 'text-black bg-kleinpeter-50'
                    : 'text-black hover:text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>

              {/* Mobile Service Areas Section */}
              <div className="pt-2 border-t">
                <div className="text-sm font-semibold text-gray-700 px-2 mb-2">Service Areas</div>
                {locationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`p-2 pl-4 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'text-black bg-kleinpeter-50'
                        : 'text-black hover:text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/contact"
                className={`p-2 rounded-lg transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-black bg-kleinpeter-50'
                    : 'text-black hover:text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t">
                <a
                  href="tel:+12259759845"
                  className="flex items-center space-x-2 p-2 text-black hover:text-gray-700 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>(225) 975-9845</span>
                </a>
                <Link
                  to="/contact"
                  className="block mt-2 bg-kleinpeter-600 text-white px-4 py-2 rounded-lg hover:bg-kleinpeter-700 transition-colors font-semibold text-center"
                >
                  Free Estimate
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}// Cache bust: 1770561190
