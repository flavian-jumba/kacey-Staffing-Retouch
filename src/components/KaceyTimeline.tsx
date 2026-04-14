import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollTimeline } from './ui/scroll-timeline';
import { ArrowRightIcon, CheckCircle2Icon, HeartIcon, GraduationCapIcon, UtensilsCrossedIcon, GlobeIcon, UsersIcon } from 'lucide-react';

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-3xl font-extrabold text-white">{value}</p>
    <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{label}</p>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
    {children}
  </span>
);

const Milestone = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-start gap-3 text-sm text-white/70">
    <Icon className="w-4 h-4 text-pink-300 flex-shrink-0 mt-0.5" />
    <span>{text}</span>
  </div>
);

const timelineData = [
  {
    title: "2023",
    content: (
      <div className="space-y-5">
        <div>
          <h4 className="text-white text-xl font-bold mb-1">Kacey Staffing is Founded</h4>
          <p className="text-white/60 text-sm leading-relaxed max-w-lg">
            Starting with a clear mission — to bridge skilled international professionals with
            top US employers — Kacey Staffing opened its doors in Nairobi with a focus on
            healthcare placements.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80"
            alt="Healthcare beginnings"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
          <img
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80"
            alt="Team launch"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
        </div>

        <div className="space-y-2">
          <Milestone icon={CheckCircle2Icon} text="First 12 nurses placed in US hospital networks" />
          <Milestone icon={CheckCircle2Icon} text="Partnership signed with Triangle Healthcare Consulting Inc." />
          <Milestone icon={CheckCircle2Icon} text="J1 visa support framework established" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Tag><HeartIcon className="w-3 h-3" /> Healthcare Launch</Tag>
          <Tag>Nairobi HQ</Tag>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="space-y-5">
        <div>
          <h4 className="text-white text-xl font-bold mb-1">Teaching &amp; Hospitality Programs Launched</h4>
          <p className="text-white/60 text-sm leading-relaxed max-w-lg">
            Building on early success in healthcare, Kacey expanded into two new verticals —
            connecting educators with American K-12 schools through J1 visas, and placing
            hospitality professionals in top-tier hotels and resorts across the US.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80"
            alt="Teaching program"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80"
            alt="Hospitality program"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-sm py-2">
          <Stat value="60+" label="Placements" />
          <Stat value="3" label="Industries" />
          <Stat value="2" label="New Programs" />
        </div>

        <div className="space-y-2">
          <Milestone icon={GraduationCapIcon} text="25 teachers placed in Texas, Florida &amp; New York schools" />
          <Milestone icon={UtensilsCrossedIcon} text="Hospitality program launched with hotel partnerships in Florida" />
          <Milestone icon={CheckCircle2Icon} text="Aspen Experience partnership signed for hospitality programs" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Tag><GraduationCapIcon className="w-3 h-3" /> J1 Teaching</Tag>
          <Tag><UtensilsCrossedIcon className="w-3 h-3" /> Hospitality</Tag>
          <Tag>60+ Professionals Placed</Tag>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="space-y-5">
        <div>
          <h4 className="text-white text-xl font-bold mb-1">Global Expansion Milestones</h4>
          <p className="text-white/60 text-sm leading-relaxed max-w-lg">
            2025 marked a major milestone — Kacey expanded its global reach, establishing active placements in the USA, Malta, and Gulf Countries. The team grew, partner network doubled, and the first 100-placement milestone was achieved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80"
            alt="Global expansion"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80"
            alt="Team growth"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-sm py-2">
          <Stat value="150+" label="Healthcare Partners" />
          <Stat value="200+" label="Institutions" />
          <Stat value="100+" label="Professionals" />
        </div>

        <div className="space-y-2">
          <Milestone icon={GlobeIcon} text="Active placements established in USA, Malta, and Gulf Countries" />
          <Milestone icon={CheckCircle2Icon} text="StudyPage partnership added for education programs" />
          <Milestone icon={UsersIcon} text="Team expanded — dedicated recruiters per industry" />
        </div>

        <div className="flex flex-wrap gap-2">
          <Tag><GlobeIcon className="w-3 h-3" /> Global Expansion</Tag>
          <Tag>100+ Placed</Tag>
          <Tag>5 New Partners</Tag>
        </div>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div className="space-y-5">
        <div>
          <h4 className="text-white text-xl font-bold mb-1">300+ Venues &amp; Growing</h4>
          <p className="text-white/60 text-sm leading-relaxed max-w-lg">
            Today, Kacey Staffing is the premier international placement agency for healthcare,
            teaching, and hospitality professionals across East Africa. With 300+ hospitality
            venues, 150+ healthcare partners, and 200+ educational institutions, the journey
            continues — with you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-lg">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80"
            alt="Growing team"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&q=80"
            alt="Success stories"
            className="rounded-xl object-cover h-36 w-full shadow-[0_0_20px_rgba(0,0,0,0.4)]"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-sm py-2">
          <Stat value="300+" label="Hospitality Venues" />
          <Stat value="3" label="Countries" />
          <Stat value="500+" label="Lives Changed" />
        </div>

        <div className="space-y-2">
          <Milestone icon={HeartIcon} text="Still committed to every professional&apos;s journey, one placement at a time" />
          <Milestone icon={GlobeIcon} text="Active Placements in USA, Malta and Gulf Countries" />
          <Milestone icon={CheckCircle2Icon} text="New consultations portal launched for 1-on-1 guidance" />
        </div>


      </div>
    ),
  },
];

const KaceyTimeline: React.FC = () => {
  return (
    <section className="bg-[#2D0518] relative overflow-hidden">
      {/* Subtle radial glow in top-right */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#8B1A4A]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#8B1A4A]/10 blur-[100px]" />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-pink-300 tracking-widest uppercase mb-5 border border-white/10">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
            From Nairobi to the World
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            Since 2023, Kacey Staffing has been transforming careers across healthcare,
            education, and hospitality — one professional at a time. Here&apos;s how we got here.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <ScrollTimeline data={timelineData} />

      {/* Bottom CTA */}
      <div className="relative max-w-7xl mx-auto pb-20 px-4 md:px-10 text-center">
        <p className="text-white/40 text-sm mb-4">Ready to be part of the next chapter?</p>
        <Link
          to="/application"
          className="inline-flex items-center gap-2 bg-[#8B1A4A] hover:bg-[#a01f57] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-[0_4px_24px_rgba(139,26,74,0.5)] hover:shadow-[0_6px_32px_rgba(139,26,74,0.65)]"
        >
          Start Your Application
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default KaceyTimeline;
