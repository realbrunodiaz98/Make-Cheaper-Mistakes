import React, { useState } from 'react';
import { CHECKOUT_URL } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0C0E]/95 backdrop-blur-md border-b border-[#242733]">
      <div className="max-w-6xl mx-auto mobile-container-pad flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Zone 1: Wordmark brand, single text element */}
        <a
          href="#"
          className="text-base sm:text-xl font-bold tracking-tight text-white whitespace-nowrap min-w-0 truncate font-heading hover:text-[#C29B7F] transition-colors"
        >
          Make Cheaper Mistakes
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#8E909B]">
          <a
            href="#story"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            The $69K Story
          </a>
          <a
            href="#traps"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            The 6 Lessons
          </a>
          <a
            href="#calculator"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Real-Cost Calculator
          </a>
          <a
            href="#framework"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            7-Step Framework
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 sm:p-2 text-[#8E909B] hover:text-white transition-colors shrink-0"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121316] border-b border-[#242733] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <a
            href="#story"
            onClick={closeMenu}
            className="block py-2 text-sm font-medium text-[#8E909B] hover:text-white"
          >
            The $69K Story
          </a>
          <a
            href="#traps"
            onClick={closeMenu}
            className="block py-2 text-sm font-medium text-[#8E909B] hover:text-white"
          >
            The 6 Lessons
          </a>
          <a
            href="#calculator"
            onClick={closeMenu}
            className="block py-2 text-sm font-medium text-[#8E909B] hover:text-white"
          >
            Real-Cost Calculator
          </a>
          <a
            href="#framework"
            onClick={closeMenu}
            className="block py-2 text-sm font-medium text-[#8E909B] hover:text-white"
          >
            7-Step Framework
          </a>
          <a
            href="#faq"
            onClick={closeMenu}
            className="block py-2 text-sm font-medium text-[#8E909B] hover:text-white"
          >
            FAQ
          </a>
          <div className="pt-2 border-t border-[#242733]">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-[#0B0C0E] bg-[#C29B7F] rounded-lg"
            >
              <span>Instant Access — $27</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
