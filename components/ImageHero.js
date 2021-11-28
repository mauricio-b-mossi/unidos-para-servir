import React from 'react'
import Image from 'next/image'

export default function ImageHero() {
    return (
      <div className="hidden lg:flex flex-col justify-center items-center space-y-8 ">
        <Image
          src="/ninossv2.png"
          width={1356}
          height={720}
        />
      </div>
    );
}
