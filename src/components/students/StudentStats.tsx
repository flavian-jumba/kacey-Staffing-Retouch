import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { ScrollAnimation } from '../ui/scroll-animation';

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ to, duration = 2, suffix = '', className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {Math.round(value)}
      {suffix}
    </span>
  );
};

const stats = [
  {
    to: 500,
    suffix: '+',
    label: 'Placements',
    description: 'Across leading global institution',
  },
  {
    to: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Among our stakeholders',
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
                <CountUp
                  to={stat.to}
                  suffix={stat.suffix}
                  className="block text-5xl font-semibold tracking-tight text-[#0f2d5c] sm:text-6xl tabular-nums"
                />
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
