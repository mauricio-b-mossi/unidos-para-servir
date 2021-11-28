import React from "react";
import Image from "next/image";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function QuienesSomos() {
  return (
    <div  className="flex justify-center items-center min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col justify-center items-center h-full max-w-7xl border-t-2 space-y-20">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
            <h3 className="max-w-md text-center">¿Quienes somos?</h3>
          </div>
          <div className="max-w-xl text-center">
            <p>
              Somos una iniciativa de jóvenes sin fines de lucro que busca
              apoyar, por medio de víveres y convivo, a la comunidad El Espino,
              localizada en Usulután. Contamos con la ayuda de la fundación Una
              Mano Amiga, la cual provee un espacio para que puedas donar y así
              ayudarnos a cambiar la vida de esta comunidad.
            </p>
          </div>
        </div>

        {/* Map */}

        <iframe
          className="md:hidden"
          width="280"
          height="280"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=comunidad%20asuncion&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <iframe
          className="hidden md:block"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=comunidad%20asuncion&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}
