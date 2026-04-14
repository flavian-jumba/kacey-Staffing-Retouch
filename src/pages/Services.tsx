
import React from 'react';
import { Heart, GraduationCap, Users, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Healthcare Staffing',
      description: 'Connect with America\'s leading healthcare institutions and make a difference in patients\' lives.',
      url: '/healthcare-staffing',
      positions: [
        'Registered Nurses (RN)',
        'Licensed Practical Nurses (LPN)',
        'Medical Technicians',
        'Physical Therapists',
        'Respiratory Therapists',
        'Medical Assistants'
      ],
      workSettings: [
        'Major hospitals and medical centers',
        'Specialty clinics and outpatient facilities',
        'Long-term care facilities',
        'Rehabilitation centers'
      ],
      benefits: [
        'Competitive salaries ($60,000 - $120,000)',
        'Comprehensive health benefits',
        'Professional development opportunities',
        'Continuing education support'
      ],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'blue'
    },
    {
      icon: GraduationCap,
      title: 'Teaching Opportunities',
      description: 'Shape the future of education by joining American schools and universities.',
      url: '/teaching-opportunities',
      positions: [
        'Elementary School Teachers',
        'Middle School Teachers',
        'High School Teachers',
        'ESL Instructors',
        'Special Education Teachers',
        
      ],
      workSettings: [
        'Public and private K-12 schools',
        'International schools',
        'Universities and colleges',
        'Language institutes'
      ],
      benefits: [
        'Teaching salaries ($45,000 - $85,000)',
        'Summer vacation benefits',
        'Professional development programs',
        'Cultural exchange opportunities'
      ],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Hospitality Careers',
      description: 'Experience world-class hospitality in prestigious hotels and resorts, build your career in International Vibrant Service Industry .',
      url: '/hospitality-careers',
      positions: [
        'Hotel Front Desk Staff',
        'Housekeeping Supervisors',
        'Restaurant Servers',
        'Kitchen Staff',
        'Event Coordinators',
        'Guest Services'
      ],
      workSettings: [
        'Luxury hotels and resorts',
        'Fine dining restaurants',
        'Conference centers',
        'Tourist destinations'
      ],
      benefits: [
        'Hourly wages ($15 - $25/hour) plus tips',
        'Seasonal opportunities',
        'Housing assistance available',
        'Rapid career advancement'
      ],
      image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      color: 'purple'
    }
  ];

  const supportServices = [
    {
      title: 'Resume Development',
      description: 'Professional resume writing and optimization for American employers'
    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive coaching to excel in American-style interviews'
    },
    {
      title: 'Cultural Orientation',
      description: 'Guidance on American workplace culture and professional expectations'
    },
    {
      title: 'Legal Support',
      description: 'J1 visa application assistance and documentation support'
    },
    {
      title: 'Housing Assistance',
      description: 'Help finding suitable accommodation near your workplace'
    },
    {
      title: 'Ongoing Mentorship',
      description: 'Continuous career guidance and professional development support'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Staffing Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive career solutions across healthcare, education, and hospitality sectors
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on three critical sectors where international professionals can make 
              the greatest impact while building rewarding careers in America.
            </p>
          </div>

          {/* Service Sections */}
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`mb-20 ${index !== services.length - 1 ? 'border-b border-gray-200 pb-20' : ''}`}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={!isEven ? 'md:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-${service.color}-100 rounded-xl mr-4`}>
                        <Icon className={`w-8 h-8 text-${service.color}-600`} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Available Positions */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Positions</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.positions.map((position, posIndex) => (
                          <div key={posIndex} className="flex items-center">
                            <CheckCircle className={`w-4 h-4 text-${service.color}-600 mr-2`} />
                            <span className="text-gray-700">{position}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Work Settings */}
                    <div className={`${getColorClasses(service.color)} p-6 rounded-lg border mb-6`}>
                      <h4 className="font-semibold mb-3">Work Settings</h4>
                      <ul className="space-y-1">
                        {service.workSettings.map((setting, setIndex) => (
                          <li key={setIndex} className="flex items-center">
                            <Star className="w-3 h-3 mr-2" />
                            {setting}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits & Compensation</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benIndex) => (
                          <li key={benIndex} className="flex items-center text-gray-700">
                            <CheckCircle className={`w-4 h-4 text-${service.color}-600 mr-2`} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Button */}
                    <div className="mt-8">
                      <Link 
                        to={service.url}
                        className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-${service.color}-600 hover:bg-${service.color}-700 transition-colors`}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={!isEven ? 'md:col-start-1' : ''}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond job placement, we provide end-to-end support to ensure your success 
              and smooth transition to working in America.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((support, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {support.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {support.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Placement Process
            </h2>
            <p className="text-lg text-gray-600">
              From application to career success - we guide you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Application & Assessment', description: 'Submit your application and complete our comprehensive skills assessment.' },
              { step: '2', title: 'Matching & Placement', description: 'We match your skills with the perfect employer opportunities.' },
              { step: '3', title: 'Visa Support', description: 'Complete J1 visa application with our expert guidance and support.' },
              { step: '4', title: 'Career Success', description: 'Begin your global career with ongoing mentorship and support.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-custom-blue text-white rounded-full text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Launch Your Global Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have found success through our specialized staffing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/application" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start J1 Application
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

export default Services;
