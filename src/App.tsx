/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { PromoBar } from './components/PromoBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CarTimeline } from './components/CarTimeline';
import { ProblemSection } from './components/ProblemSection';
import { Calculator } from './components/Calculator';
import { FrameworkSection } from './components/FrameworkSection';
import { WhatsIncluded } from './components/WhatsIncluded';
import { FounderStory } from './components/FounderStory';
import { ValueStack } from './components/ValueStack';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';
import { ImageModal } from './components/ImageModal';
import { CarTimelineItem } from './types';

export default function App() {
  const [selectedCar, setSelectedCar] = useState<CarTimelineItem | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    const sections = Array.from(
      container.querySelectorAll<HTMLElement>('[data-fade-section]')
    );

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        section.classList.add('is-visible');
      } else {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F5F5F7] flex flex-col selection:bg-[#C29B7F]/30 selection:text-[#F5F5F7]">
      {/* 1. Top Announcement Bar */}
      <PromoBar />

      {/* 2. Standard 3-Zone Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main ref={mainRef} className="flex-1 pb-16 sm:pb-0">
        {/* 3. Hero Section (immediately visible above the fold) */}
        <Hero />

        {/* 4. Documented Evidence: 5-Car Real Photo Timeline */}
        <div data-fade-section className="fade-in-section">
          <CarTimeline onSelectCar={(car) => setSelectedCar(car)} />
        </div>

        {/* 5. Core Problem: The 6 Expensive Traps */}
        <div data-fade-section className="fade-in-section">
          <ProblemSection />
        </div>

        {/* 6. Fully Interactive Real Car Cost Calculator */}
        <div data-fade-section className="fade-in-section">
          <Calculator />
        </div>

        {/* 7. The 7-Step "DON'T DECIDE YET" Framework Explorer */}
        <div data-fade-section className="fade-in-section">
          <FrameworkSection />
        </div>

        {/* 8. What's Included & 4-Step Process */}
        <div data-fade-section className="fade-in-section">
          <WhatsIncluded />
        </div>

        {/* 9. Founder Story & Transparent $69K Accounting */}
        <div data-fade-section className="fade-in-section">
          <FounderStory />
        </div>

        {/* 10. Value Stack & 30-Day Money-Back Guarantee */}
        <div data-fade-section className="fade-in-section">
          <ValueStack />
        </div>

        {/* 11. Frequently Asked Questions Accordion */}
        <div data-fade-section className="fade-in-section">
          <FaqSection />
        </div>

        {/* 12. Final High-Converting CTA */}
        <div data-fade-section className="fade-in-section">
          <FinalCta />
        </div>
      </main>

      {/* 13. Clean Footer */}
      <Footer />

      {/* 14. Mobile Sticky Bottom CTA Bar (< 15% viewport height) */}
      <MobileStickyCta />

      {/* Modals & Overlays */}
      <ImageModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
}
