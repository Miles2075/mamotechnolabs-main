import React, { useState } from 'react';
import { RouteType, BlogPost } from '../../types';
import { blogPosts, blogCategories } from '../../data/blogsData';
import { Calendar, Clock, ArrowRight, Search, X } from 'lucide-react';

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
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Our <span className="text-brand-500">Blog</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Articles, tutorials, industry insights, and career growth strategies from technology experts.
          </p>
        </div>
      </section>

      {/* Blogs Main Section */}
      <section className="py-20 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-brand-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider block">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-base text-gray-900 group-hover:text-brand-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mt-1">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span className="font-bold text-brand-600 group-hover:underline flex items-center gap-1">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-5 bg-navy-950 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] text-brand-400 font-bold uppercase tracking-widest">{activeArticle.category}</span>
                <h3 className="text-base font-bold line-clamp-1">{activeArticle.title}</h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100">
                <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-black text-gray-900">{activeArticle.title}</h2>
              <div className="flex items-center gap-3 text-xs text-gray-400 pb-2 border-b border-gray-100">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {activeArticle.excerpt}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                At Mamo TechnoLabs, we focus on delivering real-world technical skills that empower students and professionals to excel in rapidly transforming technical landscapes. Staying abreast of industry methodologies, hands-on tool usage, and structural fundamentals guarantees long-term career resilience.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
