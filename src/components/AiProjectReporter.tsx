import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  Smartphone, FileText, Share2, Layers, CheckCircle2, ShieldAlert,
  HardHat, Users, Database, Cloud, LayoutDashboard
} from 'lucide-react';

const AiProjectReporter: React.FC = () => {
  const { t } = useLanguage();
  const content = (t as any).aiReporter;
  
  useEffect(() => {
    document.title = "AI Project Reporter | MENDIVIL.BUILD";
    window.scrollTo(0, 0);
  }, []);

  const heroRef = useIntersectionObserver({ threshold: 0.1 });
  const problemRef = useIntersectionObserver({ threshold: 0.1 });
  const howRef = useIntersectionObserver({ threshold: 0.1 });
  const featuresRef = useIntersectionObserver({ threshold: 0.1 });
  const usersRef = useIntersectionObserver({ threshold: 0.1 });
  const diffRef = useIntersectionObserver({ threshold: 0.1 });
  const pilotRef = useIntersectionObserver({ threshold: 0.1 });
  const roadmapRef = useIntersectionObserver({ threshold: 0.1 });
  const ctaRef = useIntersectionObserver({ threshold: 0.1 });
  const reportShowcaseRef = useIntersectionObserver({ threshold: 0.1 });
  const historyShowcaseRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-[#0E0E0E] min-h-screen text-titaniumWhite font-inter overflow-x-hidden pt-20">
      
      {/* 1. HERO */}
      <section className="relative pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-white/5" ref={heroRef}>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 relative z-10 fade-in-section text-center max-w-5xl">
          <span className="font-jetbrains text-electricBlue text-xs tracking-[0.2em] uppercase block mb-6">
            {content.heroEyebrow}
          </span>
          <h1 className="font-barlow font-bold text-5xl md:text-7xl text-titaniumWhite tracking-tight mb-8 whitespace-pre-line leading-tight">
            {content.heroHeadline}
          </h1>
          <p className="font-inter text-concreteGray text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            {content.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://reporter.mendivil.build/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-electricBlue text-white font-jetbrains font-bold text-sm tracking-wider py-4 px-10 hover:bg-white hover:text-deepBlack transition-colors uppercase"
            >
              {content.demoCta}
            </a>
            <a 
              href="/?interest=ai-project-reporter-implementation#contact" 
              className="w-full sm:w-auto inline-flex justify-center items-center border border-white/20 text-titaniumWhite font-jetbrains font-bold text-sm tracking-wider py-4 px-10 hover:border-electricBlue hover:text-electricBlue transition-colors uppercase"
            >
              {content.salesCta}
            </a>
          </div>

          {/* Product Mockup Placeholder */}
          {/* Product Mockups */}
          <div className="mt-20 relative mx-auto w-full max-w-5xl flex flex-col md:flex-row items-center md:items-end justify-center perspective-[1000px]">
            {/* Desktop Mockup */}
            <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-t-xl overflow-hidden shadow-2xl transform-gpu md:-rotate-x-2 md:translate-y-4">
              <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 z-10">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
              </div>
              <img 
                src="/images/ai-project-reporter/ai-reporter-hero-desktop.webp" 
                alt="AI Project Reporter Desktop Interface" 
                className="w-full h-auto object-cover object-top opacity-90 mt-8"
              />
            </div>
            
            {/* Mobile Mockup Floating */}
            <div className="relative md:absolute mt-8 md:mt-0 -right-4 md:right-10 bottom-0 w-[200px] md:w-[240px] bg-[#0A0A0A] border-4 border-[#1A1A1A] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 transform-gpu md:rotate-y-[-10deg] md:translate-y-8">
              <div className="absolute top-0 w-full h-4 md:h-6 bg-[#1A1A1A] flex justify-center items-center z-10">
                <div className="w-10 h-1 rounded-full bg-[#333]"></div>
              </div>
              <img 
                src="/images/ai-project-reporter/ai-reporter-hero-mobile.webp" 
                alt="AI Project Reporter Mobile Interface" 
                className="w-full h-auto object-cover opacity-95 pt-4 md:pt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & WORKFLOW */}
      <section className="py-24 bg-[#0A0A0A] relative" ref={problemRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl uppercase tracking-wide mb-6">
              {content.problemTitle}
            </h2>
            <p className="font-inter text-concreteGray text-lg max-w-2xl mx-auto">
              {content.problemDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {content.workflow.map((step: string, i: number) => (
              <div key={i} className="bg-[#111] border border-white/5 p-6 flex flex-col items-center justify-center text-center relative group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-electricBlue/20 group-hover:text-electricBlue transition-colors">
                  {i === 0 && <Smartphone size={20} />}
                  {i === 1 && <Layers size={20} />}
                  {i === 2 && <FileText size={20} />}
                  {i === 3 && <Share2 size={20} />}
                </div>
                <span className="font-jetbrains text-sm font-bold tracking-widest">{step}</span>
                {i < 3 && (
                  <div className="hidden md:block absolute right-[-24px] top-1/2 transform -translate-y-1/2 text-white/20 z-10">
                    <ArrowRightIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-deepBlack border-t border-white/5" ref={howRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <h2 className="font-jetbrains text-electricBlue text-xs tracking-[0.2em] uppercase text-center mb-16">
            {content.howItWorksTitle}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.howSteps.map((step: any, i: number) => (
                <div key={i} className="bg-[#1A1A1A] p-8 border border-white/5 hover:border-electricBlue/50 transition-colors">
                  <span className="font-barlow font-black text-4xl text-white/10 block mb-4">{step.num}</span>
                  <h3 className="font-barlow font-bold text-xl uppercase tracking-wide mb-4">{step.title}</h3>
                  <p className="font-inter text-sm text-concreteGray leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="relative w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 w-full h-8 bg-[#111] border-b border-white/5 flex items-center px-4 z-10">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
              </div>
              <img 
                src="/images/ai-project-reporter/ai-reporter-new-report.webp" 
                alt="AI Project Reporter Capture" 
                loading="lazy"
                className="w-full h-auto object-contain object-top opacity-90 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 REPORT GENERATION SHOWCASE */}
      <section className="py-16 bg-[#0A0A0A]" ref={reportShowcaseRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section text-center">
          <div className="relative w-full mx-auto max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute top-0 w-full h-8 bg-white/5 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-10">
              <span className="font-jetbrains text-xs tracking-widest text-titaniumWhite/50 uppercase">PDF Report Export</span>
              <FileText size={14} className="text-electricBlue" />
            </div>
            <img 
              src="/images/ai-project-reporter/ai-reporter-report-preview.webp" 
              alt="Report Generation Preview" 
              loading="lazy"
              className="w-full h-auto object-cover object-top block"
            />
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden" ref={featuresRef}>
        <div className="container mx-auto px-6 max-w-6xl relative z-10 fade-in-section">
          <h2 className="font-jetbrains text-concreteGray text-xs tracking-[0.2em] uppercase mb-16">
            {content.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feat: any, i: number) => (
              <div key={i} className="p-6 border border-white/5 bg-[#111] hover:bg-[#151515] transition-colors flex items-start space-x-4">
                <div className="mt-1 text-electricBlue">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-barlow font-bold text-lg uppercase tracking-wide mb-2">{feat.title}</h4>
                  <p className="font-inter text-sm text-concreteGray">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 HISTORY SHOWCASE */}
      <section className="py-16 bg-[#0E0E0E]" ref={historyShowcaseRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section text-center">
          <div className="relative w-full mx-auto max-w-4xl bg-[#0E0E0E] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
             <div className="absolute top-0 w-full h-8 bg-[#151515] border-b border-white/10 flex items-center justify-between px-4 z-10">
              <span className="font-jetbrains text-xs tracking-widest text-titaniumWhite/50 uppercase">Report History</span>
              <Database size={14} className="text-concreteGray" />
            </div>
            <img 
              src="/images/ai-project-reporter/ai-reporter-history.webp" 
              alt="Report History Management" 
              loading="lazy"
              className="w-full h-auto object-cover object-top block"
            />
          </div>
        </div>
      </section>

      {/* 5. USERS */}
      <section className="py-24 bg-deepBlack border-t border-b border-white/5" ref={usersRef}>
        <div className="container mx-auto px-6 max-w-5xl text-center fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl uppercase tracking-wide mb-16">
            {content.usersTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {content.users.map((user: string, i: number) => (
              <div key={i} className="py-8 px-4 border border-white/10 bg-[#151515] flex flex-col items-center justify-center group">
                <Users size={24} className="text-white/30 mb-4 group-hover:text-electricBlue transition-colors" />
                <span className="font-jetbrains text-xs md:text-sm tracking-wider uppercase text-titaniumWhite/80 group-hover:text-white">{user}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DIFFERENTIATOR */}
      <section className="py-32 bg-[#050505] relative border-b border-white/5" ref={diffRef}>
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-electricBlue opacity-20 m-6"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-electricBlue opacity-20 m-6"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10 fade-in-section">
          <HardHat size={48} className="mx-auto text-matteGold mb-8 opacity-50" />
          <h2 className="font-barlow font-bold text-4xl md:text-5xl uppercase tracking-wide mb-8">
            {content.diffTitle}
          </h2>
          <p className="font-inter text-xl text-concreteGray leading-relaxed">
            {content.diffDesc}
          </p>
        </div>
      </section>

      {/* 7. PILOT PROGRAM */}
      <section className="py-24 bg-deepBlack" ref={pilotRef}>
        <div className="container mx-auto px-6 max-w-4xl text-center fade-in-section">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl uppercase tracking-wide mb-6">
            {content.pilotTitle}
          </h2>
          <p className="font-inter text-concreteGray text-lg mb-10 max-w-2xl mx-auto">
            {content.pilotDesc}
          </p>
          <a 
            href="/?interest=ai-project-reporter-pilot#contact" 
            className="inline-flex justify-center items-center bg-transparent border-2 border-electricBlue text-electricBlue font-jetbrains font-bold text-sm tracking-wider py-4 px-10 hover:bg-electricBlue hover:text-white transition-colors uppercase"
          >
            {content.pilotCta}
          </a>
        </div>
      </section>

      {/* 8. ROADMAP */}
      <section className="py-16 bg-[#0A0A0A] border-t border-white/5" ref={roadmapRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h3 className="font-barlow font-bold text-2xl uppercase tracking-wide mb-4 md:mb-0">
              {content.roadmapTitle}
            </h3>
            <span className="font-jetbrains text-xs tracking-widest bg-white/10 text-white/50 px-3 py-1 uppercase">
              {content.roadmapLabel}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {content.roadmapChips.map((chip: string, i: number) => (
              <div key={i} className="flex items-center space-x-2 px-4 py-2 border border-white/5 bg-[#111] text-white/60">
                {i === 0 && <Cloud size={14} />}
                {i === 4 && <LayoutDashboard size={14} />}
                {i === 5 && <ShieldAlert size={14} />}
                {i === 6 && <Database size={14} />}
                <span className="font-jetbrains text-xs uppercase tracking-wider">{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-32 bg-electricBlue relative overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 fade-in-section text-center">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wide mb-12 whitespace-pre-line leading-tight">
            {content.finalTitle}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://reporter.mendivil.build/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-deepBlack text-white font-jetbrains font-bold text-sm tracking-wider py-5 px-8 hover:bg-white hover:text-deepBlack transition-colors uppercase shadow-2xl"
            >
              {content.finalCtaPrimary}
            </a>
            <a 
              href="/?interest=ai-project-reporter#contact" 
              className="inline-flex justify-center items-center border-2 border-deepBlack text-deepBlack font-jetbrains font-bold text-sm tracking-wider py-5 px-8 hover:bg-deepBlack hover:text-white transition-colors uppercase"
            >
              {content.finalCtaSecondary}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper component for Arrow icon
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
);

export default AiProjectReporter;
