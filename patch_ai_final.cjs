const fs = require('fs');

let content = fs.readFileSync('src/components/AiProjectReporter.tsx', 'utf8');

// 1. Fix CTAs
content = content.replace(
  'href="/#contact?intent=implementation"',
  'href="/?interest=ai-project-reporter-implementation#contact"'
);
content = content.replace(
  'href="/#contact?intent=pilot"',
  'href="/?interest=ai-project-reporter-pilot#contact"'
);
content = content.replace(
  'href="/#contact?intent=general"',
  'href="/?interest=ai-project-reporter#contact"'
);

// 2. Fix Hero Mockups
content = content.replace(
  'src="/ai_reporter_desktop.png"',
  'src="/images/ai-project-reporter/ai-reporter-hero-desktop.webp"'
);
content = content.replace(
  'src="/ai_reporter_mobile.png"',
  'src="/images/ai-project-reporter/ai-reporter-hero-mobile.webp"'
);

// 3. How It Works (Capture)
// Let's modify the How It Works section to include the screenshot.
const howItWorksCurrent = `
      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-deepBlack border-t border-white/5" ref={howRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <h2 className="font-jetbrains text-electricBlue text-xs tracking-[0.2em] uppercase text-center mb-16">
            {content.howItWorksTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.howSteps.map((step: any, i: number) => (
              <div key={i} className="bg-[#1A1A1A] p-8 border border-white/5 hover:border-electricBlue/50 transition-colors">
                <span className="font-barlow font-black text-4xl text-white/10 block mb-4">{step.num}</span>
                <h3 className="font-barlow font-bold text-xl uppercase tracking-wide mb-4">{step.title}</h3>
                <p className="font-inter text-sm text-concreteGray leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

const howItWorksNew = `
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
            
            <div className="relative w-full h-[500px] md:h-[600px] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
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
                className="w-full h-full object-cover object-top opacity-90 mt-8"
              />
            </div>
          </div>
        </div>
      </section>
`;

if (content.includes('grid-cols-1 md:grid-cols-2 lg:grid-cols-4')) {
  // Regex match the exact block to replace, using replace with a string
  content = content.replace(/\{\/\* 3\. HOW IT WORKS \*\/\}[\s\S]*?<\/section>/, howItWorksNew.trim());
}

// 4. Report Generation Section
// Insert a visual showcase just before FEATURES
const reportGenShowcase = `
      {/* 3.5 REPORT GENERATION SHOWCASE */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 max-w-5xl fade-in-section text-center">
          <div className="relative w-full mx-auto max-w-4xl h-[400px] md:h-[600px] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute top-0 w-full h-8 bg-white/5 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-10">
              <span className="font-jetbrains text-xs tracking-widest text-titaniumWhite/50 uppercase">PDF Report Export</span>
              <FileText size={14} className="text-electricBlue" />
            </div>
            <img 
              src="/images/ai-project-reporter/ai-reporter-report-preview.webp" 
              alt="Report Generation Preview" 
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
`;

content = content.replace('{/* 4. FEATURES */}', reportGenShowcase.trim());

// 5. History / Report Management
// Insert a visual showcase just before USERS
const historyShowcase = `
      {/* 4.5 HISTORY SHOWCASE */}
      <section className="py-16 bg-[#0E0E0E]">
        <div className="container mx-auto px-6 max-w-5xl fade-in-section text-center">
          <div className="relative w-full mx-auto max-w-4xl h-[400px] md:h-[500px] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
             <div className="absolute top-0 w-full h-8 bg-[#151515] border-b border-white/10 flex items-center justify-between px-4 z-10">
              <span className="font-jetbrains text-xs tracking-widest text-titaniumWhite/50 uppercase">Report History</span>
              <Database size={14} className="text-concreteGray" />
            </div>
            <img 
              src="/images/ai-project-reporter/ai-reporter-history.webp" 
              alt="Report History Management" 
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* 5. USERS */}
`;

content = content.replace('{/* 5. USERS */}', historyShowcase.trim());

fs.writeFileSync('src/components/AiProjectReporter.tsx', content);
console.log('AiProjectReporter patched for visuals and CTAs.');

// Update Contact.tsx to read 'interest' instead of 'intent' and match the specific values
let contactContent = fs.readFileSync('src/components/Contact.tsx', 'utf8');

if (contactContent.includes("searchParams.get('intent')")) {
  contactContent = contactContent.replace("searchParams.get('intent')", "searchParams.get('interest') || searchParams.get('intent')");
  contactContent = contactContent.replace("intent === 'implementation'", "intent === 'ai-project-reporter-implementation' || intent === 'implementation'");
  contactContent = contactContent.replace("intent === 'pilot'", "intent === 'ai-project-reporter-pilot' || intent === 'pilot'");
  contactContent = contactContent.replace("intent === 'general'", "intent === 'ai-project-reporter' || intent === 'general'");
  
  fs.writeFileSync('src/components/Contact.tsx', contactContent);
  console.log('Contact.tsx intent/interest mapping updated.');
}

