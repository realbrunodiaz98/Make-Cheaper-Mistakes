import React from 'react';

export const FounderStory: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0E0F13] border-b border-[#242733]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#14161C] border border-[#242733] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F]">
            <span>Raw Transparency</span>
            <span aria-hidden="true">·</span>
            <span>Why This Guide Exists</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
            I’m Not A Financial Advisor.<br />
            I’m Someone Who Learned This The Expensive Way.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#DFDFE3] leading-relaxed">
            <p>
              When I arrived in Los Angeles, I was living on $2,000 a month from food deliveries. My uncle gave me his older BMW 530i, but after spending $2,000 on repairs, I traded it for a new Kia Niro at $467/month. That emotional choice set off a harsh chain reaction.
            </p>

            <p>
              Six months later, that car was totaled. Needing wheels for work, I financed another Niro for $732/month. When major defects left it in the shop, I felt furious and overwhelmed. To escape, I leased a Tesla Model 3 for $600/month.
            </p>

            <p>
              To avoid penalties for the abandoned Kia, a friend helped me roll the negative equity into a Kia Forte for $650/month. For almost a year, I had two cars and all their costs.
            </p>

            <p>
              Eventually, the financial burden crushed me. I gave up the Forte, breaking my friend&apos;s trust. But the struggle didn’t end. I kept the Tesla, facing a constant $1,000/month cost while I cycled through four jobs and my income fluctuated over two years. That monthly drain slowly suffocated me. I made my last payment in April 2026, but I got laid off the next day and decided to move back home broke. The Tesla was repossessed in August. I never reached the finish line because the 36-month lease ended in September 2026.
            </p>
          </div>

          {/* Hard Cost Accounting Table */}
          <div className="mt-6 pt-6 border-t border-[#242733]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8E909B] mb-3">
              Where The $69,000 Actually Went Over 4½ Years:
            </h3>

            <div className="bg-[#0E0F13] border border-[#242733] rounded-xl overflow-hidden text-xs">
              <div className="flex justify-between p-3 border-b border-[#242733]/60">
                <span className="text-[#DFDFE3]">Down Payments & Upfront Drive-Off Cash</span>
                <span className="font-mono-numbers font-semibold text-white">~$6,500</span>
              </div>
              <div className="flex justify-between p-3 border-b border-[#242733]/60">
                <span className="text-[#DFDFE3]">Monthly Loan & Lease Payments (5 cars over 54 months)</span>
                <span className="font-mono-numbers font-semibold text-white">~$34,200</span>
              </div>
              <div className="flex justify-between p-3 border-b border-[#242733]/60">
                <span className="text-[#DFDFE3]">Auto Insurance (LA full coverage, carrying two cars at once)</span>
                <span className="font-mono-numbers font-semibold text-white">~$14,800</span>
              </div>
              <div className="flex justify-between p-3 border-b border-[#242733]/60">
                <span className="text-[#DFDFE3]">Fuel, Tesla Supercharging, & DMV Annual Registrations</span>
                <span className="font-mono-numbers font-semibold text-white">~$8,400</span>
              </div>
              <div className="flex justify-between p-3 border-b border-[#242733]/60">
                <span className="text-[#DFDFE3]">Negative Equity Rollover & Surrender Loss</span>
                <span className="font-mono-numbers font-semibold text-white">~$5,100</span>
              </div>
              <div className="flex justify-between p-3 bg-[#C29B7F]/10 text-[#C29B7F] font-bold">
                <span>Grand Total Spent Across 4.5 Years</span>
                <span className="font-mono-numbers text-sm text-white">~$69,000 (0 Cars Owned)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-sm sm:text-base text-[#DFDFE3] leading-relaxed">
            <p>
              I can’t go back to LA and get my $69,000 back. But I can make sure the experience doesn’t end there.
            </p>
            <p className="mt-2 font-bold text-white text-base sm:text-lg font-heading">
              You don’t need to make perfect financial decisions. You just need to make cheaper mistakes than I did.
            </p>
          </div>

          {/* Signature Block */}
          <div className="pt-4 border-t border-[#242733] flex items-center justify-between text-xs text-[#8E909B]">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Headshot__c92a8902.png"
                alt="Bruno Diaz"
                className="w-11 h-11 rounded-full object-cover border-2 border-[#C29B7F]/40 shadow-md shrink-0"
              />
              <div>
                <strong className="text-white block font-heading text-sm">Bruno Diaz</strong>
                <span>Creator, <em>Make Cheaper Mistakes Than I Did</em></span>
              </div>
            </div>
            <span className="text-[#C29B7F] font-mono-numbers">Los Angeles, 2022-2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
