import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 text-slate-900 dark:text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl leading-none pt-0.5">C</span>
              </div>
              <span className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">Career<span className="text-blue-600">Forge</span></span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Empowering your future with industry-leading courses and expert-led career paths. Unlock your potential today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/programs" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Browse Courses</Link></li>
              <li><Link to="/programs" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Career Paths</Link></li>
              <li><Link to="/how-it-works" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/mentors" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Mentorship</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/success-stories" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Student Stories</Link></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Community</a></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} CareerForge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;