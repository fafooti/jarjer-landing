"use client"
import React, { useState } from 'react';
import InvestmentTab from './InvestmentTab';
import StakeingTab from './StakeingTab';
import Button from '@/components/Button';
import {tabContentText} from "@/constants/Data/Tabs"
const TabsContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(2); 

  const handleActiveInvestment=()=>{
    setActiveTab(1)
  }
  const handleActiveStakeing=()=>{
    setActiveTab(2)
  }
  return (
    <div className="flex flex-col gap-12  px-12 max-w-screen-xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex mx-alg:space-x-4 mx-auto lg:mx-0 space-x-8 bg-light lg:bg-[#DAE2FF] w-fit rounded-46 lg:py-3 lg:px-4 mb-4 text-sm lg:text-lg font-medium text-primaryBlue ">
        <Button
          variant={activeTab === 1 ? "primary" : ""}
          className={`px-4 py-2`}
          onClick={handleActiveInvestment}
        >
          Investment
        </Button>
        <Button
          variant={activeTab === 2 ? "primary" : ""}
          className={`px-4 py-2 `}
          onClick={handleActiveStakeing}
        >
          Stakeing
        </Button>
      </div>
      <p className="text-textColor-2 text-sm lg:text-22">
        {tabContentText.description}
      </p>

      {/* Content Area */}
      <div className="tab-content">
        {activeTab === 1 && <InvestmentTab />}
        {activeTab === 2 && <StakeingTab />}
      </div>
      <Button
        variant="primary"
        className="px-7 lg:py-3 py-2.5 lg:text-lg text-sm"
      >
        Calculate
      </Button>
    </div>
  );
}; 

export default TabsContainer;
