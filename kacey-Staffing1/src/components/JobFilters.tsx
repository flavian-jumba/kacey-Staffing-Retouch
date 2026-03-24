import { useState, useCallback } from 'react';
import { Search, MapPin, Briefcase, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FilterOptions {
  location: string;
  jobType: string;
  department: string;
  searchTerm: string;
}

interface JobFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  locations: string[];
  jobTypes: string[];
  departments: string[];
}

const JobFilters = ({ onFilterChange, locations, jobTypes, departments }: JobFiltersProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    location: '',
    jobType: '',
    department: '',
    searchTerm: '',
  });

  const handleFilterChange = useCallback(
    (key: keyof FilterOptions, value: string) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);
      onFilterChange(newFilters);
    },
    [filters, onFilterChange]
  );

  const SelectFilter = ({
    icon: Icon,
    options,
    value,
    onChange,
    placeholder,
  }: {
    icon: React.ElementType;
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
  }) => {
    const id = `filter-${placeholder.toLowerCase()}`;
    
    return (
      <div className="relative flex-1">
        <label htmlFor={id} className="sr-only">
          {`Filter by ${placeholder}`}
        </label>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" aria-hidden="true">
          <Icon size={20} />
        </div>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full h-12 pl-10 pr-4 rounded-lg",
            "border border-[#E5E7EB]",
            "text-[#374151]",
            "bg-white",
            "focus:outline-none focus:ring-2 focus:ring-[rgb(37,99,235)] focus:border-transparent",
            "appearance-none"
          )}
          aria-label={`Filter by ${placeholder}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div 
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" 
          aria-hidden="true"
        >
          <div className="border-t-2 border-r-2 border-[#6B7280] w-2 h-2 transform rotate-135" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <label htmlFor="job-search" className="sr-only">
            Search jobs
          </label>
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" aria-hidden="true">
            <Search size={20} />
          </div>
          <input
            id="job-search"
            type="search"
            placeholder="Search jobs..."
            value={filters.searchTerm}
            onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            className={cn(
              "w-full h-12 pl-10 pr-4 rounded-lg",
              "border border-[#E5E7EB]",
              "text-[#374151] placeholder-[#9CA3AF]",
              "bg-white",
              "focus:outline-none focus:ring-2 focus:ring-[rgb(37,99,235)] focus:border-transparent"
            )}
            aria-label="Search jobs"
            role="searchbox"
          />
        </div>

        {/* Location Filter */}
        <SelectFilter
          icon={MapPin}
          options={locations}
          value={filters.location}
          onChange={(value) => handleFilterChange('location', value)}
          placeholder="Location"
        />

        {/* Job Type Filter */}
        <SelectFilter
          icon={Briefcase}
          options={jobTypes}
          value={filters.jobType}
          onChange={(value) => handleFilterChange('jobType', value)}
          placeholder="Job Type"
        />

        {/* Department Filter */}
        <SelectFilter
          icon={Building2}
          options={departments}
          value={filters.department}
          onChange={(value) => handleFilterChange('department', value)}
          placeholder="Department"
        />
      </div>
    </div>
  );
};

export default JobFilters;