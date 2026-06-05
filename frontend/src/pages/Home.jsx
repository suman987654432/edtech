import React from 'react';
import Hero from '../components/Hero';
import Why from '../components/why';
import How from '../components/How';
import Program from '../components/Program';

const Home = () => {
    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden">
            {/* Professional Background Patterns */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>

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
