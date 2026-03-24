import React from 'react';
import { ScrollAnimation } from './ui/scroll-animation';
import { StaggerTestimonials } from './ui/stagger-testimonials';

const Reviews: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-5 mx-auto">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#8B1A4A]/10 text-[#8B1A4A] tracking-wide uppercase mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-light text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Hear from professionals who have successfully transformed their careers with Kacey Staffing
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <StaggerTestimonials />
    </section>
  );
};

export default Reviews;
