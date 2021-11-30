import React from "react";
import Link from "next/link";

export default function TextStacked({
  title,
  dona,
  linkdona,
  parte,
  linkparte,
  heading,
}) {
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
          <p>{dona}</p>
          <div className="flex text-blue-500 font-semibold text-sm lg:text-lg text-center hover:text-red-500">
            <Link
              href={
                linkdona
                  ? linkdona
                  : "https://www.instagram.com/unidosparaservir.sv/"
              }
            >
              <a>+ Dona Aqui</a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col max-w-md justify-center items-center text-center space-y-4 sm:text-md lg:text-lg">
          <p>{parte}</p>
          <div className="flex text-blue-500 font-semibold text-sm lg:text-lg text-center hover:text-red-500">
            <Link
              href={
                linkparte
                  ? linkparte
                  : "https://www.instagram.com/unidosparaservir.sv/"
              }
            >
              <a>+ Se Parte</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
