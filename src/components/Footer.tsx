import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';
import Logo from './Logo';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-deepBlack pt-16 pb-8 border-t-4 border-matteGold rounded-t-3xl mt-[-20px] relative z-20">
      {/* SVG Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="ig-grad-footer" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-titaniumWhite/10 pb-12 mb-8 gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-block mb-4">
              <Logo size="lg" />
            </a>
            <p className="font-jetbrains text-titaniumWhite/80 text-sm italic mb-6">
              "{t.footer.slogan}"
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-6">
              <a href="https://www.instagram.com/mendivil.build" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-white [&:hover_svg]:[stroke:url(#ig-grad-footer)] transition-all duration-300 hover:scale-110">
                <InstagramIcon size={24} />
              </a>
              <a href="https://www.facebook.com/share/1DeBT3qsub/" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-[#1877F2] transition-all duration-300 hover:scale-110">
                <FacebookIcon size={24} />
              </a>
              <a href="https://www.tiktok.com/@mendivil.build" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-white transition-all duration-300 hover:scale-110">
                <TikTokIcon size={24} />
              </a>
              <a href="https://wa.me/message/OMVEQBVAUTQLM1" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-[#25D366] transition-all duration-300 hover:scale-110">
                <MessageCircle size={24} />
              </a>
              <a href="https://linkedin.com/in/benjamín-mendívil-hernández-4a0065158" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-[#0077B5] transition-all duration-300 hover:scale-110">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCqH3-iUphsyJJ_31JretqoQ" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-[#FF0000] transition-all duration-300 hover:scale-110">
                <YoutubeIcon size={24} />
              </a>
            </div>
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
