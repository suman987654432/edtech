import React, { useEffect, useState, useMemo } from 'react';
import Hero from '../components/Hero';
import Why from '../components/why';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from '../context/ThemeContext';
import How from '../components/How';
import Program from '../components/Program';

const Home = () => {
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
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
            color: { value: isDarkMode ? "#ffffff" : "#3b82f6" },
            number: { value: 120, density: { enable: true, width: 800 } },
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
    }), [isDarkMode]);

    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
            {/* Global Homepage Background */}
            {init && <Particles id="tsparticles-home" options={particlesOptions} />}

            {/* Global Animated Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '2000ms' }}></div>
                <div className="absolute bottom-10 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-slate-300 dark:bg-slate-800/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '4000ms' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <Hero />
                <Why />

                <How />
                <Program />
            </div>
        </div>
    );
};

export default Home;
