import React from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaUsers, FaCertificate } from 'react-icons/fa';

const features = [
    {
        title: "Real Projects",
        description: "Build production-ready applications that solve actual industry problems, not just theoretical exercises.",
        icon: <FaLaptopCode className="w-6 h-6" />,
        color: "bg-blue-600",
        badge: "Industry Standard"
    },
    {
        title: "Expert Mentorship",
        description: "Get 1-on-1 guidance and weekly code reviews from senior developers working at top tech companies.",
        icon: <FaChalkboardTeacher className="w-6 h-6" />,
        color: "bg-indigo-600",
        badge: "1-on-1 Help"
    },
    {
        title: "Team Collaboration",
        description: "Learn Agile workflows, Git version control, and team communication dynamics just like in modern software teams.",
        icon: <FaUsers className="w-6 h-6" />,
        color: "bg-purple-600",
        badge: "Agile Teams"
    },
    {
        title: "Industry Certificate",
        description: "Earn a verified credential and git-ready project portfolio that holds real weight with technical recruiters.",
        icon: <FaCertificate className="w-6 h-6" />,
        color: "bg-sky-600",
        badge: "Verified"
    }
];

const Why = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
            {/* Soft background grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Premium Centered Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
                        Why Choose{' '}
                        <span className="text-blue-600 dark:text-blue-400">Us?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        We bridge the gap between academic theory and industry reality through immersive, team-based development workflows.
                    </p>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        return (
                            <div 
                                key={index} 
                                className="relative group w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon Container with Badge */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`w-12 h-12 rounded-xl ${feature.color} text-white flex items-center justify-center shadow-md`}>
                                            {feature.icon}
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                            {feature.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium mb-6">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="h-1 w-12 rounded-full bg-blue-600 opacity-60 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Why;