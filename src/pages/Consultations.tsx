import React from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Star,
  Users,
  Globe,
  Award,
  Briefcase,
  Target,
  ArrowRight,
  User,
  Mail,
  MapPin
} from 'lucide-react';

const Consultations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Expert Career Consultations</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Get Expert
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              Career Guidance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Book a personalized consultation with our experts to discuss your career goals, 
            program options, and create a roadmap to your global career success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="#book-consultation"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Book Free Consultation
            </a>
            <a 
              href="#consultation-types"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm"
            >
              View Services
            </a>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Successful Consultations</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm opacity-80">Client Satisfaction</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold">24hrs</div>
              <div className="text-sm opacity-80">Response Time</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section id="consultation-types" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Consultation Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the consultation format that works best for your schedule and preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Consultation */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative bg-gradient-to-br from-blue-500 to-teal-500 p-8 text-white">
                <Video className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Video Consultation</h3>
                <p className="text-blue-100">Face-to-face discussion via video call</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-gray-600">45-minute session</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Personalized career assessment
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Program recommendations
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Application timeline planning
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Q&A session
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Video Call
                </button>
              </div>
            </div>

            {/* Phone Consultation */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-white">
                <Phone className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Phone Consultation</h3>
                <p className="text-purple-100">Convenient phone discussion</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-gray-600">30-minute session</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Quick career overview
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Program suitability check
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Initial guidance
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Next steps planning
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Book Phone Call
                </button>
              </div>
            </div>

            {/* In-Person Consultation */}
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 p-8 text-white">
                <Users className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">In-Person Meeting</h3>
                <p className="text-green-100">Meet at our Nairobi office</p>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-gray-600">60-minute session</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Comprehensive consultation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Document review
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Application assistance
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                    Resource materials
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Book Office Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What to Expect in Your Consultation
            </h2>
            <p className="text-xl text-gray-600">Your personalized roadmap to success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <User className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Profile Assessment</h3>
              <p className="text-gray-600 leading-relaxed">We'll review your background, skills, and career goals to understand your unique profile.</p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Program Matching</h3>
              <p className="text-gray-600 leading-relaxed">Discover which programs align best with your experience and career aspirations.</p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Timeline Planning</h3>
              <p className="text-gray-600 leading-relaxed">Get a detailed timeline with milestones and deadlines for your application process.</p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Next Steps</h3>
              <p className="text-gray-600 leading-relaxed">Clear action items and next steps to move forward with your application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section id="book-consultation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Book Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a convenient time that works for you. Our experts are ready to help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendly Embed */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Your Preferred Time</h3>
                  <p className="text-gray-600">All consultations are completely free and without obligation.</p>
                </div>
                
                {/* Calendly Widget Placeholder */}
                <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Calendly Integration</h4>
                  <p className="text-gray-600 mb-6">
                    This is where your Calendly booking widget will be embedded. 
                    Replace this section with your actual Calendly embed code.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      To integrate: Replace this div with your Calendly embed code from your Calendly dashboard.
                    </p>
                  </div>
                </div>
                
                {/* Example Calendly Embed Code (commented) */}
                {/* 
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/your-calendly-username/consultation" 
                  style={{minWidth: '320px', height: '630px'}}
                ></div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                */}
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-6">
                  Have questions before booking? Reach out to us directly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+254 700 000 000</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>consultations@kacey.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-700">
                  <p className="text-sm text-blue-200">
                    Available: Monday - Friday, 8:00 AM - 6:00 PM (EAT)
                  </p>
                </div>
              </div>

              {/* Consultation Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Book a Consultation?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <p className="text-gray-600">Get personalized program recommendations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <p className="text-gray-600">Understand visa requirements and process</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <p className="text-gray-600">Learn about timeline and expectations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <p className="text-gray-600">Get answers to all your questions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <p className="text-gray-600">Receive guidance on document preparation</p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-green-700 mb-4 italic">
                  "The consultation was incredibly helpful. They walked me through every step and made the whole process so much clearer!"
                </p>
                <div className="text-sm text-green-600 font-medium">- Sarah M., Teaching Program</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Get answers to common consultation questions</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long does a consultation take?</h3>
              <p className="text-gray-600">Consultations typically last 30-60 minutes depending on the format you choose. Video and in-person consultations are longer to allow for comprehensive discussion.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Is the consultation really free?</h3>
              <p className="text-gray-600">Yes, absolutely! Our initial consultations are completely free with no hidden fees or obligations. We believe in providing value upfront to help you make informed decisions.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What should I prepare for the consultation?</h3>
              <p className="text-gray-600">Come with your questions, career goals, and any relevant documents (resume, transcripts, certificates). The more we know about your background and goals, the better we can help you.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Can I reschedule my appointment?</h3>
              <p className="text-gray-600">Yes, you can reschedule your appointment up to 24 hours before the scheduled time through your Calendly confirmation email or by contacting us directly.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What happens after the consultation?</h3>
              <p className="text-gray-600">After your consultation, you'll receive a summary email with key discussion points, recommended next steps, and relevant resources. There's no pressure to commit to anything immediately.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultations;
