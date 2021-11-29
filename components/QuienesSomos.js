import React from "react";
import Image from "next/image";

export default function QuienesSomos({ quienesSomos }) {

  const { title, description } = quienesSomos
  
  return (
    <div className="flex justify-center items-center h-auto w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col justify-center items-center min-h-screen max-w-7xl border-t-2 space-y-20">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
            <h3 className="max-w-md text-center">{title}</h3>
          </div>
          <div className="max-w-xl text-center">
            <p>
              {description}
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
