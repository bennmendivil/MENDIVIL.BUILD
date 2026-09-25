const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Add the handleNavClick function
const navClickLogic = `
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
      setIsMobileMenuOpen(false);
    }
  };
`;

if (!content.includes('handleNavClick')) {
  content = content.replace(
    '  useEffect(() => {',
    navClickLogic + '\n  useEffect(() => {'
  );

  // Replace desktop links
  content = content.replace(
    '<a href="/#hero" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.home}</a>',
    '<a href="/#hero" onClick={(e) => handleNavClick(e, \'#hero\')} className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.home}</a>'
  );
  content = content.replace(
    '<a href="/#projects" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.projects}</a>',
    '<a href="/#projects" onClick={(e) => handleNavClick(e, \'#projects\')} className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.projects}</a>'
  );
  content = content.replace(
    '<a href="/#services" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.services}</a>',
    '<a href="/#services" onClick={(e) => handleNavClick(e, \'#services\')} className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.services}</a>'
  );
  content = content.replace(
    '<a href="/#lean" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.leanAi}</a>',
    '<a href="/#lean" onClick={(e) => handleNavClick(e, \'#lean\')} className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.leanAi}</a>'
  );
  content = content.replace(
    '<a href="/#contact" className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.contact}</a>',
    '<a href="/#contact" onClick={(e) => handleNavClick(e, \'#contact\')} className="font-inter text-sm font-medium text-concreteGray hover:text-matteGold transition-colors">{t.nav.contact}</a>'
  );

  // Replace mobile links
  content = content.replace(
    '<a href="/#hero" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.home}</a>',
    '<a href="/#hero" onClick={(e) => handleNavClick(e, \'#hero\')} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.home}</a>'
  );
  content = content.replace(
    '<a href="/#projects" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.projects}</a>',
    '<a href="/#projects" onClick={(e) => handleNavClick(e, \'#projects\')} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.projects}</a>'
  );
  content = content.replace(
    '<a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.services}</a>',
    '<a href="/#services" onClick={(e) => handleNavClick(e, \'#services\')} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.services}</a>'
  );
  content = content.replace(
    '<a href="/#lean" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.leanAi}</a>',
    '<a href="/#lean" onClick={(e) => handleNavClick(e, \'#lean\')} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.leanAi}</a>'
  );
  content = content.replace(
    '<a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.contact}</a>',
    '<a href="/#contact" onClick={(e) => handleNavClick(e, \'#contact\')} className="px-6 py-4 border-b border-[#2A2A2A] font-barlow font-bold text-white text-[1.2rem] hover:text-[#4A9FD4] transition-colors">{t.nav.contact}</a>'
  );

  fs.writeFileSync('src/components/Navbar.tsx', content);
  console.log("Patched Navbar.tsx");
} else {
  console.log("Navbar.tsx already patched.");
}
