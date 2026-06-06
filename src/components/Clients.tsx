import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Clients: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'ES' 
    ? "EMPRESAS CON LAS QUE HE TRABAJADO" 
    : "COMPANIES I HAVE WORKED WITH";

  const companies = [
    "Toyota",
    "Constellation Brands",
    "Worley",
    "Cushman & Wakefield",
    "SSOE Group",
    "Gilbane-Alberici",
    "Stanley Black & Decker",
    "MAGNA",
    "Ronal Group"
  ];

  return (
    <section className="bg-[#2A2A2A] py-[16px] px-[36px] w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h3 className="font-jetbrains text-[#5A8FA8] text-[0.65rem] tracking-[3px] mb-[16px] text-center uppercase">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-center">
          {companies.map((company, index) => (
            <React.Fragment key={index}>
              <span className="font-barlow font-bold text-[#F0F0F0] text-[1rem] tracking-[2px]">
                {company}
              </span>
              {index < companies.length - 1 && (
                <span className="font-barlow font-bold text-[#F0F0F0] text-[1rem] tracking-[2px]">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
