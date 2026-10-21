import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Send, PhoneCall, Loader2, ExternalLink } from 'lucide-react';
import { sendInquiryEmail } from '../utils/sendMail';

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
    training: defaultCourse || 'ai',
    isRobotChecked: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoFallback, setMailtoFallback] = useState('');

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, training: defaultCourse }));
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isRobotChecked) {
      alert('Please confirm verification.');
      return;
    }
    setIsSubmitting(true);
    const result = await sendInquiryEmail({
      formType: 'Counseling',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      courseOrTrack: formData.training
    });
    setMailtoFallback(result.mailtoUrl);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setMailtoFallback('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      training: 'ai',
      isRobotChecked: false
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg leading-tight">Book Free Career Counseling</h3>
              <p className="text-xs text-slate-400">1-on-1 personalized guidance with senior tech mentors</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-2xl font-black text-slate-900">Inquiry Sent to Admissions!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your consultation request has been delivered to <strong className="text-slate-800">info@mamotechnolabs.com</strong>. A senior counselor will contact you shortly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 text-left max-w-sm mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Track:</span>
                  <span className="font-bold">{formData.training}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Email Address:</span>
                  <span className="font-bold">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Contact Number:</span>
                  <span className="font-bold">{formData.phone}</span>
                </div>
              </div>

              {mailtoFallback && (
                <div className="pt-1">
                  <a
                    href={mailtoFallback}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-brand-600" />
                    Open Copy in Your Mail App
                  </a>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Target Technology / Course</label>
                <select
                  value={formData.training}
                  onChange={(e) => setFormData({ ...formData, training: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="ai">Artificial Intelligence & Deep Learning</option>
                  <option value="ai-tools">AI Master Tools & Prompt Engineering</option>
                  <option value="ml">Machine Learning</option>
                  <option value="ds">Data Science</option>
                  <option value="web">Full-Stack Web Development</option>
                  <option value="internship">IT Internship In Vadodara</option>
                  <option value="general">Undecided / Career Counseling</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modalRobot"
                  checked={formData.isRobotChecked}
                  onChange={(e) => setFormData({ ...formData, isRobotChecked: e.target.checked })}
                  className="rounded text-brand-600 focus:ring-brand-400 w-4 h-4"
                />
                <label htmlFor="modalRobot" className="text-xs text-slate-600">
                  I agree to receive counseling advice & batch updates
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 transition-all shadow-md shadow-brand-500/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching to info@mamotechnolabs.com...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Schedule My Free Counseling Call</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Confidential
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
                  No Spam Guarantee
                </span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default CounselingModal;
