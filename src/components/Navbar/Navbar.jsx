"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "/public/logo.svg";
import hamburgerIcon from "/public/icons/hamburger-icon.svg";
import phoneIcon from "/public/icons/phone-icon.svg";
import facbookIcon from "/public/icons/facbook-icon.svg";
import youtubeIcon from "/public/icons/youtube-icon.svg";
import twitterIcon from "/public/icons/twitter-icon.svg";
import instagramIcon from "/public/icons/instagram-icon.svg";
import linkedIcon from "/public/icons/linkedin-icon.svg";
import shoppingIcon from "/public/icons/shopping-icon.svg";
import { Button } from "..";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="lg:w-11/12 w-full px-14 absolute top-0 z-40 mt-[69px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Image src={Logo} alt="logo" width={60} height={63} />
          <div className="hidden lg:flex flex-col">
            <p className="text-40 font-bold">JarJer</p>
            <span className="text-lg font-normal">Food Delivery</span>
          </div>

          <ul className="hidden lg:flex gap-7 text-base font-bold">
            <li className="cursor-pointer flex items-center gap-2">
              <Image src={hamburgerIcon} alt="icon" width={18} height={12} />
              <p>Category</p>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <Image src={phoneIcon} alt="icon" width={16} height={16} />
              <p>Contact Us</p>
            </li>
            <li className="flex gap-5 cursor-pointer">
              <Image height={19} width={20} src={facbookIcon} />
              <Image height={15} width={20} src={youtubeIcon} />
              <Image height={16} width={20} src={twitterIcon} />
              <Image height={20} width={20} src={instagramIcon} />
              <Image height={20} width={20} src={linkedIcon} />
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <Image src={shoppingIcon} alt="Basket" width={24} height={24} />
          <Button className="px-14 py-6">Account</Button>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4">
          <ul className="text-base font-bold flex-col gap-4 px-4">
            <li className="cursor-pointer flex gap-2">
              <Image src={hamburgerIcon} alt="icon" width={18} height={12} />
              <p>Category</p>
            </li>
            <li className="cursor-pointer flex gap-2">
              <Image src={phoneIcon} alt="icon" width={16} height={16} />
              <p>Contact Us</p>
            </li>
            <li className="cursor-pointer flex gap-5">
              <Image height={19} width={20} src={facbookIcon} />
              <Image height={15} width={20} src={youtubeIcon} />
              <Image height={16} width={20} src={twitterIcon} />
              <Image height={20} width={20} src={instagramIcon} />
              <Image height={20} width={20} src={linkedIcon} />
            </li>
          </ul>

          <div className="flex flex-col justify-between px-4 gap-4 mt-4 text-center">
            <Image src={shoppingIcon} alt="Basket" width={24} height={24} />
            <Button className="px-6 py-2">Account</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
