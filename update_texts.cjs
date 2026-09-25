const fs = require('fs');

let content = fs.readFileSync('src/components/WebAEC.tsx', 'utf-8');

// Chunk 1: DIFERENCIADOR
content = content.replace(
  /EL DIFERENCIADOR MENDIVIL\.BUILD[\s\S]*?"No necesitas explicarnos tu industria."\n            <\/p>\n          <\/div>/m,
  `EL DIFERENCIADOR MENDIVIL.BUILD
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
            {[
              "Lenguaje de la industria",
              "Enfoque técnico y comercial",
              "Sitios claros, rápidos y profesionales",
              "Diseño alineado con tu tipo de cliente",
              "Posibilidad de integrar automatización e IA"
            ].map((punto, i) => (
              <div key={i} className="bg-deepBlack border border-steelBlue/40 p-6 flex flex-col items-center justify-center text-center group hover:border-electricBlue transition-colors">
                <CheckCircle2 size={32} className="text-steelBlue group-hover:text-electricBlue mb-4 transition-colors" strokeWidth={1.5} />
                <h3 className="font-inter text-sm text-titaniumWhite">{punto}</h3>
              </div>
            ))}
          </div>`
);

// Chunk 2: TIPOS DE SOLUCIÓN
content = content.replace(
  /Desde una landing hasta <span className="text-electricBlue">una plataforma digital\.<\/span>[\s\S]*?\{item\.desc\}\n                <\/p>\n              <\/div>\n            \}\)\}/m,
  `Tipos de <span className="text-electricBlue">Solución</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "A",
                title: "LANDING AEC",
                desc: "Una página clara y profesional para presentar tu empresa, servicios y canales de contacto.",
              },
              {
                level: "B",
                title: "SITIO CORPORATIVO",
                desc: "Para empresas que necesitan mostrar experiencia, proyectos, especialidades y capacidad técnica.",
              },
              {
                level: "C",
                title: "PORTAFOLIO / PRESENCIA COMERCIAL",
                desc: "Una vitrina digital para presentar proyectos y generar confianza con prospectos, clientes o inversionistas.",
              },
              {
                level: "D",
                title: "WEB + AUTOMATIZACIÓN / IA",
                desc: "Sitios que además integran herramientas, formularios, automatizaciones o soluciones digitales específicas para tu negocio.",
                highlight: true
              }
            ].map((item, i) => (
              <div key={i} className={\`p-8 border flex flex-col h-full \${item.highlight ? 'border-electricBlue bg-electricBlue/5' : 'border-steelBlue/40 bg-deepBlack'}\`}>
                <div className={\`font-jetbrains text-xs font-bold mb-6 \${item.highlight ? 'text-electricBlue' : 'text-concreteGray'}\`}>
                  NIVEL {item.level}
                </div>
                <h3 className={\`font-barlow font-bold text-2xl uppercase tracking-wide mb-4 \${item.highlight ? 'text-white' : 'text-titaniumWhite'}\`}>
                  {item.title}
                </h3>
                <p className="text-concreteGray text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}`
);


// Chunk 3: PROCESO
content = content.replace(
  /\{ num: "01", title: "DESCUBRIMOS".*?\}\]\.map/s,
  `{ num: "01", title: "Diagnóstico", desc: "Entendemos tu empresa, tus clientes y lo que necesitas comunicar." },
                { num: "02", title: "Estructura y diseño", desc: "Definimos contenido, jerarquía y dirección visual." },
                { num: "03", title: "Desarrollo", desc: "Construimos el sitio y ajustamos contigo los detalles." },
                { num: "04", title: "Publicación", desc: "Entregamos y publicamos tu sitio listo para compartir y vender mejor.", gold: true }
              ].map`
);

// Chunk 4: INVERSION
content = content.replace(
  /PAQUETE 01<\/div>\n\s*<h3.*?LANDING AEC<\/h3>[\s\S]*?PAQUETE 03<\/div>\n\s*<h3.*?WEB \+ DIGITAL/s,
  `EMPEZAR</div>
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
              
              <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="w-full text-center border border-concreteGray text-titaniumWhite font-jetbrains text-sm tracking-wider py-4 hover:border-white transition-colors uppercase">
                QUIERO UNA LANDING
              </a>
            </div>

            <div className="bg-[#0F2236] border border-electricBlue p-8 flex flex-col h-full transform md:-translate-y-4 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-electricBlue"></div>
              <div className="font-jetbrains text-xs text-electricBlue mb-4 tracking-widest">CRECER</div>
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
              
              <a href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="w-full text-center bg-electricBlue text-white font-jetbrains text-sm tracking-wider py-4 hover:bg-white hover:text-deepBlack transition-colors uppercase font-bold">
                QUIERO MI SITIO
              </a>
            </div>

            <div className="bg-deepBlack border border-steelBlue/30 p-8 flex flex-col h-full hover:border-matteGold transition-colors">
              <div className="font-jetbrains text-xs text-concreteGray mb-4 tracking-widest">DIGITALIZAR</div>
              <h3 className="font-barlow font-bold text-3xl text-matteGold uppercase mb-2">WEB + AUTOMATIZACIÓN`
);

// Chunk 5: TIEMPOS ESTIMADOS
content = content.replace(
  /\* Los precios son de referencia y pueden variar dependiendo del alcance, número de páginas, funcionalidades e integraciones requeridas\.\n\s*<\/p>\n\s*<\/div>\n\s*<div className="mt-16 bg-deepBlack/s,
  `* Los precios son de referencia y pueden variar dependiendo del alcance, número de páginas, funcionalidades e integraciones requeridas.
            </p>
          </div>
          
          {/* TIEMPOS ESTIMADOS */}
          <div className="mt-16 bg-[#0A131F] border border-steelBlue/30 p-8 md:p-12 max-w-4xl mx-auto text-center shadow-xl">
            <h3 className="font-barlow font-bold text-2xl text-titaniumWhite uppercase tracking-wide mb-8">
              Tiempos Estimados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-jetbrains text-[#5A8FA8] text-sm tracking-widest uppercase mb-2">Landing AEC</h4>
                <p className="font-inter text-white font-medium text-lg">Desde 3–5 días</p>
              </div>
              <div>
                <h4 className="font-jetbrains text-[#5A8FA8] text-sm tracking-widest uppercase mb-2">Sitio Corporativo</h4>
                <p className="font-inter text-white font-medium text-lg">Desde 1–2 semanas</p>
              </div>
              <div>
                <h4 className="font-jetbrains text-[#5A8FA8] text-sm tracking-widest uppercase mb-2">Web + Automatización</h4>
                <p className="font-inter text-white font-medium text-lg">Según alcance y complejidad</p>
              </div>
            </div>
            <p className="font-inter text-xs text-concreteGray/80 mt-6 pt-6 border-t border-white/10">
              Nota: Los tiempos pueden variar según contenido, revisiones e integraciones requeridas.
            </p>
          </div>

          <div className="mt-16 bg-deepBlack`
);

// Chunk 6: FAQ
content = content.replace(
  /\{[\s]*q: "¿Necesito saber programación\?"[\s\S]*?\}\]\.map\(\(faq, i\) =>/s,
  `{
                q: "¿Necesito tener todo el contenido listo?",
                a: "No. Podemos ayudarte a organizar y redactar el contenido a partir de la información de tu empresa."
              },
              {
                q: "¿Pueden ayudarme con los textos?",
                a: "Sí. Podemos estructurar el contenido para que sea claro, técnico y comercial."
              },
              {
                q: "¿Mi sitio se verá bien en celular?",
                a: "Sí. Todos los sitios se diseñan para funcionar correctamente en desktop, tablet y móvil."
              },
              {
                q: "¿Pueden integrar automatizaciones o IA?",
                a: "Sí. Dependiendo del proyecto, podemos integrar formularios, reportes, herramientas y flujos automatizados."
              }
            ].map((faq, i) =>`
);


// Chunk 7: CONTACTO
content = content.replace(
  /Tu próximo proyecto merece una mejor presencia digital\.[\s\S]*?\{state\.submitting \? t\.webAecContact\.sending : t\.webAecContact\.submit \+ ' →'\}\n\s*<\/button>\n\s*<\/form>/s,
  `TU EMPRESA YA CONSTRUYE.<br/>AHORA HAGAMOS QUE SE VEA.
          </h2>
          
          <div className="font-inter text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Cuéntame qué tipo de empresa tienes y qué necesitas mostrar. Podemos ayudarte a convertir tu experiencia en una presencia digital más clara, sólida y profesional.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contacto-web-aec" onClick={(e) => scrollToSection(e, "contacto-web-aec")} className="inline-flex justify-center items-center bg-deepBlack text-white font-jetbrains text-sm tracking-wider py-4 px-8 hover:bg-white hover:text-deepBlack transition-colors uppercase font-bold shadow-2xl" > SOLICITAR PROPUESTA →
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
                    className="flex items-center justify-start space-x-4 px-6 py-4 border border-white/10 hover:border-[#25D366] hover:bg-white/5 transition-all group"
                  >
                    <MessageCircle size={24} className="text-concreteGray group-hover:text-[#25D366] transition-colors" />
                    <div className="flex flex-col">
                      <span className="font-jetbrains text-titaniumWhite text-sm tracking-wider">WhatsApp Business</span>
                      <span className="font-inter text-concreteGray text-xs mt-1">+52 871 217 3821</span>
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:benjamin@mendivil.build" 
                    className="flex items-center justify-start space-x-4 px-6 py-4 border border-white/10 hover:border-electricBlue hover:bg-white/5 transition-all group"
                  >
                    <Mail size={24} className="text-concreteGray group-hover:text-electricBlue transition-colors" />
                    <span className="font-jetbrains text-titaniumWhite text-sm tracking-wider">benjamin@mendivil.build</span>
                  </a>

                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-10 shadow-2xl relative">
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
                      <option value="" disabled selected>¿Qué necesitas?</option>
                      {["Landing AEC", "Sitio Corporativo", "Portafolio", "Web + Automatización", "No estoy seguro"].map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button type="submit" disabled={state.submitting} className="w-full bg-electricBlue text-white font-jetbrains font-bold text-sm tracking-widest py-5 hover:bg-white hover:text-deepBlack disabled:bg-electricBlue/50 disabled:cursor-not-allowed transition-colors duration-300 uppercase mt-4">
                    {state.submitting ? "ENVIANDO..." : "SOLICITAR PROPUESTA →"}
                  </button>
                </form>`
);

fs.writeFileSync('src/components/WebAEC.tsx', content);
