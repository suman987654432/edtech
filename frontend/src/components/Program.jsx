import React from 'react';
import { FaCode, FaServer, FaLayerGroup, FaRobot, FaPaintBrush } from 'react-icons/fa';
import { useApplication } from '../context/ApplicationContext';

const programs = [
    {
        id: 1,
        title: 'MERN Stack Development',
        description: 'Master full-stack development using MongoDB, Express, React, and Node.js. Build scalable web applications from scratch.',
        icon: <FaLayerGroup />,
        isFuture: false,
    },
    {
        id: 2,
        title: 'Frontend Development',
        description: 'Learn to build beautiful, responsive, and high-performance user interfaces using modern React and Tailwind CSS.',
        icon: <FaCode />,
        isFuture: false,
    },
    {
        id: 3,
        title: 'Backend Development',
        description: 'Dive deep into server-side logic, databases, APIs, and authentication with Node.js and robust backend frameworks.',
        icon: <FaServer />,
        isFuture: false,
    },
    {
        id: 4,
        title: 'AI/ML Engineering',
        description: 'Explore the future of tech. Learn machine learning concepts, neural networks, and how to build AI-powered apps.',
        icon: <FaRobot />,
        isFuture: false,
    },
    {
        id: 5,
        title: 'UI/UX Design',
        description: 'Master the art of creating intuitive user experiences and stunning interfaces with Figma and modern design principles.',
        icon: <FaPaintBrush />,
        isFuture: false,
    },
];

const Program = () => {
    const { openForm } = useApplication();

    return (
        <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 tracking-wider uppercase">Our Programs</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
                        Explore Our <span className="text-blue-600 dark:text-blue-400">Curriculum</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed">
                        Industry-aligned programs designed to take you from core basics to advanced architectural mastery.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className={`relative group bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 flex flex-col justify-between`}
                        >
                            <div>
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-colors duration-300">
                                    {program.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                                    {program.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                    {program.description}
                                </p>
                            </div>

                            {/* Action Link */}
                            <div onClick={openForm} className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm hover:underline cursor-pointer">
                                Apply Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Program;
