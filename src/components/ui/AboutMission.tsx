import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  GraduationCap,
  FileCheck,
  UtensilsCrossed,
  Globe,
  Users,
  Award,
  Calendar,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  BadgeCheck,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  type Variants,
} from "framer-motion";

/* ── brand tokens ───────────────────────────────────────── */
const BURGUNDY = "#8B1A4A";
const NAVY = "#0f172a";
const SKY = "#38bdf8";

/* ── service items ──────────────────────────────────────── */
const services = [
  {
    icon: <Heart className="w-5 h-5" />,
    badge: <Sparkles className="w-3.5 h-3.5 absolute -top-1 -right-1 text-sky-400" />,
    title: "Healthcare Staffing",
    description:
      "We connect qualified nurses, CNAs, and allied health professionals with leading U.S. hospitals and clinics, ensuring a seamless transition and career growth.",
    position: "left",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    badge: <CheckCircle className="w-3.5 h-3.5 absolute -top-1 -right-1 text-sky-400" />,
    title: "Teaching Placement",
    description:
      "We match passionate educators with K-12 schools and institutions across America, facilitating J-1 cultural exchange and long-term teaching careers.",
    position: "left",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    badge: <Star className="w-3.5 h-3.5 absolute -top-1 -right-1 text-sky-400" />,
    title: "Visa & Compliance",
    description:
      "End-to-end visa guidance, document preparation, and legal compliance support so candidates focus on their careers — not the paperwork.",
    position: "left",
  },
  {
    icon: <UtensilsCrossed className="w-5 h-5" />,
    badge: <Sparkles className="w-3.5 h-3.5 absolute -top-1 -right-1 text-sky-400" />,
    title: "Hospitality Careers",
    description:
      "From luxury hotels to world-class resorts, we place talented professionals in roles that reward dedication and open doors to global growth.",
    position: "right",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    badge: <CheckCircle className="w-3.5 h-3.5 absolute -top-1 -right-1 text-sky-400" />,
    title: "Cultural Exchange",
    description:
      "We champion the J-1 exchange program, helping professionals gain international experience while building bridges between cultures and communities.",
    position: "right",
  },
  {
    icon: <Users className="w-5 h-5" />,
    badge: <Star className="w-3.5 h-3.5 absolute -top-1 -right-1 text-sky-400" />,
    title: "Ongoing Mentorship",
    description:
      "Our commitment doesn't end at placement. We provide continuous mentorship and support throughout every candidate's professional journey",
    position: "right",
  },
];

const stats = [
  { icon: <Award className="w-6 h-6" />, value: 500, label: "Professionals Placed", suffix: "+" },
  { icon: <Users className="w-6 h-6" />, value: 98, label: "Success Rate", suffix: "%" },
  { icon: <Calendar className="w-6 h-6" />, value: 30, label: "Partner Institutions", suffix: "+" },
  { icon: <TrendingUp className="w-6 h-6" />, value: 12, label: "Countries Served", suffix: "+" },
];

/* ── animation variants ──────────────────────────────────── */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/* ── service card ─────────────────────────────────────────── */
interface ServiceItemProps {
  icon: React.ReactNode;
  badge?: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  direction: "left" | "right";
}
function ServiceItem({ icon, badge, title, description, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={item}
      transition={{ delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-2"
        initial={{ x: direction === "left" ? -18 : 18, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: delay + 0.15 }}
      >
        <motion.div
          className="relative text-white p-2.5 rounded-xl transition-colors duration-300 shrink-0"
          style={{ background: `${BURGUNDY}22` }}
          whileHover={{ rotate: [0, -8, 8, -4, 0], transition: { duration: 0.45 } }}
        >
          <span style={{ color: BURGUNDY }}>{icon}</span>
          {badge}
        </motion.div>
        <h3
          className="text-base font-semibold transition-colors duration-300"
          style={{ color: NAVY }}
        >
          {title}
        </h3>
      </motion.div>
      <p className="text-sm text-slate-500 leading-relaxed pl-11">{description}</p>
      <div className="mt-2 pl-11 flex items-center text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ color: BURGUNDY }}>
        <span className="flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
      </div>
    </motion.div>
  );
}

/* ── animated stat counter ───────────────────────────────── */
interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}
function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const [animated, setAnimated] = useState(false);
  const spring = useSpring(0, { stiffness: 55, damping: 12 });
  const display = useTransform(spring, (v) => Math.floor(v));

  useEffect(() => {
    if (inView && !animated) { spring.set(value); setAnimated(true); }
    else if (!inView && animated) { spring.set(0); setAnimated(false); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.div
      className="bg-white p-5 rounded-2xl flex flex-col items-center text-center group
                 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
      variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay } } }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300"
        style={{ background: `${BURGUNDY}15`, color: BURGUNDY }}
        whileHover={{ rotate: 360, transition: { duration: 0.7 } }}
      >
        {icon}
      </motion.div>
      <div ref={ref} className="text-2xl font-black flex items-baseline gap-0.5" style={{ color: NAVY }}>
        <motion.span>{display}</motion.span>
        <span style={{ color: BURGUNDY }}>{suffix}</span>
      </div>
      <p className="text-slate-500 text-xs mt-1 font-medium">{label}</p>
      <motion.div
        className="w-8 h-0.5 mt-2.5 rounded-full group-hover:w-14 transition-all duration-300"
        style={{ background: BURGUNDY }}
      />
    </motion.div>
  );
}

/* ── main section ────────────────────────────────────────── */
export default function AboutMission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.08 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.25 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white text-slate-800 overflow-hidden relative"
    >
      {/* Background blobs */}
      <motion.div className="absolute top-16 left-8 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: `${BURGUNDY}08`, y: y1 }} />
      <motion.div className="absolute bottom-16 right-8 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: `${SKY}10`, y: y2 }} />
      <motion.div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full pointer-events-none"
        style={{ background: `${BURGUNDY}40` }}
        animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full pointer-events-none"
        style={{ background: `${SKY}50` }}
        animate={{ y: [0, 18, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
      >
        {/* ── Header ── */}
        <motion.div className="flex flex-col items-center mb-5" variants={item}>
          <motion.span
            className="font-semibold mb-2 flex items-center gap-2 text-sm"
            style={{ color: BURGUNDY }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <Zap className="w-4 h-4" /> OUR STORY & MISSION
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-3 text-center" style={{ color: NAVY }}>
            About Kacey Staffing
          </h2>
          <motion.div
            className="h-1 rounded-full"
            style={{ background: BURGUNDY }}
            initial={{ width: 0 }}
            animate={{ width: 88 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          />
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-14 text-slate-500 leading-relaxed" variants={item}>
          We connect skilled and unskilled professionals to international job opportunities across healthcare, teaching, hospitality, and a wide range of other industries.

Our mission is to empower candidates by providing access to global career pathways, supporting their professional growth, and helping them achieve long-term success abroad.

We are committed to delivering reliable, ethical, and efficient recruitment services that open doors to life-changing opportunities worldwide. <span className="font-medium" style={{ color: BURGUNDY }}>Talent knows no borders.</span>
        </motion.p>

        {/* ── 3-col grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="space-y-10">
            {services.filter(s => s.position === "left").map((s, i) => (
              <ServiceItem key={i} icon={s.icon} badge={s.badge} title={s.title}
                description={s.description} delay={i * 0.15} direction="left" />
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center items-center order-first md:order-none mb-6 md:mb-0">
            <motion.div className="relative w-full max-w-[260px]" variants={item}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="/home/healthcare.jpg"
                  alt="Kacey Staffing professionals"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                />
                {/* Overlay CTA */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                             flex items-end justify-center p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.85 }}
                >
                  <Link to="/programs">
                    <motion.div
                      className="bg-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
                      style={{ color: NAVY }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Our Programs <ArrowRight className="w-3.5 h-3.5" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Decorative border frame */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-4 -m-3 z-[-1]"
                style={{ borderColor: `${BURGUNDY}50` }}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.55 }}
              />
              {/* Floating circles */}
              <motion.div className="absolute -top-4 -right-6 w-14 h-14 rounded-full pointer-events-none"
                style={{ background: `${BURGUNDY}15`, y: y1 }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.85 }} />
              <motion.div className="absolute -bottom-5 -left-8 w-16 h-16 rounded-full pointer-events-none"
                style={{ background: `${SKY}20`, y: y2 }}
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.05 }} />

              {/* Verified badge */}
              <motion.div
                className="absolute -top-3 -left-3 bg-white rounded-xl shadow-md px-2.5 py-1.5
                           flex items-center gap-1.5 text-xs font-semibold border border-slate-100"
                style={{ color: BURGUNDY }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <BadgeCheck className="w-3.5 h-3.5" /> Verified Agency
              </motion.div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {services.filter(s => s.position === "right").map((s, i) => (
              <ServiceItem key={i} icon={s.icon} badge={s.badge} title={s.title}
                description={s.description} delay={i * 0.15} direction="right" />
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={container}
        >
          {stats.map((s, i) => (
            <StatCounter key={i} icon={s.icon} value={s.value} label={s.label} suffix={s.suffix} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* ── CTA banner ── */}
        <motion.div
          className="mt-12 rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{ background: NAVY }}
          initial={{ opacity: 0, y: 28 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-1">Ready to transform your career?</h3>
            <p className="text-white/60 text-sm">Join thousands of professionals who made it with Kacey Staffing.</p>
          </div>
          <Link to="/application">
            <motion.div
              className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-xl cursor-pointer"
              style={{ background: BURGUNDY }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Application <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
