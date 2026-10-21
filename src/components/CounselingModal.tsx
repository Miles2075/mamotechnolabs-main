import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const CounselingModal: React.FC<CounselingModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    training: defaultCourse || 'python',
    isRobotChecked: false
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isRobotChecked) {
      alert('Please confirm you are not a robot.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      training: 'python',
      isRobotChecked: false
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-700 to-brand-600 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Book Free Career Counseling</h3>
              <p className="text-xs text-brand-100">Personalized guidance from IT industry experts</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-green-100 text-brand-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-gray-900">Application Received!</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-gray-800">{formData.name}</span>. Our senior career counselor will call you within 2 hours at <span className="font-bold text-gray-800">{formData.phone}</span>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Select Training Track *
                </label>
                <select
                  value={formData.training}
                  onChange={(e) => setFormData({ ...formData, training: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm outline-none transition-all bg-white"
                >
                  <option value="python">Advanced Python Course</option>
                  <option value="ai">Artificial Intelligence & Deep Learning</option>
                  <option value="gen-ai">Generative AI & LLM Systems</option>
                  <option value="ds">Data Science & Analytics</option>
                  <option value="ml">Machine Learning Mastery</option>
                  <option value="pe">Prompt Engineering & Automation</option>
                  <option value="web">Full Stack Web Development</option>
                  <option value="internship">IT Internship Program</option>
                </select>
              </div>

              {/* Mock reCAPTCHA */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-gray-50/80">
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.isRobotChecked}
                    onChange={(e) => setFormData({ ...formData, isRobotChecked: e.target.checked })}
                    className="w-5 h-5 rounded text-brand-600 focus:ring-brand-400 border-gray-300"
                  />
                  <span className="text-xs font-medium text-gray-800">I'm not a robot</span>
                </label>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>reCAPTCHA Privacy</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition-all uppercase tracking-wide"
              >
                <Send className="w-4 h-4" />
                <span>BOOK FREE COUNSELLING NOW</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
