import React, { useState } from 'react';
import { X, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { PROGRAMS_DATA, GOOGLE_CLASSROOM_DEFAULT_URL } from '../data/programsData';

interface AdmissionInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  portalUrl?: string;
}

export const AdmissionInquiryModal: React.FC<AdmissionInquiryModalProps> = ({
  isOpen,
  onClose,
  portalUrl = GOOGLE_CLASSROOM_DEFAULT_URL
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    programId: PROGRAMS_DATA[0].id,
    cohort: 'Fall 2026 (September Cohort)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedProgram = PROGRAMS_DATA.find(p => p.id === formData.programId) || PROGRAMS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-[#EBE3DA] overflow-hidden gold-top-border text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Compact Header */}
        <div className="bg-[#5C3317] text-white px-5 py-4 flex items-center justify-between">
          <h2 className="font-display font-bold text-xl text-white">
            Admissions & Cohort Enrollment
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center space-y-4 py-2">
              <div className="w-12 h-12 bg-[#1E8E3E]/10 text-[#1E8E3E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1A1A]">
                Application Verified & Provisional Code Issued
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mx-auto">
                Welcome, <strong>{formData.fullName}</strong>. Your registration for <strong>{selectedProgram.title}</strong> has been received.
              </p>

              {/* Issued Class Code Box */}
              <div className="p-3.5 rounded-xl bg-[#FFFBF5] border border-[#EBB328]/60 max-w-sm mx-auto text-left space-y-1">
                <span className="text-[11px] font-bold uppercase text-[#5C3317]">
                  Your Google Classroom Course Code:
                </span>
                <div className="font-mono text-base font-bold text-[#E06A26]">
                  {selectedProgram.classroomCode}
                </div>
                <p className="text-[11px] text-[#64748B]">
                  Open Google Classroom, sign in with {formData.email || 'your Google account'}, and join using this code.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-harvest px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span>Launch Google Classroom</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#5C3317] border border-[#CBD5E1] hover:bg-gray-50 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3317] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pastor Johnathan Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E06A26] focus:ring-1 focus:ring-[#E06A26]/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3317] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E06A26] focus:ring-1 focus:ring-[#E06A26]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3317] mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cape Town, South Africa"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E06A26] focus:ring-1 focus:ring-[#E06A26]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3317] mb-1">
                  Course
                </label>
                <select
                  value={formData.programId}
                  onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E06A26] focus:ring-1 focus:ring-[#E06A26]/20 bg-white"
                >
                  {PROGRAMS_DATA.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      [{prog.code}] {prog.title} ({prog.credentialType})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3317] mb-1">
                  Preferred Academic Cohort
                </label>
                <select
                  value={formData.cohort}
                  onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#E06A26] focus:ring-1 focus:ring-[#E06A26]/20 bg-white"
                >
                  <option value="Fall 2026 (September Cohort)">Fall 2026 (September Cohort) - Enrolling Now</option>
                  <option value="Winter 2027 (January Cohort)">Winter 2027 (January Cohort)</option>
                  <option value="Spring 2027 (May Cohort)">Spring 2027 (May Cohort)</option>
                  <option value="Immediate Self-Paced Access">Immediate Self-Paced Access</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-harvest w-full py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Processing Admissions Request...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
