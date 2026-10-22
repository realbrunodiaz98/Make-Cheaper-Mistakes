import React from 'react';
import { CarTimelineItem } from '../types';
import { X, AlertTriangle, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/content';

interface ImageModalProps {
  car: CarTimelineItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#14161C] border border-[#242733] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#0E0F13] text-[#8E909B] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Photo preview */}
        <div className="relative aspect-[16/10] bg-[#0E0F13] rounded-xl overflow-hidden border border-[#242733] mb-5">
          <img
            src={car.imageSrc}
            alt={car.altText}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fallbackTried) {
                img.dataset.fallbackTried = '1';
                if (img.src.endsWith('.jpg')) {
                  img.src = img.src.replace(/\.jpg$/, '.JPG');
                } else if (img.src.endsWith('.JPG')) {
                  img.src = img.src.replace(/\.JPG$/, '.jpg');
                }
              }
            }}
          />
          <div className="absolute top-3 left-3">
            <span className="font-mono-numbers text-xs font-semibold px-2.5 py-1 bg-black/80 backdrop-blur-md text-[#C29B7F] rounded border border-[#242733]">
              {car.step} · {car.year}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              {car.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#C29B7F] font-medium mt-0.5">
              {car.subtitle}
            </p>
          </div>

          <div className="p-3.5 bg-[#E05252]/10 border border-[#E05252]/30 rounded-xl flex items-center justify-between text-xs font-mono-numbers">
            <span className="text-[#E05252] font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Financial Impact:</span>
            </span>
            <span className="text-white font-bold">{car.monthlyImpact}</span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-[#DFDFE3] leading-relaxed">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider text-[#8E909B]">
              The Unfiltered Reality:
            </h4>
            <p>{car.fullStory}</p>
          </div>

          <div className="p-4 bg-[#0E0F13] border border-[#242733] rounded-xl text-xs sm:text-sm text-[#C29B7F] leading-relaxed">
            <strong className="block text-white mb-1">Key Takeaway for You:</strong>
            {car.hardLesson}
          </div>

          <div className="pt-3 border-t border-[#242733] flex items-center justify-between">
            <span className="text-xs text-[#8E909B]">Before You Sign Guide</span>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0B0C0E] bg-[#C29B7F] hover:bg-[#D4AF93] rounded-lg transition-colors font-heading"
            >
              <span>Get The Full Toolkit ($27)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
