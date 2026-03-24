import React from 'react';
import { 
  FileText, 
  Code, 
  Database, 
  Server, 
  Layers, 
  GitBranch,
  Package,
  Settings,
  Users,
  Shield,
  Globe,
  Smartphone
} from 'lucide-react';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <FileText className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Site Documentation</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Kacey Staffing
            <span className="block text-blue-300">Documentation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Comprehensive documentation for the Kacey Staffing platform architecture, 
            features, and technical specifications.
          </p>
        </div>
      </section>

      {/* Documentation Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Platform Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern web technologies for optimal performance and user experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Technical Stack</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Code className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Frontend Framework</h4>
                    <p className="text-gray-600">React 18 with TypeScript for type-safe development</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Layers className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Styling</h4>
                    <p className="text-gray-600">Tailwind CSS with custom components and shadcn/ui</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Database className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
                    <p className="text-gray-600">Supabase PostgreSQL with real-time capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Server className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Build Tool</h4>
                    <p className="text-gray-600">Vite for fast development and optimized production builds</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Responsive Design for All Devices</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Application Management System</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Calendly Integration for Consultations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">WhatsApp Chat Integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">File Upload and Management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">SEO Optimized Structure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              System Architecture
            </h2>
            <p className="text-xl text-gray-600">Modular and scalable architecture design</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Layers className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Component Structure</h3>
              <p className="text-gray-600 leading-relaxed">
                Reusable UI components built with React and TypeScript for maintainability and consistency.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Layer</h3>
              <p className="text-gray-600 leading-relaxed">
                Supabase backend with PostgreSQL database, real-time subscriptions, and secure authentication.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GitBranch className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">State Management</h3>
              <p className="text-gray-600 leading-relaxed">
                React hooks and context for local state, with TanStack Query for server state management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pages Documentation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Page Structure
            </h2>
            <p className="text-xl text-gray-600">Overview of main pages and their functionality</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Homepage (/)</h3>
                  <p className="text-gray-600 mb-4">
                    Landing page featuring hero slider, services overview, testimonials, and partner information.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Components:</strong> HeroSlider, ServicesPreview, TestimonialsTimeline, Partners
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Features:</strong> Dynamic content, responsive design, call-to-action buttons
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Integration:</strong> WhatsApp chat, navigation anchors
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications (/programs)</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive application form with program selection, document upload, and user information collection.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Features:</strong> Multi-step form, file uploads, form validation
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Programs:</strong> Healthcare, Teaching, Hospitality
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Integration:</strong> Supabase storage, email notifications
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultations (/consultations)</h3>
                  <p className="text-gray-600 mb-4">
                    Dedicated consultation booking page with Calendly integration for scheduling expert sessions.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Options:</strong> Video, Phone, In-person consultations
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Features:</strong> Calendly widget, FAQ section, contact info
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Duration:</strong> 30-60 minutes based on consultation type
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-6">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Pages</h3>
                  <p className="text-gray-600 mb-4">
                    Dedicated pages for each program: Healthcare Staffing, Teaching Opportunities, and Hospitality Careers.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Healthcare:</strong> CNA programs, requirements, testimonials
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Teaching:</strong> K-12 & university opportunities
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <strong>Hospitality:</strong> Hotel & restaurant placements
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">Detailed technical implementation details</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dependencies</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">React</span>
                  <span className="text-gray-600">^18.0.0</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">TypeScript</span>
                  <span className="text-gray-600">^5.0.0</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Tailwind CSS</span>
                  <span className="text-gray-600">^3.0.0</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">React Router</span>
                  <span className="text-gray-600">^6.0.0</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">Supabase</span>
                  <span className="text-gray-600">^2.0.0</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-900">TanStack Query</span>
                  <span className="text-gray-600">^4.0.0</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-900">Lucide React</span>
                  <span className="text-gray-600">^0.400.0</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Info</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Build System</h4>
                  <p className="text-gray-600">Vite with TypeScript support and fast HMR</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Code Quality</h4>
                  <p className="text-gray-600">ESLint for linting, Prettier for formatting</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Styling System</h4>
                  <p className="text-gray-600">Tailwind CSS with custom color scheme and components</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
                  <p className="text-gray-600">Optimized for modern hosting platforms</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                  <p className="text-gray-600">Code splitting, lazy loading, and optimized assets</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Support</h4>
                  <p className="text-gray-600">Modern browsers with ES6+ support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600">Data protection and security measures</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Data Encryption</h3>
                <p className="text-gray-600 text-sm">All data transmitted and stored with encryption</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">User Privacy</h3>
                <p className="text-gray-600 text-sm">GDPR compliant data handling and privacy controls</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Secure Storage</h3>
                <p className="text-gray-600 text-sm">Supabase with Row Level Security policies</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Access Control</h3>
                <p className="text-gray-600 text-sm">Role-based permissions and secure authentication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
