import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Counter: React.FC<{ valueString: string }> = ({ valueString }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const match = valueString.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : '';
  const end = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : valueString;
  const duration = 2000;

  useEffect(() => {
    if (!match) return; // if it's just a string without numbers, don't animate

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated, match]);

  if (!match) {
    return <span>{valueString}</span>;
  }

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Stats: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="bg-steelBlue py-12 relative z-20">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          
          <div className="flex flex-col items-center md:items-start fade-in-section">
            <span className="font-barlow font-bold text-5xl md:text-6xl text-matteGold mb-2 tracking-tight">
              <Counter valueString={t.stats.yoeValue} />
            </span>
            <span className="font-inter text-sm md:text-base text-concreteGray uppercase tracking-wider text-center md:text-left">
              {t.stats.yoeLabel}
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start fade-in-section delay-100">
            <span className="font-barlow font-bold text-5xl md:text-6xl text-matteGold mb-2 tracking-tight">
              <Counter valueString={t.stats.budgetValue} />
            </span>
            <span className="font-inter text-sm md:text-base text-concreteGray uppercase tracking-wider text-center md:text-left">
              {t.stats.budgetLabel}
            </span>
            {/* Note text added for the budget */}
            {(t.stats as any).budgetNote && (
              <span className="font-jetbrains text-[0.55rem] text-concreteGray text-center md:text-left mt-1 max-w-[150px] md:max-w-none whitespace-pre-line">
                {(t.stats as any).budgetNote}
              </span>
            )}
          </div>

          <div className="flex flex-col items-center md:items-start fade-in-section delay-200">
            <span className="font-barlow font-bold text-5xl md:text-6xl text-matteGold mb-2 tracking-tight">
              <Counter valueString={t.stats.statesValue} />
            </span>
            <span className="font-inter text-sm md:text-base text-concreteGray uppercase tracking-wider text-center md:text-left">
              {t.stats.statesLabel}
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start fade-in-section delay-300">
            <span className="font-barlow font-bold text-5xl md:text-6xl text-matteGold mb-2 tracking-tight">
              <Counter valueString={t.stats.sectorsValue} />
            </span>
            <span className="font-inter text-sm md:text-base text-concreteGray uppercase tracking-wider text-center md:text-left">
              {t.stats.sectorsLabel}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
