import React from 'react';
import { RouteType } from '../../types';
import { CheckCircle2, FileText, UserCheck, Clock, CreditCard } from 'lucide-react';

interface FinalYearPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: (domain?: string) => void;
}

export const FinalYearPage: React.FC<FinalYearPageProps> = ({ navigateTo, openCounseling }) => {
  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Academic Projects
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Final Year <span className="text-brand-500">Project Training</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Build a live production capstone project that impresses your college examiners and recruiters.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-center">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="https://www.vtechlabs.com/wp-content/uploads/2026/05/course-details-banner.png"
                  alt="Final Year Project"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                Learn About
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Last Year Project Training
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  At present, there is a huge competition to get good tech jobs. So, unless you complete a substantive final-year project, it won't be easy to stand out. Taking up a live project through your final year degree course has been a part of higher technical education for decades.
                </p>
                <p>
                  At Mamo TechnoLabs, we can give you the best live project training experience. We have a team of seasoned software engineers who will teach you how to build and architect live projects using Python, React, AI, Android, Java, .Net, and PHP with clean code and documentation.
                </p>
              </div>

              <div>
                <button
                  onClick={() => openCounseling('Final Year Project')}
                  className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
                >
                  START FINAL YEAR PROJECT
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Provide Cards */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              What We Provide
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">Project Work & Assignments</h4>
              <p className="text-xs text-gray-500">Full source code, SRS documentation & viva prep.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">Dedicated Success Mentor</h4>
              <p className="text-xs text-gray-500">1-on-1 code reviews and technical debugging support.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">Timely Doubt Resolution</h4>
              <p className="text-xs text-gray-500">Fast answers during coding blocks and lab hours.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">No Cost EMI Option</h4>
              <p className="text-xs text-gray-500">Easy student-friendly fee installments.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
