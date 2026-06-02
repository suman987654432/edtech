import React, { useEffect, useState, useMemo } from 'react';
import { FaLaptopCode, FaArrowRight, FaChalkboardTeacher, FaUsers, FaCertificate } from 'react-icons/fa';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from '../context/ThemeContext';

const features = [
    {
        title: "Real Projects",
        description: "Build production-ready applications that solve actual industry problems, not just theoretical exercises.",
        icon: <FaLaptopCode className="w-8 h-8" />,
        gradient: "from-blue-500 to-cyan-400",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Expert Mentorship",
        description: "Get 1-on-1 guidance and code reviews from senior developers working at top tech companies.",
        icon: <FaChalkboardTeacher className="w-8 h-8" />,
        gradient: "from-purple-500 to-indigo-500",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Team Collaboration",
        description: "Learn Agile workflows, Git version control, and modern team dynamics just like in the real world.",
        icon: <FaUsers className="w-8 h-8" />,
        gradient: "from-pink-500 to-rose-400",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Industry Certificate",
        description: "Earn a verified credential that holds weight with top technical recruiters globally.",
        icon: <FaCertificate className="w-8 h-8" />,
        gradient: "from-amber-400 to-orange-500",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
    }
];

const Why = () => {
    const { isDarkMode } = useTheme();
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = useMemo(() => ({
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
            color: { value: "#ffffff" },
            number: { value: 80, density: { enable: true, width: 800 } }, // Slightly fewer stars for the content section
            opacity: {
                value: { min: 0.2, max: 0.8 },
                animation: { enable: true, speed: 1, sync: false }
            },
            size: {
                value: { min: 1, max: 3 },
                animation: { enable: true, speed: 2, sync: false }
            },
            move: { enable: true, speed: 0.5, direction: "none", random: true, straight: false, outModes: "bounce" }
        },
        detectRetina: true
    }), []);

    return (
        <section className="py-24  relative overflow-hidden">
            {/* TSParticles Dark Mode Stars Background */}
            <div className="absolute inset-0 z-0" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                {isDarkMode && init && <Particles id="tsparticles-why" options={particlesOptions} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />}
            </div>
            {/* Background Animated Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '2000ms' }}></div>
            <div className="absolute bottom-10 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-slate-300 dark:bg-slate-800/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '4000ms' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Premium Centered Header */}
                <div className="flex flex-col items-center text-center gap-6 mb-20">

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.05]">
                        Why Choose
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">Us?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                        We bridge the gap between academic theory and industry reality through immersive, project-based learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="relative group w-full h-[380px] [perspective:1000px] cursor-pointer">

                            {/* Inner Container for 3D Flip */}
                            <div className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm group-hover:shadow-xl rounded-2xl">

                                {/* Front Face */}
                                <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg mb-6 transition-transform duration-500 group-hover:scale-110`}>
                                        <div className="text-3xl">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                        {feature.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Back Face (Purely Image) */}
                                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] border border-slate-200 dark:border-slate-700">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* Light overlay just to blend with theme, but completely transparent so image pops */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 mix-blend-overlay`}></div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;