import React from 'react';
import { 
  FileText, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Users, 
  Globe,
  Calendar,
  Mail
} from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <FileText className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Terms and Conditions
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Last updated: September 7, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Kacey Staffing ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Kacey Staffing is a recruitment agency specializing in connecting international professionals with employment opportunities in the United States through various exchange programs including J1 visas, healthcare staffing, teaching positions, and hospitality careers.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>
                
                <p>If you do not agree with any part of these Terms, you must not use our services.</p>
                
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new Terms.</p>
              </div>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Kacey Staffing provides the following services:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Recruitment and placement services for healthcare professionals, teachers, and hospitality workers</li>
                  <li>J1 visa program coordination and support</li>
                  <li>Career consultation and guidance services</li>
                  <li>Application processing and document management</li>
                  <li>Ongoing support during placement periods</li>
                </ul>
                
                <p>All services are provided subject to applicable laws and regulations, including but not limited to U.S. immigration laws and visa requirements.</p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>When using our services, you agree to:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information about yourself</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful or fraudulent purposes</li>
                  <li>Respect the intellectual property rights of Kacey Staffing and third parties</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                </ul>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-yellow-800 font-medium">Important Notice</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        Any false or misleading information provided may result in immediate termination of services and may affect your visa application status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="h-5 w-5 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Application Process and Fees</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>Application Submission:</strong> By submitting an application through our platform, you authorize us to process your information and represent you in seeking employment opportunities.</p>
                
                <p><strong>No Guarantee of Placement:</strong> While we strive to find suitable placements for all qualified candidates, we cannot guarantee employment or visa approval.</p>
                
                <p><strong>Service Fees:</strong> Our consultation services are provided free of charge. Any program fees will be clearly disclosed before you commit to a specific program.</p>
                
                <p><strong>Third-Party Fees:</strong> You are responsible for all third-party fees including but not limited to visa application fees, medical examinations, background checks, and travel expenses.</p>
                
                <p><strong>Refund Policy:</strong> Refund eligibility depends on the specific circumstances and timing of your request. Please contact us for detailed information about our refund policy.</p>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Privacy and Data Protection</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Your privacy is important to us. Our collection, use, and disclosure of your personal information is governed by our Privacy Policy, which forms part of these Terms.</p>
                
                <p>By using our services, you consent to:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The collection and processing of your personal data as described in our Privacy Policy</li>
                  <li>Sharing your information with potential employers and program sponsors</li>
                  <li>Communication via email, phone, or other contact methods you provide</li>
                  <li>Storage of your data in secure systems for the duration necessary to provide our services</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-5 w-5 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Kacey Staffing or its licensors and is protected by copyright and other intellectual property laws.</p>
                
                <p>You may not:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy, modify, distribute, or reproduce any content without written permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Reverse engineer or attempt to extract source code from our systems</li>
                  <li>Create derivative works based on our content</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>To the fullest extent permitted by law, Kacey Staffing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of profits or revenue</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption</li>
                  <li>Visa application rejections or delays</li>
                  <li>Employment termination or workplace issues</li>
                </ul>
                
                <p>Our total liability for any claim arising from our services shall not exceed the amount you have paid to us in the 12 months preceding the claim.</p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Termination</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Either party may terminate the service relationship at any time with written notice. We reserve the right to suspend or terminate your access to our services immediately if you violate these Terms.</p>
                
                <p>Upon termination:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your access to our services will cease</li>
                  <li>We may retain your data as required by law or legitimate business purposes</li>
                  <li>All outstanding obligations remain in effect</li>
                  <li>These Terms continue to apply to any disputes arising before termination</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Governing Law and Disputes</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>These Terms are governed by the laws of Kenya and the United States, as applicable to the specific services provided.</p>
                
                <p>Any disputes arising from these Terms or our services shall be resolved through:</p>
                
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation by a mutually agreed mediator</li>
                  <li>If necessary, binding arbitration or court proceedings in the appropriate jurisdiction</li>
                </ol>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <p><strong>Email:</strong> legal@kacey.com</p>
                    <p><strong>Phone:</strong> +254 700 000 000</p>
                  </div>
                  <div>
                    <p><strong>Address:</strong> Nairobi, Kenya</p>
                    <p><strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM (EAT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 text-center text-gray-500 text-sm">
              <p>These Terms and Conditions were last updated on September 7, 2025</p>
              <p>Version 1.0</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
