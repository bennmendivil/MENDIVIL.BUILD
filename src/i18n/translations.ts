export type Language = 'ES' | 'EN';

export const translations = {
  ES: {
    nav: {
      home: 'INICIO',
      projects: 'PROYECTOS',
      services: 'SERVICIOS',
      leanAi: 'LEAN + IA',
      portfolio: 'PORTAFOLIO',
      lean: 'LEAN',
      contact: 'CONTACTO',
      cta: 'TRABAJEMOS JUNTOS'
    },
    hero: {
      available: '● DISPONIBLE PARA PROYECTOS',
      name1: 'BENJAMÍN',
      name2: 'MENDÍVIL',
      name3: 'HERNÁNDEZ',
      subtitle: 'Detrás de cada gran proyecto, hay alguien que lo hizo real.',
      description: 'Proyectos industriales, hospitalarios y residenciales en México y USA.\nLean Construction aplicado en campo real.\nTecnología e IA al servicio de la obra.',
      tags: ['LEAN CONSTRUCTION', 'CIVIL ENGINEER', 'CONSTRUCTION MANAGER', 'APPLIED AI'],
      cta1: 'VER PROYECTOS →',
      cta2: 'DESCARGAR CV'
    },
    stats: {
      yoeLabel: 'Años de experiencia en obra',
      yoeValue: '14+',
      budgetLabel: 'USD coordinados en un solo proyecto',
      budgetValue: '+$75M',
      budgetNote: 'Constellation Brands Veracruz\n· 5 edificios simultáneos',
      statesLabel: 'Estados de México donde he construido',
      statesValue: '10+',
      sectorsLabel: 'Sectores: Industrial · Hospitalario · Automotriz · Infraestructura · Comercial · Residencial Lujo',
      sectorsValue: '6'
    },
    experience: {
      title: 'OBRA QUE HABLA POR SÍ SOLA',
      subtitle: 'Proyectos de clase mundial. Clientes de alto nivel. Resultados reales.',
      jobs: [

        {
          id: 2,
          title: 'Manager II Site Construction',
          company: 'Worley',
          date: 'May 2023 – Mar 2025',
          location: 'Veracruz',
          description: 'Coordinación simultánea de 5 edificios en la nueva Cervecería Constellation Brands Veracruz, con un presupuesto combinado de $75.9M USD bajo mi coordinación. Edificio de Packaging, superestructuras de concreto para tanques CCT y BBT, reuniones LPS diarias y primera entrega exitosa a Ziemann cumpliendo fechas y estándares internacionales de calidad.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 3,
          title: 'Civil Coordinator',
          company: 'SSOE Group',
          date: 'Jul 2022 – May 2023',
          location: 'Guanajuato',
          description: 'Representante del propietario en el proyecto Toyota Motors GT. Coordinación de obra civil, estructura de acero, acabados y arquitectura con metodología Kanban. Control de calidad con laboratorios certificados.',
          badge: 'AUTOMOTIVE',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 4,
          title: 'Construction Manager · Cushman & Wakefield',
          company: '',
          date: 'Abr 2022 – Jul 2022 · Nogales, Sonora',
          location: '',
          description: "Gerente de Construcción y Owner's Rep para Stanley Black & Decker en nuevo edificio de motores. Gestión directa de presupuesto de $23M USD bajo contrato Open Book. Supervisión de colados de concreto, estructura de acero, pruebas de soldadura y alineación de vigas de riel.",
          badge: 'MANUFACTURING',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 5,
          title: 'Civil Superintendent',
          company: 'Gilbane-Alberici',
          date: 'Aug 2020 – Mar 2022',
          location: 'Obregón, Sonora',
          description: 'Superintendente Civil en expansión de Cervecería Constellation Brands. Nuevos edificios, calderas, superestructuras de concreto, estructuras de acero, vialidades y vías férreas. Pull Plans, PPC, 6WLA y LPS semanal.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 6,
          title: 'Civil Superintendent',
          company: 'Mtorres',
          date: 'Feb 2018 – Aug 2020',
          location: 'Culiacán, Sinaloa',
          description: 'Superintendente Civil en Plaza Pabellón (centro comercial) y Hospital Infantil de Culiacán (7 niveles, 20,000 m² de construcción, contrato directo con Gobierno Federal).',
          badge: 'COMMERCIAL / HEALTHCARE',
          badgeColor: 'border-purple-500 text-purple-500' // Using standard purple for commercial
        },
        {
          id: 7,
          title: 'Steel Structure Superintendent',
          company: 'EMYCSA',
          date: 'Oct 2015 – Aug 2016',
          location: 'San Luis Potosí',
          description: 'Superintendente de Estructuras de Acero en Planta de Expansión MAGNA SLP. Montaje estructural, pintura, paneles metálicos, TPO en cubierta y control de calidad.',
          badge: 'AUTOMOTIVE / STEEL',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 8,
          title: 'Steel Structure Superintendent',
          company: 'Ferrominio',
          date: 'Jan 2014 – Sep 2015',
          location: 'Culiacán / San Luis Potosí',
          description: 'Centro de Distribución Coppel Culiacán y Edificio de Producción A — Ronal Group SLP. Montaje estructural, control de torque en pernos y calidad en soldadura.',
          badge: 'LOGISTICS / INDUSTRIAL',
          badgeColor: 'border-electricBlue text-electricBlue'
        }
      ]
    },
    services: {
      title: '¿EN QUÉ PUEDO AYUDARTE?',
      cards: [
        {
          title: 'PROJECT MANAGEMENT',
          icon: 'HardHat',
          desc: 'Dirección y superintendencia de proyectos industriales, hospitalarios, aeroportuarios e infraestructura de clase mundial. Control total desde ingeniería hasta cierre de obra.',
          bullets: [
            'Coordinación de contratistas y frentes',
            'Control de avance, calidad y seguridad',
            'Sectores: automotriz, cervecero, hospitalario, residencial lujo',
            'Equipos de 5 a 200+ personas'
          ],
          cta: 'Hablemos de tu proyecto →'
        },
        {
          title: 'LEAN CONSTRUCTION',
          icon: 'BarChart2',
          desc: 'Implementación de Last Planner® System, TAKT Planning y metodología Kanban en obra. Resultados medibles desde la primera semana.',
          bullets: [
            'Last Planner® System en obra',
            'TAKT Planning para proyectos repetitivos',
            'Tableros LPS y reuniones diarias',
            'Métricas PPC y análisis de varianzas',
            'Mapeo de flujo de valor'
          ],
          cta: 'Agenda una consultoría →'
        },
        {
          title: 'WEBS PARA INGENIEROS',
          icon: 'Monitor',
          desc: 'Diseño y desarrollo de landing pages y sitios web para ingenieros, constructoras y laboratorios — con IA, criterio técnico y estética de primer nivel.',
          bullets: [
            'Portafolios para ingenieros civiles',
            'Webs para constructoras y desarrolladores',
            'Sitios para laboratorios de suelos y concreto',
            'Integración de herramientas de IA',
            'Plantillas especializadas sector AEC'
          ],
          cta: 'Ver ejemplos →'
        }
      ]
    },
    leanai: {
      title: 'INGENIERÍA + INTELIGENCIA',
      stack: [
        { name: 'Claude AI', desc: 'Documentación y análisis' },
        { name: 'Excel + VBA', desc: 'Automatización de reportes' },
        { name: 'Last Planner®', desc: 'Compromisos semanales' },
        { name: 'TAKT Planning', desc: 'Flujo continuo en obra' },
        { name: 'Procore', desc: 'Gestión de información' },
        { name: 'Antigravity', desc: 'Landing pages con IA' }
      ],
      phrase: 'No improviso en obra. Tampoco en tecnología.',
      paragraph: 'Combino Last Planner®, TAKT Planning e inteligencia artificial para tomar decisiones en obra con información real, en tiempo real. 14 años en campo. Tecnología del futuro.',
      pills: ['PPC promedio: +85%', 'Desperdicio reducido: 30%', 'Sectores: 6']
    },
    education: {
      title: 'FORMACIÓN',
      degree: 'Ingeniero Civil — Universidad Autónoma de Sinaloa',
      locationDate: 'Culiacán, Sinaloa · 2006 – 2011',
      thesis: 'Tesis: Comportamiento sísmico de edificios de acero, marcos rígidos perimetrales vs. espaciales, respuesta inelástica.',
      badge: '🏆 3er Lugar — OLIMPIANEIC Puebla 2010 Diseño Estructural',
      certifications: [
        'NEWBIM Preconstruction Digital Models MAP',
        'Lean Edge Foundational Training',
        'PROCORE Daily Log Training for Superintendents',
        'Revit — Integral Construction Project BIM',
        'PL&EE Kanban Training'
      ]
    },
    contact: {
      title: 'EL PROYECTO MÁS IMPORTANTE ESTÁ POR CONSTRUIRSE.',
      subtitle: 'Tu proyecto merece al ingeniero correcto.',
      whatsapp: 'ESCRIBIR POR WHATSAPP',
      note: 'Proyectos en México · USA · Internacional',
      followMe: 'SÍGUEME EN REDES'
    },
    webAecContact: {
      eyebrow: 'WEB AEC · INICIEMOS TU PROYECTO',
      title: 'TU EMPRESA YA CONSTRUYE.\nAHORA HAGAMOS QUE SE VEA.',
      desc: 'Cuéntame sobre tu empresa y el tipo de sitio que necesitas. Podemos comenzar con una landing profesional, un sitio corporativo, un portafolio de proyectos o una solución digital más completa.',
      name: 'NOMBRE COMPLETO *',
      company: 'EMPRESA *',
      email: 'EMAIL *',
      phone: 'TELÉFONO / WHATSAPP',
      type: 'TIPO DE EMPRESA',
      typeOptions: [
        'Constructora',
        'Ingeniería / Consultoría',
        'Laboratorio',
        'Contratista especializado',
        'Arquitectura',
        'Desarrolladora inmobiliaria',
        'Otro'
      ],
      need: '¿QUÉ NECESITAS?',
      needOptions: [
        'Landing Page',
        'Sitio corporativo',
        'Portafolio de proyectos',
        'Web + automatización',
        'Rediseño de sitio existente',
        'No estoy seguro'
      ],
      message: 'MENSAJE',
      placeholder: 'Cuéntame brevemente sobre tu empresa, proyectos y qué te gustaría lograr con tu sitio web.',
      submit: 'ENVIAR SOLICITUD',
      sending: 'ENVIANDO...',
      success: '¡Mensaje enviado! Te contactamos en menos de 24 horas.',
      orDirectly: 'O CONTÁCTAME DIRECTAMENTE',
      whatsappMsg: 'Hola Benjamín, vi los demos de WEB AEC en MENDIVIL.BUILD y me interesa desarrollar un sitio web para mi empresa.'
    },
    aiReporter: {
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

      finalTitle: "Tu equipo ya genera la información.\nConviértela en inteligencia de proyecto.",
      finalCtaPrimary: "ABRIR AI PROJECT REPORTER",
      finalCtaSecondary: "HABLAR CON MENDIVIL.BUILD"
    },
    footer: {
      slogan: '14+ años. Obra real. Resultados que permanecen.',
      available: '● DISPONIBLE PARA PROYECTOS',
      degree: 'Ing. Civil — Universidad Autónoma de Sinaloa',
      copyright: '© 2026 Benjamín Mendívil Hernández · mendivil.build'
    }
  },
  EN: {
    nav: {
      home: 'HOME',
      projects: 'PROJECTS',
      services: 'SERVICES',
      leanAi: 'LEAN + AI',
      portfolio: 'PORTFOLIO',
      lean: 'LEAN',
      contact: 'CONTACT',
      cta: "LET'S WORK TOGETHER"
    },
    hero: {
      available: '● AVAILABLE FOR PROJECTS',
      name1: 'BENJAMÍN',
      name2: 'MENDÍVIL',
      name3: 'HERNÁNDEZ',
      subtitle: "Behind every great project, there's someone who made it real.",
      description: 'Industrial, healthcare and residential projects in Mexico and the USA.\nLean Construction applied in the real field.\nTechnology and AI at the service of construction.',
      tags: ['LEAN CONSTRUCTION', 'CIVIL ENGINEER', 'CONSTRUCTION MANAGER', 'APPLIED AI'],
      cta1: 'VIEW PROJECTS →',
      cta2: 'DOWNLOAD CV'
    },
    stats: {
      yoeLabel: 'Years of field experience',
      yoeValue: '14+',
      budgetLabel: 'USD coordinated in a single project',
      budgetValue: '+$75M',
      budgetNote: 'Constellation Brands Veracruz\n· 5 simultaneous buildings',
      statesLabel: 'Mexican states where I have built',
      statesValue: '10+',
      sectorsLabel: 'Sectors: Industrial · Healthcare · Automotive · Infrastructure · Commercial · Luxury Residential',
      sectorsValue: '6'
    },
    experience: {
      title: 'WORK THAT SPEAKS FOR ITSELF',
      subtitle: 'World-class projects. High-level clients. Real results.',
      jobs: [
        {
          id: 1,
          title: 'Project Leader · Luxury Residential Development',
          company: '',
          date: 'Jun 2025 – Jan 2026 · Los Cabos, BCS',
          location: '',
          description: 'Full management of 8 ultra-luxury residential villas at Cabo del Sol, Villas del Mar and Chileno Bay Ridge State. Budgets from USD $1.5M to $9.3M per villa. Earned Value Management, executive coordination with owners and high-end hospitality standards.',
          badge: 'LUXURY RESIDENTIAL · LOS CABOS',
          badgeColor: 'border-matteGold text-matteGold'
        },
        {
          id: 2,
          title: 'Manager II Site Construction',
          company: 'Worley',
          date: 'May 2023 – Mar 2025',
          location: 'Veracruz',
          description: 'Simultaneous coordination of 5 buildings at the new Constellation Brands Brewery Veracruz, with a combined budget of $75.9M USD under my coordination. Packaging building, concrete superstructures for CCT and BBT tanks, daily LPS meetings and successful first delivery to Ziemann meeting schedule and international quality standards.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 3,
          title: 'Civil Coordinator',
          company: 'SSOE Group',
          date: 'Jul 2022 – May 2023',
          location: 'Guanajuato',
          description: "Owner's representative at Toyota Motors GT project. Civil, steel structure, finishing and architectural coordination using Kanban methodology. Quality control with certified labs.",
          badge: 'AUTOMOTIVE',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 4,
          title: 'Construction Manager · Cushman & Wakefield',
          company: '',
          date: 'Apr 2022 – Jul 2022 · Nogales, Sonora',
          location: '',
          description: "Construction Manager and Owner's Rep for Stanley Black & Decker on new engine building. Direct management of $23M USD budget under Open Book contract. Supervision of concrete pours, steel structure, welding tests and rail beam alignment.",
          badge: 'MANUFACTURING',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 5,
          title: 'Civil Superintendent',
          company: 'Gilbane-Alberici',
          date: 'Aug 2020 – Mar 2022',
          location: 'Obregón, Sonora',
          description: 'Civil Superintendent at Constellation Brands Brewery expansion. New buildings, boilers, concrete superstructures, steel structures, roads and railways. Pull Plans, PPC, 6WLA and weekly LPS.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 6,
          title: 'Civil Superintendent',
          company: 'Mtorres',
          date: 'Feb 2018 – Aug 2020',
          location: 'Culiacán, Sinaloa',
          description: "Civil Superintendent at Plaza Pabellón (shopping center) and Children's Hospital Culiacán (7 floors, 20,000 sqm, direct federal government contract).",
          badge: 'COMMERCIAL / HEALTHCARE',
          badgeColor: 'border-purple-500 text-purple-500'
        },
        {
          id: 7,
          title: 'Steel Structure Superintendent',
          company: 'EMYCSA',
          date: 'Oct 2015 – Aug 2016',
          location: 'San Luis Potosí',
          description: 'Steel Structure Superintendent at MAGNA Expansion Plant SLP. Structural erection, painting, metal panels, TPO roofing and quality control.',
          badge: 'AUTOMOTIVE / STEEL',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 8,
          title: 'Steel Structure Superintendent',
          company: 'Ferrominio',
          date: 'Jan 2014 – Sep 2015',
          location: 'Culiacán / San Luis Potosí',
          description: 'Coppel Distribution Center Culiacán and Ronal Group Production Building A SLP. Structural erection, bolt torque control and welding quality.',
          badge: 'LOGISTICS / INDUSTRIAL',
          badgeColor: 'border-electricBlue text-electricBlue'
        }
      ]
    },
    services: {
      title: 'HOW CAN I HELP YOU?',
      cards: [
        {
          title: 'PROJECT MANAGEMENT',
          icon: 'HardHat',
          desc: 'Direction and superintendence of industrial, healthcare, airport and world-class infrastructure projects. Full control from engineering through project closeout.',
          bullets: [
            'Contractor and work front coordination',
            'Progress, quality and safety control',
            'Sectors: automotive, brewery, healthcare, luxury residential',
            'Teams of 5 to 200+ people'
          ],
          cta: "Let's talk about your project →"
        },
        {
          title: 'LEAN CONSTRUCTION',
          icon: 'BarChart2',
          desc: 'Implementation of Last Planner® System, TAKT Planning and Kanban methodology on site. Measurable results from week one.',
          bullets: [
            'Last Planner® System on site',
            'TAKT Planning for repetitive projects',
            'LPS boards and daily huddles',
            'PPC metrics and variance analysis',
            'Value stream mapping'
          ],
          cta: 'Schedule a consultation →'
        },
        {
          title: 'WEBSITES FOR ENGINEERS',
          icon: 'Monitor',
          desc: 'Design and development of landing pages and websites for engineers, contractors and labs — with AI, technical expertise and premium aesthetics.',
          bullets: [
            'Portfolios for civil engineers',
            'Websites for contractors and developers',
            'Sites for soil and concrete labs',
            'AI tools integration',
            'Specialized AEC sector templates'
          ],
          cta: 'See examples →'
        }
      ]
    },
    leanai: {
      title: 'ENGINEERING + INTELLIGENCE',
      stack: [
        { name: 'Claude AI', desc: 'Documentation & analysis' },
        { name: 'Excel + VBA', desc: 'Report automation' },
        { name: 'Last Planner®', desc: 'Weekly commitments' },
        { name: 'TAKT Planning', desc: 'Continuous flow on site' },
        { name: 'Procore', desc: 'Information management' },
        { name: 'Antigravity', desc: 'AI-powered landing pages' }
      ],
      phrase: "I don't improvise on site. I don't improvise in technology either.",
      paragraph: 'I combine Last Planner®, TAKT Planning and artificial intelligence to make on-site decisions with real data, in real time. 14 years in the field. Future technology.',
      pills: ['Avg PPC: +85%', 'Waste reduced: 30%', 'Sectors: 6']
    },
    education: {
      title: 'EDUCATION & TRAINING',
      degree: 'Civil Engineer — Universidad Autónoma de Sinaloa',
      locationDate: 'Culiacán, Sinaloa · 2006 – 2011',
      thesis: 'Thesis: Seismic behavior of steel buildings, perimeter vs. spatial rigid frames, inelastic response.',
      badge: '🏆 3rd Place — OLIMPIANEIC Puebla 2010 Structural Design',
      certifications: [
        'NEWBIM Preconstruction Digital Models MAP',
        'Lean Edge Foundational Training',
        'PROCORE Daily Log Training for Superintendents',
        'Revit — Integral Construction Project BIM',
        'PL&EE Kanban Training'
      ]
    },
    contact: {
      title: 'THE MOST IMPORTANT PROJECT IS YET TO BE BUILT.',
      subtitle: 'Your project deserves the right engineer.',
      whatsapp: 'MESSAGE ON WHATSAPP',
      note: 'Projects in Mexico · USA · International',
      followMe: 'FOLLOW ME'
    },
    webAecContact: {
      eyebrow: 'WEB AEC · LET\'S START YOUR PROJECT',
      title: 'YOUR COMPANY ALREADY BUILDS.\nNOW LET\'S MAKE IT VISIBLE.',
      desc: 'Tell me about your company and the type of website you need. We can start with a professional landing page, corporate website, project portfolio or a more complete digital solution.',
      name: 'FULL NAME *',
      company: 'COMPANY *',
      email: 'EMAIL *',
      phone: 'PHONE / WHATSAPP',
      type: 'COMPANY TYPE',
      typeOptions: [
        'Construction Company',
        'Engineering / Consulting',
        'Laboratory',
        'Specialized Contractor',
        'Architecture',
        'Real Estate Developer',
        'Other'
      ],
      need: 'WHAT DO YOU NEED?',
      needOptions: [
        'Landing Page',
        'Corporate Website',
        'Project Portfolio',
        'Web + Automation',
        'Existing Site Redesign',
        'I\'m not sure'
      ],
      message: 'MESSAGE',
      placeholder: 'Tell me briefly about your company, projects and what you would like to achieve with your website.',
      submit: 'SEND REQUEST',
      sending: 'SENDING...',
      success: 'Message sent! We will contact you in less than 24 hours.',
      orDirectly: 'OR CONTACT ME DIRECTLY',
      whatsappMsg: 'Hi Benjamin, I saw the WEB AEC demos on MENDIVIL.BUILD and I\'m interested in developing a website for my company.'
    },
    aiReporter: {
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

      finalTitle: "Your team already generates the information.\nTurn it into project intelligence.",
      finalCtaPrimary: "OPEN AI PROJECT REPORTER",
      finalCtaSecondary: "TALK TO MENDIVIL.BUILD"
    },
    footer: {
      slogan: '14+ years. Real work. Results that last.',
      available: '● AVAILABLE FOR PROJECTS',
      degree: 'Civil Engineer — Universidad Autónoma de Sinaloa',
      copyright: '© 2026 Benjamín Mendívil Hernández · mendivil.build'
    }
  }
};
