import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HardHat, BarChart2, Monitor } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const isEs = language === 'ES';
  const containerRef = useIntersectionObserver({ threshold: 0.1 });

  const gasave = {
    badge: isEs ? "ALIANZA GASAVE" : "GASAVE ALLIANCE",
    title: isEs ? "Control de Calidad y Mecánica de Suelos" : "Quality Control & Soil Mechanics",
    subtitle: isEs ? "En alianza con GASAVE Laboratorio · Torreón, Coahuila" : "In alliance with GASAVE Laboratory · Torreón, Coahuila",
    desc: isEs 
      ? "Servicios especializados de laboratorio para verificación de resistencia de concreto, estudios de mecánica de suelos, control de compactación en campo y ensayes de materiales para proyectos industriales y de infraestructura."
      : "Specialized laboratory services for concrete strength verification, soil mechanics studies, field compaction control, and materials testing for industrial and infrastructure projects.",
    cta: isEs ? "Ver laboratorio →" : "Visit lab →"
  };

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

        {/* Gasave Alliance Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#2A2A2A] rounded-[8px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 fade-in-section delay-400 group hover:-translate-y-2 transition-transform duration-300">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-[#4A9FD4]/15 border border-[#4A9FD4]/40 rounded-[3px] py-[3px] px-[10px] mb-4">
              <span className="font-jetbrains text-[#4A9FD4] text-[0.6rem] tracking-[3px] uppercase">
                {gasave.badge}
              </span>
            </div>
            <h3 className="font-barlow font-bold text-2xl md:text-3xl text-titaniumWhite uppercase mb-2">
              {gasave.title}
            </h3>
            <p className="font-inter italic text-[#4A9FD4] text-sm md:text-base mb-4">
              {gasave.subtitle}
            </p>
            <p className="font-inter text-titaniumWhite/80 text-sm md:text-base leading-relaxed">
              {gasave.desc}
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a 
              href="https://gasavelaboratorio.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#4A9FD4] text-[#4A9FD4] font-barlow font-bold text-[1rem] py-[12px] px-[24px] rounded-[6px] hover:bg-[#4A9FD4] hover:text-[#0E0E0E] transition-all duration-300 uppercase tracking-wide whitespace-nowrap"
            >
              {gasave.cta}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
