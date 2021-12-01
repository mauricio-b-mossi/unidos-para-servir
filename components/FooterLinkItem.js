import React from "react";

export default function FooterLinkItem({ href, name }) {
  return (
    <a
      className="flex  justify-start items-center  transform duration-150 ease-in-out hover:translate-x-2"
      href={href}
    >
      <span className="text-lg">»</span>
      <p className="pl-2 font-medium">{name}</p>
    </a>
  );
}
