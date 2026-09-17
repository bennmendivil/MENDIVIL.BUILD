const fs = require('fs');

let content = fs.readFileSync('src/components/Services.tsx', 'utf8');

// Add the badge to aiCard
content = content.replace(
  "icon: 'Cpu',",
  "badge: isEs ? \"NUEVO\" : \"NEW\",\n    icon: 'Cpu',"
);

// Update cta and link in aiCard
content = content.replace(
  'cta: isEs ? "Ver aplicaciones →" : "See applications →",\n    link: "#lean" // Adjust link later if needed, assuming #lean for AI applications',
  'cta: isEs ? "Explorar AI Project Reporter →" : "Explore AI Project Reporter →",\n    link: "/ai-project-reporter"'
);

fs.writeFileSync('src/components/Services.tsx', content);
console.log("Patched Services.tsx");
