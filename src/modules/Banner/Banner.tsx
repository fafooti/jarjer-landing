import React from "react";
import Image from "next/image";
import banner from "public/images/banner.svg";

function Banner() {
  return (
    <div className="bg-banner-gradient justify-between gap-[60px] lg:px-10 flex flex-col lg:flex-row lg:rounded-30 rounded-20 w-fit lg:h-[364px] lg:overflow-hidden mx-10 mb-5 lg:mx-auto">
      {/* Text Content */}
      <div className="flex flex-col text-white lg:px-0 px-7 py-14 max-w-[570px]">
        <h2 className="pb-6 font-bold text-2xl">What is WPFO?</h2>
        <p className="lg:text-22 lg:pb-5 text-sm">
          Lorem ipsum dolor sit amet consectetur. Mattis sed tellus interdum
          faucibus tellus. Tellus et amet id ac nisl massa amet.
        </p>
        <p className="lg:text-22 text-sm">
          Lorem ipsum dolor sit amet consectetur. Mattis sed tellus interdum
          faucibus tellus. Tellus et amet id ac nisl massa amet.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-[525px] lg:h-[411px] lg:pt-10 flex items-end justify-end h-[263px] w-[320px] self-end lg:self-auto">
        <Image src={banner} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
