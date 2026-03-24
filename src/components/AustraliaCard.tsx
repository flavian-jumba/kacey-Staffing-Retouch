import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const australiaImage = '/home/healthcare_2.jpg'; // Provided image

const AustraliaCard: React.FC = () => {
  const [show407, setShow407] = useState(false);
  const [show482, setShow482] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64">
        <img 
          src={australiaImage}
          alt="Australia Culinary Career"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center mb-2">
            <span className="font-medium text-lg">Australia</span>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Culinary & Hospitality Careers</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Take your culinary and hospitality career to Australia! Explore two exclusive visa programs for skilled professionals and recent graduates.
        </p>
        <div className="space-y-4 mb-6">
          <button
            className="w-full flex justify-between items-center px-4 py-2 bg-blue-100 rounded-lg text-blue-900 font-semibold hover:bg-blue-200 transition"
            onClick={() => setShow407(v => !v)}
            aria-expanded={show407}
          >

            <ArrowRight className={`h-4 w-4 ml-2 transition-transform ${show407 ? 'rotate-90' : ''}`} />
          </button>
          {show407 && (
            <div className="bg-blue-50 p-4 rounded-lg mt-2 text-sm text-gray-700">
              <div><b>Duration:</b> Up to 24 months</div>
              <div><b>Processing time:</b> Up to 11 months</div>
              <div><b>Salary:</b> 42,000-50,000 AUD/year</div>
              <div className="mt-2 font-semibold">Requirements:</div>
              <ul className="list-disc ml-6">
                <li>1-2 year diploma in hospitality from accredited institution</li>
                <li>12+ months full-time work experience in last 2 years</li>
                <li>IELTS 5 or PTE 36 (required later in process)</li>
                <li>Positions: F&B, rooms division, some culinary arts</li>
                <li>Program fee: 7,500 AUD total, paid in installments</li>
              </ul>
            </div>
          )}
          <button
            className="w-full flex justify-between items-center px-4 py-2 bg-orange-100 rounded-lg text-orange-900 font-semibold hover:bg-orange-200 transition"
            onClick={() => setShow482(v => !v)}
            aria-expanded={show482}
          >
            482 Visa Culinary Skilled Program
            <ArrowRight className={`h-4 w-4 ml-2 transition-transform ${show482 ? 'rotate-90' : ''}`} />
          </button>
          {show482 && (
            <div className="bg-orange-50 p-4 rounded-lg mt-2 text-sm text-gray-700">
              <div><b>Duration:</b> Up to 4 years</div>
              <div><b>Processing time:</b> ~4 months</div>
              <div><b>Minimum salary:</b> 73,000 AUD/year</div>
              <div className="mt-2 font-semibold">Requirements:</div>
              <ul className="list-disc ml-6">
                <li>Leadership positions (chef de partie+) in luxury hotels/restaurants</li>
                <li>1-2 year Culinary Arts diploma + 1-2 years chef experience, OR</li>
                <li>3+ years full-time paid chef experience (higher level)</li>
                <li>IELTS</li>
                <li>More flexible payment options</li>
              </ul>
            </div>
          )}
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Candidate Eligibility and Screening</div>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>Recent graduates with 1-1.5 years experience for 407 Visa</li>
            <li>Higher-level culinary professionals for 482 Visa</li>
            <li>Work experience must be recent, full-time, and relevant</li>
            <li>Diploma/degree from accredited institutions</li>
          </ul>
        </div>
        <button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-orange-600 transition-all duration-300 shadow-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default AustraliaCard;
