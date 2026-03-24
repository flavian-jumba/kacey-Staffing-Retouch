import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  ArrowUpRight,
  Stethoscope,
  GraduationCap,
  UtensilsCrossed,
  CheckCircle2,
  Quote,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */
const CARDS = [
  {
    id: 'healthcare',
    tag: 'Healthcare',
    TagIcon: Stethoscope,
    heading: 'Healthcare Opportunities',
    subheading: 'Leading medical facilities across the U.S.',
    image: '/home/healthcare.jpg',
    stats: [
      { value: '98%', label: 'Success Rate', Icon: TrendingUp },
      { value: '24/7', label: 'Support', Icon: Clock },
    ],
    quote:
      "Kacey Staffing made my transition seamless. I'm now working at a top-tier U.S. facility.",
    authorName: 'James Otini',
    authorRole: 'Medical Professional',
    authorInitials: 'JO',
    ctaHref: '/healthcare-staffing',
    accentFrom: 'from-sky-400',
    accentTo: 'to-cyan-300',
  },
  {
    id: 'education',
    tag: 'Education',
    TagIcon: GraduationCap,
    heading: 'Teaching Opportunities',
    subheading: 'Shape young minds in leading U.S. schools.',
    image: '/home/j1 Teaching.jpg',
    stats: [
      { value: '50+', label: 'Partner Schools', Icon: TrendingUp },
      { value: 'J-1', label: 'Visa Support', Icon: Sparkles },
    ],
    quote:
      "I never imagined teaching abroad was this accessible — Kacey Staffing opened every door.",
    authorName: 'Aisha Kariuki',
    authorRole: 'High-School Teacher',
    authorInitials: 'AK',
    ctaHref: '/teaching-opportunities',
    accentFrom: 'from-emerald-400',
    accentTo: 'to-teal-300',
  },
  {
    id: 'hospitality',
    tag: 'Hospitality',
    TagIcon: UtensilsCrossed,
    heading: 'Hospitality Careers',
    subheading: 'World-class service roles in top-tier resorts.',
    image: '/home/hospitality.png',
    stats: [
      { value: '30+', label: 'Partner Resorts', Icon: TrendingUp },
      { value: '60d', label: 'Avg. Placement', Icon: Clock },
    ],
    quote:
      "From application to arrival — the process was smooth and incredibly professional.",
    authorName: 'Maria Ngugi',
    authorRole: 'Hospitality Professional',
    authorInitials: 'MN',
    ctaHref: '/hospitality-careers',
    accentFrom: 'from-violet-400',
    accentTo: 'to-purple-300',
  },
];

type CardData = (typeof CARDS)[0];

/* ─────────────────────────────────────────────────────────────────
   SINGLE GLASS CARD
───────────────────────────────────────────────────────────────── */
const GlassCard = ({ card }: { card: CardData }) => {
  const [imgError, setImgError] = useState(false);
  const { TagIcon } = card;

  return (
    /*
     * Gradient-border wrapper:
     * A 1 px gradient layer: white/25 top-left → transparent bottom-right
     * simulates a real-world light source grazing the glass edge.
     */
    <article
      className="group relative rounded-[2.5rem] p-px
                 bg-gradient-to-br from-white/20 via-white/8 to-transparent
                 shadow-[0_32px_72px_rgba(0,0,0,0.55)]
                 transition-transform duration-500 ease-out
                 hover:-translate-y-2 cursor-pointer"
    >
      {/* ── Inner glass body ── */}
      <div
        className="relative flex flex-col rounded-[calc(2.5rem_-_1px)] overflow-hidden
                   bg-[#3D0B25]/85 backdrop-blur-xl border border-white/[0.06]"
      >
        {/* ── Ambient glow blobs (non-interactive) ── */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64
                        rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 w-64 h-64
                        rounded-full bg-rose-600/8 blur-3xl" />

        {/* ══════ HEADER ══════ */}
        <div className="px-6 pt-7 pb-0 flex items-start justify-between gap-3">
          <div>
            {/* Industry tag pill */}
            <div className="inline-flex items-center gap-1.5 mb-3
                            bg-white/8 border border-white/12 rounded-full
                            px-3 py-1 backdrop-blur-sm">
              <TagIcon className="h-3.5 w-3.5 text-sky-400" />
              <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-widest">
                {card.tag}
              </span>
            </div>
            {/* Gradient headline */}
            <h3
              className={`text-[1.45rem] font-black leading-snug tracking-tight
                          bg-gradient-to-r ${card.accentFrom} ${card.accentTo}
                          bg-clip-text text-transparent`}
            >
              {card.heading}
            </h3>
            <p className="text-white/45 text-[13px] mt-1 leading-snug">
              {card.subheading}
            </p>
          </div>
        </div>

        {/* ══════ FEATURED IMAGE ══════ */}
        <div className="mx-5 mt-5 relative group/img rounded-2xl overflow-hidden bg-black/40">
          {imgError ? (
            <div className="w-full aspect-video flex items-center justify-center bg-white/5">
              <TagIcon className="h-12 w-12 text-white/20" />
            </div>
          ) : (
            <img
              src={card.image}
              alt={card.heading}
              onError={() => setImgError(true)}
              className="w-full aspect-video object-cover opacity-75
                         group-hover/img:opacity-90 group-hover/img:scale-[1.04]
                         transition-all duration-700"
            />
          )}

          {/* Bottom gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D0B25]/70 via-transparent to-transparent" />

          {/* Top-right: floating link icon */}
          <Link
            to={card.ctaHref}
            className="absolute top-3 right-3 p-2 rounded-xl
                       bg-white/10 border border-white/15 backdrop-blur-sm
                       text-white/70 hover:text-white hover:scale-110 hover:bg-white/20
                       transition-all duration-200"
            aria-label={`Open ${card.tag} page`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          {/* Bottom-left: label pill */}
          <span className="absolute bottom-3 left-3
                           text-[11px] font-medium text-white/80
                           bg-black/40 backdrop-blur-sm border border-white/10
                           px-2.5 py-1 rounded-full">
            Featured Opportunity
          </span>
        </div>

        {/* ══════ STATS GRID ══════ */}
        <div className="mx-5 mt-4 grid grid-cols-2 gap-3">
          {card.stats.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-2xl
                         bg-white/6 border border-white/10 px-4 py-3.5"
            >
              {/* Inner sky glow */}
              <div className="absolute inset-0 rounded-2xl
                              bg-gradient-to-br from-sky-500/12 to-transparent" />
              <div className="relative flex items-center gap-1.5 mb-0.5">
                <span
                  className="text-[1.65rem] font-black text-sky-400 leading-none
                             drop-shadow-[0_0_12px_rgba(56,189,248,0.65)]
                             [animation:pulse_3s_ease-in-out_infinite]"
                >
                  {value}
                </span>
                <Icon className="h-4 w-4 text-sky-500/80 mt-0.5 shrink-0" />
              </div>
              <p className="relative text-[10.5px] font-semibold text-white/40
                            uppercase tracking-widest leading-none">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* ══════ TESTIMONIAL ══════ */}
        <div className="mx-5 mt-4 rounded-2xl bg-white/5 border border-white/8 px-5 py-4">
          <Quote className="h-4 w-4 text-sky-400/50 mb-2" />
          <p className="text-white/65 text-[13.5px] font-light italic leading-[1.65]">
            &ldquo;{card.quote}&rdquo;
          </p>

          {/* Author row */}
          <div className="mt-4 flex items-center gap-3">
            {/* Avatar */}
            <div
              className="w-10 h-10 rounded-full shrink-0 ring-2 ring-white/10
                         bg-gradient-to-br from-sky-400 to-sky-700
                         flex items-center justify-center
                         text-white text-xs font-bold"
            >
              {card.authorInitials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold leading-none truncate">
                {card.authorName}
              </p>
              <p className="text-white/40 text-[11px] mt-0.5 truncate">
                {card.authorRole}
              </p>
            </div>
            {/* Verified badge */}
            <div className="flex items-center gap-1 text-sky-400/80">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              <span className="text-[11px] font-medium">Verified</span>
            </div>
          </div>
        </div>

        {/* ══════ CTA BUTTON ══════ */}
        <div className="px-5 py-5">
          <Link
            to={card.ctaHref}
            className="group/btn flex items-center justify-between w-full
                       bg-gradient-to-r from-[#8B1A4A] to-[#6b1238]
                       hover:from-[#a01f57] hover:to-[#7d1643]
                       active:scale-[0.97]
                       text-white font-semibold text-sm px-5 py-3.5 rounded-2xl
                       shadow-[0_6px_24px_rgba(139,26,74,0.55)]
                       transition-all duration-200"
          >
            <span>Explore {card.tag} Roles</span>
            <ArrowUpRight
              className="h-4 w-4
                         group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5
                         transition-transform duration-150"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

/* ─────────────────────────────────────────────────────────────────
   SECTION WRAPPER
───────────────────────────────────────────────────────────────── */
const FeaturedCard = () => (
  <section className="relative py-24 bg-[#0d0812] overflow-hidden">
    {/* Full-section ambient blobs */}
    <div className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[500px]
                    rounded-full bg-sky-900/20 blur-[140px]" />
    <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px]
                    rounded-full bg-rose-900/15 blur-[140px]" />
    <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 w-80 h-80
                    rounded-full bg-violet-900/12 blur-[120px]" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── Section header ── */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-5
                        bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full
                             rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
          </span>
          <span className="text-sky-400 text-[11px] font-semibold tracking-[0.15em] uppercase">
            Featured Opportunities
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
          Your Next Chapter{' '}
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300
                           bg-clip-text text-transparent">
            Starts Here
          </span>
        </h2>
        <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
          Handpicked roles in healthcare, education&nbsp;&amp;&nbsp;hospitality —{' '}
          matched to talent like yours.
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {CARDS.map((card) => (
          <GlassCard key={card.id} card={card} />
        ))}
      </div>

    </div>
  </section>
);

export default FeaturedCard;
