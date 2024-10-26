import React from 'react';
import Image from 'next/image';

interface StepCardProps {
  icon: string; 
  title: string;
  desc: string;
  id: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, desc, id }) => {
  return (
    <div className={`bg-ltr-blue-gradient lg:gap-20 gap-7 pt-3.5 pb-8 items-center flex px-14 rounded-full ${id === 2 ? "flex-row-reverse bg-rtl-blue-gradient" : ""}`}>
      {/* Image component with responsive sizing */}
      <div className="w-[46.12px] h-[50.07px] flex items-center justify-center lg:h-[120px] lg:w-[120px]">
        <Image 
          src={icon} 
          alt='icon'/>
      </div>
      <div>
        <h2 className='font-semibold text-lightBlue text-base lg:text-xl mb-3'>{title}</h2>    
        <p className='text-textColor-2 lg:text-base text-sm font-normal max-w-[300px]'>{desc}</p>      
      </div>
    </div>
  );
};

export default StepCard;
