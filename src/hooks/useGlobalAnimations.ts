import { useEffect } from 'react';

// Minimal scroll animation setup
export const initializeScrollAnimations = () => {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Simple intersection observer for minimal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));

  // Cleanup function
  return () => {
    observer.disconnect();
  };
};

// Hook to initialize minimal scroll animations
export const useScrollAnimations = () => {
  useEffect(() => {
    const cleanup = initializeScrollAnimations();
    return cleanup;
  }, []);
};
