import React from 'react'
import Image from "next/image";

export default function Item({index, item}) {
    return (
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div className="h-12 w-12 lg:h-auto lg:w-auto ">
          <Image
            className="rounded-full"
            src={item.image.asset.url}
            width={75}
            height={75}
          />
          <h3 className="font-semibold font-serif text-main-blue hover:underline text-sm lg:text-md">
            {item.title}
          </h3>
        </div>
        <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
          {item.description}
        </p>
      </div>
    );
}
