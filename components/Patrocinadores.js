import React from "react";
import Image from "next/image";
import Link from "next/link";
import Patrocinador from "./Patrocinador";

export default function Patrocinadores() {
  return (
    <div className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col justify-center items-center h-full max-w-7xl border-t-2 space-y-20">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
            <h3 className="max-w-md lg:max-w-7xl text-center">
              Nuestros colaboradores:
            </h3>
          </div>
        </div>

        {/* Card Slider Of Visits */}
        <div className="grid grid-cols-3 justify-center items-center gap-16">
          <Patrocinador
            image={"/dummylogo.png"}
            name={"Mauricio Mossi"}
            link={"https://linktr.ee/m.mossi"}
          />
          <Patrocinador
            image={"/dummylogo.png"}
            name={"Mauricio Mossi"}
            link={"https://linktr.ee/m.mossi"}
          />
          <Patrocinador
            image={"/dummylogo.png"}
            name={"Mauricio Mossi"}
            link={"https://linktr.ee/m.mossi"}
          />
        </div>

      </div>
    </div>
  );
}
