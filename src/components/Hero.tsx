import React from 'react';
import { CHECKOUT_URL } from '../data/content';
import { ArrowUpRight, ShieldCheck, Zap, Calculator, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#242733] overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C29B7F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Anti-slop zero-pill kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-4">
          <span>Decision Circuit Breaker</span>
          <span aria-hidden="true">·</span>
          <span>By Bruno Diaz</span>
          <span aria-hidden="true">·</span>
          <span>Instant Digital Access</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12] font-heading">
              The Monthly Payment Is{' '}
              <span className="text-[#C29B7F]">Only The Beginning.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#8E909B] leading-relaxed max-w-2xl">
              Before you finance or lease a car, check for hidden costs beyond the dealer’s monthly offer. Also, review your future assumptions. This way, you can avoid a costly mistake before it happens.
            </p>

            {/* Author Hook Quote */}
            <div className="bg-[#14161C] border border-[#242733] rounded-xl p-5 sm:p-6 text-sm sm:text-base text-[#DFDFE3] leading-relaxed shadow-sm">
              <p className="italic text-[#DFDFE3]">
                “I spent roughly <strong className="text-white font-semibold">$69,000 on cars in less than 5 years</strong>. And I don’t have a single car to show for it. This is the guide I wish I had before the first domino fell.”
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-[#8E909B] font-medium pt-3 border-t border-[#242733]">
                <span>— Bruno Diaz</span>
                <span className="text-[#C29B7F]">5 Cars · 5 Years · $0 Equity</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-xl transition-all shadow-[0_4px_24px_rgba(194,155,127,0.28)] hover:shadow-[0_6px_30px_rgba(194,155,127,0.4)] font-heading"
                >
                  <span>Get Instant Access — $27</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-[#DFDFE3] bg-[#14161C] hover:bg-[#1C1E26] border border-[#242733] hover:border-[#383C4D] rounded-xl transition-all"
                >
                  <Calculator className="w-4 h-4 text-[#C29B7F]" />
                  <span>Run The Quick Cost Test</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#8E909B]">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C29B7F]" />
                  <span>30-Day Money-Back Guarantee</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#C29B7F]" />
                  <span>Instant Notion Guide Access</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B7F]" />
                  <span>100% Real Numbers, Zero Fluff</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Delivery Manifest & Value Card (No picture) */}
          <div className="lg:col-span-5">
            <div className="bg-[#14161C] border border-[#242733] rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              {/* Manifest Header */}
              <div className="border-b border-[#242733] pb-4 mb-5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono-numbers text-[11px] font-bold uppercase tracking-wider text-[#C29B7F]">
                    OFFICIAL DIGITAL PACKAGE
                  </span>
                  <span className="text-[11px] font-mono-numbers text-[#8E909B] bg-[#0E0F13] px-2 py-0.5 rounded border border-[#242733]">
                    INSTANT DELIVERY
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                  Before You Sign: Decision Kit
                </h3>
                <p className="text-xs text-[#8E909B] mt-1">
                  The comprehensive Notion guide by Bruno Diaz where all frameworks, counter-tactics, and decision tools sit.
                </p>
              </div>

              {/* Exact Deliverables Inventory */}
              <div className="space-y-3 mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#8E909B]">
                  What's Inside Your Instant Access:
                </div>

                <ul className="space-y-2.5 text-xs text-[#DFDFE3]">
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

                <div className="flex items-center justify-between text-[11px] text-[#8E909B] pt-1">
                  <span>🛡️ 30-Day Money-Back Guarantee</span>
                  <span className="text-[#DFDFE3]">Instant Read-Only Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI Strip below hero split (Mandatory Layout Math) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-[#242733]">
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
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C29B7F] font-heading font-mono-numbers">5 Mins</div>
            <div className="text-xs text-[#8E909B] mt-1 uppercase tracking-wider">Decision Audit Tool</div>
          </div>
        </div>
      </div>
    </section>
  );
};
