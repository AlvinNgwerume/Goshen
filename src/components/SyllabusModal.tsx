import React, { useEffect } from 'react';
import { Program } from '../types';
import { X, BookOpen, Clock, Award, User, ExternalLink, Printer, CheckCircle, FileText } from 'lucide-react';
import { GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';

interface SyllabusModalProps {
  program: Program | null;
  onClose: () => void;
  portalUrl?: string;
  onOpenInquiry?: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  program,
  onClose,
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL,
  onOpenInquiry
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [program, onClose]);

  if (!program) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#EBE3DA] overflow-hidden gold-top-border"
        role="dialog"
        aria-modal="true"
        aria-labelledby="syllabus-modal-title"
      >
        {/* Modal Header */}
        <div className="bg-[#5C3317] text-white p-6 sm:p-8 flex items-start justify-between relative">
          <div className="space-y-2 text-left pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/15 text-[#EBB328] border border-white/20">
                {program.code}
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-white/80">
                {program.credentialType} Program
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-white/80 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#EBB328]" />
                {program.credits} Academic Credits
              </span>
            </div>

            <h2 id="syllabus-modal-title" className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {program.title}
            </h2>
            <p className="text-sm text-gray-200 max-w-2xl">
              {program.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-left divide-y divide-gray-100">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-2">
            <div className="p-3.5 rounded-lg bg-[#FFFBF5] border border-[#EBE3DA]">
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block font-semibold">
                Duration & Pace
              </span>
              <span className="font-display font-bold text-sm text-[#1A1A1A]">
                {program.duration}
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FFFBF5] border border-[#EBE3DA]">
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block font-semibold">
                Classroom Code
              </span>
              <span className="font-mono font-bold text-sm text-[#E06A26]">
                {program.classroomCode}
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FFFBF5] border border-[#EBE3DA]">
              <span className="text-[11px] uppercase tracking-wider text-[#64748B] block font-semibold">
                Faculty Instructor
              </span>
              <span className="font-display font-bold text-sm text-[#1A1A1A] truncate block">
                {program.facultyLead.name}
              </span>
              <span className="text-[10px] text-[#5C3317] block">
                {program.facultyLead.academicHonor}
              </span>
            </div>
          </div>

          {/* Prerequisites & Key Competencies */}
          <div className="pt-6 space-y-4">
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#5C3317] mb-1">
                Admissions Prerequisite
              </h4>
              <p className="text-sm text-[#4B5563]">
                {program.prerequisites}
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#5C3317] mb-2">
                Core Competencies & Learning Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {program.keyCompetencies.map((comp) => (
                  <div key={comp} className="flex items-start gap-2 text-xs text-[#1A1A1A]">
                    <CheckCircle className="w-4 h-4 text-[#E06A26] flex-shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Module Breakdown */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-base text-[#1A1A1A] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#E06A26]" />
                <span>Curriculum Modules & Weekly Readings</span>
              </h4>
              <span className="text-xs font-semibold text-[#64748B]">
                {program.modules.length} Core Modules
              </span>
            </div>

            <div className="space-y-4">
              {program.modules.map((mod) => (
                <div
                  key={mod.week}
                  className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] space-y-2 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#E06A26] uppercase font-display">
                      Module 0{mod.week}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">
                      Syllabus Section {mod.week}
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-sm text-[#1A1A1A]">
                    {mod.title}
                  </h5>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="pt-2 text-[11px] space-y-1">
                    <div className="text-[#5C3317] font-medium">
                      <strong>Assigned Reading:</strong> {mod.readingAssigned}
                    </div>
                    <div className="text-[#64748B]">
                      <strong>Expected Competencies:</strong> {mod.learningOutcomes.join(' • ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career & Ministry Impact */}
          <div className="pt-6">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#5C3317] mb-2">
              Vocational Applications
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.careerPaths.map((path) => (
                <span
                  key={path}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#FFFBF5] text-[#5C3317] border border-[#EBB328]/50"
                >
                  {path}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5C3317] bg-white border border-[#CBD5E1] hover:bg-gray-50 flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save Syllabus</span>
            </button>
            {onOpenInquiry && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5C3317] hover:bg-[#5C3317]/5"
              >
                Enroll in This Track
              </button>
            )}
          </div>

          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-harvest w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
          >
            <span>Launch Class in Google Classroom</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
