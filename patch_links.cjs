const fs = require('fs');

let content = fs.readFileSync('src/components/AiProjectReporter.tsx', 'utf8');

// Replace the salesCta link
content = content.replace(
  '<a \n              href="#contact" \n              className="w-full sm:w-auto inline-flex justify-center items-center border border-white/20 text-titaniumWhite font-jetbrains font-bold text-sm tracking-wider py-4 px-10 hover:border-electricBlue hover:text-electricBlue transition-colors uppercase"\n            >\n              {content.salesCta}\n            </a>',
  '<a \n              href="/#contact?intent=implementation" \n              className="w-full sm:w-auto inline-flex justify-center items-center border border-white/20 text-titaniumWhite font-jetbrains font-bold text-sm tracking-wider py-4 px-10 hover:border-electricBlue hover:text-electricBlue transition-colors uppercase"\n            >\n              {content.salesCta}\n            </a>'
);

// Replace pilotCta link
content = content.replace(
  '<a \n            href="#contact" \n            className="inline-flex justify-center items-center bg-transparent border-2 border-electricBlue text-electricBlue font-jetbrains font-bold text-sm tracking-wider py-4 px-10 hover:bg-electricBlue hover:text-white transition-colors uppercase"\n          >\n            {content.pilotCta}\n          </a>',
  '<a \n            href="/#contact?intent=pilot" \n            className="inline-flex justify-center items-center bg-transparent border-2 border-electricBlue text-electricBlue font-jetbrains font-bold text-sm tracking-wider py-4 px-10 hover:bg-electricBlue hover:text-white transition-colors uppercase"\n          >\n            {content.pilotCta}\n          </a>'
);

// Replace finalCtaSecondary link
content = content.replace(
  '<a \n              href="#contact" \n              className="inline-flex justify-center items-center border-2 border-deepBlack text-deepBlack font-jetbrains font-bold text-sm tracking-wider py-5 px-8 hover:bg-deepBlack hover:text-white transition-colors uppercase"\n            >\n              {content.finalCtaSecondary}\n            </a>',
  '<a \n              href="/#contact?intent=general" \n              className="inline-flex justify-center items-center border-2 border-deepBlack text-deepBlack font-jetbrains font-bold text-sm tracking-wider py-5 px-8 hover:bg-deepBlack hover:text-white transition-colors uppercase"\n            >\n              {content.finalCtaSecondary}\n            </a>'
);

// Now replace the mockups in the hero section
const mockupReplacement = `
          {/* Product Mockups */}
          <div className="mt-20 relative mx-auto w-full max-w-5xl h-[350px] md:h-[600px] flex items-end justify-center perspective-[1000px]">
            {/* Desktop Mockup */}
            <div className="relative w-full max-w-4xl h-[90%] md:h-[95%] bg-[#0A0A0A] border border-white/10 rounded-t-xl overflow-hidden shadow-2xl transform-gpu -rotate-x-2 translate-y-4">
              <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 z-10">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
              </div>
              <img 
                src="/ai_reporter_desktop.png" 
                alt="AI Project Reporter Desktop Interface" 
                className="w-full h-full object-cover object-top opacity-90 mt-8"
              />
            </div>
            
            {/* Mobile Mockup Floating */}
            <div className="absolute -right-4 md:right-10 bottom-0 w-[120px] md:w-[220px] h-[240px] md:h-[440px] bg-[#0A0A0A] border-4 border-[#1A1A1A] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 transform-gpu rotate-y-[-10deg] translate-y-4 md:translate-y-8">
              <div className="absolute top-0 w-full h-4 md:h-6 bg-[#1A1A1A] flex justify-center items-center z-10">
                <div className="w-10 h-1 rounded-full bg-[#333]"></div>
              </div>
              <img 
                src="/ai_reporter_mobile.png" 
                alt="AI Project Reporter Mobile Interface" 
                className="w-full h-full object-cover opacity-95 pt-4 md:pt-6"
              />
            </div>
          </div>
`;

content = content.replace(
  /<div className="mt-20 relative mx-auto w-full max-w-4xl h-\[300px\] md:h-\[500px\] bg-\[#1A1A1A\] border border-white\/10 flex items-center justify-center rounded-t-3xl overflow-hidden shadow-2xl">[\s\S]*?<\/div>\n        <\/div>/,
  mockupReplacement.trim() + '\n        </div>'
);

fs.writeFileSync('src/components/AiProjectReporter.tsx', content);
console.log('AiProjectReporter patched.');
