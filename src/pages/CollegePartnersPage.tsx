import React from 'react';
import { RouteType } from '../types';
import { universityPartners } from '../data/universitiesData';
import { GraduationCap, ArrowRight, Handshake, MapPin } from 'lucide-react';

interface CollegePartnersPageProps {
  navigateTo: (route: RouteType) => void;
}

export const CollegePartnersPage: React.FC<CollegePartnersPageProps> = ({ navigateTo }) => {
  const collegeCard = (college: (typeof universityPartners)[number], isPartner: boolean) => (
    <article key={college.name} className="group flex min-h-64 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
      <div className="relative mb-5 flex h-28 w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-4">
        <div className="flex h-full w-full items-center justify-center gap-3" data-logo-fallback>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 text-xl font-black tracking-tight text-emerald-800 ring-1 ring-emerald-200">
            {college.name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase()}
          </span>
          <span className="max-w-[65%] text-left text-sm font-bold leading-snug text-slate-600">{college.name}</span>
        </div>
        {college.img && (
          <img
            src={college.img}
            alt={college.name + ' logo'}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 m-auto h-full w-full p-4 object-contain"
            onLoad={(event) => {
              const fallback = event.currentTarget.parentElement?.querySelector('[data-logo-fallback]') as HTMLElement | null;
              if (fallback) fallback.style.display = 'none';
            }}
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>
      <span className={`mb-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide ${isPartner ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
        {isPartner ? <><GraduationCap className="h-3 w-3" /> Academic Partner</> : <><MapPin className="h-3 w-3" /> {college.badge}</>}
      </span>
      <h3 className="text-base font-extrabold text-slate-900">{college.name}</h3>
    </article>
  );

  return (
    <div className="pt-24 sm:pt-28">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 lg:py-20 text-white">
        <div className="absolute -top-16 right-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-200">
            <Handshake className="h-4 w-4" />
            Academic Collaborations
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Colleges We Are <span className="text-emerald-400">Partnered With</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Explore our academic partner institutions and colleges across Vadodara and nearby areas.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">Our Academic Network</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Our College & University Partners</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">
              All institutions in our college directory, including academic partners and colleges across Vadodara and nearby areas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {universityPartners.map((college) => collegeCard(college, college.badge === 'Academic Partner'))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-900 px-6 py-8 text-center text-white sm:px-10">
            <h2 className="text-xl font-black sm:text-2xl">Interested in an academic collaboration?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300">
              Connect with MaMo Technolabs to explore workshops, internships, project mentoring and industry-oriented learning initiatives for your students.
            </p>
            <button onClick={() => navigateTo('contact')} className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-emerald-400">
              Discuss a Partnership <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegePartnersPage;
