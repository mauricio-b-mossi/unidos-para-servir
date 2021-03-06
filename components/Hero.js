import React from "react";
import SmallIcon from "./SmallIcon";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import TextHero from "./TextHero";
import ImageHero from "./ImageHero";
import ItemsHero from "./ItemsHero";
import ItemsHeroExp from "./ItemsHeroExp";

export default function Hero({ home }) {
  
  const { title, description, mainImage, items } = home;


  
  return (
    <div
      id="bg-blue"
      className=" min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <Nav />

      {/* Grid */}
      <div className="grid grid-cols-2 justify-center items-center h-screen w-full">
        <TextHero home={{ title, description, mainImage }} />
        <ImageHero image={mainImage} />
      </div>
      <ItemsHeroExp items={items} />
    </div>
  );
}
