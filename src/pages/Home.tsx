import React, { useState } from 'react';
import { useScroll, useTransform, useMotionTemplate, motion } from 'framer-motion';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import AboutMission from '../components/ui/AboutMission';
import Reviews from '../components/Reviews';
import Partners from '../components/Partners';
import KaceyTimeline from '../components/KaceyTimeline';
import CookieConsent from '../components/CookieConsent';
import { ScrollAnimation } from '../components/ui/scroll-animation';
import { ContactCard } from '../components/ui/contact-card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon, CheckCircle2Icon } from 'lucide-react';

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const { scrollY } = useScroll();
  const heroBlur = useTransform(scrollY, [200, 700], [0, 8]);
  const heroOpacity = useTransform(scrollY, [200, 700], [1, 0.5]);
  const blurFilter = useMotionTemplate`blur(${heroBlur}px)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd wire in your form handler / Supabase call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <SEO
        title="Kacey Staffing Agency - International Career Opportunities in Healthcare, Teaching & Hospitality"
        description="Transform your career globally with Kacey Staffing. We connect international professionals with U.S. employers in healthcare, teaching, and hospitality. Expert J1 visa support and career placement services."
        keywords="international staffing agency, healthcare jobs USA, teaching opportunities America, hospitality careers, J1 visa sponsorship, work visa USA, international recruitment, healthcare professionals, teachers abroad, hospitality workers, career placement services"
        url="https://kaceystaffing.com/"
      />

      {/* Hero: sticky so subsequent sections slide over it on scroll */}
      <motion.section id="home" className="sticky top-0 z-0 min-h-screen overflow-hidden" style={{ filter: blurFilter, opacity: heroOpacity }}>
        <HeroSection />
      </motion.section>

      {/* All page content — slides over the fixed hero as you scroll */}
      <div className="relative z-10">

        {/* About Us — first section covers hero with a white-backed panel */}
        <AboutMission />

        {/* Company History Timeline */}
        <KaceyTimeline />

        {/* Reviews Section */}
        <ScrollAnimation direction="fade" delay={0.2}>
          <Reviews />
        </ScrollAnimation>

        {/* Partners Section */}
        <ScrollAnimation direction="fade" delay={0.3}>
          <Partners />
        </ScrollAnimation>

        {/* Contact Section */}
        <section id="contact" className="py-14 bg-[#2D0518]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-white/10 text-pink-300 tracking-wide uppercase mb-4 border border-white/10">
                  Contact
                </span>
                <h2 className="text-4xl font-light text-white mb-3">Get Started Today</h2>
                <p className="text-white/50 max-w-2xl mx-auto">
                  Ready to transform your career? Reach out and our team will respond within 1 business day.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <ContactCard
                title="Let&apos;s Work Together"
                description="Whether you&apos;re a professional ready for an international opportunity or an employer looking for top talent, we&apos;re here to help you every step of the way."
                contactInfo={[
                  { icon: PhoneIcon, label: 'Phone', value: '+254 793 934455' },
                  { icon: MailIcon, label: 'Email', value: 'info@kaceystaffing.com' },
                  { icon: MapPinIcon, label: 'Address', value: 'Westlands, Nairobi, KE', className: 'col-span-2' },
                ]}
                className="rounded-2xl overflow-hidden"
              >
                {submitted ? (
                  <div className="w-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <CheckCircle2Icon className="h-14 w-14 text-[#8B1A4A]" />
                    <p className="text-xl font-bold text-gray-900">Message Sent!</p>
                    <p className="text-gray-500 text-sm">We&apos;ll get back to you within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your goals or how we can help..."
                        className="min-h-[100px] resize-none"
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#8B1A4A] hover:bg-[#a01f57] text-white shadow-[0_4px_20px_rgba(139,26,74,0.35)] hover:shadow-[0_6px_28px_rgba(139,26,74,0.45)] transition-all"
                    >
                      <SendIcon className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </ContactCard>
            </ScrollAnimation>
          </div>
        </section>

        {/* Cookie Consent */}
        <CookieConsent />

      </div>{/* end relative z-10 */}
    </div>
  );
};

export default Home;
