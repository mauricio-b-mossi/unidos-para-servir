import React from "react";
import Image from 'next/image'
import FondosItem from "./FondosItem";

export default function Fondos({ items }){
  return (
    <div className="relative flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10">
      <div className=" flex flex-col justify-center items-center  max-w-7xl space-y-10 lg:space-y-20 border-t-2 pt-12 ">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col font-serif text-3xl font-extrabold tracking-tight lg:text-5xl  leading-snug pt-12">
            <h3 className="flex max-w-7xl text-center">
              Con tus donaciones...
            </h3>
          </div>
          {/* <div className="flex max-w-md text-center">
            <p>
              {description
                ? description
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed porro in laboriosam omnis?"}
            </p>
          </div> */}
        </div>
        {/* <div className="grid grid-cols-2 justify-start items-center gap-16 ">
          <s className="flex flex-col  rounded-xl p-4 justify-center items-center">
            <Image src="/crowdfund.png" width={80} height={80} />
            <h3 className="text-2xl sm:text-4xl  font-black">
              <span className="text-xl sm:text-2xl">$</span>
              2000.00
            </h3>
            <p className="text-sm sm:text-base pt-2 leading-tight text-center">
              Have been raised in donations.
            </p>
          </s>
          <s className="flex flex-col  rounded-xl p-4 justify-center items-center">
            <Image src="/family.png" width={80} height={80} />
            <h3 className="text-2xl sm:text-4xl  font-black ">
              <span className="text-xl sm:text-2xl"></span>
              17
            </h3>
            <p className="text-sm sm:text-base pt-2 leading-tight text-center">
              Families have been helped.
            </p>
          </s>
        </div> */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          {items &&
            items.map((item, index) => (
              <FondosItem item={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
