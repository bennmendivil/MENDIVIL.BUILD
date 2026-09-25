import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

const WebAEC: React.FC = () => {
  useEffect(() => {
    document.title = "Web AEC | Sitios Web para Constructoras e Ingenieros | MENDIVIL.BUILD";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Desarrollamos sitios web profesionales para constructoras, ingenieros, laboratorios, contratistas, arquitectos y desarrolladores inmobiliarios.");
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

  return (
    <div className="bg-deepBlack min-h-screen text-titaniumWhite font-inter">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-[#4A9FD4]/20" ref={heroRef}>
        <div className="absolute inset-0 bg-hero-gradient opacity-30 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#1E4A6E 1px, transparent 1px), linear-gradient(90deg, #1E4A6E 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10 fade-in-section">
          <div className="max-w-4xl">
            <h1 className="font-barlow font-black text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.95] mb-8">
              <span className="text-[#F0F0F0]">TU EMPRESA CONSTRUYE PROYECTOS IMPORTANTES.</span><br/>
              <span className="text-[#4A9FD4]">TU SITIO WEB DEBERÍA DEMOSTRARLO.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#F0F0F0]/90 drop-shadow-md max-w-3xl mb-12 leading-relaxed font-inter">
              Creamos sitios web para empresas AEC que necesitan convertir su experiencia, proyectos y capacidad técnica en una presencia digital que genere confianza y oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="group relative overflow-hidden inline-flex justify-center items-center bg-[#4A9FD4] text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 transition-colors uppercase">
                <span className="relative z-10 flex items-center">QUIERO MI SITIO WEB <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" /></span>
                <div className="absolute inset-0 h-full w-[200%] translate-x-[-150%] skew-x-[-45deg] bg-white/40 transition-transform duration-1000 ease-out group-hover:translate-x-[100%] z-0"></div>
              </a>
              <a href="#ejemplos" onClick={(e) => scrollToSection(e, "ejemplos")} className="inline-flex justify-center items-center border border-[#4A9FD4] text-[#4A9FD4] hover:bg-[#4A9FD4] hover:text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 transition-colors uppercase">
                VER EJEMPLOS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EL PROBLEMA */}
      <section className="py-20 bg-[#0F2236]/30 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center fade-in-section">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl text-[#F0F0F0] uppercase tracking-wide mb-6 leading-tight">
            MUCHAS EMPRESAS AEC HACEN BUEN TRABAJO.<br/>
            <span className="text-[#4A9FD4]">SU SITIO WEB NO SIEMPRE LO REFLEJA.</span>
          </h2>
          <p className="font-inter text-lg text-[#F0F0F0]/70 leading-relaxed mb-4">
            Un sitio desactualizado, lento o genérico puede hacer que una empresa con gran experiencia se vea menos sólida de lo que realmente es.
          </p>
          <p className="font-inter text-lg text-[#F0F0F0]/90 font-medium">
            En arquitectura, ingeniería y construcción, la confianza importa. Tu presencia digital también.
          </p>
        </div>
      </section>

      {/* 3. EJEMPLOS */}
      <section id="ejemplos" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-[#F0F0F0] uppercase tracking-wide mb-4">¿CÓMO PODRÍA VERSE TU EMPRESA?</h2>
            <p className="font-inter text-lg text-[#5A8FA8]">Explora ejemplos conceptuales diseñados para distintos perfiles del sector AEC.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* TARJETA 1 */}
            <div className="bg-[#0F2236] border border-white/10 overflow-hidden group hover:border-[#4A9FD4]/50 transition-colors shadow-lg hover:shadow-[#4A9FD4]/10">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_vertexa_desktop.webp" alt="Vertexa Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Constructora</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">VERTEXA</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 h-10">
                  Una presencia digital sólida para mostrar capacidad técnica, proyectos y experiencia en obra.
                </p>
                <a href="/web-aec/demos/vertexa" className="inline-flex items-center text-[#4A9FD4] hover:text-white font-barlow font-bold text-sm tracking-widest uppercase transition-colors">
                  VER EJEMPLO <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* TARJETA 2 */}
            <div className="bg-[#0F2236] border border-white/10 overflow-hidden group hover:border-[#4A9FD4]/50 transition-colors shadow-lg hover:shadow-[#4A9FD4]/10">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_stratumlabs_desktop.webp" alt="Stratum Labs Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Laboratorio</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">STRATUM LABS</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 h-10">
                  Un sitio técnico y profesional para comunicar servicios geotécnicos, ensayes y experiencia de campo.
                </p>
                <a href="/web-aec/demos/stratum-labs" className="inline-flex items-center text-[#4A9FD4] hover:text-white font-barlow font-bold text-sm tracking-widest uppercase transition-colors">
                  VER EJEMPLO <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* TARJETA 3 */}
            <div className="bg-[#0F2236] border border-white/10 overflow-hidden group hover:border-[#4A9FD4]/50 transition-colors shadow-lg hover:shadow-[#4A9FD4]/10">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_nexora_desktop.webp" alt="Nexora Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Firma de Ingeniería</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">NEXORA ENGINEERING</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 h-10">
                  Una estructura clara para presentar especialidades, experiencia y proyectos relevantes.
                </p>
                <a href="/web-aec/demos/nexora-engineering" className="inline-flex items-center text-[#4A9FD4] hover:text-white font-barlow font-bold text-sm tracking-widest uppercase transition-colors">
                  VER EJEMPLO <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* TARJETA 4 */}
            <div className="bg-[#0F2236] border border-white/10 overflow-hidden group hover:border-[#4A9FD4]/50 transition-colors shadow-lg hover:shadow-[#4A9FD4]/10">
              <div className="relative h-64 overflow-hidden bg-[#0A1624]">
                <img src="/web-aec/demos/demo_azura_desktop.webp" alt="Azura Demo" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <span className="inline-block text-[#4A9FD4] font-jetbrains text-xs tracking-widest uppercase mb-2">Desarrolladora</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-4">AZURA</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed mb-8 h-10">
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
      <section className="py-24 bg-[#0A1624] border-y border-[#4A9FD4]/20 relative">
        <div className="container mx-auto px-6 max-w-5xl fade-in-section">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="font-barlow font-bold text-3xl md:text-5xl text-[#F0F0F0] uppercase tracking-wide mb-6 leading-tight">
                NO ES SOLO DISEÑO.<br/>
                <span className="text-[#4A9FD4]">ES ENTENDER TU INDUSTRIA.</span>
              </h2>
              <p className="font-inter text-lg text-[#F0F0F0]/80 leading-relaxed mb-6">
                MENDIVIL.BUILD nace desde la ingeniería, la construcción y la ejecución real de proyectos.
              </p>
              <p className="font-inter text-lg text-[#F0F0F0]/80 leading-relaxed">
                Eso nos permite entender mejor cómo presentar servicios, experiencia, portafolio y credibilidad para empresas AEC.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-1 gap-4">
              {[
                "Lenguaje de la industria",
                "Enfoque técnico y comercial",
                "Sitios claros, rápidos y profesionales",
                "Diseño alineado con tu tipo de cliente",
                "Posibilidad de integrar automatización e IA"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#0F2236] p-4 border-l-2 border-[#4A9FD4]">
                  <CheckCircle2 className="w-5 h-5 text-[#4A9FD4] shrink-0" />
                  <span className="font-inter text-[#F0F0F0]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASO REAL: GASAVE */}
      <section className="py-24">
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
                <a href="https://gasavelaboratorio.com" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center border border-[#4A9FD4] text-[#4A9FD4] hover:bg-[#4A9FD4] hover:text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 transition-colors uppercase">
                  VER SITIO REAL →
                </a>
                <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="group relative overflow-hidden inline-flex justify-center items-center bg-[#4A9FD4] text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 px-10 transition-colors uppercase">
                  <span className="relative z-10">QUIERO ALGO SIMILAR →</span>
                  <div className="absolute inset-0 h-full w-[200%] translate-x-[-150%] skew-x-[-45deg] bg-white/40 transition-transform duration-1000 ease-out group-hover:translate-x-[100%] z-0"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ¿PARA QUIÉN ES? */}
      <section className="py-20 bg-[#0A1624] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center fade-in-section">
          <h2 className="font-barlow font-bold text-3xl md:text-4xl text-[#F0F0F0] uppercase tracking-wide mb-10">DISEÑADO PARA EMPRESAS AEC COMO:</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Constructoras", "Laboratorios", "Firmas de ingeniería", "Desarrolladores", "Arquitectos", "Contratistas", "Brokers industriales", "Servicios especializados"].map((tag, i) => (
              <span key={i} className="px-6 py-3 bg-[#0F2236] border border-[#4A9FD4]/30 text-[#F0F0F0] font-barlow font-medium tracking-wide uppercase text-sm shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIPOS DE SOLUCIÓN */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-[#F0F0F0] uppercase tracking-wide mb-4">DESDE UNA LANDING HASTA UNA SOLUCIÓN DIGITAL</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1 */}
            <div className="bg-[#0F2236] p-8 border-t-2 border-white/20 hover:border-[#4A9FD4] transition-colors group">
              <h3 className="font-barlow font-bold text-xl text-[#4A9FD4] uppercase mb-4 group-hover:text-white transition-colors">LANDING AEC</h3>
              <p className="font-inter text-[#F0F0F0]/80 text-sm leading-relaxed">Una página clara y profesional para presentar tu empresa, servicios y canales de contacto.</p>
            </div>
            {/* 2 */}
            <div className="bg-[#0F2236] p-8 border-t-2 border-white/20 hover:border-[#4A9FD4] transition-colors group">
              <h3 className="font-barlow font-bold text-xl text-[#4A9FD4] uppercase mb-4 group-hover:text-white transition-colors">SITIO CORPORATIVO</h3>
              <p className="font-inter text-[#F0F0F0]/80 text-sm leading-relaxed">Para empresas que necesitan mostrar experiencia, proyectos, especialidades y capacidad técnica.</p>
            </div>
            {/* 3 */}
            <div className="bg-[#0F2236] p-8 border-t-2 border-white/20 hover:border-[#4A9FD4] transition-colors group">
              <h3 className="font-barlow font-bold text-xl text-[#4A9FD4] uppercase mb-4 group-hover:text-white transition-colors">PORTAFOLIO / PRESENCIA COMERCIAL</h3>
              <p className="font-inter text-[#F0F0F0]/80 text-sm leading-relaxed">Una vitrina digital para presentar proyectos y generar confianza con prospectos, clientes o inversionistas.</p>
            </div>
            {/* 4 */}
            <div className="bg-[#0F2236] p-8 border-t-2 border-[#4A9FD4] shadow-[0_0_15px_rgba(74,159,212,0.15)] group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4A9FD4]/10 rounded-bl-full z-0 transition-transform duration-500 group-hover:scale-150"></div>
              <h3 className="relative z-10 font-barlow font-bold text-xl text-[#F0F0F0] uppercase mb-4">WEB + AUTOMATIZACIÓN / IA</h3>
              <p className="relative z-10 font-inter text-[#F0F0F0]/80 text-sm leading-relaxed">Sitios que además integran herramientas, formularios, automatizaciones o soluciones digitales específicas para tu negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROCESO */}
      <section className="py-24 bg-[#0A1624] border-y border-[#4A9FD4]/20">
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl text-[#F0F0F0] uppercase tracking-wide">ASÍ TRABAJAMOS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#4A9FD4]/20 z-0"></div>
            {[
              { num: "01", title: "Diagnóstico", desc: "Entendemos tu empresa, tus clientes y lo que necesitas comunicar." },
              { num: "02", title: "Estructura y diseño", desc: "Definimos contenido, jerarquía y dirección visual." },
              { num: "03", title: "Desarrollo", desc: "Construimos el sitio y ajustamos contigo los detalles." },
              { num: "04", title: "Publicación", desc: "Entregamos y publicamos tu sitio listo para compartir y vender mejor." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 pt-4 md:pt-0">
                <div className="w-16 h-16 bg-[#0F2236] border-2 border-[#4A9FD4] rounded-full flex items-center justify-center font-barlow font-bold text-xl text-[#4A9FD4] mb-6 mx-auto md:mx-0 shadow-[0_0_15px_rgba(74,159,212,0.3)]">
                  {step.num}
                </div>
                <h3 className="font-barlow font-bold text-xl text-[#F0F0F0] uppercase mb-3 text-center md:text-left">{step.title}</h3>
                <p className="font-inter text-[#F0F0F0]/70 text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INVERSIÓN */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4A9FD4]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-6xl fade-in-section">
          <div className="text-center mb-16">
            <h2 className="font-barlow font-bold text-4xl text-[#F0F0F0] uppercase tracking-wide">INVERSIÓN</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                tag: "EMPEZAR", title: "Landing AEC", price: "Desde $10,000 MXN", 
                desc: "Para empresas que necesitan una presencia profesional, clara y rápida."
              },
              { 
                tag: "CRECER", title: "Sitio Corporativo", price: "Desde $15,000 MXN", 
                desc: "Para empresas que quieren mostrar proyectos, servicios y experiencia con mayor profundidad.",
                highlight: true
              },
              { 
                tag: "DIGITALIZAR", title: "Web + Automatización", price: "Desde $25,000 MXN", 
                desc: "Para empresas que quieren integrar presencia digital con herramientas y procesos automatizados."
              }
            ].map((plan, i) => (
              <div key={i} className={`bg-[#0F2236] p-10 flex flex-col h-full transition-transform duration-300 ${plan.highlight ? 'border-t-4 border-[#4A9FD4] shadow-[0_10px_40px_rgba(74,159,212,0.15)] md:-translate-y-4' : 'border border-white/5 hover:border-white/20'}`}>
                <span className="inline-block text-[#5A8FA8] font-jetbrains text-xs tracking-widest uppercase mb-4">{plan.tag}</span>
                <h3 className="font-barlow font-bold text-2xl text-[#F0F0F0] uppercase mb-2">{plan.title}</h3>
                <div className="font-inter font-medium text-xl text-[#4A9FD4] mb-6 pb-6 border-b border-white/10">{plan.price}</div>
                <p className="font-inter text-[#F0F0F0]/80 text-sm leading-relaxed mb-8 flex-grow">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TIEMPOS ESTIMADOS */}
      <section className="py-16 bg-[#0A1624] border-y border-[#4A9FD4]/20">
        <div className="container mx-auto px-6 max-w-4xl fade-in-section">
          <div className="text-center mb-10">
            <h2 className="font-barlow font-bold text-3xl text-[#F0F0F0] uppercase tracking-wide">TIEMPOS ESTIMADOS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0F2236] p-6 text-center border border-white/5">
              <div className="font-inter text-[#F0F0F0]/70 text-sm mb-2">Landing AEC</div>
              <div className="font-barlow font-bold text-xl text-[#4A9FD4]">Desde 3–5 días</div>
            </div>
            <div className="bg-[#0F2236] p-6 text-center border border-white/5">
              <div className="font-inter text-[#F0F0F0]/70 text-sm mb-2">Sitio Corporativo</div>
              <div className="font-barlow font-bold text-xl text-[#4A9FD4]">Desde 1–2 semanas</div>
            </div>
            <div className="bg-[#0F2236] p-6 text-center border border-white/5">
              <div className="font-inter text-[#F0F0F0]/70 text-sm mb-2">Web + Automatización</div>
              <div className="font-barlow font-bold text-xl text-[#4A9FD4]">Según alcance</div>
            </div>
          </div>
          <p className="text-center font-inter text-xs text-[#5A8FA8]">NOTA: Los tiempos pueden variar según contenido, revisiones e integraciones requeridas.</p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl fade-in-section">
          <div className="text-center mb-12">
            <h2 className="font-barlow font-bold text-3xl text-[#F0F0F0] uppercase tracking-wide">PREGUNTAS FRECUENTES</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "¿Necesito tener todo el contenido listo?", a: "No. Podemos ayudarte a organizar y redactar el contenido a partir de la información de tu empresa." },
              { q: "¿Pueden ayudarme con los textos?", a: "Sí. Podemos estructurar el contenido para que sea claro, técnico y comercial." },
              { q: "¿Mi sitio se verá bien en celular?", a: "Sí. Todos los sitios se diseñan para funcionar correctamente en desktop, tablet y móvil." },
              { q: "¿Pueden integrar automatizaciones o IA?", a: "Sí. Dependiendo del proyecto, podemos integrar formularios, reportes, herramientas y flujos automatizados." }
            ].map((faq, i) => (
              <div key={i} className="bg-[#0F2236] p-6 border-l-4 border-[#4A9FD4] shadow-sm">
                <h4 className="font-barlow font-bold text-lg text-[#F0F0F0] mb-2">{faq.q}</h4>
                <p className="font-inter text-[#F0F0F0]/80 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section id="contacto-web-aec" className="py-24 bg-[#0A1624] border-t border-[#4A9FD4]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-20 z-0 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 fade-in-section">
          <div className="text-center mb-12">
            <h2 className="font-barlow font-black text-4xl md:text-5xl text-[#F0F0F0] uppercase tracking-wide mb-6">
              TU EMPRESA YA CONSTRUYE.<br/>
              <span className="text-[#4A9FD4]">AHORA HAGAMOS QUE SE VEA.</span>
            </h2>
            <p className="font-inter text-lg text-[#F0F0F0]/80 leading-relaxed max-w-2xl mx-auto">
              Cuéntame qué tipo de empresa tienes y qué necesitas mostrar. Podemos ayudarte a convertir tu experiencia en una presencia digital más clara, sólida y profesional.
            </p>
          </div>

          <div className="bg-[#0F2236] p-8 md:p-12 border border-white/10 max-w-2xl mx-auto shadow-2xl">
            {state.succeeded ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#4A9FD4] mx-auto mb-6" />
                <h3 className="font-barlow font-bold text-2xl text-white mb-2 uppercase tracking-wide">Mensaje Enviado</h3>
                <p className="text-[#F0F0F0]/70">Gracias por tu interés. Me pondré en contacto contigo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-jetbrains text-xs text-[#5A8FA8] tracking-widest uppercase mb-2">Nombre</label>
                  <input id="name" type="text" name="name" required className="w-full bg-[#0A1624] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A9FD4] transition-colors" />
                </div>
                <div>
                  <label htmlFor="company" className="block font-jetbrains text-xs text-[#5A8FA8] tracking-widest uppercase mb-2">Empresa</label>
                  <input id="company" type="text" name="company" required className="w-full bg-[#0A1624] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A9FD4] transition-colors" />
                </div>
                <div>
                  <label htmlFor="contact" className="block font-jetbrains text-xs text-[#5A8FA8] tracking-widest uppercase mb-2">WhatsApp o Email</label>
                  <input id="contact" type="text" name="contact" required className="w-full bg-[#0A1624] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#4A9FD4] transition-colors" />
                </div>
                <div>
                  <label htmlFor="need" className="block font-jetbrains text-xs text-[#5A8FA8] tracking-widest uppercase mb-2">¿Qué necesitas?</label>
                  <div className="relative">
                    <select id="need" name="need" required className="w-full bg-[#0A1624] border border-white/10 text-white px-4 py-3 appearance-none focus:outline-none focus:border-[#4A9FD4] transition-colors">
                      <option value="">Selecciona una opción</option>
                      <option value="Landing AEC">Landing AEC</option>
                      <option value="Sitio Corporativo">Sitio Corporativo</option>
                      <option value="Portafolio">Portafolio</option>
                      <option value="Web + Automatización">Web + Automatización</option>
                      <option value="No estoy seguro">No estoy seguro</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#5A8FA8]">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <button type="submit" disabled={state.submitting} className="group relative overflow-hidden w-full bg-[#4A9FD4] text-deepBlack font-barlow font-bold text-[15px] tracking-widest py-4 transition-colors uppercase mt-4 disabled:opacity-50">
                  <span className="relative z-10 flex items-center justify-center">
                    {state.submitting ? 'ENVIANDO...' : 'SOLICITAR PROPUESTA →'}
                  </span>
                  <div className="absolute inset-0 h-full w-[200%] translate-x-[-150%] skew-x-[-45deg] bg-white/40 transition-transform duration-1000 ease-out group-hover:translate-x-[100%] z-0"></div>
                </button>
              </form>
            )}
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="font-inter text-sm text-[#F0F0F0]/60 mb-4">¿Prefieres contacto directo?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://wa.me/526442582885" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center text-[#27AE60] hover:text-[#27AE60]/80 font-barlow font-bold text-sm tracking-widest transition-colors uppercase">
                  WhatsApp →
                </a>
                <span className="hidden sm:inline text-white/20">|</span>
                <a href="mailto:benjamin@mendivil.build" className="inline-flex justify-center items-center text-[#4A9FD4] hover:text-[#4A9FD4]/80 font-barlow font-bold text-sm tracking-widest transition-colors uppercase">
                  benjamin@mendivil.build
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebAEC;
