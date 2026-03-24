import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Users, Coffee, Hotel, Utensils, Star, TrendingUp, CheckCircle, Award, MapPin, DollarSign, Clock, ChevronLeft, ChevronRight, Quote, Heart, Globe, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HospitalityCareers = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const hotelPositions = [
    {
      title: 'Front Desk Associates',
      description: 'Guest check-in/out, reservations, and exceptional customer service',
      hourlyRate: '$15 - $22/hour',
      tips: 'Plus tips and bonuses',
      shifts: ['Morning', 'Evening', 'Night'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      locations: 'Luxury hotels nationwide'
    },
    {
      title: 'Housekeeping Supervisors',
      description: 'Room cleaning, maintenance coordination, and team leadership',
      hourlyRate: '$16 - $24/hour',
      tips: 'Plus performance bonuses',
      shifts: ['Day', 'Split shifts'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      locations: 'Hotels & resorts'
    },
    {
      title: 'Guest Services Representatives',
      description: 'Concierge services, guest relations, and local activity coordination',
      hourlyRate: '$17 - $25/hour',
      tips: 'Plus commission opportunities',
      shifts: ['Day', 'Evening'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      locations: 'Premium properties'
    },
    {
      title: 'Event Coordinators',
      description: 'Wedding and corporate event planning and execution',
      hourlyRate: '$18 - $28/hour',
      tips: 'Plus event bonuses',
      shifts: ['Variable', 'Weekend intensive'],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      locations: 'Event venues & hotels'
    }
  ];

  const restaurantRoles = [
    {
      title: 'Servers',
      description: 'Fine dining and casual restaurant service excellence',
      earnings: '$20 - $35/hour with tips',
      locations: 'Restaurants, hotels, resorts',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      experience: 'Entry to experienced'
    },
    {
      title: 'Kitchen Staff',
      description: 'Line cooks, prep cooks, and culinary assistants',
      earnings: '$16 - $25/hour',
      locations: 'Restaurants, hotels, catering',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      experience: 'All skill levels'
    },
    {
      title: 'Bartenders',
      description: 'Craft cocktail preparation and exceptional bar service',
      earnings: '$18 - $30/hour with tips',
      locations: 'Bars, restaurants, events',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      experience: 'Mixology skills preferred'
    },
    {
      title: 'Food & Beverage Managers',
      description: 'Restaurant operations and staff supervision',
      earnings: '$45,000 - $65,000/year',
      locations: 'Hotels, restaurants, resorts',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      experience: 'Management experience'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const resortOpportunities = [
    'Ski resort positions (seasonal)',
    'Beach resort opportunities',
    'Mountain lodge positions',
    'Theme park hospitality',
    'Cruise ship partnerships',
    'National park lodges'
  ];

  const careerAdvancement = [
    {
      icon: TrendingUp,
      title: 'Rapid Promotion',
      description: 'Clear advancement paths from entry-level to management positions'
    },
    {
      icon: Award,
      title: 'Skills Development',
      description: 'Comprehensive training in customer service, operations, and leadership'
    },
    {
      icon: Star,
      title: 'Industry Recognition',
      description: 'Work with renowned hospitality brands and earn industry certifications'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Build connections with hospitality professionals and industry leaders'
    }
  ];

  const benefits = [
    'Competitive hourly wages plus tips',
    'Flexible scheduling options',
    'Employee discounts on dining and accommodation',
    'Health insurance for full-time positions',
    'Paid time off and holiday pay',
    'Career advancement opportunities',
    'Training and development programs',
    'Housing assistance available'
  ];

  const workLocations = [
    {
      type: 'Luxury Hotels',
      description: 'Five-star properties in major cities and tourist destinations',
      examples: ['New York', 'Miami', 'Las Vegas', 'San Francisco']
    },
    {
      type: 'Resort Properties',
      description: 'Seasonal and year-round resort opportunities',
      examples: ['Colorado Ski Resorts', 'Florida Beach Resorts', 'California Wine Country']
    },
    {
      type: 'Fine Dining',
      description: 'Upscale restaurants and celebrity chef establishments',
      examples: ['Michelin-starred restaurants', 'Hotel restaurants', 'Boutique establishments']
    },
    {
      type: 'Tourist Destinations',
      description: 'Popular vacation spots and entertainment districts',
      examples: ['National Parks', 'Theme Parks', 'Historic Districts']
    }
  ];

  const requirements = [
    'Previous hospitality or customer service experience',
   
    'Positive attitude and professional appearance',
    'Ability to work flexible hours including weekends',
    'Physical ability to stand for extended periods',

    'Clean background check',
    'Food safety certification (for food service roles)'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Hospitality Jobs USA - Hotel & Restaurant Careers"
        description="Build your hospitality career in America. Kacey Staffing places international professionals with luxury hotels, restaurants, and resorts across the USA. J1 visa support and career advancement opportunities."
        keywords="hospitality jobs USA, hotel careers, restaurant jobs, resort positions, hospitality careers America, international hospitality, hotel management, restaurant staff, tourism jobs"
        url="https://kaceystaffing.com/hospitality-careers"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/home/hospitality.png" 
            alt="Luxury hotel hospitality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-900/80 to-red-900/90"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center pt-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full min-h-screen py-20">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-8 text-white">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <div className="flex justify-start items-center space-x-4 mb-6">
                    <Hotel className="h-16 w-16 text-purple-200" />
                    <Coffee className="h-12 w-12 text-pink-200" />
                    <Utensils className="h-14 w-14 text-red-200" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Hospitality
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Excellence</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mb-8 leading-relaxed">
                  Transform your passion for service into an extraordinary career. Join America's most prestigious 
                  hotels, restaurants, and resorts through our J-1 Exchange Program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    to="/programs" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
                  >
                    Start Your Journey
                  </Link>
                  <a 
                    href="/programs" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 backdrop-blur-sm text-center"
                  >
                    Explore Opportunities
                  </a>
                </div>
              </div>
            </div>

            {/* Success Metrics - Right Side Vertical */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="flex flex-row lg:flex-col gap-6 text-white">
                <div className="text-center bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">1000+</div>
                  <div className="text-sm lg:text-base opacity-90">Successful Placements</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">$25+</div>
                  <div className="text-sm lg:text-base opacity-90">Average Hourly Rate</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm lg:text-base opacity-90">Premium Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              J-1 Hospitality Exchange Program
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The J-1 Exchange Visitor Program offers transformative cultural and professional experiences 
              in America's dynamic hospitality industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Categories</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-lg text-purple-600 mb-2">J-1 Intern</h4>
                    <p className="text-gray-600">
                      For current students or recent graduates seeking practical experience in hospitality management, 
                      food service, or hotel operations.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h4 className="font-bold text-lg text-pink-600 mb-2">J-1 Trainee</h4>
                    <p className="text-gray-600">
                      For professionals with hospitality experience looking to enhance skills and learn advanced 
                      American service standards and management techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Luxury hotel lobby"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900">Global Network</h4>
                  <p className="text-sm text-gray-600">International partnerships</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <Target className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900">Career Focus</h4>
                  <p className="text-sm text-gray-600">Professional development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Positions */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Premium Hotel Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exceptional opportunities in America's finest hotels and luxury resorts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hotelPositions.map((position, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <img 
                    src={position.image}
                    alt={position.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <Hotel className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{position.locations}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{position.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center text-green-600 mb-1">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span className="font-medium text-sm">Hourly Rate</span>
                      </div>
                      <div className="font-bold text-green-700">{position.hourlyRate}</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center text-purple-600 mb-1">
                        <Sparkles className="h-4 w-4 mr-1" />
                        <span className="font-medium text-sm">Additional</span>
                      </div>
                      <div className="font-bold text-purple-700">{position.tips}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-medium">Available Shifts:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {position.shifts.map((shift, shiftIndex) => (
                        <span key={shiftIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {shift}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Roles */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Culinary Excellence Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join America's vibrant restaurant scene and fine dining establishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {restaurantRoles.map((role, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <img 
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <Utensils className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{role.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{role.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center text-green-600 mb-1">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span className="font-medium text-sm">Earnings Potential</span>
                      </div>
                      <div className="font-bold text-green-700 text-lg">{role.earnings}</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center text-blue-600 mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="font-medium text-sm">Work Locations</span>
                      </div>
                      <div className="font-medium text-blue-700">{role.locations}</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Compensation */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Exceptional Benefits & Perks
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive compensation package designed for hospitality professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-full p-2 mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white font-medium leading-relaxed">{benefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Average Earnings Breakdown</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-200">$15-35</div>
                  <div className="text-sm opacity-80">Per Hour + Tips</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-200">$2,500+</div>
                  <div className="text-sm opacity-80">Monthly Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">$30K+</div>
                  <div className="text-sm opacity-80">Annual Earnings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Advancement & Work Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Career Advancement */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Career Advancement
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Build a successful career in the hospitality industry with clear growth paths
              </p>
              
              <div className="space-y-6">
                {careerAdvancement.map((advancement, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-purple-100 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform">
                      <advancement.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{advancement.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{advancement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Locations */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Premium Work Locations
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Prestigious hospitality venues across America's most desirable destinations
              </p>
              
              <div className="space-y-6">
                {workLocations.map((location, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{location.type}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{location.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {location.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Requirements List */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Essential Requirements
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Key qualifications for hospitality excellence in America
              </p>
              
              <div className="space-y-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-green-100 rounded-full p-2 mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Professional hospitality team"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our dedicated team will guide you through every step of the application process, 
                  from visa documentation to job placement.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">100%</div>
                    <div className="text-sm text-gray-600">Job Placement Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Launch Your Hospitality Career?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
              Join the dynamic world of American hospitality and create unforgettable experiences 
              while building your professional future in luxury venues nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/programs" 
                className="bg-white text-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Begin Application
              </Link>
              <button 
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 backdrop-blur-sm"
              >
                <Link to="/consultations">
                  Schedule Consultation
                </Link>
              </button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Heart className="h-8 w-8 mx-auto mb-3 text-pink-200" />
                <h3 className="font-bold text-lg mb-2">Passion-Driven</h3>
                <p className="text-sm opacity-90">Turn your love for service into success</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe className="h-8 w-8 mx-auto mb-3 text-purple-200" />
                <h3 className="font-bold text-lg mb-2">Global Network</h3>
                <p className="text-sm opacity-90">Connect with industry leaders worldwide</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target className="h-8 w-8 mx-auto mb-3 text-red-200" />
                <h3 className="font-bold text-lg mb-2">Career Goals</h3>
                <p className="text-sm opacity-90">Achieve your hospitality dreams</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalityCareers;
