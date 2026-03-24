import React from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe,
  FileText,
  Settings,
  AlertTriangle,
  CheckCircle,
  Mail,
  Clock
} from 'lucide-react';

const DataProtectionPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Shield className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Privacy & Data Protection</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Data Protection Policy
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
          </p>
          
          <p className="text-sm text-gray-300">
            Last updated: September 7, 2025
          </p>
        </div>
      </section>

      {/* Policy Content */}
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
              
              <div className="space-y-4 text-gray-700">
                <p>
                  At Kacey Staffing ("we," "our," or "us"), we are committed to protecting your privacy and personal data. This Data Protection Policy explains how we collect, use, store, and protect your personal information when you use our services.
                </p>
                
                <p>
                  This policy applies to all personal data we process in connection with our recruitment and staffing services, including J1 visa programs, healthcare staffing, teaching opportunities, and hospitality careers.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-blue-800 font-medium">GDPR Compliance</p>
                      <p className="text-blue-700 text-sm mt-1">
                        We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Database className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Full name, date of birth, and nationality</li>
                    <li>Contact information (email, phone number, address)</li>
                    <li>Educational background and qualifications</li>
                    <li>Work experience and professional history</li>
                    <li>Identification documents and visa information</li>
                    <li>Medical and background check results (when required)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Application Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Resume/CV and cover letters</li>
                    <li>Academic transcripts and certificates</li>
                    <li>Professional licenses and certifications</li>
                    <li>References and recommendation letters</li>
                    <li>Portfolio materials (when applicable)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Website usage patterns and preferences</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Data */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Settings className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>We use your personal information for the following purposes:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Recruitment Services</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Processing job applications</li>
                      <li>• Matching candidates with employers</li>
                      <li>• Facilitating interviews and placements</li>
                      <li>• Providing career consultation services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Visa application processing</li>
                      <li>• Background verification</li>
                      <li>• Regulatory reporting</li>
                      <li>• Record keeping requirements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Sending updates and notifications</li>
                      <li>• Providing customer support</li>
                      <li>• Marketing communications (with consent)</li>
                      <li>• Emergency contact purposes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Service Improvement</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Website analytics and optimization</li>
                      <li>• Service quality assessment</li>
                      <li>• System security and maintenance</li>
                      <li>• Research and development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Legal Basis for Processing</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>We process your personal data based on the following legal grounds:</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Consent:</strong> When you explicitly agree to processing for specific purposes (e.g., marketing communications)
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Contract Performance:</strong> To fulfill our obligations under service agreements with you
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Legal Obligation:</strong> To comply with visa, immigration, and employment laws
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <strong>Legitimate Interest:</strong> For business operations, security, and service improvement
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>We may share your personal information with:</p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Potential Employers</h4>
                    <p className="text-sm">Your application materials and relevant information for job placement purposes</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Program Sponsors</h4>
                    <p className="text-sm">Information required for J1 visa and exchange program applications</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Government Agencies</h4>
                    <p className="text-sm">As required by law for visa processing and compliance purposes</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Service Providers</h4>
                    <p className="text-sm">Third-party vendors who assist with background checks, document verification, and technical services</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-yellow-800 font-medium">Important Note</p>
                      <p className="text-yellow-700 text-sm mt-1">
                        We do not sell your personal data to third parties for their marketing purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>We implement comprehensive security measures to protect your personal information:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Technical Safeguards</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Encrypted database storage</li>
                      <li>• Secure cloud infrastructure</li>
                      <li>• Regular security updates and patches</li>
                      <li>• Firewalls and intrusion detection</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Administrative Controls</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Access controls and user authentication</li>
                      <li>• Employee training on data protection</li>
                      <li>• Data handling policies and procedures</li>
                      <li>• Regular security audits</li>
                      <li>• Incident response protocols</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-red-800 text-sm">
                    <strong>Security Breach Protocol:</strong> In the unlikely event of a data breach, we will notify affected individuals and relevant authorities within 72 hours as required by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>We retain your personal information for as long as necessary to:</p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide our services and maintain our relationship with you</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Support ongoing placement and program requirements</li>
                </ul>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Retention Periods</h4>
                  <div className="text-sm space-y-1">
                    <p>• <strong>Active Applications:</strong> Duration of application process plus 2 years</p>
                    <p>• <strong>Successful Placements:</strong> Duration of placement plus 7 years</p>
                    <p>• <strong>Unsuccessful Applications:</strong> 2 years from application date</p>
                    <p>• <strong>Marketing Communications:</strong> Until you unsubscribe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>Under data protection laws, you have the following rights regarding your personal information:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Access & Transparency</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Right to access your data</li>
                      <li>• Right to be informed about processing</li>
                      <li>• Right to data portability</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Control & Correction</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Right to rectify inaccurate data</li>
                      <li>• Right to complete incomplete data</li>
                      <li>• Right to withdraw consent</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Deletion & Restriction</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Right to erasure ("right to be forgotten")</li>
                      <li>• Right to restrict processing</li>
                      <li>• Right to object to processing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Legal Protection</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Right not to be subject to automated decision-making</li>
                      <li>• Right to lodge a complaint with supervisory authorities</li>
                      <li>• Right to seek legal remedies</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-800 text-sm">
                    <strong>How to Exercise Your Rights:</strong> Contact us using the information provided below. We will respond to your request within 30 days and may require identity verification for security purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">International Data Transfers</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  As we facilitate international employment opportunities, your personal data may be transferred to and processed in countries outside of your residence, including the United States.
                </p>
                
                <p>
                  When transferring data internationally, we ensure adequate protection through:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adequacy decisions by relevant data protection authorities</li>
                  <li>Standard contractual clauses approved by regulatory bodies</li>
                  <li>Binding corporate rules and certification mechanisms</li>
                  <li>Specific derogations for necessary transfers</li>
                </ul>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Settings className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Policy Updates</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Data Protection Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
                </p>
                
                <p>
                  When we make significant changes, we will:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Notify you via email or prominent website notice</li>
                  <li>Provide at least 30 days' notice before changes take effect</li>
                  <li>Highlight the key changes in our notification</li>
                  <li>Maintain previous versions for your reference</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Our Data Protection Team</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Data Protection Policy or wish to exercise your rights, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h4>
                    <p><strong>Email:</strong> privacy@kacey.com</p>
                    <p><strong>Phone:</strong> +254 700 000 000</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Office Address</h4>
                    <p>Nairobi, Kenya</p>
                    <p><strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM (EAT)</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <p className="text-blue-800 text-sm">
                    <strong>Response Time:</strong> We aim to respond to all data protection inquiries within 48 hours and will provide a full response within 30 days as required by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 text-center text-gray-500 text-sm">
              <p>This Data Protection Policy was last updated on September 7, 2025</p>
              <p>Version 1.0 | Effective Date: September 7, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataProtectionPolicy;
