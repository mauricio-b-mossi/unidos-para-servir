import React from 'react'
import Image from 'next/image'
import TextBody from "./TextBody";
import TextStacked from './TextStacked';

export default function Ayudar({ ayuda }) {
  
  const { title, dona, linkdona, parte, linkparte, mainImage } = ayuda
  
    return (
      <div id='ayudar' className="flex justify-center items-center h-auto w-full p-4 sm:p-6 md:p-8 lg:p-10  ">
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center min-h-screen max-w-7xl  gap-4 pt-12 border-t-2">
          {/* Image */}
          <div className="col-span-2  lg:col-span-1">
            <div className='lg:hidden'>
              <div className="text-blue-700 uppercase">
                NECESITAMOS TU AYUDA
              </div>
              {/* Title */}
              <div className="flex-col text-2xl md:text-3xl 2xl:text-5xl font-serif font-semibold lg:leading-snug">
                <h3 className="max-w-md">{ title }</h3>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-4">
              <Image src={mainImage.asset.url} width={600} height={450} />
            </div>
          </div>
          {/* Text */}
          <TextStacked
            heading={"NECESITAMOS TU AYUDA"}
            title={title}
            dona={dona}
            linkdona={linkdona }
            parte={parte}
            linkparte={linkparte}
          />
        </div>
      </div>
    );
}
