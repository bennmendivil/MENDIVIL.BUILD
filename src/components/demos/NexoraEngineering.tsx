import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Menu, X, ChevronRight, PencilRuler, Phone, Grid
} from 'lucide-react';

// Dictionaries
const nexoraDict = {
  ES: {
    nav: {
      home: "INICIO",
      services: "SERVICIOS",
      disciplines: "DISCIPLINAS",
      projects: "PROYECTOS",
      bim: "BIM",
      contact: "CONTACTO",
      cta: "HABLAR CON UN INGENIERO"
    },
    hero: {
      tag: "INGENIERÍA · DISEÑO · CONSULTORÍA",
      title: "Diseñamos lo que otros construirán.",
      desc: "Ingeniería multidisciplinaria para proyectos industriales, comerciales y de infraestructura, desde el concepto hasta la documentación para construcción.",
      ctaPrimary: "HABLAR CON UN INGENIERO",
      ctaSecondary: "VER PROYECTOS"
    },
    indicators: {
      sqm: "m² DISEÑADOS",
      projects: "PROYECTOS",
      disciplines: "DISCIPLINAS",
      states: "ESTADOS DE MÉXICO",
      disclaimer: "Indicadores ficticios utilizados exclusivamente para fines demostrativos."
    },
    intro: {
      title: "Ingeniería más allá de los planos.",
      text: "Un proyecto exitoso requiere más que diseño. Requiere coordinación entre disciplinas, decisiones técnicamente fundamentadas y documentación que pueda convertirse eficientemente en construcción."
    },
    disciplines: {
      title: "Una visión integrada del proyecto.",
      list: [
        {
          num: "01", name: "INGENIERÍA CIVIL",
          items: ["Site Development", "Grading", "Earthworks", "Drainage", "Pavements", "Underground Utilities", "External Infrastructure"]
        },
        {
          num: "02", name: "INGENIERÍA ESTRUCTURAL",
          items: ["Structural Analysis", "Reinforced Concrete", "Structural Steel", "Foundations", "Seismic Design", "Structural Detailing", "Existing Structure Evaluation"]
        },
        {
          num: "03", name: "INGENIERÍA MEP",
          items: ["Mechanical", "Electrical", "Plumbing", "Fire Protection", "Building Systems Coordination"]
        },
        {
          num: "04", name: "BIM Y COORDINACIÓN",
          items: ["BIM Modeling", "Multidisciplinary Coordination", "Clash Detection", "Constructability", "Model Federation", "Design Coordination"]
        },
        {
          num: "05", name: "INGENIERÍA DE PROYECTO",
          items: ["Design Criteria", "Basis of Design", "Technical Specifications", "Engineering Packages", "IFC Documentation", "Construction Support"]
        },
        {
          num: "06", name: "CONSULTORÍA DE INGENIERÍA",
          items: ["Feasibility", "Technical Reviews", "Value Engineering", "Due Diligence", "Constructability Reviews", "Technical Advisory"]
        }
      ]
    },
    analysisReality: {
      title: "DEL ANÁLISIS A LA REALIDAD",
      stages: ["ANALYZE", "DESIGN", "DOCUMENT", "BUILD"]
    },
    structuralData: {
      title: "La ingeniería se puede medir.",
      sys: "SISTEMA ESTRUCTURAL",
      sysVal: "Sistema de Marcos Arriostrados",
      mat: "MATERIALES",
      matVal: "Structural Steel\nReinforced Concrete",
      found: "CIMENTACIÓN",
      foundVal: "Spread Footings + Grade Beams",
      cons: "CONSIDERACIONES DE DISEÑO",
      consVal: "Dead Load, Live Load, Wind, Seismic",
      metrics: { drift: "DERIVA MÁXIMA DE ENTREPISO", mut: "UTILIZACIÓN DE ELEMENTOS", fut: "UTILIZACIÓN DE CIMENTACIÓN", nodes: "NODOS DEL MODELO" },
      disclaimer: "Datos técnicos ficticios utilizados exclusivamente para demostración."
    },
    bim: {
      title: "Coordinar antes de construir.",
      clashes: "CLASHES IDENTIFIED",
      resolved: "RESOLVED BEFORE CONSTRUCTION",
      review: "UNDER REVIEW",
      disclaimer: "Indicadores ficticios.",
      tags: ["STRUCTURE", "ARCHITECTURE", "MECHANICAL", "ELECTRICAL", "PLUMBING"]
    },
    drawings: {
      title: "Del modelo a la documentación.",
      proj: "PROJECT",
      projVal: "ORION ADVANCED MANUFACTURING",
      pkg: "PACKAGE",
      pkgVal: "ISSUED FOR CONSTRUCTION",
      rev: "REVISION",
      index: "DRAWING INDEX",
      tabs: ["CIVIL", "STRUCTURAL", "MEP", "BIM"],
      sheets: [
        { t: "CIVIL", i: ["C-101 SITE PLAN", "C-201 GRADING PLAN", "C-301 DRAINAGE PLAN"] },
        { t: "STRUCTURAL", i: ["S-101 FOUNDATION PLAN", "S-201 FRAMING PLAN", "S-501 STRUCTURAL DETAILS"] },
        { t: "MEP", i: ["M-101 MECHANICAL PLAN", "E-101 ELECTRICAL PLAN"] },
        { t: "BIM", i: ["B-101 COORDINATION PLAN", "B-201 CLASH REPORT"] }
      ]
    },
    projects: {
      title: "Ingeniería para diferentes tipos de proyecto.",
      disclaimer: "Todos los proyectos y datos mostrados son ficticios.",
      items: [
        { name: "ORION ADVANCED MANUFACTURING", sector: "Advanced Manufacturing", loc: "Querétaro, México", scope: "Civil · Structural · MEP · BIM Coordination", area: "41,800 m²", img: "/demos/nexora/nexora_proj_orion_1789432290502.png" },
        { name: "ATLAS DISTRIBUTION CENTER", sector: "Logistics", loc: "Guanajuato, México", scope: "Civil · Structural · Infrastructure", area: "62,000 m²", img: "/demos/nexora/nexora_proj_atlas_1789432299566.png" },
        { name: "CENTRA CORPORATE CAMPUS", sector: "Commercial", loc: "Monterrey, México", scope: "Structural · MEP · BIM", area: "28,400 m²", img: "/demos/nexora/nexora_proj_centra_1789432307411.png" },
        { name: "SIERRA INFRASTRUCTURE CORRIDOR", sector: "Infrastructure", loc: "México", scope: "Civil · Drainage · Pavements · Infrastructure", length: "18.6 km", img: "/demos/nexora/nexora_proj_sierra_1789442453029.png" }
      ],
      btn: "VER PROYECTO →"
    },
    process: {
      title: "Del concepto a la construcción.",
      steps: [
        { num: "01", t: "COMPRENDER", d: "Project requirements\nSite\nConstraints" },
        { num: "02", t: "DEFINIR", d: "Basis of Design\nCriteria\nInterfaces" },
        { num: "03", t: "ANALIZAR", d: "Engineering\nModels\nAlternatives" },
        { num: "04", t: "COORDINAR", d: "Disciplines\nBIM\nConstructability" },
        { num: "05", t: "DOCUMENTAR", d: "Drawings\nSpecifications\nIFC packages" },
        { num: "06", t: "DAR SOPORTE", d: "RFIs\nField coordination\nEngineering support" }
      ]
    },
    constructability: {
      title: "Diseñado para construirse.",
      desc: "Una solución técnicamente correcta también debe considerar secuencia constructiva, disponibilidad de materiales, tolerancias, interfaces entre disciplinas y condiciones reales de campo.",
      labels: ["DESIGN", "BUILDABILITY"]
    },
    valueEng: {
      title: "Mejores decisiones de ingeniería.",
      disclaimer: "Ejemplo conceptual con datos ficticios. No corresponde a un análisis real.",
      optA: { name: "OPTION A", desc: "Steel Frame", w: "1,240 t", s: "18 weeks", c: "100%" },
      optB: { name: "OPTION B", desc: "Optimized Steel Frame", w: "1,085 t", s: "16 weeks", c: "92%" },
      sel: "SELECTED"
    },
    digital: {
      title: "Engineering information, connected.",
      flow: ["REQUIREMENTS", "ENGINEERING", "BIM", "COORDINATION", "DOCUMENTATION", "CONSTRUCTION"],
      tags: ["MODEL", "DRAWINGS", "RFIs", "SUBMITTALS", "REVISIONS", "FIELD DATA"]
    },
    contact: {
      title: "Hablemos de tu próximo proyecto.",
      desc: "Cuéntanos qué estás diseñando, construyendo o evaluando y qué disciplinas de ingeniería necesitas.",
      phone: "+52 (81) 0000 0000",
      email: "engineering@nexora.example",
      location: "Monterrey, Nuevo León\nMéxico",
      demoLocation: "Datos de contacto ficticios para fines demostrativos.",
      form: {
        name: "NOMBRE", company: "EMPRESA", email: "EMAIL", phone: "TELÉFONO", proj: "TIPO DE PROYECTO",
        disc: "DISCIPLINA", msg: "MENSAJE", btn: "ENVIAR CONSULTA →", success: "DEMO — En un sitio real esta consulta sería enviada al equipo de ingeniería."
      },
      opts: ["Ingeniería Civil", "Ingeniería Estructural", "MEP", "BIM", "Project Engineering", "Consultoría", "Multidisciplinario", "Otro"]
    },
    mendivil: {
      title: "¿Tu firma de ingeniería necesita presentar su capacidad técnica de esta manera?",
      desc: "MENDIVIL.BUILD desarrolla experiencias digitales especializadas para empresas de arquitectura, ingeniería y construcción.",
      btn: "CONOCE WEB AEC →"
    },
    footer: {
      disclaimer: "NEXORA ENGINEERING es una empresa ficticia creada exclusivamente por MENDIVIL.BUILD como demostración conceptual de diseño y desarrollo web para firmas de ingeniería. Todos los nombres, proyectos, imágenes, modelos, cifras, métricas y resultados mostrados son ficticios."
    }
  },
  EN: {
    nav: {
      home: "HOME",
      services: "SERVICES",
      disciplines: "DISCIPLINES",
      projects: "PROJECTS",
      bim: "BIM",
      contact: "CONTACT",
      cta: "TALK TO AN ENGINEER"
    },
    hero: {
      tag: "ENGINEERING · DESIGN · CONSULTING",
      title: "We design what others will build.",
      desc: "Multidisciplinary engineering for industrial, commercial and infrastructure projects, from concept through construction documentation.",
      ctaPrimary: "TALK TO AN ENGINEER",
      ctaSecondary: "VIEW PROJECTS"
    },
    indicators: {
      sqm: "m² DESIGNED",
      projects: "PROJECTS",
      disciplines: "DISCIPLINES",
      states: "STATES IN MEXICO",
      disclaimer: "Fictional indicators used exclusively for demonstration purposes."
    },
    intro: {
      title: "Engineering beyond drawings.",
      text: "A successful project requires more than design. It requires coordination between disciplines, technically sound decisions, and documentation that can be efficiently turned into construction."
    },
    disciplines: {
      title: "An integrated project vision.",
      list: [
        {
          num: "01", name: "CIVIL ENGINEERING",
          items: ["Site Development", "Grading", "Earthworks", "Drainage", "Pavements", "Underground Utilities", "External Infrastructure"]
        },
        {
          num: "02", name: "STRUCTURAL ENGINEERING",
          items: ["Structural Analysis", "Reinforced Concrete", "Structural Steel", "Foundations", "Seismic Design", "Structural Detailing", "Existing Structure Evaluation"]
        },
        {
          num: "03", name: "MEP ENGINEERING",
          items: ["Mechanical", "Electrical", "Plumbing", "Fire Protection", "Building Systems Coordination"]
        },
        {
          num: "04", name: "BIM & COORDINATION",
          items: ["BIM Modeling", "Multidisciplinary Coordination", "Clash Detection", "Constructability", "Model Federation", "Design Coordination"]
        },
        {
          num: "05", name: "PROJECT ENGINEERING",
          items: ["Design Criteria", "Basis of Design", "Technical Specifications", "Engineering Packages", "IFC Documentation", "Construction Support"]
        },
        {
          num: "06", name: "ENGINEERING CONSULTING",
          items: ["Feasibility", "Technical Reviews", "Value Engineering", "Due Diligence", "Constructability Reviews", "Technical Advisory"]
        }
      ]
    },
    analysisReality: {
      title: "FROM ANALYSIS TO REALITY",
      stages: ["ANALYZE", "DESIGN", "DOCUMENT", "BUILD"]
    },
    structuralData: {
      title: "Engineering is measurable.",
      sys: "STRUCTURAL SYSTEM",
      sysVal: "Steel Braced Frame",
      mat: "MATERIALS",
      matVal: "Structural Steel\nReinforced Concrete",
      found: "FOUNDATION",
      foundVal: "Spread Footings + Grade Beams",
      cons: "DESIGN CONSIDERATIONS",
      consVal: "Dead Load, Live Load, Wind, Seismic",
      metrics: { drift: "MAX STORY DRIFT", mut: "MEMBER UTILIZATION", fut: "FOUNDATION UTILIZATION", nodes: "MODEL NODES" },
      disclaimer: "Fictional technical data used exclusively for demonstration."
    },
    bim: {
      title: "Coordinate before building.",
      clashes: "CLASHES IDENTIFIED",
      resolved: "RESOLVED BEFORE CONSTRUCTION",
      review: "UNDER REVIEW",
      disclaimer: "Fictional indicators.",
      tags: ["STRUCTURE", "ARCHITECTURE", "MECHANICAL", "ELECTRICAL", "PLUMBING"]
    },
    drawings: {
      title: "From model to documentation.",
      proj: "PROJECT",
      projVal: "ORION ADVANCED MANUFACTURING",
      pkg: "PACKAGE",
      pkgVal: "ISSUED FOR CONSTRUCTION",
      rev: "REVISION",
      index: "DRAWING INDEX",
      tabs: ["CIVIL", "STRUCTURAL", "MEP", "BIM"],
      sheets: [
        { t: "CIVIL", i: ["C-101 SITE PLAN", "C-201 GRADING PLAN", "C-301 DRAINAGE PLAN"] },
        { t: "STRUCTURAL", i: ["S-101 FOUNDATION PLAN", "S-201 FRAMING PLAN", "S-501 STRUCTURAL DETAILS"] },
        { t: "MEP", i: ["M-101 MECHANICAL PLAN", "E-101 ELECTRICAL PLAN"] },
        { t: "BIM", i: ["B-101 COORDINATION PLAN", "B-201 CLASH REPORT"] }
      ]
    },
    projects: {
      title: "Engineering across project types.",
      disclaimer: "All projects and data shown are fictional.",
      items: [
        { name: "ORION ADVANCED MANUFACTURING", sector: "Advanced Manufacturing", loc: "Querétaro, México", scope: "Civil · Structural · MEP · BIM Coordination", area: "41,800 m²", img: "/demos/nexora/nexora_proj_orion_1789432290502.png" },
        { name: "ATLAS DISTRIBUTION CENTER", sector: "Logistics", loc: "Guanajuato, México", scope: "Civil · Structural · Infrastructure", area: "62,000 m²", img: "/demos/nexora/nexora_proj_atlas_1789432299566.png" },
        { name: "CENTRA CORPORATE CAMPUS", sector: "Commercial", loc: "Monterrey, México", scope: "Structural · MEP · BIM", area: "28,400 m²", img: "/demos/nexora/nexora_proj_centra_1789432307411.png" },
        { name: "SIERRA INFRASTRUCTURE CORRIDOR", sector: "Infrastructure", loc: "México", scope: "Civil · Drainage · Pavements · Infrastructure", length: "18.6 km", img: "/demos/nexora/nexora_proj_sierra_1789442453029.png" }
      ],
      btn: "VIEW PROJECT →"
    },
    process: {
      title: "From concept to construction.",
      steps: [
        { num: "01", t: "UNDERSTAND", d: "Project requirements\nSite\nConstraints" },
        { num: "02", t: "DEFINE", d: "Basis of Design\nCriteria\nInterfaces" },
        { num: "03", t: "ANALYZE", d: "Engineering\nModels\nAlternatives" },
        { num: "04", t: "COORDINATE", d: "Disciplines\nBIM\nConstructability" },
        { num: "05", t: "DOCUMENT", d: "Drawings\nSpecifications\nIFC packages" },
        { num: "06", t: "SUPPORT", d: "RFIs\nField coordination\nEngineering support" }
      ]
    },
    constructability: {
      title: "Designed to be built.",
      desc: "A technically correct solution must also consider construction sequence, material availability, tolerances, interfaces between disciplines and actual field conditions.",
      labels: ["DESIGN", "BUILDABILITY"]
    },
    valueEng: {
      title: "Better engineering decisions.",
      disclaimer: "Conceptual example with fictional data. Not a real analysis.",
      optA: { name: "OPTION A", desc: "Steel Frame", w: "1,240 t", s: "18 weeks", c: "100%" },
      optB: { name: "OPTION B", desc: "Optimized Steel Frame", w: "1,085 t", s: "16 weeks", c: "92%" },
      sel: "SELECTED"
    },
    digital: {
      title: "Engineering information, connected.",
      flow: ["REQUIREMENTS", "ENGINEERING", "BIM", "COORDINATION", "DOCUMENTATION", "CONSTRUCTION"],
      tags: ["MODEL", "DRAWINGS", "RFIs", "SUBMITTALS", "REVISIONS", "FIELD DATA"]
    },
    contact: {
      title: "Let's talk about your next project.",
      desc: "Tell us what you are designing, building or evaluating and what engineering disciplines you need.",
      phone: "+52 (81) 0000 0000",
      email: "engineering@nexora.example",
      location: "Monterrey, Nuevo Leon\nMexico",
      demoLocation: "Fictional contact data for demonstration purposes.",
      form: {
        name: "NAME", company: "COMPANY", email: "EMAIL", phone: "PHONE", proj: "PROJECT TYPE",
        disc: "DISCIPLINE", msg: "MESSAGE", btn: "SEND INQUIRY →", success: "DEMO — On a live site this would be sent to the engineering team."
      },
      opts: ["Civil Engineering", "Structural Engineering", "MEP", "BIM", "Project Engineering", "Consulting", "Multidisciplinary", "Other"]
    },
    mendivil: {
      title: "Does your engineering firm need to present its technical capabilities like this?",
      desc: "MENDIVIL.BUILD develops specialized digital experiences for architecture, engineering and construction companies.",
      btn: "DISCOVER WEB AEC →"
    },
    footer: {
      disclaimer: "NEXORA ENGINEERING is a fictional company created exclusively by MENDIVIL.BUILD as a conceptual design and web development demonstration for engineering firms. All names, projects, images, models, figures, metrics, and results shown are fictional."
    }
  }
};

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }: { end: number, duration?: number, prefix?: string, suffix?: string, decimals?: number }) => {
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
            setCount(end * easeOutQuad(progress));
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
      {prefix}{decimals === 0 ? Math.floor(count).toLocaleString() : count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default function NexoraEngineering() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = nexoraDict[language as 'ES' | 'EN'];
  
  // States for interactive components
  const [activeStage, setActiveStage] = useState(0);
  const [activeDrawingTab, setActiveDrawingTab] = useState(0);

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

    document.querySelectorAll('.nx-fade').forEach((el) => {
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

  const imagesAnalysis = [
    "/demos/nexora/nexora_analyze_1789430678816.png",
    "/demos/nexora/nexora_design_1789430686907.png",
    "/demos/nexora/nexora_document_1789430696928.png",
    "/demos/nexora/nexora_build_1789430733198.png"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#262626] font-sans selection:bg-[#0284C7] selection:text-white">
      {/* LABEL FICTICIO */}
      <div className="fixed top-24 right-4 md:right-8 z-50 pointer-events-none flex justify-end">
        <div className="bg-[#0F172A] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded shadow-xl opacity-90 uppercase border border-white/10">
          {language === 'ES' ? 'DEMO · EMPRESA FICTICIA' : 'DEMO · FICTIONAL COMPANY'}
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }}>
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="absolute inset-0 border-[1.5px] border-[#262626] group-hover:border-[#0284C7] transition-colors rotate-45"></div>
              <div className="absolute inset-2 bg-[#262626] group-hover:bg-[#0284C7] transition-colors"></div>
              <span className="relative text-[#FAFAFA] text-xs font-bold font-mono">N</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-lg leading-none tracking-tight text-[#262626]">NEXORA</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-[#737373] leading-none mt-1">ENGINEERING</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#disciplinas" onClick={(e) => handleNavClick(e, '#disciplinas')} className="text-xs font-bold tracking-widest text-[#737373] hover:text-[#0284C7] transition-colors uppercase">{t.nav.disciplines}</a>
            <a href="#proyectos" onClick={(e) => handleNavClick(e, '#proyectos')} className="text-xs font-bold tracking-widest text-[#737373] hover:text-[#0284C7] transition-colors uppercase">{t.nav.projects}</a>
            <a href="#bim" onClick={(e) => handleNavClick(e, '#bim')} className="text-xs font-bold tracking-widest text-[#737373] hover:text-[#0284C7] transition-colors uppercase">{t.nav.bim}</a>
            
            <div className="w-px h-4 bg-[#E5E5E5]" />
            <button onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')} className="text-xs font-bold text-[#262626] hover:text-[#0284C7] transition-colors uppercase tracking-widest w-6">
              {language}
            </button>
            <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="border border-[#262626] text-[#262626] px-6 py-2.5 text-xs font-bold hover:bg-[#262626] hover:text-white transition-colors tracking-widest uppercase">
              {t.nav.cta}
            </a>
          </nav>

          <button className="lg:hidden text-[#262626]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAFAFA] pt-24 px-6 flex flex-col gap-6 lg:hidden">
          <a href="#disciplinas" className="text-2xl font-bold tracking-tight text-[#262626]" onClick={(e) => handleNavClick(e, '#disciplinas')}>{t.nav.disciplines}</a>
          <a href="#proyectos" className="text-2xl font-bold tracking-tight text-[#262626]" onClick={(e) => handleNavClick(e, '#proyectos')}>{t.nav.projects}</a>
          <a href="#bim" className="text-2xl font-bold tracking-tight text-[#262626]" onClick={(e) => handleNavClick(e, '#bim')}>{t.nav.bim}</a>
          <a href="#contacto" className="text-2xl font-bold tracking-tight text-[#262626]" onClick={(e) => handleNavClick(e, '#contacto')}>{t.nav.contact}</a>
          <div className="mt-8 flex gap-4">
            <button onClick={() => { setLanguage('ES'); setIsMenuOpen(false); }} className={`px-4 py-2 text-sm font-bold border ${language === 'ES' ? 'bg-[#262626] text-white border-[#262626]' : 'border-[#E5E5E5] text-[#737373]'}`}>ES</button>
            <button onClick={() => { setLanguage('EN'); setIsMenuOpen(false); }} className={`px-4 py-2 text-sm font-bold border ${language === 'EN' ? 'bg-[#262626] text-white border-[#262626]' : 'border-[#E5E5E5] text-[#737373]'}`}>EN</button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 relative overflow-hidden bg-white border-b border-[#E5E5E5]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl nx-fade">
            <div className="flex items-center gap-3 mb-8">
              <Grid className="w-4 h-4 text-[#0284C7]" />
              <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#737373] uppercase">
                {t.hero.tag}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold text-[#262626] leading-[1.1] mb-8 tracking-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-[#737373] mb-12 max-w-2xl leading-relaxed">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className="bg-[#262626] text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#0284C7] transition-colors text-center uppercase">
                {t.hero.ctaPrimary}
              </a>
              <a href="#proyectos" onClick={(e) => handleNavClick(e, '#proyectos')} className="border border-[#E5E5E5] bg-transparent text-[#262626] text-xs font-bold tracking-widest px-8 py-4 hover:border-[#262626] transition-colors text-center uppercase">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image / Editorial Composition */}
        <div className="container mx-auto px-6 mt-16 md:mt-24 nx-fade">
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#E5E5E5] overflow-hidden border border-[#E5E5E5]">
            <img src="/demos/nexora/nexora_hero_1789430742116.png" alt="Engineering Concept" className="w-full h-full object-cover" />
            
            {/* Technical overlay elements */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/70 tracking-widest hidden md:block">
              NEXORA_SYS_V2.1 // COORD_X: 45.22, Y: 12.80
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold tracking-widest text-[#262626]">
              MODEL: ORION_STRUCT_FINAL.IFC
            </div>
            
            {/* Crosshair corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/50" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/50" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/50" />
          </div>
        </div>
      </section>

      {/* CAPABILITY BAND */}
      <section className="py-12 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="nx-fade border-l-2 border-[#E5E5E5] pl-6">
              <div className="text-3xl md:text-5xl font-light text-[#262626] mb-2 font-mono tracking-tighter"><AnimatedCounter end={2.4} decimals={1} prefix="+" suffix="M" /></div>
              <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] uppercase">{t.indicators.sqm}</div>
            </div>
            <div className="nx-fade border-l-2 border-[#E5E5E5] pl-6" style={{transitionDelay: '100ms'}}>
              <div className="text-3xl md:text-5xl font-light text-[#262626] mb-2 font-mono tracking-tighter"><AnimatedCounter end={185} prefix="+" /></div>
              <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] uppercase">{t.indicators.projects}</div>
            </div>
            <div className="nx-fade border-l-2 border-[#E5E5E5] pl-6" style={{transitionDelay: '200ms'}}>
              <div className="text-3xl md:text-5xl font-light text-[#262626] mb-2 font-mono tracking-tighter"><AnimatedCounter end={8} /></div>
              <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] uppercase">{t.indicators.disciplines}</div>
            </div>
            <div className="nx-fade border-l-2 border-[#E5E5E5] pl-6" style={{transitionDelay: '300ms'}}>
              <div className="text-3xl md:text-5xl font-light text-[#262626] mb-2 font-mono tracking-tighter"><AnimatedCounter end={14} /></div>
              <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] uppercase">{t.indicators.states}</div>
            </div>
          </div>
          <div className="mt-8 font-mono text-right text-[9px] text-[#737373] uppercase tracking-widest">
            // {t.indicators.disclaimer}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center nx-fade">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#262626] mb-8 tracking-tight">{t.intro.title}</h2>
          <p className="text-lg md:text-xl text-[#737373] leading-relaxed">
            {t.intro.text}
          </p>
        </div>
      </section>

      {/* DISCIPLINAS */}
      <section id="disciplinas" className="py-24 bg-[#FAFAFA] border-y border-[#E5E5E5]">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16 border-b border-[#E5E5E5] pb-6 nx-fade">
            <h2 className="text-2xl md:text-4xl font-semibold text-[#262626] tracking-tight">{t.disciplines.title}</h2>
            <div className="hidden md:block font-mono text-xs text-[#737373]">6 DISCIPLINES</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {t.disciplines.list.map((disc, i) => (
              <div key={i} className="nx-fade group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-sm text-[#0284C7] font-bold">{disc.num}</span>
                  <div className="h-px bg-[#E5E5E5] flex-1 group-hover:bg-[#0284C7] transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-[#262626] mb-6 tracking-wide">{disc.name}</h3>
                <ul className="space-y-3">
                  {disc.items.map((item, j) => (
                    <li key={j} className="text-sm text-[#737373] flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#E5E5E5] rounded-full mt-2 flex-shrink-0 group-hover:bg-[#262626] transition-colors" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FROM ANALYSIS TO REALITY */}
      <section className="py-24 md:py-32 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 nx-fade">
            <div className="font-mono text-[10px] text-[#0284C7] tracking-[0.2em] mb-4">TRANSITION</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{t.analysisReality.title}</h2>
          </div>

          <div className="max-w-5xl mx-auto nx-fade">
            {/* Controls */}
            <div className="flex justify-between items-center border-b border-white/20 mb-8 overflow-x-auto no-scrollbar">
              {t.analysisReality.stages.map((stage, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={`pb-4 px-4 text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap transition-colors relative ${activeStage === i ? 'text-white' : 'text-white/40 hover:text-white/80'}`}
                >
                  {stage}
                  {activeStage === i && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7]" />
                  )}
                </button>
              ))}
            </div>

            {/* Viewer */}
            <div className="relative aspect-[4/3] md:aspect-[16/9] bg-[#1E293B] overflow-hidden border border-white/10 group">
              {imagesAnalysis.map((img, i) => (
                <img 
                  key={i}
                  src={img}
                  alt={`Stage ${i}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeStage === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
              
              {/* Technical Overlay */}
              <div className="absolute bottom-6 left-6 z-20 flex gap-4 font-mono text-[10px] text-white/70">
                <div className="bg-black/50 px-2 py-1 backdrop-blur border border-white/10">PHASE: {activeStage + 1}/4</div>
                <div className="bg-black/50 px-2 py-1 backdrop-blur border border-white/10">VIEW: ISO_NE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURAL ENGINEERING DATA */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 nx-fade">
              <h2 className="text-3xl font-semibold text-[#262626] mb-10 tracking-tight">{t.structuralData.title}</h2>
              
              <div className="space-y-8 font-mono text-sm border-l border-[#E5E5E5] pl-6">
                <div>
                  <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] mb-1">{t.structuralData.sys}</div>
                  <div className="text-[#262626]">{t.structuralData.sysVal}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] mb-1">{t.structuralData.mat}</div>
                  <div className="text-[#262626] whitespace-pre-line">{t.structuralData.matVal}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] mb-1">{t.structuralData.found}</div>
                  <div className="text-[#262626]">{t.structuralData.foundVal}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] mb-1">{t.structuralData.cons}</div>
                  <div className="text-[#262626]">{t.structuralData.consVal}</div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-light text-[#262626] font-mono">0.78%</div>
                  <div className="text-[9px] font-bold text-[#737373] tracking-[0.2em] uppercase mt-1">{t.structuralData.metrics.drift}</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#262626] font-mono">84%</div>
                  <div className="text-[9px] font-bold text-[#737373] tracking-[0.2em] uppercase mt-1">{t.structuralData.metrics.mut}</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#262626] font-mono">76%</div>
                  <div className="text-[9px] font-bold text-[#737373] tracking-[0.2em] uppercase mt-1">{t.structuralData.metrics.fut}</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#262626] font-mono">8,426</div>
                  <div className="text-[9px] font-bold text-[#737373] tracking-[0.2em] uppercase mt-1">{t.structuralData.metrics.nodes}</div>
                </div>
              </div>
              <div className="mt-8 font-mono text-[9px] text-[#737373] italic">
                * {t.structuralData.disclaimer}
              </div>
            </div>

            <div className="lg:col-span-7 nx-fade">
              <div className="bg-[#FAFAFA] p-8 border border-[#E5E5E5] flex justify-center items-center h-full min-h-[400px]">
                <img src="/demos/nexora/nexora_design_1789430686907.png" alt="Structural Frame" className="w-full h-auto object-contain mix-blend-multiply" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BIM COORDINATION */}
      <section id="bim" className="py-24 bg-[#FAFAFA] border-b border-[#E5E5E5] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 nx-fade">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#262626] mb-6">{t.bim.title}</h2>
            <div className="flex flex-wrap justify-center gap-3 font-mono text-[9px] uppercase tracking-widest font-bold">
              {t.bim.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 border border-[#E5E5E5] bg-white text-[#737373]">{tag}</span>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 border border-[#E5E5E5] bg-white shadow-sm max-w-6xl mx-auto nx-fade">
            <div className="bg-[#0F172A] aspect-square lg:aspect-auto flex items-center justify-center p-8 relative overflow-hidden">
              <img src="/demos/nexora/nexora_bim_1789430753148.png" alt="BIM Coordination" className="w-full h-full object-contain relative z-10" />
              <div className="absolute inset-0 border-[10px] border-[#0284C7]/20 z-0 m-12" />
            </div>
            
            <div className="p-12 lg:p-16 flex flex-col justify-center bg-white">
              <div className="mb-12">
                <div className="flex items-end gap-4 mb-2">
                  <span className="text-6xl font-light font-mono text-[#0284C7] leading-none">248</span>
                </div>
                <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] uppercase">{t.bim.clashes}</div>
              </div>
              
              <div className="mb-12">
                <div className="flex items-end gap-4 mb-2">
                  <span className="text-6xl font-light font-mono text-[#262626] leading-none">231</span>
                </div>
                <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] uppercase">{t.bim.resolved}</div>
              </div>

              <div>
                <div className="flex items-end gap-4 mb-2">
                  <span className="text-6xl font-light font-mono text-[#737373] leading-none">17</span>
                </div>
                <div className="text-[10px] font-bold text-[#737373] tracking-[0.2em] uppercase">{t.bim.review}</div>
              </div>

              <div className="mt-12 font-mono text-[9px] text-[#737373] uppercase tracking-widest border-t border-[#E5E5E5] pt-4">
                // {t.bim.disclaimer}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRAWING VIEWER */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12 nx-fade">
            <h2 className="text-3xl font-semibold text-[#262626] tracking-tight">{t.drawings.title}</h2>
          </div>

          <div className="border border-[#E5E5E5] bg-[#FAFAFA] nx-fade shadow-sm">
            {/* Viewer Header */}
            <div className="bg-white border-b border-[#E5E5E5] px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#737373] block mb-1">{t.drawings.proj}</span>
                <span className="font-bold text-[#262626]">{t.drawings.projVal}</span>
              </div>
              <div>
                <span className="text-[#737373] block mb-1">{t.drawings.pkg}</span>
                <span className="font-bold text-[#262626]">{t.drawings.pkgVal}</span>
              </div>
              <div>
                <span className="text-[#737373] block mb-1">{t.drawings.rev}</span>
                <span className="font-bold text-[#262626]">03</span>
              </div>
              <div className="flex justify-end items-center">
                <button className="bg-[#262626] text-white px-4 py-2 font-bold tracking-widest uppercase text-[10px] hover:bg-[#0284C7] transition-colors">
                  EXPORT PDF
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 min-h-[600px]">
              {/* Sidebar Tabs & Index */}
              <div className="lg:col-span-3 border-r border-[#E5E5E5] bg-white flex flex-col">
                <div className="flex border-b border-[#E5E5E5] overflow-x-auto">
                  {t.drawings.tabs.map((tab, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveDrawingTab(i)}
                      className={`flex-1 px-4 py-3 text-[10px] font-bold tracking-[0.1em] transition-colors whitespace-nowrap ${activeDrawingTab === i ? 'bg-[#FAFAFA] text-[#0284C7] border-t-2 border-[#0284C7]' : 'text-[#737373] hover:text-[#262626]'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-4 flex-1 font-mono text-xs">
                  <div className="text-[#737373] mb-4 font-bold tracking-widest uppercase">{t.drawings.index}</div>
                  <ul className="space-y-2">
                    {t.drawings.sheets[activeDrawingTab].i.map((sheet, i) => {
                      const [code, ...name] = sheet.split(' ');
                      return (
                        <li key={i} className={`flex gap-3 p-2 cursor-pointer transition-colors ${i === 1 && activeDrawingTab === 1 ? 'bg-[#E5E5E5] text-[#262626] font-bold' : 'text-[#737373] hover:bg-[#FAFAFA]'}`}>
                          <span className={`${i === 1 && activeDrawingTab === 1 ? 'text-[#0284C7]' : ''}`}>{code}</span>
                          <span>{name.join(' ')}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Viewport */}
              <div className="lg:col-span-9 bg-[#E5E5E5] p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* Conceptual Document Image */}
                <div className="w-full h-full bg-white shadow-xl relative z-10 border border-[#D4D4D4] p-2 flex">
                   {activeDrawingTab === 1 ? (
                     <img src="/demos/nexora/nexora_document_1789430696928.png" alt="Blueprint" className="w-full h-full object-contain opacity-90" />
                   ) : (
                     <div className="w-full h-full flex flex-col items-center justify-center text-center font-mono text-gray-400">
                        <PencilRuler className="w-12 h-12 mb-4 opacity-50" />
                        <div>SELECT SHEET TO VIEW</div>
                        <div className="text-[10px] mt-2 opacity-50">DISCIPLINE: {t.drawings.tabs[activeDrawingTab]}</div>
                     </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-end justify-between mb-16 border-b border-[#E5E5E5] pb-6 nx-fade">
            <h2 className="text-3xl font-semibold text-[#262626] tracking-tight">{t.projects.title}</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {t.projects.items.map((proj, i) => (
              <div key={i} className="group border border-[#E5E5E5] bg-white hover:border-[#0284C7] transition-colors nx-fade flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-[45%] bg-[#0F172A] relative min-h-[200px] border-b md:border-b-0 md:border-r border-[#E5E5E5]">
                  {proj.img ? (
                    <img src={proj.img} alt={proj.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-white/50 tracking-widest border border-dashed border-white/20 m-4">
                      [ SIERRA MODEL PLACEHOLDER ]
                    </div>
                  )}
                  <div className="absolute inset-0 border-[4px] border-white/10 m-4 pointer-events-none" />
                </div>
                <div className="p-8 w-full md:w-[55%] flex flex-col justify-center">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#0284C7] uppercase mb-4">{proj.sector}</div>
                  <h3 className="text-xl font-bold text-[#262626] mb-6 tracking-tight">{proj.name}</h3>
                  <div className="space-y-3 font-mono text-xs text-[#737373] mb-8">
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                      <span>LOCATION</span>
                      <span className="text-[#262626]">{proj.loc}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                      <span>SCOPE</span>
                      <span className="text-[#262626] text-right">{proj.scope}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                      <span>SIZE</span>
                      <span className="text-[#262626]">{proj.area || proj.length}</span>
                    </div>
                  </div>
                  {i === 0 ? (
                    <button className="text-[#262626] font-bold text-xs tracking-[0.1em] uppercase flex items-center gap-2 group-hover:text-[#0284C7] transition-colors">
                      {t.projects.btn} <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="h-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 font-mono text-center text-[9px] text-[#737373] uppercase tracking-widest">
            // {t.projects.disclaimer}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white border-y border-[#E5E5E5]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#262626] mb-16 text-center tracking-tight nx-fade">{t.process.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto relative nx-fade">
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-[#E5E5E5] -z-10" />
            
            {t.process.steps.map((step, i) => (
              <div key={i} className="bg-white lg:bg-transparent">
                <div className="w-12 h-12 bg-white border-2 border-[#262626] flex items-center justify-center text-[#262626] font-mono text-sm font-bold mx-auto mb-6">
                  {step.num}
                </div>
                <h4 className="text-sm font-bold text-[#262626] text-center mb-4 tracking-widest uppercase">{step.t}</h4>
                <p className="text-xs text-[#737373] text-center whitespace-pre-line leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSTRUCTABILITY & VALUE ENGINEERING */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="nx-fade">
              <h2 className="text-3xl font-semibold text-[#262626] mb-6 tracking-tight">{t.constructability.title}</h2>
              <p className="text-[#737373] leading-relaxed mb-8">{t.constructability.desc}</p>
            </div>
            <div className="border border-[#E5E5E5] bg-[#FAFAFA] p-2 flex gap-1 nx-fade relative h-64 md:h-96">
              <div className="absolute top-6 left-6 z-20 font-mono font-bold tracking-widest text-[#262626] bg-white/90 backdrop-blur px-3 py-1 text-[9px] uppercase border border-[#E5E5E5]">
                {t.constructability.labels[0]}
              </div>
              <div className="absolute top-6 right-6 z-20 font-mono font-bold tracking-widest text-[#262626] bg-white/90 backdrop-blur px-3 py-1 text-[9px] uppercase border border-[#E5E5E5]">
                {t.constructability.labels[1]}
              </div>
              <img src="/demos/nexora/nexora_constructability_split_1789442627809.png" alt="Constructability Split" className="w-full h-full object-cover shadow-sm" />
            </div>
          </div>

          <div className="nx-fade">
            <h2 className="text-3xl font-semibold text-[#262626] mb-10 tracking-tight text-center">{t.valueEng.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[t.valueEng.optA, t.valueEng.optB].map((opt, i) => (
                <div key={i} className={`p-8 border ${i === 1 ? 'border-[#0284C7] bg-white relative' : 'border-[#E5E5E5] bg-[#FAFAFA]'}`}>
                  {i === 1 && <div className="absolute top-0 right-0 bg-[#0284C7] text-white text-[9px] font-bold tracking-widest px-3 py-1 uppercase">{t.valueEng.sel}</div>}
                  <div className="text-xs font-bold text-[#737373] tracking-[0.2em] mb-2">{opt.name}</div>
                  <div className="text-lg font-bold text-[#262626] mb-8">{opt.desc}</div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                      <span className="text-[#737373]">WEIGHT</span>
                      <span className="font-bold text-[#262626]">{opt.w}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                      <span className="text-[#737373]">SCHEDULE</span>
                      <span className="font-bold text-[#262626]">{opt.s}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E5E5] pb-2">
                      <span className="text-[#737373]">COST RELATIVE</span>
                      <span className={`font-bold ${i === 1 ? 'text-[#10B981]' : 'text-[#262626]'}`}>{opt.c}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center font-mono text-[9px] text-[#737373] uppercase tracking-widest">
              // {t.valueEng.disclaimer}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-white border-t border-[#E5E5E5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-4 nx-fade">
              <h2 className="text-3xl font-semibold text-[#262626] mb-6 tracking-tight">{t.contact.title}</h2>
              <p className="text-[#737373] mb-12">{t.contact.desc}</p>
              
              <div className="space-y-8 mb-16 font-mono text-sm">
                <div>
                  <div className="text-[#737373] mb-2 uppercase">{t.contact.form.phone}</div>
                  <div className="text-[#262626] font-bold">{t.contact.phone}</div>
                  <div className="group relative inline-block mt-2">
                    <div className="flex items-center gap-2 text-[#25D366] cursor-help">
                      <Phone className="w-4 h-4" />
                      <span className="font-bold">WhatsApp</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-[#737373] mb-2 uppercase">{t.contact.form.email}</div>
                  <div className="text-[#262626] font-bold">{t.contact.email}</div>
                </div>
                <div>
                  <div className="text-[#737373] mb-2 uppercase">LOCATION</div>
                  <div className="text-[#262626] font-bold whitespace-pre-line">{t.contact.location}</div>
                </div>
              </div>
              <div className="text-[9px] font-mono text-[#737373] uppercase tracking-widest italic border-l-2 border-[#E5E5E5] pl-4">
                {t.contact.demoLocation}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 nx-fade">
              <div className="bg-[#FAFAFA] p-8 border border-[#E5E5E5]">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector('button');
                  const orig = btn?.innerHTML;
                  if(btn) btn.innerHTML = `<span class="flex items-center gap-2 justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> ${t.contact.form.success}</span>`;
                  if(btn) btn.className = "w-full bg-[#10B981] text-white text-xs font-bold tracking-widest px-8 py-4 uppercase transition-all";
                  setTimeout(() => {
                    if(btn && orig) {
                      btn.innerHTML = orig;
                      btn.className = "w-full bg-[#262626] text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#0284C7] transition-colors uppercase";
                    }
                  }, 5000);
                }}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-[#737373] mb-2 uppercase">{t.contact.form.name}</label>
                      <input type="text" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-[#262626] focus:outline-none focus:border-[#0284C7] transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-[#737373] mb-2 uppercase">{t.contact.form.company}</label>
                      <input type="text" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-[#262626] focus:outline-none focus:border-[#0284C7] transition-colors" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-[#737373] mb-2 uppercase">{t.contact.form.email}</label>
                      <input type="email" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-[#262626] focus:outline-none focus:border-[#0284C7] transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-[#737373] mb-2 uppercase">{t.contact.form.phone}</label>
                      <input type="tel" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-[#262626] focus:outline-none focus:border-[#0284C7] transition-colors" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-[#737373] mb-2 uppercase">{t.contact.form.proj}</label>
                      <input type="text" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-[#262626] focus:outline-none focus:border-[#0284C7] transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-[#737373] mb-2 uppercase">{t.contact.form.disc}</label>
                      <select className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-[#262626] focus:outline-none focus:border-[#0284C7] transition-colors appearance-none cursor-pointer" required>
                        <option value="" disabled selected>—</option>
                        {t.contact.opts.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="block text-[10px] font-bold tracking-[0.1em] text-[#737373] mb-2 uppercase">{t.contact.form.msg}</label>
                    <textarea className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-[#262626] focus:outline-none focus:border-[#0284C7] transition-colors h-32 resize-none" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#262626] text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#0284C7] transition-colors uppercase">
                    {t.contact.form.btn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENDIVIL CTA */}
      <section className="py-24 bg-[#0F172A] text-white text-center">
        <div className="container mx-auto px-6 nx-fade">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight">{t.mendivil.title}</h2>
          <p className="text-[#94A3B8] mb-10 max-w-2xl mx-auto">{t.mendivil.desc}</p>
          <a href="/web-aec" className="inline-block bg-white text-[#0F172A] text-xs font-bold tracking-widest px-10 py-4 hover:bg-[#0284C7] hover:text-white transition-colors uppercase">
            {t.mendivil.btn}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] py-16 text-[#94A3B8] border-t border-white/5">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative flex items-center justify-center opacity-50">
                <div className="absolute inset-0 border border-white rotate-45"></div>
                <span className="relative text-white text-xs font-bold font-mono">N</span>
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="font-bold text-lg leading-none tracking-tight text-white">NEXORA</span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#94A3B8] leading-none mt-1">ENGINEERING</span>
              </div>
            </div>
            
            <div className="flex gap-6 text-[10px] font-bold tracking-[0.2em] uppercase">
              <a href="#disciplinas" className="hover:text-white transition-colors">{t.nav.disciplines}</a>
              <a href="#proyectos" className="hover:text-white transition-colors">{t.nav.projects}</a>
              <a href="#bim" className="hover:text-white transition-colors">{t.nav.bim}</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[9px] text-[#64748B] max-w-2xl text-left uppercase tracking-widest leading-relaxed">
              <div className="font-bold text-white/50 mb-2">{language === 'ES' ? 'DEMO · EMPRESA FICTICIA' : 'DEMO · FICTIONAL COMPANY'}</div>
              {t.footer.disclaimer}
            </div>
            <div className="text-[#64748B] text-xs font-mono">
              © {new Date().getFullYear()} MENDIVIL.BUILD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
