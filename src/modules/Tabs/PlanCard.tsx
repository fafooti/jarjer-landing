// src/components/PlanCard.tsx

import React from "react";

// Define type for PlanCard props with more detailed comments
interface PlanCardProps {
  /** Title of the plan */
  title: string;
  /** Duration of the plan */
  duration: string;
  /** Profit percentage of the plan */
  profit: number;
  /** Background color for the plan card */
  bgColor: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  duration,
  profit,
  bgColor,
}) => {
  return (
    <div
      className="rounded-20 lg:w-[251px] w-[172px] flex flex-col items-center pt-9 pb-8 justify-center shadow-lg lg:px-7 px-3.5 text-white"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="lg:text-2xl font-bold mb-4">{title}</h2>


      <div className="h-2 w-full my-7 bg-white rounded-full"></div>

   
      <p className="lg:text-lg mb-[18px] font-bold">{duration} Duration</p>


      <p className="lg:text-6xl mb-2.5 font-semibold">%{profit}</p>

   
      <p className="lg:text-lg">Profit</p>
    </div>
  );
};

export default PlanCard;
