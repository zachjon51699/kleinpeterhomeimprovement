import { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      title: 'Residential Shingle Roof Replacement - Baton Rouge, LA',
      description: 'Complete asphalt shingle roof replacement on traditional Louisiana home featuring hurricane-resistant materials.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      location: 'Baton Rouge, LA'
    },
    {
      title: 'Commercial Flat Roof Installation - New Orleans, LA',
      description: 'TPO commercial roofing system installation on New Orleans business building with enhanced drainage.',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      location: 'New Orleans, LA'
    },
    {
      title: 'Storm Damage Repair - Covington, LA',
      description: 'Hurricane damage restoration including emergency tarping and complete roof reconstruction.',
      image: 'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Storm Damage',
      location: 'Covington, LA'
    },
    {
      title: 'Fortified Roofing System - Hammond, LA',
      description: 'IBHS Fortified roofing installation providing enhanced hurricane protection and insurance savings.',
      image: 'https://images.pexels.com/photos/8293653/pexels-photo-8293653.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fortified',
      location: 'Hammond, LA'
    },
    {
      title: 'Metal Roofing Installation - Slidell, LA',
      description: 'Standing seam metal roof installation offering superior durability for Louisiana weather.',
      image: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      location: 'Slidell, LA'
    },
    {
      title: 'Tile Roof Restoration - Mandeville, LA',
      description: 'Clay tile roof restoration preserving the architectural beauty of historic Louisiana home.',
      image: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Residential',
      location: 'Mandeville, LA'
    },
    {
      title: 'Emergency Storm Response - Gonzales, LA',
      description: 'Rapid emergency response and temporary protection following severe Louisiana storm damage.',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Storm Damage',
      location: 'Gonzales, LA'
    },
    {
      title: 'Commercial Roof Maintenance - Baton Rouge, LA',
      description: 'Preventive maintenance program for large commercial facility ensuring optimal roof performance.',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Commercial',
      location: 'Baton Rouge, LA'
    },
    {
      title: 'Residential Roof Inspection - New Orleans, LA',
      description: 'Comprehensive roof inspection identifying potential issues before they become costly problems.',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Inspection',
      location: 'New Orleans, LA'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Storm Damage', 'Fortified', 'Inspection'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const maxIndex = filteredProjects.length - 1;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? maxIndex : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === maxIndex ? 0 : currentIndex + 1);
    }
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="View our completed roofing projects throughout Louisiana including residential roofing, commercial roofing, storm damage repairs, and Fortified roofing installations in Baton Rouge, New Orleans, Covington and surrounding areas."
        keywords="roofing gallery Louisiana, completed roofing projects Baton Rouge, roofing photos New Orleans, before after roofing Covington, Louisiana roofing examples"
      />

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Louisiana Roofing Projects
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Explore our portfolio of completed roofing projects throughout Louisiana. From residential roof replacements to commercial installations and emergency storm damage repairs, see the quality craftsmanship that One Roof delivers across Baton Rouge, New Orleans, Covington, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex items-center text-sm text-blue-600">
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ArrowRight className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filteredProjects[selectedImage].category}
                  </span>
                  <span className="text-blue-600 font-medium">
                    {filteredProjects[selectedImage].location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {filteredProjects[selectedImage].title}
                </h3>
                <p className="text-gray-600">
                  {filteredProjects[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Proven Results Across Louisiana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 15 years of protecting Louisiana homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-700">Roofs Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Gallery of Satisfied Louisiana Customers?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact One Roof today for your free estimate and discover why thousands of Louisiana property owners trust us with their roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15551234567"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2"
            >
              <span>Call (555) 123-ROOF</span>
            </a>
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              Get Free Estimate
            </a>
          </div>
          <p className="text-lg mt-6">
            Serving Baton Rouge, New Orleans, Covington, Gonzales, Hammond, Slidell, Mandeville, and all Louisiana communities.
          </p>
        </div>
      </section>
    </>
  );
}