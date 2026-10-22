import React from 'react';
import { CHECKOUT_URL } from '../data/content';
import { BookOpen, Smartphone, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const WhatsIncluded: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0C0E] border-b border-[#242733]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-2">
            <span>One Central Digital Product</span>
            <span aria-hidden="true">·</span>
            <span>Everything Inside</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            What You Get Inside "Before You Sign"
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8E909B] leading-relaxed">
            One central, read-only Notion guide containing the exact frameworks and embedded tools you need to stop making expensive decisions on autopilot.
          </p>
        </div>

        {/* Central Product Container: One Guide, Everything Inside */}
        <div className="bg-[#14161C] border-2 border-[#C29B7F]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header of Central Guide */}
          <div className="pb-6 border-b border-[#242733]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C29B7F]/15 border border-[#C29B7F]/30 flex items-center justify-center text-[#C29B7F] shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono-numbers font-bold text-[#C29B7F] bg-[#C29B7F]/10 px-2.5 py-0.5 rounded border border-[#C29B7F]/20 uppercase">
                  CENTRAL READ-ONLY NOTION GUIDE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                  Before You Sign: A Car Financing & Leasing Decision Guide
                </h3>
              </div>
            </div>
          </div>

          {/* 3 Core Components Grid */}
          <div className="mt-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E909B] mb-5">
              <Sparkles className="w-4 h-4 text-[#C29B7F]" />
              <span>Three Core Components Inside The Guide:</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Component 1: The Core Content (Inside The Guide) */}
              <div className="bg-[#0E0F13] border border-[#242733] rounded-xl p-6 flex flex-col justify-between hover:border-[#383C4D] transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-numbers text-[10px] font-bold text-[#C29B7F] tracking-wider uppercase bg-[#C29B7F]/10 px-2 py-0.5 rounded border border-[#C29B7F]/20">
                      The Core Content (Inside The Guide)
                    </span>
                    <BookOpen className="w-4 h-4 text-[#8E909B] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading mb-2.5">
                    The 6 Lessons & 7-Step Framework
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8E909B] leading-relaxed">
                    The unfiltered breakdown of the psychological traps that cost Bruno $69,000, seamlessly integrated with the 7-step 'Don't Decide Yet' framework. Built to force space between feeling an emotional urgency and signing away your money.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#242733] text-[11px] text-[#8E909B] flex items-center justify-between">
                  <span>Locked & Read-Only</span>
                  <span className="text-[#C29B7F] font-medium">Self-Correction Focus</span>
                </div>
              </div>

              {/* Component 2: Included Tool 01 */}
              <div className="bg-[#0E0F13] border border-[#242733] rounded-xl p-6 flex flex-col justify-between hover:border-[#383C4D] transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-numbers text-[10px] font-bold text-[#C29B7F] tracking-wider uppercase bg-[#C29B7F]/10 px-2 py-0.5 rounded border border-[#C29B7F]/20">
                      Included Tool 01
                    </span>
                    <Smartphone className="w-4 h-4 text-[#8E909B] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading mb-2.5">
                    The "Before I Say Yes" 5-Minute Decision Form
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8E909B] leading-relaxed">
                    An interactive tool embedded directly inside the guide. Use it on your phone to audit your actual carrying costs and stress-test your income before you sign. (Also includes a duplicatable Notion version you can save to your own personal workspace).
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#242733] text-[11px] text-[#8E909B] flex items-center justify-between">
                  <span>Embedded In Guide</span>
                  <span className="text-[#C29B7F] font-medium">Mobile Interactive Form</span>
                </div>
              </div>

              {/* Component 3: Included Tool 02 */}
              <div className="bg-[#0E0F13] border border-[#242733] rounded-xl p-6 flex flex-col justify-between hover:border-[#383C4D] transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-numbers text-[10px] font-bold text-[#C29B7F] tracking-wider uppercase bg-[#C29B7F]/10 px-2 py-0.5 rounded border border-[#C29B7F]/20">
                      Included Tool 02
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#8E909B] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading mb-2.5">
                    The Real Car Cost Calculator
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8E909B] leading-relaxed">
                    Access the custom calculator directly through the guide to run the hard math on financing vs. leasing, negative equity rollovers, and hidden fixed costs on the go.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#242733] text-[11px] text-[#8E909B] flex items-center justify-between">
                  <span>Embedded Companion Tool</span>
                  <a href="#calculator" className="text-[#C29B7F] hover:underline font-semibold">
                    Try on page ↓
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary Callout */}
          <div className="mt-8 pt-6 border-t border-[#242733] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#8E909B] text-center sm:text-left">
              <strong className="text-white">One central workspace.</strong> No fragmented files. Everything runs directly inside your read-only Notion guide.
            </p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-lg transition-colors font-heading shrink-0 shadow-md"
            >
              <span>Get Instant Access ($27)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="mt-16 bg-[#14161C] border border-[#242733] rounded-2xl p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-mono-numbers text-xs uppercase tracking-wider text-[#C29B7F] font-bold">
              SIMPLE 4-STEP PROCESS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
              How To Use This Before You Sign
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#0E0F13] border border-[#242733] rounded-xl">
              <span className="font-mono-numbers text-xs font-bold text-[#C29B7F]">
                STEP 01
              </span>
              <h4 className="text-sm font-bold text-white font-heading mt-1 mb-1.5">
                Instant Access ($27)
              </h4>
              <p className="text-xs text-[#8E909B] leading-relaxed">
                Secure one-time checkout via Whop. Receive instant access to open the locked, read-only Notion Guide.
              </p>
            </div>

            <div className="p-4 bg-[#0E0F13] border border-[#242733] rounded-xl">
              <span className="font-mono-numbers text-xs font-bold text-[#C29B7F]">
                STEP 02
              </span>
              <h4 className="text-sm font-bold text-white font-heading mt-1 mb-1.5">
                Absorb The Framework
              </h4>
              <p className="text-xs text-[#8E909B] leading-relaxed">
                Read through the 6 lessons and 7-step framework inside the guide to build personal accountability and pause emotional urgency.
              </p>
            </div>

            <div className="p-4 bg-[#0E0F13] border border-[#242733] rounded-xl">
              <span className="font-mono-numbers text-xs font-bold text-[#C29B7F]">
                STEP 03
              </span>
              <h4 className="text-sm font-bold text-white font-heading mt-1 mb-1.5">
                Run The Embedded Tools
              </h4>
              <p className="text-xs text-[#8E909B] leading-relaxed">
                Use the embedded "Before I Say Yes" 5-minute decision form and calculator directly inside the guide to stress-test your true carrying costs.
              </p>
            </div>

            <div className="p-4 bg-[#0E0F13] border border-[#242733] rounded-xl">
              <span className="font-mono-numbers text-xs font-bold text-[#C29B7F]">
                STEP 04
              </span>
              <h4 className="text-sm font-bold text-white font-heading mt-1 mb-1.5">
                Decide Deliberately
              </h4>
              <p className="text-xs text-[#8E909B] leading-relaxed">
                Buy, lease, choose a cheaper car, or wait. Whatever you choose, you make an intentional decision with complete clarity on your numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
