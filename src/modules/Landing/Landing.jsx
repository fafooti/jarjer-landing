import React from "react";

import pizzaIcon from "/public/categories/pizza-icon.svg";
import burgerIcon from "/public/categories/burger-icon.svg";
import pastaIcon from "/public/categories/pasta-icon.svg";
import kingburgerIcon from "/public/images/kingburger.png";
import sandwichIcon from "/public/categories/sandwich-icon.svg";
import chickenIcon from "/public/categories/chicken-icon.svg";
import dessertIcon from "/public/categories/dessert-icon.svg";
import CategoryCard from "./CategoryCard";
import { SearchInput, Navbar } from "@/components";
import OrderCard from "./OrderCard";
import Slider from "./Slider";

const categories = [
  { id: 1, title: "Pizza", icon: pizzaIcon },
  { id: 2, title: "Burger", icon: burgerIcon },
  { id: 3, title: "Sandwich", icon: sandwichIcon },
  { id: 4, title: "Chicken", icon: chickenIcon },
  { id: 5, title: "Pasta", icon: pastaIcon },
  { id: 6, title: "Dessert", icon: dessertIcon },
];

const recentOrders = [
  { id: 1, name: "King Burger", rate: "8/10", icon: kingburgerIcon },
  { id: 2, name: "King Burger", rate: "8/10", icon: kingburgerIcon },
];

function Landing() {
  return (
    <div className="flex items-center justify-start bg-white rounded-30">
      <Navbar />
      <div className="flex  gap-10 lg:mx-14  pt-[180px] pb-16 flex-col w-full">
        <SearchInput />
        <div>
          <p className="pb-3 text-sm font-bold text-secondary-2">
            Popular Category
          </p>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((item) => (
              <CategoryCard title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
        <div>
          <p className="pb-4 text-sm font-bold text-secondary-2">
            Popular Category
          </p>
          <div className="flex flex-wrap gap-4">
            {recentOrders.map((item) => (
              <OrderCard name={item.name} icon={item.icon} rate={item.rate} />
            ))}
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Landing;
