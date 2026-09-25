import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/IMG_5454.jpeg" 
          alt="Industrial construction site" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 bg-deepBlack/40"></div> {/* Additional darkening for contrast */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Availability Badge */}
          <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} inline-flex items-center space-x-3 bg-steelBlue/20 border border-steelBlue/30 backdrop-blur-sm px-4 py-2 rounded-full mb-8`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27AE60] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27AE60]"></span>
            </span>
            <span className="font-jetbrains text-xs tracking-wider text-titaniumWhite uppercase">{t.hero.available.replace('● ', '')}</span>
          </div>

          {/* Main Headline */}
          <div className="mb-6 md:mb-8 flex flex-col items-start mt-4">
            <h1 className={`font-barlow font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] text-[#F0F0F0] tracking-[-1px] transition-all duration-1000 delay-100 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {(t.hero as any).headlineP1}
            </h1>
            <h1 className={`font-barlow font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] text-[#4A9FDA] tracking-[-1px] transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {(t.hero as any).headlineP2}
            </h1>
            <h1 className={`font-barlow font-black text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] text-[#5A8FA8] tracking-[-1px] transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {(t.hero as any).headlineP3}
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`font-inter text-[#F0F0F0]/90 drop-shadow-md text-[1.1rem] md:text-[1.25rem] leading-relaxed mb-6 max-w-2xl transition-all duration-1000 delay-400 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {t.hero.subtitle}
          </p>

          {/* Description */}
          {t.hero.description && (
            <p className={`font-inter text-concreteGray text-[0.95rem] leading-[1.7] max-w-[480px] mb-8 whitespace-pre-line transition-all duration-1000 delay-400 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {(t.hero as any).description}
            </p>
          )}

          {/* Tags */}
          <div className={`flex flex-wrap gap-3 mb-8 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {t.hero.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 border border-electricBlue text-titaniumWhite bg-transparent font-barlow uppercase text-sm tracking-widest backdrop-blur-sm">
                [{tag}]
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-6 transition-all duration-1000 delay-[600ms] transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href="#contact" className="px-8 py-4 bg-matteGold text-deepBlack font-barlow font-bold text-lg tracking-wider text-center hover:bg-white transition-colors">
              {t.hero.cta1}
            </a>
            <a href="#projects" className="px-8 py-4 bg-transparent border-2 border-electricBlue text-electricBlue font-barlow font-bold text-lg tracking-wider text-center hover:bg-electricBlue hover:text-white transition-colors uppercase">
              {t.hero.cta2}
            </a>
          </div>

          <div className={`flex sm:justify-start transition-all duration-1000 delay-[700ms] transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
             <a href="/web-aec" className="font-inter text-[#F0F0F0]/80 hover:text-white text-[0.85rem] uppercase tracking-wider underline underline-offset-4 transition-colors">
               {language === 'ES' ? 'VER WEB AEC →' : 'VIEW WEB AEC →'}
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
