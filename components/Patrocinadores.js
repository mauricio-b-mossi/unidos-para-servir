import React from "react";
import Image from "next/image";
import Link from "next/link";
import Patrocinador from "./Patrocinador";

export default function Patrocinadores({ nuestrosPatrocinadores, patrocinadores }) {

  const{title, description} = nuestrosPatrocinadores

  return (
    <div id='patrocinadores' className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col justify-center items-center  max-w-7xl space-y-4 lg:space-y-20 border-t-2">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
            <h3 className="flex max-w-7xl text-center">{title}</h3>
          </div>
          <div className="flex max-w-md text-center">
            <p>{description}</p>
          </div>
        </div>

        {/* Card Slider Of Visits */}
        <div className="flex flex-wrap justify-center items-center gap-16">
          {patrocinadores &&
            patrocinadores.map((patrocinador, index) => (
              <Patrocinador patrocinador={patrocinador} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
