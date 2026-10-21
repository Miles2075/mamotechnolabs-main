import React, { useState } from 'react';
import { RouteType, CatalogCourse } from '../types';
import { catalogCourses } from '../data/coursesData';
import {
  Search,
  Clock,
  RotateCcw,
  Phone,
  ChevronRight,
  Brain,
  Sparkles,
  Cpu,
  Bot,
  Code,
  ShieldCheck,
  Layers,
  BarChart2,
  PieChart,
  Palette,
  Smartphone,
  Globe,
  Terminal,
  Cloud
} from 'lucide-react';

interface ViewCoursesPageProps {
  navigateTo: (route: RouteType, detailId?: string) => void;
  openCounseling: (courseName?: string) => void;
}

export const ViewCoursesPage: React.FC<ViewCoursesPageProps> = ({ navigateTo, openCounseling }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);

  const categoryOptions = [
    'Trending',
    'Analytics',
    'AI & Machine Learning',
    'Programing Development',
    'Software Testing & QA',
    'Digital Marketing',
    'Mobile App Development',
    'Web Development',
    'Design'
  ];

  const durationOptions = [
    '1 Month',
    '1.5 Months',
    '2 Months',
    '2.5 Months',
    '3 Months',
    '4 Months'
  ];

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleDuration = (dur: string) => {
    if (selectedDurations.includes(dur)) {
      setSelectedDurations(selectedDurations.filter(d => d !== dur));
    } else {
      setSelectedDurations([...selectedDurations, dur]);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedDurations([]);
  };

  const filteredCourses = catalogCourses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => {
        if (cat === 'Trending') return course.badges.includes('Trending');
        return course.category.toLowerCase().includes(cat.toLowerCase());
      });

    const matchesDuration =
      selectedDurations.length === 0 || selectedDurations.includes(course.duration);

    return matchesSearch && matchesCategory && matchesDuration;
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain className="w-5 h-5 text-brand-600" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-brand-600" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-brand-600" />;
      case 'bot': return <Bot className="w-5 h-5 text-brand-600" />;
      case 'code': return <Code className="w-5 h-5 text-brand-600" />;
      case 'shield-check': return <ShieldCheck className="w-5 h-5 text-brand-600" />;
      case 'bar-chart': return <BarChart2 className="w-5 h-5 text-brand-600" />;
      case 'pie-chart': return <PieChart className="w-5 h-5 text-brand-600" />;
      case 'palette': return <Palette className="w-5 h-5 text-brand-600" />;
      case 'smartphone': return <Smartphone className="w-5 h-5 text-brand-600" />;
      case 'globe': return <Globe className="w-5 h-5 text-brand-600" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-brand-600" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-brand-600" />;
      default: return <Layers className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <div className="pt-20">
      
      {/* Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 block mb-2">
            Curriculum Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            All <span className="text-brand-500">Courses</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mt-2">
            Comprehensive industry-verified IT training programs crafted for immediate career entry.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Discover The Top Trending Courses
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              All these courses have been designed to help you transition from a beginner to an expert. Our aim is to provide you with top-quality information technology training and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Filters */}
            <aside className="lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              
              {/* Search Box */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Search Courses
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* Course Categories Checkboxes */}
              <div>
                <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categoryOptions.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-xs text-gray-600 hover:text-brand-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="w-4 h-4 rounded text-brand-600 focus:ring-brand-400 border-gray-300"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration Checkboxes */}
              <div>
                <h3 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                  Duration
                </h3>
                <div className="space-y-2">
                  {durationOptions.map((dur) => (
                    <label key={dur} className="flex items-center gap-2 text-xs text-gray-600 hover:text-brand-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={selectedDurations.includes(dur)}
                        onChange={() => toggleDuration(dur)}
                        className="w-4 h-4 rounded text-brand-600 focus:ring-brand-400 border-gray-300"
                      />
                      <span>{dur}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetFilters}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET ALL FILTERS</span>
              </button>

              {/* Book Free Demo Class Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-700 text-white space-y-2 shadow-md">
                <h4 className="font-bold text-sm">Book Free Demo Class</h4>
                <p className="text-xs text-brand-100 leading-relaxed">
                  Experience practical learning before you enroll in any track.
                </p>
                <a
                  href="tel:+917041493457"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl transition-colors mt-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 70414 93457</span>
                </a>
              </div>

            </aside>

            {/* Courses Content Area */}
            <div className="lg:col-span-8">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-500">
                  {filteredCourses.length} Courses Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => {
                      if (course.detailedSlug) {
                        navigateTo('course-detail', course.detailedSlug);
                      } else {
                        openCounseling(course.name);
                      }
                    }}
                    className="bg-white rounded-3xl border border-gray-100 hover:border-brand-300 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="p-6 bg-gradient-to-br from-brand-50/70 via-white to-gray-50 border-b border-gray-100 flex items-start justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-brand-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {renderIcon(course.icon)}
                        </div>

                        <div className="flex items-center gap-1.5">
                          {course.badges.map((b, i) => (
                            <span
                              key={i}
                              className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                                b === 'New'
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-2">
                        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider block">
                          {course.category}
                        </span>
                        <h3 className="font-bold text-base text-gray-900 group-hover:text-brand-600 transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                          {course.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 pt-0">
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-brand-600" />
                          <span>{course.duration}</span>
                        </span>
                        <span className="text-brand-600 font-bold group-hover:underline flex items-center gap-1">
                          {course.detailedSlug ? 'View Syllabus' : 'Inquire Now'}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
