import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { getImageCategories } from '../data/galleryCategories';

// Display wording for each category (used for title and description)
const CATEGORY_PROJECT_LABELS: Record<string, string> = {
  Gutters: 'Gutter Installation',
  Patios: 'Patio Installation',
  Pergolas: 'Pergola Installation',
  Remodeling: 'Remodeling',
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Generate array of images: only those in galleryCategories (removed images are excluded)
  const generateImageArray = () => {
    const images = [];
    const locations = ['Livingston Parish, LA', 'Ascension Parish, LA', 'East Baton Rouge Parish, LA', 'Baton Rouge, LA', 'Gonzales, LA', 'Prairieville, LA', 'Denham Springs, LA', 'Walker, LA'];

    const imageCategories = getImageCategories();
    const imageNumbers = Object.keys(imageCategories).map(Number).sort((a, b) => a - b);

    imageNumbers.forEach((num, index) => {
      const category = imageCategories[num];
      const projectLabel = CATEGORY_PROJECT_LABELS[category] ?? category;
      const location = locations[index % locations.length];
      images.push({
        title: `${projectLabel} - ${location}`,
        description: `Professional ${projectLabel.toLowerCase()} completed in ${location}, showcasing quality craftsmanship and attention to detail.`,
        image: `${import.meta.env.BASE_URL}image${num}.avif`,
        category,
        location
      });
    });

    return images;
  };

  const projects = generateImageArray();

  const categories = ['All', 'Patios', 'Pergolas', 'Gutters', 'Remodeling'];
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
        description="At Kleinpeter's Home Improvement & Maintenance, your job is our next challenge. View our project gallery — gutters, patios, pergolas, enclosures, decks, fence, paint, pressure washing across Louisiana."
        keywords="home improvement gallery Louisiana, completed projects Livingston Parish, Ascension Parish, East Baton Rouge Parish"
        canonical="https://www.kleinpeterhomeimprovements.com/gallery"
      />

      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Home Improvement Project Gallery
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Explore our portfolio of completed home improvement projects throughout Louisiana. From gutters and patios to pergolas and decks, see the quality craftsmanship that Kleinpeter's Home Improvement delivers across Livingston Parish, Ascension Parish, East Baton Rouge Parish, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Filter by Service Type</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-kleinpeter-600 text-white'
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
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          ) : (
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
                      className="w-full h-48 sm:h-56 md:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${project.image}`);
                        (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}image1.avif`; // Fallback
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-kleinpeter-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex items-center text-sm text-kleinpeter-600">
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -top-2 -right-2 bg-white text-gray-800 rounded-full p-1 shadow-lg hover:bg-gray-100 z-20"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              type="button"
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>
            
            <button
              type="button"
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-20"
              aria-label="Next image"
            >
              <ArrowRight className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={filteredProjects[selectedImage].image}
                alt={filteredProjects[selectedImage].title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-center max-h-[70vh]"
                onError={(e) => {
                  console.error(`Failed to load image: ${filteredProjects[selectedImage].image}`);
                  (e.target as HTMLImageElement).src = `${import.meta.env.BASE_URL}image1.avif`; // Fallback
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-kleinpeter-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filteredProjects[selectedImage].category}
                  </span>
                  <span className="text-kleinpeter-600 font-medium">
                    {filteredProjects[selectedImage].location}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {filteredProjects[selectedImage].title}
                </h3>
                <p className="text-gray-600">
                  {filteredProjects[selectedImage].description}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Image #{filteredProjects[selectedImage].image.replace(/\D/g, '')}
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
              Quality home improvement services for Louisiana homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-kleinpeter-600 mb-2">1000+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-kleinpeter-600 mb-2">98%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-kleinpeter-600 mb-2">38</div>
              <div className="text-gray-700">Gallery Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-kleinpeter-600 mb-2">4</div>
              <div className="text-gray-700">Service Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Gallery of Satisfied Louisiana Customers?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact Kleinpeter's Home Improvement today for your free estimate and discover why Louisiana property owners trust us with their home improvement needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12259759845"
              className="bg-white text-kleinpeter-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2"
            >
              <span>Call (225) 975-9845</span>
            </a>
            <Link 
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-kleinpeter-600 transition-colors font-semibold"
            >
              Get Free Estimate
            </Link>
          </div>
          <p className="text-lg mt-6">
            Serving Livingston Parish, Ascension Parish, East Baton Rouge Parish, and all Louisiana communities.
          </p>
        </div>
      </section>
    </>
  );
}
