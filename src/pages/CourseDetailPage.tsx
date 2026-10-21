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
  Briefcase
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

  return (
    <div className="pt-20">
      
      {/* ─────────────────────────────────────────────────────────
          1. HERO SECTION
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image / Visual */}
            <div className="lg:col-span-5 text-center">
              <div className="relative rounded-3xl bg-gradient-to-tr from-brand-100 via-white to-brand-50 p-6 border border-brand-100 shadow-xl overflow-hidden">
                <img
                  src="https://www.vtechlabs.com/wp-content/uploads/2026/08/1.png"
                  alt={course.title}
                  className="w-full h-auto max-h-[350px] object-contain mx-auto drop-shadow-md"
                />
                <div className="absolute top-4 left-4 bg-brand-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.duration} Program
                </div>
              </div>
            </div>

            {/* Right Column: Title & Stats */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold rounded-full border border-brand-200">
                <Award className="w-3.5 h-3.5 text-brand-600" />
                <span>{course.tag}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {course.title} <br />
                <span className="text-brand-600">{course.subtitle}</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              {/* Stats Bar */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Rating */}
                <div className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                    G
                  </div>
                  <div className="text-left text-xs">
                    <div className="flex items-center gap-1 font-bold text-gray-900">
                      <span>{course.rating}</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500">{course.reviewsCount}</span>
                  </div>
                </div>

                {/* Salary */}
                <div className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-xs text-left">
                  <h4 className="font-black text-base text-gray-900 leading-tight">{course.avgSalary}</h4>
                  <span className="text-[10px] font-bold uppercase text-brand-600">Average Salary</span>
                </div>

                {/* Inquire Button */}
                <button
                  onClick={() => openCounseling(course.title)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>INQUIRE NOW</span>
                </button>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed pt-2">
                {course.fullOverview}
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. MASTER MODERN DEVELOPMENT (3 CARDS)
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Master Modern Development
            </h2>
            <p className="text-xs text-gray-500 mt-1">Key program components designed for production readiness</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Card 1: Key Features */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900">Course Key Features</h3>
                </div>

                <ul className="space-y-3 pt-2">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-[10px] text-brand-600 font-bold uppercase tracking-wider">
                  Hands-on Project Guided
                </span>
              </div>
            </div>

            {/* Card 2: Skills Covered (Dark Theme) */}
            <div className="p-8 rounded-3xl bg-navy-950 text-white shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">Skills Covered</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {course.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl bg-gray-900/80 border border-gray-800 text-xs text-gray-200 leading-relaxed"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800">
                <span className="text-[10px] text-brand-400 font-bold uppercase tracking-wider">
                  100% Industry Aligned Tech Stack
                </span>
              </div>
            </div>

            {/* Card 3: Job Roles */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900">Career & Job Roles</h3>
                </div>

                <div className="space-y-2.5 pt-2">
                  {course.jobRoles.map((role, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800 flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                  Guaranteed Interview Opportunities
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. COURSE SYLLABUS ACCORDION
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Structured Modules
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Course Syllabus & Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Click any module to inspect detailed daily lesson plans and hands-on laboratory exercises
            </p>
          </div>

          <div className="space-y-3">
            {course.syllabus.map((mod, idx) => {
              const isOpen = openModule === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-gray-900 hover:text-brand-600 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                  >
                    <span>{mod.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-gray-100 space-y-2.5 animate-in fade-in duration-150">
                      {mod.topics.map((t, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. TOOLS & TECHNOLOGIES
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">
            Tools & Frameworks Covered
          </h2>
          <p className="text-xs text-gray-500 mb-8">Master the same tooling deployed at tech scale-ups</p>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {course.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 rounded-2xl bg-white border border-gray-200 shadow-xs text-xs font-bold text-gray-800 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                {tool.name}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => openCounseling(course.title)}
              className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 transition-all"
            >
              Enroll In {course.title}
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. FAQS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Course Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all"
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

    </div>
  );
};
