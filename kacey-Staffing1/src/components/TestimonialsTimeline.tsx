import React from 'react';
import { Star, MapPin, Calendar, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

interface Testimonial {
  id: number;
  name: string;
  industry: string;
  year: number;
  testimonial: string;
  currentPosition: string;
  rating: number;
  initials: string;
  location: string;
  programType: string;
  achievements: string[];
  previousRole: string;
  avatar?: string;
}

const TestimonialsTimeline = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Barbara N.",
      industry: "Healthcare",
      year: 2024,
      testimonial: "Kacey Staffing transformed my career completely. From a nurse in my home country to working in one of America's top hospitals. The J1 program gave me the experience I needed, and their support team was with me every step of the way.",
      currentPosition: "Registered Nurse at Johns Hopkins",
      rating: 5,
      initials: "BN",
      location: "Kenya, MD",
      programType: "J1 Healthcare Exchange",
      achievements: ["Top Performer Award 2024", "Patient Care Excellence", "Team Leadership Recognition"],
      previousRole: "Staff Nurse in Philippines",
      avatar: "/avatars/sarah.jpg"
    },
    {
      id: 2,
      name: "Olipha S.",
      industry: "Hospitality",
      year: 2023,
      testimonial: "I would like to sincerely thank the entire triangle health team for the support you have given me in realizing my American dream.From the biggining, I wass worried too much but with your help everything went on smooth.Thanks alot for your tireless effort in assisting me. I pray that you help other nurses who are also in need",
      currentPosition: "Resort Operations Manager",
      rating: 5,
      initials: "OS",
      location: "Miami, FL",
      programType: "J1 Hospitality Program",
      achievements: ["Manager of the Year 2023", "Customer Service Excellence", "Revenue Growth Champion"],
      previousRole: "Hotel Receptionist in Texus",
      avatar: "/avatars/juan.jpg"
    },
    {
      id: 3,
      name: "Mercy F.",
      industry: "Teaching",
      year: 2023,
      testimonial: "From teaching in Sweden to inspiring students in American classrooms. Kacey Staffing made the transition seamless. The professional development opportunities here are unmatched.",
      currentPosition: "High School Mathematics Teacher",
      rating: 5,
      initials: "MF",
      location: "Austin, TX",
      programType: "J1 Teacher Exchange",
      achievements: ["Outstanding Educator Award", "Innovation in Teaching", "Student Achievement Recognition"],
      previousRole: "Secondary School Teacher in Sweden",
      avatar: "/avatars/maria.jpg"
    },
    {
      id: 4,
      name: "Jepngetich A.",
      industry: "Healthcare",
      year: 2022,
      testimonial: "The support I received was exceptional. From visa processing to finding the perfect position, everything was handled professionally. Now I'm part of a medical team saving lives every day.",
      currentPosition: "Medical Technologist",
      rating: 5,
      initials: "JA",
      location: "Boston, MA",
      programType: "CNA",
      achievements: ["Laboratory Excellence Award", "Quality Assurance Leader", "Research Contributor"],
      previousRole: "Lab Technician in Pakistan",
      avatar: "/avatars/ahmed.jpg"
    }
  ];

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-colors ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  );

  const getIndustryColor = (industry: string) => {
    const colors = {
      Healthcare: 'bg-blue-900/50 text-blue-300 border-blue-700/50',
      Hospitality: 'bg-green-900/50 text-green-300 border-green-700/50',
      Teaching: 'bg-purple-900/50 text-purple-300 border-purple-700/50'
    };
    return colors[industry as keyof typeof colors] || 'bg-gray-700 text-gray-300 border-gray-600';
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Success Stories That Inspire
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Real professionals, real transformations. Discover how Kacey Staffing helped these talented individuals.
          </p>
        </div>

        <Timeline>
          {testimonials.map((testimonial, index) => (
            <TimelineItem key={testimonial.id} className="relative pl-16 pb-12 last:pb-0">
              <TimelineSeparator className="absolute left-8 top-0 h-full w-0.5 bg-gray-700" />
              <TimelineIndicator className="absolute left-4 top-0 z-10 !bg-transparent">
                <Avatar className="size-10 border-2 border-gray-800 bg-gray-900">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-gray-700 text-gray-300">{testimonial.initials}</AvatarFallback>
                </Avatar>
              </TimelineIndicator>
              <TimelineHeader className="flex items-start">
                <div className="flex-grow">
                  <TimelineTitle className="font-bold text-gray-100 text-lg">
                    {testimonial.name}
                  </TimelineTitle>
                  <p className="text-sm text-gray-400">{testimonial.currentPosition}</p>
                </div>
              </TimelineHeader>

              <TimelineContent className="mt-4">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-4">
                    {renderStars(testimonial.rating)}
                    <div className="text-sm text-gray-500 font-medium">
                      {testimonial.year}
                    </div>
                  </div>
                  <p className="text-gray-300 italic mb-6">"{testimonial.testimonial}"</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className={`${getIndustryColor(testimonial.industry)} border font-semibold`}>
                      <Award className="w-3 h-3 mr-1.5" />
                      {testimonial.industry}
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-400">
                      <MapPin className="w-3 h-3 mr-1.5" />
                      {testimonial.location}
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-400">
                      <Calendar className="w-3 h-3 mr-1.5" />
                      {testimonial.programType}
                    </Badge>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-600 mb-8 text-lg">Join thousands of professionals who've transformed their careers with Kacey Staffing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/reviews'}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View All Reviews
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-custom-blue hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTimeline;
