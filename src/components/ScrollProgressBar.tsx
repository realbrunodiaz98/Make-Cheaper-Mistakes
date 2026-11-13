import React, { useEffect, useRef } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const updateProgress = () => {
      rafId = null;
      const docEl = document.documentElement;
      const scrollTop = window.scrollY || docEl.scrollTop;
      const scrollableHeight = docEl.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min(1, Math.max(0, scrollTop / scrollableHeight))
          : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }

      if (containerRef.current) {
        const pct = Math.round(progress * 100);
        containerRef.current.setAttribute('aria-valuenow', String(pct));
        containerRef.current.classList.toggle('opacity-0', scrollTop <= 16);
        containerRef.current.classList.toggle('opacity-100', scrollTop > 16);
      }
    };

    const scheduleUpdate = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.documentElement);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      resizeObserver.disconnect();
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-[#242733]/60 pointer-events-none opacity-0 transition-opacity duration-300"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#C29B7F]/85 via-[#C29B7F] to-[#D4AF93] shadow-[0_0_10px_rgba(194,155,127,0.45)] will-change-transform"
      />
    </div>
  );
};
