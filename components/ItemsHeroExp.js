import React from 'react'
import Image from "next/image";
import Item from './Item';
import ItemExp from './ItemExp';

export default function ItemsHeroExp({ items, link }) {
  
  
    return (
      <div className="flex justify-center items-center h-full w-full col-span-2">
        <div className="flex w-96 lg:w-auto max-w-7xl justify-center items-start space-x-2 sm:space-x-4 md:gap-4 lg:gap-16 ">
          {items &&
            items.map((item, index) => (
              <ItemExp item={item} key={index} />
              // <Item item={item} key={index} />
            ))}
        </div>
      </div>
    );
}
