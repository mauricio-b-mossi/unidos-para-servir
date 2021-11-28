import React from "react";
import Link from "next/link";
import Nav from "../../components/Nav";

export default function index({visitas}) {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
const visitasQuery = `*[_type == "visitas"]{
 title, description, publishedAt, body, mainImage{asset->{_id, url}}, slug
  }
  `;
   return {
     props: {
       visitas,
     },
   };

 }
