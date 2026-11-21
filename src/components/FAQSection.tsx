import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Laptop, GraduationCap } from 'lucide-react';
import { FAQ_ITEMS } from '../data/programsData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#EBE3DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBF5] border border-[#EBB328]/60 text-xs text-[#5C3317] font-semibold tracking-wide uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E06A26]" />
            <span>Admissions & Technical FAQs</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Key details regarding Google Classroom onboarding, tuition structure, and academic credits.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5 text-left">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-all duration-150 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-[#FFFBF5]/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#1A1A1A]">
                    {item.question}
                  </span>
                  <div className={`p-1 rounded-full bg-[#F1F5F9] text-[#5C3317] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#EBB328]/30' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#4B5563] leading-relaxed border-t border-gray-100 bg-[#FAFAFA]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Assistance Card */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-[#EBE3DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-sm text-[#1A1A1A]">
              Have a specific question about your ministry calling or country?
            </h4>
            <p className="text-xs text-[#64748B] mt-0.5">
              Our academic advisors assist applicants with transcript evaluations and Google account setup.
            </p>
          </div>
          <a
            href="mailto:admissions@goshenbiblecollege.edu"
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#5C3317] border border-[#5C3317] hover:bg-[#5C3317]/5 whitespace-nowrap"
          >
            Email Academic Registry
          </a>
        </div>

      </div>
    </section>
  );
};
