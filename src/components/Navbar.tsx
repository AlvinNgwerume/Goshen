import React, { useState } from 'react';
import { GoshenLogo } from './GoshenLogo';
import { Menu, X } from 'lucide-react';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';

interface NavbarProps {
  onOpenInquiry?: () => void;
  portalUrl?: string;
  currentView?: 'home' | 'certificate' | 'diploma';
  onNavigateHome?: () => void;
  onNavigateToCertificate?: () => void;
  onNavigateToDiploma?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL,
  currentView = 'home',
  onNavigateHome,
  onNavigateToCertificate,
  onNavigateToDiploma
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCoursesClick = (e: React.MouseEvent) => {
    if (currentView !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('courses-matrix');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="h-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleHomeClick}
            className="flex items-center text-left cursor-pointer"
            aria-label="Goshen International Bible College - Return to Home"
          >
            <GoshenLogo />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          <button
            type="button"
            onClick={handleHomeClick}
            className={`font-label-md text-sm transition-colors cursor-pointer ${
              currentView === 'home'
                ? 'text-[#E06A26] font-bold'
                : 'text-[#4B5563] hover:text-[#1A1A1A]'
            }`}
          >
            Home
          </button>

          <a
            href="#courses-matrix"
            onClick={handleCoursesClick}
            className={`font-label-md text-sm transition-colors ${
              currentView !== 'home'
                ? 'text-[#E06A26] font-bold'
                : 'text-[#4B5563] hover:text-[#1A1A1A]'
            }`}
          >
            Courses
          </a>

          <a
            href="#courses-matrix"
            onClick={(e) => {
              if (currentView !== 'home' && onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('courses-matrix');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
            className="font-label-md text-sm text-[#4B5563] hover:text-[#1A1A1A] transition-colors"
          >
            Resource Hub
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              if (currentView !== 'home' && onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
            className="font-label-md text-sm text-[#4B5563] hover:text-[#1A1A1A] transition-colors"
          >
            Contact us
          </a>
        </nav>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-3">
          {/* Login Button with Human Figure Icon */}
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E06A26] text-white font-label-md text-sm hover:bg-[#c9591a] transition-all shadow-xs cursor-pointer select-none"
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Login"
          >
            <span className="material-symbols-outlined text-lg">person</span>
            <span>Login</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-[#F9FAFB] border border-[#E5E7EB]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            <button
              type="button"
              onClick={(e) => {
                handleHomeClick(e);
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-left rounded-md text-sm font-semibold text-[#1A1A1A] hover:bg-[#F9FAFB] hover:text-[#E06A26] transition-colors"
            >
              Home
            </button>
            <a
              href="#courses-matrix"
              onClick={(e) => {
                handleCoursesClick(e);
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-md text-sm font-semibold text-[#1A1A1A] hover:bg-[#F9FAFB] hover:text-[#E06A26] transition-colors"
            >
              Courses
            </a>
            <a
              href="#courses-matrix"
              onClick={() => {
                if (currentView !== 'home' && onNavigateHome) onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-md text-sm font-semibold text-[#1A1A1A] hover:bg-[#F9FAFB] hover:text-[#E06A26] transition-colors"
            >
              Resource Hub
            </a>
            <a
              href="#contact"
              onClick={() => {
                if (currentView !== 'home' && onNavigateHome) onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 rounded-md text-sm font-semibold text-[#1A1A1A] hover:bg-[#F9FAFB] hover:text-[#E06A26] transition-colors"
            >
              Contact us
            </a>
          </div>

          <div className="pt-2 border-t border-[#E5E7EB] flex flex-col gap-2">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-[#E06A26] hover:bg-[#c9591a] flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">person</span>
              <span>Login</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
