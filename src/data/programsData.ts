import { Program, FAQItem } from '../types';

export const GOOGLE_CLASSROOM_DEFAULT_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_CLASSROOM_URL) ||
  'https://classroom.google.com';

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'bbs-pastoral',
    title: 'Bachelor of Biblical Studies & Pastoral Leadership',
    code: 'BBS-401',
    credentialType: 'Degree',
    credits: 120,
    duration: '3 - 4 Years (Self-Paced)',
    tagline: 'Comprehensive theological training, Greek/Hebrew foundations, and pastoral oversight.',
    description: 'An accredited, rigorous four-year theological track engineered for senior pastors, ministry directors, and biblical educators seeking mastery in scriptural exposition and church governance.',
    featured: true,
    classroomCode: 'GIBC-BBS-LEAD',
    prerequisites: 'High School Diploma or equivalent life/ministry experience. English reading proficiency.',
    facultyLead: {
      name: 'Dr. Timothy Vance',
      title: 'Dean of Biblical Theology & Systematic Exegesis',
      academicHonor: 'Ph.D. in New Testament Studies, Th.M.'
    },
    keyCompetencies: [
      'Original Language Exegesis (Koine Greek & Biblical Hebrew)',
      'Systematic Theology & Historical Ecclesiology',
      'Expository Preaching & Homiletics Practicum',
      'Biblical Counseling & Crisis Pastoral Care'
    ],
    careerPaths: [
      'Senior Pastor & Co-Pastor',
      'Theological Educator & Bible Institute Lecturer',
      'Director of Pastoral Care & Counseling',
      'Denominational Director of Missions'
    ],
    modules: [
      {
        week: 1,
        title: 'Foundations of Biblical Authority & Revelation',
        description: 'Examining the inspiration, inerrancy, and canonicity of the Old and New Testaments.',
        learningOutcomes: ['Define biblical canonicity standards', 'Formulate defensible positions on scriptural inspiration'],
        readingAssigned: 'Systematic Theology Vol. 1, Chapters 1-4'
      },
      {
        week: 2,
        title: 'Principles of Grammatical-Historical Hermeneutics',
        description: 'Mastering grammatical context, literary genres, and cultural-historical settings of Scripture.',
        learningOutcomes: ['Distinguish descriptive vs prescriptive texts', 'Apply 5-step inductive hermeneutics'],
        readingAssigned: 'Introduction to Biblical Interpretation, Part 2'
      },
      {
        week: 3,
        title: 'Old Testament Covenant Theology & Typology',
        description: 'Tracking the redemptive thread from the Adamic covenant through the Abrahamic and Davidic promises.',
        learningOutcomes: ['Chart covenant progressions', 'Identify messianic typology in the Pentateuch'],
        readingAssigned: 'Christ in All the Scriptures, Chapters 3-7'
      },
      {
        week: 4,
        title: 'New Testament Christology & Pauline Epistles',
        description: 'Detailed exegesis of Romans, Galatians, and the Prison Epistles focusing on justification and sanctification.',
        learningOutcomes: ['Examine Pauline soteriology', 'Diagram complex Greek syntactic transitions'],
        readingAssigned: 'Paul: Apostle of the Heart Set Free, Chapters 8-12'
      },
      {
        week: 5,
        title: 'Homiletics: Crafting Expository & Text-Driven Sermons',
        description: 'Structuring biblical main points directly from the pericopes with clear application rubrics.',
        learningOutcomes: ['Construct 3 text-driven sermon manuscripts', 'Deliver sermon evaluations in digital breakout groups'],
        readingAssigned: 'Biblical Preaching: The Development and Delivery of Expository Messages'
      },
      {
        week: 6,
        title: 'Church Governance, Eldership & Capstone Practicum',
        description: 'Biblical qualifications for elders and deacons, conflict resolution, and financial fiduciary discipline.',
        learningOutcomes: ['Draft church bylaws and conflict escalation matrices', 'Complete pastoral capstone oral defense'],
        readingAssigned: 'Biblical Eldership & Church Bylaws Casebook'
      }
    ]
  },
  {
    id: 'dip-pastoral-planting',
    title: 'Diploma in Pastoral Theology & Church Planting',
    code: 'DIP-302',
    credentialType: 'Diploma',
    credits: 60,
    duration: '2 Years (6 Semesters)',
    tagline: 'Practical field tactics for pioneering church plants and revitalizing local bodies.',
    description: 'Designed for vocational church planters, associate pastors, and missionary pioneers who need practical theological grounding matched with hands-on organizational discipleship models.',
    featured: true,
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
    careerPaths: [
      'Lead Church Planter',
      'Campus Pastor / Site Director',
      'Community Outreach Minister',
      'Discipleship Coordinator'
    ],
    modules: [
      {
        week: 1,
        title: 'The Theology of Church Multiplication',
        description: 'Biblical patterns from Acts and Antioch for apostolic expansion and regional spiritual awakening.',
        learningOutcomes: ['Analyze Paul’s 3 missionary journeys', 'Map contemporary city centers for planting viability'],
        readingAssigned: 'Apostolic Church Planting Frameworks, Unit 1'
      },
      {
        week: 2,
        title: 'Core Team Recruitment & Leadership Pipeline',
        description: 'Identifying, vetting, and training launch teams and volunteer leaders without burn-out.',
        learningOutcomes: ['Build a 12-month launch team onboarding syllabus', 'Establish volunteer rotation governance'],
        readingAssigned: 'Planting Missional Churches, Section 3'
      },
      {
        week: 3,
        title: 'Zero-Overhead Digital Operations & Google Workspace',
        description: 'Leveraging Google Classroom, Drive, and free digital channels for ministry admin.',
        learningOutcomes: ['Deploy Google Workspace for church administration', 'Coordinate weekly service rosters seamlessly'],
        readingAssigned: 'Modern Church Operations & Digital Stewardship'
      },
      {
        week: 4,
        title: 'Public Launch Strategy & Community Assimilation',
        description: 'Transitioning from living room prayer groups to preview services and sustained community discipleship.',
        learningOutcomes: ['Develop first-time guest assimilation funnels', 'Design community benevolent outreach events'],
        readingAssigned: 'The Missional Church Field Manual'
      }
    ]
  },
  {
    id: 'cert-exegesis',
    title: 'Certificate in Biblical Exegesis & Hermeneutics',
    code: 'CERT-104',
    credentialType: 'Certificate',
    credits: 18,
    duration: '6 Months',
    tagline: 'Precision tools to accurately dissect, interpret, and teach God’s Word without error.',
    description: 'A focused, high-impact certificate for Sunday School superintendents, small group facilitators, and lay leaders seeking to protect sound doctrine in an era of theological ambiguity.',
    featured: false,
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
    careerPaths: [
      'Adult Sunday School Director',
      'Bible Study Fellowship Leader',
      'Youth Ministry Exegetical Trainer',
      'Lay Teaching Assistant'
    ],
    modules: [
      {
        week: 1,
        title: 'The Art of Observation: Seeing the Text',
        description: 'Developing disciplined reading habits, sentence diagrams, repetitions, and structural connectors.',
        learningOutcomes: ['Isolate grammatical pivots in biblical text', 'Eliminate eisegetical presuppositions'],
        readingAssigned: 'Living by the Book: The Art and Science of Reading the Bible'
      },
      {
        week: 2,
        title: 'Historical & Cultural Archaeology of the Ancient Near East',
        description: 'Understanding ancient customs, idioms, geographical context, and covenant rituals.',
        learningOutcomes: ['Interpret historical idioms accurately', 'Contextualize Levitical purity codes vs New Covenant'],
        readingAssigned: 'The IVP Bible Background Commentary'
      },
      {
        week: 3,
        title: 'Bridging the Chasm: Hermeneutical Application',
        description: 'Moving from "What did it mean then?" to "What does it demand today?" with integrity.',
        learningOutcomes: ['Draft theological principle bridges', 'Formulate actionable life application directives'],
        readingAssigned: 'Grasping God’s Word, Units 4-6'
      }
    ]
  },
  {
    id: 'exec-kingdom-leadership',
    title: 'Executive Certificate in Kingdom Leadership & Non-Profit Governance',
    code: 'EXEC-505',
    credentialType: 'Executive',
    credits: 12,
    duration: '4 Months (Intensive Cohort)',
    tagline: 'Boardroom wisdom, fiduciary ethics, and organizational resilience for Christian executives.',
    description: 'Designed specifically for denominational board members, non-profit trustees, Christian enterprise CEOs, and senior ministry leaders navigating fiduciary compliance, conflict resolution, and kingdom culture.',
    featured: false,
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
    careerPaths: [
      'Ministry Executive Director',
      'Non-Profit Board Trustee',
      'Christian Foundation Program Director',
      'Denominational Chief Financial Officer'
    ],
    modules: [
      {
        week: 1,
        title: 'Biblical Theology of Stewardship & Power',
        description: 'Christological leadership models versus secular autocratic structures.',
        learningOutcomes: ['Synthesize servant leadership with executive authority', 'Audit personal motives for leadership'],
        readingAssigned: 'Lead Like Jesus & The Governance Matrix'
      },
      {
        week: 2,
        title: 'Board Charters, Fiduciary Laws & Ethics',
        description: 'Structuring independent boards, conflict of interest disclosures, and financial oversight.',
        learningOutcomes: ['Author a comprehensive board governance charter', 'Audit internal financial controls'],
        readingAssigned: 'Non-Profit Governance for Faith-Based Organizations'
      },
      {
        week: 3,
        title: 'Crisis Communications & Institutional Integrity',
        description: 'Handling moral failure, theological drift, public crises, and restorative discipline.',
        learningOutcomes: ['Create a crisis communication framework', 'Formulate redemptive restoration policies'],
        readingAssigned: 'Guarding the Trust: Navigating Ministry Crises'
      }
    ]
  },
  {
    id: 'cert-global-missions',
    title: 'Certificate in Global Missions & Marketplace Ministry',
    code: 'CERT-203',
    credentialType: 'Certificate',
    credits: 15,
    duration: '6 Months',
    tagline: 'Bridging secular vocations and cross-cultural missional impact with zero friction.',
    description: 'Equips tentmakers, business professionals, and cross-cultural missionaries to proclaim the Gospel and plant reproducing communities in unreached regions while sustaining financial self-sufficiency.',
    featured: false,
    classroomCode: 'GIBC-MISS-203',
    prerequisites: 'Open to all Christian professionals and aspiring missionaries.',
    facultyLead: {
      name: 'Dr. Esther K. Mwangi',
      title: 'Director of Global Missiology & Cross-Cultural Studies',
      academicHonor: 'Ph.D. in Intercultural Studies'
    },
    keyCompetencies: [
      'Business as Mission (BAM) Models',
      'Cross-Cultural Anthropology & Worldview Analysis',
      'Oral Storytelling & Contextualized Discipleship',
      'Global Security & Tentmaking Resilience'
    ],
    careerPaths: [
      'Marketplace Missionary (Tentmaker)',
      'Cross-Cultural Church Planter',
      'BAM Social Entrepreneur',
      'Missions Mobilizer'
    ],
    modules: [
      {
        week: 1,
        title: 'The Biblical Missio Dei & Global Mandate',
        description: 'From Genesis 12 to Revelation 7: God’s heartbeat for every nation, tribe, and tongue.',
        learningOutcomes: ['Trace missiological motifs across Scripture', 'Evaluate unreached people groups (UPG) data'],
        readingAssigned: 'Perspectives on the World Christian Movement, Reader 1'
      },
      {
        week: 2,
        title: 'Marketplace Integration: Tentmaking with Integrity',
        description: 'Emulating the Pauline model of commercial trade combined with apostolic discipleship.',
        learningOutcomes: ['Draft a Business as Mission (BAM) sustainable business plan', 'Integrate workplace evangelism'],
        readingAssigned: 'Business as Mission: The Power of Purpose-Driven Commerce'
      }
    ]
  },
  {
    id: 'dip-christian-counseling',
    title: 'Advanced Diploma in Christian Counseling & Pastoral Care',
    code: 'DIP-308',
    credentialType: 'Diploma',
    credits: 48,
    duration: '1.5 Years',
    tagline: 'Biblical truth applied to emotional wounding, grief, marriage distress, and spiritual oppression.',
    description: 'A comprehensive curriculum combining theological grounding with structured compassionate care to shepherd individuals, marriages, and families through trauma and hardship.',
    featured: false,
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
    careerPaths: [
      'Pastoral Care Minister',
      'Christian Family Life Counselor',
      'Hospital & Hospice Chaplain',
      'Recovery Ministry Overseer'
    ],
    modules: [
      {
        week: 1,
        title: 'Theology of Suffering, Sorrow & Sanctification',
        description: 'Grappling with the problem of evil, biblical lament, and God’s redemptive purpose in trials.',
        learningOutcomes: ['Formulate a biblical theology of suffering', 'Guide congregants through psalms of lament'],
        readingAssigned: 'Suffering and the Sovereignty of God'
      },
      {
        week: 2,
        title: 'Active Pastoral Listening & Diagnostic Inquiry',
        description: 'Cultivating empathic presence while diagnosing heart motivations and spiritual blockages.',
        learningOutcomes: ['Execute structured empathetic clinical listening', 'Map idolatry and root motives of the heart'],
        readingAssigned: 'Instruments in the Redeemer’s Hands'
      }
    ]
  }
];

export const TRUST_METRICS: { value: string; label: string; sublabel: string; highlight: string }[] = [
  {
    value: '100% Free LMS',
    label: 'Zero Recurring Software Fees',
    sublabel: 'Powered by enterprise Google Classroom infrastructure.',
    highlight: 'R0 Tech Stack'
  },
  {
    value: '24/7 AI Companion',
    label: 'Contextual Scripture Tutor',
    sublabel: 'Greek/Hebrew lexicons, cross-references & concordance.',
    highlight: 'Biblical Rigor'
  },
  {
    value: 'Google Integrated',
    label: 'Native Cloud Workspace',
    sublabel: 'Docs, Drive, Meet, and Calendar automatically connected.',
    highlight: 'Seamless Sync'
  },
  {
    value: 'Practical Training',
    label: 'Field-Tested Ministry Labs',
    sublabel: 'Expository preaching, eldership, and church planting.',
    highlight: 'Real Ministry'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'classroom',
    question: 'How do I log into the Google Classroom portal as a Goshen student?',
    answer: 'Once your enrollment is confirmed, you will receive your unique class enrollment code (e.g., GIBC-BBS-LEAD). You simply open classroom.google.com on any browser or mobile app, sign in with your Google account, click the "+" symbol, and enter your class code. All syllabi, lectures, and assignments will immediately populate.'
  },
  {
    category: 'tuition',
    question: 'Are there hidden software or subscription fees for Google Classroom?',
    answer: 'None. Goshen International Bible College operates on a radical zero-overhead learning model. Google Classroom is completely free for all students on desktop, iOS, and Android. You never pay for software licenses, portal hosting fees, or server maintenance.'
  },
  {
    category: 'academics',
    question: 'Can I complete my degree or diploma while serving in full-time ministry?',
    answer: 'Yes. Every degree, diploma, and certificate program at Goshen is structured modularly with asynchronous access. Lecture notes, recorded seminars, and reading discussions are accessible 24/7, enabling pastors and marketplace leaders across every time zone to study at their own pace.'
  },
  {
    category: 'admissions',
    question: 'What are the technical requirements to participate in coursework?',
    answer: 'All you need is an internet connection and a free Google account (Gmail or Google Workspace). Google Classroom works seamlessly on any modern web browser (Chrome, Safari, Firefox, Edge) or on smartphones via the free Google Classroom mobile app.'
  },
  {
    category: 'academics',
    question: 'How are theological examinations and ministry practicums evaluated?',
    answer: 'Evaluations combine written exegetical research papers, text-driven sermon recordings, peer review forums, and an oral capstone defense with faculty overseers conducted via Google Meet.'
  }
];
