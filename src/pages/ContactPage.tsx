import React, { useState } from 'react';
import { RouteType } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  navigateTo: (route: RouteType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isRobotChecked) {
      alert('Please confirm you are not a robot.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Contact <span className="text-brand-500">Us</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Have questions about syllabus, batches, fees, or placement partnerships? We're here to help.
          </p>
        </div>
      </section>

      {/* Get In Touch Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Get In Touch Today For <span className="text-brand-600">Expert Assistance!</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">Direct communication with admissions and placement departments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Email */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-200 transition-all text-center space-y-3 group shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Email Address</h3>
              <p className="text-xs text-gray-600">General queries & partnerships</p>
              <a
                href="mailto:info@mamotechnolabs.com"
                className="text-sm font-bold text-brand-600 hover:underline block pt-1"
              >
                info@mamotechnolabs.com
              </a>
            </div>

            {/* Card 2: Phone */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-200 transition-all text-center space-y-3 group shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Phone Number</h3>
              <p className="text-xs text-gray-600">Counseling & Admissions Hotline</p>
              <a
                href="tel:+919325910095"
                className="text-sm font-bold text-brand-600 hover:underline block pt-1"
              >
                +91 9325910095
              </a>
            </div>

            {/* Card 3: Office */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-200 transition-all text-center space-y-3 group shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Our Corporate Office</h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                4th Floor, Office No 27, near Shell Petrol Pump, RAAMA EMPERRO, Vadodara, Gujarat 390011
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Map & Inquiry Form */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Google Maps Embed */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-gray-200 shadow-sm min-h-[420px] bg-white flex flex-col">
              <div className="p-4 bg-gray-900 text-white flex items-center gap-2 text-xs font-bold">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>Mamo TechnoLabs Location</span>
              </div>
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.303409444175!2d73.19888377554179!3d22.266493744119447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5284d11c2af%3A0x2a911801d39003f2!2sMaMo%20TechnoLabs%20LLP%20-%20IT%20Staffing%20%26%20Software%20Development!5e0!3m2!1sen!2sin!4v1790589642576!5m2!1sen!2sin"
                className="w-full flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Right: Detailed Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                  Send Detailed Inquiry
                </h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">
                  Fill out the parameters below and our academic coordinator will arrange a free trial class.
                </p>

                {submitted ? (
                  <div className="p-8 text-center bg-brand-50 rounded-2xl border border-brand-200 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-brand-600 mx-auto" />
                    <h4 className="text-lg font-bold text-gray-900">Inquiry Sent Successfully!</h4>
                    <p className="text-xs text-gray-600 max-w-sm mx-auto">
                      Thank you, <span className="font-bold text-gray-800">{formData.name}</span>. An admissions counselor has received your note and will reach out to <span className="font-bold text-gray-800">{formData.phone}</span> today.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        required
                        placeholder="Contact Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                      />
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white text-gray-700"
                      >
                        <option value="training">Training Certification</option>
                        <option value="internship">IT Internship</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <select
                        value={formData.technology}
                        onChange={(e) => setFormData({ ...formData, technology: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white text-gray-700"
                      >
                        <option value="python">Python / Data Science / AI</option>
                        <option value="gen-ai">Generative AI & LLM Systems</option>
                        <option value="web">Full Stack Web Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="testing">QA & Test Automation</option>
                      </select>
                      <input
                        type="text"
                        required
                        placeholder="Location / City *"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                      />
                    </div>

                    <div>
                      <select
                        value={formData.source}
                        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none bg-white text-gray-700"
                      >
                        <option value="google">How You Heard: Google Search</option>
                        <option value="social">How You Heard: Social Media (Instagram / LinkedIn)</option>
                        <option value="friend">How You Heard: Friend / Alumni Referral</option>
                        <option value="college">How You Heard: College Seminar / Placement Cell</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        required
                        rows={4}
                        placeholder="Your Message / Query details *"
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                      />
                    </div>

                    {/* Mock reCAPTCHA */}
                    <div className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-gray-50 text-xs">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.isRobotChecked}
                          onChange={(e) => setFormData({ ...formData, isRobotChecked: e.target.checked })}
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
                      <span>SEND INQUIRY</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
