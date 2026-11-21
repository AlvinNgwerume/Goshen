import React from 'react';
import { GoshenLogo, GOSHEN_LOGO_SRC } from './GoshenLogo';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';
import { PolicyType } from './LegalPolicyPage';
import figLogoImg from '../assets/images/FIG_logo_d25e7cf2.png';

interface FooterProps {
  portalUrl?: string;
  onOpenInquiry?: () => void;
  onNavigateFAQ?: () => void;
  onNavigatePolicy?: (policy: PolicyType) => void;
  onNavigateHome?: () => void;
  onNavigateCourses?: () => void;
  onNavigateResourceHub?: () => void;
  onNavigateAbout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL,
  onOpenInquiry,
  onNavigateFAQ,
  onNavigatePolicy,
  onNavigateHome,
  onNavigateCourses,
  onNavigateResourceHub,
  onNavigateAbout
}) => {
  return (
    <footer id="contact" className="w-full bg-[#F9FAFB] border-t border-[#E5E7EB] text-left relative overflow-hidden">
      
      {/* Faint Enlarged x4 Watermark Logo in Background */}
      <div 
        className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.05] translate-x-12 translate-y-12 sm:translate-x-16 sm:translate-y-6 z-0"
        aria-hidden="true"
      >
        <img
          src={GOSHEN_LOGO_SRC}
          alt=""
          className="w-[500px] sm:w-[680px] h-auto object-contain"
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Main Grid: Aligned Navigation, Information & Policies, and Contact Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 items-start">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center">
              <GoshenLogo />
            </div>
            <p className="font-body-sm text-[#4B5563] max-w-sm leading-relaxed text-xs sm:text-sm">
              Empowering global Christian leadership through rigorous theological training, modular online study tracks, and integrated Google Classroom learning environments.
            </p>
          </div>

          {/* Navigation Column - Perfectly aligned top baseline */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-label-md text-xs sm:text-sm text-[#1A1A1A] uppercase tracking-wider font-bold h-6 flex items-center">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 pt-1">
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateAbout) onNavigateAbout();
                    else if (onNavigateHome) {
                      onNavigateHome();
                      setTimeout(() => {
                        const el = document.getElementById('faith-statement');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }
                  }}
                  className="hover:text-[#E06A26] cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateCourses) onNavigateCourses();
                    else if (onNavigateHome) {
                      onNavigateHome();
                      setTimeout(() => {
                        const el = document.getElementById('courses-matrix');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }
                  }}
                  className="hover:text-[#E06A26] cursor-pointer text-left"
                >
                  Courses
                </button>
              </li>
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateResourceHub) onNavigateResourceHub();
                    else if (onNavigateHome) {
                      onNavigateHome();
                      setTimeout(() => {
                        const el = document.getElementById('courses-matrix');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }
                  }}
                  className="hover:text-[#E06A26] cursor-pointer text-left"
                >
                  Resource Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Information & Policies Column - Perfectly aligned top baseline */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-label-md text-xs sm:text-sm text-[#1A1A1A] uppercase tracking-wider font-bold h-6 flex items-center">
              Information & Policies
            </h4>
            <ul className="flex flex-col gap-2.5 pt-1">
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={onNavigateFAQ}
                  className="hover:text-[#E06A26] cursor-pointer text-left font-medium"
                >
                  FAQs (Frequently Asked Questions)
                </button>
              </li>
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => onNavigatePolicy && onNavigatePolicy('learner-terms')}
                  className="hover:text-[#E06A26] cursor-pointer text-left"
                >
                  Learner Terms and Conditions
                </button>
              </li>
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => onNavigatePolicy && onNavigatePolicy('terms')}
                  className="hover:text-[#E06A26] cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => onNavigatePolicy && onNavigatePolicy('privacy')}
                  className="hover:text-[#E06A26] cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li className="font-body-sm text-[#4B5563] hover:text-[#E06A26] transition-colors cursor-pointer text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => onNavigatePolicy && onNavigatePolicy('popia-paia')}
                  className="hover:text-[#E06A26] cursor-pointer text-left"
                >
                  POPIA & PAIA Manual
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us Column - Perfectly aligned top baseline */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-label-md text-xs sm:text-sm text-[#1A1A1A] uppercase tracking-wider font-bold h-6 flex items-center gap-1.5">
              <span>Contact</span>
              <span>Us</span>
            </h4>
            <div className="flex flex-col gap-2.5 pt-1 font-body-sm text-[#4B5563] text-xs sm:text-sm">
              <a 
                href="tel:+27202001000" 
                className="flex items-center gap-2 hover:text-[#E06A26] transition-colors group"
              >
                <span className="text-base select-none">📞</span>
                <span className="font-medium group-hover:underline">+27 20 200 1000</span>
              </a>

              <a 
                href="mailto:enquiries@goshen.com" 
                className="flex items-center gap-2 hover:text-[#E06A26] transition-colors group"
              >
                <span className="text-base select-none">✉️</span>
                <span className="font-medium group-hover:underline">enquiries@goshen.com</span>
              </a>

              <div className="flex items-start gap-2 pt-0.5 leading-snug">
                <span className="text-base select-none">📍</span>
                <span className="text-xs sm:text-sm font-medium text-[#4B5563]">
                  13 8th Ave, Maitland, Cape Town, 7405
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright on left with FIG Logo and name below it, powered by AMX on right */}
        <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Left Side: Copyright + FIG Logo next to Faith in God Ministries (FIG) International */}
          <div className="flex flex-col gap-2 text-left">
            <p className="font-label-code text-xs text-[#4B5563]">
              © 2026 Goshen International Bible College. All rights reserved.
            </p>
            <div className="flex items-center gap-2.5 pt-0.5">
              <img
                src={figLogoImg}
                alt="Faith in God Ministries (FIG) International"
                className="h-7 sm:h-8 w-auto object-contain rounded border border-[#E5E7EB] bg-white p-0.5 shadow-2xs"
              />
              <span className="font-label-code text-xs text-[#4B5563]">
                Faith in God Ministries (FIG) International
              </span>
            </div>
          </div>

          {/* Right Side: powered by AMX */}
          <div className="font-label-code text-xs text-[#4B5563] whitespace-nowrap pt-2 sm:pt-0">
            powered by AMX
          </div>

        </div>

      </div>
    </footer>
  );
};
