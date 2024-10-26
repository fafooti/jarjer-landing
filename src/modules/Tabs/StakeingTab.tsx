import RangeInput from '@/components/RangeInput/RangeInput'
import React from 'react'
import PlanContainer from './PlanContainer';

function StakeingTab() {
    const handleRangeChange = (value: number) => {
        console.log("Current value:", value);
      };
  return (
    <div className='pt-9 flex flex-col gap-8 lg:pt-12'>
        <PlanContainer/>
     <RangeInput  label="Amount"
        min={0}
        max={100}
        tag='wpfo'
        initialValue={50}
        onChange={handleRangeChange} />

          <RangeInput  label="Duration"
          tag='Days'
        min={0}
        max={6416352}
        initialValue={50}
        onChange={handleRangeChange} />
    </div>
  )
}

export default StakeingTab
