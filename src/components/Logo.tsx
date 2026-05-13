import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'lg' }> = ({ size = 'sm' }) => {
  const isSm = size === 'sm';
  return (
    <div className="inline-flex flex-col items-start justify-center">
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <div className="w-[10px] h-[10px] rounded-full bg-electricBlue mr-[10px] flex-shrink-0"></div>
          <span className={`font-barlow font-black text-titaniumWhite tracking-[1px] uppercase leading-none ${isSm ? 'text-[1.4rem]' : 'text-[2rem]'}`}>
            MENDIVIL.
          </span>
          <span className={`font-barlow font-black text-electricBlue tracking-[1px] uppercase leading-none ${isSm ? 'text-[1.4rem]' : 'text-[2rem]'}`}>
            BUILD
          </span>
        </div>
        <div className="h-[1px] w-full bg-electricBlue my-[3px]"></div>
      </div>
      <span className={`font-barlow font-normal text-concreteGray tracking-[4px] uppercase whitespace-nowrap ${isSm ? 'text-[0.55rem]' : 'text-[0.7rem]'}`}>
        INGENIERÍA QUE CONSTRUYE EL FUTURO
      </span>
    </div>
  );
};

export default Logo;
