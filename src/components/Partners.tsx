import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollAnimation } from './ui/scroll-animation';
import { LogoCloud } from './ui/logo-cloud-3';

const partnerLogos = [
  { src: '/partners/Aspen-Experience-1.png', alt: 'Aspen Experience' },
  { src: '/partners/Logo-Triangle-Healthcare-Consulting-Inc.webp', alt: 'Triangle Healthcare Consulting' },
  { src: '/partners/logo.png', alt: 'StudyPage' },
  { src: '/partners/logo-echelon.png', alt: 'Echelon — Empowering People' },
  { src: '/partners/Aspen-Experience-1.png', alt: 'Aspen Experience 2' },
  { src: '/partners/Logo-Triangle-Healthcare-Consulting-Inc.webp', alt: 'Triangle Healthcare 2' },
  { src: '/partners/logo.png', alt: 'StudyPage 2' },
  { src: '/partners/logo-echelon.png', alt: 'Echelon 2' },
];

const stats = [
  {
    value: '150+',
    label: 'Healthcare Partners',
    description: 'Leading hospitals and medical facilities',
  },
  {
    value: '200+',
    label: 'Educational Institutions',
    description: 'Schools, colleges, and universities',
  },
  {
    value: '300+',
    label: 'Hospitality Venues',
    description: 'Hotels, restaurants, and resorts',
  },
];

const Partners = () => {
  return (
    <section className="py-14 bg-[#0f2d5c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-white/10 text-white/70 tracking-wide uppercase mb-4 border border-white/10">
              Partners
            </span>
            <h2 className="text-3xl font-light text-white mb-3">Our Trusted Partners</h2>
            <div className="mx-auto my-4 h-px max-w-xs bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="text-base text-white/50 max-w-2xl mx-auto">
              We collaborate with leading healthcare institutions, educational organizations,
              and hospitality companies across America
            </p>
          </div>
        </ScrollAnimation>

        {/* Infinite logo slider */}
        <LogoCloud logos={partnerLogos} className="mb-12" />

        {/* Stats */}
        <ScrollAnimation direction="up" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl font-extrabold mb-1 text-white">{stat.value}</div>
                <div className="text-white/80 font-semibold text-sm uppercase tracking-wide mb-1">{stat.label}</div>
                <p className="text-xs text-white/40">{stat.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation direction="fade" delay={0.5}>
          <div className="mt-10 text-center">
            <p className="text-white/40 mb-4">Interested in becoming a partner?</p>
            <Link
              to="/partner-with-us"
              className="inline-block bg-[#8B1A4A] hover:bg-[#a01f57] text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-[0_4px_20px_rgba(139,26,74,0.35)] hover:shadow-[0_6px_28px_rgba(139,26,74,0.45)]"
            >
              Partner With Us
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Partners;
