import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, openAuthModal, logout } = useAuth();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 w-full">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-2xl leading-none pt-0.5">C</span>
              </div>
              <span className="font-bold text-3xl text-slate-900 dark:text-white tracking-tight">Career<span className="text-blue-600">Forge</span></span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative group text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center px-1 py-2 text-base font-semibold transition-colors duration-300"
              >
                {link.name}
                {/* Professional Hover Underline Animation */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden lg:flex items-center gap-4">
                <Link 
                  to="/profile"
                  className="focus:outline-none hover:scale-105 transition-transform"
                  title="View Profile"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md border-2 border-slate-100 dark:border-slate-700">
                    <FaUser size={16} />
                  </div>
                </Link>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="hidden lg:flex items-center px-5 py-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors border border-blue-100 dark:border-blue-800"
              >
                Login
              </button>
            )}
            <ThemeToggle />
            <div className="-mr-2 flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="border-transparent text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-400 block pl-3 pr-4 py-3 border-l-4 text-base font-semibold transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Auth Actions */}
            {user ? (
              <div className="border-t border-gray-100 dark:border-slate-800 mt-2 pt-4 px-4 pb-4">
                <div className="flex items-center gap-3 mb-5 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md text-lg overflow-hidden">
                    {user.profileImage ? (
                      <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      user.name.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-slate-900 dark:text-white font-black truncate">{user.name}</span>
                    <span className="block text-slate-500 dark:text-slate-400 text-xs font-medium truncate">{user.email}</span>
                  </div>
                </div>
                
                <div className="space-y-1 mb-6">
                  <Link to="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={() => setIsOpen(false)}>
                    <FaUser className="text-slate-400" /> My Dashboard
                  </Link>
                </div>

                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-50 dark:bg-red-900/20 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 font-bold rounded-xl transition-colors"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <div className="px-4 mt-4">
                <button
                  onClick={() => { openAuthModal(); setIsOpen(false); }}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-center"
                >
                  Login / Register
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;