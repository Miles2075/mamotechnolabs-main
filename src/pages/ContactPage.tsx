import React, { useState } from 'react';
import { RouteType } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { sendInquiryEmail } from '../utils/sendMail';

interface ContactPageProps {
  navigateTo: (route: RouteType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoFallback, setMailtoFallback] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'training',
    technology: 'python',
    city: '',
    source: 'google',
    comments: '',
    isRobotChecked: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isRobotChecked) {
      alert('Please confirm verification.');
      return;
    }
    setIsSubmitting(true);
    const result = await sendInquiryEmail({
      formType: 'Contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      courseOrTrack: formData.technology,
      message: formData.comments,
      extraDetails: {
        'City': formData.city || 'Not provided',
        'Inquiry Category': formData.type,
        'Lead Source': formData.source
      }
    });
    setMailtoFallback(result.mailtoUrl);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* ─────────────────────────────────────────────────────────
          1. HERO BANNER
         ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Admissions & Recruitment Helpdesk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Let's Talk About Your <br />
            <span className="text-gradient-brand">Future in Tech</span>
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about upcoming batches, syllabus deep-dives, placement drives, or corporate hiring? Reach out directly to our advisors.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. DIRECT CONTACT INFO CARDS
         ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Card 1: Email */}
            <a
              href="mailto:info@mamotechnolabs.com?subject=Inquiry%20from%20Website&body=Hi%20Admissions%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20courses."
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:bg-brand-50/20 transition-all text-center space-y-2 group shadow-xs block"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Email Admissions</h3>
              <p className="text-xs text-slate-500">General queries & applications</p>
              <span className="text-xs font-bold text-brand-600 group-hover:underline block pt-1">
                info@mamotechnolabs.com
              </span>
            </a>

            {/* Card 2: Phone */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-all text-center space-y-2 group shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Direct Phone</h3>
              <p className="text-xs text-slate-500">Instant counselor consultation</p>
              <a
                href="tel:+917622990059"
                className="text-xs font-bold text-brand-600 hover:underline block pt-1"
              >
                +91 76229 90059
              </a>
            </div>

            {/* Card 3: Address */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-all text-center space-y-2 group shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Vadodara Center</h3>
              <p className="text-xs text-slate-500">Sayajiganj / Alkapuri</p>
              <span className="text-xs font-bold text-slate-700 block pt-1">
                Vadodara, Gujarat 390005
              </span>
            </div>

            {/* Card 4: Hours */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-all text-center space-y-2 group shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
              <p className="text-xs text-slate-500">Mon - Sat: 9:00 AM - 7:30 PM</p>
              <span className="text-xs font-bold text-emerald-600 block pt-1">
                Sunday: By Prior Appointment
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. INTERACTIVE MAP & INQUIRY FORM
         ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Map & Location */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900">Visit Our Training Campus</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Located in the educational heart of Vadodara with easy transit connectivity from railway and bus stations.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-md h-[440px] bg-white">
                <iframe
                  title="Mamo TechnoLabs Vadodara Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202027552!2d73.10304618778643!3d22.28882046465494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc626786a9d03%3A0x9d7a229a17387e08!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Direct Form */}
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-black text-slate-900">Send an Inquiry</h3>
                <p className="text-xs text-slate-500">Our academic counselors respond within 2 working hours.</p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-brand-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xl font-black text-slate-900">Inquiry Dispatched!</h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Your details have been submitted to <strong className="text-slate-900">info@mamotechnolabs.com</strong>. Our admissions counselor will contact you via Phone/WhatsApp shortly.
                    </p>
                  </div>
                  {mailtoFallback && (
                    <div className="pt-2">
                      <a
                        href={mailtoFallback}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-brand-600" />
                        Open Copy in Your Email Client
                      </a>
                    </div>
                  )}
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-brand-600 hover:underline"
                    >
                      ← Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Interested Track</label>
                      <select
                        value={formData.technology}
                        onChange={(e) => setFormData({ ...formData, technology: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      >
                        <option value="ai">Artificial Intelligence & Deep Learning</option>
                        <option value="ai-tools">AI Master Tools & Prompt Engineering</option>
                        <option value="ml">Machine Learning</option>
                        <option value="ds">Data Science & Analytics</option>
                        <option value="web">Full-Stack Web Development</option>
                        <option value="internship">IT Internship Program</option>
                        <option value="other">Other / Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Questions</label>
                    <textarea
                      rows={3}
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      placeholder="Ask about batch timings, fees, eligibility, or syllabus details..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="contactRobot"
                      checked={formData.isRobotChecked}
                      onChange={(e) => setFormData({ ...formData, isRobotChecked: e.target.checked })}
                      className="rounded text-brand-600 focus:ring-brand-400 w-4 h-4"
                    />
                    <label htmlFor="contactRobot" className="text-xs text-slate-600">
                      I agree to receive course updates & counseling advice
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to info@mamotechnolabs.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
