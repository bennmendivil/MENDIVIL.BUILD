const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Add import
if (!content.includes('import AiProjectReporter')) {
  content = content.replace(
    "import AzuraDevelopments from './components/demos/AzuraDevelopments';",
    "import AzuraDevelopments from './components/demos/AzuraDevelopments';\nimport AiProjectReporter from './components/AiProjectReporter';"
  );
}

// Add route boolean
if (!content.includes('const isAiReporterRoute')) {
  content = content.replace(
    "const isAzuraRoute = window.location.pathname === '/web-aec/demos/azura-developments';",
    "const isAzuraRoute = window.location.pathname === '/web-aec/demos/azura-developments';\n  const isAiReporterRoute = window.location.pathname === '/ai-project-reporter';"
  );
}

// Add to render
if (!content.includes('<AiProjectReporter />')) {
  content = content.replace(
    "          ) : isWebAecRoute ? (\n            <WebAEC />\n          ) : (",
    "          ) : isAiReporterRoute ? (\n            <AiProjectReporter />\n          ) : isWebAecRoute ? (\n            <WebAEC />\n          ) : ("
  );
}

fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx");
