import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Hurricane Season Roofing: How to Prepare Your Louisiana Home',
      excerpt: 'Learn essential steps to protect your roof before hurricane season hits Louisiana. From inspections to reinforcements, we cover everything you need to know.',
      author: 'One Roof Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Storm Protection',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      slug: 'hurricane-season-roofing-prep'
    },
    {
      id: 2,
      title: 'Fortified Roofing: Save Up to 35% on Insurance Premiums',
      excerpt: 'Discover how IBHS Fortified roofing systems can protect your home and reduce your insurance costs. Real savings from Louisiana homeowners.',
      author: 'One Roof Team',
      date: '2024-01-10',
      readTime: '4 min read',
      category: 'Fortified Roofing',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      slug: 'fortified-roofing-insurance-savings'
    },
    {
      id: 3,
      title: 'Signs Your Roof Needs Repair: A Louisiana Homeowner\'s Guide',
      excerpt: 'Don\'t wait for leaks! Learn the early warning signs of roof damage that Louisiana homeowners should watch for throughout the year.',
      author: 'One Roof Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Roof Maintenance',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      slug: 'signs-roof-needs-repair'
    },
    {
      id: 4,
      title: 'Choosing the Right Roofing Material for Louisiana Weather',
      excerpt: 'From asphalt shingles to metal roofing, find out which materials work best in Louisiana\'s humid climate and storm conditions.',
      author: 'One Roof Team',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Roofing Materials',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      slug: 'choosing-roofing-materials-louisiana'
    },
    {
      id: 5,
      title: 'Storm Damage Insurance Claims: What Louisiana Homeowners Need to Know',
      excerpt: 'Navigate the insurance claim process after storm damage. Tips from experienced Louisiana roofing contractors on getting fair settlements.',
      author: 'One Roof Team',
      date: '2023-12-20',
      readTime: '8 min read',
      category: 'Insurance',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      slug: 'storm-damage-insurance-claims'
    },
    {
      id: 6,
      title: 'Gutter Maintenance: Protecting Your Louisiana Home from Water Damage',
      excerpt: 'Proper gutter care is crucial in Louisiana\'s heavy rainfall. Learn maintenance tips to prevent costly water damage to your home.',
      author: 'One Roof Team',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Gutters',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      slug: 'gutter-maintenance-louisiana'
    }
  ];

  const categories = ['All', 'Storm Protection', 'Fortified Roofing', 'Roof Maintenance', 'Roofing Materials', 'Insurance', 'Gutters'];

  return (
    <>
      <SEO
        title="Roofing Blog Louisiana - One Roof | Tips, Guides & Industry News"
        description="Expert roofing advice, maintenance tips, and industry insights for Louisiana homeowners. Learn about storm protection, fortified roofing, insurance claims, and more from One Roof professionals."
        keywords="roofing blog Louisiana, roofing tips Baton Rouge, storm damage advice New Orleans, fortified roofing information, roof maintenance guide, Louisiana roofing contractor blog"
        canonical="https://oneroof-la.com/blog"
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              One Roof Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Expert roofing advice, maintenance tips, and industry insights for Louisiana homeowners
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative">
                    <img 
                      src={post.image}
                      alt={`${post.title} - Louisiana roofing blog post by One Roof`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-kleinpeter-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-kleinpeter-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-kleinpeter-600 hover:text-kleinpeter-700 font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Browse by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-kleinpeter-600 hover:text-white transition-colors font-semibold"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Roofing Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help with all your roofing needs across Louisiana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-kleinpeter-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+15551234567"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-kleinpeter-600 transition-colors font-bold text-lg"
            >
              Call (555) 123-ROOF
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


