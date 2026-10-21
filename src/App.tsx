import React, { useState, useEffect } from 'react';
import { RouteType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CounselingModal } from './components/CounselingModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { HirePage } from './pages/HirePage';
import { SkillPage } from './pages/SkillPage';
import { ViewCoursesPage } from './pages/ViewCoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';

// Student Corner Pages
import { InternshipPage } from './pages/StudentCornerPages/InternshipPage';
import { FinalYearPage } from './pages/StudentCornerPages/FinalYearPage';
import { IndustrialVisitPage } from './pages/StudentCornerPages/IndustrialVisitPage';
import { StudentReviewsPage } from './pages/StudentCornerPages/StudentReviewsPage';
import { BlogPage } from './pages/StudentCornerPages/BlogPage';
import { NiosPage } from './pages/StudentCornerPages/NiosPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<RouteType>('home');
  const [activeCourseId, setActiveCourseId] = useState<string>('ai');
  const [counselingOpen, setCounselingOpen] = useState(false);
  const [counselingCourse, setCounselingCourse] = useState<string>('');

  // Synchronize route with URL hash for deep linking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash || hash === 'home') {
        setCurrentRoute('home');
      } else if (hash.startsWith('course/')) {
        const id = hash.replace('course/', '');
        setActiveCourseId(id);
        setCurrentRoute('course-detail');
      } else if (['about', 'contact', 'placements', 'hire', 'skill', 'courses', 'internship', 'final-year', 'visit', 'reviews', 'blog', 'nios'].includes(hash)) {
        setCurrentRoute(hash as RouteType);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: RouteType, detailId?: string) => {
    setCurrentRoute(route);
    if (route === 'course-detail' && detailId) {
      setActiveCourseId(detailId);
      window.location.hash = `#/course/${detailId}`;
    } else {
      window.location.hash = `#/${route === 'home' ? '' : route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCounseling = (courseName?: string) => {
    setCounselingCourse(courseName || '');
    setCounselingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* Global Navigation */}
      <Navbar
        currentRoute={currentRoute}
        navigateTo={navigateTo}
        openCounseling={() => openCounseling()}
      />

      {/* Main Page Routing Switch */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage navigateTo={navigateTo} openCounseling={openCounseling} />
        )}
        {currentRoute === 'about' && (
          <AboutPage navigateTo={navigateTo} openCounseling={() => openCounseling()} />
        )}
        {currentRoute === 'contact' && (
          <ContactPage navigateTo={navigateTo} />
        )}
        {currentRoute === 'placements' && (
          <PlacementsPage navigateTo={navigateTo} openCounseling={() => openCounseling()} />
        )}
        {currentRoute === 'hire' && (
          <HirePage navigateTo={navigateTo} openCounseling={() => openCounseling()} />
        )}
        {currentRoute === 'skill' && (
          <SkillPage navigateTo={navigateTo} />
        )}
        {currentRoute === 'courses' && (
          <ViewCoursesPage navigateTo={navigateTo} openCounseling={openCounseling} />
        )}
        {currentRoute === 'course-detail' && (
          <CourseDetailPage
            courseId={activeCourseId}
            navigateTo={navigateTo}
            openCounseling={openCounseling}
          />
        )}

        {/* Student Corner Routes */}
        {currentRoute === 'internship' && (
          <InternshipPage navigateTo={navigateTo} openCounseling={openCounseling} />
        )}
        {currentRoute === 'final-year' && (
          <FinalYearPage navigateTo={navigateTo} openCounseling={openCounseling} />
        )}
        {currentRoute === 'visit' && (
          <IndustrialVisitPage navigateTo={navigateTo} openCounseling={openCounseling} />
        )}
        {currentRoute === 'reviews' && (
          <StudentReviewsPage navigateTo={navigateTo} openCounseling={() => openCounseling()} />
        )}
        {currentRoute === 'blog' && (
          <BlogPage navigateTo={navigateTo} />
        )}
        {currentRoute === 'nios' && (
          <NiosPage navigateTo={navigateTo} openCounseling={openCounseling} />
        )}
      </main>

      {/* Global Footer */}
      <Footer navigateTo={navigateTo} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Career Consultation Booking Modal */}
      <CounselingModal
        isOpen={counselingOpen}
        onClose={() => setCounselingOpen(false)}
        defaultCourse={counselingCourse}
      />
    </div>
  );
};

export default App;
