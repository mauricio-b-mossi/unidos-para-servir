import React from "react";
import Image from "next/image";

export default function NuestrasVisitas() {
  return (
    <div className="flex justify-center items-center min-h-screen  w-full p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col justify-center items-center h-full max-w-7xl border-t-2 space-y-20">
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
          <s className="relative col-span-3 md:col-span-1">
            <Image src="/jXev1.jpeg" width={600} height={600} />
            <div className="flex flex-col justify-center items-center absolute inset-0 bg-main-blue opacity-0 transition ease-in-out hover:opacity-100 text-white font-bold text-2xl oldstyle-nums p-8 space-y-2">
              <h3>01.11.2021</h3>
              <h3>Visita El Espino</h3>
              <p className="text-xs text-center">
                Hoy visitamos el espino con la ayuda de fundacion mano amiga
              </p>
            </div>
          </s>
          <s className="relative col-span-3 md:col-span-1">
            <Image src="/jXev1.jpeg" width={600} height={600} />
            <div className="flex flex-col justify-center items-center absolute inset-0 bg-main-blue opacity-0 transition ease-in-out hover:opacity-100 text-white font-bold text-2xl oldstyle-nums p-8 space-y-2">
              <h3>01.11.2021</h3>
              <h3>Visita El Espino</h3>
              <p className="text-xs text-center">
                Hoy visitamos el espino con la ayuda de fundacion mano amiga
              </p>
            </div>
          </s>
          <s className="relative col-span-3 md:col-span-1">
            <Image src="/jXev1.jpeg" width={600} height={600} />
            <div className="flex flex-col justify-center items-center absolute inset-0 bg-main-blue opacity-0 transition ease-in-out hover:opacity-100 text-white font-bold text-2xl oldstyle-nums p-8 space-y-2">
              <h3>01.11.2021</h3>
              <h3>Visita El Espino</h3>
              <p className="text-xs text-center">
                Hoy visitamos el espino con la ayuda de fundacion mano amiga
              </p>
            </div>
          </s>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="px-6 py-2 bg-white text-main-blue border-2 border-main-blue rounded-lg font-bold hover:bg-main-blue hover:text-white">
            <h3>Ver todas las visitas</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
