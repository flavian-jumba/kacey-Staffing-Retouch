
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2 } from 'lucide-react';

/* ─── slide data ─────────────────────────────────────────── */
const slides = [
  {
    image: '/home/hospitality.png',
    industry: 'Hospitality',
    cardTitle: 'Explore Opportunities',
    cardSubtitle: 'Experience world-class service industry',
    avatarName: 'Maria N.',
    avatarRole: 'Registered Nurse',
    avatarInitials: 'MN',
    testimonial:
      '"Kacey Staffing made my transition seamless. I\'m now working at a top-tier facility in the U.S."',
  },
  {
    image: '/home/healthcare.jpg',
    industry: 'Healthcare',
    cardTitle: 'Healthcare Excellence',
    cardSubtitle: 'Join leading medical facilities across the Globe',
    avatarName: 'James O.',
    avatarRole: 'Physical Therapist',
    avatarInitials: 'JO',
    testimonial:
      '"The process was incredibly smooth. I landed my dream job within 3 months."',
  },
  {
    image: '/home/j1 Teaching.jpg',
    industry: 'Education',
    cardTitle: 'Teaching Opportunities',
    cardSubtitle: 'Shape young minds in global schools',
    avatarName: 'Aisha K.',
    avatarRole: 'High-School Teacher',
    avatarInitials: 'AK',
    testimonial:
      '"I never thought teaching abroad was possible until Kacey Staffing opened the door."',
  },
  {
    image: '/home/healthcare_2.jpg',
    industry: 'Success Stories',
    cardTitle: 'Your Dream & Vision',
    cardSubtitle: 'Thousands of professionals have made it here',
    avatarName: 'David M.',
    avatarRole: 'ICU Specialist',
    avatarInitials: 'DM',
    testimonial:
      '"From application to visa, Kacey Staffing held my hand every step of the way."',
  },
];

/* ─── animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, x: 60, scale: 0.96, transition: { duration: 0.35 } },
};

/* ─── component ──────────────────────────────────────────── */
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden font-sans">

      {/* ── Background images ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={s.image} alt={s.industry} className="w-full h-full object-cover object-center" />
        </div>
      ))}

      {/* ── Deep cinematic overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

      {/* ── Main content grid ── */}
      <div className="absolute inset-0 z-20 flex items-center pt-10 sm:pt-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-10">

            {/* ── LEFT  –  Glass text container ── */}
            <motion.div
              key={current + '-text'}
              initial="hidden"
              animate="visible"
              className="flex-1 min-w-0 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10
                         p-5 sm:p-7 shadow-[0_8px_40px_rgba(0,0,0,0.45)] flex flex-col justify-between"
            >
              {/* Industry badge */}
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 self-start mb-3
                px-3.5 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                </span>
                {slide.industry}
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white mb-3"
              >
                Transform Your
                <br />
                Career{' '}
                <span className="text-sky-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.55)]">
                  Globally
                </span>
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg mb-5"
              >
                Join thousands of healthcare, teaching, and hospitality professionals
                who've achieved their dreams through Kacey Staffing.
              </motion.p>

              {/* CTA row */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-col sm:flex-row gap-3 mt-auto"
              >
                <Link
                  to="/application"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                    bg-[#8B1A4A] hover:bg-[#a01f57] active:scale-[0.98]
                    text-white font-semibold text-sm sm:text-base rounded-2xl
                    shadow-[0_4px_24px_rgba(139,26,74,0.55)]
                    transition-all duration-200"
                >
                  Start Your Application
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center px-7 py-3.5
                    border border-white/30 text-white font-semibold text-sm sm:text-base rounded-2xl
                    bg-white/5 hover:bg-white/15 hover:border-white/50 active:scale-[0.98]
                    backdrop-blur-sm transition-all duration-200"
                >
                  Learn About Our Programs
                </Link>
              </motion.div>
            </motion.div>

            {/* ── RIGHT  –  Floating white info card ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current + '-card'}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full lg:w-[320px] xl:w-[340px] shrink-0 bg-white rounded-3xl
                           shadow-[0_20px_60px_rgba(0,0,0,0.28)] overflow-hidden self-center"
              >
                {/* Card header */}
                <div className="px-4 pt-4 pb-3 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-[13px]">{slide.cardTitle}</p>
                    <p className="text-gray-500 text-[11px] mt-0.5">{slide.cardSubtitle}</p>
                  </div>
                </div>

                {/* Featured image */}
                <Link to="/programs" className="group/img relative block mx-4 mt-3 rounded-xl overflow-hidden h-24">
                  <img
                    src={slide.image}
                    alt={slide.cardTitle}
                    className="w-full h-full object-cover transition-all duration-500
                               group-hover/img:brightness-[0.4] group-hover/img:scale-105"
                  />
                  {/* Share icon — top-right corner, appears on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100
                                  transition-all duration-300 scale-75 group-hover/img:scale-100">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-1.5 shadow-md">
                      <Share2 className="h-3.5 w-3.5 text-gray-800" />
                    </div>
                  </div>
                  {/* Center label on hover */}
                  <div className="absolute inset-0 flex items-center justify-center
                                  opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-semibold tracking-wide">Visit Page</span>
                  </div>
                </Link>

                {/* Stats row */}
                <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100 mt-3">
                  <div className="px-4 py-3 text-center">
                    <p className="text-xl font-extrabold text-[#8B1A4A] tracking-tight">30+</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-0.5 leading-tight">
                      Partner<br />Institutions
                    </p>
                  </div>
                  <div className="px-4 py-3 text-center">
                    <p className="text-xl font-extrabold text-sky-500 tracking-tight">24/7</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide mt-0.5 leading-tight">
                      Support<br />Available
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="px-4 py-3.5 bg-gray-50/80">
                  <p className="text-gray-600 text-[12px] leading-relaxed italic mb-3">{slide.testimonial}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-sky-600
                                    flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                      {slide.avatarInitials}
                    </div>
                    <div>
                      <p className="text-gray-900 text-[11px] font-semibold">{slide.avatarName}</p>
                      <p className="text-gray-400 text-[10px]">{slide.avatarRole}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-7 h-1.5' : 'bg-white/40 w-3.5 h-1.5 hover:bg-white/65'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;
