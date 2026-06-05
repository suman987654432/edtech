import React from 'react';
import { FaUserClock } from 'react-icons/fa';

const Mentors = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden flex items-center justify-center pt-12 pb-12">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>

      {/* Page Content */}
      <div className="relative z-10 max-w-lg w-full mx-6 p-8 md:p-12 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/85 rounded-3xl shadow-xl text-center">
        <div className="w-16 h-16 mx-auto bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
           <FaUserClock />
         </div>
        
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          Our Mentors
        </h1>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs mb-6 border border-blue-100 dark:border-blue-950">
          Coming Soon
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium">
          We are currently gathering an elite group of industry professionals and experts to guide you on your journey. Stay tuned!
        </p>
      </div>

    </div>
  );
};

export default Mentors;
