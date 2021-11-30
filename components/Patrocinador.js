import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Patrocinador({patrocinador}) {

  const { image, name, link } = patrocinador
  
  // console.log(link);

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Link href={link}>
        <a>
          <div className="relative">
            <Image
              className="cursor-pointer "
              src={image ? image.asset.url : '/logocircleups.png'}
              alt=""
              width="100"
              height="100"
            />
            {/* <h3 className="font-semibold">{name}</h3> */}
          </div>
        </a>
      </Link>
    </div>
  );
}
