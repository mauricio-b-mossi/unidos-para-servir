import React from "react";
import Image from "next/image";
import Donate from "./Donate";
import Link from "next/link";

export default function Nav() {

  return (
    <div className="flex justify-between items-center w-full">
      {/* Logo and items div */}
      <div className="flex justify-center items-center space-x-12">
        {/* Image */}
        <Link href="/">
          <a>
            <div className="flex justify-center items-center space-x-4">
              <Image src="/dummylogo.png" width={50} height={50} />
              <div className="flex-col font-bold uppercase leading-4 ">
                <h4>unidos</h4>
                <h4>para</h4>
                <h4>servir</h4>
              </div>
            </div>
          </a>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex space-x-12 font-semibold">
          <p>About Us</p>
          <p>Discover</p>
          <p>Whom we help</p>
          <p>Quienes Somos</p>
        </div>
      </div>

      {/* Donate button div */}
      <Donate />
    </div>
  );
}
