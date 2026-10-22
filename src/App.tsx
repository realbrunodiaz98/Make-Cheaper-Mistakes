/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F5F5F7] flex flex-col selection:bg-[#C29B7F]/30 selection:text-[#F5F5F7]">
      {/* 1. Top Announcement Bar */}
      <PromoBar />

      {/* 2. Standard 3-Zone Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Documented Evidence: 5-Car Real Photo Timeline */}
        <CarTimeline onSelectCar={(car) => setSelectedCar(car)} />

        {/* 5. Core Problem: The 6 Expensive Traps */}
        <ProblemSection />

        {/* 6. Fully Interactive Real Car Cost Calculator */}
        <Calculator />

        {/* 7. The 7-Step "DON'T DECIDE YET" Framework Explorer */}
        <FrameworkSection />

        {/* 8. What's Included & 4-Step Process */}
        <WhatsIncluded />

        {/* 9. Founder Story & Transparent $69K Accounting */}
        <FounderStory />

        {/* 10. Value Stack & 30-Day Money-Back Guarantee */}
        <ValueStack />

        {/* 11. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 12. Final High-Converting CTA */}
        <FinalCta />
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
