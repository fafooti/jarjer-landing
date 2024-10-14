import React from "react";
import Image from "next/image";
import yellobg from "/public/images/yellow-bg.svg";
import slidericon from "/public/images/group-slider.svg";
function Slider() {
  return (
    <div className="hidden lg:flex">
      <div className="absolute top-0 right-0">
        <Image src={yellobg} height={810} />
      </div>
      <div className="absolute top-1/4 pb-4 right-0 ">
        <Image src={slidericon} />
      </div>
      <ul className="flex absolute text-primary text-sm font-normal gap-6 bottom-20 pb-10 pr-20 right-0">
        <li>Application</li>
        <li>Privacy</li>
        <li>Terms</li>
      </ul>
    </div>
  );
}

export default Slider;
