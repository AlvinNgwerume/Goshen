import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/programsData';
import { Search, ChevronDown, HelpCircle, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

interface FAQPageProps {
  onNavigateHome: () => void;
  onOpenInquiry?: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({
  onNavigateHome,
  onOpenInquiry
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<number[]>([0, 1]);

  const allFaqs = [
    ...FAQ_ITEMS,
    {
      category: 'admissions',
      question: 'What are the admission requirements for Certificate and Diploma programs?',
      answer: 'Our certificate and diploma programs are open to pastors, strategic ministers, church workers, and emerging leaders. Applicants should have a high school diploma or equivalent ministry life experience, coupled with an active endorsement or involvement in Christian ministry.'
    },
    {
      category: 'academics',
      question: 'How do students receive accredited transcripts and certificates upon completion?',
      answer: 'Upon finishing all required modular assignments and the faculty capstone review, verified digital transcripts and official institutional certificates are issued under Faith in God Ministries (FIG) International.'
    },
    {
      category: 'classroom',
      question: 'Can I access Google Classroom courses on my mobile phone or tablet?',
      answer: 'Yes. Google Classroom has dedicated, free native apps on both iOS (App Store) and Android (Google Play Store). All lecture documents, assignments, notifications, and submission portals sync in real time.'
    },
    {
      category: 'tuition',
      question: 'Are there hidden graduation fees, portal fees, or technology surcharges?',
      answer: 'No. Goshen International Bible College operates with radical financial integrity. There are zero recurring LMS hosting bills, server maintenance charges, or hidden platform fees.'
    }
  ];

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen py-10 sm:py-16 text-left">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-[#E06A26] flex items-center gap-1.5 text-sm text-[#4B5563] font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs text-[#4B5563] font-label-code uppercase tracking-wider font-semibold">
            Institutional Support & Knowledgebase
          </span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E06A26]/10 via-[#EBB328]/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-[#E06A26] font-label-code uppercase font-bold text-xs w-fit">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Admissions & Technical FAQs</span>
            </div>

            <h1 className="font-headline-xl text-[#1A1A1A] leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="font-body-lg text-[#4B5563] leading-relaxed">
              Find detailed guidance regarding Google Classroom onboarding, course enrollment codes, tuition transparency, academic credit evaluations, and ministry practicums.
            </p>

            {/* Search Box */}
            <div className="relative mt-2 max-w-lg">
              <Search className="w-4 h-4 text-[#4B5563] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions (e.g. classroom code, tuition, credits)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] text-sm text-[#1A1A1A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#E06A26] focus:ring-2 focus:ring-[#E06A26]/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'classroom', label: 'Google Classroom' },
            { id: 'admissions', label: 'Admissions & Enrollment' },
            { id: 'academics', label: 'Curriculum & Credits' },
            { id: 'tuition', label: 'Tuition Transparency' }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-label-md transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#E06A26] text-white shadow-xs font-bold'
                  : 'bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion Grid */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#E5E7EB] text-[#4B5563]">
              <p>No questions matched your query "{searchQuery}". Try searching for another term.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs font-bold text-[#E06A26] hover:underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openItems.includes(idx);
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-[#E5E7EB] transition-all duration-200 overflow-hidden shadow-xs hover:border-[#E06A26]/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-headline-sm text-sm sm:text-base font-bold text-[#1A1A1A]">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#FFF7ED] text-[#E06A26]' : 'bg-[#F9FAFB] text-[#4B5563]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#4B5563] leading-relaxed border-t border-[#F1F5F9] pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support & Contact Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="font-headline-sm text-lg text-[#1A1A1A] font-bold">
              Still have a specific question about your ministry calling?
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Our academic registrars and admissions advisors are available to review previous coursework and guide your application.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#5C3317] font-semibold">
              <a href="tel:+27202001000" className="flex items-center gap-1.5 hover:text-[#E06A26]">
                <Phone className="w-3.5 h-3.5 text-[#E06A26]" />
                <span>+27 20 200 1000</span>
              </a>
              <a href="mailto:enquiries@goshen.com" className="flex items-center gap-1.5 hover:text-[#E06A26]">
                <Mail className="w-3.5 h-3.5 text-[#E06A26]" />
                <span>enquiries@goshen.com</span>
              </a>
              <span className="flex items-center gap-1.5 text-[#4B5563]">
                <MapPin className="w-3.5 h-3.5 text-[#E06A26]" />
                <span>Cape Town, South Africa</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            {onOpenInquiry && (
              <button
                type="button"
                onClick={onOpenInquiry}
                className="btn-harvest px-5 py-3 rounded-xl text-xs font-bold w-full md:w-auto"
              >
                Apply for Cohort
              </button>
            )}
            <button
              type="button"
              onClick={onNavigateHome}
              className="px-5 py-3 rounded-xl border border-[#CBD5E1] text-[#4B5563] hover:text-[#1A1A1A] text-xs font-bold w-full md:w-auto hover:bg-[#F9FAFB] cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
