import React from "react";
import Image from "next/image";
import locationIcon from "/public/icons/location-icon.svg";
import { Button } from "..";

function SearchInput() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-wrap items-center">
        <Image src={locationIcon} width={24} height={24} />
        <p className="ml-2">My Location</p>
        <div className="border-l mx-2.5 border-secondary-1 h-4"></div>
        <p>
          New York,{" "}
          <span className="text-accent-green">Left Side Blue Door</span>
        </p>
      </div>
      <div className="flex bg-white rounded-tl-30 rounded-br-30 rounded-tr-60 rounded-bl-60 w-fit border">
        <input
          className="lg:ml-12 ml-4 outline-none lg:mr-36"
          placeholder="Search..."
          type="text"
        />
        <Button className="px-14 py-6">Search</Button>
      </div>
    </div>
  );
}

export default SearchInput;
