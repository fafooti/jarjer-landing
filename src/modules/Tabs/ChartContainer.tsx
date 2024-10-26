import React from 'react'
import InvestmentGraph from './InvestmentGraph'
import TimeRangeTabs from './TimeRangeTab'

function ChartContainer() {
  return (
    <div className="bg-[#DAE2FF] mb-16 lg:mb-[18px] mt-10 max-w-screen-xl mx-auto py-8 rounded-3xl ">
      <TimeRangeTabs />
    </div>
  );
}

export default ChartContainer
