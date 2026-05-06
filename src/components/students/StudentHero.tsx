import React from 'react';
import { Hero } from '../ui/animated-hero';

const StudentHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-[#8B1A4A]/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-[#0f2d5c]/10 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(15,45,92) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Hero />
    </section>
  );
};

export default StudentHero;
