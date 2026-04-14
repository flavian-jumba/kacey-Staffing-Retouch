import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { MapPin, Clock, DollarSign, ArrowRight, Briefcase, Search, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

type Career = {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary_range: string | null;
  cover_image_url: string | null;
  is_published: boolean;
  published_at: string | null;
  application_url: string | null;
  created_at: string;
};

export default function OpenPositions() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchCareers();

    // Real-time subscription
    const channel = supabase
      .channel('careers-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'careers' },
        () => {
          fetchCareers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchCareers = async () => {
    try {
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setCareers(data || []);
    } catch (err) {
      console.error('Failed to fetch careers:', err);
    } finally {
      setLoading(false);
    }
  };

  const departments = ['All', ...Array.from(new Set(careers.map((c) => c.department)))];

  const filteredCareers =
    selectedDept === 'All'
      ? careers
      : careers.filter((c) => c.department === selectedDept);

  // Loading state with premium skeleton
  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-4 border-[#8B1A4A]/20 border-t-[#8B1A4A] animate-spin" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Empty state with premium design
  if (careers.length === 0) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            No Open Positions
          </h2>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed">
            We're always looking for talented professionals. Check back soon or submit your application for future opportunities.
          </p>
          <Link
            to="/programs"
            className="inline-flex items-center gap-3 bg-gray-900 text-white font-medium px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Submit Your Application
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#8B1A4A]/5 text-[#8B1A4A] mb-6 border border-[#8B1A4A]/10">
            <Briefcase className="w-4 h-4" />
            Open Positions
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Find Your Perfect Role
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Discover exciting career opportunities and take the next step in your international journey.
          </p>
        </div>

        {/* Premium Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedDept === dept
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/25'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80 hover:border-gray-300'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Premium Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                {career.cover_image_url ? (
                  <img
                    src={career.cover_image_url}
                    alt={career.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Briefcase className="w-12 h-12 text-gray-300" />
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-[#8B1A4A] shadow-lg">
                    {career.department}
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-blue-600 shadow-lg">
                    {career.employment_type}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight line-clamp-2 group-hover:text-[#8B1A4A] transition-colors">
                  {career.title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {career.location}
                  </span>
                  {career.salary_range && (
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      {career.salary_range}
                    </span>
                  )}
                </div>

                {/* Description Preview */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {career.description}
                </p>

                {/* Posted Date */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5">
                  <Clock className="w-3.5 h-3.5" />
                  Posted {new Date(career.published_at || career.created_at).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>

                {/* Apply Now Button */}
                <div className="pt-4 border-t border-gray-100">
                  {career.application_url ? (
                    <a
                      href={career.application_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#8B1A4A] hover:bg-[#6d1339] transition-all duration-300 shadow-lg shadow-[#8B1A4A]/25 hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      to="/programs"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#8B1A4A] hover:bg-[#6d1339] transition-all duration-300 shadow-lg shadow-[#8B1A4A]/25 hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                {/* View Details Toggle */}
                <button
                  onClick={() => setExpandedId(expandedId === career.id ? null : career.id)}
                  className="w-full mt-3 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {expandedId === career.id ? 'Hide Details' : 'View Full Details'}
                  {expandedId === career.id ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Expanded Details Panel */}
              {expandedId === career.id && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                  {/* Full Description */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Description</h4>
                    <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                      {career.description.split('\n').map((p, i) =>
                        p.trim() ? <p key={i}>{p}</p> : null
                      )}
                    </div>
                  </div>

                  {/* Requirements */}
                  {career.requirements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Requirements</h4>
                      <ul className="space-y-2">
                        {career.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B1A4A] mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  {career.benefits.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Benefits</h4>
                      <ul className="space-y-2">
                        {career.benefits.map((ben, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty Filter State */}
        {filteredCareers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">
              No positions in <span className="font-medium text-gray-700">{selectedDept}</span> right now.
            </p>
            <button
              onClick={() => setSelectedDept('All')}
              className="mt-4 text-[#8B1A4A] font-medium hover:underline"
            >
              View all positions
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
