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
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" className="relative py-32 bg-deepBlack">
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

            {/* WhatsApp */}
            <a 
              href="https://wa.me/521" // Insert actual number later if needed
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 border-2 border-[#25D366] text-[#25D366] font-barlow font-bold text-lg tracking-wider hover:bg-[#25D366] hover:text-white transition-colors"
            >
              <MessageCircle size={24} />
              <span>{t.contact.whatsapp}</span>
            </a>
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
