import React from "react";
import ImageHero from "./ImageHero";
import Image from 'next/image'
import Link from 'next/link'
import Donate from "./Donate";

export default function TextHero({ home }) {

  
  const {  title, description } = home;
  
  return (
    <div className="lg:flex lg:justify-center lg:items-center col-span-2 lg:col-span-1">
      <div className="flex justify-center items-center  relative lg:block">
        <div className="flex-col justify-center items-center space-y-8 z-10">
          
          {/* Title */}
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold lg:leading-snug">
            <h3 className="max-w-md">
              {/* A world where no child&apos;s life is torn apart by war. */}
              {title}
            </h3>
          </div>

          {/* Description */}
          <div className="max-w-md">
            <p>
              {/* Every five seconds one child dies in Africa due to malnutrition
              and related diseases, and you can help! */}
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-start items-center space-x-8">
            <Donate />
            <div className="flex justify-center items-center space-x-2 font-semibold">
              <h3>Discover</h3> <span className="text-lg font-black ">↓</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center absolute opacity-50 lg:hidden">
          <Image src="/ninossv2.png" width={1356} height={720} />
        </div>
      </div>
    </div>
  );
}
