/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProgramMatrix } from './components/ProgramMatrix';
import { StatementOfFaith } from './components/StatementOfFaith';
import { Footer } from './components/Footer';
import { SyllabusModal } from './components/SyllabusModal';
import { AdmissionInquiryModal } from './components/AdmissionInquiryModal';
import { CertificatePage } from './components/CertificatePage';
import { DiplomaPage } from './components/DiplomaPage';
import { FAQPage } from './components/FAQPage';
import { LegalPolicyPage, PolicyType } from './components/LegalPolicyPage';
import { Program } from './types';
import { PROGRAMS_DATA, GOOGLE_CLASSROOM_DEFAULT_URL } from './data/programsData';

export type AppView = 
  | 'home' 
  | 'certificate' 
  | 'diploma' 
  | 'faq' 
  | 'learner-terms' 
  | 'terms' 
  | 'privacy' 
  | 'popia-paia';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL;

  // Listen to hash changes for direct linking and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#/', '#');
      if (hash === '#certificate') {
        setCurrentView('certificate');
      } else if (hash === '#diploma') {
        setCurrentView('diploma');
      } else if (hash === '#faq') {
        setCurrentView('faq');
      } else if (hash === '#learner-terms') {
        setCurrentView('learner-terms');
      } else if (hash === '#terms') {
        setCurrentView('terms');
      } else if (hash === '#privacy') {
        setCurrentView('privacy');
      } else if (hash === '#popia-paia') {
        setCurrentView('popia-paia');
      } else if (hash === '' || hash === '#' || hash === '#home' || hash === '#courses-matrix') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateHome = () => {
    setCurrentView('home');
    if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#home') {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToCertificate = () => {
    setCurrentView('certificate');
    window.location.hash = 'certificate';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToDiploma = () => {
    setCurrentView('diploma');
    window.location.hash = 'diploma';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFAQ = () => {
    setCurrentView('faq');
    window.location.hash = 'faq';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePolicy = (policy: PolicyType) => {
    setCurrentView(policy);
    window.location.hash = policy;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCourses = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('courses-matrix');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavigateResourceHub = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('courses-matrix');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavigateAbout = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('faith-statement');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleSelectSampleSyllabus = () => {
    setSelectedProgram(PROGRAMS_DATA[0]);
  };

  const isLegalView = ['learner-terms', 'terms', 'privacy', 'popia-paia'].includes(currentView);

  return (
    <div className="min-h-screen flex flex-col bg-white font-body-md text-body-md text-[#1A1A1A] antialiased selection:bg-[#E06A26] selection:text-white">
      {/* Fixed Sticky Header across all views */}
      <Navbar
        currentView={currentView === 'certificate' || currentView === 'diploma' ? currentView : 'home'}
        onNavigateHome={handleNavigateHome}
        onNavigateToCertificate={handleNavigateToCertificate}
        onNavigateToDiploma={handleNavigateToDiploma}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        portalUrl={portalUrl}
      />

      {/* Main Page Content (pt-20 for sticky header clearance) */}
      <main className="w-full pt-20 bg-white flex-1">
        {currentView === 'home' && (
          <div className="flex flex-col w-full">
            {/* Hero Section */}
            <Hero
              onOpenInquiry={() => setIsInquiryOpen(true)}
              onSelectSampleSyllabus={handleSelectSampleSyllabus}
              portalUrl={portalUrl}
            />

            {/* Impact Metrics / Trust Bar */}
            <TrustBar />

            {/* Academic Pathways & Courses Matrix */}
            <ProgramMatrix
              onSelectProgram={(program) => setSelectedProgram(program)}
              portalUrl={portalUrl}
              onNavigateToCertificate={handleNavigateToCertificate}
              onNavigateToDiploma={handleNavigateToDiploma}
            />

            {/* Theological Tenets & Doctrinal Convictions */}
            <StatementOfFaith />
          </div>
        )}

        {currentView === 'certificate' && (
          <CertificatePage
            onNavigateHome={handleNavigateHome}
            onNavigateToDiploma={handleNavigateToDiploma}
            onSelectProgram={(program) => setSelectedProgram(program)}
            portalUrl={portalUrl}
          />
        )}

        {currentView === 'diploma' && (
          <DiplomaPage
            onNavigateHome={handleNavigateHome}
            onNavigateToCertificate={handleNavigateToCertificate}
            onSelectProgram={(program) => setSelectedProgram(program)}
            portalUrl={portalUrl}
          />
        )}

        {currentView === 'faq' && (
          <FAQPage
            onNavigateHome={handleNavigateHome}
            onOpenInquiry={() => setIsInquiryOpen(true)}
          />
        )}

        {isLegalView && (
          <LegalPolicyPage
            policyType={currentView as PolicyType}
            onNavigateHome={handleNavigateHome}
            onSelectPolicy={(p) => handleNavigatePolicy(p)}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        portalUrl={portalUrl}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onNavigateFAQ={handleNavigateFAQ}
        onNavigatePolicy={handleNavigatePolicy}
        onNavigateHome={handleNavigateHome}
        onNavigateCourses={handleNavigateCourses}
        onNavigateResourceHub={handleNavigateResourceHub}
        onNavigateAbout={handleNavigateAbout}
      />

      {/* Interactive Modals */}
      <SyllabusModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        portalUrl={portalUrl}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <AdmissionInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        portalUrl={portalUrl}
      />
    </div>
  );
}
