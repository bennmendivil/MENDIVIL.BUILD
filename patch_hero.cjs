const fs = require('fs');

let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

if (!content.includes('PROBAR AI PROJECT REPORTER')) {
  // Destructure language
  content = content.replace(
    'const { t } = useLanguage();',
    'const { t, language } = useLanguage();'
  );

  // Add the secondary CTA
  content = content.replace(
    '<a href="#projects" className="px-8 py-4 bg-matteGold text-deepBlack font-barlow font-bold text-lg tracking-wider text-center hover:bg-white transition-colors">\n              {t.hero.cta1}\n            </a>',
    `<a href="#projects" className="px-8 py-4 bg-matteGold text-deepBlack font-barlow font-bold text-lg tracking-wider text-center hover:bg-white transition-colors">
              {t.hero.cta1}
            </a>
            <a href="/ai-project-reporter" className="px-8 py-4 bg-transparent border-2 border-electricBlue text-electricBlue font-barlow font-bold text-lg tracking-wider text-center hover:bg-electricBlue hover:text-white transition-colors uppercase">
              {language === 'ES' ? 'PROBAR AI PROJECT REPORTER' : 'TRY AI PROJECT REPORTER'}
            </a>`
  );

  fs.writeFileSync('src/components/Hero.tsx', content);
  console.log("Patched Hero.tsx");
} else {
  console.log("Hero already patched.");
}
