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
          id: 1,
          title: 'Project Leader · Desarrollo Residencial de Lujo',
          company: '',
          date: 'Jun 2025 – Ene 2026 · Los Cabos, BCS',
          location: '',
          description: 'Dirección integral de 8 villas residenciales de ultra lujo en Cabo del Sol, Villas del Mar y Chileno Bay Ridge State. Presupuestos de USD $1.5M a $9.3M por villa. Gestión del Valor Ganado (EV), coordinación ejecutiva con propietarios y estándares hospitality de primer nivel.',
          badge: 'LUXURY RESIDENTIAL · LOS CABOS',
          badgeColor: 'border-matteGold text-matteGold'
        },
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
    footer: {
      slogan: '14+ years. Real work. Results that last.',
      available: '● AVAILABLE FOR PROJECTS',
      degree: 'Civil Engineer — Universidad Autónoma de Sinaloa',
      copyright: '© 2026 Benjamín Mendívil Hernández · mendivil.build'
    }
  }
};
