import React, { useState } from "react";
import Image from "next/image";
import Burger from "../public/menu.svg";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    transition: {
      type: "tween",
      default: { duration: 0.5 },
    },
  },
  closed: { x: "+100%" },
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  const handleOuterClick = () => {
    if (isOpen) {
      setIsOpen((current) => !current);
    }
  };

  return (
    <div className="flex justify-between items-center w-full">
      {/* Logo and items div */}
      <div className="flex justify-center items-center space-x-12">
        {/* Image */}
        <div className="flex justify-center items-center space-x-4">
          <Image src="/dummylogo.png" width={50} height={50} />
          <div className="flex-col font-bold uppercase leading-4 ">
            <h4>unidos</h4>
            <h4>para</h4>
            <h4>servir</h4>
          </div>
        </div>
        {/* Links */}
        <div className="hidden lg:flex space-x-12 font-semibold">
          <p>About Us</p>
          <p>Discover</p>
          <p>Whom we help</p>
          <p>About Us</p>
        </div>
      </div>

      {/* Donate button div */}
      <div className="hidden lg:block px-6 py-2 bg-white text-main-blue border-2 border-main-blue rounded-lg font-bold hover:bg-main-blue hover:text-white">
        Donate now
      </div>
      <div className="block lg:hidden">
        <Image
          onClick={handleClick}
          className="cursor-pointer"
          src={Burger}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
