import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

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
          <a href="#services" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.services}</a>
          <a href="#lean-ai" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.leanAi}</a>
          <a href="#contact" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.contact}</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          {/* Language Toggle */}
          <div className="flex items-center space-x-2 font-jetbrains text-sm">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
