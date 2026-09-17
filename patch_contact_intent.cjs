const fs = require('fs');

let content = fs.readFileSync('src/components/Contact.tsx', 'utf8');

// Insert the synchronous param reading before the return statement
const paramLogic = `
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const intent = searchParams.get('intent');
  let defaultMessage = "";
  if (intent === 'implementation') {
    defaultMessage = isEs ? "Hola, me interesa solicitar la implementación de AI Project Reporter para mi empresa." : "Hi, I am interested in requesting the implementation of AI Project Reporter for my company.";
  } else if (intent === 'pilot') {
    defaultMessage = isEs ? "Hola, me gustaría solicitar un proyecto piloto para AI Project Reporter." : "Hi, I would like to request a pilot project for AI Project Reporter.";
  } else if (intent === 'general') {
    defaultMessage = isEs ? "Hola, me gustaría hablar con MENDIVIL.BUILD sobre AI Project Reporter." : "Hi, I would like to speak with MENDIVIL.BUILD regarding AI Project Reporter.";
  }
`;

if (!content.includes('let defaultMessage = "";')) {
  content = content.replace(
    '  return (',
    paramLogic + '\n  return ('
  );

  content = content.replace(
    '<textarea name="message" id="contact-message" required placeholder={isEs ? "Mensaje" : "Message"} rows={4} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full"></textarea>',
    '<textarea name="message" id="contact-message" required placeholder={isEs ? "Mensaje" : "Message"} defaultValue={defaultMessage} rows={4} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full"></textarea>'
  );

  fs.writeFileSync('src/components/Contact.tsx', content);
  console.log("Patched Contact.tsx");
} else {
  console.log("Contact.tsx already patched.");
}
