import React from 'react';
import { UserCircle2, Sparkles, FileCheck2, Plane } from 'lucide-react';
import { ScrollAnimation } from '../ui/scroll-animation';

const steps = [
  {
    icon: UserCircle2,
    title: 'Submit your profile',
    description:
      'Share your academic background, preferred destinations, and program interests.',
  },
  {
    icon: Sparkles,
    title: 'Get matched',
    description:
      'Advisors match you with the best programs based on your goals and qualifications.',
  },
  {
    icon: FileCheck2,
    title: 'Apply with support',
    description:
      'Hands-on help with applications, visas, scholarships, and documentation.',
  },
  {
    icon: Plane,
    title: 'Depart with confidence',
    description:
      'Pre-departure briefings and on-ground assistance once you arrive.',
  },
];

const ProcessSteps = () => {
  return (
    <section id="how-it-works" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation direction="up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#0f2d5c]/10 bg-[#0f2d5c]/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#0f2d5c]/70">
              How it works
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#0f2d5c] sm:text-5xl">
              Your journey, guided every step
            </h2>
            <p className="mt-4 text-lg text-[#0f2d5c]/55">
              A clear, supported path from your first application to your first day abroad.
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative mt-20">
          {/* Connecting line — desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#0f2d5c]/15 to-transparent lg:block"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollAnimation key={step.title} direction="up" delay={i * 0.1}>
                <div className="group relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0f2d5c]/10 bg-white shadow-[0_8px_24px_rgba(15,45,92,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#8B1A4A]/30 group-hover:shadow-[0_12px_32px_rgba(139,26,74,0.12)]">
                    <step.icon className="h-6 w-6 text-[#0f2d5c] transition-colors duration-300 group-hover:text-[#8B1A4A]" />
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8B1A4A]">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#0f2d5c]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0f2d5c]/55">
                    {step.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
