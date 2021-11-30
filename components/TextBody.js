import React from "react";

export default function TextBody({title, description, heading}) {
  return (
    <div className="flex justify-center items-center col-span-2 lg:col-span-1">
      <div className="relative flex-col justify-center items-center space-y-8">
        <div className="absolute top-0 left-2 text-blue-700 uppercase">
          {heading}
        </div>
        {/* Title */}

        <div className="flex-col text-2xl sm:text-3xl 2xl:text-5xl font-serif font-semibold lg:leading-snug">
          <h3 className="max-w-md">{title}</h3>
        </div>

        {/* Description */}
        <div className="text-left max-w-md">
          <p>{description}</p>
        </div>

      </div>
    </div>
  );
}
