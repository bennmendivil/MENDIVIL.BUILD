import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HardHat, BarChart2, Monitor } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.1 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardHat': return <HardHat size={32} className="text-matteGold mb-6" strokeWidth={1.5} />;
      case 'BarChart2': return <BarChart2 size={32} className="text-matteGold mb-6" strokeWidth={1.5} />;
      case 'Monitor': return <Monitor size={32} className="text-matteGold mb-6" strokeWidth={1.5} />;
      default: return null;
    }
  };

  return (
    <section id="services" className="py-24 bg-deepBlack">
      <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
        
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite tracking-wide uppercase">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.cards.map((card, index) => (
            <div 
              key={index} 
              className={`bg-[#0F2236] border-t-4 border-matteGold p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300 fade-in-section delay-${(index + 1) * 100}`}
            >
              {getIcon(card.icon)}
              
              <h3 className="font-barlow font-bold text-2xl text-titaniumWhite uppercase mb-4">
                {card.title}
              </h3>
              
              <p className="font-inter text-titaniumWhite/80 text-sm leading-relaxed mb-8 flex-grow">
                {card.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {card.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-electricBlue mr-2 mt-1">▸</span>
                    <span className="font-inter text-sm text-concreteGray leading-tight">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="font-jetbrains text-sm text-matteGold hover:text-white transition-colors mt-auto inline-flex items-center group-hover:translate-x-1 duration-300">
                {card.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
