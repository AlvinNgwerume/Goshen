import React from 'react';
import { BookOpen, Shield, Flame, Compass } from 'lucide-react';

export const StatementOfFaith: React.FC = () => {
  const tenets = [
    {
      title: 'Verbal Inerrancy of Scripture',
      description: 'We hold that the sixty-six books of the Old and New Testaments are verbally inspired by God, completely inerrant in their original manuscripts, and the supreme final authority in all matters of faith, doctrine, and Christian practice.',
      icon: <BookOpen className="w-5 h-5 text-[#E06A26]" />
    },
    {
      title: 'Trinitarian Monotheism',
      description: 'We affirm one eternal God existing in three co-equal, co-eternal Persons: Father, Son, and Holy Spirit, who executes sovereign providence over creation, history, and the redemption of humanity.',
      icon: <Shield className="w-5 h-5 text-[#EBB328]" />
    },
    {
      title: 'Substitutionary Atonement',
      description: 'Jesus Christ, fully God and fully man, lived a sinless life, died as an efficacious penal substitution for sinners on the cross, rose bodily from the grave on the third day, and ascended to the right hand of the Father.',
      icon: <Flame className="w-5 h-5 text-[#5C3317]" />
    },
    {
      title: 'Apostolic Great Commission',
      description: 'The primary mission of the local church is to proclaim the uncompromised Gospel, make disciples across every unreached nation, and shepherd believers into spiritual maturity through sound biblical exposition.',
      icon: <Compass className="w-5 h-5 text-[#1E8E3E]" />
    }
  ];

  return (
    <section id="faith-statement" className="py-16 sm:py-24 bg-white border-b border-[#EBE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Scripture Banner */}
        <div className="bg-[#5C3317] text-white rounded-2xl p-8 sm:p-12 mb-16 relative overflow-hidden text-center gold-top-border">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EBB328] font-display">
              Foundational Scriptural Motto
            </span>
            <blockquote className="font-display font-bold text-2xl sm:text-3xl text-white mt-4 mb-4 leading-snug">
              “Be diligent to present yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth.”
            </blockquote>
            <cite className="text-sm font-semibold text-[#EBB328] not-italic tracking-wider uppercase">
              — 2 Timothy 2:15
            </cite>
          </div>
        </div>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBF5] border border-[#EBB328]/50 text-xs text-[#5C3317] font-semibold tracking-wide uppercase mb-3">
            <span>Doctrinal Conviction</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">
            Our Theological Foundation
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Goshen International Bible College stands firmly on historical evangelical orthodoxy, rejecting cultural compromise while deploying modern pedagogical tools to reach the nations.
          </p>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {tenets.map((t) => (
            <div
              key={t.title}
              className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#EBB328] transition-all duration-200 card-lift"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center mb-4 shadow-xs">
                {t.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
