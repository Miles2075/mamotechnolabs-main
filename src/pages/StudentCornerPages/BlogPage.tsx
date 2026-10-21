import React, { useState } from 'react';
import { RouteType, BlogPost } from '../../types';
import { blogPosts, blogCategories } from '../../data/blogsData';
import { Calendar, Clock, ArrowRight, Search, X, BookOpen, Share2 } from 'lucide-react';

interface BlogPageProps {
  navigateTo: (route: RouteType) => void;
}

export const BlogPage: React.FC<BlogPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tech Career & Engineering Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Articles, Guides & <br />
            <span className="text-gradient-brand">Industry Trends</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical tutorials, salary insights, prompt engineering roadmaps, and career advice written by practicing tech architects.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. FILTER & BLOG ARTICLES GRID
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                      <span className="text-brand-600 font-bold uppercase tracking-wider">{post.category}</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-black text-base text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs font-bold text-brand-600">
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-400 font-normal text-[11px]">{post.date}</span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">{activeArticle.category}</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
                <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 leading-tight">{activeArticle.title}</h2>
              <div className="flex items-center gap-3 text-xs text-slate-400 border-b border-slate-100 pb-3">
                <span>By Mamo Editorial Team</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                <p>{activeArticle.excerpt}</p>
                <p>
                  At Mamo TechnoLabs, our curriculum directly integrates these industry shifts into every practical lab. Scholars get exposure to end-to-end continuous integration, code auditing, and deployment on enterprise cloud providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
