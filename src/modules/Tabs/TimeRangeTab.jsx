"use client"
import React, { useState } from "react";
import InvestmentGraph from "./InvestmentGraph";
import Button from "@/components/Button";

const TimeRangeTabs = () => {
  const [timeRange, setTimeRange] = useState("Daily");

  return (
    <div className="flex justify-between gap-6 px-3 lg:flex-row flex-col">
      <div className="flex  h-full rounded-46 py-4 px-10 bg-white justify-between mb-4">
        {["Daily", "Weekly", "Monthly"].map((range) => (
          <Button
            key={range}
            className={`px-4 py-2  ${ timeRange === range ?"bg-lightBlue text-white":"text-primaryBlue"}`}
    
            onClick={() => setTimeRange(range)}
          >
            {range}
          </Button>
        ))}
      </div>
      <InvestmentGraph timeRange={timeRange} />
    </div>
  );
};

export default TimeRangeTabs;