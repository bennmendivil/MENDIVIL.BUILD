import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Menu, X, CheckCircle2, ChevronRight, Download, Search, Settings, 
  Database, Activity, FileText, FlaskConical, Gauge, LayoutDashboard, 
  MapPin, Phone, Mail, Building2
} from 'lucide-react';

const stratumDict = {
  ES: {
    nav: {
      home: "INICIO",
      services: "SERVICIOS",
      lab: "LABORATORIO",
      projects: "PROYECTOS",
      tech: "TECNOLOGÍA",
      contact: "CONTACTO",
      quote: "SOLICITAR COTIZACIÓN"
    },
    hero: {
      tag: "LABORATORIO DE MATERIALES · MECÁNICA DE SUELOS · CONTROL DE CALIDAD",
      title: "Resultados confiables.\nDecisiones mejor informadas.",
      desc: "Ensayos de laboratorio y control de calidad para concreto, suelos, terracerías y materiales utilizados en proyectos de construcción.",
      ctaPrimary: "SOLICITAR COTIZACIÓN",
      ctaSecondary: "CONOCER SERVICIOS"
    },
    indicators: {
      tests: "ENSAYOS REALIZADOS",
      samples: "MUESTRAS PROCESADAS",
      reports: "REPORTES ENTREGADOS EN 24 H*",
      types: "TIPOS DE ENSAYO",
      disclaimer: "*Indicadores ficticios utilizados exclusivamente con fines demostrativos."
    },
    services: {
      title: "Control técnico desde el terreno hasta la estructura.",
      concrete: {
        title: "CONCRETO",
        items: ["Muestreo de concreto fresco", "Revenimiento", "Elaboración de especímenes", "Curado de especímenes", "Resistencia a compresión", "Extracción de núcleos", "Determinación de propiedades del concreto"]
      },
      soils: {
        title: "MECÁNICA DE SUELOS",
        items: ["Clasificación de suelos", "Contenido de humedad", "Límites de consistencia", "Granulometría", "Peso volumétrico", "Compactación", "Pruebas Proctor", "CBR", "Caracterización de materiales"]
      },
      earthworks: {
        title: "TERRACERÍAS",
        items: ["Control de compactación", "Densidad en campo", "Verificación de humedad", "Grado de compactación", "Control por capas", "Seguimiento de plataformas", "Rellenos estructurales"]
      },
      materials: {
        title: "MATERIALES",
        items: ["Agregados", "Granulometría", "Absorción", "Peso volumétrico", "Control de materiales", "Muestreo", "Evaluación de propiedades físicas"]
      }
    },
    lab: {
      title: "Precisión detrás de cada resultado.",
      philosophy: "Cada muestra debe mantener trazabilidad desde su recepción hasta la emisión del resultado.",
      steps: [
        { t: "MUESTREO", d: "Recolección precisa en campo." },
        { t: "ENSAYO", d: "Ejecución bajo normas aplicables." },
        { t: "VALIDACIÓN", d: "Revisión técnica de resultados." },
        { t: "REPORTE", d: "Emisión de resultados al cliente." }
      ]
    },
    traceability: {
      title: "Cada muestra tiene una historia.",
      example: {
        id: "STR-C-260914-042",
        project: "PARQUE INDUSTRIAL DELTA",
        element: "LOSA L-03",
        mix: "M30",
        age: "28 DÍAS",
        status: "COMPLETADO"
      }
    },
    projects: {
      title: "Control de calidad aplicado a proyectos.",
      items: [
        { name: "PARQUE INDUSTRIAL DELTA", type: "Industrial", services: "Concreto · Terracerías · Control de compactación" },
        { name: "TORRE BOREAL", type: "Desarrollo vertical", services: "Concreto · Mecánica de Suelos · Control de calidad" },
        { name: "CORREDOR VIAL NORTE", type: "Infraestructura", services: "Terracerías · Suelos · Materiales" }
      ],
      disclaimer: "Proyectos ficticios utilizados exclusivamente para demostración."
    },
    smartlab: {
      title: "Del dato de campo al reporte.",
      subtitle: "Procesos digitales para reducir trabajo manual y mejorar la trazabilidad de la información.",
      steps: ["CAPTURA EN CAMPO", "REGISTRO DIGITAL", "VALIDACIÓN", "PROCESAMIENTO", "GENERACIÓN DE REPORTE", "ENTREGA AL CLIENTE"]
    },
    automation: {
      title: "Menos captura manual.\nMás tiempo para ingeniería.",
      before: {
        title: "ANTES",
        flow: "Formatos → Captura manual → Consolidación → Generación manual → Correo",
        metric: "6 h",
        metricDesc: "GENERACIÓN SEMANAL DE REPORTES"
      },
      after: {
        title: "FLUJO DIGITAL",
        flow: "Registro → Validación → Procesamiento → PDF → Entrega",
        metric: "20 min",
        metricDesc: "FLUJO AUTOMATIZADO"
      },
      disclaimer: "Ejemplo conceptual. Tiempos utilizados exclusivamente para fines demostrativos."
    },
    dashboard: {
      title: "Control en tiempo real.",
      metrics: {
        active: "MUESTRAS ACTIVAS",
        today: "ENSAYOS HOY",
        pending: "PENDIENTES",
        reports: "REPORTES EMITIDOS"
      },
      filters: ["PROYECTO", "FECHA", "TIPO DE ENSAYO", "ESTADO"]
    },
    portal: {
      title: "Tu información disponible cuando la necesitas.",
      tabs: ["PROYECTOS", "MUESTRAS", "RESULTADOS", "REPORTES", "DOCUMENTOS"],
      search: "Buscar por FOLIO, PROYECTO, FECHA o ELEMENTO...",
      download: "DESCARGAR PDF",
      sample: {
        res: "Resistencia:",
        age: "Edad:",
        status: "Status:",
        statusVal: "APROBADO"
      }
    },
    normative: {
      title: "Ensayos bajo procedimientos técnicamente definidos.",
      desc: "Trabajamos mediante procedimientos de ensayo, especificaciones de proyecto, métodos aplicables, control documental, trazabilidad y criterios de aceptación rigurosos."
    },
    contact: {
      title: "¿Necesitas control de calidad para tu proyecto?",
      desc: "Cuéntanos qué estás construyendo y qué servicios de laboratorio necesitas.",
      phone: "+52 (81) 0000 0000",
      email: "laboratorio@stratum.example",
      location: "Monterrey, Nuevo León\nMéxico",
      demoLocation: "Datos de contacto ficticios para fines demostrativos.",
      demoInt: "Integración demostrativa",
      demoProf: "Perfil demostrativo",
      formName: "NOMBRE",
      formCompany: "EMPRESA",
      formEmail: "EMAIL",
      formPhone: "TELÉFONO",
      formProject: "TIPO DE PROYECTO",
      formService: "SERVICIO REQUERIDO",
      formServices: ["Concreto", "Mecánica de Suelos", "Terracerías", "Materiales", "Control de calidad", "Otro"],
      formMsg: "MENSAJE",
      formBtn: "SOLICITAR COTIZACIÓN →",
      formSuccess: "DEMO — En un sitio real esta solicitud sería enviada al laboratorio."
    },
    mendivilCta: {
      q: "¿Tu laboratorio necesita algo así?",
      desc: "MENDIVIL.BUILD desarrolla sitios web, automatizaciones y herramientas digitales especializadas para empresas del sector AEC.",
      btn: "CONOCE WEB AEC →"
    },
    footer: {
      disclaimer: "STRATUM LABS es una empresa ficticia creada exclusivamente por MENDIVIL.BUILD para demostrar conceptos de diseño, desarrollo web y automatización para laboratorios de la industria de la construcción. Todos los nombres, proyectos, muestras, resultados, cifras y métricas mostrados son ficticios."
    }
  },
  EN: {
    nav: {
      home: "HOME",
      services: "SERVICES",
      lab: "LABORATORY",
      projects: "PROJECTS",
      tech: "TECHNOLOGY",
      contact: "CONTACT",
      quote: "REQUEST QUOTE"
    },
    hero: {
      tag: "CONSTRUCTION MATERIALS · SOIL MECHANICS · QUALITY CONTROL",
      title: "Reliable results.\nBetter informed decisions.",
      desc: "Laboratory testing and quality control for concrete, soils, earthworks, and materials used in construction projects.",
      ctaPrimary: "REQUEST A QUOTE",
      ctaSecondary: "VIEW SERVICES"
    },
    indicators: {
      tests: "TESTS PERFORMED",
      samples: "SAMPLES PROCESSED",
      reports: "REPORTS DELIVERED IN 24H*",
      types: "TEST TYPES",
      disclaimer: "*Fictional indicators used exclusively for demonstration purposes."
    },
    services: {
      title: "Technical control from the ground to the structure.",
      concrete: {
        title: "CONCRETE",
        items: ["Fresh concrete sampling", "Slump test", "Specimen fabrication", "Specimen curing", "Compressive strength", "Core extraction", "Determination of concrete properties"]
      },
      soils: {
        title: "SOIL MECHANICS",
        items: ["Soil classification", "Moisture content", "Consistency limits", "Sieve analysis", "Volumetric weight", "Compaction", "Proctor tests", "CBR", "Material characterization"]
      },
      earthworks: {
        title: "EARTHWORKS",
        items: ["Compaction control", "Field density", "Moisture verification", "Degree of compaction", "Layer control", "Platform monitoring", "Structural backfills"]
      },
      materials: {
        title: "MATERIALS",
        items: ["Aggregates", "Sieve analysis", "Absorption", "Volumetric weight", "Material control", "Sampling", "Physical properties evaluation"]
      }
    },
    lab: {
      title: "Precision behind every result.",
      philosophy: "Every sample must maintain traceability from its reception to the issuance of the result.",
      steps: [
        { t: "SAMPLING", d: "Precise field collection." },
        { t: "TESTING", d: "Execution under applicable standards." },
        { t: "VALIDATION", d: "Technical review of results." },
        { t: "REPORTING", d: "Issuance of results to the client." }
      ]
    },
    traceability: {
      title: "Every sample has a story.",
      example: {
        id: "STR-C-260914-042",
        project: "DELTA INDUSTRIAL PARK",
        element: "SLAB L-03",
        mix: "M30",
        age: "28 DAYS",
        status: "COMPLETED"
      }
    },
    projects: {
      title: "Quality control applied to projects.",
      items: [
        { name: "DELTA INDUSTRIAL PARK", type: "Industrial", services: "Concrete · Earthworks · Compaction control" },
        { name: "BOREAL TOWER", type: "Vertical development", services: "Concrete · Soil Mechanics · Quality control" },
        { name: "NORTH HIGHWAY CORRIDOR", type: "Infrastructure", services: "Earthworks · Soils · Materials" }
      ],
      disclaimer: "Fictional projects used exclusively for demonstration."
    },
    smartlab: {
      title: "From field data to the report.",
      subtitle: "Digital processes to reduce manual work and improve information traceability.",
      steps: ["FIELD CAPTURE", "DIGITAL REGISTRATION", "VALIDATION", "PROCESSING", "REPORT GENERATION", "DELIVERY TO CLIENT"]
    },
    automation: {
      title: "Less manual entry.\nMore time for engineering.",
      before: {
        title: "BEFORE",
        flow: "Forms → Manual entry → Consolidation → Manual generation → Email",
        metric: "6 h",
        metricDesc: "WEEKLY REPORT GENERATION"
      },
      after: {
        title: "DIGITAL FLOW",
        flow: "Registration → Validation → Processing → PDF → Delivery",
        metric: "20 min",
        metricDesc: "AUTOMATED FLOW"
      },
      disclaimer: "Conceptual example. Times used exclusively for demonstration purposes."
    },
    dashboard: {
      title: "Real-time control.",
      metrics: {
        active: "ACTIVE SAMPLES",
        today: "TESTS TODAY",
        pending: "PENDING",
        reports: "REPORTS ISSUED"
      },
      filters: ["PROJECT", "DATE", "TEST TYPE", "STATUS"]
    },
    portal: {
      title: "Your information available when you need it.",
      tabs: ["PROJECTS", "SAMPLES", "RESULTS", "REPORTS", "DOCUMENTS"],
      search: "Search by ID, PROJECT, DATE or ELEMENT...",
      download: "DOWNLOAD PDF",
      sample: {
        res: "Strength:",
        age: "Age:",
        status: "Status:",
        statusVal: "APPROVED"
      }
    },
    normative: {
      title: "Testing under technically defined procedures.",
      desc: "We work through testing procedures, project specifications, applicable methods, document control, traceability, and rigorous acceptance criteria."
    },
    contact: {
      title: "Need quality control for your project?",
      desc: "Tell us what you are building and what laboratory services you need.",
      phone: "+52 (81) 0000 0000",
      email: "laboratorio@stratum.example",
      location: "Monterrey, Nuevo Leon\nMexico",
      demoLocation: "Fictional contact information for demonstration purposes.",
      demoInt: "Demo integration",
      demoProf: "Demo profile",
      formName: "NAME",
      formCompany: "COMPANY",
      formEmail: "EMAIL",
      formPhone: "PHONE",
      formProject: "PROJECT TYPE",
      formService: "REQUIRED SERVICE",
      formServices: ["Concrete", "Soil Mechanics", "Earthworks", "Materials", "Quality Control", "Other"],
      formMsg: "MESSAGE",
      formBtn: "REQUEST A QUOTE →",
      formSuccess: "DEMO — On a live website this request would be sent to the laboratory."
    },
    mendivilCta: {
      q: "Does your laboratory need something like this?",
      desc: "MENDIVIL.BUILD develops professional websites, automations, and digital tools specialized for AEC companies.",
      btn: "DISCOVER WEB AEC →"
    },
    footer: {
      disclaimer: "STRATUM LABS is a fictional company created exclusively by MENDIVIL.BUILD to demonstrate design, web development, and automation concepts for laboratories in the construction industry. All names, projects, samples, results, figures, and metrics shown are fictional."
    }
  }
};

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: { end: number, duration?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuad = (t: number) => t * (2 - t);
            setCount(Math.floor(end * easeOutQuad(progress)));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default function StratumLabs() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = stratumDict[language as 'ES' | 'EN'];

  // Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stratum-fade').forEach((el) => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [language]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#0369A1] selection:text-white">
      {/* LABEL */}
      <div className="fixed top-24 right-4 md:right-8 z-50 pointer-events-none flex justify-end">
        <div className="bg-[#0F172A] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded shadow-lg opacity-90 uppercase">
          {language === 'ES' ? 'DEMO · EMPRESA FICTICIA' : 'DEMO · FICTIONAL COMPANY'}
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }}>
            <div className="w-8 h-8 bg-[#0369A1] flex items-center justify-center group-hover:bg-[#0F172A] transition-colors">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <div className="font-bold text-xl leading-tight tracking-tight text-[#0F172A]">
              STRATUM<br/><span className="text-[#0369A1]">LABS</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="text-sm font-semibold text-[#334155] hover:text-[#0369A1] transition-colors">{t.nav.services}</a>
            <a href="#laboratorio" onClick={(e) => handleNavClick(e, '#laboratorio')} className="text-sm font-semibold text-[#334155] hover:text-[#0369A1] transition-colors">{t.nav.lab}</a>
            <a href="#proyectos" onClick={(e) => handleNavClick(e, '#proyectos')} className="text-sm font-semibold text-[#334155] hover:text-[#0369A1] transition-colors">{t.nav.projects}</a>
            <a href="#tecnologia" onClick={(e) => handleNavClick(e, '#tecnologia')} className="text-sm font-semibold text-[#334155] hover:text-[#0369A1] transition-colors">{t.nav.tech}</a>
            
            <div className="w-px h-4 bg-gray-300" />
            <button onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')} className="text-sm font-bold text-[#0369A1] hover:text-[#0F172A] transition-colors uppercase tracking-widest w-8">
              {language}
            </button>
            <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-[#0369A1] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#0F172A] transition-colors tracking-widest uppercase">
              {t.nav.quote}
            </a>
          </nav>

          <button className="lg:hidden text-[#0F172A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white pt-24 px-6 flex flex-col gap-6 lg:hidden">
          <a href="#servicios" className="text-2xl font-bold tracking-tight text-[#0F172A]" onClick={(e) => handleNavClick(e, '#servicios')}>{t.nav.services}</a>
          <a href="#laboratorio" className="text-2xl font-bold tracking-tight text-[#0F172A]" onClick={(e) => handleNavClick(e, '#laboratorio')}>{t.nav.lab}</a>
          <a href="#proyectos" className="text-2xl font-bold tracking-tight text-[#0F172A]" onClick={(e) => handleNavClick(e, '#proyectos')}>{t.nav.projects}</a>
          <a href="#tecnologia" className="text-2xl font-bold tracking-tight text-[#0F172A]" onClick={(e) => handleNavClick(e, '#tecnologia')}>{t.nav.tech}</a>
          <a href="#contacto" className="text-2xl font-bold tracking-tight text-[#0F172A]" onClick={(e) => handleNavClick(e, '#contacto')}>{t.nav.contact}</a>
          <div className="mt-8 flex gap-4">
            <button onClick={() => { setLanguage('ES'); setIsMenuOpen(false); }} className={`px-4 py-2 text-sm font-bold border ${language === 'ES' ? 'bg-[#0369A1] text-white border-[#0369A1]' : 'border-gray-300 text-gray-500'}`}>ES</button>
            <button onClick={() => { setLanguage('EN'); setIsMenuOpen(false); }} className={`px-4 py-2 text-sm font-bold border ${language === 'EN' ? 'bg-[#0369A1] text-white border-[#0369A1]' : 'border-gray-300 text-gray-500'}`}>EN</button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="stratum-fade">
              <div className="inline-block text-[10px] md:text-xs font-bold tracking-widest text-[#0369A1] uppercase mb-6 px-3 py-1 bg-[#0369A1]/10 rounded border border-[#0369A1]/20">
                {t.hero.tag}
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight mb-6 whitespace-pre-line tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-[#334155] mb-10 max-w-lg leading-relaxed">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-[#0369A1] text-white text-sm font-bold tracking-widest px-8 py-4 hover:bg-[#0F172A] transition-colors text-center uppercase shadow-xl shadow-[#0369A1]/20">
                  {t.hero.ctaPrimary}
                </a>
                <a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')} className="border border-[#cbd5e1] bg-white text-[#0F172A] text-sm font-bold tracking-widest px-8 py-4 hover:border-[#0F172A] transition-colors text-center uppercase">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="stratum-fade lg:pl-10">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0369A1] translate-x-4 translate-y-4 -z-10"></div>
                <img src="/demos/stratum/stratum_hero_1789424856819.png" alt="Laboratorio de Materiales" className="w-full h-auto object-cover shadow-2xl border border-white" />
                
                {/* Overlay Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0F172A] text-white flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0F172A] tracking-wider">ISO 9001:2015</div>
                    <div className="text-xs text-gray-500">QUALITY SYSTEM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stratum-fade">
              <div className="text-3xl md:text-5xl font-extrabold text-[#0369A1] mb-2 font-mono tracking-tighter"><AnimatedCounter end={18500} prefix="+" /></div>
              <div className="text-xs font-bold text-[#64748B] tracking-widest uppercase">{t.indicators.tests}</div>
            </div>
            <div className="stratum-fade" style={{transitionDelay: '100ms'}}>
              <div className="text-3xl md:text-5xl font-extrabold text-[#0369A1] mb-2 font-mono tracking-tighter"><AnimatedCounter end={6200} prefix="+" /></div>
              <div className="text-xs font-bold text-[#64748B] tracking-widest uppercase">{t.indicators.samples}</div>
            </div>
            <div className="stratum-fade" style={{transitionDelay: '200ms'}}>
              <div className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-2 font-mono tracking-tighter"><AnimatedCounter end={96} suffix="%" /></div>
              <div className="text-xs font-bold text-[#64748B] tracking-widest uppercase">{t.indicators.reports}</div>
            </div>
            <div className="stratum-fade" style={{transitionDelay: '300ms'}}>
              <div className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-2 font-mono tracking-tighter"><AnimatedCounter end={12} /></div>
              <div className="text-xs font-bold text-[#64748B] tracking-widest uppercase">{t.indicators.types}</div>
            </div>
          </div>
          <div className="mt-8 text-right text-[10px] text-gray-400 italic">
            {t.indicators.disclaimer}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-16 text-center max-w-2xl mx-auto tracking-tight stratum-fade">{t.services.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { data: t.services.concrete, img: "/demos/stratum/stratum_concrete_1789424866516.png", icon: <Building2 className="w-5 h-5" /> },
              { data: t.services.soils, img: "/demos/stratum/stratum_soil_1789424876313.png", icon: <Database className="w-5 h-5" /> },
              { data: t.services.earthworks, img: "/demos/stratum/stratum_field_1789424894997.png", icon: <Activity className="w-5 h-5" /> },
              { data: t.services.materials, img: "/demos/stratum/stratum_tech_1789424885426.png", icon: <LayoutDashboard className="w-5 h-5" /> }
            ].map((srv, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 stratum-fade group flex flex-col h-full">
                <div className="h-48 overflow-hidden relative border-b border-gray-100">
                  <div className="absolute inset-0 bg-[#0369A1]/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={srv.img} alt={srv.data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-white p-2 shadow">
                    {srv.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-6 tracking-tight">{srv.data.title}</h3>
                  <ul className="space-y-3 mb-8 flex-1">
                    {srv.data.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9488] mt-1 flex-shrink-0" />
                        <span className="text-sm text-[#334155] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="text-[#0369A1] font-bold text-xs tracking-widest uppercase flex items-center gap-2 group-hover:text-[#0F172A] transition-colors">
                      {t.nav.quote} <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LABORATORIO & TRAZABILIDAD */}
      <section id="laboratorio" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 stratum-fade">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6 tracking-tight">{t.lab.title}</h2>
            <p className="text-xl md:text-2xl font-medium text-[#0369A1] max-w-3xl mx-auto leading-relaxed border-b-2 border-[#0D9488] pb-8 inline-block">
              {t.lab.philosophy}
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -z-10 -translate-y-1/2" />
            
            {t.lab.steps.map((step, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 text-center stratum-fade shadow-sm relative group hover:border-[#0369A1] transition-colors">
                <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-[#0369A1] mx-auto mb-6 group-hover:bg-[#0369A1] group-hover:text-white transition-colors">
                  0{i+1}
                </div>
                <h4 className="text-lg font-extrabold text-[#0F172A] mb-3 tracking-tight">{step.t}</h4>
                <p className="text-sm text-[#64748B]">{step.d}</p>
              </div>
            ))}
          </div>

          {/* Traceability Flow */}
          <div className="bg-[#0F172A] rounded-xl p-8 md:p-12 text-white stratum-fade overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 p-32 bg-[#0369A1] opacity-20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-10 text-center">{t.traceability.title}</h3>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              
              {/* Vertical Path representation */}
              <div className="flex flex-row lg:flex-col items-center gap-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                <div className="px-4 py-2 border border-gray-700 bg-gray-800/50">OBRA</div>
                <div className="h-8 w-px lg:w-8 lg:h-px bg-[#0369A1]" />
                <div className="px-4 py-2 border border-gray-700 bg-gray-800/50">MUESTREO</div>
                <div className="h-8 w-px lg:w-8 lg:h-px bg-[#0369A1]" />
                <div className="px-4 py-2 border border-gray-700 bg-gray-800/50">ID</div>
              </div>

              {/* Tag Example */}
              <div className="bg-white text-[#0F172A] p-6 rounded shadow-2xl min-w-[280px] font-mono transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4">
                  <div className="font-bold text-lg">SPECIMEN ID</div>
                  <div className="text-xl">{t.traceability.example.id}</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-3">
                    <span className="text-gray-500 col-span-1">PROJECT</span>
                    <span className="font-bold col-span-2 text-right">{t.traceability.example.project}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-gray-500 col-span-1">ELEMENT</span>
                    <span className="font-bold col-span-2 text-right">{t.traceability.example.element}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-gray-500 col-span-1">MIX</span>
                    <span className="font-bold col-span-2 text-right">{t.traceability.example.mix}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-gray-500 col-span-1">TEST AGE</span>
                    <span className="font-bold col-span-2 text-right">{t.traceability.example.age}</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-xs text-gray-500">STATUS</span>
                  <span className="bg-[#10B981] text-white px-2 py-1 text-xs font-bold">{t.traceability.example.status}</span>
                </div>
                {/* Barcode visual */}
                <div className="mt-4 flex gap-1 h-8 opacity-60">
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="bg-black h-full" style={{ width: `${Math.random() * 4 + 1}px` }} />
                  ))}
                </div>
              </div>

              {/* Vertical Path representation pt2 */}
              <div className="flex flex-row lg:flex-col items-center gap-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                <div className="h-8 w-px lg:w-8 lg:h-px bg-[#0369A1]" />
                <div className="px-4 py-2 border border-[#0D9488] text-[#0D9488] bg-[#0D9488]/10 animate-pulse">ENSAYO</div>
                <div className="h-8 w-px lg:w-8 lg:h-px bg-gray-700" />
                <div className="px-4 py-2 border border-gray-700 bg-gray-800/50">VALIDACIÓN</div>
                <div className="h-8 w-px lg:w-8 lg:h-px bg-gray-700" />
                <div className="px-4 py-2 border border-gray-700 bg-gray-800/50">CLIENTE</div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24 bg-[#F8FAFC] border-t border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-12 text-center tracking-tight stratum-fade">{t.projects.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.projects.items.map((proj, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 hover:border-[#0369A1] transition-colors stratum-fade group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-[#F8FAFC] border border-gray-200 flex items-center justify-center text-[#0369A1] mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#64748B] tracking-widest uppercase mb-2">{proj.type}</div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">{proj.name}</h3>
                <div className="text-sm text-[#334155] border-t border-gray-100 pt-4 mt-auto">
                  <span className="font-bold text-[#0369A1]">Srv:</span> {proj.services}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-[10px] text-gray-400 italic">
            {t.projects.disclaimer}
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA & SMART LAB */}
      <section id="tecnologia" className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#0369A1 1px, transparent 1px), linear-gradient(90deg, #0369A1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Del dato al reporte */}
          <div className="text-center mb-24 stratum-fade">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">{t.smartlab.title}</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">{t.smartlab.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-32 stratum-fade">
            {t.smartlab.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#0D9488] font-mono text-xs mb-3">
                    0{i+1}
                  </div>
                  <div className="text-xs font-bold tracking-widest text-gray-300 w-24 text-center">{step}</div>
                </div>
                {i < t.smartlab.steps.length - 1 && (
                  <div className="hidden md:block">
                    <ChevronRight className="w-5 h-5 text-[#0369A1]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Automatización */}
          <div className="max-w-5xl mx-auto stratum-fade">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-12 text-center text-white whitespace-pre-line tracking-tight">{t.automation.title}</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-[#1E293B] border border-[#334155] p-8 md:p-12">
                <div className="text-xs font-bold text-gray-500 tracking-widest mb-6">{t.automation.before.title}</div>
                <div className="text-5xl font-mono text-gray-400 mb-2">{t.automation.before.metric}</div>
                <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-10">{t.automation.before.metricDesc}</div>
                <div className="text-sm text-gray-400 leading-relaxed font-mono opacity-60">
                  {t.automation.before.flow.split(' → ').map((item, i, arr) => (
                    <span key={i}>
                      {item}{i < arr.length - 1 && <span className="block text-gray-600 my-2">↓</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="bg-[#0369A1]/10 border border-[#0369A1]/30 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D9488] opacity-10 blur-3xl rounded-full" />
                <div className="text-xs font-bold text-[#0D9488] tracking-widest mb-6">{t.automation.after.title}</div>
                <div className="text-5xl font-mono text-white mb-2">{t.automation.after.metric}</div>
                <div className="text-[10px] text-[#0369A1] tracking-widest uppercase mb-10">{t.automation.after.metricDesc}</div>
                <div className="text-sm text-gray-200 leading-relaxed font-mono">
                  {t.automation.after.flow.split(' → ').map((item, i, arr) => (
                    <span key={i}>
                      {item}{i < arr.length - 1 && <span className="block text-[#0D9488] my-2">↓</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-[10px] text-gray-500 italic">
              {t.automation.disclaimer}
            </div>
          </div>

        </div>
      </section>

      {/* DASHBOARD & PORTAL MOCKUPS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Dashboard */}
          <div className="mb-24 stratum-fade">
            <h2 className="text-3xl font-extrabold text-[#0F172A] mb-10 text-center tracking-tight">{t.dashboard.title}</h2>
            <div className="bg-white border border-gray-200 shadow-2xl rounded-lg overflow-hidden">
              {/* App Bar */}
              <div className="bg-[#0F172A] h-12 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Gauge className="w-4 h-4 text-[#0369A1]" />
                  <span className="text-xs font-bold tracking-widest">STRATUM OS</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
              </div>
              {/* Dashboard Content */}
              <div className="p-6 md:p-10 bg-[#F1F5F9]">
                <div className="flex flex-wrap gap-2 mb-8">
                  {t.dashboard.filters.map((f, i) => (
                    <div key={i} className="bg-white border border-gray-300 text-[10px] font-bold text-gray-500 tracking-widest px-3 py-1.5 rounded flex items-center gap-2 cursor-pointer hover:border-[#0369A1]">
                      {f} <ChevronRight className="w-3 h-3 rotate-90" />
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { l: t.dashboard.metrics.active, v: "126", c: "text-[#0369A1]" },
                    { l: t.dashboard.metrics.today, v: "38", c: "text-[#0F172A]" },
                    { l: t.dashboard.metrics.pending, v: "17", c: "text-amber-600" },
                    { l: t.dashboard.metrics.reports, v: "42", c: "text-[#0D9488]" }
                  ].map((m, i) => (
                    <div key={i} className="bg-white border border-gray-200 p-4 rounded shadow-sm">
                      <div className="text-[10px] font-bold text-gray-500 tracking-widest mb-2">{m.l}</div>
                      <div className={`text-3xl font-mono ${m.c}`}>{m.v}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 bg-white border border-gray-200 p-6 rounded shadow-sm h-64 flex flex-col">
                    <div className="text-xs font-bold text-gray-500 tracking-widest mb-4">TEST VOLUME (7 DAYS)</div>
                    <div className="flex-1 border-b border-l border-gray-200 flex items-end gap-2 p-2 pt-8">
                      {[40, 60, 35, 80, 50, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#0369A1]/20 hover:bg-[#0369A1] transition-colors rounded-t" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded shadow-sm h-64">
                    <div className="text-xs font-bold text-gray-500 tracking-widest mb-4">STATUS DIST</div>
                    <div className="flex items-center justify-center h-full pb-4">
                      {/* Fake Donut Chart */}
                      <div className="w-32 h-32 rounded-full border-[16px] border-[#F1F5F9] border-t-[#0369A1] border-r-[#0369A1] border-b-[#0D9488] border-l-amber-500 animate-[spin_10s_linear_infinite]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Portal */}
          <div className="stratum-fade">
            <h2 className="text-3xl font-extrabold text-[#0F172A] mb-10 text-center tracking-tight">{t.portal.title}</h2>
            <div className="bg-white border border-gray-200 shadow-xl overflow-hidden max-w-4xl mx-auto rounded">
              <div className="flex flex-wrap border-b border-gray-200 bg-[#F8FAFC]">
                {t.portal.tabs.map((tab, i) => (
                  <div key={i} className={`px-6 py-4 text-xs font-bold tracking-widest cursor-pointer ${i === 2 ? 'bg-white text-[#0369A1] border-t-2 border-[#0369A1]' : 'text-gray-500 hover:text-[#0F172A]'}`}>
                    {tab}
                  </div>
                ))}
              </div>
              <div className="p-8">
                <div className="flex gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder={t.portal.search} className="w-full pl-10 pr-4 py-3 bg-[#F8FAFC] border border-gray-200 text-sm focus:outline-none focus:border-[#0369A1]" disabled />
                  </div>
                  <button className="bg-[#0F172A] text-white px-6 py-3 text-xs font-bold tracking-widest hidden md:block">FILTER</button>
                </div>
                
                {/* Result Item */}
                <div className="border border-gray-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#0369A1] transition-colors cursor-pointer group">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-[#0369A1]" />
                      <span className="font-mono font-bold text-lg text-[#0F172A]">{t.traceability.example.id}</span>
                    </div>
                    <div className="text-sm text-[#64748B] flex flex-wrap gap-4">
                      <span>{t.traceability.example.project}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{t.traceability.example.element}</span>
                      <span className="hidden md:inline">•</span>
                      <span>2026-09-14</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">{t.portal.sample.res}</div>
                      <div className="font-mono font-bold text-[#0F172A]">32.4 MPa</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">{t.portal.sample.age}</div>
                      <div className="font-mono font-bold text-[#0F172A]">{t.traceability.example.age}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">{t.portal.sample.status}</div>
                      <div className="bg-[#10B981]/10 text-[#10B981] px-2 py-0.5 text-xs font-bold rounded">{t.portal.sample.statusVal}</div>
                    </div>
                    <button className="text-[#0369A1] hover:text-[#0F172A] hidden lg:block" title={t.portal.download}>
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NORMATIVIDAD */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-3xl stratum-fade">
          <Settings className="w-8 h-8 text-gray-300 mx-auto mb-6" />
          <h3 className="text-xl md:text-2xl font-extrabold text-[#0F172A] mb-4 tracking-tight">{t.normative.title}</h3>
          <p className="text-[#64748B]">{t.normative.desc}</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-[#F8FAFC] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-5 stratum-fade">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6 tracking-tight">{t.contact.title}</h2>
              <p className="text-lg text-[#64748B] mb-12">{t.contact.desc}</p>
              
              <div className="space-y-8 mb-16">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">
                    <Phone className="w-4 h-4" /> {t.contact.formPhone}
                  </div>
                  <div className="text-lg text-[#0F172A] font-medium">{t.contact.phone}</div>
                  <div className="group relative inline-block mt-1">
                    <div className="flex items-center gap-2 text-[#0D9488] cursor-help">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                      <span className="text-xs font-bold">WhatsApp</span>
                    </div>
                    <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-max bg-[#0F172A] text-white text-[10px] px-3 py-2 rounded shadow-xl">{t.contact.demoInt}</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">
                    <Mail className="w-4 h-4" /> {t.contact.formEmail}
                  </div>
                  <div className="text-lg text-[#0F172A] font-medium">{t.contact.email}</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">
                    <MapPin className="w-4 h-4" /> Ubicación
                  </div>
                  <div className="text-lg text-[#0F172A] font-medium whitespace-pre-line">{t.contact.location}</div>
                </div>
              </div>

              {/* Redes - SVG icons */}
              <div className="flex items-center gap-4">
                {[
                  { name: 'LinkedIn', svg: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
                  { name: 'Instagram', svg: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                  { name: 'Facebook', svg: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-400 cursor-help hover:text-[#0369A1] hover:border-[#0369A1] transition-colors bg-white shadow-sm">
                      {item.svg}
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-[#0F172A] text-white text-[10px] px-3 py-2 rounded shadow-xl z-20">
                      {t.contact.demoProf}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-[10px] font-mono text-gray-500 uppercase border-l-2 border-gray-300 pl-4">
                {t.contact.demoLocation}
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-7 stratum-fade">
              <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-xl rounded-xl">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector('button');
                  const orig = btn?.innerHTML;
                  if(btn) btn.innerHTML = `<span class="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4" /> ${t.contact.formSuccess}</span>`;
                  if(btn) btn.className = "w-full bg-[#10B981] text-white text-xs font-bold tracking-widest px-8 py-5 uppercase transition-all rounded";
                  setTimeout(() => {
                    if(btn && orig) {
                      btn.innerHTML = orig;
                      btn.className = "w-full bg-[#0369A1] text-white text-xs font-bold tracking-widest px-8 py-5 hover:bg-[#0F172A] transition-colors uppercase rounded shadow-lg shadow-[#0369A1]/20";
                    }
                  }, 5000);
                }}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contact.formName}</label>
                      <input type="text" className="w-full bg-[#F8FAFC] border border-gray-200 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#0369A1] rounded transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contact.formCompany}</label>
                      <input type="text" className="w-full bg-[#F8FAFC] border border-gray-200 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#0369A1] rounded transition-colors" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contact.formEmail}</label>
                      <input type="email" className="w-full bg-[#F8FAFC] border border-gray-200 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#0369A1] rounded transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contact.formPhone}</label>
                      <input type="tel" className="w-full bg-[#F8FAFC] border border-gray-200 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#0369A1] rounded transition-colors" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contact.formProject}</label>
                      <input type="text" className="w-full bg-[#F8FAFC] border border-gray-200 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#0369A1] rounded transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contact.formService}</label>
                      <select className="w-full bg-[#F8FAFC] border border-gray-200 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#0369A1] rounded transition-colors appearance-none cursor-pointer" required>
                        <option value="" disabled selected>—</option>
                        {t.contact.formServices.map((type, i) => (
                          <option key={i} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contact.formMsg}</label>
                    <textarea className="w-full bg-[#F8FAFC] border border-gray-200 px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#0369A1] rounded transition-colors h-32 resize-none" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#0369A1] text-white text-xs font-bold tracking-widest px-8 py-5 hover:bg-[#0F172A] transition-colors uppercase rounded shadow-lg shadow-[#0369A1]/20">
                    {t.contact.formBtn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENDIVIL CTA */}
      <section className="py-24 bg-[#0F172A] text-white text-center border-t border-[#0369A1]/30">
        <div className="container mx-auto px-6 stratum-fade">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{t.mendivilCta.q}</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">{t.mendivilCta.desc}</p>
          <a href="/web-aec" className="inline-block bg-[#0369A1] text-white text-sm font-bold tracking-widest px-10 py-5 hover:bg-white hover:text-[#0F172A] transition-colors uppercase rounded shadow-2xl">
            {t.mendivilCta.btn}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] py-16 text-white border-t border-white/10">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="font-bold text-xl leading-tight tracking-tight text-white flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-[#0369A1]" />
              <div>STRATUM<br/><span className="text-[#0369A1]">LABS</span></div>
            </div>
            <div className="flex gap-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
              <a href="#servicios" className="hover:text-white transition-colors">{t.nav.services}</a>
              <a href="#laboratorio" className="hover:text-white transition-colors">{t.nav.lab}</a>
              <a href="#tecnologia" className="hover:text-white transition-colors">{t.nav.tech}</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-gray-500 max-w-2xl text-left">
              <div className="font-bold tracking-widest text-white/50 mb-2">{language === 'ES' ? 'DEMO · EMPRESA FICTICIA' : 'DEMO · FICTIONAL COMPANY'}</div>
              {t.footer.disclaimer}
            </div>
            <div className="text-gray-600 text-xs font-mono">
              © {new Date().getFullYear()} MENDIVIL.BUILD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
