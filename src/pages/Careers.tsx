import SEO from '@/components/SEO';
import OpenPositions from '@/components/OpenPositions';

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
            We connect skilled and unskilled professionals to international job opportunities across healthcare, teaching, hospitality, and a wide range of other industries.
          </p>
        </div>
      </div>

      {/* Dynamic Open Positions from Supabase */}
      <OpenPositions />

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