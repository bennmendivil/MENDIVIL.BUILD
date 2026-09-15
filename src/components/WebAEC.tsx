import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  Monitor, Building, Microscope, Cpu, 
  HardHat, Map, Wrench, CheckCircle2, ChevronDown, 
  ArrowRight, ShieldCheck, Check, Ruler
} from 'lucide-react';

const WebAEC: React.FC = () => {
  // Add page title and meta description
  useEffect(() => {
    document.title = "Web AEC | Sitios Web para Constructoras e Ingenieros | MENDIVIL.BUILD";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Desarrollamos sitios web profesionales para constructoras, ingenieros, laboratorios, contratistas, arquitectos y desarrolladores inmobiliarios. Tecnología, diseño e IA aplicada al sector AEC.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Desarrollamos sitios web profesionales para constructoras, ingenieros, laboratorios, contratistas, arquitectos y desarrolladores inmobiliarios. Tecnología, diseño e IA aplicada al sector AEC.";
      document.head.appendChild(meta);
    }
  }, []);

  const heroRef = useIntersectionObserver({ threshold: 0.1 });
  const problemRef = useIntersectionObserver({ threshold: 0.1 });
  const solutionRef = useIntersectionObserver({ threshold: 0.1 });
  const diffRef = useIntersectionObserver({ threshold: 0.1 });
  const whoRef = useIntersectionObserver({ threshold: 0.1 });
  const buildRef = useIntersectionObserver({ threshold: 0.1 });
  const caseRef = useIntersectionObserver({ threshold: 0.1 });
  const demosRef = useIntersectionObserver({ threshold: 0.1 });
  const processRef = useIntersectionObserver({ threshold: 0.1 });
  const pricingRef = useIntersectionObserver({ threshold: 0.1 });
  const faqRef = useIntersectionObserver({ threshold: 0.1 });
  const ctaRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-deepBlack min-h-screen text-titaniumWhite font-inter">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-steelBlue/30" ref={heroRef}>
        <div className="absolute inset-0 bg-hero-gradient opacity-30 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#1E4A6E 1px, transparent 1px), linear-gradient(90deg, #1E4A6E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 fade-in-section">
          <div className="max-w-4xl">
            <div className="inline-block border border-electricBlue text-electricBlue font-jetbrains text-xs tracking-widest py-1 px-3 mb-6 bg-electricBlue/10 uppercase">
              WEB AEC — Tecnología digital para la construcción
            </div>
            
            <h1 className="font-barlow font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-none mb-6">
              <span className="text-titaniumWhite">Tu empresa construye</span>
              <br />
              <span className="text-matteGold">proyectos importantes.</span>
              <br />
              <span className="text-concreteGray text-4xl md:text-6xl">Tu sitio web debería demostrarlo.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-concreteGray max-w-2xl mb-10 leading-relaxed">
              Desarrollamos sitios web profesionales para constructoras, ingenieros, laboratorios, contratistas, arquitectos y desarrolladores inmobiliarios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center bg-matteGold text-deepBlack font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-white transition-colors uppercase font-bold"
              >
                QUIERO MI SITIO WEB
              </a>
              <a 
                href="#ejemplos" 
                className="inline-flex justify-center items-center border border-concreteGray text-titaniumWhite font-jetbrains text-sm tracking-wider py-4 px-8 hover:border-white transition-colors uppercase"
              >
                VER EJEMPLOS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 bg-[#0A131F]" ref={problemRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6">
              Tu empresa puede hacer un gran trabajo.
              <br className="hidden md:block" />
              <span className="text-concreteGray">¿Pero tu presencia digital lo demuestra?</span>
            </h2>
            <p className="text-concreteGray text-lg max-w-3xl mx-auto">
              Muchas empresas de construcción e ingeniería tienen años de experiencia, grandes proyectos y equipos capaces, pero su presencia digital no refleja ese nivel profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "No tienen sitio web.",
              "Su sitio está desactualizado.",
              "Sus proyectos están dispersos (IG, FB, LinkedIn).",
              "Es difícil encontrar sus servicios.",
              "No transmiten su capacidad real.",
              "Dependen sólo de redes sociales."
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-4 bg-deepBlack border border-steelBlue/30 p-6">
                <ShieldCheck className="text-electricBlue shrink-0" size={24} />
                <p className="text-concreteGray font-inter">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-electricBlue/10 border-l-4 border-electricBlue p-8 md:p-12 text-center">
            <p className="font-barlow font-bold text-2xl md:text-3xl text-titaniumWhite uppercase tracking-wide">
              "Tu sitio web no debería ser sólo una tarjeta de presentación.<br />
              <span className="text-electricBlue">Debería ser una herramienta para generar confianza."</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. SOLUCIÓN */}
      <section className="py-24 bg-deepBlack border-y border-steelBlue/30" ref={solutionRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6">
                Un sitio web diseñado <br /><span className="text-matteGold">alrededor de tu negocio.</span>
              </h2>
              <p className="text-concreteGray mb-8 leading-relaxed">
                No utilizamos una plantilla genérica y simplemente cambiamos el logotipo. Diseñamos la estructura del sitio alrededor de lo que tu empresa hace, los proyectos que ejecuta y la forma en que quieres presentarte ante clientes, inversionistas y socios.
              </p>
              <ul className="space-y-4">
                {[
                  "Presentación profesional de la empresa",
                  "Servicios claramente definidos",
                  "Portafolio de proyectos y Casos de estudio",
                  "Integración con WhatsApp y Formularios",
                  "Optimización para dispositivos móviles",
                  "Preparación para futuras automatizaciones (IA)"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-matteGold shrink-0 mt-0.5" size={20} />
                    <span className="text-titaniumWhite font-inter">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-steelBlue/10 border border-steelBlue/30 rounded-lg p-6 relative overflow-hidden flex flex-col gap-4">
                 <div className="w-full h-12 bg-steelBlue/20 rounded-md border border-steelBlue/40 flex items-center px-4">
                   <div className="w-4 h-4 rounded-full bg-matteGold"></div>
                   <div className="w-24 h-2 bg-steelBlue/40 ml-4 rounded"></div>
                 </div>
                 <div className="flex gap-4 flex-grow">
                   <div className="w-1/3 h-full bg-steelBlue/10 border border-steelBlue/30 rounded-md"></div>
                   <div className="w-2/3 h-full flex flex-col gap-4">
                     <div className="w-full h-1/2 bg-steelBlue/20 border border-steelBlue/30 rounded-md"></div>
                     <div className="w-full h-1/2 bg-steelBlue/10 border border-steelBlue/30 rounded-md"></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIADOR */}
      <section className="py-24 bg-[#0A131F]" ref={diffRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-electricBlue text-electricBlue font-jetbrains text-xs tracking-widest py-1 px-3 mb-6 bg-electricBlue/10 uppercase">
              EL DIFERENCIADOR MENDIVIL.BUILD
            </div>
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6">
              No somos una agencia de marketing.<br />
              <span className="text-electricBlue">Conocemos la industria que estás construyendo.</span>
            </h2>
            <p className="text-concreteGray text-lg mb-4">
              MENDIVIL.BUILD nace desde la ingeniería y la construcción. Trabajamos con tecnología, inteligencia artificial, Lean Construction y gestión de proyectos.
            </p>
            <p className="text-concreteGray text-lg">
              Por eso entendemos conceptos, servicios, procesos y necesidades que una agencia de diseño web tradicional muchas veces tiene que aprender desde cero.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { title: "INGENIERÍA", icon: Wrench },
              { title: "CONSTRUCCIÓN", icon: HardHat },
              { title: "TECNOLOGÍA", icon: Monitor },
              { title: "IA", icon: Cpu }
            ].map((pillar, i) => (
              <div key={i} className="bg-deepBlack border border-steelBlue/40 p-8 flex flex-col items-center justify-center text-center group hover:border-electricBlue transition-colors">
                <pillar.icon size={40} className="text-steelBlue group-hover:text-electricBlue mb-4 transition-colors" strokeWidth={1.5} />
                <h3 className="font-jetbrains text-sm font-bold tracking-widest text-titaniumWhite">{pillar.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-barlow font-bold text-3xl md:text-4xl text-matteGold uppercase tracking-wider">
              "No necesitas explicarnos tu industria."
            </p>
          </div>
        </div>
      </section>

      {/* 5. ¿PARA QUIÉN ES? */}
      <section className="py-24 bg-deepBlack border-t border-steelBlue/30" ref={whoRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-16 text-center">
            Webs diseñadas para la <span className="text-concreteGray">industria AEC.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "CONSTRUCTORAS",
                desc: "Presenta tus proyectos, capacidades, servicios y experiencia de forma profesional.",
                icon: HardHat
              },
              {
                title: "LABORATORIOS",
                desc: "Comunica tus servicios, ensayos, certificaciones, capacidades técnicas y cobertura.",
                icon: Microscope
              },
              {
                title: "INGENIERÍA Y CONSULTORÍA",
                desc: "Convierte tu experiencia técnica y proyectos en una presencia digital profesional.",
                icon: Map
              },
              {
                title: "DESARROLLADORES",
                desc: "Presenta proyectos inmobiliarios, conceptos, amenidades y oportunidades de inversión.",
                icon: Building
              },
              {
                title: "ARQUITECTOS",
                desc: "Un portafolio minimalista y potente que deje hablar a tus diseños.",
                icon: Ruler
              },
              {
                title: "CONTRATISTAS",
                desc: "Destaca tus especialidades, equipo, normativas y certificaciones.",
                icon: Wrench
              }
            ].map((item, i) => (
              <div key={i} className="border-t-4 border-steelBlue bg-[#0F2236]/30 p-8 hover:border-matteGold transition-colors">
                <item.icon size={32} className="text-matteGold mb-6" strokeWidth={1.5} />
                <h3 className="font-barlow font-bold text-2xl text-titaniumWhite uppercase tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-concreteGray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ¿QUÉ PODEMOS CONSTRUIR? */}
      <section className="py-24 bg-[#0A131F]" ref={buildRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-16 text-center">
            Desde una landing hasta <span className="text-electricBlue">una plataforma digital.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "A",
                title: "LANDING PAGE",
                desc: "Para empresas que necesitan una presencia digital profesional y rápida.",
              },
              {
                level: "B",
                title: "SITIO CORPORATIVO",
                desc: "Para empresas que necesitan presentar servicios, experiencia, proyectos y equipo.",
              },
              {
                level: "C",
                title: "PORTAFOLIO",
                desc: "Para empresas que necesitan mostrar múltiples proyectos, obras y casos de estudio.",
              },
              {
                level: "D",
                title: "WEB + AUTOMATIZACIÓN",
                desc: "Para empresas que además quieren conectar su sitio con procesos digitales, formularios, IA u otras herramientas.",
                highlight: true
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 border flex flex-col h-full ${item.highlight ? 'border-electricBlue bg-electricBlue/5' : 'border-steelBlue/40 bg-deepBlack'}`}>
                <div className={`font-jetbrains text-xs font-bold mb-6 ${item.highlight ? 'text-electricBlue' : 'text-concreteGray'}`}>
                  NIVEL {item.level}
                </div>
                <h3 className={`font-barlow font-bold text-2xl uppercase tracking-wide mb-4 ${item.highlight ? 'text-white' : 'text-titaniumWhite'}`}>
                  {item.title}
                </h3>
                <p className="text-concreteGray text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CASO REAL - GASAVE */}
      <section className="py-24 bg-deepBlack border-y border-steelBlue/30 relative overflow-hidden" ref={caseRef}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E4A6E]/10 via-deepBlack to-deepBlack z-0"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10 fade-in-section">
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block border border-matteGold text-matteGold font-jetbrains text-xs tracking-widest py-1 px-3 mb-6 bg-matteGold/10 uppercase">
                UN CASO REAL
              </div>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-4">
                GASAVE — <br/><span className="text-concreteGray">Sitio web + automatización</span>
              </h2>
              <p className="text-concreteGray text-lg mb-8 leading-relaxed">
                Desarrollamos un sitio web para un laboratorio especializado en control de calidad y ensayos para la industria de la construcción.
              </p>
              <div className="bg-[#0A131F] border border-steelBlue p-6 mb-8">
                <h4 className="font-jetbrains text-sm text-titaniumWhite font-bold mb-4 uppercase">Pero el sitio web fue sólo una parte del proyecto.</h4>
                <p className="text-concreteGray text-sm mb-6">
                  También automatizamos un proceso de generación y envío de reportes semanales que anteriormente requería gran parte de la jornada del lunes.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 border-l-2 border-red-500/50 pl-4">
                    <div className="text-xs font-jetbrains text-red-400 mb-1">ANTES (Proceso manual)</div>
                    <div className="font-barlow text-xl text-white">Varias horas de trabajo</div>
                  </div>
                  <div className="flex-1 border-l-2 border-electricBlue pl-4">
                    <div className="text-xs font-jetbrains text-electricBlue mb-1">DESPUÉS (Automatizado)</div>
                    <div className="font-barlow text-xl text-white">~20 minutos</div>
                  </div>
                </div>
              </div>
              
              <p className="font-barlow font-bold text-2xl text-matteGold uppercase tracking-wide mb-2">
                "WEB + AUTOMATIZACIÓN"
              </p>
              <p className="text-white italic opacity-80">
                Cuando el sitio web se conecta con los procesos de tu empresa, deja de ser solamente una página y comienza a convertirse en una herramienta de trabajo.
              </p>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-[#0A131F] rounded-lg border border-steelBlue/40 overflow-hidden shadow-2xl">
                <div className="h-8 bg-[#111] border-b border-steelBlue/40 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="mx-auto bg-deepBlack text-[10px] font-jetbrains text-concreteGray py-1 px-4 rounded border border-steelBlue/20">gasavelaboratorio.com</div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1E4A6E]/20 to-deepBlack p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="text-center z-10 relative">
                     <Microscope className="w-16 h-16 text-electricBlue mx-auto mb-4 opacity-50" />
                     <div className="font-barlow text-3xl text-white font-bold tracking-widest uppercase mb-2">GASAVE</div>
                     <div className="text-concreteGray text-sm uppercase tracking-widest">Laboratorio de Control de Calidad</div>
                   </div>
                   <div className="absolute inset-0 bg-hero-gradient opacity-50"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. EJEMPLOS / DEMOS */}
      <section id="ejemplos" className="py-24 bg-[#0A131F]" ref={demosRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6">
              ¿Cómo podría verse <span className="text-matteGold">tu empresa?</span>
            </h2>
            <p className="text-concreteGray text-lg max-w-2xl mx-auto">
              Estamos desarrollando diferentes conceptos digitales especializados para empresas del sector AEC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "CONSTRUCTORA",
                desc: "Sitio web para una empresa constructora industrial.",
                icon: HardHat
              },
              {
                title: "LABORATORIO",
                desc: "Sitio web para un laboratorio de concreto y materiales.",
                icon: Microscope
              },
              {
                title: "INGENIERÍA",
                desc: "Sitio web para una firma de ingeniería y consultoría.",
                icon: Map
              },
              {
                title: "DESARROLLADORA",
                desc: "Sitio web para un desarrollador inmobiliario.",
                icon: Building
              }
            ].map((demo, i) => (
              <div key={i} className="group bg-deepBlack border border-steelBlue/30 overflow-hidden flex flex-col">
                <div className="aspect-[16/9] bg-[#0F2236] relative flex items-center justify-center p-8">
                  <span className="absolute top-4 left-4 bg-black/50 text-white/50 text-[10px] font-jetbrains px-2 py-1 uppercase tracking-widest border border-white/10 z-10">Demo Conceptual</span>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1E4A6E 1px, transparent 1px), linear-gradient(90deg, #1E4A6E 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  
                  <div className="text-center z-10">
                    <demo.icon size={48} className="text-steelBlue mx-auto mb-4 group-hover:text-electricBlue transition-colors duration-500" strokeWidth={1} />
                    <div className="font-barlow text-2xl text-white/50 group-hover:text-white transition-colors duration-500 uppercase tracking-widest">
                      {demo.title}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between bg-deepBlack">
                  <div>
                    <h3 className="font-barlow font-bold text-xl text-titaniumWhite uppercase tracking-wide mb-2">{demo.title}</h3>
                    <p className="text-concreteGray text-sm mb-6">{demo.desc}</p>
                  </div>
                  <a href={demo.title === "CONSTRUCTORA" ? "/web-aec/demos/vertexa" : demo.title === "LABORATORIO" ? "/web-aec/demos/stratum-labs" : demo.title === "INGENIERÍA" ? "/web-aec/demos/nexora-engineering" : demo.title === "DESARROLLADORA" ? "/web-aec/demos/azura-developments" : "#contact"} className="font-jetbrains text-sm text-matteGold hover:text-white transition-colors inline-flex items-center group-hover:translate-x-1 duration-300">
                    VER DEMO <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROCESO */}
      <section className="py-24 bg-deepBlack border-t border-steelBlue/30" ref={processRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section">
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-16 text-center">
            Del primer mensaje al <span className="text-electricBlue">sitio publicado.</span>
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-steelBlue/30 -translate-x-1/2"></div>
            
            <div className="space-y-12 relative z-10">
              {[
                { num: "01", title: "DESCUBRIMOS", desc: "Entendemos tu empresa, servicios, proyectos y objetivos." },
                { num: "02", title: "ESTRUCTURAMOS", desc: "Definimos la información y arquitectura del sitio." },
                { num: "03", title: "DISEÑAMOS", desc: "Creamos una interfaz alineada con tu marca." },
                { num: "04", title: "DESARROLLAMOS", desc: "Construimos el sitio con tecnología moderna y responsive." },
                { num: "05", title: "PUBLICAMOS", desc: "Dejamos tu sitio listo para que tus clientes puedan encontrarlo." },
                { num: "06", title: "EVOLUCIONAMOS", desc: "Podemos agregar nuevas funciones, automatizaciones e inteligencia artificial.", gold: true }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 flex ${i % 2 === 1 ? 'md:justify-start' : 'md:justify-end'} w-full justify-start`}>
                    <div className={`p-6 border ${step.gold ? 'border-matteGold bg-[#1a1c1a]' : 'border-steelBlue/40 bg-[#0A131F]'} max-w-sm w-full`}>
                      <div className={`font-jetbrains text-xs font-bold mb-3 ${step.gold ? 'text-matteGold' : 'text-electricBlue'}`}>PASO {step.num}</div>
                      <h3 className={`font-barlow font-bold text-2xl uppercase tracking-wide mb-2 ${step.gold ? 'text-white' : 'text-titaniumWhite'}`}>
                        {step.title}
                      </h3>
                      <p className="text-concreteGray text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-deepBlack border-2 border-steelBlue/50 items-center justify-center shrink-0 z-10">
                    <span className="font-jetbrains text-xs text-concreteGray">{step.num}</span>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. INVERSIÓN */}
      <section className="py-24 bg-[#0A131F] border-t border-steelBlue/30" ref={pricingRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6">
              Una presencia digital <span className="text-matteGold">profesional comienza aquí.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="bg-deepBlack border border-steelBlue/30 p-8 flex flex-col h-full hover:border-steelBlue transition-colors">
              <div className="font-jetbrains text-xs text-concreteGray mb-4 tracking-widest">PAQUETE 01</div>
              <h3 className="font-barlow font-bold text-3xl text-titaniumWhite uppercase mb-2">LANDING AEC</h3>
              <div className="font-jetbrains text-xl text-white mb-6">Desde $10,000 MXN</div>
              <p className="text-concreteGray text-sm mb-8 h-12">Ideal para: Empresas que necesitan comenzar o mejorar rápidamente su presencia digital.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {["Landing page profesional", "Diseño responsive", "Secciones personalizadas", "Integración con WhatsApp", "Formulario de contacto", "Publicación del sitio"].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-concreteGray">
                    <Check size={16} className="text-electricBlue mr-2 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="w-full text-center border border-concreteGray text-titaniumWhite font-jetbrains text-sm tracking-wider py-4 hover:border-white transition-colors uppercase">
                QUIERO UNA LANDING
              </a>
            </div>

            <div className="bg-[#0F2236] border border-electricBlue p-8 flex flex-col h-full transform md:-translate-y-4 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-electricBlue"></div>
              <div className="font-jetbrains text-xs text-electricBlue mb-4 tracking-widest">PAQUETE 02</div>
              <h3 className="font-barlow font-bold text-3xl text-white uppercase mb-2">SITIO CORPORATIVO</h3>
              <div className="font-jetbrains text-xl text-white mb-6">Desde $15,000 MXN</div>
              <p className="text-concreteGray text-sm mb-8 h-12">Ideal para: Constructoras, ingenierías, laboratorios y empresas que necesitan presentar múltiples servicios y proyectos.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {["Sitio web corporativo", "Varias secciones/páginas", "Portafolio de proyectos", "Servicios e info empresarial", "Integración con WhatsApp", "Diseño responsive", "Publicación"].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-white/80">
                    <Check size={16} className="text-electricBlue mr-2 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="w-full text-center bg-electricBlue text-white font-jetbrains text-sm tracking-wider py-4 hover:bg-white hover:text-deepBlack transition-colors uppercase font-bold">
                QUIERO MI SITIO
              </a>
            </div>

            <div className="bg-deepBlack border border-steelBlue/30 p-8 flex flex-col h-full hover:border-matteGold transition-colors">
              <div className="font-jetbrains text-xs text-concreteGray mb-4 tracking-widest">PAQUETE 03</div>
              <h3 className="font-barlow font-bold text-3xl text-matteGold uppercase mb-2">WEB + DIGITAL</h3>
              <div className="font-jetbrains text-xl text-white mb-6">Desde $25,000 MXN</div>
              <p className="text-concreteGray text-sm mb-8 h-12">Ideal para: Empresas que quieren conectar su sitio web con procesos digitales y automatización.</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {["Sitio web personalizado", "Integraciones a medida", "Automatizaciones", "Formularios inteligentes", "Integración de IA", "Funcionalidades especiales"].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-concreteGray">
                    <Check size={16} className="text-matteGold mr-2 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="w-full text-center border border-matteGold text-matteGold font-jetbrains text-sm tracking-wider py-4 hover:bg-matteGold hover:text-deepBlack transition-colors uppercase font-bold">
                HABLEMOS DE MI PROYECTO
              </a>
            </div>

          </div>

          <div className="text-center">
            <p className="text-concreteGray text-xs font-jetbrains">
              * Los precios son de referencia y pueden variar dependiendo del alcance, número de páginas, funcionalidades e integraciones requeridas.
            </p>
          </div>
          
          <div className="mt-16 bg-deepBlack border border-steelBlue/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div>
              <h4 className="font-barlow font-bold text-2xl text-titaniumWhite uppercase tracking-wide mb-2">
                ¿Necesitas que alguien mantenga tu sitio?
              </h4>
              <p className="text-concreteGray text-sm">
                Podemos ayudarte con actualizaciones, cambios de contenido, mejoras y evolución continua de tu sitio.
              </p>
            </div>
            <a href="#contact" className="shrink-0 font-jetbrains text-sm text-electricBlue hover:text-white transition-colors inline-flex items-center uppercase">
              CONSULTAR MANTENIMIENTO <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 bg-deepBlack" ref={faqRef}>
        <div className="container mx-auto px-6 max-w-4xl fade-in-section">
          <h2 className="font-barlow font-bold text-4xl text-titaniumWhite uppercase tracking-wide mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Necesito saber programación?",
                a: "No. Nosotros nos encargamos del desarrollo y de la parte técnica."
              },
              {
                q: "¿Necesito tener fotografías profesionales?",
                a: "No necesariamente. Podemos trabajar con el material que ya tengas y ayudarte a estructurar visualmente el contenido."
              },
              {
                q: "¿Pueden integrar WhatsApp?",
                a: "Sí. Podemos integrar WhatsApp, formularios y diferentes herramientas digitales."
              },
              {
                q: "¿Pueden hacer el sitio para una empresa que no sea constructora?",
                a: "Nuestro enfoque principal es AEC: arquitectura, ingeniería, construcción, laboratorios, contratistas y desarrollo inmobiliario."
              },
              {
                q: "¿Cuánto tarda el desarrollo?",
                a: "Depende del alcance y de la cantidad de contenido y funcionalidades. Los proyectos sencillos pueden desarrollarse rápidamente."
              },
              {
                q: "¿Pueden automatizar procesos además del sitio web?",
                a: "Sí. La automatización y la inteligencia artificial forman parte de las soluciones digitales que desarrollamos."
              }
            ].map((faq, i) => (
              <details key={i} className="group border border-steelBlue/30 bg-[#0A131F] [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-jetbrains text-sm text-titaniumWhite font-bold">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-electricBlue">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-concreteGray text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="py-24 bg-electricBlue relative overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 fade-in-section text-center">
          <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white uppercase tracking-wide mb-8">
            Tu próximo proyecto merece una mejor presencia digital.
          </h2>
          
          <div className="font-jetbrains text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-bold">
            <p className="mb-2">Ya construyes.</p>
            <p className="mb-2">Ya tienes experiencia.</p>
            <p className="mb-6">Ya tienes proyectos.</p>
            <p className="text-2xl text-deepBlack bg-white inline-block px-4 py-2 uppercase">Ahora hagamos que todo eso pueda verse.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center bg-deepBlack text-white font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-white hover:text-deepBlack transition-colors uppercase font-bold shadow-2xl"
            >
              QUIERO MI SITIO WEB
            </a>
            <a 
              href="#ejemplos" 
              className="inline-flex justify-center items-center border-2 border-deepBlack text-deepBlack font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-deepBlack hover:text-white transition-colors uppercase font-bold"
            >
              VER EJEMPLOS
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebAEC;
