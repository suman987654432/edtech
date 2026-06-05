import React from 'react';
import Program from '../components/Program';
import { useApplication } from '../context/ApplicationContext';

const Programs = () => {
  const { openForm } = useApplication();

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>

      {/* Page Hero Section */}
      <div className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold text-xs mb-8 border border-blue-100 dark:border-blue-950">
              Elevate Your Skills
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
              Level Up Your <span className="text-blue-600 dark:text-blue-400">Career</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
              Discover our comprehensive range of immersive programs. Work on actual production codebases under expert mentorship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={openForm} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/10">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Listing */}
      <div className="pb-24 relative z-10">
        <Program />
      </div>

    </div>
  );
};

export default Programs;
