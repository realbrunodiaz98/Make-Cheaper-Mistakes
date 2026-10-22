import React from 'react';
import { CHECKOUT_URL } from '../data/content';
import { ArrowUpRight, Shield, Check, Lock } from 'lucide-react';

export const ValueStack: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0C0E] border-b border-[#242733]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-2">
            <span>Value Breakdown</span>
            <span aria-hidden="true">·</span>
            <span>Zero Subscription</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            The Complete Decision Kit
          </h2>
          <p className="mt-3 text-sm text-[#8E909B]">
            Compare what you receive against what one single hasty financing mistake costs:
          </p>
        </div>

        {/* Stack Card */}
        <div className="bg-[#14161C] border border-[#242733] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 py-3 border-b border-[#242733] text-sm">
              <Check className="w-4 h-4 text-[#48BB78] shrink-0" />
              <span className="text-white font-medium">The Complete &apos;Before You Sign&apos; Notion Guide</span>
            </div>

            <div className="flex items-center gap-3 py-3 border-b border-[#242733] text-sm">
              <Check className="w-4 h-4 text-[#48BB78] shrink-0" />
              <span className="text-white font-medium">The 6 Lessons &amp; 7-Step Framework (Inside the Guide)</span>
            </div>

            <div className="flex items-center gap-3 py-3 border-b border-[#242733] text-sm">
              <Check className="w-4 h-4 text-[#48BB78] shrink-0" />
              <span className="text-white font-medium">The &apos;Before I Say Yes&apos; Interactive Form (Embedded)</span>
            </div>

            <div className="flex items-center gap-3 py-3 border-b border-[#242733] text-sm">
              <Check className="w-4 h-4 text-[#48BB78] shrink-0" />
              <span className="text-white font-medium">The Real Car Cost Calculator (Embedded)</span>
            </div>
          </div>

          {/* Pricing Area */}
          <div className="pt-4 border-t-2 border-[#242733] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm text-[#8E909B]">
              Cost of a rushed car contract: <span className="text-[#E05252] font-semibold font-mono-numbers">$10,000+</span> and years of constant pain.
            </div>

            <div className="flex items-baseline gap-2 sm:justify-end">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#C29B7F] font-heading font-mono-numbers">
                $27
              </span>
              <span className="text-xs text-[#C29B7F] font-bold">One-Time</span>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-2">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 text-base font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-xl transition-all shadow-[0_4px_24px_rgba(194,155,127,0.25)] font-heading"
            >
              <span>Get Instant Access To The Guide — $27</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-[#8E909B] mt-2.5">
              <Lock className="w-3.5 h-3.5 text-[#C29B7F]" />
              <span>Instant digital access · 256-bit encrypted checkout via Whop · Lifetime updates</span>
            </div>
          </div>
        </div>

        {/* 30-Day Money-Back Guarantee Card */}
        <div className="mt-8 bg-[#121316] border border-[#C29B7F]/30 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-lg">
          <div className="w-12 h-12 rounded-full bg-[#C29B7F]/10 border border-[#C29B7F]/30 flex items-center justify-center text-[#C29B7F] mx-auto mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
            The 30-Day “Cheaper Mistakes” Guarantee
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#8E909B] leading-relaxed max-w-lg mx-auto">
            Read the guide. Use the framework. Try the decision tool on a real vehicle deal. If you genuinely don’t think it was worth the $27, message me within 30 days and I will refund you in full.
          </p>
          <p className="mt-3 text-xs font-semibold text-white">
            No hoops. No convincing me. No hard feelings.
          </p>
        </div>
      </div>
    </section>
  );
};
