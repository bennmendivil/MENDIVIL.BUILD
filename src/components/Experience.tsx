import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-deepBlack relative">
      <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite mb-4 tracking-wide uppercase">
            {t.experience.title}
          </h2>
          <p className="font-jetbrains text-electricBlue text-lg md:text-xl max-w-2xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-electricBlue/30"></div>

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-0">
            {t.experience.jobs.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={job.id} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full md:mb-12 fade-in-section delay-${(index % 3 + 1) * 100}`}>
                  
                  {/* Left Side (Empty for odd, content for even on desktop) */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'order-last md:order-first'}`}>
                    {isEven && (
                      <ExperienceCard job={job} isEven={isEven} />
                    )}
                  </div>

                  {/* Center Dot (Desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-matteGold rounded-full border-4 border-deepBlack z-10 shadow-[0_0_10px_rgba(201,168,76,0.6)]"></div>

                  {/* Right Side (Content for odd, empty for even on desktop) */}
                  <div className={`w-full md:w-5/12 ${!isEven ? 'md:pl-12 text-left' : ''}`}>
                    {!isEven && (
                      <ExperienceCard job={job} isEven={isEven} />
                    )}
                  </div>
                  
                  {/* Mobile View - Fallback to regular list when stacked */}
                  <div className="block md:hidden w-full mt-4">
                     {/* The cards handle their own layout, so we just let them stack naturally in mobile */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

interface Job {
  id: number;
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  badge: string;
  badgeColor: string;
}

const ExperienceCard: React.FC<{ job: Job; isEven: boolean }> = ({ job, isEven }) => {
  return (
    <div className="bg-[#12121E] border-l-4 border-matteGold p-6 rounded-r-lg group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(201,168,76,0.1)] transition-all duration-300 w-full text-left">
      <div className={`flex flex-col md:flex-row justify-between items-start mb-4 gap-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
        <div>
          <h3 className={`font-barlow font-bold text-2xl text-titaniumWhite uppercase ${isEven ? 'md:text-right' : 'text-left'}`}>
            {job.title}
          </h3>
          <h4 className={`font-barlow font-medium text-lg text-concreteGray uppercase ${isEven ? 'md:text-right' : 'text-left'}`}>
            {job.company}
          </h4>
        </div>
        
        {/* Badge */}
        <span className={`px-3 py-1 text-xs font-jetbrains uppercase border rounded-sm whitespace-nowrap ${job.badgeColor}`}>
          {job.badge}
        </span>
      </div>

      <div className={`font-jetbrains text-sm text-concreteGray mb-4 ${isEven ? 'md:text-right' : 'text-left'}`}>
        <p>{job.date}</p>
        <p>{job.location}</p>
      </div>

      <p className={`font-inter text-titaniumWhite/80 text-sm leading-relaxed ${isEven ? 'md:text-right' : 'text-left'}`}>
        {job.description}
      </p>
    </div>
  );
};

export default Experience;
