import React, { useState } from 'react';
import { RouteType, StudentReview } from '../../types';
import { testimonials } from '../../data/testimonialsData';
import { Star, Play, MessageSquare, Filter, Youtube, CheckCircle2 } from 'lucide-react';

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
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Student Corner
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Student <span className="text-brand-500">Reviews</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Honest feedback and video reviews from graduates who achieved their career goals with Mamo TechnoLabs.
          </p>
        </div>
      </section>

      {/* Main Reviews Grid */}
      <section className="py-20 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
                Verified Feedback
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                About Their Learning Experience
              </h2>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-2xl border border-gray-200 shadow-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'all' ? 'bg-brand-600 text-white shadow-xs' : 'text-gray-700 hover:text-brand-600'
                }`}
              >
                All Reviews
              </button>
              <button
                onClick={() => setFilter('google')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'google' ? 'bg-brand-600 text-white shadow-xs' : 'text-gray-700 hover:text-brand-600'
                }`}
              >
                Google Reviews
              </button>
              <button
                onClick={() => setFilter('youtube')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === 'youtube' ? 'bg-brand-600 text-white shadow-xs' : 'text-gray-700 hover:text-brand-600'
                }`}
              >
                Video Reviews
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => {
              if (rev.type === 'youtube') {
                return (
                  <div
                    key={rev.id}
                    onClick={() => setSelectedVideo(rev)}
                    className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-800 text-white flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="relative aspect-video bg-gray-800 overflow-hidden">
                      <img
                        src={rev.videoThumb}
                        alt={rev.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                        <span className="text-[10px] text-gray-400 font-medium">{rev.date}</span>
                      </div>
                      <p className="text-xs text-brand-400 font-semibold">{rev.roleOrCourse}</p>
                      <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                        {rev.reviewText}
                      </p>
                      <div className="pt-2 text-xs text-red-400 font-bold flex items-center gap-1">
                        <Youtube className="w-4 h-4 fill-current" />
                        <span>Watch Video Review</span>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={rev.id}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                          {rev.avatarText || rev.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-900">{rev.name}</h4>
                          <p className="text-xs text-brand-600 font-semibold">{rev.roleOrCourse}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      "{rev.reviewText}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 text-[11px] text-gray-400 flex items-center justify-between mt-4">
                    <span>Verified Graduate Review</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
