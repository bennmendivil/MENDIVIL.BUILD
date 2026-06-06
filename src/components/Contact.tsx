import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" className="relative py-32 bg-deepBlack">
      {/* SVG Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Steel structure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-contact-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center" ref={containerRef}>
        
        <div className="max-w-3xl mx-auto fade-in-section">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <h2 className="font-barlow font-black text-[3rem] md:text-[5rem] leading-[1.1] text-titaniumWhite tracking-wide uppercase mb-6">
            {t.contact.title}
          </h2>
          
          <p className="font-inter italic text-electricBlue text-[1.4rem] mb-12">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16 fade-in-section delay-200">
            {/* Email */}
            <a 
              href="mailto:benjamh2@gmail.com" 
              className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-matteGold text-deepBlack font-barlow font-bold text-lg tracking-wider hover:bg-white transition-colors"
            >
              <Mail size={24} />
              <span>benjamh2@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/benjamín-mendívil-hernández-4a0065158" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 border-2 border-titaniumWhite text-titaniumWhite font-barlow font-bold text-lg tracking-wider hover:bg-titaniumWhite hover:text-deepBlack transition-colors"
            >
              <LinkedinIcon size={24} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Social Networks */}
          <div className="mb-16 fade-in-section delay-300">
            <div className="max-w-xs mx-auto border-t border-[#2A2A2A] pt-8">
              <p className="font-jetbrains text-[#5A8FA8] text-[0.6rem] tracking-[2px] uppercase mb-6">
                {t.contact.followMe}
              </p>
              <div className="flex justify-center items-center space-x-6">
                <a href="https://www.instagram.com/mendivil.build" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-white [&:hover_svg]:[stroke:url(#ig-grad)] transition-all duration-300 hover:scale-110">
                  <InstagramIcon size={24} />
                </a>
                <a href="https://www.facebook.com/share/1DeBT3qsub/" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-[#1877F2] transition-all duration-300 hover:scale-110">
                  <FacebookIcon size={24} />
                </a>
                <a href="https://www.tiktok.com/@mendivil.build" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-white transition-all duration-300 hover:scale-110">
                  <TikTokIcon size={24} />
                </a>
                <a href="https://wa.me/524441418709" target="_blank" rel="noopener noreferrer" className="text-[#5A8FA8] hover:text-[#25D366] transition-all duration-300 hover:scale-110">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          <p className="font-inter text-titaniumWhite/80 text-sm fade-in-section delay-400">
            {t.contact.note}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
