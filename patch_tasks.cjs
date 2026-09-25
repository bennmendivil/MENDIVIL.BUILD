const fs = require('fs');

// --- TASK 2: LeanConstruction.tsx ---
let leanPath = 'src/components/LeanConstruction.tsx';
let leanContent = fs.readFileSync(leanPath, 'utf8');

// Replace bg-[#2A2A2A] with bg-[#1E4A6E] for all cards
leanContent = leanContent.replace(/bg-\[#2A2A2A\]/g, 'bg-[#1E4A6E]');

// Replace border-l-[3px] border-[#4A9FD4] with border-t-[3px] border-[#4A9FD4] for Implement Blocks
leanContent = leanContent.replace(/border-l-\[3px\] border-\[#4A9FD4\]/g, 'border-t-[3px] border-[#4A9FD4]');

fs.writeFileSync(leanPath, leanContent);
console.log('Task 2: Patched LeanConstruction.tsx');

// --- TASK 3: Services.tsx ---
let servicesPath = 'src/components/Services.tsx';
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// Add ArrowRight import if missing
if (!servicesContent.includes('ArrowRight')) {
  servicesContent = servicesContent.replace(
    "import { FolderKanban, Cpu, Link, Search } from 'lucide-react';",
    "import { FolderKanban, Cpu, Link, Search, ArrowRight } from 'lucide-react';"
  );
  
  if (!servicesContent.includes('ArrowRight')) {
      // In case the import looks different
      servicesContent = servicesContent.replace(
        "import {",
        "import { ArrowRight,"
      );
  }
}

// Add cleanCta function before return
const cleanCtaFn = `
  const cleanCta = (text) => text.replace(/\\s*→$/, '');
`;
if (!servicesContent.includes('cleanCta')) {
  servicesContent = servicesContent.replace(
    'return (',
    cleanCtaFn + '\n  return ('
  );
}

// Replace the primary CTA buttons (links index 4 & 5)
// Torre Nazas link
servicesContent = servicesContent.replace(
  '{isEs ? "Caso de estudio: Torre Nazas →" : "Case study: Torre Nazas →"}',
  '{isEs ? "Caso de estudio: Torre Nazas" : "Case study: Torre Nazas"}\n                        <ArrowRight className="ml-2 w-4 h-4 text-[#4A9FD4] transition-transform duration-200 group-hover/link:translate-x-1" />'
);
servicesContent = servicesContent.replace(
  'className="inline-flex justify-center items-center w-full border border-matteGold text-matteGold font-jetbrains text-xs tracking-wider py-3 px-4 hover:bg-matteGold hover:text-[#0F2236] transition-colors uppercase font-bold"',
  'className="group/link inline-flex justify-center items-center w-full border border-matteGold text-matteGold font-jetbrains text-xs tracking-wider py-3 px-4 hover:bg-matteGold hover:text-[#0F2236] transition-colors uppercase font-bold"'
);

// AI render link
servicesContent = servicesContent.replace(
  '{isEs ? "Genera tu render con IA →" : "Try our AI render tool →"}',
  '{isEs ? "Genera tu render con IA" : "Try our AI render tool"}\n                        <ArrowRight className="ml-2 w-4 h-4 text-[#4A9FD4] transition-transform duration-200 group-hover/link:translate-x-1" />'
);
servicesContent = servicesContent.replace(
  'className="inline-flex justify-center items-center w-full bg-[#4A9FD4] text-[#F0F0F0] font-jetbrains text-xs tracking-wider py-3 px-4 hover:bg-[#3b8dbf] transition-colors uppercase font-bold"',
  'className="group/link inline-flex justify-center items-center w-full bg-[#4A9FD4] text-[#F0F0F0] font-jetbrains text-xs tracking-wider py-3 px-4 hover:bg-[#3b8dbf] transition-colors uppercase font-bold"'
);

// Replace the standard text CTAs (isGasave, index 4, index 5, index 2, etc.)
// They look like:
// <a href={(card as any).link} target={isGasave ? "_blank" : "_self"} rel={isGasave ? "noopener noreferrer" : undefined} className={`font-jetbrains text-sm transition-colors inline-flex items-center group-hover:translate-x-1 duration-300 ${isGasave ? 'text-[#4A9FD4] hover:text-white' : 'text-matteGold hover:text-white'}`}>
//   {card.cta}
// </a>

// and:
// <a href={index === 2 ? "/web-aec" : "#contact"} className="font-jetbrains text-sm text-matteGold hover:text-white transition-colors inline-flex items-center group-hover:translate-x-1 duration-300">
//   {card.cta}
// </a>

// We will regex replace the anchor tags.

servicesContent = servicesContent.replace(
  /<a href=\{\(card as any\).link\} target=\{isGasave \? "_blank" : "_self"\} rel=\{isGasave \? "noopener noreferrer" : undefined\} className=\{`font-jetbrains text-sm transition-colors inline-flex items-center group-hover:translate-x-1 duration-300 \$\{isGasave \? 'text-\[#4A9FD4\] hover:text-white' : 'text-matteGold hover:text-white'\}`\}>\s*\{card.cta\}\s*<\/a>/g,
  '<a href={(card as any).link} target={isGasave ? "_blank" : "_self"} rel={isGasave ? "noopener noreferrer" : undefined} className={`group/link font-jetbrains text-sm transition-colors inline-flex items-center duration-300 ${isGasave ? \'text-[#4A9FD4] hover:text-white\' : \'text-matteGold hover:text-white\'}`}>\n                      {cleanCta(card.cta)}\n                      <ArrowRight className="ml-2 w-4 h-4 text-[#4A9FD4] transition-transform duration-200 group-hover/link:translate-x-1" />\n                    </a>'
);

servicesContent = servicesContent.replace(
  /<a href=\{index === 2 \? "\/web-aec" : "#contact"\} className="font-jetbrains text-sm text-matteGold hover:text-white transition-colors inline-flex items-center group-hover:translate-x-1 duration-300">\s*\{card.cta\}\s*<\/a>/g,
  '<a href={index === 2 ? "/web-aec" : "#contact"} className="group/link font-jetbrains text-sm text-matteGold hover:text-white transition-colors inline-flex items-center duration-300">\n                      {cleanCta(card.cta)}\n                      <ArrowRight className="ml-2 w-4 h-4 text-[#4A9FD4] transition-transform duration-200 group-hover/link:translate-x-1" />\n                    </a>'
);

fs.writeFileSync(servicesPath, servicesContent);
console.log('Task 3: Patched Services.tsx');
