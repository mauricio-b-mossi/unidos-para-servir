import React from "react";
import ImageHero from "./ImageHero";
import Image from 'next/image'

export default function TextHero() {
  return (
    <div className="lg:flex lg:justify-center lg:items-center col-span-2 lg:col-span-1">
      <div className="flex justify-center items-center  relative lg:block">
        <div className="flex-col justify-center items-center space-y-8 z-10">
          {/* Title */}
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold lg:leading-snug">
            <h3 className="max-w-md">
              A world where no child&apos;s life is torn apart by war.
            </h3>
          </div>

          {/* Description */}
          <div className="max-w-md">
            <p>
              Every five seconds one child dies in Africa due to malnutrition
              and related diseases, and you can help!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-start items-center space-x-8">
            <div className="px-6 py-2 bg-white text-main-blue border-2 border-main-blue rounded-lg font-bold hover:bg-main-blue hover:text-white animate-pulse">
              <h3>Donate now</h3>
            </div>
            <div className="flex justify-center items-center space-x-2 font-semibold">
              <h3>Discover</h3> <span className="text-lg font-black ">↓</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-8  absolute opacity-50 lg:hidden">
          <Image src="/ninossv2.png" width={1356} height={720} />
        </div>
      </div>
    </div>
  );
}
