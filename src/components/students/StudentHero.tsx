import React from 'react';
import { Hero } from '../ui/animated-hero';

const StudentHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Mesh gradient background — matches home page hero */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(12, 192, 223, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 80% 20%, rgba(12, 192, 223, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse 60% 70% at 60% 90%, rgba(56, 189, 248, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 10% 30%, rgba(125, 211, 252, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 90% 80% at 50% 50%, rgba(224, 242, 254, 0.6) 0%, transparent 70%),
            linear-gradient(135deg, #e0f7fa 0%, #e8f5fd 25%, #f0f9ff 50%, #e0f2fe 75%, #dff6fd 100%)
          `,
        }}
      />

      {/* Subtle decorative circles */}
      <div className="pointer-events-none absolute top-20 right-[30%] w-72 h-72 rounded-full bg-[#0cc0df]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-[10%] w-96 h-96 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative z-10">
        <Hero />
      </div>
    </section>
  );
};

export default StudentHero;
