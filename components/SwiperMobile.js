import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Visita from "./Visita";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import NuestrasVisitas from "./NuestrasVisitas";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App({ visitas }) {
  return (
    <div className="col-span-3 relative h-auto block lg:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {/* {visitas.map((visitas) => {
                  <SwiperSlide>
                    <Visita
                      date={visitas.date}
                      title={visitas.title}
                      description={
                        visitas.description
                      }
                      image={visitas.image}
                    />
                  </SwiperSlide>;
              })} */}
        <SwiperSlide>
          <Visita
            key={1}
            date={"01.11.2021"}
            title={"Visita El Espino"}
            description={
              "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
            }
            image={"/jXev1.jpeg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Visita
            key={2}
            date={"01.11.2021"}
            title={"Visita El Espino"}
            description={
              "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
            }
            image={"/jXev1.jpeg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Visita
            key={3}
            date={"01.11.2021"}
            title={"Visita El Espino"}
            description={
              "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
            }
            image={"/jXev1.jpeg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Visita
            key={4}
            date={"01.11.2021"}
            title={"Visita El Espino"}
            description={
              "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
            }
            image={"/jXev1.jpeg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Visita
            key={5}
            date={"01.11.2021"}
            title={"Visita El Espino"}
            description={
              "Hoy visitamos el espino con la ayuda de fundacion mano amiga"
            }
            image={"/jXev1.jpeg"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
