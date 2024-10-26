import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="border-white py-4 px-5 drop-shadow-[0_0px_10px_#BBE2EC] rounded-20 border-[10px] text-center bg-[#ECF3FF]">
      <div className="mb-4 flex items-start gap-5">
        <Image src={icon} alt={title} width={50} height={50} />
        <div className="flex flex-col lg:gap-6 items-start">
          <h3 className="text-sm lg:text-lg text-primaryBlue font-bold mb-2">{title}</h3>
          <p className="text-textColor-1 text-xs lg:text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
