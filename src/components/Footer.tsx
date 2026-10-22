import React from 'react';
import { CHECKOUT_URL } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#08090B] text-[#5C5E68] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#242733]/60">
          <div>
            <span className="text-base font-bold text-white font-heading tracking-tight block">
              Make Cheaper Mistakes
            </span>
            <span className="text-[11px] text-[#8E909B]">
              A practical car decision guide by Bruno Diaz
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-[#8E909B]">
            <a href="#story" className="hover:text-white transition-colors">
              Story
            </a>
            <a href="#traps" className="hover:text-white transition-colors">
              The 6 Traps
            </a>
            <a href="#calculator" className="hover:text-white transition-colors">
              Calculator
            </a>
            <a href="#framework" className="hover:text-white transition-colors">
              Framework
            </a>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="text-[#C29B7F] hover:underline">
              Whop Checkout ($27)
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Make Cheaper Mistakes Than I Did. All rights reserved.</p>
          <p className="max-w-xl text-[11px] text-[#5C5E68] leading-normal">
            Disclaimer: This publication and accompanying software tools are created solely for educational and decision-audit purposes and do not constitute certified financial, tax, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};
