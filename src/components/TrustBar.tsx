import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-metrics" className="w-full bg-[#F9FAFB] py-10 sm:py-14 border-b border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-col gap-2 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-stat-display text-[#1A1A1A]">Interactive</span>
              <div className="w-8 h-8 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#EBB328]">
                <span className="material-symbols-outlined text-lg">neurology</span>
              </div>
            </div>
            <span className="font-headline-sm text-[#1A1A1A]">Study Flow</span>
            <p className="font-body-sm text-[#4B5563]">
              Interactive study workflow for linguistic concordance, original queries, and historical context.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-col gap-2 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-stat-display text-[#1A1A1A]">Direct</span>
              <div className="w-8 h-8 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#E06A26]">
                <span className="material-symbols-outlined text-lg">sync_alt</span>
              </div>
            </div>
            <span className="font-headline-sm text-[#1A1A1A]">LMS Integration</span>
            <p className="font-body-sm text-[#4B5563]">
              Platform, Drive, and synced to your student account.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-col gap-2 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="font-stat-display text-[#1A1A1A]">Practicum</span>
              <div className="w-8 h-8 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#5C3317]">
                <span className="material-symbols-outlined text-lg">volunteer_activism</span>
              </div>
            </div>
            <span className="font-headline-sm text-[#1A1A1A]">Live Classes</span>
            <p className="font-body-sm text-[#4B5563]">
              Live Classes with supervised ministry, outreach leadership, and pastoral guidance embedded into tracks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
