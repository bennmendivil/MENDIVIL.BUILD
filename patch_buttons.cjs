const fs = require('fs');

let servicesPath = 'src/components/Services.tsx';
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

// The chip classes
const chipClasses = "group/link inline-flex items-center font-jetbrains text-base font-bold text-[#4A9FD4] px-5 py-2.5 rounded-full bg-[#4A9FD4]/10 border border-[#4A9FD4] hover:bg-[#4A9FD4] hover:text-[#F0F0F0] transition-all duration-200 w-fit";

// Icon classes (inherit text color, just translate on hover)
// I remove text-[#4A9FD4] from the icon so it inherits #4A9FD4 initially and #F0F0F0 on hover.
const iconClasses = "ml-2 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1";

// For isGasave or index 4, 5 text links:
servicesContent = servicesContent.replace(
  /<a href=\{\(card as any\).link\} target=\{isGasave \? "_blank" : "_self"\} rel=\{isGasave \? "noopener noreferrer" : undefined\} className=\{`group\/link font-jetbrains text-sm transition-colors inline-flex items-center duration-300 \$\{isGasave \? 'text-\[#4A9FD4\] hover:text-white' : 'text-matteGold hover:text-white'\}`\}>\s*\{cleanCta\(card\.cta\)\}\s*<ArrowRight className="ml-2 w-4 h-4 text-\[#4A9FD4\] transition-transform duration-200 group-hover\/link:translate-x-1" \/>\s*<\/a>/g,
  `<a href={(card as any).link} target={isGasave ? "_blank" : "_self"} rel={isGasave ? "noopener noreferrer" : undefined} className="${chipClasses}">
                      {cleanCta(card.cta)}
                      <ArrowRight className="${iconClasses}" />
                    </a>`
);

// For standard links:
servicesContent = servicesContent.replace(
  /<a href=\{index === 2 \? "\/web-aec" : "#contact"\} className="group\/link font-jetbrains text-sm text-matteGold hover:text-white transition-colors inline-flex items-center duration-300">\s*\{cleanCta\(card\.cta\)\}\s*<ArrowRight className="ml-2 w-4 h-4 text-\[#4A9FD4\] transition-transform duration-200 group-hover\/link:translate-x-1" \/>\s*<\/a>/g,
  `<a href={index === 2 ? "/web-aec" : "#contact"} className="${chipClasses}">
                      {cleanCta(card.cta)}
                      <ArrowRight className="${iconClasses}" />
                    </a>`
);

fs.writeFileSync(servicesPath, servicesContent);
console.log('Patched Services.tsx buttons');

// Now let's check LeanConstruction.tsx "AGENDA UNA LLAMADA →"
// It uses <a href="#contact" className="..."> {t.cta} </a>
let leanPath = 'src/components/LeanConstruction.tsx';
if (fs.existsSync(leanPath)) {
  let leanContent = fs.readFileSync(leanPath, 'utf8');
  // Wait, I need to know what it currently looks like to replace it accurately.
}
