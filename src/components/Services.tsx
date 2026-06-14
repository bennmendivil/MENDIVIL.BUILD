import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HardHat, BarChart2, Monitor, Microscope } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const isEs = language === 'ES';
  const containerRef = useIntersectionObserver({ threshold: 0.1 });

  const gasaveCard = {
    icon: 'Microscope',
    badge: isEs ? "ALIANZA GASAVE" : "GASAVE ALLIANCE",
    title: isEs ? "CONTROL DE CALIDAD" : "QUALITY CONTROL",
    desc: isEs 
      ? "Verificación de resistencia de concreto, mecánica de suelos y control de compactación en campo. En alianza con GASAVE Laboratorio, Torreón."
      : "Concrete strength verification, soil mechanics and field compaction control. In alliance with GASAVE Laboratory, Torreón.",
    bullets: isEs
      ? ["Resistencia de concreto (cilindros y núcleos)", "Mecánica de suelos y sondeos", "Control de compactación en campo", "Ensayes de materiales para infraestructura"]
      : ["Concrete strength testing", "Soil mechanics and borings", "Field compaction control", "Materials testing for infrastructure"],
    cta: isEs ? "Ver laboratorio →" : "Visit lab →",
    link: "https://gasavelaboratorio.com/"
  };

  const allCards = [...t.services.cards, gasaveCard];

  const getIcon = (iconName: string, isGasave: boolean = false) => {
    const colorClass = isGasave ? "text-[#4A9FD4] mb-6" : "text-matteGold mb-6";
    switch (iconName) {
      case 'HardHat': return <HardHat size={32} className={colorClass} strokeWidth={1.5} />;
      case 'BarChart2': return <BarChart2 size={32} className={colorClass} strokeWidth={1.5} />;
      case 'Monitor': return <Monitor size={32} className={colorClass} strokeWidth={1.5} />;
      case 'Microscope': return <Microscope size={32} className={colorClass} strokeWidth={1.5} />;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allCards.map((card, index) => {
            const isGasave = index === 3;
            return (
              <div 
                key={index} 
                className={`border-t-4 p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300 fade-in-section delay-${(index + 1) * 100} ${isGasave ? 'bg-[#1E4A6E] border-[#4A9FD4]' : 'bg-[#0F2236] border-matteGold'}`}
              >
                {/* Badge if exists */}
                {'badge' in card && (
                  <div className="mb-4">
                    <span className="inline-block bg-[#4A9FD4]/20 border border-[#4A9FD4]/50 rounded-[3px] py-[2px] px-[8px] font-jetbrains text-[#F0F0F0] text-[0.6rem] tracking-[2px] uppercase">
                      {(card as any).badge}
                    </span>
                  </div>
                )}
                
                {getIcon(card.icon, isGasave)}
                
                <h3 className="font-barlow font-bold text-2xl text-titaniumWhite uppercase mb-4">
                  {card.title}
                </h3>
                
                <p className="font-inter text-titaniumWhite/80 text-sm leading-relaxed mb-8 flex-grow">
                  {card.desc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`mr-2 mt-1 ${isGasave ? 'text-[#F0F0F0]' : 'text-electricBlue'}`}>▸</span>
                      <span className="font-inter text-sm text-concreteGray leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                {isGasave ? (
                  <a href={(card as any).link} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-sm text-[#4A9FD4] hover:text-white transition-colors mt-auto inline-flex items-center group-hover:translate-x-1 duration-300">
                    {card.cta}
                  </a>
                ) : (
                  <a href="#contact" className="font-jetbrains text-sm text-matteGold hover:text-white transition-colors mt-auto inline-flex items-center group-hover:translate-x-1 duration-300">
                    {card.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
