import React from 'react';
import { RouteType } from '../../types';
import { CheckCircle2, BookOpen, Laptop, UserCheck, HelpCircle } from 'lucide-react';

interface NiosPageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: (domain?: string) => void;
}

export const NiosPage: React.FC<NiosPageProps> = ({ navigateTo, openCounseling }) => {
  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Academic Second Chance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            NIOS Learning <span className="text-brand-500">Centre</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Complete your secondary and senior secondary certifications with accredited National Institute of Open Schooling guidance.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://www.vtechlabs.com/wp-content/uploads/2026/07/nios_img.png"
                  alt="NIOS Learning Centre"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                Learn About
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                NIOS Learning Centre in Vadodara
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Regular education can pose unforeseen challenges. Unlucky circumstances or personal reasons cause many bright students to interrupt schooling. Mamo TechnoLabs, a renowned Vadodara-based learning facility, helps you get right back on track.
                </p>
                <p>
                  Our facility serves the National Institute of Open Schooling Senior Secondary (Class 12) and Secondary (Class 10) programs. We provide superior hybrid team training, admission support, and complete academic mentorship.
                </p>
                <p>
                  Every student deserves another chance at success. Do not worry about past setbacks. Join us to preserve your academic years and earn recognized board credentials.
                </p>
              </div>

              <div>
                <button
                  onClick={() => openCounseling('NIOS Admission')}
                  className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md"
                >
                  INQUIRE FOR NIOS ADMISSION
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Provide Sub-Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              What We Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">Subject-wise Tuition Classes</h4>
              <p className="text-xs text-gray-500">Dedicated teachers covering syllabus from basic concepts.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <Laptop className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">Flexible Learning System</h4>
              <p className="text-xs text-gray-500">Online live classes and weekend batches to match schedules.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">Exam Preparation Assistance</h4>
              <p className="text-xs text-gray-500">Past year question solving, mock tests, and exam tips.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900">Career Counselling</h4>
              <p className="text-xs text-gray-500">Pathways into BCA, B.Sc IT, and diploma programs post-clearing.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
