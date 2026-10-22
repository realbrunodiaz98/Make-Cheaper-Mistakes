import React from 'react';
import { CHECKOUT_URL } from '../data/content';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#0B0C0E] to-[#14161C] border-b border-[#242733] text-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C29B7F]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] font-mono-numbers">
          <span>YOUR FUTURE DESERVES THIS PAUSE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
          Make Cheaper Mistakes<br />Than I Did.
        </h2>

        <p className="text-sm sm:text-base text-[#8E909B] max-w-xl mx-auto leading-relaxed">
          A $500 monthly payment doesn’t always cost $500. One decision leads to the next until you’re looking backward wondering where your money went. Give yourself 20 minutes before committing to a multi-year contract.
        </p>

        <div className="pt-4 max-w-md mx-auto space-y-3">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 text-base sm:text-lg font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-xl transition-all shadow-[0_4px_30px_rgba(194,155,127,0.35)] font-heading"
          >
            <span>Get Instant Access Now — $27</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <div className="flex items-center justify-center gap-5 text-xs text-[#8E909B]">
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#C29B7F]" />
              <span>Instant Digital Access</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C29B7F]" />
              <span>30-Day Money-Back Guarantee</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
