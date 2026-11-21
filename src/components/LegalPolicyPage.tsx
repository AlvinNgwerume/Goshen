import React from 'react';
import { ArrowLeft, Shield, FileText, Lock, BookOpen } from 'lucide-react';

export type PolicyType = 'learner-terms' | 'terms' | 'privacy' | 'popia-paia';

interface LegalPolicyPageProps {
  policyType: PolicyType;
  onNavigateHome: () => void;
  onSelectPolicy: (policy: PolicyType) => void;
}

export const LegalPolicyPage: React.FC<LegalPolicyPageProps> = ({
  policyType,
  onNavigateHome,
  onSelectPolicy
}) => {
  const policies: Record<PolicyType, {
    title: string;
    subtitle: string;
    badge: string;
    lastUpdated: string;
    content: { heading: string; body: string }[];
  }> = {
    'learner-terms': {
      title: 'Learner Terms and Conditions',
      subtitle: 'Academic integrity, Google Classroom code usage, course completion guidelines, and digital student code of conduct.',
      badge: 'Academic Policy',
      lastUpdated: 'February 2026',
      content: [
        {
          heading: '1. Institutional Enrollment & Google Classroom Code License',
          body: 'Upon confirmation of admissions into Goshen International Bible College, learners are granted a non-exclusive, revocable, personal license to access our accredited learning modules on Google Classroom. Course codes (e.g., GIBC-HBI-301) are strictly non-transferable and may not be publicly distributed or shared outside confirmed students.'
        },
        {
          heading: '2. Academic Integrity & Exegetical Scholarship',
          body: 'All research papers, exegesis commentaries, and homiletic manuscripts submitted via Google Classroom must represent the learner’s own scholarly work. Plagiarism or uncredited borrowing from academic commentaries will result in disciplinary review and potential withdrawal of transcript eligibility.'
        },
        {
          heading: '3. Digital Classroom Conduct & Peer Discourse',
          body: 'Learners must maintain Christian charity, mutual respect, and ministerial decorum across all Google Classroom discussion streams, peer review breakout groups, and Google Meet live theological forums.'
        },
        {
          heading: '4. Completion & Verified Transcript Certification',
          body: 'To receive an official Certificate or Diploma verified by Faith in God Ministries (FIG) International, learners must complete all weekly modules, pass the faculty capstone evaluation, and maintain minimum 75% engagement standards.'
        }
      ]
    },
    'terms': {
      title: 'General Terms and Conditions',
      subtitle: 'Governing the use of Goshen International Bible College online platforms, educational content, and digital services.',
      badge: 'Institutional Terms',
      lastUpdated: 'February 2026',
      content: [
        {
          heading: '1. Acceptance of Terms',
          body: 'By accessing or using the Goshen International Bible College web platform and related digital resources, you agree to be bound by these Terms and Conditions and all applicable South African and international laws.'
        },
        {
          heading: '2. Intellectual Property & Curriculum Copyright',
          body: 'All theological syllabi, lecture commentaries, reading guides, and study materials provided by Goshen International Bible College and Faith in God Ministries (FIG) International remain protected under international copyright law. Materials may be downloaded for individual ministry study only.'
        },
        {
          heading: '3. Zero-Overhead LMS & Service Availability',
          body: 'Educational content is delivered via Google Workspace / Google Classroom. While Goshen strives for continuous access, service availability is subject to Google’s cloud service uptime and network conditions.'
        },
        {
          heading: '4. Institutional Governance',
          body: 'Goshen International Bible College operates under the governance and theological oversight of Faith in God Ministries (FIG) International, headquartered in Cape Town, South Africa.'
        }
      ]
    },
    'privacy': {
      title: 'Privacy Policy',
      subtitle: 'How we collect, safeguard, and process student data in accordance with global privacy principles.',
      badge: 'Data Protection',
      lastUpdated: 'February 2026',
      content: [
        {
          heading: '1. Information We Collect',
          body: 'We collect minimal personal data essential for academic administration: full name, email address, physical address/country of residence, and target course selection. We do not store financial payment information or recurring subscription data.'
        },
        {
          heading: '2. Use of Information',
          body: 'Learner details are utilized exclusively for: issuing Google Classroom course codes, maintaining academic registrar records, communicating lecture schedules, and issuing graduation certificates.'
        },
        {
          heading: '3. Third-Party Data Sharing',
          body: 'We never sell, rent, or monetize student personal information. Information is shared only with Google Workspace infrastructure strictly for educational portal authentication.'
        },
        {
          heading: '4. Data Security & Storage',
          body: 'All application submissions are encrypted in transit using industry-standard TLS protocols. Student records are held securely under institutional administrative controls.'
        }
      ]
    },
    'popia-paia': {
      title: 'POPIA & PAIA Manual',
      subtitle: 'Statutory compliance manual in terms of Section 51 of the Promotion of Access to Information Act (PAIA) and the Protection of Personal Information Act (POPIA), South Africa.',
      badge: 'South African Statutory Compliance',
      lastUpdated: 'February 2026',
      content: [
        {
          heading: '1. Purpose of the POPIA & PAIA Manual',
          body: 'This manual outlines how Goshen International Bible College, powered by Faith in God Ministries (FIG) International (13 8th Ave, Maitland, Cape Town, 7405), complies with the Protection of Personal Information Act 4 of 2013 (POPIA) and the Promotion of Access to Information Act 2 of 2000 (PAIA).'
        },
        {
          heading: '2. Contact Details of the Information Officer',
          body: 'Information Officer: Academic Registry & Legal Compliance Directorate | Email: enquiries@goshen.com | Phone: +27 20 200 1000 | Physical Address: 13 8th Ave, Maitland, Cape Town, 7405, South Africa.'
        },
        {
          heading: '3. Lawful Processing of Personal Information',
          body: 'Personal data is processed in accordance with POPIA eight lawful processing conditions: Accountability, Processing Limitation, Purpose Specification, Further Processing Limitation, Information Quality, Openness, Security Safeguards, and Data Subject Participation.'
        },
        {
          heading: '4. Procedure for Requesting Access to Records',
          body: 'Data subjects may request access to their personal records or lodge an inquiry regarding record retention by submitting Form C (available from the Information Regulator) to enquiries@goshen.com.'
        }
      ]
    }
  };

  const current = policies[policyType] || policies['terms'];

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen py-10 sm:py-16 text-left">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        
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
            Institutional Legal Documentation
          </span>
        </div>

        {/* Policy Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'learner-terms', label: 'Learner Terms & Conditions', icon: BookOpen },
            { id: 'terms', label: 'Terms & Conditions', icon: FileText },
            { id: 'privacy', label: 'Privacy Policy', icon: Lock },
            { id: 'popia-paia', label: 'POPIA & PAIA Manual', icon: Shield }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isActive = policyType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectPolicy(tab.id as PolicyType)}
                className={`px-4 py-2.5 rounded-xl text-xs font-label-md flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#E06A26] text-white shadow-xs font-bold'
                    : 'bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#1A1A1A] hover:border-[#CBD5E1]'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Document Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs space-y-8">
          <div className="border-b border-[#E5E7EB] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-[#E06A26] font-label-code uppercase font-bold text-xs mb-3">
              <span>{current.badge}</span>
            </div>
            <h1 className="font-headline-xl text-[#1A1A1A] leading-tight">
              {current.title}
            </h1>
            <p className="font-body-lg text-[#4B5563] mt-2 leading-relaxed">
              {current.subtitle}
            </p>
            <div className="text-xs text-[#94A3B8] font-label-code mt-4">
              Last Revised: {current.lastUpdated} • Powered by Faith in God Ministries (FIG) International
            </div>
          </div>

          <div className="space-y-8 divide-y divide-[#F1F5F9]">
            {current.content.map((section, idx) => (
              <div key={section.heading} className={idx > 0 ? 'pt-6' : ''}>
                <h2 className="font-headline-sm text-base sm:text-lg font-bold text-[#1A1A1A] mb-2">
                  {section.heading}
                </h2>
                <p className="font-body-md text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4B5563]">
            <div>
              <strong>Inquiries:</strong> enquiries@goshen.com | <strong>Phone:</strong> +27 20 200 1000
            </div>
            <button
              type="button"
              onClick={onNavigateHome}
              className="text-[#E06A26] font-bold hover:underline cursor-pointer"
            >
              ← Return to Main Page
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
