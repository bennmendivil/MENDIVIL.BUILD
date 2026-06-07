import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, BarChart2, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LeanConstruction: React.FC = () => {
  const { language } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.1 });

  const isEs = language === 'ES';

  const t = {
    title: isEs ? "LEAN CONSTRUCTION EN CAMPO REAL" : "LEAN CONSTRUCTION IN THE REAL FIELD",
    subtitle: isEs ? "No en el salón de clases.\nEn obra. Con resultados medibles." : "Not in the classroom.\nOn site. With measurable results.",
    badge: isEs ? "4 AÑOS DE IMPLEMENTACIÓN REAL" : "4 YEARS OF REAL IMPLEMENTATION",
    paragraph: isEs 
      ? "Implementé Last Planner® System y metodología Lean Edge en proyectos industriales de clase mundial durante 4 años consecutivos, coordinando contratistas, superintendentes y equipos multidisciplinarios en proyectos con presupuestos de hasta $75.9M USD."
      : "I implemented Last Planner® System and Lean Edge methodology in world-class industrial projects for 4 consecutive years, coordinating contractors, superintendents and multidisciplinary teams in projects with budgets of up to $75.9M USD.",
    metrics: [
      {
        num: "+85%",
        desc: isEs ? "PPC promedio en mis obras" : "Average PPC on my projects"
      },
      {
        num: "4 años",
        desc: isEs ? "Implementación continua en campo" : "Continuous field implementation"
      },
      {
        num: "daily",
        desc: isEs ? "Huddles en tablero LPS" : "LPS board huddles"
      },
      {
        num: "$75.9M",
        desc: isEs ? "USD en proyectos con Lean activo" : "USD in projects with active Lean"
      }
    ],
    includesTitle: isEs ? "¿QUÉ INCLUYE LA CONSULTORÍA?" : "WHAT DOES THE CONSULTATION INCLUDE?",
    includes: [
      {
        icon: <Users className="text-[#4A9FD4]" size={32} />,
        title: isEs ? "DIAGNÓSTICO INICIAL" : "INITIAL DIAGNOSIS",
        desc: isEs 
          ? "Evaluación del estado actual de planificación y ejecución en obra. Identificación de desperdicios, restricciones y oportunidades de mejora en tu proyecto." 
          : "Assessment of current planning and execution status on site. Identification of waste, constraints and improvement opportunities in your project."
      },
      {
        icon: <BarChart2 className="text-[#4A9FD4]" size={32} />,
        title: isEs ? "IMPLEMENTACIÓN EN CAMPO" : "FIELD IMPLEMENTATION",
        desc: isEs
          ? "Instalación del tablero LPS, arranque de daily huddles, Pull Plan por edificio o frente de trabajo, capacitación al equipo de obra con dinámica presencial."
          : "LPS board setup, daily huddle kickoff, Pull Plan per building or work front, on-site team training with hands-on dynamics."
      },
      {
        icon: <TrendingUp className="text-[#4A9FD4]" size={32} />,
        title: isEs ? "SEGUIMIENTO Y MÉTRICAS" : "MONITORING AND METRICS",
        desc: isEs
          ? "Seguimiento semanal de PPC, análisis de varianzas, reuniones LPS con contratistas y reporte mensual de desempeño al cliente."
          : "Weekly PPC tracking, variance analysis, LPS meetings with contractors and monthly performance report to client."
      }
    ],
    pricingTitle: isEs ? "INVERSIÓN" : "INVESTMENT",
    pill1Label: isEs ? "Cobro inicial por proyecto" : "Initial project fee",
    pill1Value: "Desde $35,000 MXN",
    pill2Label: isEs ? "Contrato mensual" : "Monthly retainer",
    pill2Value: "Desde $24,000 MXN/mes",
    pricingNote: isEs ? "Presencial en México · Remoto disponible para capacitaciones" : "On-site in Mexico · Remote available for training sessions",
    cta: isEs ? "AGENDA UNA LLAMADA →" : "SCHEDULE A CALL →"
  };

  const images = [
    '/lean-tablero-01.jpg',
    '/lean-tablero-02.jpg',
    '/lean-touchplan-01.jpg',
    '/lean-ppc-01.jpg',
    '/lean-tablero-03.jpg'
  ];

  return (
    <section id="lean-construction" className="py-24 bg-[#0E0E0E] relative w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left fade-in-section">
          <h2 className="font-barlow font-black text-[2.5rem] text-[#F0F0F0] uppercase tracking-wide leading-tight">
            {t.title}
          </h2>
          <p className="font-inter italic text-[#4A9FD4] text-[1.1rem] mt-2 mb-[32px] whitespace-pre-line">
            {t.subtitle}
          </p>
        </div>

        {/* Top Block - 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 fade-in-section delay-100">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col items-start">
            <div className="bg-[#4A9FD4]/10 border border-[#4A9FD4]/30 rounded-[4px] py-[4px] px-[12px] mb-[16px]">
              <span className="font-jetbrains text-[#4A9FD4] text-[0.65rem] tracking-[3px] uppercase">
                {t.badge}
              </span>
            </div>
            <p className="font-inter text-[#5A8FA8] text-[0.95rem] leading-[1.8] mb-[24px]">
              {t.paragraph}
            </p>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {t.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#2A2A2A] rounded-[6px] p-[16px] border-t-[2px] border-[#4A9FD4]">
                  <div className="font-barlow font-bold text-[#F0F0F0] text-2xl md:text-3xl mb-1">{m.num}</div>
                  <div className="font-inter text-[#5A8FA8] text-sm leading-tight">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Gallery */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-[8px]">
              {/* Main Photo - Full Width */}
              <div className="col-span-2 group relative overflow-hidden rounded-[6px] cursor-pointer">
                <img 
                  src="/lean-huddle-01.jpg" 
                  alt="Lean Huddle" 
                  className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[#4A9FD4]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Remaining Photos */}
              {images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-[6px] cursor-pointer">
                  <img 
                    src={img} 
                    alt={`Lean photo ${idx + 1}`} 
                    className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[#4A9FD4]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Block - What it includes */}
        <div className="fade-in-section delay-200">
          <h3 className="font-barlow font-bold text-[#F0F0F0] text-[1.3rem] uppercase mb-[20px]">
            {t.includesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.includes.map((item, idx) => (
              <div key={idx} className="bg-[#2A2A2A] rounded-[6px] p-[20px] border-t-[3px] border-[#4A9FD4]">
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-barlow font-bold text-[#F0F0F0] text-lg mb-2 tracking-wide">{item.title}</h4>
                <p className="font-inter text-[#5A8FA8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Block */}
        <div className="bg-[#1E4A6E] rounded-[8px] p-[32px] mt-[32px] text-center fade-in-section delay-300 flex flex-col items-center">
          <h3 className="font-barlow font-black text-[#F0F0F0] text-[1.5rem] uppercase mb-[16px] tracking-wide">
            {t.pricingTitle}
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full mb-6">
            {/* Pill 1 */}
            <div className="flex flex-col items-center">
              <span className="font-inter text-[#F0F0F0]/80 text-sm mb-1">{t.pill1Label}</span>
              <span className="font-barlow font-bold text-[#4A9FD4] text-[1.8rem]">{t.pill1Value}</span>
            </div>
            
            {/* Divider for desktop */}
            <div className="hidden md:block w-[1px] h-12 bg-white/20"></div>
            
            {/* Pill 2 */}
            <div className="flex flex-col items-center">
              <span className="font-inter text-[#F0F0F0]/80 text-sm mb-1">{t.pill2Label}</span>
              <span className="font-barlow font-bold text-[#4A9FD4] text-[1.8rem]">{t.pill2Value}</span>
            </div>
          </div>
          
          <p className="font-jetbrains text-[#5A8FA8] text-[0.65rem] tracking-[2px] uppercase mb-[24px]">
            {t.pricingNote}
          </p>
          
          <a 
            href="https://wa.me/524441418709" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#4A9FD4] text-white font-barlow font-bold text-[1rem] py-[14px] px-[32px] rounded-[6px] hover:bg-[#1E4A6E] hover:border-[#4A9FD4] border border-transparent transition-all duration-300"
          >
            {t.cta}
          </a>
        </div>

      </div>
    </section>
  );
};

export default LeanConstruction;
