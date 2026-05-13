import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-deepBlack pt-16 pb-8 border-t-4 border-matteGold rounded-t-3xl mt-[-20px] relative z-20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-titaniumWhite/10 pb-12 mb-8 gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block mb-4">
              <Logo size="lg" />
            </a>
            <p className="font-jetbrains text-titaniumWhite/80 text-sm italic">
              "{t.footer.slogan}"
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.projects}</a>
            <a href="#services" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.services}</a>
            <a href="#lean-ai" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.leanAi}</a>
            <a href="#contact" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.contact}</a>
          </div>

          {/* Status */}
          <div className="text-center md:text-right">
            <div className="inline-flex items-center space-x-2 bg-[#12121E] px-4 py-2 rounded-full mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-jetbrains text-xs tracking-wider text-concreteGray uppercase">
                {t.footer.available.replace('● ', '')}
              </span>
            </div>
            <p className="font-inter text-sm text-titaniumWhite">
              {t.footer.degree}
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-jetbrains text-xs text-concreteGray/60">
            {t.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
