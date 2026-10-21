import React, { useState } from 'react';
import { RouteType } from '../types';
import { hiringPartners } from '../data/placementsData';
import { generalFaqs } from '../data/faqsData';
import {
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Send,
  Building,
  Users,
  ChevronDown,
  Layers,
  Sparkles,
  Award,
  Zap,
  Check,
  Briefcase,
  ArrowRight,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { sendInquiryEmail } from '../utils/sendMail';

interface HirePageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: () => void;
}

export const HirePage: React.FC<HirePageProps> = ({ navigateTo, openCounseling }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hireSubmitted, setHireSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoFallback, setMailtoFallback] = useState('');
  const [hireData, setHireData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    positions: 'fullstack',
    count: '1-5',
    notes: '',
    robotCheck: false
  });

  const handleHireSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hireData.robotCheck) {
      alert('Please confirm verification.');
      return;
    }
    setIsSubmitting(true);
    const result = await sendInquiryEmail({
      formType: 'Corporate Hire',
      name: hireData.contactPerson,
      email: hireData.email,
      phone: hireData.phone,
      courseOrTrack: hireData.positions,
      message: hireData.notes,
      extraDetails: {
        'Company Name': hireData.companyName,
        'Headcount Required': hireData.count
      }
    });
    setMailtoFallback(result.mailtoUrl);
    setIsSubmitting(false);
    setHireSubmitted(true);
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
            <Zap className="w-3.5 h-3.5" />
            <span>Zero-Cost Corporate Staffing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Hire Pre-Vetted, Job-Ready <br />
            <span className="text-gradient-brand">Tech Talent at Zero Cost</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate agency recruitment fees. Hire thoroughly tested junior software engineers, AI developers, and QA specialists trained on production workflows.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> ₹0 Placement Agency Fee</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 48-Hour Profile Turnaround</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pre-Screened Coding Assessments</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. TALENT POOL DOMAINS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Talent Domains Ready to Deploy
            </h2>
            <p className="text-slate-600 text-sm">
              Our scholars undergo 3 to 6 months of intense hands-on lab sprints across these core technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI & Machine Learning', count: '45+ Candidates', skills: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API'] },
              { title: 'Full-Stack Developers', count: '80+ Candidates', skills: ['React', 'Node.js', 'Next.js', 'MongoDB', 'PostgreSQL'] },
              { title: 'Data Scientists & Analysts', count: '35+ Candidates', skills: ['Python', 'Pandas', 'PowerBI', 'Tableau', 'SQL'] },
              { title: 'QA & Automation Testers', count: '50+ Candidates', skills: ['Selenium', 'Cypress', 'Postman', 'Jira', 'API Testing'] }
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-400">{d.count}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h4 className="text-lg font-black text-slate-900">{d.title}</h4>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {d.skills.map((s, si) => (
                    <span key={si} className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. ZERO COST RECRUITER FORM & BENEFIT DETAILS
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Why Recruit From Us */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                Corporate Staffing Partnership
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Why 100+ Companies Hire Directly From Mamo TechnoLabs
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Traditional fresh college graduates often require 6 to 9 months of expensive internal training before they can push production code. At Mamo TechnoLabs, our students write production pull requests, build full-stack microservices, and train real AI models from day one.
                </p>
                <p>
                  We coordinate with your hiring teams to filter candidates based on your exact tech stack, schedule online or campus drives, and manage the candidate pipeline entirely free of cost.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <h5 className="font-black text-lg text-slate-900">₹0 Fee</h5>
                  <p className="text-xs text-slate-500">Zero commission or hidden recruiter charges</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <h5 className="font-black text-lg text-slate-900">48h SLA</h5>
                  <p className="text-xs text-slate-500">Interview-ready profiles shared within 2 days</p>
                </div>
              </div>
            </div>

            {/* Right Column: Recruiter Inquiry Form */}
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-800">
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-black">Post Your Hiring Requirement</h3>
                <p className="text-xs text-slate-400">Our corporate recruitment manager will connect with tailored candidate profiles.</p>
              </div>

              {hireSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-white">Hiring Requirement Dispatched!</h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Your staffing request has been sent to our corporate recruitment cell at <strong className="text-brand-300">info@mamotechnolabs.com</strong>. We will share curated resumes within 24 hours.
                    </p>
                  </div>
                  {mailtoFallback && (
                    <div className="pt-2">
                      <a
                        href={mailtoFallback}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-brand-400" />
                        Open Copy in Your Mail Client
                      </a>
                    </div>
                  )}
                  <div className="pt-2">
                    <button
                      onClick={() => setHireSubmitted(false)}
                      className="text-xs font-semibold text-brand-400 hover:underline"
                    >
                      Post another requirement
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleHireSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Company Name</label>
                      <input
                        type="text"
                        required
                        value={hireData.companyName}
                        onChange={(e) => setHireData({ ...hireData, companyName: e.target.value })}
                        placeholder="Acme Technologies"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-brand-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Contact Person</label>
                      <input
                        type="text"
                        required
                        value={hireData.contactPerson}
                        onChange={(e) => setHireData({ ...hireData, contactPerson: e.target.value })}
                        placeholder="HR Manager / Tech Lead"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-brand-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Official Email</label>
                      <input
                        type="email"
                        required
                        value={hireData.email}
                        onChange={(e) => setHireData({ ...hireData, email: e.target.value })}
                        placeholder="hr@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-brand-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={hireData.phone}
                        onChange={(e) => setHireData({ ...hireData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-brand-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Required Domain</label>
                      <select
                        value={hireData.positions}
                        onChange={(e) => setHireData({ ...hireData, positions: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-brand-400"
                      >
                        <option value="fullstack">Full-Stack Developers (MERN/Python)</option>
                        <option value="ai">AI / ML / Data Science Engineers</option>
                        <option value="qa">QA Automation & Testing</option>
                        <option value="marketing">Digital Marketing & SEO</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Headcount Needed</label>
                      <select
                        value={hireData.count}
                        onChange={(e) => setHireData({ ...hireData, count: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800 text-white text-xs border border-slate-700 focus:outline-none focus:border-brand-400"
                      >
                        <option value="1-5">1 - 5 Candidates</option>
                        <option value="5-15">5 - 15 Candidates</option>
                        <option value="15+">15+ Candidates (Bulk Drive)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="hireRobot"
                      checked={hireData.robotCheck}
                      onChange={(e) => setHireData({ ...hireData, robotCheck: e.target.checked })}
                      className="rounded text-brand-600 focus:ring-brand-400 w-4 h-4"
                    />
                    <label htmlFor="hireRobot" className="text-xs text-slate-300">
                      I agree to terms of zero-cost corporate recruitment
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-400 via-emerald-400 to-teal-400 hover:opacity-95 transition-opacity shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Sending to info@mamotechnolabs.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-slate-950" />
                        <span>Request Pre-Screened Candidate Resumes</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. HIRING PARTNERS GRID
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <h3 className="text-xl font-black text-slate-900">
            Trusted by Hiring Managers Nationwide
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {hiringPartners.map((partner, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HirePage;
