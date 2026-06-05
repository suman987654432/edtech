import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    category: 'AI / ML',
    title: 'The Future of AI: How LLMs are shaping software engineering',
    excerpt: 'Explore how large language models are fundamentally changing the way we write, debug, and deploy code at scale.',
    date: 'June 3, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    content: `Large Language Models (LLMs) like GPT-4 and Gemini are completely transforming the landscape of software engineering. Developers are no longer just writing boilerplate; they are orchestrating intelligent agents that write, test, and debug code simultaneously.\n\nIn the next few years, we expect the role of a "Junior Developer" to shift towards "AI Operator". The ability to correctly prompt, review, and architect applications with AI assistance will be the most sought-after skill in the industry.\n\nThis shift isn't about replacing engineers—it's about making them 10x more productive. Companies adopting these tools are shipping products faster than ever before.`,
  },
  {
    id: 2,
    category: 'Frontend',
    title: 'React 19 is Here: What You Need to Know',
    excerpt: 'A deep dive into the latest features of React 19, including the new compiler, hooks, and performance optimizations.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop',
    content: `React 19 has finally been released, and it brings the highly anticipated React Compiler. This means developers no longer have to manually worry about useMemo and useCallback for everyday performance optimizations.\n\nAdditionally, the new Actions API simplifies data mutations, making forms and server-side interactions smoother than ever. Concurrent mode improvements also make the UI feel snappier, especially on lower-end devices.\n\nIf you haven't upgraded yet, the migration path is surprisingly smooth, and the performance gains are worth the effort.`,
  },
  {
    id: 3,
    category: 'Full Stack',
    title: 'Mastering the MERN Stack: A Comprehensive Guide',
    excerpt: 'From database design to frontend deployment, learn the complete lifecycle of a modern web application built with MERN.',
    date: 'May 21, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    content: `The MERN stack (MongoDB, Express, React, Node.js) remains the undisputed king of JavaScript-based full-stack development. Its unified language (JavaScript) from frontend to backend dramatically reduces context switching.\n\nIn this comprehensive guide, we cover everything from designing your first MongoDB schema, securing your Express API with JWTs, and building responsive React components using Tailwind CSS.\n\nWhether you are a beginner or looking to refine your architecture, mastering MERN is a surefire way to boost your career.`,
  },
  {
    id: 4,
    category: 'Backend',
    title: 'Why Serverless is Dominating the Backend Ecosystem',
    excerpt: 'Discover why startups and enterprise companies alike are migrating to serverless architectures to reduce costs and scale effortlessly.',
    date: 'May 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    content: `Serverless architectures abstract away infrastructure management, allowing developers to focus entirely on writing business logic. With services like AWS Lambda, Vercel, and Cloudflare Workers, scaling happens automatically.\n\nStartups love serverless because it offers a "pay-for-what-you-use" model, eliminating the need to pay for idle servers. Enterprises love it because it reduces maintenance overhead.\n\nThe debate between monolithic servers vs serverless functions is settling, and serverless is emerging as the preferred choice for modern apps.`,
  },
  {
    id: 5,
    category: 'UI/UX',
    title: 'Figma\'s Advanced Prototyping Features Explained',
    excerpt: 'A practical tutorial on using Figma\'s newest prototyping tools to create highly interactive and realistic user experiences.',
    date: 'May 05, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=600&auto=format&fit=crop',
    content: `Figma continues to push the boundaries of UI/UX design. Their latest update introduces advanced variables and conditional logic in prototyping, bridging the gap between design and development.\n\nDesigners can now create fully interactive forms, shopping carts, and dynamic UI states without writing a single line of code. This allows for much more accurate user testing before engineering handoff.\n\nLearning to use these advanced features is crucial for designers looking to create highly realistic prototypes.`,
  },
  {
    id: 6,
    category: 'Career',
    title: 'How to Land Your First Tech Job in the Current Market',
    excerpt: 'Actionable advice from industry recruiters on building your portfolio, networking, and acing the technical interview.',
    date: 'April 29, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    content: `Landing a tech job right now requires more than just knowing how to code. It requires strategy. Recruiters are overwhelmed with resumes, so you need to stand out.\n\nFirst, build a portfolio of real-world projects—not just tutorial clones. Second, leverage platforms like LinkedIn and Twitter to network with hiring managers directly.\n\nFinally, practice your communication skills. Technical interviews aren't just about getting the right answer; they are about showing how you think and collaborate with a team.`,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Handle closing modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPost(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedPost]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>

      {/* Page Hero Section */}
      <div className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-semibold text-xs mb-8 border border-blue-100 dark:border-blue-950">
              Tech Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
              The <span className="text-blue-600 dark:text-blue-400">Tech Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
              Stay ahead of the curve. Read the latest insights, tutorials, and tech news curated by industry experts.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid Listing */}
      <div className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow line-clamp-3 text-sm font-medium">
                    {post.excerpt}
                  </p>

                  {/* Footer details */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
                    <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <button className="text-blue-600 dark:text-blue-400 flex items-center justify-center p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                      <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pop-up Modal for Full News Article */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPost(null)}
          ></div>

          {/* Modal Container */}
          <div className="relative bg-white dark:bg-slate-800 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transform transition-all animate-in fade-in zoom-in-95 duration-300 z-10">

            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <FaTimes size={20} />
            </button>

            {/* Modal Image Header */}
            <div className="w-full h-64 sm:h-80 relative flex-shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
                  {selectedPost.category}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-10 overflow-y-auto">
              <div className="flex items-center text-slate-500 dark:text-slate-400 font-medium mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
                <span>Published on {selectedPost.date}</span>
                <span className="mx-3">•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
