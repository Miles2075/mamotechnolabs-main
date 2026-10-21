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
  ArrowRight
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
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Career Transformation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            IT Job Consultancy <br />
            <span className="text-brand-500">In Vadodara</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Connecting trained IT freshers and experienced candidates directly with hiring companies.
          </p>
        </div>
      </section>

      {/* IT Recruitment Consultant Top */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                Staffing & Placements
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                IT Recruitment Consultant – Best Platform To Meet Your IT Job Needs
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  If you are on the lookout for the best IT job consultancy and recruitment agency in Vadodara then you are at the right place. With our help, you can get the right type of job in the IT industry for your talent and experience. We have been in the IT manpower recruitment business for quite some time now, and our IT manpower services are rated among the best.
                </p>
                <p>
                  To get started with our IT staffing process, you will need to just let us know the details of your learning and past work experience. Also, tell us what kind of salary you expect. We will search for a suitable IT job within our network of 100+ hiring companies.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={openCounseling}
                  className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-md uppercase tracking-wider"
                >
                  REGISTER FOR PLACEMENT ASSISTANCE
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 text-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://www.vtechlabs.com/wp-content/uploads/2026/05/Recruitment-Consultant.jpg"
                  alt="IT Recruitment Consultant"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStats.map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-3xl border text-center space-y-2 ${
                  i % 2 === 0
                    ? 'bg-gradient-to-br from-brand-600 to-emerald-700 text-white border-transparent shadow-lg shadow-brand-600/20'
                    : 'bg-white border-gray-200/80 text-gray-900 shadow-xs'
                }`}
              >
                <div className="text-3xl sm:text-4xl font-black">{stat.value}</div>
                <div className={`text-xs font-bold uppercase tracking-wider ${i % 2 === 0 ? 'text-brand-100' : 'text-brand-700'}`}>
                  {stat.label}
                </div>
                <p className={`text-[11px] leading-relaxed ${i % 2 === 0 ? 'text-brand-100/90' : 'text-gray-500'}`}>
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Placements Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Alumni Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Recent Placements
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Our students consistently secure roles across software development, data science, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {recentPlacements.map((candidate) => (
              <div
                key={candidate.id}
                className="p-5 rounded-3xl bg-gray-50 border border-gray-100 shadow-xs hover:shadow-lg hover:border-brand-300 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-white shadow-md bg-white">
                    <img
                      src={candidate.studentImg}
                      alt={candidate.studentName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-sm text-gray-900">{candidate.studentName}</h4>
                  <p className="text-xs text-brand-600 font-semibold mt-0.5">{candidate.role}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/80 flex items-center justify-center h-10">
                  <img
                    src={candidate.companyLogo}
                    alt={candidate.companyName}
                    className="max-h-7 max-w-[90px] object-contain opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Profile Building Sessions (Flip Cards) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Comprehensive Prep
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Profile Building Sessions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Four dedicated steps every candidate completes prior to company interviews
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-3 hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900">1. Resume Preparation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Get your resume professionally crafted to highlight your technical stack and stand out to top tech recruiters.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-3 hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900">2. Mock Interview</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Practice real-time technical and HR mock interviews with expert feedback to improve confidence, communication & performance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-3 hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900">3. Web Portfolio</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Build live industry-grade web portfolio projects hosted in the cloud to showcase your practical coding skills to employers.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-3 hover:border-brand-300 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900">4. Git & GitHub Training</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Master version control with Git & GitHub through hands-on collaborative repository workflows and branching.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Start Learning Today Form */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Start Learning Today
            </h2>
            <p className="text-xs text-gray-500 mt-1">Not sure where to start? Let Us Help You</p>
          </div>

          <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
            {learningFormSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-brand-600 mx-auto" />
                <h4 className="text-lg font-bold text-gray-900">Request Sent!</h4>
                <p className="text-xs text-gray-600">
                  Thank you! Our placement advisor will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setLearningFormSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-mail Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Preferred Domain (e.g. AI, Web, Data) *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white"
                  />
                </div>

                {/* Mock reCAPTCHA */}
                <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white text-xs">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.robotCheck}
                      onChange={(e) => setFormData({ ...formData, robotCheck: e.target.checked })}
                      className="w-4 h-4 rounded text-brand-600 focus:ring-brand-400 border-gray-300"
                    />
                    <span className="font-medium text-gray-700">I'm not a robot</span>
                  </label>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                    <span>reCAPTCHA Privacy</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-98 text-white font-black text-xs shadow-lg shadow-brand-600/30 uppercase tracking-wider transition-all"
                >
                  SUBMIT FOR CAREER COUNSELING
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
