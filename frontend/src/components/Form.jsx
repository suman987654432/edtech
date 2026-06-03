import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useApplication } from '../context/ApplicationContext';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

const Form = () => {
    const { isFormOpen, closeForm } = useApplication();

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isFormOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isFormOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isFormOpen) {
                closeForm();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFormOpen, closeForm]);

    if (!isFormOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application submitted successfully!');
        closeForm();
    };

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={closeForm}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transform transition-all animate-in fade-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-6 sm:px-10 flex justify-between items-center sticky top-0 z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Apply Now</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Join our next cohort of top developers.</p>
                    </div>
                    <button
                        onClick={closeForm}
                        className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full transition-colors"
                    >
                        <FaTimes size={16} />
                    </button>
                </div>

                {/* Scrollable Form Content */}
                <div className="flex-1  p-6 sm:p-10 overflow-y-auto scrollbar-hide">
                    <form onSubmit={handleSubmit} className="space-y-3">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                                />
                            </div>

                            {/* College */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">College / University</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. MIT, Stanford, DTU"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Year of Study */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Year of Study</label>
                                <select
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white appearance-none"
                                >
                                    <option value="" disabled selected>Select Year</option>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                    <option value="graduated">Graduated</option>
                                </select>
                            </div>

                            {/* Program */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Program Interested In</label>
                                <select
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white appearance-none"
                                >
                                    <option value="" disabled selected>Select Program</option>
                                    <option value="mern">MERN Stack Development</option>
                                    <option value="frontend">Frontend Development</option>
                                    <option value="backend">Backend Development</option>
                                    <option value="ai-ml">AI/ML</option>
                                    <option value="ui-ux">UI/UX Design</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Why Join */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Why do you want to join?</label>
                            <textarea
                                rows="4"
                                required
                                placeholder="Tell us about your goals and what you hope to achieve..."
                                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 group"
                            >
                                Submit Application
                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>,
        document.body
    );
};

export default Form;
