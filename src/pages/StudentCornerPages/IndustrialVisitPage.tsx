import React, { useState } from 'react';
import { RouteType } from '../../types';
import { Building, Phone, Mail, ChevronRight, CheckCircle2, ZoomIn, X, Building2, Calendar, Users } from 'lucide-react';

interface IndustrialVisitPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: (domain?: string) => void;
}

export const IndustrialVisitPage: React.FC<IndustrialVisitPageProps> = ({ navigateTo, openCounseling }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      tag: 'RMS Polytechnic Campus',
      college: 'rms'
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      tag: 'Parul University Engineering Batch',
      college: 'parul'
    },
    {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      tag: 'RK University Tech Visit',
      college: 'rk'
    },
    {
      url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80',
      tag: 'TeamLease Skills University Students',
      college: 'teamlease'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      tag: 'Neotech Institute Tech Demo',
      college: 'neotech'
    },
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      tag: 'TMES Institute Live Session',
      college: 'tmes'
    }
  ];

  const filteredImages = galleryImages.filter(img => selectedFilter === 'all' || img.college === selectedFilter);

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Academic Campus Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Industrial Visits for <br />
            <span className="text-gradient-brand">Engineering & BCA Colleges</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Invite your college cohort for an immersive 1-day tech visit at Mamo TechnoLabs. Students explore live client projects, interact with software architects, and witness real production deployments.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. GALLERY & COLLEGE FILTER
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Past University Visits & Seminars
              </h2>
              <p className="text-xs text-slate-500 mt-1">Glimpses of students engaging with live production teams</p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {[
                { id: 'all', label: 'All Institutions' },
                { id: 'rms', label: 'RMS' },
                { id: 'parul', label: 'Parul Uni.' },
                { id: 'rk', label: 'RK Uni.' },
                { id: 'teamlease', label: 'TeamLease' },
                { id: 'neotech', label: 'Neotech' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedFilter === f.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(img.url)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 cursor-pointer shadow-sm hover:shadow-card-hover border border-slate-200/80"
              >
                <img
                  src={img.url}
                  alt={img.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center justify-between w-full text-white">
                    <span className="font-bold text-xs">{img.tag}</span>
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-brand-500 transition-colors">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. WHAT STUDENTS EXPERIENCE
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              What Students Experience During the Visit
            </h2>
            <p className="text-slate-600 text-sm">
              Tailored agendas designed to spark curiosity and show scholars how modern tech teams function.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Live Coding Architecture', desc: 'Watch senior engineers design microservices and deploy live on cloud infrastructure.' },
              { title: 'AI & LLM Demonstrations', desc: 'Hands-on interactions with generative models, agentic workflows, and prompt tuning.' },
              { title: 'Career Guidance Keynote', desc: 'In-depth seminar on salary trends, high-demand skills, and clearing off-campus drives.' },
              { title: 'Q&A with Lead Developers', desc: 'Unfiltered discussions regarding daily workflows, interview preparation, and internships.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-base text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => openCounseling('Industrial Visit')}
              className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-colors"
            >
              Schedule an Industrial Visit For Your College
            </button>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-brand-400"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={lightboxImg} alt="Enlarged Campus View" className="w-full h-auto rounded-3xl shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustrialVisitPage;
