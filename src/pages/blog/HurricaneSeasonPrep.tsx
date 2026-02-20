import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO';

export default function HurricaneSeasonPrep() {
  return (
    <>
      <SEO
        title="Hurricane Season Roofing: How to Prepare Your Louisiana Home | One Roof Blog"
        description="Learn essential steps to protect your roof before hurricane season hits Louisiana. From inspections to reinforcements, we cover everything you need to know to keep your home safe."
        keywords="hurricane season roofing Louisiana, roof preparation Baton Rouge, storm protection New Orleans, hurricane roof inspection, Louisiana roofing contractor"
        canonical="https://oneroof-la.com/blog/hurricane-season-roofing-prep"
      />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 text-kleinpeter-500 hover:text-kleinpeter-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            
            <div className="mb-6">
              <span className="bg-kleinpeter-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Storm Protection
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hurricane Season Roofing: How to Prepare Your Louisiana Home
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>One Roof Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Hurricane season in Louisiana runs from June 1st to November 30th, but preparation should begin much earlier. 
                Your roof is your home's first line of defense against severe weather, making proper preparation essential for 
                protecting your family and property.
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Pre-Season Roof Inspection</h2>
              
              <p className="text-gray-600 mb-6">
                Before hurricane season begins, schedule a professional roof inspection. Our certified inspectors will check for:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Loose or missing shingles that could become projectiles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Damaged or deteriorated flashing around vents and chimneys</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Weak spots in the roof structure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Proper gutter attachment and drainage</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Reinforcement Strategies</h2>

              <div className="bg-kleinpeter-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Fortified Roofing Systems</h3>
                <p className="text-gray-600 mb-4">
                  Consider upgrading to an IBHS Fortified roofing system. These systems are specifically designed to withstand 
                  hurricane-force winds and can reduce insurance premiums by up to 35%.
                </p>
                <Link 
                  to="/fortified"
                  className="text-kleinpeter-600 hover:text-kleinpeter-700 font-semibold"
                >
                  Learn more about Fortified roofing →
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Reinforcement Areas</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600"><strong>Roof-to-wall connections:</strong> Ensure proper metal connectors are installed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600"><strong>Gable end bracing:</strong> Prevent gable walls from collapsing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600"><strong>Shingle attachment:</strong> Use high-wind rated shingles and proper nailing</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Emergency Preparedness</h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Emergency Kit Essentials</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Heavy-duty tarps (at least 10x12 feet)</li>
                      <li>• Roofing nails and hammer</li>
                      <li>• Duct tape and rope</li>
                      <li>• Flashlight and batteries</li>
                      <li>• Contact information for emergency roofing services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Post-Storm Inspection</h2>

              <p className="text-gray-600 mb-6">
                After any severe weather event, inspect your roof for damage. Look for:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Missing or damaged shingles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Water stains on ceilings or walls</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Debris on the roof</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Damaged gutters or downspouts</span>
                </li>
              </ul>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Professional Help?</h3>
                <p className="text-gray-600 mb-6">
                  Don't wait until hurricane season is here. Contact One Roof today for a comprehensive roof inspection 
                  and preparation services. We serve all of Louisiana with expert roofing solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact"
                    className="bg-kleinpeter-600 text-white px-6 py-3 rounded-lg hover:bg-kleinpeter-700 transition-colors font-semibold text-center"
                  >
                    Schedule Inspection
                  </Link>
                  <a 
                    href="tel:+15551234567"
                    className="bg-transparent border-2 border-kleinpeter-600 text-kleinpeter-600 px-6 py-3 rounded-lg hover:bg-kleinpeter-600 hover:text-white transition-colors font-semibold text-center"
                  >
                    Call (555) 123-ROOF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
