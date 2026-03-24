import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, Users, Heart } from "lucide-react";
import { ScrollAnimation } from "../components/ui/scroll-animation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/services", label: "Our Services", icon: <Heart className="w-4 h-4" /> },
    { to: "/about", label: "About Us", icon: <Users className="w-4 h-4" /> },
    { to: "/partner-with-us", label: "Partner With Us", icon: <Search className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Number */}
        <ScrollAnimation direction="fade" delay={0.1}>
          <div className="relative mb-8">
            <h1 className="text-[12rem] md:text-[16rem] font-bold text-blue-100 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-full shadow-xl border-4 border-blue-200">
                <Search className="w-16 h-16 text-blue-600" />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Main Content */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, we're here to help you find what you need.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg inline-block">
              <p className="text-blue-700 text-sm">
                <strong>Looking for healthcare staffing solutions?</strong> 
                <br />
                Explore our services below or contact us directly.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Quick Navigation */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {quickLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {link.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollAnimation>

        {/* Action Buttons */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <Link
              to="/partner-with-us"
              className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-lg border-2 border-blue-600 transition-colors"
            >
              <Users className="w-5 h-5 mr-2" />
              Partner With Us
            </Link>
          </div>
        </ScrollAnimation>

        {/* Contact Info */}
        <ScrollAnimation direction="fade" delay={0.5}>
          <div className="mt-16 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Need Help? Contact Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <span className="font-medium">Phone:</span>
                <span className="ml-2">+254 793 934455</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-medium">Email:</span>
                <span className="ml-2">info@kaceystaffing.com</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-medium">Available:</span>
                <span className="ml-2">24/7 Support</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default NotFound;
