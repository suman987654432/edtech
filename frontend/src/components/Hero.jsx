import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pb-32 text-center min-h-screen flex flex-col justify-center items-center z-10">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Top Notification Badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs mb-8 border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Application Open ..                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.08] max-w-5xl mx-auto">
                    The engineering experience <br />
                    <span className="text-blue-600 dark:text-blue-500">
                        you can't get in tutorials.
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                    Build production-grade systems in agile teams, receive deep 1-on-1 code reviews from senior mentors, and master industrial engineering practices.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <Link to="/programs" className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 focus:outline-none">
                        Apply for Founding Batch
                    </Link>
                    <Link to="/programs" className="w-full sm:w-auto inline-flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-sm">
                        Explore Programs
                    </Link>
                </div>

                {/* Premium Project Workspace Mockup (Screams professional workspace instead of AI design) */}
                <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-left font-mono text-xs select-none">
                    {/* Window Title Bar */}
                    <div className="bg-slate-900 px-4 py-3 border-b border-slate-950 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <span className="text-slate-400 text-xs font-semibold select-none">project-dashboard-v2 — careerforge-workspace</span>
                        <div className="w-10"></div>
                    </div>

                    <div className="flex h-96 sm:h-[420px]">
                        {/* Sidebar */}
                        <div className="hidden sm:flex flex-col w-48 bg-slate-900 border-r border-slate-950 p-4 text-slate-400 select-none">
                            <span className="font-bold text-[10px] text-slate-500 uppercase tracking-widest mb-3">Workspace</span>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-2 text-slate-200"><span className="text-blue-400">📂</span> components</div>
                                <div className="flex items-center gap-2 pl-4"><span className="text-slate-500">📄</span> Dashboard.jsx</div>
                                <div className="flex items-center gap-2 pl-4 text-blue-400"><span className="text-blue-400">📄</span> TaskBoard.jsx</div>
                                <div className="flex items-center gap-2"><span className="text-yellow-500">📂</span> models</div>
                                <div className="flex items-center gap-2 pl-4"><span className="text-slate-500">📄</span> Predictor.py</div>
                                <div className="flex items-center gap-2 text-slate-500"><span className="text-slate-600">📄</span> package.json</div>
                            </div>

                            <span className="font-bold text-[10px] text-slate-500 uppercase tracking-widest mt-6 mb-3">Live Team</span>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Jane D. <span className="text-[9px] text-slate-500">(Mentor)</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-350">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Suman K.
                                </div>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-amber-400"></span> Alex M.
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col bg-slate-950 p-6 text-slate-300 overflow-y-auto font-mono">
                            <div className="flex-1">
                                <div className="text-slate-500 mb-2">// Task: Surviving as a Software Engineering Student</div>
                                <div>
                                    <span className="text-pink-400">const</span> <span className="text-blue-400">debugStudentLife</span> = (coffeeCups, bugCount) =&gt; &#123;
                                </div>
                                <div className="pl-4">
                                    <span className="text-pink-400">if</span> (coffeeCups &lt; <span className="text-amber-400">3</span>) &#123;
                                </div>
                                <div className="pl-8 text-rose-400">
                                    throw new Error("CaffeineLevelCritical: Refill cup immediately!");
                                </div>
                                <div className="pl-4">&#125;</div>
                                <br />
                                <div className="pl-4 text-slate-500">
                                    // 100% real code written on Friday at 4:59 PM
                                </div>
                                <div className="pl-4">
                                    <span className="text-pink-400">try</span> &#123;
                                </div>
                                <div className="pl-8">
                                    shipCodeToProduction();
                                </div>
                                <div className="pl-8 text-emerald-400">
                                    console.log("Friday deploy successful. Time to close laptop!");
                                </div>
                                <div className="pl-4">
                                    &#125; <span className="text-pink-400">catch</span> (unexplainedErrors) &#123;
                                </div>
                                <div className="pl-8 text-slate-400">
                                    console.log("¯\\_(ツ)_/¯ It worked on my local machine...");
                                </div>
                                <div className="pl-8 text-amber-450">
                                    blameTheInternetOrDatabase();
                                </div>
                                <div className="pl-4">&#125;</div>
                                <br />
                                <div className="pl-4">
                                    <span className="text-pink-400">return</span> &#123; sleepHours: <span className="text-amber-400">4</span>, coffeePercent: <span className="text-amber-400">98</span> &#125;;
                                </div>
                                <div>&#125;;</div>
                            </div>

                            {/* Embedded Mini Terminal */}
                            <div className="border-t border-slate-900 pt-4 mt-4 text-[10px] text-slate-400 font-mono">
                                <div className="text-slate-500 font-bold mb-1">TERMINAL - npm run dev</div>
                                <div className="text-emerald-500">✓ Vite build completed in 1.48s</div>
                                <div className="text-blue-400">✓ Server listening on http://localhost:5173</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
