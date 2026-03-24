import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Users, Briefcase, Home, Globe, Euro } from 'lucide-react';
import { cn } from '@/lib/utils';
import { JobInfo } from '@/lib/jobsData';

interface JobModalProps {
  job: JobInfo;
  onClose: () => void;
  open: boolean;
}

const JobModal = ({ job, onClose, open }: JobModalProps) => {
  // Helper: Render Australia visa details if job is for Australia
  const renderAustraliaVisaDetails = () => {
    if (job.location !== 'Australia') return null;
    
    if (job.id === 'AUS-1') {
      return (
        <section className="mb-8">
          <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50 border-l-4 border-blue-400 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              🇦🇺 482 Visa Culinary Skilled Program
            </h3>
            <div className="mb-6">
              <ul className="list-disc ml-6 text-gray-700 text-[15px] mb-2">
                <li><b>Duration:</b> Up to 4 years</li>
                <li><b>Processing time:</b> ~4 months</li>
                <li><b>Minimum salary:</b> 73,000 AUD/year</li>
                <li><b>Requirements:</b></li>
                <ul className="list-disc ml-8">
                  <li>Leadership positions (chef de partie+) in luxury hotels/restaurants</li>
                  <li>1-2 year Culinary Arts diploma + 1-2 years chef experience, OR</li>
                  <li>3+ years full-time paid chef experience (higher level)</li>
                  <li>IELTS</li>
                  <li>More flexible payment options</li>
                </ul>
              </ul>
            </div>
            {/* Candidate Eligibility */}
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Candidate Eligibility & Screening</h4>
              <ul className="list-disc ml-6 text-gray-700 text-[15px]">
                <li>Higher-level culinary professionals</li>
                <li>Work experience must be recent, full-time, and in a relevant setting</li>
                <li>Diploma/degree should be from well-established, accredited institutions</li>
              </ul>
            </div>
          </div>
        </section>
      );
    } else if (job.id === 'AUS-2') {
      return (
        <section className="mb-8">
          <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50 border-l-4 border-orange-400 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              🇦🇺 407 Visa Training Program
            </h3>
            <div className="mb-6">
              <ul className="list-disc ml-6 text-gray-700 text-[15px] mb-2">
                <li><b>Duration:</b> Up to 24 months</li>
                <li><b>Processing time:</b> Up to 11 months</li>
                <li><b>Salary:</b> 42,000-50,000 AUD/year</li>
                <li><b>Requirements:</b></li>
                <ul className="list-disc ml-8">
                  <li>1-2 year diploma in hospitality from accredited institution</li>
                  <li>12+ months full-time work experience in last 2 years</li>
                  <li>IELTS 5 or PTE 36 (required later in process)</li>
                  <li>Positions: F&B, rooms division, some culinary arts</li>
                  <li>Program fee: 7,500 AUD total, paid in installments</li>
                </ul>
              </ul>
            </div>
            {/* Candidate Eligibility */}
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-orange-900 mb-2">Candidate Eligibility & Screening</h4>
              <ul className="list-disc ml-6 text-gray-700 text-[15px]">
                <li>Focus on recent graduates with 1-1.5 years of experience</li>
                <li>Work experience must be recent, full-time, and in a relevant setting</li>
                <li>Diploma/degree should be from well-established, accredited institutions</li>
              </ul>
            </div>
          </div>
        </section>
      );
    }
    
    return null;
  };
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const initialFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      initialFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-[4px] transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            ref={modalRef}
            className={cn(
              "relative w-full max-w-[900px] max-h-[85vh] overflow-y-auto",
              "bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
              "transform transition-all duration-300",
              "p-12 md:p-12 sm:p-8",
              "animate-in fade-in zoom-in-95"
            )}
          >
            {/* Close button */}
            <button
              ref={initialFocusRef}
              onClick={onClose}
              className={cn(
                "absolute right-4 top-4",
                "w-10 h-10 rounded-lg",
                "flex items-center justify-center",
                "text-[#6B7280] hover:text-[#1F2937]",
                "hover:bg-[#F3F4F6]",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-[rgb(37,99,235)] focus:ring-offset-2"
              )}
              aria-label="Close job details"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2
                id="modal-title"
                className="text-[32px] font-bold text-[#1E3A8A] mb-4 leading-tight"
              >
                {job.title}
              </h2>
              <div className="h-[2px] bg-[#E5E7EB] w-full" />
            </div>

            {/* Quick Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#F9FAFB] p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[rgb(37,99,235)]" />
                <div>
                  <p className="text-sm text-[#6B7280]">Location</p>
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-[rgb(37,99,235)]" />
                <div>
                  <p className="text-sm text-[#6B7280]">Positions</p>
                  <p className="font-medium">{job.positions}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Euro size={20} className="text-[rgb(37,99,235)]" />
                <div>
                  <p className="text-sm text-[#6B7280]">Salary</p>
                  <p className="font-medium">{job.salary}</p>
                </div>
              </div>
              {job.type && (
                <div className="flex items-center gap-3">
                  <Briefcase size={20} className="text-[rgb(37,99,235)]" />
                  <div>
                    <p className="text-sm text-[#6B7280]">Type</p>
                    <p className="font-medium">{job.type}</p>
                  </div>
                </div>
              )}
              {job.accommodation && (
                <div className="flex items-center gap-3">
                  <Home size={20} className="text-[rgb(37,99,235)]" />
                  <div>
                    <p className="text-sm text-[#6B7280]">Accommodation</p>
                    <p className="font-medium">{job.accommodation}</p>
                  </div>
                </div>
              )}
              {job.nationality && (
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-[rgb(37,99,235)]" />
                  <div>
                    <p className="text-sm text-[#6B7280]">Nationality</p>
                    <p className="font-medium">{job.nationality}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Australia Visa Details (if Australia) */}
            {renderAustraliaVisaDetails()}
            {/* Job Overview */}
            {job.description && (
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-[rgb(37,99,235)] mb-4">
                  Job Overview
                </h3>
                <p className="text-[#374151] leading-relaxed">{job.description}</p>
              </section>
            )}

            {/* Responsibilities */}
            {job.responsibilities && (
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-[rgb(37,99,235)] mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-[15px] leading-[1.6] text-[#374151]"
                    >
                      <span className="text-[rgb(37,99,235)] mt-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Requirements */}
            {job.requirements && (
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-[rgb(37,99,235)] mb-4">
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-[15px] leading-[1.6] text-[#374151]"
                    >
                      <span className="text-[rgb(37,99,235)] mt-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            {job.benefits && (
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-[rgb(37,99,235)] mb-4">
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-[15px] leading-[1.6] text-[#374151]"
                    >
                      <span className="text-[rgb(37,99,235)] mt-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Special Instructions */}
            {job.specialInstructions && (
              <div className="mb-8 bg-[#DBEAFE] border-l-4 border-[rgb(37,99,235)] p-4">
                <p className="text-[15px] leading-[1.6] text-[#374151]">
                  {job.specialInstructions}
                </p>
              </div>
            )}

            {/* Footer (non-sticky) */}
            <div className="mt-12 -mx-12 -mb-12 p-6 bg-white border-t border-[#E5E7EB]">
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  className={cn(
                    "px-8 py-3.5 rounded-lg",
                    "border-2 border-[rgb(37,99,235)]",
                    "text-[rgb(37,99,235)] font-semibold",
                    "hover:bg-[#DBEAFE]",
                    "transition-colors duration-200"
                  )}
                >
                  Save Job
                </button>
                <button
                  onClick={() => {
                    onClose();
                    navigate('/programs');
                  }}
                  className={cn(
                    "px-8 py-3.5 rounded-lg",
                    "bg-[rgb(37,99,235)]",
                    "text-white font-semibold",
                    "hover:bg-[#1E40AF]",
                    "transition-colors duration-200",
                    "shadow-lg hover:shadow-xl"
                  )}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;