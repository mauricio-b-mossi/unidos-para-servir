import React from "react";
import Image from 'next/image'

export default function Fondos() {
  return (
    <div className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="relative flex flex-col justify-center items-center  max-w-7xl space-y-10 lg:space-y-20 pt-12 border-t-2">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-20">
          <div className="flex justify-center items-center w-96">
            <div className="flex-grow px-1 border-2 border-black" />
            <div className="text-lg uppercase font-semibold px-4">
              Hemos recolectado
            </div>
            <div className="flex-grow px-1 border-2  border-black" />
          </div>
          <div className="tabular-nums text-7xl font-bold">$200000</div>
          <div className="flex justify-center items-center w-96">
            <div className="flex-grow px-1 border-2 border-black" />
            <div className="text-lg uppercase font-semibold px-4">
              en donaciones
            </div>
            <div className="flex-grow px-1 border-2  border-black" />
          </div>
              </div>
              <div className='absolute inset-0'>
                  <Image src='/silverConfetti.png' layout='fill'/>

              </div>
      </div>
    </div>
  );
}
