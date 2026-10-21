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
  Heart
} from 'lucide-react';

interface FooterProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-navy-950 text-gray-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          
          {/* Column 1: Logo & Company About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logomamo.png"
                alt="MaMo TechnoLabs Logo"
                className="h-10 object-contain brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xl font-black text-white tracking-tight">
                Mamo<span className="text-brand-500">TechnoLabs</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              MaMo TechnoLabs is a CMMI Level 3 certified global technology company delivering end-to-end software, web, and digital solutions to startups, SMEs, and enterprises worldwide, bringing innovation, quality, and reliability to every project. Your growth is our mission from Vadodara to the world.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/mannu.lala.7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/mamotechnolabs/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mamotechnolabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-500 pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
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
                  All Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('placements')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Placements & Hiring
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('blog')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Student Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-brand-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-500 pl-2.5">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Software Development</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Mobile Apps (iOS & Android)</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Frontend Development (React, Next)</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Web Portal Development</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">QA & Automated Testing</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">UI/UX Design Systems</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Graphic Design & Branding</li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-brand-500 pl-2.5">
              Get In Touch
            </h3>
            
            <div className="flex items-start gap-2.5 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-200 block">Global Headquarters:</strong>
                <p>4th Floor, Office No. 27, RAAMA EMPERRO, Vadodara, Gujarat 390011, India</p>
              </div>
            </div>

            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-500 shrink-0" />
                <strong className="text-gray-200">We Serve Clients In:</strong>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇦🇪 UAE', '🇸🇬 Singapore', '🇪🇺 Europe'].map((c, i) => (
                  <span key={i} className="px-2 py-0.5 bg-gray-900 border border-gray-800 rounded text-[11px] text-gray-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-gray-300">
              <a href="tel:+919325910095" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>+91 9325910095</span>
              </a>
              <a href="mailto:info@mamotechnolabs.com" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <span>info@mamotechnolabs.com</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 MaMo TechnoLabs. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-gray-400 transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
