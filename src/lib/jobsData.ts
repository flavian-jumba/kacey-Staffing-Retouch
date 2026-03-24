export type JobType = 'Full-Time' | 'Part-Time' | 'Contract';

export type Priority = 'HIGH' | 'URGENT' | 'NORMAL';

export interface JobInfo {
  id: string;
  title: string;
  location: string;
  salary: string;
  positions: number;
  type: JobType;
  accommodation?: string;
  nationality?: string;
  experience?: string;
  priority?: Priority;
  description?: string;
  yearlyProgression?: {
    year1: string;
    year2?: string;
    year3?: string;
  };
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  specialInstructions?: string;
  status: 'OPEN' | 'HIRING' | 'CLOSED';
  department?: string;
}

// Job listings data
export const jobsData: JobInfo[] = [
  {
    id: 'AUS-2',
    title: 'Hospitality Trainee (407 Visa)',
    location: 'Australia',
    salary: '42,000-50,000 AUD/year',
    positions: 10,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Hospitality',
    description: 'Join the 407 Visa Training Program in Australia. 1-2 year diploma in hospitality from accredited institution. 12+ months full-time work experience in last 2 years. IELTS 5 or PTE 36 (required later in process). Positions: F&B, rooms division, some culinary arts. Program fee: 7,500 AUD total, paid in installments.',
    requirements: [
      '1-2 year diploma in hospitality from accredited institution',
      '12+ months full-time work experience in last 2 years',
      'IELTS 5 or PTE 36 (required later in process)',
      'Positions: F&B, rooms division, some culinary arts',
      'Program fee: 7,500 AUD total, paid in installments'
    ],
    benefits: [
      'Duration: Up to 24 months',
      'Processing time: Up to 11 months',
      'Salary: 42,000-50,000 AUD/year'
    ]
  },
  {
    id: 'AUS-1',
    title: 'Culinary Skilled Chef (482 Visa)',
    location: 'Australia',
    salary: '73,000 AUD/year minimum',
    positions: 5,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Hospitality',
    description: 'Work in Australia’s top culinary destinations under the 482 Visa program. Leadership positions (chef de partie+) in luxury hotels/restaurants. 1-2 year Culinary Arts diploma + 1-2 years chef experience, OR 3+ years full-time paid chef experience (higher level). IELTS required. More flexible payment options.',
    requirements: [
      'Leadership positions (chef de partie+) in luxury hotels/restaurants',
      '1-2 year Culinary Arts diploma + 1-2 years chef experience, OR',
      '3+ years full-time paid chef experience (higher level)',
      'IELTS',
      'More flexible payment options'
    ],
    benefits: [
      'Minimum salary: 73,000 AUD/year',
      'Duration: Up to 4 years',
      'Processing time: ~11 months'
    ]
  },
  {
    id: 'AUS-2',
    title: 'Hospitality Trainee (407 Visa)',
    location: 'Australia',
    salary: '42,000-50,000 AUD/year',
    positions: 10,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Hospitality',
    description: 'Join the 407 Visa Training Program in Australia. 1-2 year diploma in hospitality from accredited institution. 12+ months full-time work experience in last 2 years. IELTS 5 or PTE 36 (required later in process). Positions: F&B, rooms division, some culinary arts. Program fee: 7,500 AUD total, paid in installments.',
    requirements: [
      '1-2 year diploma in hospitality from accredited institution',
      '12+ months full-time work experience in last 2 years',
      'IELTS 5 or PTE 36 (required later in process)',
      'Positions: F&B, rooms division, some culinary arts',
      'Program fee: 7,500 AUD total, paid in installments'
    ],
    benefits: [
      'Duration: Up to 24 months',
      'Processing time: Up to 4 months',
      'Salary: 42,000-50,000 AUD/year'
    ]
  },
  {
    id: '1',
    title: 'Heavy Vehicle Mechanic',
    location: 'Malta',
    salary: '€15,340/year + overtime',
    positions: 2,
    type: 'Full-Time',
    accommodation: 'Not Provided',
    nationality: 'All welcome',
    status: 'OPEN',
    department: 'Automotive',
    description: 'Join our team as a Heavy Vehicle Mechanic responsible for maintaining and repairing various types of heavy vehicles and equipment.',
    responsibilities: [
      'Diagnose and repair mechanical issues in heavy vehicles',
      'Perform routine maintenance and inspections',
      'Maintain detailed service records',
      'Ensure compliance with safety standards'
    ]
  },
  {
    id: '2',
    title: 'Sales Attendant & Fire Extinguisher Technician',
    location: 'Malta',
    salary: '€15,000/year + performance bonus',
    positions: 1,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Sales'
  },
  {
    id: '3',
    title: 'HGV Driver',
    location: 'Malta',
    salary: '€1,386/month',
    positions: 2,
    type: 'Full-Time',
    nationality: 'Kenyan Nationals Only',
    status: 'OPEN',
    department: 'Transportation'
  },
  {
    id: '4',
    title: 'Food Handler',
    location: 'Malta',
    salary: '€961.05/month',
    positions: 4,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Hospitality',
    description: 'Full-time position, 40hrs/week'
  },
  {
    id: '5',
    title: 'Housekeeping Staff',
    location: 'Malta',
    salary: '€1,000/month',
    positions: 4,
    type: 'Full-Time',
    accommodation: 'Not provided',
    status: 'OPEN',
    department: 'Hospitality'
  },
  {
    id: '6',
    title: 'Receptionist',
    location: 'Malta',
    salary: '€1,000/month',
    positions: 2,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Hospitality'
  },
  {
    id: '7',
    title: 'Construction Laborers',
    location: 'Malta',
    salary: '€950-1,200/month',
    positions: 2,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Construction',
    experience: '3+ years'
  },
  {
    id: '8',
    title: 'Cleaner',
    location: 'Malta',
    salary: '€901-1,500/month',
    positions: 2,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Facilities'
  },
  {
    id: '9',
    title: 'Concrete Formworker',
    location: 'Malta',
    salary: '€19,000-€20,000/year',
    positions: 3,
    type: 'Full-Time',
    accommodation: 'Not provided',
    status: 'OPEN',
    department: 'Construction'
  },
  {
    id: '10',
    title: 'Tipper/Truck Drivers (C or C1 License)',
    location: 'Malta',
    positions: 2,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Transportation',
    salary: 'Year 1: €18,000, Year 2: €19,000, Year 3: €20,000',
    yearlyProgression: {
      year1: '€18,000',
      year2: '€19,000',
      year3: '€20,000'
    }
  },
  {
    id: '11',
    title: 'Excavator Operator',
    location: 'Malta',
    positions: 1,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Construction',
    salary: 'Year 1: €18,000, Year 2: €19,000, Year 3: €20,000',
    yearlyProgression: {
      year1: '€18,000',
      year2: '€19,000',
      year3: '€20,000'
    }
  },
  {
    id: '12',
    title: 'Manual Construction & Demolition Labourers',
    location: 'Malta',
    positions: 2,
    type: 'Full-Time',
    status: 'OPEN',
    department: 'Construction',
    salary: 'Year 1: €15,000, Year 2: €16,000, Year 3: €17,000',
    yearlyProgression: {
      year1: '€15,000',
      year2: '€16,000',
      year3: '€17,000'
    }
  }
];