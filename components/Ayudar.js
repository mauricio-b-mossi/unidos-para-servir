import React from 'react'
import Image from 'next/image'
import TextHero from "./TextBody";

export default function Ayudar() {
    return (
      <div className="flex justify-center items-center h-screen w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center h-full max-w-7xl border-t-2 gap-4">
          {/* Image */}
          <div className="col-span-2 flex flex-col justify-center items-center lg:col-span-1">
            <Image src="/jXe.jpeg" width={600} height={450} />
          </div>
          {/* Text */}
          <TextHero />
        </div>
      </div>
    );
}
