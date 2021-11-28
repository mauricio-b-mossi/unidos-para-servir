import React from "react";

export default function TextStacked({title, description, heading}) {
  return (
    <div className="flex justify-center items-center col-span-2 lg:col-span-1">
      <div className="relative flex-col justify-center items-center space-y-8">
        <div className="hidden lg:block absolute top-0 left-2 text-blue-700 uppercase">
          {heading}
        </div>
        {/* Title */}
        <div className="hidden lg:block flex-col text-3xl 2xl:text-5xl font-serif font-semibold lg:leading-snug">
          <h3 className="max-w-md">{title}</h3>
        </div>

        {/* Description */}
        <div className="flex flex-col max-w-md justify-center items-center text-center space-y-4 sm:text-md lg:text-lg">
          <p>{description}</p>
          <div className="flex text-blue-500 font-semibold text-sm lg:text-lg text-center hover:text-red-500">
            + Dona Aqui
          </div>
        </div>

        <div className="flex flex-col max-w-md justify-center items-center text-center space-y-4 sm:text-md lg:text-lg">
          <p>{description}</p>
          <div className="flex text-blue-500 font-semibold text-sm lg:text-lg text-center hover:text-red-500">
            + Se Parte
          </div>
        </div>
      </div>
    </div>
  );
}
