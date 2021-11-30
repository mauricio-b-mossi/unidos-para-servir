import React from "react";
import Image from 'next/image'

export default function Fondos() {
  return (
    <div className="relative flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 text-white  bg-black ">
      <div className=" flex flex-col justify-center items-center  max-w-7xl space-y-10 lg:space-y-20 py-12 ">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-20 z-10">
          <div className="flex justify-center items-center w-96">
            <div className="flex-grow px-1 border-2 border-white" />
            <div className="text-lg uppercase font-semibold px-4">
              Hemos recolectado
            </div>
            <div className="flex-grow px-1 border-2  border-white" />
          </div>
          <div className="tabular-nums text-7xl font-bold">$200000</div>
          <div className="flex justify-center items-center w-96">
            <div className="flex-grow px-1 border-2 border-white" />
            <div className="text-lg uppercase font-semibold px-4">
              en donaciones
            </div>
            <div className="flex-grow px-1 border-2  border-white" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-80">
        <Image src="/jXev3.jpeg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
