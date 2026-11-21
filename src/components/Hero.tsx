import React from 'react';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';
import studentBibleMatteImg from '../assets/images/student_bible_matte_1793955473880.jpg';

interface HeroProps {
  onOpenInquiry?: () => void;
  onSelectSampleSyllabus?: () => void;
  portalUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onSelectSampleSyllabus,
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-[#E5E7EB]">
        {/* Soft atmospheric ambient light blurs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E06A26]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[#EBB328]/5 blur-3xl pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-20">
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563]">
                <span className="material-symbols-outlined text-base text-[#E06A26]">verified</span>
                <span className="font-label-code tracking-wider uppercase font-semibold text-xs">
                  Announcing 2027 Academic Year Enrollment
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-headline-xl text-[#1A1A1A] tracking-tight leading-tight">
                  Equipping Leaders Through{' '}
                  <span className="text-[#E06A26] italic font-headline-xl mr-1.5">Anointed Theological</span>{' '}
                  Education & Practical Ministry
                </h1>
                <p className="font-body-lg text-[#4B5563] max-w-2xl pt-1 leading-relaxed">
                  Transformative Bible study programs designed to equip Christians, aspiring Pastors, Strategic Ministers and emerging leaders to impact their world of influence through sound Christian values anchored on the word of God!
                </p>
              </div>

              {/* Action Button: Explore Courses */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-[#E06A26] text-white font-label-md hover:bg-[#c9591a] hover:-translate-y-0.5 transition-all shadow-xs cursor-pointer select-none"
                  href="#courses-matrix"
                >
                  <span>Explore Courses</span>
                  <span className="material-symbols-outlined text-base">arrow_downward</span>
                </a>
              </div>

              {/* Feature Highlights: Zero Tuition Barrier removed */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-[#4B5563] font-label-code uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#E06A26] text-lg">menu_book</span>
                  <span>Ministry Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#E06A26] text-lg">groups</span>
                  <span>Cohort-Based Mentorship</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with glassy look leading to text where the person remains clearly visible */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end lg:translate-x-4 text-left">
              {/* Soft atmospheric backlight halo */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#E06A26]/12 via-[#FFF8F0]/30 to-transparent rounded-3xl filter blur-3xl opacity-60 -z-10 pointer-events-none" />

              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB]/80 hover:border-[#E06A26]/30 hover:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.03] hover:-translate-y-1.5 cursor-pointer bg-white">
                
                {/* 35mm matte finish image: full person clearly visible */}
                <div className="relative overflow-hidden">
                  <img
                    src={studentBibleMatteImg}
                    alt="Student studying the Holy Bible shot with soft atmospheric light on 35mm lens"
                    className="w-full max-w-[490px] h-[370px] sm:h-[430px] object-cover contrast-[0.96] brightness-[1.01] saturate-[0.94] transition-all duration-700"
                  />

                  {/* Soft light matte wash */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF8F5]/10 via-transparent to-white/10 pointer-events-none mix-blend-soft-light" />
                </div>

                {/* Left-side Glassy / Frosted Glass Overlay: reduced by 60% for ultra-subtle, crystal-clear visibility of the student */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white/15 via-white/[0.08] to-transparent backdrop-blur-[2px] pointer-events-none z-10 transition-all duration-500 group-hover:backdrop-blur-[1px] group-hover:from-white/10">
                  {/* Glass reflection line / subtle specular highlight */}
                  <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/0 via-white/15 to-white/0" />
                  {/* Subtle top-down diagonal glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
                </div>

                {/* Subtle glass rim highlight on top */}
                <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-white/12 to-transparent pointer-events-none z-10" />

                {/* Minimalist floating overlay indicator positioned smoothly on the bottom right */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 left-8 sm:left-12 p-2.5 sm:p-3 rounded-xl bg-white/85 backdrop-blur-md border border-white/80 shadow-xs flex items-center justify-between text-left transition-all duration-300 group-hover:bg-white/95 z-20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E06A26]/10 text-[#E06A26] flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-lg">menu_book</span>
                    </div>
                    <div>
                      <span className="block font-headline-sm text-xs font-bold text-[#1A1A1A]">
                        Theological Exegesis & Study
                      </span>
                      <span className="block font-label-code text-[10px] text-[#4B5563] uppercase tracking-wider">
                        Scripture Rooted • Practical Ministry
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
