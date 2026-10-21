import React, { useState } from 'react';
import { RouteType } from '../types';
import { catalogCourses } from '../data/coursesData';
import { universityPartners, learningFacilityImages } from '../data/universitiesData';
import { generalFaqs } from '../data/faqsData';
import { blogPosts } from '../data/blogsData';
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Star,
  Play,
  ArrowRight,
  ShieldCheck,
  Code,
  Brain,
  Cpu,
  Sparkles,
  Bot,
  GraduationCap,
  Target,
  Layers,
  Send,
  Award,
  TrendingUp,
  Search,
  Briefcase,
  Users,
  Building2,
  Laptop,
  Check,
  Terminal,
  Zap,
  BarChart2
} from 'lucide-react';

interface HomePageProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: (course?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigateTo, openCounseling }) => {
  const [selectedFilter, setSelectedFilter] = useState('Trending');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [heroSearch, setHeroSearch] = useState('');
  const [confusedSubmitted, setConfusedSubmitted] = useState(false);
  const [confusedData, setConfusedData] = useState({
    name: '',
    email: '',
    phone: '',
    training: 'ai',
    robotCheck: false
  });

  const categories = [
    'Trending',
    'AI & Machine Learning',
    'Analytics & BI',
    'Web Development',
    'Software Testing & QA',
    'Digital Marketing',
    'Design'
  ];

  const filteredCourses = catalogCourses.filter(c => {
    // Search match
    if (heroSearch.trim()) {
      const q = heroSearch.toLowerCase();
      const matchesSearch =
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    if (selectedFilter === 'Trending') return c.badges.includes('Trending');
    if (selectedFilter === 'Analytics & BI') return c.category.includes('Analytics');
    if (selectedFilter === 'AI & Machine Learning') return c.category.includes('AI') || c.category.includes('Machine');
    if (selectedFilter === 'Software Testing & QA') return c.category.includes('Testing');
    if (selectedFilter === 'Digital Marketing') return c.category.includes('Marketing');
    if (selectedFilter === 'Web Development') return c.category.includes('Web') || c.category.includes('Programing');
    if (selectedFilter === 'Design') return c.category.includes('Design');
    return true;
  });

  const handleConfusedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confusedData.robotCheck) {
      alert('Please check the verification box.');
      return;
    }
    setConfusedSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION (Modern Mesh Ambient Glow & Interactive Card)
         ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 lg:py-24 mesh-radial-glow border-b border-slate-200/60">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-brand-400/15 via-emerald-300/10 to-teal-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Value Prop */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold border border-slate-200/80 shadow-sm hover:border-brand-300 transition-colors">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-brand-700 font-extrabold">100% Job Guarantee Program</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">340+ Placed in 2025-2026</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Master Future Tech. <br />
                <span className="text-gradient-brand">
                  Get Hired by Top IT Firms.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                ISO 9001:2015 certified finishing school with real production codebases, 1-on-1 industry mentorship, and dedicated recruitment drives across India.
              </p>

              {/* Quick Search & Filter Input */}
              <div className="max-w-lg mx-auto lg:mx-0">
                <div className="relative flex items-center bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/80 p-1.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20 transition-all">
                  <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    placeholder="Search courses (e.g. AI Tools, Python, Data Science, MERN)..."
                    className="w-full px-3 py-2.5 text-xs sm:text-sm text-slate-800 bg-transparent focus:outline-none"
                  />
                  {heroSearch ? (
                    <button
                      onClick={() => setHeroSearch('')}
                      className="text-xs text-slate-400 hover:text-slate-600 px-2 font-bold"
                    >
                      Clear
                    </button>
                  ) : (
                    <button
                      onClick={() => navigateTo('courses')}
                      className="px-4 py-2 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors shrink-0 shadow-sm"
                    >
                      Browse
                    </button>
                  )}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <button
                  onClick={() => openCounseling()}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-500 hover:to-teal-500 active:scale-95 text-white font-extrabold text-sm shadow-xl shadow-brand-600/25 transition-all tracking-wide flex items-center justify-center gap-2"
                >
                  <span>Book Free 1-on-1 Career Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateTo('courses')}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200/80 transition-all shadow-sm hover:border-slate-300 flex items-center justify-center gap-2"
                >
                  <Code className="w-4 h-4 text-brand-600" />
                  <span>Explore 16+ Curricula</span>
                </button>
              </div>

              {/* Verified Trust Stats */}
              <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="bg-white/60 p-3 rounded-2xl border border-white">
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900">15+ Yrs</h4>
                  <p className="text-xs text-slate-500 font-medium">Finishing School Legacy</p>
                </div>
                <div className="bg-white/60 p-3 rounded-2xl border border-white">
                  <h4 className="text-xl sm:text-2xl font-black text-brand-600">95%</h4>
                  <p className="text-xs text-slate-500 font-medium">Placement Track Record</p>
                </div>
                <div className="bg-white/60 p-3 rounded-2xl border border-white">
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900">₹18 LPA</h4>
                  <p className="text-xs text-slate-500 font-medium">Highest Package Offered</p>
                </div>
              </div>

            </div>

            {/* Right Column: High-End Interactive Code & Program Preview Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                
                {/* Glowing border effect */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-20 blur-xl"></div>

                {/* Main Card */}
                <div className="relative rounded-3xl bg-slate-900 text-white p-6 shadow-2xl border border-slate-800 space-y-5">
                  
                  {/* Top Bar with window dots */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                      <Terminal className="w-3.5 h-3.5 text-brand-400" />
                      <span>career-accelerator.ts</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 text-[10px] font-bold border border-brand-500/20">
                      Live Cohort
                    </span>
                  </div>

                  {/* Code snippet visualization */}
                  <div className="font-mono text-xs space-y-1.5 text-slate-300 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
                    <p className="text-slate-500">// Welcome to Mamo TechnoLabs Academy</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">learner</span> = {'{'}{' '}
                      <span className="text-teal-400">focus</span>:{' '}
                      <span className="text-amber-300">"Generative AI & FullStack"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-teal-400">mentorship</span>:{' '}
                      <span className="text-emerald-400">"1-on-1 Senior Architect"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-teal-400">placementReady</span>:{' '}
                      <span className="text-amber-400">true</span>
                    </p>
                    <p>{'}'};</p>
                    <p className="text-emerald-400 pt-1">
                      → Output: Ready for ₹6 - ₹18 LPA Tech Roles 🚀
                    </p>
                  </div>

                  {/* Featured Flagship Tracks Quick Select */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Choose Your Track:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => navigateTo('course-detail', 'ai-tools')}
                        className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-brand-900/40 border border-slate-700 hover:border-brand-500/40 text-left transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-brand-400 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-white group-hover:text-brand-300">AI Master Tools</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5">Prompt + LLM Ops</p>
                      </button>

                      <button
                        onClick={() => navigateTo('course-detail', 'ml')}
                        className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-brand-900/40 border border-slate-700 hover:border-brand-500/40 text-left transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-white group-hover:text-brand-300">Machine Learning</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5">Scikit + Neural Nets</p>
                      </button>

                      <button
                        onClick={() => navigateTo('course-detail', 'ai')}
                        className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-brand-900/40 border border-slate-700 hover:border-brand-500/40 text-left transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-white group-hover:text-brand-300">Artificial Intel.</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5">Deep Learning & Vision</p>
                      </button>

                      <button
                        onClick={() => navigateTo('course-detail', 'ds')}
                        className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-brand-900/40 border border-slate-700 hover:border-brand-500/40 text-left transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <BarChart2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-bold text-white group-hover:text-brand-300">Data Science</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-0.5">Python + Big Data</p>
                      </button>
                    </div>
                  </div>

                  {/* Floating Metric Banner at Bottom of Card */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <img className="w-7 h-7 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Student" />
                        <img className="w-7 h-7 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Student" />
                        <img className="w-7 h-7 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Student" />
                      </div>
                      <span className="text-[11px] text-slate-400 font-semibold">1,200+ Alumni</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-black">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>4.9 / 5.0 Rating</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. CORPORATE RECRUITERS & UNIVERSITY MARQUEE
         ───────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            Our Graduates are Hired By 100+ Leading Tech Giants & University Partners
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Gradient Fade Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex space-x-12 animate-marquee items-center">
            {[
              'Tata Consultancy Services',
              'Infosys',
              'L&T Technology Services',
              'Wipro',
              'Cognizant',
              'Civica',
              'GSFC University',
              'Parul University',
              'RK University',
              'TeamLease Skills University',
              'HCL Technologies',
              'Tech Mahindra',
              'Tata Consultancy Services',
              'Infosys',
              'L&T Technology Services',
              'Wipro',
              'Cognizant',
              'GSFC University',
              'Parul University'
            ].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/60 shadow-xs shrink-0"
              >
                <Building2 className="w-4 h-4 text-brand-600" />
                <span className="text-xs sm:text-sm font-bold text-slate-700 whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. EXPLORE POPULAR COURSES (Modern Bento Card Grid)
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Job-Oriented Certification Programs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Explore Industry Curated Courses
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Master high-paying technologies with practical coding labs, capstone projects, and real enterprise standards.
              </p>
            </div>

            <button
              onClick={() => navigateTo('courses')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs hover:border-brand-500 hover:text-brand-600 shadow-sm transition-all self-start md:self-auto"
            >
              <span>View All 16 Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedFilter === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.slice(0, 6).map((course) => (
              <div
                key={course.id}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badges & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {course.category}
                    </span>
                    {course.badges.length > 0 && (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {course.badges[0]}
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Highlight Specs */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
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

                {/* Card Action Buttons */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (course.detailedSlug) {
                        navigateTo('course-detail', course.detailedSlug);
                      } else {
                        navigateTo('courses');
                      }
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-800 hover:text-brand-700 font-bold text-xs transition-colors text-center"
                  >
                    View Syllabus
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
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 text-sm">No courses found matching your filter.</p>
              <button
                onClick={() => {
                  setSelectedFilter('Trending');
                  setHeroSearch('');
                }}
                className="mt-3 text-xs font-bold text-brand-600 underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. WHY CHOOSE MAMO TECHNOLABS (Modern Bento Grid)
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <Target className="w-3.5 h-3.5 text-blue-600" />
              <span>Finishing School Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Students Choose Mamo TechnoLabs
            </h2>
            <p className="text-slate-600 text-sm">
              We bridge the gap between traditional college degrees and modern tech company recruitment demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: 100% Placement Guarantee */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 top-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 max-w-lg z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 text-slate-950 flex items-center justify-center font-black">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black">100% Placement Assistance with Verified Hires</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our corporate placement cell actively schedules campus drives, technical mock interviews, and resume optimization sessions until you secure your offer letter.
                </p>
              </div>
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 mt-6 z-10">
                <div>
                  <span className="text-2xl font-black text-brand-400">340+</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Students Placed</p>
                </div>
                <div>
                  <span className="text-2xl font-black text-white">100+</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Hiring Partners</p>
                </div>
                <div>
                  <span className="text-2xl font-black text-amber-400">₹18 LPA</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Top Salary</p>
                </div>
              </div>
            </div>

            {/* Bento Card 2: 1-on-1 Mentorship */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:border-brand-300 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">1-on-1 Architect Mentorship</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Learn directly from industry veterans with 15+ years of live architectural engineering and AI deployment expertise.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-600">
                <span>Personal Code Reviews Included</span>
                <Check className="w-4 h-4" />
              </div>
            </div>

            {/* Bento Card 3: Live Capstone Projects */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:border-brand-300 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Live Client Codebases</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No toy projects. Build production-grade LLM agents, scalable microservices, and reactive full-stack web applications.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
                <span>GitHub Verified Portfolios</span>
                <Check className="w-4 h-4" />
              </div>
            </div>

            {/* Bento Card 4: Recognitions & Accreditations */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-brand-50 to-emerald-50/50 border border-brand-200/70 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Government & ISO 9001:2015 Accredited</h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl">
                  Our curriculum adheres to national skill development frameworks and official academic MOUs with top Indian universities including GSFC University, Parul University, and TeamLease.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-slate-800 shadow-xs border border-slate-200">
                  ✓ ISO 9001:2015 Certified
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-slate-800 shadow-xs border border-slate-200">
                  ✓ CMMI Level 3 Standards
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white text-xs font-bold text-slate-800 shadow-xs border border-slate-200">
                  ✓ Official University Tie-Ups
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. UNIVERSITY MOUS & LAB FACILITIES
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5 text-brand-600" />
                <span>Academic Collaborations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our University Partners & Learning Labs
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Partnered with prestigious academic institutions to train engineering, BCA, MCA, and Diploma scholars.
              </p>
            </div>

            <button
              onClick={() => navigateTo('about')}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1.5"
            >
              <span>Read About Our Campus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* University Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universityPartners.map((u) => (
              <div
                key={u.name}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all space-y-4 text-center group"
              >
                <div className="h-16 flex items-center justify-center p-2 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-brand-50/50 transition-colors">
                  {u.img ? (
                    <img src={u.img} alt={u.name} className="max-h-12 max-w-full object-contain" />
                  ) : (
                    <span className="font-extrabold text-sm text-slate-900 group-hover:text-brand-600 transition-colors">
                      {u.name}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-sm text-slate-900">{u.name}</h4>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-brand-600">{u.badge}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Facility Highlights Bento */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6">World-Class Training Infrastructure</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'High-Performance Coding Bays', desc: 'Latest multicore workstations with dedicated GPUs for Deep Learning and AI model tuning.' },
                { title: 'Gigabit Fiber Connectivity', desc: 'Redundant gigabit internet lines ensuring zero downtime during cloud sprints and deployments.' },
                { title: 'Ergonomic Developer Suites', desc: 'Spacious collaborative seating designed for intense hackathons and sprint code reviews.' },
                { title: 'Interactive Smart Classrooms', desc: 'Digital whiteboards, audio-visual recording for review, and hybrid lecture capabilities.' }
              ].map((f, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs">
                    0{i + 1}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. FREE CAREER COUNSELING CONSULTATION BOX
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free Expert Consultation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Confused About Which IT Course Fits Your Career?
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Speak directly with our senior educational advisors. We assess your background, aptitude, and market demand to recommend the ideal learning track.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Free 30-minute career roadmapping session</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>Current salary trend & job openings analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    <span>EMI fee installment options available</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10">
                {confusedSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-white">Consultation Request Received!</h3>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto">
                      Our senior career advisor will contact you within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConfusedSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={confusedData.name}
                        onChange={(e) => setConfusedData({ ...confusedData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/90 text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={confusedData.email}
                          onChange={(e) => setConfusedData({ ...confusedData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/90 text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-200 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={confusedData.phone}
                          onChange={(e) => setConfusedData({ ...confusedData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/90 text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1">Interested Technology</label>
                      <select
                        value={confusedData.training}
                        onChange={(e) => setConfusedData({ ...confusedData, training: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/90 text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-400"
                      >
                        <option value="ai">Artificial Intelligence & Deep Learning</option>
                        <option value="ai-tools">AI Master Tools & Prompt Engineering</option>
                        <option value="ml">Machine Learning & Predictive Modeling</option>
                        <option value="ds">Data Science & Big Data</option>
                        <option value="web">Full-Stack Web Development</option>
                        <option value="qa">Software Testing & Automation</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="confusedRobot"
                        checked={confusedData.robotCheck}
                        onChange={(e) => setConfusedData({ ...confusedData, robotCheck: e.target.checked })}
                        className="rounded text-brand-600 focus:ring-brand-400 w-4 h-4"
                      />
                      <label htmlFor="confusedRobot" className="text-xs text-slate-300">
                        I agree to receive course updates & counseling advice
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-400 via-emerald-400 to-teal-400 hover:opacity-95 transition-opacity shadow-lg"
                    >
                      Book My Free Counseling Session
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. FREQUENTLY ASKED QUESTIONS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold">
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about our courses, certifications, and placement process.
            </p>
          </div>

          <div className="space-y-3">
            {generalFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. BOTTOM GRADUATION CTA BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Accelerate Your Career in Tech?
          </h2>
          <p className="text-brand-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Join over 1,200 successful graduates. Talk to our career counselors today and take the first step towards your high-paying tech offer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openCounseling()}
              className="px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-colors"
            >
              Get Free Career Counseling
            </button>
            <button
              onClick={() => navigateTo('skill')}
              className="px-8 py-4 rounded-full bg-slate-900/40 hover:bg-slate-900/60 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-colors"
            >
              Take Free Skill Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
