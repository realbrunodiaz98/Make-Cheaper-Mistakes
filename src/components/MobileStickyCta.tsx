import React from 'react';
import { CHECKOUT_URL } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export const MobileStickyCta: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0E0F13]/95 backdrop-blur-md border-t border-[#242733] px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-extrabold text-white font-heading font-mono-numbers">
            $27
          </span>
          <span className="text-[10px] text-[#C29B7F] font-bold uppercase tracking-wider">
            One-time
          </span>
        </div>
        <div className="text-[10px] text-[#8E909B] font-medium">
          30-Day Money-Back Guarantee
        </div>
      </div>

      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-lg transition-colors font-heading shrink-0 shadow-sm"
      >
        <span>Get Access</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
