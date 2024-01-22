"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ModalRequest from "./ModalRequest";

const Footer = () => {
  const [openModalRequest, setOpenModalRequest] = useState(false);

  const firstLinks = [
    { name: "Home", link: "/" },
    { name: "Solutions", link: "/solutions" },
    { name: "About us", link: "/about" },
  ];
  const secondLinks = [
    { name: "For auditors", link: "/auditors" },
    { name: "Consulting", link: "/consulting" },
    { name: "Blog", link: "/blog" },
  ];

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <footer className="bg-[#131D2A] text-white lg:px-[78px] pt-[93px] pb-[92px] px-6 flex-center md:flex-between flex-wrap gap-0 md:gap-[85px] flex-col-reverse md:flex-row">
      <Image src="logo.svg" width={122} height={36} alt="logo" />
      <div className="flex-1 flex-center md:justify-between gap-8 flex-wrap">
        <div className="flex items-center gap-[85px] flex-wrap">
          <ul className="flex flex-col gap-3 leading-[20px]">
            {firstLinks.map((link) => {
              return (
                <div
                  key={link.link}
                  className="relative inline-block text-white"
                >
                  <Link href={link.link} legacyBehavior>
                    <a className="group">
                      {link.name}
                      <span className="absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span>
                    </a>
                  </Link>
                </div>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-3 leading-[20px]">
            {secondLinks.map((link) => {
              return (
                <div
                  key={link.link}
                  className="relative inline-block text-white"
                >
                  <Link href={link.link} legacyBehavior>
                    <a className="group">
                      {link.name}
                      <span className="absolute w-full h-1 bg-white bottom-0 left-0 transform scale-x-0 transition-transform origin-bottom-right duration-350 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></span>
                    </a>
                  </Link>
                </div>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-3 uppercase text-[#53D3AA]">watch instructions</ul>
        </div>
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={handleModal}
        >
          <Image
            src="/icons/card-icon.svg"
            width={31}
            height={23}
            alt="menu"
            className="cursor-pointer"
          />
          <h2 className="font-normal text-primary">Request demo</h2>
        </div>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </footer>
  );
};

export default Footer;
