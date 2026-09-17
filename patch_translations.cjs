const fs = require('fs');

let content = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const esBlock = `    aiReporter: {
      heroEyebrow: "MENDIVIL.BUILD · CONSTRUCTION TECHNOLOGY",
      heroHeadline: "Reportes de obra profesionales, desde campo y en minutos.",
      heroSub: "Captura avance, personal, actividades, incidencias y evidencia fotográfica directamente desde tu teléfono. Convierte la información de campo en un reporte profesional sin pasar horas organizando datos al final del día.",
      demoCta: "Probar demo",
      salesCta: "Solicitar implementación",
      
      problemTitle: "Menos administración. Más tiempo en obra.",
      problemDesc: "La información de campo suele estar fragmentada entre WhatsApp, fotos, Excel, libretas y correos. AI Project Reporter unifica tu proceso.",
      workflow: ["CAPTURA", "ORGANIZA", "GENERA", "COMPARTE"],

      howItWorksTitle: "CÓMO FUNCIONA",
      howSteps: [
        { num: "01", title: "CAPTURA", desc: "Registra actividades, personal y clima directo en campo." },
        { num: "02", title: "EVIDENCIA", desc: "Toma fotos y documenta incidencias al instante." },
        { num: "03", title: "GENERA", desc: "Crea un reporte estructurado y profesional en segundos." },
        { num: "04", title: "COMPARTE", desc: "Guarda en PDF y envía el avance a todos los involucrados." }
      ],

      featuresTitle: "CARACTERÍSTICAS",
      features: [
        { title: "Captura móvil", desc: "Diseñado para usarse desde el teléfono en medio de la obra." },
        { title: "Actividades y avance", desc: "Registro detallado de frentes de trabajo y progreso." },
        { title: "Plan vs Real", desc: "Control de avance contra programa de obra." },
        { title: "Personal de obra", desc: "Control de cuadrillas y fuerza de trabajo por contratista." },
        { title: "Seguridad", desc: "Documentación de charlas de seguridad y recorridos." },
        { title: "Calidad", desc: "Inspecciones, pruebas y validaciones técnicas." },
        { title: "Restricciones", desc: "Identificación de bloqueos y material faltante." },
        { title: "Riesgos", desc: "Alertas tempranas de potenciales retrasos." },
        { title: "Fotografías", desc: "Evidencia visual ligada directamente a las actividades." },
        { title: "Resumen ejecutivo automático", desc: "Síntesis inteligente de la jornada generada al instante." },
        { title: "Historial", desc: "Acceso rápido a reportes de días anteriores." },
        { title: "PDF profesional", desc: "Formato ejecutivo listo para enviar a gerencia y clientes." }
      ],

      usersTitle: "Diseñado para equipos de construcción.",
      users: [
        "Superintendentes",
        "Residentes de obra",
        "Project Managers",
        "Construction Managers",
        "Contratistas",
        "Laboratorios e inspectores"
      ],

      diffTitle: "Construido desde la experiencia de obra.",
      diffDesc: "No diseñamos primero un software y después intentamos adaptarlo a construcción. AI Project Reporter nace de procesos reales de coordinación, supervisión y control de proyectos.",

      pilotTitle: "Implementa AI Project Reporter en tu proyecto.",
      pilotDesc: "Configuramos el flujo de reporte, campos, branding y estructura del reporte de acuerdo a las necesidades de tu empresa y proyecto.",
      pilotCta: "SOLICITAR PROYECTO PILOTO",

      roadmapTitle: "La plataforma continúa creciendo.",
      roadmapLabel: "Próximamente",
      roadmapChips: ["Cloud Sync", "Teams", "Multi-project", "AI Reports", "Executive Dashboard", "Alerts", "Integrations"],

      finalTitle: "Tu equipo ya genera la información.\\nConviértela en inteligencia de proyecto.",
      finalCtaPrimary: "ABRIR AI PROJECT REPORTER",
      finalCtaSecondary: "HABLAR CON MENDIVIL.BUILD"
    },
    footer:`;

const enBlock = `    aiReporter: {
      heroEyebrow: "MENDIVIL.BUILD · CONSTRUCTION TECHNOLOGY",
      heroHeadline: "Professional site reports, from the field in minutes.",
      heroSub: "Capture progress, manpower, activities, incidents and photographic evidence directly from your phone. Turn field information into a professional report without spending hours organizing data at the end of the day.",
      demoCta: "Try demo",
      salesCta: "Request implementation",
      
      problemTitle: "Less admin. More field time.",
      problemDesc: "Field information is typically fragmented across WhatsApp, photos, Excel, notebooks, and emails. AI Project Reporter unifies your process.",
      workflow: ["CAPTURE", "ORGANIZE", "GENERATE", "SHARE"],

      howItWorksTitle: "HOW IT WORKS",
      howSteps: [
        { num: "01", title: "CAPTURE", desc: "Log activities, manpower, and weather directly in the field." },
        { num: "02", title: "EVIDENCE", desc: "Take photos and document incidents instantly." },
        { num: "03", title: "GENERATE", desc: "Create a structured, professional report in seconds." },
        { num: "04", title: "SHARE", desc: "Save as PDF and send progress to all stakeholders." }
      ],

      featuresTitle: "FEATURES",
      features: [
        { title: "Mobile capture", desc: "Designed to be used from the phone in the middle of the site." },
        { title: "Activities & progress", desc: "Detailed tracking of work fronts and completion." },
        { title: "Planned vs Actual", desc: "Progress control against the project baseline." },
        { title: "Manpower", desc: "Crew and labor force tracking by contractor." },
        { title: "Safety", desc: "Documentation of safety talks and site walks." },
        { title: "Quality", desc: "Inspections, testing, and technical validations." },
        { title: "Constraints", desc: "Identification of blockers and missing materials." },
        { title: "Risks", desc: "Early warnings for potential delays." },
        { title: "Photographs", desc: "Visual evidence directly linked to activities." },
        { title: "Automatic executive summary", desc: "Smart synthesis of the daily shift generated instantly." },
        { title: "Report history", desc: "Quick access to reports from previous days." },
        { title: "Professional PDF", desc: "Executive format ready to send to management and clients." }
      ],

      usersTitle: "Designed for construction teams.",
      users: [
        "Superintendents",
        "Site Engineers",
        "Project Managers",
        "Construction Managers",
        "Contractors",
        "Labs and Inspectors"
      ],

      diffTitle: "Built from field experience.",
      diffDesc: "We didn't design software first and then try to adapt it to construction. AI Project Reporter was born from real project coordination, supervision, and control processes.",

      pilotTitle: "Implement AI Project Reporter on your project.",
      pilotDesc: "We configure the reporting workflow, fields, branding, and report structure according to your company and project needs.",
      pilotCta: "REQUEST PILOT PROJECT",

      roadmapTitle: "The platform keeps growing.",
      roadmapLabel: "Coming Soon",
      roadmapChips: ["Cloud Sync", "Teams", "Multi-project", "AI Reports", "Executive Dashboard", "Alerts", "Integrations"],

      finalTitle: "Your team already generates the information.\\nTurn it into project intelligence.",
      finalCtaPrimary: "OPEN AI PROJECT REPORTER",
      finalCtaSecondary: "TALK TO MENDIVIL.BUILD"
    },
    footer:`;

if (!content.includes('aiReporter: {')) {
  // Find first occurrence of footer: for ES
  let firstFooterIndex = content.indexOf('    footer: {');
  if (firstFooterIndex !== -1) {
    content = content.substring(0, firstFooterIndex) + esBlock + ' {' + content.substring(firstFooterIndex + 13);
  }
  
  // Find second occurrence of footer: for EN
  let secondFooterIndex = content.indexOf('    footer: {', firstFooterIndex + 10);
  if (secondFooterIndex !== -1) {
    content = content.substring(0, secondFooterIndex) + enBlock + ' {' + content.substring(secondFooterIndex + 13);
  }
  
  fs.writeFileSync('src/i18n/translations.ts', content);
  console.log("Patched translations.ts");
} else {
  console.log("Translations already exist.");
}
