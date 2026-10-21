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
  Search,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  FileText,
  Building,
  Star,
  BookOpen
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
      setIsScrolled(window.scrollY > 30);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
            aria-label="Mamo TechnoLabs Home"
          >
            <img
              src="/logomamo.png"
              alt="Mamo TechnoLabs Logo"
              className="h-10 sm:h-12 object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback if logo not found
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 leading-none">
                Mamo<span className="text-brand-600">TechnoLabs</span>
              </span>
              <span className="text-[10px] tracking-wider text-gray-500 font-semibold uppercase mt-0.5">
                Innovations Unlimited
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 text-sm font-semibold text-gray-700">
            
            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors hover:text-brand-600 ${
                  currentRoute === 'courses' || currentRoute === 'course-detail'
                    ? 'text-brand-600 bg-brand-50'
                    : ''
                }`}
                onClick={() => handleNav('courses')}
              >
                <span>COURSES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    coursesOpen ? 'rotate-180 text-brand-600' : ''
                  }`}
                />
              </button>

              {/* Mega Menu Popup */}
              {coursesOpen && (
                <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Course Card 1 */}
                    <button
                      onClick={() => handleNav('course-detail', 'ai-tools')}
                      className="p-3 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-left flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-brand-600">AI Master Tools</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-700 font-bold rounded">New</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">₹3 - ₹10 LPA* avg salary</p>
                      </div>
                    </button>

                    {/* Course Card 2 */}
                    <button
                      onClick={() => handleNav('course-detail', 'ml')}
                      className="p-3 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-left flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-brand-600">Machine Learning</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 font-bold rounded">Trending</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">₹6 - ₹15 LPA* avg salary</p>
                      </div>
                    </button>

                    {/* Course Card 3 */}
                    <button
                      onClick={() => handleNav('course-detail', 'ai')}
                      className="p-3 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-left flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-brand-600">Artificial Intelligence</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 font-bold rounded">Trending</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">₹8 - ₹18 LPA* avg salary</p>
                      </div>
                    </button>

                    {/* Course Card 4 */}
                    <button
                      onClick={() => handleNav('course-detail', 'pe')}
                      className="p-3 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-left flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <PenTool className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-brand-600">Prompt Engineering</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-700 font-bold rounded">New</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">₹6 - ₹15 LPA* avg salary</p>
                      </div>
                    </button>

                    {/* Course Card 5 */}
                    <button
                      onClick={() => handleNav('course-detail', 'ds')}
                      className="p-3 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-left flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <BarChart2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-brand-600">Data Science</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-700 font-bold rounded">New</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">₹6 - ₹16 LPA* avg salary</p>
                      </div>
                    </button>

                    {/* Course Card 6 */}
                    <button
                      onClick={() => handleNav('course-detail', 'gen-ai')}
                      className="p-3 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50/50 transition-all text-left flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-brand-600">Generative AI</h4>
                          <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-700 font-bold rounded">Trending</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 font-medium">₹7 - ₹18 LPA* avg salary</p>
                      </div>
                    </button>

                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Industry-certified practical syllabus</span>
                    <button
                      onClick={() => handleNav('courses')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 hover:underline"
                    >
                      <span>View All 46+ Courses</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <button
              onClick={() => handleNav('about')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-brand-600 ${
                currentRoute === 'about' ? 'text-brand-600 bg-brand-50' : ''
              }`}
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
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors hover:text-brand-600 ${
                  ['internship', 'final-year', 'visit', 'reviews', 'blog', 'nios'].includes(currentRoute)
                    ? 'text-brand-600 bg-brand-50'
                    : ''
                }`}
              >
                <span>STUDENT CORNER</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    studentCornerOpen ? 'rotate-180 text-brand-600' : ''
                  }`}
                />
              </button>

              {studentCornerOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNav('internship')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-50 hover:text-brand-600 text-gray-700 text-xs font-semibold flex items-center gap-2.5 transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-brand-600" />
                    <span>IT Internship In Vadodara</span>
                  </button>
                  <button
                    onClick={() => handleNav('final-year')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-50 hover:text-brand-600 text-gray-700 text-xs font-semibold flex items-center gap-2.5 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-brand-600" />
                    <span>Final Year Project Training</span>
                  </button>
                  <button
                    onClick={() => handleNav('visit')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-50 hover:text-brand-600 text-gray-700 text-xs font-semibold flex items-center gap-2.5 transition-colors"
                  >
                    <Building className="w-4 h-4 text-brand-600" />
                    <span>Industrial Visit</span>
                  </button>
                  <button
                    onClick={() => handleNav('reviews')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-50 hover:text-brand-600 text-gray-700 text-xs font-semibold flex items-center gap-2.5 transition-colors"
                  >
                    <Star className="w-4 h-4 text-brand-600" />
                    <span>Student Reviews</span>
                  </button>
                  <button
                    onClick={() => handleNav('blog')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-50 hover:text-brand-600 text-gray-700 text-xs font-semibold flex items-center gap-2.5 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-brand-600" />
                    <span>Blog</span>
                  </button>
                  <button
                    onClick={() => handleNav('nios')}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-brand-50 hover:text-brand-600 text-gray-700 text-xs font-semibold flex items-center gap-2.5 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-brand-600" />
                    <span>NIOS Learning Centre</span>
                  </button>
                </div>
              )}
            </div>

            {/* Placements */}
            <button
              onClick={() => handleNav('placements')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-brand-600 ${
                currentRoute === 'placements' ? 'text-brand-600 bg-brand-50' : ''
              }`}
            >
              PLACEMENTS
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-brand-600 ${
                currentRoute === 'contact' ? 'text-brand-600 bg-brand-50' : ''
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => handleNav('skill')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 hover:bg-brand-100 hover:border-brand-300 transition-all shadow-sm"
            >
              <Brain className="w-4 h-4 text-brand-600" />
              <span>Skill Test</span>
            </button>

            <button
              onClick={() => handleNav('hire')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 active:scale-95 transition-all shadow-sm shadow-brand-600/30"
            >
              <Search className="w-3.5 h-3.5" />
              <span>HIRE FROM US</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            
            <button
              onClick={() => handleNav('home')}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold ${
                currentRoute === 'home' ? 'bg-brand-50 text-brand-600' : 'text-gray-800'
              }`}
            >
              HOME
            </button>

            {/* Mobile Courses Accordion */}
            <div>
              <button
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50"
              >
                <span>COURSES</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileCoursesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-xl mt-1 text-xs font-semibold">
                  <button onClick={() => handleNav('course-detail', 'ai-tools')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">AI Master Tools</button>
                  <button onClick={() => handleNav('course-detail', 'ml')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Machine Learning</button>
                  <button onClick={() => handleNav('course-detail', 'ai')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Artificial Intelligence</button>
                  <button onClick={() => handleNav('course-detail', 'pe')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Prompt Engineering</button>
                  <button onClick={() => handleNav('course-detail', 'ds')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Data Science</button>
                  <button onClick={() => handleNav('course-detail', 'gen-ai')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Generative AI</button>
                  <button onClick={() => handleNav('courses')} className="w-full text-left py-2.5 px-2 text-brand-600 font-bold border-t border-gray-200">View All Courses →</button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('about')}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold ${
                currentRoute === 'about' ? 'bg-brand-50 text-brand-600' : 'text-gray-800'
              }`}
            >
              ABOUT US
            </button>

            {/* Mobile Student Corner Accordion */}
            <div>
              <button
                onClick={() => setMobileStudentOpen(!mobileStudentOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-bold text-gray-800 hover:bg-gray-50"
              >
                <span>STUDENT CORNER</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileStudentOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileStudentOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-xl mt-1 text-xs font-semibold">
                  <button onClick={() => handleNav('internship')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">IT Internship In Vadodara</button>
                  <button onClick={() => handleNav('final-year')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Final Year Project Training</button>
                  <button onClick={() => handleNav('visit')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Industrial Visit</button>
                  <button onClick={() => handleNav('reviews')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Student Reviews</button>
                  <button onClick={() => handleNav('blog')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">Blog</button>
                  <button onClick={() => handleNav('nios')} className="w-full text-left py-2 px-2 text-gray-700 hover:text-brand-600">NIOS Learning Centre</button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('placements')}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold ${
                currentRoute === 'placements' ? 'bg-brand-50 text-brand-600' : 'text-gray-800'
              }`}
            >
              PLACEMENTS
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold ${
                currentRoute === 'contact' ? 'bg-brand-50 text-brand-600' : 'text-gray-800'
              }`}
            >
              CONTACT
            </button>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => handleNav('skill')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200"
              >
                <Brain className="w-4 h-4 text-brand-600" />
                <span>Test Tech Skills</span>
              </button>
              <button
                onClick={() => handleNav('hire')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-md"
              >
                <Search className="w-4 h-4" />
                <span>Hire IT Students For Free</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
