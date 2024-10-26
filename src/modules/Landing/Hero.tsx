"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { heroText } from "@/constants/Data/Hero";
const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMedium, setIsMedium] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIsMobile(true);
        setIsMedium(false);
      } else if (width <= 1024) {
        setIsMobile(false);
        setIsMedium(true);
      } else {
        setIsMobile(false);
        setIsMedium(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="min-h-screen md:px-32 pt-8 lg:pt-0 md:items-start items-center flex flex-col lg:justify-start bg-contain lg:bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage: isMobile
          ? "url('/images/hero-bg-mobile.svg')"
          : "url('/images/hero-bg.svg')",
      }}
    >
      <div className="lg:relative lg:mb-40">
        <h1 className="lg:absolute top-14 lg:text-80 text-30 lg:left-2 z-20 font-bold text-white">
          {heroText.title}
        </h1>
        <h1 className="hidden lg:block absolute text-80 top-16 z-10 font-bold text-[#136A99]">
          {heroText.title}
        </h1>
      </div>
      <div className="flex mb-7 flex-col text-light md:text-3lg text-lg max-w-[204px] font-bold font-sans items-center">
        <p className="text-shadow-lg">{heroText.subtitle[0].main}</p>
        <p className="flex gap-1">
          <span className="text-lg font-normal">
            {heroText.subtitle[1].main}
          </span>
          {heroText.subtitle[1].secondary}
        </p>
      </div>
      <Button
        variant="secondary"
        className="font-roboto px-7 lg:py-3 py-2.5 rounded-full tex-sm lg:text-lg font-medium text-[#4D79B6]"
      >
        {heroText.buttonText}
      </Button>
    </section>
  );
};
export default Hero;
