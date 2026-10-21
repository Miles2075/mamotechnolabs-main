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
  ChevronLeft,
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
  Send
} from 'lucide-react';

interface HomePageProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: (course?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigateTo, openCounseling }) => {
  const [selectedFilter, setSelectedFilter] = useState('Trending');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
    'Analytics & BI',
    'AI & Machine Learning',
    'Software Testing & QA',
    'Digital Marketing',
    'Web Development',
    'Design'
  ];

  const filteredCourses = catalogCourses.filter(c => {
    if (selectedFilter === 'Trending') return c.badges.includes('Trending');
    if (selectedFilter === 'Analytics & BI') return c.category.includes('Analytics');
    if (selectedFilter === 'AI & Machine Learning') return c.category.includes('AI');
    if (selectedFilter === 'Software Testing & QA') return c.category.includes('Testing');
    if (selectedFilter === 'Digital Marketing') return c.category.includes('Marketing');
    if (selectedFilter === 'Web Development') return c.category.includes('Web') || c.category.includes('Programing');
    if (selectedFilter === 'Design') return c.category.includes('Design');
    return true;
  });

  const handleConfusedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confusedData.robotCheck) {
      alert('Please check the "I am not a robot" box.');
      return;
    }
    setConfusedSubmitted(true);
  };

  return (
    <div className="pt-20">
      
      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-brand-800 text-xs font-bold border border-emerald-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
                <span>340+ Students Placed This Year</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Future Ready Skills <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-emerald-600 to-green-500">
                  Get You Hired
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Practical training, live production projects, and personalized career guidance tailored to help you launch high-paying tech roles.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openCounseling()}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-extrabold text-sm shadow-xl shadow-brand-600/25 transition-all tracking-wider uppercase"
                >
                  TALK TO A COUNSELOR
                </button>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:inline">OR</span>
                <button
                  onClick={() => navigateTo('courses')}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-sm border border-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  <span>View All Courses</span>
                  <ArrowRight className="w-4 h-4 text-brand-600" />
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900">12+</h4>
                  <p className="text-xs text-gray-500 font-medium">Years Of Training</p>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900">95%</h4>
                  <p className="text-xs text-gray-500 font-medium">Placement Ratio</p>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900">100+</h4>
                  <p className="text-xs text-gray-500 font-medium">Company Tie-Ups</p>
                </div>
              </div>

            </div>

            {/* Right Graphic / Student Illustration */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Decorative glow */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-200/50 rounded-full filter blur-3xl -z-10" />
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-200/50 rounded-full filter blur-3xl -z-10" />

                <div className="relative rounded-3xl bg-gradient-to-tr from-brand-100/80 via-white to-brand-50 p-6 shadow-2xl border border-brand-100 text-center">
                  <img
                    src="https://pngimg.com/uploads/student/student_PNG62538.png"
                    alt="Students Learning"
                    className="w-full h-auto max-h-[380px] object-contain mx-auto drop-shadow-xl"
                  />
                  
                  {/* Floating floating badge */}
                  <div className="absolute -bottom-4 left-6 right-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-brand-600 font-bold">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h5 className="text-xs font-bold text-gray-900">CMMI Level 3 Certified</h5>
                        <p className="text-[10px] text-gray-500">Government & Industry Recognised</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-brand-600">★ 4.9/5</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. WHY STUDENTS TRUST US SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                <span>Guaranteed and Certified</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Why Students Trust Us
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Train with veteran tech practitioners and unlock direct access to placement drives, verified portfolios, and{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-full border border-brand-400 bg-brand-50/60 font-semibold text-brand-700 text-xs">
                  Interview Support.
                </span>
              </p>

              {/* Experts Avatars */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm bg-gray-100"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                    alt="Monica Mam"
                  />
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover shadow-sm bg-gray-100"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Manohar Sir"
                  />
                </div>
                <div className="text-left text-xs">
                  <p className="font-semibold text-gray-800">Courses from <strong>experts.</strong></p>
                  <p className="text-gray-500">Mentored by 15+ years industry veterans</p>
                </div>
              </div>
            </div>

            {/* Right 2x2 Grid Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-700 text-white shadow-lg shadow-brand-600/20 transform hover:-translate-y-1 transition-transform">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black">95%</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-100">Placement Ratio</span>
                </div>
                <p className="text-xs text-brand-100 leading-relaxed">
                  Job-focused training that gets real, verifiable career results for freshers and professionals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all transform hover:-translate-y-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-gray-900">100+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Company Tie Ups</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Strong recruitment partnerships with leading IT firms across Gujarat, Mumbai, and Bengaluru.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all transform hover:-translate-y-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black text-gray-900">12+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Years Training</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Trusted training institute backed by over a decade of continuous pedagogical success.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-700 text-white shadow-lg shadow-brand-600/20 transform hover:-translate-y-1 transition-transform">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black">0%</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-100">No-Cost EMI</span>
                </div>
                <p className="text-xs text-brand-100 leading-relaxed">
                  Learn now, pay later with easy zero-interest monthly plans to keep education accessible.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. HIRING PARTNERS SLIDER
         ───────────────────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Our Esteemed Hiring Partners
            </h2>
            <p className="text-xs text-gray-500 mt-1">Where our graduates are recruited every month</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center">
            {/* Mastercard */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-center h-16 hover:border-brand-300 transition-colors">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  <span className="w-5 h-5 rounded-full bg-red-500 inline-block opacity-90" />
                  <span className="w-5 h-5 rounded-full bg-yellow-500 inline-block opacity-90" />
                </div>
                <span className="font-bold text-xs tracking-tight text-gray-800">mastercard</span>
              </div>
            </div>

            {/* Rishabh Software */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-center h-16 hover:border-brand-300 transition-colors">
              <div className="text-center">
                <span className="font-black text-sm text-red-600 tracking-wider">RISHABH</span>
                <span className="block text-[8px] font-bold text-gray-500 tracking-widest">SOFTWARE</span>
              </div>
            </div>

            {/* Mysphere Infotech */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-center h-16 hover:border-brand-300 transition-colors">
              <div className="text-center">
                <span className="font-black text-sm text-blue-600">Mysphere</span>
                <span className="block text-[8px] font-bold text-gray-500 tracking-widest">INFOTECH</span>
              </div>
            </div>

            {/* Webmyne */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-center h-16 hover:border-brand-300 transition-colors">
              <div className="text-center">
                <span className="font-black text-sm text-gray-800"><span className="text-red-600 font-extrabold">W</span>ebmyne</span>
                <span className="block text-[8px] text-gray-500">Solutions</span>
              </div>
            </div>

            {/* NetWeb Software */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-center h-16 hover:border-brand-300 transition-colors">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-blue-700 text-white font-bold text-xs flex items-center justify-center">n</span>
                <span className="font-bold text-xs text-gray-800">NetWeb</span>
              </div>
            </div>

            {/* Jeavio */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-center h-16 hover:border-brand-300 transition-colors">
              <span className="font-black text-sm text-indigo-700 tracking-wide">JEAVIO</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. SLANTED MARQUEE RIBBONS
         ───────────────────────────────────────────────────────── */}
      <div className="relative py-6 overflow-hidden bg-white select-none">
        {/* Green Ribbon */}
        <div className="bg-brand-600 py-3 -rotate-1 shadow-md overflow-hidden whitespace-nowrap text-white font-black text-sm tracking-widest uppercase">
          <div className="inline-block animate-marquee">
            <span>Mamo TechnoLabs ✦ Innovations Unlimited ✦ Practical Training ✦ 100% Placement Support ✦ Live Industry Projects ✦ Vadodara Campus ✦ Mamo TechnoLabs ✦ Innovations Unlimited ✦ </span>
          </div>
          <div className="inline-block animate-marquee">
            <span>Mamo TechnoLabs ✦ Innovations Unlimited ✦ Practical Training ✦ 100% Placement Support ✦ Live Industry Projects ✦ Vadodara Campus ✦ Mamo TechnoLabs ✦ Innovations Unlimited ✦ </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          5. TRENDING COURSES FOR 2026 SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Trending Courses For 2026
            </h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Handpicked courses trusted by thousands of students every year. Every module is focused on employability and real-world usability.
            </p>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedFilter === cat
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.slice(0, 6).map((course) => (
              <div
                key={course.id}
                onClick={() => {
                  if (course.detailedSlug) {
                    navigateTo('course-detail', course.detailedSlug);
                  } else {
                    navigateTo('courses');
                  }
                }}
                className="bg-white rounded-3xl border border-gray-100 hover:border-brand-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Course Header Banner */}
                <div className="p-6 bg-gradient-to-br from-emerald-50/80 via-white to-brand-50 border-b border-gray-100 flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-brand-100 flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                    {course.icon === 'brain' && <Brain className="w-6 h-6" />}
                    {course.icon === 'sparkles' && <Sparkles className="w-6 h-6" />}
                    {course.icon === 'cpu' && <Cpu className="w-6 h-6" />}
                    {course.icon === 'bot' && <Bot className="w-6 h-6" />}
                    {course.icon === 'code' && <Code className="w-6 h-6" />}
                    {course.icon === 'shield-check' && <ShieldCheck className="w-6 h-6" />}
                    {!['brain', 'sparkles', 'cpu', 'bot', 'code', 'shield-check'].includes(course.icon) && (
                      <Layers className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    {course.badges.map((b, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                          b === 'New'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider block mb-1">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="text-brand-600 font-bold group-hover:underline flex items-center gap-1">
                      Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('courses')}
              className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md tracking-wider uppercase transition-all"
            >
              EXPLORE ALL 46+ COURSES
            </button>
            <button
              onClick={() => navigateTo('skill')}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-extrabold text-xs border border-gray-300 tracking-wider uppercase transition-all shadow-xs"
            >
              TEST YOUR TECH SKILLS
            </button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. TESTIMONIALS SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Testimonial Quote */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Results That Speak For <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-brand-600">
                  Themselves
                </span>
              </h2>

              <p className="text-sm text-gray-600">
                Meet the students who transformed their careers with us from college graduates to software engineers.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs text-brand-800">
                <span className="font-bold">Your success story</span>
                <span className="text-gray-500">could be the next one featured here.</span>
              </div>

              {/* Quote Card */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm relative space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Princy Patel</h4>
                    <p className="text-xs text-brand-600 font-semibold">PHP Web Development</p>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "Thank you! For a 15-day (or short-term) PHP web development internship in 2026, the best-reviewed options focus on hands-on project experience, fast-tracked learning, and certification. The faculty at Mamo TechnoLabs provided daily code review and guidance."
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigateTo('reviews')}
                  className="px-5 py-2.5 rounded-xl bg-brand-50 text-brand-700 hover:bg-brand-100 font-bold text-xs border border-brand-200 transition-colors"
                >
                  Read 100+ More Reviews →
                </button>
              </div>
            </div>

            {/* Right Column: Featured Video Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-gray-900 text-white p-5 shadow-2xl overflow-hidden relative group">
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-brand-600 flex items-center justify-center font-black text-sm">
                    M
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">PHP Course Review by Aarti Barot</h4>
                    <span className="text-[11px] text-gray-400">MamoTechnoLabs Institute</span>
                  </div>
                </div>

                {/* Video Image Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Student Video Review"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Aarti Barot</span>
                    <span className="text-gray-400 text-[11px]">PHP Developer at Leading Tech Firm</span>
                  </div>
                  <span className="px-2.5 py-1 bg-white/10 rounded-full text-[10px] text-brand-300 font-bold">
                    Placed Candidate
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. ACADEMIC PARTNERSHIPS & WHY CHOOSE US
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Academic Partnerships */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold">
                <GraduationCap className="w-3.5 h-3.5 text-brand-600" />
                <span>Academic Partnerships</span>
              </div>

              <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                Tie-Ups With Top-Ranked <br />
                <span className="text-brand-600">Indian Universities</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Official academic collaborations delivering industry-aligned practical training, live projects, and recognized career credentials.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {universityPartners.map((uni, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3.5 hover:border-brand-200 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-1.5 shrink-0">
                      <img src={uni.img} alt={uni.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-gray-900">{uni.name}</h4>
                      <span className="inline-flex items-center gap-1 text-[10px] text-brand-600 font-semibold mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{uni.badge}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Why Choose Us */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                <span>Why Choose Us</span>
              </div>

              <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                What Makes Mamo TechnoLabs The <br />
                <span className="text-gray-900">Best Choice For IT Training?</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Advance your career with industry-focused IT professional training courses designed to build job-ready skills through practical learning.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  'Industry expert IT professionals as trainers, delivering real-world insights and practical knowledge',
                  'Hands-on IT training through live projects, case studies, and real-time application',
                  'IT professional training courses aligned with current industry tools and technologies',
                  'Job-oriented IT certification classes focused on building in-demand technical skills',
                  'Training across a wide range of in-demand IT courses to match evolving industry needs',
                  'Flexible learning options for students, freshers, and working professionals',
                  'Strong focus on developing job-ready IT professionals with practical experience'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. LEARNING GALLERY SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Where Learning Feels Easy
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              From modern classrooms to high-speed systems, we've got everything covered for students who want to level up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {learningFacilityImages.map((img, i) => (
              <div
                key={i}
                className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all relative group h-64 ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <h4 className="text-white font-bold text-sm">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigateTo('about')}
              className="px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md"
            >
              KNOW MORE ABOUT OUR CAMPUS
            </button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          9. FAQ SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-gray-500 mt-1">Everything you need to know about joining our programs</p>
          </div>

          <div className="space-y-3">
            {generalFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-gray-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-sm text-gray-900 hover:text-brand-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          10. LATEST FROM THE BLOGS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Latest From The Blogs
            </h2>
            <p className="text-xs text-gray-500 mt-1">Industry insights, guides, and career updates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((blog) => (
              <div
                key={blog.id}
                onClick={() => navigateTo('blog')}
                className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider block mb-1">
                      {blog.category}
                    </span>
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>{blog.date}</span>
                    <span className="font-bold text-brand-600 group-hover:underline">Read More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigateTo('blog')}
              className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md"
            >
              MORE BLOGS
            </button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          11. STILL CONFUSED? LET'S TALK FORM SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-brand-50 via-white to-brand-100/40 border-t border-brand-100" id="confused-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic */}
            <div className="lg:col-span-5 text-center">
              <img
                src="https://www.vtechlabs.com/wp-content/uploads/2026/04/student.png"
                alt="Confused Student"
                className="max-h-[380px] mx-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-2">
                Still Confused? <br />
                <span className="text-brand-600">Let’s Talk.</span>
              </h2>
              <p className="text-xs text-gray-500 mb-6">
                Fill in your details below and an experienced academic counselor will get in touch with you.
              </p>

              {confusedSubmitted ? (
                <div className="p-8 text-center bg-brand-50 rounded-2xl border border-brand-200 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-600 mx-auto" />
                  <h4 className="text-lg font-bold text-gray-900">Thank you for reaching out!</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    We have received your query, <span className="font-bold text-gray-800">{confusedData.name}</span>. Our counselor will contact you shortly at <span className="font-bold text-gray-800">{confusedData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setConfusedSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConfusedSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={confusedData.name}
                      onChange={(e) => setConfusedData({ ...confusedData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={confusedData.email}
                      onChange={(e) => setConfusedData({ ...confusedData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={confusedData.phone}
                      onChange={(e) => setConfusedData({ ...confusedData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                    />
                    <select
                      value={confusedData.training}
                      onChange={(e) => setConfusedData({ ...confusedData, training: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white text-gray-700"
                    >
                      <option value="python">Advanced Python</option>
                      <option value="ai">Artificial Intelligence & ML</option>
                      <option value="gen-ai">Generative AI</option>
                      <option value="ds">Data Science</option>
                      <option value="web">Full Stack Web Dev</option>
                    </select>
                  </div>

                  {/* Mock reCAPTCHA */}
                  <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-gray-50 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={confusedData.robotCheck}
                        onChange={(e) => setConfusedData({ ...confusedData, robotCheck: e.target.checked })}
                        className="w-4 h-4 rounded text-brand-600 focus:ring-brand-400 border-gray-300"
                      />
                      <span className="font-medium text-gray-700">I'm not a robot</span>
                    </label>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-brand-600" />
                      <span>reCAPTCHA Privacy</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-98 text-white font-black text-xs shadow-lg shadow-brand-600/30 uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>BOOK FREE COUNSELLING</span>
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
