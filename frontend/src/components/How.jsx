import React, { useEffect, useRef, useState } from 'react';
import { FaWpforms, FaCheckCircle, FaUsers, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Apply & Onboard',
    description: 'Submit your application and showcase your passion for learning. Our streamlined process ensures a smooth onboarding.',
    icon: <FaWpforms />,
    accent: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-600 dark:bg-blue-500',
  },
  {
    id: 2,
    title: 'Get Selected',
    description: 'Our expert panel reviews applications and selects the top candidates to join our exclusive cohort.',
    icon: <FaCheckCircle />,
    accent: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-600 dark:bg-blue-500',
  },
  {
    id: 3,
    title: 'Join a Team',
    description: 'Get paired with like-minded peers. Form a balanced, dynamic team ready to tackle complex challenges.',
    icon: <FaUsers />,
    accent: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-600 dark:bg-blue-500',
  },
  {
    id: 4,
    title: 'Work on a Live Project',
    description: 'Build a real-world product from scratch under the guidance of industry mentors and tech leads.',
    icon: <FaLaptopCode />,
    accent: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-600 dark:bg-blue-500',
  },
  {
    id: 5,
    title: 'Earn Experience & Certificate',
    description: 'Complete the project, gain invaluable hands-on experience, and receive your industry-recognized certificate.',
    icon: <FaCertificate />,
    accent: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-600 dark:bg-blue-500',
  },
];

const How = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleItems((prev) => new Set([...prev, index]));
            
            const newHeight = Math.min(100, (index + 1) * 20);
            setLineHeight((prev) => Math.max(prev, newHeight));
          }
        });
      },
      { threshold: 0.6, rootMargin: '-50px' }
    );

    const elements = document.querySelectorAll('.step-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8 transition-colors duration-500">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 tracking-widest uppercase">The Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
            How It <span className="text-blue-600 dark:text-blue-400">Works</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light leading-relaxed transition-colors duration-500">
            A structured, premium path from learning to shipping real products. 
            Follow the steps and transform your career.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Central Track (Background) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800 transition-colors duration-500 rounded-full"></div>
          
          {/* Central Track (Animated Fill) */}
          <div 
            ref={lineRef}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)] dark:shadow-[0_0_10px_rgba(59,130,246,0.4)]"
            style={{ height: `${lineHeight}%`, top: 0 }}
          ></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isVisible = visibleItems.has(index);
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  data-index={index}
                  className={`step-card relative flex flex-col md:flex-row items-center justify-between group ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node */}
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-800 z-10 items-center justify-center transition-all duration-700 shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                     <div className={`w-full h-full rounded-full flex items-center justify-center ${step.bg} text-white text-xl transition-transform duration-500 group-hover:scale-110`}>
                        {step.icon}
                     </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] flex transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : (isEven ? 'translate-x-16 opacity-0' : '-translate-x-16 opacity-0')}`}>
                    <div className="relative w-full">
                      
                      <div className="relative bg-white dark:bg-slate-800/80 backdrop-blur-xl border border-slate-100 dark:border-slate-700/50 p-8 md:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-black/50 overflow-hidden group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30">
                        
                        {/* Number Watermark */}
                        <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-slate-50 dark:text-slate-700/30 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 z-0">
                          {step.id}
                        </div>

                        {/* Mobile Header */}
                        <div className="md:hidden flex items-center gap-4 mb-6 relative z-10">
                          <div className={`p-4 rounded-2xl ${step.bg} text-white shadow-lg`}>
                            {step.icon}
                          </div>
                          <div className="text-3xl font-black text-slate-200 dark:text-slate-700">0{step.id}</div>
                        </div>
                        
                        <div className="relative z-10">
                          <div className={`w-10 h-1 rounded-full ${step.bg} mb-6 transform origin-left transition-all duration-500 group-hover:w-20`}></div>
                          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[17px] transition-colors">
                            {step.description}
                          </p>
                        </div>

                      </div>
                    </div>
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
