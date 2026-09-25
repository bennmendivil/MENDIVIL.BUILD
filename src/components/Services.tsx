import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, HardHat, BarChart2, Cpu } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.1 });

  const cleanCta = (text: string) => text.replace(/\s*→$/, '');

  const getIcon = (iconName: string) => {
    const colorClass = "text-matteGold mb-6";
    switch (iconName) {
      case 'HardHat': return <HardHat size={32} className={colorClass} strokeWidth={1.5} />;
      case 'BarChart2': return <BarChart2 size={32} className={colorClass} strokeWidth={1.5} />;
      case 'Cpu': return <Cpu size={32} className={colorClass} strokeWidth={1.5} />;
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
          {t.services.cards.map((card: any, index: number) => {
            return (
              <div 
                key={index} 
                className={`border-t-4 p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300 fade-in-section delay-${(index + 1) * 100} bg-[#0F2236] border-matteGold`}
              >
                {getIcon(card.icon)}
                
                <h3 className="font-barlow font-bold text-2xl text-titaniumWhite uppercase mb-1">
                  {card.title}
                </h3>
                
                {card.subtitle && (
                  <h4 className="font-jetbrains text-[#4A9FD4] text-xs uppercase tracking-wider mb-4">
                    {card.subtitle}
                  </h4>
                )}
                
                <p className="font-inter text-titaniumWhite/80 text-sm leading-relaxed mb-8 flex-grow">
                  {card.desc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {card.bullets.map((bullet: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1 text-electricBlue">▸</span>
                      <span className="font-inter text-sm text-concreteGray leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex flex-col items-start gap-3 w-full">
                  {/* Main CTA - Visually dominant */}
                  {card.mainCta && (
                    <a 
                      href={card.mainCta.link}
                      className="group/main inline-flex justify-center items-center w-full bg-matteGold text-deepBlack font-barlow font-bold text-[15px] tracking-wider py-3.5 px-6 hover:bg-white transition-colors uppercase"
                    >
                      {cleanCta(card.mainCta.text)}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/main:translate-x-1" />
                    </a>
                  )}
                  
                  {/* Secondary Links - Discrete */}
                  {card.secondaryLinks && card.secondaryLinks.map((secLink: any, idx: number) => (
                    <a 
                      key={idx}
                      href={secLink.link}
                      target={secLink.link.startsWith('http') ? '_blank' : '_self'}
                      rel={secLink.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group/sec inline-flex items-center text-[#5A8FA8] hover:text-[#4A9FD4] font-inter text-sm transition-colors mt-2"
                    >
                      {cleanCta(secLink.text)}
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-200 group-hover/sec:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
