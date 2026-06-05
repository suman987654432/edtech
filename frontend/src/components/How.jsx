import React from 'react';
import { FaWpforms, FaCheckCircle, FaUsers, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Apply & Onboard',
    description: 'Submit your profile and share your programming interests. Our onboarding helps you prepare.',
    icon: <FaWpforms />,
    color: 'bg-blue-600',
    glow: 'rgba(37,99,235,0.15)',
  },
  {
    id: 2,
    title: 'Selection Check',
    description: 'Our review team screens applications to form high-quality, dedicated batches of learners.',
    icon: <FaCheckCircle />,
    color: 'bg-indigo-600',
    glow: 'rgba(79,70,229,0.15)',
  },
  {
    id: 3,
    title: 'Form Agile Teams',
    description: 'Get matched with peer developers. Together you\'ll operate just like a real engineering team.',
    icon: <FaUsers />,
    color: 'bg-purple-600',
    glow: 'rgba(147,51,234,0.15)',
  },
  {
    id: 4,
    title: 'Build Live Apps',
    description: 'Develop a high-impact, live product from scratch supported by tech leads and mentors.',
    icon: <FaLaptopCode />,
    color: 'bg-pink-600',
    glow: 'rgba(219,39,119,0.15)',
  },
  {
    id: 5,
    title: 'Certify & Graduate',
    description: 'Review your code, showcase your polished team git repo, and earn your startup experience certificate.',
    icon: <FaCertificate />,
    color: 'bg-emerald-600',
    glow: 'rgba(16,185,129,0.15)',
  },
];

const How = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      {/* Background visual grid details */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-400 font-semibold text-xs mb-6">
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
            Career Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
            How It <span className="text-blue-600 dark:text-blue-500">Works</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            A battle-tested learning path engineered to mirror high-growth software engineering teams.
          </p>
        </div>

        {/* Steps Grid Container */}
        <div className="relative">
          {/* Horizontal Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-200 dark:bg-slate-800 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              return (
                <div 
                  key={step.id} 
                  className="relative flex flex-col group"
                >
                  {/* Step Connector Dot & Icon */}
                  <div className="flex items-center lg:justify-center mb-6 relative">
                    {/* Circle Background containing the Icon */}
                    <div 
                      className={`w-14 h-14 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg transition-transform duration-350 group-hover:scale-110 z-10`}
                      style={{ boxShadow: `0 8px 30px ${step.glow}` }}
                    >
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    
                    {/* Floating Step Number */}
                    <span className="absolute -top-3 left-10 lg:left-16 text-xs font-black px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200/60 dark:border-slate-700/80 z-20">
                      Step 0{step.id}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="bg-slate-50/50 dark:bg-slate-800/20 border border-slate-200/50 dark:border-slate-800/85 p-6 rounded-2xl transition-all duration-300 group-hover:shadow-xl group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:border-slate-350 dark:group-hover:border-slate-700 flex-1 flex flex-col justify-between min-h-[180px]">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>

                    {/* Accent Color Bottom Stripe */}
                    <div className={`h-[3px] w-8 rounded-full ${step.color} mt-4 group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
