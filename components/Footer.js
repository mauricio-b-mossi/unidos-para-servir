import React from "react";
import FooterLinkItem from "./FooterLinkItem";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-main-blue p-6 md:p-8 lg:p-10 text-white ">
      <div className="flex flex-col items-center justify-between space-y-4">
        {/* <div className="flex flex-col justify-start ">
          <h3 className="border-l-2 font-semibold tracking-wide pl-2 text-lg mb-2">
            Quick links
          </h3>
          <FooterLinkItem href={"#Top"} name={"Top"} />
          <FooterLinkItem href={"#ayuda"} name={"Como puedes ayudar"} />
          <FooterLinkItem href={"#mision-y-vision"} name={"Misión y visión"} />
          <FooterLinkItem href={"#donaciones"} name={"Con tus donaciones"} />
          <FooterLinkItem href={"#visitas"} name={"Visitas"} />
          <FooterLinkItem href={"#quienes-somos"} name={"¿Quienes somos?"} />
          <FooterLinkItem href={"#fundadores"} name={"Fundadores"} />
          <FooterLinkItem href={"#voluntarios"} name={"Voluntarios"} />
          <FooterLinkItem href={"#patrocinadores"} name={"Patrocinadores"} />
        </div> */}
        <div className="flex flex-col justify-end items-center">
          <div className="flex justify-between items-center gap-4">
            <Link href={"https://www.instagram.com/unidosparaservir.sv/"}>
              <a>
                <Image
                  className="transform duration-150 ease-in-out hover:scale-75"
                  src="/instaTransparent.png"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  className="transform duration-150 ease-in-out hover:rotate-12"
                  src="/logoups.png"
                  width={200}
                  height={100}
                />
              </a>
            </Link>

            <Link href={"mailto:unidosparaservirsv@gmail.com"}>
              <a>
                <Image
                  className="transform duration-150 ease-in-out hover:scale-75"
                  src="/gmailTransparent.png"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
          </div>
        </div>
        <p className="text-sm font-thin">
          © All rights Reserved. Unidos Para Servir.
        </p>
      </div>
    </div>
  );
}
