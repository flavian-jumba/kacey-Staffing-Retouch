import { Gallery4 } from '@/components/ui/gallery4';
import SEO from '@/components/SEO';

const careerItems = [
  {
    id: 'healthcare',
    title: 'Healthcare Staffing',
    description:
      'Join top-tier U.S. hospitals, clinics, and medical facilities as a nurse, therapist, or healthcare specialist.',
    href: '/healthcare-staffing',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1080&q=80&fit=max&fm=jpg',
  },
  {
    id: 'teaching',
    title: 'Teaching Opportunities',
    description:
      'Shape young minds in American K-12 schools and universities. Full J-1 visa sponsorship available.',
    href: '/teaching-opportunities',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1080&q=80&fit=max&fm=jpg',
  },
  {
    id: 'hospitality',
    title: 'Hospitality Careers',
    description:
      'Find your place in world-class hotels, resorts, and restaurants across the United States.',
    href: '/hospitality-careers',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1080&q=80&fit=max&fm=jpg',
  },
  {
    id: 'j1-program',
    title: 'J-1 Exchange Program',
    description:
      'Experience American culture while building your career through our fully supported J-1 visa exchange program.',
    href: '/programs',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1080&q=80&fit=max&fm=jpg',
  },
  {
    id: 'apply',
    title: 'Start Your Application',
    description:
      'Ready to take the leap? Submit your application today and our team will reach out within 1 business day.',
    href: '/programs',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1080&q=80&fit=max&fm=jpg',
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Careers - Kacey Staffing Agency"
        description="Explore career opportunities in healthcare, teaching, and hospitality with Kacey Staffing. J-1 visa sponsorship available."
      />

      {/* Hero Banner */}
      <div
        className="relative py-32 flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2D0518 0%, #8B1A4A 60%, #2D0518 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=60')] bg-cover bg-center opacity-10" />
        <div className="relative text-center px-4">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-pink-300 tracking-widest uppercase mb-5 border border-white/10">
            Join Our Network
          </span>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-5 leading-tight">
            Find Your Next<br />Career Move
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We connect international professionals with life-changing opportunities
            in the United States across healthcare, education, and hospitality.
          </p>
        </div>
      </div>

      {/* Gallery carousel */}
      <div className="bg-white">
        <Gallery4
          title="Explore Opportunities"
          description="Browse our career pathways and find the opportunity that matches your skills and ambitions."
          items={careerItems}
        />
      </div>

      {/* CTA strip */}
      <div
        className="py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #2D0518 0%, #8B1A4A 100%)' }}
      >
        <h2 className="text-3xl font-light text-white mb-3">Ready to get started?</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Submit your application today and hear back within 1 business day.
        </p>
        <a
          href="/programs"
          className="inline-block bg-white text-[#8B1A4A] font-semibold px-10 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-xl"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Careers;