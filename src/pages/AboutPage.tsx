import React from 'react';
import { RouteType } from '../types';
import { universityPartners, learningFacilityImages } from '../data/universitiesData';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Bullseye,
  Wifi,
  Laptop,
  Users,
  Target,
  Quote
} from 'lucide-react';

interface AboutPageProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigateTo, openCounseling }) => {
  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Mamo TechnoLabs
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About <span className="text-brand-500">Us</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Bridging the gap between academia and industry with certified, high-impact practical IT training.
          </p>
        </div>
      </section>

      {/* Advance Your Career / Know Us Better */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full border border-brand-200">
                KNOW US BETTER
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Advance Your Career By <br />
                <span className="text-brand-600">Upskilling Yourself</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Take the leap towards an extraordinary tech career with guidance from mentors who have spent decades engineering enterprise software.
              </p>

              <div>
                <button
                  onClick={() => openCounseling()}
                  className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs shadow-lg shadow-brand-600/30 uppercase tracking-wider transition-all"
                >
                  SEND INQUIRY NOW
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100 space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>
                  We understand that recent graduates must first complete extensive workforce training to succeed in the highly competitive landscape. That's why our ultimate aim is to bridge the widening gap between industry and academia by assisting students in receiving guidance and mentorship from industry experts on the latest tools and technologies employed in current settings.
                </strong>
              </p>
              <p>
                <strong>
                  We strive to provide tailored and hands-on learning experiences to our students so they can overcome their technical and behavioural shortcomings and get the opportunity to build their careers in leading IT organisations worldwide.
                </strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-4 hover:border-brand-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-black text-lg">
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The IT training courses at Mamo TechnoLabs are designed to assist individuals in evolving into successful digital professionals. As one of Vadodara's top IT training institutes, Mamo TechnoLabs is pushing hard to accommodate a growing number of motivated students. We intend to achieve our goal by instructing our learners in the most up-to-date methodologies of Generative AI, Data Science, Full-Stack Development, and enterprise cloud solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm space-y-4 hover:border-brand-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To be the world’s most trusted technical finishing school, empowering individuals from all educational disciplines to master practical software engineering, cloud computing, and artificial intelligence, transforming raw passion into high-impact global careers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                What We Provide?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: 'Modern Training Rooms',
                    desc: 'Equipped with advanced technology and high-performance computing systems, our spacious training rooms offer the perfect setting for interactive learning.'
                  },
                  {
                    title: 'High-speed Internet',
                    desc: 'Gigabit fiber connectivity is essential to maintain a seamless coding and cloud computing experience without interruptions.'
                  },
                  {
                    title: 'Ergonomic seating arrangements',
                    desc: 'Our facilities are ergonomically designed to enhance comfort and productivity during intensive coding and project sprints.'
                  },
                  {
                    title: 'Flexible Spaces',
                    desc: 'Whether you need a traditional classroom setup or a collaborative hackathon environment, our flexible spaces meet every project need.'
                  },
                  {
                    title: 'Training Experts',
                    desc: 'We provide you with seasoned industry practitioners who mentor you directly on production workflows and architectural standards.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 text-center">
              <div className="relative rounded-3xl bg-gradient-to-tr from-brand-100 via-white to-brand-50 p-6 border border-brand-100 shadow-xl">
                <img
                  src="https://www.vtechlabs.com/wp-content/uploads/2026/05/What-We-Provide-3.png"
                  alt="Student with books"
                  className="w-full max-h-[380px] object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Passion for Skills */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold rounded-full">
                Sharpening
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                Your Skills Is Our Passion.
              </h2>
              
              <div className="p-6 rounded-3xl bg-white border border-brand-200 shadow-sm relative">
                <Quote className="w-8 h-8 text-brand-500 opacity-30 mb-2" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  At Mamo TechnoLabs, we don’t just teach technology, we build careers. From your first line of code to your first job offer, we walk with you every step of the way. With industry-expert mentors, live projects, and 100% placement assistance, your growth is our greatest achievement.
                </p>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('courses')}
                  className="px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Explore All Programs
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-sm h-48 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80"
                  alt="Mentorship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm h-48 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                  alt="Lab"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm h-48 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80"
                  alt="Discussion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm h-48 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                  alt="Teamwork"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* University Tie-ups */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Official Collaborations
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Tie-Ups With Top-Ranked Indian Universities
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              We partner with prestigious higher education institutions to provide accredited practical training.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {universityPartners.map((uni, i) => (
              <div key={i} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 shadow-xs text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-2 mx-auto">
                  <img src={uni.img} alt={uni.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="font-bold text-sm text-gray-900">{uni.name}</h4>
                <span className="inline-block px-3 py-1 bg-brand-100 text-brand-800 text-[10px] font-bold rounded-full">
                  {uni.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
