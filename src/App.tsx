import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Fortified from './pages/Fortified';
import StormDamage from './pages/StormDamage';
import Inspections from './pages/Inspections';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="residential" element={<Residential />} />
            <Route path="commercial" element={<Commercial />} />
            <Route path="fortified" element={<Fortified />} />
            <Route path="storm-damage" element={<StormDamage />} />
            <Route path="inspections" element={<Inspections />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;