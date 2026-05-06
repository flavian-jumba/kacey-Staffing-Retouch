import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollAnimation } from '../ui/scroll-animation';

interface Destination {
  country: string;
  flag: string;
  description: string;
  image: string;
}

const destinations: Destination[] = [
  {
    country: 'United States',
    flag: 'US',
    description: 'Ivy League research universities and innovation hubs.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVM7VB-1VXnINC35ElKX22NM8DitEmOrTuA&s',
  },
  {
    country: 'United Kingdom',
    flag: 'UK',
    description: 'Centuries of academic tradition across world-class institutions.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    country: 'Canada',
    flag: 'CA',
    description: 'Inclusive campuses with strong post-graduation pathways.',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
  },
  {
    country: 'Australia',
    flag: 'AU',
    description: 'Globally ranked universities with vibrant student life.',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80',
  },
];

const DestinationGrid = () => {
  return (
    <section id="destinations" className="relative bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation direction="up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#0f2d5c]/10 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#0f2d5c]/70">
              Destinations
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#0f2d5c] sm:text-5xl">
              Where will you study?
            </h2>
            <p className="mt-4 text-lg text-[#0f2d5c]/55">
              We partner with leading institutions around the world.
            </p>
          </div>
        </ScrollAnimation>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => (
            <ScrollAnimation key={d.country} direction="up" delay={i * 0.08}>
              <a
                href="#"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-[#0f2d5c]"
              >
                <img
                  src={d.image}
                  alt={d.country}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d5c] via-[#0f2d5c]/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                      {d.flag}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{d.country}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white/90">
                      {d.description}
                    </p>
                  </div>
                </div>
              </a>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
