import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deepBlack/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="inline-block">
          <Logo size="sm" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.home}</a>
          <a href="#projects" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.projects}</a>
          <a href="#portfolio" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.portfolio}</a>
          <a href="#services" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.services}</a>
          <a href="#lean-ai" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.leanAi}</a>
          <a href="#contact" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.contact}</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          {/* Language Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-2 font-jetbrains text-sm">
            <button 
              onClick={() => setLanguage('ES')} 
              className={`transition-colors ${language === 'ES' ? 'text-matteGold font-bold' : 'text-concreteGray hover:text-titaniumWhite'}`}
            >
              ES
            </button>
            <span className="text-concreteGray/50">|</span>
            <button 
              onClick={() => setLanguage('EN')} 
              className={`transition-colors ${language === 'EN' ? 'text-matteGold font-bold' : 'text-concreteGray hover:text-titaniumWhite'}`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a href="#contact" className="hidden lg:inline-block px-5 py-2 border-2 border-matteGold text-matteGold font-jetbrains text-sm font-bold hover:bg-matteGold hover:text-deepBlack transition-all">
            {t.nav.cta}
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#F0F0F0] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0E0E0E] border-b-2 border-[#4A9FD4] transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
      >
        <div className="flex flex-col py-4">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.home}</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.projects}</a>
          <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.portfolio}</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.services}</a>
          <a href="#lean-ai" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.leanAi}</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.contact}</a>
          
          {/* Mobile Language Toggle */}
          <div className="flex items-center justify-center space-x-4 font-jetbrains text-[0.9rem] my-[16px]">
            <button 
              onClick={() => { setLanguage('ES'); setIsMobileMenuOpen(false); }} 
              className={`transition-colors ${language === 'ES' ? 'text-[#4A9FD4] font-bold' : 'text-[#5A8FA8] hover:text-white'}`}
            >
              ES
            </button>
            <span className="text-[#5A8FA8]">|</span>
            <button 
              onClick={() => { setLanguage('EN'); setIsMobileMenuOpen(false); }} 
              className={`transition-colors ${language === 'EN' ? 'text-[#4A9FD4] font-bold' : 'text-[#5A8FA8] hover:text-white'}`}
            >
              EN
            </button>
          </div>

          <div className="px-6 pb-2">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-[#4A9FD4] text-white font-barlow font-bold text-[1.2rem] py-3 rounded-sm">
              TRABAJEMOS JUNTOS / LET'S WORK TOGETHER
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
