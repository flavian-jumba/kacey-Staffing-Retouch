import { MapPin, Users, Briefcase, Home, Globe } from 'lucide-react';
import { JobInfo } from '@/lib/jobsData';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: JobInfo;
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full bg-white p-8 rounded-xl border border-[#E5E7EB]",
        "min-h-[320px] flex flex-col",
        "shadow-[0_2px_8px_rgba(37,99,235,0.08)]",
        "hover:shadow-[0_8px_24px_rgba(37,99,235,0.15)]",
        "hover:border-[rgb(37,99,235)]",
        "hover:-translate-y-1",
        "transition-all duration-300 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-[rgb(37,99,235)] focus:ring-offset-2",
        "text-left"
      )}
      role="button"
      aria-label={`View details for ${job.title} position`}
    >
      {/* Status Badge */}
      <span 
        className={cn(
          "absolute top-4 right-4",
          "px-3.5 py-1.5 rounded-full",
          "text-xs font-semibold uppercase tracking-[0.5px]",
          "bg-[#DBEAFE] text-[rgb(37,99,235)]",
          job.priority === 'HIGH' && "bg-[#EF4444] text-white"
        )}
      >
        {job.priority === 'HIGH' ? 'URGENT' : job.status}
      </span>

      {/* Job Title */}
      <h3 className="text-[22px] font-bold text-[#1E3A8A] leading-[1.3] mb-3 line-clamp-2">
        {job.title}
      </h3>

      {/* Location */}
      <div className="flex items-center gap-2 text-[rgb(37,99,235)] mb-4">
        <MapPin size={16} />
        <span className="text-[15px]">{job.location}</span>
      </div>

      {/* Key Information Grid */}
      <div className="grid grid-cols-2 gap-3 text-[14px] text-[#374151]">
        <div className="flex items-center gap-2">
          <Users size={18} className="text-[rgb(37,99,235)]" />
          <span>{job.positions} Position{job.positions > 1 ? 's' : ''}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={18} className="text-[rgb(37,99,235)]" />
          <span>{job.type}</span>
        </div>
        {job.accommodation && (
          <div className="flex items-center gap-2">
            <Home size={18} className="text-[rgb(37,99,235)]" />
            <span>{job.accommodation}</span>
          </div>
        )}
        {job.nationality && (
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-[rgb(37,99,235)]" />
            <span>{job.nationality}</span>
          </div>
        )}
      </div>

      {/* Brief Description */}
      {job.description && (
        <p className="mt-4 mb-4 text-[14px] leading-[1.5] text-[#6B7280] line-clamp-2">
          {job.description}
        </p>
      )}

      {/* CTA Button */}
      <div className="mt-auto pt-4">
        <span 
          className={cn(
            "w-full inline-block text-center py-3 px-6",
            "bg-[rgb(37,99,235)] text-white",
            "rounded-lg font-semibold text-[15px]",
            "hover:bg-[#1E40AF] active:scale-[0.98]",
            "transition-all duration-200"
          )}
        >
          View Details
        </span>
      </div>
    </button>
  );
};

export default JobCard;