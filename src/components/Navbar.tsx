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
    `relative px-3.5 py-2 text-[13px] font-bold tracking-wide transition-all rounded-full flex items-center gap-1.5 ${
      isActive
        ? 'text-brand-700 bg-brand-50/90 shadow-sm'
        : 'text-slate-600 hover:text-brand-600 hover:bg-slate-100/70'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium border-b border-emerald-900/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 font-semibold">Admissions Open 2026:</span>
            <span className="text-slate-300">New Batches in Generative AI, Full-Stack & Data Science</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              ISO 9001:2015 Certified
            </span>
            <span>•</span>
            <a
              href="tel:+917622990059"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              +91 76229 90059
            </a>
          </div>
        </div>
      </div>

      {/* Main Frosted Glass Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/80 py-2.5'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
              aria-label="Mamo TechnoLabs Home"
            >
              <div className="relative">
                <img
                  src="/logomamo.png"
                  alt="Mamo TechnoLabs Logo"
                  className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                  Mamo<span className="text-gradient-brand">TechnoLabs</span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 font-bold uppercase mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Innovations Unlimited
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-semibold text-slate-700">
              <button
                onClick={() => handleNav('home')}
                className={navItemClass(currentRoute === 'home')}
              >
                HOME
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
                  <span>COURSES</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      coursesOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>

                {coursesOpen && (
                  <div className="absolute top-full left-0 w-[620px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-100 p-6 mt-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
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

                    <div className="grid grid-cols-2 gap-3">
                      {/* AI Master Tools */}
                      <button
                        onClick={() => handleNav('course-detail', 'ai-tools')}
                        className="p-3.5 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/60 transition-all text-left flex items-start gap-3 group bg-slate-50/40"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                          <Brain className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                              AI Master Tools
                            </h4>
                            <span className="text-[9px] px-1.5 py-0.2 bg-blue-100 text-blue-700 font-bold rounded-full">
                              Popular
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">₹3 - ₹10 LPA • 2 Months</p>
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
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                              Machine Learning
                            </h4>
                            <span className="text-[9px] px-1.5 py-0.2 bg-amber-100 text-amber-700 font-bold rounded-full">
                              Trending
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">₹6 - ₹15 LPA • 3 Months</p>
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
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                              Artificial Intelligence
                            </h4>
                            <span className="text-[9px] px-1.5 py-0.2 bg-emerald-100 text-emerald-700 font-bold rounded-full">
                              Top Rated
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">₹8 - ₹18 LPA • 4 Months</p>
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
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                              Prompt Engineering
                            </h4>
                            <span className="text-[9px] px-1.5 py-0.2 bg-teal-100 text-teal-700 font-bold rounded-full">
                              GenAI
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">₹6 - ₹15 LPA • 1.5 Months</p>
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
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                              Data Science
                            </h4>
                            <span className="text-[9px] px-1.5 py-0.2 bg-blue-100 text-blue-700 font-bold rounded-full">
                              In-Demand
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">₹6 - ₹16 LPA • 3 Months</p>
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
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                              Generative AI
                            </h4>
                            <span className="text-[9px] px-1.5 py-0.2 bg-emerald-100 text-emerald-700 font-bold rounded-full">
                              Hot
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 font-medium">₹7 - ₹18 LPA • 2.5 Months</p>
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
                ABOUT US
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
                  <span>STUDENT CORNER</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      studentCornerOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>

                {studentCornerOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-xl border border-slate-100 p-2 mt-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
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
                PLACEMENTS
              </button>

              <button
                onClick={() => handleNav('hire')}
                className={navItemClass(currentRoute === 'hire')}
              >
                HIRE FROM US
              </button>

              <button
                onClick={() => handleNav('skill')}
                className={navItemClass(currentRoute === 'skill')}
              >
                SKILL CERTIFICATION
              </button>

              <button
                onClick={() => handleNav('contact')}
                className={navItemClass(currentRoute === 'contact')}
              >
                CONTACT US
              </button>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <button
                onClick={() => handleNav('courses')}
                className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                title="Search courses"
                aria-label="Search courses"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={openCounseling}
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-black tracking-wide text-white bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-brand-500/20"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-slate-900/40 backdrop-blur-sm z-50 animate-in fade-in duration-200">
          <div className="bg-white h-full max-w-sm ml-auto p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              <div className="pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Navigation</span>
              </div>

              <button
                onClick={() => handleNav('home')}
                className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
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
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
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
                className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
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
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileStudentOpen ? 'rotate-180' : ''}`} />
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
                className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                Placements
              </button>

              <button
                onClick={() => handleNav('hire')}
                className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                Hire From Us
              </button>

              <button
                onClick={() => handleNav('skill')}
                className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                Skill Certification
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                Contact Us
              </button>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCounseling();
                }}
                className="w-full py-3 rounded-xl text-center font-bold text-white bg-gradient-to-r from-brand-600 to-emerald-600 shadow-md"
              >
                Book Free Consultation
              </button>
              <div className="text-center text-xs text-slate-500">
                Call: <a href="tel:+917622990059" className="font-bold text-brand-600">+91 76229 90059</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
