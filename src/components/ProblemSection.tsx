import React from 'react';
import { SIX_EXPENSIVE_TRAPS } from '../data/content';
import { HelpCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="traps" className="py-16 sm:py-24 bg-[#0B0C0E] border-b border-[#242733]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-2">
            <span>The Psychological Trap</span>
            <span aria-hidden="true">·</span>
            <span>6 Expensive Lessons</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Dealers Sell The Payment.<br className="hidden sm:inline" /> You Pay The Whole Iceberg.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8E909B] leading-relaxed">
            The automotive sales system is engineered to isolate a single number: “What monthly payment fits your budget?” Here are the 6 structural traps that happen when you decide on autopilot:
          </p>
        </div>

        {/* 6 Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIX_EXPENSIVE_TRAPS.map((lesson) => (
            <div
              key={lesson.number}
              className="bg-[#14161C] border border-[#242733] rounded-xl p-6 flex flex-col justify-between hover:border-[#383C4D] transition-colors"
            >
              <div>
                <span className="font-mono-numbers text-xs font-bold text-[#C29B7F] tracking-wider block mb-2">
                  LESSON {lesson.number}
                </span>
                <h3 className="text-lg font-bold text-white font-heading mb-1.5">
                  {lesson.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E909B] leading-relaxed mb-6">
                  {lesson.subtitle}
                </p>
              </div>

              {/* Practical Check Question */}
              <div className="pt-3 border-t border-[#242733] bg-[#0E0F13]/60 -mx-6 -mb-6 p-4 rounded-b-xl">
                <div className="flex items-start gap-2 text-xs text-[#DFDFE3]">
                  <HelpCircle className="w-4 h-4 text-[#C29B7F] shrink-0 mt-0.5" />
                  <p className="italic">
                    <span className="font-semibold text-white not-italic">Ask yourself: </span>
                    “{lesson.question}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophical Quote Box */}
        <div className="mt-12 bg-[#14161C] border border-[#242733] rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-lg">
          <p className="text-lg sm:text-2xl font-bold text-white font-heading leading-snug">
            “Small expenses are visible. Fixed costs quietly own your future.”
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[#8E909B] max-w-xl mx-auto">
            Cutting $5 lattes does not fix an $800/month structural transportation leak. Before signing a legal financing note, stress-test the real math below.
          </p>
        </div>
      </div>
    </section>
  );
};
