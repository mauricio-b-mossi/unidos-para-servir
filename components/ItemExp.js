import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ItemExp({ index, item }) {

  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <Link href={item.link}>
        <a className="transition duration-150 ease-in-out transform hover:-translate-y-2 block border-2 border-g border-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full ">
          <div className="bg-white p-1 rounded-full">
            <div className="p-4 md:p-8 rounded-full">
              <Image
                // h-12 w-12 md:h-12 md:w-12
                className="rounded-full "
                src={item.image.asset.url}
                // width={75}
                // height={75}
                layout="fill"
              />
            </div>
          </div>
        </a>
      </Link>

      <h3 className="font-semibold font-serif text-main-blue text-xs sm:text-sm lg:text-md">
        {item.title}
      </h3>
      <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
        {item.description}
      </p>
    </div>
  );
}
