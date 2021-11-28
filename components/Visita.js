import React from 'react'
import Image from 'next/image';

export default function Visita({date, title, description, image}) {
    return (
      <div className="relative col-span-3 md:col-span-1">
            <Image src={ image } width={600} height={600} />
        <div className="flex flex-col justify-center items-center absolute inset-0 bg-main-blue opacity-0 transition ease-in-out hover:opacity-100 text-white font-bold text-2xl oldstyle-nums p-8 space-y-2">
                <h3>{ date}</h3>
                <h3>{ title }</h3>
          <p className="text-xs text-center">
            {description}
          </p>
        </div>
      </div>
    );
}
