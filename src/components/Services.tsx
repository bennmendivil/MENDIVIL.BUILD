import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HardHat, BarChart2, Monitor, Microscope, Building, Cpu } from 'lucide-react';
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

  const ownersRepCard = {
    icon: 'Building',
    title: "OWNER'S REP",
    desc: isEs
      ? "Representación del dueño o desarrollador frente a contratistas, arquitectos y gobierno durante todas las etapas del proyecto."
      : "Owner representation before contractors, architects and authorities throughout all project phases.",
    bullets: isEs
      ? [
          "Supervisión de contratistas en nombre del cliente",
          "Revisión de contratos y estimaciones de obra",
          "Control de cambios y presupuesto del proyecto",
          "Coordinación con autoridades y gestión de permisos",
          "Reportes ejecutivos directos al dueño del proyecto"
        ]
      : [
          "Contractor supervision on behalf of the client",
          "Contract and estimate review",
          "Change order and budget control",
          "Authority coordination and permit management",
          "Executive reports directly to the project owner"
        ],
    cta: isEs ? "Hablemos de tu proyecto →" : "Let's talk about your project →",
    link: "#contact"
  };

  const aiCard = {
    icon: 'Cpu',
    title: isEs ? "IA APLICADA A CONSTRUCCIÓN" : "AI FOR CONSTRUCTION",
    desc: isEs
      ? "Automatizaciones, agentes de campo y visualización arquitectónica con inteligencia artificial para proyectos de construcción."
      : "Automations, field agents and architectural visualization with artificial intelligence for construction projects.",
    bullets: isEs
      ? [
          "Reportes automáticos generados desde fotos de obra",
          "Agentes de IA asistentes para Superintendentes y PMs",
          "Renders y videos con IA para licitaciones y ventas",
          "Automatización de RFIs, minutas y control de avance",
          "Herramientas personalizadas para tu proyecto"
        ]
      : [
          "Automatic reports generated from site photos",
          "AI field agents for Superintendents and PMs",
          "AI renders and videos for bids and sales",
          "RFI, minutes and progress control automation",
          "Custom tools built for your project"
        ],
    cta: isEs ? "Ver aplicaciones →" : "See applications →",
    link: "#lean" // Adjust link later if needed, assuming #lean for AI applications
  };

  const allCards = [...t.services.cards, gasaveCard, ownersRepCard, aiCard];

  const getIcon = (iconName: string, isGasave: boolean = false) => {
    const colorClass = isGasave ? "text-[#4A9FD4] mb-6" : "text-matteGold mb-6";
    switch (iconName) {
      case 'HardHat': return <HardHat size={32} className={colorClass} strokeWidth={1.5} />;
      case 'BarChart2': return <BarChart2 size={32} className={colorClass} strokeWidth={1.5} />;
      case 'Monitor': return <Monitor size={32} className={colorClass} strokeWidth={1.5} />;
      case 'Microscope': return <Microscope size={32} className={colorClass} strokeWidth={1.5} />;
      case 'Building': return <Building size={32} className={colorClass} strokeWidth={1.5} />;
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
                
                {isGasave || index === 4 || index === 5 ? (
                  <a href={(card as any).link} target={isGasave ? "_blank" : "_self"} rel={isGasave ? "noopener noreferrer" : undefined} className={`font-jetbrains text-sm transition-colors mt-auto inline-flex items-center group-hover:translate-x-1 duration-300 ${isGasave ? 'text-[#4A9FD4] hover:text-white' : 'text-matteGold hover:text-white'}`}>
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
