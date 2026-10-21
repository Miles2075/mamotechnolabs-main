import React, { useState } from 'react';
import { RouteType, CatalogCourse } from '../types';
import { catalogCourses } from '../data/coursesData';
import {
  Search,
  Clock,
  RotateCcw,
  Phone,
  ChevronRight,
  Brain,
  Sparkles,
  Cpu,
  Bot,
  Code,
  ShieldCheck,
  Layers,
  BarChart2,
  PieChart,
  Palette,
  Smartphone,
  Globe,
  Terminal,
  Cloud,
  ArrowRight,
  Filter,
  CheckCircle2,
  TrendingUp,
  X,
  BookOpen
} from 'lucide-react';

interface ViewCoursesPageProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: (courseName?: string) => void;
}

export const ViewCoursesPage: React.FC<ViewCoursesPageProps> = ({ navigateTo, openCounseling }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  const categoryOptions = [
    'Trending',
    'AI & Machine Learning',
    'Analytics',
    'Programing Development',
    'Web Development',
    'Mobile App Development',
    'Software Testing & QA',
    'Digital Marketing',
    'Design'
  ];

  const durationOptions = [
    '1 Month',
    '1.5 Months',
    '2 Months',
    '2.5 Months',
    '3 Months',
    '4 Months'
  ];

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleDuration = (dur: string) => {
    if (selectedDurations.includes(dur)) {
      setSelectedDurations(selectedDurations.filter(d => d !== dur));
    } else {
      setSelectedDurations([...selectedDurations, dur]);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedDurations([]);
  };

  const filteredCourses = catalogCourses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => {
        if (cat === 'Trending') return course.badges.includes('Trending');
        return course.category.toLowerCase().includes(cat.toLowerCase());
      });

    const matchesDuration =
      selectedDurations.length === 0 || selectedDurations.includes(course.duration);

    return matchesSearch && matchesCategory && matchesDuration;
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain className="w-5 h-5 text-brand-600" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-brand-600" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-brand-600" />;
      case 'bot': return <Bot className="w-5 h-5 text-brand-600" />;
      case 'code': return <Code className="w-5 h-5 text-brand-600" />;
      case 'shield-check': return <ShieldCheck className="w-5 h-5 text-brand-600" />;
      case 'bar-chart': return <BarChart2 className="w-5 h-5 text-brand-600" />;
      case 'pie-chart': return <PieChart className="w-5 h-5 text-brand-600" />;
      case 'palette': return <Palette className="w-5 h-5 text-brand-600" />;
      case 'smartphone': return <Smartphone className="w-5 h-5 text-brand-600" />;
      case 'globe': return <Globe className="w-5 h-5 text-brand-600" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-brand-600" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-brand-600" />;
      default: return <Layers className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. REFRESHED HEADER BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Official Curriculum Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Industry Job-Ready <span className="text-gradient-brand">Courses</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From Generative AI and Machine Learning to Cloud Computing and Full-Stack Engineering. Master production tech and launch your career.
          </p>
          <div className="flex items-center justify-center gap-6 pt-2 text-xs font-semibold text-slate-400">
            <span>• 16 Industry Curricula</span>
            <span>• 100% Placement Support</span>
            <span>• Live Project Labs</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. FILTERING & COURSE CATALOG
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Active Filters Bar if any */}
          {(selectedCategories.length > 0 || selectedDurations.length > 0 || searchQuery) && (
            <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Active Filters:</span>
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-xs text-slate-800 font-semibold">
                    "{searchQuery}"
                    <button onClick={() => setSearchQuery('')}><X className="w-3 h-3 text-slate-400 hover:text-slate-600" /></button>
                  </span>
                )}
                {selectedCategories.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold border border-brand-200">
                    {c}
                    <button onClick={() => toggleCategory(c)}><X className="w-3 h-3 text-brand-600 hover:text-brand-800" /></button>
                  </span>
                ))}
                {selectedDurations.map((d) => (
                  <span key={d} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
                    {d}
                    <button onClick={() => toggleDuration(d)}><X className="w-3 h-3 text-blue-600 hover:text-blue-800" /></button>
                  </span>
                ))}
              </div>
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Clear All
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sticky Sidebar Filters */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              
              {/* Search Box */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Search Courses
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, technology..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Categories
                  </h3>
                  {selectedCategories.length > 0 && (
                    <button onClick={() => setSelectedCategories([])} className="text-[10px] text-brand-600 font-bold">Clear</button>
                  )}
                </div>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                  {categoryOptions.map((cat) => {
                    const isChecked = selectedCategories.includes(cat);
                    return (
                      <label
                        key={cat}
                        onClick={() => toggleCategory(cat)}
                        className={`flex items-center justify-between p-2 rounded-xl text-xs font-semibold cursor-pointer select-none transition-colors ${
                          isChecked ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat}</span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded text-brand-600 focus:ring-brand-400 border-slate-300"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Course Duration
                  </h3>
                  {selectedDurations.length > 0 && (
                    <button onClick={() => setSelectedDurations([])} className="text-[10px] text-brand-600 font-bold">Clear</button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {durationOptions.map((dur) => {
                    const isChecked = selectedDurations.includes(dur);
                    return (
                      <button
                        key={dur}
                        onClick={() => toggleDuration(dur)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border text-center transition-all ${
                          isChecked
                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {dur}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetFilters}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>

              {/* Book Free Demo Class Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-700 text-white space-y-3 shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  Free Demo Class
                </span>
                <h4 className="text-base font-black leading-snug">
                  Experience Our Teaching Methodology Free
                </h4>
                <p className="text-xs text-brand-100 leading-relaxed">
                  Attend a live demo session before you make any commitment.
                </p>
                <button
                  onClick={() => openCounseling()}
                  className="w-full py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-sm hover:bg-slate-100 transition-colors"
                >
                  Book Demo Seat
                </button>
              </div>

            </aside>

            {/* Courses Grid */}
            <main className="lg:col-span-8 space-y-6">
              
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-slate-500">
                  Showing <span className="text-slate-900">{filteredCourses.length}</span> programs
                </p>
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  All Include 100% Placement Assistance
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-400 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      
                      {/* Top Bar with Icon & Badges */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {renderIcon(course.icon)}
                        </div>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {course.badges.map((b, i) => (
                            <span
                              key={i}
                              className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          {course.category}
                        </span>
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      {/* Highlight Specs */}
                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-brand-600" />
                          <span className="font-semibold">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-bold text-slate-900">₹4 - ₹15 LPA*</span>
                        </div>
                      </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (course.detailedSlug) {
                            navigateTo('course-detail', course.detailedSlug);
                          } else {
                            openCounseling(course.name);
                          }
                        }}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-800 hover:text-brand-700 font-bold text-xs transition-colors text-center"
                      >
                        {course.detailedSlug ? 'View Syllabus' : 'Program Details'}
                      </button>
                      <button
                        onClick={() => openCounseling(course.name)}
                        className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-1"
                      >
                        <span>Enroll</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">No matching programs found</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try relaxing your search terms or clearing duration and category filters.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-sm hover:bg-brand-700"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}

            </main>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ViewCoursesPage;
