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
      tag: "CONSTRUCCIÓN INDUSTRIAL · AEC",
      title: "Construimos espacios.\nGeneramos confianza.",
      desc: "Una experiencia web diseñada para demostrar capacidad técnica, reducir fricción y facilitar la conversión de visitantes en clientes comerciales.",
      ctaPrimary: "SOLICITAR COTIZACIÓN →",
      ctaSecondary: "HABLAR POR WHATSAPP"
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
      phrase: "Infraestructura diseñada para operaciones industriales de alta exigencia.",
      list: [
        { name: "AUTOMOTIVE", desc: "Instalaciones de alta precisión y líneas de ensamble automatizadas." },
        { name: "MANUFACTURING", desc: "Naves industriales adaptables con infraestructura pesada." },
        { name: "LOGISTICS", desc: "Centros de distribución inteligentes y cross-docking." },
        { name: "ADVANCED TECH", desc: "Salas limpias y entornos controlados para alta tecnología." }
      ]
    },
    projects: {
      title: "Proyectos que representan nuestra capacidad.",
      desc: "Una selección de proyectos conceptuales desarrollados para demostrar cómo una empresa constructora puede presentar su experiencia y capacidades.",
      demoLabel: "PROYECTO DEMO",
      cta: "VER PROYECTO",
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
      steps: ["PLANEACIÓN", "INGENIERÍA", "PROCUREMENT", "CONSTRUCCIÓN", "COORDINACIÓN", "CONTROL", "ENTREGA"],
      descriptions: [
        "Análisis de viabilidad, selección de sitio estratégico y planificación maestra del desarrollo industrial.",
        "Ingeniería de detalle, modelado estructural y diseño de instalaciones electromecánicas.",
        "Gestión de compras estratégicas, adquisición de equipos críticos y validación de proveedores logísticos.",
        "Preparación del terreno, cimentación profunda, obra civil y erección de la estructura principal.",
        "Coordinación BIM, integración de especialidades y resolución de interferencias en sitio.",
        "Monitoreo de presupuesto, control de calidad y seguimiento riguroso del programa de obra.",
        "Pruebas de comisionamiento, entrega llave en mano y transferencia de manuales operativos."
      ]
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
    conversion: {
      eyebrow: "¿TIENES UN PROYECTO?",
      title: "HABLEMOS DE LO QUE\nQUIERES CONSTRUIR.",
      desc: "Cuéntanos el tipo de proyecto, ubicación y alcance inicial. Nuestro equipo puede revisar la información y ayudarte a definir el siguiente paso.",
      ctaPrimary: "SOLICITAR COTIZACIÓN →",
      ctaSecondary: "HABLAR POR WHATSAPP"
    },
    leadJourney: [
      { step: "01", label: "VISIT" },
      { step: "02", label: "DISCOVERY" },
      { step: "03", label: "TRUST" },
      { step: "04", label: "CONTACT" },
      { step: "05", label: "LEAD" }
    ],
    demoExperience: "DEMO DE EXPERIENCIA DE CONVERSIÓN",
    waPreview: {
      title: "WhatsApp",
      subtitle: "VERTEXA Industrial",
      msg: "Hola, vi sus proyectos en el sitio web y quisiera solicitar información para un proyecto.",
      btn: "CONTINUAR A WHATSAPP →",
      demoTag: "WHATSAPP SIMULATION · DEMO",
      status: "En línea",
      time: "Justo ahora"
    },
    contactModal: {
      title: "SOLICITAR COTIZACIÓN",
      subtitle: "LEAD CAPTURE EXPERIENCE · DEMO",
      successTitle: "SOLICITUD RECIBIDA",
      successDesc: "Nuestro equipo revisaría la información y contactaría al prospecto para continuar la conversación.",
      phName: "Ej. Carlos Mendoza",
      phCompany: "Ej. Vertexa Group",
      phEmail: "carlos@empresa.com",
      phPhone: "+52 (___) ___ ____",
      phSelect: "— Selecciona una opción —",
      phMsg: "Describe brevemente el alcance de tu proyecto...",
      response: "Respuesta inicial en menos de 24 horas.",
      backBtn: "VOLVER AL INICIO"
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
      tag: "INDUSTRIAL CONSTRUCTION · AEC",
      title: "We build spaces.\nWe build trust.",
      desc: "A web experience designed to demonstrate technical capacity, reduce friction, and facilitate the conversion of visitors into commercial clients.",
      ctaPrimary: "REQUEST A QUOTE →",
      ctaSecondary: "TALK ON WHATSAPP"
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
      phrase: "Infrastructure designed for high-performance industrial operations.",
      list: [
        { name: "AUTOMOTIVE", desc: "High-precision facilities and automated assembly lines." },
        { name: "MANUFACTURING", desc: "Adaptable industrial buildings with heavy infrastructure." },
        { name: "LOGISTICS", desc: "Smart distribution centers and cross-docking." },
        { name: "ADVANCED TECH", desc: "Cleanrooms and controlled environments for high technology." }
      ]
    },
    projects: {
      title: "Projects that represent our capability.",
      desc: "A selection of conceptual projects developed to demonstrate how a construction company can present its experience and capabilities.",
      demoLabel: "DEMO PROJECT",
      cta: "VIEW PROJECT",
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
      steps: ["PLANNING", "ENGINEERING", "PROCUREMENT", "CONSTRUCTION", "COORDINATION", "CONTROL", "HANDOVER"],
      descriptions: [
        "Feasibility analysis, strategic site selection, and master planning for industrial development.",
        "Detailed engineering, structural modeling, and design of electromechanical facilities.",
        "Strategic purchasing management, acquisition of critical equipment, and logistics supplier validation.",
        "Site preparation, deep foundation, civil works, and erection of the main structure.",
        "BIM coordination, integration of specialties, and on-site clash resolution.",
        "Budget monitoring, quality control, and rigorous tracking of the construction schedule.",
        "Commissioning tests, turnkey delivery, and transfer of operational manuals."
      ]
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
      formBtn: "SEND INQUIRY →",
      formSuccess: "DEMO — On a live website, this inquiry would be sent to the VERTEXA team."
    },
    conversion: {
      eyebrow: "DO YOU HAVE A PROJECT?",
      title: "LET'S TALK ABOUT WHAT\nYOU WANT TO BUILD.",
      desc: "Tell us about the project type, location, and initial scope. Our team will review the information and help define the next step.",
      ctaPrimary: "REQUEST A QUOTE →",
      ctaSecondary: "TALK ON WHATSAPP"
    },
    leadJourney: [
      { step: "01", label: "VISIT" },
      { step: "02", label: "DISCOVERY" },
      { step: "03", label: "TRUST" },
      { step: "04", label: "CONTACT" },
      { step: "05", label: "LEAD" }
    ],
    demoExperience: "CONVERSION EXPERIENCE DEMO",
    waPreview: {
      title: "WhatsApp",
      subtitle: "VERTEXA Industrial",
      msg: "Hello, I saw your projects on the website and would like to request information for a project.",
      btn: "CONTINUE TO WHATSAPP →",
      demoTag: "WHATSAPP SIMULATION · DEMO",
      status: "Online",
      time: "Just now"
    },
    contactModal: {
      title: "REQUEST A QUOTE",
      subtitle: "LEAD CAPTURE EXPERIENCE · DEMO",
      successTitle: "REQUEST RECEIVED",
      successDesc: "Our team would review the information and contact the prospect to continue the conversation.",
      phName: "E.g. John Doe",
      phCompany: "E.g. Vertexa Group",
      phEmail: "john@company.com",
      phPhone: "+1 (___) ___ ____",
      phSelect: "— Select an option —",
      phMsg: "Briefly describe the scope of your project...",
      response: "Initial response in less than 24 hours.",
      backBtn: "BACK TO HOME"
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
  
  // Modal states for conversion journey
  const [showContactModal, setShowContactModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Interactive section states
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  
  // Video optimization ref
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowContactModal(false);
        setShowWhatsAppModal(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


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
  const conversionRef = useIntersectionObserver();
  const techRef = useIntersectionObserver();
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
      <section id="inicio" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden flex items-center min-h-[90vh]" ref={heroRef}>
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0C0E]">
          <img 
            src="/demos/vertexa/vertexa-hero.png" 
            alt="Vertexa Industrial" 
            className="absolute inset-0 w-full h-full object-cover opacity-[0.35] mix-blend-luminosity"
            style={{ 
              animation: 'kenburns 40s ease-out forwards',
              transformOrigin: 'center right'
            }}
          />
          {/* Subtle Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C0E] via-[#0A0C0E]/90 to-transparent z-10 w-full md:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0E] via-transparent to-transparent z-10" />
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes kenburns {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.05); }
          }
          @keyframes float-subtle {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}} />

        <div className="container mx-auto px-6 relative z-20 fade-in-section w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Text Column */}
            <div className="lg:col-span-6 pt-12 lg:pt-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-[#0066FF]" />
                <span className="text-[#0066FF] text-[10px] md:text-xs tracking-widest font-mono uppercase">{t.hero.tag}</span>
              </div>
              
              <h1 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 whitespace-pre-line text-white">
                {t.hero.title}
              </h1>
              
              <p className="text-base md:text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed">
                {t.hero.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => { setShowContactModal(true); setFormSubmitted(false); }} 
                  className="relative overflow-hidden bg-[#0066FF] border border-transparent text-white text-xs font-bold tracking-widest px-8 py-5 transition-all duration-300 uppercase flex items-center justify-center gap-2 group hover:bg-[#005ce6] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,102,255,0.4)]"
                >
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-out" />
                  <span className="relative z-10">{t.hero.ctaPrimary.replace(' →', '')}</span>
                  <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => setShowWhatsAppModal(true)} 
                  className="relative overflow-hidden bg-[#179B7E] border border-white/10 text-white text-xs font-bold tracking-widest px-8 py-5 transition-all duration-300 uppercase flex items-center justify-center gap-3 group hover:bg-[#148F73] hover:border-white/20 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(23,155,126,0.3)]"
                >
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-out" />
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                  <span className="relative z-10">{t.hero.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Visual Conversion Panel Column */}
            <div className="lg:col-span-5 lg:col-start-8 hidden md:block relative perspective-1000">
              <div className="relative w-full max-w-md mx-auto" style={{ animation: 'float-subtle 8s ease-in-out infinite' }}>
                
                {/* Decorative background blur */}
                <div className="absolute inset-0 bg-[#0066FF]/10 blur-[100px] rounded-full" />
                
                {/* Main Card: Conversion Engine */}
                <div className="relative bg-[#0F1215]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0 overflow-hidden">
                  
                  {/* Subtle technical grid background */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
                      <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
                      <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">Lead Generation Active</div>
                    </div>

                    {/* Funnel / Flow visualization */}
                    <div className="space-y-6 mb-10">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                          <span className="text-gray-500 uppercase tracking-widest">Website Visitors</span>
                          <span className="text-gray-400">12,450</span>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-gray-600 w-full" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                          <span className="text-gray-500 uppercase tracking-widest">Project Inquiries</span>
                          <span className="text-gray-400">342</span>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-gray-500 w-[40%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                          <span className="text-[#0066FF] font-bold uppercase tracking-widest">Qualified Opportunities</span>
                          <span className="text-[#0066FF] font-bold">84</span>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 overflow-hidden">
                          <div className="h-full bg-[#0066FF] w-[15%] shadow-[0_0_10px_#0066FF]" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Lead Notification */}
                    <div className="bg-[#1A1D21] border border-white/10 p-5 shadow-2xl relative overflow-hidden group transform translate-y-2 hover:translate-y-0 hover:border-white/20 transition-all duration-500 rounded-sm">
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#179B7E]" />
                      <div className="flex gap-4 items-center relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#179B7E]/10 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-[#179B7E]" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-bold mb-1">New Industrial Project</div>
                          <div className="text-[10px] text-[#179B7E] font-mono tracking-widest uppercase">Contact request · just now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: "01", t: t.about.b1.t, d: t.about.b1.d },
              { num: "02", t: t.about.b2.t, d: t.about.b2.d },
              { num: "03", t: t.about.b3.t, d: t.about.b3.d }
            ].map((b, i) => (
              <div key={i} className="group relative border border-white/5 p-10 hover:border-white/10 hover:bg-[#1A1D21]/80 transition-all duration-500 bg-[#1A1D21] hover:shadow-[0_0_30px_rgba(0,102,255,0.05)] hover:-translate-y-1 overflow-hidden" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-6xl font-bold text-white/[0.03] mb-8 group-hover:text-[#0066FF]/10 transition-colors duration-500">{b.num}</div>
                <h3 className="text-lg font-bold tracking-widest mb-4 uppercase text-white relative z-10">{b.t}</h3>
                <p className="text-sm text-gray-400 leading-relaxed relative z-10">{b.d}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0066FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-[0_0_15px_rgba(0,102,255,0.8)]" />
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
                <div key={i} className="group relative border border-white/5 bg-[#0F1215] p-10 transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden" style={{ animationDelay: `${i * 100}ms` }}>
                  {/* Subtle Spotlight */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.03), transparent 60%)' }} />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#0066FF]/5 rounded-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#0066FF]/10 transition-all duration-500 border border-[#0066FF]/20">
                      <Icon className="w-6 h-6 text-[#0066FF]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold tracking-widest mb-4 uppercase text-white group-hover:text-[#0066FF] transition-colors">{s.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.d}</p>
                  </div>
                  
                  {/* Bottom Line Indicator */}
                  <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section className="py-24 border-y border-white/5 bg-[#0A0C0E] relative overflow-hidden" ref={indRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0066FF]/5 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 fade-in-section text-center relative z-10">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl md:text-4xl font-bold mb-6">{t.industries.title}</h2>
          <p className="text-gray-400 mb-16">{t.industries.phrase}</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {t.industries.list.map((ind, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndustry(i)}
                  className={`px-8 py-4 text-xs md:text-sm tracking-widest font-mono uppercase transition-all duration-500 border rounded-sm relative overflow-hidden group ${
                    activeIndustry === i 
                      ? 'border-[#0066FF] bg-[#0066FF]/10 text-white shadow-[0_0_20px_rgba(0,102,255,0.2)]' 
                      : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300 bg-[#1A1D21]/50'
                  }`}
                >
                  {activeIndustry === i && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  )}
                  <span className="relative z-10">{ind.name}</span>
                </button>
              ))}
            </div>
            
            <div className="bg-[#1A1D21] border border-white/5 p-8 relative overflow-hidden min-h-[120px] flex items-center justify-center rounded-sm">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0066FF]" />
              <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-500" key={activeIndustry}>
                {t.industries.list[activeIndustry].desc}
              </p>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}} />
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
                {p.main ? (
                  <a href={p.route} className="w-full lg:w-2/3 h-64 lg:h-[500px] bg-[#0F1215] relative overflow-hidden group block">
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
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                       <span className="bg-[#0066FF] text-white text-xs font-bold tracking-widest px-6 py-3 uppercase shadow-2xl flex items-center">
                         {t.projects.cta.replace(' →', '')} <ArrowRight className="ml-2 w-4 h-4" />
                       </span>
                     </div>
                  </a>
                ) : (
                  <div className="w-full lg:w-1/3 h-48 lg:h-64 bg-[#0F1215] relative overflow-hidden group block cursor-default">
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
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none">
                       <span className="bg-[#0A0C0E]/80 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-bold tracking-widest px-4 py-2 uppercase shadow-2xl">
                         {t.projects.demoLabel}
                       </span>
                     </div>
                  </div>
                )}
                
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
                  
                  {p.main ? (
                    <a href={p.route} className="inline-flex items-center text-xs font-bold tracking-widest text-white hover:text-[#0066FF] transition-colors uppercase group w-max">
                      {t.projects.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center text-[10px] font-bold tracking-widest text-gray-500 uppercase border border-gray-700/50 px-3 py-1 rounded-sm w-max cursor-default">
                      {t.projects.demoLabel}
                    </div>
                  )}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CONVERSION & LEAD JOURNEY */}
      <section className="py-24 bg-[#0F1215] border-t border-white/5 relative overflow-hidden" ref={conversionRef}>
        <div className="container mx-auto px-6 fade-in-section relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* CTA Content */}
            <div>
              <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[#0066FF] mb-6 uppercase">
                <span className="w-8 h-px bg-[#0066FF]" />
                {t.conversion.eyebrow}
              </div>
              
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line leading-[1.1]">
                {t.conversion.title}
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                {t.conversion.desc}
              </p>

              {/* Added Microcopy */}
              <div className="border-l-2 border-white/10 pl-5 py-2 mb-10">
                <p className="text-sm text-gray-400 font-mono tracking-wide">
                  "Del primer clic al primer contacto, el sitio reduce fricción y acelera la decisión."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => { setShowContactModal(true); setFormSubmitted(false); }}
                  className="bg-[#0066FF] text-white text-xs font-bold tracking-widest px-8 py-5 hover:bg-white hover:text-[#0066FF] transition-colors uppercase flex items-center justify-center group"
                >
                  {t.conversion.ctaPrimary.replace(' →', '')} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setShowWhatsAppModal(true)}
                  className="relative overflow-hidden bg-[#128C7E] border border-white/10 text-white text-xs font-bold tracking-widest px-8 py-5 transition-all duration-300 uppercase flex items-center justify-center gap-3 group hover:bg-[#149B8A] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(18,140,126,0.3)]"
                >
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-out" />
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                  <span className="relative z-10">{t.conversion.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Visual Lead Journey Indicator */}
            <div className="relative border border-white/5 bg-[#1A1D21] p-10 md:p-16 flex flex-col justify-center h-full">
              <div className="absolute top-4 right-4 text-[10px] text-gray-500 font-mono uppercase tracking-widest border border-white/10 px-2 py-1">
                {t.demoExperience}
              </div>
              
              <div className="w-full max-w-xs relative pl-8 mx-auto md:mx-0">
                {/* Vertical Background Line */}
                <div className="absolute left-[7px] top-4 bottom-4 w-px bg-white/5" />
                
                {/* Active Progress Line */}
                <div className="absolute left-[7px] top-4 bottom-4 w-px bg-[#0066FF] origin-top progress-line shadow-[0_0_15px_rgba(0,102,255,0.6)]" />
                <style dangerouslySetInnerHTML={{__html: `
                  .progress-line {
                    transform: scaleY(0);
                    transition: transform 2.5s cubic-bezier(0.25, 1, 0.5, 1);
                    transition-delay: 0.3s;
                  }
                  .is-visible .progress-line {
                    transform: scaleY(1);
                  }
                  @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(0, 102, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0); }
                  }
                `}} />

                <div className="space-y-10 relative z-10">
                  {t.leadJourney.map((item, i) => (
                    <div key={i} className="flex items-center gap-8 group">
                      
                      {/* Node */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#0F1215] border border-white/10 absolute transition-colors duration-500 delay-[500ms]" 
                             style={{ transitionDelay: `${500 + i * 400}ms` }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600 transition-all duration-700 delay-[1000ms] relative z-10" 
                             style={{ transitionDelay: `${500 + i * 400}ms` }} />
                        <style dangerouslySetInnerHTML={{__html: `
                          .is-visible .group:nth-child(${i+1}) .bg-gray-600 {
                            background-color: #0066FF;
                            box-shadow: 0 0 12px rgba(0,102,255,0.8);
                            ${i === t.leadJourney.length - 1 ? 'animation: pulse-glow 2s infinite;' : ''}
                          }
                          .is-visible .group:nth-child(${i+1}) .w-4.h-4 {
                            border-color: rgba(0,102,255,0.3);
                            background-color: rgba(0,102,255,0.05);
                          }
                          .is-visible .group:nth-child(${i+1}) .step-text {
                            color: #ffffff;
                            transform: translateX(4px);
                          }
                          .is-visible .group:nth-child(${i+1}) .step-num {
                            color: #0066FF;
                          }
                        `}} />
                      </div>

                      {/* Text content */}
                      <div className="flex flex-col transform transition-transform duration-700 delay-[1000ms]" style={{ transitionDelay: `${500 + i * 400}ms` }}>
                        <span className="text-[10px] text-gray-600 font-mono tracking-widest mb-1 step-num transition-colors duration-700 uppercase">{item.step}</span>
                        <span className="text-base font-medium tracking-wide text-gray-500 step-text transition-all duration-700 capitalize">
                          {item.label.toLowerCase()}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
            
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
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Lines */}
            <div className="absolute top-[28px] left-0 w-full h-px bg-white/5 hidden md:block" />
            <div className="absolute top-[28px] left-0 h-px bg-[#0066FF] hidden md:block transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(0,102,255,0.5)]" style={{ width: `${(activeProcessStep / (t.capabilities.steps.length - 1)) * 100}%` }} />
            
            <div className="absolute left-[27px] top-0 h-full w-px bg-white/5 md:hidden" />
            <div className="absolute left-[27px] top-0 w-px bg-[#0066FF] md:hidden transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(0,102,255,0.5)]" style={{ height: `${(activeProcessStep / (t.capabilities.steps.length - 1)) * 100}%` }} />
            
            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
              {t.capabilities.steps.map((step, i) => (
                <div key={i} 
                     onMouseEnter={() => setActiveProcessStep(i)}
                     className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-4 group cursor-pointer relative w-full md:w-auto"
                     style={{ animationDelay: `${i * 100}ms` }}
                     >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 relative bg-[#1A1D21]
                    ${activeProcessStep >= i ? 'border-[#0066FF] shadow-[0_0_20px_rgba(0,102,255,0.3)] bg-[#0066FF]/10' : 'border-white/10 group-hover:border-white/30 group-hover:bg-[#0F1215]'} border-2`}>
                    <span className={`text-xs font-mono transition-colors duration-500 ${activeProcessStep >= i ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>0{i+1}</span>
                    {activeProcessStep === i && (
                      <div className="absolute inset-0 rounded-full border border-[#0066FF] animate-ping opacity-20" />
                    )}
                  </div>
                  <div className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-500 md:text-center md:absolute md:top-20 md:w-32 md:-ml-16 md:left-1/2
                    ${activeProcessStep === i ? 'text-[#0066FF]' : (activeProcessStep > i ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-400')}`}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contextual Description */}
            <div className="mt-12 md:mt-32 max-w-3xl mx-auto text-center border border-white/5 bg-[#0F1215] p-8 md:p-10 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
               <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-500 font-light" key={activeProcessStep}>
                  {t.capabilities.descriptions[activeProcessStep]}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section id="tecnologia" className="py-24 lg:py-32" ref={techRef}>
        <div className="container mx-auto px-6 fade-in-section">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/30 text-xs font-mono tracking-widest mb-6">NEXT GEN SYSTEMS</div>
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6">{t.tech.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">{t.tech.desc}</p>
              
              <div className="flex flex-wrap gap-4">
                {["BIM 7D", "LEAN CONST", "CONTROL DIGITAL", "BIG DATA", "IA PREDICTIVA"].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                    <div className="w-2 h-2 bg-[#0066FF] animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-[4/3] bg-[#0A0C0E] border border-white/5 flex items-center justify-center overflow-hidden">
               {/* Grid Background */}
               <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               
               {/* Digital Twin Core & Network SVG Animation */}
               <svg viewBox="0 0 400 300" className="w-full h-full relative z-10 opacity-90" xmlns="http://www.w3.org/2000/svg">
                 <style>
                   {`
                     @media (prefers-reduced-motion: no-preference) {
                       .tech-line { stroke: #3A424A; stroke-width: 1; fill: none; }
                       .tech-line-active { stroke: #0066FF; stroke-width: 1.5; fill: none; stroke-dasharray: 100; animation: dash 6s linear infinite; opacity: 0.6; }
                       @keyframes dash { to { stroke-dashoffset: -200; } }
                       .core-pulse { animation: corePulse 3s ease-in-out infinite alternate; }
                       @keyframes corePulse { 0% { opacity: 0.4; r: 15; box-shadow: 0 0 10px #0066FF; } 100% { opacity: 1; r: 18; } }
                       .node-pulse { animation: nodePulse 2s ease-in-out infinite alternate; }
                       @keyframes nodePulse { 0% { opacity: 0.3; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1.1); } }
                     }
                   `}
                 </style>
                 
                 {/* Connections */}
                 <path d="M200,150 L100,80" className="tech-line" />
                 <path d="M200,150 L100,80" className="tech-line-active" style={{ animationDelay: '0s' }} />
                 
                 <path d="M200,150 L300,60" className="tech-line" />
                 <path d="M200,150 L300,60" className="tech-line-active" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                 
                 <path d="M200,150 L320,220" className="tech-line" />
                 <path d="M200,150 L320,220" className="tech-line-active" style={{ animationDelay: '2s' }} />
                 
                 <path d="M200,150 L120,240" className="tech-line" />
                 
                 <path d="M200,150 L260,110" className="tech-line" />
                 <path d="M200,150 L260,110" className="tech-line-active" style={{ animationDelay: '3s', animationDuration: '5s' }} />

                 {/* Central Core */}
                 <circle cx="200" cy="150" r="32" fill="none" stroke="#3A424A" strokeWidth="1" />
                 <circle cx="200" cy="150" r="24" fill="none" stroke="#0066FF" strokeWidth="0.5" opacity="0.6" className="node-pulse" />
                 <circle cx="200" cy="150" r="15" fill="#0066FF" className="core-pulse" />
                 <text x="200" y="153" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CORE</text>

                 {/* Nodes */}
                 {/* BIM */}
                 <circle cx="100" cy="80" r="5" fill="#ffffff" className="node-pulse" style={{ animationDelay: '0.5s', transformOrigin: '100px 80px' }} />
                 <circle cx="100" cy="80" r="14" fill="none" stroke="#3A424A" strokeWidth="1" />
                 <text x="100" y="62" fill="#a1a1aa" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">BIM 7D</text>
                 
                 {/* DATA */}
                 <circle cx="300" cy="60" r="4" fill="#0066FF" className="node-pulse" style={{ transformOrigin: '300px 60px' }} />
                 <rect x="294" y="54" width="12" height="12" fill="none" stroke="#3A424A" strokeWidth="1" />
                 <text x="300" y="48" fill="#a1a1aa" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">DATA</text>
                 
                 {/* DIGITAL CONTROL */}
                 <circle cx="320" cy="220" r="6" fill="none" stroke="#0066FF" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '1.5s', transformOrigin: '320px 220px' }} />
                 <circle cx="320" cy="220" r="2.5" fill="#ffffff" />
                 <text x="320" y="238" fill="#a1a1aa" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">CTRL</text>

                 {/* LEAN */}
                 <circle cx="120" cy="240" r="5" fill="#3A424A" />
                 <path d="M114,240 L126,240 M120,234 L120,246" stroke="#ffffff" strokeWidth="1" />
                 <text x="120" y="258" fill="#a1a1aa" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">LEAN</text>

                 {/* AI */}
                 <polygon points="260,103 266,115 254,115" fill="none" stroke="#0066FF" strokeWidth="1.5" className="node-pulse" style={{ animationDelay: '2.5s', transformOrigin: '260px 110px' }} />
                 <text x="260" y="98" fill="#a1a1aa" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="1">AI</text>
                 
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



      {/* GLOBAL */}
      <section className="py-40 min-h-[60vh] md:min-h-[75vh] flex flex-col justify-center relative overflow-hidden text-center" ref={globalRef}>
        {/* Global Network Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0C0E]">
          <video
            ref={videoRef}
            src="/videos/vertexa/global/global-network-clean.mp4"
            poster="/videos/vertexa/global/global-earth-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-100 mix-blend-screen"
            style={{ 
              animation: 'kenburns-earth 40s ease-out forwards',
              transformOrigin: 'center center'
            }}
          />
          {/* Gradients to ensure text readability and integration */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C0E] via-transparent to-[#0A0C0E] z-10 opacity-90" />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes kenburns-earth {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.1); }
          }
        `}} />
        
        <div className="container mx-auto px-6 relative z-20 fade-in-section mt-12 md:mt-0">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">{t.global.title}</h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] font-light">{t.global.desc}</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 bg-[#0A0C0E] text-white border-t border-white/5 relative overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Información */}
            <div className="lg:col-span-5 fade-in-section">
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-4xl md:text-5xl font-bold mb-6">{t.contacto.title}</h2>
              <p className="text-lg text-gray-400 mb-12 max-w-md">{t.contacto.desc}</p>
              
              <div className="space-y-8 mb-16">
                <div className="group">
                  <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#0066FF] mb-3 uppercase transition-colors">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" /> Teléfono
                  </div>
                  <div className="text-xl text-gray-200 group-hover:text-white transition-colors">{t.contacto.phone}</div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#0066FF] mb-3 uppercase transition-colors">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" /> Email
                  </div>
                  <div className="text-xl text-gray-200 group-hover:text-white transition-colors">{t.contacto.email}</div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#0066FF] mb-3 uppercase transition-colors">
                    <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" /> Ubicación
                  </div>
                  <div className="text-xl text-gray-200 group-hover:text-white transition-colors whitespace-pre-line">{t.contacto.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {[
                  { name: 'LinkedIn', shadow: 'hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]', hoverColor: 'hover:text-[#0077b5] hover:border-[#0077b5]', svg: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
                  { name: 'Instagram', shadow: 'hover:shadow-[0_0_15px_rgba(225,48,108,0.3)]', hoverColor: 'hover:text-[#E1306C] hover:border-[#E1306C]', svg: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                  { name: 'Facebook', shadow: 'hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]', hoverColor: 'hover:text-[#1877F2] hover:border-[#1877F2]', svg: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                  { name: 'YouTube', shadow: 'hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]', hoverColor: 'hover:text-[#FF0000] hover:border-[#FF0000]', svg: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg> }
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className={`w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 cursor-pointer hover:bg-white/5 transition-all duration-300 ${item.hoverColor} ${item.shadow}`}>
                      {item.svg}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-7 fade-in-section">
              <div className="bg-[#0F1215]/80 backdrop-blur-xl p-8 md:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-sm group hover:border-white/20 transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A0C0E] via-[#0066FF]/50 to-[#0A0C0E] opacity-50 group-hover:opacity-100 transition-opacity" />
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
                      <input type="text" className="w-full bg-[#1A1D21]/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#0A0C0E] focus:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all duration-300" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formCompany}</label>
                      <input type="text" className="w-full bg-[#1A1D21]/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#0A0C0E] focus:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all duration-300" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formEmail}</label>
                      <input type="email" className="w-full bg-[#1A1D21]/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#0A0C0E] focus:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all duration-300" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formPhone}</label>
                      <input type="tel" className="w-full bg-[#1A1D21]/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#0A0C0E] focus:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all duration-300" required />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formType}</label>
                    <select className="w-full bg-[#1A1D21]/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#0A0C0E] focus:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all duration-300 appearance-none cursor-pointer" required>
                      <option value="" disabled selected>—</option>
                      {t.contacto.formTypes.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-8">
                    <label className="block text-xs font-bold tracking-widest text-gray-500 mb-2 uppercase">{t.contacto.formMsg}</label>
                    <textarea className="w-full bg-[#1A1D21]/80 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#0A0C0E] focus:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all duration-300 h-32 resize-none" required></textarea>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button type="submit" className="relative overflow-hidden w-full bg-[#0066FF] border border-transparent text-white text-xs font-bold tracking-widest px-8 py-5 transition-all duration-300 uppercase flex items-center justify-center gap-2 group hover:bg-[#005ce6] hover:border-white/10 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,102,255,0.4)]">
                      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-out" />
                      <span className="relative z-10">{t.contacto.formBtn}</span>
                    </button>
                    <button type="button" onClick={() => setShowWhatsAppModal(true)} className="relative overflow-hidden w-full bg-[#179B7E] border border-transparent text-white text-xs font-bold tracking-widest px-8 py-5 transition-all duration-300 uppercase flex items-center justify-center gap-2 group hover:bg-[#1CC09D] hover:border-white/10 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(23,155,126,0.4)]">
                      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-out" />
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="relative z-10"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                      <span className="relative z-10">{t.conversion.ctaSecondary}</span>
                    </button>
                  </div>
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

      {/* MODALS FOR CONVERSION EXPERIENCE */}
      
      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#05080A]/80 backdrop-blur-md">
          <div className="bg-[#0F1215] border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-[0_0_40px_rgba(0,102,255,0.1)] relative animate-in fade-in zoom-in-95 duration-500">
            {/* Header */}
            <div className="sticky top-0 bg-[#0F1215]/90 backdrop-blur-md border-b border-white/5 px-8 py-6 flex justify-between items-start z-10">
              <div>
                <div className="flex items-center gap-2 text-[#0066FF] mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                  <div className="text-[10px] font-mono uppercase tracking-widest">{t.contactModal.subtitle}</div>
                </div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl md:text-3xl font-bold tracking-tight">{t.contactModal.title}</h3>
              </div>
              <button onClick={() => setShowContactModal(false)} className="text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 md:p-10">
              {!formSubmitted ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">{t.contacto.formName}</label>
                      <input type="text" className="w-full bg-[#1A1D21] border border-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#1A1D21]/80 transition-all placeholder:text-gray-600" placeholder={t.contactModal.phName} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">{t.contacto.formCompany}</label>
                      <input type="text" className="w-full bg-[#1A1D21] border border-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#1A1D21]/80 transition-all placeholder:text-gray-600" placeholder={t.contactModal.phCompany} required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">{t.contacto.formEmail}</label>
                      <input type="email" className="w-full bg-[#1A1D21] border border-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#1A1D21]/80 transition-all placeholder:text-gray-600" placeholder={t.contactModal.phEmail} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">{t.contacto.formPhone}</label>
                      <input type="tel" className="w-full bg-[#1A1D21] border border-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#0066FF] focus:bg-[#1A1D21]/80 transition-all placeholder:text-gray-600" placeholder={t.contactModal.phPhone} required />
                    </div>
                  </div>
                  <div className="mb-8 space-y-2">
                    <label className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">{t.contacto.formType}</label>
                    <div className="relative">
                      <select className="w-full bg-[#1A1D21] border border-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-all appearance-none cursor-pointer" required defaultValue="">
                        <option value="" disabled className="text-gray-600">{t.contactModal.phSelect}</option>
                        {t.contacto.formTypes.map((type, i) => (
                          <option key={i} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10 space-y-2">
                    <label className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">{t.contacto.formMsg}</label>
                    <textarea className="w-full bg-[#1A1D21] border border-white/5 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#0066FF] transition-all h-32 resize-none placeholder:text-gray-600" placeholder={t.contactModal.phMsg} required></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button type="submit" className="w-full sm:w-auto relative overflow-hidden bg-[#0066FF] border border-transparent text-white text-sm font-bold tracking-widest px-10 py-4 transition-all duration-300 uppercase flex items-center justify-center gap-2 group hover:bg-[#005ce6] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,102,255,0.3)]">
                      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-out" />
                      <span className="relative z-10">{t.contacto.formBtn.replace(' →', '')}</span>
                      <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0066FF]"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span className="text-xs font-mono">{t.contactModal.response}</span>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="py-16 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#0066FF]/20" style={{ animationDuration: '3s' }} />
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl font-bold mb-4">{t.contactModal.successTitle}</h3>
                  <p className="text-gray-400 text-lg max-w-sm mb-10 leading-relaxed">{t.contactModal.successDesc}</p>
                  <div className="text-xs text-[#0066FF] font-mono border border-[#0066FF]/20 bg-[#0066FF]/5 px-6 py-3 uppercase tracking-widest rounded-sm mb-10">
                    {t.contactModal.subtitle}
                  </div>
                  <button onClick={() => setShowContactModal(false)} className="text-sm font-bold tracking-widest text-gray-400 hover:text-white transition-colors uppercase flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> {t.contactModal.backBtn}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Preview Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#05080A]/80 backdrop-blur-md">
          <div className="bg-[#0F1215] border border-white/10 w-full max-w-sm shadow-[0_0_40px_rgba(37,211,102,0.1)] relative animate-in slide-in-from-bottom-10 fade-in duration-500 rounded-lg overflow-hidden">
            <div className="bg-[#075E54] px-5 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-base truncate">{t.waPreview.subtitle}</div>
                <div className="text-xs text-white/80 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> {t.waPreview.status}
                </div>
              </div>
              <button onClick={() => setShowWhatsAppModal(false)} className="text-white/70 hover:text-white p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 bg-[#E5DDD5] relative min-h-[200px] flex flex-col justify-end" style={{ backgroundImage: 'url("https://w0.peakpx.com/wallpaper/818/148/HD-wallpaper-whatsapp-background-cool-dark-green-new-theme-whatsapp.jpg")', backgroundSize: 'cover', backgroundBlendMode: 'soft-light' }}>
              <div className="bg-white p-4 rounded-xl rounded-tr-none shadow-md ml-auto max-w-[85%] text-[15px] leading-relaxed text-[#303030] relative animate-in fade-in slide-in-from-right-4 duration-500 delay-150">
                {t.waPreview.msg}
                <div className="text-[10px] text-gray-400 text-right mt-2 flex justify-end items-center gap-1">
                  {t.waPreview.time} 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4FB6EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-[#0F1215] flex flex-col items-center">
              <div className="w-full flex items-center justify-center gap-2 mb-6">
                 <div className="h-px flex-1 bg-white/10" />
                 <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Comunicación Inmediata</span>
                 <div className="h-px flex-1 bg-white/10" />
              </div>
              
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="w-full relative overflow-hidden bg-[#25D366] text-[#0F1215] text-sm font-bold tracking-widest px-6 py-4 transition-all duration-300 uppercase flex items-center justify-center gap-2 group hover:bg-[#1EBE5D] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,211,102,0.3)] rounded-sm"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-1/2 transition-transform duration-1000 ease-out" />
                <span className="relative z-10">{t.waPreview.btn.replace(' →', '')}</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-4 text-[9px] text-[#25D366]/60 font-mono tracking-widest uppercase border border-[#25D366]/20 bg-[#25D366]/5 px-3 py-1 rounded-sm">
                {t.waPreview.demoTag}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default VertexaDemo;
