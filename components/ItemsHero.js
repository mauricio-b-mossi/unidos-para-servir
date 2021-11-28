import React from 'react'
import Image from 'next/image'

export default function ItemsHero() {
    return (
      <div className="hidden lg:flex justify-center items-center h-full w-full col-span-2">
        <div className="flex max-w-7xl justify-between lg:justify-center items-center gap-16 ">
          <div className="flex flex-col space-y-4">
            <div className="h-12 w-12 lg:h-auto lg:w-auto ">
              <Image
                className="rounded-full"
                src="/puno.jpg"
                width={75}
                height={75}
              />
              <h3 className="font-semibold font-serif text-main-blue hover:underline text-sm lg:text-md">
                Lorem Ipsum
              </h3>
            </div>
            <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              nisi.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="h-12 w-12 lg:h-auto lg:w-auto ">
              <Image
                className="rounded-full"
                src="/flex.jpg"
                width={75}
                height={75}
              />
              <h3 className="font-semibold font-serif text-main-blue hover:underline text-sm lg:text-md">
                Lorem Ipsum
              </h3>
            </div>
            <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              nisi.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="h-12 w-12 lg:h-auto lg:w-auto ">
              <Image
                className="rounded-full"
                src="/vision.jpg"
                width={75}
                height={75}
              />
              <h3 className="font-semibold font-serif text-main-blue hover:underline text-sm lg:text-md">
                Lorem Ipsum
              </h3>
            </div>
            <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              nisi.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="h-12 w-12 lg:h-auto lg:w-auto ">
              <Image
                className="rounded-full"
                src="/mision.jpg"
                width={75}
                height={75}
              />
              <h3 className="font-semibold font-serif text-main-blue hover:underline text-sm lg:text-md">
                Lorem Ipsum
              </h3>
            </div>
            <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              nisi.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="h-12 w-12 lg:h-auto lg:w-auto ">
              <Image
                className="rounded-full"
                src="/quienessomos.jpg"
                width={75}
                height={75}
              />
              <h3 className="font-semibold font-serif text-main-blue hover:underline text-sm lg:text-md">
                Lorem Ipsum
              </h3>
            </div>
            <p className="hidden lg:block text-xs lg:leading-5 lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              nisi.
            </p>
          </div>
        </div>
      </div>
    );
}
