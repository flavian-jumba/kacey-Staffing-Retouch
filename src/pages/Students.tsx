import React from 'react';
import SEO from '../components/SEO';
import StudentHero from '../components/students/StudentHero';
import StudentStats from '../components/students/StudentStats';
import DestinationGrid from '../components/students/DestinationGrid';
import ProcessSteps from '../components/students/ProcessSteps';
import StudentCTA from '../components/students/StudentCTA';

const Students = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Study Abroad — Students | Kacey Staffing"
        description="Kacey Staffing connects students with curated international academic programs in the US, UK, Canada and Australia — fully supported from application to arrival."
        keywords="study abroad, international students, university applications, student visa, study in USA, study in UK, study in Canada, study in Australia"
        url="https://kaceystaffing.com/students"
      />

      <StudentHero />
      <StudentStats />
      <DestinationGrid />
      <ProcessSteps />
      <StudentCTA />
    </div>
  );
};

export default Students;
