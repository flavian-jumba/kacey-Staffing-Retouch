import React, { useState } from 'react';
import SEO from '../components/SEO';
import { GraduationCap, BookOpen, Users, Globe, Award, Calendar, CheckCircle, Star, ChevronLeft, ChevronRight, Quote, MapPin, Heart, TrendingUp, Brain, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeachingOpportunities = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const k12Positions = [
    {
      title: 'Elementary Teachers',
      description: 'Kindergarten through 5th grade positions in core subjects',
      salary: '$45,000 - $70,000',
      subjects: ['Mathematics', 'English Language Arts', 'Science', 'Social Studies']
    },
    {
      title: 'Middle School Teachers',
      description: '6th through 8th grade specialized subject positions',
      salary: '$48,000 - $75,000',
      subjects: ['STEM', 'Language Arts', 'History', 'Arts']
    },
    {
      title: 'High School Teachers',
      description: '9th through 12th grade subject specialists',
      salary: '$52,000 - $85,000',
      subjects: ['Advanced Sciences', 'Mathematics', 'Literature', 'Foreign Languages']
    },
    {
      title: 'ESL Instructors',
      description: 'English as Second Language teaching positions',
      salary: '$45,000 - $65,000',
      subjects: ['English Proficiency', 'Cultural Integration', 'Academic Support']
    },
    {
      title: 'Special Education Teachers',
      description: 'Specialized support for students with diverse learning needs',
      salary: '$50,000 - $80,000',
      subjects: ['Individualized Education', 'Behavioral Support', 'Adaptive Learning']
    }
  ];

  const higherEducation = [
    'University Professors',
    'Research Associates',
    'Graduate Teaching Assistants',
    'International Student Advisors',
    'Academic Program Coordinators',
    'Language Institute Instructors'
  ];

  const culturalExchange = [
    {
      title: 'International Perspective',
      description: 'Share your unique cultural background and global experiences with American students'
    },
    {
      title: 'Professional Networks',
      description: 'Build lasting connections with American educators and education professionals'
    },
    {
      title: 'Teaching Methodologies',
      description: 'Learn and implement innovative American teaching practices and technologies'
    },
    {
      title: 'Community Engagement',
      description: 'Participate in local community events and educational outreach programs'
    }
  ];

  const professionalDevelopment = [
    {
      icon: Award,
      title: 'Certification Support',
      description: 'Assistance with state teaching certification and credential evaluation'
    },
    {
      icon: BookOpen,
      title: 'Training Programs',
      description: 'Professional development workshops and educational seminars'
    },
    {
      icon: Globe,
      title: 'Cultural Orientation',
      description: 'Comprehensive preparation for American classroom management and culture'
    },
    {
      icon: Users,
      title: 'Mentorship Network',
      description: 'Ongoing support from experienced American educators and administrators'
    }
  ];

  const benefits = [
    'Competitive teaching salaries',
    'Comprehensive health insurance',
    'Professional development funding',
    'Summer vacation benefits',
    'Retirement savings plans',
    'Continuing education support'
  ];

  const requirements = [
    'Bachelor\'s degree in education or subject area',
    'Teaching experience (minimum 2 years)',
    'Background check and fingerprinting',
    'Teaching certification (or willingness to obtain)',

  ];

  const successStories = [
    {
      name: "Maria Santos",
      country: "Philippines",
      position: "5th Grade Teacher",
      location: "Denver, Colorado",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=0&q=80",
      quote: "Teaching in America has been transformative. The resources available here and the support from colleagues helped me develop innovative teaching methods that I never thought possible.",
      achievement: "Teacher of the Year 2024",
      duration: "2 years in program"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      position: "High School Math Teacher",
      location: "Austin, Texas",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=0&h=150&q=80",
      quote: "The cultural exchange has been incredible. My students learn about Egyptian history while I adapt to American teaching styles. It's a beautiful blend of cultures.",
      achievement: "Implemented new STEM program",
      duration: "3 years in program"
    },
    {
      name: "Chen Wei",
      country: "China",
      position: "ESL Instructor",
      location: "San Francisco, California",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Working with international students has given me purpose. Seeing them master English and succeed academically makes every challenge worthwhile.",
      achievement: "95% student success rate",
      duration: "1.5 years in program"
    },
    {
      name: "Isabella Rodriguez",
      country: "Spain",
      position: "Spanish Teacher",
      location: "Miami, Florida",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Teaching Spanish in Miami allows me to bridge cultures daily. My students appreciate authentic language learning from a native speaker.",
      achievement: "Developed bilingual curriculum",
      duration: "2.5 years in program"
    },
    {
      name: "Rajesh Patel",
      country: "India",
      position: "Computer Science Teacher",
      location: "Seattle, Washington",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "The technology resources in American schools are amazing. I've been able to introduce coding programs that prepare students for future careers in tech.",
      achievement: "Started robotics club",
      duration: "2 years in program"
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Teaching Jobs USA - K-12 & ESL Teacher Positions"
        description="Shape young minds in America. Kacey Staffing connects international teachers with K-12 schools and ESL programs across the USA. Teaching positions with J1 visa support and comprehensive placement services."
        keywords="teaching jobs USA, teacher positions America, K-12 teaching, ESL teacher jobs, international teachers, education careers, teacher recruitment, school placements, teaching opportunities"
        url="https://kaceystaffing.com/teaching-opportunities"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/home/j1 Teaching.jpg" 
            alt="Teaching classroom"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center pt-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full min-h-screen py-20">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-8 text-white">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <GraduationCap className="h-20 w-20 mb-6 text-green-200" />
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Shape America's
                  <span className="block text-green-200">Future</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mb-8 leading-relaxed">
                  Join the elite community of international educators transforming American education. 
                  From K-12 classrooms to university halls, inspire the next generation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    to="/programs" 
                    className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
                  >
                    Start Your Journey
                  </Link>
                  <a 
                    href="#positions" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 backdrop-blur-sm text-center"
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
                  <div className="text-3xl lg:text-4xl font-bold mb-2">15,000+</div>
                  <div className="text-sm lg:text-base opacity-90">Students Impacted</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">$65K</div>
                  <div className="text-sm lg:text-base opacity-90">Average Salary</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm lg:text-base opacity-90">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-75">Discover More</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Making a Global Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of international educators already transforming American education
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-12 w-12 text-green-600 mx-auto" />
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-2">15,000+</h3>
                <p className="text-gray-600 font-semibold">Students Impacted</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600 font-semibold">Countries Represented</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-12 w-12 text-purple-600 mx-auto" />
                </div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">98%</h3>
                <p className="text-gray-600 font-semibold">Success Rate</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-12 w-12 text-orange-600 mx-auto" />
                </div>
                <h3 className="text-4xl font-bold text-orange-600 mb-2">$65K</h3>
                <p className="text-gray-600 font-semibold">Average Salary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K-12 Positions */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Exciting Teaching Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role in America's dynamic educational landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {k12Positions.map((position, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Position Icon */}
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-4 w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{position.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center text-lg font-bold text-green-600 mb-4">
                      <span>{position.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {position.subjects.map((subject, subIndex) => (
                      <span key={subIndex} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                        {subject}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Higher Education */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Higher Education Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              University and college-level teaching and research opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {higherEducation.map((position, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full p-3 mr-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-blue-800 font-bold text-lg">{position}</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    Competitive compensation • Research opportunities • Academic freedom
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Exchange */}
      <section className="py-20 relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cultural Exchange Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enrich American education with your international perspective while growing professionally
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {culturalExchange.map((exchange, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-4 mr-6 group-hover:scale-110 transition-transform">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{exchange.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{exchange.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your teaching career advancement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalDevelopment.map((development, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <development.icon className="h-12 w-12 text-green-600 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{development.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{development.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Compensation */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive Benefits Package
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Enjoy competitive compensation and exceptional benefits designed for educators
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-white/20 rounded-full p-2 mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-6 w-6 text-green-200" />
                    </div>
                    <span className="text-white font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & H-1B Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Requirements */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Qualification Requirements
              </h2>
              <div className="space-y-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="bg-yellow-100 rounded-full p-2 mr-4 group-hover:scale-110 transition-transform">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* H-1B Information */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                H-1B Visa Program
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The H-1B visa allows U.S. employers to hire foreign teachers in specialty occupations requiring specialized knowledge and at least a bachelor's degree.
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Key Benefits:</span>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center">
                    <Target className="h-4 w-4 text-blue-600 mr-2" />
                    Most educational institutions are cap-exempt
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Initial 3-year visa, extendable to 6 years
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-4 w-4 text-blue-600 mr-2" />
                    Family inclusion with H-4 dependent visas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Inspiring Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from international educators who have found success in American schools
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="relative">
              {successStories.map((story, index) => (
                <div 
                  key={index} 
                  className={`transition-opacity duration-500 ${
                    index === currentStoryIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      {/* Story Image */}
                      <div className="relative">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-full h-80 md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <p className="text-sm font-medium opacity-90">From {story.country}</p>
                          <p className="text-lg font-bold">{story.name}</p>
                        </div>
                      </div>

                      {/* Story Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <Quote className="h-12 w-12 text-green-600 mb-6" />
                        <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                          "{story.quote}"
                        </blockquote>
                        
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                          <p className="text-green-600 font-bold text-lg">{story.position}</p>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{story.location}</span>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                            {story.achievement}
                          </div>
                          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            {story.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <button 
                onClick={prevStory} 
                className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                disabled={currentStoryIndex === 0}
                aria-label="Previous success story"
              >
                <ChevronLeft className="h-6 w-6 text-green-600" />
              </button>

              {/* Enhanced Dots Indicator */}
              <div className="flex space-x-3">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentStoryIndex 
                        ? 'w-12 h-3 bg-green-600' 
                        : 'w-3 h-3 bg-green-200 hover:bg-green-400'
                    }`}
                    aria-label={`Go to success story ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextStory} 
                className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                disabled={currentStoryIndex === successStories.length - 1}
                aria-label="Next success story"
              >
                <ChevronRight className="h-6 w-6 text-green-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
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
              Ready to Inspire the Next Generation?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
              Join thousands of international educators making a lasting impact in American 
              schools. Your journey to educational excellence starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/programs" 
                className="bg-white text-green-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Begin Application
              </Link>
              <button 
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
              >
                Schedule Consultation
              </button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Brain className="h-8 w-8 mx-auto mb-3 text-green-200" />
                <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                <p className="text-sm opacity-90">Personalized support throughout your journey</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock className="h-8 w-8 mx-auto mb-3 text-green-200" />
                <h3 className="font-bold text-lg mb-2">Fast Processing</h3>
                <p className="text-sm opacity-90">Streamlined application process</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target className="h-8 w-8 mx-auto mb-3 text-green-200" />
                <h3 className="font-bold text-lg mb-2">Guaranteed Placement</h3>
                <p className="text-sm opacity-90">High success rate in job placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachingOpportunities;
