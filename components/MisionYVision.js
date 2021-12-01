import React from "react";
import Image from "next/image";
import TextBody from "./TextBody";

export default function MisionYVision({ misionYvision }) {


  const { quote, body, mainImage } = misionYvision
 
  return (
    <div id='mision-y-vision' className="flex justify-center items-center h-auto w-full p-4 sm:p-6 md:p-8 lg:p-10 ">
      <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center min-h-screen max-w-7xl gap-4 pt-12 border-t-2">
        {/* Text */}
        <TextBody
          heading={"NUESTRA MISIÓN Y VISIÓN"}
          title={quote}
          description={body}
        />
        <div className="flex flex-col justify-center items-center col-span-2 lg:col-span-1">
          <Image src={mainImage.asset.url} width={600} height={450} />
        </div>
      </div>
    </div>
  );
}
