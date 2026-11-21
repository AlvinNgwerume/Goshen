export type CredentialType = 'Degree' | 'Diploma' | 'Certificate' | 'Executive';

export interface ModuleItem {
  week: number;
  title: string;
  description: string;
  learningOutcomes: string[];
  readingAssigned: string;
}

export interface Program {
  id: string;
  title: string;
  code: string;
  credentialType: CredentialType;
  credits: number;
  duration: string;
  description: string;
  tagline: string;
  featured?: boolean;
  classroomCode: string;
  prerequisites: string;
  facultyLead: {
    name: string;
    title: string;
    academicHonor: string;
  };
  keyCompetencies: string[];
  modules: ModuleItem[];
  careerPaths: string[];
}

export interface StatMetric {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'classroom' | 'admissions' | 'academics' | 'tuition';
}
