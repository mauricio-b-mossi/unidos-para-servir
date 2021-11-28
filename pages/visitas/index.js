import React from "react";
import Link from "next/link";
import Visita from "../../components/Visita";
import Nav from "../../components/Nav";

export default function index() {
  return (
    <div className=" min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-10">
      <Nav />
      <div
        id="bg-blue"
        className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 "
      >
        <div className="flex flex-col justify-start items-center max-w-7xl  space-y-20">
          {/* Title */}
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
              <h3 className="max-w-md text-center">Nuestras Visitas.</h3>
            </div>
            <div className="max-w-md text-center">
              <p>
                Every five seconds one child dies in Africa due to malnutrition
                and related diseases, and you can help!
              </p>
            </div>
          </div>

          {/* Card Slider Of Visits */}
          <div className="grid grid-cols-3 justify-center items-center gap-16">
            <Visita
              key={1}
              date={"01.11.2021"}
              title={"Visita El Espino"}
              description={
                "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
              }
              image={"/jXev1.jpeg"}
            />
            <Visita
              key={2}
              date={"01.11.2021"}
              title={"Visita El Espino"}
              description={
                "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
              }
              image={"/jXev1.jpeg"}
            />
            <Visita
              key={3}
              date={"01.11.2021"}
              title={"Visita El Espino"}
              description={
                "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
              }
              image={"/jXev1.jpeg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
