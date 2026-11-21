import React, { useState } from 'react';
import transparentLogo from '../assets/images/goshen_logo_transparent.png';

interface GoshenLogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const GOSHEN_LOGO_SRC = transparentLogo;
export const GOSHEN_REMOTE_LOGO_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuAEgJjjgzaGnc71WNwhU_ViZs6WvYTinXfE7uvyg2k_fa4LAkjkAhqCiSc9b_0370XA4EzdbenLR5bqB_zqY3Bl43wxhAXWzZzYnxcMXL-qzVt27PxLjBivbRRDDAYRiWIvF3gW50D_f-1fHQhJUKyWQVhHt8wRRjVgVRv83SBAiKjfJ-6zSBu4qStNOVGqmQmA5ROxtquIuopf3lxhJsqafHS0qbj6a-601OnRA_6tWLhV8Js2X8zy";

export const GoshenLogo: React.FC<GoshenLogoProps> = ({ className = '', variant = 'default' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {!imageError ? (
        <img
          src={GOSHEN_LOGO_SRC}
          alt="Goshen International Bible College"
          className="h-12 w-auto object-contain max-w-[280px]"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Fallback SVG crest and typographic mark */
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#5C3317] border border-[#EBB328]/40 flex items-center justify-center text-white shadow-xs">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#EBB328]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M7 8h10M4 19c4-2 8-2 8 0c0-2 4-2 8 0" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-tight leading-tight text-[#1A1A1A]">
              GOSHEN
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#5C3317]">
              International Bible College
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
