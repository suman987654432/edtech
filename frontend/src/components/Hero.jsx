import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pb-32 text-center min-h-[70vh] flex flex-col justify-center items-center">
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
                    Build Real Skills <br className="hidden sm:block" />
                    <span className="text-blue-700 dark:text-blue-500">Through Live Projects</span>
                </h1>
                
                {/* Subheading */}
                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up font-normal" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                    Work on industry-level projects, collaborate in teams, receive mentorship, and become job-ready.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}>
                    <Link to="/programs" className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                        Apply for Founding Batch
                    </Link>
                    <Link to="/programs" className="inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 dark:focus:ring-slate-700">
                        Explore Programs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
