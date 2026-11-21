import React, { useState } from 'react';
import { Program } from '../types';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';

interface ProgramMatrixProps {
  onSelectProgram: (program: Program) => void;
  portalUrl?: string;
  onNavigateToCertificate?: () => void;
  onNavigateToDiploma?: () => void;
}

export interface StitchCourseItem {
  id: string;
  category: 'diploma' | 'certificate';
  categoryLabel: string;
  duration: string;
  title: string;
  delivery: string;
  deliveryIcon: string;
  description: string;
  badge?: string;
  pdfSize: string;
  features: string[];
  toProgramModal: Program;
}

export const ProgramMatrix: React.FC<ProgramMatrixProps> = ({
  onSelectProgram,
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL,
  onNavigateToCertificate,
  onNavigateToDiploma
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'certificate' | 'diploma'>('all');

  const courses: StitchCourseItem[] = [
    {
      id: 'course-1',
      category: 'diploma',
      categoryLabel: 'Diploma',
      duration: '12 Weeks',
      title: 'Foundational Theology & Systematic Doctrine',
      delivery: 'Online Self-Paced + Live Seminars',
      deliveryIcon: 'sensors',
      description: 'Deep dive into Scripture, covenant theology, historical church orthodoxy, and foundational hermeneutics. Formulated for grounded apologetics in modern settings.',
      pdfSize: '1.8 MB',
      features: [
        '3 Credit Equivalents • Verified Transcript',
        'Direct Faculty Mentorship Forums'
      ],
      toProgramModal: {
        id: 'thl-foundational',
        title: 'Foundational Theology & Systematic Doctrine',
        code: 'THL-101',
        credentialType: 'Degree',
        credits: 3,
        duration: '12 Weeks',
        tagline: 'Deep dive into Scripture, covenant theology, and historical orthodoxy.',
        description: 'Comprehensive study of systematic theology covering the doctrine of the Word of God, the Trinity, Creation, the Fall, Redemption, and the Church.',
        classroomCode: 'GIBC-THL-101',
        prerequisites: 'Open to emerging leaders and young adults.',
        facultyLead: {
          name: 'Dr. Emmanuel Adebayo',
          title: 'Chair of Systematic Theology',
          academicHonor: 'Doctor of Theology (Aberdeen)'
        },
        keyCompetencies: [
          'Systematic formulation of orthodox doctrine',
          'Historical creeds and ecumenical councils',
          'Apologetics defense in post-modern contexts',
          'Biblical covenantal synthesis'
        ],
        modules: [
          {
            week: 1,
            title: 'Prolegomena: The Nature and Necessity of Theology',
            description: 'Understanding special revelation, general revelation, and the canonicity of the 66 books.',
            learningOutcomes: ['Formulate biblical revelation principles', 'Analyze canonicity historical markers'],
            readingAssigned: 'Systematic Theology, Chapters 1-3'
          },
          {
            week: 2,
            title: 'The Being and Attributes of the Triune God',
            description: 'Exegesis of divine aseity, immutability, love, justice, and Trinitarian relations.',
            learningOutcomes: ['Articulate Nicene orthodoxy', 'Refute ancient and contemporary heresies'],
            readingAssigned: 'The Doctrine of God, Chapters 4-6'
          },
          {
            week: 3,
            title: 'Christology and Penal Substitutionary Atonement',
            description: 'The hypostatic union of Christ and the redemptive efficacy of the cross.',
            learningOutcomes: ['Defend the two natures of Christ', 'Explicate penal substitution in Isaiah 53'],
            readingAssigned: 'The Cross of Christ, Part 2'
          }
        ],
        careerPaths: ['Pastoral Ministry', 'Theological Education', 'Apologetics Ministry']
      }
    },
    {
      id: 'course-3',
      category: 'certificate',
      categoryLabel: 'Certificate',
      duration: '10 Weeks',
      title: 'Hermeneutics & Biblical Exegesis in Practice',
      delivery: 'Intensive Online • Weekly Feedback',
      deliveryIcon: 'translate',
      description: 'Exegetical tools, original text linguistic insights, inductive study methods, and sermon/teaching formulation designed to bring Scripture to life with precision.',
      pdfSize: '3.1 MB',
      features: [
        'Greek/Hebrew Concordance Suite Included',
        'Peer Homiletics Workshop Sessions'
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
            learningOutcomes: ['Extract the single overarching intent of the author', 'Avoid lexical fallacies'],
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
      id: 'course-4',
      category: 'certificate',
      categoryLabel: 'Certificate',
      duration: '12 Weeks',
      title: 'Church Governance, Eldership & Non-Profit Law',
      delivery: 'Executive Online • Case Study Method',
      deliveryIcon: 'shield',
      description: 'Biblical qualifications for elders and deacons, fiduciary transparency, non-profit charter compliance, and moral conflict resolution.',
      pdfSize: '2.1 MB',
      features: [
        'Board Governance Charter Templates',
        'Fiduciary Compliance Certification'
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
            title: 'Biblical Eldership vs Corporate Hierarchy',
            description: 'Analyzing 1 Timothy 3, Titus 1, and 1 Peter 5 for character-driven leadership.',
            learningOutcomes: ['Establish elder vetting criteria', 'Structure accountability bylaws'],
            readingAssigned: 'Biblical Eldership & Church Charters'
          }
        ],
        careerPaths: ['Executive Pastor', 'Board Trustee', 'Denominational Officer']
      }
    },
    {
      id: 'course-5',
      category: 'diploma',
      categoryLabel: 'Diploma',
      duration: '14 Weeks',
      title: 'Old Testament Covenant Theology & Messianic Typology',
      delivery: 'Online Self-Paced • Faculty Feedback',
      deliveryIcon: 'menu_book',
      description: 'Tracking the redemptive thread from the Adamic covenant through Noah, Abraham, Moses, and David, culminating in the New Covenant in Christ.',
      pdfSize: '2.9 MB',
      features: [
        'Complete Covenant Progression Charts',
        'Hebrew Lexical Reference Materials'
      ],
      toProgramModal: {
        id: 'ot-covenants',
        title: 'Old Testament Covenant Theology & Messianic Typology',
        code: 'OTC-202',
        credentialType: 'Degree',
        credits: 3,
        duration: '14 Weeks',
        tagline: 'Understanding the unified redemptive story of all Scripture.',
        description: 'Detailed analysis of biblical covenants and how every book of the Old Testament points forward to Jesus Christ.',
        classroomCode: 'GIBC-OTC-202',
        prerequisites: 'Foundational understanding of Scripture.',
        facultyLead: {
          name: 'Dr. Emmanuel Adebayo',
          title: 'Chair of Systematic Theology',
          academicHonor: 'Doctor of Theology (Aberdeen)'
        },
        keyCompetencies: [
          'Tracing covenant historical development',
          'Identifying messianic types in the Pentateuch',
          'Prophetic exposition of Isaiah and Daniel',
          'Integrating Old Testament theology in preaching'
        ],
        modules: [
          {
            week: 1,
            title: 'The Seed Promise & Edenic Covenant',
            description: 'Protoevangelium in Genesis 3:15 and the cosmic conflict between the seed of the woman and serpent.',
            learningOutcomes: ['Chart covenant genealogies', 'Explain typology in Genesis'],
            readingAssigned: 'Christ in All the Scriptures'
          }
        ],
        careerPaths: ['Bible Teacher', 'Senior Pastor', 'Chaplain']
      }
    }
  ];

  const filteredCourses = courses.filter((c) => {
    if (activeFilter === 'all') return true;
    return c.category === activeFilter;
  });

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-[#E5E7EB]" id="courses-matrix">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="flex flex-col gap-1 max-w-xl">
            <span className="font-label-code text-[#E06A26] uppercase font-bold tracking-wider">
              Modular Cohorts • Self-Paced Masterclasses
            </span>
            <h2 className="font-headline-lg text-[#1A1A1A]">
              Academic Pathways & Theological Tracks
            </h2>
            <p className="font-body-md text-[#4B5563]">
              Explore credentials crafted by accredited seminaries and world-renowned ministry practitioners.
            </p>
          </div>

          {/* Filter Group: All Tracks, Certificate, Diploma (Youth & Emerging Church removed) */}
          <div className="flex flex-wrap items-center gap-2" id="course-filter-group">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`filter-btn px-5 py-2.5 rounded-full font-label-md transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#E06A26] text-white shadow-xs'
                  : 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] hover:text-[#1A1A1A]'
              }`}
            >
              All Tracks
            </button>

            {/* Certificate Button (Opens dedicated Certificate page) */}
            <button
              type="button"
              onClick={() => {
                if (onNavigateToCertificate) {
                  onNavigateToCertificate();
                } else {
                  setActiveFilter('certificate');
                }
              }}
              className="filter-btn px-5 py-2.5 rounded-full font-label-md transition-all cursor-pointer bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] hover:border-[#E06A26] hover:text-[#E06A26] flex items-center gap-1.5"
              id="filter-certificate-btn"
            >
              <span>Certificate</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>

            {/* Diploma Button (Opens dedicated Diploma page) */}
            <button
              type="button"
              onClick={() => {
                if (onNavigateToDiploma) {
                  onNavigateToDiploma();
                } else {
                  setActiveFilter('diploma');
                }
              }}
              className="filter-btn px-5 py-2.5 rounded-full font-label-md transition-all cursor-pointer bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] hover:border-[#E06A26] hover:text-[#E06A26] flex items-center gap-1.5"
              id="filter-diploma-btn"
            >
              <span>Diploma</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" id="course-grid">
          {filteredCourses.map((course) => {
            const isCert = course.category === 'certificate';

            return (
              <div
                key={course.id}
                className="course-card bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs flex flex-col justify-between gap-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#E06A26]/40 relative"
              >
                <div className="flex flex-col gap-4">
                  {/* Category & Duration */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        if (isCert && onNavigateToCertificate) onNavigateToCertificate();
                        else if (!isCert && onNavigateToDiploma) onNavigateToDiploma();
                      }}
                      className={`px-3 py-1 rounded-full border font-label-code uppercase font-bold text-xs transition-colors cursor-pointer ${
                        isCert
                          ? 'bg-[#FFF7ED] border-[#FED7AA] text-[#E06A26] hover:bg-[#FED7AA]/30'
                          : 'bg-[#FFFBF5] border-[#EBB328]/40 text-[#5C3317] hover:bg-[#EBB328]/20'
                      }`}
                    >
                      {course.categoryLabel} Track →
                    </button>
                    <span className="px-2.5 py-1 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] font-label-code font-bold text-xs">
                      {course.duration}
                    </span>
                  </div>

                  {/* Title & Delivery */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-headline-sm text-[#1A1A1A] leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#4B5563] font-label-code">
                      <span className="material-symbols-outlined text-sm text-[#E06A26]">
                        {course.deliveryIcon}
                      </span>
                      <span>{course.delivery}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body-md text-[#4B5563]">
                    {course.description}
                  </p>

                  {/* Features Box */}
                  <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 flex flex-col gap-2">
                    {course.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#4B5563] font-medium">
                        <span className="material-symbols-outlined text-base text-[#1E8E3E]">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(course.toProgramModal)}
                    className="inline-flex items-center justify-between text-xs text-[#4B5563] hover:text-[#E06A26] font-label-code uppercase tracking-wider font-semibold transition-colors cursor-pointer py-1"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">download_for_offline</span>
                      Download Syllabus (PDF)
                    </span>
                    <span>{course.pdfSize}</span>
                  </button>

                  <a
                    className="w-full py-3 rounded-xl bg-[#E06A26] text-white font-label-md flex items-center justify-center gap-2 hover:bg-[#c9591a] shadow-xs transition-all cursor-pointer select-none"
                    href={portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Access Class</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
