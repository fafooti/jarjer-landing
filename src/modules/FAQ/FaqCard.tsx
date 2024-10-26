"use client";
import { useState } from "react";
import negativeIcon from "public/icons/negative.svg";
import plusIcon from "public/icons/plus.svg";
import Image from "next/image";

interface FaqProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="py-4 md:px-12 px-4  text-left rounded ">
      <div
        className={`lg:text-2xl font-medium cursor-pointer text-base flex items-center justify-between ${
          isOpen ? "text-lightBlue" : "text-primaryBlue"
        }`}
      >
        {question}
        <span className="flex items-center">
          <Image
            onClick={handleToggle}
            src={isOpen ? negativeIcon : plusIcon} // Use icons based on the state
            alt={isOpen ? "Collapse" : "Expand"}
            width={20} // Set a width for your icons
            height={20} // Set a height for your icons
          />
        </span>
      </div>
      {isOpen && (
        <div
          className={`max-h-0 overflow-hidden ${
            isOpen ? "max-h-[120px]" : ""
          } w-full pt-3`}
        >
          <p className="text-textColor-1 lg:text-22 text-sm pt-4">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
