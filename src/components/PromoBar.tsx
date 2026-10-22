import React, { useState } from 'react';
import { CHECKOUT_URL } from '../data/content';
import { ArrowRight, X } from 'lucide-react';

export const PromoBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#121316] border-b border-[#242733] px-4 py-2.5 text-center text-xs sm:text-sm font-medium text-[#C29B7F]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 pr-6">
        <span>⚡</span>
        <span className="text-white font-semibold">DON'T SIGN ON AUTOPILOT:</span>
        <span className="hidden sm:inline text-[#C29B7F]">
          Get the 20-minute guide & decision tool for just $27
        </span>
        <span className="sm:hidden text-[#C29B7F]">20-min guide & tool for $27</span>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-white underline underline-offset-4 hover:text-[#D4AF93] transition-colors ml-1"
        >
          <span>Get Access</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8E909B] hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
};
