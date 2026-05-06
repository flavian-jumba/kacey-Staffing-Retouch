import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ScrollAnimation } from '../ui/scroll-animation';

const StudentCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f2d5c] py-24 sm:py-32">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#8B1A4A]/25 to-transparent blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <ScrollAnimation direction="up">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to study abroad?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
            Join hundreds of students building their future with Kacey Staffing.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/254793934455?text=Hi%20Kacey%20Staffing%2C%20I%27m%20interested%20in%20studying%20abroad.%20Can%20you%20help%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-[#8B1A4A] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_32px_rgba(139,26,74,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a01f57] hover:shadow-[0_14px_40px_rgba(139,26,74,0.55)]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/35">
            Personal advisor · Replies within 24 hours
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default StudentCTA;
