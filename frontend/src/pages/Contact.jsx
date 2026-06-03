import React, { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message sent successfully! We will get back to you soon.');
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500 pt-0 overflow-hidden">

      {/* Global Background */}
      {init && <Particles id="tsparticles-contact" options={particlesOptions} />}

      {/* Global Animated Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '2000ms' }}></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-slate-300 dark:bg-slate-800/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-30 animate-blob" style={{ animationDelay: '4000ms' }}></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-16 md:pt-12 md:pb-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 border border-blue-100 dark:border-blue-800">
            💬 Let's Connect
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Have a question about our programs? Want to partner with us? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Our friendly team is here to help.</p>
              <a href="mailto:hello@startup.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">hello@startup.com</a>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Visit Us</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Come say hello at our office HQ.</p>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">100 Tech Park Way<br />Innovation City, TX 78701</p>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+15551234567" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">+1 (555) 123-4567</a>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-10 rounded-3xl shadow-2xl h-full">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-white transition-shadow"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-white transition-shadow"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-white transition-shadow"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    id="message"
                    rows="6"
                    required
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-white transition-shadow resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
