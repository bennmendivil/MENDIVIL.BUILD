import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Building2, 
  Menu, X, ChevronRight, ChevronLeft, MapPin, 
  Maximize2, ShieldCheck, CheckCircle2, LayoutGrid, XCircle
} from 'lucide-react';

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

export default function NovaProject() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    header: {
      projects: language === 'ES' ? 'PROYECTOS' : 'PROJECTS',
      method: language === 'ES' ? 'MÉTODO' : 'METHOD',
      contact: language === 'ES' ? 'CONTACTO' : 'CONTACT',
      demo: 'DEMO · EMPRESA FICTICIA'
    },
    breadcrumb: language === 'ES' ? 'PROYECTOS / NOVA MANUFACTURING PLANT' : 'PROJECTS / NOVA MANUFACTURING PLANT',
    hero: {
      subtitle: language === 'ES' ? 'Infraestructura diseñada para la siguiente generación de manufactura.' : 'Infrastructure designed for the next generation of manufacturing.',
      category: language === 'ES' ? 'ADVANCED MANUFACTURING' : 'ADVANCED MANUFACTURING',
    },
    data: {
      location: language === 'ES' ? 'Monterrey, Nuevo León' : 'Monterrey, Nuevo León',
      area: '32,500 m²',
      capex: '$485 MDP',
      duration: language === 'ES' ? '14 meses' : '14 months',
      sector: language === 'ES' ? 'Manufactura avanzada' : 'Advanced Manufacturing',
      delivery: 'Design + Build',
      disclaimer: language === 'ES' ? 'Datos ficticios utilizados exclusivamente para fines demostrativos.' : 'Fictional data used exclusively for demonstrative purposes.'
    },
    overview: {
      title: language === 'ES' ? 'Una planta diseñada alrededor de la operación.' : 'A plant designed around the operation.',
      p1: language === 'ES' ? 'NOVA Manufacturing Plant representa el desarrollo conceptual de una instalación de manufactura avanzada de 32,500 m² en Monterrey, Nuevo León.' : 'NOVA Manufacturing Plant represents the conceptual development of a 32,500 sqm advanced manufacturing facility in Monterrey, Nuevo Leon.',
      p2: language === 'ES' ? 'El proyecto integra áreas productivas, almacenamiento, servicios, oficinas, infraestructura exterior y espacios técnicos bajo una estrategia integral de ingeniería y construcción.' : 'The project integrates production areas, warehousing, utilities, offices, exterior infrastructure, and technical spaces under a comprehensive engineering and construction strategy.'
    },
    challenge: {
      title: language === 'ES' ? 'EL RETO' : 'THE CHALLENGE',
      subtitle: language === 'ES' ? 'Construir mientras cada decisión afecta la operación futura.' : 'Building while every decision impacts future operations.',
      desc: language === 'ES' ? 'El proyecto requería coordinar múltiples disciplinas, grandes áreas industriales, infraestructura exterior y sistemas especializados dentro de un programa de ejecución exigente.' : 'The project required coordinating multiple disciplines, large industrial areas, exterior infrastructure, and specialized systems within a demanding execution schedule.',
      items: [
        { title: language === 'ES' ? 'PROGRAMA' : 'SCHEDULE', desc: language === 'ES' ? 'Ejecución dentro de una ventana de 14 meses.' : 'Execution within a 14-month window.' },
        { title: language === 'ES' ? 'COORDINACIÓN' : 'COORDINATION', desc: language === 'ES' ? 'Integración de múltiples disciplinas y contratistas.' : 'Integration of multiple disciplines and contractors.' },
        { title: language === 'ES' ? 'LOGÍSTICA' : 'LOGISTICS', desc: language === 'ES' ? 'Movimiento de materiales, equipos y personal dentro de una obra de gran escala.' : 'Movement of materials, equipment, and personnel within a large-scale site.' },
        { title: language === 'ES' ? 'CALIDAD' : 'QUALITY', desc: language === 'ES' ? 'Control de especificaciones industriales durante todo el proceso.' : 'Control of industrial specifications throughout the process.' }
      ]
    },
    scope: {
      title: language === 'ES' ? 'Un alcance integral.' : 'A comprehensive scope.',
      items: [
        language === 'ES' ? 'SITE DEVELOPMENT' : 'SITE DEVELOPMENT',
        language === 'ES' ? 'EARTHWORKS' : 'EARTHWORKS',
        language === 'ES' ? 'FOUNDATIONS' : 'FOUNDATIONS',
        language === 'ES' ? 'CONCRETE' : 'CONCRETE',
        language === 'ES' ? 'STRUCTURAL STEEL' : 'STRUCTURAL STEEL',
        language === 'ES' ? 'BUILDING ENVELOPE' : 'BUILDING ENVELOPE',
        language === 'ES' ? 'MEP SYSTEMS' : 'MEP SYSTEMS',
        language === 'ES' ? 'INDUSTRIAL FLOORS' : 'INDUSTRIAL FLOORS',
        language === 'ES' ? 'EXTERIOR WORKS' : 'EXTERIOR WORKS',
        language === 'ES' ? 'PROJECT MANAGEMENT' : 'PROJECT MANAGEMENT',
        language === 'ES' ? 'QUALITY CONTROL' : 'QUALITY CONTROL',
        language === 'ES' ? 'COMMISSIONING SUPPORT' : 'COMMISSIONING SUPPORT'
      ]
    },
    strategy: {
      title: language === 'ES' ? 'De la ingeniería a la ejecución.' : 'From engineering to execution.',
      steps: [
        { name: 'PLAN', desc: language === 'ES' ? 'Planeación inicial y estrategia de ejecución.' : 'Initial planning and execution strategy.' },
        { name: 'ENGINEER', desc: language === 'ES' ? 'Coordinación de ingeniería y constructabilidad.' : 'Engineering and constructability coordination.' },
        { name: 'PROCURE', desc: language === 'ES' ? 'Procura de materiales y equipos críticos.' : 'Procurement of critical materials and equipment.' },
        { name: 'BUILD', desc: language === 'ES' ? 'Construcción por frentes y secuencias coordinadas.' : 'Construction by fronts and coordinated sequences.' },
        { name: 'CONTROL', desc: language === 'ES' ? 'Seguimiento de avance, calidad y restricciones.' : 'Tracking of progress, quality, and constraints.' },
        { name: 'DELIVER', desc: language === 'ES' ? 'Entrega y preparación para operación.' : 'Handover and preparation for operation.' }
      ]
    },
    timeline: {
      title: '14 MONTH DELIVERY',
      phases: [
        { name: 'SITE PREPARATION', m: '01–02', width: '15%', start: '0%' },
        { name: 'FOUNDATIONS', m: '02–05', width: '25%', start: '10%' },
        { name: 'STRUCTURAL STEEL', m: '04–08', width: '35%', start: '25%' },
        { name: 'BUILDING ENVELOPE', m: '06–10', width: '35%', start: '40%' },
        { name: 'MEP + INTERIORS', m: '07–12', width: '45%', start: '50%' },
        { name: 'COMMISSIONING', m: '12–14', width: '20%', start: '80%' }
      ]
    },
    sequence: {
      title: language === 'ES' ? 'Del terreno a la operación.' : 'From site to operation.',
      stages: [
        { title: '01 — SITE', desc: language === 'ES' ? 'Preparación del sitio y movimiento de tierras.' : 'Site preparation and earthworks.', img: '/demos/vertexa/nova/nova-seq-site.png' },
        { title: '02 — STRUCTURE', desc: language === 'ES' ? 'Cimentaciones y estructura principal.' : 'Foundations and main structure.', img: '/demos/vertexa/nova/nova-seq-structure.png' },
        { title: '03 — ENCLOSURE', desc: language === 'ES' ? 'Envolvente, instalaciones y acabados.' : 'Envelope, MEP, and finishes.', img: '/demos/vertexa/nova/nova-seq-enclosure.png' },
        { title: '04 — OPERATION', desc: language === 'ES' ? 'Instalación preparada para iniciar operaciones.' : 'Facility ready to start operations.', img: '/demos/vertexa/nova/nova-hero.png' }
      ]
    },
    bim: {
      title: language === 'ES' ? 'Coordinación antes de construir.' : 'Coordination before building.',
      desc: language === 'ES' ? 'La coordinación digital permite identificar interferencias, revisar secuencias y mejorar la comunicación entre disciplinas antes de ejecutar en campo.' : 'Digital coordination allows identifying clashes, reviewing sequences, and improving communication across disciplines prior to field execution.'
    },
    safety: {
      title: language === 'ES' ? 'Planear el trabajo antes de ejecutarlo.' : 'Plan the work before executing.',
      qtitle: language === 'ES' ? 'Construir correctamente desde la primera vez.' : 'Build it right the first time.'
    },
    results: {
      title: language === 'ES' ? 'Resultados medidos.' : 'Measured results.',
      disclaimer: language === 'ES' ? 'Cifras ficticias utilizadas exclusivamente para fines demostrativos.' : 'Fictional figures used exclusively for demonstrative purposes.'
    },
    gallery: {
      title: language === 'ES' ? 'GALERÍA DEL PROYECTO' : 'PROJECT GALLERY',
      images: [
        '/demos/vertexa/nova/nova-hero.png',
        '/demos/vertexa/nova/nova-overview.png',
        '/demos/vertexa/nova/nova-seq-enclosure.png',
        '/demos/vertexa/nova/nova-seq-structure.png',
        '/demos/vertexa/nova/nova-gal-aerial.png',
        '/demos/vertexa/nova/nova-gal-interior.png',
      ]
    },
    team: {
      title: 'PROJECT DELIVERY',
      roles: ['DESIGN', 'ENGINEERING', 'CONSTRUCTION', 'PROJECT CONTROLS', 'QUALITY', 'SAFETY']
    },
    next: {
      title: language === 'ES' ? 'SIGUIENTE PROYECTO' : 'NEXT PROJECT',
      btn: language === 'ES' ? 'VOLVER A PROYECTOS →' : 'BACK TO PROJECTS →'
    },
    cta: {
      q: language === 'ES' ? '¿Te gustaría presentar los proyectos de tu empresa de esta manera?' : 'Would you like to present your company\'s projects like this?',
      sub: language === 'ES' ? 'MENDIVIL.BUILD desarrolla experiencias digitales especializadas para empresas de arquitectura, ingeniería y construcción.' : 'MENDIVIL.BUILD develops specialized digital experiences for architecture, engineering, and construction companies.',
      btn: language === 'ES' ? 'CONOCE WEB AEC →' : 'DISCOVER WEB AEC →'
    },
    footer: {
      disclaimer: language === 'ES' 
        ? 'NOVA Manufacturing Plant es un proyecto ficticio perteneciente al concepto VERTEXA INDUSTRIAL, creado exclusivamente por MENDIVIL.BUILD para demostrar posibilidades de diseño y desarrollo web para empresas AEC. Todos los nombres, imágenes, ubicaciones, alcances, cifras, métricas y resultados son conceptuales y ficticios.'
        : 'NOVA Manufacturing Plant is a fictional project belonging to the VERTEXA INDUSTRIAL concept, created exclusively by MENDIVIL.BUILD to demonstrate web design and development possibilities for AEC companies. All names, images, locations, scopes, figures, metrics, and results are conceptual and fictional.'
    }
  };

  const nextImage = () => setActiveImage(prev => prev !== null ? (prev + 1) % t.gallery.images.length : null);
  const prevImage = () => setActiveImage(prev => prev !== null ? (prev - 1 + t.gallery.images.length) % t.gallery.images.length : null);

  return (
    <div className="min-h-screen bg-[#0A0C0E] text-white font-inter selection:bg-[#0066FF] selection:text-white overflow-x-hidden">
      {/* HEADER (Reused from Vertexa) */}
      <header className="fixed w-full top-0 z-50 bg-[#0A0C0E]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="bg-[#0066FF] text-white text-[10px] md:text-xs font-bold tracking-widest text-center py-1.5 md:py-2">
          {t.header.demo}
        </div>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/web-aec/demos/vertexa" className="flex items-center gap-3 group">
            <Building2 className="w-8 h-8 text-white group-hover:text-[#0066FF] transition-colors" />
            <div>
              <div className="font-bold text-xl tracking-tight leading-none" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>VERTEXA</div>
              <div className="text-[10px] text-gray-400 font-mono tracking-widest mt-1 group-hover:text-gray-300 transition-colors">INDUSTRIAL</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/web-aec/demos/vertexa#proyectos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t.header.projects}</a>
            <div className="w-px h-4 bg-white/20" />
            <button onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')} className="text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest w-8">
              {language}
            </button>
            <a href="/web-aec/demos/vertexa#contacto" className="bg-white text-[#0A0C0E] px-6 py-2.5 text-sm font-bold hover:bg-gray-200 transition-colors uppercase tracking-widest">
              {t.header.contact}
            </a>
          </nav>
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Breadcrumb */}
        <div className="bg-[#1A1D21] py-2 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase flex items-center gap-2">
              <a href="/web-aec/demos/vertexa" className="hover:text-white transition-colors">VERTEXA</a>
              <span>/</span>
              <a href="/web-aec/demos/vertexa#proyectos" className="hover:text-white transition-colors">{t.header.projects}</a>
              <span>/</span>
              <span className="text-white">NOVA MANUFACTURING PLANT</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0C0E] pt-32 px-6 flex flex-col gap-6 md:hidden">
          <a href="/web-aec/demos/vertexa#proyectos" className="text-2xl font-bold tracking-tight" onClick={() => setIsMenuOpen(false)}>{t.header.projects}</a>
          <a href="/web-aec/demos/vertexa#contacto" className="text-2xl font-bold tracking-tight" onClick={() => setIsMenuOpen(false)}>{t.header.contact}</a>
          <div className="mt-8 flex gap-4">
            <button onClick={() => { setLanguage('ES'); setIsMenuOpen(false); }} className={`px-4 py-2 text-sm font-bold ${language === 'ES' ? 'bg-white text-black' : 'border border-white/20'}`}>ES</button>
            <button onClick={() => { setLanguage('EN'); setIsMenuOpen(false); }} className={`px-4 py-2 text-sm font-bold ${language === 'EN' ? 'bg-white text-black' : 'border border-white/20'}`}>EN</button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <img src="/demos/vertexa/nova/nova-hero.png" alt="NOVA Manufacturing Plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C0E] via-[#0A0C0E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0E] via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#0066FF] font-mono tracking-widest text-sm font-bold">PROJECT 01</span>
              <div className="h-px w-12 bg-[#0066FF]/50" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              NOVA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">MANUFACTURING</span><br />
              PLANT
            </h1>
            <div className="flex items-center gap-2 text-gray-300 font-mono text-sm tracking-widest mb-8">
              <MapPin className="w-4 h-4 text-[#0066FF]" />
              {t.data.location.toUpperCase()}
            </div>
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8">
              {t.hero.category}
            </div>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl border-l-2 border-[#0066FF] pl-6">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* DATA GRID */}
      <section className="border-b border-white/5 bg-[#0F1215]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-white/5">
            <div className="p-6">
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">LOCATION</div>
              <div className="font-bold text-sm">{t.data.location}</div>
            </div>
            <div className="p-6">
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">AREA</div>
              <div className="font-bold text-sm">{t.data.area}</div>
            </div>
            <div className="p-6">
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">CAPEX</div>
              <div className="font-bold text-sm">{t.data.capex}</div>
            </div>
            <div className="p-6">
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">DURATION</div>
              <div className="font-bold text-sm">{t.data.duration}</div>
            </div>
            <div className="p-6">
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">SECTOR</div>
              <div className="font-bold text-sm">{t.data.sector}</div>
            </div>
            <div className="p-6">
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-2">DELIVERY</div>
              <div className="font-bold text-sm">{t.data.delivery}</div>
            </div>
          </div>
          <div className="text-center py-3 text-[10px] text-gray-600 font-mono border-t border-white/5">
            {t.data.disclaimer}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-32 bg-[#0A0C0E]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t.overview.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">{t.overview.p1}</p>
              <p className="text-gray-400 text-lg leading-relaxed">{t.overview.p2}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] bg-[#1A1D21] overflow-hidden">
                <img src="/demos/vertexa/nova/nova-overview.png" alt="Overview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="py-32 bg-[#1A1D21] border-y border-white/5 relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <div className="text-[#0066FF] text-sm font-bold tracking-widest font-mono mb-4">{t.challenge.title}</div>
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl">{t.challenge.subtitle}</h2>
            <p className="text-gray-400 text-lg max-w-2xl">{t.challenge.desc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.challenge.items.map((item, i) => (
              <div key={i} className="bg-[#0A0C0E] p-8 border-t-2 border-[#3A424A] hover:border-[#0066FF] transition-colors group">
                <div className="text-3xl font-light text-[#3A424A] group-hover:text-[#0066FF] transition-colors mb-6 font-mono">0{i+1}</div>
                <h3 className="text-lg font-bold mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE OF WORK */}
      <section className="py-32 bg-[#0A0C0E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold">{t.scope.title}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {t.scope.items.map((item, i) => (
              <div key={i} className="border border-white/5 bg-[#0F1215] p-6 flex items-center justify-between group hover:bg-[#1A1D21] transition-colors">
                <span className="text-sm font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors">{item}</span>
                <CheckCircle2 className="w-4 h-4 text-[#3A424A] group-hover:text-[#0066FF]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT STRATEGY */}
      <section className="py-24 bg-[#0F1215] border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl font-bold mb-16 text-center">{t.strategy.title}</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
            <div className="grid md:grid-cols-6 gap-8">
              {t.strategy.steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col md:items-center text-left md:text-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A1D21] border border-[#0066FF] flex items-center justify-center shrink-0 mb-6">
                    <span className="text-[#0066FF] text-xs font-mono">0{i+1}</span>
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-2">{step.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION TIMELINE (GANTT) */}
      <section className="py-32 bg-[#0A0C0E] overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-16 text-center">{t.timeline.title}</h2>
          
          <div className="max-w-5xl mx-auto bg-[#1A1D21] p-8 border border-white/5">
            {t.timeline.phases.map((phase, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-2">
                  <span className="uppercase tracking-widest font-bold text-gray-300">FASE 0{i+1} — {phase.name}</span>
                  <span>M {phase.m}</span>
                </div>
                <div className="h-2 w-full bg-[#0A0C0E] relative overflow-hidden">
                  <div 
                    className="absolute top-0 h-full bg-[#0066FF] transition-all duration-1000 ease-out"
                    style={{ left: phase.start, width: phase.width }}
                  />
                </div>
              </div>
            ))}
            {/* Timeline markers */}
            <div className="flex justify-between mt-8 border-t border-white/10 pt-4">
              {[0, 2, 4, 6, 8, 10, 12, 14].map(m => (
                <div key={m} className="flex flex-col items-center">
                  <div className="w-px h-2 bg-white/20 mb-1" />
                  <span className="text-[10px] font-mono text-gray-500">M{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION SEQUENCE */}
      <section className="py-32 bg-[#1A1D21] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold">{t.sequence.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.sequence.stages.map((stage, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] md:aspect-square overflow-hidden mb-6 border border-white/10 bg-[#0F1215]">
                  <img src={stage.img} alt={stage.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="text-[#0066FF] font-mono text-xs font-bold tracking-widest mb-2">{stage.title}</div>
                <p className="text-sm text-gray-400">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIM / DIGITAL */}
      <section className="py-32 bg-[#0A0C0E]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/30 text-xs font-mono tracking-widest mb-6">VDC / BIM</div>
              <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6">{t.bim.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">{t.bim.desc}</p>
            </div>
            <div className="relative aspect-square bg-[#1A1D21] border border-white/10 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
               {/* Abstract BIM overlay */}
               <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-40 z-20">
                 <path d="M20,80 L50,20 L80,80 Z" fill="none" stroke="#0066FF" strokeWidth="0.5" strokeDasharray="1 1" />
                 <path d="M30,80 L50,40 L70,80" fill="none" stroke="#fff" strokeWidth="0.5" />
                 <circle cx="50" cy="20" r="1" fill="#0066FF" />
                 <circle cx="20" cy="80" r="1" fill="#0066FF" />
                 <circle cx="80" cy="80" r="1" fill="#0066FF" />
                 <text x="50" y="15" fill="#3A424A" fontSize="2" fontFamily="monospace" textAnchor="middle">Z: 45.2</text>
                 <text x="20" y="85" fill="#3A424A" fontSize="2" fontFamily="monospace" textAnchor="middle">X: -10</text>
               </svg>
               <img src="/demos/vertexa/nova/nova-seq-structure.png" className="w-3/4 h-3/4 object-cover opacity-30 mix-blend-screen relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY + QUALITY */}
      <section className="py-24 bg-[#0F1215] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* SAFETY */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-[#0066FF]" />
                <h3 className="text-xl font-bold tracking-widest uppercase">SAFETY</h3>
              </div>
              <p className="text-gray-400 mb-8">{t.safety.title}</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-light text-white mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    <AnimatedCounter end={1.2} suffix="M" duration={1500} />
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">MAN-HOURS</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light text-white mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    0
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">LTI (LOST TIME INJURIES)</div>
                </div>
              </div>
            </div>
            
            {/* QUALITY */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#0066FF]" />
                <h3 className="text-xl font-bold tracking-widest uppercase">QUALITY</h3>
              </div>
              <p className="text-gray-400 mb-8">{t.safety.qtitle}</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-light text-white mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    <AnimatedCounter end={2450} prefix="+" duration={2000} />
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">INSPECTIONS</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light text-[#0066FF] mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                    <AnimatedCounter end={98} suffix=".7%" duration={2000} />
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">FIRST PASS ACCEPTANCE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-[10px] text-gray-600 font-mono text-center">{t.results.disclaimer}</div>
        </div>
      </section>

      {/* PROJECT RESULTS */}
      <section className="py-32 bg-[#0A0C0E]">
        <div className="container mx-auto px-6 text-center">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-24">{t.results.title}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
            <div className="px-4">
              <div className="text-5xl font-light mb-4 text-white"><AnimatedCounter end={32500} duration={2000} /></div>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">m² COMPLETED AREA</div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-light mb-4 text-white"><AnimatedCounter end={14} duration={1500} /></div>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">MONTHS DELIVERY</div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-light mb-4 text-[#0066FF]"><AnimatedCounter end={98} suffix=".4%" duration={2000} /></div>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">SCHEDULE COMPLIANCE</div>
            </div>
            <div className="px-4">
              <div className="text-5xl font-light mb-4 text-[#0066FF]"><AnimatedCounter end={98} suffix=".7%" duration={2000} /></div>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase">QUALITY ACCEPTANCE</div>
            </div>
          </div>
          <div className="mt-24 text-[10px] text-gray-600 font-mono">{t.results.disclaimer}</div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-[#1A1D21] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl font-bold">{t.gallery.title}</h2>
            <LayoutGrid className="text-gray-500" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {t.gallery.images.map((img, i) => (
              <div key={i} className="relative aspect-square md:aspect-[4/3] overflow-hidden group cursor-pointer bg-[#0F1215]" onClick={() => setActiveImage(i)}>
                <img src={img} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm">
          <button onClick={() => setActiveImage(null)} className="absolute top-6 right-6 text-white/50 hover:text-white z-10"><XCircle className="w-8 h-8" /></button>
          <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"><ChevronLeft className="w-12 h-12" /></button>
          <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10"><ChevronRight className="w-12 h-12" /></button>
          
          <div className="w-full max-w-6xl px-16">
            <img src={t.gallery.images[activeImage]} className="w-full h-auto max-h-[85vh] object-contain mx-auto" />
          </div>
          <div className="absolute bottom-6 text-white/50 font-mono text-sm">
            {activeImage + 1} / {t.gallery.images.length}
          </div>
        </div>
      )}

      {/* PROJECT TEAM */}
      <section className="py-24 bg-[#0A0C0E]">
        <div className="container mx-auto px-6 text-center">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-2xl font-bold mb-12 text-gray-500">{t.team.title}</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {t.team.roles.map((role, i) => (
              <div key={i} className="text-lg md:text-xl font-bold tracking-widest text-white">{role}</div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="py-32 bg-[#1A1D21] border-y border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="text-[#0066FF] font-mono text-xs font-bold tracking-widest mb-6">{t.next.title}</div>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-4xl md:text-6xl font-bold mb-4">NEXUS LOGISTICS CENTER</h2>
          <div className="text-gray-400 font-mono tracking-widest mb-12">48,000 m² · GUANAJUATO, MÉXICO</div>
          <a href="/web-aec/demos/vertexa#proyectos" className="inline-block bg-[#0066FF] text-white text-sm font-bold tracking-widest px-8 py-4 hover:bg-white hover:text-[#0066FF] transition-colors uppercase">
            {t.next.btn}
          </a>
        </div>
      </section>

      {/* MENDIVIL CTA */}
      <section className="py-32 bg-[#051A2E] text-white text-center border-t border-[#0066FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #0066FF 1px, transparent 1px), linear-gradient(to bottom, #0066FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif' }} className="text-3xl md:text-5xl font-bold mb-6">{t.cta.q}</h2>
          <p className="text-lg md:text-xl font-light mb-12 text-gray-300 max-w-3xl mx-auto">{t.cta.sub}</p>
          <a href="/web-aec" className="inline-block bg-white text-[#051A2E] text-sm font-bold tracking-widest px-10 py-5 hover:bg-[#0066FF] hover:text-white transition-colors uppercase shadow-2xl">
            {t.cta.btn}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0C0E] py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <Building2 className="w-12 h-12 text-gray-800 mb-8" />
            <div className="max-w-4xl text-xs text-gray-500 leading-relaxed font-mono mb-8 px-4">
              {t.footer.disclaimer}
            </div>
            <div className="text-sm font-bold tracking-widest text-gray-700">
              © {new Date().getFullYear()} MENDIVIL.BUILD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
