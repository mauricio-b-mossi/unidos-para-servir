import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Visita from "./Visita";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App({ visitas }) {
  console.log("====================================");
  console.log(visitas);
  console.log("====================================");
  visitas.map((vi) => console.log(vi.title));
  return (
    <div className="col-span-3 relative h-auto hidden lg:block">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {visitas &&
          visitas.map((visita, index) => (
            <SwiperSlide key={index}>
              <div className="relative col-span-3 md:col-span-1">
                <Image
                  src={visita.mainImage.asset.url}
                  width={600}
                  height={600}
                  key={visita.mainImage.asset.id}
                />
                <div className="flex flex-col justify-center items-center text-center absolute inset-0 bg-main-blue opacity-0 transition ease-in-out hover:opacity-100 text-white font-bold text:lg md:text:xl lg:text-2xl oldstyle-nums p-8 space-y-2">
                  <h3>{visita.publishedAt}</h3>
                  <h3>{visita.title}</h3>
                  <p className="text-xs lg:text-sm text-center">
                    {visita.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
