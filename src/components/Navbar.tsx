import React, { useState, useEffect } from 'react';
import { RouteType } from '../types';
import {
  ChevronDown,
  Brain,
  Bot,
  Cpu,
  PenTool,
  BarChart2,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  FileText,
  Building,
  Star,
  BookOpen,
  PhoneCall,
  Award,
  CheckCircle2,
  Search
} from 'lucide-react';

interface NavbarProps {
  currentRoute: RouteType;
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, navigateTo, openCounseling }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [studentCornerOpen, setStudentCornerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileStudentOpen, setMobileStudentOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (route: RouteType, detailId?: string) => {
    navigateTo(route, detailId);
    setCoursesOpen(false);
    setStudentCornerOpen(false);
    setMobileMenuOpen(false);
  };

  const navItemClass = (isActive: boolean) =>
    `relative px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold transition-all duration-150 rounded-lg flex items-center gap-1 whitespace-nowrap shrink-0 ${
      isActive
        ? 'text-brand-700 bg-brand-50/90 font-bold shadow-2xs'
        : 'text-slate-600 hover:text-brand-600 hover:bg-slate-100/70'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white text-[11px] sm:text-xs py-1.5 font-medium border-b border-emerald-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 font-semibold whitespace-nowrap">Admissions Open 2026:</span>
            <span className="text-slate-300 truncate hidden xl:inline">New Batches in Generative AI, Full-Stack & Data Science</span>
            <span className="text-slate-300 truncate xl:hidden">New Tech Batches</span>
          </div>
          <div className="flex items-center gap-3 xl:gap-4 text-slate-300 shrink-0">
            <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              ISO 9001:2015 Certified
            </span>
            <span className="text-slate-600 hidden lg:inline">•</span>
            <a
              href="tel:+917622990059"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              +91 76229 90059
            </a>
          </div>
        </div>
      </div>

      {/* Main Frosted Glass Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-2'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 xl:gap-4">
            {/* Brand Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group text-left focus:outline-none shrink-0"
              aria-label="MaMo Academy Home"
            >
              <img
                src="/mamo-academy-logo.png"
                alt="MaMo Academy Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/logomamo.png';
                }}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-slate-700">
              <button
                onClick={() => handleNav('home')}
                className={navItemClass(currentRoute === 'home')}
              >
                Home
              </button>

              {/* Courses Dropdown with Mega-Menu */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <button
                  className={navItemClass(currentRoute === 'courses' || currentRoute === 'course-detail')}
                  onClick={() => handleNav('courses')}
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                      coursesOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {coursesOpen && (
                  <div className="absolute top-full left-0 w-[640px] xl:w-[680px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-100 p-6 mt-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-sm">Flagship Career Programs</h3>
                        <p className="text-xs text-slate-500">Job-guaranteed programs with 100% placement support</p>
                      </div>
                      <button
                        onClick={() => handleNav('courses')}
                        className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 hover:gap-1.5 transition-all"
                      >
                        All 16 Courses <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      {/* AI Master Tools */}
                      <button
                        onClick={() => handleNav('course-detail', 'ai-tools')}
                        className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/60 transition-all text-left flex items-start gap-3 group bg-slate-50/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <Brain className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors truncate">
                              AI Master Tools
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full whitespace-nowrap shrink-0 leading-none">
                              Popular
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 font-medium">₹3 - ₹10 LPA • 2 Months</p>
                        </div>
                      </button>

                      {/* Machine Learning */}
                      <button
                        onClick={() => handleNav('course-detail', 'ml')}
                        className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/60 transition-all text-left flex items-start gap-3 group bg-slate-50/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors truncate">
                              Machine Learning
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full whitespace-nowrap shrink-0 leading-none">
                              Trending
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 font-medium">₹6 - ₹15 LPA • 3 Months</p>
                        </div>
                      </button>

                      {/* Artificial Intelligence */}
                      <button
                        onClick={() => handleNav('course-detail', 'ai')}
                        className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/60 transition-all text-left flex items-start gap-3 group bg-slate-50/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors truncate">
                              Artificial Intelligence
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full whitespace-nowrap shrink-0 leading-none">
                              Top Rated
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 font-medium">₹8 - ₹18 LPA • 4 Months</p>
                        </div>
                      </button>

                      {/* Prompt Engineering */}
                      <button
                        onClick={() => handleNav('course-detail', 'pe')}
                        className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/60 transition-all text-left flex items-start gap-3 group bg-slate-50/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <PenTool className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors truncate">
                              Prompt Engineering
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-teal-100 text-teal-800 rounded-full whitespace-nowrap shrink-0 leading-none">
                              GenAI
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 font-medium">₹6 - ₹15 LPA • 1.5 Months</p>
                        </div>
                      </button>

                      {/* Data Science */}
                      <button
                        onClick={() => handleNav('course-detail', 'ds')}
                        className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/60 transition-all text-left flex items-start gap-3 group bg-slate-50/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <BarChart2 className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors truncate">
                              Data Science
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full whitespace-nowrap shrink-0 leading-none">
                              In-Demand
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 font-medium">₹6 - ₹16 LPA • 3 Months</p>
                        </div>
                      </button>

                      {/* Generative AI */}
                      <button
                        onClick={() => handleNav('course-detail', 'gen-ai')}
                        className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/60 transition-all text-left flex items-start gap-3 group bg-slate-50/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors truncate">
                              Generative AI
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full whitespace-nowrap shrink-0 leading-none">
                              Hot
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 font-medium">₹7 - ₹18 LPA • 2.5 Months</p>
                        </div>
                      </button>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-3xl">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Live client projects & mock interviews included</span>
                      </div>
                      <button
                        onClick={() => handleNav('courses')}
                        className="font-bold text-brand-600 hover:underline"
                      >
                        Explore all programs
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNav('about')}
                className={navItemClass(currentRoute === 'about')}
              >
                About Us
              </button>

              {/* Student Corner Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setStudentCornerOpen(true)}
                onMouseLeave={() => setStudentCornerOpen(false)}
              >
                <button
                  className={navItemClass([
                    'internship', 'final-year', 'visit', 'reviews', 'blog', 'nios'
                  ].includes(currentRoute))}
                >
                  <span>Student Corner</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                      studentCornerOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {studentCornerOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-slate-100 p-2 mt-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    {[
                      { route: 'internship' as RouteType, label: 'IT Internship in Vadodara', icon: Briefcase },
                      { route: 'final-year' as RouteType, label: 'Final Year Project Training', icon: GraduationCap },
                      { route: 'visit' as RouteType, label: 'Industrial Visits', icon: Building },
                      { route: 'reviews' as RouteType, label: 'Student Reviews', icon: Star },
                      { route: 'blog' as RouteType, label: 'Tech Blogs & Guides', icon: BookOpen },
                      { route: 'nios' as RouteType, label: 'NIOS Learning Centre', icon: FileText },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleNav(item.route)}
                          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-brand-600 hover:bg-brand-50/70 transition-all text-left"
                        >
                          <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNav('placements')}
                className={navItemClass(currentRoute === 'placements')}
              >
                Placements
              </button>

              <button
                onClick={() => handleNav('hire')}
                className={navItemClass(currentRoute === 'hire')}
              >
                Hire From Us
              </button>

              <button
                onClick={() => handleNav('skill')}
                className={navItemClass(currentRoute === 'skill')}
              >
                Skill Certification
              </button>

              <button
                onClick={() => handleNav('contact')}
                className={navItemClass(currentRoute === 'contact')}
              >
                Contact Us
              </button>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <button
                onClick={() => handleNav('courses')}
                className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors shrink-0"
                title="Search courses"
                aria-label="Search courses"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={openCounseling}
                className="whitespace-nowrap shrink-0 inline-flex items-center justify-center px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs font-bold tracking-wide text-white bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-brand-500/20"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={openCounseling}
                className="px-3 py-1.5 text-xs font-bold text-white bg-brand-600 rounded-full shadow-sm"
              >
                Consultation
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header with Logo and Close Button */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
                <button
                  onClick={() => handleNav('home')}
                  className="flex items-center gap-2 text-left focus:outline-none"
                  aria-label="MaMo Academy Home"
                >
                  <img
                    src="/mamo-academy-logo.png"
                    alt="MaMo Academy"
                    className="h-8 w-auto object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/logomamo.png';
                    }}
                  />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-4 sm:p-6 space-y-1.5">
                <div className="pb-2 mb-2 border-b border-slate-100">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Navigation</span>
                </div>

                <button
                  onClick={() => handleNav('home')}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
                    currentRoute === 'home'
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Home
                </button>

                {/* Mobile Courses Accordion */}
                <div>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Courses</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                  </button>
                  {mobileCoursesOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-2xl mt-1 text-xs font-semibold">
                      <button onClick={() => handleNav('course-detail', 'ai-tools')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">AI Master Tools</button>
                      <button onClick={() => handleNav('course-detail', 'ml')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Machine Learning</button>
                      <button onClick={() => handleNav('course-detail', 'ai')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Artificial Intelligence</button>
                      <button onClick={() => handleNav('course-detail', 'pe')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Prompt Engineering</button>
                      <button onClick={() => handleNav('course-detail', 'ds')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Data Science</button>
                      <button onClick={() => handleNav('course-detail', 'gen-ai')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Generative AI</button>
                      <button onClick={() => handleNav('courses')} className="w-full text-left py-2 px-2 text-brand-600 font-bold border-t border-slate-200 mt-1">View All 16 Courses →</button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNav('about')}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
                    currentRoute === 'about'
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  About Us
                </button>

                {/* Mobile Student Corner Accordion */}
                <div>
                  <button
                    onClick={() => setMobileStudentOpen(!mobileStudentOpen)}
                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
                  >
                    <span>Student Corner</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileStudentOpen ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                  </button>
                  {mobileStudentOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-2xl mt-1 text-xs font-semibold">
                      <button onClick={() => handleNav('internship')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">IT Internship In Vadodara</button>
                      <button onClick={() => handleNav('final-year')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Final Year Project Training</button>
                      <button onClick={() => handleNav('visit')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Industrial Visit</button>
                      <button onClick={() => handleNav('reviews')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Student Reviews</button>
                      <button onClick={() => handleNav('blog')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">Blog</button>
                      <button onClick={() => handleNav('nios')} className="w-full text-left py-2 px-2 text-slate-700 hover:text-brand-600">NIOS Learning Centre</button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNav('placements')}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
                    currentRoute === 'placements'
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Placements
                </button>

                <button
                  onClick={() => handleNav('hire')}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
                    currentRoute === 'hire'
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Hire From Us
                </button>

                <button
                  onClick={() => handleNav('skill')}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
                    currentRoute === 'skill'
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Skill Certification
                </button>

                <button
                  onClick={() => handleNav('contact')}
                  className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold transition-colors ${
                    currentRoute === 'contact'
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 sm:p-6 border-t border-slate-100 space-y-3 bg-slate-50/70">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCounseling();
                }}
                className="w-full py-3 rounded-xl text-center font-bold text-white bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 shadow-md shadow-brand-500/20 hover:shadow-glow transition-all"
              >
                Book Free Consultation
              </button>
              <div className="text-center text-xs text-slate-500">
                Call: <a href="tel:+917622990059" className="font-bold text-brand-600 hover:underline">+91 76229 90059</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
