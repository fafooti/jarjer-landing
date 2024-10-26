import React from "react";
import FaqCard from "./FaqCard";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
 
  {
    id: 1,
    question: "Question number one",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other cryptocurrencies.",
  },
  {
    id: 2,
    question: "Question number one",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other cryptocurrencies.",
  },
  {
    id: 3,
    question: "Question number one",
    answer:
      "We accept PayPal, Bitcoin, Ethereum, Litecoin and 12+ other cryptocurrencies.",
  },

];
const FaqContainer: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-14">
      <div className="flex flex-col items-start">
        <h3 className="flex font-bold text-lightBlue text-2xl flex-col">
          FAQ
          <div className="flex gap-1 mt-1.5">
            <span className="bg-lightBlue w-2 h-2 lg:w-3 lg:h-3 rounded-full" />
            <span className="bg-lightBlue w-2 h-2 lg:w-3 lg:h-3 rounded-full" />
            <span className="bg-lightBlue w-2 h-2 lg:w-3 lg:h-3 rounded-full" />
          </div>
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        {faqData.map((item) => (
          <FaqCard
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqContainer;
