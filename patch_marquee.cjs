const fs = require('fs');

// --- 1. Update index.css with marquee animation ---
let cssPath = 'src/index.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const marqueeCss = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 40s linear infinite;
  display: flex;
  width: max-content;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
`;

if (!cssContent.includes('animate-marquee')) {
  cssContent += marqueeCss;
  fs.writeFileSync(cssPath, cssContent);
  console.log('Added marquee CSS to index.css');
}

// --- 2. Rewrite Clients.tsx ---
let clientsPath = 'src/components/Clients.tsx';
const clientsCode = `import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Clients: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'ES' 
    ? "EMPRESAS QUE HAN CONFIADO EN MI DIRECCIÓN DE OBRA" 
    : "COMPANIES THAT HAVE TRUSTED MY PROJECT MANAGEMENT";

  const companies = [
    "Toyota",
    "Constellation Brands",
    "Worley",
    "Cushman & Wakefield",
    "SSOE Group",
    "Gilbane-Alberici",
    "Stanley Black & Decker",
    "MAGNA",
    "Ronal Group"
  ];

  return (
    <section className="bg-[#1E4A6E] py-[32px] border-t border-b border-[#4A9FD4]/30 w-full overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="font-jetbrains text-[#4A9FD4] text-[0.75rem] font-bold tracking-[3px] mb-[32px] text-center uppercase px-6">
          {title}
        </h3>
        
        <div className="relative w-full overflow-hidden flex">
          {/* Fading edges for a premium look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#1E4A6E] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#1E4A6E] to-transparent z-10"></div>
          
          <div className="animate-marquee flex items-center">
            {/* Duplicated list to ensure seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex items-center px-6 md:px-8">
                <span className="font-barlow font-bold text-[#F0F0F0] text-[20px] md:text-[24px] tracking-[1px] whitespace-nowrap">
                  {company}
                </span>
                <span className="font-barlow font-bold text-[#4A9FD4]/50 text-[20px] md:text-[24px] ml-12 md:ml-16">
                  ·
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
`;

fs.writeFileSync(clientsPath, clientsCode);
console.log('Rewrote Clients.tsx');
