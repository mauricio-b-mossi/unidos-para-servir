import React from 'react'
import Image from 'next/image';

export default function Visita({ visita }) {
  // console.log(visita);
  
  // const { mainImage, publishedAt, title, description } = visita;

  // console.log(mainImage.asset.url);
  
    return (
      <div className="relative col-span-3 md:col-span-1">
        {/* <Image src={mainImage.asset.url} width={600} height={600} />
        <div className="flex flex-col justify-center items-center text-center absolute inset-0 bg-main-blue opacity-0 transition ease-in-out hover:opacity-100 text-white font-bold text:lg md:text:xl lg:text-2xl oldstyle-nums p-8 space-y-2">
          <h3>{publishedAt}</h3>
          <h3>{title}</h3>
          <p className="text-xs lg:text-sm text-center">{description}</p>
        </div> */}
      </div>
    );
}
