import React from 'react';
import { RouteType } from '../types';
import { universityPartners, learningFacilityImages } from '../data/universitiesData';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Wifi,
  Laptop,
  Users,
  Target,
  Quote,
  Building2,
  Award,
  Check
} from 'lucide-react';

interface AboutPageProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigateTo, openCounseling }) => {
  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>ISO 9001:2015 & CMMI Level 3 Standard</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Bridging Academia & <br />
            <span className="text-gradient-brand">Real-World IT Engineering</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded with a singular mission: to empower students with production-grade coding skills and guide them to high-paying careers in world-class tech firms.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. MISSION & VISION BENTO
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 top-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-4 z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-500 text-slate-950 flex items-center justify-center font-black">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black">Our Core Mission</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  To serve as India's premier IT finishing school, empowering students from all academic backgrounds to master modern software engineering, cloud computing, and artificial intelligence. We replace outdated rote-learning with live code reviews and production project sprints.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-brand-400 z-10">
                <span>Job-Guaranteed Career Launchpad</span>
                <Check className="w-4 h-4" />
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-5 flex flex-col justify-between hover:border-brand-300 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Our Strategic Vision</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  To be the global benchmark for practical IT talent development, fostering an ecosystem where university scholars transition effortlessly into senior engineering and leadership roles across multinational software enterprises.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-blue-600">
                <span>100+ Hiring Partnerships Across India</span>
                <Check className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. CAMPUS FACILITIES & LABS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              State-of-the-Art Training Facilities
            </h2>
            <p className="text-slate-600 text-sm">
              An enterprise-grade campus designed for collaborative hacking, smart presentations, and deep work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'High-Tech Coding Laboratories', desc: 'Equipped with multi-monitor developer workstations, high-speed RAM, and GPU rigs for AI training.', icon: Laptop },
              { title: 'Redundant Gigabit Fiber', desc: 'Gigabit fiber connectivity guarantees uninterrupted cloud deployments, Docker builds, and live streaming.', icon: Wifi },
              { title: 'Collaborative Sprint Rooms', desc: 'Flexible hackathon setups where students pair-program, hold daily standups, and present sprint demos.', icon: Users },
              { title: 'Smart Interactive Classrooms', desc: 'Digital recording setups, high-fidelity projection, and hybrid conferencing tools.', icon: GraduationCap },
              { title: 'Dedicated Placement Cell', desc: 'Private interview suites for conducting HR interviews, mock technical rounds, and coding tests.', icon: ShieldCheck },
              { title: 'Executive Mentorship Lounge', desc: '1-on-1 consultation pods where students review resumes and portfolio codebases with senior mentors.', icon: Award }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm space-y-3 hover:border-brand-300 transition-colors">
                  <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. UNIVERSITY PARTNERSHIPS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Academic Collaborations
            </h2>
            <p className="text-slate-600 text-sm">
              We work hand-in-hand with renowned academic universities to upskill students during their diploma, degree, and postgraduate tenures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universityPartners.map((u) => (
              <div key={u.name} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <div className="h-16 flex items-center justify-center p-2 bg-white rounded-2xl border border-slate-100">
                  {u.img ? (
                    <img src={u.img} alt={u.name} className="max-h-12 max-w-full object-contain" />
                  ) : (
                    <span className="font-black text-sm text-slate-900">{u.name}</span>
                  )}
                </div>
                <span className="font-black text-sm text-slate-900 block">{u.name}</span>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-brand-600">{u.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. CTA BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Visit Our Vadodara Campus
          </h2>
          <p className="text-brand-100 text-sm max-w-xl mx-auto leading-relaxed">
            Walk into our center, meet our faculty, tour our labs, and discuss your career trajectory with our advisors.
          </p>
          <button
            onClick={openCounseling}
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-colors"
          >
            Book Free Campus Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
