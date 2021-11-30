import React from 'react'
import Image from "next/image";
import Link from 'next/link'

export default function Item({ index, item }) {
  

    return (
      <div className="flex flex-col space-y-2 justify-center items-center">
        <Link href={item.link}>
          <a className="transition duration-150 ease-in-out transform hover:-translate-y-2 block bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full ">
            <div className="bg-white p-1 rounded-full">
              <Image
                className="h-12 w-12 rounded-full"
                src={item.image.asset.url}
                width={75}
                height={75}
              />
            </div>
          </a>
        </Link>

        <h3 className="font-semibold font-serif text-main-blue text-sm lg:text-md">
          {item.title}
        </h3>
        <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
          {item.description}
        </p>
      </div>
    );
}
