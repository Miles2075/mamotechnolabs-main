import React, { useState } from 'react';
import { RouteType } from '../../types';
import { Building, Phone, Mail, ChevronRight, CheckCircle2, ZoomIn, X } from 'lucide-react';

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
      tag: 'RMS Polytechnic',
      college: 'rms'
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      tag: 'Parul University',
      college: 'parul'
    },
    {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      tag: 'RK University',
      college: 'rk'
    },
    {
      url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80',
      tag: 'TeamLease Skills University',
      college: 'teamlease'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      tag: 'Neotech Institute',
      college: 'neotech'
    },
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      tag: 'TMES Institute',
      college: 'tmes'
    }
  ];

  const filteredImages = galleryImages.filter(img => selectedFilter === 'all' || img.college === selectedFilter);

  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Campus Collaboration
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Industrial Visit For <span className="text-brand-500">Your Students</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Connecting engineering, science, and diploma colleges with real IT production floors and tech infrastructure.
          </p>
        </div>
      </section>

      {/* Why Industrial Visits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Why Industrial Visits Are Important For Student Development?
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Industrial visits are crucial in creating a comprehensive learning experience for students, providing both theoretical knowledge and practical insight.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Industry Insights</h4>
                    <p className="text-xs text-gray-600 mt-1">Students gain insight into the latest tools, technologies, and agile workflows used by IT firms, extending knowledge beyond textbooks.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Networking Opportunities</h4>
                    <p className="text-xs text-gray-600 mt-1">Interacting with software architects and developers opens doors to future internships, mentorship, and career placements.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Enhanced Practical Skill</h4>
                    <p className="text-xs text-gray-600 mt-1">Observing operations in an industrial setting provides students with problem-solving acumen, adaptability, and real-world clarity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://www.vtechlabs.com/wp-content/uploads/2026/05/Student_Development.jpg"
                  alt="Student Development"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plan Corporate Visit Banner */}
      <section className="py-12 bg-gradient-to-r from-purple-950 via-indigo-900 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black">Plan Your College’s Visit At Mamo TechnoLabs!</h2>
            <p className="text-xs sm:text-sm text-purple-200">We host departmental groups from diploma, BCA, MCA, and engineering faculties.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openCounseling('Industrial Visit')}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 font-bold text-xs uppercase tracking-wider text-white shadow-md"
            >
              SCHEDULE VISIT
            </button>
            <a
              href="tel:+919325910095"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-bold text-xs uppercase tracking-wider text-white"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Visual Impressions Gallery */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Visual Impressions: Industrial Visits In Pictures
            </h2>
            <p className="text-xs text-gray-500 mt-1">Moments captured during university delegations to our software labs</p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { label: 'All Colleges', id: 'all' },
                { label: 'RMS Polytechnic', id: 'rms' },
                { label: 'Parul University', id: 'parul' },
                { label: 'RK University', id: 'rk' },
                { label: 'TeamLease University', id: 'teamlease' },
                { label: 'Neotech Institute', id: 'neotech' },
                { label: 'TMES Institute', id: 'tmes' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-brand-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(img.url)}
                className="h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all relative group cursor-pointer bg-gray-100"
              >
                <img
                  src={img.url}
                  alt={img.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-bold text-gray-900 flex items-center justify-between">
                  <span>{img.tag}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={lightboxImg} alt="Enlarged" className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl" />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
