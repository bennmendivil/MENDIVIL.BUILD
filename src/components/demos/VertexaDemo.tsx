import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { 
  Building2, 
  Menu, X, TrendingUp, Workflow, Wrench, Factory, 
  Activity, ArrowRight, Phone, Mail, MapPin
} from 'lucide-react';

const vertexaDict = {
  ES: {
    nav: {
      home: "INICIO",
      about: "NOSOTROS",
      services: "SERVICIOS",
      projects: "PROYECTOS",
      capabilities: "CAPACIDADES",
      tech: "TECNOLOGÍA",
      contact: "CONTACTO"
    },
    demoPill: "DEMO · EMPRESA FICTICIA",
    hero: {
      tag: "ENGINEERING · CONSTRUCTION · INFRASTRUCTURE",
      title: "Construimos espacios para la industria que mueve México.",
      desc: "Ingeniería, construcción y gestión de proyectos industriales bajo un mismo equipo.",
      ctaPrimary: "CONOCE NUESTROS PROYECTOS →",
      ctaSecondary: "HABLEMOS DE TU PROYECTO"
    },
    stats: {
      s1: { v: "+320,000", l: "m² INFRAESTRUCTURA INDUSTRIAL" },
      s2: { v: "48", l: "PROYECTOS EJECUTADOS" },
      s3: { v: "12", l: "ESTADOS DE MÉXICO" },
      s4: { v: "98.4%", l: "CUMPLIMIENTO DE PROGRAMA" },
      disclaimer: "Cifras ficticias utilizadas exclusivamente para fines demostrativos."
    },
    about: {
      title: "Construcción industrial con visión de proyecto.",
      desc: "VERTEXA INDUSTRIAL integra ingeniería, construcción y gestión de proyectos para desarrollar infraestructura industrial eficiente, segura y preparada para las necesidades de cada operación.",
      b1: { t: "INGENIERÍA", d: "Planeación y coordinación técnica desde las primeras etapas." },
      b2: { t: "CONSTRUCCIÓN", d: "Ejecución integral de obra civil, estructuras e instalaciones." },
      b3: { t: "GESTIÓN", d: "Control de alcance, tiempo, costo y calidad durante todo el proyecto." }
    },
    services: {
      title: "Soluciones para proyectos industriales de gran escala.",
      items: [
        { t: "CONSTRUCCIÓN INDUSTRIAL", d: "Construcción integral de plantas, naves industriales y edificios de proceso." },
        { t: "OBRA CIVIL", d: "Cimentaciones, pisos industriales, urbanización y obra exterior." },
        { t: "ESTRUCTURAS", d: "Estructuras metálicas y soluciones para grandes claros." },
        { t: "INSTALACIONES", d: "Coordinación de instalaciones mecánicas, eléctricas y sistemas especializados." },
        { t: "AMPLIACIONES INDUSTRIALES", d: "Expansión y modernización de instalaciones existentes." },
        { t: "PROJECT MANAGEMENT", d: "Planeación, coordinación, control y gestión integral del proyecto." }
      ]
    },
    industries: {
      title: "Construcción para industrias que no pueden detenerse.",
      phrase: "Infraestructura diseñada para operaciones industriales de alta exigencia."
    },
    projects: {
      title: "Proyectos que representan nuestra capacidad.",
      desc: "Una selección de proyectos conceptuales desarrollados para demostrar cómo una empresa constructora puede presentar su experiencia y capacidades.",
      cta: "VER PROYECTO →",
      list: [
        {
          name: "NOVA MANUFACTURING PLANT",
          type: "Planta de manufactura avanzada",
          loc: "Monterrey, Nuevo León",
          area: "32,500 m²",
          inv: "$485 MDP",
          time: "14 meses",
          sector: "Manufactura avanzada",
          desc: "Planta industrial de nueva generación diseñada para operaciones de manufactura avanzada y crecimiento a largo plazo.",
          route: "/web-aec/demos/vertexa/proyectos/nova-manufacturing-plant",
          main: true
        },
        {
          name: "NEXUS LOGISTICS CENTER",
          type: "Centro logístico y distribución",
          loc: "Guanajuato, México",
          area: "48,000 m²",
          inv: "$620 MDP",
          time: "18 meses",
          sector: "Logística",
          desc: "Centro logístico de gran escala con áreas de almacenamiento, patios de maniobra y operación integrada.",
          route: "/web-aec/demos/vertexa/proyectos/nexus-logistics-center",
          main: false
        },
        {
          name: "VECTRA AUTOMOTIVE EXPANSION",
          type: "Ampliación de planta automotriz",
          loc: "Querétaro, México",
          area: "18,700 m²",
          inv: "$275 MDP",
          time: "11 meses",
          sector: "Automotriz",
          desc: "Ampliación de una instalación industrial existente para incrementar capacidad productiva y preparar nuevas líneas de operación.",
          route: "/web-aec/demos/vertexa/proyectos/vectra-automotive-expansion",
          main: false
        },
        {
          name: "AURUM COMPONENTS",
          type: "Planta de componentes industriales",
          loc: "Torreón, Coahuila",
          area: "24,300 m²",
          inv: "$390 MDP",
          time: "13 meses",
          sector: "Manufactura",
          desc: "Planta de componentes industriales diseñada para integrarse a la cadena de suministro del norte de México.",
          route: "/web-aec/demos/vertexa/proyectos/aurum-components",
          main: false
        }
      ]
    },
    capabilities: {
      title: "Una visión integral del proyecto.",
      desc: "Cada etapa requiere coordinación. Nuestra propuesta integra las diferentes disciplinas bajo una visión de proyecto.",
      steps: ["PLANEACIÓN", "INGENIERÍA", "PROCUREMENT", "CONSTRUCCIÓN", "COORDINACIÓN", "CONTROL", "ENTREGA"]
    },
    tech: {
      title: "Built for the next generation of industry.",
      desc: "La construcción industrial está evolucionando. La tecnología, los datos y la gestión disciplinada permiten tomar mejores decisiones durante todo el ciclo del proyecto."
    },
    method: {
      title: "Planear mejor. Construir mejor.",
      steps: [
        { t: "PLAN", d: "Programación detallada y logística." },
        { t: "ENGINEER", d: "Ingeniería de valor y constructabilidad." },
        { t: "BUILD", d: "Ejecución segura y precisa." },
        { t: "CONTROL", d: "Gestión de calidad y costos." },
        { t: "DELIVER", d: "Cierre exitoso y transferencia." }
      ]
    },
    global: {
      title: "READY FOR GLOBAL PROJECTS",
      desc: "Construcción industrial para empresas que operan en México y el mundo."
    },
    contacto: {
      title: "Hablemos de tu próximo proyecto.",
      desc: "Cuéntanos sobre tu proyecto industrial y nuestro equipo se pondrá en contacto contigo.",
      phone: "+52 (81) 0000 0000",
      email: "contacto@vertexa.example",
      location: "Monterrey, Nuevo León\nMéxico",
      demoLocation: "Datos de contacto ficticios para fines demostrativos.",
      demoInt: "Integración demostrativa",
      demoProf: "Perfil demostrativo",
      formName: "NOMBRE",
      formCompany: "EMPRESA",
      formEmail: "EMAIL",
      formPhone: "TELÉFONO",
      formType: "TIPO DE PROYECTO",
      formTypes: ["Planta industrial", "Nave industrial", "Centro logístico", "Ampliación", "Obra civil", "Project Management", "Otro"],
      formMsg: "MENSAJE",
      formBtn: "ENVIAR SOLICITUD →",
      formSuccess: "DEMO — En un sitio real, esta solicitud sería enviada al equipo de VERTEXA."
    },
    footer: {
      disclaimer: "VERTEXA INDUSTRIAL es una empresa ficticia creada exclusivamente por MENDIVIL.BUILD como demostración conceptual de diseño y desarrollo web para la industria AEC. Todos los nombres, proyectos, ubicaciones, cifras, métricas y resultados mostrados en este sitio son ficticios."
    }
  },
  EN: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      services: "SERVICES",
      projects: "PROJECTS",
      capabilities: "CAPABILITIES",
      tech: "TECHNOLOGY",
      contact: "CONTACT"
    },
    demoPill: "DEMO · FICTIONAL COMPANY",
    hero: {
      tag: "ENGINEERING · CONSTRUCTION · INFRASTRUCTURE",
      title: "We build the infrastructure that powers industry.",
      desc: "Engineering, construction, and industrial project management under one unified team.",
      ctaPrimary: "VIEW OUR PROJECTS →",
      ctaSecondary: "LET'S TALK ABOUT YOUR PROJECT"
    },
    stats: {
      s1: { v: "+320,000", l: "sqm INDUSTRIAL INFRASTRUCTURE" },
      s2: { v: "48", l: "EXECUTED PROJECTS" },
      s3: { v: "12", l: "MEXICAN STATES" },
      s4: { v: "98.4%", l: "SCHEDULE COMPLIANCE" },
      disclaimer: "Fictional figures used exclusively for demonstration purposes."
    },
    about: {
      title: "Industrial construction with a project-first vision.",
      desc: "VERTEXA INDUSTRIAL integrates engineering, construction, and project management to develop efficient, safe industrial infrastructure ready for the needs of every operation.",
      b1: { t: "ENGINEERING", d: "Technical planning and coordination from early stages." },
      b2: { t: "CONSTRUCTION", d: "Comprehensive execution of civil, structural, and MEP works." },
      b3: { t: "MANAGEMENT", d: "Control of scope, time, cost, and quality throughout the project." }
    },
    services: {
      title: "Solutions for large-scale industrial projects.",
      items: [
        { t: "INDUSTRIAL CONSTRUCTION", d: "Comprehensive construction of plants, warehouses, and process buildings." },
        { t: "CIVIL WORKS", d: "Foundations, industrial floors, urbanization, and exterior works." },
        { t: "STRUCTURES", d: "Steel structures and long-span solutions." },
        { t: "MEP INSTALLATIONS", d: "Coordination of mechanical, electrical, and specialized systems." },
        { t: "INDUSTRIAL EXPANSIONS", d: "Expansion and modernization of existing facilities." },
        { t: "PROJECT MANAGEMENT", d: "Comprehensive project planning, coordination, control, and management." }
      ]
    },
    industries: {
      title: "Construction for industries that cannot stop.",
      phrase: "Infrastructure designed for high-performance industrial operations."
    },
    projects: {
      title: "Projects that represent our capability.",
      desc: "A selection of conceptual projects developed to demonstrate how a construction company can present its experience and capabilities.",
      cta: "VIEW PROJECT →",
      list: [
        {
          name: "NOVA MANUFACTURING PLANT",
          type: "Advanced manufacturing plant",
          loc: "Monterrey, Nuevo Leon",
          area: "32,500 sqm",
          inv: "$485 MXN",
          time: "14 months",
          sector: "Advanced manufacturing",
          desc: "Next-generation industrial plant designed for advanced manufacturing operations and long-term growth.",
          route: "/web-aec/demos/vertexa/proyectos/nova-manufacturing-plant",
          main: true
        },
        {
          name: "NEXUS LOGISTICS CENTER",
          type: "Logistics & distribution center",
          loc: "Guanajuato, Mexico",
          area: "48,000 sqm",
          inv: "$620 MXN",
          time: "18 months",
          sector: "Logistics",
          desc: "Large-scale logistics center with storage areas, maneuvering yards, and integrated operation.",
          route: "/web-aec/demos/vertexa/proyectos/nexus-logistics-center",
          main: false
        },
        {
          name: "VECTRA AUTOMOTIVE EXPANSION",
          type: "Automotive plant expansion",
          loc: "Queretaro, Mexico",
          area: "18,700 sqm",
          inv: "$275 MXN",
          time: "11 months",
          sector: "Automotive",
          desc: "Expansion of an existing industrial facility to increase productive capacity and prepare new operating lines.",
          route: "/web-aec/demos/vertexa/proyectos/vectra-automotive-expansion",
          main: false
        },
        {
          name: "AURUM COMPONENTS",
          type: "Industrial components plant",
          loc: "Torreon, Coahuila",
          area: "24,300 sqm",
          inv: "$390 MXN",
          time: "13 months",
          sector: "Manufacturing",
          desc: "Industrial components plant designed to integrate into the northern Mexico supply chain.",
          route: "/web-aec/demos/vertexa/proyectos/aurum-components",
          main: false
        }
      ]
    },
    capabilities: {
      title: "A comprehensive project vision.",
      desc: "Every stage requires coordination. Our proposal integrates different disciplines under a single project vision.",
      steps: ["PLANNING", "ENGINEERING", "PROCUREMENT", "CONSTRUCTION", "COORDINATION", "CONTROL", "HANDOVER"]
    },
    tech: {
      title: "Built for the next generation of industry.",
      desc: "Industrial construction is evolving. Technology, data, and disciplined management enable better decisions throughout the project lifecycle."
    },
    method: {
      title: "Plan better. Build better.",
      steps: [
        { t: "PLAN", d: "Detailed scheduling and logistics." },
        { t: "ENGINEER", d: "Value engineering and constructability." },
        { t: "BUILD", d: "Safe and precise execution." },
        { t: "CONTROL", d: "Quality and cost management." },
        { t: "DELIVER", d: "Successful closeout and handover." }
      ]
    },
    global: {
      title: "READY FOR GLOBAL PROJECTS",
      desc: "Industrial construction for companies operating in Mexico and around the world."
    },
    contacto: {
      title: "Let's talk about your next project.",
      desc: "Tell us about your industrial project and our team will get in touch with you.",
      phone: "+52 (81) 0000 0000",
      email: "contacto@vertexa.example",
      location: "Monterrey, Nuevo Leon\nMexico",
      demoLocation: "Fictional contact information for demonstration purposes.",
      demoInt: "Demo integration",
      demoProf: "Demo profile",
      formName: "NAME",
      formCompany: "COMPANY",
      formEmail: "EMAIL",
      formPhone: "PHONE",
      formType: "PROJECT TYPE",
      formTypes: ["Industrial plant", "Industrial warehouse", "Logistics center", "Expansion", "Civil works", "Project Management", "Other"],
      formMsg: "MESSAGE",
      formBtn: "SEND INQUquiry →",
      formSuccess: "DEMO — On a live website, this inquiry would be sent to the VERTEXA team."
    },
    footer: {
      disclaimer: "VERTEXA INDUSTRIAL is a fictional company created exclusively by MENDIVIL.BUILD as a conceptual demonstration of web design and development for the AEC industry. All names, projects, locations, figures, metrics and results shown on this website are fictional."
    }
  }
};
const AnimatedCounter: React.FC<{ valueStr: string; className?: string }> = ({ valueStr, className }) => {
  const [count, setCount] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetEl = ref.current;
    if (!targetEl) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const isPercentage = valueStr.includes('%');
        const prefix = valueStr.includes('+') ? '+' : '';
        const numStr = valueStr.replace(/[^0-9.]/g, '');
        const targetValue = parseFloat(numStr);
        const duration = 2000; // 2 seconds
        const start = performance.now();

        // Ease-out quad function for smooth deceleration
        const easeOutQuad = (t: number) => t * (2 - t);

        const animate = (time: number) => {
          let progress = Math.min((time - start) / duration, 1);
          progress = easeOutQuad(progress);
          
          const current = progress * targetValue;
          
          let formatted = '';
          if (targetValue % 1 !== 0) {
            formatted = current.toFixed(1);
          } else {
            formatted = Math.floor(current).toLocaleString('en-US');
          }
          
          setCount(`${prefix}${formatted}${isPercentage ? '%' : ''}`);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(valueStr);
          }
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });

    observer.observe(targetEl);
    return () => observer.disconnect();
  }, [valueStr, hasAnimated]);

  return <div ref={ref} className={className}>{hasAnimated ? count : '0'}</div>;
};

const VertexaDemo: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = vertexaDict[language];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Inject Space Grotesk dynamically if not present
    if (!document.getElementById('space-grotesk-font')) {
      const link = document.createElement('link');
      link.id = 'space-grotesk-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
    
    document.title = "VERTEXA Industrial | Engineering & Construction — Demo";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Conceptual website demo for a fictional industrial construction company, created by MENDIVIL.BUILD.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Conceptual website demo for a fictional industrial construction company, created by MENDIVIL.BUILD.";
      document.head.appendChild(meta);
    }
  }, []);

  const heroRef = useIntersectionObserver();
  const statsRef = useIntersectionObserver();
  const aboutRef = useIntersectionObserver();
  const servRef = useIntersectionObserver();
  const indRef = useIntersectionObserver();
  const projRef = useIntersectionObserver();
  const capRef = useIntersectionObserver();
  const techRef = useIntersectionObserver();
  const methodRef = useIntersectionObserver();
  const globalRef = useIntersectionObserver();
  const ctaRef = useIntersectionObserver();

  // VERTEXA Colors
  const colors = {
    bg: '#0F1215',       // Carbon black
    panel: '#1A1D21',    // Lighter gray
    steel: '#3A424A',    // Steel gray
    accent: '#0066FF',   // Electric blue
    white: '#F4F5F6',
    muted: '#8B949E'
  };

  const navLinks = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#nosotros" },
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.capabilities, href: "#capacidades" },
    { label: t.nav.tech, href: "#tecnologia" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: colors.bg, color: colors.white }} className="min-h-screen font-inter antialiased">
      {/* Demo Pill (Fixed) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div style={{ backgroundColor: colors.accent }} className="text-white text-[10px] font-bold tracking-widest px-4 py-1 rounded-b-md shadow-lg pointer-events-auto uppercase">
          {t.demoPill}
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ backgroundColor: `${colors.bg}E6` }} className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-white/10 pt-6 transition-all">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" onClick={(e) => handleNavClick(e, "#inicio")} className="flex items-center gap-2">
            <div style={{ backgroundColor: colors.accent }} className="w-4 h-4" />
            <span style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="font-bold text-xl tracking-wider text-white">VERTEXA</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l, i) => (
              <a key={i} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-sm text-gray-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            
            <div className="h-4 w-px bg-white/20 mx-2" />
            
            <div className="flex gap-3 text-sm font-bold">
              <button onClick={() => setLanguage('ES')} className={language === 'ES' ? 'text-white' : 'text-gray-500'}>ES</button>
              <button onClick={() => setLanguage('EN')} className={language === 'EN' ? 'text-white' : 'text-gray-500'}>EN</button>
            </div>
            
            {/* CTA using Mendivil's actual contact endpoint */}
            <a href="#contacto" style={{ backgroundColor: colors.accent }} className="text-white text-xs font-bold tracking-wider px-6 py-3 hover:opacity-90 transition-opacity">
              {t.nav.contact}
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ backgroundColor: colors.panel }} className="lg:hidden absolute top-full left-0 w-full border-b border-white/10 py-4 shadow-xl">
            <div className="flex flex-col px-6 gap-4">
              {navLinks.map((l, i) => (
                <a key={i} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="text-sm text-gray-300 py-2 border-b border-white/5">
                  {l.label}
                </a>
              ))}
              <div className="flex gap-4 py-2">
                <button onClick={() => { setLanguage('ES'); setMenuOpen(false); }} className={language === 'ES' ? 'text-white font-bold' : 'text-gray-500'}>ESPAÑOL</button>
                <button onClick={() => { setLanguage('EN'); setMenuOpen(false); }} className={language === 'EN' ? 'text-white font-bold' : 'text-gray-500'}>ENGLISH</button>
              </div>
              <a href="#contacto" style={{ backgroundColor: colors.accent }} className="text-center text-white text-xs font-bold tracking-wider px-6 py-4 mt-2">
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" className="pt-40 pb-20 lg:pt-52 lg:pb-32 relative overflow-hidden" ref={heroRef}>
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <img 
            src="/demos/vertexa/vertexa-hero.png" 
            alt="Vertexa Industrial" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-lighten"
            style={{ 
              animation: 'kenburns 30s ease-out forwards',
              transformOrigin: 'center right'
            }}
          />
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1215] via-[#0F1215]/80 to-[#0F1215]/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1215] via-transparent to-transparent z-10" />
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes kenburns {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.05); }
          }
        `}} />

        <div className="container mx-auto px-6 relative z-20 fade-in-section">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-gray-500" />
              <span className="text-gray-400 text-xs tracking-widest font-mono uppercase">{t.hero.tag}</span>
            </div>
            
            <h1 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
              {t.hero.title}
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
              {t.hero.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#proyectos" onClick={(e) => handleNavClick(e, '#proyectos')} style={{ backgroundColor: colors.accent }} className="inline-flex justify-center items-center text-white text-xs md:text-sm font-bold tracking-widest px-8 py-5 hover:bg-white hover:text-black transition-colors group">
                {t.hero.ctaPrimary}
              </a>
              <a href="#contacto" className="inline-flex justify-center items-center border border-white/20 text-white text-xs md:text-sm font-bold tracking-widest px-8 py-5 hover:border-white transition-colors">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="py-10 border-y border-white/10 bg-[#1A1D21]" ref={statsRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/10">
            {[t.stats.s1, t.stats.s2, t.stats.s3, t.stats.s4].map((s, i) => (
              <div key={i} className={`pl-0 ${i !== 0 ? 'md:pl-8' : ''} ${i % 2 !== 0 ? 'pl-8' : ''} flex flex-col justify-center`}>
                <div style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  <AnimatedCounter valueStr={s.v} className="text-3xl md:text-5xl font-bold text-white mb-2" />
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 tracking-widest font-mono uppercase">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <span className="text-[10px] text-gray-600 uppercase tracking-wider">{t.stats.disclaimer}</span>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 lg:py-32" ref={aboutRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <div className="max-w-3xl mb-16">
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">{t.about.desc}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", t: t.about.b1.t, d: t.about.b1.d },
              { num: "02", t: t.about.b2.t, d: t.about.b2.d },
              { num: "03", t: t.about.b3.t, d: t.about.b3.d }
            ].map((b, i) => (
              <div key={i} className="group relative border border-white/10 p-8 hover:border-[#0066FF] transition-colors bg-[#1A1D21]">
                <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-5xl font-bold text-white/5 mb-6 group-hover:text-[#0066FF]/20 transition-colors">{b.num}</div>
                <h3 className="text-lg font-bold tracking-widest mb-4 uppercase">{b.t}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.d}</p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0066FF] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 lg:py-32 bg-[#1A1D21]" ref={servRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-16 max-w-2xl">{t.services.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((s, i) => {
              const icons = [Factory, Building2, Workflow, Wrench, TrendingUp, Activity];
              const Icon = icons[i];
              return (
                <div key={i} className="border border-white/5 bg-[#0F1215] p-8 hover:-translate-y-1 transition-transform">
                  <Icon className="w-10 h-10 text-[#0066FF] mb-6" strokeWidth={1.5} />
                  <h3 className="text-sm font-bold tracking-widest mb-3 uppercase">{s.t}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section className="py-24 border-y border-white/10" ref={indRef}>
        <div className="container mx-auto px-6 fade-in-section text-center">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl md:text-4xl font-bold mb-6">{t.industries.title}</h2>
          <p className="text-gray-400 mb-16">{t.industries.phrase}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["AUTOMOTIVE", "MANUFACTURING", "LOGISTICS", "ADVANCED MANUFACTURING"].map((ind, i) => (
              <div key={i} className="px-8 py-4 border border-white/20 text-xs md:text-sm tracking-widest font-mono text-gray-300 uppercase hover:bg-white/5 transition-colors cursor-default">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24 lg:py-32" ref={projRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <div className="max-w-2xl mb-16">
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6">{t.projects.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{t.projects.desc}</p>
          </div>

          <div className="space-y-8">
            {t.projects.list.map((p, i) => {
              const projectImages = [
                "/demos/vertexa/nova-manufacturing-plant.png",
                "/demos/vertexa/nexus-logistics-center.png",
                "/demos/vertexa/vectra-automotive-expansion.png",
                "/demos/vertexa/aurum-components.png"
              ];
              return (
              <div key={i} className={`flex flex-col lg:flex-row gap-8 ${p.main ? 'bg-[#1A1D21] border border-white/10' : 'border-t border-white/10 pt-8'} ${!p.main && i === 1 ? 'border-none pt-0' : ''}`}>
                {/* Visual Area */}
                <a href={p.route} className={`${p.main ? 'w-full lg:w-2/3 h-64 lg:h-[500px]' : 'w-full lg:w-1/3 h-48 lg:h-64'} bg-[#0F1215] relative overflow-hidden group block`}>
                   <img 
                     src={projectImages[i]} 
                     alt={p.name} 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                     loading="lazy"
                   />
                   <div className="absolute inset-0 bg-[#0F1215]/40 group-hover:bg-[#0F1215]/20 transition-colors duration-700 z-10" />
                   <div className="absolute bottom-4 left-4 z-20">
                     <span className="text-[10px] bg-[#0066FF] text-white px-2 py-1 font-mono tracking-widest uppercase shadow-lg">{p.sector}</span>
                   </div>
                   {/* Hover Overlay "VER PROYECTO" */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                     <span className="bg-[#0066FF] text-white text-xs font-bold tracking-widest px-6 py-3 uppercase shadow-2xl flex items-center">
                       {t.projects.cta.replace(' →', '')} <ArrowRight className="ml-2 w-4 h-4" />
                     </span>
                   </div>
                </a>
                
                {/* Info Area */}
                <div className={`${p.main ? 'w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center' : 'w-full lg:w-2/3 flex flex-col justify-center'}`}>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl lg:text-3xl font-bold mb-2 uppercase">{p.name}</h3>
                  <div className="text-[#0066FF] text-sm tracking-widest font-mono mb-6 uppercase">{p.loc}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">AREA</div>
                      <div className="font-mono text-gray-200">{p.area}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">TIME</div>
                      <div className="font-mono text-gray-200">{p.time}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">CAPEX</div>
                      <div className="font-mono text-gray-200">{p.inv}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{p.desc}</p>
                  
                  <a href={p.route} className="inline-flex items-center text-xs font-bold tracking-widest text-white hover:text-[#0066FF] transition-colors uppercase group w-max">
                    {t.projects.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CAPACIDADES (Timeline) */}
      <section id="capacidades" className="py-24 bg-[#1A1D21]" ref={capRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-4xl font-bold mb-6">{t.capabilities.title}</h2>
            <p className="text-gray-400">{t.capabilities.desc}</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block -translate-y-1/2" />
            <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:hidden" />
            
            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
              {t.capabilities.steps.map((step, i) => (
                <div key={i} className="flex flex-row md:flex-col items-center md:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0F1215] border border-[#0066FF] flex items-center justify-center shrink-0">
                    <span className="text-[#0066FF] text-xs font-mono">0{i+1}</span>
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-300 md:mt-4 md:text-center">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section id="tecnologia" className="py-24 lg:py-32" ref={techRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/30 text-xs font-mono tracking-widest mb-6">NEXT GEN</div>
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6">{t.tech.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">{t.tech.desc}</p>
              
              <div className="flex flex-wrap gap-4">
                {["BIM", "LEAN CONSTRUCTION", "DIGITAL CONTROL", "DATA", "AI"].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                    <div className="w-2 h-2 bg-[#0066FF]" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/3] bg-[#0A0C0E] border border-white/5 flex items-center justify-center overflow-hidden">
               {/* Grid Background */}
               <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               
               {/* Digital Twin Core & Network SVG Animation */}
               <svg viewBox="0 0 400 300" className="w-full h-full relative z-10 opacity-80" xmlns="http://www.w3.org/2000/svg">
                 <style>
                   {`
                     @media (prefers-reduced-motion: no-preference) {
                       .tech-line { stroke: #3A424A; stroke-width: 0.5; fill: none; }
                       .tech-line-active { stroke: #0066FF; stroke-width: 1; fill: none; stroke-dasharray: 100; animation: dash 8s linear infinite; opacity: 0.4; }
                       @keyframes dash { to { stroke-dashoffset: -200; } }
                       .core-pulse { animation: corePulse 4s ease-in-out infinite alternate; }
                       @keyframes corePulse { 0% { opacity: 0.3; r: 14; } 100% { opacity: 0.8; r: 16; } }
                       .node-pulse { animation: nodePulse 3s ease-in-out infinite alternate; }
                       @keyframes nodePulse { 0% { opacity: 0.2; } 100% { opacity: 1; } }
                     }
                   `}
                 </style>
                 
                 {/* Connections */}
                 <path d="M200,150 L100,80" className="tech-line" />
                 <path d="M200,150 L100,80" className="tech-line-active" style={{ animationDelay: '0s' }} />
                 
                 <path d="M200,150 L300,60" className="tech-line" />
                 <path d="M200,150 L300,60" className="tech-line-active" style={{ animationDelay: '1s', animationDuration: '6s' }} />
                 
                 <path d="M200,150 L320,220" className="tech-line" />
                 <path d="M200,150 L320,220" className="tech-line-active" style={{ animationDelay: '2s' }} />
                 
                 <path d="M200,150 L120,240" className="tech-line" />
                 
                 <path d="M200,150 L260,110" className="tech-line" />

                 {/* Central Core */}
                 <circle cx="200" cy="150" r="30" fill="none" stroke="#3A424A" strokeWidth="0.5" />
                 <circle cx="200" cy="150" r="22" fill="none" stroke="#0066FF" strokeWidth="0.5" opacity="0.5" />
                 <circle cx="200" cy="150" r="15" fill="#0066FF" className="core-pulse" />
                 <text x="200" y="153" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.7">CORE</text>

                 {/* Nodes */}
                 {/* BIM */}
                 <circle cx="100" cy="80" r="4" fill="#ffffff" className="node-pulse" style={{ animationDelay: '0.5s' }} />
                 <circle cx="100" cy="80" r="12" fill="none" stroke="#3A424A" strokeWidth="0.5" />
                 <text x="100" y="70" fill="#a1a1aa" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">BIM</text>
                 
                 {/* DATA */}
                 <circle cx="300" cy="60" r="3" fill="#0066FF" />
                 <rect x="295" y="55" width="10" height="10" fill="none" stroke="#3A424A" strokeWidth="0.5" />
                 <text x="300" y="50" fill="#a1a1aa" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">DATA</text>
                 
                 {/* DIGITAL CONTROL */}
                 <circle cx="320" cy="220" r="5" fill="none" stroke="#0066FF" strokeWidth="1" className="node-pulse" style={{ animationDelay: '1.5s' }} />
                 <circle cx="320" cy="220" r="2" fill="#ffffff" />
                 <text x="320" y="235" fill="#a1a1aa" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">CTRL</text>

                 {/* LEAN */}
                 <circle cx="120" cy="240" r="4" fill="#3A424A" />
                 <path d="M115,240 L125,240 M120,235 L120,245" stroke="#ffffff" strokeWidth="0.5" />
                 <text x="120" y="255" fill="#a1a1aa" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">LEAN</text>

                 {/* AI */}
                 <polygon points="260,105 265,115 255,115" fill="none" stroke="#0066FF" strokeWidth="1" className="node-pulse" style={{ animationDelay: '2.5s' }} />
                 <text x="260" y="100" fill="#a1a1aa" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1">AI</text>
                 
                 {/* Decorative elements */}
                 <text x="10" y="20" fill="#3A424A" fontSize="5" fontFamily="monospace">SYS.VTX-09</text>
                 <text x="10" y="290" fill="#3A424A" fontSize="5" fontFamily="monospace">NET: ACTIVE</text>
                 <path d="M 380 280 L 390 280 L 390 290" fill="none" stroke="#3A424A" strokeWidth="0.5" />
                 <path d="M 10 280 L 10 290 L 20 290" fill="none" stroke="#3A424A" strokeWidth="0.5" />
                 <path d="M 380 20 L 390 20 L 390 10" fill="none" stroke="#3A424A" strokeWidth="0.5" />
                 <path d="M 10 20 L 10 10 L 20 10" fill="none" stroke="#3A424A" strokeWidth="0.5" />
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* METODO */}
      <section className="py-24 bg-[#1A1D21] border-t border-white/5" ref={methodRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl font-bold mb-12 text-center">{t.method.title}</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            {t.method.steps.map((s, i) => (
              <div key={i} className="flex-1 bg-[#0F1215] p-6 border-l-2 border-[#3A424A] hover:border-[#0066FF] transition-colors">
                <h4 className="text-lg font-bold uppercase mb-2 text-white">{s.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL */}
      <section className="py-40 relative overflow-hidden text-center" ref={globalRef}>
        {/* Earth Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050A10]">
          <img 
            src="/demos/vertexa/vertexa-earth.png" 
            alt="Global Reach" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
            style={{ 
              animation: 'kenburns-earth 40s ease-out forwards',
              transformOrigin: 'center center'
            }}
          />
          {/* Gradients to ensure text readability and integration */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1118]/80 via-[#0A1118]/40 to-[#0A1118]/90 z-10" />
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes kenburns-earth {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.1); }
          }
        `}} />
        
        <div className="container mx-auto px-6 relative z-20 fade-in-section">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6 tracking-wide text-white drop-shadow-lg">{t.global.title}</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto drop-shadow-md font-light">{t.global.desc}</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 bg-[#0F1215] text-white border-t border-white/5 relative overflow-hidden" ref={ctaRef}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Información */}
            <div className="lg:col-span-5 fade-in-section">
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-4xl md:text-5xl font-bold mb-6">{t.contacto.title}</h2>
              <p className="text-lg text-gray-400 mb-12 max-w-md">{t.contacto.desc}</p>
              
              <div className="space-y-8 mb-16">
                <div>
                  <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#3A424A] mb-3 uppercase">
                    <Phone className="w-4 h-4" /> Teléfono
                  </div>
                  <div className="text-xl">{t.contacto.phone}</div>
                  <div className="group relative inline-block mt-2">
                    <div className="flex items-center gap-2 text-green-500 cursor-help">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                      <span className="text-sm font-medium">WhatsApp</span>
                    </div>
                    <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-max bg-[#1A1D21] text-xs px-3 py-2 border border-white/10 shadow-xl">{t.contacto.demoInt}</div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#3A424A] mb-3 uppercase">
                    <Mail className="w-4 h-4" /> Email
                  </div>
                  <div className="text-xl">{t.contacto.email}</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#3A424A] mb-3 uppercase">
                    <MapPin className="w-4 h-4" /> Ubicación
                  </div>
                  <div className="text-xl whitespace-pre-line">{t.contacto.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {[
                  { name: 'LinkedIn', svg: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
                  { name: 'Instagram', svg: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                  { name: 'Facebook', svg: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                  { name: 'YouTube', svg: <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg> }
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 cursor-help hover:text-white hover:border-[#0066FF] transition-colors">
                      {item.svg}
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-max bg-[#1A1D21] text-xs px-3 py-2 border border-white/10 shadow-xl z-20">
                      {t.contacto.demoProf}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-xs font-mono text-gray-600 uppercase border-l-2 border-[#0066FF]/30 pl-4">
                {t.contacto.demoLocation}
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-7 fade-in-section">
              <div className="bg-[#1A1D21] p-8 md:p-12 border border-white/5 shadow-2xl relative">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const btn = e.currentTarget.querySelector('button');
                  const orig = btn?.innerHTML;
                  if(btn) btn.innerHTML = `<span class="flex items-center gap-2 justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> ${t.contacto.formSuccess}</span>`;
                  if(btn) btn.className = "w-full bg-[#051A2E] text-[#0066FF] border border-[#0066FF]/30 text-xs font-bold tracking-widest px-8 py-5 uppercase transition-all";
                  setTimeout(() => {
                    if(btn && orig) {
                      btn.innerHTML = orig;
                      btn.className = "w-full bg-[#0066FF] text-white text-xs font-bold tracking-widest px-8 py-5 hover:bg-white hover:text-[#0066FF] transition-colors uppercase";
                    }
                  }, 5000);
                }}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formName}</label>
                      <input type="text" className="w-full bg-[#0A0C0E] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formCompany}</label>
                      <input type="text" className="w-full bg-[#0A0C0E] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formEmail}</label>
                      <input type="email" className="w-full bg-[#0A0C0E] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formPhone}</label>
                      <input type="tel" className="w-full bg-[#0A0C0E] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors" required />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formType}</label>
                    <select className="w-full bg-[#0A0C0E] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors appearance-none cursor-pointer" required>
                      <option value="" disabled selected>—</option>
                      {t.contacto.formTypes.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-8">
                    <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formMsg}</label>
                    <textarea className="w-full bg-[#0A0C0E] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors h-32 resize-none" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#0066FF] text-white text-xs font-bold tracking-widest px-8 py-5 hover:bg-white hover:text-[#0066FF] transition-colors uppercase">
                    {t.contacto.formBtn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0C0E] py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="font-bold text-2xl tracking-wider text-white mb-2">VERTEXA</div>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest">{t.hero.tag}</div>
            </div>
            
            <div className="flex flex-wrap gap-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
              {navLinks.map((l, i) => (
                <a key={i} href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="hover:text-white transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-[10px] md:text-xs text-gray-500 max-w-3xl leading-relaxed">
              {t.footer.disclaimer}
            </div>
            <div className="flex gap-4 text-xs font-bold text-gray-500">
              <button onClick={() => setLanguage('ES')} className={language === 'ES' ? 'text-white' : 'hover:text-white'}>ES</button>
              <button onClick={() => setLanguage('EN')} className={language === 'EN' ? 'text-white' : 'hover:text-white'}>EN</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VertexaDemo;
