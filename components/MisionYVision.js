import React from 'react'
import Image from 'next/image'
import TextHero from "./TextBody";


export default function MisionYVision() {
    return (
      <div className="flex justify-center items-center min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center h-full max-w-7xl border-t-2 gap-4 pt-12">
          {/* Text */}
          <TextHero />
          {/* Image */}
          <div className="flex flex-col justify-center items-center col-span-2 lg:col-span-1">
            <Image src="/jXe.jpeg" width={600} height={450} />
          </div>
        </div>
      </div>
    );
}
