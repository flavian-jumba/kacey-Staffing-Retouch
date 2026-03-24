import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Shield, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs } from '@/components/ui/vercel-tabs';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterPrograms = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsProgramsOpen(true);
  };

  const handleMouseLeavePrograms = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProgramsOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
  ];

  const flatNavTabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'careers', label: 'Careers' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const getActiveTab = () => {
    if (location.pathname === '/careers') return 'careers';
    if (location.pathname === '/blog') return 'blog';
    return location.pathname === '/' ? 'home' : 'home';
  };

  const handleTabChange = (tabId: string) => {
    if (tabId === 'careers') {
      navigate('/careers');
    } else if (tabId === 'blog') {
      navigate('/blog');
    } else if (tabId === 'contact') {
      scrollToSection('contact');
    } else if (tabId === 'home') {
      scrollToSection('home');
    } else if (tabId === 'about') {
      scrollToSection('about');
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'shadow-xl border-b border-[#8B1A4A]/40' : ''
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(139, 26, 74, 0.92)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/kacey-logo.png" 
              alt="Kacey Staffing Agency" 
              className={`h-10 sm:h-12 w-auto max-w-[180px] transition-all duration-300 ${
                ['/', '/programs', '/application'].includes(location.pathname) && !isScrolled ? '' : 'filter brightness-0 invert drop-shadow-lg'
              }`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {/* Vercel-style Tabs for flat nav items */}
            <Tabs
              tabs={flatNavTabs.filter(t => t.id !== 'careers' && t.id !== 'blog' && t.id !== 'contact').concat([])}
              activeTab={getActiveTab()}
              onTabChange={handleTabChange}
              variant={['/', '/programs', '/application'].includes(location.pathname) && !isScrolled ? 'light' : 'dark'}
              className="mr-1"
            />

            {/* Programs Dropdown — sits between About and Careers in the visual flow */}
            <div
              className="relative mx-1"
              onMouseEnter={handleMouseEnterPrograms}
              onMouseLeave={handleMouseLeavePrograms}
              ref={dropdownRef}
            >
              <button
                className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md h-[34px] ${
                  ['/', '/programs', '/application'].includes(location.pathname) && !isScrolled
                    ? 'text-[#8B1A4A]/70 hover:text-[#8B1A4A] hover:bg-[#8B1A4A]/10 font-semibold'
                    : 'text-white/60 hover:text-white/80 hover:bg-white/10'
                }`}
              >
                Programs
                <motion.span
                  className="ml-1"
                  animate={{ rotate: isProgramsOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut', type: 'spring' }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ y: -5, scale: 0.95, filter: 'blur(10px)', opacity: 0 }}
                    animate={{ y: 0, scale: 1, filter: 'blur(0px)', opacity: 1 }}
                    exit={{ y: -5, scale: 0.95, opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4, ease: 'easeInOut', type: 'spring' }}
                    className="absolute top-full left-0 w-72 mt-2 p-1 bg-[#11111198] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-sm z-50"
                  >
                    <div className="px-4 py-3 border-b border-white/10">
                      <h4 className="text-sm font-semibold text-white mb-1">Career Programs</h4>
                      <p className="text-xs text-white/50">International placement opportunities</p>
                    </div>
                    {[
                      { to: '/healthcare-staffing', label: 'Healthcare Staffing', sub: 'Nurses & CNA', abbr: 'HC' },
                      { to: '/teaching-opportunities', label: 'Teaching Opportunities', sub: 'K-12 Educators, Highschools', abbr: 'ED' },
                      { to: '/hospitality-careers', label: 'Hospitality Careers', sub: 'Hotels, Restaurants & J1', abbr: 'HS' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: 10, scale: 0.95, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: 10, scale: 0.95, filter: 'blur(8px)' }}
                        transition={{ duration: 0.3, delay: index * 0.07, ease: 'easeInOut', type: 'spring' }}
                      >
                        <Link
                          to={item.to}
                          className="flex items-center px-3 py-3 text-sm text-white hover:bg-white/10 rounded-lg transition-colors"
                          onClick={() => setIsProgramsOpen(false)}
                        >
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-white font-semibold text-xs">{item.abbr}</span>
                          </div>
                          <div>
                            <div className="font-medium">{item.label}</div>
                            <div className="text-xs text-white/50 mt-0.5">{item.sub}</div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining flat tabs: Careers, Blog, Contact */}
            <Tabs
              tabs={flatNavTabs.filter(t => t.id === 'careers' || t.id === 'blog' || t.id === 'contact')}
              activeTab={getActiveTab()}
              onTabChange={handleTabChange}
              variant={['/', '/programs', '/application'].includes(location.pathname) && !isScrolled ? 'light' : 'dark'}
              className="ml-1"
            />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              to="/programs"
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-[#8B1A4A] hover:bg-[#a01f57] text-white shadow-[0_4px_20px_rgba(139,26,74,0.4)]' 
                  : 'bg-[#8B1A4A] hover:bg-[#a01f57] text-white shadow-[0_4px_20px_rgba(139,26,74,0.5)]'
              }`}
            >
              Apply Now
            </Link>

            {/* Admin Login Button */}
            <a
              // href="https://kacey-staffing-admin-final.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 border backdrop-blur-sm ${
                ['/', '/programs', '/application'].includes(location.pathname) && !isScrolled
                  ? 'border-[#8B1A4A]/20 bg-[#8B1A4A]/5 text-[#8B1A4A] hover:bg-[#8B1A4A]/10 hover:border-[#8B1A4A]/30'
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30'
              }`}
              title="Admin Dashboard Access"
            >
              <Shield className="w-3 h-3" />
              <ExternalLink className="w-2 h-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                ['/', '/programs', '/application'].includes(location.pathname) && !isScrolled
                  ? 'text-[#8B1A4A] hover:bg-[#8B1A4A]/10'
                  : 'text-white hover:text-white/70 hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/20">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-[#8B1A4A]">
              {/* Primary Navigation */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-white hover:text-white/70 hover:bg-white/10 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Programs Section */}
              <div className="py-3">
                <div className="px-3 py-2 text-sm font-semibold text-white/50 uppercase tracking-wider">
                  Programs
                </div>
                <div className="space-y-1 mt-2">
                  <Link
                    to="/healthcare-staffing"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-xs">HC</span>
                    </div>
                    <div>
                      <div className="font-medium">Healthcare Staffing</div>
                      <div className="text-xs text-white/50">Medical Professionals</div>
                    </div>
                  </Link>
                  <Link
                    to="/teaching-opportunities"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-xs">ED</span>
                    </div>
                    <div>
                      <div className="font-medium">Teaching Opportunities</div>
                      <div className="text-xs text-white/50">K-12 &amp; Higher Education</div>
                    </div>
                  </Link>
                  <Link
                    to="/hospitality-careers"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-xs">HS</span>
                    </div>
                    <div>
                      <div className="font-medium">Hospitality Careers</div>
                      <div className="text-xs text-white/50">Hotels &amp; Restaurants</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Secondary Actions */}
              <div className="border-t border-white/20 pt-3 space-y-1">
                <Link
                  to="/careers"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-white/70 hover:bg-white/10 rounded-md transition-colors"
                >
                  Careers
                </Link>

                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-white/70 hover:bg-white/10 rounded-md transition-colors"
                >
                  Blog
                </Link>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-white hover:text-white/70 hover:bg-white/10 rounded-md transition-colors"
                >
                  Contact
                </button>
              </div>

              {/* Mobile CTA Button */}
              <div className="border-t border-white/20 pt-4 space-y-3">
                <Link
                  to="/programs"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#8B1A4A] hover:bg-[#a01f57] text-white px-6 py-4 rounded-xl text-center font-semibold transition-all duration-200 shadow-[0_4px_20px_rgba(139,26,74,0.4)]"
                >
                  Apply Now
                </Link>
                
                {/* Mobile Admin Login Button */}
                <a
                  href="https://kacey-staffing-admin-final.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full border border-white/20 bg-white/10 text-white hover:bg-white/20 px-4 py-3 rounded-lg text-center font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Shield className="w-4 h-4" />
                  <span>Admin</span>
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
