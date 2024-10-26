import React from 'react';
import accountIcon from 'public/steps/account.svg';
import walletIcon from 'public/steps/wallet.svg';
import portfolioIcon from 'public/steps/portfolio.svg';
import Button from '@/components/Button';
import StepCard from './StepCard';
import {steps} from "@/constants/Data/Steps"



function Steps() {
  return (
    <section className="flex flex-col font-sans my-16 lg:my-20 max-w-screen-xl mx-auto">
      {/* top section */}
      <div className="flex flex-col lg:flex-row lg:justify-between mx-6 gap-4 lg:mx-40">
        {/* left side */}
        <div className="flex flex-col items-start">
          <h3 className="flex font-bold text-lightBlue text-2xl flex-col">
            How to Get Started?
            <div className="flex gap-1 mt-1.5">
              <span className="bg-lightBlue w-2 h-2 lg:w-3 lg:h-3 rounded-full" />
              <span className="bg-lightBlue w-2 h-2 lg:w-3 lg:h-3 rounded-full" />
              <span className="bg-lightBlue w-2 h-2 lg:w-3 lg:h-3 rounded-full" />
            </div>
            <p className="text-textColor-2 font-normal text-lg lg:mt-8 mt-4">
              Explore sensational features to prepare your best investment in
              cryptocurrency
            </p>
          </h3>
        </div>
        {/* right side */}
        <Button className="px-7 h-fit py-3.5 text-lg" variant="primary">
          Get Started
        </Button>
      </div>
      {/* cards section */}
      <div className="flex flex-col lg:mx-150 lg:mt-16 mt-7 mx-6">
        {steps.map((step) => (
          <StepCard
            key={step.id} // Add key for each component in a map
            id={step.id}
            icon={step.icon}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Steps;