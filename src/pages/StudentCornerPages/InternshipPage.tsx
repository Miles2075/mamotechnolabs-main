import React from 'react';
import { RouteType } from '../../types';
import { CheckCircle2, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

interface InternshipPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: (domain?: string) => void;
}

export const InternshipPage: React.FC<InternshipPageProps> = ({ navigateTo, openCounseling }) => {
  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Student Corner
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            IT Internship <span className="text-brand-500">In Vadodara</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Real-world project immersion, live code deployments, and industry mentor guidance for freshers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                Freshers & Final Year
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Looking For An Internship In Vadodara – You Are At The Right Place!
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  If you want real-time experience to start a network in the tech area of your liking, then you should enroll for an internship in Vadodara with Mamo TechnoLabs. It will help you gain hands-on practical training in the field in which you want to build a long-term career.
                </p>
                <p>
                  It provides an exceptional chance to correlate theoretical university syllabi with actual industry application, giving you a learning curve equivalent to on-the-job training. You gain skills demanded by tech firms before completing your degree course.
                </p>
              </div>

              {/* 2 Types of Internships */}
              <div className="pt-2">
                <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-3">
                  Two Types Of Internships Offered:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">1. Final Year Internships</h4>
                      <p className="text-xs text-gray-500 mt-1">Full-semester project development with mentor review & academic approval.</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">2. Summer Internships</h4>
                      <p className="text-xs text-gray-500 mt-1">Fast-tracked 4 to 8 week accelerated bootcamps on Python, Web, and AI.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openCounseling('IT Internship')}
                  className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
                >
                  APPLY FOR INTERNSHIP BATCH
                </button>
              </div>

            </div>

            <div className="lg:col-span-5 text-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://www.vtechlabs.com/wp-content/uploads/2026/05/Recruitment-Consultant.jpg"
                  alt="Internship In Vadodara"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
