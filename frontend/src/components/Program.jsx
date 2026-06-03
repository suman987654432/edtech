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
        title: 'AI/ML',
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
        <section className="py-24  transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 mb-8 transition-colors duration-500">
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 tracking-widest uppercase">Our Programs</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
                        Explore Our <span className="text-blue-600 dark:text-blue-400">Curriculum</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light leading-relaxed transition-colors duration-500">
                        Industry-aligned programs designed to take you from a beginner to an expert.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className={`relative group bg-white dark:bg-slate-800 border ${program.isFuture
                                ? 'border-dashed border-slate-300 dark:border-slate-600 opacity-80'
                                : 'border-slate-200 dark:border-slate-700'
                                } rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-black/50 overflow-hidden ${!program.isFuture ? 'hover:border-blue-500/50 dark:hover:border-blue-400/50' : ''
                                }`}
                        >
                            {/* Future Badge */}
                            {program.isFuture && (
                                <div className="absolute top-4 right-4 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Future
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-colors duration-300 ${program.isFuture
                                ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500'
                                : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500'
                                }`}>
                                {program.icon}
                            </div>

                            {/* Content */}
                            <h3 className={`text-2xl font-bold mb-3 transition-colors ${program.isFuture ? 'text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-white'
                                }`}>
                                {program.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                {program.description}
                            </p>

                            {/* Action Link (Optional, looks premium) */}
                            {!program.isFuture && (
                                <div onClick={openForm} className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:underline cursor-pointer">
                                    Apply Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Program;
