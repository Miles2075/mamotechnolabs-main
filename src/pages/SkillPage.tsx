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
  X
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
    <div className="pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 via-white to-white py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold border border-brand-200">
                Skill Assessment & Certification
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                Test Your Tech Skills <br />
                <span className="text-brand-600">Get Certified</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Select a technology, take a quick interactive quiz, validate your practical knowledge, and earn a shareable certificate to showcase to recruiters.
              </p>

              <div>
                <a
                  href="#assessment-grid"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 transition-all"
                >
                  <Brain className="w-4 h-4" />
                  <span>START A QUIZ</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 text-center">
              <div className="rounded-3xl bg-gradient-to-tr from-brand-100 via-white to-brand-50 p-6 border border-brand-100 shadow-xl">
                <img
                  src="https://pngimg.com/uploads/student/student_PNG62538.png"
                  alt="Certified Students"
                  className="w-full max-h-[350px] object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <h3 className="text-3xl font-black text-gray-900">10,000+</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase mt-1">Quizzes Taken</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-black text-brand-600">5,000+</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase mt-1">Certificates Issued</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-black text-amber-500 flex items-center justify-center gap-1">
                4.8 <Star className="w-5 h-5 fill-current" />
              </h3>
              <p className="text-xs text-gray-500 font-semibold uppercase mt-1">Average Rating</p>
            </div>
            <div className="p-4">
              <h3 className="text-3xl font-black text-gray-900">30 mins</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase mt-1">To Get Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Quiz Platform */}
      <section className="py-20 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Why Choose Our Quiz Platform?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Engineered by experienced IT architects to test applied industry thinking
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Multiple Technologies</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Choose from 46+ in-demand technologies across AI, Full-Stack, Cloud, and QA.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Instant Results</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Receive your score calculation and detailed answers immediately after submitting.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Verified Certificate</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Download and share your credential directly on LinkedIn or your tech resume.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Beginner to Advanced</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Assessment questions graded for students, junior developers, and experienced pros.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Assessment List Section */}
      <section className="py-20 bg-white" id="assessment-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Test Your Skills. Get Certified.
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Prove your expertise in high-demand technologies with assessment-based certification designed for career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar Filters */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search certificate..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-5 rounded-3xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-3 px-2">
                  Categories
                </h3>
                <div className="space-y-1">
                  {skillCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        selectedCategory === cat
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-brand-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RESET FILTERS</span>
                  </button>
                </div>
              </div>

            </aside>

            {/* Assessment Cards Grid */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-500">
                  {filteredCerts.length} Certificates Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredCerts.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white rounded-3xl border border-gray-100 hover:border-brand-300 shadow-xs hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
                  >
                    <div>
                      {/* Gradient Badge Header */}
                      <div className={`p-6 bg-gradient-to-r ${cert.gradientClass} text-white flex items-center justify-between`}>
                        <span className="font-black text-sm tracking-wider uppercase">
                          {cert.badgeCode}
                        </span>
                        <Award className="w-6 h-6 text-white/80" />
                      </div>

                      <div className="p-6 space-y-2">
                        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">
                          {cert.category}
                        </span>
                        <h3 className="font-bold text-base text-gray-900 group-hover:text-brand-600 transition-colors">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {cert.desc}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => startQuiz(cert)}
                        className="w-full py-3 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-brand-200 hover:border-brand-600 shadow-xs"
                      >
                        <Award className="w-4 h-4" />
                        <span>Get Certified (Take Quiz)</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Quiz Modal */}
      {activeQuiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-brand-700 to-brand-600 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] text-brand-100 uppercase tracking-widest font-bold">Certification Assessment</span>
                <h3 className="text-lg font-black">{activeQuiz.name}</h3>
              </div>
              <button
                onClick={() => setActiveQuiz(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {!quizCompleted ? (
                <div>
                  {activeQuiz.questions && activeQuiz.questions.length > 0 ? (
                    <div>
                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between text-xs text-gray-500 font-bold mb-1">
                          <span>Question {currentQuestionIdx + 1} of {activeQuiz.questions.length}</span>
                          <span>{Math.round(((currentQuestionIdx + 1) / activeQuiz.questions.length) * 100)}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className="h-full bg-brand-500 transition-all duration-300"
                            style={{ width: `${((currentQuestionIdx + 1) / activeQuiz.questions.length) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* Question */}
                      <div className="space-y-4">
                        <h4 className="text-base font-bold text-gray-900 leading-snug">
                          {activeQuiz.questions[currentQuestionIdx].question}
                        </h4>

                        <div className="space-y-2.5 pt-2">
                          {activeQuiz.questions[currentQuestionIdx].options.map((option, optIdx) => (
                            <label
                              key={optIdx}
                              onClick={() => handleSelectAnswer(currentQuestionIdx, optIdx)}
                              className={`w-full p-4 rounded-2xl border text-xs leading-relaxed flex items-center gap-3 cursor-pointer transition-all ${
                                selectedAnswers[currentQuestionIdx] === optIdx
                                  ? 'border-brand-500 bg-brand-50/70 text-brand-900 font-bold shadow-xs'
                                  : 'border-gray-200 hover:border-brand-200 text-gray-700'
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
                        <div className="pt-6 flex items-center justify-between">
                          <button
                            disabled={currentQuestionIdx === 0}
                            onClick={() => setCurrentQuestionIdx(currentQuestionIdx - 1)}
                            className="px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 disabled:opacity-40"
                          >
                            Previous
                          </button>

                          {currentQuestionIdx < activeQuiz.questions.length - 1 ? (
                            <button
                              disabled={selectedAnswers[currentQuestionIdx] === undefined}
                              onClick={() => setCurrentQuestionIdx(currentQuestionIdx + 1)}
                              className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs disabled:opacity-40"
                            >
                              Next Question →
                            </button>
                          ) : (
                            <button
                              disabled={selectedAnswers[currentQuestionIdx] === undefined}
                              onClick={() => setQuizCompleted(true)}
                              className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs disabled:opacity-40 shadow-md"
                            >
                              Submit Assessment
                            </button>
                          )}
                        </div>

                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-sm text-gray-500">Assessment questions loading...</p>
                  )}
                </div>
              ) : !certificateGenerated ? (
                /* Results View */
                <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-600 flex items-center justify-center mx-auto">
                    <Award className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-gray-900">Assessment Completed!</h4>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 max-w-sm mx-auto">
                    <span className="text-xs text-gray-500 block uppercase font-bold">Your Score</span>
                    <span className="text-4xl font-black text-brand-600">
                      {calculateScore().percentage}%
                    </span>
                    <p className="text-xs text-gray-600 mt-1">
                      {calculateScore().score} out of {calculateScore().total} questions correct
                    </p>
                  </div>

                  <div className="max-w-sm mx-auto text-left space-y-2 pt-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase">
                      Enter Name For Certificate *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                    />
                    <button
                      disabled={!candidateName.trim()}
                      onClick={() => setCertificateGenerated(true)}
                      className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider disabled:opacity-40 shadow-md transition-all mt-2"
                    >
                      Generate My Certificate Now
                    </button>
                  </div>
                </div>
              ) : (
                /* Certificate View */
                <div className="space-y-4 text-center py-2 animate-in zoom-in-95 duration-200">
                  <div className="p-8 rounded-3xl border-4 border-double border-amber-400 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 shadow-lg relative text-center">
                    
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Award className="w-8 h-8 text-amber-500" />
                      <span className="text-lg font-black tracking-wider text-gray-900 uppercase">
                        Mamo<span className="text-brand-600">TechnoLabs</span>
                      </span>
                    </div>

                    <p className="text-[10px] tracking-widest text-amber-700 font-bold uppercase mb-4">
                      Certificate of Achievement
                    </p>

                    <p className="text-xs text-gray-500">This is proudly presented to</p>
                    <h3 className="text-2xl font-black text-gray-900 border-b border-gray-300 pb-2 inline-block px-8 my-2">
                      {candidateName}
                    </h3>

                    <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed mt-2">
                      For demonstrating verified technical competence in <strong className="text-gray-900">{activeQuiz.name}</strong> through the Mamo TechnoLabs Assessment Framework.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500 font-medium px-4">
                      <span>Date: {new Date().toLocaleDateString('en-GB')}</span>
                      <span>Verified ID: MAMO-{Math.floor(100000 + Math.random() * 900000)}</span>
                      <span>CMMI Level 3 Certified</span>
                    </div>

                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs shadow-md"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print / Save as PDF</span>
                    </button>
                    <button
                      onClick={() => setActiveQuiz(null)}
                      className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-bold text-xs hover:bg-gray-50"
                    >
                      Done
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
