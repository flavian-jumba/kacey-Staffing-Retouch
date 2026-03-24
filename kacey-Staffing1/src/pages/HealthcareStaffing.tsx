import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Heart, CheckCircle, Star, Users, Shield, Clock, Award, MapPin, DollarSign, FileText, ChevronLeft, ChevronRight, Quote, Sparkles, Target, Globe, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HealthcareStaffing = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const hospitalPositions = [
    {
      title: 'Registered Nurses (RN)',
      description: 'Critical care, medical-surgical, pediatrics, emergency, and ICU positions',
      salary: '$65,000 - $120,000',
      locations: 'Major hospitals nationwide',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      demand: 'High demand'
    },
    {
      title: 'Licensed Practical Nurses (LPN)',
      description: 'Long-term care, rehabilitation, and outpatient clinic opportunities',
      salary: '$45,000 - $65,000',
      locations: 'Healthcare facilities across America',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      demand: 'Growing field'
    },
    {
      title: 'Medical Technicians',
      description: 'Laboratory, radiology, pharmacy, and surgical technician roles',
      salary: '$40,000 - $70,000',
      locations: 'Hospitals and diagnostic centers',
      image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      demand: 'Specialized roles'
    },
    {
      title: 'Physical Therapists',
      description: 'Inpatient and outpatient rehabilitation services',
      salary: '$80,000 - $100,000',
      locations: 'Hospitals and rehabilitation centers',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
      demand: 'Premium positions'
    }
  ];

  // CNA Programme Requirements
  const cnaRequirements = [
    'Current International Driver\'s License',
    'Current East African passport',
    'Birth certificate',
    'High School Diploma',
    'Certified Nurse Assistant training program',
    'State Specific CNA Certification obtained after arrival to the U.S.',
    'Required (minimum 1+ years) of some type of caregiving service',
    'BLS Certification',
    'Current Updated CV',
    'Three references'
  ];

  const testimonials = [
    {
      name: "Grace Wanjiku",
      country: "Kenya",
      position: "Registered Nurse - ICU",
      location: "Johns Hopkins Hospital, Baltimore",
      // image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Working in American healthcare has elevated my nursing skills to levels I never imagined. The technology, protocols, and team collaboration here are world-class.",
      achievement: "ICU Nurse of the Year 2024",
      duration: "3 years in program"
    },
    {
      name: "Samuel Ochieng",
      country: "Kenya",
      position: "Medical Laboratory Technician",
      location: "Mayo Clinic, Rochester",
      // image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "The precision and advancement in American laboratory medicine is incredible. Every day I learn new techniques that make me a better healthcare professional.",
      achievement: "Lab Excellence Award",
      duration: "2 years in program"
    },
    {
      name: "Mary Akinyi",
      country: "Kenya",
      position: "Certified Nursing Assistant",
      location: "Cleveland Clinic, Ohio",
      // image: "https://images.unsplash.com/photo-1594824720860-6822488bf2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Starting as a CNA opened doors I never expected. The mentorship and career development opportunities here are amazing. I'm now pursuing my RN degree.",
      achievement: "Promoted to Senior CNA",
      duration: "18 months in program"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const clinicOpportunities = [
    'Outpatient specialty clinics',
    'Family medicine practices',
    'Urgent care centers',
    'Diagnostic imaging centers',
    'Ambulatory surgery centers',
    'Mental health facilities'
  ];

  const specializedRoles = [
    'Cardiac catheterization technicians',
    'Dialysis technicians',
    'Surgical assistants',
    'Anesthesia technicians',
    'Nuclear medicine technologists',
    'Medical sonographers'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive Health Insurance',
      description: 'Full medical, dental, and vision coverage for you and your family'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Continuing education credits and certification support'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Various shift options including days, nights, and weekends'
    },
    {
      icon: Users,
      title: 'Supportive Work Environment',
      description: 'Collaborative teams and mentorship programs'
    }
  ];

  const requirements = [
    'Valid nursing license or healthcare certification',
    'Minimum 2 years of clinical experience',
    'English proficiency (TOEFL/IELTS)',
    'Background check and health screening',
    'CPR/BLS certification'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Healthcare Staffing Jobs USA - Nursing & Medical Careers"
        description="Advance your healthcare career in America. Kacey Staffing places international nurses, medical professionals, and healthcare workers with top U.S. hospitals and medical facilities. J1 visa support available."
        keywords="healthcare jobs USA, nursing jobs America, medical careers, RN jobs, LPN positions, healthcare staffing, international nurses, medical professionals, hospital jobs, healthcare recruitment"
        url="https://kaceystaffing.com/healthcare-staffing"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/home/healthcare_2.jpg" 
            alt="Healthcare professionals"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-900/80 to-cyan-900/90"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center pt-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full min-h-screen py-20">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-8 text-white">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <div className="flex justify-start items-center space-x-4 mb-6">
                    <Heart className="h-16 w-16 text-red-300" />
                    <Shield className="h-14 w-14 text-blue-300" />
                    <Users className="h-12 w-12 text-teal-300" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Healthcare
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">Excellence</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mb-8 leading-relaxed">
                  Transform lives while building your career. Join America's leading hospitals and healthcare 
                  facilities through our comprehensive placement programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    to="http://trianglehealthcareconsulting.com/" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
                  >
                    Start Application
                  </Link>
                  <a 
                    href="/programs" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm text-center"
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
                  <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm lg:text-base opacity-90">Healthcare Placements</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">$75K+</div>
                  <div className="text-sm lg:text-base opacity-90">Average Salary</div>
                </div>
                <div className="text-center bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm lg:text-base opacity-90">Placement Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNA Programme Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              CNA Programme - Your Healthcare Career Starts Here
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Certified Nursing Assistants are the backbone of American healthcare, providing essential patient care 
              and support in hospitals, clinics, and long-term care facilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CNA Description */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What is a CNA?</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    A CNA or certified nursing assistant is an important position in any hospital setting. 
                    CNAs have many responsibilities that make them an integral part of the patient process in healthcare.
                  </p>
                  <p>
                    A certified nursing assistant helps patients with direct health care needs, often under the 
                    supervision of a nurse. CNAs work directly with patients and nurses, helping with the many 
                    physical and complex tasks for patient care.
                  </p>
                  <p>
                    Certified nursing assistants may also be called a nursing assistant, a nurse's aid, 
                    or a patient care assistant.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to="/programs"
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                  >
                    Apply for CNA Programme
                  </Link>
                </div>
              </div>
            </div>

            {/* CNA Requirements */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents & Certifications</h3>
                <div className="space-y-4">
                  {cnaRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="bg-blue-100 rounded-full p-2 mr-4 group-hover:scale-110 transition-transform">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{requirement}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Key Highlights</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">1+ Years</div>
                      <div className="text-gray-600">Caregiving Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">Fast Track</div>
                      <div className="text-gray-600">Career Entry</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Positions */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Premium Healthcare Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join America's top medical facilities and advance your healthcare career
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hospitalPositions.map((position, index) => (
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
                      <Heart className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{position.demand}</span>
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
                        <span className="font-medium text-sm">Annual Salary</span>
                      </div>
                      <div className="font-bold text-green-700">{position.salary}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center text-blue-600 mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="font-medium text-sm">Locations</span>
                      </div>
                      <div className="font-bold text-blue-700 text-sm">{position.locations}</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Healthcare Staffing with Kacey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive support and benefits for your American healthcare career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl p-4 mb-6 w-fit mx-auto group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories from Kenya to America
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from healthcare professionals who've transformed their careers through our programmes
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex items-center mb-6">
                          <div className="relative">
                            <img 
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-blue-600 font-medium">{testimonial.position}</p>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                          </div>
                        </div>
                        
                        <blockquote className="text-gray-600 italic mb-6 flex-grow leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 font-medium">{testimonial.year}</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Healthcare Career Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Our experienced team is ready to guide you through every step of your transition to American healthcare. 
            From initial consultation to successful placement, we're with you all the way.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">healthcare@kacey.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MapPin className="h-8 w-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100">Nairobi, Kenya</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/programs"
              className="bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Begin Your Application
            </Link>
            <Link 
              to="/programs"
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-12 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply for CNA Programme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareStaffing;
