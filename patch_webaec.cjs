const fs = require('fs');

let content = fs.readFileSync('src/components/WebAEC.tsx', 'utf8');

// 1. Add imports
if (!content.includes('import { useLanguage }')) {
  content = content.replace(
    "import React, { useEffect } from 'react';",
    "import React, { useEffect } from 'react';\nimport { useLanguage } from '../context/LanguageContext';\nimport { useForm, ValidationError } from '@formspree/react';"
  );
}
if (!content.includes('MessageCircle')) {
  content = content.replace(
    "ArrowRight, ShieldCheck, Check, Ruler",
    "ArrowRight, ShieldCheck, Check, Ruler, MessageCircle, Mail"
  );
}

// 2. Add LinkedinIcon
const linkedinIconDef = `
const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
`;
if (!content.includes('LinkedinIcon')) {
  content = content.replace('const WebAEC: React.FC = () => {', linkedinIconDef + '\nconst WebAEC: React.FC = () => {');
}

// 3. Add hooks
const hooksDef = `
  const { t, language } = useLanguage();
  const [state, handleSubmit] = useForm('xjgdjgvz');
  const isEs = language === 'ES';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
`;
if (!content.includes('const { t, language }')) {
  content = content.replace(
    'const heroRef = useIntersectionObserver({ threshold: 0.1 });',
    hooksDef + '\n  const heroRef = useIntersectionObserver({ threshold: 0.1 });'
  );
}

// 4. Update "QUIERO MI SITIO WEB" buttons
content = content.replace(
  /href="#contact"(\s+)className="([^"]+)"(\s+)>(\s+)QUIERO MI SITIO WEB/g,
  'href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="$2" > QUIERO MI SITIO WEB'
);

// We need to also catch any instances where QUIERO MI SITIO WEB is separated by newlines, which regex might miss if not careful.
// Let's do a more robust string replacement for the Hero CTA and Final CTA.

// Hero CTA replacement:
content = content.replace(
  /<a\s+href="#contact"\s+className="inline-flex justify-center items-center bg-matteGold text-deepBlack font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-white transition-colors uppercase font-bold"\s*>\s*QUIERO MI SITIO WEB\s*<\/a>/,
  `<a 
                href="#contacto-web-aec" 
                onClick={(e) => scrollToSection(e, "contacto-web-aec")}
                className="inline-flex justify-center items-center bg-matteGold text-deepBlack font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-white transition-colors uppercase font-bold"
              >
                QUIERO MI SITIO WEB
              </a>`
);

// Final CTA replacement:
content = content.replace(
  /<a\s+href="#contact"\s+className="inline-flex justify-center items-center bg-deepBlack text-white font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-white hover:text-deepBlack transition-colors uppercase font-bold shadow-2xl"\s*>\s*QUIERO MI SITIO WEB\s*<\/a>/,
  `<a 
              href="#contacto-web-aec" 
              onClick={(e) => scrollToSection(e, "contacto-web-aec")}
              className="inline-flex justify-center items-center bg-deepBlack text-white font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-white hover:text-deepBlack transition-colors uppercase font-bold shadow-2xl"
            >
              QUIERO MI SITIO WEB
            </a>`
);

// 5. Append Contact Section
const contactJSX = `
      {/* 13. WEB AEC CONTACT */}
      <section id="contacto-web-aec" className="py-24 bg-deepBlack border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 fade-in-section">
          
          <div className="text-center mb-16">
            <span className="font-jetbrains text-electricBlue text-xs tracking-[0.2em] uppercase block mb-4">
              {t.webAecContact.eyebrow}
            </span>
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6 whitespace-pre-line">
              {t.webAecContact.title}
            </h2>
            <p className="font-inter text-concreteGray text-lg max-w-2xl mx-auto">
              {t.webAecContact.desc}
            </p>
          </div>

          {state.succeeded ? (
            <div className="bg-[#1E4A6E] border border-[#4A9FD4]/30 rounded-[8px] p-8 text-center max-w-2xl mx-auto mb-16 fade-in-section">
              <p className="font-barlow font-bold text-[#4A9FD4] text-[1.5rem] tracking-wide uppercase">
                {t.webAecContact.success}
              </p>
            </div>
          ) : (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-3xl mx-auto" onSubmit={handleSubmit}>
              <input type="hidden" name="Source" value="WEB AEC" />
              <input type="hidden" name="Subject" value="Nueva solicitud WEB AEC" />
              
              <div className="w-full">
                <input type="text" name="name" required placeholder={t.webAecContact.name} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full" />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div className="w-full">
                <input type="text" name="company" required placeholder={t.webAecContact.company} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full" />
                <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div className="w-full">
                <input type="email" name="email" required placeholder={t.webAecContact.email} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div className="w-full">
                <input type="tel" name="phone" placeholder={t.webAecContact.phone} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              
              <div className="w-full">
                <select name="companyType" required className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full appearance-none">
                  <option value="" disabled selected>{t.webAecContact.type}</option>
                  {t.webAecContact.typeOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <select name="needs" required className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full appearance-none">
                  <option value="" disabled selected>{t.webAecContact.need}</option>
                  {t.webAecContact.needOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="w-full md:col-span-2">
                <textarea name="message" required placeholder={t.webAecContact.placeholder} rows={4} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              
              <button type="submit" disabled={state.submitting} className="md:col-span-2 bg-[#4A9FD4] text-[#0E0E0E] font-barlow font-bold text-[1rem] py-[16px] rounded-[6px] hover:bg-[#F0F0F0] disabled:bg-[#4A9FD4]/50 disabled:cursor-not-allowed transition-colors duration-300 uppercase tracking-wide mt-2">
                {state.submitting ? t.webAecContact.sending : t.webAecContact.submit}
              </button>
            </form>
          )}

          <div className="flex items-center justify-center my-12">
            <div className="h-px bg-white/10 w-16"></div>
            <span className="font-jetbrains text-electricBlue text-xs px-4 uppercase tracking-widest">{t.webAecContact.orDirectly}</span>
            <div className="h-px bg-white/10 w-16"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:benjamin@mendivil.build" 
              className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-matteGold text-deepBlack font-barlow font-bold text-lg tracking-wider hover:bg-white transition-colors"
            >
              <Mail size={24} />
              <span>benjamin@mendivil.build</span>
            </a>

            <a 
              href="https://linkedin.com/in/benjamín-mendívil-hernández-4a0065158" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 border-2 border-titaniumWhite text-titaniumWhite font-barlow font-bold text-lg tracking-wider hover:bg-titaniumWhite hover:text-deepBlack transition-colors"
            >
              <LinkedinIcon size={24} />
              <span>LinkedIn</span>
            </a>

            <a 
              href={"https://wa.me/message/OMVEQBVAUTQLM1?text=" + encodeURIComponent(isEs ? "Hola Benjamín, vi los demos de WEB AEC en MENDIVIL.BUILD y me interesa desarrollar un sitio web para mi empresa." : "Hi Benjamin, I saw the WEB AEC demos on MENDIVIL.BUILD and I'm interested in developing a website for my company.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 border-2 border-[#25D366] text-[#25D366] font-barlow font-bold text-lg tracking-wider hover:bg-[#25D366] hover:text-deepBlack transition-colors"
            >
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </section>
`;

if (!content.includes('id="contacto-web-aec"')) {
  content = content.replace(
    '    </div>\n  );\n};\n\nexport default WebAEC;',
    contactJSX + '\n    </div>\n  );\n};\n\nexport default WebAEC;'
  );
}

fs.writeFileSync('src/components/WebAEC.tsx', content);
console.log('Successfully patched WebAEC.tsx');
