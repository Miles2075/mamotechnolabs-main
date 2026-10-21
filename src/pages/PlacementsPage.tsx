import React, { useState } from 'react';
import { RouteType } from '../types';
import { recentPlacements, placementStats, hiringPartners } from '../data/placementsData';
import { generalFaqs } from '../data/faqsData';
import {
  CheckCircle2,
  ChevronDown,
  Building2,
  FileText,
  MessageSquare,
  Globe,
  GitBranch,
  ShieldCheck,
  Send,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  ExternalLink,
  Star
} from 'lucide-react';

interface PlacementsPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: () => void;
}

export const PlacementsPage: React.FC<PlacementsPageProps> = ({ navigateTo, openCounseling }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [learningFormSubmitted, setLearningFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    robotCheck: false
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.robotCheck) {
      alert('Please confirm you are not a robot.');
      return;
    }
    setLearningFormSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. REFRESHED HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Dedicated Placement Cell</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Transforming Passion Into <br />
            <span className="text-gradient-brand">High-Impact Tech Careers</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            100% placement support with campus recruitment drives, mock technical interviews, and direct referrals to over 100+ partner companies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={openCounseling}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-glow transition-all"
            >
              Register for Placement Drives
            </button>
            <button
              onClick={() => navigateTo('hire')}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
            >
              For Recruiters: Hire From Us
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. PLACEMENT METRICS DASHBOARD
         ───────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">340+</span>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Students Placed (2025-26)</p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-brand-600">₹18.4 LPA</span>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Highest Package Offered</p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">₹6.8 LPA</span>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Average Batch CTC</p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-slate-900">100+</span>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Hiring Partner Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. RECENT PLACEMENT SUCCESS STORIES
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-brand-800 text-xs font-bold">
              <Users className="w-3.5 h-3.5 text-brand-600" />
              <span>Verified Alumni Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Recent Student Placements
            </h2>
            <p className="text-slate-600 text-sm">
              Meet our proud scholars who turned their hard work into high-paying job offers in top IT companies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPlacements.map((p, idx) => (
              <div
                key={p.id || idx}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group space-y-5"
              >
                <div className="space-y-4">
                  {/* Photo & Badge */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={p.studentImg}
                      alt={p.studentName}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-100 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h4 className="font-black text-sm text-slate-900">{p.studentName}</h4>
                      <p className="text-xs text-slate-500">{p.role}</p>
                    </div>
                  </div>

                  {/* Company & Package Tag */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Placed At:</span>
                      <span className="font-bold text-slate-900">{p.companyName}</span>
                    </div>
                    {p.companyLogo && (
                      <div className="h-8 flex items-center pt-1 border-t border-slate-200/60">
                        <img src={p.companyLogo} alt={p.companyName} className="max-h-6 max-w-full object-contain" />
                      </div>
                    )}
                  </div>

                  {/* Testimonial snippet */}
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "Successfully placed at {p.companyName} as {p.role} after practical project training at Mamo TechnoLabs."
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Placement
                  </span>
                  <span>Alumni Batch</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. 5-STEP PLACEMENT ACCELERATION PROCESS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How Our Placement Cell Prepares You
            </h2>
            <p className="text-slate-600 text-sm">
              A structured roadmap ensuring you clear every technical screening and HR round with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Technical Mastery', desc: 'Intensive code sprints and live capstone architecture reviews.' },
              { step: '02', title: 'GitHub & Portfolio', desc: 'Craft clean production repositories and deploy live applications.' },
              { step: '03', title: 'Resume Makeover', desc: 'ATS-optimized resume tailoring for specific high-growth tech positions.' },
              { step: '04', title: 'Mock Technical Rounds', desc: 'DSA, system architecture, and algorithmic interviews with senior engineers.' },
              { step: '05', title: 'Direct Interviews', desc: 'Curated recruitment drives with 100+ partner companies until you sign your offer.' }
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-3 text-center md:text-left relative">
                <span className="text-2xl font-black text-brand-600">{s.step}</span>
                <h4 className="font-bold text-sm text-slate-900">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. HIRING PARTNERS GRID
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <h3 className="text-xl font-black text-slate-900">
            Top Companies Recruiting from Mamo TechnoLabs
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {hiringPartners.map((partner, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. BOTTOM ENROLL CTA
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Land Your Dream IT Offer?
          </h2>
          <p className="text-brand-100 text-sm max-w-xl mx-auto leading-relaxed">
            Register today and let our corporate placement specialists connect your profile directly with hiring managers.
          </p>
          <button
            onClick={openCounseling}
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-colors"
          >
            Schedule Free Placement Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;
