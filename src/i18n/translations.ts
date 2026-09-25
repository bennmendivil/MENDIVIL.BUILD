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
      headlineP1: 'MÁS CONTROL',
      headlineP2: 'MEJOR EJECUCIÓN',
      headlineP3: 'MEJORES DECISIONES',
      subtitle: 'Ayudo a Owners, Developers & Contractors a mejorar el control de sus proyectos, implementar Lean Construction y usar IA para tomar decisiones más rápidas en obra.',
      description: '',
      tags: ['LEAN CONSTRUCTION', 'CIVIL ENGINEER', 'CONSTRUCTION MANAGER', 'APPLIED AI'],
      cta1: 'HABLEMOS DE TU PROYECTO →',
      cta2: 'VER PROYECTOS REALES →'
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
          reto: 'Coordinación de múltiples contratistas, estructuras e interfaces dentro de un proyecto industrial de gran escala.',
          intervencion: 'Project Management, Last Planner® System, Look Ahead Planning, coordinación diaria y control de cambios.',
          resultado: 'Entrega de superestructuras conforme a las fechas requeridas para la siguiente fase de construcción.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 3,
          title: 'Civil Coordinator',
          company: 'SSOE Group',
          date: 'Jul 2022 – May 2023',
          location: 'Guanajuato',
          reto: 'Ejecución y control de calidad simultáneo en obra civil, estructura de acero, arquitectura y acabados.',
          intervencion: 'Representación del propietario (Owner’s Rep), coordinación mediante metodología Kanban y laboratorios certificados.',
          resultado: 'Cumplimiento de estándares de calidad exigidos por la industria automotriz.',
          badge: 'AUTOMOTIVE',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 4,
          title: 'Construction Manager · Cushman & Wakefield',
          company: '',
          date: 'Abr 2022 – Jul 2022 · Nogales, Sonora',
          location: '',
          reto: 'Gestión transparente de un presupuesto de $23M USD bajo la modalidad Open Book.',
          intervencion: 'Construction Management, supervisión de colados de concreto y alineación milimétrica de vigas de riel.',
          resultado: 'Ejecución financiera controlada y precisión estructural en tiempo.',
          badge: 'MANUFACTURING',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 5,
          title: 'Civil Superintendent',
          company: 'Gilbane-Alberici',
          date: 'Aug 2020 – Mar 2022',
          location: 'Obregón, Sonora',
          reto: 'Coordinación de múltiples contratistas, estructuras e interfaces dentro de un proyecto de expansión industrial de gran escala.',
          intervencion: "Coordination with General Contractor, LEAN EDGE, Look Ahead Planning, Daily Huddles & PCI's.",
          resultado: 'Entrega de superestructuras conforme a las fechas requeridas para la siguiente fase de construcción.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 6,
          title: 'Civil Superintendent',
          company: 'Mtorres',
          date: 'Feb 2018 – Aug 2020',
          location: 'Culiacán, Sinaloa',
          reto: 'Construcción simultánea de un hospital de 7 niveles (20,000 m²) bajo contrato directo con Gobierno Federal.',
          intervencion: 'Superintendencia civil, control de contratistas y seguimiento estricto de avance de obra.',
          resultado: 'Estructura e infraestructura civil ejecutada conforme a normatividad gubernamental.',
          badge: 'COMMERCIAL / HEALTHCARE',
          badgeColor: 'border-purple-500 text-purple-500' // Using standard purple for commercial
        },
        {
          id: 7,
          title: 'Steel Structure Superintendent',
          company: 'EMYCSA',
          date: 'Oct 2015 – Aug 2016',
          location: 'San Luis Potosí',
          reto: 'Montaje estructural de gran volumen para planta de expansión automotriz.',
          intervencion: 'Superintendencia de estructuras de acero, instalación de paneles, cubierta TPO y control de calidad.',
          resultado: 'Estructura metálica entregada sin desviaciones de calidad ni seguridad.',
          badge: 'AUTOMOTIVE / STEEL',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 8,
          title: 'Steel Structure Superintendent',
          company: 'Ferrominio',
          date: 'Jan 2014 – Sep 2015',
          location: 'Culiacán / San Luis Potosí',
          reto: 'Montaje estructural y control de calidad en proyectos logísticos e industriales simultáneos.',
          intervencion: 'Superintendencia de acero, control de torque en pernos y validación de calidad en soldadura.',
          resultado: 'Estructuras montadas y certificadas según especificaciones de ingeniería.',
          badge: 'LOGISTICS / INDUSTRIAL',
          badgeColor: 'border-electricBlue text-electricBlue'
        }
      ]
    },
    services: {
      title: '¿EN QUÉ PUEDO AYUDARTE?',
      cards: [
        {
          title: 'CONTROL Y EJECUCIÓN DE PROYECTOS',
          subtitle: 'Para Owners, Developers y Contractors',
          icon: 'HardHat',
          desc: 'Recupera visibilidad sobre costo, plazo, contratistas y decisiones críticas antes de que el proyecto pierda el control.',
          bullets: [
            'Project Management / Construction Management',
            'Owner’s Rep',
            'Coordinación de contratistas / General Contractor',
            'Control de cambios, estimaciones y presupuesto'
          ],
          mainCta: {
            text: 'HABLEMOS DE TU PROYECTO →',
            link: '#contact'
          },
          secondaryLinks: [
            { text: 'Ver proyectos reales →', link: '#projects' }
          ]
        },
        {
          title: 'LEAN CONSTRUCTION EN CAMPO REAL',
          subtitle: 'Para equipos que necesitan construir con mayor confiabilidad',
          icon: 'BarChart2',
          desc: 'Implementamos sistemas de planificación y control que ayudan a detectar restricciones antes de que afecten la producción.',
          bullets: [
            'Last Planner® System',
            'TAKT Planning',
            'Visual Management',
            'Constraint Log + Action Item Tracking',
            'PPC y cumplimiento de compromisos'
          ],
          mainCta: {
            text: 'CONOCER IMPLEMENTACIÓN LEAN →',
            link: '#lean'
          },
          secondaryLinks: [
            { text: 'Ver Lean Build Simulation →', link: '/lean-build-simulation' }
          ]
        },
        {
          title: 'IA PARA TOMAR DECISIONES MÁS RÁPIDO EN OBRA',
          subtitle: 'Para PMs, Superintendentes, Developers y Contractors',
          icon: 'Cpu',
          desc: 'Automatiza reportes, organiza información de campo y convierte datos dispersos en información lista para decidir.',
          bullets: [
            'Reportes automáticos desde campo',
            'Automatización de minutas y seguimiento',
            'Herramientas personalizadas para proyectos',
            'Visualización y renders con IA'
          ],
          mainCta: {
            text: 'EXPLORAR AI PROJECT REPORTER →',
            link: '/ai-project-reporter'
          },
          secondaryLinks: [
            { text: 'Ver caso de estudio: Torre Nazas →', link: '/servicios/ia-construccion/torre-nazas' },
            { text: 'Probar render con IA →', link: 'https://mendivil-build-studio.higgsfield.app' }
          ]
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
      title: '¿TIENES UN PROYECTO QUE NECESITA MÁS CONTROL?',
      subtitle: 'Cuéntame dónde estás teniendo problemas con plazo, coordinación, producción o información de campo y revisemos cómo podemos ayudarte.',
      formName: 'Nombre',
      formCompany: 'Empresa',
      formContact: 'WhatsApp o Email',
      formNeed: '¿QUÉ NECESITAS?',
      formNeedOptions: [
        'Project Management / Construction Management',
        'Lean Construction',
        'Owner’s Rep',
        'IA aplicada a construcción',
        'Sitio web / solución digital AEC',
        'Otro'
      ],
      formMessage: 'Cuéntame brevemente sobre tu proyecto',
      submit: 'SOLICITAR EVALUACIÓN →',
      orDirectly: '¿Prefieres hablar directamente?',
      whatsapp: 'WHATSAPP →',
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
      headlineP1: 'MORE CONTROL',
      headlineP2: 'BETTER EXECUTION',
      headlineP3: 'BETTER DECISIONS',
      subtitle: 'I help Owners, Developers & Contractors improve their project control, implement Lean Construction, and use AI for faster on-site decision making.',
      description: '',
      tags: ['LEAN CONSTRUCTION', 'CIVIL ENGINEER', 'CONSTRUCTION MANAGER', 'APPLIED AI'],
      cta1: "LET'S TALK ABOUT YOUR PROJECT →",
      cta2: 'VIEW REAL PROJECTS →'
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
          id: 2,
          title: 'Manager II Site Construction',
          company: 'Worley',
          date: 'May 2023 – Mar 2025',
          location: 'Veracruz',
          reto: 'Coordination of multiple contractors, structures and interfaces within a large-scale industrial project.',
          intervencion: 'Project Management, Last Planner® System, Look Ahead Planning, daily coordination and change order control.',
          resultado: 'Superstructures delivered on schedule for the next construction phase.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 3,
          title: 'Civil Coordinator',
          company: 'SSOE Group',
          date: 'Jul 2022 – May 2023',
          location: 'Guanajuato',
          reto: 'Simultaneous execution and quality control across civil, steel structure, architecture and finishing trades.',
          intervencion: "Owner's Rep, coordination using Kanban methodology and certified lab testing.",
          resultado: 'Compliance with strict automotive industry quality standards.',
          badge: 'AUTOMOTIVE',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 4,
          title: 'Construction Manager · Cushman & Wakefield',
          company: '',
          date: 'Apr 2022 – Jul 2022 · Nogales, Sonora',
          location: '',
          reto: 'Transparent management of a $23M USD budget under an Open Book contract.',
          intervencion: 'Construction Management, concrete pour supervision and millimetric rail beam alignment.',
          resultado: 'Controlled financial execution and structural precision on time.',
          badge: 'MANUFACTURING',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 5,
          title: 'Civil Superintendent',
          company: 'Gilbane-Alberici',
          date: 'Aug 2020 – Mar 2022',
          location: 'Obregón, Sonora',
          reto: 'Coordination of multiple contractors, structures and interfaces within a large-scale industrial expansion project.',
          intervencion: "Coordination with General Contractor, LEAN EDGE, Look Ahead Planning, Daily Huddles & PCI's.",
          resultado: 'Superstructures delivered on schedule for the next construction phase.',
          badge: 'INDUSTRIAL / BREWERY',
          badgeColor: 'border-electricBlue text-electricBlue'
        },
        {
          id: 6,
          title: 'Civil Superintendent',
          company: 'Mtorres',
          date: 'Feb 2018 – Aug 2020',
          location: 'Culiacán, Sinaloa',
          reto: 'Simultaneous construction of a 7-story hospital (20,000 sqm) under direct federal government contract.',
          intervencion: 'Civil superintendence, contractor control and strict progress tracking.',
          resultado: 'Civil structure and infrastructure executed according to government regulations.',
          badge: 'COMMERCIAL / HEALTHCARE',
          badgeColor: 'border-purple-500 text-purple-500'
        },
        {
          id: 7,
          title: 'Steel Structure Superintendent',
          company: 'EMYCSA',
          date: 'Oct 2015 – Aug 2016',
          location: 'San Luis Potosí',
          reto: 'High-volume structural erection for an automotive expansion plant.',
          intervencion: 'Steel structure superintendence, metal panel installation, TPO roofing and quality control.',
          resultado: 'Steel structure delivered without quality or safety deviations.',
          badge: 'AUTOMOTIVE / STEEL',
          badgeColor: 'border-concreteGray text-concreteGray'
        },
        {
          id: 8,
          title: 'Steel Structure Superintendent',
          company: 'Ferrominio',
          date: 'Jan 2014 – Sep 2015',
          location: 'Culiacán / San Luis Potosí',
          reto: 'Structural erection and quality control across simultaneous logistics and industrial projects.',
          intervencion: 'Steel superintendence, bolt torque control and welding quality validation.',
          resultado: 'Structures erected and certified to engineering specifications.',
          badge: 'LOGISTICS / INDUSTRIAL',
          badgeColor: 'border-electricBlue text-electricBlue'
        }
      ]
    },
    services: {
      title: 'HOW CAN I HELP YOU?',
      cards: [
        {
          title: 'PROJECT CONTROL & EXECUTION',
          subtitle: 'For Owners, Developers and Contractors',
          icon: 'HardHat',
          desc: 'Regain visibility on cost, schedule, contractors and critical decisions before the project loses control.',
          bullets: [
            'Project Management / Construction Management',
            "Owner's Rep",
            'Contractor coordination / General Contractor',
            'Change order, estimates and budget control'
          ],
          mainCta: {
            text: "LET'S TALK ABOUT YOUR PROJECT →",
            link: '#contact'
          },
          secondaryLinks: [
            { text: 'View real projects →', link: '#projects' }
          ]
        },
        {
          title: 'REAL FIELD LEAN CONSTRUCTION',
          subtitle: 'For teams that need to build with higher reliability',
          icon: 'BarChart2',
          desc: 'We implement planning and control systems that help detect constraints before they impact production.',
          bullets: [
            'Last Planner® System',
            'TAKT Planning',
            'Visual Management',
            'Constraint Log + Action Item Tracking',
            'PPC and commitment fulfillment'
          ],
          mainCta: {
            text: 'EXPLORE LEAN IMPLEMENTATION →',
            link: '#lean'
          },
          secondaryLinks: [
            { text: 'View Lean Build Simulation →', link: '/lean-build-simulation' }
          ]
        },
        {
          title: 'AI FOR FASTER ON-SITE DECISIONS',
          subtitle: 'For PMs, Superintendents, Developers and Contractors',
          icon: 'Cpu',
          desc: 'Automate reports, organize field information and turn scattered data into actionable intelligence.',
          bullets: [
            'Automatic field reports',
            'Minutes and follow-up automation',
            'Custom built tools for projects',
            'AI rendering and visualization'
          ],
          mainCta: {
            text: 'EXPLORE AI PROJECT REPORTER →',
            link: '/ai-project-reporter'
          },
          secondaryLinks: [
            { text: 'Case study: Torre Nazas →', link: '/servicios/ia-construccion/torre-nazas' },
            { text: 'Try AI render tool →', link: 'https://mendivil-build-studio.higgsfield.app' }
          ]
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
      title: 'DO YOU HAVE A PROJECT THAT NEEDS MORE CONTROL?',
      subtitle: "Tell me where you are having issues with schedule, coordination, production or field information and let's see how we can help.",
      formName: 'Name',
      formCompany: 'Company',
      formContact: 'WhatsApp or Email',
      formNeed: 'WHAT DO YOU NEED?',
      formNeedOptions: [
        'Project Management / Construction Management',
        'Lean Construction',
        "Owner's Rep",
        'AI applied to construction',
        'Website / AEC digital solution',
        'Other'
      ],
      formMessage: 'Tell me briefly about your project',
      submit: 'REQUEST EVALUATION →',
      orDirectly: 'Prefer to talk directly?',
      whatsapp: 'WHATSAPP →',
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
