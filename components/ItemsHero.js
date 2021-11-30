import React from 'react'
import Image from "next/image";
import Item from './Item';

export default function ItemsHero({ items, link }) {
  
  
    return (
      <div className="hidden lg:flex justify-center items-center h-full w-full col-span-2">
        <div className="flex max-w-7xl justify-between lg:justify-center items-center gap-16 ">
          {items &&
            items.map((item, index) => (
              <Item item={item} key={index} />
            ))} 
        </div>
      </div>
    );
}
