const fs = require('fs');

let content = fs.readFileSync('src/components/WebAEC.tsx', 'utf8');

const startTag = '      {/* 13. WEB AEC CONTACT */}';
const endTag = '    </div>\n  );\n};\n\nexport default WebAEC;';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find the section to replace");
  process.exit(1);
}

const before = content.substring(0, startIndex);
const after = content.substring(endIndex);

const newContactJSX = `      {/* 13. WEB AEC CONTACT */}
      <section id="contacto-web-aec" className="py-16 md:py-24 bg-deepBlack border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* LEFT COLUMN: TEXT & DIRECT CONTACT */}
            <div>
              <span className="font-jetbrains text-electricBlue text-xs tracking-[0.2em] uppercase block mb-4">
                {t.webAecContact.eyebrow}
              </span>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl lg:text-6xl text-titaniumWhite uppercase tracking-wide mb-6 whitespace-pre-line">
                {t.webAecContact.title}
              </h2>
              <p className="font-inter text-concreteGray text-lg mb-12 max-w-xl">
                {t.webAecContact.desc}
              </p>

              <div className="mb-8">
                <span className="font-jetbrains text-electricBlue text-xs uppercase tracking-widest block mb-6">{t.webAecContact.orDirectly}</span>
                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <a 
                    href="mailto:benjamin@mendivil.build" 
                    className="flex items-center justify-start space-x-4 px-6 py-4 border border-white/10 hover:border-electricBlue hover:bg-white/5 transition-all group"
                  >
                    <Mail size={24} className="text-concreteGray group-hover:text-electricBlue transition-colors" />
                    <span className="font-jetbrains text-titaniumWhite text-sm tracking-wider">benjamin@mendivil.build</span>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href={"https://wa.me/message/OMVEQBVAUTQLM1?text=" + encodeURIComponent(isEs ? "Hola Benjamín, vi los demos de WEB AEC en MENDIVIL.BUILD y me interesa desarrollar un sitio web para mi empresa." : "Hi Benjamin, I saw the WEB AEC demos on MENDIVIL.BUILD and I'm interested in developing a website for my company.")} 
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

                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/in/benjamín-mendívil-hernández-4a0065158" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-start space-x-4 px-6 py-4 border border-white/10 hover:border-titaniumWhite hover:bg-white/5 transition-all group"
                  >
                    <LinkedinIcon size={24} />
                    <span className="font-jetbrains text-titaniumWhite text-sm tracking-wider">LinkedIn</span>
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
                    {t.webAecContact.success}
                  </p>
                </div>
              ) : (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="Source" value="WEB AEC" />
                  <input type="hidden" name="Subject" value="Nueva solicitud WEB AEC" />
                  
                  <div className="w-full">
                    <input type="text" name="name" required placeholder={t.webAecContact.name} className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="w-full">
                    <input type="text" name="company" required placeholder={t.webAecContact.company} className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors" />
                    <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="w-full">
                    <input type="email" name="email" required placeholder={t.webAecContact.email} className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div className="w-full">
                    <input type="tel" name="phone" placeholder={t.webAecContact.phone} className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors" />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  
                  <div className="w-full">
                    <select name="companyType" required className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full appearance-none transition-colors">
                      <option value="" disabled selected>{t.webAecContact.type}</option>
                      {t.webAecContact.typeOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full">
                    <select name="needs" required className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full appearance-none transition-colors">
                      <option value="" disabled selected>{t.webAecContact.need}</option>
                      {t.webAecContact.needOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full md:col-span-2">
                    <textarea name="message" required placeholder={t.webAecContact.placeholder} rows={5} className="bg-[#0B0B0B] border border-white/10 p-4 text-titaniumWhite focus:outline-none focus:border-electricBlue font-inter text-sm w-full transition-colors resize-none"></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  
                  <button type="submit" disabled={state.submitting} className="md:col-span-2 bg-electricBlue text-white font-jetbrains font-bold text-sm tracking-widest py-5 hover:bg-white hover:text-deepBlack disabled:bg-electricBlue/50 disabled:cursor-not-allowed transition-colors duration-300 uppercase mt-4">
                    {state.submitting ? t.webAecContact.sending : t.webAecContact.submit + ' →'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
`;

fs.writeFileSync('src/components/WebAEC.tsx', before + newContactJSX + after);
console.log('Successfully patched WebAEC.tsx layout and removed opacity bug');
