import React from 'react';
import { CAR_TIMELINE } from '../data/content';
import { CarTimelineItem } from '../types';
import { Eye, AlertTriangle } from 'lucide-react';

interface CarTimelineProps {
  onSelectCar: (car: CarTimelineItem) => void;
}

export const CarTimeline: React.FC<CarTimelineProps> = ({ onSelectCar }) => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#0E0F13] border-b border-[#242733]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C29B7F] mb-2">
            <span>Documented Evidence</span>
            <span aria-hidden="true">·</span>
            <span>Unfiltered Case Study</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            5 Cars. 4½ Years. Zero Remaining.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8E909B] leading-relaxed">
            This isn’t theory from an armchair personal finance blogger. This guide was born from an actual compounding cascade of car commitments in Los Angeles.
          </p>
        </div>

        {/* 6-Card Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAR_TIMELINE.map((car) => (
            <article
              key={car.id}
              className="bg-[#14161C] border border-[#242733] hover:border-[#383C4D] rounded-xl overflow-hidden flex flex-col transition-all duration-200 group"
            >
              {/* Photo Box */}
              <div className="relative aspect-[16/10] bg-[#0B0C0E] overflow-hidden border-b border-[#242733]">
                <img
                  src={car.imageSrc}
                  alt={car.altText}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono-numbers text-xs font-semibold px-2 py-1 bg-black/80 backdrop-blur-md text-[#C29B7F] rounded border border-[#242733]">
                    {car.step} · {car.year}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectCar(car)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-[2px]"
                >
                  <Eye className="w-4 h-4 text-[#C29B7F]" />
                  <span>Inspect Story & Numbers</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                    {car.title}
                  </h3>

                  {car.bullets && car.bullets.length > 0 ? (
                    <div className="space-y-2.5 mt-3 pt-3 border-t border-[#242733]/80 text-xs">
                      {car.bullets.map((b, idx) => {
                        const isRed =
                          b.label === 'The Trap' ||
                          b.label === 'The Mistake' ||
                          b.label === 'The Reality';
                        const isAccent =
                          b.label === 'Takeaway' ||
                          b.label === 'The Result';

                        return (
                          <div key={idx} className="leading-snug">
                            <span
                              className={`font-semibold ${
                                isRed
                                  ? 'text-[#E05252]'
                                  : isAccent
                                  ? 'text-[#C29B7F]'
                                  : 'text-[#DFDFE3]'
                              }`}
                            >
                              {b.label}:
                            </span>{' '}
                            <span className="text-[#A1A3AF]">{b.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-[#8E909B] leading-relaxed mt-2.5">
                      {car.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-[#242733] flex items-center justify-between text-xs font-mono-numbers">
                  <span className="text-[#E05252] font-semibold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {car.costBadge}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectCar(car)}
                    className="text-[#8E909B] group-hover:text-white transition-colors underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>Full story</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Narrative Callout Bar */}
        <div className="mt-10 bg-[#121316] border border-dashed border-[#242733] rounded-xl p-5 sm:p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-[#DFDFE3]">
            <strong className="text-white">The Pattern:</strong> Each decision felt like the only reasonable solution to an immediate crisis. But every escape decision generated a larger, more unyielding fixed commitment until the total reached $69,000.
          </p>
        </div>
      </div>
    </section>
  );
};
