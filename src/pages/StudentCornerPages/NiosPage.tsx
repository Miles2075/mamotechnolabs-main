import React from 'react';
import { RouteType } from '../../types';
import { CheckCircle2, BookOpen, Laptop, UserCheck, HelpCircle, Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface NiosPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: (domain?: string) => void;
}

export const NiosPage: React.FC<NiosPageProps> = ({ navigateTo, openCounseling }) => {
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
            <span>Govt. Recognized Open Schooling</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            NIOS Learning Centre <br />
            <span className="text-gradient-brand">In Vadodara</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Complete your 10th (Secondary) & 12th (Senior Secondary) board credentials through accredited National Institute of Open Schooling mentorship. Save valuable academic years.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openCounseling('NIOS Admission')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-glow transition-all"
            >
              Consult On NIOS Admissions
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. DETAILS & ACADEMIC SUPPORT
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-brand-300 transition-colors">
              <span className="text-[10px] uppercase font-bold text-slate-400">Class 10</span>
              <h3 className="text-2xl font-black text-slate-900">Secondary Course (10th Standard)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Equivalent to CBSE/State Board 10th class. Choose from a flexible choice of languages, mathematics, social studies, and sciences with continuous tutor marked assignments (TMA) guidance.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Eligibility for Polytechnic & Higher Secondary</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-brand-300 transition-colors">
              <span className="text-[10px] uppercase font-bold text-slate-400">Class 12</span>
              <h3 className="text-2xl font-black text-slate-900">Senior Secondary Course (12th Standard)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Recognized nationwide by universities for B.Tech, BCA, B.Sc, B.Com, and professional degree admissions. Tailored coaching for science, commerce, and arts streams.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Eligible for Engineering & University Entrances</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 text-center max-w-3xl mx-auto">
            <h4 className="text-xl font-black">Why Choose Mamo TechnoLabs for NIOS?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We provide end-to-end enrollment processing, TMA submission management, offline classroom coaching in Vadodara, and practical lab classes ensuring you clear examinations with flying colors.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NiosPage;
