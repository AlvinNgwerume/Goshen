import React from 'react';
import { Program } from '../types';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';

interface CertificatePageProps {
  onNavigateHome: () => void;
  onNavigateToDiploma: () => void;
  onSelectProgram: (program: Program) => void;
  portalUrl?: string;
}

export const CertificatePage: React.FC<CertificatePageProps> = ({
  onNavigateHome,
  onNavigateToDiploma,
  onSelectProgram,
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL
}) => {
  const certificateCourses: {
    id: string;
    code: string;
    title: string;
    duration: string;
    credits: string;
    delivery: string;
    deliveryIcon: string;
    instructor: string;
    instructorHonor: string;
    description: string;
    pdfSize: string;
    features: string[];
    toProgramModal: Program;
  }[] = [
    {
      id: 'cert-hermeneutics',
      code: 'HBI-301',
      title: 'Hermeneutics & Biblical Exegesis in Practice',
      duration: '10 Weeks',
      credits: '3 Credit Equiv.',
      delivery: 'Intensive Online • Weekly Feedback',
      deliveryIcon: 'translate',
      instructor: 'Prof. Grace K. Mwangi',
      instructorHonor: 'Ph.D. in Biblical Languages (Oxford)',
      description: 'Master exegetical tools, original text linguistic insights, inductive study methods, and sermon/teaching formulation designed to bring Scripture to life with unwavering doctrinal precision.',
      pdfSize: '3.1 MB',
      features: [
        'Greek/Hebrew Concordance Suite Included',
        'Peer Homiletics Workshop & Live Feedback',
        'Grammatical-Historical Pericope Analysis',
        'Direct Faculty Mentorship Breakouts'
      ],
      toProgramModal: {
        id: 'hbi-exegesis',
        title: 'Hermeneutics & Biblical Exegesis in Practice',
        code: 'HBI-301',
        credentialType: 'Certificate',
        credits: 3,
        duration: '10 Weeks',
        tagline: 'Precision tools to dissect, interpret, and teach God’s Word with fidelity.',
        description: 'Advanced grammatical-historical exegesis, genre analysis, and text-driven homiletics.',
        classroomCode: 'GIBC-EXEG-301',
        prerequisites: 'Basic familiarity with the Old and New Testaments.',
        facultyLead: {
          name: 'Prof. Grace K. Mwangi',
          title: 'Director of Exegesis & Greek',
          academicHonor: 'Ph.D. in Biblical Languages (Oxford)'
        },
        keyCompetencies: [
          'Grammatical-historical inductive hermeneutics',
          'Koine Greek syntax and word studies',
          'Old Testament covenant narrative interpretation',
          'Text-driven sermon and lesson preparation'
        ],
        modules: [
          {
            week: 1,
            title: 'Syntactical and Structural Analysis of Biblical Pericopes',
            description: 'Sentence diagramming, coordinating conjunctions, and discourse analysis in the epistles.',
            learningOutcomes: ['Extract the author’s singular overarching intent', 'Eliminate lexical and contextual fallacies'],
            readingAssigned: 'Exegetical Fallacies & Biblical Hermeneutics'
          },
          {
            week: 2,
            title: 'From Text to Sermon: The Expository Bridge',
            description: 'Transforming exegetical propositions into clear homiletical outlines that convict and edify.',
            learningOutcomes: ['Draft a 3-point text-driven sermon manuscript', 'Deliver oral homiletic presentation'],
            readingAssigned: 'Biblical Preaching: The Development and Delivery of Expository Messages'
          }
        ],
        careerPaths: ['Senior Pastor', 'Bible Teacher', 'Seminary Instructor']
      }
    },
    {
      id: 'cert-governance',
      code: 'GOV-402',
      title: 'Church Governance, Eldership & Non-Profit Law',
      duration: '12 Weeks',
      credits: '3 Credit Equiv.',
      delivery: 'Executive Online • Case Study Method',
      deliveryIcon: 'shield',
      instructor: 'Hon. David M. Sterling',
      instructorHonor: 'J.D., M.A. in Theological Studies',
      description: 'Biblical qualifications for elders and deacons, fiduciary transparency, non-profit charter compliance, moral conflict resolution, and financial integrity in kingdom institutions.',
      pdfSize: '2.1 MB',
      features: [
        'Board Governance Charter & Bylaw Templates',
        'Fiduciary Compliance & Audit Certification',
        'Plural Eldership Accountability Frameworks',
        'Crisis Mediation & Restorative Discipline'
      ],
      toProgramModal: {
        id: 'gov-eldership',
        title: 'Church Governance, Eldership & Non-Profit Law',
        code: 'GOV-402',
        credentialType: 'Executive',
        credits: 3,
        duration: '12 Weeks',
        tagline: 'Fiduciary integrity and pastoral oversight for kingdom institutions.',
        description: 'Equipping pastors and trustees to govern local churches with transparency, legal compliance, and biblical holiness.',
        classroomCode: 'GIBC-GOV-402',
        prerequisites: 'Active involvement in church or non-profit administration.',
        facultyLead: {
          name: 'Hon. David M. Sterling',
          title: 'Professor of Kingdom Governance',
          academicHonor: 'J.D., M.A. in Theological Studies'
        },
        keyCompetencies: [
          'Biblical models of plural eldership',
          'Non-profit bylaws and fiduciary responsibility',
          'Crisis mediation and redemptive discipline',
          'Staff care and leadership longevity'
        ],
        modules: [
          {
            week: 1,
            title: 'Biblical Eldership vs Secular Autocracy',
            description: 'Analyzing 1 Timothy 3, Titus 1, and 1 Peter 5 for character-driven leadership.',
            learningOutcomes: ['Establish elder vetting criteria', 'Structure accountability bylaws'],
            readingAssigned: 'Biblical Eldership & Church Charters'
          }
        ],
        careerPaths: ['Executive Pastor', 'Board Trustee', 'Denominational Officer']
      }
    },
    {
      id: 'cert-exegesis-full',
      code: 'CERT-104',
      title: 'Certificate in Biblical Exegesis & Scripture Exposition',
      duration: '6 Months',
      credits: '18 Academic Credits',
      delivery: 'Modular Self-Paced • Dedicated Faculty Mentor',
      deliveryIcon: 'menu_book',
      instructor: 'Dr. Rebecca Stern',
      instructorHonor: 'Th.D., M.A. in Semitic Languages',
      description: 'A focused, high-impact certificate for small group facilitators, Sunday school leaders, and emerging preachers seeking to protect sound doctrine in an era of theological ambiguity.',
      pdfSize: '2.4 MB',
      features: [
        'Contextual & Historical Near-East Analysis',
        'Concordance & Interlinear Lexicon Mastery',
        'Cross-Genre Scriptural Interpretation',
        'Practical Small-Group Expository Guides'
      ],
      toProgramModal: {
        id: 'cert-exegesis',
        title: 'Certificate in Biblical Exegesis & Hermeneutics',
        code: 'CERT-104',
        credentialType: 'Certificate',
        credits: 18,
        duration: '6 Months',
        tagline: 'Precision tools to accurately dissect, interpret, and teach God’s Word without error.',
        description: 'A focused, high-impact certificate for Sunday School superintendents, small group facilitators, and lay leaders seeking to protect sound doctrine.',
        classroomCode: 'GIBC-EXEG-104',
        prerequisites: 'Open enrollment. Dedicated commitment of 4-6 hours per week.',
        facultyLead: {
          name: 'Dr. Rebecca Stern',
          title: 'Senior Lecturer in Hebrew Scriptures & Exegesis',
          academicHonor: 'Th.D., M.A. in Semitic Languages'
        },
        keyCompetencies: [
          'Contextual Textual Analysis',
          'Concordance & Lexicon Mastery',
          'Cross-Genre Scriptural Translation',
          'Expository Teaching Design'
        ],
        modules: [
          {
            week: 1,
            title: 'The Art of Observation: Seeing the Text',
            description: 'Developing disciplined reading habits, sentence diagrams, repetitions, and structural connectors.',
            learningOutcomes: ['Isolate grammatical pivots in biblical text', 'Eliminate eisegetical presuppositions'],
            readingAssigned: 'Living by the Book: The Art and Science of Reading the Bible'
          }
        ],
        careerPaths: ['Adult Sunday School Director', 'Bible Study Fellowship Leader', 'Lay Preacher']
      }
    },
    {
      id: 'cert-kingdom-exec',
      code: 'EXEC-505',
      title: 'Executive Certificate in Kingdom Leadership & Non-Profit Governance',
      duration: '4 Months',
      credits: '12 Executive Credits',
      delivery: 'Executive Intensive Cohort • Case Method',
      deliveryIcon: 'account_balance',
      instructor: 'Hon. David M. Sterling',
      instructorHonor: 'J.D., M.A. in Theological Studies',
      description: 'Boardroom wisdom, fiduciary ethics, and organizational resilience for Christian enterprise CEOs, denominational board members, and non-profit trustees.',
      pdfSize: '2.5 MB',
      features: [
        'Non-Profit Fiduciary Compliance & Transparency',
        'Board Governance & Executive Succession Planning',
        'Ethical Conflict Management & Staff Care',
        'Kingdom Capital Allocation & Philanthropy'
      ],
      toProgramModal: {
        id: 'exec-kingdom-leadership',
        title: 'Executive Certificate in Kingdom Leadership & Non-Profit Governance',
        code: 'EXEC-505',
        credentialType: 'Executive',
        credits: 12,
        duration: '4 Months (Intensive Cohort)',
        tagline: 'Boardroom wisdom, fiduciary ethics, and organizational resilience.',
        description: 'Designed specifically for denominational board members, non-profit trustees, and Christian enterprise leaders.',
        classroomCode: 'GIBC-EXEC-505',
        prerequisites: 'Minimum 3 years organizational or ministry leadership experience.',
        facultyLead: {
          name: 'Hon. David M. Sterling',
          title: 'Professor of Kingdom Governance & Non-Profit Law',
          academicHonor: 'J.D., M.A. in Theological Studies'
        },
        keyCompetencies: [
          'Non-Profit Fiduciary Compliance & Transparency',
          'Board Governance & Executive Succession Planning',
          'Ethical Conflict Management & Staff Care',
          'Kingdom Capital Allocation & Philanthropy'
        ],
        modules: [
          {
            week: 1,
            title: 'Biblical Theology of Stewardship & Power',
            description: 'Christological leadership models versus secular autocratic structures.',
            learningOutcomes: ['Synthesize servant leadership with executive authority', 'Audit personal motives for leadership'],
            readingAssigned: 'Lead Like Jesus & The Governance Matrix'
          }
        ],
        careerPaths: ['Ministry Executive Director', 'Non-Profit Board Trustee', 'Christian Foundation Leader']
      }
    }
  ];

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen py-10 sm:py-16 text-left">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Top Navigation & Action Bar with prominent Diploma button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
          {/* Breadcrumbs & Home Navigation */}
          <div className="flex items-center gap-2 text-sm text-[#4B5563]">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#E06A26] flex items-center gap-1 font-medium transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#1A1A1A] font-semibold">Certificate Program</span>
          </div>

          {/* Top Diploma Button (Redirects to Diploma page) */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#4B5563] hidden md:inline">Looking for Diploma tracks?</span>
            <button
              type="button"
              onClick={onNavigateToDiploma}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#E06A26] text-[#E06A26] font-label-md text-sm hover:bg-[#E06A26] hover:text-white transition-all shadow-xs cursor-pointer group"
              id="top-diploma-button"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">school</span>
              <span className="font-bold">Diploma Program</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Certificate Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E06A26]/10 via-[#EBB328]/5 to-transparent rounded-bl-full pointer-events-none -z-0" />
          
          <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-[#E06A26] font-label-code uppercase font-bold text-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#E06A26] animate-pulse" />
              <span>Certificate Credential Track • 2025/2026 Academic Cohorts</span>
            </div>

            <h1 className="font-headline-xl text-[#1A1A1A] leading-tight">
              Certificate Subjects in Ministry Leadership & Exegesis
            </h1>

            <p className="font-body-lg text-[#4B5563] leading-relaxed">
              Targeted, rigorous modular certificates formulated to equip Pastors, Strategic Ministers, and Emerging Leaders with immediate exegetical clarity and institutional governance competency—fully integrated with Google Classroom.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E7EB]/80">
              <div>
                <span className="block font-headline-sm font-bold text-[#E06A26]">4 Subjects</span>
                <span className="font-label-code text-xs text-[#4B5563]">Core Curriculum</span>
              </div>
              <div>
                <span className="block font-headline-sm font-bold text-[#1A1A1A]">10-12 Wks</span>
                <span className="font-label-code text-xs text-[#4B5563]">Paced Duration</span>
              </div>
              <div>
                <span className="block font-headline-sm font-bold text-[#1A1A1A]">100% Free</span>
                <span className="font-label-code text-xs text-[#4B5563]">Google Classroom LMS</span>
              </div>
              <div>
                <span className="block font-headline-sm font-bold text-[#EBB328]">Accredited</span>
                <span className="font-label-code text-xs text-[#4B5563]">Verified Certificate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Subjects Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-[#1A1A1A]">
              Listed Certificate Subjects
            </h2>
            <span className="font-label-code text-xs text-[#4B5563] uppercase">
              Showing 4 Subjects • Verified Syllabi Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="certificate-subjects-grid">
            {certificateCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#E06A26]/40 transition-all duration-200 relative group"
              >
                <div className="flex flex-col gap-4">
                  {/* Subject Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-[#E06A26] font-label-code font-bold text-xs uppercase tracking-wider">
                      {course.code} • Certificate
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] font-label-code text-xs font-semibold">
                        {course.duration}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#FFFBF5] border border-[#EBB328]/40 text-[#5C3317] font-label-code text-xs font-bold">
                        {course.credits}
                      </span>
                    </div>
                  </div>

                  {/* Title & Delivery */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-[#1A1A1A] leading-snug group-hover:text-[#E06A26] transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#4B5563] font-label-code">
                      <span className="material-symbols-outlined text-sm text-[#E06A26]">
                        {course.deliveryIcon}
                      </span>
                      <span>{course.delivery}</span>
                    </div>
                  </div>

                  {/* Instructor Badge */}
                  <div className="flex items-center gap-2 text-xs text-[#1A1A1A] bg-[#F9FAFB] p-2.5 rounded-lg border border-[#E5E7EB]">
                    <span className="material-symbols-outlined text-[#E06A26] text-base">person</span>
                    <span><strong>Instructor:</strong> {course.instructor}</span>
                    <span className="text-[#4B5563] text-[11px] hidden sm:inline">({course.instructorHonor})</span>
                  </div>

                  {/* Description */}
                  <p className="font-body-md text-[#4B5563] leading-relaxed">
                    {course.description}
                  </p>

                  {/* Competencies Box */}
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-label-code text-[11px] uppercase tracking-wider text-[#1A1A1A] font-bold">
                      Core Subject Competencies:
                    </span>
                    {course.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#4B5563] font-medium">
                        <span className="material-symbols-outlined text-base text-[#1E8E3E] flex-shrink-0">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex flex-col gap-2.5 pt-2 border-t border-[#E5E7EB]">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(course.toProgramModal)}
                    className="inline-flex items-center justify-between text-xs text-[#4B5563] hover:text-[#E06A26] font-label-code uppercase tracking-wider font-semibold transition-colors cursor-pointer py-1"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">download_for_offline</span>
                      Download Subject Syllabus (PDF)
                    </span>
                    <span>{course.pdfSize}</span>
                  </button>

                  <a
                    className="w-full py-3 rounded-xl bg-[#E06A26] text-white font-label-md flex items-center justify-center gap-2 hover:bg-[#c9591a] shadow-xs transition-all cursor-pointer select-none"
                    href={portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Access Subject in Classroom</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation & Action Bar with prominent Diploma button */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h4 className="font-headline-sm text-[#1A1A1A]">
              Explore Complete Multi-Year Theological Programs
            </h4>
            <p className="font-body-md text-[#4B5563]">
              Ready for comprehensive biblical credentials? View the full Diploma curriculum.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <button
              type="button"
              onClick={onNavigateHome}
              className="px-5 py-3 rounded-xl border border-[#E5E7EB] text-[#4B5563] font-label-md text-sm hover:text-[#1A1A1A] hover:bg-[#F9FAFB] transition-colors cursor-pointer"
            >
              ← Back to Home
            </button>

            {/* Bottom Diploma Button */}
            <button
              type="button"
              onClick={onNavigateToDiploma}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E06A26] text-white font-label-md text-sm hover:bg-[#c9591a] transition-all shadow-xs cursor-pointer group"
              id="bottom-diploma-button"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">school</span>
              <span className="font-bold">Diploma Program</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
