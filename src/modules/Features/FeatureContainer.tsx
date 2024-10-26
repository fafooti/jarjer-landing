import React from "react";
import FeatureCard from "./FeatureCard";
import clipboardIcon from "public/icons/clipboard-text.svg";
import graphIcon from "public/icons/graph.svg";
import tickIcon from "public/icons/shield-tick.svg";
import statusIcon from "public/icons/status-up.svg";

interface Features {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

const features: Features[] = [
  {
    id: 1,
    icon: tickIcon,
    title: "Blockchain Insurance",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis sed tellus ",
  },
  {
    id: 2,
    icon: graphIcon,
    title: "Smart Investment Project",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis sed tellus ",
  },
  {
    id: 3,
    icon: statusIcon,
    title: "Profit Guarantee",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis sed tellus ",
  },
  {
    id: 4,
    icon: clipboardIcon,
    title: "Real World Project Base",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis sed tellus ",
  },
];

function FeatureContainer() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center lg:items-start  items-center">
      <div className="flex flex-col px-6 lg:px-0 items-start lg:mb-12 mb-40">
        <h3 className="flex font-bold text-lightBlue text-2xl flex-col">
          WPFO Amazing Features
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
      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-2 lg:gap-y-5">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureContainer;
