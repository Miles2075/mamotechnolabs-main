import React from 'react';
import { RouteType } from '../types';
import {
  MapPin,
  Globe,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Heart,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface FooterProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Logo & Company About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/mamo-academy-logo-white.png"
                alt="MaMo Academy Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/mamo-academy-logo.png';
                }}
              />
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Mamo TechnoLabs LLP is an ISO 9001:2015 and CMMI Level 3 certified global IT finishing school and software engineering company empowering individuals and enterprises with modern tech skills.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/mannu.lala.7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-sm border border-slate-800"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/mamotechnolabs/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-sm border border-slate-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mamotechnolabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-brand-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors shadow-sm border border-slate-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-xs tracking-wider uppercase border-l-2 border-brand-500 pl-2.5">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-brand-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('courses')}
                  className="hover:text-brand-400 transition-colors"
                >
                  All 16 IT Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('placements')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Placement Cell
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('hire')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Hire From Us (Zero-Cost)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('skill')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Skill Certification Tests
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Contact Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagship Courses */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-xs tracking-wider uppercase border-l-2 border-brand-500 pl-2.5">
              Flagship Programs
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('course-detail', 'ai-tools')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  AI Master Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('course-detail', 'ml')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Machine Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('course-detail', 'ai')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('course-detail', 'pe')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Prompt Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('course-detail', 'ds')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Data Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('course-detail', 'gen-ai')}
                  className="hover:text-brand-400 transition-colors text-left"
                >
                  Generative AI
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-xs tracking-wider uppercase border-l-2 border-brand-500 pl-2.5">
              Campus Headquarters
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Mamo TechnoLabs Campus, Sayajiganj / Alkapuri, Vadodara, Gujarat 390005, India
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="tel:+917622990059" className="hover:text-white font-semibold">
                  +91 76229 90059
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="mailto:info@mamotechnolabs.com" className="hover:text-white">
                  info@mamotechnolabs.com
                </a>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold text-emerald-400 block">Admissions Open 2026</span>
                  <p className="text-[10px] text-slate-400">Weekdays & Weekend batches available</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Mamo TechnoLabs LLP. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>CMMI Level 3</span>
            <span>•</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-slate-300">
              Privacy & Terms
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
