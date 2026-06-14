import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, BarChart2, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LeanConstruction: React.FC = () => {
  const { language } = useLanguage();
  const containerRef = useIntersectionObserver({ threshold: 0.1 });
  const isEs = language === 'ES';

  const t = {
    // 1
    title: isEs ? "LEAN CONSTRUCTION EN CAMPO REAL" : "LEAN CONSTRUCTION IN THE REAL FIELD",
    subtitle: isEs ? "No en el salón de clases.\nEn obra. Con resultados medibles." : "Not in the classroom.\nOn site. With measurable results.",
    
    // 2 Left
    badge: isEs ? "5+ AÑOS DE IMPLEMENTACIÓN EN CAMPO" : "5+ YEARS OF FIELD IMPLEMENTATION",
    paragraph: isEs 
      ? "Implementé Last Planner® System, TAKT Planning y metodología Kanban en proyectos industriales de clase mundial desde 2021, coordinando contratistas, superintendentes y equipos multidisciplinarios de hasta 200+ personas en proyectos con presupuestos de hasta $75.9M USD."
      : "Implemented Last Planner® System, TAKT Planning and Kanban methodology on world-class industrial projects since 2021, coordinating contractors, superintendents and multidisciplinary teams of 200+ people on projects with budgets up to $75.9M USD.",
    metrics: [
      {
        num: "+85%",
        desc: isEs ? "PPC promedio en mis obras" : "Average PPC on my projects"
      },
      {
        num: "5+ años",
        desc: isEs ? "Implementación continua en campo" : "Continuous field implementation"
      },
      {
        num: "TAKT + LPS",
        desc: isEs ? "Metodologías activas en simultáneo" : "Methodologies active simultaneously"
      },
      {
        num: "$75.9M",
        desc: isEs ? "USD en proyectos con Lean activo" : "USD in projects with active Lean"
      }
    ],

    // 3 Blocks
    implementTitle: isEs ? "LO QUE IMPLEMENTAMOS EN TU OBRA" : "WHAT WE IMPLEMENT ON YOUR SITE",
    implementBlocks: [
      {
        title: isEs ? "Tu equipo sabe exactamente qué construir cada día" : "Your team knows exactly what to build every day",
        desc: isEs 
          ? "Tablero de gestión visual en obra con plan de trabajo semanal *(WWP)*, agenda de reunión diaria *(daily huddle)*, tablero de entregas de material, tablero de inspecciones y tablero de seguimiento *(Parking Lot)*. Todo visible, todo actualizado, sin excusas." 
          : "Visual management board on site with weekly work plan *(WWP)*, daily huddle agenda, material delivery board, inspection board and follow-up board *(Parking Lot)*. Everything visible, everything updated, no excuses.",
        badge: "Visual Management · WWP · Daily Huddle"
      },
      {
        title: isEs ? "Eliminamos lo que detiene tu obra antes de que la pare" : "We eliminate what stops your project before it does",
        desc: isEs
          ? "Identificamos, registramos y resolvemos restricciones — permisos, materiales, ingeniería, subcontratistas — antes de que bloqueen el frente de trabajo. Con programa de 6 semanas *(6 Week Look Ahead)* siempre actualizado."
          : "We identify, log and resolve constraints — permits, materials, engineering, subcontractors — before they block the work front. With an always-updated 6 Week Look Ahead.",
        badge: "Registro de restricciones · 6 Week Look Ahead"
      },
      {
        title: isEs ? "El material llega cuando se necesita, ni antes ni después" : "Material arrives exactly when needed, not before, not after",
        desc: isEs
          ? "Coordinamos entregas justo a tiempo *(Just in Time)* para evitar aglomeración en sitio, pérdida de material y retrasos por falta de insumos en el momento crítico."
          : "We coordinate just-in-time deliveries to avoid site congestion, material loss and delays due to missing supplies at critical moments.",
        badge: "Justo a tiempo (Just in Time) · Material Delivery"
      },
      {
        title: isEs ? "Identificamos y eliminamos lo que tu proyecto no necesita" : "We identify and eliminate what your project doesn't need",
        desc: isEs
          ? "Analizamos los 8 tipos de desperdicio en tu proceso constructivo — sobreproducción, esperas, transporte innecesario, movimientos, defectos, inventario excesivo, sobreprocesamiento y talento no utilizado."
          : "We analyze the 8 types of waste in your construction process — overproduction, waiting, unnecessary transport, motion, defects, excess inventory, overprocessing and unused talent.",
        badge: "8 tipos de desperdicio · Lean Edge"
      },
      {
        title: isEs ? "Un lugar para cada cosa. Cada cosa en su lugar." : "A place for everything. Everything in its place.",
        desc: isEs
          ? "Implementamos 5S en los frentes de trabajo para reducir accidentes, mejorar la productividad y crear una cultura de orden que el equipo mantiene por convicción, no por obligación. Complementado con recorridos en campo *(Gemba Walk)* para verificar condiciones reales de trabajo."
          : "We implement 5S on work fronts to reduce accidents, improve productivity and create a culture of order the team maintains by conviction, not obligation. Complemented with field walks *(Gemba Walk)* to verify real working conditions.",
        badge: "5S · Recorrido en campo (Gemba Walk) · Control visual"
      }
    ],

    // 4 Includes
    includesTitle: isEs ? "¿QUÉ INCLUYE LA CONSULTORÍA?" : "WHAT DOES THE CONSULTATION INCLUDE?",
    includes: [
      {
        icon: <Users className="text-[#4A9FD4]" size={32} />,
        title: isEs ? "DIAGNÓSTICO INICIAL" : "INITIAL DIAGNOSIS",
        desc: isEs 
          ? "Evaluación del estado actual de planificación y ejecución en obra. Identificación de desperdicios, restricciones y oportunidades de mejora en tu proyecto." 
          : "Assessment of current planning and execution on site. Identification of waste, constraints and improvement opportunities."
      },
      {
        icon: <BarChart2 className="text-[#4A9FD4]" size={32} />,
        title: isEs ? "IMPLEMENTACIÓN EN CAMPO" : "FIELD IMPLEMENTATION",
        desc: isEs
          ? "Instalación del tablero de gestión visual, arranque de reuniones diarias *(daily huddle)*, plan colaborativo *(Pull Plan)* por edificio o frente de trabajo, capacitación al equipo con dinámica presencial."
          : "Visual management board setup, daily huddle kickoff, Pull Plan per building or work front, on-site team training with hands-on dynamics."
      },
      {
        icon: <TrendingUp className="text-[#4A9FD4]" size={32} />,
        title: isEs ? "SEGUIMIENTO Y MÉTRICAS" : "MONITORING AND METRICS",
        desc: isEs
          ? "Seguimiento semanal de PPC *(Porcentaje de Plan Cumplido)*, análisis de varianzas, reuniones Last Planner® con contratistas y reporte mensual de desempeño al cliente."
          : "Weekly PPC tracking, variance analysis, Last Planner® meetings with contractors and monthly performance report to client."
      }
    ],

    // 5 Lean + IA
    iaBadge: "⚡ DIFERENCIADOR EXCLUSIVO",
    iaTitle: isEs ? "LEAN + INTELIGENCIA ARTIFICIAL" : "LEAN + ARTIFICIAL INTELLIGENCE",
    iaSubtitle: isEs ? "La consultoría Lean del futuro.\nDatos reales. Decisiones precisas." : "The future of Lean consulting.\nReal data. Precise decisions.",
    iaPara: isEs 
      ? "No solo implemento Lean. Lo potencio con inteligencia artificial para que tu equipo tome mejores decisiones, más rápido, con información real de tu proyecto."
      : "I don't just implement Lean. I enhance it with artificial intelligence so your team makes better decisions, faster, with real project data.",
    iaClose: isEs ? "No solo implemento Lean. Lo potencio con inteligencia artificial." : "I don't just implement Lean. I enhance it with AI.",
    
    iaStack: [
      {
        tool: "Claude AI",
        desc: isEs ? "Análisis técnico, documentación y reportes automáticos de obra" : "Technical analysis, documentation and automatic site reports"
      },
      {
        tool: "Agentes IA personalizados",
        desc: isEs 
          ? "Asistentes inteligentes para superintendentes y PMs — consulta normativas, procesos de calidad y criterios técnicos en segundos, directo desde campo" 
          : "Smart assistants for superintendents and PMs — query standards, quality processes and technical criteria in seconds, directly from the field"
      },
      {
        tool: "WebApp Lean",
        desc: isEs
          ? "Herramienta digital desarrollada a medida para tu proyecto: seguimiento de PPC, restricciones y plan semanal — sin hojas de Excel"
          : "Custom-built digital tool for your project: PPC tracking, constraints and weekly plan — no spreadsheets needed"
      },
      {
        tool: "IA Generativa",
        desc: isEs
          ? "Informes de avance, planes de acción y reportes ejecutivos generados automáticamente"
          : "Progress reports, action plans and executive reports generated automatically"
      }
    ],

    // 5.5 Simulation Workshop
    simBadge: "NUEVO",
    simTitle: "Lean Build Simulation",
    simSubtitle: isEs 
      ? "Taller vivencial de TAKT Planning para superintendentes" 
      : "Hands-on TAKT Planning workshop for superintendents",
    simDesc: isEs
      ? "Tus equipos de obra construyen un edificio dos veces: sin plan y con TAKT. Ven la diferencia en sus propios datos."
      : "Your field teams build a project twice — without a plan, and with TAKT. They see the difference in their own numbers.",
    simPills: [
      "2.5 hrs",
      isEs ? "18-36 personas" : "18-36 people",
      isEs ? "2 rondas" : "2 rounds"
    ],
    simCta: isEs ? "Conocer el taller" : "Learn more",

    // 6 Investment
    pricingTitle: isEs ? "INVERSIÓN" : "INVESTMENT",
    pill1Label: isEs ? "Diagnóstico + arranque" : "Diagnosis + kickoff",
    pill1Value: "Desde $35,000 MXN",
    pill1Note: isEs ? "Según alcance y tamaño del proyecto" : "Based on project scope and size",
    pill2Label: isEs ? "Acompañamiento mensual" : "Monthly retainer",
    pill2Value: "Desde $18,000 MXN/mes",
    pill2Note: isEs ? "Mínimo 3 meses de contrato" : "Minimum 3-month contract",
    pricingNote: isEs ? "Presencial en México · Remoto disponible para capacitaciones" : "On-site in Mexico · Remote available for training sessions",
    cta: isEs ? "AGENDA UNA LLAMADA →" : "SCHEDULE A CALL →"
  };

  const images = [
    '/lean-tablero-01.jpg',
    '/lean-tablero-02.jpg',
    '/lean-touchplan-01.jpg',
    '/lean-ppc-01.jpg',
    '/lean-tablero-03.jpg'
  ];

  // Helper to render bold text based on asterisks
  const renderText = (text: string) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={index} className="font-bold text-[#F0F0F0]">{part.slice(1, -1)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="lean" className="py-24 bg-[#0E0E0E] relative w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
        
        {/* ① Header */}
        <div className="mb-12 text-center md:text-left fade-in-section">
          <h2 className="font-barlow font-black text-[2.5rem] text-[#F0F0F0] uppercase tracking-wide leading-tight">
            {t.title}
          </h2>
          <p className="font-inter italic text-[#4A9FD4] text-[1.1rem] mt-2 mb-[32px] whitespace-pre-line">
            {t.subtitle}
          </p>
        </div>

        {/* ② Top Block - 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24 fade-in-section delay-100">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col items-start">
            <div className="bg-[#4A9FD4]/10 border border-[#4A9FD4]/30 rounded-[4px] py-[4px] px-[12px] mb-[16px]">
              <span className="font-jetbrains text-[#4A9FD4] text-[0.65rem] tracking-[3px] uppercase">
                {t.badge}
              </span>
            </div>
            <p className="font-inter text-[#5A8FA8] text-[0.95rem] leading-[1.8] mb-[24px]">
              {t.paragraph}
            </p>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {t.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#2A2A2A] rounded-[6px] p-[16px] border-t-[2px] border-[#4A9FD4]">
                  <div className="font-barlow font-bold text-[#F0F0F0] text-2xl md:text-3xl mb-1">{m.num}</div>
                  <div className="font-inter text-[#5A8FA8] text-sm leading-tight">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Gallery */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-[8px]">
              {/* Main Photo - Full Width */}
              <div className="col-span-2 group relative overflow-hidden rounded-[6px] cursor-pointer">
                <img 
                  src="/lean-huddle-01.jpg" 
                  alt="Lean Huddle" 
                  className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[#4A9FD4]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              {/* Remaining Photos */}
              {images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-[6px] cursor-pointer">
                  <img 
                    src={img} 
                    alt={`Lean photo ${idx + 1}`} 
                    className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[#4A9FD4]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ③ What we implement */}
        <div className="mb-24 fade-in-section delay-200">
          <h3 className="font-barlow font-bold text-[#F0F0F0] text-[1.5rem] uppercase mb-[24px]">
            {t.implementTitle}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.implementBlocks.map((block, idx) => (
              <div 
                key={idx} 
                className={`bg-[#2A2A2A] rounded-[6px] p-[20px] md:px-[24px] border-l-[3px] border-[#4A9FD4] ${idx === 4 ? 'lg:col-span-2' : ''}`}
              >
                <h4 className="font-barlow font-bold text-[#F0F0F0] text-[1.2rem] md:text-[1.3rem] mb-3 leading-tight uppercase">
                  {block.title}
                </h4>
                <p className="font-inter text-[#5A8FA8] text-[0.9rem] leading-relaxed mb-4">
                  {renderText(block.desc)}
                </p>
                <div className="inline-block bg-[#4A9FD4]/10 border border-[#4A9FD4]/20 rounded-[3px] py-[2px] px-[8px]">
                  <span className="font-jetbrains text-[#4A9FD4] text-[0.6rem] uppercase tracking-wider">
                    {block.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ④ What does consultation include */}
        <div className="mb-24 fade-in-section delay-200">
          <h3 className="font-barlow font-bold text-[#F0F0F0] text-[1.3rem] uppercase mb-[20px]">
            {t.includesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.includes.map((item, idx) => (
              <div key={idx} className="bg-[#2A2A2A] rounded-[6px] p-[20px] border-t-[3px] border-[#4A9FD4]">
                <div className="mb-4">{item.icon}</div>
                <h4 className="font-barlow font-bold text-[#F0F0F0] text-lg mb-2 tracking-wide uppercase">{item.title}</h4>
                <p className="font-inter text-[#5A8FA8] text-[0.9rem] leading-relaxed">{renderText(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ⑤ Premium Lean + IA */}
        <div className="w-full bg-[#1E4A6E] border-[2px] border-[#4A9FD4] rounded-[8px] p-[36px] mt-[24px] fade-in-section delay-300">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column - Text */}
            <div className="flex-1 flex flex-col items-start">
              <div className="bg-[#4A9FD4]/15 border border-[#4A9FD4]/40 rounded-[3px] py-[3px] px-[10px] mb-[12px]">
                <span className="font-jetbrains text-[#4A9FD4] text-[0.6rem] tracking-[3px] uppercase">
                  {t.iaBadge}
                </span>
              </div>
              <h3 className="font-barlow font-black text-[#F0F0F0] text-[1.6rem] uppercase tracking-wide my-[12px]">
                {t.iaTitle}
              </h3>
              <p className="font-inter italic text-[#5A8FA8] text-[0.95rem] whitespace-pre-line mb-[20px]">
                {t.iaSubtitle}
              </p>
              <p className="font-inter text-[#5A8FA8] text-[0.9rem] leading-[1.8]">
                {t.iaPara}
              </p>
              <p className="font-barlow font-bold text-[#F0F0F0] text-[1.1rem] mt-[20px] uppercase">
                {t.iaClose}
              </p>
            </div>

            {/* Right Column - IA Stack */}
            <div className="flex-1 flex flex-col gap-4">
              {t.iaStack.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0E0E0E] rounded-[6px] p-[20px] font-jetbrains text-sm fade-in-section"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-start mb-2">
                    <span className="text-[#4A9FD4] mr-2">{'>'}</span>
                    <span className="text-[#4A9FD4] font-bold">{item.tool}</span>
                    <span className="text-[#4A9FD4]/30 ml-2 hidden sm:inline">....................</span>
                  </div>
                  <p className="text-[#5A8FA8] pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 5.5 Simulation Workshop */}
        <div className="w-full bg-[#2A2A2A] border-[2px] border-transparent hover:border-[#4A9FD4]/30 rounded-[8px] p-[32px] md:p-[40px] mt-[24px] fade-in-section delay-300 transition-all duration-300 hover:-translate-y-1 shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-[#4A9FD4]/15 border border-[#4A9FD4]/40 rounded-[3px] py-[3px] px-[10px] mb-[12px]">
                <span className="font-jetbrains text-[#4A9FD4] text-[0.6rem] tracking-[3px] uppercase">
                  {t.simBadge}
                </span>
              </div>
              <h3 className="font-barlow font-black text-[#F0F0F0] text-[1.6rem] md:text-[2rem] uppercase tracking-wide mb-[8px]">
                {t.simTitle}
              </h3>
              <p className="font-inter italic text-[#4A9FD4] text-[1rem] md:text-[1.1rem] mb-[16px]">
                {t.simSubtitle}
              </p>
              <p className="font-inter text-[#5A8FA8] text-[0.95rem] leading-[1.6] mb-[24px] max-w-2xl mx-auto md:mx-0">
                {t.simDesc}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {t.simPills.map((pill, idx) => (
                  <div key={idx} className="bg-[#0E0E0E] rounded-[4px] px-[16px] py-[8px] border border-[#4A9FD4]/20">
                    <span className="font-jetbrains text-[#F0F0F0] text-[0.8rem]">{pill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center justify-center self-center md:self-end mt-4 md:mt-0">
              <a 
                href="/lean-build-simulation"
                className="inline-block bg-[#4A9FD4] text-[#0E0E0E] font-barlow font-bold text-[1rem] py-[14px] px-[32px] rounded-[6px] hover:bg-[#1E4A6E] hover:border-[#4A9FD4] hover:text-white border-[2px] border-transparent transition-all duration-300 uppercase tracking-wide"
              >
                {t.simCta}
              </a>
            </div>
          </div>
        </div>

        {/* ⑥ Investment */}
        <div className="bg-[#1E4A6E] rounded-[8px] p-[32px] mt-[32px] text-center fade-in-section delay-400 flex flex-col items-center">
          <h3 className="font-barlow font-black text-[#F0F0F0] text-[1.5rem] uppercase mb-[16px] tracking-wide">
            {t.pricingTitle}
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 w-full mb-6">
            {/* Pill 1 */}
            <div className="flex flex-col items-center">
              <span className="font-inter text-[#F0F0F0]/80 text-sm mb-1">{t.pill1Label}</span>
              <span className="font-barlow font-bold text-[#4A9FD4] text-[1.8rem] leading-none">{t.pill1Value}</span>
              <span className="font-jetbrains text-[#5A8FA8] text-[0.6rem] mt-2">{t.pill1Note}</span>
            </div>
            
            {/* Pill 2 */}
            <div className="flex flex-col items-center">
              <span className="font-inter text-[#F0F0F0]/80 text-sm mb-1">{t.pill2Label}</span>
              <span className="font-barlow font-bold text-[#4A9FD4] text-[1.8rem] leading-none">{t.pill2Value}</span>
              <span className="font-jetbrains text-[#5A8FA8] text-[0.6rem] mt-2">{t.pill2Note}</span>
            </div>
          </div>
          
          <p className="font-jetbrains text-[#5A8FA8] text-[0.65rem] tracking-[2px] uppercase mb-[24px] whitespace-pre-line text-center">
            {t.pricingNote}
          </p>
          
          <a 
            href="https://wa.me/524441418709" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#4A9FD4] text-[#0E0E0E] font-barlow font-bold text-[1rem] py-[14px] px-[32px] rounded-[6px] hover:bg-[#1E4A6E] hover:border-[#4A9FD4] hover:text-white border-[2px] border-transparent transition-all duration-300 uppercase tracking-wide"
          >
            {t.cta}
          </a>
        </div>

      </div>
    </section>
  );
};

export default LeanConstruction;
