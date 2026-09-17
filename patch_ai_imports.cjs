const fs = require('fs');

let content = fs.readFileSync('src/components/AiProjectReporter.tsx', 'utf8');

// Remove unused imports
content = content.replace(
  '  HardHat, Users, Building, PenTool, Database, Cloud, Activity, LayoutDashboard',
  '  HardHat, Users, Database, Cloud, LayoutDashboard'
);
content = content.replace(
  '  const { t, language } = useLanguage();',
  '  const { t } = useLanguage();'
);

fs.writeFileSync('src/components/AiProjectReporter.tsx', content);
console.log("Patched AiProjectReporter.tsx");
