import React, { useEffect } from 'react';

import { useForm, ValidationError } from '@formspree/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  CheckCircle2, ChevronDown, 
  ArrowRight, ShieldCheck, Check, MessageCircle, Mail
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

  
  const [state, handleSubmit] = useForm('xjgdjgvz');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const heroRef = useIntersectionObserver({ threshold: 0.1 });
  const problemRef = useIntersectionObserver({ threshold: 0.1 });
  const diffRef = useIntersectionObserver({ threshold: 0.1 });
  const whoRef = useIntersectionObserver({ threshold: 0.1 });
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
            
            <h1 className="font-barlow font-black text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.95] mb-8">
              <span className="text-[#F0F0F0]">TU EMPRESA CONSTRUYE PROYECTOS IMPORTANTES.</span><br/>
              <span className="text-[#4A9FD4]">TU SITIO WEB DEBERÍA DEMOSTRARLO.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#F0F0F0]/90 drop-shadow-md max-w-3xl mb-12 leading-relaxed font-inter">
              Creamos sitios web para empresas AEC que necesitan convertir su experiencia, proyectos y capacidad técnica en una presencia digital que genere confianza y oportunidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="group relative overflow-hidden inline-flex justify-center items-center bg-[#4A9FD4] text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 uppercase btn-premium">
                <span className="relative z-10 flex items-center">QUIERO MI SITIO WEB <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" /></span>
                <div className="absolute inset-0 h-full w-[200%] translate-x-[-150%] skew-x-[-45deg] bg-white/40 transition-transform duration-1000 ease-out group-hover:translate-x-[100%] z-0"></div>
              </a>
              <a href="#ejemplos" onClick={(e) => scrollToSection(e, "ejemplos")} className="inline-flex justify-center items-center border border-[#4A9FD4] text-[#4A9FD4] hover:bg-[#4A9FD4] hover:text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 uppercase btn-premium">
                VER EJEMPLOS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-16 bg-[#0A131F]" ref={problemRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section">
          <div className="text-center mb-12">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6">
              Tu empresa puede hacer un gran trabajo.
              <br className="hidden md:block" />
              <span className="text-concreteGray">¿Pero tu presencia digital lo demuestra?</span>
            </h2>
            <p className="text-concreteGray text-lg max-w-3xl mx-auto">
              Muchas empresas de construcción e ingeniería tienen años de experiencia, grandes proyectos y equipos capaces, pero su presencia digital no refleja ese nivel profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              "No tienen sitio web o está desactualizado.",
              "Sus proyectos y servicios no están claros.",
              "Su presencia digital no transmite su capacidad real."
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-4 bg-deepBlack border border-steelBlue/30 p-6 card-premium">
                <ShieldCheck className="text-electricBlue shrink-0" size={24} />
                <p className="text-concreteGray font-inter text-sm">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-electricBlue/10 border-l-4 border-electricBlue p-6 md:p-8 text-center max-w-4xl mx-auto">
            <p className="font-barlow font-bold text-xl md:text-2xl text-titaniumWhite uppercase tracking-wide">
              "Tu sitio web no debería ser solo una tarjeta de presentación.<br />
              <span className="text-electricBlue">Debería ser una herramienta para generar confianza y oportunidades."</span>
            </p>
          </div>
        </div>
      </section>

      {/* 8. EJEMPLOS / DEMOS */}
      <section id="ejemplos" className="py-24 relative z-10 bg-[#0A131F]" ref={demosRef}>
        <div className="container mx-auto px-6 max-w-7xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-[#F0F0F0] uppercase tracking-wide mb-4">¿CÓMO PODRÍA VERSE TU EMPRESA?</h2>
            <p className="font-inter text-lg text-[#5A8FA8]">Explora ejemplos conceptuales diseñados para distintos perfiles del sector AEC.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* TARJETA 1 */}
            <div className="bg-[#0F2236] border border-steelBlue/30 overflow-hidden group hover:border-[#4A9FD4]/80 flex flex-col card-premium">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_vertexa_desktop.webp" alt="Vertexa Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Constructora</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">VERTEXA</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 flex-grow">
                  Una presencia digital sólida para mostrar capacidad técnica, proyectos y experiencia en obra.
                </p>
                <a href="/web-aec/demos/vertexa" className="inline-flex items-center text-[#4A9FD4] hover:text-white font-barlow font-bold text-sm tracking-widest uppercase transition-colors">
                  VER EJEMPLO <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* TARJETA 2 */}
            <div className="bg-[#0F2236] border border-steelBlue/30 overflow-hidden group hover:border-[#4A9FD4]/80 flex flex-col card-premium">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_stratumlabs_desktop.webp" alt="Stratum Labs Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Laboratorio</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">STRATUM LABS</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 flex-grow">
                  Un sitio técnico y profesional para comunicar servicios geotécnicos, ensayes y experiencia de campo.
                </p>
                <a href="/web-aec/demos/stratum-labs" className="inline-flex items-center text-[#4A9FD4] hover:text-white font-barlow font-bold text-sm tracking-widest uppercase transition-colors">
                  VER EJEMPLO <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* TARJETA 3 */}
            <div className="bg-[#0F2236] border border-steelBlue/30 overflow-hidden group hover:border-[#4A9FD4]/80 flex flex-col card-premium">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_nexora_desktop.webp" alt="Nexora Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Firma de Ingeniería</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">NEXORA ENGINEERING</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 flex-grow">
                  Una estructura clara para presentar especialidades, experiencia y proyectos relevantes.
                </p>
                <a href="/web-aec/demos/nexora-engineering" className="inline-flex items-center text-[#4A9FD4] hover:text-white font-barlow font-bold text-sm tracking-widest uppercase transition-colors">
                  VER EJEMPLO <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* TARJETA 4 */}
            <div className="bg-[#0F2236] border border-steelBlue/30 overflow-hidden group hover:border-[#4A9FD4]/80 flex flex-col card-premium">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_azura_desktop.webp" alt="Azura Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Desarrolladora</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">AZURA</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 flex-grow">
                  Una experiencia visual y comercial para presentar desarrollos, atraer prospectos y fortalecer la percepción de marca.
                </p>
                <a href="/web-aec/demos/azura-developments" className="inline-flex items-center text-[#4A9FD4] hover:text-white font-barlow font-bold text-sm tracking-widest uppercase transition-colors">
                  VER EJEMPLO <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="font-inter text-xs text-[#5A8FA8]">*Ejemplos conceptuales creados para mostrar posibilidades visuales y estratégicas.</p>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIADOR */}
      <section className="py-16 bg-[#0A131F]" ref={diffRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block border border-electricBlue text-electricBlue font-jetbrains text-xs tracking-widest py-1 px-3 mb-6 bg-electricBlue/10 uppercase">
              EL DIFERENCIADOR MENDIVIL.BUILD
            </div>
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-titaniumWhite uppercase tracking-wide mb-6">
              NO ES SOLO DISEÑO.<br />
              <span className="text-electricBlue">ES ENTENDER TU INDUSTRIA.</span>
            </h2>
            <p className="text-concreteGray text-lg mb-4">
              MENDIVIL.BUILD nace desde la ingeniería, la construcción y la ejecución real de proyectos.
            </p>
            <p className="text-concreteGray text-lg">
              Eso nos permite entender mejor cómo presentar servicios, experiencia, portafolio y credibilidad para empresas AEC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              "Lenguaje de la industria",
              "Enfoque técnico + comercial",
              "Posibilidad de integrar automatización e IA"
            ].map((punto, i) => (
              <div key={i} className="bg-deepBlack border border-steelBlue/40 p-6 flex flex-col items-center justify-center text-center group hover:border-electricBlue card-premium">
                <CheckCircle2 size={28} className="text-steelBlue group-hover:text-electricBlue mb-3 transition-colors" strokeWidth={1.5} />
                <h3 className="font-inter text-sm text-titaniumWhite">{punto}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CASO REAL - GASAVE */}
      <section className="py-24" ref={caseRef}>
        <div className="container mx-auto px-6 max-w-7xl fade-in-section">
          <div className="mb-12 text-center">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-[#F0F0F0] uppercase tracking-wide mb-4">CASO REAL: GASAVE LABORATORIO</h2>
            <p className="font-inter text-xl text-[#4A9FD4]">Presencia digital profesional + automatización de procesos.</p>
          </div>

          <div className="bg-[#0F2236] border border-white/10 p-2 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="md:col-span-2 relative h-64 md:h-96 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/gasave/gasave_home_desktop.webp" alt="Gasave Home" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex flex-col gap-2 h-64 md:h-96">
                <div className="relative flex-1 overflow-hidden bg-[#0A1624]">
                  <img src="/web-aec/gasave/gasave_press_photo.webp" alt="Gasave Press" className="w-full h-full object-cover" />
                </div>
                <div className="relative flex-1 overflow-hidden bg-[#0A1624]">
                  <img src="/web-aec/gasave/gasave_sieves_photo.webp" alt="Gasave Sieves" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-[#0F2236] mt-2 border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div>
                  <h4 className="font-jetbrains text-[#5A8FA8] text-sm tracking-widest uppercase mb-3">ANTES:</h4>
                  <p className="font-inter text-[#F0F0F0]/90">Procesos semanales que requerían varias horas de trabajo manual.</p>
                </div>
                <div>
                  <h4 className="font-jetbrains text-[#5A8FA8] text-sm tracking-widest uppercase mb-3">DESPUÉS:</h4>
                  <p className="font-inter text-[#F0F0F0]/90">Un flujo optimizado que reduce ese proceso a aproximadamente 20 minutos.</p>
                </div>
                <div>
                  <h4 className="font-jetbrains text-[#5A8FA8] text-sm tracking-widest uppercase mb-3">RESULTADO:</h4>
                  <p className="font-inter text-[#F0F0F0] font-medium text-lg text-[#4A9FD4]">Una presencia digital más profesional y un proceso operativo más ágil.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 border-t border-white/10">
                <a href="https://gasavelaboratorio.com" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center border border-[#4A9FD4] text-[#4A9FD4] hover:bg-[#4A9FD4] hover:text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 uppercase btn-premium">
                  VER SITIO REAL →
                </a>
                <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="group relative overflow-hidden inline-flex justify-center items-center bg-[#4A9FD4] text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 uppercase btn-premium">
                  <span className="relative z-10">QUIERO ALGO SIMILAR →</span>
                  <div className="absolute inset-0 h-full w-[200%] translate-x-[-150%] skew-x-[-45deg] bg-white/40 transition-transform duration-1000 ease-out group-hover:translate-x-[100%] z-0"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ¿PARA QUIÉN ES? */}
      <section className="py-12 bg-deepBlack border-t border-steelBlue/30" ref={whoRef}>
        <div className="container mx-auto px-6 max-w-5xl fade-in-section text-center">
          <h2 className="font-inter font-medium text-lg md:text-xl text-concreteGray mb-6">
            Trabajamos principalmente con:
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "Constructoras",
              "Laboratorios",
              "Ingeniería",
              "Desarrolladores",
              "Arquitectos"
            ].map((item, i) => (
              <div key={i} className="bg-[#0F2236] border border-steelBlue/40 px-6 py-3 rounded-full flex items-center justify-center shadow-lg hover:border-[#4A9FD4] transition-colors cursor-default">
                <span className="font-jetbrains text-sm md:text-base text-titaniumWhite uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 9. PROCESO */}
      <section className="py-16 bg-deepBlack border-t border-steelBlue/30" ref={processRef}>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Descubrimos", desc: "Entendemos tu empresa, servicios y objetivos." },
              { num: "02", title: "Estructuramos", desc: "Definimos la arquitectura del sitio." },
              { num: "03", title: "Diseñamos y desarrollamos", desc: "Creamos una presencia digital alineada con tu marca." },
              { num: "04", title: "Publicamos", desc: "Tu sitio queda listo para compartirse y generar confianza." }
            ].map((step, i) => (
              <div key={i} className="bg-[#0A131F] border border-steelBlue/30 p-6 flex flex-col h-full hover:border-[#4A9FD4] relative card-premium">
                <div className="font-jetbrains text-xs font-bold mb-3 text-[#4A9FD4]">{step.num}</div>
                <h3 className="font-barlow font-bold text-xl uppercase tracking-wide mb-2 text-titaniumWhite">
                  {step.title}
                </h3>
                <p className="text-concreteGray text-sm flex-grow">
                  {step.desc}
                </p>
              </div>
            ))}
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
            
            <div className="bg-deepBlack border border-steelBlue/30 p-8 flex flex-col h-full hover:border-steelBlue card-premium">
              <div className="font-jetbrains text-xs text-concreteGray mb-4 tracking-widest">EMPEZAR</div>
              <h3 className="font-barlow font-bold text-3xl text-titaniumWhite uppercase mb-2">LANDING AEC</h3>
              <div className="font-jetbrains text-xl text-white mb-2">Desde $10,000 MXN</div>
              <p className="text-concreteGray font-inter text-sm mb-8">Para empezar rápido</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {["Landing page profesional", "Diseño responsive", "Secciones personalizadas", "Integración con WhatsApp", "Formulario de contacto", "Publicación del sitio"].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-concreteGray">
                    <Check size={16} className="text-electricBlue mr-2 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="w-full text-center border border-[#4A9FD4]/50 text-titaniumWhite font-jetbrains text-sm tracking-wider py-4 hover:border-[#4A9FD4] uppercase btn-premium">
                QUIERO UNA LANDING
              </a>
            </div>

            <div className="bg-[#0F2236] border border-electricBlue p-8 flex flex-col h-full transform md:-translate-y-4 shadow-2xl relative card-premium">
              <div className="absolute top-0 left-0 w-full h-1 bg-electricBlue"></div>
              <div className="font-jetbrains text-xs text-electricBlue mb-4 tracking-widest">CRECER</div>
              <h3 className="font-barlow font-bold text-3xl text-white uppercase mb-2">SITIO CORPORATIVO</h3>
              <div className="font-jetbrains text-xl text-white mb-2">Desde $15,000 MXN</div>
              <p className="text-concreteGray font-inter text-sm mb-8">Para consolidar tu presencia</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {["Sitio web corporativo", "Varias secciones/páginas", "Portafolio de proyectos", "Servicios e info empresarial", "Integración con WhatsApp", "Diseño responsive", "Publicación"].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-white/80">
                    <Check size={16} className="text-electricBlue mr-2 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="w-full text-center bg-electricBlue text-white font-jetbrains text-sm tracking-wider py-4 hover:bg-white hover:text-deepBlack uppercase font-bold btn-premium">
                QUIERO MI SITIO
              </a>
            </div>

            <div className="bg-deepBlack border border-steelBlue/30 p-8 flex flex-col h-full hover:border-matteGold card-premium">
              <div className="font-jetbrains text-xs text-concreteGray mb-4 tracking-widest">DIGITALIZAR</div>
              <h3 className="font-barlow font-bold text-3xl text-matteGold uppercase mb-2">WEB + AUTOMATIZACIÓN</h3>
              <div className="font-jetbrains text-xl text-white mb-2">Desde $25,000 MXN</div>
              <p className="text-concreteGray font-inter text-sm mb-8">Para digitalizar procesos</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {["Sitio web personalizado", "Integraciones a medida", "Automatizaciones", "Formularios inteligentes", "Integración de IA", "Funcionalidades especiales"].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-concreteGray">
                    <Check size={16} className="text-matteGold mr-2 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="w-full text-center border border-matteGold text-matteGold font-jetbrains text-sm tracking-wider py-4 hover:bg-matteGold hover:text-deepBlack uppercase font-bold btn-premium">
                HABLEMOS DE MI PROYECTO
              </a>
            </div>

          </div>

          <div className="text-center">
            <p className="text-concreteGray text-xs font-jetbrains">
              * Los precios son de referencia y pueden variar dependiendo del alcance, número de páginas, funcionalidades e integraciones requeridas.
            </p>
          </div>
          
          {/* TIEMPOS ESTIMADOS */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0F2236]/30 border border-steelBlue/30 p-6 card-premium">
              <div className="text-left w-full md:w-auto md:text-center">
                <span className="font-jetbrains text-[#5A8FA8] text-xs tracking-widest uppercase block mb-1">Landing AEC</span>
                <span className="font-inter text-white text-sm">Desde 3–5 días</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-steelBlue/30"></div>
              <div className="text-left w-full md:w-auto md:text-center">
                <span className="font-jetbrains text-[#5A8FA8] text-xs tracking-widest uppercase block mb-1">Sitio Corporativo</span>
                <span className="font-inter text-white text-sm">Desde 1–2 semanas</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-steelBlue/30"></div>
              <div className="text-left w-full md:w-auto md:text-center">
                <span className="font-jetbrains text-[#5A8FA8] text-xs tracking-widest uppercase block mb-1">Web + Automatización</span>
                <span className="font-inter text-white text-sm">Según alcance y complejidad</span>
              </div>
            </div>
          </div>

          {/* MANTENIMIENTO */}
          <div className="mt-4 max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-center gap-3 border border-steelBlue/30 p-4 bg-deepBlack/80 card-premium">
            <span className="text-concreteGray font-inter text-sm">
              ¿Necesitas mantenimiento o mejoras continuas? También puedo ayudarte después de publicar tu sitio.
            </span>
            <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="font-jetbrains text-xs text-electricBlue hover:text-white transition-colors inline-flex items-center uppercase font-bold">
              CONSULTAR MANTENIMIENTO <ArrowRight size={14} className="ml-1" />
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
                q: "¿Necesito tener fotografías profesionales?",
                a: "No necesariamente. Podemos trabajar con el material que ya tengas y ayudarte a estructurar visualmente el contenido."
              },
              {
                q: "¿Pueden hacer el sitio para una empresa que no sea constructora?",
                a: "Sí. Aunque nuestro enfoque principal está en empresas AEC —arquitectura, ingeniería, construcción, laboratorios, contratistas y desarrollo inmobiliario— también podemos desarrollar sitios para otros giros cuando el proyecto tenga buen encaje."
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
            TU EMPRESA YA CONSTRUYE.<br/>AHORA HAGAMOS QUE SE VEA.
          </h2>
          
          <div className="font-inter text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Cuéntame qué tipo de empresa tienes y qué necesitas mostrar. Podemos ayudarte a convertir tu experiencia en una presencia digital más clara, sólida y profesional.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="inline-flex justify-center items-center bg-[#0F2236] text-white border border-[#4A9FD4]/30 hover:border-[#4A9FD4] hover:bg-deepBlack font-jetbrains text-sm tracking-wider py-4 px-8 uppercase font-bold shadow-2xl btn-premium transition-colors" > SOLICITAR PROPUESTA →
            </a>
          </div>
        </div>
      </section>


      {/* 13. WEB AEC CONTACT */}
      <section id="contacto-web-aec" className="py-16 md:py-24 bg-deepBlack border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: TEXT & DIRECT CONTACT */}
            <div>
              <span className="font-jetbrains text-electricBlue text-xs tracking-[0.2em] uppercase block mb-4">
                INICIA TU PROYECTO
              </span>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl lg:text-6xl text-titaniumWhite uppercase tracking-wide mb-6 whitespace-pre-line">
                ¿QUÉ NECESITA<br/>TU EMPRESA?
              </h2>
              <p className="font-inter text-concreteGray text-lg mb-12 max-w-xl">
                Completa el formulario y me pondré en contacto contigo para entender mejor tus objetivos.
              </p>

              <div className="mb-8">
                <span className="font-jetbrains text-electricBlue text-xs uppercase tracking-widest block mb-6">O DIRECTAMENTE A TRAVÉS DE</span>
                <div className="flex flex-col gap-4">
                  {/* WhatsApp */}
                  <a 
                    href={"https://wa.me/message/OMVEQBVAUTQLM1?text=" + encodeURIComponent("Hola Benjamín, estoy interesado en crear un sitio web para mi empresa.")} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-start space-x-4 px-6 py-4 border border-[#128C7E]/40 bg-[#0D241E]/80 hover:border-[#25D366] hover:bg-[#12382C] transition-all group contact-premium"
                  >
                    <MessageCircle size={24} className="text-[#25D366] group-hover:text-white transition-colors" />
                    <div className="flex flex-col">
                      <span className="font-jetbrains text-titaniumWhite text-sm tracking-wider">WhatsApp Business</span>
                      <span className="font-inter text-concreteGray text-xs mt-1">+52 871 217 3821</span>
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:benjamin@mendivil.build" 
                    className="flex items-center justify-start space-x-4 px-6 py-4 border border-[#4A9FD4]/30 bg-[#0A131F]/60 hover:border-[#4A9FD4] hover:bg-[#0A131F] transition-all group contact-premium"
                  >
                    <Mail size={24} className="text-concreteGray group-hover:text-electricBlue transition-colors" />
                    <span className="font-jetbrains text-titaniumWhite text-sm tracking-wider">benjamin@mendivil.build</span>
                  </a>

                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM */}
            <div className="bg-[#0A0A0A] border border-steelBlue/40 p-8 md:p-10 shadow-2xl relative card-premium">
              {/* Technical accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-electricBlue"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-electricBlue"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-electricBlue"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-electricBlue"></div>

              {state.succeeded ? (
                <div className="bg-[#1E4A6E] border border-[#4A9FD4]/30 p-8 text-center">
                  <p className="font-barlow font-bold text-[#4A9FD4] text-xl tracking-wide uppercase">
                    MENSAJE ENVIADO CORRECTAMENTE
                  </p>
                </div>
              ) : (
                <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="Source" value="WEB AEC" />
                  <input type="hidden" name="Subject" value="Nueva solicitud WEB AEC" />
                  
                  <div className="w-full">
                    <input type="text" name="name" required placeholder="Nombre" className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="w-full">
                    <input type="text" name="company" required placeholder="Empresa" className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors" />
                    <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="w-full">
                    <input type="text" name="contact" required placeholder="WhatsApp o Email" className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors" />
                    <ValidationError prefix="Contact" field="contact" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  
                  <div className="w-full">
                    <select name="needs" required className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full appearance-none transition-colors">
                      <option value="" disabled selected>¿Qué deseas?</option>
                      {["Landing AEC", "Sitio Corporativo", "Portafolio", "Web + Automatización", "No estoy seguro"].map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button type="submit" disabled={state.submitting} className="w-full bg-electricBlue text-white font-jetbrains font-bold text-sm tracking-widest py-5 hover:bg-white hover:text-deepBlack disabled:bg-electricBlue/50 disabled:cursor-not-allowed transition-colors duration-300 uppercase mt-4">
                    {state.submitting ? "ENVIANDO..." : "SOLICITAR PROPUESTA →"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WebAEC;
