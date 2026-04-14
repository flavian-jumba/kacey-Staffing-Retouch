import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Heart, Award, Stethoscope, BookOpen, Star, Utensils, ThumbsUp } from 'lucide-react';

/* ─── animation variants ──────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.12 },
    }),
};

const fadeIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i = 0) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 + i * 0.15 },
    }),
};

const float = {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
};

const floatSlow = {
    y: [0, -6, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 },
};

const floatAlt = {
    y: [0, -10, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 },
};

/* ─── slides data ─────────────────────────────────────────── */
const slides = [
    {
        id: 'nurse',
        image: '/home/hero-nurse.png',
        alt: 'Healthcare Professional',
        glowColor: 'from-[#0cc0df]/20',
        cards: {
            topLeft: { icon: Users, color: 'text-[#0cc0df]', title: '500+', subtitle: 'Placed Professionals' },
            topRight: { icon: Award, color: 'text-amber-500', title: 'Trusted', subtitle: 'Licensed Agency' },
            bottomRight: { icon: Stethoscope, color: 'text-[#8B1A4A]', title: 'Jane M.', subtitle: 'CNA Specialist', badge: 'Available', link: '/programs' },
            bottomLeft: { icon: Heart, color: 'text-rose-500', title: '98%', subtitle: 'Success Rate' }
        }
    },
    {
        id: 'teacher',
        image: '/home/hero-teacher.png',
        alt: 'Education Professional',
        glowColor: 'from-blue-500/20',
        cards: {
            topLeft: { icon: Users, color: 'text-blue-500', title: '300+', subtitle: 'Educators Placed' },
            topRight: { icon: Award, color: 'text-amber-500', title: 'Certified', subtitle: 'Teaching Partners' },
            bottomRight: { icon: BookOpen, color: 'text-blue-600', title: 'Michael T.', subtitle: 'High School Teacher', badge: 'Available', link: '/teaching-opportunities' },
            bottomLeft: { icon: Star, color: 'text-amber-400', title: '95%', subtitle: 'Placement Rate' }
        }
    },
    {
        id: 'hospitality',
        image: '/home/hero-hospitality.png',
        alt: 'Hospitality Professional',
        glowColor: 'from-amber-500/30',
        cards: {
            topLeft: { icon: Users, color: 'text-amber-600', title: '1000+', subtitle: 'Hospitality Staff Placed' },
            topRight: { icon: Award, color: 'text-amber-500', title: 'Top Rated', subtitle: 'Staffing Agency' },
            bottomRight: { icon: Utensils, color: 'text-orange-600', title: 'Sarah L.', subtitle: 'Hotel Manager', badge: 'Available', link: '/hospitality-careers' },
            bottomLeft: { icon: ThumbsUp, color: 'text-emerald-500', title: '99%', subtitle: 'Client Satisfaction' }
        }
    }
];

/* ─── component ───────────────────────────────────────────── */
const HeroSection = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[currentSlideIndex];

    return (
        <section className="relative min-h-screen overflow-hidden font-sans">
            {/* ── Mesh Gradient Background ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(12, 192, 223, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 80% 20%, rgba(12, 192, 223, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse 60% 70% at 60% 90%, rgba(56, 189, 248, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 10% 30%, rgba(125, 211, 252, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 90% 80% at 50% 50%, rgba(224, 242, 254, 0.6) 0%, transparent 70%),
            linear-gradient(135deg, #e0f7fa 0%, #e8f5fd 25%, #f0f9ff 50%, #e0f2fe 75%, #dff6fd 100%)
          `,
                }}
            />

            {/* Subtle decorative circles */}
            <div className="absolute top-20 right-[30%] w-72 h-72 rounded-full bg-[#0cc0df]/8 blur-3xl" />
            <div className="absolute bottom-10 left-[10%] w-96 h-96 rounded-full bg-sky-200/20 blur-3xl" />

            {/* ── Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-16 min-h-screen flex items-center">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-4 w-full">

                    {/* ── LEFT: Text Content ── */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex-1 min-w-0 lg:pr-8 z-10"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp} custom={0} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8B1A4A]/10 rounded-full text-[#8B1A4A] text-sm font-semibold tracking-wide">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B1A4A] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B1A4A]" />
                                </span>
                                Trusted Global Staffing
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-gray-900 mb-5"
                        >
                            Matching Talent
                            <br />
                            to <span className="text-[#0cc0df]">Compassion</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mb-7"
                        >
                            Opening doors for talent to thrive in international careers across multiple industries. Your journey
                            starts here.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className="flex flex-col sm:flex-row gap-3 mb-10"
                        >
                            <Link
                                to="/programs"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                  bg-[#8B1A4A] hover:bg-[#a01f57] active:scale-[0.98]
                  text-white font-semibold text-sm sm:text-base rounded-full
                  shadow-[0_4px_24px_rgba(139,26,74,0.4)]
                  transition-all duration-200"
                            >
                                Book Appointment
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <button
                                onClick={() => {
                                    const el = document.getElementById('contact');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                  border border-gray-300 text-gray-700 font-semibold text-sm sm:text-base rounded-full
                  bg-white/60 hover:bg-white hover:border-gray-400 active:scale-[0.98]
                  backdrop-blur-sm transition-all duration-200"
                            >
                                Contact us
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </motion.div>

                        {/* Social Proof: Avatars + text */}
                        <motion.div variants={fadeUp} custom={4} className="flex items-center gap-4 mb-8">
                            <div className="flex -space-x-2.5">
                                {['bg-gradient-to-br from-pink-400 to-rose-500', 'bg-gradient-to-br from-sky-400 to-blue-500', 'bg-gradient-to-br from-amber-400 to-orange-500', 'bg-gradient-to-br from-emerald-400 to-green-500'].map((bg, i) => (
                                    <div
                                        key={i}
                                        className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md`}
                                    >
                                        {['MN', 'JO', 'AK', 'DM'][i]}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold text-sm">150k+ Lives Impacted</p>
                                <p className="text-gray-500 text-xs">Across Healthcare, Teaching & Hospitality</p>
                            </div>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div variants={fadeUp} custom={5} className="flex gap-10">
                            <div>
                                <p className="text-3xl font-extrabold text-gray-900 tracking-tight">15+</p>
                                <p className="text-gray-500 text-sm font-medium">Years of Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-extrabold text-gray-900 tracking-tight">3</p>
                                <p className="text-gray-500 text-sm font-medium">Career Programs</p>
                            </div>
                            <div>
                                <p className="text-3xl font-extrabold text-gray-900 tracking-tight">500+</p>
                                <p className="text-gray-500 text-sm font-medium">Professionals Placed</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Hero Image + Floating Cards ── */}
                    <div className="relative flex-1 flex justify-center items-center min-h-[400px] lg:min-h-[560px]">

                        {/* Hero Image with AnimatePresence */}
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={slide.id}
                                src={slide.image}
                                alt={slide.alt}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="relative z-10 w-[300px] sm:w-[360px] lg:w-[400px] xl:w-[440px] h-auto object-contain drop-shadow-2xl self-center -mt-[50px] max-h-[600px]"
                            />
                        </AnimatePresence>

                        {/* Decorative glow behind image */}
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-gradient-to-t ${slide.glowColor} to-transparent blur-3xl z-0 transition-colors duration-1000`} />

                        {/* ── Floating Card: Top-left ── */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            custom={0}
                            className="absolute top-8 left-0 lg:-left-8 z-20"
                        >
                            <motion.div
                                animate={float}
                                className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl rounded-none border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div key={slide.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-3">
                                        <slide.cards.topLeft.icon className={`h-6 w-6 ${slide.cards.topLeft.color}`} />
                                        <div>
                                            <p className="text-gray-900 font-bold text-sm">{slide.cards.topLeft.title}</p>
                                            <p className="text-gray-500 text-xs">{slide.cards.topLeft.subtitle}</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>

                        {/* ── Floating Card: Top-right ── */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            custom={1}
                            className="absolute top-4 right-0 lg:-right-4 z-20"
                        >
                            <motion.div
                                animate={floatSlow}
                                className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl rounded-none border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div key={slide.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-3">
                                        <slide.cards.topRight.icon className={`h-6 w-6 ${slide.cards.topRight.color}`} />
                                        <div>
                                            <p className="text-gray-900 font-bold text-sm">{slide.cards.topRight.title}</p>
                                            <p className="text-gray-500 text-xs">{slide.cards.topRight.subtitle}</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>

                        {/* ── Floating Card: Bottom-right ── */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            custom={2}
                            className="absolute bottom-24 right-0 lg:-right-6 z-20"
                        >
                            <motion.div
                                animate={floatAlt}
                                className="px-4 py-3.5 bg-white/85 backdrop-blur-xl rounded-none border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] min-w-[200px]"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div key={slide.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col w-full h-full">
                                        <div className="flex items-center gap-3 mb-2.5">
                                            <slide.cards.bottomRight.icon className={`h-6 w-6 ${slide.cards.bottomRight.color}`} />
                                            <div>
                                                <p className="text-gray-900 font-bold text-sm">{slide.cards.bottomRight.title}</p>
                                                <p className="text-gray-500 text-xs">{slide.cards.bottomRight.subtitle}</p>
                                            </div>
                                            <span className="ml-auto text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">{slide.cards.bottomRight.badge}</span>
                                        </div>
                                        <Link
                                            to={slide.cards.bottomRight.link}
                                            className="block w-full text-center py-2 bg-[#8B1A4A] hover:bg-[#a01f57] text-white text-xs font-semibold rounded-none transition-colors shadow-sm"
                                        >
                                            Apply Now
                                        </Link>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>

                        {/* ── Floating Card: Bottom-left ── */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            custom={3}
                            className="absolute bottom-24 left-0 lg:-left-6 z-20"
                        >
                            <motion.div
                                animate={floatSlow}
                                className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl rounded-none border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div key={slide.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center gap-3">
                                        <slide.cards.bottomLeft.icon className={`h-6 w-6 ${slide.cards.bottomLeft.color}`} />
                                        <div>
                                            <p className="text-gray-900 font-bold text-sm">{slide.cards.bottomLeft.title}</p>
                                            <p className="text-gray-500 text-xs">{slide.cards.bottomLeft.subtitle}</p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
