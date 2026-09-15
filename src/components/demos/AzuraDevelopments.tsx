import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Menu, X, ChevronRight, ChevronLeft
} from 'lucide-react';

// Dictionaries
const dict = {
  ES: {
    nav: {
      items: ["AZURA", "DESARROLLOS", "LIFESTYLE", "INVERSIÓN", "CONTACTO"],
      cta: "EXPLORAR PROPIEDADES"
    },
    hero: {
      eyebrow: "AZURA DEVELOPMENTS",
      h1: "Diseñamos lugares para vivir extraordinariamente.",
      p: "Desarrollos residenciales donde arquitectura, paisaje y estilo de vida convergen.",
      cta1: "EXPLORAR DESARROLLOS",
      cta2: "DESCUBRIR AZURA"
    },
    manifesto: {
      h2: "No desarrollamos solamente propiedades.\nCreamos lugares.",
      p: "Cada proyecto comienza entendiendo el lugar: su paisaje, su arquitectura, su mercado y la forma en que las personas quieren vivir."
    },
    portfolio: {
      title: "Desarrollos",
      items: [
        {
          id: "azura-cabo",
          name: "AZURA CABO RESIDENCES",
          loc: "Los Cabos, Baja California Sur, México",
          type: "Luxury Residential",
          concept: "Colección de villas contemporáneas integradas al paisaje desértico y al océano.",
          prog: ["24 VILLAS", "3–5 BEDROOMS", "320–580 m²", "PRIVATE POOLS", "OCEAN VIEWS"],
          img: "/demos/azura/azura_hero_cabo_1789443796677.png"
        },
        {
          id: "casa-mar",
          name: "CASA MAR CARIBBEAN",
          loc: "Riviera Maya, Quintana Roo, México",
          type: "Tropical Residential",
          concept: "Residencias contemporáneas diseñadas alrededor de vegetación tropical, agua y vida interior/exterior.",
          prog: ["18 RESIDENCES", "2–4 BEDROOMS", "210–420 m²", "PRIVATE TERRACES", "RESORT AMENITIES"],
          img: "/demos/azura/casa-mar-caribbean-villa.webp"
        },
        {
          id: "sierra-valle",
          name: "SIERRA VALLE",
          loc: "Valle de Guadalupe, Baja California, México",
          type: "Low Density Residential",
          concept: "Residencias de baja densidad integradas al paisaje natural del valle.",
          prog: ["14 RESIDENCES", "2–4 BEDROOMS", "240–460 m²", "PRIVATE COURTYARDS", "LANDSCAPE VIEWS"],
          img: "/demos/azura/azura_sierra_1789444623454.png"
        }
      ]
    },
    featured: {
      title: "Donde la arquitectura encuentra al Pacífico.",
      btn: "EXPLORAR AZURA CABO →"
    },
    masterplan: {
      title: "Diseñado como una comunidad.",
      disclaimer: "Disponibilidad ficticia utilizada exclusivamente para demostración.",
      states: {
        avail: "DISPONIBLE",
        res: "RESERVADA",
        sold: "VENDIDA"
      }
    },
    residences: {
      title: "Arquitectura diseñada para vivir.",
    },
    lifestyle: {
      title: "Una forma diferente de vivir.",
    },
    location: {
      title: "Los Cabos, naturalmente.",
      disclaimer: "Ubicación conceptual para fines demostrativos.",
      refs: ["OCEAN", "BEACH", "MARINA", "GOLF", "DINING", "AIRPORT"]
    },
    lifecycle: {
      title: "Del terreno a la vida.",
      steps: ["LAND", "CONCEPT", "DESIGN", "PRE-SALES", "CONSTRUCTION", "DELIVERY"]
    },
    investment: {
      title: "Desarrollo con disciplina.",
      disclaimer: "Información financiera conceptual utilizada exclusivamente para demostración. No constituye una oferta, recomendación ni oportunidad real de inversión.",
      data: [
        { label: "DEVELOPMENT COST", val: "$420 M MXN" },
        { label: "PROJECTED REVENUE", val: "$565 M MXN" },
        { label: "PROJECTED DEVELOPMENT MARGIN", val: "25.7%" },
        { label: "AVERAGE RESIDENCE VALUE", val: "$23.5 M MXN" },
        { label: "PROJECTED ABSORPTION", val: "24 MONTHS" },
        { label: "CONSTRUCTION PERIOD", val: "20 MONTHS" }
      ]
    },
    opp: {
      title: "Creando valor a través del lugar."
    },
    contact: {
      title: "Descubre AZURA.",
      form: {
        name: "NOMBRE",
        email: "EMAIL",
        phone: "TELÉFONO",
        interest: "INTERÉS",
        msg: "MENSAJE",
        btn: "SOLICITAR INFORMACIÓN →",
        success: "DEMO — En un desarrollo real esta solicitud sería enviada al equipo comercial."
      },
      info: {
        disclaimer: "Datos de contacto ficticios para fines demostrativos."
      }
    },
    mendivilCTA: {
      title: "¿Tu desarrollo inmobiliario necesita una experiencia digital como ésta?",
      desc: "MENDIVIL.BUILD desarrolla sitios web y experiencias digitales especializadas para empresas de arquitectura, ingeniería, construcción y desarrollo inmobiliario.",
      btn: "CONOCE WEB AEC →"
    },
    footer: {
      disclosure: "AZURA DEVELOPMENTS es una empresa ficticia creada exclusivamente por MENDIVIL.BUILD como demostración conceptual de diseño y desarrollo web para el sector inmobiliario. Todos los desarrollos, propiedades, renders, ubicaciones específicas, cifras, disponibilidades y métricas financieras mostradas son ficticias."
    }
  },
  EN: {
    nav: {
      items: ["AZURA", "DEVELOPMENTS", "LIFESTYLE", "INVESTMENT", "CONTACT"],
      cta: "EXPLORE RESIDENCES"
    },
    hero: {
      eyebrow: "AZURA DEVELOPMENTS",
      h1: "Designed for the way life should feel.",
      p: "Residential developments where architecture, landscape, and lifestyle converge.",
      cta1: "EXPLORE DEVELOPMENTS",
      cta2: "DISCOVER AZURA"
    },
    manifesto: {
      h2: "We don't just develop properties.\nWe create places.",
      p: "Every project begins by understanding the place: its landscape, its architecture, its market, and the way people want to live."
    },
    portfolio: {
      title: "Developments",
      items: [
        {
          id: "azura-cabo",
          name: "AZURA CABO RESIDENCES",
          loc: "Los Cabos, Baja California Sur, Mexico",
          type: "Luxury Residential",
          concept: "Collection of contemporary villas integrated into the desert landscape and ocean.",
          prog: ["24 VILLAS", "3–5 BEDROOMS", "320–580 m²", "PRIVATE POOLS", "OCEAN VIEWS"],
          img: "/demos/azura/azura_hero_cabo_1789443796677.png"
        },
        {
          id: "casa-mar",
          name: "CASA MAR CARIBBEAN",
          loc: "Riviera Maya, Quintana Roo, Mexico",
          type: "Tropical Residential",
          concept: "Contemporary residences designed around tropical vegetation, water, and indoor/outdoor living.",
          prog: ["18 RESIDENCES", "2–4 BEDROOMS", "210–420 m²", "PRIVATE TERRACES", "RESORT AMENITIES"],
          img: "/demos/azura/casa-mar-caribbean-villa.webp"
        },
        {
          id: "sierra-valle",
          name: "SIERRA VALLE",
          loc: "Valle de Guadalupe, Baja California, Mexico",
          type: "Low Density Residential",
          concept: "Low density residences integrated into the natural landscape of the valley.",
          prog: ["14 RESIDENCES", "2–4 BEDROOMS", "240–460 m²", "PRIVATE COURTYARDS", "LANDSCAPE VIEWS"],
          img: "/demos/azura/azura_sierra_1789444623454.png"
        }
      ]
    },
    featured: {
      title: "Where architecture meets the Pacific.",
      btn: "EXPLORE AZURA CABO →"
    },
    masterplan: {
      title: "Designed as a community.",
      disclaimer: "Fictional availability used exclusively for demonstration.",
      states: {
        avail: "AVAILABLE",
        res: "RESERVED",
        sold: "SOLD"
      }
    },
    residences: {
      title: "Architecture made for living.",
    },
    lifestyle: {
      title: "Life, considered.",
    },
    location: {
      title: "Los Cabos, naturally.",
      disclaimer: "Conceptual location for demonstration purposes.",
      refs: ["OCEAN", "BEACH", "MARINA", "GOLF", "DINING", "AIRPORT"]
    },
    lifecycle: {
      title: "From land to living.",
      steps: ["LAND", "CONCEPT", "DESIGN", "PRE-SALES", "CONSTRUCTION", "DELIVERY"]
    },
    investment: {
      title: "Development with discipline.",
      disclaimer: "Conceptual financial information for demonstration purposes only. This does not constitute an investment offering or recommendation.",
      data: [
        { label: "DEVELOPMENT COST", val: "$420 M MXN" },
        { label: "PROJECTED REVENUE", val: "$565 M MXN" },
        { label: "PROJECTED DEVELOPMENT MARGIN", val: "25.7%" },
        { label: "AVERAGE RESIDENCE VALUE", val: "$23.5 M MXN" },
        { label: "PROJECTED ABSORPTION", val: "24 MONTHS" },
        { label: "CONSTRUCTION PERIOD", val: "20 MONTHS" }
      ]
    },
    opp: {
      title: "Creating value through place."
    },
    contact: {
      title: "Discover AZURA.",
      form: {
        name: "NAME",
        email: "EMAIL",
        phone: "PHONE",
        interest: "INTEREST",
        msg: "MESSAGE",
        btn: "REQUEST INFORMATION →",
        success: "DEMO — In a real development, this request would be sent to the sales team."
      },
      info: {
        disclaimer: "Fictional contact data for demonstration purposes."
      }
    },
    mendivilCTA: {
      title: "Does your real estate development need a digital experience like this?",
      desc: "MENDIVIL.BUILD develops specialized websites and digital experiences for architecture, engineering, construction, and real estate development companies.",
      btn: "DISCOVER WEB AEC →"
    },
    footer: {
      disclosure: "AZURA DEVELOPMENTS is a fictional company created exclusively by MENDIVIL.BUILD as a conceptual demonstration of web design and development for the real estate sector. All developments, properties, renders, specific locations, figures, availability, and financial metrics shown are fictional."
    }
  }
};

const images = {
  hero: "/demos/azura/azura_hero_cabo_1789443796677.png",
  manifesto: "/demos/azura/azura_manifesto_1789443810367.png",
  masterplan: "/demos/azura/azura_masterplan_1789444205717.png",
  greatroom: "/demos/azura/azura-cabo-great-room.webp",
  lifestyle: "/demos/azura/azura_lifestyle_1789444485301.png",
  pool: "/demos/azura/azura_gallery_pool_1789444861877.png",
  bedroom: "/demos/azura/azura_gallery_bed_1789444903367.png"
};

const galleryImages = [
  images.greatroom,
  images.pool,
  images.bedroom,
  images.lifestyle,
  images.hero,
  images.manifesto
];

const masterplanHotspots = [
  { id: 1, top: "45%", left: "30%", state: "avail", label: "VILLA 03", beds: "4 BEDROOMS", baths: "4.5 BATHROOMS", area: "465 m²", views: "OCEAN VIEW" },
  { id: 2, top: "60%", left: "65%", state: "sold", label: "VILLA 14", beds: "5 BEDROOMS", baths: "5.5 BATHROOMS", area: "580 m²", views: "PANORAMIC OCEAN" },
  { id: 3, top: "75%", left: "40%", state: "res", label: "VILLA 08", beds: "3 BEDROOMS", baths: "3.5 BATHROOMS", area: "320 m²", views: "LANDSCAPE VIEW" },
  { id: 4, top: "35%", left: "55%", state: "avail", label: "VILLA 21", beds: "4 BEDROOMS", baths: "4.5 BATHROOMS", area: "480 m²", views: "OCEAN VIEW" },
];

export default function AzuraDevelopments() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  
  const t = dict[language as keyof typeof dict];

  useEffect(() => {
    document.title = "AZURA DEVELOPMENTS | Premium Real Estate";
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t.nav.items[1], id: "desarrollos" },
    { label: t.nav.items[2], id: "lifestyle" },
    { label: t.nav.items[3], id: "inversion" },
    { label: t.nav.items[4], id: "contacto" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-inter selection:bg-[#003B5C] selection:text-white">
      
      {/* LABEL */}
      <div className="fixed top-24 right-4 md:right-8 z-50 pointer-events-none flex justify-end">
        <div className="bg-[#1A1A1A] text-white/90 text-[10px] md:text-xs font-mono font-medium tracking-widest px-3 md:px-4 py-2 uppercase shadow-xl backdrop-blur-sm border border-white/10">
          {language === 'ES' ? 'DEMO · EMPRESA FICTICIA' : 'DEMO · FICTIONAL COMPANY'}
        </div>
      </div>

      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#EAEAEA] py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex flex-col items-start cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className={`text-xl font-medium tracking-[0.25em] transition-colors duration-500 ${scrolled ? 'text-[#1A1A1A]' : 'text-white drop-shadow-md'}`}>AZURA</span>
            <span className={`text-[9px] tracking-[0.3em] font-medium transition-colors duration-500 ${scrolled ? 'text-[#737373]' : 'text-white/80 drop-shadow-md'}`}>DEVELOPMENTS</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className={`text-xs tracking-[0.15em] font-medium hover:opacity-100 transition-all duration-300 ${scrolled ? 'text-[#404040] hover:text-[#1A1A1A]' : 'text-white/90 hover:text-white drop-shadow-sm'}`}>
                {link.label}
              </button>
            ))}
            <div className="w-[1px] h-4 bg-[#D4D4D4] mx-2"></div>
            <div className="flex gap-4">
              <button onClick={() => setLanguage('ES')} className={`text-xs tracking-widest font-medium transition-colors ${language === 'ES' ? (scrolled ? 'text-[#1A1A1A]' : 'text-white') : (scrolled ? 'text-[#A3A3A3]' : 'text-white/50')}`}>ES</button>
              <button onClick={() => setLanguage('EN')} className={`text-xs tracking-widest font-medium transition-colors ${language === 'EN' ? (scrolled ? 'text-[#1A1A1A]' : 'text-white') : (scrolled ? 'text-[#A3A3A3]' : 'text-white/50')}`}>EN</button>
            </div>
            <button onClick={() => scrollToSection("desarrollos")} className={`px-6 py-3 text-xs tracking-[0.15em] font-medium transition-all duration-500 border ${scrolled ? 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1A1A1A]'}`}>
              {t.nav.cta}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className={scrolled ? 'text-[#1A1A1A]' : 'text-white'} /> : <Menu size={24} className={scrolled ? 'text-[#1A1A1A]' : 'text-white'} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-30 transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center px-12 space-y-8">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-2xl font-light tracking-widest text-[#1A1A1A] text-left hover:text-[#003B5C] transition-colors">
              {link.label}
            </button>
          ))}
          <div className="pt-8 flex gap-6 border-t border-[#EAEAEA]">
            <button onClick={() => { setLanguage('ES'); setIsMenuOpen(false); }} className={`text-sm tracking-widest ${language === 'ES' ? 'text-[#1A1A1A] font-medium' : 'text-[#A3A3A3]'}`}>ES</button>
            <button onClick={() => { setLanguage('EN'); setIsMenuOpen(false); }} className={`text-sm tracking-widest ${language === 'EN' ? 'text-[#1A1A1A] font-medium' : 'text-[#A3A3A3]'}`}>EN</button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative w-full h-[100svh] overflow-hidden bg-[#1A1A1A]">
        {/* Cinematic zoom animation on image */}
        <div className="absolute inset-0 z-0">
          <img src={images.hero} alt="Azura Cabo" className="w-full h-full object-cover animate-[cinematicZoom_30s_ease-out_forwards] brightness-[0.85]" />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 max-w-[1600px] mx-auto text-white">
          <div className="max-w-4xl nx-fade">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase opacity-90 mb-6 block drop-shadow-md">
              {t.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 drop-shadow-lg tracking-tight">
              {t.hero.h1}
            </h1>
            <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mb-12 drop-shadow-md leading-relaxed">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => scrollToSection("desarrollos")} className="bg-white text-[#1A1A1A] px-8 py-4 text-xs tracking-[0.2em] font-medium hover:bg-[#F5F5F5] transition-colors text-center">
                {t.hero.cta1}
              </button>
              <button onClick={() => scrollToSection("contacto")} className="border border-white text-white px-8 py-4 text-xs tracking-[0.2em] font-medium hover:bg-white/10 transition-colors backdrop-blur-sm text-center">
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-32 md:py-48 px-6 md:px-16 max-w-[1600px] mx-auto bg-[#FDFDFD]">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-[#1A1A1A] mb-8 whitespace-pre-line tracking-tight">
              {t.manifesto.h2}
            </h2>
            <p className="text-[#525252] text-lg leading-relaxed font-light max-w-md">
              {t.manifesto.p}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] shadow-2xl overflow-hidden group">
              <img src={images.manifesto} alt="Manifesto Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO - DEVELOPMENTS */}
      <section id="desarrollos" className="py-24 md:py-32 px-6 md:px-16 max-w-[1600px] mx-auto">
        <div className="mb-20 flex justify-between items-end border-b border-[#EAEAEA] pb-8">
          <h2 className="text-3xl md:text-4xl font-light text-[#1A1A1A] tracking-tight">{t.portfolio.title}</h2>
        </div>

        <div className="space-y-32">
          {t.portfolio.items.map((proj) => (
            <div key={proj.id} className="group">
              <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-[#1A1A1A] mb-2">{proj.name}</h3>
                  <p className="text-sm font-mono tracking-widest text-[#737373] uppercase">{proj.loc}</p>
                </div>
                <div className="text-sm font-medium tracking-[0.1em] text-[#003B5C] uppercase">
                  {proj.type}
                </div>
              </div>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#EAEAEA] overflow-hidden mb-8">
                <img src={proj.img} alt={proj.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <p className="text-[#525252] font-light leading-relaxed text-lg">
                  {proj.concept}
                </p>
                <div className="flex flex-wrap gap-x-12 gap-y-4">
                  {proj.prog.map((item, i) => (
                    <div key={i} className="text-xs font-mono tracking-widest text-[#1A1A1A] uppercase border-l border-[#D4D4D4] pl-4">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED DEVELOPMENT & MASTERPLAN */}
      <section className="bg-[#101314] text-white py-32 md:py-48 px-6 md:px-16 mt-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase opacity-60 mb-6 block">
              AZURA CABO RESIDENCES
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              {t.featured.title}
            </h2>
            <button className="text-xs font-medium tracking-[0.2em] border-b border-white pb-1 hover:text-[#D4D4D4] hover:border-[#D4D4D4] transition-colors uppercase">
              {t.featured.btn}
            </button>
          </div>

          {/* MASTERPLAN */}
          <div className="relative w-full aspect-[16/9] bg-[#1A1A1A] mt-24 mb-12 group cursor-crosshair">
            <img src={images.masterplan} alt="Azura Cabo Masterplan" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Interactive Hotspots */}
            {masterplanHotspots.map((spot, i) => (
              <div 
                key={i} 
                className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/40"
                style={{ top: spot.top, left: spot.left }}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className={`w-2 h-2 rounded-full ${spot.state === 'avail' ? 'bg-[#003B5C]' : spot.state === 'res' ? 'bg-[#F59E0B]' : 'bg-[#EF4444]'}`}></div>
                
                {/* Tooltip */}
                <div className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 bg-white text-[#1A1A1A] p-6 shadow-2xl transition-all duration-300 pointer-events-none ${activeHotspot === spot.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex justify-between items-center mb-4 border-b border-[#EAEAEA] pb-4">
                    <span className="font-bold tracking-tight text-lg">{spot.label}</span>
                    <span className={`text-[9px] font-mono tracking-widest px-2 py-1 uppercase ${spot.state === 'avail' ? 'bg-[#F0F9FF] text-[#003B5C]' : spot.state === 'res' ? 'bg-[#FFFBEB] text-[#F59E0B]' : 'bg-[#FEF2F2] text-[#EF4444]'}`}>
                      {t.masterplan.states[spot.state as keyof typeof t.masterplan.states]}
                    </span>
                  </div>
                  <div className="space-y-2 font-mono text-[10px] tracking-widest text-[#525252] uppercase">
                    <div className="flex justify-between"><span>BEDROOMS</span><span className="text-[#1A1A1A]">{spot.beds}</span></div>
                    <div className="flex justify-between"><span>BATHROOMS</span><span className="text-[#1A1A1A]">{spot.baths}</span></div>
                    <div className="flex justify-between"><span>AREA</span><span className="text-[#1A1A1A]">{spot.area}</span></div>
                    <div className="flex justify-between pt-2 mt-2 border-t border-[#EAEAEA] text-[#1A1A1A]">{spot.views}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[#A3A3A3]">
            <h3 className="text-2xl font-light tracking-tight mb-4 md:mb-0">{t.masterplan.title}</h3>
            <p className="text-[10px] font-mono tracking-widest uppercase opacity-60 max-w-md text-right">
              {t.masterplan.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* IMMERSIVE GALLERY & RESIDENCES */}
      <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1600px] mx-auto bg-[#FDFDFD]">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-[#1A1A1A] tracking-tight mb-6">{t.residences.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Main Large Image */}
          <div className="md:col-span-8 aspect-[16/9] relative overflow-hidden group cursor-pointer bg-[#EAEAEA]" onClick={() => setGalleryIndex(0)}>
            <img src={galleryImages[0]} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          {/* Side portrait image */}
          <div className="md:col-span-4 aspect-[4/5] md:aspect-auto relative overflow-hidden group cursor-pointer bg-[#EAEAEA]" onClick={() => setGalleryIndex(1)}>
            <img src={galleryImages[1]} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          {/* Row of 2 */}
          <div className="md:col-span-6 aspect-[16/9] relative overflow-hidden group cursor-pointer bg-[#EAEAEA]" onClick={() => setGalleryIndex(2)}>
            <img src={galleryImages[2]} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="md:col-span-6 aspect-[16/9] relative overflow-hidden group cursor-pointer bg-[#EAEAEA]" onClick={() => setGalleryIndex(3)}>
            <img src={galleryImages[3]} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* LIFESTYLE & LOCATION */}
      <section id="lifestyle" className="py-24 md:py-32 px-6 md:px-16 bg-[#F5F5F4]">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] shadow-xl overflow-hidden group bg-[#EAEAEA]">
              <img src={images.lifestyle} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-[#1A1A1A] mb-8 tracking-tight">
              {t.lifestyle.title}
            </h2>
            
            <div className="mt-20 border-t border-[#D4D4D4] pt-12">
              <h3 className="text-2xl md:text-3xl font-light text-[#1A1A1A] mb-12 tracking-tight">{t.location.title}</h3>
              <div className="flex flex-wrap gap-4 mb-12">
                {t.location.refs.map((ref, i) => (
                  <span key={i} className="px-4 py-2 bg-white text-[#525252] text-[10px] font-mono tracking-[0.2em] uppercase border border-[#EAEAEA]">
                    {ref}
                  </span>
                ))}
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#A3A3A3] uppercase">
                {t.location.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT & LIFECYCLE */}
      <section id="inversion" className="py-24 md:py-32 px-6 md:px-16 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-32">
          
          {/* Lifecycle */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-light tracking-tight text-[#1A1A1A] mb-16">{t.lifecycle.title}</h2>
            <div className="space-y-8">
              {t.lifecycle.steps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-xs font-mono text-[#A3A3A3] group-hover:text-[#003B5C] transition-colors">0{i+1}</span>
                  <span className="text-lg font-light tracking-widest text-[#1A1A1A] uppercase border-b border-transparent group-hover:border-[#1A1A1A] transition-all pb-1">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-24">
              <h2 className="text-2xl font-light tracking-tight text-[#1A1A1A] mb-8">{t.opp.title}</h2>
            </div>
          </div>

          {/* Financial Snapshot */}
          <div className="lg:col-span-8 bg-[#101314] text-white p-10 md:p-20">
            <div className="mb-16">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-60 mb-4 block">AZURA CABO</span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">{t.investment.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
              {t.investment.data.map((item, i) => (
                <div key={i} className="border-t border-white/20 pt-6">
                  <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60 mb-3">{item.label}</div>
                  <div className="text-2xl md:text-3xl font-light tracking-tight">{item.val}</div>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-white/40 leading-relaxed max-w-2xl">
              {t.investment.disclaimer}
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 md:py-32 px-6 md:px-16 bg-[#F5F5F4] border-t border-[#EAEAEA]">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#1A1A1A] mb-12">{t.contact.title}</h2>
            <div className="space-y-8 font-light text-lg text-[#525252] mb-16">
              <p>AZURA DEVELOPMENTS</p>
              <p>Los Cabos<br/>Baja California Sur<br/>México</p>
              <p className="font-mono text-sm">+52 (624) 000 0000<br/>hello@azura.example</p>
            </div>
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#A3A3A3]">
              {t.contact.info.disclaimer}
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 shadow-sm border border-[#EAEAEA]">
            <form className="space-y-8" onSubmit={(e) => {
              e.preventDefault();
              const btn = e.currentTarget.querySelector('button');
              const orig = btn?.innerHTML;
              if(btn) btn.innerHTML = `<span class="flex items-center justify-center">${t.contact.form.success}</span>`;
              if(btn) btn.className = "w-full bg-black text-white text-xs font-mono tracking-[0.2em] px-8 py-5 uppercase transition-all";
              setTimeout(() => {
                if(btn && orig) {
                  btn.innerHTML = orig;
                  btn.className = "w-full bg-[#1A1A1A] text-white text-xs font-medium tracking-[0.2em] px-8 py-5 uppercase hover:bg-[#003B5C] transition-colors";
                  (e.target as HTMLFormElement).reset();
                }
              }, 4000);
            }}>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#737373]">{t.contact.form.name}</label>
                  <input type="text" required className="border-b border-[#D4D4D4] py-2 bg-transparent focus:outline-none focus:border-[#1A1A1A] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#737373]">{t.contact.form.phone}</label>
                  <input type="text" className="border-b border-[#D4D4D4] py-2 bg-transparent focus:outline-none focus:border-[#1A1A1A] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#737373]">{t.contact.form.email}</label>
                <input type="email" required className="border-b border-[#D4D4D4] py-2 bg-transparent focus:outline-none focus:border-[#1A1A1A] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#737373]">{t.contact.form.interest}</label>
                <select className="border-b border-[#D4D4D4] py-2 bg-transparent focus:outline-none focus:border-[#1A1A1A] transition-colors appearance-none font-light">
                  <option>AZURA CABO</option>
                  <option>CASA MAR</option>
                  <option>SIERRA VALLE</option>
                  <option>GENERAL INFORMATION</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 pb-8">
                <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#737373]">{t.contact.form.msg}</label>
                <textarea rows={3} className="border-b border-[#D4D4D4] py-2 bg-transparent focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1A1A1A] text-white text-xs font-medium tracking-[0.2em] px-8 py-5 uppercase hover:bg-[#003B5C] transition-colors">
                {t.contact.form.btn}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MENDIVIL.BUILD REAL CTA */}
      <section className="bg-[#0B1F2F] text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-barlow tracking-tight mb-8 uppercase">
            {t.mendivilCTA.title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-3xl mx-auto">
            {t.mendivilCTA.desc}
          </p>
          <a href="/web-aec" className="inline-block bg-white text-[#0B1F2F] font-bold text-sm tracking-widest px-10 py-5 uppercase hover:bg-black hover:text-white transition-all duration-300">
            {t.mendivilCTA.btn}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white/80 py-16 px-6 md:px-16 text-sm font-light">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-white/10 pb-12 mb-12">
          <div>
            <div className="text-2xl tracking-[0.2em] font-medium text-white mb-2">AZURA</div>
            <div className="text-[10px] tracking-[0.3em] text-white/50 mb-6">DEVELOPMENTS</div>
            <div className="text-[10px] font-mono tracking-widest uppercase">REAL ESTATE · HOSPITALITY · LIVING</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-[10px] font-mono tracking-widest uppercase hover:text-white transition-colors text-left">
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="bg-white/10 px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-white inline-block">
            {language === 'ES' ? 'DEMO · EMPRESA FICTICIA' : 'DEMO · FICTIONAL COMPANY'}
          </div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-white/40 max-w-4xl leading-relaxed lg:text-right">
            {t.footer.disclosure}
          </p>
        </div>
      </footer>

      {/* LIGHTBOX GALLERY */}
      {galleryIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col">
          <div className="flex justify-between items-center p-6">
            <span className="text-white/50 font-mono text-[10px] tracking-widest">
              {galleryIndex + 1} / {galleryImages.length}
            </span>
            <button onClick={() => setGalleryIndex(null)} className="text-white hover:text-[#A3A3A3] transition-colors p-2">
              <X size={32} strokeWidth={1} />
            </button>
          </div>
          <div className="flex-1 relative flex items-center justify-center p-4">
            <img src={galleryImages[galleryIndex]} alt="Gallery" className="max-h-full max-w-full object-contain" />
            <button 
              className="absolute left-4 md:left-12 p-4 text-white hover:text-[#A3A3A3] transition-colors"
              onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev! > 0 ? prev! - 1 : galleryImages.length - 1); }}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button 
              className="absolute right-4 md:right-12 p-4 text-white hover:text-[#A3A3A3] transition-colors"
              onClick={(e) => { e.stopPropagation(); setGalleryIndex(prev => prev! < galleryImages.length - 1 ? prev! + 1 : 0); }}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </div>
        </div>
      )}

      {/* CSS Keyframes for Cinematic Zoom */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cinematicZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
      `}} />
    </div>
  );
}
