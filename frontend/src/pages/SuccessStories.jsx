import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from '../context/ThemeContext';
import { FaTrophy } from 'react-icons/fa';

const SuccessStories = () => {
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
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 pt-6 flex items-center justify-center overflow-hidden">
      
      {/* Global Background */}
      {init && <Particles id="tsparticles-success" options={particlesOptions} />}

      {/* Global Animated Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '2000ms' }}></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-slate-300 dark:bg-slate-800/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '4000ms' }}></div>
      </div>

      {/* Coming Soon Card */}
      <div className="relative z-10 max-w-lg w-full mx-6 p-10 bg-white/60 dark:bg-slate-800/60 backdrop-blur-2xl rounded-[2rem] border border-white/20 dark:border-slate-700/50 shadow-2xl text-center">
        <div className="w-24 h-24 mx-auto bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-5xl mb-8 shadow-inner">
           <FaTrophy />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Success Stories
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-sm mb-6 shadow-lg shadow-blue-500/30 animate-pulse">
          Coming Soon
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
          We are currently preparing amazing stories from our successful alumni. Check back soon to get inspired by their achievements!
        </p>
      </div>

    </div>
  );
};

export default SuccessStories;
