import React, { useState } from 'react';
import { RouteType } from '../types';
import { detailedCourses } from '../data/coursesData';
import {
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Star,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  Cpu,
  Brain,
  Send,
  HelpCircle,
  Briefcase,
  TrendingUp,
  Download,
  Calendar,
  Users,
  Building,
  Check,
  FileCode,
  ShieldCheck
} from 'lucide-react';

interface CourseDetailPageProps {
  courseId: string;
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: (courseName?: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  courseId,
  navigateTo,
  openCounseling
}) => {
  const course = detailedCourses[courseId] || detailedCourses['ai'];
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. REFRESHED HERO BANNER (Modern Dark Tech Aesthetic)
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        {/* Ambient radial glows */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
                  <Award className="w-3.5 h-3.5" />
                  {course.tag}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  {course.duration} Intensive
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                {course.title} <br />
                <span className="text-gradient-brand">{course.subtitle}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                {course.description}
              </p>

              {/* High-Impact Stat Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
                {/* Rating Card */}
                <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-1 text-amber-400 font-black text-sm">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{course.rating} / 5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">{course.reviewsCount}</span>
                </div>

                {/* Salary Package */}
                <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-1.5 text-brand-400 font-black text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{course.avgSalary}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Expected CTC Range</span>
                </div>

                {/* Placement Guarantee */}
                <div className="p-3.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-black text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>100% Placement</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Assistance Guarantee</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openCounseling(course.title)}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-500 hover:to-teal-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Enroll in Next Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDownloadBrochure}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloadSuccess ? 'Brochure Downloaded!' : 'Download Syllabus PDF'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Interactive Course Overview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Format</span>
                    <h4 className="text-sm font-bold text-white">Classroom & Hybrid Labs</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    Live Mentor-Led
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-400" />
                      Duration
                    </span>
                    <span className="font-bold text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-brand-400" />
                      Curriculum Modules
                    </span>
                    <span className="font-bold text-white">{course.syllabus.length} Core Modules</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Award className="w-4 h-4 text-brand-400" />
                      Certification
                    </span>
                    <span className="font-bold text-white">ISO & CMMI Verified</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-400" />
                      Upcoming Cohort
                    </span>
                    <span className="font-bold text-brand-400">Monday / Weekend Batches</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Tools You Will Master:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openCounseling(course.title)}
                  className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-400 to-emerald-400 hover:opacity-95 transition-opacity shadow-md text-center"
                >
                  Book Free Demo Class
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. CURRICULUM SYLLABUS ACCORDION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold">
              <FileCode className="w-3.5 h-3.5 text-brand-600" />
              <span>Step-by-Step Practical Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Curriculum Syllabus & Modules
            </h2>
            <p className="text-slate-600 text-sm">
              Crafted in collaboration with senior software architects to ensure zero fluff and 100% production readiness.
            </p>
          </div>

          <div className="space-y-4">
            {course.syllabus.map((m, idx) => {
              const isOpen = openModule === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-200 text-brand-700 font-black text-sm flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-base font-black text-slate-900">
                          {m.title}
                        </h4>
                        <span className="text-xs text-slate-500 font-semibold">
                          {m.topics.length} Key Topics Covered
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {m.topics.map((t, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-2xl border border-slate-200/60 shadow-xs">
                            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                            <span className="font-semibold leading-relaxed">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. CAREER ROLES & SALARIES
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Target Job Roles & Industry Compensation
            </h2>
            <p className="text-slate-600 text-sm">
              Roles you will be eligible for immediately upon completing this certification program.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: `${course.title} Engineer`, salary: course.avgSalary, exp: 'Fresher to 1 Year' },
              { role: 'Senior Technical Associate', salary: '₹8 - ₹14 LPA', exp: '1 to 3 Years' },
              { role: 'Applied Solutions Specialist', salary: '₹10 - ₹18 LPA', exp: '2 to 4 Years' },
              { role: 'Lead Architect / Consultant', salary: '₹16 - ₹25+ LPA', exp: '4+ Years' }
            ].map((r, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-brand-300 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {r.exp}
                </span>
                <h4 className="text-base font-black text-slate-900 leading-snug">{r.role}</h4>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-sm font-black text-brand-600">{r.salary}</span>
                  <p className="text-[10px] text-slate-500">Average National Package</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. COURSE SPECIFIC FAQS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions for {course.title}
            </h2>
            <p className="text-slate-600 text-sm">
              Got doubts? Here are the most common questions prospective students ask our mentors.
            </p>
          </div>

          <div className="space-y-3">
            {course.faqs.map((faq, idx) => (
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
          5. BOTTOM ENROLL CTA
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Seats Filling Fast for the Next {course.title} Cohort
          </h2>
          <p className="text-brand-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Batch size is capped at 15 scholars to guarantee 1-on-1 code reviews and direct recruiter introduction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openCounseling(course.title)}
              className="px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-colors"
            >
              Reserve Seat with ₹0 Down
            </button>
            <button
              onClick={() => navigateTo('courses')}
              className="px-8 py-4 rounded-full bg-slate-900/40 hover:bg-slate-900/60 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-colors"
            >
              Compare Other Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
