import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Patrocinador({patrocinador}) {

  const {image, name, link} = patrocinador
  return (
    <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center text-center">
      <Link href={link}>
        <a>
          <div className="w-40 h-40 md:w-52 md:h-52 relative">
            <Image
              className="cursor-pointer "
              src={image.asset.url}
              alt=""
              width="150"
              height="150"
            />
            {/* <h3 className="font-semibold">{name}</h3> */}
          </div>
        </a>
      </Link>
    </div>
  );
}
