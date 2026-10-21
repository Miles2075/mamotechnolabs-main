import React, { useState } from 'react';
import { RouteType, CertificateCategory } from '../types';
import { certificateList, skillCategories } from '../data/quizData';
import {
  Brain,
  Search,
  Award,
  CheckCircle2,
  Clock,
  Star,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Printer,
  X,
  Check,
  Zap,
  Download,
  Share2
} from 'lucide-react';

interface SkillPageProps {
  navigateTo: (route: RouteType) => void;
}

export const SkillPage: React.FC<SkillPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Quiz State
  const [activeQuiz, setActiveQuiz] = useState<CertificateCategory | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const filteredCerts = certificateList.filter((cert) => {
    const matchesCategory = selectedCategory === 'All' || cert.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = cert.name.toLowerCase().includes(searchQuery.toLowerCase()) || cert.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const startQuiz = (cert: CertificateCategory) => {
    setActiveQuiz(cert);
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setQuizCompleted(false);
    setCertificateGenerated(false);
    setCandidateName('');
  };

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: optionIndex });
  };

  const calculateScore = () => {
    if (!activeQuiz || !activeQuiz.questions) return { score: 0, total: 0, percentage: 0 };
    let correct = 0;
    activeQuiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correct++;
      }
    });
    const total = activeQuiz.questions.length;
    const percentage = Math.round((correct / total) * 100);
    return { score: correct, total, percentage };
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
            <Award className="w-3.5 h-3.5" />
            <span>Official Skill Verification Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Assess Your Coding Skills. <br />
            <span className="text-gradient-brand">Earn Verified Certifications.</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take a 10-minute practical technical quiz, evaluate your conceptual mastery, and generate an authenticated certificate to feature on LinkedIn and your resume.
          </p>

          {/* Quick Search */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-1.5 focus-within:border-brand-400">
              <Search className="w-4 h-4 text-slate-300 ml-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certificate by language (Python, React, AI...)"
                className="w-full px-3 py-2 text-xs text-white placeholder-slate-400 bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. CERTIFICATION DIRECTORY
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50/70" id="assessment-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-card-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:scale-105 transition-transform">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {cert.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      10 Mins • 5-10 MCQs
                    </span>
                    <span className="text-emerald-600 font-bold">Free Instant Certificate</span>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => startQuiz(cert)}
                    className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                  >
                    <Award className="w-4 h-4 text-brand-400 group-hover:text-white" />
                    <span>Take Assessment & Get Certified</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCerts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
              <p className="text-slate-500 text-sm">No assessments found matching your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-brand-600 underline"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. INTERACTIVE QUIZ & CERTIFICATE MODAL
         ───────────────────────────────────────────────────────── */}
      {activeQuiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-400 uppercase tracking-widest font-bold block">Certification Exam</span>
                  <h3 className="text-base font-black">{activeQuiz.name}</h3>
                </div>
              </div>
              <button
                onClick={() => setActiveQuiz(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {!quizCompleted ? (
                <div>
                  {activeQuiz.questions && activeQuiz.questions.length > 0 ? (
                    <div className="space-y-6">
                      {/* Progress Bar */}
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-1.5">
                          <span>Question {currentQuestionIdx + 1} of {activeQuiz.questions.length}</span>
                          <span>{Math.round(((currentQuestionIdx + 1) / activeQuiz.questions.length) * 100)}% Completed</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-300 rounded-full"
                            style={{ width: `${((currentQuestionIdx + 1) / activeQuiz.questions.length) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* Question */}
                      <div className="space-y-4">
                        <h4 className="text-base font-black text-slate-900 leading-snug">
                          {activeQuiz.questions[currentQuestionIdx].question}
                        </h4>

                        <div className="space-y-2.5 pt-2">
                          {activeQuiz.questions[currentQuestionIdx].options.map((option, optIdx) => (
                            <label
                              key={optIdx}
                              onClick={() => handleSelectAnswer(currentQuestionIdx, optIdx)}
                              className={`w-full p-4 rounded-2xl border text-xs leading-relaxed flex items-center gap-3 cursor-pointer transition-all ${
                                selectedAnswers[currentQuestionIdx] === optIdx
                                  ? 'border-brand-500 bg-brand-50/80 text-brand-950 font-bold shadow-xs'
                                  : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`q_${currentQuestionIdx}`}
                                checked={selectedAnswers[currentQuestionIdx] === optIdx}
                                onChange={() => handleSelectAnswer(currentQuestionIdx, optIdx)}
                                className="w-4 h-4 text-brand-600 focus:ring-brand-500"
                              />
                              <span>{option}</span>
                            </label>
                          ))}
                        </div>

                        {/* Navigation buttons */}
                        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                          <button
                            disabled={currentQuestionIdx === 0}
                            onClick={() => setCurrentQuestionIdx(currentQuestionIdx - 1)}
                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 disabled:opacity-30 hover:bg-slate-50"
                          >
                            Previous
                          </button>

                          {currentQuestionIdx < activeQuiz.questions.length - 1 ? (
                            <button
                              disabled={selectedAnswers[currentQuestionIdx] === undefined}
                              onClick={() => setCurrentQuestionIdx(currentQuestionIdx + 1)}
                              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs disabled:opacity-30"
                            >
                              Next Question →
                            </button>
                          ) : (
                            <button
                              disabled={selectedAnswers[currentQuestionIdx] === undefined}
                              onClick={() => setQuizCompleted(true)}
                              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-bold text-xs disabled:opacity-30 shadow-md"
                            >
                              Finish & View Score
                            </button>
                          )}
                        </div>

                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-sm text-slate-500 py-8">Assessment questions loading...</p>
                  )}
                </div>
              ) : !certificateGenerated ? (
                /* Results View */
                <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-600 flex items-center justify-center mx-auto shadow-sm">
                    <Award className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-2xl font-black text-slate-900">Assessment Completed!</h4>
                    <p className="text-xs text-slate-500">You demonstrated practical conceptual proficiency.</p>
                  </div>

                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 max-w-sm mx-auto space-y-1">
                    <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">Your Final Score</span>
                    <div className="text-4xl font-black text-brand-600">
                      {calculateScore().percentage}%
                    </div>
                    <p className="text-xs text-slate-600">
                      {calculateScore().score} of {calculateScore().total} questions answered correctly
                    </p>
                  </div>

                  <div className="max-w-sm mx-auto text-left space-y-2 pt-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name For Certificate Verification *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <button
                      disabled={!candidateName.trim()}
                      onClick={() => setCertificateGenerated(true)}
                      className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 disabled:opacity-40 shadow-md mt-2"
                    >
                      Generate Official Certificate
                    </button>
                  </div>
                </div>
              ) : (
                /* Official Certificate Display */
                <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
                  <div className="p-8 sm:p-10 rounded-3xl border-4 border-amber-500/40 bg-gradient-to-b from-amber-50/30 via-white to-amber-50/20 text-slate-900 shadow-xl relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-slate-400">
                      CERT-ID: MAMO-2026-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2">
                        <Award className="w-8 h-8 text-amber-500" />
                        <span className="text-xs uppercase tracking-widest font-black text-slate-500">Mamo TechnoLabs LLP</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-serif">
                        Certificate of Achievement
                      </h3>

                      <p className="text-xs text-slate-500">This is to officially certify that</p>
                      
                      <div className="text-2xl sm:text-3xl font-black text-brand-700 border-b-2 border-brand-200 inline-block px-8 py-1">
                        {candidateName}
                      </div>

                      <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed pt-2">
                        has successfully passed the verified skill assessment for <strong className="text-slate-900">{activeQuiz.name}</strong> with a passing score of <strong className="text-brand-600">{calculateScore().percentage}%</strong>.
                      </p>

                      <div className="pt-6 flex items-center justify-between border-t border-amber-200/60 text-[11px] text-slate-500 max-w-md mx-auto">
                        <div className="text-left">
                          <span className="block font-bold text-slate-900">Academic Director</span>
                          <span>Mamo TechnoLabs LLP</span>
                        </div>
                        <div className="text-right">
                          <span className="block font-bold text-slate-900">ISO 9001:2015</span>
                          <span>Verified Credential</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => window.print()}
                      className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print / Save as PDF</span>
                    </button>
                    <button
                      onClick={() => {
                        setActiveQuiz(null);
                        setQuizCompleted(false);
                        setCertificateGenerated(false);
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SkillPage;
