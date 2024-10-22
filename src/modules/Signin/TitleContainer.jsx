import React from "react";

function TitleContainer() {
  return (
    <div
      className="h-screen flex flex-col w-1/2 gap-[115px] bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/signin/blue-bg.svg')" }}
    >
      <p className="text-white text- px-[150px] pt-22">SIOE</p>
      <h1 className=" border-b w-fit mx-auto px-8 pb-8 text-white font-bold text-55">
        Welcome Back!
      </h1>
    </div>
  );
}

export default TitleContainer;
