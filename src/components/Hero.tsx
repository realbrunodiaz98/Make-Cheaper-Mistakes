import React from 'react';
import { CHECKOUT_URL } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#242733] overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C29B7F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto mobile-container-pad px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10">
        {/* 1. Hero Headline & Subheadline */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="hero-headline text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12] font-heading">
            The Monthly Payment Is{' '}
            <span className="text-[#C29B7F]">Only The Beginning.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#8E909B] leading-relaxed max-w-2xl mx-auto">
            Ignoring the costs beyond the monthly payment will catch you off guard.
          </p>
        </div>

        {/* 2. The Bruno Quote Box */}
        <div className="max-w-3xl mx-auto bg-[#14161C] border border-[#242733] rounded-xl p-5 sm:p-6 text-sm sm:text-base text-[#DFDFE3] leading-relaxed shadow-sm">
          <p className="italic text-[#DFDFE3]">
            “I spent roughly <strong className="text-white font-semibold">$69,000 on cars in less than 5 years</strong>. And I don’t have a single car to show for it. This is the guide I wish I had before the first domino fell.”
          </p>
          <div className="mt-3 flex items-center text-xs text-[#8E909B] font-medium pt-3 border-t border-[#242733]">
            <span>— Bruno</span>
          </div>
        </div>

        {/* 3. The 4-Box Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mobile-stack-grid">
          <div className="bg-[#14161C] border border-[#242733] rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C29B7F] font-heading font-mono-numbers">$69,000</div>
            <div className="text-xs text-[#8E909B] mt-1 uppercase tracking-wider">Spent On Cars (0 Left)</div>
          </div>

          <div className="bg-[#14161C] border border-[#242733] rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading font-mono-numbers">5 Years</div>
            <div className="text-xs text-[#8E909B] mt-1 uppercase tracking-wider">Compounding Mistakes</div>
          </div>

          <div className="bg-[#14161C] border border-[#242733] rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading font-mono-numbers">20 Mins</div>
            <div className="text-xs text-[#8E909B] mt-1 uppercase tracking-wider">Reading Time</div>
          </div>

          <div className="bg-[#14161C] border border-[#242733] rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C29B7F] font-heading font-mono-numbers">5 Cars</div>
            <div className="text-xs text-[#8E909B] mt-1 uppercase tracking-wider">Zero Remaining</div>
          </div>
        </div>

        {/* 4. 'Before You Sign: Decision Kit' Product Breakdown */}
        <div className="max-w-2xl mx-auto pt-2">
          <div className="bg-[#14161C] border border-[#242733] rounded-2xl p-5 sm:p-7 shadow-2xl relative">
            {/* Manifest Header */}
            <div className="border-b border-[#242733] pb-4 mb-5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                Before You Sign: Decision Kit
              </h3>
            </div>

            {/* Exact Deliverables Inventory */}
            <div className="space-y-3 mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8E909B]">
                What's Inside Your Instant Access:
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#DFDFE3]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B7F] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block">Main Product: Notion Decision Guide</strong>
                    <span className="text-[#8E909B]">“Before You Sign: A Car Financing & Leasing Decision Guide” — living Notion workspace.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B7F] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block">The 6 Expensive Traps Unfiltered Breakdown</strong>
                    <span className="text-[#8E909B]">Escape decisions, payment illusions, fixed leaks, and expected money myths.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C29B7F] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block">The 7-Step "DON'T DECIDE YET" Framework</strong>
                    <span className="text-[#8E909B]">Forces emotional space between feeling the problem and signing away your money.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48BB78] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block">Included Bonus 01: “Before I Say Yes” Decision Tool</strong>
                    <span className="text-[#8E909B]">Interactive form that puts the full unvarnished decision in front of you to swallow.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48BB78] mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block">Included Bonus 02: Real Car Cost Calculator</strong>
                    <span className="text-[#8E909B]">Free companion tool to model all-in monthly costs, financing vs leasing, & equity.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Pricing & Checkout Block */}
            <div className="pt-4 border-t border-[#242733] space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#8E909B] block">One-time payment</span>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-extrabold text-white font-heading font-mono-numbers">$27</span>
                  </div>
                </div>
                <span className="font-mono-numbers text-xs text-[#C29B7F] font-bold bg-[#C29B7F]/10 px-2.5 py-1 rounded border border-[#C29B7F]/20">
                  LIFETIME ACCESS
                </span>
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-xl transition-all shadow-md font-heading"
              >
                <span>Get Instant Digital Access — $27</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center text-[11px] text-[#8E909B] pt-1">
                <span>🛡️ 30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
