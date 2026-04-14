
import React from 'react';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards in matching talented professionals with exceptional opportunities.'
    },
    {
      icon: Users,
      title: 'Cultural Integration',
      description: 'Supporting international professionals in adapting to American workplace culture and lifestyle.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Bringing diverse talents from around the world to enrich American healthcare, education, and hospitality.'
    },
    {
      icon: Award,
      title: 'Long-term Success',
      description: 'Our commitment extends beyond placement to ensure lasting career growth and satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Kacey Staffing
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Kacey Staffing is a recruitment agency dedicated to bridging the gap between skilled and non-skilled
international professionals and U.S based employers. We collaborate with various reputable U.S. companies,
healthcare facilities, educational institutions, and hospitality businesses to ensure seamless recruitment and
smooth transitions for our candidates. With a strong focus on quality, compliance, and efficiency, we
specialize in sourcing highly qualified nurses, certified nursing assistants, hospitality trainees, and teachers
from across the globe to the U.S.A. Kacey Staffing was built on the belief that talent knows no borders and
that excellence in staffing transforms organizations and lives alike
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission: Transforming Lives Through Career Opportunities
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               Since 2024, Kacey Staffing has been dedicated to bridging the gap between 
                talented international professionals and America's growing need for skilled workers 
                in healthcare, education, and hospitality.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that everyone deserves the opportunity to pursue their Dream. 
                Our specialized approach focuses on three critical sectors where international 
                professionals can make the greatest impact while building rewarding careers.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-800 font-semibold">
                  "Every professional we place is not just filling a position – 
                  they're bringing compassion, expertise, and cultural richness that strengthens communities across the world."
                </p>
                <p className="text-blue-600 mt-2">- Celly Kariuki, Founder</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our community of professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* hoose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Professionals Choose Kacey Staffing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Proven Success */}
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Proven Success Record</h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                  98% successful placement rate
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                  Years of industry experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                  5000+ professionals placed
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-600" />
                  50+ countries represented
                </li>
              </ul>
            </div>

            {/* Comprehensive Support */}
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">End-to-End Support</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Application assistance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Cultural orientation programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Housing and relocation support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                  Ongoing career mentorship
                </li>
              </ul>
            </div>

            {/* Industry Expertise */}
            <div className="bg-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Industry Specialization</h3>
              <ul className="space-y-3 text-purple-800">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-purple-600" />
                  Healthcare sector expertise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-purple-600" />
                  Education system knowledge
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-purple-600" />
                  Hospitality industry connections
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-purple-600" />
                  Regulatory compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Global Career Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have transformed their careers with Kacey Staffing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/application" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
