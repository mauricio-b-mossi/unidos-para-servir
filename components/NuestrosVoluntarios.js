import React from 'react'
import Image from 'next/image'

export default function NuestrosVoluntarios({nuestrosVoluntarios}) {

    const{title, description, voluntarios} = nuestrosVoluntarios
  
  return (
    <div id='voluntarios' className="flex justify-center items-center h-auto  w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col justify-center items-center  max-w-7xl space-y-10 lg:space-y-20 border-t-2">
        {/* Title */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex-col text-3xl lg:text-5xl font-serif font-semibold leading-snug pt-12">
            <h3 className="flex max-w-xl text-center">
              {title ? title : "Nuestros Voluntarios"}
            </h3>
          </div>
          {/* <div className="flex justify-center items-center max-w-md text-center"> */}
            {/* <div className="flex -space-x-1 overflow-hidden">
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={50}
                height={50}
              />
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={50}
                height={50}
              />
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
                width={50}
                height={50}
              />
              <Image
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                width={50}
                height={50}
              />
            </div> */}
          {/* </div> */}
        </div>

              <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 max-w-xs sm:max-w-sm lg:max-w-7xl font-semibold">
                  {voluntarios.map((voluntario, index) => (
                      <p className="transform transition duration-150 hover:scale-75 hover:rotate-6 ${}" key={index}>{ voluntario}</p>
                  ))}

        </div>
      </div>
    </div>
  );
}
