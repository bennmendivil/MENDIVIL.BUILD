import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LeanAI: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="lean-ai" className="py-24 bg-steelBlue">
      <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
        
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite tracking-wide uppercase">
            {t.leanai.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Column: Tech Stack */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-4 font-jetbrains text-sm md:text-base">
              {t.leanai.stack.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex justify-between items-center border-b border-titaniumWhite/10 pb-2 fade-in-section delay-${(index + 1) * 100}`}
                >
                  <span className="text-electricBlue font-bold group-hover:text-glow transition-all">
                    &gt; {item.name}
                  </span>
                  <span className="text-concreteGray text-right">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Phrase and Pills */}
          <div className="w-full md:w-1/2 fade-in-section delay-300">
            <h3 className="font-barlow font-bold text-3xl md:text-[3rem] leading-tight text-titaniumWhite mb-6">
              {t.leanai.phrase}
            </h3>
            
            <p className="font-inter text-titaniumWhite/80 text-lg leading-relaxed mb-10">
              {t.leanai.paragraph}
            </p>

            <div className="flex flex-wrap gap-4">
              {t.leanai.pills.map((pill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-deepBlack/50 text-matteGold border border-matteGold/30 font-jetbrains text-sm rounded-full backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LeanAI;
