import React from 'react';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';

interface ClassroomPortalSectionProps {
  portalUrl?: string;
  onOpenInquiry?: () => void;
}

export const ClassroomPortalSection: React.FC<ClassroomPortalSectionProps> = ({
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL,
  onOpenInquiry
}) => {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 sm:py-20 relative overflow-hidden border-b border-[#E5E7EB]" id="classroom-login">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 md:p-14 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-10 text-left">
          
          {/* Left Text */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1E8E3E]" />
              <span className="font-label-code uppercase text-[#4B5563] font-bold tracking-wider">
                Authenticated Learning Management System
              </span>
            </div>
            
            <h2 className="font-headline-lg text-[#1A1A1A] leading-tight">
              Ready for Class? Access Your Learning Portal.
            </h2>
            
            <p className="font-body-md text-[#4B5563] leading-relaxed">
              Existing students can log directly into their Google Classroom portal to access weekly study guides, submit reflections, collaborate on research assignments, and interact in real time with faculty.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2 font-label-code uppercase tracking-wider text-xs">
              {onOpenInquiry ? (
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="text-[#E06A26] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <span className="material-symbols-outlined text-sm">key</span>
                  <span>Need a classroom invite code?</span>
                </button>
              ) : (
                <a className="text-[#E06A26] hover:underline flex items-center gap-1" href="#faq-section">
                  <span className="material-symbols-outlined text-sm">key</span>
                  <span>Need a classroom invite code?</span>
                </a>
              )}
              <span className="text-[#E5E7EB]">•</span>
              <a
                className="text-[#5C3317] hover:underline flex items-center gap-1"
                href="https://accounts.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">lock_reset</span>
                <span>Reset student credentials</span>
              </a>
            </div>
          </div>

          {/* Right Action Button & SSO pill */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E06A26] text-white font-label-md shadow-xs hover:bg-[#c9591a] hover:-translate-y-0.5 transition-all select-none cursor-pointer"
              href={portalUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {/* Google Classroom Official Logo SVG */}
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" fill="#1E8E3E" />
                <path d="M19 19H5C4.44772 19 4 18.5523 4 18V6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19Z" fill="#F9BC05" />
                <path d="M12 11.5C13.1046 11.5 14 10.6046 14 9.5C14 8.39543 13.1046 7.5 12 7.5C10.8954 7.5 10 8.39543 10 9.5C10 10.6046 10.8954 11.5 12 11.5Z" fill="#5F6368" />
                <path d="M12 12.5C9.9 12.5 7.5 13.6 7.5 15.5V16.5H16.5V15.5C16.5 13.6 14.1 12.5 12 12.5Z" fill="#5F6368" />
                <path d="M17 11C17.8284 11 18.5 10.3284 18.5 9.5C18.5 8.67157 17.8284 8 17 8C16.1716 8 15.5 8.67157 15.5 9.5C15.5 10.3284 16.1716 11 17 11Z" fill="#5F6368" />
                <path d="M17 12C15.8 12 15 12.5 14.5 13C15.5 13.7 16 14.7 16 16.5H19.5V15C19.5 13.4 18.2 12 17 12Z" fill="#5F6368" />
              </svg>
              <span className="font-bold text-sm sm:text-base">Log In with Google Classroom</span>
            </a>
            
            <div className="flex items-center gap-2 text-xs text-[#4B5563] font-label-code">
              <span className="material-symbols-outlined text-sm text-[#1E8E3E]">lock</span>
              <span>Single Sign-On (SSO) Enabled</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
