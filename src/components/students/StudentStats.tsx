import React from 'react';
import { ScrollAnimation } from '../ui/scroll-animation';

const stats = [
  {
    value: '500+',
    label: 'Student Placements',
    description: 'Across leading global institutions',
  },
  {
    value: '98%',
    label: 'Satisfaction Rate',
    description: 'From students and partner schools',
  },
];

const StudentStats = () => {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollAnimation direction="up">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#0f2d5c]/10 bg-[#0f2d5c]/10 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-white p-10 transition-colors duration-300 hover:bg-[#0f2d5c]/[0.02] sm:p-14"
              >
                <div className="text-5xl font-semibold tracking-tight text-[#0f2d5c] sm:text-6xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-base font-medium text-[#0f2d5c]/80">
                  {stat.label}
                </div>
                <p className="mt-1 text-sm text-[#0f2d5c]/50">{stat.description}</p>
                <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8B1A4A]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default StudentStats;
