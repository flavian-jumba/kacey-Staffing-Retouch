import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings, Check } from 'lucide-react';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: (preferences: CookiePreferences) => void;
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
  onCustomize
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show popup after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: allAccepted
    }));
    setIsVisible(false);
    onAccept?.();
  };

  const handleDeclineAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences: onlyNecessary
    }));
    setIsVisible(false);
    onDecline?.();
  };

  const handleCustomize = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      timestamp: new Date().toISOString(),
      preferences
    }));
    setIsVisible(false);
    onCustomize?.(preferences);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" />
      
      {/* Cookie Consent Card */}
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-gray-200 pointer-events-auto transform transition-all duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <Cookie className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
          </div>
          <button
            onClick={handleDeclineAll}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {!showDetails ? (
            // Simple View
            <div className="space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and 
                personalize content. By clicking "Accept All", you consent to our use 
                of cookies.
              </p>
              
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Shield className="w-3 h-3" />
                <span>We respect your privacy and follow GDPR guidelines</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Decline All
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
              </div>
            </div>
          ) : (
            // Detailed View
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Choose which cookies you want to accept. You can change these settings at any time.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-3">
                {/* Necessary Cookies */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-5 h-5 bg-green-100 rounded">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">Necessary</h4>
                      <span className="text-xs text-green-600 font-medium">Required</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Essential for website functionality and security.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <label className="flex items-start gap-3 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      aria-label="Enable analytics cookies"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900">Analytics</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <label className="flex items-start gap-3 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      aria-label="Enable marketing cookies"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900">Marketing</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Used to deliver personalized advertisements and content.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <label className="flex items-start gap-3 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => handlePreferenceChange('functional')}
                      className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      aria-label="Enable functional cookies"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900">Functional</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Remember your preferences and enhance site features.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Detailed Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={handleCustomize}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Learn more in our{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline">
              Cookie Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
