import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Education: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-24 bg-deepBlack border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
        
        <div className="mb-16 fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite tracking-wide uppercase">
            {t.education.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Column: Education & Thesis */}
          <div className="w-full md:w-1/2 fade-in-section delay-100">
            <h3 className="font-barlow font-bold text-2xl text-electricBlue mb-2">
              {t.education.degree.split('—')[0].trim()}
            </h3>
            <h4 className="font-barlow font-medium text-xl text-titaniumWhite mb-4">
              {t.education.degree.split('—')[1]?.trim() || t.education.degree}
            </h4>
            
            <p className="font-jetbrains text-concreteGray text-sm mb-6">
              {t.education.locationDate}
            </p>
            
            <p className="font-inter text-titaniumWhite/80 text-sm leading-relaxed mb-8 italic border-l-2 border-electricBlue pl-4">
              {t.education.thesis}
            </p>
            
            <div className="inline-block px-4 py-3 bg-matteGold/10 border border-matteGold rounded-md">
              <span className="font-jetbrains text-sm font-bold text-matteGold">
                {t.education.badge}
              </span>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="w-full md:w-1/2 fade-in-section delay-200">
            <ul className="space-y-6">
              {t.education.certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={24} className="text-matteGold mr-4 flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-inter text-titaniumWhite text-lg font-medium leading-tight pt-0.5">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
