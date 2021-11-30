import React from 'react'
import Image from 'next/image';

export default function FondosItem({ item }) {
    
    const { image, amount, description } = item

    return (
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col  rounded-xl p-4 justify-center items-center">
          <Image
            src={image ? image.asset.url : "/family.png"}
            width={80}
            height={80}
          />
          <h3 className="text-2xl sm:text-4xl  font-black ">
            <span className="text-xl sm:text-2xl"></span>
                    {amount ? amount : 2000}
          </h3>
                <p className="text-sm sm:text-base pt-2 leading-tight text-center">
                    {description ? description : "Have been raised in donations."}
          </p>
        </div>
      </div>
    );
}
