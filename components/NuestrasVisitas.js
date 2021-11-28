import React from "react";
import Image from "next/image";
import Visita from "./Visita";
import Link from 'next/link'
import Swiper from './Swiper'
import visitas from "../visitas.json";
import SwiperMobile from './SwiperMobile'

export default function NuestrasVisitas() {
  return (
    <div className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col justify-center items-center min-h-screen max-w-7xl  space-y-20 border-t-2">
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
          <Swiper visitas={ visitas }/>
          <SwiperMobile visitas={ visitas }/>

          {/* <Visita
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
          /> */}
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="px-6 py-2 bg-white text-main-blue border-2 border-main-blue rounded-lg font-bold hover:bg-main-blue hover:text-white">
            <Link href="/visitas">
              <a>
                <h3>Ver todas las visitas</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
