import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type Tab = 'INDUSTRIAL' | 'HOSPITALARIO' | 'COMERCIAL';

interface Project {
  title: string;
  role: string;
  images: string[];
  badge?: string;
  sub?: string;
}

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('INDUSTRIAL');

  const t = {
    title: language === 'ES' ? "PORTAFOLIO FOTOGRÁFICO" : "PHOTO PORTFOLIO",
    subtitle: language === 'ES' ? "Obra real. Proyectos que existen." : "Real work. Projects that exist.",
    tabs: {
      INDUSTRIAL: 'INDUSTRIAL',
      HOSPITALARIO: 'HOSPITALARIO',
      COMERCIAL: 'COMERCIAL / LOGÍSTICA'
    }
  };

  const projectsData: Record<Tab, Project[]> = {
    INDUSTRIAL: [
      {
        title: "CONSTELLATION BRANDS — VERACRUZ",
        role: language === 'ES' ? "Manager II Site Construction · Veracruz" : "Manager II Site Construction · Veracruz",
        badge: "+$75M USD coordinados",
        images: [
          "/cbi-veracruz-01.jpeg", "/cbi-veracruz-02.jpeg", "/cbi-veracruz-03.jpg", "/cbi-veracruz-04.jpg",
          "/cbi-veracruz-05.jpg", "/cbi-veracruz-06.jpg", "/cbi-veracruz-07.jpeg", "/cbi-veracruz-08.jpeg"
        ]
      },
      {
        title: "CONSTELLATION BRANDS — OBREGÓN",
        role: language === 'ES' ? "Civil Superintendent · Obregón, Sonora" : "Civil Superintendent · Obregón, Sonora",
        images: [
          "/cbi-obregon-01.jpeg", "/cbi-obregon-02.jpeg", "/cbi-obregon-03.jpeg", "/cbi-obregon-04.jpeg", "/cbi-obregon-05.jpeg"
        ]
      },
      {
        title: "TOYOTA MOTORS — GUANAJUATO",
        role: language === 'ES' ? "Civil Coordinator · Guanajuato" : "Civil Coordinator · Guanajuato",
        images: [
          "/toyota-guanajuato-01.jpg", "/toyota-guanajuato-02.jpg", "/toyota-guanajuato-03.jpeg",
          "/toyota-guanajuato-04.jpeg", "/toyota-guanajuato-05.jpeg", "/toyota-guanajuato-06.jpeg"
        ]
      },
      {
        title: "STANLEY BLACK & DECKER — NOGALES",
        role: language === 'ES' ? "Construction Manager · Nogales, Sonora" : "Construction Manager · Nogales, Sonora",
        badge: "$23M USD gestionados",
        images: [
          "/sbd-nogales-01.jpg", "/sbd-nogales-02.jpg", "/sbd-nogales-03.jpg", "/sbd-nogales-04.jpg"
        ]
      },
      {
        title: "ESTRUCTURAS DE ACERO — SAN LUIS POTOSÍ",
        role: language === 'ES' ? "Steel Structure Superintendent · SLP" : "Steel Structure Superintendent · SLP",
        sub: language === 'ES' ? "MAGNA Expansion Plant · Ronal Group" : "MAGNA Expansion Plant · Ronal Group",
        images: [
          "/magna-slp-01.jpg", "/ronal-slp-01.jpg"
        ]
      }
    ],
    HOSPITALARIO: [
      {
        title: "HOSPITAL PEDIÁTRICO — CULIACÁN",
        role: language === 'ES' ? "Civil Superintendent · Culiacán, Sinaloa" : "Civil Superintendent · Culiacán, Sinaloa",
        badge: "+$26M USD gestionados",
        sub: language === 'ES' 
          ? "Edificio de 7 niveles · 20,000 m² de construcción · Contrato directo Gobierno Federal" 
          : "7-story building · 20,000 sqm construction · Direct Federal Government contract",
        images: [
          "/hp-culiacan-01.jpg", "/hp-culiacan-02.jpg"
        ]
      }
    ],
    COMERCIAL: [
      {
        title: "CEDIS COPPEL — CULIACÁN",
        role: language === 'ES' ? "Steel Structure Superintendent · Culiacán, Sinaloa" : "Steel Structure Superintendent · Culiacán, Sinaloa",
        images: [
          "/cedis-culiacan-01.jpg"
        ]
      }
    ]
  };

  const activeProjects = projectsData[activeTab];

  return (
    <section className="py-24 bg-deepBlack relative w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-12 text-center md:text-left fade-in-section">
          <h2 className="font-barlow font-black text-[2.5rem] text-[#F0F0F0] uppercase tracking-wide leading-tight">
            {t.title}
          </h2>
          <p className="font-inter italic text-[#5A8FA8] text-lg mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto whitespace-nowrap mb-12 gap-4 pb-4 md:pb-0 scrollbar-hide fade-in-section delay-100">
          {(Object.keys(t.tabs) as Tab[]).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`px-8 py-3 font-barlow font-bold uppercase tracking-wider text-sm transition-all duration-300 border
                ${activeTab === tabKey 
                  ? 'bg-[#4A9FD4] text-[#0E0E0E] border-[#4A9FD4]' 
                  : 'bg-[#2A2A2A] text-[#5A8FA8] border-[#1E4A6E] hover:border-[#4A9FD4]'
                }
              `}
            >
              {t.tabs[tabKey]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 fade-in-section delay-200">
          {activeProjects.map((project, idx) => (
            <div key={idx} className="w-full">
              {/* Project Header */}
              <div className="mb-[12px] border-l-[3px] border-[#4A9FD4] pl-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
                  <h3 className="font-barlow font-bold text-[#F0F0F0] text-[1rem] uppercase tracking-wide">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <span className="inline-block px-2 py-0.5 text-xs font-jetbrains uppercase border border-[#4A9FD4] text-[#4A9FD4] rounded-sm whitespace-nowrap self-start md:self-auto">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="font-jetbrains text-[#5A8FA8] text-[0.65rem] tracking-wider uppercase">
                  {project.role}
                </p>
                {project.sub && (
                  <p className="font-inter text-[#F0F0F0]/70 text-xs mt-1 max-w-2xl">
                    {project.sub}
                  </p>
                )}
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px]">
                {project.images.map((img, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-[6px] cursor-pointer">
                    <img 
                      src={img} 
                      alt={`${project.title} photo ${i + 1}`} 
                      className="w-full h-[180px] lg:h-[220px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-[#4A9FD4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
