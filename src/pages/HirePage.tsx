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
  Sparkles
} from 'lucide-react';

interface HirePageProps {
  navigateTo: (route: RouteType) => void;
  openCounseling: () => void;
}

export const HirePage: React.FC<HirePageProps> = ({ navigateTo, openCounseling }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hireSubmitted, setHireSubmitted] = useState(false);
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

  const handleHireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hireData.robotCheck) {
      alert('Please confirm you are not a robot.');
      return;
    }
    setHireSubmitted(true);
  };

  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Zero Recruitment Cost
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Hire IT <span className="text-brand-500">Students</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Access pre-screened, industry-trained junior developers and engineers ready to contribute from day one.
          </p>
        </div>
      </section>

      {/* Hire IT Students For Free Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                Mamo TechnoLabs’ Training Center
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Hire IT Students For Free, From Mamo TechnoLabs
              </h2>
            </div>

            <div className="lg:col-span-7 bg-gray-50 p-8 rounded-3xl border border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                Companies in technology circles are on a constant hunt for real talent who can learn quickly and contribute to their goals without months of hand-holding. Mamo TechnoLabs, the top-notch IT institute in Vadodara, flips the script.
              </p>
              <p>
                We give employers direct access to job ready IT candidates. These candidates are already trained and toughened through hands-on work. For HR teams fighting deadlines, this is an advantage they can feel almost immediately – building their junior bench at zero placement commission.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-purple-950 via-indigo-900 to-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Hire Industry-Ready IT Freshers At Zero Cost With Mamo TechnoLabs Today!
              </h2>
              <p className="text-xs sm:text-sm text-purple-200">
                Pre-screened candidates in AI, Machine Learning, Python, Full Stack, and QA Automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919325910095"
                className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 font-bold text-xs uppercase tracking-wider text-white shadow-lg text-center"
              >
                CALL PLACEMENT TEAM
              </a>
              <a
                href="#hire-form"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-bold text-xs uppercase tracking-wider text-white text-center"
              >
                REQUEST TALENT POOL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Skill Coverage */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Job-Ready Proficiencies
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Talent Skill Coverage
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Our students undergo rigorous project assessment across all primary tech specializations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Full-Stack Web Development',
                desc: 'Proficient in React, Node.js, Express, MongoDB, MySQL, responsive Tailwind design, and clean RESTful API integration.',
                img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Core Programming & Logic',
                desc: 'Strong algorithmic intuition, data structures, object-oriented principles in Python, JavaScript, and Java.',
                img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Testing Fundamentals & QA',
                desc: 'Manual test planning, boundary value analysis, regression suites, and automated browser test scripts with Selenium & Playwright.',
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Database & Backend Architecture',
                desc: 'Relational SQL queries, normalization, indexing, Prisma ORM, MongoDB aggregation, and Redis caching fundamentals.',
                img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'AI, LLMs & Machine Learning',
                desc: 'Practical prompt engineering, RAG pipelines, scikit-learn models, and integrating open-source foundation models into web apps.',
                img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Workplace & Cultural Readiness',
                desc: 'Agile/Scrum ceremonies, Jira ticketing, Git pull request workflows, professional etiquette, and clear stakeholder updates.',
                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80'
              }
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all flex flex-col"
              >
                <div className="h-44 overflow-hidden bg-gray-100">
                  <img src={skill.img} alt={skill.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-gray-900 mb-2">{skill.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How It Works (5-Step Process) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Zero Friction Hiring
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              From requirement definition to Day 1 onboarding in 5 simple steps
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Share Your Talent Requirement',
                desc: 'Tell us your required technical stack, team culture, expected responsibilities, and start timeline.'
              },
              {
                step: '2',
                title: 'Creating Relevance-Driven Shortlist',
                desc: 'Our vetting faculty screens students based on verified project code, problem-solving ability, and communication clarity.'
              },
              {
                step: '3',
                title: 'Interviews Without Operational Strain',
                desc: 'We handle scheduling, follow-ups, and candidate coordination over Zoom, Google Meet, or offline at your offices.'
              },
              {
                step: '4',
                title: 'Select Your Best Candidates',
                desc: 'Evaluate shortlisted candidates through your internal coding tests, assignments, or architectural discussions.'
              },
              {
                step: '5',
                title: 'You Onboard – With Zero Hiring Fee',
                desc: 'Once you extend the offer, we ensure smooth documentation and transition without any hidden fees or commission.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-9 h-9 rounded-full bg-brand-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Recruiter Request Form */}
      <section className="py-20 bg-gray-50 border-t border-gray-100" id="hire-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Request Candidate Profiles
            </h2>
            <p className="text-xs text-gray-500 mt-1">Zero hiring fee • Pre-screened candidates • 48-hour shortlist turnaround</p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
            {hireSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-brand-600 mx-auto" />
                <h4 className="text-lg font-bold text-gray-900">Talent Request Received!</h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-gray-800">{hireData.contactPerson}</span> from <span className="font-bold text-gray-800">{hireData.companyName}</span>. Our corporate placement head will call you at <span className="font-bold text-gray-800">{hireData.phone}</span> with candidate CVs within 24 hours.
                </p>
                <button
                  onClick={() => setHireSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleHireSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Company Name *"
                    value={hireData.companyName}
                    onChange={(e) => setHireData({ ...hireData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="HR / Contact Person Name *"
                    value={hireData.contactPerson}
                    onChange={(e) => setHireData({ ...hireData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Official Work Email *"
                    value={hireData.email}
                    onChange={(e) => setHireData({ ...hireData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / Mobile Number *"
                    value={hireData.phone}
                    onChange={(e) => setHireData({ ...hireData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={hireData.positions}
                    onChange={(e) => setHireData({ ...hireData, positions: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white text-gray-700"
                  >
                    <option value="fullstack">Full Stack Developers (React / Node / Python)</option>
                    <option value="ai">AI & Machine Learning Engineers</option>
                    <option value="data">Data Analysts / BI Specialists</option>
                    <option value="qa">QA Automation Testers</option>
                    <option value="marketing">Digital Marketing Executives</option>
                  </select>
                  <select
                    value={hireData.count}
                    onChange={(e) => setHireData({ ...hireData, count: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white text-gray-700"
                  >
                    <option value="1-2">1 to 2 Freshers</option>
                    <option value="3-5">3 to 5 Freshers</option>
                    <option value="6-10">6 to 10 Freshers</option>
                    <option value="10+">10+ Mass Recruitment</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Specific skill requirements or job description notes"
                    value={hireData.notes}
                    onChange={(e) => setHireData({ ...hireData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                </div>

                {/* Mock reCAPTCHA */}
                <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-gray-50 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={hireData.robotCheck}
                      onChange={(e) => setHireData({ ...hireData, robotCheck: e.target.checked })}
                      className="w-4 h-4 rounded text-brand-600 focus:ring-brand-400 border-gray-300"
                    />
                    <span className="font-medium text-gray-700">I'm not a robot</span>
                  </label>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                    <span>reCAPTCHA</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-98 text-white font-black text-xs shadow-lg shadow-brand-600/30 uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST RESUMES NOW (FREE)</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
