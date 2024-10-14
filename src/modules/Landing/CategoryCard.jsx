import React from "react";
import Image from "next/image";  
function CategoryCard({ icon, title }) {
  return (
    <div className="bg-secondary-1 max-w-24 items-center justify-center rounded-full gap-3.5 pt-7 pb-9 px-5 flex flex-col">
      <Image src={icon} />
      <p className="text-base font-bold">{title}</p>
    </div>
  );
}

export default CategoryCard;
