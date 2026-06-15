import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useForm, ValidationError } from '@formspree/react';

const LeanBuildSimulation: React.FC = () => {
  const { language } = useLanguage();
  const isEs = language === 'ES';
  const containerRef = useIntersectionObserver({ threshold: 0.1 });
  const [state, handleSubmit] = useForm('xjgdjgvz');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    // 1. Hero
    heroTitlePart1: "LEAN BUILD ",
    heroTitlePart2: "SIMULATION",
    heroSubtitle: isEs
      ? "Taller vivencial de TAKT Planning para superintendentes y equipos de obra"
      : "Hands-on TAKT Planning workshop for superintendents and field crews",
    heroPills: [
      { label: isEs ? "Duración" : "Duration", val: "2.5 hrs" },
      { label: isEs ? "Participantes" : "Participants", val: "18-36" },
      { label: isEs ? "Dinámica" : "Format", val: isEs ? "2 Rondas" : "2 Rounds" }
    ],
    heroCta: isEs ? "AGENDAR LLAMADA →" : "BOOK A CALL →",

    // 2. El Problema
    probStat1: "30%",
    probDesc1: isEs ? "desperdicio de tiempo en obra" : "time wasted on site",
    probStat2: "57%",
    probDesc2: isEs ? "proyectos que no terminan a tiempo" : "projects that don't finish on time",
    probStat3: "70%",
    probDesc3: isEs ? "del caos viene de falta de plan" : "of chaos comes from lack of planning",
    probClose: isEs 
      ? "La causa raíz: no existe un flujo de trabajo planificado."
      : "The root cause: there is no planned workflow.",

    // 3. Cómo Funciona
    howTitle: isEs ? "CÓMO FUNCIONA" : "HOW IT WORKS",
    howSteps: [
      { num: "01", title: "Intro Lean+TAKT", time: "20min" },
      { num: "02", title: isEs ? "Ronda 1 sin plan" : "Round 1 without plan", time: "20min" },
      { num: "03", title: "Debrief", time: "15min" },
      { num: "04", title: isEs ? "Planificación TAKT" : "TAKT Planning", time: "25min" },
      { num: "05", title: isEs ? "Ronda 2 con TAKT" : "Round 2 with TAKT", time: "15min" },
      { num: "06", title: isEs ? "Cierre" : "Closing", time: "20min" }
    ],

    // 4. R1 vs R2
    vsTitle: isEs ? "RONDA 1 VS RONDA 2" : "ROUND 1 VS ROUND 2",
    vsSubtitle: isEs ? "El impacto de construir con flujo" : "The impact of building with flow",
    r1Title: isEs ? "RONDA 1: SIN PLAN" : "ROUND 1: NO PLAN",
    r1Items: isEs 
      ? ["Caos en la comunicación", "Personal inactivo esperando", "Cuellos de botella evidentes", "Frustración del equipo"]
      : ["Communication chaos", "Idle personnel waiting", "Evident bottlenecks", "Team frustration"],
    r2Title: isEs ? "RONDA 2: CON TAKT" : "ROUND 2: WITH TAKT",
    r2Items: isEs
      ? ["Ritmo constante y predecible", "Cero esperas entre oficios", "Producción balanceada", "Ambiente de control y orden"]
      : ["Constant and predictable rhythm", "Zero waiting between trades", "Balanced production", "Environment of control and order"],

    // 5. Precios
    pricingTitle: isEs ? "INVERSIÓN" : "INVESTMENT",
    plans: [
      {
        type: "Ejecutivo",
        price: "Desde $28,000 MXN",
        time: "4 hrs",
        pax: "8-15 personas",
        popular: false
      },
      {
        type: "Corporativo",
        price: "Desde $45,000 MXN",
        time: isEs ? "1 día" : "1 day",
        pax: "18-36 personas",
        popular: true,
        popBadge: isEs ? "Más popular" : "Most popular"
      },
      {
        type: "Bootcamp",
        price: "Desde $2,500 MXN/persona",
        time: isEs ? "2 días" : "2 days",
        pax: "36-60 personas",
        popular: false
      }
    ],

    // 6. CTA Final
    finalTitle: isEs ? "¿Listo para transformar tu equipo de obra?" : "Ready to transform your field crew?",
    finalForm: {
      name: isEs ? "Nombre completo" : "Full Name",
      company: isEs ? "Empresa" : "Company",
      email: "Email",
      message: isEs ? "Mensaje" : "Message",
      send: isEs ? "ENVIAR MENSAJE" : "SEND MESSAGE"
    }
  };


  return (
    <div className="bg-[#0E0E0E] text-[#F0F0F0] font-inter pt-32 pb-24 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl">

        {/* 1. HERO */}
        <div className="text-center md:text-left mb-32 fade-in-section">
          <h1 className="font-barlow font-black text-[3rem] md:text-[5rem] uppercase tracking-wide leading-none mb-6">
            {t.heroTitlePart1} <br className="hidden md:block" />
            <span className="text-[#4A9FD4]">{t.heroTitlePart2}</span>
          </h1>
          <p className="font-inter italic text-[#5A8FA8] text-[1.2rem] md:text-[1.5rem] mb-12 max-w-3xl">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-12">
            {t.heroPills.map((pill, idx) => (
              <div key={idx} className="bg-[#2A2A2A] rounded-[6px] px-8 py-4 border-l-[3px] border-[#4A9FD4]">
                <div className="font-jetbrains text-[#5A8FA8] text-[0.7rem] uppercase tracking-wider mb-1">{pill.label}</div>
                <div className="font-barlow font-bold text-[#F0F0F0] text-[1.5rem]">{pill.val}</div>
              </div>
            ))}
          </div>

          <a 
            href="https://calendly.com/benjamh2/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4A9FD4] text-[#0E0E0E] font-barlow font-bold text-[1.1rem] py-[16px] px-[40px] rounded-[6px] hover:bg-[#1E4A6E] hover:border-[#4A9FD4] hover:text-white border-[2px] border-transparent transition-all duration-300 uppercase tracking-wide shadow-lg"
          >
            {t.heroCta}
          </a>
        </div>

        {/* 2. EL PROBLEMA */}
        <div className="mb-32 fade-in-section delay-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#1E4A6E] border border-[#4A9FD4]/30 rounded-[8px] p-8 text-center flex flex-col items-center justify-center">
              <span className="font-barlow font-black text-[#4A9FD4] text-[4rem] leading-none mb-2">{t.probStat1}</span>
              <span className="font-inter text-[#F0F0F0] text-[1.1rem]">{t.probDesc1}</span>
            </div>
            <div className="bg-[#1E4A6E] border border-[#4A9FD4]/30 rounded-[8px] p-8 text-center flex flex-col items-center justify-center">
              <span className="font-barlow font-black text-[#4A9FD4] text-[4rem] leading-none mb-2">{t.probStat2}</span>
              <span className="font-inter text-[#F0F0F0] text-[1.1rem]">{t.probDesc2}</span>
            </div>
            <div className="bg-[#1E4A6E] border border-[#4A9FD4]/30 rounded-[8px] p-8 text-center flex flex-col items-center justify-center">
              <span className="font-barlow font-black text-[#4A9FD4] text-[4rem] leading-none mb-2">{t.probStat3}</span>
              <span className="font-inter text-[#F0F0F0] text-[1.1rem]">{t.probDesc3}</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-[#4A9FD4]/10 border border-[#4A9FD4]/30 rounded-[4px] py-3 px-8">
              <p className="font-barlow font-bold text-[#F0F0F0] text-[1.5rem] tracking-wide uppercase">
                {t.probClose}
              </p>
            </div>
          </div>
        </div>

        {/* 3. CÓMO FUNCIONA */}
        <div className="mb-32 fade-in-section delay-200">
          <h3 className="font-barlow font-black text-[#F0F0F0] text-[2.5rem] uppercase mb-12 text-center">
            {t.howTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.howSteps.map((step, idx) => (
              <div key={idx} className="bg-[#2A2A2A] rounded-[8px] p-8 border-t-[3px] border-[#4A9FD4] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -right-4 -top-6 font-barlow font-black text-[#4A9FD4] text-[6rem] opacity-10 group-hover:opacity-20 transition-opacity">
                  {step.num}
                </div>
                <div className="font-jetbrains text-[#4A9FD4] text-[0.8rem] mb-2 tracking-widest">{step.num}</div>
                <h4 className="font-barlow font-bold text-[#F0F0F0] text-[1.3rem] uppercase mb-4">{step.title}</h4>
                <div className="inline-block bg-[#1E4A6E] text-[#F0F0F0] font-jetbrains text-[0.75rem] px-3 py-1 rounded-[4px]">
                  ⏱ {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. RONDA 1 VS RONDA 2 */}
        <div className="mb-32 fade-in-section delay-200">
          <div className="text-center mb-12">
            <h3 className="font-barlow font-black text-[#F0F0F0] text-[2.5rem] uppercase mb-2">
              {t.vsTitle}
            </h3>
            <p className="font-inter italic text-[#5A8FA8] text-[1.1rem]">
              {t.vsSubtitle}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Ronda 1 (Red style) */}
            <div className="flex-1 bg-[#1A1A1A] border-t-[4px] border-red-500/70 rounded-[8px] p-8 md:p-12">
              <h4 className="font-barlow font-bold text-red-500/90 text-[1.5rem] uppercase mb-8 pb-4 border-b border-red-500/20">
                {t.r1Title}
              </h4>
              <ul className="space-y-6">
                {t.r1Items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500/70 mr-4 font-bold text-xl">✕</span>
                    <span className="font-inter text-[#F0F0F0] text-[1.05rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Ronda 2 (Green/Blue style) */}
            <div className="flex-1 bg-[#1A1A1A] border-t-[4px] border-[#4A9FD4] rounded-[8px] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#4A9FD4]/5 pointer-events-none"></div>
              <h4 className="font-barlow font-bold text-[#4A9FD4] text-[1.5rem] uppercase mb-8 pb-4 border-b border-[#4A9FD4]/30">
                {t.r2Title}
              </h4>
              <ul className="space-y-6">
                {t.r2Items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#4A9FD4] mr-4 font-bold text-xl">✓</span>
                    <span className="font-inter text-[#F0F0F0] text-[1.05rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5. PRECIOS */}
        <div className="mb-32 fade-in-section delay-300">
          <h3 className="font-barlow font-black text-[#F0F0F0] text-[2.5rem] uppercase mb-12 text-center">
            {t.pricingTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-[8px] p-8 relative flex flex-col ${
                  plan.popular 
                    ? 'bg-[#1E4A6E] border-[2px] border-[#4A9FD4] md:-translate-y-4 shadow-xl' 
                    : 'bg-[#2A2A2A] border-[2px] border-transparent mt-4'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4A9FD4] text-[#0E0E0E] font-jetbrains font-bold text-[0.7rem] uppercase tracking-widest py-1 px-4 rounded-full">
                    {plan.popBadge}
                  </div>
                )}
                <h4 className="font-barlow font-bold text-[#F0F0F0] text-[1.5rem] uppercase mb-6 text-center border-b border-white/10 pb-4">
                  {plan.type}
                </h4>
                <div className="text-center mb-8 flex-grow">
                  <div className="font-barlow font-black text-[#4A9FD4] text-[2rem] leading-none mb-4">{plan.price}</div>
                  <div className="space-y-2 font-inter text-[#F0F0F0]/80">
                    <p className="flex items-center justify-center"><span className="w-5 mr-2 text-[#4A9FD4]">⏱</span> {plan.time}</p>
                    <p className="flex items-center justify-center"><span className="w-5 mr-2 text-[#4A9FD4]">👥</span> {plan.pax}</p>
                  </div>
                </div>
                <div className="mt-auto pt-6 text-center">
                  <a 
                    href="https://calendly.com/benjamh2/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-block font-barlow font-bold text-[0.95rem] py-3 px-8 rounded-[6px] transition-all uppercase tracking-wide w-full ${
                      plan.popular 
                        ? 'bg-[#4A9FD4] text-[#0E0E0E] hover:bg-[#F0F0F0]' 
                        : 'border-2 border-[#4A9FD4] text-[#4A9FD4] hover:bg-[#4A9FD4] hover:text-[#0E0E0E]'
                    }`}
                  >
                    {t.heroCta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CTA FINAL */}
        <div className="bg-[#2A2A2A] border-l-[4px] border-[#4A9FD4] rounded-[8px] p-8 md:p-16 text-center fade-in-section delay-400 max-w-4xl mx-auto">
          <h3 className="font-barlow font-black text-[#F0F0F0] text-[2rem] md:text-[2.5rem] uppercase mb-8">
            {t.finalTitle}
          </h3>
          
          {/* Formspree Form */}
          {state.succeeded ? (
            <div className="bg-[#1E4A6E] border border-[#4A9FD4]/30 rounded-[8px] p-8 text-center max-w-2xl mx-auto mb-8">
              <p className="font-barlow font-bold text-[#4A9FD4] text-[1.5rem] tracking-wide uppercase">
                ¡Mensaje enviado! Te contactamos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="w-full">
                <input type="text" name="name" id="name" required placeholder={t.finalForm.name} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full" />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div className="w-full">
                <input type="text" name="company" id="company" required placeholder={t.finalForm.company} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full" />
                <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div className="w-full md:col-span-2">
                <input type="email" name="email" id="email" required placeholder={t.finalForm.email} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              <div className="w-full md:col-span-2">
                <textarea name="message" id="message" required placeholder={t.finalForm.message} rows={3} className="bg-[#0E0E0E] border border-white/10 rounded-[6px] p-4 text-[#F0F0F0] focus:outline-none focus:border-[#4A9FD4] font-inter text-sm w-full"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
              
              <button type="submit" disabled={state.submitting} className="md:col-span-2 bg-[#4A9FD4] text-[#0E0E0E] font-barlow font-bold text-[1rem] py-[16px] rounded-[6px] hover:bg-[#F0F0F0] disabled:bg-[#4A9FD4]/50 disabled:cursor-not-allowed transition-colors duration-300 uppercase tracking-wide mt-2">
                {state.submitting ? "Enviando..." : t.finalForm.send}
              </button>
            </form>
          )}

          <div className="flex items-center justify-center my-8">
            <div className="h-px bg-white/10 w-16"></div>
            <span className="font-jetbrains text-[#5A8FA8] text-xs px-4 uppercase tracking-widest">O DIRECTAMENTE VÍA</span>
            <div className="h-px bg-white/10 w-16"></div>
          </div>

          <a 
            href="https://calendly.com/benjamh2/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1E4A6E] text-[#F0F0F0] font-barlow font-bold text-[1rem] py-[14px] px-[32px] rounded-[6px] hover:bg-[#4A9FD4] hover:text-[#0E0E0E] border border-[#4A9FD4]/30 transition-all duration-300 uppercase tracking-wide"
          >
            WhatsApp / Calendly
          </a>
        </div>

      </div>
    </div>
  );
};

export default LeanBuildSimulation;
