import React from "react";
import Image from "next/image";

function OrderCard({ name, icon, rate }) {
  return (
    <div
      style={{ backgroundImage: "url('/images/restaurant.png')" }}
      className="bg-no-repeat border border-gray-200 rounded-tl-30 rounded-br-30 rounded-tr-60 rounded-bl-60 bg-cover w-[298px] h-[184px] flex items-end"
    >
      <div className="flex ml-8 mb-7 gap-3">
        <Image src={icon} alt="food-icon" />
        <div className="flex flex-col text-white">
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm">Rate {rate}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
