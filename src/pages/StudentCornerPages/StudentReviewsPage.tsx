import React, { useState } from 'react';
import { RouteType, StudentReview } from '../../types';
import { testimonials } from '../../data/testimonialsData';
import { Star, Play, MessageSquare, Filter, Youtube, CheckCircle2, Award, X } from 'lucide-react';

interface StudentReviewsPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: () => void;
}

export const StudentReviewsPage: React.FC<StudentReviewsPageProps> = ({ navigateTo, openCounseling }) => {
  const [filter, setFilter] = useState<'all' | 'google' | 'youtube'>('all');
  const [selectedVideo, setSelectedVideo] = useState<StudentReview | null>(null);

  const filteredReviews = testimonials.filter(r => {
    if (filter === 'all') return true;
    if (filter === 'google') return r.type === 'google' || r.type === 'text';
    if (filter === 'youtube') return r.type === 'youtube';
    return true;
  });

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <Star className="w-3.5 h-3.5 fill-brand-400" />
            <span>4.9 / 5.0 Rating from 1,200+ Alumni</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Real Stories. Real Careers. <br />
            <span className="text-gradient-brand">Verified Student Reviews</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hear directly from freshers and working professionals who transformed their skillsets and secured offers in top tech companies.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. FILTER & REVIEWS GRID
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Alumni Experiences & Testimonials
              </h2>
              <p className="text-xs text-slate-500 mt-1">Authentic feedback from graduates across Vadodara & Gujarat</p>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Feedback ({testimonials.length})
              </button>
              <button
                onClick={() => setFilter('google')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'google' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Google Reviews
              </button>
              <button
                onClick={() => setFilter('youtube')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  filter === 'youtube' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Youtube className="w-3.5 h-3.5 text-rose-500" />
                <span>Video Stories</span>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Avatar, Name, and Course */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-600 text-white font-black text-base flex items-center justify-center ring-2 ring-slate-100 shadow-xs">
                        {rev.avatarText || rev.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-sm text-slate-900">{rev.name}</h4>
                        <span className="text-[11px] font-bold text-brand-600">{rev.roleOrCourse}</span>
                      </div>
                    </div>
                    {rev.type === 'youtube' ? (
                      <span className="p-2 rounded-xl bg-rose-50 text-rose-600">
                        <Youtube className="w-4 h-4" />
                      </span>
                    ) : (
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{rev.reviewText}"
                  </p>

                  {/* Video Thumbnail Button if video review */}
                  {rev.type === 'youtube' && rev.videoThumb && (
                    <div
                      onClick={() => setSelectedVideo(rev)}
                      className="relative rounded-2xl overflow-hidden cursor-pointer group/vid aspect-video bg-slate-950 flex items-center justify-center border border-slate-200"
                    >
                      <img
                        src={rev.videoThumb}
                        alt={rev.name}
                        className="w-full h-full object-cover opacity-80 group-hover/vid:scale-105 transition-transform"
                      />
                      <div className="absolute w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg group-hover/vid:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>
                  )}

                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Scholar
                  </span>
                  <span>{rev.roleOrCourse}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="p-4 flex items-center justify-between text-white border-b border-slate-800">
              <h4 className="font-bold text-sm">{selectedVideo.name}'s Placement Video Story</h4>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center p-6 text-center text-slate-400">
              <div className="space-y-3">
                <Youtube className="w-16 h-16 text-rose-500 mx-auto" />
                <p className="text-sm font-bold text-white">{selectedVideo.name} - Review Video</p>
                <p className="text-xs max-w-md mx-auto">
                  "{selectedVideo.reviewText}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentReviewsPage;
