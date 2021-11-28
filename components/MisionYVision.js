import React from 'react'
import Image from 'next/image'
import TextBody from "./TextBody";


export default function MisionYVision() {
    return (
      <div className="flex justify-center items-center h-auto w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center min-h-screen max-w-7xl gap-4 pt-12 border-t-2">
          {/* Text */}
          <TextBody
            heading={"NUESTRA MISIÓN Y VISIÓN"}
            title={"“No esperemos que algo cambie, hagamos el cambio nosotros”"}
            description={
              "Ser agentes de cambio en estos momentos de dificultad. Además, evangelizar, crecer en virtudes y ayudar a los mas necesitados con nuestras distinciones e inspiraciones. Crear conciencia en nosotros y en quienes nos rodean que, con nuestros valores, habilidades y principios, todos podemos ayudar a los demás y encontrar en esto la felicidad."
            }
          />
          {/* Image */}
          <div className="flex flex-col justify-center items-center col-span-2 lg:col-span-1">
            <Image src="/jXe.jpeg" width={600} height={450} />
          </div>
        </div>
      </div>
    );
}
