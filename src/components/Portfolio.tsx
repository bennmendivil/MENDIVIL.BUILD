import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type Tab = 'INDUSTRIAL' | 'HOSPITALARIO' | 'COMERCIAL';

interface Project {
  title: string;
  jobId: number;
  images: string[];
}

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const isEs = language === 'ES';
  const [activeTab, setActiveTab] = useState<Tab>('INDUSTRIAL');

  const tabs: Record<Tab, string> = {
    INDUSTRIAL: 'INDUSTRIAL',
    HOSPITALARIO: 'HOSPITALARIO',
    COMERCIAL: 'COMERCIAL / LOGÍSTICA'
  };

  const projectsData: Record<Tab, Project[]> = {
    INDUSTRIAL: [
      {
        title: "CONSTELLATION BRANDS — VERACRUZ",
        jobId: 2,
        images: [
          "/cbi-veracruz-01.jpeg", "/cbi-veracruz-02.jpeg", "/cbi-veracruz-03.jpg", "/cbi-veracruz-04.jpg",
          "/cbi-veracruz-05.jpg", "/cbi-veracruz-06.jpg", "/cbi-veracruz-07.jpeg", "/cbi-veracruz-08.jpeg"
        ]
      },
      {
        title: "CONSTELLATION BRANDS — OBREGÓN",
        jobId: 5,
        images: [
          "/cbi-obregon-01.jpeg", "/cbi-obregon-02.jpeg", "/cbi-obregon-03.jpeg", "/cbi-obregon-04.jpeg", "/cbi-obregon-05.jpeg"
        ]
      },
      {
        title: "TOYOTA MOTORS — GUANAJUATO",
        jobId: 3,
        images: [
          "/toyota-guanajuato-01.jpg", "/toyota-guanajuato-02.jpg", "/toyota-guanajuato-03.jpeg",
          "/toyota-guanajuato-04.jpeg", "/toyota-guanajuato-05.jpeg", "/toyota-guanajuato-06.jpeg"
        ]
      },
      {
        title: "STANLEY BLACK & DECKER — NOGALES",
        jobId: 4,
        images: [
          "/sbd-nogales-01.jpg", "/sbd-nogales-02.jpg", "/sbd-nogales-03.jpg", "/sbd-nogales-04.jpg"
        ]
      },
      {
        title: "MAGNA EXPANSION PLANT — SAN LUIS POTOSÍ",
        jobId: 7,
        images: [
          "/magna-slp-01.jpg"
        ]
      }
    ],
    HOSPITALARIO: [
      {
        title: "HOSPITAL INFANTIL PEDIÁTRICO — CULIACÁN",
        jobId: 6,
        images: [
          "/hp-culiacan-01.jpg", "/hp-culiacan-02.jpg"
        ]
      }
    ],
    COMERCIAL: [
      {
        title: "CEDIS COPPEL Y RONAL GROUP",
        jobId: 8,
        images: [
          "/cedis-culiacan-01.jpg", "/ronal-slp-01.jpg"
        ]
      }
    ]
  };

  const activeProjects = projectsData[activeTab];

  return (
    <section id="projects" className="py-24 bg-deepBlack relative w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-barlow font-black text-[2.5rem] md:text-5xl text-titaniumWhite uppercase tracking-wide leading-tight mb-4">
            {t.experience.title}
          </h2>
          <p className="font-jetbrains text-[#4A9FD4] text-lg md:text-xl max-w-2xl uppercase tracking-wider">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto whitespace-nowrap mb-16 gap-4 pb-4 md:pb-0 scrollbar-hide">
          {(Object.keys(tabs) as Tab[]).map((tabKey) => (
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
              {tabs[tabKey]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {activeProjects.map((project, idx) => {
            const job = t.experience.jobs.find(j => j.id === project.jobId);
            if (!job) return null;

            return (
              <div key={idx} className="w-full">
                {/* Project Context Card */}
                <div className="mb-8 bg-[#1E4A6E]/10 border border-[#4A9FD4]/30 p-6 md:p-8 rounded-lg text-left">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                    <div>
                      <h3 className="font-barlow font-bold text-2xl md:text-3xl text-[#F0F0F0] uppercase tracking-wide">
                        {project.title}
                      </h3>
                      <h4 className="font-barlow font-medium text-lg md:text-xl text-[#4A9FD4] uppercase mt-1">
                        {job.title} {job.company ? `· ${job.company}` : ''}
                      </h4>
                    </div>
                    {/* Badge */}
                    <span className={`px-3 py-1.5 text-xs font-jetbrains uppercase border rounded-sm whitespace-nowrap ${job.badgeColor}`}>
                      {job.badge}
                    </span>
                  </div>

                  <div className="font-jetbrains text-sm text-[#5A8FA8] mb-4">
                    <p>{job.date}</p>
                    <p>{job.location}</p>
                  </div>
                  <div className="flex flex-col gap-3 font-inter text-[14.5px] leading-relaxed max-w-4xl mt-2">
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <span className="text-[#4A9FD4] font-bold font-jetbrains uppercase tracking-wide text-xs mt-1 sm:w-32 shrink-0">{isEs ? "RETO:" : "CHALLENGE:"}</span>
                      <span className="text-[#F0F0F0]/90">{(job as any).reto}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <span className="text-matteGold font-bold font-jetbrains uppercase tracking-wide text-xs mt-1 sm:w-32 shrink-0">{isEs ? "INTERVENCIÓN:" : "INTERVENTION:"}</span>
                      <span className="text-[#F0F0F0]/90">{(job as any).intervencion}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <span className="text-[#27AE60] font-bold font-jetbrains uppercase tracking-wide text-xs mt-1 sm:w-32 shrink-0">{isEs ? "RESULTADO:" : "RESULT:"}</span>
                      <span className="text-[#F0F0F0]/90">{(job as any).resultado}</span>
                    </div>
                  </div>
                </div>

                {/* Photos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px]">
                  {project.images.map((img, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-[6px] cursor-pointer">
                      <img 
                        src={img} 
                        alt={`${project.title} photo ${i + 1}`} 
                        loading={idx === 0 && i < 3 ? "eager" : "lazy"}
                        className="w-full h-[200px] lg:h-[260px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-[#4A9FD4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
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

export default Portfolio;
