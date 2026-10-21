import React from 'react';
import { RouteType } from '../../types';
import { CheckCircle2, FileText, UserCheck, Clock, CreditCard, GraduationCap, ArrowRight, Code, ShieldCheck } from 'lucide-react';

interface FinalYearPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: (domain?: string) => void;
}

export const FinalYearPage: React.FC<FinalYearPageProps> = ({ navigateTo, openCounseling }) => {
  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Capstone Engineering Project Guidance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Final Year Project Training <br />
            <span className="text-gradient-brand">For BE, B.Tech, BCA & MCA</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Build production-grade capstone applications that impress both college examiners and top IT recruiters. Get complete IEEE synopsis, code architecture, and viva prep.
          </p>

          <div className="pt-2">
            <button
              onClick={() => openCounseling('Final Year Project')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-glow transition-all"
            >
              Consult On Project Topics
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. PROJECT DOMAINS & PERKS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Approved Technology Stacks
            </h2>
            <p className="text-slate-600 text-sm">
              We guide students across modern high-demand stacks complying with university academic guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stack: 'Artificial Intelligence & Vision', desc: 'Object detection, medical image classification, and automated prompt agents.' },
              { stack: 'Full-Stack Web (MERN / Next.js)', desc: 'Enterprise microservices, real-time messaging, and multi-tenant SaaS dashboards.' },
              { stack: 'Python & Data Engineering', desc: 'Big data pipelines, automated scraping, ETL flows, and business intelligence.' },
              { stack: 'Mobile Apps (Flutter & React Native)', desc: 'Cross-platform mobile products with push alerts and cloud authentication.' }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-brand-300 transition-colors">
                <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900">{p.stack}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Complete Project Deliverables */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6">
            <h3 className="text-xl font-black">Everything Included in Your Final Year Training:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-sm">IEEE Approved Synopsis & Report</h5>
                  <p className="mt-1 text-slate-400 leading-relaxed">Complete chapter documentation, ER diagrams, data flow diagrams (DFD), and UML architecture.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-sm">100% Original Codebase</h5>
                  <p className="mt-1 text-slate-400 leading-relaxed">No cloned templates. Custom-engineered features with Git version control and live cloud deployment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-sm">Viva & Presentation Coaching</h5>
                  <p className="mt-1 text-slate-400 leading-relaxed">Mock defense sessions covering typical external examiner technical inquiries and architectural defense.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FinalYearPage;
