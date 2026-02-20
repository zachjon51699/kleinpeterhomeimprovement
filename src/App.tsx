import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import RedirectFrom404 from './components/RedirectFrom404';
import Home from './pages/Home';

// Lazy load all routes for code splitting and faster initial load
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Gutters = lazy(() => import('./pages/Gutters'));
const Siding = lazy(() => import('./pages/Siding'));
const Patios = lazy(() => import('./pages/Patios'));
const Pergolas = lazy(() => import('./pages/Pergolas'));
const ScreenedEnclosures = lazy(() => import('./pages/ScreenedEnclosures'));
const PressureWashing = lazy(() => import('./pages/PressureWashing'));
const Fence = lazy(() => import('./pages/Fence'));
const Paint = lazy(() => import('./pages/Paint'));
const Decks = lazy(() => import('./pages/Decks'));
const Locations = lazy(() => import('./pages/Locations'));
const BatonRouge = lazy(() => import('./pages/locations/BatonRouge'));
const NewOrleans = lazy(() => import('./pages/locations/NewOrleans'));
const Covington = lazy(() => import('./pages/locations/Covington'));
const Gonzales = lazy(() => import('./pages/locations/Gonzales'));
const Prairieville = lazy(() => import('./pages/locations/Prairieville'));
const Hammond = lazy(() => import('./pages/locations/Hammond'));
const Slidell = lazy(() => import('./pages/locations/Slidell'));
const Mandeville = lazy(() => import('./pages/locations/Mandeville'));
const Landing = lazy(() => import('./pages/Landing'));
// Loading component - You'll see this briefly when navigating to lazy-loaded pages
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-kleinpeter-600"></div>
      <p className="mt-4 text-gray-600">Loading page...</p>
      <p className="mt-2 text-sm text-gray-500">Performance optimization active</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <RedirectFrom404 />
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="gutters" element={<Gutters />} />
              <Route path="siding" element={<Siding />} />
              <Route path="patios" element={<Patios />} />
              <Route path="pergolas" element={<Pergolas />} />
              <Route path="screened-enclosures" element={<ScreenedEnclosures />} />
              <Route path="pressure-washing" element={<PressureWashing />} />
              <Route path="fence" element={<Fence />} />
              <Route path="paint" element={<Paint />} />
              <Route path="decks" element={<Decks />} />
              <Route path="locations" element={<Locations />} />
              <Route path="locations/baton-rouge" element={<BatonRouge />} />
              <Route path="locations/new-orleans" element={<NewOrleans />} />
              <Route path="locations/covington" element={<Covington />} />
              <Route path="locations/gonzales" element={<Gonzales />} />
              <Route path="locations/prairieville" element={<Prairieville />} />
              <Route path="locations/hammond" element={<Hammond />} />
              <Route path="locations/slidell" element={<Slidell />} />
              <Route path="locations/mandeville" element={<Mandeville />} />
            </Route>
            {/* Landing page without header/footer */}
            <Route path="landing" element={<Landing />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;