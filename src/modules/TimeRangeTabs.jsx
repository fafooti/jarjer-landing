"use client"
import React, { useState } from "react";
import InvestmentGraph from "./InvestmentGraph";

const TimeRangeTabs = () => {
  const [timeRange, setTimeRange] = useState("Daily");

  return (
    <div>
      <div className="flex justify-center mb-4">
        {["Daily", "Weekly", "Monthly"].map((range) => (
          <button
            key={range}
            className={`px-4 py-2 mx-2 ${
              timeRange === range ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setTimeRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
      <InvestmentGraph timeRange={timeRange} />
    </div>
  );
};

export default TimeRangeTabs;
