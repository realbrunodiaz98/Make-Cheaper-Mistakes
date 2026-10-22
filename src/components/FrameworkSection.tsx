import React, { useState } from 'react';
import { SEVEN_FRAMEWORK_STEPS } from '../data/content';
import { CHECKOUT_URL } from '../data/content';
import { Check, ArrowRight, Quote, Lock } from 'lucide-react';

export const FrameworkSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = SEVEN_FRAMEWORK_STEPS[activeStepIndex];
  const isLocked = activeStepIndex >= 2;

  return (
    <section id="framework" className="py-16 sm:py-24 bg-[#0E0F13] border-b border-[#242733]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-2">
            <span>The Decision Circuit Breaker</span>
            <span aria-hidden="true">·</span>
            <span>7 Actionable Steps</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            The 7-Step “DON’T DECIDE YET” Framework
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8E909B] leading-relaxed">
            You don’t need an accounting degree or 47 formulas. You just need to create enough space between feeling the problem and committing your money.
          </p>
        </div>

        {/* Step Selector Pills / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {SEVEN_FRAMEWORK_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const stepLocked = idx >= 2;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-[#C29B7F] border-[#C29B7F] text-[#0B0C0E] shadow-md font-bold'
                    : 'bg-[#14161C] border-[#242733] text-[#8E909B] hover:text-white hover:border-[#383C4D]'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono-numbers opacity-80">
                  <span>STEP {step.number}</span>
                  {stepLocked && <Lock className="w-2.5 h-2.5 shrink-0" />}
                </div>
                <div className="text-xs sm:text-sm font-heading font-bold truncate mt-0.5">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="bg-[#14161C] border border-[#242733] rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {isLocked ? (
              /* Locked Member State for Steps 03-07 */
              <div className="space-y-5 max-w-2xl w-full">
                <div className="flex items-center gap-2">
                  <span className="font-mono-numbers text-xs font-bold text-[#E05252] bg-[#E05252]/10 px-2.5 py-1 rounded border border-[#E05252]/20 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    STEP {activeStep.number} OF 07
                  </span>
                  <span className="text-xs text-[#8E909B]">
                    Locked Section
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    🔒 {activeStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C29B7F] font-semibold mt-1">
                    This step is locked for non-members.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#0E0F13] border border-[#242733] rounded-xl text-sm sm:text-base text-[#DFDFE3] leading-relaxed">
                  You’ve stopped the emotional panic and identified the actual transportation problem. Now it’s time to run the hard math. Unlock the Before You Sign Decision Kit to access the rest of the 7-Step Framework, calculate your true monthly and annual costs with the interactive form inside, to ultimately make cheaper mistakes than I did
                </div>

                <div className="pt-2">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-xl transition-all shadow-md font-heading"
                  >
                    <span>Unlock The Complete Decision Kit ($27)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ) : (
              /* Unlocked State for Steps 01 & 02 */
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono-numbers text-xs font-bold text-[#C29B7F] bg-[#C29B7F]/10 px-2.5 py-1 rounded border border-[#C29B7F]/20">
                    STEP {activeStep.number} OF 07
                  </span>
                  <span className="text-xs text-[#8E909B]">
                    {activeStep.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {activeStep.title}
                </h3>

                {/* The Core Question */}
                <div className="p-4 sm:p-5 bg-[#0E0F13] border border-[#242733] rounded-xl">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-1">
                    The Specific Question To Ask:
                  </div>
                  <p className="text-base sm:text-lg font-medium text-white italic">
                    “{activeStep.question}”
                  </p>
                </div>

                {/* Why It Matters */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8E909B] mb-1.5">
                    Why This Step Is Essential For Self-Correction:
                  </h4>
                  <p className="text-sm sm:text-base text-[#DFDFE3] leading-relaxed">
                    {activeStep.whyItMatters}
                  </p>
                </div>

                {activeStep.quote && (
                  <div className="flex items-start gap-2.5 pt-2 text-xs sm:text-sm text-[#C29B7F]">
                    <Quote className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="font-semibold">{activeStep.quote}</span>
                  </div>
                )}
              </div>
            )}

            {/* Quick Progression Checklist */}
            <div className="w-full lg:w-72 bg-[#0E0F13] border border-[#242733] rounded-xl p-5 space-y-3 shrink-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8E909B] border-b border-[#242733] pb-2">
                Framework Sequence
              </div>
              <div className="space-y-2">
                {SEVEN_FRAMEWORK_STEPS.map((s, idx) => {
                  const isItemLocked = idx >= 2;
                  return (
                    <div
                      key={s.number}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`flex items-center justify-between text-xs p-2 rounded-lg cursor-pointer transition-colors ${
                        idx === activeStepIndex
                          ? 'bg-[#1C1E26] text-white font-bold border border-[#C29B7F]/40'
                          : 'text-[#8E909B] hover:text-white'
                      }`}
                    >
                      <span className="font-mono-numbers flex items-center gap-1.5 truncate">
                        <span>{s.number}. {s.title}</span>
                      </span>
                      {isItemLocked ? (
                        <Lock className="w-3 h-3 text-[#8E909B] shrink-0" />
                      ) : idx < activeStepIndex ? (
                        <Check className="w-3.5 h-3.5 text-[#48BB78] shrink-0" />
                      ) : idx === activeStepIndex ? (
                        <span className="w-2 h-2 rounded-full bg-[#C29B7F] shrink-0" />
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#242733]">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-lg transition-colors font-heading text-center"
                >
                  <span>Stop Guessing. Unlock The Framework ➔</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
