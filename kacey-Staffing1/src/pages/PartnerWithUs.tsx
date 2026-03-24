import React, { useState } from 'react';
import { CheckCircle, Building2, Users, FileCheck, DollarSign, Send, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import { ScrollAnimation } from '../components/ui/scroll-animation';
import { supabase } from '../integrations/supabase/client';

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    position: '',
    email: '',
    phone: '',
    facilityType: '',
    staffingNeeds: '',
    contactMethod: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Insert data into Supabase
    const { error } = await supabase.from('partnership_requests').insert([
      {
        full_name: formData.fullName,
        organization_name: formData.organizationName,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        facility_type: formData.facilityType,
        staffing_needs: formData.staffingNeeds,
        contact_method: formData.contactMethod || null,
        timeline: formData.timeline || null,
        consent: true // or false if you want to add a checkbox
      }
    ]);

    setIsSubmitting(false);
    if (!error) {
      setIsSubmitted(true);
    } else {
      alert('Submission failed: ' + error.message);
    }
  };

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Pre-screened Candidates",
      description: "Ready to work in hospitals, assisted living facilities, and home care."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-green-600" />,
      title: "Full Support Services",
      description: "Complete assistance with licensing, credentialing, and immigration paperwork."
    },
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Long-term Solutions",
      description: "Reliable staffing solutions designed to reduce turnover and improve retention."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-600" />,
      title: "Cost-effective Models",
      description: "Recruitment strategies specifically designed for healthcare providers."
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
        <SEO 
          title="Thank You - Partnership Request Submitted | Kacey Staffing"
          description="Thank you for your interest in partnering with Kacey Staffing. We'll contact you within 24 hours."
        />
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We've received your partnership request. Our team will contact you within 24 hours to discuss how we can help strengthen your healthcare workforce.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="Partner With Us - Healthcare Staffing Solutions | Kacey Staffing"
        description="Partner with Kacey Staffing to build a stronger healthcare workforce. We connect healthcare facilities with skilled nurses, caregivers, and allied health professionals."
        keywords="healthcare staffing partnership, nurse recruitment, healthcare workforce solutions, medical staffing agency, healthcare recruitment partner"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-32 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/public/home/healthcare.jpg')]"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto">
          <ScrollAnimation direction="fade" delay={0.1}>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Partner With <span className="text-yellow-400">Kacey Staffing</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-200 mb-8 font-semibold">
                Let's Build a Stronger Healthcare Workforce Together
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Kacey Staffing Agency, we specialize in connecting healthcare facilities with skilled nurses, 
                caregivers, and allied health professionals. By partnering with us, you gain access to exceptional 
                talent and comprehensive support services.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <div className="bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Benefits Section */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
          </div>
        </ScrollAnimation>

        {/* Target Audience */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="bg-blue-50 p-8 rounded-2xl mb-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Serve</h3>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're a hospital administrator, nursing home director, or healthcare agency owner, 
              we are here to help you build and maintain the workforce your patients deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Hospital Administrator', 'Nursing Home Director', 'Healthcare Agency Owner', 'HR Manager', 'Facility Manager'].map((role) => (
                <span key={role} className="bg-white px-4 py-2 rounded-full text-blue-600 font-medium text-sm">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <ScrollAnimation direction="up" delay={0.6}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <p className="text-gray-700 mb-8">
                Fill out the form and a member of our team will contact you within 24 hours to discuss 
                your staffing needs and how we can help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+254 793 934455</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">partnerships@kaceystaffing.com</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Partnership Form */}
          <ScrollAnimation direction="up" delay={0.7}>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization / Facility Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Position / Role *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>
                    <option value="Administrator">Administrator</option>
                    <option value="HR Manager">HR Manager</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Director">Director</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="facilityType" className="block text-sm font-medium text-gray-700 mb-1">
                    Facility Type *
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    value={formData.facilityType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select facility type</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Assisted Living">Assisted Living</option>
                    <option value="Nursing Home">Nursing Home</option>
                    <option value="Home Healthcare">Home Healthcare</option>
                    <option value="Clinic">Clinic</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="staffingNeeds" className="block text-sm font-medium text-gray-700 mb-1">
                  Staffing Needs *
                </label>
                <textarea
                  id="staffingNeeds"
                  name="staffingNeeds"
                  value={formData.staffingNeeds}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="e.g., Nurses, Caregivers, Technicians, Number of Staff Required"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select method</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Zoom Call">Zoom Call</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                    Timeline for Hiring
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1-3 months">1–3 months</option>
                    <option value="3-6 months">3–6 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    👉 Partner With Us
                  </>
                )}
              </button>
            </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
