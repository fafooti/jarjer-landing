// src/components/PlanContainer.tsx

import React from "react";
import PlanCard from "./PlanCard";
import { plans } from "@/constants/Data/Plan";

function PlanContainer() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 lg:gap-11">
        {plans.map((plan, index) => (
          <PlanCard
            key={index} // Add a unique key for each card
            title={plan.title}
            duration={plan.duration}
            profit={plan.profit}
            bgColor={plan.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default PlanContainer;
