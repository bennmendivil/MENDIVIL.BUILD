import React, { useEffect } from 'react';

const TorreNazas: React.FC = () => {
  useEffect(() => {
    // Save original title and description
    const originalTitle = document.title;
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescriptionTag ? metaDescriptionTag.getAttribute('content') : '';

    // Update SEO tags
    document.title = "Torre Nazas — Anteproyecto Arquitectónico Conceptual | MENDIVIL.BUILD";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Torre Nazas: Anteproyecto conceptual explorando la visualización arquitectónica con IA para un desarrollo vertical de uso mixto en Torreón, Coahuila.');

    // Scroll to top when loading this new page
    window.scrollTo(0, 0);

    return () => {
      // Restore on unmount
      document.title = originalTitle;
      if (metaDescriptionTag && originalDescription !== null) {
        metaDescriptionTag.setAttribute('content', originalDescription);
      }
    };
  }, []);

  return (
    <div className="bg-deepBlack pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* 1. Breadcrumb */}
        <nav className="mb-12">
          <p className="text-concreteGray text-sm font-inter">
            <a href="/#services" className="hover:text-electricBlue transition-colors">Servicios</a>
            <span className="mx-3">/</span>
            <a href="/#services" className="hover:text-electricBlue transition-colors">IA Aplicada a Construcción</a>
            <span className="mx-3">/</span>
            <span className="text-titaniumWhite">Casos de estudio</span>
          </p>
        </nav>

        {/* 2. Hero */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start mb-24">
          <div className="flex-1 w-full flex flex-col justify-center lg:pt-10">
            <span className="text-electricBlue tracking-[0.2em] text-[12px] uppercase font-inter font-bold mb-4 block">
              CASO DE ESTUDIO — VISUALIZACIÓN ARQUITECTÓNICA CON IA
            </span>
            <h1 className="text-titaniumWhite text-4xl lg:text-5xl font-inter font-medium mb-4 leading-tight">
              Torre Nazas
            </h1>
            <p className="text-concreteGray text-lg mb-10 font-inter">
              Anteproyecto arquitectónico conceptual — Torreón, Coahuila
            </p>
            
            <div className="border-l-2 border-electricBlue bg-electricBlue/10 p-6 rounded-r">
              <p className="text-titaniumWhite/90 text-sm font-inter leading-relaxed">
                Concepto desarrollado por MENDIVIL.BUILD como demostración de capacidad técnica. No representa un desarrollo confirmado.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <img 
              src="/images/torre-nazas/torre_nazas_poster.jpg" 
              alt="Torre Nazas — póster conceptual del anteproyecto mostrando el diseño vertical" 
              className="w-full max-w-[400px] h-auto lg:h-[650px] aspect-[9/16] object-cover rounded-xl shadow-2xl shadow-electricBlue/10"
            />
          </div>
        </div>

        {/* 3. Bloque de introducción */}
        <div className="mb-20">
          <p className="text-titaniumWhite/90 text-lg leading-relaxed max-w-[700px] font-inter mb-6">
            Torre Nazas es una propuesta arquitectónica conceptual de uso mixto, desarrollada con inteligencia artificial para explorar el potencial de un desarrollo vertical junto al Estadio Corona, en Torreón, Coahuila. Cada imagen — desde el exterior hasta los espacios interiores y la secuencia constructiva completa — fue generada por MENDIVIL.BUILD como ejercicio de visualización arquitectónica aplicada a un sitio real.
          </p>
          <p className="text-titaniumWhite/90 text-lg leading-relaxed max-w-[700px] font-inter">
            Torre Nazas no tiene un desarrollador asignado todavía. Si eres propietario de terreno, desarrollador inmobiliario o inversionista interesado en explorar un proyecto de este tipo en la región, este anteproyecto está abierto a conversación.
          </p>
        </div>

        {/* 4. Galería */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-24">
          <figure className="flex flex-col group">
            <div className="overflow-hidden rounded-lg mb-4 bg-deepBlack">
              <img 
                src="/images/torre-nazas/torre_nazas_nightview.jpg" 
                alt="Torre Nazas — vista nocturna exterior mostrando la iluminación de la fachada" 
                loading="lazy"
                className="w-full aspect-[4/5] object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="text-concreteGray text-[11px] font-inter uppercase tracking-widest">Exterior nocturno</figcaption>
          </figure>
          
          <figure className="flex flex-col group">
            <div className="overflow-hidden rounded-lg mb-4 bg-anthracite">
              <img 
                src="/images/torre-nazas/torre_nazas_topview.jpg" 
                alt="Torre Nazas — vista aérea del conjunto arquitectónico y su entorno" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="text-concreteGray text-[11px] font-inter uppercase tracking-widest">Vista aérea</figcaption>
          </figure>

          <figure className="flex flex-col group">
            <div className="overflow-hidden rounded-lg mb-4 bg-anthracite">
              <img 
                src="/images/torre-nazas/torre_nazas_lobby.jpg" 
                alt="Torre Nazas — diseño interior del nivel comercial y lobby de acceso" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="text-concreteGray text-[11px] font-inter uppercase tracking-widest">Nivel comercial</figcaption>
          </figure>

          <figure className="flex flex-col group">
            <div className="overflow-hidden rounded-lg mb-4 bg-anthracite">
              <img 
                src="/images/torre-nazas/torre_nazas_departamento.jpg" 
                alt="Torre Nazas — interiorismo y acabados de las residencias" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="text-concreteGray text-[11px] font-inter uppercase tracking-widest">Residencias</figcaption>
          </figure>

          <figure className="flex flex-col group">
            <div className="overflow-hidden rounded-lg mb-4 bg-anthracite">
              <img 
                src="/images/torre-nazas/torre_nazas_infinitypool.jpg" 
                alt="Torre Nazas — diseño de terraza exterior con alberca infinity" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="text-concreteGray text-[11px] font-inter uppercase tracking-widest">Terraza y alberca</figcaption>
          </figure>

          <figure className="flex flex-col group">
            <div className="overflow-hidden rounded-lg mb-4 bg-anthracite">
              <img 
                src="/images/torre-nazas/torre_nazas_oficinas.jpg" 
                alt="Torre Nazas — interior de sala de juntas y espacios corporativos" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="text-concreteGray text-[11px] font-inter uppercase tracking-widest">Sala de juntas</figcaption>
          </figure>
        </div>

        {/* 5. CTA final */}
        <div className="w-full flex flex-col items-center py-16 border-t border-anthracite">
          <h2 className="text-titaniumWhite text-2xl lg:text-3xl font-inter font-medium mb-10 text-center max-w-2xl leading-tight">
            ¿Tienes un terreno o proyecto que necesita visualizarse así?
          </h2>
          <a 
            href="https://calendly.com/benjamh2/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-electricBlue text-electricBlue hover:bg-electricBlue hover:text-deepBlack transition-all duration-300 px-10 py-4 rounded font-inter uppercase tracking-[0.15em] text-sm font-bold"
          >
            Agenda una llamada
          </a>
        </div>

      </div>
    </div>
  );
};

export default TorreNazas;
