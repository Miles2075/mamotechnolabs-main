import React from 'react';
import { RouteType } from '../../types';
import { CheckCircle2, Briefcase, GraduationCap, ArrowRight, Award, Laptop, Users, ShieldCheck } from 'lucide-react';

interface InternshipPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: (domain?: string) => void;
}

export const InternshipPage: React.FC<InternshipPageProps> = ({ navigateTo, openCounseling }) => {
  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience Acceleration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            IT Internship Program <br />
            <span className="text-gradient-brand">In Vadodara</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Gain verified production experience on live client projects. Bridge university coursework with real industry demands and earn an experience certificate.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openCounseling('IT Internship')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-glow transition-all"
            >
              Apply For Internship Batch
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. TWO TRACKS & BENEFITS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Track 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-brand-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-black">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Final Year Academic Internship</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Structured for B.Tech, BE, BCA, and MCA final year students requiring university credit project completion, synopsis reports, and viva preparation.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>College Project Report & Documentation Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Official University Letter of Recommendation (LOR)</span>
                </div>
              </div>
            </div>

            {/* Track 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4 hover:border-brand-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Career Accelerator Summer / Winter Track</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Intensive 2 to 3 month coding sprints for freshers and early learners who want real GitHub commit history and code review feedback from tech leads.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Full-Stack & AI Stack Live Deployments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Fast-Track Pipeline to Partner Company Interviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {[
              { title: 'Live Client Workflows', desc: 'Work with actual Git branches, pull requests, and Jira sprints.', icon: Laptop },
              { title: 'Architect Mentorship', desc: 'Senior tech leads review your clean architecture and code quality.', icon: Users },
              { title: 'ISO Experience Certificate', desc: 'Valid accredited documentation of your engineering tenure.', icon: Award },
              { title: 'Zero Dummy Projects', desc: 'Deploy actual functional web tools, APIs, and AI integrations.', icon: ShieldCheck }
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-center sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-600 flex items-center justify-center mx-auto sm:mx-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{p.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default InternshipPage;
