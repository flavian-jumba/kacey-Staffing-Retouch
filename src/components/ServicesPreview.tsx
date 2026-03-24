
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Users } from 'lucide-react';
import { ScrollAnimation } from './ui/scroll-animation';

const ServicesPreview = () => {
  const services = [
    {
      icon: Heart,
      title: 'Healthcare Staffing',
      description: 'Connect with leading hospitals, clinics, and healthcare facilities across America. From nurses to specialized technicians, find your perfect role in healthcare.',
      url: '/healthcare-staffing',
      features: [
        'Hospital positions',
        'Clinic opportunities',
        'Specialized roles',
        'Competitive benefits'
      ],
      color: 'blue'
    },
    {
      icon: GraduationCap,
      title: 'Teaching Opportunities',
      description: 'Shape the future by joining American educational institutions. From k12 to  highschools, make a difference in students\' lives.',
      url: '/teaching-opportunities',
      features: [
        'Higher education',
        'Cultural exchange',
        'Professional development'
      ],
      color: 'green'
    },
    {
      icon: Users,
      title: 'Hospitality Careers',
      description: 'Experience world-class hospitality in prestigious hotels and resorts, build your career in International Vibrant Service Industry .',
      url: '/hospitality-careers',
      features: [
        'Hotel positions',
        'Restaurant roles',
        'Resort opportunities',
        'Career advancement'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        border: 'border-blue-200',
        button: 'bg-custom-blue hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-600',
        border: 'border-green-200',
        button: 'bg-custom-blue hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'text-purple-600',
        border: 'border-purple-200',
        button: 'bg-custom-blue hover:bg-purple-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Path to Success in Three Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover career opportunities across healthcare, education, and hospitality sectors 
              with comprehensive support every step of the way.
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div 
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-xl mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 ${colors.icon} bg-current rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to={service.url}
                  className={`inline-block w-full text-center ${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                >
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Ready to start your career journey?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="bg-custom-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Apply for our programs
              </Link>
              <Link
                to="/consultations"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesPreview;
