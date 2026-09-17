const fs = require('fs');

let content = fs.readFileSync('src/components/AiProjectReporter.tsx', 'utf8');

// 1. Hero layout fix
content = content.replace(
  'className="mt-20 relative mx-auto w-full max-w-5xl h-[350px] md:h-[600px] flex items-end justify-center perspective-[1000px]"',
  'className="mt-20 relative mx-auto w-full max-w-5xl flex flex-col md:flex-row items-center md:items-end justify-center perspective-[1000px]"'
);

content = content.replace(
  'className="relative w-full max-w-4xl h-[90%] md:h-[95%] bg-[#0A0A0A] border border-white/10 rounded-t-xl overflow-hidden shadow-2xl transform-gpu -rotate-x-2 translate-y-4"',
  'className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-t-xl overflow-hidden shadow-2xl transform-gpu md:-rotate-x-2 md:translate-y-4"'
);

content = content.replace(
  'className="absolute -right-4 md:right-10 bottom-0 w-[120px] md:w-[220px] h-[240px] md:h-[440px] bg-[#0A0A0A] border-4 border-[#1A1A1A] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 transform-gpu rotate-y-[-10deg] translate-y-4 md:translate-y-8"',
  'className="relative md:absolute mt-8 md:mt-0 -right-4 md:right-10 bottom-0 w-[200px] md:w-[240px] bg-[#0A0A0A] border-4 border-[#1A1A1A] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 transform-gpu md:rotate-y-[-10deg] md:translate-y-8"'
);

content = content.replace(
  'className="w-full h-full object-cover object-top opacity-90 mt-8"',
  'className="w-full h-auto object-cover object-top opacity-90 mt-8"'
);

content = content.replace(
  'className="w-full h-full object-cover opacity-95 pt-4 md:pt-6"',
  'className="w-full h-auto object-cover opacity-95 pt-4 md:pt-6"'
);


// 2. Capture (How It Works) layout fix
content = content.replace(
  'className="relative w-full h-[500px] md:h-[600px] bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl"',
  'className="relative w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl"'
);
content = content.replace(
  'className="w-full h-full object-cover object-top opacity-90 mt-8"',
  'className="w-full h-auto object-contain object-top opacity-90 mt-8"'
); // note: replaced twice, but first one already replaced. The second one matches the new report image.

// 3. Report Generation layout fix
content = content.replace(
  'className="relative w-full mx-auto max-w-4xl h-[400px] md:h-[600px] border border-white/10 rounded-xl overflow-hidden shadow-2xl"',
  'className="relative w-full mx-auto max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl"'
);

// 4. History layout fix
content = content.replace(
  'className="relative w-full mx-auto max-w-4xl h-[400px] md:h-[500px] border border-white/10 rounded-xl overflow-hidden shadow-2xl"',
  'className="relative w-full mx-auto max-w-4xl bg-[#0E0E0E] border border-white/10 rounded-xl overflow-hidden shadow-2xl"'
);

// Fix object-cover for all screenshots that are wrapped by these wrappers.
// By default, they have className="w-full h-full object-cover object-top"
// We want w-full h-auto object-contain or just h-auto block
content = content.replace(/className="w-full h-full object-cover object-top"/g, 'className="w-full h-auto object-cover object-top block"');


fs.writeFileSync('src/components/AiProjectReporter.tsx', content);
console.log('AiProjectReporter layout patched.');
