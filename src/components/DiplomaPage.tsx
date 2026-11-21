import React from 'react';
import { Program } from '../types';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';

interface DiplomaPageProps {
  onNavigateHome: () => void;
  onNavigateToCertificate: () => void;
  onSelectProgram: (program: Program) => void;
  portalUrl?: string;
}

export const DiplomaPage: React.FC<DiplomaPageProps> = ({
  onNavigateHome,
  onNavigateToCertificate,
  onSelectProgram,
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL
}) => {
  const diplomaCourses: {
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
      id: 'dip-theology-doctrine',
      code: 'THL-101',
      title: 'Foundational Theology & Systematic Doctrine',
      duration: '12 Weeks',
      credits: '3 Credit Equiv.',
      delivery: 'Online Self-Paced + Live Seminars',
      deliveryIcon: 'sensors',
      instructor: 'Dr. Emmanuel Adebayo',
      instructorHonor: 'Doctor of Theology (Aberdeen)',
      description: 'Deep dive into Scripture, covenant theology, historical church orthodoxy, and foundational hermeneutics. Formulated for grounded apologetics in modern settings.',
      pdfSize: '1.8 MB',
      features: [
        '3 Credit Equivalents • Verified Transcript',
        'Direct Faculty Mentorship Breakouts',
        'Systematic Formulation of Orthodox Doctrine',
        'Historical Creeds and Ecumenical Councils'
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
          }
        ],
        careerPaths: ['Pastoral Ministry', 'Theological Education', 'Apologetics Ministry']
      }
    },
    {
      id: 'dip-ot-covenants',
      code: 'OTC-202',
      title: 'Old Testament Covenant Theology & Messianic Typology',
      duration: '14 Weeks',
      credits: '3 Credit Equiv.',
      delivery: 'Online Self-Paced • Faculty Feedback',
      deliveryIcon: 'menu_book',
      instructor: 'Dr. Emmanuel Adebayo',
      instructorHonor: 'Doctor of Theology (Aberdeen)',
      description: 'Tracking the redemptive thread from the Adamic covenant through Noah, Abraham, Moses, and David, culminating in the New Covenant in Christ.',
      pdfSize: '2.9 MB',
      features: [
        'Complete Covenant Progression Charts',
        'Hebrew Lexical Reference Materials',
        'Pentateuch Typology & Prophetic Books',
        'Unified Redemptive Biblical Metanarrative'
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
    },
    {
      id: 'dip-pastoral-planting-full',
      code: 'DIP-302',
      title: 'Diploma in Pastoral Theology & Church Planting',
      duration: '2 Years (6 Semesters)',
      credits: '60 Academic Credits',
      delivery: 'Cohort Discipleship • Field Practicum',
      deliveryIcon: 'groups_2',
      instructor: 'Rev. Marcus Adebayo',
      instructorHonor: 'M.Div., D.Min. Candidate',
      description: 'Designed for vocational church planters, associate pastors, and missionary pioneers who need practical theological grounding matched with hands-on organizational discipleship models.',
      pdfSize: '3.4 MB',
      features: [
        'Demographic Analysis & Church Plant Strategy',
        'Small Group Discipleship Systems',
        'Financial Stewardship & Fiduciary Leadership',
        'Supervised 150-Hour Pastoral Field Practicum'
      ],
      toProgramModal: {
        id: 'dip-pastoral-planting',
        title: 'Diploma in Pastoral Theology & Church Planting',
        code: 'DIP-302',
        credentialType: 'Diploma',
        credits: 60,
        duration: '2 Years (6 Semesters)',
        tagline: 'Practical field tactics for pioneering church plants and revitalizing local bodies.',
        description: 'Designed for vocational church planters, associate pastors, and missionary pioneers who need practical theological grounding.',
        classroomCode: 'GIBC-PLANT-302',
        prerequisites: 'Endorsement letter from a local church elder or pastoral overseer.',
        facultyLead: {
          name: 'Rev. Marcus Adebayo',
          title: 'Director of Church Multiplication & Urban Strategy',
          academicHonor: 'M.Div., D.Min. candidate'
        },
        keyCompetencies: [
          'Demographic Analysis & Church Plant Strategy',
          'Small Group Discipleship Systems',
          'Financial Stewardship & Fiduciary Leadership',
          'Multi-Generational Community Engagement'
        ],
        modules: [
          {
            week: 1,
            title: 'The Theology of Church Multiplication',
            description: 'Biblical patterns from Acts and Antioch for apostolic expansion.',
            learningOutcomes: ['Analyze Paul’s 3 missionary journeys', 'Map contemporary city centers for planting viability'],
            readingAssigned: 'Apostolic Church Planting Frameworks, Unit 1'
          }
        ],
        careerPaths: ['Lead Church Planter', 'Campus Pastor', 'Community Outreach Minister']
      }
    },
    {
      id: 'dip-counseling-full',
      code: 'DIP-308',
      title: 'Advanced Diploma in Christian Counseling & Pastoral Care',
      duration: '1.5 Years (4 Semesters)',
      credits: '48 Academic Credits',
      delivery: 'Clinical Practicum • Case Conferences',
      deliveryIcon: 'volunteer_activism',
      instructor: 'Dr. Samuel E. O’Connor',
      instructorHonor: 'Psy.D., M.Div., Licensed LMFT',
      description: 'A comprehensive curriculum combining theological grounding with structured compassionate care to shepherd individuals, marriages, and families through trauma and hardship.',
      pdfSize: '3.2 MB',
      features: [
        'Sufficiency of Scripture in Pastoral Counseling',
        'Crisis Intervention & Grief Facilitation',
        'Pre-Marital & Marital Restorative Counseling',
        'Addiction Freedom & Spiritual Care Practicum'
      ],
      toProgramModal: {
        id: 'dip-christian-counseling',
        title: 'Advanced Diploma in Christian Counseling & Pastoral Care',
        code: 'DIP-308',
        credentialType: 'Diploma',
        credits: 48,
        duration: '1.5 Years',
        tagline: 'Biblical truth applied to emotional wounding, grief, and spiritual oppression.',
        description: 'A comprehensive curriculum combining theological grounding with structured compassionate care.',
        classroomCode: 'GIBC-COUN-308',
        prerequisites: 'Undergraduate study or 2+ years of active church ministry involvement.',
        facultyLead: {
          name: 'Dr. Samuel E. O’Connor',
          title: 'Chair of Pastoral Psychology & Family Ministries',
          academicHonor: 'Psy.D., M.Div., Licensed Marriage & Family Therapist'
        },
        keyCompetencies: [
          'Sufficiency of Scripture in Pastoral Counseling',
          'Crisis Intervention & Grief Facilitation',
          'Pre-Marital & Marital Restorative Counseling',
          'Addiction Freedom & Spiritual Warfare Care'
        ],
        modules: [
          {
            week: 1,
            title: 'Theology of Suffering, Sorrow & Sanctification',
            description: 'Grappling with the problem of evil, biblical lament, and God’s redemptive purpose in trials.',
            learningOutcomes: ['Formulate a biblical theology of suffering', 'Guide congregants through psalms of lament'],
            readingAssigned: 'Suffering and the Sovereignty of God'
          }
        ],
        careerPaths: ['Pastoral Care Minister', 'Christian Family Life Counselor', 'Hospital Chaplain']
      }
    }
  ];

  return (
    <div className="w-full bg-[#F9FAFB] min-h-screen py-10 sm:py-16 text-left">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Top Navigation & Action Bar with prominent Certificate button (Redirects back to Certificate page) */}
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
            <span className="text-[#1A1A1A] font-semibold">Diploma Program</span>
          </div>

          {/* Top Certificate Button (Redirects back to Certificate page) */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#4B5563] hidden md:inline">Return to Certificate tracks?</span>
            <button
              type="button"
              onClick={onNavigateToCertificate}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#E06A26] text-[#E06A26] font-label-md text-sm hover:bg-[#E06A26] hover:text-white transition-all shadow-xs cursor-pointer group"
              id="top-certificate-button"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">workspace_premium</span>
              <span className="font-bold">Certificate Program</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Diploma Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#EBB328]/15 via-[#E06A26]/5 to-transparent rounded-bl-full pointer-events-none -z-0" />
          
          <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFBF5] border border-[#EBB328]/40 text-[#5C3317] font-label-code uppercase font-bold text-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-[#EBB328] animate-pulse" />
              <span>Diploma Credential Track • Comprehensive Theological Formation</span>
            </div>

            <h1 className="font-headline-xl text-[#1A1A1A] leading-tight">
              Diploma Subjects in Biblical Studies & Pastoral Leadership
            </h1>

            <p className="font-body-lg text-[#4B5563] leading-relaxed">
              Multi-semester foundational scholarship formulated for vocational shepherds, theological educators, and senior church leaders desiring deep immersion in biblical languages, systematic doctrine, and church multiplication.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E7EB]/80">
              <div>
                <span className="block font-headline-sm font-bold text-[#E06A26]">4 Subjects</span>
                <span className="font-label-code text-xs text-[#4B5563]">Core Degree Tracks</span>
              </div>
              <div>
                <span className="block font-headline-sm font-bold text-[#1A1A1A]">12-24 Mths</span>
                <span className="font-label-code text-xs text-[#4B5563]">Semester Pacing</span>
              </div>
              <div>
                <span className="block font-headline-sm font-bold text-[#1A1A1A]">100% Free</span>
                <span className="font-label-code text-xs text-[#4B5563]">Google Classroom LMS</span>
              </div>
              <div>
                <span className="block font-headline-sm font-bold text-[#EBB328]">60 Credits</span>
                <span className="font-label-code text-xs text-[#4B5563]">Accredited Diploma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Diploma Subjects Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-[#1A1A1A]">
              Listed Diploma Subjects
            </h2>
            <span className="font-label-code text-xs text-[#4B5563] uppercase">
              Showing 4 Subjects • Verified Syllabi Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="diploma-subjects-grid">
            {diplomaCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md hover:border-[#E06A26]/40 transition-all duration-200 relative group"
              >
                <div className="flex flex-col gap-4">
                  {/* Subject Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FFFBF5] border border-[#EBB328]/40 text-[#5C3317] font-label-code font-bold text-xs uppercase tracking-wider">
                      {course.code} • Diploma
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] font-label-code text-xs font-semibold">
                        {course.duration}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-[#E06A26] font-label-code text-xs font-bold">
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

        {/* Bottom Navigation & Action Bar with prominent Certificate button (Redirects back to Certificate page) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h4 className="font-headline-sm text-[#1A1A1A]">
              Looking for Specialized Ministry Certificates?
            </h4>
            <p className="font-body-md text-[#4B5563]">
              Switch back to the Certificate subjects in Hermeneutics, Exegesis, and Church Governance.
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

            {/* Bottom Certificate Button (Redirects back to Certificate page) */}
            <button
              type="button"
              onClick={onNavigateToCertificate}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E06A26] text-white font-label-md text-sm hover:bg-[#c9591a] transition-all shadow-xs cursor-pointer group"
              id="bottom-certificate-button"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">workspace_premium</span>
              <span className="font-bold">Certificate Program</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
