import React, { useEffect, useState, useMemo } from 'react';
import How from '../components/How';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from '../context/ThemeContext';
import { useApplication } from '../context/ApplicationContext';

const HowItWorks = () => {
  const { isDarkMode } = useTheme();
  const { openForm } = useApplication();
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
      move: { enable: true, speed: 1.2, direction: "none", random: true, straight: false, outModes: "bounce" }
    },
    detectRetina: true
  }), [isDarkMode]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 pt-0 overflow-hidden">

      {/* Global Background */}
      {init && <Particles id="tsparticles-how" options={particlesOptions} />}

      {/* Global Animated Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '2000ms' }}></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-slate-300 dark:bg-slate-800/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '4000ms' }}></div>
      </div>

      {/* Page Hero Section */}
      <div className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-8 border border-blue-100 dark:border-blue-800 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Simple & Effective
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
              Your Path to <span className="text-blue-600 dark:text-blue-400">Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              We've engineered a seamless, step-by-step process to take you from a curious learner to a highly capable industry professional. Here is exactly what you can expect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}>
              <button onClick={openForm} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/30">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Listing */}
      <div className="pb-24 relative z-10">
        {/* Reuse the How component which has the timeline cards */}
        <How />
      </div>

    </div>
  );
};

export default HowItWorks;
