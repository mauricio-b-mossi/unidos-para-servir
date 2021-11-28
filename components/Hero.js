import React from "react";
import SmallIcon from "./SmallIcon";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import TextHero from "./TextHero";
import ImageHero from "./ImageHero";
import ItemsHero from "./ItemsHero";

export default function Hero() {
  return (
    <div className=" min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-10">
      {/* bg-main-blue text-white */}
      <Nav />

      {/* Grid */}
      <div className="grid grid-cols-2 justify-center items-center h-screen w-full">
        <TextHero />
        <ImageHero />
      </div>
      <ItemsHero />
    </div>
  );
}
