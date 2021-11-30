import React from "react";
import Image from "next/image";
import Link from 'next/link'
import Swiper from './Swiper'
import visitas from "../visitas.json";
import SwiperMobile from './SwiperMobile'

export default function NuestrasVisitas({ nuestrasVisitas, visitas }) {

const { title, description } = nuestrasVisitas

  return (
    <div className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col justify-center items-center min-h-screen max-w-7xl space-y-10 lg:space-y-20 border-t-2">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
            <h3 className="max-w-md text-center">{ title }</h3>
          </div>
          <div className="max-w-md text-center">
            <p>
              {description}
            </p>
          </div>
        </div>

        {/* Card Slider Of Visits */}
        <div className="grid grid-cols-3 justify-center items-center gap-16">
          <Swiper visitas={visitas} />
          <SwiperMobile visitas={visitas} />
        </div>

        {/* <s className="flex justify-center items-center w-full">
          <div className="px-6 py-2 bg-white text-main-blue border-2 border-main-blue rounded-lg font-bold hover:bg-main-blue hover:text-white">
            <Link href="">
              <a>
                <h3>Ver todas las visitas</h3>
              </a>
            </Link>
          </div>
        </s> */}
      </div>
    </div>
  );
}
