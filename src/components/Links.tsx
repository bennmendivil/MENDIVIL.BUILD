import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  Globe, 
  LayoutTemplate, 
  MessageSquare,
  MessageCircle,
  Mail,
} from 'lucide-react';

const Links: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Benjamín Mendívil | MENDIVIL.BUILD";
    
    // Attempt to update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ingeniería, construcción, Lean, IA aplicada y soluciones digitales para el sector AEC.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-deepBlack font-inter text-titaniumWhite overflow-x-hidden selection:bg-electricBlue selection:text-white relative">
      
      {/* FONDO PRINCIPAL Y OVERLAY */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-top bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/links/links_background_crane.webp)' }}
      ></div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0A131F]/80 via-deepBlack/95 to-deepBlack"></div>

      <div className="max-w-xl mx-auto px-6 py-12 flex flex-col min-h-screen relative z-10">
        {/* ENCABEZADO */}
        <header className="text-center mb-10 fade-in-section is-visible">
          <div className="font-barlow font-bold text-xl tracking-[0.2em] text-white/50 mb-6 uppercase">MENDIVIL.BUILD</div>
          
          <div className="mx-auto w-24 h-24 mb-5 rounded-full overflow-hidden border border-[#4A9FD4]/40 shadow-[0_0_20px_rgba(74,159,212,0.15)] bg-deepBlack">
            <img 
              src="/links/links_profile_headshot.webp" 
              alt="Benjamín Mendívil" 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-barlow font-bold text-4xl text-titaniumWhite uppercase tracking-wide mb-3">Benjamín Mendívil</h1>
          <h2 className="font-jetbrains text-electricBlue text-xs tracking-widest uppercase mb-4">Civil Engineer · Construction Manager · Lean + Applied AI</h2>
          <p className="text-concreteGray text-sm max-w-sm mx-auto leading-relaxed">
            Construcción, Lean, tecnología e IA aplicada al sector AEC.
          </p>
        </header>

        <main className="flex-grow space-y-12">
          {/* DESTACADOS */}
          <section className="fade-in-section is-visible delay-100">
            <h3 className="font-jetbrains text-concreteGray text-[10px] tracking-widest uppercase mb-4 text-center">DESTACADOS</h3>
            <div className="space-y-4">
              <a href="https://mendivil.build" className="group block bg-[#0F2236] border border-steelBlue/30 p-5 rounded-lg hover:border-[#4A9FD4] hover:bg-[#0F2236]/80 transition-all card-premium relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#4A9FD4]/10 border border-[#4A9FD4]/30 flex items-center justify-center shrink-0">
                      <Globe size={20} className="text-[#4A9FD4]" />
                    </div>
                    <div>
                      <div className="font-barlow font-bold text-lg text-white uppercase tracking-wide mb-1">MENDIVIL.BUILD</div>
                      <div className="text-concreteGray text-xs">Sitio principal · Proyectos · Servicios</div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-steelBlue group-hover:text-white transition-colors" />
                </div>
              </a>

              <a href="https://mendivil.build/web-aec" className="group block bg-[#0F2236] border border-steelBlue/30 p-5 rounded-lg hover:border-[#4A9FD4] hover:bg-[#0F2236]/80 transition-all card-premium relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#4A9FD4]/10 border border-[#4A9FD4]/30 flex items-center justify-center shrink-0">
                      <LayoutTemplate size={20} className="text-[#4A9FD4]" />
                    </div>
                    <div>
                      <div className="font-barlow font-bold text-lg text-white uppercase tracking-wide mb-1">WEB AEC</div>
                      <div className="text-concreteGray text-xs">Sitios web para arquitectura, ingeniería y construcción</div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-steelBlue group-hover:text-white transition-colors" />
                </div>
              </a>

              <a href="https://reporter.mendivil.build" target="_blank" rel="noopener noreferrer" className="group block bg-[#0F2236] border border-steelBlue/30 p-5 rounded-lg hover:border-[#4A9FD4] hover:bg-[#0F2236]/80 transition-all card-premium relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#4A9FD4]/10 border border-[#4A9FD4]/30 flex items-center justify-center shrink-0">
                      <MessageSquare size={20} className="text-[#4A9FD4]" />
                    </div>
                    <div>
                      <div className="font-barlow font-bold text-lg text-white uppercase tracking-wide mb-1">AI PROJECT REPORTER</div>
                      <div className="text-concreteGray text-xs">Reportes de obra con IA</div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-steelBlue group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </section>

          {/* REDES SOCIALES */}
          <section className="fade-in-section is-visible delay-200">
            <h3 className="font-jetbrains text-concreteGray text-[10px] tracking-widest uppercase mb-4 text-center">CONECTA CONMIGO</h3>
            <div className="space-y-3">
              {[
                { name: "LINKEDIN", url: "https://www.linkedin.com/in/benjam%C3%ADn-mend%C3%ADvil-hern%C3%A1ndez-4a0065158", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ) },
                { name: "INSTAGRAM", url: "https://www.instagram.com/mendivil.build", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ) },
                { name: "TIKTOK", url: "https://www.tiktok.com/@mendivil.build", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                ) },
                { name: "YOUTUBE", url: "https://youtube.com/@mendivilbuild", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                ) },
                { name: "FACEBOOK", url: "https://www.facebook.com/share/1GtrpHrfdW/", icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ) },
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-deepBlack border border-white/10 rounded-lg hover:border-steelBlue hover:bg-[#0A131F]/50 transition-colors group">
                  <div className="flex items-center gap-3 text-concreteGray group-hover:text-white transition-colors">
                    {social.icon}
                    <span className="font-jetbrains text-sm tracking-wider uppercase">{social.name}</span>
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </a>
              ))}
            </div>
          </section>

          {/* CONTACTO */}
          <section className="fade-in-section is-visible delay-300">
            <h3 className="font-jetbrains text-concreteGray text-[10px] tracking-widest uppercase mb-4 text-center">CONTACTO</h3>
            <div className="space-y-3">
              <a href="https://wa.me/message/OMVEQBVAUTQLM1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 border border-[#128C7E]/40 bg-[#0D241E]/80 rounded-lg hover:border-[#25D366] hover:bg-[#12382C] transition-all group contact-premium">
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-[#25D366] group-hover:text-white transition-colors" />
                  <span className="font-jetbrains text-white text-sm tracking-wider uppercase">WHATSAPP</span>
                </div>
                <ArrowRight size={16} className="text-[#25D366]/50 group-hover:text-white/60 transition-colors" />
              </a>

              <a href="mailto:benjamin@mendivil.build" className="flex items-center justify-between p-4 border border-[#4A9FD4]/30 bg-[#0A131F]/60 rounded-lg hover:border-[#4A9FD4] hover:bg-[#0A131F] transition-all group contact-premium">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[#4A9FD4] group-hover:text-white transition-colors" />
                  <span className="font-jetbrains text-white text-sm tracking-wider uppercase">EMAIL</span>
                </div>
                <ArrowRight size={16} className="text-[#4A9FD4]/50 group-hover:text-white/60 transition-colors" />
              </a>
            </div>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-white/5 text-center fade-in-section is-visible delay-400">
          <div className="font-barlow font-bold text-sm tracking-[0.2em] text-white/40 mb-2 uppercase">MENDIVIL.BUILD</div>
          <div className="font-jetbrains text-concreteGray/40 text-[10px] tracking-widest uppercase">
            Engineering · Construction · Lean · Applied AI
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Links;
